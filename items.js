// items.js
window.ITEMS = [
  {
    id: "1",
    src: "./img/granlagan-return.jpeg.jpeg",
    title: "그랜라간 시몬과 카미나",
    date: "2025-10-12",
    ratio: "2/3",        // 세로 사진
    hero: true,          // ← 이 아이템이 '대표사진'
    models: [
      { name: "말곰님", handle: "@malgom_cos", url: "https://x.com/malgom_cos" },
      { name: "슈타님", handle: "@SteinsAnime", url: "https://x.com/SteinsAnime" }
    ],
    // tags: ["cosplay","anime"],
    // exif: { camera:"", lens:"", ... }
  },
  {
    id: "2",
    src: "./img/sample-horizontal.jpg",
    title: "홍대 스트릿",
    date: "2025-10-10",
    ratio: "3/2",        // 가로 사진
    models: [{ handle: "@ryo_pht", url: "https://x.com/ryo_pht" }]
  }
];
