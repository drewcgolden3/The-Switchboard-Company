# Per-club Switchboard demos

A link you can send a club owner: their site redesigned, a chat assistant that
answers from their own info, and a "Behind the scenes" panel showing what
Switchboard does with every lead (dashboard, instant reply, owner alert,
follow-ups, monthly report).

Live example: https://switchboardcompany.com/demo/south-shore-athletic-club/

## How it works

- `assets/demo.js` + `assets/demo.css`: the shared engine. Change these and
  every demo updates.
- `<slug>/club.js`: everything specific to one club (copy, colours, fonts,
  prices, schedule, chat answers, follow-up wording).
- `<slug>/img/`: that club's photos. `img/hero.jpg` is also the link preview.
- Nothing is sent anywhere. The form and chat stay in the browser, and the
  panel is a walkthrough, not live data. Pages are `noindex`.

## Make a new one

```bash
./demo/new-club.sh "Club Name"
```

Then:
1. Fill in every `TODO` in `demo/<slug>/club.js` from the club's website.
   Use only facts they publish. Wrong prices or claims kill the email.
2. Save 4–6 of their own photos into `demo/<slug>/img/` (hero.jpg first).
   Avoid stock photos and pictures of people you can't identify.
3. Open it locally (`python3 -m http.server 8777` from the repo root, then
   `localhost:8777/demo/<slug>/`). Try the chat suggestions and the form.
4. Commit and push. The link works once GitHub Pages redeploys.

## Chat answers

`chat.faqs` is a list of `{ topic, keys, a, follow }`. A message picks the
answer whose `keys` (lowercase phrases) match best. Each schedule day is added
automatically, so "what's on Saturday?" works. Anything unmatched gets the
`fallback` line and asks for a name and email. That's the lead capture, and it
opens the behind-the-scenes panel with the visitor's own name.

Placeholders in the reply, follow-ups and `chat.done`: `{first}`, `{name}`,
`{topic}`, `{asked}` (a full sentence about what they asked), `{club}`.
