/* Falmouth Sports Center Health Club, 33 Highfield Dr, Falmouth MA (Cape
   Cod). Serving Falmouth since 1980. info@falmouthsportscenter.com,
   508-548-7384. Every fact here comes from falmouthsportscenter.com and its
   public Facebook page, checked 2026-11-27. Their site is a 4-page Network
   Solutions site that isn't mobile-friendly (fixed 980px, no viewport tag:
   prices run off the screen on a phone); its contact form is a 2012
   form-builder iframe. Site photos are ~200px thumbnails, so the better
   shots come from their Facebook page. No logo file, so the wordmark is
   used. No classes, reviews, or PT prices are published. Don't add claims
   that aren't on their site. */
window.CLUB = {
  slug: "falmouth-sports-center",
  name: "Falmouth Sports Center",
  shortName: "FSC",
  monogram: "FSC",
  contactPerson: "the front desk",
  website: "falmouthsportscenter.com",

  colors: {
    ink: "#0b1d36",
    "ink-2": "#46546a",
    "ink-3": "#8590a2",
    paper: "#f7f8fa",
    soft: "#eaf0f8",
    line: "#dce3ec",
    accent: "#0b3a6e",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Oswald", body: "Inter", headingWeight: 600, headingTrack: "0.005em", headingCase: "uppercase" },

  nav: [["Equipment", "#services"], ["Membership", "#pricing"], ["Training", "#about"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Health club · Falmouth, Cape Cod",
    title: "9,000 square feet of fitness, since 1980.",
    sub: "Cardio, strength, free weights and the Rig Room, with personal trainers who bring over 100 years of combined experience. Memberships from one month to a full year.",
    image: "img/hero.jpg",
    alt: "The cardio area at Falmouth Sports Center",
    position: "50% 50%",
    cta: "Ask about membership",
    secondary: ["See rates", "#pricing"],
    meta: "33 Highfield Drive, Falmouth · (508) 548-7384"
  },

  offer: {
    label: "Visiting the Cape?",
    title: "Drop in for $15 a day.",
    sub: "Or join for a month, three months, six months or a year. Ask about group rates through select health insurers and employers.",
    cta: "Ask about a day pass"
  },

  services: {
    eyebrow: "The facility",
    title: "Everything you need, in one 9,000 sq ft club.",
    sub: "Our top priority is a safe and positive atmosphere where you can achieve all your fitness goals.",
    items: [
      { title: "Cardio", text: "Treadmills, bikes, Arc trainers and StepMills from Life Fitness, Matrix, Star Trac, Cybex, Concept2, Octane and Precor.", meta: "Every major brand" },
      { title: "Strength training", text: "Freemotion, Epic, Body Masters, Keiser and Hammer Strength machines for every muscle group.", meta: "Selectorized & plate-loaded" },
      { title: "Free weights", text: "Squat and power racks, benches, kettlebells, a hack sled, a hip thrust station and space for stretching.", meta: "Serious strength" },
      { title: "The Rig Room", text: "A functional training room with a step-up platform, cargo net, TRX, dip and pull-up bars, heavy bags, a tire flip, turf strip and slam balls.", meta: "Functional training" }
    ],
    gallery: [
      ["img/cardio.jpg", "The cardio floor at Falmouth Sports Center"],
      ["img/rig-room.jpg", "A member climbing the cargo net in the Rig Room"],
      ["img/floor-collage.jpg", "The strength and cardio areas"],
      ["img/free-weights.jpg", "The free weight area"]
    ]
  },

  about: {
    eyebrow: "Personal training",
    title: "Over 100 years of combined experience.",
    paragraphs: [
      "Our personal trainers work with all ages, levels and goals, whether you're brand new to the gym, coming back after time away, or training for something specific.",
      "Our staff is ready to help on your fitness journey, from showing you around the equipment to building a plan that fits you."
    ],
    chips: ["All ages & levels", "Since 1980", "100+ years combined"],
    image: "img/floor-collage.jpg",
    alt: "Inside Falmouth Sports Center"
  },

  pricing: {
    eyebrow: "Membership",
    title: "Rates and memberships to fit your needs.",
    sub: "Short-term or annual, individual or family. Monthly EFT payments are available on annual memberships.",
    groups: [
      { name: "Individual", note: "Paid in full", rows: [["1 month", "$85"], ["3 months", "$200"], ["6 months", "$350"], ["12 months", "$570"]] },
      { name: "Family & visitors", note: "", rows: [["Family, annual (2 members)", "From $855"], ["Visitor / day pass", "$15"], ["Annual with monthly EFT", "Ask us"], ["Insurance & employer group rates", "Ask us"]] }
    ],
    fine: "Group rates may apply through certain health insurers and employers. Holiday hours are posted on our Facebook page."
  },

  amenities: {
    eyebrow: "At a glance",
    title: "A real gym, right in Falmouth.",
    items: [
      "9,000 sq ft facility", "Full cardio deck", "Hammer Strength & Keiser", "Squat & power racks",
      "Kettlebells & hack sled", "Rig Room with cargo net", "TRX & heavy bags", "Turf strip & tire flip",
      "Personal training", "Day passes for visitors", "Family memberships", "Open 7 days"
    ]
  },

  book: {
    eyebrow: "Get started",
    title: "Ask about membership.",
    sub: "Tell us what you're interested in and we'll get right back to you.",
    formTitle: "Ask about membership",
    interests: ["Individual membership", "Family membership", "Annual with monthly payments", "Day pass", "Personal training", "Insurance or employer rate"],
    submit: "Send"
  },

  contact: {
    address: "33 Highfield Drive, Falmouth, MA 02540",
    phone: "(508) 548-7384",
    email: "info@falmouthsportscenter.com",
    hours: ["Mon–Thu 5:30am – 9:00pm", "Friday 5:30am – 7:00pm", "Sat–Sun 8:00am – 3:00pm"]
  },

  chat: {
    tip: "Hi! Ask me anything about FSC: rates, day passes, equipment…",
    greeting: "Hi! I'm the Falmouth Sports Center assistant. Ask me about membership, day passes, personal training, our equipment, or anything else.",
    suggestions: ["How much is a membership?", "Can I get a day pass?", "Do you have a family plan?", "What are your hours?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have our front desk get back to you directly.",
    done: "Got it, {first}! I've passed this to our front desk, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "rate", "join", "sign up", "month", "year", "annual", "$"],
        a: "Individual memberships are $85 for one month, $200 for three months, $350 for six months or $570 for a full year. Annual memberships can also be paid monthly by EFT.\n\nWant someone to send you the monthly payment option?",
        follow: "Do you have a family plan?" },
      { topic: "Family membership", weight: 2, keys: ["family", "spouse", "husband", "wife", "partner", "couple", "kids"],
        a: "Family memberships are annual, starting at $855 for two members." },
      { topic: "Day pass", weight: 2, keys: ["day pass", "daily", "visitor", "visiting", "drop in", "drop-in", "guest", "vacation", "one day", "try", "trial", "summer"],
        a: "Yes! Visitors can work out for $15 a day. Just come in during our hours: Mon–Thu 5:30am–9pm, Friday 5:30am–7pm, and weekends 8am–3pm." },
      { topic: "Hours", weight: 2, keys: ["hour", "open", "close", "early", "late", "when", "weekend", "sunday", "saturday", "holiday"],
        a: "We're open Monday–Thursday 5:30am–9pm, Friday 5:30am–7pm, and Saturday and Sunday 8am–3pm. Holiday hours are posted on our Facebook page." },
      { topic: "Personal training", weight: 2, keys: ["personal train", "trainer", "training", " pt ", "coach", "one on one", "beginner", "program"],
        a: "Our personal trainers have over 100 years of combined experience and work with all ages, levels and goals. Pricing depends on the package. Want a trainer to reach out?" },
      { topic: "Insurance & employer rates", weight: 2, keys: ["insurance", "employer", "company", "where i work", "discount", "group rate", "reimburse", "blue cross", "harvard pilgrim", "tufts"],
        a: "Group rates may apply through certain health insurers and employers. Tell me your name and where you work or who your insurer is, and our front desk will check what you qualify for. What's your name?",
        capture: true },
      { topic: "Equipment", keys: ["equipment", "weights", "dumbbell", "rack", "squat", "machine", "treadmill", "cardio", "bike", "rower", "hammer", "trx", "bag", "rig", "turf"],
        a: "We have a full cardio deck (Life Fitness, Matrix, Star Trac, Cybex, Concept2, Octane, Precor), strength machines from Freemotion, Epic, Body Masters, Keiser and Hammer Strength, squat and power racks, kettlebells, a hack sled, and the Rig Room with a cargo net, TRX, heavy bags, a tire flip and a turf strip." },
      { topic: "Location", keys: ["where", "address", "location", "direction", "parking", "highfield"],
        a: "We're at 33 Highfield Drive in Falmouth. Call us at (508) 548-7384." }
    ]
  },

  bts: {
    sampleTopic: "Membership",
    recentLeads: [["Tom Gallagher", "Website form · Annual with monthly payments", "Joined"], ["Erin Walsh", "Website chat · Day pass", "Visited"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Falmouth Sports Center! {asked}\n\nWe've been serving the Falmouth fitness community since 1980, with 9,000 square feet of cardio, strength and free weights, plus the Rig Room. Memberships start at $85 for a month, and visitors can drop in for $15.\n\nSee you soon,\nFalmouth Sports Center\n(508) 548-7384"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Come try a workout: a day pass is just $15.”"],
      ["Day 3", "“Did you know annual memberships can be paid monthly? Want the details?”"],
      ["Day 7", "“Our trainers have 100+ years of combined experience. Want a quick plan to get started?”"]
    ],
    report: [["24", "new inquiries"], ["11", "came in for a visit"], ["6", "new members"], ["9", "day-pass visitors followed up"]],
    cta: {
      title: "Want this running at FSC?",
      text: "Right now your site isn't built for phones, so most visitors see your prices cut off, and asking about rates means calling or emailing. Switchboard answers every inquiry in seconds, day or night, follows up automatically, and puts every lead in one place, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
