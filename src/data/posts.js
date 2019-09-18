const posts = [
  {
    code: "BAcyDyQwcXX",
    caption: "I found this a very easy way of solving the 3x3 Rubik's Cube and I hope you are able to follow along and solve the cube yourself!",
    likes: 56,
    id: "1161022966406956503",
    media: "iframe",
    display_src: 'https://www.youtube.com/embed/rmnSpUgOvyI'
    
  },
  {
    code: "BAcJeJrQca9",
    caption: " 1. Find a flat, stable and safe place to change your tire. You should have a solid, level surface that will restrict the car from rolling. If you are near a road, park as far from traffic as possible and turn on your emergency flashers (hazard lights). Avoid soft ground and hills.",
    likes: 59,
    id: "1160844458347054781",
    display_src: 'https://blogmedia.dealerfire.com/wp-content/uploads/sites/800/2019/05/iStock-913151646.jpg'
  },
  {
    code: "BAF_KY4wcRY",
    caption:
      "Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
    likes: 79,
    id: "1154606670337393752",
    media: "iframe",
    display_src: `https://www.youtube.com/embed/9HgyhUjVWY8`
  },
  {
    code: "BAPIPRjQce9",
    caption: "Making baby pancakes for one early rising baby. ☕️🍴",
    likes: 47,
    id: "1157179863266871229",
    media: "iframe",
    display_src: `https://www.youtube.com/embed/hwpkpXHdYlI`
  },
  {
    code: "-mxKQoQcQh",
    caption: "They both have figured it out. #lifewithsnickers",
    likes: 47,
    id: "1127804966031967265",
    media: "iframe",
    display_src: `https://www.youtube.com/embed/23QQ1Hz2-jY`
  },
  {
    code: "BAhvZrRwcfu",
    caption:
      "How to tie your tie",
    likes: 30,
    id: "1162418651480049646",
    display_src: "https://www.101knots.com/wp-content/uploads/2016/11/How-to-Tie-a-Simple-Small-Oriental-Tie-Knot-Instructions.jpg"
  },

  {
    code: "-hZh6IQcfN",
    caption:"All the basic piano chords in one epic tutorial",
    likes: 66,
    id: "1126293663140399053",
    media: "iframe",
    display_src:"https://www.youtube.com/embed/C1i-cFx7__M" 
  },
 
  
  {
    code: "BAAJqbOQcW5",
    caption: "Liner Brake adjustments'",
    likes: 40,
    id: "1152964002473690553",
    media: "iframe",
    display_src: `https://www.youtube.com/embed/BJCbjqhzW_Y`
  },
  {
    code: "_zbaOlQcbn",
    caption: "Shrimp pasta & pesto recipe #cookingnerd",
    likes: 52,
    id: "1149382879529256679",
    media: "iframe",
    display_src: `https://player.vimeo.com/video/200548707`
  },
  {
    code: "_KnU7MwceA",
    caption: "Hanging out in my office waiting for 5:00 beers to come around.",
    likes: 54,
    id: "1137894817632733056",
    media: "iframe",
    display_src: `https://player.vimeo.com/video/13809545`
  },
  {
    code: "_4jHytwcUA",
    caption:
      "HOW TO JUGGLE 3 BALLS ",
    likes: 62,
    id: "1150824171912152320",
    media: "iframe",
    display_src: "https://www.youtube.com/embed/JZmmOdnljG4" 
  },
  
  {
    code: "_rmvQfQce8",
    caption:
      "Massage Tutorial: Deep tissue back massage",
    likes: 35,
    id: "1147180903383025596",
    media: "iframe",
    display_src: "https://www.youtube.com/embed/lmpUcyXdJQA" 
  },
  {
    code: "_ep9kiQcVy",
    caption: "⛄️",
    likes: 64,
    id: "1143535906423162226",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  {
    code: "_XpJcrwcSn",
    caption: "6 page spread on flexbox in this months netmag!",
    likes: 74,
    id: "1141561999742846119",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  
  {
    code: "_HMejJQcY5",
    caption: "Today I learned that a long pull espresso is called a 'lungo'",
    likes: 18,
    id: "1136932306813044281",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  {
    code: "_Fq2zmwcaz",
    caption: "Awesome hand lettered gift from @eunibae and the HackerYou crew.",
    likes: 48,
    id: "1136502965197194931",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  {
    code: "_A2r0aQcfD",
    caption:
      "Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",
    likes: 57,
    id: "1135147611821557699",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  {
    code: "-1rhFawccs",
    caption: "Some major audio upgrades coming to my next videos 😍",
    likes: 39,
    id: "1132002270913873708",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  {
    code: "-pjx-gQcVi",
    caption: "My baby and me. Thanks to @bearandsparrow for this one.",
    likes: 81,
    id: "1128590547628442978",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  {
    code: "-oTZ0zQcWt",
    caption: "It's too early. Send coffee.",
    likes: 81,
    id: "1128237044221461933",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  
  {
    code: "-fasqlQceO",
    caption:
      "Kaitlin decorated the house for the Christmas. So gezellig! #casabos",
    likes: 46,
    id: "1125735850454402958",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  {
    code: "-VBgtGQcSf",
    caption: "Trying the new Hamilton Brewery beer. Big fan.",
    likes: 27,
    id: "1122810327591928991",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  },
  { 
    code: "-FpTyHQcau",
    caption:
      "I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",
    likes: 82,
    id: "1118481761857291950",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`
  }
];

export default posts;
