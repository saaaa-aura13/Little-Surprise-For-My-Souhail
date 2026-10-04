/* ✏️ EDIT EVERYTHING HERE ✏️ */
const C = {
  to: "My love Souhail",
  from: "Saura",
  letterTo: "Souhail",                 // shown on the envelope: To: ...
  month: 1,
  startDate: "2026-09-05",            
  letter: "Hi Baby,\n\nI can't believe how time flies so fast, it's already been a month since I became your girlfriend. Every day with you feels softer and brighter, and somehow you make ordinary days feels special.\n\nThank you for your patience, your laugh, your smile, for being understanding, caring, loving and for choosing me.\n\nI'm sousou happy that you're my boyfriend!. I'm soooou proud of you baby, cause you're so hardworking, you know what you want in life and you always have the vision to include me in your future:>. I hope we can make this through until the day we can finally meet each other. Please always remember that I will always be your support system!!:>. Here's to many more months together.\n\nI LOVEEEE YOU TO THE STARS AND BACK.\n\nMWAAAAAHAAAHHHHH.\n\nForever yours,",
  songs: [
    { file: "songs/you'll be in my heart.mp3", title: "You'll be in my heart", artist: "NIKI", msg: "Hii babyyyyy!!. Did you know that this song reminds me of you?, because even though we're far from each other, you're the only one my heart wants. It feels like it's just me and you against the world. A feeling of not minding what other people might say to us. What really matters is what we feel for each other. You will always be a part of me, and you will always have a space in my heart. "},
    { file: "songs/risk it all.mp3", title: "Risk it all", artist: "Bruno Mars ", msg: "This song itself reminds me that I want to do everything for you, babyyy, even face the long years of waiting because I really want to spend my life with you and build our future together. No matter how hard our journey will be because we are in a long-distance relationship. I'm ready to endure every moment I'm missing you, 'cause I love you sousou much. No words can express how much I love you." },
    { file: "songs/die with a smile.mp3", title: "Die with a smile", artist: "Bruno Mars and Lady Gaga", msg: "This song talks about my feelings for you, that whatever happens, if we end up together in the future and grow old together, I want to spend the last minute of my life beside you, leaving this earth with a smile because I'm so lucky to be loved by you. I want to do and try everything with you, until our hair turns gray and we complain about our knee and back pains, because we chose to grow old together. I hope we can make it through, love." },
    { file: "songs/mellozen.mp3", title: "이 순간이 소중해", artist: "Mellozen", msg: "This song really reminds me of our every late-night talk. This Korean song captures how I feel toward you. Every time I talk to you, I always feel at peace. The stressful environment stops, and everything is just about me and you. In the peaceful surroundings of the night, I feel so much happiness just because I have you. I always end my day stress-free and full of joy. This song and you are the same to me, because both of you are my comfort from everything." },
    { file: "songs/tell me where it hurts.mp3", title: "Tell me where it hurts", artist: "MYMP", msg: "This song is what I want to tell you every time you feel sad, and I want to help you ease every heavy emotion you carry. This song captures how sad I feel whenever you are sad, and how much I want to make you happy. I want to do anything just for you to feel okay, and help you validate what you feel, because it's okay to feel sad, cry, and rant, even if you're a man. I want to help you love the soft and vulnerable parts of yourself. Tell me everything, especially when you're hurt, because I want us to share each other's burdens and difficult moments." },
    { file: "songs/birds of a feather.mp3", title: "Birds of a feather", artist: "Billie Eilish", msg: "This song is one of my favorite songs that you recommended to me. I had already heard this song before, but it wasn't part of my playlist. The moment you recommended it to me, everything changed. It became my favorite, and I play it all the time now, and all I remember is you. This song is really a vibe. Even though it has a lot of meaning, what comes to my mind just by listening to it is your handsome face, your beautiful smile, and how jolly you are. Every moment and video you've sent to me flashes back in my mind (just imagine you're watching a compilation video where it has different transitions, HAAHAHAHAHAHA)" },
    { file: "songs/thank god i found you.mp3", title: "Thank God I Found You", artist: "BudaKhel x Kat", msg: "This is one of the most underrated songs I have in my playlist, and I always play it because I really thank God for giving me the best man I could ever ask for. All of the heartbreaks were worth it, because if I had never experienced them, I wouldn't have found you. I'm so thankful I found you because you help me realize every good part of me, boost my confidence, and always make me feel secure. You also help me to open up everything, and you let me express myself without making me feel like I'm being too dramatic. You let me embrace who I am and gave me so many reasons to live my life to the fullest, in a calm and stress-free way. You let me experience the love I've always prayed for. Where I can let go of all my insecurities and find a security that rests my mind from overthinking whether I'm doing enough, because you always make me feel that I am enough. I LOVE YOU SO MUCH. THANK YOU FOR EVERYTHING YOU'VE DONE, including your everyday efforts to message me, make me smile and laugh, and learn and grow with me. I really appreciate everything you do, baby, and I really hope and am manifesting that you are my endgame." }
  
  ],
  reasons: [
    "Your smile completes my day.",
    "Your sooooou kind.",
    "You secure me with everything.",
    "You gave me a lot of compliments.",
    "You're suchhhh a cutieepieee.",
    "You're sousou handsomeeeee.",
    "You haveeeee the perfect nose.",
    "You have a beautiful cupid lips.",
    "Your eyess are beautiful.",
    "You have pretty lashes.",
    "You're cute everytime i tease you.",
    "You update me with everything.",
    "You missed me everyday.",
    "You're sou funnyyy.",
    "You make me happy everyday.",
    "You include me to your future.",
    "You're sou hardworking.",
    "You're calm and not an angry man.",
    "You make me want to be a better person."
  ],
  code: "090526",
  hint: "Hint: The day i said yes",
  letterPics: ["pics/1.jpg", "pics/2.jpg", "pics/3.jpg"],  
  wheel: [                                                  
    { i: "heart", t: "A big virtual hug", x: "Come here love! Hug delivered. Squeeze your pillow tight and pretend it's me hihihihi." },
    { i: "star", t: "A sweet compliment", x: "You have the kind of smile that makes my whole day better, even when it's just through the screen, so keep smiling baby <3" },
    { i: "smile", t: "A corny joke", x: "What do you call to the two birds in love? Tweethearts. I know, I know, it's corny, but you're smiling right now, admit it (please). HAHAHAHAHAHA." },
    { i: "message", t: "A pick-up line", x: "Excuse me, do you have a band-aid? Because I just scraped my knee from falling for you." },
    { i: "mail", t: "A sweet reminder", x: "You're doing better than you think, baby. I'm proud of you, always!!!. I'm your number 1 cheerleader." },
    { i: "moon", t: "A goodnight wish", x: "Sleep tight, my love. Let today go, you did enough. I'll see you in my dreams hehehehe." }
  ],
  sunflowers: [                                             
    "I love you so muchh, mahal kooooo",
    "I miss you everyday! pwede pa kiss?",
    "You're the only one I want babyyyy",
    "You're my favorite humannnnnn",
    "Fun fact: I want to grow old with you",
    "Babyyy, will you be my forever partner?",
    "Hmmm, i'm wondering how did you manage to become handsome and cute at the same time?"
  ],
  timeline: [                                                
    { d: "Day 1", t: "The day i opened that app", x: "That day, I was really bored since it was our sem break, and I decided to open that app because I just wanted to entertain myself and find someone I could talk to, a someone to share opinions on life with and learn about their culture (but to be specific, I was there to learn and enhance my understanding of Hangeul, hehehehe). Then, you liked my profile. When I stalked your account, you seemed kind of cute, which is why I hit the accept button, and we instantly matched. I'm so glad because you were the first one who messaged me and talked a lot with a lot of sense. I already liked you because you seemed so calm and madaldal (talkative) at the same time. The way you talked and opened up about things made you sound so mature. I thought it was just going to be a one-time conversation after we finished talking that day, until the next day your name popped up again with messages. That's the time I realized I was so interested in knowing more about you. Before I knew it, we really came this far, mhehwehwhewhe!" },
    { d: "Our official talk outside the MEEF app", t: "The talk that felt like home", x: "I can still recall how we continued our conversation through Insta. When I stalked your account, I was kind of surprised: why didn't you have a single post, even though you're so good-looking? And when I looked closer at your profile, it captured my attention because it really showed how much you love your mom and what a good son you are (which is how I define a good man). I can still remember you said 'heyy yo' like we're bros, hahahahahahahahah, and complimented my pretty smile, hihhihihihihi. You really caught my attention that night, and I hesitated because I thought you were just like the others who show interest at first and then leave once you're already attached (I'm not referring to myself, just based on other people's experiences). But you broke that thought,you really showed me how a woman should be treated right. Now, I'm so in love with you, and I can't imagine my day without your messages." },
    { d: "Our first call", t: "The memorable day", x: "Omg, this is one of my most favorite parts of September. I got to see you in real time! You blessed me and let me appreciate your handsomeness. I was so kilig that night; it felt like our first walk together. You made me so happy, yapping and talking so much while I was just there, happily listening to your voice and chika. I just hope we can do it again someday, heheheheehe" },
    { d: "Our future plan", t: "You included me in it", x: "This always gave me so many daydreams every time we talked about our future, and I blushed every time you included me in it. Being able to freely express our thoughts on how we want to build our future together, how many kids we want, and who is more responsible for passing down their genes (I hope it's yours, hehehehheehe! Please give them your height, perfect nose, lips, eyelashes, and hazel eyes, ahhhhhhh jebal! The only thing I can contribute is the toyo, HAHAHAHAHHHAHAHAAH). But seriously, I'm so happy because even though we're new in this relationship, we already talk about these things. At the very least, it gives each other the security that we're meant to be in the future together with our beautiful kids." },
    { d: "The Day", t: "Our first monthsary", x: "OMG, baby, I just can't believe we're already sharing one month of love together! We've already shared so many stories, talks, and memories, even in just the span of a month. Even though we're far from each other, I can feel the love you have for me. Your everyday updates make me feel near you. Those updates make me feel so special, no matter how busy you are, you always find time to talk to me. I really appreciate you as my lover, because you do everything so I don't feel lonely while you're at work. I love you so much, baby. Thank you for being the best boyfriend in the world!!!" },
      ],
  when: [
    { t: "Open when you miss me", x: "Hi baby, I miss you too!! It's sad because I can't even hug you right now, but you know I always think of you every day. I'm always praying for your safety and success in life, and most especially your happiness, because when you're happy, I'm happy too. I love you so much, babyyyy. This is the only thing I can do for you right now, which is to miss you every day while we're far from each other. Just know that I'm always here for you, and I'll always be your support system, no matter what decisions you make in your life" },
    { t: "Open when you can't sleep", x: "Hi babyyy, it's already sleeping time! You should go to sleep now, because staying up so late will make you look like a panda, HAHAHHAAHHHAAH. Anyway, you still look good no matter what, but you need to rest your mind now. Breathe slowly and think of me as your pillow. Close your eyes, hug that pillow, and just imagine I'm the one hugging you. Then I'll kiss your forehead and rub your hair until you fall asleep. Goodnight, baby. Tomorrow is another day of loving you. I'll be with you while you sleep, and I'll still be here when you wake up. I LOVE YOU :>" },
    { t: "Open when you're sad", x: "Oh no, why did you open this? Are you sad? I wish I was there to comfort you and give you a tight hug. What makes my love sad? Whatever it is, it's going to be okay soon. It's okay to feel sad and cry sometimes, love. Your feelings are valid, so don't hesitate to come to me and tell me about every heavy feeling you have right now. I will always be here to be your shoulder to lean on when everything gets heavy. I'm your girlfriend, and my duty is to make you feel better whenever you are sad. Always remember that you're still human and you are allowed to be sad,you just need someone who can listen to you, and that's me. I LOVE YOU, BABY. I HOPE THE SADNESS GOES AWAY SOON." },
    { t: "Open when you're happy", x: "HI BABYYYYYY!!! Omg, what's with that happiness? Can you share it with me and let's celebrate it together? Baby, you know that the only important thing for me is seeing you happy every day. I always want to see you smile and laugh, because it's my most favorite thing about you. STAY HAPPY AS ALWAYS. Let's be happy together. I LOVE YOU SO MUCH, MY PRINCESS, HIHIHIHI!" }
  ],
  quiz: [
    { q: "Who's my cutiee little princess (my favorite)?", a: ["A. Meeeee", "B. I don't know", "C. Your kpop idol"], c: 0 },
    { q: "What's my favorite part about us?", a: ["A. Our late talks", "B. Our silly jokes", "C. Everything"], c: 2 },
    { q: "What's my favorite thing to do?", a: ["A. Watching kdrama", "B. Talking to me nonstop", "C. Eating all day"], c: 1 },
    { q: "What's the worst thing i do for a day?", a: ["A. Not saying i love you", "B. Giving you less time", "C. Not drinking water"], c: 2 },
    { q: "What's my favorite squishy?", a: ["A. My biceps", "B. My cute face", "C. My abs"], c: 0 },
    { q: "What's my favorite pet?", a: ["A. Cat", "B. Monkey", "C. Meeeeee"], c: 0 },
    { q: "What's my weakness?", a: ["A. Neck kisses", "B. When i call you mommy", "C. Waking up early"], c: 1 },
    { q: "What's my favorite food?", a: ["A. Chimmkenn", "B. Pisctachio ice cream", "C. ME MOMMMYY"], c: 1 },
    { q: "What's my favorite filipino food?", a: ["A. Adobo", "B. Menudo", "C. Halo-halo"], c: 1 },
    { q: "What's my favorite thing about you?", a: ["A. Only my biceps", "B. My handsome facee", "C. Everything about meeeee"], c: 2 }
  ]
};


const noEmoji = t => t.replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, "").replace(/[ \t]+(?=\n|$)/g, "");
(function scrub(o) { for (const k in o) { if (typeof o[k] === "string") o[k] = noEmoji(o[k]); else if (o[k] && typeof o[k] === "object") scrub(o[k]); } })(C);

const $ = s => document.querySelector(s);

/* ICONS: */
const P = {
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  gift: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  message: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  play: '<polygon points="5 3 19 12 5 21 5 3"/>',
  pause: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',
  back: '<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',
  fwd: '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  down: '<polyline points="6 9 12 15 18 9"/>',
  delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'
};
const ico = (n, cls = "") => `<svg class="ic-svg ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
document.querySelectorAll("[data-ico]").forEach(el => el.innerHTML = ico(el.dataset.ico));
$("#to").textContent = "For " + C.to;
$("#title").innerHTML = `Happy <span>${C.month}${C.month===1?"st":C.month===2?"nd":C.month===3?"rd":"th"}</span> Monthsary Baby!!!`;
$("#foot").textContent = "Made with love by " + C.from;
const d = Math.max(0, Math.floor((Date.now() - new Date(C.startDate + "T00:00:00")) / 864e5));
$("#days").innerHTML = ico("heart", "fill") + " " + d + " days of us";

/* floating hearts */
const fl = $("#floaty"), still = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!still) setInterval(() => {
  const e = document.createElement("span"); e.className = "fl";
  e.innerHTML = ico(["heart","heart","star"][Math.random()*3|0], "fill");
  e.style.left = Math.random()*100 + "vw"; e.style.fontSize = 12 + Math.random()*18 + "px";
  e.style.animationDuration = 8 + Math.random()*8 + "s";
  fl.appendChild(e); setTimeout(() => e.remove(), 17000);
}, 900);

function confetti(x, y, n = 26) {
  if (still) return;
  for (let i = 0; i < n; i++) {
    const e = document.createElement("span"); e.className = "conf";
    e.innerHTML = ico(["heart","star","heart","heart","star"][i % 5], "fill"); e.style.color = ["#ff4d94","#ff9ccc","#ffd6e8","#ff6fb0"][i % 4];
    const a = Math.random()*Math.PI*2, r = 90 + Math.random()*150;
    e.style.left = x + "px"; e.style.top = y + "px";
    e.style.setProperty("--dx", Math.cos(a)*r + "px"); e.style.setProperty("--dy", Math.sin(a)*r - 40 + "px");
    e.style.setProperty("--r", (Math.random()*360-180) + "deg");
    document.body.appendChild(e); setTimeout(() => e.remove(), 1500);
  }
}

/* modal */
const modal = $("#modal"), panel = $("#panel");
let typer = null, audio = null, lastFocus = null, track = 0;
const esc = t => t.replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));

/* second-level pop-up */
const WHEN_ICONS = ["heart", "clock", "message", "star"];
const sub = document.createElement("div");
sub.className = "nwrap"; sub.setAttribute("role", "dialog"); sub.setAttribute("aria-modal", "true"); sub.setAttribute("aria-label", "Note");
sub.innerHTML = `<div class="note"><button class="x" id="subx" aria-label="Close">${ico("x")}</button><div class="nic" id="subi"></div><h3 id="subt"></h3><p id="subm" tabindex="0"></p><small class="scrollhint" id="subh" hidden>Scroll to read more</small><button class="btn" id="subb">Close</button></div>`;
document.body.appendChild(sub);
function openNote(title, msg, icon) {
  $("#subi").innerHTML = ico(icon || "mail"); $("#subt").textContent = title;
  const p = $("#subm"); p.textContent = msg; p.scrollTop = 0; p.classList.toggle("long", msg.length > 170);
  sub.classList.add("on"); $("#subb").focus();
  $("#subh").hidden = p.scrollHeight <= p.clientHeight + 2;
  confetti(innerWidth / 2, sub.querySelector(".note").getBoundingClientRect().top + 40, 14);
}
function closeNote() { sub.classList.remove("on"); }
$("#subx").onclick = $("#subb").onclick = closeNote;
sub.onclick = e => { if (e.target === sub) closeNote(); };

/* animated stickers */
const FACE = (dy = 0) => `<g transform="translate(0 ${dy})"><g fill="#3a0d24"><circle cx="38" cy="50" r="4.2"/><circle cx="62" cy="50" r="4.2"/></g><g fill="#ff5f9f" opacity=".55"><ellipse cx="29" cy="60" rx="6" ry="4"/><ellipse cx="71" cy="60" rx="6" ry="4"/></g><path d="M44 59q6 7 12 0" fill="none" stroke="#3a0d24" stroke-width="2.8" stroke-linecap="round"/></g>`;
const W = 'stroke="#fff0f6" stroke-width="4" stroke-linejoin="round"';
const STK = [
  `<path d="M50 88C20 66 8 48 8 32 8 19 18 10 30 10c8 0 15 4 20 11C55 14 62 10 70 10c12 0 22 9 22 22 0 16-12 34-42 56z" fill="#ff4d94" ${W}/>${FACE()}`,
  `<polygon points="50,6 61,36 93,38 68,58 77,90 50,72 23,90 32,58 7,38 39,36" fill="#ffb3d6" ${W}/>${FACE(2)}`,
  `<path d="M26 78C8 78 4 52 24 48 24 26 54 20 64 38 82 34 96 56 82 70 78 77 72 78 66 78Z" fill="#ffd6e8" ${W}/>${FACE(4)}`,
  `<g fill="#ff9ccc"><circle cx="50" cy="20" r="17"/><circle cx="76" cy="35" r="17"/><circle cx="76" cy="65" r="17"/><circle cx="50" cy="80" r="17"/><circle cx="24" cy="65" r="17"/><circle cx="24" cy="35" r="17"/></g><circle cx="50" cy="50" r="28" fill="#fff0f6"/>${FACE()}`,
  `<circle cx="24" cy="24" r="14" fill="#ff77b0" ${W}/><circle cx="76" cy="24" r="14" fill="#ff77b0" ${W}/><circle cx="50" cy="56" r="36" fill="#ffb3d6" ${W}/>${FACE(4)}`,
  `<ellipse cx="36" cy="22" rx="10" ry="22" fill="#ffb3d6" ${W}/><ellipse cx="64" cy="22" rx="10" ry="22" fill="#ffb3d6" ${W}/><ellipse cx="36" cy="24" rx="4" ry="14" fill="#ff77b0"/><ellipse cx="64" cy="24" rx="4" ry="14" fill="#ff77b0"/><circle cx="50" cy="62" r="30" fill="#fff0f6" ${W}/>${FACE(10)}`,
  `<polygon points="16,44 18,8 46,24" fill="#ff77b0" ${W}/><polygon points="84,44 82,8 54,24" fill="#ff77b0" ${W}/><circle cx="50" cy="56" r="35" fill="#ffb3d6" ${W}/>${FACE(4)}<g stroke="#3a0d24" stroke-width="2" stroke-linecap="round"><path d="M14 58h12M14 66l11-3M86 58H74M86 66l-11-3"/></g>`
];
const ANIM = ["bounce", "wiggle", "floaty", "pulse", "swing"];
const stage = i => `<div class="stage"><div class="stk ${ANIM[i % ANIM.length]}"><svg viewBox="0 0 100 100" aria-hidden="true">${STK[i % STK.length]}</svg></div><span class="sp s1">${ico("star", "fill")}</span><span class="sp s2">${ico("heart", "fill")}</span><span class="sp s3">${ico("star", "fill")}</span></div>`;

/* sunflower bouquet */
const BQ = [[160, 120, 44], [160, 48, 34], [222, 84, 34], [222, 156, 34], [160, 192, 34], [98, 156, 34], [98, 84, 34]];
function sunflower(x, y, r, i) {
  let p = "", d = "";
  for (let k = 0; k < 16; k++) p += `<ellipse cx="0" cy="${-r * .66}" rx="${r * .15}" ry="${r * .36}" fill="${k % 2 ? "#ffb3d6" : "#ff6fa8"}" transform="rotate(${k * 22.5})"/>`;
  for (let k = 0; k < 12; k++) p += `<ellipse cx="0" cy="${-r * .5}" rx="${r * .13}" ry="${r * .28}" fill="${k % 2 ? "#ff4d94" : "#ff8fc0"}" transform="rotate(${k * 30 + 15})"/>`;
  for (let k = 0; k < 14; k++) { const a = k * 2.4, rr = r * .34 * Math.sqrt((k + 1) / 14); d += `<circle cx="${(Math.cos(a) * rr).toFixed(1)}" cy="${(Math.sin(a) * rr).toFixed(1)}" r="${r * .035}" fill="#ff9ccc"/>`; }
  return `<g class="sf" data-i="${i}" tabindex="0" role="button" aria-label="Sunflower ${i + 1}" transform="translate(${x} ${y})"><g class="sfh" style="--d:${(i * .35).toFixed(2)}s">${p}<circle class="sfc" r="${r * .4}" fill="#3a0d24" stroke="#ff4d94" stroke-width="2"/>${d}</g></g>`;
}
const bouquet = () => `<svg class="bqsvg" viewBox="0 0 320 340" role="group" aria-label="Bouquet of 7 sunflowers">
  <defs><linearGradient id="wg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff77b0"/><stop offset="1" stop-color="#b0165f"/></linearGradient></defs>
  <g stroke="#e0709f" stroke-width="5" fill="none" stroke-linecap="round">${BQ.map(([x, y]) => `<path d="M${x} ${y + 20} Q${(x + 160) / 2} 232 160 264"/>`).join("")}</g>
  <path d="M128 226q-34-20-56 6 30 18 56-6z" fill="#d6447f"/><path d="M192 226q34-20 56 6-30 18-56-6z" fill="#d6447f"/>
  ${BQ.map(([x, y, r], i) => sunflower(x, y, r, i)).join("")}
  <path d="M84 232 L236 232 L182 328 L138 328 Z" fill="url(#wg)" stroke="#ff9ccc" stroke-width="2" stroke-linejoin="round"/>
  <path d="M84 232 L160 296 L236 232" fill="rgba(255,255,255,.16)"/>
  <path d="M160 272C132 250 116 272 138 284Z M160 272C188 250 204 272 182 284Z" fill="#ff4d94" stroke="#fff0f6" stroke-width="2" stroke-linejoin="round"/>
  <path d="M156 278L146 306M164 278L174 306" stroke="#ff9ccc" stroke-width="5" stroke-linecap="round"/><circle cx="160" cy="272" r="7" fill="#ff9ccc"/>
</svg>`;

const views = {
  gift() {
    const n = BQ.length;
    panel.innerHTML = `<h2>A little gift for you</h2>
      <div class="gstage"><button class="gift" id="box" aria-label="Open the gift">${ico("gift")}</button><div id="bq" class="bq"></div></div>
      <p class="gnote" id="hint">Tap the box</p>
      <p class="bubble" id="bb" aria-live="polite"></p>`;
    const order = C.sunflowers.map((_, k) => k);
    for (let k = order.length - 1; k > 0; k--) { const r = Math.random() * (k + 1) | 0; [order[k], order[r]] = [order[r], order[k]]; }
    const opened = new Set();
    $("#box").onclick = e => {
      const b = e.currentTarget; if (b.dataset.o) return; b.dataset.o = 1;
      b.classList.add("shake");
      setTimeout(() => {
        const r = b.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + r.height / 2);
        b.remove();
        const bq = $("#bq"); bq.innerHTML = bouquet(); bq.classList.add("bloom");
        $("#hint").innerHTML = `Please click a random sunflower to open a message.<small id="cnt">0 of ${n} opened</small>`;
        bq.querySelectorAll(".sf").forEach(g => {
          const go = () => {
            const i = +g.dataset.i; opened.add(i); g.classList.add("open");
            const bb = $("#bb"); bb.textContent = C.sunflowers[order[i % order.length]];
            bb.classList.remove("on"); bb.offsetWidth; bb.classList.add("on");
            const q = g.getBoundingClientRect(); confetti(q.left + q.width / 2, q.top + q.height / 2, 10);
            $("#cnt").textContent = opened.size + " of " + n + " opened";
            if (opened.size === n) {
              $("#hint").innerHTML = "You found them all " + ico("heart", "fill");
            }
          };
          g.onclick = go;
          g.onkeydown = ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); go(); } };
        });
      }, 600);
    };
  },
  letter() {
    panel.innerHTML = `<h2>A letter for my handsome babyyy</h2>
      <div class="env" id="env">
        <span class="seal">${ico("heart", "fill")}</span>
        <p><b>To:</b> ${esc(C.letterTo)}</p>
        <p><b>From:</b> ${esc(C.from)}</p>
      </div>
      <div class="paper" id="paper">
        <div class="pics" id="pics">${C.letterPics.slice(0, 3).map((src, i) => `<figure class="pol p${i + 1}"><span class="pph">${ico("heart", "fill")}</span><img src="${esc(src)}" alt="Our photo ${i + 1}"></figure>`).join("")}</div>
        <p class="letter" id="lt" aria-live="polite"></p>
      </div>
      <button class="btn" id="go">Open the letter ${ico("mail")}</button>`;
    panel.querySelectorAll(".pol img").forEach(im => im.onerror = () => { im.style.display = "none"; });
    $("#go").onclick = e => {
      e.currentTarget.style.display = "none"; $("#env").classList.add("open");
      setTimeout(() => {
        if (!$("#env")) return;
        $("#env").style.display = "none";
        const paper = $("#paper"), out = $("#lt"); paper.classList.add("show"); paper.offsetWidth; $("#pics").classList.add("on");
        let follow = true; const stop = () => { follow = false; };
        ["wheel", "touchmove", "pointerdown"].forEach(ev => paper.addEventListener(ev, stop, { passive: true }));
        const full = C.letter + "\n" + C.from; let i = 0;
        typer = setInterval(() => {
          out.textContent = full.slice(0, ++i);
          if (follow) paper.scrollTop = paper.scrollHeight;
          if (i >= full.length) clearInterval(typer);
        }, 32);
      }, 450);
    };
  },
  music() {
    const n = C.songs.length;
    panel.innerHTML = `<h2>Songs for you ${ico("heart", "fill")}</h2>
      <p class="intro">Hi My love, please listen to all of these songs 'cause i dedicate it all for you. Enjoy listening!</p>
      <div class="vinyl" id="vn"></div>
      <p class="song" id="sn"></p><p class="artist" id="sa"></p>
      <input type="range" id="sk" value="0" min="0" max="100" step="0.1" aria-label="Seek" style="width:100%;accent-color:var(--pink);margin-bottom:14px">
      <div style="display:flex;gap:10px;justify-content:center;align-items:center">
        <button class="btn" id="pv" aria-label="Previous song">${ico("back")}</button>
        <button class="btn" id="pp">${ico("play")} Play</button>
        <button class="btn" id="nt" aria-label="Next song">${ico("fwd")}</button>
      </div>
      <p class="artist" id="cnt" style="margin:12px 0 0"></p>
      <p class="reveal glass on" id="sm" style="margin-top:14px"></p>`;
    audio = audio || new Audio(); audio.loop = false;
    if (!audio.getAttribute("src")) audio.src = C.songs[track].file;
    const vn = $("#vn"), pp = $("#pp"), sk = $("#sk");
    const sync = () => { const on = !audio.paused; vn.classList.toggle("spin", on); pp.innerHTML = on ? ico("pause") + " Pause" : ico("play") + " Play"; };
    const show = () => {
      const s = C.songs[track];
      $("#sn").textContent = s.title; $("#sa").textContent = s.artist;
      $("#sm").textContent = s.msg; $("#sm").scrollTop = 0; $("#cnt").textContent = "Song " + (track + 1) + " of " + n;
    };
     const change = step => {
      track = (track + step + n) % n;
      audio.src = C.songs[track].file;
      audio.play().catch(() => {});
      if ($("#sn")) show();   // only update the screen if the Songs pop-up is open
    };
    show(); sync();
    audio.onplay = audio.onpause = sync;
    audio.onended = () => change(1);
    audio.ontimeupdate = () => { if (audio.duration) sk.value = audio.currentTime / audio.duration * 100; };
    audio.onerror = () => { if ($("#sa")) $("#sa").textContent = "Song file not found. Check the file name."; };
    sk.oninput = () => { if (audio.duration) audio.currentTime = sk.value / 100 * audio.duration; };
    pp.onclick = () => { audio.paused ? audio.play().catch(() => {}) : audio.pause(); };
    $("#nt").onclick = () => change(1);
    $("#pv").onclick = () => change(-1);
  },
  reasons() {
    panel.innerHTML = `<h2>Why I love you:</h2>
      <div id="stg">${stage(0)}</div>
      <div class="reason glass" id="rs">Baby just tap the pink button below for me to show you a random reason.</div>
      <button class="btn" id="nx">Show me a reason</button>`;
    let last = -1;
    $("#nx").onclick = e => {
      let n; do { n = Math.random() * C.reasons.length | 0; } while (n === last && C.reasons.length > 1);
      last = n; const r = $("#rs"); r.textContent = C.reasons[n];
      r.style.animation = "none"; r.offsetWidth; r.style.animation = "pop .4s";
      $("#stg").innerHTML = stage(n);
      const b = e.currentTarget.getBoundingClientRect(); confetti(b.left + b.width / 2, b.top);
      e.currentTarget.innerHTML = "Another one " + ico("heart", "fill");
    };
  },
  wheel() {
    const n = C.wheel.length, a = 360 / n, R = 108;
    let segs = "";
    for (let i = 0; i < n; i++) {
      const t0 = (i * a - 90) * Math.PI / 180, t1 = ((i + 1) * a - 90) * Math.PI / 180;
      const col = n % 2 && i === n - 1 ? "#8f1246" : i % 2 ? "#c2185b" : "#ff4d94";
      segs += `<path d="M120 120L${(120 + R * Math.cos(t0)).toFixed(1)} ${(120 + R * Math.sin(t0)).toFixed(1)}A${R} ${R} 0 0 1 ${(120 + R * Math.cos(t1)).toFixed(1)} ${(120 + R * Math.sin(t1)).toFixed(1)}Z" fill="${col}" stroke="#fff0f6" stroke-width="2"/>`;
      segs += `<g transform="rotate(${(i + .5) * a} 120 120) translate(120 52)"><g transform="translate(-14 -14) scale(1.17)" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[C.wheel[i].i] || P.heart}</g></g>`;
    }
    panel.innerHTML = `<h2>Spin the wheel</h2>
      <p class="gtip">Spin it and see what sweet prize you win.</p>
      <div class="wheelbox"><svg viewBox="0 -14 240 254" role="img" aria-label="Prize wheel"><g id="wg">${segs}<circle cx="120" cy="120" r="19" fill="#3a0d24" stroke="#ff9ccc" stroke-width="3"/></g><circle cx="120" cy="120" r="${R}" fill="none" stroke="#ff9ccc" stroke-width="4"/><polygon points="108,-10 132,-10 120,16" fill="#fff0f6" stroke="#ff4d94" stroke-width="2" stroke-linejoin="round"/></svg></div>
      <div class="gcenter"><button class="btn" id="sp">Spin! ${ico("refresh")}</button></div>
      <p class="bubble" id="wr" aria-live="polite"></p>`;
    let deg = 0, busy = false;
    $("#sp").onclick = () => {
      if (busy) return; busy = true; $("#wr").classList.remove("on"); $("#wr").textContent = "";
      const w = Math.random() * n | 0, m = (w + .5) * a;
      deg += 360 * 5 + ((((-m - deg) % 360) + 360) % 360) + (Math.random() - .5) * a * .6;
      $("#wg").style.transform = `rotate(${deg}deg)`;
      setTimeout(() => {
        busy = false; const r = $("#wr"); if (!r) return;
        r.innerHTML = `<span class="pt">${esc(C.wheel[w].t)}</span>${esc(C.wheel[w].x)}`; r.classList.add("on");
        const b = r.getBoundingClientRect(); confetti(b.left + b.width / 2, b.top, 20);
      }, 4300);
    };
  }
};

Object.assign(views, {
  timeline() {
    panel.innerHTML = `<h2>Our story</h2><p class="intro">Scroll to see every moment ${ico("down")}</p><div class="tlwrap"><ul class="tl">` +
      C.timeline.map((e, i) => `<li style="--i:${i}"><small>${esc(e.d)}</small><b>${esc(e.t)}</b><p>${esc(e.x)}</p></li>`).join("") + `</ul></div>`;
  },
  when() {
    const ic = i => C.when[i].i || WHEN_ICONS[i % WHEN_ICONS.length];
    panel.innerHTML = `<h2>Open when...</h2><p class="intro">Tap a note to open it.</p><div class="coupons">` +
      C.when.map((w, i) => `<button class="cp" data-i="${i}"><span class="cpi">${ico(ic(i))}</span><span class="cpt">${esc(w.t)}</span><b>${ico("mail")}</b></button>`).join("") + `</div>`;
    panel.querySelectorAll(".cp").forEach(b => b.onclick = () => {
      const i = +b.dataset.i, w = C.when[i];
      b.classList.add("seen"); b.lastChild.innerHTML = ico("check");
      openNote(w.t, w.x, ic(i));
    });
  },
  quiz() {
    panel.innerHTML = `<h2>How well do you know me?</h2><div id="qz"></div>`;
    const box = $("#qz"), n = C.quiz.length; let i = 0, score = 0;
    const draw = () => {
      if (!box.isConnected) return;
      if (i >= n) {
        box.innerHTML = `<p class="qq">You got ${score} out of ${n}!</p><p style="color:var(--muted)">${score === n ? "Perfect. You really know me hehehehe. I LOVE YOU!" : "Awwe, it's fine baby, you can still get another chance. I LOVE YOUUUU!!"} ${ico("heart", "fill")}</p><button class="btn" id="qr">Try again ${ico("play")}</button>`;
        $("#qr").onclick = () => { i = 0; score = 0; draw(); };
        confetti(innerWidth / 2, innerHeight / 2); return;
      }
      const q = C.quiz[i]; let done = false;
      box.innerHTML = `<div class="prog">Question ${i + 1} of ${n}</div><p class="qq">${esc(q.q)}</p><div class="coupons">` +
        q.a.map((a, j) => `<button class="cp" data-j="${j}"><span class="cpt">${esc(a)}</span></button>`).join("") +
        `</div><div class="qnote" id="qnote" aria-live="polite"></div><div class="qnext"><button class="btn" id="qn" style="display:none"></button></div>`;
      const bs = box.querySelectorAll(".cp");
      bs.forEach(b => b.onclick = () => {
        if (done) return; done = true;
        const j = +b.dataset.j, note = $("#qnote");
        bs[q.c].classList.add("ok");
        if (j === q.c) { score++; note.className = "qnote good on"; note.innerHTML = ico("check") + " Checkkk! I love you, pogiii."; }
        else { b.classList.add("no"); note.className = "qnote bad on"; note.innerHTML = "Oops! baby you must be confused it is: <b>" + esc(q.a[q.c]) + "</b>"; }
        const nx = $("#qn"); nx.style.display = ""; nx.innerHTML = (i + 1 < n ? "Next" : "See my score") + " " + ico("fwd");
        nx.onclick = () => { i++; draw(); }; nx.focus();
      });
    };
    draw();
  }
});

function open(name) {
  lastFocus = document.activeElement; clearInterval(typer);
  views[name](); panel.scrollTop = 0; panel.insertAdjacentHTML("afterbegin", `<button class="x" id="cl" aria-label="Close">${ico("x")}</button>`);
  $("#cl").onclick = close; modal.classList.add("on"); $("#cl").focus();
}
function close() { clearInterval(typer); modal.classList.remove("on"); lastFocus && lastFocus.focus(); }
document.querySelectorAll("[data-open]").forEach(b => b.onclick = () => open(b.dataset.open));
modal.onclick = e => { if (e.target === modal) close(); };
addEventListener("keydown", e => { if (e.key === "Escape") { if (sub.classList.contains("on")) closeNote(); else close(); } });

/* countdown to next monthsary */
(() => {
  const sd = new Date(C.startDate + "T00:00:00"), now = new Date(), t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let t = new Date(t0.getFullYear(), t0.getMonth(), sd.getDate());
  if (t < t0) t = new Date(t0.getFullYear(), t0.getMonth() + 1, sd.getDate());
  const n = Math.round((t - t0) / 864e5);
  $("#next").innerHTML = n === 0 ? ico("heart", "fill") + " Today is our monthsary!" : ico("clock") + " Next monthsary in " + n + " day" + (n === 1 ? "" : "s");
})();

$("#scroll").onclick = () => $("#pick").scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });

/* tap sparkles */
addEventListener("pointerdown", e => confetti(e.clientX, e.clientY, 4));

/* passcode lock */
(() => {
  const lock = $("#lock"), card = $("#lockcard"), dots = $("#dots"), pad = $("#pad");
  let val = "", busy = false;
  $("#hintt").textContent = C.hint;
  dots.innerHTML = "<i></i>".repeat(C.code.length);
  ["1","2","3","4","5","6","7","8","9","","0","⌫"].forEach(k => {
    const b = document.createElement("button"); b.innerHTML = k === "⌫" ? ico("delete") : k; b.type = "button";
    if (!k) b.className = "ph"; else { b.setAttribute("aria-label", k === "⌫" ? "Delete" : k); b.onclick = () => press(k); }
    pad.appendChild(b);
  });
  const paint = () => [...dots.children].forEach((d, i) => d.classList.toggle("f", i < val.length));
  function press(k) {
    if (busy) return;
    val = k === "⌫" ? val.slice(0, -1) : (val.length < C.code.length ? val + k : val);
    paint();
    if (val.length === C.code.length) { busy = true; setTimeout(check, 200); }
  }
  function check() {
    if (val === C.code) {
      $("#lockmsg").textContent = "Welcome in, love";
      confetti(innerWidth / 2, innerHeight / 2, 40);
      setTimeout(() => { lock.classList.add("out"); $("#app").inert = false; setTimeout(() => lock.remove(), 800); }, 500);
    } else {
      card.classList.add("bad"); $("#lockmsg").textContent = "Not quite. Try again";
      setTimeout(() => { card.classList.remove("bad"); val = ""; paint(); busy = false; }, 500);
    }
  }
  addEventListener("keydown", e => {
    if (!document.body.contains(lock) || lock.classList.contains("out")) return;
    if (/^\d$/.test(e.key)) press(e.key); else if (e.key === "Backspace") press("⌫");
  });
})();
