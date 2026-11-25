/* South Shore Athletic Club, Cohasset MA. Every fact here comes from
   southshoreathleticclub.com (checked 2026-11-25). Don't add claims that
   aren't on their site: owners notice. */
window.CLUB = {
  slug: "south-shore-athletic-club",
  name: "South Shore Athletic Club",
  shortName: "SSAC",
  monogram: "SSAC",
  logo: null,
  contactPerson: "Jill",
  website: "southshoreathleticclub.com",

  colors: {
    ink: "#14231b",
    "ink-2": "#46524b",
    "ink-3": "#87918b",
    paper: "#f7f6f2",
    soft: "#eceae3",
    line: "#dfddd4",
    accent: "#1d5a3a",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Archivo", body: "Inter", headingWeight: 800, headingTrack: "-0.025em" },

  nav: [["Classes", "#schedule"], ["Memberships", "#pricing"], ["Amenities", "#amenities"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Cohasset, MA · Open 365 days a year",
    title: "Train harder. Recover better.",
    sub: "13,000+ square feet of new equipment, an expanded free-weight room, classes every day of the week, a eucalyptus steam room and childcare, all under one roof.",
    image: "img/gym-floor.jpg",
    alt: "The South Shore Athletic Club gym floor",
    position: "50% 50%",
    cta: "Plan your first visit",
    secondary: ["See memberships", "#pricing"],
    meta: "5am–9pm weekdays · 7am–5pm weekends · 132 Chief Justice Cushing Hwy"
  },

  offer: {
    label: "Not sure yet?",
    title: "Try the whole club for a day: $23",
    sub: "Every class, cardio and weights, the steam room, towels and toiletries included.",
    cta: "Plan a day pass"
  },

  services: {
    eyebrow: "All studios under one roof",
    title: "Everything you need, and a few things you'll love.",
    sub: "Whether you're lifting, running, stretching or just starting out, there's something here for you.",
    items: [
      { title: "Group classes", text: "HIIT, Power Pilates, Cardio Dance, Bootcamp, Cycle, Cardio Muscle Max and more, seven days a week.", meta: "Included in every membership" },
      { title: "Personal training", text: "One-hour and half-hour sessions with certified trainers, plus TEAM Training for school teams and small-group specials.", meta: "Gina · Edgard · Alyson" },
      { title: "Steam & massage", text: "Unwind in the eucalyptus steam room, or book a massage with Meg, a licensed therapist with 27+ years of experience.", meta: "Hot stones · prenatal · cupping" },
      { title: "Childcare", text: "A secure playroom so the kids have fun while you focus on yourself.", meta: "Mon–Sat · 8:30–11:30am" }
    ],
    gallery: [
      ["img/class-energy.jpg", "A high-energy group fitness class"],
      ["img/weights.jpg", "Dumbbell rack in the free-weight room"],
      ["img/cardio.jpg", "Row of treadmills"],
      ["img/class-studio.jpg", "A floor class in the group studio"],
      ["img/steam.jpg", "The eucalyptus steam room"]
    ]
  },

  schedule: {
    eyebrow: "Class schedule",
    title: "A class every day of the week.",
    sub: "All classes are included with a membership, punch card or day pass.",
    days: [
      { day: "Monday", classes: [["6:30am", "Bootcamp", "Denise"], ["9:15am", "Total Body Blitz", "Eva"], ["5:30pm", "Tabata Mashup", "Jenn"], ["6:30pm", "Stretch & Reset", "Jenn"]] },
      { day: "Tuesday", classes: [["7:30am", "Cycle", "Eva"], ["8:30am", "Cardio Dance", "Deb"], ["9:30am", "Power Pilates", "Donna"]] },
      { day: "Wednesday", classes: [["8:00am", "Cycle", "Josephine"], ["8:15am", "Cardio Muscle Max", "Susan"], ["5:30pm", "Cardio Dance", "Deb"]] },
      { day: "Thursday", classes: [["7:30am", "Cycle", "Eva"], ["9:15am", "Power Pilates", "Eva"]] },
      { day: "Friday", classes: [["9:15am", "Cardio Muscle Max", "Susan"]] },
      { day: "Saturday", classes: [["8:00am", "Cycle", "Rotating"], ["8:50am", "Recovery & Stretch", "Rotating"], ["9:30am", "Total Body Blitz", "Eva"]] },
      { day: "Sunday", classes: [["9:00am", "Cardio Dance", "Deb"]] }
    ]
  },

  about: {
    eyebrow: "Welcome to SSAC",
    title: "More than just a gym. Your fitness family.",
    paragraphs: [
      "South Shore Athletic Club is a community built on strength, wellness and support, with top-tier equipment, expert trainers and staff ready to guide you every step of the way.",
      "New to fitness? Come in for a consultation and we'll show you how to get started. We proudly support our military, police, fire and educators with a discount for their service."
    ],
    chips: ["13,000+ sq ft", "Open 365 days", "Free for active military", "Towels & toiletries included"],
    image: "img/front-desk.jpg",
    alt: "The front desk at South Shore Athletic Club"
  },

  pricing: {
    eyebrow: "Memberships",
    title: "Here for a day, or committed for years.",
    sub: "Every option covers the entire club: all classes, cardio and weights, locker rooms and the steam room.",
    groups: [
      { name: "Unlimited memberships", note: "Month to month", rows: [["Monthly unlimited", "$89.99/mo"], ["Student, senior 65+, fire, police, retired military, teacher", "$69.99/mo"], ["Family (3–4 people, one household)", "$219.99/mo"], ["Active military", "Free"]] },
      { name: "Packages & day rates", note: "No commitment", rows: [["Day pass", "$23"], ["10-visit punch card (never expires, shareable)", "$190"]] }
    ],
    fine: "One-time activation fee of $79 on individual memberships, $158 for families. Annual facility fee January 15th."
  },

  amenities: {
    eyebrow: "Amenities",
    title: "New equipment. Five-star locker rooms.",
    items: [
      "Expanded free-weight room", "Hoist ROC-IT selectorized and plate-loaded machines", "Treadmills, ellipticals, AMTs and step mills",
      "Rowers, bikes and Assault air bikes", "The Helix and a HIIT ski machine", "Glute drive machine and boxing area",
      "Eucalyptus steam room in each locker room", "Individual keyed lockers", "Towels, shampoo, conditioner and body wash",
      "Filtered water", "Childcare playroom", "Massage therapy"
    ]
  },

  quotes: null,

  book: {
    eyebrow: "Plan your visit",
    title: "Come see it for yourself.",
    sub: "Tell us what you're interested in and we'll get right back to you.",
    formTitle: "Plan your first visit",
    interests: ["Day pass", "Membership", "Family membership", "Personal training", "Group classes", "Massage", "Childcare"],
    submit: "Send"
  },

  contact: {
    address: "132 Chief Justice Cushing Highway, Cohasset, MA",
    phone: "(781) 383-3330",
    email: "info@southshoreathleticclub.com",
    hours: ["Weekdays 5:00am – 9:00pm", "Weekends 7:00am – 5:00pm", "Open 365 days a year"]
  },

  chat: {
    tip: "Hi! Ask me anything about SSAC: prices, classes, childcare…",
    greeting: "Hi! I'm the South Shore Athletic Club assistant. Ask me about memberships, classes, childcare, or anything else.",
    suggestions: ["How much is a membership?", "What classes are on Saturday?", "Can I try it for a day?", "Do you have childcare?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have Jill or the front desk get back to you directly.",
    done: "Got it, {first}! I've passed this to Jill and the front desk, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "monthly", "per month", "rate", "join", "sign up", "$"],
        a: "Unlimited memberships are $89.99/month.\n\nStudents, seniors (65+), firefighters, police, retired military and teachers are $69.99/month. Families (3–4 people in one household, kids 21 and under) are $219.99/month, and active military is free.\n\nThere's a one-time activation fee of $79 ($158 for families). Want someone to help you get started?",
        follow: "Can I try it for a day?" },
      { topic: "Day pass", keys: ["day pass", "try", "trial", "guest", "visit", "one day", "drop in", "punch", "visits"],
        a: "Yes! A day pass is $23 and covers the whole club: every class, cardio and weights, the steam room, towels and toiletries.\n\nComing a lot but not ready to commit? The 10-visit punch card is $190, never expires, and you can share it with a friend.",
        follow: "What classes are on Saturday?" },
      { topic: "Hours", keys: ["hour", "open", "close", "early", "late", "holiday", "weekend", "when"],
        a: "We're open 365 days a year: 5:00am–9:00pm on weekdays and 7:00am–5:00pm on weekends." },
      { topic: "Classes", keys: ["class", "schedule", "spin", "cycle", "pilates", "hiit", "bootcamp", "zumba", "dance", "barre", "yoga", "stretch"],
        a: "We run classes seven days a week: Cycle, Power Pilates, Cardio Dance, Bootcamp, Total Body Blitz, Tabata Mashup, Cardio Muscle Max, Recovery & Stretch and more. They're all included with a membership, punch card or day pass.\n\nAsk me about a specific day, like “What's on Tuesday?”",
        follow: "What classes are on Saturday?" },
      { topic: "Childcare", keys: ["child", "kid", "baby", "babysit", "daycare", "playroom", "nursery"],
        a: "Yes! We have a secure playroom so the kids can have fun while you work out. Childcare runs Monday–Saturday, 8:30–11:30am." },
      { topic: "Personal training", keys: ["train", " pt ", "coach", "one on one", "1 on 1", "private", "team training", "athlete", "sport"],
        a: "We offer one-hour and half-hour one-on-one sessions with certified trainers (Gina, Edgard and Alyson), plus TEAM Training for school teams and small-group specials.\n\nRates depend on the package. Want a trainer to reach out with options?" },
      { topic: "Massage", keys: ["massage", "meg", "hot stone", "cupping", "prenatal", "therap"],
        a: "Meg Meagher is our licensed massage therapist, with over 27 years of experience. Sessions run 30, 60, 90 or 120 minutes, with add-ons like hot stones, prenatal and cupping. Every massage includes a day pass, steam room included.\n\nBuy six hours and get one free. Want the front desk to reach out about times and pricing?" },
      { topic: "Steam & locker rooms", keys: ["steam", "sauna", "locker", "shower", "towel", "shampoo"],
        a: "Each locker room has a eucalyptus steam room, individual keyed lockers and showers stocked with shampoo, conditioner and body wash. Towels are complimentary too." },
      { topic: "Equipment", keys: ["equipment", "weight", "machine", "squat", "rack", "dumbbell", "treadmill", "bike", "rower", "cardio", "boxing"],
        a: "We just expanded the free-weight room and brought in new equipment: Hoist ROC-IT machines, plate-loaded machines, treadmills, ellipticals, AMTs, step mills, rowers, Assault air bikes, The Helix, a HIIT ski machine, a glute drive machine and a boxing area." },
      { topic: "Discounts", keys: ["discount", "military", "veteran", "police", "fire", "teacher", "educator", "student", "senior", "family"],
        a: "We proudly support our community: students, seniors (65+), firefighters, police, retired military and teachers get unlimited for $69.99/month, and active military is free. Families of 3–4 are $219.99/month." },
      { topic: "Location", keys: ["where", "address", "location", "direction", "cohasset", "parking", "park"],
        a: "We're at 132 Chief Justice Cushing Highway in Cohasset. Call us at (781) 383-3330 if you need anything before you come in." },
      { topic: "Getting started", keys: ["new", "beginner", "start", "first time", "nervous", "consult", "never"],
        a: "No worries at all. Come in for a consultation and we'll show you how to get started, at your pace. Want someone to set that up with you?" }
    ]
  },

  bts: {
    sampleTopic: "Day pass",
    recentLeads: [["Mike Donovan", "Website form · Family membership", "Booked"], ["Erin Walsh", "Website chat · Personal training", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in South Shore Athletic Club! {asked}\n\nThe easiest next step is to stop in. A day pass is $23 and covers everything, classes and steam room included. We're open 5am–9pm weekdays and 7am–5pm weekends.\n\nJill or someone from the front desk will follow up personally, too.\n\nSee you soon,\nSouth Shore Athletic Club\n(781) 383-3330"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Here's this week's class schedule.”"],
      ["Day 3", "“Your first visit is easy: here's what to bring and when it's quiet.”"],
      ["Day 7", "“We'd love to see you. Want us to hold a spot in Saturday's Cycle class?”"]
    ],
    report: [["46", "new enquiries"], ["19", "came in for a visit"], ["8", "new members"], ["$720/mo", "in new membership revenue"]],
    cta: {
      title: "Want this running at SSAC?",
      text: "Switchboard works with the site you have, or comes with a new one like this. Every enquiry answered, followed up and tracked, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
