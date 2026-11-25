/* __NAME__ — Switchboard demo settings.
   Fill every TODO from the club's own website. Only use facts the club
   publishes; owners notice anything made up. Sections set to null are hidden.
   See ../south-shore-athletic-club/club.js for a complete example. */
window.CLUB = {
  slug: "__SLUG__",
  name: "__NAME__",
  shortName: "TODO short name, e.g. SSAC",
  monogram: "TODO 2-4 letters, used when there's no logo",
  logo: null,                       // or "img/logo.png" (transparent PNG works best)
  contactPerson: "TODO who gets lead alerts, e.g. Jill (or 'the front desk')",
  website: "TODO club-website.com",

  colors: {                         // pull the accent from their logo/site
    ink: "#14231b", "ink-2": "#46524b", "ink-3": "#87918b",
    paper: "#f7f6f2", soft: "#eceae3", line: "#dfddd4",
    accent: "#1d5a3a", "accent-ink": "#ffffff"
  },
  fonts: { heading: "Archivo", body: "Inter", headingWeight: 800, headingTrack: "-0.025em" },

  nav: [["Classes", "#schedule"], ["Memberships", "#pricing"], ["Amenities", "#amenities"], ["Contact", "#book"]],

  hero: {
    eyebrow: "TODO Town, ST · one-line hook",
    title: "TODO short headline",
    sub: "TODO one or two sentences: what makes this club worth visiting",
    image: "img/hero.jpg", alt: "TODO", position: "50% 50%",
    cta: "Plan your first visit",
    secondary: ["See memberships", "#pricing"],
    meta: "TODO hours · address"
  },

  offer: null,                      // { label, title, sub, cta } e.g. a day pass or intro offer

  services: {
    eyebrow: "TODO", title: "TODO", sub: "TODO",
    items: [ /* { title, text, meta } */ ],
    gallery: [ /* ["img/photo.jpg", "alt text"], first one is large; 5 works best */ ]
  },

  schedule: null,                   // { eyebrow, title, sub, days: [{ day: "Monday", classes: [["6:30am", "Bootcamp", "Coach"]] }] }

  about: null,                      // { eyebrow, title, paragraphs: [], chips: [], image, alt }

  pricing: {
    eyebrow: "Memberships", title: "TODO", sub: "TODO",
    groups: [ /* { name, note, rows: [["Monthly unlimited", "$89.99/mo"]] } */ ],
    fine: null
  },

  amenities: null,                  // { eyebrow, title, items: [] }
  quotes: null,                     // { eyebrow, title, items: [["quote", "— Name"]] } — real reviews only

  book: {
    eyebrow: "Plan your visit", title: "Come see it for yourself.",
    sub: "Tell us what you're interested in and we'll get right back to you.",
    formTitle: "Plan your first visit",
    interests: ["Day pass", "Membership", "Personal training", "Group classes"],
    submit: "Send"
  },

  contact: { address: "TODO", phone: "TODO", email: "TODO", hours: ["TODO"] },

  chat: {
    tip: "Hi! Ask me anything about TODO: prices, classes, hours…",
    greeting: "Hi! I'm the __NAME__ assistant. Ask me about memberships, classes, hours, or anything else.",
    suggestions: ["How much is a membership?", "What are your hours?", "Can I try it for a day?"],
    fallback: "Good question. I don't want to guess on that one, so I'll have TODO get back to you directly.",
    done: "Got it, {first}! I've passed this to TODO, and you'll have an email from us in a minute. Anything else I can help with?",
    // keys are lowercase phrases; any match picks the answer. Schedule days are added automatically.
    faqs: [
      { topic: "Membership pricing", keys: ["price", "cost", "how much", "membership", "join", "$"], a: "TODO", follow: "Can I try it for a day?" },
      { topic: "Hours", keys: ["hour", "open", "close", "when"], a: "TODO" },
      { topic: "Location", keys: ["where", "address", "location", "parking"], a: "TODO" }
    ]
  },

  bts: {
    sampleTopic: "Day pass",
    recentLeads: [["Mike Donovan", "Website form · Membership", "Booked"], ["Erin Walsh", "Website chat · Personal training", "Joined"]],
    reply: {
      subject: "Thanks for reaching out, {first}!",
      body: "Hi {first},\n\nThanks for your interest in __NAME__! {asked}\n\nTODO the best next step and hours.\n\nSee you soon,\n__NAME__\nTODO phone"
    },
    followups: [
      ["Day 1", "“Still thinking about it, {first}? Here's this week's schedule.”"],
      ["Day 3", "“Your first visit is easy: here's what to bring.”"],
      ["Day 7", "“We'd love to see you. Want us to save you a spot?”"]
    ],
    report: [["40", "new enquiries"], ["16", "came in for a visit"], ["7", "new members"], ["TODO", "in new membership revenue (members × monthly price)"]],
    cta: {
      title: "Want this running at TODO short name?",
      text: "Switchboard works with the site you have, or comes with a new one like this. Every enquiry answered, followed up and tracked, without adding work for the front desk.",
      button: "Start your free month",
      url: "https://switchboardcompany.com/early-access.html",
      fine: "$0 up front · first 30 days free · cancel anytime. Or just reply to Drew's email."
    }
  }
};
