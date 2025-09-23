// items.js
window.ITEMS = [
  {
    id: "1",
    src: "./img/granlagan-return.jpeg.jpeg",
    title: "그랜라간 시몬과 카미나",
    date: "2025-09-13",
    ratio: "2/3",        // 세로 사진
    models: [
      { name: "말곰님", handle: "@malgom_cos", url: "https://x.com/malgom_cos" },
      { name: "슈타님", handle: "@SteinsAnime", url: "https://x.com/SteinsAnime" }
    ],
    // tags: ["cosplay","anime"],
    // exif: { camera:"", lens:"", ... }
  },
  {
    id: "2",
    src: "./img/250921 1.jpg",
    title: "강철의 연금술사",
    date: "2025-09-21",
    ratio: "3/2",        // 가로 사진
    hero: true,          // ← 이 아이템이 '대표사진'
  }
];
