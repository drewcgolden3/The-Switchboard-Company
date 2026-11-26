/* Waltham Athletic Club, 249 Lexington St, Waltham MA. Locally owned tennis,
   fitness and aquatics club. Lou Yanucci is Tennis Director & Club
   Operations; Joann McMahon runs the front desk.
   Every fact here comes from walthamathletic.com and its junior brochure
   (.docx), checked 2026-11-26. The site is slow (~40s a page), so fetch pages
   in parallel with --max-time. Not published anywhere: adult membership
   prices, current hours (only "Summer Hours" are posted), reviews. Adult
   clinic prices differ between two pages; this uses the Winter/Spring
   2026-27 page. Stock "Dollarphotoclub" images are left out.
   Don't add claims that aren't on their site. */
window.CLUB = {
  slug: "waltham-athletic-club",
  name: "Waltham Athletic Club",
  shortName: "WAC",
  monogram: "WAC",
  logo: "img/logo.png",
  logoWide: true,
  contactPerson: "the front desk",
  website: "walthamathletic.com",

  colors: {
    ink: "#0f2233",
    "ink-2": "#4a5a68",
    "ink-3": "#8896a2",
    paper: "#f6f9f8",
    soft: "#e9f4f0",
    line: "#d9e5e1",
    accent: "#0a78ad",
    "accent-ink": "#ffffff"
  },
  fonts: { heading: "Outfit", body: "Inter", headingWeight: 600, headingTrack: "-0.02em", headingCase: "none" },

  nav: [["Adult tennis", "#schedule"], ["Juniors", "#about"], ["Programs", "#pricing"], ["Contact", "#book"]],

  hero: {
    eyebrow: "Tennis · Fitness · Aquatics · Waltham",
    title: "Something for the whole family, all year round.",
    sub: "Premier indoor tennis courts, a fitness center and an indoor pool on Lexington Street, with clinics, leagues and junior programs for every age and level.",
    image: "img/hero.jpg",
    alt: "The indoor tennis courts at Waltham Athletic Club",
    position: "50% 50%",
    cta: "Ask about membership",
    secondary: ["See programs", "#pricing"],
    meta: "249 Lexington Street, Waltham · (781) 899-5000"
  },

  offer: {
    label: "Junior membership sale · Nov 16 – Dec 11",
    title: "Junior memberships, $99 per child.",
    sub: "Early registration for every clinic, lower clinic and lesson rates, and court booking six days out.",
    cta: "Ask about a junior membership"
  },

  services: {
    eyebrow: "Locally owned and operated",
    title: "Tennis, fitness and aquatics under one roof.",
    sub: "A clean, comfortable club with a courteous, knowledgeable staff and programs for all ages and levels.",
    items: [
      { title: "Adult tennis", text: "Weekly clinics from Tennis Basics to Three Plus the Pro, Cardio Tennis, round robins, and Night Owl and Friday mixed doubles socials.", meta: "From $15 a clinic" },
      { title: "League teams", text: "CMITA men's and women's teams on Saturday afternoons, Dorothy Bruno Hills weekday teams, plus USTA and suburban leagues.", meta: "Every level, 3.0–4.5" },
      { title: "Junior development", text: "Rising Stars from age 4½, Novice through Advanced up to 18 and under, Sunday Playdays, private lessons and summer camp.", meta: "Sessions all year" },
      { title: "Fitness & pool", text: "A full fitness center and a four-lane indoor pool with member lap swim and Tiburon swim school lessons.", meta: "Included with membership" }
    ],
    gallery: [
      ["img/juniors.jpg", "Two junior players on the indoor courts"],
      ["img/junior-hitting.jpg", "A junior player hitting a forehand"],
      ["img/gym.jpg", "The fitness center"],
      ["img/pool.jpg", "The indoor pool"],
      ["img/fitness-class.jpg", "A suspension training class"]
    ]
  },

  schedule: {
    eyebrow: "Adult clinics · Winter/Spring 2026–27",
    title: "Get on court any day of the week.",
    sub: "Weekly sign-up: members up to six days ahead, non-members 24 hours ahead.",
    days: [
      { day: "Monday", classes: [["9:00am", "Stroke of the Week", "3.0+"], ["9:30am", "Cardio Tennis", "3.0+"], ["10:00am", "Pro on Duty", "3.0+"], ["10:30am", "Cardio Tennis", "3.0+"], ["11:00am", "Tennis Basics", "2.0–2.5"], ["7:00pm", "Adult Intermediate", "2.5–3.0"], ["9:00pm", "Night Owl social round robin"]] },
      { day: "Tuesday", classes: [["10:30am", "Three Plus the Pro", "3.0+"], ["7:00pm", "Cardio Tennis", "3.0+"], ["8:00pm", "Pro on Duty", "3.0+"]] },
      { day: "Wednesday", classes: [["9:00am", "Stroke of the Week", "3.0+"], ["9:30am", "Cardio Tennis", "3.0+"], ["10:00am", "Instructional Round Robin", "2.5–3.0"], ["10:30am", "Pro on Duty", "3.0+"], ["6:30pm", "Adult Intermediate", "2.5–3.0"]] },
      { day: "Thursday", classes: [["9:00am", "Pro on Duty, advanced"], ["10:00am", "Pro on Duty, intermediate"], ["11:00am", "Tennis Basics", "2.0–2.5"], ["7:00pm", "Cardio Tennis", "3.0+"], ["8:00pm", "Tennis Basics", "2.0–2.5"]] },
      { day: "Friday", classes: [["9:00am", "Stroke of the Week", "3.0+"], ["10:00am", "Instructional Round Robin, advanced"], ["7:00pm", "Friday night mixed doubles"]] },
      { day: "Saturday", classes: [["8:30am", "Junior clinics (10U & 12U)"], ["Afternoon", "CMITA league matches"]] },
      { day: "Sunday", classes: [["1:00pm", "Rising Stars & junior clinics"], ["6:00pm", "Junior Playday (advanced)"]] }
    ]
  },

  about: {
    eyebrow: "Junior Development Program",
    title: "From first swing to varsity.",
    paragraphs: [
      "Rising Stars introduces 4½- to 6-year-olds to the game in a fun 45-minute class. Novice, Intermediate and Advanced groups run for 8 and under up to 18 and under, with small classes and placement by our pro staff.",
      "Advanced players get Sunday Playday, organized match play supervised by a pro, included in their program. Not sure of your child's level? Evaluations are free for members and $25 for non-members (waived if they sign up)."
    ],
    chips: ["Ages 4½–18", "8–10 week sessions", "Sunday Playday"],
    image: "img/junior-hitting.jpg",
    alt: "A junior player at Waltham Athletic Club"
  },

  pricing: {
    eyebrow: "Programs",
    title: "Clinics, lessons and junior sessions.",
    sub: "Member and non-member rates. Ask the front desk about adult memberships.",
    groups: [
      { name: "Adult clinics", note: "Per clinic · member / non-member", rows: [["Cardio Tennis", "$15 / $22"], ["Tennis Basics", "$26 / $35"], ["Pro on Duty", "$26 / $35"], ["Adult Intermediate (1½ hrs)", "$39 / $52"]] },
      { name: "Junior sessions", note: "9-week session · member / non-member", rows: [["Rising Stars", "$350 / $380"], ["1-hour clinic", "$395 / $425"], ["1½-hour clinic", "$505 / $535"], ["1½-hour clinic with Playday", "$635 / $675"], ["2-hour clinic with Playday", "$745 / $780"]] },
      { name: "Junior lessons & membership", note: "Member / non-member", rows: [["Junior membership (1 year)", "$99"], ["Private lesson, 1 hour", "$115 / $125"], ["Semi-private, per person", "$62.50 / $67.50"], ["Level evaluation", "Free / $25"]] }
    ],
    fine: "Junior session prices shown are Session 1 rates; sessions with fewer weeks are prorated. Junior members get an 11th private lesson free with a 10-lesson package. 24-hour cancellation policy on all programs."
  },

  amenities: {
    eyebrow: "The club",
    title: "Built for tennis, fitness and swimming.",
    items: [
      "Premier indoor tennis courts", "Fitness center", "Four-lane indoor pool", "Member lap swim",
      "Tiburon swim school", "Adult clinics every weekday", "CMITA, DBH & USTA teams", "Junior development program",
      "Private & semi-private lessons", "Summer tennis camp", "Court booking for members", "Locally owned & operated"
    ]
  },

  book: {
    eyebrow: "Get started",
    title: "Ask about membership.",
    sub: "Tell us what you're interested in and we'll get right back to you.",
    formTitle: "Ask about membership",
    interests: ["Adult membership", "Family membership", "Junior membership", "Junior tennis clinics", "Adult clinics", "Private lessons", "League teams", "Pool / swim lessons"],
    submit: "Send"
  },

  contact: {
    address: "249 Lexington Street, Waltham, MA 02452",
    phone: "(781) 899-5000",
    email: "frontdesk@walthamathletic.com",
    hours: ["Front desk: ext. 0", "Tennis office: ext. 15 or 16"]
  },

  chat: {
    tip: "Hi! Ask me anything about WAC: clinics, juniors, the pool…",
    greeting: "Hi! I'm the Waltham Athletic Club assistant. Ask me about adult clinics, junior tennis, lessons, leagues, the pool, or anything else.",
    suggestions: ["How much is a membership?", "My 7-year-old wants to start tennis", "When is Cardio Tennis?", "How much are private lessons?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have our front desk get back to you directly.",
    done: "Got it, {first}! I've passed this to our front desk, and you'll have an email from us in a minute. Anything else I can help with in the meantime?",
    faqs: [
      { topic: "Adult membership", keys: ["membership", "join", "member", "how much", "price", "cost", "monthly", "per month", "rate", "sign up", "family"],
        a: "Membership includes the fitness center, the indoor pool, member rates on clinics and lessons, and court booking privileges.\n\nRates depend on the type of membership, so I'll have our front desk send you the current options. What's your name?",
        capture: true },
      { topic: "Junior membership", weight: 2, keys: ["junior membership", "junior member", "kids membership"],
        a: "Junior memberships are $99 per child for a full year, and they're on sale now through December 11. Junior members get early registration for every clinic, lower clinic and lesson rates, and court booking up to six days out." },
      { topic: "Junior tennis", weight: 2, keys: ["junior", "kid", "child", "son", "daughter", "year old", "year-old", "rising star", "teen", "high school", "camp"],
        a: "Our Junior Development Program starts with Rising Stars for ages 4½–6, then Novice, Intermediate and Advanced groups for 8 and under, 10 and under, 12 and under and 18 and under.\n\nA 9-week 1-hour clinic is $395 for members or $425 for non-members (Session 1 pricing). Not sure of their level? Evaluations are free for members and $25 for non-members, waived if they sign up. Want the tennis office to help you pick a class?" },
      { topic: "Adult clinics", weight: 2, keys: ["clinic", "cardio tennis", "cardio", "beginner", "basics", "pro on duty", "stroke", "round robin", "three plus", "lesson group", "drill"],
        a: "We run adult clinics every weekday: Tennis Basics (2.0–2.5) $26, Pro on Duty (3.0+) $26, Cardio Tennis $15 and Adult Intermediate (1½ hours) $39 for members; non-member rates are a bit higher.\n\nSign-up is weekly: members up to six days ahead, non-members 24 hours ahead. Ask me about a specific day, like “What's on Tuesday?”" },
      { topic: "Private lessons", weight: 2, keys: ["private", "semi private", "semi-private", "lesson", "one on one", "1 on 1", "coach"],
        a: "Junior private lessons are $115 an hour for members ($125 non-members), and semi-private lessons are $62.50 per person ($67.50 non-members). Prime-time lessons add $5 an hour unless you have a package, and junior members get an 11th lesson free with a 10-lesson package. Want the tennis office to set one up?" },
      { topic: "League teams", weight: 2, keys: ["team", "league", "usta", "cmita", "dbh", "match", "compet"],
        a: "We field CMITA men's and women's teams (matches Saturday afternoons), Dorothy Bruno Hills teams in divisions II–IV, USTA mixed doubles and level teams, and Northwest and West Suburban spring leagues. CMITA and DBH players need to be members; USTA and the suburban leagues are open to non-members." },
      { topic: "Pool", weight: 2, keys: ["pool", "swim", "lap", "tiburon", "aquatic", "water"],
        a: "We have a four-lane indoor pool. Members can lap swim, including during swim lessons when a lane is free, and Tiburon swim school runs lessons here. The pool closes 30 minutes before the club does." },
      { topic: "Fitness", keys: ["gym", "fitness", "weights", "equipment", "cardio machine", "treadmill", "workout"],
        a: "Members have full use of our fitness center, plus the indoor pool and member rates on all tennis programs." },
      { topic: "Location", keys: ["where", "address", "location", "direction", "parking", "lexington"],
        a: "We're at 249 Lexington Street in Waltham. The front desk is (781) 899-5000, ext. 0, and the tennis office is ext. 15 or 16." }
    ]
  },

  bts: {
    sampleTopic: "Junior tennis",
    recentLeads: [["Jen Morales", "Website form · Junior tennis clinics", "Booked"], ["Rob Chen", "Website chat · Adult clinics", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in Waltham Athletic Club! {asked}\n\nWe have something for every age and level: adult clinics every weekday, league teams, a junior development program from age 4½, a fitness center and an indoor pool.\n\nTalk soon,\nWaltham Athletic Club\n(781) 899-5000"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Here's this week's clinic schedule.”"],
      ["Day 3", "“Cardio Tennis is a great first clinic: an hour of fast-paced hitting for $15. Want us to save you a spot?”"],
      ["Day 7", "“Junior memberships are $99 through December 11. Want us to set one up?”"]
    ],
    report: [["42", "new enquiries"], ["18", "signed up for a clinic or lesson"], ["8", "new memberships"], ["31", "followed up automatically"]],
    cta: {
      title: "Want this running at WAC?",
      text: "Right now, joining or registering a new junior means calling the front desk or coming in, and adult membership pricing isn't on the site. Switchboard answers every enquiry in seconds, day or night, follows up automatically, and puts every lead in one place, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
