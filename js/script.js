/* ============================================================
         0. KONFIGURASI
         ============================================================ */
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkT9GY_1urlXARUYT23-m53Rh2mSa-L_5Ca-pv5Sdmwfj1vnIoFBAjaDmdrG2c809i-g/exec'; // <-- ganti dengan URL Web App Apps Script Anda
const TOTAL_TIME = 65 * 60; // total waktu quiz dalam detik (65 menit)

/* ============================================================
         2. STATE
         ============================================================ */
let state = null;
let currentAudioEl = null; // elemen <audio> soal yang sedang aktif
let lastRenderedQId = null; // id soal terakhir yang dirender, untuk deteksi pindah soal

function stopQuestionAudio() {
  if (currentAudioEl) {
    try {
      currentAudioEl.pause();
      currentAudioEl.currentTime = 0;
    } catch (e) {
      /* abaikan jika audio belum siap */
    }
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildFreshState(name) {
  const questionsByCategory = {};
  CATEGORIES.forEach((cat, ci) => {
    const shuffledQs = shuffle(QUESTION_BANK[cat]).map((item, qi) => ({
      id: cat + '-' + qi,
      cat,
      catIndex: ci,
      question: item.q,
      options: shuffle(item.options),
      answer: item.answer,
      audio: item.audio,
      image: item.image,
    }));
    questionsByCategory[cat] = shuffledQs;
  });
  return {
    name,
    questionsByCategory,
    currentCatIndex: 0,
    currentQIndex: CATEGORIES.reduce((o, c) => ((o[c] = 0), o), {}),
    answers: {},
    timeLeft: TOTAL_TIME,
    timerId: null,
    submitted: false,
    navOpen: false,
  };
}

function totalQuestions() {
  return CATEGORIES.reduce((sum, c) => sum + QUESTION_BANK[c].length, 0);
}

/* ============================================================
         3. BUBBLE NOTIFICATIONS
         ============================================================ */
const bubbleContainer = document.getElementById('bubble-container');

function showBubble({ type = 'info', icon, message, confirm = false, confirmText = 'Ya, Lanjutkan', cancelText = 'Batal', onConfirm, onCancel, duration = 3800 }) {
  const el = document.createElement('div');
  el.className = 'bubble ' + type;
  const icons = { info: '💬', success: '🎉', warning: '⚠️', error: '⏰' };
  el.innerHTML = `
          <div class="bubble-top">
            <div class="bubble-icon">${icon || icons[type] || '💬'}</div>
            <div class="bubble-msg">${message}</div>
            <button class="bubble-close">✕</button>
          </div>
          ${
            confirm
              ? `<div class="bubble-actions">
              <button class="bubble-cancel">${cancelText}</button>
              <button class="bubble-confirm">${confirmText}</button>
            </div>`
              : ''
          }
        `;
  bubbleContainer.appendChild(el);

  function close() {
    el.classList.add('closing');
    setTimeout(() => el.remove(), 240);
  }
  el.querySelector('.bubble-close').onclick = () => {
    close();
    if (confirm && onCancel) onCancel();
  };

  if (confirm) {
    el.querySelector('.bubble-confirm').onclick = () => {
      close();
      onConfirm && onConfirm();
    };
    el.querySelector('.bubble-cancel').onclick = () => {
      close();
      onCancel && onCancel();
    };
  } else {
    setTimeout(close, duration);
  }
  return el;
}

/* ============================================================
         4. VIEWPORT HEIGHT FIX (mobile browser chrome)
         ============================================================ */
function setVH() {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
}
setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);

/* ============================================================
         5. SCREEN NAVIGATION
         ============================================================ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

/* ============================================================
         6. START QUIZ
         ============================================================ */
document.getElementById('btn-start').addEventListener('click', () => {
  const nameInput = document.getElementById('input-name');
  const name = nameInput.value.trim();
  if (!name) {
    showBubble({ type: 'warning', message: 'Yuk, isi namamu dulu sebelum memulai petualangan kosakata ini! ✍️' });
    nameInput.focus();
    return;
  }
  state = buildFreshState(name);
  document.getElementById('quiz-username').textContent = name;
  renderTabs();
  renderQuestion();
  startTimer();
  showScreen('screen-quiz');
  showBubble({ type: 'success', icon: '🎌', message: `Selamat datang, <b>${escapeHtml(name)}</b>! Soal sudah diacak khusus untukmu. Semangat mengerjakan!` });
});

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
}

/* ============================================================
         7. TIMER
         ============================================================ */
const TIMER_R = 24,
  TIMER_CIRC = 2 * Math.PI * TIMER_R;
function startTimer() {
  const bar = document.getElementById('timer-bar');
  bar.style.strokeDasharray = TIMER_CIRC;
  updateTimerDisplay();
  state.timerId = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      autoSubmitOnTimeout();
    }
  }, 1000);
}
function updateTimerDisplay() {
  const bar = document.getElementById('timer-bar');
  const txt = document.getElementById('timer-text');
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  txt.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  const frac = Math.max(0, state.timeLeft / TOTAL_TIME);
  bar.style.strokeDashoffset = TIMER_CIRC * (1 - frac);
  bar.classList.toggle('low', state.timeLeft <= 60);
}

/* ============================================================
         8. RENDER: TABS
         ============================================================ */
function renderTabs() {
  const wrap = document.getElementById('tabs');
  wrap.innerHTML = '';
  CATEGORIES.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === state.currentCatIndex ? ' active' : '');
    const answeredInCat = QUESTION_BANK[cat].filter((_, qi) => state.answers[cat + '-' + qi] !== undefined).length;
    btn.innerHTML = `${CATEGORY_META[cat].icon} ${cat} ${answeredInCat > 0 ? `<span class="tab-dot"></span>` : ''}`;
    btn.onclick = () => {
      state.currentCatIndex = i;
      renderTabs();
      renderQuestion();
      closeNumGrid();
    };
    wrap.appendChild(btn);
  });
}

/* ============================================================
         9. RENDER: QUESTION
         ============================================================ */
function currentCategory() {
  return CATEGORIES[state.currentCatIndex];
}
function currentQuestion() {
  const cat = currentCategory();
  return state.questionsByCategory[cat][state.currentQIndex[cat]];
}

function renderQuestion() {
  const cat = currentCategory();
  const qList = state.questionsByCategory[cat];
  const qi = state.currentQIndex[cat];
  const q = qList[qi];
  const isNewQuestion = q.id !== lastRenderedQId;

  // Hentikan audio soal sebelumnya sebelum merender apa pun (baik karena
  // pindah soal maupun karena user baru saja memilih sebuah opsi).
  stopQuestionAudio();
  currentAudioEl = null;

  document.getElementById('q-cat-icon').textContent = CATEGORY_META[cat].icon;
  document.getElementById('q-cat-label').textContent = cat.toUpperCase();
  document.getElementById('q-index-label').textContent = `${qi + 1}/${qList.length}`;
  document.getElementById('q-text').innerHTML = q.question;

  // Render media (gambar dan/atau audio) jika soal memilikinya.
  // File gambar diambil dari folder images/, file audio dari folder audio/.
  const mediaWrap = document.getElementById('q-media');
  let mediaHtml = '';
  if (q.image) {
    mediaHtml += `<img class="q-image" src="images/${q.image}" alt="Gambar soal" loading="lazy" />`;
  }
  if (q.audio) {
    mediaHtml += `
            <div class="q-audio-wrap">
              <span class="q-audio-hint">🎧 Putar audio, lalu pilih jawaban yang tepat</span>
              <audio id="quiz-audio" controls preload="auto">
                <source src="audio/${q.audio}" type="audio/mpeg" />
                Browser Anda tidak mendukung pemutaran audio.
              </audio>
            </div>`;
  }
  mediaWrap.innerHTML = mediaHtml;

  if (q.audio) {
    currentAudioEl = document.getElementById('quiz-audio');
    // Putar otomatis hanya saat benar-benar pindah ke soal baru, bukan saat
    // re-render akibat memilih opsi jawaban pada soal yang sama.
    if (isNewQuestion && currentAudioEl) {
      currentAudioEl.play().catch(() => {
        /* autoplay bisa diblokir browser; user tetap bisa menekan tombol play manual */
      });
    }
  }

  const optWrap = document.getElementById('options-wrap');
  optWrap.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.options.forEach((opt, idx) => {
    const b = document.createElement('button');
    const selected = state.answers[q.id] === opt;
    b.className = 'option-btn' + (selected ? ' selected' : '');
    b.innerHTML = `<span class="letter">${letters[idx]}</span><span>${opt}</span>`;
    b.onclick = () => {
      stopQuestionAudio(); // soal dijawab -> audio langsung berhenti
      state.answers[q.id] = opt;
      renderQuestion();
      renderNumGrid();
      renderTabs();
      updateProgress();
    };
    optWrap.appendChild(b);
  });

  document.getElementById('btn-back').disabled = state.currentCatIndex === 0 && qi === 0;
  const isVeryLast = state.currentCatIndex === CATEGORIES.length - 1 && qi === qList.length - 1;
  document.getElementById('btn-next').textContent = isVeryLast ? 'Soal Terakhir ✓' : 'Lanjut →';
  document.getElementById('btn-next').disabled = isVeryLast;

  lastRenderedQId = q.id;
  renderNumGrid();
  updateProgress();
}

function updateProgress() {
  const total = totalQuestions();
  const answered = Object.keys(state.answers).length;
  document.getElementById('progress-fill').style.width = (answered / total) * 100 + '%';
  document.getElementById('progress-text').textContent = `Terjawab ${answered}/${total}`;
}

/* ============================================================
         10. RENDER: NUMBER NAV GRID (hide/show)
         ============================================================ */
document.getElementById('toggle-nums').addEventListener('click', () => {
  state.navOpen = !state.navOpen;
  document.getElementById('num-grid').classList.toggle('open', state.navOpen);
  document.getElementById('toggle-icon').textContent = state.navOpen ? '▴' : '▾';
});
function closeNumGrid() {
  state.navOpen = false;
  document.getElementById('num-grid').classList.remove('open');
  document.getElementById('toggle-icon').textContent = '▾';
}
function renderNumGrid() {
  const cat = currentCategory();
  const qList = state.questionsByCategory[cat];
  const curIdx = state.currentQIndex[cat];
  const grid = document.getElementById('num-grid');
  grid.innerHTML = '';
  qList.forEach((q, i) => {
    const cell = document.createElement('button');
    const answered = state.answers[q.id] !== undefined;
    cell.className = 'num-cell' + (answered ? ' answered' : '') + (i === curIdx ? ' current' : '');
    cell.textContent = i + 1;
    cell.onclick = () => {
      state.currentQIndex[cat] = i;
      renderQuestion();
    };
    grid.appendChild(cell);
  });
}

/* ============================================================
         11. BACK / NEXT NAVIGATION
         ============================================================ */
document.getElementById('btn-next').addEventListener('click', () => {
  const cat = currentCategory();
  const qList = state.questionsByCategory[cat];
  let qi = state.currentQIndex[cat];
  if (qi < qList.length - 1) {
    state.currentQIndex[cat] = qi + 1;
  } else if (state.currentCatIndex < CATEGORIES.length - 1) {
    state.currentCatIndex++;
  }
  renderTabs();
  renderQuestion();
});
document.getElementById('btn-back').addEventListener('click', () => {
  const cat = currentCategory();
  let qi = state.currentQIndex[cat];
  if (qi > 0) {
    state.currentQIndex[cat] = qi - 1;
  } else if (state.currentCatIndex > 0) {
    state.currentCatIndex--;
    const prevCat = currentCategory();
    state.currentQIndex[prevCat] = state.questionsByCategory[prevCat].length - 1;
  }
  renderTabs();
  renderQuestion();
});

/* ============================================================
         12. SUBMIT FLOW
         ============================================================ */
document.getElementById('btn-submit').addEventListener('click', () => {
  const total = totalQuestions();
  const answered = Object.keys(state.answers).length;
  const unanswered = total - answered;

  if (unanswered > 0) {
    showBubble({
      type: 'warning',
      confirm: true,
      message: `Masih ada <b>${unanswered} soal</b> yang belum kamu jawab. Yakin ingin mengirim jawaban sekarang?`,
      confirmText: 'Kirim Sekarang',
      cancelText: 'Lanjutkan Mengerjakan',
      onConfirm: () => submitQuiz(false),
    });
  } else {
    showBubble({
      type: 'info',
      confirm: true,
      icon: '📮',
      message: `Semua ${total} soal sudah terjawab! Yakin ingin mengirim jawaban final kamu?`,
      confirmText: 'Ya, Kirim!',
      cancelText: 'Periksa Lagi',
      onConfirm: () => submitQuiz(false),
    });
  }
});

function autoSubmitOnTimeout() {
  showBubble({
    type: 'error',
    icon: '⏰',
    message: 'Waktu habis! Jawabanmu otomatis dikirim ke sistem sekarang.',
    duration: 5000,
  });
  submitQuiz(true);
}

function computeResults() {
  let correct = 0;
  const perCategory = {};
  const detail = [];
  CATEGORIES.forEach((cat) => {
    let catCorrect = 0;
    const qList = state.questionsByCategory[cat];
    qList.forEach((q, i) => {
      const userAns = state.answers[q.id];
      const isCorrect = userAns === q.answer;
      if (isCorrect) {
        correct++;
        catCorrect++;
      }
      detail.push({ cat, num: i + 1, question: q.question, userAns, correctAns: q.answer, isCorrect, answered: userAns !== undefined });
    });
    perCategory[cat] = { correct: catCorrect, total: qList.length };
  });
  return { correct, total: totalQuestions(), perCategory, detail };
}

function submitQuiz(timeUp) {
  if (state.submitted) return;
  state.submitted = true;
  stopQuestionAudio();
  clearInterval(state.timerId);

  const results = computeResults();
  renderResult(results, timeUp);
  sendToGoogleSheets(results, timeUp);
  showScreen('screen-result');

  if (!timeUp) {
    showBubble({ type: 'success', icon: '🎉', message: `Jawaban berhasil dikirim! Berikut hasil quiz kosakata Jepangmu, ${escapeHtml(state.name)}.` });
  }
}

function sendToGoogleSheets(results, timeUp) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('PASTE_URL')) {
    console.warn('GOOGLE_SCRIPT_URL belum diatur — hasil tidak dikirim ke Google Sheets.');
    return;
  }
  const persen = Math.round((results.correct / results.total) * 100);
  const body = new URLSearchParams({
    nama: state.name,
    skor: results.correct,
    total: results.total,
    persen: persen + '%',
    kosakata: `${results.perCategory['Kosakata'].correct}/${results.perCategory['Kosakata'].total}`,
    tatabahasa: `${results.perCategory['Tatabahasa'].correct}/${results.perCategory['Tatabahasa'].total}`,
    pendengaran: `${results.perCategory['Pendengaran'].correct}/${results.perCategory['Pendengaran'].total}`,
    bacaan: `${results.perCategory['Bacaan'].correct}/${results.perCategory['Bacaan'].total}`,
    waktuHabis: timeUp ? 'Ya' : 'Tidak',
    detail: JSON.stringify(results.detail),
  });

  fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body }).catch((err) => {
    console.error('Gagal mengirim ke Google Sheets:', err);
    showBubble({ type: 'error', message: 'Gagal terhubung ke server saat mengirim hasil. Periksa koneksi internetmu.' });
  });
}

/* ============================================================
         13. RENDER RESULT SCREEN
         ============================================================ */
function renderResult(results, timeUp) {
  const persen = Math.round((results.correct / results.total) * 100);
  document.getElementById('score-num').textContent = persen + '%';
  document.getElementById('score-frac').textContent = `${results.correct}/${results.total} Benar`;
  document.getElementById('score-ring').style.background = `conic-gradient(var(--primary-2) 0% ${persen}%, #e7f0ff ${persen}% 100%)`;
  document.getElementById('result-name').textContent = state.name;

  let msg;
  if (timeUp) msg = '⏰ Waktu habis — jawaban dikirim otomatis.';
  else if (persen >= 85) msg = '🌟 Luar biasa! Kosakatamu sangat kuat!';
  else if (persen >= 60) msg = '👏 Bagus! Terus berlatih ya!';
  else msg = '💪 Jangan menyerah, coba lagi untuk hasil lebih baik!';
  document.getElementById('result-msg').textContent = msg;

  const catWrap = document.getElementById('cat-breakdown');
  catWrap.innerHTML = '';
  CATEGORIES.forEach((cat) => {
    const c = results.perCategory[cat];
    const pct = Math.round((c.correct / c.total) * 100);
    const row = document.createElement('div');
    row.className = 'cat-row';
    row.innerHTML = `
            <div class="cat-row-top"><span>${CATEGORY_META[cat].icon} ${cat}</span><span>${c.correct}/${c.total}</span></div>
            <div class="cat-bar"><div class="cat-bar-fill" style="width:${pct}%"></div></div>
          `;
    catWrap.appendChild(row);
  });

  const panel = document.getElementById('review-panel');
  panel.innerHTML = '';
  results.detail.forEach((item) => {
    const mark = !item.answered ? '<span class="mark-empty">– Tidak dijawab</span>' : item.isCorrect ? '<span class="mark-correct">✓ Benar</span>' : '<span class="mark-wrong">✕ Salah</span>';
    const line = document.createElement('div');
    line.className = 'review-text-line';
    let html = `<b>${item.num}. ${item.question}</b><br>`;
    html += `Jawabanmu: ${item.answered ? item.userAns : '<i>-</i>'} — ${mark}`;
    if (!item.isCorrect) {
      html += `<br>Jawaban benar: <span class="ans-correct">${item.correctAns}</span>`;
    }
    line.innerHTML = html;
    panel.appendChild(line);
  });

  // Panel disembunyikan lagi setiap kali hasil baru dirender
  panel.classList.remove('open');
  const toggleBtn = document.getElementById('review-toggle-btn');
  toggleBtn.classList.remove('open');
  document.getElementById('review-toggle-label').textContent = '📋 Tampilkan Review Jawaban LOCKED';
}

/* ---- Toggle show/hide panel review (tombol tunggal) ---- 
document.getElementById('review-toggle-btn').addEventListener('click', function () {
  const panel = document.getElementById('review-panel');
  const isOpen = panel.classList.toggle('open');
  this.classList.toggle('open', isOpen);
  document.getElementById('review-toggle-label').textContent = isOpen ? '🙈 Sembunyikan Review Jawaban' : '📋 Tampilkan Review Jawaban';
});
*/
/* ============================================================
         14. RESTART
         ============================================================ */
document.getElementById('btn-restart').addEventListener('click', () => {
  stopQuestionAudio();
  document.getElementById('input-name').value = '';
  showScreen('screen-start');
  showBubble({ type: 'info', icon: '🔄', message: 'Siap untuk babak baru? Soal akan diacak ulang setiap kali kamu memulai!' });
});
