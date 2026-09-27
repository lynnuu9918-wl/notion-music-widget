/* ==========================================
   歌曲文件数据库 (songs.js)
   这里专门录入歌曲文件信息，并通过 lyricId 关联 lyrics.js 里的歌词
   ========================================== */
const playlist = [
  {
    id: "song_1790441880313",
    title: "渭水钓翁",
    artist: "王铮亮, 王珮瑜",
    duration: 248,
    src: "./music/王铮亮, 王珮瑜 - 渭水钓翁.mp3",
    lyricId: "song_1790441880313"
  }, // <-- 这里补上了关键的逗号
  {
    id: "song_1790484169186",
    title: "心在跳 (Live)",
    artist: "王珮瑜",
    duration: 296,
    src: "./music/王珮瑜 - 心在跳 (Live).mp3",
    lyricId: "song_1790484169186"
  },
];
