/* Scituate Racquet & Fitness, Scituate MA. Owned by the Horne family
   (Chris & Barbara Horne; Bill Horne runs racquet sports). Every fact here
   comes from srfclub.com and the program flyers posted on it, checked
   2026-11-25. Their site blocks curl (403), so read it in a browser; the
   membership table is a Wix table widget. Hours: their home page and
   Hours page disagree (8:30pm vs 9pm Mon–Thu); this uses the home page's
   Fall/Winter hours. No published reviews. Don't add claims that aren't
   on their site. */
window.CLUB = {
  slug: "scituate-racquet-and-fitness",
  name: "Scituate Racquet & Fitness",
  shortName: "SRF",
  monogram: "SRF",
  logo: "img/logo.png",
  logoName: true,
  contactPerson: "the SRF team",
  website: "srfclub.com",

  colors: {
    ink: "#161a35",
    "ink-2": "#4a5068",
    "ink-3": "#8a8fa3",
    paper: "#f7f8f5",
    soft: "#ebf2ec",
    line: "#dbe3dc",
    accent: "#2f6b45",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Poppins", body: "Inter", headingWeight: 600, headingTrack: "-0.015em", headingCase: "none" },

  nav: [["Racquets", "#services"], ["Schedule", "#schedule"], ["Membership", "#pricing"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Tennis · Paddle · Pickleball · Swim · Fitness",
    title: "Fitness, fun and community in Scituate.",
    sub: "Three indoor tennis courts, three platform tennis courts, four pickleball courts, a squash court, a six-lane indoor pool and a fitness center, family-run by the Hornes for over 30 years.",
    image: "img/hero.jpg",
    alt: "The indoor tennis courts at Scituate Racquet & Fitness",
    position: "50% 60%",
    cta: "Ask about membership",
    secondary: ["See membership", "#pricing"],
    meta: "1004 Chief Justice Cushing Hwy (Route 3A), Scituate"
  },

  offer: {
    label: "2026–2027 season",
    title: "Paddle & pickleball-only memberships. No court fees.",
    sub: "Pickleball $525 a year, paddle from $620, with no enrollment fee. Drop-in round robins included, plus a paddle hut with a gas fireplace and a fire pit out back.",
    cta: "Ask about a racquet membership"
  },

  services: {
    eyebrow: "Something for the whole family",
    title: "Every racquet sport, a pool and a gym, under one membership.",
    sub: "Personalized programming and individual care for every member, at a fair price.",
    items: [
      { title: "Tennis", text: "Three indoor courts, MITA teams, drop-in clinics, singles and mixed doubles leagues, and junior classes from age 4 through high school.", meta: "Led by USTA pro Bill Horne" },
      { title: "Paddle & pickleball", text: "Three platform tennis courts for winter nights outdoors, four pickleball courts, round robins, clinics and ladder leagues.", meta: "Specialty memberships" },
      { title: "Swim", text: "A six-lane indoor pool for laps, water aerobics, eight-week lessons from preschool up, and the Sailfish swim teams for ages 7–18.", meta: "Members $200 per session" },
      { title: "Fitness", text: "A well-equipped fitness center, 15+ free fitness and aqua classes, and personal training with Director of Fitness Gloria White.", meta: "Classes included" }
    ],
    gallery: [
      ["img/pickleball.jpg", "Two members playing on the indoor pickleball courts"],
      ["img/paddle.jpg", "The outdoor platform tennis courts"],
      ["img/junior-tennis.jpg", "A junior tennis class on the indoor courts"],
      ["img/fitness.jpg", "The fitness center"],
      ["img/paddle-group.jpg", "Paddle players together after a round robin"]
    ]
  },

  schedule: {
    eyebrow: "This week at SRF",
    title: "Clinics, leagues and classes, every day.",
    sub: "A sample of the weekly fitness, tennis, paddle and pickleball programs. Fitness and aqua classes are free for members.",
    days: [
      { day: "Monday", classes: [["7:30am", "Fit Over Fifty", "Fitness"], ["8:30am", "Water Aerobics", "Pool"], ["7:00pm", "Advanced men's match play", "Paddle"]] },
      { day: "Tuesday", classes: [["9:00am", "Muscle Mix", "Fitness"], ["6:00pm", "Yoga", "Fitness"], ["6:30pm", "Women's round robin, all levels", "Paddle"]] },
      { day: "Wednesday", classes: [["6:30am", "Mixed drop-in clinic", "Tennis"], ["7:30am", "Fit Over Fifty", "Fitness"], ["8:30am", "Water Aerobics", "Pool"], ["9:00am", "Screens & positioning drop-in clinic", "Paddle"]] },
      { day: "Thursday", classes: [["8:30am", "Yoga", "Fitness"], ["8:30am", "Water Aerobics", "Pool"], ["9:00am", "Intermediate/advanced drop-in clinic", "Paddle"], ["10:30am", "Beginner/intermediate drop-in clinic", "Paddle"], ["7:30pm", "Men's drop-in round robin", "Paddle"]] },
      { day: "Friday", classes: [["6:30am", "Mixed drop-in clinic", "Tennis"], ["7:30am", "Fit Over Fifty", "Fitness"], ["9:00am", "Muscle Mix", "Fitness"], ["9:00am", "Women's ladder league", "Paddle"], ["5:00pm", "Social open play", "Pickleball"]] },
      { day: "Saturday", classes: [["8:00am", "Pickleball clinics", "Pickleball"], ["8:30am", "Step", "Fitness"], ["8:30am", "Water Aerobics", "Pool"], ["8:30am", "Mixed drop-in clinic, 3.0", "Tennis"], ["10:00am", "Drop-in clinic, 3.5+", "Tennis"]] },
      { day: "Sunday", classes: [["7:30am", "Mixed drop-in clinic", "Tennis"], ["9:15am", "Yoga", "Fitness"], ["12:00pm", "MITA singles / mixed doubles (alternating)", "Tennis"]] }
    ]
  },

  about: {
    eyebrow: "Paddle season is here",
    title: "The only racquet sport you can play outside all winter.",
    paragraphs: [
      "Platform tennis is played on elevated aluminum decks with the walls in play. Courts are typically heated from underneath to melt ice, so the game goes on through the coldest nights.",
      "SRF has three courts, an indoor paddle hut with a gas fireplace, and a back viewing area with chairs and a fire pit. Weekly round robins, drop-in clinics and a women's ladder league make it easy to find a game at any level."
    ],
    chips: ["3 platform tennis courts", "Paddle hut & fire pit", "No court fees for paddle members"],
    image: "img/paddle.jpg",
    alt: "The platform tennis courts at Scituate Racquet & Fitness"
  },

  pricing: {
    eyebrow: "Membership",
    title: "Find your place at the club.",
    sub: "Membership includes the fitness center, 15+ fitness and aqua classes, the indoor pool, steam and sauna, and reduced rates on lessons. Pay annually or monthly.",
    groups: [
      { name: "Full club", note: "Annual, or monthly", rows: [["Family", "$2,880/yr · $240/mo"], ["Couple", "$2,220/yr · $185/mo"], ["Individual", "$1,380/yr · $115/mo"], ["Senior couple", "$1,740/yr · $145/mo"], ["Senior", "$960/yr · $80/mo"], ["Young adult (19–22)", "$900/yr · $75/mo"], ["Junior (12–18)", "$840/yr · $70/mo"]] },
      { name: "Racquet-only", note: "No enrollment fee, no court fees", rows: [["Pickleball", "$525/yr"], ["Paddle tennis, single", "$620/yr"], ["Paddle tennis, family", "$1,040/yr"]] },
      { name: "Court fees", note: "For full-club members", rows: [["Tennis", "$53/hour"], ["Squash", "$24/hour"], ["Pickleball", "$16/hour"], ["Platform tennis", "$12/hour"]] }
    ],
    fine: "Enrollment fee $250 (seniors $125). Medical freezes are free with a doctor's letter to return to the club."
  },

  amenities: {
    eyebrow: "The club",
    title: "Everything the family plays, in one place.",
    items: [
      "3 indoor tennis courts", "3 platform tennis courts", "4 pickleball courts", "Squash court",
      "6-lane indoor pool", "Fitness center", "15+ fitness & aqua classes", "Steam & sauna",
      "Paddle hut with gas fireplace", "Fire pit viewing area", "Sailfish swim team", "MITA tennis teams"
    ]
  },

  book: {
    eyebrow: "Join the club",
    title: "Ask about membership.",
    sub: "Tell us what you're interested in and we'll get right back to you.",
    formTitle: "Ask about membership",
    interests: ["Full club membership", "Family membership", "Pickleball membership", "Paddle membership", "Tennis lessons or clinics", "Junior tennis", "Swim lessons", "Personal training"],
    submit: "Send"
  },

  contact: {
    address: "1004 Chief Justice Cushing Hwy, Scituate, MA 02066",
    phone: "(781) 545-1184",
    email: "info@srfclub.com",
    hours: ["Mon–Thu 5:30am – 8:30pm", "Friday 5:30am – 7:00pm", "Saturday 6:00am – 4:00pm", "Sunday 7:00am – 4:00pm"]
  },

  chat: {
    tip: "Hi! Ask me anything about SRF: membership, paddle, swim lessons…",
    greeting: "Hi! I'm the Scituate Racquet & Fitness assistant. Ask me about membership, tennis, paddle, pickleball, swim lessons, fitness classes, or anything else.",
    suggestions: ["How much is a family membership?", "Is there a pickleball-only membership?", "When are swim lessons?", "What's on Saturday?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have the SRF team get back to you directly.",
    done: "Got it, {first}! I've passed this to the SRF team, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "monthly", "per month", "annual", "join", "sign up", "rate", "$"],
        a: "Full club memberships, annual or monthly:\n\nFamily $2,880/yr ($240/mo) · Couple $2,220 ($185/mo) · Individual $1,380 ($115/mo) · Senior couple $1,740 ($145/mo) · Senior $960 ($80/mo) · Young adult 19–22 $900 ($75/mo) · Junior 12–18 $840 ($70/mo).\n\nThat includes the fitness center, 15+ fitness and aqua classes, the pool, steam and sauna, and reduced lesson rates. The enrollment fee is $250 ($125 for seniors).",
        follow: "Is there a pickleball-only membership?" },
      { topic: "Family membership", weight: 2, keys: ["family", "kids", "household", "couple", "spouse", "husband", "wife"],
        a: "A family membership is $2,880 a year or $240 a month, and a couple is $2,220 a year or $185 a month. Members also get reduced rates on junior tennis and swim lessons." },
      { topic: "Pickleball", weight: 2, keys: ["pickleball", "pickle"],
        a: "A pickleball-only membership is $525 for the season (October 1 – September 30), with no enrollment fee and no court fees, and all drop-in round robins are included.\n\nThere's open court time Monday, Wednesday and Sunday, social open play Friday 5–7pm, MIPA match play against other clubs Friday 10:30–12, and clinics Saturday 8–10am. Lessons are available on request." },
      { topic: "Paddle tennis", weight: 2, keys: ["paddle", "platform", "round robin", "ladder"],
        a: "Paddle-only memberships are $620 a year single or $1,040 family, with no enrollment fee and no court fees. We have three platform tennis courts, an indoor paddle hut with a gas fireplace and a fire pit out back.\n\nEvery week: men's match play Monday 7pm, a women's round robin Tuesday 6:30pm, drop-in clinics Wednesday and Thursday mornings, a men's round robin Thursday 7:30pm, and a women's ladder league Friday 9am." },
      { topic: "Tennis", weight: 2, keys: ["tennis", "court", "clinic", "mita", "league", "drop in", "drop-in", "doubles", "singles", "lesson"],
        a: "We have three indoor courts at $53/hour for members. There are mixed drop-in clinics Wednesday and Friday at 6:30am and Saturday and Sunday mornings, MITA team practices and matches, singles and mixed doubles leagues on Sundays, and a ladies FLEX singles league any day.\n\nPrivate lessons are with our pros, including USTA-certified Bill Horne." },
      { topic: "Junior tennis", weight: 2, keys: ["junior", "kid", "child", "son", "daughter", "year old", "age"],
        a: "Junior tennis runs in 10-week sessions (Session 2 is Nov 16 – Feb 5), from Intro to Tennis at age 4 through Club High School.\n\nAge 4 is $140 for members ($180 non-members), and ages 7–8 are $270 ($350 non-members). Club teams for strong players are by invite. Want someone to help you pick the right class?" },
      { topic: "Swim lessons", weight: 2, keys: ["swim", "pool", "lesson", "sailfish", "swim team", "lap"],
        a: "Swim lessons are 8-week programs: $200 for members, $248 for non-members. Preschool levels run weekday mornings, and Beginner through Intermediate run after school, Monday–Thursday 4–5:30pm. The next session starts January 4.\n\nOlder swimmers can join the Sailfish swim team (ages 7–18) or the Junior Sailfish team, which practices one day a week." },
      { topic: "Fitness classes", keys: ["class", "yoga", "aerobic", "water aerobics", "step", "muscle mix", "fit over fifty", "fitness", "gym"],
        a: "Members get 15+ fitness and aqua classes at no charge: Fit Over Fifty, Muscle Mix, Step, Yoga and Water Aerobics, plus a walk-through and setup on the fitness center machines. Ask me about a specific day, like “What's on Tuesday?”" },
      { topic: "Personal training", weight: 2, keys: ["personal train", "trainer", " pt ", "one on one", "semi private", "small group", "injury"],
        a: "Personal training is with Gloria White, our ACSM-certified Director of Fitness, who specializes in injury recovery. Private training is $60/hr, semi-private $40/hr per person, groups of 3–4 are $30/hr each and groups of 6 are $20/hr each." },
      { topic: "Steam & sauna", weight: 2, keys: ["sauna", "steam", "locker", "amenit"],
        a: "Yes! Every membership includes the steam room and sauna, along with the indoor pool, the fitness center and 15+ fitness and aqua classes." },
      { topic: "Hours", weight: 2, keys: ["hour", "open", "close", "open on", "close on", "early", "late", "weekend", "holiday"],
        a: "Fall/winter hours are Monday–Thursday 5:30am–8:30pm, Friday 5:30am–7pm, Saturday 6am–4pm and Sunday 7am–4pm." },
      { topic: "Location", keys: ["where", "address", "location", "direction", "parking", "3a", "route"],
        a: "We're at 1004 Chief Justice Cushing Highway (Route 3A) in Scituate. Coming from Route 3, take Route 228 north to 3A, and turn left after the “Welcome to Scituate” sign. Call us at (781) 545-1184." }
    ]
  },

  bts: {
    sampleTopic: "Membership",
    recentLeads: [["Kate Sullivan", "Website form · Paddle membership", "Joined"], ["Mark Doherty", "Website chat · Swim lessons", "Booked"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Scituate Racquet & Fitness! {asked}\n\nThe best next step is to come by for a tour. Membership includes the fitness center, 15+ fitness and aqua classes, the indoor pool, and steam and sauna, plus reduced rates on tennis and swim lessons.\n\nSee you soon,\nScituate Racquet & Fitness\n(781) 545-1184"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Here's this week's schedule of clinics, round robins and classes.”"],
      ["Day 3", "“Paddle season is in full swing. Want to try a drop-in clinic this week?”"],
      ["Day 7", "“Swim lessons start January 4 and fill up fast. Want us to hold a spot?”"]
    ],
    report: [["38", "new enquiries"], ["15", "came in for a tour"], ["7", "new memberships"], ["$1,195/mo", "in new membership revenue"]],
    cta: {
      title: "Want this running at SRF?",
      text: "Right now, the only way to ask about joining SRF is to call or email, and there isn't a single form on the site. Switchboard captures every enquiry, answers in seconds day or night, follows up automatically, and puts every lead in one place, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
