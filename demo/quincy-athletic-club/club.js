/* Quincy Athletic Club (formerly Northeast Health and Fitness), Quincy MA.
   Every fact here comes from quincyathleticclub.com, checked 2026-11-25.
   The class schedule is the club's regular week, read from its class-signup
   widget. Classes change monthly, so check it again before sending. Don't add
   claims that aren't on their site. */
window.CLUB = {
  slug: "quincy-athletic-club",
  name: "Quincy Athletic Club",
  shortName: "QAC",
  monogram: "QAC",
  logo: "img/logo.png",
  logoWide: true,
  contactPerson: "the front desk",
  website: "quincyathleticclub.com",

  colors: {
    ink: "#172231",
    "ink-2": "#4a5566",
    "ink-3": "#8a93a1",
    paper: "#f6f8fa",
    soft: "#e9eef3",
    line: "#dbe2ea",
    accent: "#1565b0",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Montserrat", body: "Inter", headingWeight: 800, headingTrack: "-0.03em" },

  nav: [["Classes", "#schedule"], ["Membership", "#pricing"], ["The club", "#services"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Quincy, MA · 20 years on Quincy Ave",
    title: "Train your way. No contract.",
    sub: "A big, fully equipped club with free weights, cardio, a sauna and group classes included, from $44.99 a month. Train yourself, hire a trainer, or join a class.",
    image: "img/hero.jpg",
    alt: "The Quincy Athletic Club weight floor",
    position: "50% 55%",
    cta: "Plan your first visit",
    secondary: ["See membership", "#pricing"],
    meta: "Mon–Fri 5am–9pm · Sat 7am–6pm · Sun 7am–5pm · Free parking"
  },

  offer: {
    label: "New here?",
    title: "Every new member gets a free session with a trainer.",
    sub: "Talk through your goals and leave with a plan. Or try the club first with a $15 day pass.",
    cta: "Plan your visit"
  },

  services: {
    eyebrow: "The South Shore's results-based health club",
    title: "Three ways to reach your goals.",
    sub: "Members of all ages and abilities, including elite athletes, have trained here for 20 years.",
    items: [
      { title: "Train yourself", text: "Free weights, squat racks, lifting platforms, the Octagon 360 training rig, a full cardio room and a basketball court.", meta: "Open 7 days" },
      { title: "Hire a personal trainer", text: "Trainers built around your goals, so you know how to work, not just how hard. Every new member gets a free assessment.", meta: "Mary Dolbec · Ali Babineau" },
      { title: "Join a group class", text: "Barre, Pilates, Zumba, Chisel Pump, Strength & Mobility, yoga and more, with new classes added every month.", meta: "Included in membership" },
      { title: "Recover & relax", text: "Sauna, free fast Wi-Fi, lockers and ample free parking. The member app handles check-in and class sign-ups.", meta: "Check in with your phone" }
    ],
    gallery: [
      ["img/rigs.jpg", "Squat racks and the Octagon training rig"],
      ["img/platform.jpg", "Lifting platform"],
      ["img/cardio.jpg", "The cardio room"],
      ["img/machines.jpg", "Selectorized strength machines"],
      ["img/functional.jpg", "Functional training area"]
    ]
  },

  schedule: {
    eyebrow: "Group exercise",
    title: "Classes included with every membership.",
    sub: "A typical week. Classes change monthly, so members book through the club app or online.",
    days: [
      { day: "Monday", classes: [["9:30am", "Barre", "Emily"], ["5:30pm", "Chisel Pump", "Tina"]] },
      { day: "Tuesday", classes: [["9:30am", "Strength & Mobility", "Mary"], ["5:30pm", "Zumba", "Rachel"]] },
      { day: "Wednesday", classes: [["8:30am", "Barre", "Emily"], ["5:30pm", "Strength & Mobility", "Maggie"]] },
      { day: "Thursday", classes: [["9:30am", "Muscle Mix", "Mary"], ["5:30pm", "Beginner Vinyasa Yoga", "Jessica"]] },
      { day: "Friday", classes: [["9:30am", "Pilates", "Nicole"]] },
      { day: "Sunday", classes: [["9:00am", "Barre Bootcamp", "Emily"]] }
    ]
  },

  about: {
    eyebrow: "Convert effort into success",
    title: "Something for everyone, and a community behind you.",
    paragraphs: [
      "Northeast Health and Fitness is returning to its roots as Quincy Athletic Club. Same club, same people, 20 years in Quincy.",
      "Whether you want to lift, take a class, work with a trainer or get your cardio in, you'll find knowledgeable staff, great instructors and a family-friendly atmosphere."
    ],
    chips: ["No annual contract", "Cancel with 30 days' notice", "Free parking", "Sister club: RAC Raynham"],
    image: "img/turf.jpg",
    alt: "The turf lane and functional training area"
  },

  pricing: {
    eyebrow: "Membership",
    title: "No commitment. Everything included.",
    sub: "Every membership includes group classes, the weight room, cardio room and sauna.",
    groups: [
      { name: "Monthly memberships", note: "No annual contract", rows: [["Individual", "$44.99/mo"], ["One Plus (you + a partner, roommate or friend)", "$85/mo"], ["Immediate family (up to 4, same address)", "$114.99/mo"]] },
      { name: "Other ways in", note: "Ask at the club", rows: [["Day pass or guest visit", "$15"], ["Students, seniors, law enforcement", "In-club offers"], ["Paid-in-full and short-term", "Available"]] }
    ],
    fine: "Cancel anytime with 30 days' notice by email, phone or in person. Personal training is separate from membership."
  },

  amenities: null,
  quotes: null,

  book: {
    eyebrow: "Plan your visit",
    title: "Come take a tour.",
    sub: "Tell us what you're looking for and we'll get right back to you.",
    formTitle: "Plan your first visit",
    interests: ["Membership", "Day pass", "Family membership", "Personal training", "Group classes", "Student / senior / law enforcement rate"],
    submit: "Send"
  },

  contact: {
    address: "90 Quincy Ave, Quincy, MA 02169",
    phone: "(617) 328-7317",
    email: "quincynehf@gmail.com",
    hours: ["Mon–Fri 5:00am – 9:00pm", "Saturday 7:00am – 6:00pm", "Sunday 7:00am – 5:00pm"]
  },

  chat: {
    tip: "Hi! Ask me anything about QAC: prices, classes, hours…",
    greeting: "Hi! I'm the Quincy Athletic Club assistant. Ask me about membership, classes, personal training, or anything else.",
    suggestions: ["How much is a membership?", "Is there a contract?", "What classes are on Monday?", "Can I bring a guest?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have someone from the front desk get back to you directly.",
    done: "Got it, {first}! I've passed this to the front desk, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "monthly", "per month", "rate", "join", "sign up", "$"],
        a: "Memberships are month to month with no annual contract:\n\n• Individual: $44.99/month\n• One Plus (you + a partner, roommate or friend): $85/month\n• Immediate family (up to 4 at the same address): $114.99/month\n\nEvery membership includes group classes, the weight room, cardio room and sauna. Want someone to help you get started?",
        follow: "Is there a contract?" },
      { topic: "Contract & cancelling", keys: ["contract", "commit", "cancel", "cancellation", "freeze", "annual", "lock"],
        a: "No annual contract. You can cancel anytime with 30 days' notice, by email, phone or in person at the club." },
      { topic: "Day pass & guests", keys: ["day pass", "guest", "try", "trial", "visit", "drop in", "friend", "one day"],
        a: "Yes! A day pass is $15, and members can bring a guest for the same $15 fee. Guests get access to everything a member does during their visit.",
        follow: "How much is a membership?" },
      { topic: "Discounts", keys: ["student", "senior", "police", "law enforcement", "discount", "military", "teacher", "veteran"],
        a: "We have special rates for students, seniors and law enforcement. They're offered at the club, so stop by the front desk and we'll set you up. Want someone to reach out first?" },
      { topic: "Hours", keys: ["hour", "open", "close", "early", "late", "when", "holiday", "weekend"],
        a: "We're open Monday–Friday 5:00am–9:00pm, Saturday 7:00am–6:00pm and Sunday 7:00am–5:00pm. Holiday hours can differ, so give us a call at (617) 328-7317 to check." },
      { topic: "Classes", keys: ["class", "schedule", "barre", "pilates", "zumba", "yoga", "chisel", "pump", "mobility", "muscle mix", "bootcamp", "group"],
        a: "Group classes are included with every membership: Barre, Pilates, Zumba, Chisel Pump, Strength & Mobility, Muscle Mix, Beginner Vinyasa Yoga and Barre Bootcamp. New classes are added every month.\n\nMembers book through the club app or online. Ask me about a day, like “What's on Thursday?”",
        follow: "What classes are on Monday?" },
      { topic: "Saturday classes", keys: ["saturday"], weight: 2,
        a: "There aren't group classes on Saturdays right now, but the club is open 7:00am–6:00pm. Sunday has Barre Bootcamp at 9:00am." },
      { topic: "Personal training", keys: ["train", " pt ", "coach", "one on one", "1 on 1", "private", "assessment"],
        a: "Yes. Our personal trainers, including Mary Dolbec and Ali Babineau, build sessions around your goals. Training isn't included in membership, but every new member gets a free session with a trainer to talk through goals and make a plan.\n\nWant a trainer to reach out?" },
      { topic: "Amenities", keys: ["sauna", "equipment", "weight", "squat", "rack", "platform", "cardio", "treadmill", "basketball", "octagon", "wifi", "wi-fi", "locker"],
        a: "The club has a big free-weight floor with squat racks and lifting platforms, the Octagon 360 training rig, a full cardio room, a basketball court, a sauna, lockers and free fast Wi-Fi." },
      { topic: "Parking", keys: ["parking", "park", "where", "address", "location", "direction"],
        a: "We're at 90 Quincy Ave in Quincy, with ample free parking for members (no overnight parking)." },
      { topic: "Kids & teens", keys: ["kid", "child", "teen", " age", " son ", "daughter", "under 18", "young", "year old", "years old", "yr old", "minor"], weight: 2,
        a: "Teens 13–17 can work out on their own after a quick orientation with a staff member. Ages 10–12 need an adult with them, and kids under 10 aren't allowed in the fitness center." },
      { topic: "Massage & boxing", keys: ["massage", "boxing", "box"],
        a: "Massage and boxing at the building are run by independent businesses, not the club, so you'd book with them directly. The front desk can point you to them." },
      { topic: "Member app", keys: ["app", "check in", "check-in", "key tag", "account", "login", "log in"],
        a: "Members use the club app to check in with a barcode, book classes and see billing. To sign up in the app, use your account number (“Q7-” plus the number on your key tag). The front desk can help if you get stuck." }
    ]
  },

  bts: {
    sampleTopic: "Membership",
    recentLeads: [["Kevin Murphy", "Website form · One Plus membership", "Booked"], ["Lauren Chen", "Website chat · Personal training", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Quincy Athletic Club! {asked}\n\nThe easiest next step is to stop in for a tour. Memberships start at $44.99/month with no annual contract, and every new member gets a free session with a trainer. We're open 5am–9pm weekdays and 7am on weekends.\n\nSomeone from the front desk will follow up personally, too.\n\nSee you soon,\nQuincy Athletic Club\n(617) 328-7317"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Here's this month's class schedule.”"],
      ["Day 3", "“Your free trainer session is waiting. Want to pick a time?”"],
      ["Day 7", "“No contract, cancel anytime. Come see the club this week?”"]
    ],
    report: [["52", "new enquiries"], ["21", "came in for a tour"], ["9", "new members"], ["$405/mo", "in new membership revenue"]],
    cta: {
      title: "Want this running at QAC?",
      text: "Switchboard works with the site you have, or comes with a new one like this. Every enquiry answered, followed up and tracked, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
