/* Momentum Custom Fitness, Hingham MA. Co-owners Mike Silva and Wendy Swett.
   Every fact here comes from momentumcustomfitness.com, checked 2026-11-25.
   It's a personal training studio with an open gym, so there's no class
   schedule. Their Reiki prices differ between the Rates page and the Reiki
   page, so the demo doesn't quote Reiki prices. The sauna price uses the
   home-page special (10 for $200). Don't add claims that aren't on their site. */
window.CLUB = {
  slug: "momentum-custom-fitness",
  name: "Momentum Custom Fitness",
  shortName: "Momentum",
  monogram: "M",
  logo: "img/logo.png",
  logoWide: true,
  contactPerson: "Mike and Wendy",
  contactPlural: true,
  website: "momentumcustomfitness.com",

  colors: {
    ink: "#0e1b2e",
    "ink-2": "#4a5568",
    "ink-3": "#8a94a6",
    paper: "#f7f8fa",
    soft: "#edf1f7",
    line: "#dfe4ec",
    accent: "#2f5a9a",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Manrope", body: "Inter", headingWeight: 700, headingTrack: "-0.02em", headingCase: "none" },

  nav: [["Training", "#services"], ["ISOPHIT™", "#about"], ["Rates", "#pricing"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Personal training · Open gym · Infrared sauna · Hingham",
    title: "If it's worth doing, it's worth doing right.",
    sub: "A 5,000 sq ft training studio on Recreation Park Drive, where certified trainers build a program around your goals, your limits and the way your body moves. Free consultations, always.",
    image: "img/hero.jpg",
    alt: "The training floor at Momentum Custom Fitness in Hingham",
    position: "50% 50%",
    cta: "Book a free consultation",
    secondary: ["See rates", "#pricing"],
    meta: "Open 7 days · 5am–10pm · 150 Recreation Park Dr"
  },

  offer: {
    label: "Right now",
    title: "Infrared sauna special: 10 sessions for $200.",
    sub: "Sunlighten infrared sauna sessions for recovery, relaxation and a deep sweat. Free personal training consultations, always.",
    cta: "Book a sauna session"
  },

  services: {
    eyebrow: "What we do",
    title: "Everything is custom, even the group work.",
    sub: "For clients aged 8 to 100: beginners, athletes, pre- and post-physical therapy, and people who've never exercised at all.",
    items: [
      { title: "Personal training", text: "One-on-one, semi-private (2:1) or custom groups of up to four, all built on biomechanics, not fads or fitness gurus.", meta: "From $40 a session" },
      { title: "ISOPHIT™ strength training", text: "Isometric strength training that's safe on your joints. Momentum has the only ISOPHIT™ system in Massachusetts.", meta: "One of fewer than 100 worldwide" },
      { title: "Open gym", text: "Cybex, Keiser, Nautilus and Freemotion strength equipment, a full cardio line and 1,000 sq ft of turf for sleds, med balls and agility work.", meta: "$59.95/mo" },
      { title: "Recovery & wellness", text: "Sunlighten infrared sauna, nutrition counseling with registered dietitians, and Reiki with Wendy, a Reiki Master and Teacher.", meta: "Under one roof" }
    ],
    gallery: [
      ["img/training.jpg", "Mike coaching a client through a dumbbell press"],
      ["img/isophit-coaching.jpg", "A young athlete training on the ISOPHIT system"],
      ["img/dumbbells.jpg", "The dumbbell racks on the open gym floor"],
      ["img/sauna.jpg", "The Sunlighten infrared sauna"],
      ["img/reiki-room.jpg", "The Reiki room"]
    ]
  },

  about: {
    eyebrow: "Only in Massachusetts at Momentum",
    title: "ISOPHIT™: strength without the strain.",
    paragraphs: [
      "The patented ISOPHIT™ Strength Trainer applies isometric exercises at every joint angle, improving strength, stability and mobility while reducing joint pain and the risk of injury.",
      "Co-owners Mike Silva and Wendy Swett have decades of combined experience. Mike holds a Master's in Human Performance and Injury Prevention and has worked in fitness since 1994. Try ISOPHIT™ with a free training consultation."
    ],
    chips: ["Only ISOPHIT™ in MA", "Master's-level trainers", "Locally owned in Hingham"],
    image: "img/isophit.jpg",
    alt: "A client training on the ISOPHIT strength trainer"
  },

  pricing: {
    eyebrow: "Rates",
    title: "Simple rates. Free consultations.",
    sub: "15% off for active and veteran military, first responders, firefighters and police officers.",
    groups: [
      { name: "Open gym", note: "Open 7 days, 5am–10pm", rows: [["Individual", "$59.95/mo"], ["Family", "$119/mo"], ["Student", "$34.95/mo"]] },
      { name: "Personal training", note: "Packages, priced per session", rows: [["One-on-one (8 / 16 / 24 sessions)", "$85 / $80 / $75"], ["Semi-private, 2 people (8 / 16)", "$60 / $55 each"], ["Custom group of 3 (10 sessions)", "$45 each"], ["Custom group of 4+ (10 sessions)", "$40 each"]] },
      { name: "ISOPHIT™ & sauna", note: "Packages and single sessions", rows: [["ISOPHIT™, 10 sessions", "$55/session"], ["ISOPHIT™, 20 sessions", "$50/session"], ["Infrared sauna, single session", "$35"], ["Infrared sauna, 10 sessions (special)", "$200"]] }
    ],
    fine: "Nutrition counseling with Margot Healey, RDN, accepts BlueCross, Cigna, Harvard Pilgrim and Aetna. Ask about Reiki packages with Wendy."
  },

  amenities: {
    eyebrow: "The studio",
    title: "5,000 square feet, clean, professional and friendly.",
    items: [
      "Cybex, Keiser, Nautilus & Freemotion", "1,000 sq ft of turf", "StairMasters & Arc Trainers", "Assault, spin & recumbent bikes",
      "Concept II rowers", "ISOPHIT™ Strength Trainer", "Sunlighten infrared sauna", "Private Reiki room",
      "Smoothie bar", "Registered dietitians", "Open 7 days, 5am–10pm", "Wheelchair accessible"
    ]
  },

  quotes: {
    eyebrow: "Reviews",
    title: "Why clients stay for years.",
    items: [
      ["“I have severe Rheumatoid Arthritis and this is the FIRST piece of equipment that I’ve ever been able to use without extreme pain.”", "Susan A., on ISOPHIT™"],
      ["“Co-owners Mike and Wendy both are fantastic and rise far above all of the personal training/fitness options around… I have seen results and feel so much better!”", "Karen E."],
      ["“I have been working out with Mike for 5+ years. He is extremely knowledgeable when it comes to fitness, the body and nutrition.”", "Sue S."]
    ]
  },

  book: {
    eyebrow: "Get started",
    title: "Book your free consultation.",
    sub: "Tell us what you're interested in and Mike or Wendy will get right back to you.",
    formTitle: "Book a free consultation",
    interests: ["Personal training", "Semi-private training", "Small group training", "ISOPHIT™", "Open gym membership", "Infrared sauna", "Nutrition counseling", "Reiki"],
    submit: "Send"
  },

  contact: {
    address: "150 Recreation Park Drive, Unit 1, Hingham, MA 02043",
    phone: "(781) 426-0001",
    email: "info@momentumcustomfitness.com",
    hours: ["Open 7 days a week", "5:00am – 10:00pm"]
  },

  chat: {
    tip: "Hi! Ask me anything about Momentum: training, ISOPHIT™, the sauna…",
    greeting: "Hi! I'm the Momentum Custom Fitness assistant. Ask me about personal training, ISOPHIT™, the open gym, the infrared sauna, or anything else.",
    suggestions: ["How much is personal training?", "What is ISOPHIT?", "Do you have a sauna?", "How much is a gym membership?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have Mike or Wendy get back to you directly.",
    done: "Got it, {first}! I've passed this to Mike and Wendy, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Personal training", weight: 2, keys: ["personal train", "training", "trainer", " pt ", "coach", "one on one", "1 on 1", "1:1"],
        a: "Every program is built around your goals, limitations and body mechanics. One-on-one packages are $85/session for 8, $80 for 16 and $75 for 24.\n\nSemi-private (2 people) is $60/session each for 8 or $55 for 16, and custom groups are $45 each for 3 people or $40 for 4+.\n\nConsultations are always free. Want to book one?",
        follow: "Do you do small groups?" },
      { topic: "Small group training", weight: 2, keys: ["small group", "group", "class", "friends", "semi private", "semi-private", "partner"],
        a: "Our groups are capped at four people so they stay custom: 60-minute sessions with a warm-up, station circuits, stretching and a cool down. Groups of 3 are $45/session each and groups of 4+ are $40, in 10-session packages.\n\nWe recommend (but don't require) six one-on-one sessions first so your trainer gets to know you. You can also form your own group with friends." },
      { topic: "ISOPHIT™", weight: 2, keys: ["isophit", "iso", "isometric", "joint", "arthritis", "pain", "rehab", "physical therapy", "injur"],
        a: "ISOPHIT™ is an isometric strength training system that builds strength, stability and mobility while being easy on your joints. We have the only one in Massachusetts, and there are fewer than 100 worldwide.\n\nPackages are $55/session for 10 or $50/session for 20, and you can try it with a free training consultation." },
      { topic: "Infrared sauna", weight: 2, keys: ["sauna", "infrared", "sunlighten", "sweat", "detox", "recover"],
        a: "Our Sunlighten infrared sauna sessions are $35 each, and right now we have a special: 10 sessions for $200. Ask about a free sauna trial session too." },
      { topic: "Open gym membership", keys: ["membership", "gym", "join", "monthly", "per month", "how much", "price", "cost", "family", "student", "$"],
        a: "Open gym is $59.95/month for individuals, $119/month for families and $34.95/month for students. You get 5,000 sq ft with Cybex, Keiser, Nautilus and Freemotion equipment, a full cardio line and 1,000 sq ft of turf, open 7 days from 5am to 10pm.",
        follow: "How much is personal training?" },
      { topic: "Equipment", keys: ["weight", "equipment", "dumbbell", "machine", "cardio", "treadmill", "bike", "rower", "turf", "sled", "squat", "bench", "big", "size"],
        a: "The studio is 5,000 sq ft: Cybex, Keiser, Nautilus and Freemotion strength equipment, dumbbells and free weights, StairMasters, Arc Trainers, treadmills, Assault, spin and recumbent bikes, Concept II rowers, and 1,000 sq ft of turf for sleds and med balls." },
      { topic: "Hours", keys: ["hour", "open", "close", "early", "late", "when", "weekend", "sunday", "saturday"],
        a: "We're open seven days a week, 5:00am to 10:00pm." },
      { topic: "Nutrition counseling", weight: 2, keys: ["nutrition", "diet", "dietitian", "dietician", "weight loss", "lose weight", "insurance", "diabetes", "red sox"],
        a: "We have two nutrition experts: Margot Healey, RDN, LDN, CDE, who accepts BlueCross, Cigna, Harvard Pilgrim and Aetna, and Glen Tobias, MS, RD, CSSD, the performance dietitian for the Boston Red Sox. Free in-person consultations are available." },
      { topic: "Reiki", weight: 2, keys: ["reiki", "energy", "healing", "anxiety", "stress", "relax"],
        a: "Wendy is a Reiki Master and Teacher, and her one-hour sessions help with pain, stress and anxiety while you relax deeply, fully clothed. She offers single sessions and packages. Want her to reach out with times and pricing?" },
      { topic: "Discounts", weight: 2, keys: ["discount", "military", "veteran", "first responder", "police", "firefighter", "fire", "nurse"],
        a: "We offer 15% off for active and veteran military, first responders, firefighters and police officers." },
      { topic: "Trying it first", weight: 2, keys: ["try", "trial", "consult", "first time", "visit", "tour", "beginner", "never"],
        a: "Consultations are always free, for personal training, ISOPHIT™ and nutrition, and they can usually be booked within a few days. There's a free infrared sauna trial session too. We work with complete beginners all the time." },
      { topic: "Kids & athletes", weight: 2, keys: ["kid", " son ", "daughter", "teen", "year old", "athlete", "speed", "agility", "sport"],
        a: "We train clients from age 8 to 100. For athletes we do sports-specific training, and we have a certified speed coach on staff plus 1,000 sq ft of turf for speed and agility work." },
      { topic: "Location", keys: ["where", "address", "location", "direction", "parking", "park", "recreation"],
        a: "We're at 150 Recreation Park Drive, Unit 1, in Hingham. You can call us at (781) 426-0001." }
    ]
  },

  bts: {
    sampleTopic: "Personal training",
    recentLeads: [["Tom Brennan", "Website form · ISOPHIT™", "Booked"], ["Laura Keane", "Website chat · Infrared sauna", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Momentum! {asked}\n\nThe best next step is a free consultation. We'll talk through your goals and any limitations, and show you around the studio, including the only ISOPHIT™ system in Massachusetts.\n\nSee you soon,\nMomentum Custom Fitness\n(781) 426-0001"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Your free consultation is waiting. Want to pick a time?”"],
      ["Day 3", "“Have you tried ISOPHIT™? It's the only one in Massachusetts, and you can try it free.”"],
      ["Day 7", "“Our infrared sauna special is still on: 10 sessions for $200. Want to come in?”"]
    ],
    report: [["26", "new enquiries"], ["12", "booked a consultation"], ["5", "new training clients"], ["$3,400", "in new training packages"]],
    cta: {
      title: "Want this running at Momentum?",
      text: "Right now, almost every page on your site says “call us.” Switchboard answers the people who'd rather type, books the free consultation, follows up automatically, and puts every enquiry in one place, so you two can stay on the floor.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
