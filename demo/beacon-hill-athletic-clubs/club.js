/* Beacon Hill Athletic Clubs, Greater Boston: 7 locally owned gyms since
   1989 (Beacon Hill, Brookline Village, Cleveland Circle, North End, North
   Station, East Boston, Wellesley). Main office 261 Friend St;
   contact@beaconhillathleticclubs.com. Each club has its own manager email.
   Every fact here comes from beaconhillathleticclubs.com, checked
   2026-11-26. The Wix site returns 403 to curl: read it in a browser.
   Monthly prices aren't shown before checkout; the Black Friday $9.99 offer
   is. Class schedules are widgets, so no weekly grid; testimonial text isn't
   readable, so no quotes. Cleveland Circle's email is printed with a double
   dot ("..com") on two pages. Don't add claims that aren't on their site. */
window.CLUB = {
  slug: "beacon-hill-athletic-clubs",
  name: "Beacon Hill Athletic Clubs",
  shortName: "BHAC",
  monogram: "BHAC",
  logo: "img/logo.png",
  logoWide: true,
  contactPerson: "your club's manager",
  website: "beaconhillathleticclubs.com",

  colors: {
    ink: "#0d1f33",
    "ink-2": "#46566a",
    "ink-3": "#8794a5",
    paper: "#ffffff",
    soft: "#eef4fa",
    line: "#dfe6ee",
    accent: "#005090",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Montserrat", body: "Inter", headingWeight: 700, headingTrack: "-0.015em", headingCase: "none" },

  nav: [["Locations", "#pricing"], ["Training", "#services"], ["Combat", "#about"], ["Free trial", "#book"]],

  hero: {
    eyebrow: "Keeping Greater Boston fit since 1989",
    title: "Come as you are. Leave feeling better.",
    sub: "Seven locally owned neighborhood gyms across Boston, Brookline, Brighton and Wellesley: real gyms built for real results, with a free personal training consultation for every new member.",
    image: "img/hero.jpg",
    alt: "A trainer coaching a member at Beacon Hill Athletic Clubs",
    position: "50% 45%",
    cta: "Get a free trial",
    secondary: ["Find your gym", "#pricing"],
    meta: "7 locations · 100,000+ members served since 1989"
  },

  offer: {
    label: "Black Friday sale",
    title: "Join for $9.99 and work out for the rest of 2026.",
    sub: "No monthly dues until January 1, 2027, plus a free personal training consultation and movement screen. New memberships only, 18+.",
    cta: "Claim the $9.99 offer"
  },

  services: {
    eyebrow: "What we have to offer",
    title: "Strength, cardio, and everything in between.",
    sub: "Clean, well-maintained equipment and versatile training areas, so you can train your way without the distractions.",
    items: [
      { title: "Personal training", text: "Certified coaches at every location for strength, fat loss, mobility and injury-aware programming. Every client starts with a free consultation and movement screen.", meta: "All 7 locations" },
      { title: "Group exercise", text: "Spinning, Yoga, Boxing and Zumba at Cleveland Circle; Spinning, Yoga, Barre and Circuit Training in Wellesley. Included with membership.", meta: "Cleveland Circle & Wellesley" },
      { title: "Combat Sports Boston", text: "Brazilian jiu-jitsu, grappling, boxing, Muay Thai and conditioning upstairs at North Station, with a boxing ring and an octagon.", meta: "Upgraded membership" },
      { title: "Recovery", text: "A dry sauna at Beacon Hill, steam rooms at Brookline Village, Cleveland Circle, North End and Wellesley, and stretching areas everywhere.", meta: "Where available" }
    ],
    gallery: [
      ["img/group-training.jpg", "A group kettlebell session"],
      ["img/north-station.jpg", "The cardio floor at North Station, across from TD Garden"],
      ["img/east-boston.jpg", "The turf training area in East Boston"],
      ["img/racks.jpg", "Squat racks and lifting platforms"],
      ["img/steam.jpg", "Steam room"]
    ]
  },

  about: {
    eyebrow: "North Station · Combat Sports Boston",
    title: "Lift downstairs. Fight upstairs.",
    paragraphs: [
      "Directly across from TD Garden since 1991, our North Station club spans two floors: four squat racks, dedicated lifting platforms and a full free-weight area on the main level.",
      "Upstairs is Combat Sports Boston, one of New England's premier martial arts and striking programs, with Brazilian jiu-jitsu, grappling, boxing and Muay Thai coached by professionals. Beginners are always welcome."
    ],
    chips: ["Boxing ring", "Octagon", "BJJ mats"],
    image: "img/personal-training.jpg",
    alt: "A personal training session at Beacon Hill Athletic Clubs"
  },

  pricing: {
    eyebrow: "Seven locations",
    title: "Find your neighborhood gym.",
    sub: "Premium memberships include multi-club access (except Beacon Hill, which has its own membership), weekend guest privileges and towel service.",
    groups: [
      { name: "Boston", note: "", rows: [["Beacon Hill · 3 Hancock St", "M–F 6–9 · S–S 8–7"], ["North Station · 261 Friend St", "M–F 6–9 · S–S 8–7"], ["North End · 85 Atlantic Ave", "M–F 6–9 · S–S 8–7"], ["East Boston · 252 Meridian St", "M–F 6–9 · S–S 8–7"]] },
      { name: "Brookline & Brighton", note: "", rows: [["Brookline Village · 279 Washington St", "M–Th 6–10 · F 6–9 · S–S 8–7"], ["Cleveland Circle · 1686 Comm Ave", "M–Th 6–10 · F 6–9 · S–S 8–7"]] },
      { name: "Wellesley", note: "Free parking", rows: [["Linden Square · 161 Linden St", "M–F 5:30–9 · S–S 7–6"]] }
    ],
    fine: "Monthly memberships are billed on the 1st and can be cancelled with 30 days' notice. Paid-in-full 30- and 90-day memberships are also available. Every new membership has a 15-day money-back guarantee."
  },

  amenities: {
    eyebrow: "Every club",
    title: "Everything you need to train your way.",
    items: [
      "Modern cardio equipment", "Free weights & squat racks", "Selectorized strength machines", "Functional training spaces",
      "Free PT consultation & movement screen", "Group exercise (select clubs)", "Steam rooms or sauna", "Towel service (select clubs)",
      "Combat Sports Boston", "Turf track (East Boston)", "15-day money-back guarantee", "Locally owned since 1989"
    ]
  },

  book: {
    eyebrow: "Try us out for free",
    title: "Request your free trial.",
    sub: "Tell us what you're interested in, and the manager at your nearest club will get right back to you. Free trials are for local residents.",
    formTitle: "Request a free trial",
    interests: ["Free trial", "Black Friday $9.99 membership", "Personal training", "Combat Sports Boston", "Group classes", "Student or military rate", "Corporate rate", "Paid-in-full (30 or 90 days)"],
    submit: "Send"
  },

  contact: {
    address: "Main office: 261 Friend Street, Boston, MA 02114",
    phone: "(617) 720-2422",
    email: "contact@beaconhillathleticclubs.com",
    hours: ["7 locations across Greater Boston", "Hours vary by club"]
  },

  chat: {
    tip: "Hi! Ask me anything about BHAC: the $9.99 deal, locations, classes…",
    greeting: "Hi! I'm the Beacon Hill Athletic Clubs assistant. Ask me about membership, our seven locations, free trials, personal training, classes, or anything else.",
    suggestions: ["How much is a membership?", "Can I try it for free?", "Where are your gyms?", "Do you have boxing classes?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have your club's manager get back to you directly.",
    done: "Got it, {first}! I've passed this to the manager at your club, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "monthly", "per month", "rate", "join", "sign up", "$", "black friday", "deal", "promo", "sale"],
        a: "Right now our Black Friday sale lets you join for just $9.99 and work out for the rest of 2026, with no monthly dues until January 1, 2027. It includes a free personal training consultation and movement screen.\n\nMonthly rates depend on the club and on Essential vs. Premium (Premium adds multi-club access, weekend guest privileges and towel service). Which gym are you closest to? Tell me your name and I'll have that club's manager send you the exact options.",
        capture: true },
      { topic: "Free trial", weight: 2, keys: ["try", "trial", "free trial", "visit", "tour", "first time", "day pass", "guest"],
        a: "Yes! We offer a free trial for local residents (bring proof of residency), so you can check out the club and meet the staff before joining. And if you join, you're covered by our 15-day money-back guarantee.\n\nMembers' guests get their first visit free with a local ID; out-of-state guests get a discounted day rate." },
      { topic: "Locations", weight: 2, keys: ["where", "location", "closest", "near", "nearest", "address", "fenway", "back bay", "brighton", "brookline", "boston college", "bc", "wellesley", "eastie", "east boston", "north end", "north station", "td garden", "beacon hill", "cambridge", "allston", "newton", "mbta", "green line", "red line", "t stop"],
        a: "We have seven clubs:\n\n• Beacon Hill, 3 Hancock St (Charles/MGH, Government Center)\n• North Station, 261 Friend St (across from TD Garden)\n• North End, 85 Atlantic Ave\n• East Boston, 252 Meridian St (by Maverick)\n• Brookline Village, 279 Washington St\n• Cleveland Circle, 1686 Commonwealth Ave (B, C and D lines)\n• Wellesley, 161 Linden St (free parking)\n\nWhich neighborhood are you in?" },
      { topic: "Hours", weight: 2, keys: ["hour", "open", "close", "early", "late", "weekend", "sunday", "saturday"],
        a: "Most clubs are open Mon–Fri 6am–9pm and weekends 8am–7pm. Brookline Village and Cleveland Circle stay open until 10pm Monday–Thursday, and Wellesley opens at 5:30am on weekdays (weekends 7am–6pm)." },
      { topic: "Group classes", keys: ["class", "spin", "spinning", "yoga", "barre", "zumba", "circuit", "group"],
        a: "Group classes are included with membership at Cleveland Circle (Spinning, Yoga, Boxing, Zumba) and Wellesley (Spinning, Yoga, Barre, Circuit Training). For martial arts, Combat Sports Boston runs at our North Station club." },
      { topic: "Combat Sports Boston", weight: 2, keys: ["boxing", "box", "muay thai", "jiu", "bjj", "grappling", "martial", "mma", "kickbox", "fight", "self defense", "wrestling"],
        a: "Combat Sports Boston is upstairs at our North Station gym: Brazilian jiu-jitsu, grappling, boxing, Muay Thai and conditioning with professional coaches, a boxing ring and an octagon. Classes are included with an upgraded membership, and beginners are always welcome. Cleveland Circle also has a boxing area and boxing classes." },
      { topic: "Personal training", weight: 2, keys: ["personal train", "trainer", "training", " pt ", "coach", "one on one", "injury", "movement screen", "consult"],
        a: "Personal training is available at all seven clubs with certified coaches who specialize in strength, fat loss, mobility and injury-aware programming. Every client starts with a free consultation and movement screen. Want me to have a trainer at your club reach out?" },
      { topic: "Steam & sauna", weight: 2, keys: ["sauna", "steam", "recovery", "towel", "locker", "shower"],
        a: "Beacon Hill has a dry sauna, and Brookline Village, Cleveland Circle, North End and Wellesley have steam rooms. Towel service is at Beacon Hill, Brookline Village and North Station, and it's included with Premium memberships." },
      { topic: "Discounts", weight: 2, keys: ["discount", "student", "military", "veteran", "corporate", "company", "employer", "insurance", "reimburse"],
        a: "Most clubs offer discounted monthly memberships for students, military and select corporate partners, though it varies by location. Members can also download invoices for health insurance reimbursement at myiclubonline.com. Want your club's manager to check what you qualify for?" },
      { topic: "Multi-club access", weight: 3, keys: ["all locations", "all the locations", "all your", "use all", "every location", "other location", "multi", "multiple", "every club", "other club", "any club", "premium", "essential"],
        a: "Premium memberships include multi-club access, weekend guest privileges and towel service, while Essential covers your home club. Membership covers every club except Beacon Hill, which needs its own membership." },
      { topic: "Billing & cancelling", weight: 2, keys: ["cancel", "freeze", "contract", "commitment", "bill", "paid in full", "pif", "money back", "refund"],
        a: "Monthly memberships are billed on the 1st (prorated if you join mid-month) and can be cancelled with 30 days' notice through myiclubonline.com. Paid-in-full 30- and 90-day memberships simply expire, and every new membership has a 15-day money-back guarantee." },
      { topic: "Parking", weight: 2, keys: ["parking", "park", "drive"],
        a: "Wellesley has free parking, and Brookline Village has nearby parking with easy access to public transit. Our Boston clubs are all close to the T: Beacon Hill near Charles/MGH, North Station across from TD Garden, and East Boston near Maverick." }
    ]
  },

  bts: {
    sampleTopic: "Free trial",
    recentLeads: [["Maria Lopez", "Website form · Free trial (East Boston)", "Booked"], ["Kevin O'Brien", "Website chat · Combat Sports Boston", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Beacon Hill Athletic Clubs! {asked}\n\nRight now you can join for just $9.99 and work out for the rest of 2026, with no dues until January 1, plus a free personal training consultation and movement screen. Every new membership has a 15-day money-back guarantee.\n\nCome as you are, leave feeling better,\nBeacon Hill Athletic Clubs"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? The $9.99 Black Friday offer covers the rest of 2026.”"],
      ["Day 3", "“Want to see the club first? Your free trial is ready whenever you are.”"],
      ["Day 7", "“Last chance for $9.99: no dues until January 1. Want us to set it up?”"]
    ],
    report: [["310", "new enquiries across 7 clubs"], ["124", "came in for a free trial"], ["58", "new members"], ["94%", "answered in under a minute"]],
    cta: {
      title: "Want this running at BHAC?",
      text: "Right now, enquiries land in seven different managers' inboxes, and the contact form asks people to type which club they mean. Switchboard answers every one in seconds, routes it to the right club, follows up automatically, and shows all seven locations in one dashboard, right when your Black Friday sale is driving the most traffic.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
