# Trail Mix — Gateway to the World A2, Units 6 & 7

A gamified self-study app for *Gateway to the World A2* (Macmillan 2021):
**Unit 6 "Fabulous food!"** (Student's Book pp.78–91, Reach higher p.146) and
**Unit 7 "Into the wild"** (pp.92–103, Reach higher p.147).
It prepares M2 students for the school test on these units **and** for the English
paper of the Triam Udom Suksa M4 entrance exam (TU-style practice, format unofficial).

Live: `https://pegasus028.github.io/GatewayA2/`

No build step, no back end, no API key. Progress is saved in the student's browser.

---

## What is in it

| Tab | What the student does |
|---|---|
| 🏕️ **Base Camp** | Rank, XP, streak, the next step to take, their route from the triage test, unit progress, badges, the podcast/video shelf |
| 🍲 **Unit 6** / 🌿 **Unit 7** → **Vocabulary** | **Storybook** (landing page): a page-turn story that uses every keyword; each gold word opens a word card with a real photo. **Word trail**: the words in stages and modules with picture, sorting and gap questions. **Patterns**: the systems underneath the word list. **🌳 Sorting tree**: an interactive decision tree built from the pattern cards — the student answers 2–4 questions about a word (countable/uncountable/both, container, animal class, in/on, weather noun/verb/adjective), sees its route light up on the whole tree, and gets the grammar consequences (+3 XP and the Word Sorter badge at 30). **Word bank**: every word, filterable |
| 🍲 **Unit 6** / 🌿 **Unit 7** → **Grammar** | A trail of stages. Each module = a rule card (explanation, table, ✓/✗ examples, "Extra" box, memory tip) + 5–7 multiple-choice questions of different types. Each stage ends in a checkpoint |
| 🎯 **Tests** | **Trailhead Check** (triage: one question per module, 44 in total, or one unit at a time) → builds the student's route. **TU-style Mock 1 · Base Camp** and **Mock 2 · Summit**: 40 questions, 60 minutes, 6 parts, review and "study these next" links |
| 📒 **My Trail** | Fault List review, numbers, all badges and ranks, a copy-to-Line report for the teacher, reset |

### Numbers

| | Unit 6 | Unit 7 |
|---|---|---|
| Keywords with word cards and photos | 60 (47 food & drink, 10 containers, 3 bonus) | 61 (20 animals, 15 natural world, 21 weather, 5 bonus) |
| Storybook | *The 500-Baht Cook-Off*, 4 chapters, 12 pages | *Wild Week*, 4 chapters, 11 pages |
| Pattern cards | 12 | 12 |
| Vocabulary trail | 4 stages, 10 modules, 84 questions | 4 stages, 9 modules, 78 questions |
| Grammar trail | 5 stages, 13 modules, 108 questions | 6 stages, 12 modules, 108 questions |

Tests: Trailhead Check 44 · Mock 1 40 · Mock 2 40. **Total: 502 questions**, all multiple choice, each with a hint and an explanation.

### How practice works

- Wrong first time → the hint appears and the student tries again (half a point). Wrong twice → the answer and the reason.
- Every miss goes to the **Fault List**; it leaves the list when answered right first time.
- Stars per module: ★ 50%, ★★ 75%, ★★★ 100%. A module leaves the student's route at ★★.
- Checkpoints, the triage test and the mocks give one try, no hints.
- XP, 9 ranks (Day Tripper → Summit Legend), 20 badges, a daily streak, a combo counter, confetti.
- Options are shuffled in practice (never in "find the mistake" items or in the mocks).

## Files

```
index.html          page shell
app.css             styles (light + dark)
app.js              the engine — never holds content
media.js            ← THE ONLY FILE YOU EDIT TO ADD PODCASTS / VIDEOS / BLOOKETS
data/
  u6-words.js  u7-words.js       word cards
  u6-patterns.js u7-patterns.js  pattern cards
  u6-story.js  u7-story.js       storybooks
  u6-vocab.js  u7-vocab.js       vocabulary trails
  u6-grammar.js u7-grammar.js    grammar trails
  tests.js                       triage + two TU-style mocks
  images.js                      photo file + credit for every word
art/words/          one photo per keyword (Wikimedia Commons)
art/story/          drop NotebookLM illustrations here (see docs/)
docs/               NotebookLM illustration protocol + art brief
tools/validate.js   checks every data file (run before pushing content edits)
SPEC.md             the content rules every question follows
```

## Editing content

- Change a question, rule card or word card: edit the matching file in `data/`, then run
  `node tools/validate.js` — it must say `0 errors`.
- `answer` is the index (0–3) of the correct option. For "find the mistake" items, the sentence marks four parts as `[[...]]` and `options` lists them in order.
- Tests route students with the `module` field — keep it pointing at a real module id.
- Story pages: `{{id|surface word}}` makes a tappable keyword. Give a page an illustration with `img: "art/story/u6-c1p1.jpg"`; leave it empty for the photo mosaic.

## Adding podcasts and videos

Open `media.js`; instructions are at the top. Add `unit: 6` to show an item on the unit pages and Base Camp, and `module: "g6m5"` to pin it to a module's rule card.

## Credits and notes

- All stories, explanations and questions are original. Book rule-box wording is quoted only in short phrases; page references point students back to the book.
- Facts in stories and questions were checked against a fact-check list; book claims known to be wrong (e.g. pepper colours, tiger climbing, "eco-bridges are new") are not used as facts.
- TU-style mocks: Triam Udom publishes no blueprint or past papers. The format (40 four-option items, 60 minutes, error identification / sentence completion / vocabulary / conversation / passage cloze / reading) follows tutor consensus and is labelled "format unofficial". Target cycle for M2 students: TU91, expected about March 2028.
- Word photos come from Wikimedia Commons; each word card credits the author and links to the file page with its licence.

---

## Online saving and the teacher's Google Sheet

Without a server address the app saves progress in the student's browser only (as before). With one, students sign in on **My Trail** (or the ☁️ chip in the header) with a **name + 4-number PIN**; the first PIN they type creates the account. Their full progress is saved a few seconds after every change and when the tab is closed, so they can carry on from any device. Signing out clears the device (safe for shared phones). Work done before signing in is merged into the account.

**Files:** `backend/Code.gs` (the Apps Script server), `sync.js` (client: sign-in, saving, offline outbox), `window.TRAILMIX_API_URL` in `index.html`.

**The Sheet (your dashboard):**
- **Students**: one row per student, refreshed on every save: last active (green = today, red = 3+ days ago), XP, rank, streak, minutes in the last 7 days and in total, days studied, word cards, story pages, pattern cards, tree words sorted, stars per unit trail, modules tried, checkpoints, Trailhead score, route modules still to do, mock best scores and attempts, faults waiting/fixed, badges, and **Needs work** (modules tried but under 2★, weakest first).
- **Activity**: a log line for every sign-in, finished module, checkpoint, fault review, Trailhead Check (with the route it built), mock paper (score, time, part scores), Sorting-tree word, badge and new rank.
- **_accounts** (hidden): PIN hashes, sign-in tokens and the saved progress. PINs are never stored in plain text.
- Menu **Trail Mix → Reset a student's PIN** for a forgotten PIN (progress is kept).

**Set up once:** new Google Sheet → Extensions → Apps Script → paste `backend/Code.gs` → Save → run `setup` → Deploy → New deployment → Web app, *Execute as: Me*, *Who has access: Anyone* → copy the `/exec` URL into `window.TRAILMIX_API_URL` in `index.html`. After editing Code.gs: Deploy → Manage deployments → ✏️ → New version → Deploy.
