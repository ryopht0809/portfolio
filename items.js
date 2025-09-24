// items.js
window.ITEMS = [
  {
    id: "1",
    src: "./img/granlagan-return.jpeg.jpeg",
    title: "그랜라간 시몬과 카미나",
    date: "2025-09-13",
    ratio: "2/3",       // 세로 사진
    hero: true,         // 대표사진
    models: [
      { name: "말곰님",  handle: "@malgom_cos",   url: "https://x.com/malgom_cos" },
      { name: "슈타님",  handle: "@SteinsAnime",  url: "https://x.com/SteinsAnime" }
    ],
  },
  {
    id: "2",
    src: "./img/250921-1.jpg",
    title: "엘릭 형제",
    date: "2025-09-21",
    ratio: "3/2",       // 가로 사진
    models: [
      { handle: "@cos_NUGI",   url: "https://x.com/cos_NUGI" },
      { handle: "@paca_5884",  url: "https://x.com/paca_5884" }
    ],
  },

  // --- 새로 추가한 3장 (세로 2:3, 제목·태그·모델 비움) ---
  {
    id: "3",
    src: "./img/portfolio-3.jpg",
    title: "오리지널 캐릭터",
    ratio: "2/3",
    models: ["@yggdra___"]
  },
  {
    id: "4",
    src: "./img/portfolio-4.jpeg",
    title: "미쿠",
    ratio: "2/3",
    models: ["@nonameine"]
  },
];
