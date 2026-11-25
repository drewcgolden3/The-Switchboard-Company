/* Norwell Athletic Club, Norwell MA. Every fact here comes from
   norwellathleticclub.com and its public Google Calendar schedule, checked
   2026-11-25 (schedule = week of Nov 30). Their site lists three different
   sets of hours; this uses the footer hours (Mon–Fri 5–9, weekends 6–4).
   Don't add claims that aren't on their site. */
window.CLUB = {
  slug: "norwell-athletic-club",
  name: "Norwell Athletic Club",
  shortName: "NAC",
  monogram: "NAC",
  logo: "img/logo.png",
  logoWide: true,
  contactPerson: "the membership team",
  website: "norwellathleticclub.com",

  colors: {
    ink: "#0f1e35",
    "ink-2": "#46536a",
    "ink-3": "#8691a3",
    paper: "#f7f7f5",
    soft: "#edf0f4",
    line: "#dde2e9",
    accent: "#1c3f73",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Barlow Condensed", body: "Inter", headingWeight: 700, headingTrack: "-0.005em", headingCase: "uppercase" },

  nav: [["Classes", "#schedule"], ["Membership", "#pricing"], ["Training", "#services"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Route 53, Norwell · Open 365 days a year",
    title: "The largest free weight room on the South Shore.",
    sub: "27,000 square feet, 50,000 lbs of free weights, a full-size basketball court, 75+ classes a week and an infrared sauna, all for $44.99 a month.",
    image: "img/hero.jpg",
    alt: "Two members high-fiving after a class at Norwell Athletic Club",
    position: "62% 35%",
    cta: "Schedule your visit",
    secondary: ["See membership", "#pricing"],
    meta: "Mon–Fri 5am–9pm · Sat–Sun 6am–4pm · 412 Washington St"
  },

  offer: {
    label: "Every new membership includes",
    title: "A free fitness evaluation, nutrition meeting and reformer Pilates session.",
    sub: "Plus 10% off at Sullivan Tire services and The Organic Juice Barn next door.",
    cta: "Schedule your visit"
  },

  services: {
    eyebrow: "More than just a gym",
    title: "A complete fitness center, for every kind of fitness.",
    sub: "From first-timers and busy parents to youth and professional athletes, hundreds of your neighbors train here.",
    items: [
      { title: "Free weights & floor", text: "50,000 lbs of free weights, plate-loaded and selectorized machines, a turf area and a full-size basketball court.", meta: "Largest on the South Shore" },
      { title: "75+ classes a week", text: "Spin, HIIT, Muscle Mix, Cardio Boxing, Zumba, Heated Sculpt, yoga, barre, and mat, chair and reformer Pilates.", meta: "Included with membership" },
      { title: "Personal training", text: "One-on-one, small group and sports performance coaching, from Chris Andersen (BC High strength coach) to former New Balance pro Ned Nedeau.", meta: "12 certified trainers" },
      { title: "Wellness center", text: "Infrared sauna, steam, InBody body-composition scans, plus in-house nutrition, acupuncture and massage partners.", meta: "Recover as hard as you train" }
    ],
    gallery: [
      ["img/spin.jpg", "A packed spin class"],
      ["img/deadlift.jpg", "A member deadlifting in the free-weight room"],
      ["img/boxing.jpg", "Boxing mitt work with a coach"],
      ["img/class.jpg", "A group fitness class on the court"],
      ["img/sauna.jpg", "The infrared sauna"]
    ]
  },

  schedule: {
    eyebrow: "Group exercise schedule",
    title: "Something every morning and evening.",
    sub: "A typical week of classes. All included with membership; boxing with Bobby is held in the private training studio.",
    days: [
      { day: "Monday", classes: [["7:00am", "Muscle Mix", "Cathy"], ["8:30am", "Slow Flow Yoga"], ["8:30am", "Ride the Road (spin)", "Wendy"], ["8:30am", "Strength Interval", "Kristen"], ["9:30am", "Group Active", "Lisa"], ["10:30am", "Pilates Mat", "Ann"], ["5:30pm", "20/20/20", "Dawn"], ["5:30pm", "Spin", "Katie"], ["5:30pm", "Yoga & Your Fascia"]] },
      { day: "Tuesday", classes: [["6:00am", "Spin Express", "Kim"], ["7:00am", "Spin Express", "Wendy"], ["7:45am", "Strength 45", "Alissa"], ["8:30am", "Barre", "Kerry"], ["8:30am", "Cardio Interval", "Kristen"], ["9:30am", "Stretch & Stability"], ["9:30am", "Reps & Sets", "Alisa"], ["10:30am", "Zumba", "Ana"], ["4:30pm", "Abs & Arms (30 min)"], ["5:30pm", "Yoga", "Sandi"], ["5:30pm", "Strength & Conditioning Express", "Matrida"]] },
      { day: "Wednesday", classes: [["7:30am", "Total Body Blast", "Wendy"], ["8:30am", "Vinyasa Yoga", "Sue"], ["8:30am", "Cardio Boxing", "Bobby"], ["9:30am", "Pilates & Props", "Kerry"], ["9:30am", "Group Active", "Lisa"], ["9:30am", "Spin", "Alisa"], ["5:00pm", "Muscle Mix"], ["5:30pm", "Spin", "Katie"], ["6:00pm", "Pilates Chair", "Ann"]] },
      { day: "Thursday", classes: [["6:45am", "Spin Express", "Wendy"], ["7:00am", "Vinyasa Yoga", "Marcela"], ["7:30am", "Tabata", "Wendy"], ["8:30am", "Barre", "Nadine"], ["8:30am", "Cardio Interval", "Kristen"], ["9:30am", "Strength 45", "Alisa"], ["10:30am", "Zumba", "Ana"], ["5:30pm", "Cardio Kickboxing"], ["5:30pm", "Express Heated Sculpt", "Matrida"]] },
      { day: "Friday", classes: [["7:00am", "Muscle Mix", "Cathy"], ["7:30am", "Spin Express", "Kim"], ["8:15am", "Yoga & Your Fascia", "Laura"], ["8:30am", "Cardio Power Hour", "Wendy"], ["9:30am", "Pilates & Props", "Kerry"], ["9:30am", "Strength Interval", "Kristen"]] },
      { day: "Saturday", classes: [["7:30am", "Total Body Strength", "Kyla"], ["8:30am", "Boxing with Bobby"], ["8:30am", "Cardio Boxing", "Wendy"], ["8:30am", "Rhythm & Tone (spin)"], ["9:30am", "Vinyasa Flow", "Laura"], ["9:30am", "Zumba", "Cindy"], ["12:30pm", "Open basketball court"]] },
      { day: "Sunday", classes: [["7:45am", "Spin Express", "Wendy"], ["8:00am", "Muscle Mix", "Cathy"], ["9:00am", "Spin", "Cathy"], ["11:30am", "Open basketball court"]] }
    ]
  },

  about: {
    eyebrow: "This is family",
    title: "More than mats, machines, weights and classes.",
    paragraphs: [
      "Norwell Athletic Club appeals to every type of fitness enthusiast, from first-timers and post-injury clients to gym veterans, youth athletes and pros.",
      "Our membership consultants will walk you through the program that fits your schedule, your interests and your goals, and our staff will make you feel at home from day one."
    ],
    chips: ["27,000 sq ft", "Open 365 days", "Corporate rates (10+ employees)", "Insurance fitness benefits accepted"],
    image: "img/team.jpg",
    alt: "The Norwell Athletic Club team at the front desk"
  },

  pricing: {
    eyebrow: "Membership",
    title: "Everything you need for $44.99 a month.",
    sub: "Every membership now includes unlimited yoga, barre, and chair and mat Pilates classes on top of full gym access.",
    groups: [
      { name: "Memberships", note: "Monthly, or pay in full for 1–2 years", rows: [["All-inclusive membership", "$44.99/mo"], ["Seniors (65+)", "from $39.99/mo"], ["Family plan (3–5 in one household)", "$94.99/mo"], ["Full-time students (23 and under)", "Special rate"]] },
      { name: "Bootcamp & boxing", note: "Small groups led by Wendy and Bobby", rows: [["Bootcamp, 6 sessions", "$189"], ["Bootcamp, single session", "$35"], ["Boxing with Bobby, 6 group sessions", "$150"], ["Boxing drop-in", "$30"], ["Private boxing (6 for $270)", "$50"]] }
    ],
    fine: "Most insurance plans offer a fitness benefit: call the number on your card for as much as $150+ a year back just for being a member. A day membership can be purchased anytime and is refunded when you join."
  },

  amenities: {
    eyebrow: "The facility",
    title: "27,000 square feet, built to fit every goal.",
    items: [
      "50,000 lbs of free weights", "Full-size basketball court", "Turf training area", "Cardio machines",
      "Spin studio", "Mind body (yoga & Pilates) studio", "Reformer Pilates", "Private personal training studio",
      "Infrared sauna", "Steam & sauna", "InBody body composition scans", "Nutrition, acupuncture & massage partners"
    ]
  },

  quotes: {
    eyebrow: "Why members love NAC",
    title: "In their words.",
    items: [
      ["“This is more than mats, machines, weights and classes. This is family. NAC pulls you in: motivating, supportive, and caring.”", "Toni A."],
      ["“The staff is very friendly and makes you feel like part of a family! I don’t think you can find a better gym around this area.”", "Christian R., Weymouth"]
    ]
  },

  book: {
    eyebrow: "Schedule your visit",
    title: "Come see why your neighbors love NAC.",
    sub: "Tell us what you're interested in and our membership team will get right back to you.",
    formTitle: "Schedule your visit",
    interests: ["Membership", "Family plan", "Senior membership", "Student rate", "Personal training", "Bootcamp or boxing", "Classes", "Corporate rate"],
    submit: "Send"
  },

  contact: {
    address: "412 Washington Street (Route 53), Norwell, MA 02061",
    phone: "(781) 659-6565",
    email: "info@norwellathleticclub.com",
    hours: ["Mon–Fri 5:00am – 9:00pm", "Sat–Sun 6:00am – 4:00pm", "Open 365 days a year"]
  },

  chat: {
    tip: "Hi! Ask me anything about NAC: prices, classes, training…",
    greeting: "Hi! I'm the Norwell Athletic Club assistant. Ask me about membership, classes, personal training, or anything else.",
    suggestions: ["How much is a membership?", "What classes are on Saturday?", "Do you have a family plan?", "Can I try it first?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have our membership team get back to you directly.",
    done: "Got it, {first}! I've passed this to our membership team, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "monthly", "per month", "rate", "join", "sign up", "$"],
        a: "Membership is $44.99/month, and it now includes everything: full gym access plus unlimited group classes, yoga, barre, and chair and mat Pilates.\n\nSeniors 65+ start at $39.99/month, families of 3–5 in one household are $94.99/month, and full-time students 23 and under get a special rate. You can also pay in full for 1–2 years.\n\nWant someone to help you get started?",
        follow: "Do you have a family plan?" },
      { topic: "Family plan", keys: ["family", "household", "kids", "spouse", "husband", "wife", "partner"], weight: 2,
        a: "Yes! The family plan covers 3–5 members of the same household for $94.99/month." },
      { topic: "Trying it first", keys: ["try", "trial", "day pass", "day membership", "guest", "visit", "tour", "first"],
        a: "Absolutely. You can buy a day membership anytime, and it's refunded if you join. Or schedule a visit and a membership consultant will show you around.\n\nEvery new membership also comes with a free fitness evaluation, a 30-minute nutrition meeting and a complimentary reformer Pilates session.",
        follow: "How much is a membership?" },
      { topic: "Hours", keys: ["hour", "open", "close", "early", "late", "when", "weekend", "holiday"],
        a: "We're open 365 days a year: Monday–Friday 5:00am–9:00pm and weekends 6:00am–4:00pm." },
      { topic: "Classes", keys: ["class", "schedule", "spin", "cycle", "zumba", "hiit", "barre", "pilates", "yoga", "muscle mix", "sculpt", "tabata", "kickbox"],
        a: "We run 75+ classes a week: Spin, HIIT, Muscle Mix, Strength Interval, Cardio Boxing, Zumba, Tabata, Express Heated Sculpt, yoga, barre, and mat, chair and reformer Pilates. They're all included with membership.\n\nAsk me about a specific day, like “What's on Tuesday?”",
        follow: "What classes are on Saturday?" },
      { topic: "Personal training", weight: 2, keys: ["train", " pt ", "coach", "one on one", "1 on 1", "sports performance", "athlete", "small group", "injury", "rehab"],
        a: "We have 12 certified trainers for one-on-one, small group and sports performance training. That includes Chris Andersen (head strength coach at BC High), former New Balance pro runner Ned Nedeau, and Brandon Messina, a Doctor of Physical Therapy.\n\nWant to set up a consultation?" },
      { topic: "Bootcamp & boxing", weight: 2, keys: ["bootcamp", "boot camp", "boxing", "bobby", "wendy", "mitt", "heavy bag"],
        a: "Bootcamps with Wendy and Bobby are $189 for 6 sessions or $35 a session.\n\nBoxing with Bobby runs Saturdays at 8:30am in the private training studio: $150 for 6 group sessions or $30 drop-in. Private boxing is $50, or 6 for $270. Space is limited." },
      { topic: "Wellness & sauna", weight: 2, keys: ["sauna", "infrared", "steam", "inbody", "body comp", "massage", "acupuncture", "nutrition", "wellness", "recover"],
        a: "Our in-house wellness center has an infrared sauna, plus steam and sauna. InBody body-composition scans are $20 for members (included for training clients), and we partner with Simplify Holistic Nutrition, A Point Well Taken Acupuncture and Reliefology massage." },
      { topic: "Free weights & facility", keys: ["weight", "equipment", "dumbbell", "rack", "squat", "machine", "basketball", "court", "turf", "big", "size"],
        a: "We have the largest free weight room on the South Shore, with 50,000 lbs of free weights, plus machines, a turf area and a full-size basketball court, all in a 27,000 sq ft facility. Open court times are posted on Saturday and Sunday afternoons." },
      { topic: "Discounts", weight: 2, keys: ["discount", "senior", "student", "corporate", "company", "employer", "insurance", "reimburse"],
        a: "Seniors 65+ start at $39.99/month, and full-time students (23 and under) get a special rate. Corporate rates start at 10 employees, so your company may already be set up. And most insurance plans offer a fitness benefit of as much as $150+ a year just for being a member." },
      { topic: "Location", keys: ["where", "address", "location", "direction", "route 53", "parking", "park"],
        a: "We're at 412 Washington Street on Route 53 in Norwell, right next door to The Organic Juice Barn. Call us at (781) 659-6565 if you need anything before you come in." }
    ]
  },

  bts: {
    sampleTopic: "Membership",
    recentLeads: [["Brian Kelly", "Website form · Family plan", "Booked"], ["Megan Doyle", "Website chat · Personal training", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Norwell Athletic Club! {asked}\n\nThe best next step is to come see the club. Membership is $44.99/month with classes, yoga and Pilates included, and every new member gets a free fitness evaluation, nutrition meeting and reformer Pilates session.\n\nOne of our membership consultants will follow up personally, too.\n\nSee you soon,\nNorwell Athletic Club\n(781) 659-6565"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Here's this week's class schedule.”"],
      ["Day 3", "“Your free fitness evaluation and Pilates session are waiting. Want to pick a time?”"],
      ["Day 7", "“Saturday's 9:30 Vinyasa Flow is a great first class. Want to come by?”"]
    ],
    report: [["48", "new enquiries"], ["20", "came in for a visit"], ["9", "new members"], ["$405/mo", "in new membership revenue"]],
    cta: {
      title: "Want this running at NAC?",
      text: "Your trial form promises a reply within 24 hours. Switchboard replies in seconds, follows up automatically, and puts every enquiry in one place, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
