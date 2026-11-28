/* Total Fitness Clubs: three locally owned gyms, Bristol RI (first club,
   2001), Swansea MA and North Dartmouth MA. One $29/month membership covers
   all three. info@totalfitnessclubs.com; Bristol also uses
   bristolinfo@totalfitnessclubs.com. Managers: Crystal Troiano (Bristol),
   Scott Morin (Dartmouth); the Swansea owner/manager name is blank on the site.
   Every fact here comes from totalfitnessclubs.com, the Dartmouth November
   2026 group exercise PDF and the December 2026 newsletter, checked
   2026-11-28. WordPress site, curl works. The schedule below is Dartmouth's
   (the only PDF checked); classes run Mindbody. Facility photos on the site
   are tiny, so the demo uses their 2019 pro shoot. The site says "four
   locations" in two places but lists three. Not published: reviews, a
   1-day vs 7-day free pass length (the FAQ mentions both).
   Don't add claims that aren't on their site. */
window.CLUB = {
  slug: "total-fitness-clubs",
  name: "Total Fitness Clubs",
  shortName: "Total Fitness",
  monogram: "TF",
  logo: "img/logo.png",
  logoWide: true,
  contactPerson: "your club's manager",
  website: "totalfitnessclubs.com",

  colors: {
    ink: "#13233d",
    "ink-2": "#4b5871",
    "ink-3": "#8a94a6",
    paper: "#f7f8fb",
    soft: "#eef1f7",
    line: "#dde2ec",
    accent: "#cf1f2e",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Barlow Condensed", body: "Inter", headingWeight: 700, headingTrack: "0", headingCase: "none" },

  nav: [["Classes", "#schedule"], ["Training", "#about"], ["Membership", "#pricing"], ["Locations", "#book"]],

  hero: {
    eyebrow: "Bristol, RI · Swansea · Dartmouth",
    title: "Three clubs. One $29 membership.",
    sub: "Locally owned since 2001. Join once and use every Total Fitness club, with 160+ group exercise classes a week included and a free session with a certified trainer to start.",
    image: "img/hero.jpg",
    alt: "A Total Fitness trainer coaching a member on the dip station",
    position: "50% 35%",
    cta: "Get your free pass",
    secondary: ["See membership", "#pricing"],
    meta: "Open 5am–9pm weekdays · No long-term contracts"
  },

  offer: {
    label: "Winter Student Special · through Dec 26",
    title: "Home for winter break? $49.",
    sub: "Use of every Total Fitness location, all group fitness classes, and a free personal training session.",
    cta: "Ask about the student special"
  },

  services: {
    eyebrow: "Fitness is a way of life",
    title: "Everything you need to get there.",
    sub: "Clean, comfortable clubs, friendly and knowledgeable staff, and cutting-edge equipment, for professional athletes and first-timers alike.",
    items: [
      { title: "Group exercise", text: "Spinning, bootcamp, Zumba, yoga, Pilates Sculpt, barre, TRX, Tai Chi and Silver Strong senior fitness, every day of the week.", meta: "160+ classes a week" },
      { title: "Personal training", text: "Certified trainers at every club, in half-hour, one-hour and duo sessions. Every new member gets an initial session free.", meta: "From $35 a session" },
      { title: "Pilates studio", text: "Private and duo reformer sessions plus small-group reformer training (3–4 people) at our Bristol studio.", meta: "Bristol, RI" },
      { title: "Small-group training", text: "Affordable 3–6 person workshops like Functional Body Building and Fit Body Boot Camp, new every month.", meta: "6–8 week sessions" }
    ],
    gallery: [
      ["img/strength.jpg", "A member doing a sandbag step-up"],
      ["img/pilates.jpg", "A Pilates session on the ladder barrel"],
      ["img/trainer.jpg", "A Total Fitness trainer on the gym floor"],
      ["img/adriana.jpg", "Adriana Ferns, Master Certified Personal Trainer in Bristol"],
      ["img/jason.jpg", "Jason Gonsalves, Certified Performance Specialist in Dartmouth"]
    ]
  },

  schedule: {
    eyebrow: "Group exercise · Dartmouth, November",
    title: "Classes from 5:30am, seven days a week.",
    sub: "Included with membership at every club. Members reserve classes in the Mindbody app.",
    days: [
      { day: "Monday", classes: [["5:30am", "Sunrise Spin", "Sue B"], ["8:00am", "TRX Circuit", "Nadine"], ["9:00am", "Spinning", "Wendy"], ["9:00am", "Pilates Sculpt", "Donna"], ["10:00am", "Gentle Yoga", "Donna"], ["11:00am", "Low Impact", "Kerri"], ["4:30pm", "Cardio Sculpt", "Kerri"], ["5:30pm", "Zumba", "Kerri"], ["6:30pm", "Balance Burn", "Joyce"]] },
      { day: "Tuesday", classes: [["5:30am", "Bootcamp", "Kim"], ["8:30am", "Express Abs", "Wendy"], ["9:00am", "Total Strength", "Wendy"], ["9:00am", "Tread & Strength", "Sarah"], ["10:00am", "Mat Madness", "Maribeth"], ["10:15am", "Express Spin", "Wendy"], ["11:00am", "Senior Fitness", "Wendy"], ["5:30pm", "Yoga Flow", "Cheryl"]] },
      { day: "Wednesday", classes: [["5:30am", "Sunrise Spin", "Sue B"], ["8:30am", "Tai Chi Fit", "Donna"], ["9:00am", "Spin & Sculpt", "Wendy"], ["9:00am", "Barre Above", "Donna"], ["10:00am", "Gentle Yoga", "Donna"], ["11:00am", "Pilates Sculpt", "Kerri"], ["4:30pm", "Bootcamp", "James"], ["4:30pm", "Pilates Sculpt", "Kerri"], ["6:00pm", "Power Hour", "Emily"]] },
      { day: "Thursday", classes: [["5:30am", "Bootcamp", "Pam"], ["9:00am", "Tread & Strength", "Sarah"], ["9:00am", "Power Yoga", "Donna"], ["10:00am", "Silver Strong", "Donna"], ["11:00am", "Moves & Muscles", "Kerri"], ["4:30pm", "Body Blend", "Kerri"], ["5:30pm", "Zumba Gold", "Sue Y"], ["6:30pm", "Midweek Yoga Reset", "Jason"]] },
      { day: "Friday", classes: [["5:30am", "Sunrise Spin", "Josh"], ["9:00am", "Raise the Bar", "Wendy"], ["10:00am", "Pilates Sculpt", "Donna"], ["10:15am", "Express Spin", "Wendy"], ["11:00am", "Chair Yoga", "Wendy"], ["4:00pm", "Bootcamp", "James"]] },
      { day: "Saturday", classes: [["8:00am", "Power Hour", "Emily"], ["9:00am", "All Levels Yoga", "Kendra"], ["10:00am", "Dance Tone", "Dawn"]] },
      { day: "Sunday", classes: [["8:30am", "Spinning", "Susan"], ["Sundays", "Sunday Funday specialty classes"]] }
    ]
  },

  about: {
    eyebrow: "Personal & group training",
    title: "A plan built around you.",
    paragraphs: [
      "Personal training is one of the most time-efficient ways to get and stay in shape. Our certified trainers build you a personalized program and keep you motivated, with half-hour, one-hour and duo sessions at every club.",
      "Prefer a group? Our small-group workshops (3–6 people) change every month, from Functional Body Building with James Simmons to Fit Body Boot Camp, and they're priced to be affordable."
    ],
    chips: ["Free first session", "Duo training", "3–6 person workshops"],
    image: "img/crystal.jpg",
    alt: "Crystal Troiano, Bristol manager and certified personal trainer"
  },

  pricing: {
    eyebrow: "Membership",
    title: "One membership, every club.",
    sub: "Month-to-month with no long-term contract. Group exercise classes are included.",
    groups: [
      { name: "Membership", note: "Access to all three clubs", rows: [["Network membership", "$29/mo"], ["Joining fee", "$29"], ["Annual fee", "$29"], ["10-visit class punch card (in club)", "$75"], ["Winter Student Special (to 12/26)", "$49"]] },
      { name: "Personal training", note: "Single / 10-pack", rows: [["30 minutes", "$35 / $275"], ["1 hour", "$60 / $495"], ["Duo, 50 min, per person", "$39 / $330"], ["Package of 20, 1 hour", "$935"]] },
      { name: "Pilates (Bristol)", note: "Private / group reformer", rows: [["Private, 1 hour", "$65"], ["Duo, 1 hour, per person", "$42"], ["Group reformer drop-in", "$35"], ["Group reformer, 8 weeks", "$185"], ["Reformer starter package (members)", "$150"]] }
    ],
    fine: "Every new member gets an initial personal training session. Freezes are $5/month with 15 days' written notice. Members must be 18 to sign, or come with a parent or guardian."
  },

  amenities: {
    eyebrow: "At the clubs",
    title: "Clean, comfortable and well equipped.",
    items: [
      "Cardio with Cardio Theater", "Weight machines & free weights", "30-minute weight circuit", "Spinning studios",
      "Group exercise rooms", "Saunas", "Juice & shake bar", "Locker rooms with showers",
      "Towel service", "Free WiFi", "Half-court basketball (Bristol)", "Pilates studio (Bristol)"
    ]
  },

  quotes: null,

  book: {
    eyebrow: "Try us free",
    title: "Get your free membership pass.",
    sub: "Work out on us at any of our clubs, classes included. Tell us which club and we'll get your pass to you right away.",
    formTitle: "Get your free pass",
    interests: ["Free pass", "Membership", "Winter Student Special", "Personal training", "Group exercise classes", "Pilates (Bristol)", "Small-group training", "Corporate wellness"],
    submit: "Send"
  },

  contact: {
    address: "Bristol: 685 Metacom Ave · Swansea: 207 Swansea Mall Dr · North Dartmouth: 360 Faunce Corner Rd",
    phone: "Bristol 401-254-3900 · Swansea 508-679-9793 · Dartmouth 508-995-5600",
    email: "info@totalfitnessclubs.com",
    hours: ["Mon–Fri 5am–9pm", "Sat 6am–6pm", "Sun 7:30am to 1pm (Dartmouth), 3pm (Swansea), 5pm (Bristol)"]
  },

  chat: {
    tip: "Hi! Ask me anything about Total Fitness: membership, classes, training…",
    greeting: "Hi! I'm the Total Fitness assistant. Ask me about membership, the free pass, classes, personal training, Pilates, or any of our three clubs.",
    suggestions: ["How much is a membership?", "Can I try it for free?", "What classes are on Wednesday?", "How much is personal training?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have your club's manager get back to you directly.",
    done: "Got it, {first}! I've passed this to your club's manager, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["membership", "join", "member", "how much", "price", "cost", "monthly", "per month", "contract", "fee"],
        a: "Membership is $29 a month, month-to-month with no long-term contract, plus a $29 joining fee and a $29 annual fee.\n\nIt covers all three clubs (Bristol, Swansea and Dartmouth), 160+ group exercise classes a week, and a free first session with a certified personal trainer. Want to try it first with a free pass?",
        follow: "Can I try it for free?" },
      { topic: "Free pass", weight: 2, keys: ["free pass", "guest pass", "trial", "try it", "try you", "for free", "pass", "visit"],
        a: "Yes! Our free membership pass gives you full use of the club and unlimited group exercise classes. It's for local residents 18 and over, and just bring a photo ID.\n\nIt's good at any of our three clubs. I'll get your pass sent over. What's your name?",
        capture: true },
      { topic: "Student special", weight: 3, keys: ["student", "college", "winter break", "home from school"],
        a: "Home for winter break? Our Winter Student Special is $49 and includes every Total Fitness location, all group fitness classes and a free personal training session. It's available through December 26." },
      { topic: "Classes", keys: ["class", "spin", "bootcamp", "zumba", "yoga", "barre", "trx", "tai chi", "silver strong", "group exercise", "schedule"],
        a: "We run 160+ group exercise classes a week across our three clubs: Spinning, bootcamp, Zumba, yoga, Pilates Sculpt, barre, TRX, Tai Chi and senior fitness. They're all included with membership, and members reserve spots in the Mindbody app.\n\nAsk me about a day, like “What's on Thursday?”" },
      { topic: "Personal training", weight: 2, keys: ["personal train", "trainer", "training", "one on one", "1 on 1", "duo", "session", "package"],
        a: "Personal training starts at $35 for 30 minutes or $60 for an hour, with packages of 5, 10 and 20 (10 one-hour sessions are $495). Duo training is $39 per person for 50 minutes.\n\nEvery new member also gets a free first session with a certified trainer. Want a trainer to reach out?" },
      { topic: "Small-group training", weight: 2, keys: ["small group", "workshop", "body building", "boot camp program", "group training"],
        a: "Our small-group workshops are 3–6 people and change every month. In Dartmouth right now there's Functional Body Building with James Simmons, Thursdays 4:30–5:30pm through January 21, for $145." },
      { topic: "Pilates", weight: 2, keys: ["pilates", "reformer"],
        a: "Our Pilates studio is in Bristol. Private 1-hour sessions are $65 and duo sessions are $42 per person. Group reformer training (3–4 people) is $35 drop-in or $185 for 8 weeks, after 3 private sessions. Members can start with the $150 Reformer Starter Package.\n\nWe also teach mat Pilates Sculpt classes at every club, included with membership." },
      { topic: "Hours", weight: 2, keys: ["hour", "open", "close", "early", "late", "open sunday", "open on sunday", "close sunday", "close on sunday", "sunday hours"],
        a: "All three clubs are open Mon–Fri 5am–9pm and Saturday 6am–6pm. On Sundays we open at 7:30am and close at 1pm in Dartmouth, 3pm in Swansea and 5pm in Bristol." },
      { topic: "Locations", keys: ["where", "address", "location", "direction", "near", "bristol", "swansea", "dartmouth", "rhode island"],
        a: "We have three clubs, and one membership gets you into all of them:\n\n• Bristol: 685 Metacom Ave, Bristol, RI · 401-254-3900\n• Swansea: 207 Swansea Mall Dr, next to Regal Cinema · 508-679-9793\n• Dartmouth: 360 Faunce Corner Rd, across from the VF Outlets · 508-995-5600" },
      { topic: "Amenities", keys: ["sauna", "towel", "locker", "shower", "basketball", "juice", "shake", "wifi", "equipment", "weights"],
        a: "Every club has cardio with Cardio Theater, weight machines and free weights, a 30-minute weight circuit, a spinning studio, a sauna, a juice and shake bar, locker rooms with showers, towel service and free WiFi. Bristol also has half-court basketball and our Pilates studio." },
      { topic: "Freeze or cancel", weight: 2, keys: ["cancel", "freeze", "hold", "pause"],
        a: "Freezes are $5 a month (one month minimum) with 15 days' written notice before the 1st of the month. Cancellations need 30 days' notice before billing, in person or by certified mail. We don't take either by phone or email, so you have a paper trail." },
      { topic: "Age", weight: 2, keys: ["teen", "year old", "year-old", "how old", "kid", " son ", "daughter", "under 18"],
        a: "You need to be 18 to sign a membership, or come in with a parent or guardian. Members 16 and older can work out on their own; under 16, a parent, trainer or instructor needs to be with them on the gym floor." },
      { topic: "Corporate", weight: 2, keys: ["corporate", "company", "employee", "workplace", "wellness program"],
        a: "We offer health club discounts for groups as small as six, extended to employees' families, plus onsite programs like yoga, bootcamp, weight-loss challenges and health fairs. Julie Fostin, our Employee Wellness Coordinator, builds custom programs." },
      { topic: "Gift certificates", weight: 2, keys: ["gift", "christmas", "present"],
        a: "Give the gift of fitness! Gift certificates can be used toward training, shakes or Total Fitness gear, and you get a free T-shirt with a $50 purchase through December 24." }
    ]
  },

  bts: {
    sampleTopic: "Free pass",
    recentLeads: [["Amanda Sousa", "Website chat · Free pass (Swansea)", "Joined"], ["Kevin Medeiros", "Website form · Personal training", "Booked"]],
    reply: {
      subject: "Your Total Fitness free pass, {first}",
      body: "Hi {first},\n\nThanks for your interest in Total Fitness! {asked}\n\nOne $29 membership gets you into all three of our clubs (Bristol, Swansea and Dartmouth), with 160+ group exercise classes a week and a free session with a certified trainer. Bring a photo ID and we'll show you around.\n\nSee you soon,\nTotal Fitness Clubs"
    },
    followups: [
      ["Day 1", "“Did you get a chance to use your pass, {first}? Here's this week's class schedule.”"],
      ["Day 3", "“Every new member gets a free session with a certified trainer. Want us to book yours?”"],
      ["Day 7", "“Still thinking it over? It's $29 a month for all three clubs, no long-term contract.”"]
    ],
    report: [["64", "new enquiries"], ["29", "used a free pass"], ["14", "new members"], ["$406", "in new monthly dues"]],
    cta: {
      title: "Want this running at Total Fitness?",
      text: "Right now, questions on totalfitnessclubs.com go to three different front desks, info@, or a contact form that doesn't ask for a phone number. Switchboard answers every question in seconds, day or night, routes each lead to the right club's manager, and follows up automatically until they come in.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
