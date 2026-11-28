/* Lakeville Athletic Club, 325 Bedford St, Lakeville MA. Tennis club with
   5 indoor hard courts, 4 outdoor Har-Tru clay courts and a seasonal outdoor
   pool center. Contact: lakevilleclub@comcast.net (contact page); flyers use
   lakevilletennis@comcast.net. 508-947-8088.
   Every fact here comes from lakevilleathleticclub.com, its PDF flyers, and
   their public CourtReserve membership page (org 10158), checked 2026-11-27.
   The site says "Call for pricing" but CourtReserve lists 2026-27 prices,
   used below. Not published anywhere: lesson, clinic, program and pool
   membership prices, club hours (only pool hours), reviews. The summer
   pickleball rates are from the 2025 flyer. The refer-a-friend flyer expired
   7/31/21, so it isn't used. Don't add claims that aren't on their site. */
window.CLUB = {
  slug: "lakeville-athletic-club",
  name: "Lakeville Athletic Club",
  shortName: "LAC",
  monogram: "LAC",
  logo: "img/logo-mark.svg",
  logoName: true,
  logoWide: true,
  contactPerson: "the front desk",
  website: "lakevilleathleticclub.com",

  colors: {
    ink: "#102536",
    "ink-2": "#4a5b69",
    "ink-3": "#8a98a4",
    paper: "#f7faf6",
    soft: "#eef5dc",
    line: "#dde6d6",
    accent: "#127fc0",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Oswald", body: "Inter", headingWeight: 500, headingTrack: "0", headingCase: "none" },

  nav: [["Tennis", "#services"], ["Our pros", "#about"], ["Membership", "#pricing"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Tennis · Pickleball · Pool · Lakeville",
    title: "Year-round tennis, indoors and out.",
    sub: "One of the largest tennis facilities in the area: 5 indoor hard courts, 4 outdoor Har-Tru clay courts and a seasonal pool center, with lessons, clinics and teams for every level.",
    image: "img/hero.jpg",
    alt: "The indoor hard courts at Lakeville Athletic Club",
    position: "50% 55%",
    cta: "Ask about membership",
    secondary: ["See membership prices", "#pricing"],
    meta: "325 Bedford Street, Lakeville · Open 7 days a week"
  },

  offer: null,

  services: {
    eyebrow: "A relaxed, family atmosphere",
    title: "Lessons, programs and teams for every player.",
    sub: "Individual attention and great service from a highly experienced teaching staff, with something for beginners, families and tournament players alike.",
    items: [
      { title: "Lessons & clinics", text: "Private, semi-private and tri-private lessons in half-hour increments, plus 8-week clinics with 4 players to a pro.", meta: "Member rates on everything" },
      { title: "Junior programs", text: "A summer program for ages 4–12, after-school Youth tennis, Sunday Junior Development, Future Stars, Junior Academy and USTA junior teams.", meta: "Ages 4–18" },
      { title: "Adult programs & teams", text: "Drop-in drill sessions, round robins, an intra-club singles league, and CMITA, SNEITA, BTC, Dorothy Bruno Hills and USTA travel teams.", meta: "Every level" },
      { title: "Pickleball & pool", text: "Group pickleball play at various levels for $15, and a summer pool center with a family pool, kiddie pool and adult jacuzzi.", meta: "Seasonal pool center" }
    ],
    gallery: [
      ["img/clay.jpg", "Players on the outdoor clay courts"],
      ["img/indoor.jpg", "A doubles match on the indoor courts"],
      ["img/juniors.jpg", "The junior summer program on the indoor courts"],
      ["img/pool.jpg", "The family pool, kiddie pool and jacuzzi"],
      ["img/members.jpg", "Members gathered on the clay courts"]
    ]
  },

  schedule: null,

  about: {
    eyebrow: "Our pros",
    title: "Taught by players who've won at the national level.",
    paragraphs: [
      "Alex Howard played #1 singles and doubles at the University of Richmond, held the #1 New England ranking 12 times and has won 2 gold balls at the Men's National Open. Jared Pieper is a USPTA-certified pro who played #1 singles for Bridgewater State and captains our top men's and junior teams.",
      "Elena Anthony played WTA events in South America and Asia and was ranked #240 in the world as a junior. David Wilson has taught here since 1988, and Aaron Petruski brings the drills and discipline of his years coaching at Penn State."
    ],
    chips: ["USPTA certified", "National champions", "Juniors & adults"],
    image: "img/juniors-net.jpg",
    alt: "A pro feeding balls to young players at the net"
  },

  pricing: {
    eyebrow: "Membership",
    title: "2026–27 tennis memberships.",
    sub: "One payment covers the season, September to September, with indoor and outdoor courts and member rates on every program.",
    groups: [
      { name: "Tennis membership", note: "Season 9/13/2026 – 9/11/2027", rows: [["Individual", "$499"], ["Couple (2 people)", "$599"], ["Family (kids 18 & under)", "$669"], ["Senior (62 & up)", "$469"], ["Junior (18 & under)", "$199"]] },
      { name: "Court time", note: "Per person", rows: [["Outdoor clay, members (May–Sept)", "$10"], ["Outdoor clay, guest fee", "$20"], ["Indoor guest fee, plus court fee", "$10"], ["First indoor guest visit", "Fee waived"], ["Contract time, paid in full", "Save up to 10%"]] },
      { name: "Pickleball & extras", note: "", rows: [["Pickleball group play", "$15"], ["Summer pickleball, individual (2025)", "$100"], ["Summer pickleball, family (2025)", "$275"], ["Racquet demo (credited if you buy)", "$4"], ["Towel service, per season", "$40"]] }
    ],
    fine: "Corporate memberships available on request. Non-members can play clay 3 times and indoors 5 times before membership is required. No guest fees for college students with ID."
  },

  amenities: {
    eyebrow: "Club features",
    title: "Everything you need, on and off the court.",
    items: [
      "5 indoor hard courts", "4 outdoor Har-Tru clay courts", "Salt-pure family pool", "Kiddie pool & adult jacuzzi",
      "Playground & picnic area", "Fitness area", "Locker rooms with showers", "Ball machine",
      "Pro shop & racquet stringing", "Viewing areas for every court", "USTA leagues & tournaments", "Open 7 days a week"
    ]
  },

  quotes: null,

  book: {
    eyebrow: "Get started",
    title: "Ask about membership.",
    sub: "Tell us what you're interested in and we'll get right back to you, or set up a tour.",
    formTitle: "Ask about membership",
    interests: ["Tennis membership", "Family membership", "Pool membership", "Private lessons", "Adult clinics & drills", "Junior programs", "Pickleball", "Travel teams", "A tour of the club"],
    submit: "Send"
  },

  contact: {
    address: "325 Bedford Street, Lakeville, MA 02347",
    phone: "508-947-8088",
    email: "lakevilleclub@comcast.net",
    hours: ["Open 7 days a week", "Pool (summer): Mon–Fri 11am–7pm, Sat & Sun 11am–6pm"]
  },

  chat: {
    tip: "Hi! Ask me anything about LAC: membership, courts, lessons, pickleball…",
    greeting: "Hi! I'm the Lakeville Athletic Club assistant. Ask me about membership, booking a court, lessons, junior programs, pickleball, the pool, or anything else.",
    suggestions: ["How much is a membership?", "Can I play pickleball without joining?", "My 8-year-old wants to start tennis", "How do I book a clay court?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have our front desk get back to you directly.",
    done: "Got it, {first}! I've passed this to our front desk, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Membership pricing", keys: ["membership", "join", "member", "how much", "price", "cost", "rate", "sign up", "family", "couple", "senior", "season"],
        a: "Our 2026–27 tennis memberships are a single payment for the season (September to September):\n\n• Individual $499\n• Couple $599\n• Family (kids 18 & under) $669\n• Senior (62 & up) $469\n• Junior (18 & under) $199\n\nMembers get $10 clay courts in the summer, reduced indoor court fees, and lower rates on every lesson, clinic and program. Want to stop by for a tour?",
        follow: "Can I bring a friend?" },
      { topic: "Pickleball", weight: 2, keys: ["pickleball", "pickle"],
        a: "Our pickleball group play runs at various levels for $15, and you don't need a club membership for indoor winter play.\n\nIn the summer there's also a pickleball membership (last season: $100 individual, $275 family) with no indoor court fees for drop-in play, so you can play rain or shine. The event schedule is on CourtReserve under Lakeville Athletic Club." },
      { topic: "Junior programs", weight: 2, keys: ["junior", "kid", "child", " son", "daughter", "year old", "year-old", "teen", "high school", "summer program", "camp", "after school"],
        a: "We have programs for every junior level:\n\n• Summer program, ages 4–12, with 2-, 3- and 4-day options and pool time after tennis (ages 6–12)\n• Youth program, after school for ages 5 and up\n• Junior Development, Sundays for ages 8–18\n• Future Stars and Junior Academy, by invitation\n• USTA 14 & under and 18 & under teams\n\nJunior members get discounted rates. Want our front desk to help you pick the right one?" },
      { topic: "Lessons & clinics", weight: 2, keys: ["lesson", "private", "semi", "clinic", "instructor", "coach", "learn", "beginner", "package"],
        a: "Private lessons are booked in half-hour increments with any of our pros, and you can share one as a semi-private (2 players) or tri-private (3 players). New to lessons? There's a package of five half-hour lessons at a reduced rate.\n\nOur 8-week clinics put 4 players of a similar level with one pro. Anyone can join, and members get discounted rates. I'll have the front desk send you current lesson rates. What's your name?",
        capture: true },
      { topic: "Adult programs", weight: 2, keys: ["drill", "round robin", "travel team", "league", "team", "usta", "cmita", "sneita", "match", "compet", "ladder"],
        a: "For adults we have drop-in drill sessions (1½ hours, 2–6 players, a different stroke each week), a men's 3.0–3.5 round robin on Wednesdays 11–1, a women's round robin, and an intra-club singles league.\n\nOur travel teams play in the USTA, CMITA, SNEITA, Baystate Tennis Conference and Dorothy Bruno Hills leagues, and our teams have won New England titles and gone to Nationals." },
      { topic: "Court booking", weight: 2, keys: ["book", "court time", "reserve", "reservation", "clay", "indoor court", "outdoor court", "contract"],
        a: "Our 4 outdoor Har-Tru clay courts are open every day May–September, $10 per person for members. Our 5 indoor hard courts are open every day all year.\n\nIf you play the same time every week, contract time (September–May) saves you up to 10% and guarantees your court for 36 weeks. Want the front desk to set up a court for you?" },
      { topic: "Guests", weight: 2, keys: ["guest", "friend", "non-member", "nonmember", "non member", "try", "visit", "college"],
        a: "Guests are welcome! Indoors, the guest fee is $10 per person plus the court fee, and it's waived on the first visit (5-visit limit). On the outdoor clay courts it's $20 per person (3-visit limit). College students with ID pay no guest fees.\n\nGuests just check in at the front desk and fill out a waiver." },
      { topic: "Pool", weight: 2, keys: ["pool", "swim", "jacuzzi", "kiddie", "lifeguard"],
        a: "Our seasonal pool center has a 25' × 60' salt-pure family pool (no chlorine smell), a kiddie pool and an adult jacuzzi, with a lifeguard, patio, picnic area and playground.\n\nPool hours are Mon–Fri 11am–7pm and Sat–Sun 11am–6pm. Pool memberships (family, couple, single and senior) include the tennis courts and fitness area too. I'll have the front desk send you pool membership rates. What's your name?",
        capture: true },
      { topic: "Ball machine", weight: 2, keys: ["ball machine", "machine"],
        a: "Members can book the ball machine every day in half-hour slots. Pay the court rate plus $7 each time, or get the yearly unlimited plan." },
      { topic: "Pro shop", weight: 2, keys: ["string", "racquet", "racket", "pro shop", "grip", "shoes", "demo"],
        a: "Our pro shop carries Head and Prince racquets and footwear, Prince, Nike and Adidas clothing, bags, balls and grips. You can demo any racquet for $4, credited if you buy it, and our professional stringer can help you pick the right string." },
      { topic: "Fitness", keys: ["gym", "fitness", "weights", "treadmill", "workout"],
        a: "Members have a fitness area with cardio and weight-training machines, free weights, benches and mats, plus men's and women's locker rooms with showers." },
      { topic: "Childcare", weight: 2, keys: ["childcare", "child care", "babysit"],
        a: "We don't offer childcare right now, but kids are welcome to relax in our lobby while they wait. For pool family memberships, you can list a babysitter as a member." },
      { topic: "Insurance", weight: 2, keys: ["insurance", "reimburse", "health plan"],
        a: "You may be eligible for a full or partial membership reimbursement if your health plan includes a fitness reward. Check with your health plan representative." },
      { topic: "Hours & location", keys: ["where", "address", "location", "direction", "hour", "open", "bedford"],
        a: "We're at 325 Bedford Street in Lakeville, open 7 days a week. Stop by any time for a tour, or reach the front desk at 508-947-8088." }
    ]
  },

  bts: {
    sampleTopic: "Membership pricing",
    recentLeads: [["Kate Doherty", "Website form · Junior programs", "Enrolled"], ["Mike Furtado", "Website chat · Pickleball", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Lakeville Athletic Club! {asked}\n\nWe have 5 indoor hard courts and 4 outdoor clay courts, lessons and clinics for every level, junior programs from age 4, and a summer pool center. The best way to see it all is a quick tour, and you're welcome any day of the week.\n\nSee you on court,\nLakeville Athletic Club\n508-947-8088"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Here's what's on at the club this week.”"],
      ["Day 3", "“Want to try a court first? Your first indoor guest visit is free. Want us to set one up?”"],
      ["Day 7", "“Memberships run the whole season, indoors and out. Want to come by for a tour?”"]
    ],
    report: [["38", "new enquiries"], ["15", "came in for a tour or court"], ["7", "new members"], ["$3,900", "in new membership revenue"]],
    cta: {
      title: "Want this running at LAC?",
      text: "Right now, almost every page of lakevilleathleticclub.com ends with “Call 508-947-8088”: for membership pricing, every lesson and program, and to book a court. Sign-ups are PDF forms to print and return. Switchboard answers every question in seconds, day or night, follows up automatically, and puts every lead in one place, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
