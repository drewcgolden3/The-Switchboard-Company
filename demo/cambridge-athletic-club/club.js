/* Cambridge Athletic Club, Cambridge MA (Kendall Square). Locally owned,
   three clubs: 215 First St (flagship, Athenaeum Building), 600 Technology
   Square, and CAC Express at 101 Main St. GM is Carla Bettencourt;
   membership enquiries go to membership@cambridgeathletic.com.
   Every fact here comes from cambridgeathletic.com, checked 2026-11-25.
   Class schedule is a live Mindbody widget, so no weekly grid; no published
   reviews; no published personal training or Passport prices.
   Their site says both "four gyms" and "3 unique locations", and both
   "join within a week" and "within a month" of a day pass; this avoids both.
   Don't add claims that aren't on their site. */
window.CLUB = {
  slug: "cambridge-athletic-club",
  name: "Cambridge Athletic Club",
  shortName: "CAC",
  monogram: "CAC",
  logo: "img/logo.png",
  logoName: true,
  contactPerson: "the membership team",
  website: "cambridgeathletic.com",

  colors: {
    ink: "#141a2e",
    "ink-2": "#4b5163",
    "ink-3": "#8b90a0",
    paper: "#f8f8f6",
    soft: "#f1f2f6",
    line: "#e0e2e8",
    accent: "#c8202b",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Archivo", body: "Inter", headingWeight: 700, headingTrack: "-0.02em", headingCase: "none" },

  nav: [["Clubs", "#pricing"], ["Training", "#services"], ["Squash", "#about"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Kendall Square · Tech Square · CAC Express",
    title: "Cambridge's locally owned athletic club.",
    sub: "Three clubs in East Cambridge, from the three-floor flagship in the historic Athenaeum Building to a 5am–midnight express gym on the canal. Month-to-month, no cancellation fees.",
    image: "img/hero.jpg",
    alt: "The Athenaeum Building at 215 First Street, home of Cambridge Athletic Club",
    position: "50% 40%",
    cta: "Get your rates",
    secondary: ["Compare clubs", "#pricing"],
    meta: "215 First St · 600 Technology Sq · 101 Main St"
  },

  offer: {
    label: "Try it first",
    title: "A $20 day pass, credited toward your enrollment if you join.",
    sub: "Use it at 215 First Street or 600 Tech Square. Students, seniors, frontline healthcare workers, couples and corporate partners get discounted rates.",
    cta: "Ask about a day pass"
  },

  services: {
    eyebrow: "More than a gym",
    title: "Train, play and recover, all around the corner.",
    sub: "A welcoming, locally owned club where you're more than a number.",
    items: [
      { title: "Personal training", text: "Exercise physiologists and certified trainers, from beginners to elite athletes and people coming back from injury. Every program starts with a Personal Fitness Evaluation and InBody scan.", meta: "Ask about the intro offer" },
      { title: "Group fitness", text: "Les Mills BODYPUMP, RPM, GRIT, SPRINT, BODYBALANCE and CORE, plus yoga and Zumba, across three studios including dedicated cycling and yoga rooms.", meta: "Included with membership" },
      { title: "Squash & basketball", text: "The only public squash club in Cambridge, coached by Naji Khan, plus a full-size basketball court with weekday and weekend pick-up.", meta: "At 215 First St" },
      { title: "Recovery & nutrition", text: "Dry sauna and cold plunge, towel service, and a complimentary nutrition consultation with registered dietitian Nicole Bodin.", meta: "Flagship amenities" }
    ],
    gallery: [
      ["img/floor.jpg", "The weight floor and mezzanine at 215 First Street"],
      ["img/training.jpg", "A trainer coaching a member through a dumbbell press"],
      ["img/studio.jpg", "A group fitness studio"],
      ["img/tech-square.jpg", "The sunlit training area at 600 Technology Square"],
      ["img/team.jpg", "The CAC team"]
    ]
  },

  about: {
    eyebrow: "Squash at CAC",
    title: "Coached by the first family of squash.",
    paragraphs: [
      "215 First Street is the only public squash club in Cambridge and one of the premier squash venues in the Boston area. Our members have won numerous state singles and team championships.",
      "Squash Program Director Naji Khan, of the famous Khan squash dynasty, has coached at CAC for over 15 years. There are weekly round robins for beginner, intermediate and advanced players, beginner clinics, and member-only court booking."
    ],
    chips: ["2 squash courts", "Weekly round robins", "Member booking privileges"],
    image: "img/squash.jpg",
    alt: "A squash court at Cambridge Athletic Club"
  },

  pricing: {
    eyebrow: "Clubs & membership",
    title: "Pick your club. Month-to-month, always.",
    sub: "No long-term contracts and no cancellation fees: just 7 days' notice before your billing date.",
    groups: [
      { name: "215 First Street", note: "3-floor flagship · Mon–Fri 5:30am–9:30pm, weekends 8am–6pm", rows: [["Monthly membership", "$94/mo"], ["Enrollment fee", "$99"], ["Sauna, cold plunge, squash, basketball", "Included"], ["Garage parking", "Free with validation*"]] },
      { name: "600 Technology Square", note: "Natural light · Mon–Fri 6am–8pm", rows: [["Monthly membership", "$74/mo"], ["Weekends & holidays at 215 First St", "Included"], ["Dry saunas & towel service", "Included"]] },
      { name: "CAC Express, 101 Main St", note: "Key card access, 7 days, 5am–midnight", rows: [["Monthly membership", "$49/mo"], ["Day pass at 215 & Tech Sq", "Discounted"]] }
    ],
    fine: "*During peak club hours and weekends. Day pass $20; guests of members $15. Discounted rates for students, seniors (65+), frontline healthcare workers, couples, friends and family on one billing plan, and corporate partners. A Passport membership covers multiple clubs."
  },

  amenities: {
    eyebrow: "At the flagship",
    title: "Everything you need at 215 First Street.",
    items: [
      "3 studios, incl. cycling & yoga", "Full weight floor & 2 lifting platforms", "Kendall Square CrossFit on site", "Full-size basketball court",
      "2 squash courts", "Women's-only fitness studio", "Dry sauna", "Cold plunge",
      "Towel service", "Full-amenity locker rooms", "CAC Rewards program", "Free garage parking with validation"
    ]
  },

  book: {
    eyebrow: "Get started",
    title: "Get your membership rates.",
    sub: "Tell us which club you're interested in and whether you qualify for a discount, and we'll get right back to you.",
    formTitle: "Get your rates",
    interests: ["215 First Street", "600 Technology Square", "CAC Express", "Passport (multiple clubs)", "Student / senior / healthcare rate", "Corporate rate", "Personal training", "Squash"],
    submit: "Send"
  },

  contact: {
    address: "215 First Street, Cambridge, MA 02142",
    phone: "(617) 491-8989",
    email: "membership@cambridgeathletic.com",
    hours: ["215 First St: Mon–Fri 5:30am–9:30pm, Sat–Sun 8am–6pm", "600 Tech Square: Mon–Fri 6am–8pm", "CAC Express: daily 5am–midnight"]
  },

  chat: {
    tip: "Hi! Ask me anything about CAC: rates, clubs, classes, squash…",
    greeting: "Hi! I'm the Cambridge Athletic Club assistant. Ask me about membership, our three clubs, classes, personal training, squash, or anything else.",
    suggestions: ["How much is a membership?", "Do you have a student discount?", "Can I try it with a day pass?", "Where is parking?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have our membership team get back to you directly.",
    done: "Got it, {first}! I've passed this to our membership team, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "monthly", "per month", "rate", "join", "sign up", "enroll", "$"],
        a: "Rates depend on the club, and all are month-to-month with no cancellation fees:\n\n• 215 First Street (flagship): $94/mo plus a $99 enrollment fee\n• 600 Technology Square: $74/mo, including weekends at 215 First St\n• CAC Express at 101 Main St: $49/mo, 5am–midnight daily\n\nStudents, seniors, frontline healthcare workers, couples and corporate partners may qualify for a lower rate. Want us to check yours?",
        follow: "Do you have a student discount?" },
      { topic: "Discounts", weight: 2, keys: ["discount", "student", "senior", "healthcare", "nurse", "doctor", "hospital", "frontline", "couple", "corporate", "company", "employer", "work at"],
        a: "Yes! We offer discounted plans for students (with ID), seniors 65+, frontline healthcare workers, couples, friends and family on one billing plan, and employees of our corporate partners.\n\nDiscounted rates can't be purchased online, so share your name and email and our membership team will send you your exact pricing." },
      { topic: "Day pass & guests", weight: 2, keys: ["day pass", "try", "trial", "guest", "friend", "visit", "tour", "drop in"],
        a: "A day pass is $20 at 215 First Street or 600 Tech Square, and if you join afterwards we'll take it off your enrollment. Members can also bring a guest for $15 (guests need a valid ID)." },
      { topic: "Locations & hours", weight: 2, keys: ["location", "where", "hour", "open", "close", "weekend", "tech square", "technology", "express", "101 main", "first street", "215", "kendall", "passport"],
        a: "We have three clubs:\n\n• 215 First Street (Kendall Square): Mon–Fri 5:30am–9:30pm, weekends 8am–6pm\n• 600 Technology Square (between Kendall and Central): Mon–Fri 6am–8pm\n• CAC Express, 101 Main Street: key card access daily, 5am–midnight\n\nA Passport membership gives you access to multiple clubs." },
      { topic: "Parking", weight: 2, keys: ["parking", "park", "garage", "drive", "t stop", "lechmere", "subway"],
        a: "215 First Street has free garage parking with validation during peak club hours and on weekends, and it's a quick walk from Lechmere and Kendall/MIT. 600 Tech Square has garage parking with validation too." },
      { topic: "Classes", keys: ["class", "schedule", "bodypump", "pump", "rpm", "spin", "cycling", "grit", "hiit", "sprint", "zumba", "yoga", "bodybalance", "core", "les mills"],
        a: "Classes are included with membership: Les Mills BODYPUMP, RPM, GRIT, SPRINT, BODYBALANCE and CORE, plus yoga and Zumba. 215 First Street has three studios, including dedicated cycling and yoga rooms, and you book your spot in the CAC app or on Mindbody." },
      { topic: "Personal training", weight: 2, keys: ["personal train", "trainer", "training", " pt ", "coach", "one on one", "injury", "rehab", "evaluation", "inbody"],
        a: "Our trainers include exercise physiologists and certified coaches who work with everyone from beginners to elite athletes, and all are trained in exercise rehabilitation. You start with a Personal Fitness Evaluation, which includes an InBody body-composition scan.\n\nWant us to set up a free consultation and send you our intro offer?" },
      { topic: "Squash", weight: 2, keys: ["squash", "naji", "khan", "racquet"],
        a: "215 First Street is the only public squash club in Cambridge, with two courts and member-only booking. Naji Khan runs weekly round robins (beginner Sundays 3–6pm, intermediate Mondays 6–7:30pm, advanced Mondays 7:30–9pm) and beginner clinics on Thursday evenings." },
      { topic: "Basketball", weight: 2, keys: ["basketball", "pick up", "pickup", "hoop", "court"],
        a: "Our full-size basketball court at 215 First Street has pick-up Mon–Fri 12–2pm, Mon/Wed/Fri 6–8pm, and weekends 12–2pm. It's included with membership, or $20 with a day pass. We also run youth basketball for ages 6–9 and 10–13." },
      { topic: "Sauna & recovery", weight: 2, keys: ["sauna", "cold plunge", "plunge", "steam", "recover", "towel", "locker"],
        a: "215 First Street has a dry sauna, a cold plunge, towel service and full-amenity locker rooms. Tech Square has dry saunas in its locker rooms and towel service too." },
      { topic: "Nutrition", weight: 2, keys: ["nutrition", "dietitian", "diet", "weight loss", "lose weight", "meal"],
        a: "215 First Street members get a complimentary nutrition consultation with our registered dietitian, Nicole Bodin, MS, RD, who works with members and non-members on weight management, performance and overall health." },
      { topic: "Women's studio", weight: 2, keys: ["women", "woman", "ladies", "female", "women's only"],
        a: "Yes. 215 First Street has a women's-only fitness studio, included with membership." },
      { topic: "Freeze or cancel", weight: 2, keys: ["cancel", "freeze", "contract", "commitment", "pause"],
        a: "There are no contracts or cancellation fees. Just cancel at least 7 days before your next billing date. You can also freeze for up to 3 months a year, or up to 6 months for medical reasons with a doctor's note." }
    ]
  },

  bts: {
    sampleTopic: "Membership",
    recentLeads: [["Priya Shah", "Website form · Student rate", "Joined"], ["Dan Murphy", "Website chat · Squash", "Booked"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Cambridge Athletic Club! {asked}\n\nThe easiest way to see if CAC is right for you is a $20 day pass at 215 First Street or 600 Tech Square, and we'll take it off your enrollment if you join. All memberships are month-to-month with no cancellation fees.\n\nSee you soon,\nCambridge Athletic Club\n(617) 491-8989"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Here's how our three clubs compare.”"],
      ["Day 3", "“Want to try a class first? BODYPUMP and RPM run all week at 215 First Street.”"],
      ["Day 7", "“Your day pass comes off your enrollment if you join. Want to come in this week?”"]
    ],
    report: [["120", "new enquiries"], ["46", "came in or bought a day pass"], ["22", "new members"], ["$1,800/mo", "in new membership revenue"]],
    cta: {
      title: "Want this running at CAC?",
      text: "Right now, students, seniors, healthcare workers and corporate employees can't join online. They fill out a form and wait for someone to email back their rate. Switchboard replies in seconds, follows up automatically, and puts every enquiry from every club in one place, without adding work for the membership team.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
