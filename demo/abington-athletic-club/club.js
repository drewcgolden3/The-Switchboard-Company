/* Abington Athletic Club, Abington MA (formerly Northeast Health & Fitness,
   renamed back to AAC on 10/1/2025). Every fact here comes from
   abingtonathleticclub.com, checked 2026-11-25. They don't publish a class
   schedule or member reviews, so this demo has neither. Prices for personal
   training and FitClub aren't published either: the chat hands those off.
   Don't add claims that aren't on their site. */
window.CLUB = {
  slug: "abington-athletic-club",
  name: "Abington Athletic Club",
  shortName: "AAC",
  monogram: "AAC",
  logo: "img/logo.png",
  logoWide: true,
  contactPerson: "the AAC team",
  website: "abingtonathleticclub.com",

  colors: {
    ink: "#09182f",
    "ink-2": "#46536a",
    "ink-3": "#8691a3",
    paper: "#f6f8f5",
    soft: "#ecf3e8",
    line: "#dde4dc",
    accent: "#0b2a52",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Oswald", body: "Inter", headingWeight: 600, headingTrack: "0.005em", headingCase: "uppercase" },

  nav: [["Membership", "#pricing"], ["Training", "#services"], ["Ladies' Studio", "#about"], ["Contact", "#book"]],

  hero: {
    eyebrow: "The AAC is back · 1215 Bedford St, Abington",
    title: "20,000 square feet. $39.99 a month.",
    sub: "Dumbbells to 120 lbs, a 50-foot indoor turf, a private Ladies' Power Studio and a free fitness consultation with every membership. No commitment, no enrollment fee.",
    image: "img/hero.jpg",
    alt: "The main training floor at Abington Athletic Club",
    position: "50% 55%",
    cta: "Book your free consultation",
    secondary: ["See membership", "#pricing"],
    meta: "Mon–Fri 5am–9pm · Sat 7am–6pm · Sun 7am–2pm"
  },

  offer: {
    label: "Every new membership includes",
    title: "A complimentary one-on-one fitness consultation.",
    sub: "A certified trainer assesses where you are and builds your personal fitness “blueprint.” No commitment and no enrollment fee.",
    cta: "Book your consultation"
  },

  services: {
    eyebrow: "Something for everyone",
    title: "From the first-timer to the lifelong athlete.",
    sub: "Beginners, seniors, faithful exercisers and athletes all train here, and everyone gets a plan.",
    items: [
      { title: "The Iron House", text: "Dumbbells to 120 lbs, power racks with deadlift platforms, Olympic benches, leg presses and a full line of plate-loaded equipment from Magnum, Matrix, Precor and Umax.", meta: "Yes, you can still train hard" },
      { title: "Turf & cross training", text: "A 50-foot indoor turf with sleds, tires, battle ropes, kettlebells, plyo boxes and a TRX zone, padded and easy on your joints.", meta: "Built for HIIT" },
      { title: "Personal training", text: "One-on-one coaching with a customized roadmap, and real patience for beginners who are new to the weight room.", meta: "Award-winning trainers" },
      { title: "FitClub small group", text: "High-intensity interval training that mixes strength and cardio: burpees, battle ropes, kettlebells and traditional lifts, for every fitness level.", meta: "Small group HIIT" }
    ],
    gallery: [
      ["img/turf.jpg", "The indoor turf and octagon rack"],
      ["img/turf-training.jpg", "Members training on the turf"],
      ["img/racks.jpg", "Power racks in the free-weight area"],
      ["img/member.jpg", "A member training on plate-loaded equipment"],
      ["img/front-desk.jpg", "The front desk at Abington Athletic Club"]
    ]
  },

  about: {
    eyebrow: "Ladies' Power Studio",
    title: "A private, ladies-only club within the club.",
    paragraphs: [
      "A quiet, supportive 2,000 sq ft space with Nautilus strength equipment, benches, free weights, TRX and a stretching area, open during regular club hours.",
      "It's included in every membership, with small group training and circuit and toning classes running throughout the week. It's a great place for new members to get comfortable before heading out to the main floor."
    ],
    chips: ["2,000 sq ft", "Included with membership", "Open all club hours"],
    image: "img/ladies-studio.jpg",
    alt: "The private Ladies' Power Studio at Abington Athletic Club"
  },

  pricing: {
    eyebrow: "Membership",
    title: "No commitment. No enrollment fee.",
    sub: "Month-to-month auto payment is the best value. Short-term and paid-in-full plans are available too.",
    groups: [
      { name: "Memberships", note: "Unlimited access, Ladies' Power Studio and free WiFi included", rows: [["Single membership", "$39.99/mo"], ["Family (up to 5 members)", "$99.99/mo"], ["Each family member beyond 5", "+$20/mo"], ["Fitness consultation", "Free with membership"]] },
      { name: "Corporate", note: "For businesses with 5 or more employees", rows: [["Company membership", "Custom pricing"], ["Fitness consultation for every member", "Included"]] }
    ],
    fine: "Family memberships are for members of the same family. To keep the club focused and uncrowded, memberships don't include guest privileges, but new visitors can ask about a trial day pass."
  },

  amenities: {
    eyebrow: "The facility",
    title: "Over 20,000 square feet, on two levels.",
    items: [
      "Dumbbells to 120 lbs", "Power racks & deadlift platforms", "Olympic benches", "Plate-loaded & selectorized machines",
      "50' indoor turf", "TRX zone", "Precor, StairMaster & Rogue cardio", "Personal viewing screens",
      "Private Ladies' Power Studio", "Stretching & ab zone", "No waiting, no time limits", "Ample on-site parking"
    ]
  },

  book: {
    eyebrow: "Get started",
    title: "Book your free fitness consultation.",
    sub: "Tell us what you're interested in and we'll get right back to you.",
    formTitle: "Book your consultation",
    interests: ["Single membership", "Family membership", "Free fitness consultation", "Personal training", "FitClub", "Ladies' Power Studio", "Trial day pass", "Corporate membership"],
    submit: "Send"
  },

  contact: {
    address: "1215 Bedford Street, Abington, MA 02351",
    phone: "(781) 421-2111",
    email: "blomme@northeasthf.com",
    hours: ["Mon–Fri 5:00am – 9:00pm", "Saturday 7:00am – 6:00pm", "Sunday 7:00am – 2:00pm", "Holiday hours may vary"]
  },

  chat: {
    tip: "Hi! Ask me anything about the AAC: prices, training, hours…",
    greeting: "Hi! I'm the Abington Athletic Club assistant. Ask me about membership, personal training, the Ladies' Power Studio, or anything else.",
    suggestions: ["How much is a membership?", "Do you have a family plan?", "Can I bring a friend?", "How much is personal training?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have the AAC team get back to you directly.",
    done: "Got it, {first}! I've passed this to the AAC team, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "monthly", "per month", "rate", "join", "sign up", "enroll", "$"],
        a: "A single membership is just $39.99/month with no commitment and no enrollment fee. That includes unlimited access, the Ladies' Power Studio, free WiFi and a complimentary fitness consultation.\n\nFamilies of up to 5 are $99.99/month. Short-term and paid-in-full plans are available too.\n\nWant to book your free consultation?",
        follow: "Do you have a family plan?" },
      { topic: "Family plan", keys: ["family", "household", "kids", "spouse", "husband", "wife", "partner"], weight: 2,
        a: "Yes! The family membership is $99.99/month for up to 5 family members, with no enrollment fee. Each family member beyond 5 is an extra $20." },
      { topic: "Guests & trial day pass", weight: 2, keys: ["friend", "guest", "bring", "try", "trial", "day pass", "visit", "tour", "first"],
        a: "To keep the club focused and uncrowded for members, memberships don't include free guest privileges. But friends are always welcome to join, and first-time visitors can ask about a trial day pass.\n\nEvery new membership also comes with a free one-on-one fitness consultation.",
        follow: "How much is a membership?" },
      { topic: "Hours", keys: ["hour", "open", "close", "early", "late", "when", "weekend", "sunday", "saturday", "holiday"],
        a: "We're open Monday–Friday 5:00am–9:00pm, Saturday 7:00am–6:00pm and Sunday 7:00am–2:00pm. Holiday hours may vary." },
      { topic: "Personal training", weight: 2, keys: ["train", " pt ", "coach", "one on one", "1 on 1", "beginner", "intimidat", "kickstart", "program"],
        a: "Our award-winning trainers build a customized plan around your goals, whether that's building muscle, flexibility, or just getting a little extra push. We're especially good with beginners who are new to the weight room.\n\nPricing depends on the package (one-time or monthly payments), so the best next step is a quick sit-down to tailor the right plan. Want me to set that up?" },
      { topic: "Free fitness consultation", weight: 2, keys: ["consult", "assessment", "blueprint", "evaluation", "where to start", "plan"],
        a: "Every new member gets a complimentary one-on-one consultation. A certified trainer assesses your fitness level, talks through your goals and builds you a customized “blueprint” to follow. It works for everyone from beginners and seniors to athletes." },
      { topic: "FitClub", weight: 2, keys: ["fitclub", "fit club", "small group", "hiit", "class", "group", "bootcamp", "boot camp"],
        a: "FitClub is our small group HIIT program: strength and cardio combined into a full-body workout, with battle ropes, kettlebells, burpees and traditional lifts. It's built for every fitness level, and the Ladies' Power Studio runs its own small group and toning classes during the week too." },
      { topic: "Ladies' Power Studio", weight: 2, keys: ["ladies", "women", "woman", "female", "private", "power studio"],
        a: "The Ladies' Power Studio is a private, ladies-only 2,000 sq ft space inside the club, with Nautilus strength equipment, free weights, TRX and a stretching area. It's open during all club hours and included with every membership." },
      { topic: "Equipment & facility", keys: ["weight", "equipment", "dumbbell", "rack", "squat", "deadlift", "bench", "machine", "turf", "sled", "cardio", "treadmill", "stairmaster", "big", "size"],
        a: "We're over 20,000 sq ft on two levels: dumbbells to 120 lbs, power racks with deadlift platforms, Olympic benches, plate-loaded and selectorized machines, a 50-foot indoor turf, a TRX zone, and a full cardio deck from Precor, StairMaster and Rogue. No waiting and no time limits." },
      { topic: "Corporate membership", weight: 2, keys: ["corporate", "company", "employer", "employee", "business"],
        a: "We offer corporate memberships for businesses with 5 or more employees, with custom pricing and a complimentary fitness consultation for everyone on the plan." },
      { topic: "Location", keys: ["where", "address", "location", "direction", "parking", "park", "bedford"],
        a: "We're at 1215 Bedford Street in Abington, with plenty of on-site parking. You can reach the club at (781) 421-2111." }
    ]
  },

  bts: {
    sampleTopic: "Membership",
    recentLeads: [["Kevin Walsh", "Website form · Family membership", "Booked"], ["Erin Murphy", "Website chat · Ladies' Power Studio", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Abington Athletic Club! {asked}\n\nThe best next step is a free one-on-one fitness consultation. One of our certified trainers will walk you through the club and build a plan around your goals. Membership is just $39.99/month, with no commitment and no enrollment fee.\n\nSomeone from our team will follow up personally, too.\n\nSee you soon,\nThe Abington Athletic Club team\n(781) 421-2111"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Your free fitness consultation is waiting. Want to pick a time?”"],
      ["Day 3", "“No commitment and no enrollment fee. Here's everything $39.99 a month gets you at the AAC.”"],
      ["Day 7", "“Want to come see the turf and the Iron House in person? Reply with a day that works.”"]
    ],
    report: [["44", "new enquiries"], ["17", "booked a consultation"], ["9", "new members"], ["$360/mo", "in new membership revenue"]],
    cta: {
      title: "Want this running at the AAC?",
      text: "Right now, most questions on your site end with “email us.” Switchboard answers in seconds, books the consultation, follows up automatically, and puts every enquiry in one place, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
