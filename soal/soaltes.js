/* ============================================================
               1. BANK SOAL
               ============================================================ */
const CATEGORY_META = {
  Kosakata: { icon: '📚' },
  Tatabahasa: { icon: '📝' },
  Pendengaran: { icon: '🎧' },
  Bacaan: { icon: '📖' },
};

const QUESTION_BANK = {
  Kosakata: [
    {
      q: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>元気<rt>げんき</rt></ruby>ではありませんね。どうしましたか。<br/>……いいえ、<ruby>体<rt>からだ</rt></ruby>の<ruby>調子<rt>ちょうし</rt></ruby>が＿＿＿＿<ruby>悪<rt>わる</rt></ruby>いです。',
      options: ['とても', '少し', 'いつも', 'まだ', 'まず'],
      answer: '少し',
    },
    {
      q: 'テストは＿＿＿＿<ruby>始<rt>はじ</rt></ruby>まりませんか。<br/>はい、あと5<ruby>分<rt>ふん</rt></ruby>くらい<ruby>待<rt>ま</rt></ruby>ってください。',
      options: ['ぜんぜん', 'だいたい', 'まだ', 'しっかり', 'しばらく'],
      answer: 'まだ',
    },
    {
      q: '<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るとき、＿＿＿＿<ruby>手<rt>て</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>ってください。',
      options: ['たぶん', 'ゆっくり', 'まず', 'すぐ', 'たまに'],
      answer: 'まず',
    },
    {
      q: '<ruby>明日<rt>あした</rt></ruby>は＿＿＿＿<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るでしょう。<ruby>傘<rt>かさ</rt></ruby>を<ruby>持<rt>も</rt></ruby>っていったほうがいいですよ。',
      options: ['よく', 'たまに', 'たぶん', 'ぜんぜん', 'きちん'],
      answer: 'たぶん',
    },
    {
      q: '<ruby>時間<rt>じかん</rt></ruby>がまだあるので、<ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を＿＿＿＿<ruby>食<rt>た</rt></ruby>べてください。',
      options: ['ゆっくり', 'すぐ', 'とても', 'いつも', 'だいたい'],
      answer: 'ゆっくり',
    },
    {
      q: '<ruby>体<rt>からだ</rt></ruby>の<ruby>調子<rt>ちょうし</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いので、＿＿＿＿<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってください。',
      options: ['まだ', 'すぐ', 'たまに', 'しばらく', 'かなり'],
      answer: 'すぐ',
    },
    {
      q: 'あのレストランはとてもおいしいので、＿＿＿＿<ruby>客<rt>きゃく</rt></ruby>がたくさんいます。',
      options: ['ぜんぜん', '少し', 'いつも', 'まず', 'たまに'],
      answer: 'いつも',
    },
    {
      q: 'Chachaさんは<ruby>日本語<rt>にほんご</rt></ruby>が_______<ruby>話<rt>はな</rt></ruby>せますね。すごいですね。',
      options: ['ゆっくり', 'だいたい', 'しばらく', 'しっかり', 'よく'],
      answer: 'よく',
    },
    {
      q: '<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は＿＿＿＿<ruby>図書館<rt>としょかん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>いて<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。',
      options: ['ゆっくり', 'とても', 'まだ', 'まず', 'たまに'],
      answer: 'たまに',
    },
    {
      q: '<ruby>今日<rt>きょう</rt></ruby>のテストは<ruby>難<rt>むずか</rt></ruby>しかったので、＿＿＿＿<ruby>分<rt>わ</rt></ruby>かりませんでした。',
      options: ['ぜんぜん', '少し', 'いつも', 'たぶん', 'よく'],
      answer: 'ぜんぜん',
    },
    {
      q: '<ruby>今日<rt>きょう</rt></ruby>の<ruby>宿題<rt>しゅくだい</rt></ruby>は＿＿＿＿<ruby>終<rt>お</rt></ruby>わりました。あと<ruby>少<rt>すこ</rt></ruby>しです。',
      options: ['よく', 'ぜんぜん', 'たまに', 'まず', 'だいたい'],
      answer: 'だいたい',
    },
    {
      q: '<ruby>夜<rt>よる</rt></ruby>は＿＿＿＿<ruby>寝<rt>ね</rt></ruby>ないと、<ruby>体<rt>からだ</rt></ruby>に<ruby>悪<rt>わる</rt></ruby>いですよ。',
      options: ['しっかり', 'まだ', 'たぶん', 'ゆっくり', '少し'],
      answer: 'しっかり',
    },
    {
      q: 'ここで＿＿＿＿<ruby>休<rt>やす</rt></ruby>みましょう。<ruby>疲<rt>つか</rt></ruby>れたので。',
      options: ['とても', 'いつも', 'すぐ', 'しばらく', 'きちん'],
      answer: 'しばらく',
    },
    {
      q: '<ruby>使<rt>つか</rt></ruby>った<ruby>テレビは、<ruby>元<rt>もと</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>に＿＿＿＿<ruby>戻<rt>もど</rt></ruby>してください。',
      options: ['きちんと', 'とても', '少し', 'まだ', 'たぶん'],
      answer: 'きちんと',
    },
    {
      q: '<ruby>富士山<rt>ふじさん</rt></ruby>は＿＿＿＿<ruby>高<rt>たか</rt></ruby>くて、きれいな<ruby>山<rt>やま</rt></ruby>です。',
      options: ['だいたい', 'ぜんぜん', 'たまに', 'とても', 'しばらく'],
      answer: 'とても',
    },
    {
      q: '<ruby>鈴木<rt>すずき</rt></ruby>さんは<ruby>朝<rt>あさ</rt></ruby>7<ruby>時<rt>じ</rt></ruby>に_______<ruby>起<rt>お</rt></ruby>きます。<ruby>遅<rt>おく</rt></ruby>れることはありません。',
      options: ['たまに', '少し', 'まだ', 'たぶん', 'いつも'],
      answer: 'いつも',
    },
    {
      q: '<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>では、＿＿＿＿<ruby>話<rt>はな</rt></ruby>してください。<ruby>周<rt>まわ</rt></ruby>りの<ruby>迷惑<rt>めいわく</rt></ruby>になります。',
      options: ['まず', 'よく', 'しっかり', 'ゆっくり', 'すぐ'],
      answer: 'ゆっくり',
    },
    {
      q: '<ruby>風邪<rt>かぜ</rt></ruby>の<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだので、＿＿＿＿<ruby>良<rt>よ</rt></ruby>くなるはずです。',
      options: ['すこし', 'ぜんぜん', 'たまに', 'しばらく', 'すぐ'],
      answer: 'すぐ',
    },
    {
      q: 'この<ruby>問題<rt>もんだい</rt></ruby>の<ruby>答<rt>こた</rt></ruby>えは＿＿＿＿これだと<ruby>思<rt>おも</rt></ruby>います。<ruby>自信<rt>じしん</rt></ruby>はありません。',
      options: ['たぶん', 'とても', 'しっかり', 'きちんと', 'いつも'],
      answer: 'たぶん',
    },
    {
      q: '<ruby>部屋<rt>へや</rt></ruby>の<ruby>掃除<rt>そうじ</rt></ruby>が＿＿＿＿<ruby>終<rt>お</rt></ruby>わったので、<ruby>出<rt>で</rt></ruby>かけましょう。',
      options: ['ぜんぜん', 'だいたい', 'まだ', 'たまに', '少し'],
      answer: 'だいたい',
    },

    {
      q: '<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>朝<rt>あさ</rt></ruby>8<ruby>時<rt>じ</rt></ruby>から(仕事)が<ruby>始<rt>はじ</rt></ruby>まります。<br/>「仕事」dibaca？',
      options: ['しけん', 'しゅくだい', 'しごと', 'たべもの'],
      answer: 'しごと',
    },
    {
      q: '<ruby>来月<rt>らいげつ</rt></ruby>、(両親)と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>です。<br/>「両親」dibaca？',
      options: ['かぞく', 'りょうしん', 'きょうだい', 'おや', 'こども'],
      answer: 'りょうしん',
    },
    {
      q: '<ruby>夏休<rt>なつやす</rt></ruby>みには<ruby>海<rt>うみ</rt></ruby>で<ruby>楽<rt>たの</rt></ruby>しく泳ぐのが<ruby>好<rt>す</rt></ruby>きです。<br/>「泳ぐ」dibaca？',
      options: ['いそぐ', 'さわぐ', 'およぐ', 'かぐ', 'ふせぐ'],
      answer: 'およぐ',
    },
    {
      q: '<ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>公園<rt>こうえん</rt></ruby>で<ruby>友達<rt>ともだち</rt></ruby>とたくさん遊ぶつもりです。<br/>「遊ぶ」dibaca？',
      options: ['よぶ', 'とぶ', 'あそぶ', 'まなぶ', 'のぶ'],
      answer: 'あそぶ',
    },
    {
      q: '<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>実家<rt>じっか</rt></ruby>に(送る)ために<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>へ<ruby>行</rt></ruby>きました。<br/>「送る」dibaca？',
      options: ['おくる', 'おく', 'おくれる', 'おこす', 'おこる'],
      answer: 'おくる',
    },
    {
      q: '<ruby>今日<rt>きょう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>は<ruby>風<rt>かぜ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>くてとても(寒い)です。<br/>「寒い」dibaca？',
      options: ['さむい', 'あつい', 'つよい', 'よわい', 'あたたかい'],
      answer: 'さむい',
    },
    {
      q: 'この<ruby>町<rt>まち</rt></ruby>は<ruby>古<rt>ふる</rt></ruby>い<ruby>お寺<rt>おてら</rt></ruby>でとても(有名)です。<br/>「有名」dibaca？',
      options: ['ゆめ', 'ゆうこう', 'ゆうし', 'ゆうめ', 'ゆうめい'],
      answer: 'ゆうめい',
    },
    {
      q: '<ruby>道路<rt>どうろ</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>るときは<ruby>車<rt>くるま</rt></ruby>に(注意)してください。<br/>「注意」dibaca？',
      options: ['ちゅうかん', 'ちゅうし', 'ちゅうい', 'ちゅうりつ', 'ちゅうめい'],
      answer: 'ちゅうい',
    },
    { q: '<ruby>私<rt>わたし</rt></ruby>の(家族)は<ruby>全員<rt>ぜんいん</rt></ruby>で4<ruby>人<rt>にん</rt></ ruby>います。<br/>「家族」dibaca？', options: ['かぞく', 'しゅぞく', 'きょうだい', 'おや', 'こども'], answer: 'かぞく' },

    {
      q: 'レストランで<ruby>美味<rt>おい</rt></ruby>しい食事を<ruby>楽<rt>たの</rt></ruby>しみたいです。<br/>「食事」dibaca？',
      options: ['たべごと', 'しょくじ', 'しけん', 'しごと', 'みごと'],
      answer: 'しょくじ',
    },
    /*
    { q: 'あの<ruby>新<rt>あたら</rt></ruby>しいマンションは値段がとても<ruby>高<rt>たか</rt></ruby>いです。<br/>「値段」dibaca？', options: ['かいだん', 'ぬだん', 'ねだん', 'れだん', 'めんだん'], answer: 'ねだん' },
    {
      q: '<ruby>駅<rt>えき</rt></ruby>から<ruby>私<rt>わたし</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>までは<ruby>少<rt>すこ</rt></ruby>し(遠い)です。<br/>「遠い」dibaca？',
      options: ['とい', 'ちかい', 'おもい', 'とうい', 'とおい'],
      answer: 'とおい',
    },
    {
      q: '<ruby>庭<rt>にわ</rt></ruby>にきれいで（黄色い）<ruby>花<rt>はな</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>いています。<br/>「黄色い」dibaca？',
      options: ['ちゃいろい', 'むらさい', 'きいろい', 'まいろい', 'いろい'],
      answer: 'きいろい',
    },
    {
      q: 'この<ruby>映画<rt>えいが</rt></ruby>は<ruby>時間<rt>じかん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>いですが（面白い）です。<br/>「面白い」dibaca？',
      options: ['たのしい', 'ちいさい', 'くろい', 'おもしろい', 'おもろい'],
      answer: 'おもしろい',
    },
    {
      q: '<ruby>秋<rt>あき</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>は<ruby>昼<rt>ひる</rt></ ruby>の<ruby>時間<rt>じかん</rt></ ruby>が（短い）と<ruby>感<rt>かん</rt></ ruby>じます。<br/>「短い」dibaca？',
      options: ['たかい', 'みじかい', 'あたたかい', 'ちかい', 'おそい'],
      answer: 'みじかい',
    },
    {
      q: '<ruby>重<rt>おも</rt></ruby>い<ruby>荷物<rt>にもつ</rt></ruby>をトラックまで<ruby>頑張<rt>がんば</rt></ruby>って（運ぶ）。<br/>　「運ぶ」dibaca？',
      options: ['まなぶ', 'あそぶ', 'はこぶ', 'よぶ', 'とぶ'],
      answer: 'はこぶ',
    },
    {
      q: '<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>静<rt>しず</rt></ruby>かな<ruby>部屋<rt>へや</rt></ruby>で<ruby>本<rt>ほん</rt></ruby>を読むのが<ruby>日課<rt>にっか</rt></ruby>です。<br/>「読む」dibaca？',
      options: ['たのむ', 'のむ', 'よむ', 'やむ', 'こむ'],
      answer: 'よむ',
    },
    {
      q: '<ruby>友達<rt>ともだち</rt></ruby>に<ruby>感謝<rt>かんしゃ</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちを<ruby>伝<rt>つた</rt></ruby>えるために<ruby>手紙<rt>てがみ</rt></ruby>を書く。<br/>「書く」dibaca？',
      options: ['たく', 'かく', 'とく', 'はたらく', 'いたく'],
      answer: 'かく',
    },
    {
      q: '<ruby>日本<rt>にほん</rt></ruby>で<ruby>着物<rt>きもの</rt></ruby>を<ruby>着<rt>き</rt></ruby>る<ruby>文化<rt>ぶんか</rt></ruby>体験をしました。<br/>「体験」dibaca？',
      options: ['たいけん', 'けいけん', 'しけん', 'いけん', 'じけん'],
      answer: 'たいけん',
    },
    {
      q: '<ruby>母<rt>はは</rt></ruby>が<ruby>作<rt>つく</rt></ruby>ってくれた<ruby>手作<rt>てづく</rt></ruby>り料理は<ruby>美味<rt>おい</rt></ruby>しいです。<br/>「料理」dibaca ？',
      options: ['てづくり', 'りょうり', 'りょり', 'りより', 'たべもの'],
      answer: 'りょうり',
    },*/
  ],
  Tatabahasa: [
    {
      q: '<ruby>明日<rt>あした</rt></ruby>は大事なテストがありますから、今夜はしっかり勉強し＿＿＿＿。',
      options: ['なければなりません', 'なくてもいいです', 'てもいいです', 'てはいけません', 'たところです'],
      answer: 'なければなりません',
    },
    {
      q: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>日曜日<rt>にちようび</rt></ruby>ですから、早く起き＿＿＿＿。ゆっくり休んでください。',
      options: ['なければなりません', 'なくてもいいです', 'てはいけません', 'たばかりです', 'たほうがいいです'],
      answer: 'なくてもいいです',
    },
    {
      q: 'すみません、ここに<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>っ＿＿＿＿か。……ええ、どうぞ。',
      options: ['たあとで', 'てはいけません', 'てから', 'てもいいです', 'たばかりです'],
      answer: 'てもいいです',
    },
    {
      q: '<ruby>美術館<rt>びじゅつかん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>大声<rt>おおごえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>し＿＿＿＿。<ruby>静<rt>しず</rt></ruby>かにしてください。',
      options: ['てもいいです', 'てはいけません', 'なくてもいいです', 'たほうがいいです', 'ているところです'],
      answer: 'てはいけません',
    },
    {
      q: 'ちょうど<ruby>今<rt>いま</rt></ruby>、<ruby>家<rt>いえ</rt></ruby>へ<ruby>帰<rt>かえ</rt></ruby>っ＿＿＿＿です。まだ<ruby>荷物<rt>にもつ</rt></ruby>も<ruby>片付<rt>かたづ</rt></ruby>けていません。',
      options: ['なくてもいい', 'ておく', 'てしまう', 'たほうがいい', 'たところ'],
      answer: 'たところ',
    },
    {
      q: '<ruby>木村さん<rt>きむらさん</rt></ruby>は先月<ruby>日本<rt>にほん</rt></ruby>へ来＿＿＿＿だから、<ruby>日本語<rt>にほんご</rt></ruby>がまだよくわかりません。',
      options: ['たばかり', 'てから', 'たあとで', 'ているところ', 'ておく'],
      answer: 'たばかり',
    },
    {
      q: '<ruby>今<rt>いま</rt></ruby>、<ruby>ご飯<rt>ごはん</rt></ruby>を<ruby>食<rt>た</rt></ruby>っ＿＿＿＿だから、あとで<ruby>電話<rt>でんわ</rt></ruby>しますね。',
      options: ['たところ', 'たばかり', 'ているところ', 'ておく', 'てしまう'],
      answer: 'ているところ',
    },
    {
      q: 'パーティーの<ruby>前<rt>まえ</rt></ruby>に、<ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>し＿＿＿＿ましょう。',
      options: ['てしまう', 'ておく', 'たところ', 'たばかり', 'ているところ'],
      answer: 'ておく',
    },
    {
      q: '<ruby>宿題<rt>しゅくだい</rt></ruby>を忘れて<ruby>家<rt>いえ</rt></ruby>に<ruby>置い<rt>お</rt></ruby>＿＿＿＿ました。<ruby>本当に<rt>ほんとうに</rt></ruby>すみません。',
      options: ['てしまい', 'ておき', 'てから', 'たあとで', 'てもいい'],
      answer: 'てしまい',
    },
    {
      q: '<ruby>手<rt>て</rt></ruby>を洗っ＿＿＿＿、<ruby>ご飯<rt>ごはん</rt></ruby>を<ruby>食べ<rt>たべ</rt></ruby>ましょう。',
      options: ['てから', 'たあとで', 'ておく', 'たところ', 'てもいい'],
      answer: 'てから',
    },
    {
      q: '<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>終わ<rt>おわ</rt></ruby>っ＿＿＿＿、みんなで<ruby>食事<rt>しょくじ</rt></ruby>に行きました。',
      options: ['ておく', 'たところ', 'ているところ', 'たばかり', 'たあとで'],
      answer: 'たあとで',
    },
    {
      q: '<ruby>私<rt>わたし</rt></ruby>は<ruby>漢字<rt>かんじ</rt></ruby>を50<ruby>個<rt>こ</rt></ruby><ruby>書<rt>か</rt></ruby>く_______。<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>しています。',
      options: ['ことができる', 'ことがある', 'たほうがいい', 'かもしれない', 'なくてもいい'],
      answer: 'ことができる',
    },
    {
      q: '<ruby>時々<rt>ときどき</rt></ruby>、<ruby>一人<rt>ひとり</rt></ruby>で<ruby>旅行<rt>りょこう</rt></ruby>に行く＿＿＿＿。とても<ruby>楽<rt>たの</rt></ruby>しいですよ。',
      options: ['たほうがいい', 'ことができる', 'ことがある', 'かもしれない', 'てはいけない'],
      answer: 'ことがある',
    },
    {
      q: '<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>ん＿＿＿＿、テレビを<ruby>見<rt>み</rt></ruby>＿＿＿＿して過ごします。',
      options: ['たり／たり', 'から／なら', 'ても／ても', 'だり／たり', 'て／て'],
      answer: 'だり／たり',
    },
    {
      q: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降っている<rt>ふっている</rt></ruby>＿＿＿＿、タクシーで<ruby>帰り<rt>かえり</rt></ruby>ましょう。',
      options: ['なら', 'から', 'ても', 'のに', 'より'],
      answer: 'から',
    },
    {
      q: '<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く＿＿＿＿、<ruby>新幹線<rt>しんかんせん</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>便利<rt>べんり</rt></ruby>ですよ。',
      options: ['なら', 'から', 'ても', 'ので', 'のに'],
      answer: 'なら',
    },
    {
      q: '<ruby>熱<rt>ねつ</rt></ruby>がありますから、<ruby>今日<rt>きょう</rt></ruby>は<ruby>早く<rt>はやく</rt></ruby><ruby>寝<rt>ね</rt></ruby>＿＿＿＿。',
      options: ['なくてもいい', 'てもいい', 'てはいけない', 'たほうがいい', 'たところ'],
      answer: 'たほうがいい',
    },
    {
      q: '<ruby>空<rt>そら</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>いですから、<ruby>午後<rt>ごご</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>る＿＿＿＿。<br/>',
      options: ['かもしれない', 'ことができる', 'ことがある', 'たほうがいい', 'てもいい'],
      answer: 'かもしれない',
    },
    {
      q: 'のどがかわきましたね。<ruby>冷<rt>つめ</rt></ruby>たいお<ruby>茶<rt>ちゃ</rt></ruby>でも<ruby>飲<rt>の</rt></ruby>み＿＿＿＿。',
      options: ['のみますか', 'ましょうか', 'ませんか', 'たほうがいい', 'てもいい'],
      answer: 'ませんか',
    },
    {
      q: '<ruby>荷物<rt>にもつ</rt></ruby>が<ruby>重<rt>おも</rt></ruby>そうですね。<ruby>手伝<rt>てつだ</rt></ruby>い＿＿＿＿。',
      options: ['ませんか', 'ましょうか', 'てもいいです', 'てはいけません', 'たほうがいい'],
      answer: 'ましょうか',
    },

    /*/ Contoh soal Tatabahasa dengan gambar pendukung.
    {
      q: 'Lihat gambar berikut, lalu pilih partikel yang tepat untuk kalimat: 「テーブル ( ) 上に ねこ が います」',
      image: 'neko.jpg',
      options: ['の', 'を', 'は', 'か', 'も'],
      answer: 'の',
    },*/
  ],
  Pendengaran: [
    // Soal listening: audio WAJIB diputar sebelum menjawab. Letakkan file audio di folder audio/.
    {
      q: '🎧 Dengarkan audio, <br/>なにをかきますか',
      audio: 'soal1.mp3',
      options: ['じゅうしょ', 'なまえ', '日本語', 'ここ', 'わかりました'],
      answer: 'なまえ',
    },
    {
      q: '🎧 Dengarkan audio berikut, <br/>チャンスさんのごしゅっしんはどこですか.',
      audio: 'soal2.mp3',
      options: ['ヴェトナム', 'カムボジャ', 'ハノイ', '日本', 'タイ'],
      answer: 'ハノイ',
    },
    {
      q: '🎧 Dengarkan audio berikut, <br/>お姉さんの子供はなんさいですか',
      audio: 'soal3.mp3',
      options: ['なんさい', 'さんさい', 'いっさい', 'ななさい', 'よんさい'],
      answer: 'さんさい',
    },
    {
      q: '🎧 Dengarkan audio berikut, <br/>男は朝何をしますか',
      audio: 'soal4.mp3',
      options: ['ぎゅうにょううをのみます', 'ぱんを食べます', '何も食べません', 'たまごを食べます', 'あまり食べません'],
      answer: 'あまり食べません',
    },
    {
      q: '🎧 Dengarkan audio berikut, <br/>アパートはどんなところですか',
      audio: 'soal6.mp3',
      options: ['きたまちのアパートです', 'ひろいところです', 'しずかなまちです', 'アパートに住んでいます', 'きたまちです'],
      answer: 'ひろいところです',
    },
    {
      q: '🎧 Dengarkan audio berikut, <br/>なんようび　えいがをみますか',
      audio: 'soal8.mp3',
      options: ['土曜日', '日曜日', '月曜日', '木曜日', '火曜日'],
      answer: '土曜日',
    },
    {
      q: '🎧 Dengarkan audio berikut, <br/>いまどこにいますか',
      audio: 'soal10.mp3',
      options: ['えきのまえ', 'かいさつのまえ', 'かいさつのちかく', 'えきのかいさつ', 'どこにいますか'],
      answer: 'かいさつのまえ',
    },
    {
      q: '🎧 Dengarkan audio berikut, <br/>らいしゅうのれんきゅう　どこへいきますか',
      audio: 'soal13.mp3',
      options: ['なにもしません', 'どこかへいきます', 'べんきょうします', 'コンビニへ行きます', 'うちにいます'],
      answer: 'うちにいます',
    },
    {
      q: '🎧 Dengarkan audio berikut,<br/>休みはなにをしますか ',
      audio: 'soal15.mp3',
      options: ['えいがをみます', 'アニメを見ます', 'えいががすきです', '本を読みます', 'なにもしません'],
      answer: 'アニメを見ます',
    },
    {
      q: '🎧 Dengarkan audio berikut, <br/>その男はしょうらい　なにになりたいですか',
      audio: 'soal20.mp3',
      options: ['日本語のせんせいになりたいです', 'すしやさんになりたいです', 'すしのしょくにんになりたいです', 'すししごとです', 'なにになりたいです'],
      answer: 'すしのしょくにんになりたいです',
    },

    /*/ Contoh soal pendengaran yang menggabungkan audio DAN gambar sekaligus.
    {
      q: '🎧 Dengarkan audio berikut sambil melihat gambar, lalu pilih jawaban yang sesuai dengan yang diucapkan.',
      audio: 'soal5.mp3',
      image: 'mikan.jpg',
      options: ['りんご (ringo)', 'みかん (mikan)', 'ぶどう (budou)', 'すいか (suika)', 'バナナ (banana)'],
      answer: 'みかん (mikan)',
    },*/
  ],
  Bacaan: [
    {
      q: '<ruby>昨日<rt>きのう</rt></ruby>、<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>新<rt>あたら</rt></ruby>しくできたレストランへ<ruby>行<rt>い</rt></ruby>きました。<ruby>店<rt>みせ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>はとてもきれいで、<ruby>料理<rt>りょうり</rt></ruby>もおいしかったです。<ruby>田中<rt>たなか</rt></ruby>さんはカレーを<ruby>食<rt>た</rt></ruby>べましたが、<ruby>少<rt>すこ</rt></ruby>しからかったです。ねだんは<ruby>安<rt>やす</rt></ruby>かったので、<ruby>田中<rt>たなか</rt></ruby>さんはまた<ruby>行<rt>い</rt></ruby>きたいと<ruby>思<rt>おも</rt></ruby>っています。<br/>PERTANYAAN：<ruby>田中<rt>たなか</rt></ruby>さんはどうしてまたこのレストランに<ruby>行<rt>い</rt></ruby>きたいと<ruby>思<rt>おも</rt></ruby>っています。',
      options: [
        '<ruby>店<rt>みせ</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>くて<ruby>静<rt>しず</rt></ruby>かだったから',
        'カレーが<ruby>甘<rt>あま</rt></ruby>くて、おいしかったから',
        '<ruby>料理<rt>りょうり</rt></ruby>がおいしくて<ruby>ねだん<rt>ねだん</rt></ruby>が安かったから',
        '<ruby>友達<rt>ともだち</rt></ruby>に<ruby>紹介<rt>しょうかい</rt></ruby>してもらったから',
        '家から近くて<ruby>便利<rt>べんり</rt></ruby>だから',
      ],
      answer: '<ruby>料理<rt>りょうり</rt></ruby>がおいしくて<ruby>ねだん<rt>ねだん</rt></ruby>が安かったから',
    },
    {
      q: '【<ruby>私<rt>わたし</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>では<ruby>毎朝<rt>まいあさ</rt></ruby>9<ruby>時<rt>じ</rt></ruby>からかいぎがあります。でも、<ruby>今朝<rt>けさ</rt></ruby>は<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れたので、8<ruby>時半<rt>じはん</rt></ruby>に<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>たのに9<ruby>時10分<rt>じゅっぷん</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いてしまいました。<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れてしまったので、<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>謝<rt>あやま</rt></ruby>りました。<ruby>明日<rt>あした</rt></ruby>はもっと<ruby>早<rt>はや</rt></ruby>く<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>るつもりです。<br/>PERTANYAAN：この<ruby>人<rt>ひと</rt></ruby>はどうして<ruby>今朝<rt>けさ</rt></ruby>の<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れましたか。',
      options: [
        '家を出るのが遅かったから',
        '<ruby>電車<rt>でんしゃ</rt></ruby>が遅れたから',
        '<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>をしていたから',
        '<ruby>途中<rt>とちゅう</rt></ruby>で朝ご飯を食べたから',
        '<ruby>会社の場所<rt>かいしゃのばしょ</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えたから',
      ],
      answer: '<ruby>電車<rt>でんしゃ</rt></ruby>が遅れたから',
    },
    {
      q: '<ruby>明日<rt>あした</rt></ruby>は<ruby>試験<rt>しけん</rt></ruby>があります。<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby><ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>しています。<ruby>昨日<rt>きのう</rt></ruby><ruby>友達<rt>ともだち</rt></ruby>に「<ruby>家<rt>いえ</rt></ruby>でアニメを見ないで、もっと<ruby>勉強<rt>べんきょう</rt></ruby>したほうがいいよ」と<ruby>言<rt>い</rt></ruby>われました。<br/><br/>PERTANYAAN：この人は<ruby>明日<rt>あした</rt></ruby>何をしますか。',
      options: [
        '<ruby>家<rt>いえ</rt></ruby>でアニメを<ruby>見<rt>み</rt></ruby>る',
        '<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>試験<rt>しけん</rt></ ruby>を<ruby>受<rt>う</rt></ruby>ける',
        '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>買い物<rt>かいもの</rt></ruby>に行く',
        '<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>する',
        '日本語の先生に会う',
      ],
      answer: '<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>する',
    },
    {
      q: '<ruby>昨日<rt>きのう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>海<rt>うみ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。<ruby>海<rt>うみ</rt></ruby>で<ruby>泳<rt>およ</rt></ruby>ぎながら、たくさんの<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>りました。とてもきれいな<ruby>紅葉<rt>こうよう</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>もありました。あとで、<ruby>友達<rt>ともだち</rt></ruby>に、どうやってきれいな写真を撮るかを教えました。<br/><br/>PERTANYAAN：この人は昨日何をしましたか。',
      options: [
        'インターネットで写真をさがした',
        '新しいカメラを買いに行った',
        '<ruby>海<rt>うみ</rt></ruby>で<ruby>泳<rt>およ</rt></ruby>ぎながら<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>った',
        'きれいな<ruby>紅葉<rt>こうよう</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>った',
        '<ruby>友達<rt>ともだち</rt></ruby>に<ruby>写真<rt>しゃしん</rt></ruby>の<ruby>撮り方<rt>ととりかた</rt></ruby>を<ruby>教えた</rt></ruby>',
      ],
      answer: 'きれいな<ruby>紅葉<rt>こうよう</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>った',
    },
    {
      q: '<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>に、<ruby>部屋<rt>へや</rt></ruby>の<ruby>予約<rt>よやく</rt></ruby>をしなければなりません。ホテルは<ruby>高<rt>たか</rt></ruby>すぎますから、アパートを<ruby>探<rt>さが</rt></ruby>しています。<ruby>昨日<rt>きのう</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>から<ruby>良<rt>よ</rt></ruby>いアパートを<ruby>紹介<rt>しょうかい</rt></ruby>してもらいました。<ruby>駅<rt>えき</rt></ruby>から<ruby>歩<rt>ある</rt></ruby>いて5<ruby>分<rt>ふん</rt></ruby>で、<ruby>家賃<rt>やちん</rt></ruby>も<ruby>安<rt>やす</rt></ruby>いです。<ruby>明日<rt>あした</rt></ruby>その<ruby>部屋<rt>へや</rt></ruby>を<ruby>予約<rt>よやく</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>います。<br/><br/>PERTANYAAN：この<ruby>人<rt>ひと</rt></ruby>が<ruby>紹介<rt>しょうかい</rt></ruby>してもらったアパートはどんな<ruby>部屋<rt>へや</rt></ruby>ですか。',
      options: [
        'ホテルより高いがきれいな<ruby>部屋<rt>へや</rt></ruby>',
        '<ruby>駅<rt>えき</rt></ruby>から近くて<ruby>家賃<rt>やちん</rt></ruby>が安い部屋',
        '駅から遠いが広い部屋',
        '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>住<rt>す</rt></ruby>むための部屋',
        '<ruby>予約<rt>よやく</rt></ruby>がとてもむずかしい部屋',
      ],
      answer: '<ruby>駅<rt>えき</rt></ruby>から近くて<ruby>家賃<rt>やちん</rt></ruby>が安い部屋',
    },
    /*/ Contoh soal bacaan dengan gambar (mis. papan pengumuman / rambu).
    {
      q: 'Bacalah papan tulisan pada gambar berikut, lalu jawab: papan tersebut menunjukkan tempat apa?',
      image: 'byouin.jpg',
      options: ['Sekolah', 'Rumah Sakit', 'Stasiun', 'Toko', 'Kantor Pos'],
      answer: 'Rumah Sakit',
    },*/
  ],
};
const CATEGORIES = Object.keys(QUESTION_BANK);
