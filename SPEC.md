# TRAIL MIX — content specification (read fully before writing any content)

**App:** "Trail Mix" — a gamified self-study app for *Gateway to the World A2* (Macmillan 2021),
printed **Unit 6 "Fabulous food!" (Student's Book pp.78–91, Reach higher p.146)** and printed
**Unit 7 "Into the wild" (pp.92–103, Reach higher p.147)**. Always print the book's own unit numbers
(Unit 6, Unit 7) in student-facing text.

**Learner:** Thai M2 students (first user: Soda, 13-year-old Thai boy, A2/B1, very bright) preparing for
(a) school tests on these units and (b) the Triam Udom Suksa (TU) M4 entrance exam (TU91, ≈ March 2028).
Teacher: T.Chris.

**Scope (hard limit):** grammar and vocabulary of these two units only (plus the units' functional
language: ordering food, invitations, suggestions & plans, and the p.101 word-order rules).
No B2 grammar (no passives, no relative clauses as targets, no conditionals beyond "if + present, will",
no present perfect targets, no reported speech, no inversion).

## 0. Mandatory reading for every content writer

Skill reference files (read the ones your job needs; they are authoritative):
- `/mnt/skills/plugins/gateway-u5-u6/SKILL.md` (rules R1–R13)
- `/mnt/skills/plugins/gateway-u5-u6/references/unit6-food.md`, `unit7-wild.md`
- `/mnt/skills/plugins/gateway-u5-u6/references/grammar-u6-quantity-should.md`, `grammar-u7-future.md` (teaching rules G6-*, G7-*, item rules IW6-*, IW7-*)
- `/mnt/skills/plugins/gateway-u5-u6/references/fact-check.md` (never use a CONTRADICTED / UNVERIFIED / DISPUTED fact)
- `/mnt/skills/plugins/gateway-u5-u6/references/vocabulary-levels.md` (A2 / B1 / Book word levels; collocations; BrE/AmE)
- `/mnt/skills/plugins/gateway-u5-u6/references/thai-learners.md` (distractors from real errors)
- `/mnt/skills/plugins/gateway-u5-u6/references/sources-and-disagreements.md`
- TU work: `/mnt/skills/plugins/tu-exam/SKILL.md`, `references/paper-blueprint.md`, `references/item-writing.md`, `references/learner-errors.md`

The book pages are PDFs (read with the Read tool and `pages`):
- `/mnt/user-data/uploads/Gateway-to-the-World-A2-Students-book-2021Unit-_5-p78-91.pdf` (pp.78–91; page 1 = p.78)
- `/mnt/user-data/uploads/Gateway-to-the-World-A2-Students-book-2021Unit-_6-p92-103.pdf` (pp.92–103; page 1 = p.92)
- `/mnt/user-data/uploads/Gateway-to-the-World-A2-Students-book-2021Unit-_5-and-6-p146.pdf` (p.146)

Never copy the book's reading texts, dialogues or exercises. Single example sentences and rule-box
wording may be quoted. Write original sentences with Thai teenage life (Bangkok, Chiang Mai, a night
market, 7-Eleven, school canteen, Khao Yai, Phuket…). Names: mix Thai and international, boys and
girls (Tonkla, Fah, Ploy, Mek, Pim, Nut, Beam, Mint, Ken, Jay, Anna, Sam, Leo, Mia…). British spelling.

## 1. THE QUESTION STANDARD (every multiple-choice item in the app)

1. All items are multiple choice, **4 options**, exactly **one** correct answer under every authority in
   the skill (re-read IW6-*/IW7-* before writing future-form or quantity items).
2. Options differ from the key **only on the point being tested**; options in a set are the same kind
   and similar length.
3. At least one distractor is **close to the key but wrong in context**; distractors come from documented
   learner errors (grammar files §4/§5, thai-learners.md, learner-errors.md). No silly options.
4. The key is the **longest option no more than ~25%** of the time across your file.
5. Keys spread evenly: across your file, each position 0–3 is the key ~25% of the time; never more than
   3 identical answer indexes in a row. (The app shuffles options in practice mode, but mocks are fixed.)
6. Natural-sounding stems, A2 vocabulary in stems except the target (gloss B1/book words in brackets).
7. `hint`: a nudge that points to the rule or the clue in the sentence — it must **not** reveal or
   eliminate down to the answer. ≤ 20 words.
8. `why`: shown after answering. ≤ 35 words, simple English: name the rule in plain words, say why the key
   is right and (briefly) why the strongest distractor is wrong. **Never refer to option letters or
   positions** ("A", "option 2") because options are shuffled. Use `<em>` for words.
9. Level: label each item `cefr: "A2"` or `"B1"`. Default mix ≈ 70% A2 / 30% B1 in practice modules;
   checkpoints ≈ 60/40; mocks see §6.
10. Facts: only CONFIRMED facts (fact-check.md) or no facts (fictional people/places are fine).
11. Every module uses **at least 4 different item types** (see §3).

## 2. File format

Each content file is plain browser JavaScript that assigns to a global, e.g.
`window.GRAMMAR = window.GRAMMAR || {}; GRAMMAR.u6 = { ... };`
Use double quotes for strings, escape inner double quotes, or use single quotes consistently — the file
MUST parse (`node -e "require('vm').runInNewContext(fs.readFileSync(f,'utf8'),{window:{}})"`).
Allowed inline HTML in text: `<em>`, `<strong>`, `<br>`, `<u>`. No other markup.
After writing, validate with: `node /home/claude/trailmix/tools/validate.js <yourfile>` (it will exist;
if it does not yet exist, at least check that the file parses with node).

## 3. Item schema (shared by grammar, vocab, checkpoints, triage)

```js
{
  id: "g6m5-3",            // unique; module id + "-" + n  (checkpoint: "g6s2ck-1", triage: "tri-12")
  type: "gap",             // see list below
  cefr: "A2",              // "A2" | "B1"
  context: "",             // optional: a short situation shown above the stem (plain text / allowed HTML)
  lines: [],               // dialogue only: [{who:"Waiter", text:"Are you ready to order?"}, {who:"Fah", text:"Yes. Could I ___ a pizza, please?"}]
  stem: "There isn't ___ milk in the fridge.",   // the question; use ___ (three underscores) for a gap
  options: ["many","much","a few","some"],
  answer: 1,               // index of the key in options
  hint: "Is milk countable? Is the sentence negative?",
  why: "<em>Milk</em> is uncountable and the sentence is negative, so use <em>much</em>. <em>Many</em> is for plural nouns like <em>eggs</em>.",
  img: "milk"              // optional, picture items only: a word id from the word lists (§5)
}
```

`type` values (the renderer labels each one):
- `gap` — Fill the gap (one ___ in `stem`).
- `dialogue` — Complete the conversation (`lines`, one line contains ___; `stem` may be empty).
- `error` — Find the mistake. `stem` holds the sentence with exactly four segments marked `[[...]]`,
  e.g. `"There [[are]] [[a lot of]] [[informations]] [[on]] this website."`. `options` must be the four
  segment texts in order; `answer` = index of the wrong segment; add `fix: "information"`.
  Exactly one segment is wrong; the other three must be correct and should look tempting.
- `choose` — Choose the correct sentence / best answer (options are whole sentences or phrases; `stem`
  is the question, e.g. "Which sentence is correct?").
- `situation` — What would you say? (`context` describes the situation; options are things to say).
- `meaning` — What does it mean? / Which sentence has the same meaning?
- `odd` — Odd one out (`stem` says by what rule, e.g. "Which one is NOT uncountable?"; `why` explains).
- `picture` — Picture question: `img` = word id; stem e.g. "What's in the picture?" or a gap sentence about it.
- `classify` — Which group? `stem` shows the word/phrase, options are the groups (e.g. C / U / Both / —
  or "Fruit / Vegetables / Dairy / Drinks").

## 4. Stage / module schema (grammar AND vocab training)

```js
GRAMMAR.u6 = {
  unit: 6, title: "Fabulous food!", pages: "pp.78–91",
  stages: [
    { id: "g6s1", n: 1, name: "Count it!", icon: "🍎", blurb: "One sentence a student reads first.",
      modules: [
        { id: "g6m1", name: "Countable or uncountable?", page: "p.80, p.88", cefr: "A2",
          extra: false,                       // true if the whole module is an "Extra" (beyond the book's rule box)
          rule: {
            key: "One sentence that IS the whole idea.",
            body: ["Short paragraph (≤ 60 words) in simple A2–B1 English.", "…"],   // 2–4 paragraphs
            table: [["", "Countable", "Uncountable"], ["a / an", "an egg ✓", "a rice ✗"], …],  // optional; first row = header
            examples: [ {ok:true, s:"I'd like <strong>some</strong> rice, please."},
                        {ok:false, s:"I'd like a rice.", fix:"I'd like some rice. / I'd like a bowl of rice."} ],
            extra: "Optional 'Extra' box (G6-4, G7-2, G7-3 exceptions) — label-worthy, ≤ 50 words.",
            tip: "Optional memory trick, ≤ 25 words."
          },
          items: [ /* 6 items (5–7 allowed), ≥ 4 different types */ ]
        }
      ],
      checkpoint: { id: "g6s1ck", name: "Checkpoint", items: [ /* 6 NEW items mixing the stage's modules */ ] }
    }
  ]
};
```
Vocab training files use the same shape under `VOCAB.u6` / `VOCAB.u7` with ids `v6s1`, `v6m1`…; for vocab
modules the `rule` object is the "word card": `key`, `body` (the pattern behind the group), optional
`table`, `examples`, `tip`, and add `words: ["apple","pear",…]` (word ids, shown as tappable chips).

## 5. Word ids (FIXED — use exactly these)

**Unit 6 (57 core + 3 bonus)**
Food & drink: apple bean biscuit broccoli burger butter cabbage carrot chicken cream crisps cucumber curry
egg fish garlic grape honey jam lemonade lentil lettuce melon milkshake mushroom nut onion orangejuice
pancake pasta pear pepper pizza rice salad salt sausage softdrink soup spinach strawberry sugar tea toast
tomato water yoghurt
Containers: bag bottle box can carton cup glass jar packet tin
Bonus (p.79 reading words): diet takeaway sweets

**Unit 7 (56 core + 5 bonus)**
Wild animals: bear bee butterfly eagle fox hippo jellyfish leopard lizard monkey owl penguin rat rhino
scorpion shark snake tiger whale wolf
Natural world: beach field flowers forest grass hill island lake mountain ocean plants river sky valley waterfall
Weather: cloud cloudy cold dry fog foggy hot ice icy rain rainy snow snowy storm stormy sun sunny warm wet wind windy
Bonus (p.93 reading words): rare species horn destroy shocking

Every one of these ids has a photo in the app (`img: "<id>"` works for picture items).

## 6. Module map (FIXED ids — tests route students to these)

### Unit 6 grammar — `data/u6-grammar.js` (GRAMMAR.u6)
- g6s1 **Count it!** — g6m1 Countable or uncountable? · g6m2 Counting the uncountable (a bottle of water, a slice of bread, two cartons of milk; ✗ two waters) · g6m3 Tricky nouns — Extra ("Both" nouns chicken/a chicken, fish, pizza, chocolate, cake; always-uncountable advice, information, homework, money, news)
- g6s2 **a, an, some, any** — g6m4 a or an? (vowel SOUND: an hour, a uniform) · g6m5 some or any? (book rule) · g6m6 There is / There are (+ a/some/any; ✗ "have" for there is/are) · g6m7 Offers and requests — Extra (Would you like some…? Can I have some…?)
- g6s3 **How much? How many?** — g6m8 much, many, a lot of (IW6-3!) · g6m9 How much / How many? + short answers (a lot / not much / not many; "a lot" with no noun drops "of"; How much is it? for prices)
- g6s4 **Good advice** — g6m10 should: the form (no to, no -s, Should I…?, shouldn't) · g6m11 Giving advice (problem → advice; I don't think you should…; should vs must only if context is clear)
- g6s5 **At the café** — g6m12 Ordering food (Speaking bank p.86) · g6m13 Invitations (Writing bank p.87)

### Unit 7 grammar — `data/u7-grammar.js` (GRAMMAR.u7)
- g7s1 **Going to** — g7m1 be going to: the form · g7m2 Plans and evidence (plans/intentions; Extra: evidence predictions "Look at those clouds!")
- g7s2 **Will / won't** — g7m3 will/won't: the form · g7m4 Predictions, offers and promises (book: predictions; Extra: instant decisions/offers/promises)
- g7s3 **Diary dates** — g7m5 Present continuous for arrangements · g7m6 Now or later? (present vs future meaning, like the p.103 P/F task)
- g7s4 **Choosing the future** — g7m7 Which future? (cue-based choices, strict IW7-1–3) · g7m8 when / if + present — Extra (G7-3)
- g7s5 **Word order** — g7m9 Statements and questions (S+V+O; auxiliary before subject) · g7m10 Adjectives and frequency adverbs (adjective before noun; adverb after be / before main verb)
- g7s6 **Making plans** — g7m11 Suggestions (Why don't we / Shall we / Let's / We could / What about + -ing) · g7m12 Accepting, rejecting and arranging (Sorry, I'm busy. / Are you free on…? / short message task points)

### Unit 6 vocabulary — `data/u6-vocab.js` (VOCAB.u6)
- v6s1 **Fresh food** — v6m1 Fruit and salad (apple grape melon pear strawberry tomato cucumber lettuce pepper) · v6m2 Cooking vegetables (bean broccoli cabbage carrot garlic lentil mushroom onion spinach) · v6m3 Meat, fish and dairy (burger chicken fish sausage egg butter cream yoghurt)
- v6s2 **Drinks and cupboard** — v6m4 Drinks (lemonade milkshake orangejuice softdrink tea water) · v6m5 Cupboard and snacks (biscuit crisps honey jam nut salt sugar rice pasta) · v6m6 Meals and dishes (curry pancake pizza salad soup toast + diet takeaway sweets)
- v6s3 **Containers** — v6m7 Which container? (bag bottle box can carton cup glass jar packet tin) · v6m8 Containers in use (a cup of tea vs a glass of milk; plurals boxes/glasses; tin/can; packet/bag)
- v6s4 **Word power** — v6m9 Word builders (compounds milkshake/pancake/strawberry; BrE vs AmE crisps/chips, biscuit/cookie, sweets/candy, fizzy drink/soda, tin/can; spelling & sound traps) · v6m10 Eating well (healthy/unhealthy, food collocations, diet, takeaway, sweets)

### Unit 7 vocabulary — `data/u7-vocab.js` (VOCAB.u7)
- v7s1 **Wild animals** — v7m1 Wings and fins (bee butterfly eagle owl penguin jellyfish shark whale) · v7m2 Big and powerful (bear hippo leopard rhino tiger wolf fox) · v7m3 Small and surprising (lizard monkey rat scorpion snake + rare species horn)
- v7s2 **The natural world** — v7m4 Land (field forest grass hill mountain valley flowers plants) · v7m5 Water and sky (beach island lake ocean river waterfall sky)
- v7s3 **The weather** — v7m6 Noun or adjective? (cloud/cloudy fog/foggy ice/icy rain/rainy snow/snowy storm/stormy sun/sunny wind/windy) · v7m7 Hot, cold, wet, dry (hot warm cold dry wet; It's raining / It's rainy / There's a lot of rain; heavy rain, strong wind, thick fog)
- v7s4 **Word power** — v7m8 Habitats (which animal lives where; in/on with places) · v7m9 Word builders (compounds waterfall/butterfly/jellyfish; plurals wolves, foxes, butterflies, hippos, rhinos; silent letters island, whale, leopard; destroy, shocking)

## 7. Writing style for rule cards

- Explain like a brilliant tutor talking to a smart 13-year-old: concrete, visual, short sentences.
- Discovery first (one question in `key` or first paragraph), then the rule, then a mini table.
- Book rule first; the fixed exceptions (G6-4, G7-2, G7-3, G5-3) go in the `extra` field labelled implicitly.
- Show the "why" behind the rule (e.g. "If you can pour it, spread it or scoop it, you usually can't count it").
- No Thai script. No grammar jargon without a plain-words explanation.

## 8. Word entries — `data/u6-words.js` (WORDS.u6) / `data/u7-words.js` (WORDS.u7)

```js
window.WORDS = window.WORDS || {};
WORDS.u6 = {
  unit: 6,
  categories: [ {id:"fruit", name:"Fruit", icon:"🍓"}, … ],   // book categories: Fruit | Vegetables | Meat and fish | Dairy | Drinks | Other | Containers | Bonus
  words: [
    { id: "apple", word: "apple", pos: "noun", count: "C",        // C | U | C/U | — (not a noun)
      plural: "apples",                                          // nouns only; "—" for uncountable
      ipa: "/ˈæp.əl/",                                           // British IPA, Cambridge style
      level: "A2",                                               // A2 | B1 | Book word  (vocabulary-levels.md §2 ONLY)
      cat: "fruit", emoji: "🍎",
      def: "A round fruit with red, green or yellow skin and white inside.",   // ≤ 20 words, A2 English
      ex: ["Ploy puts an apple in her school bag every morning.", "There are some green apples in the fridge."],
      colls: ["a green apple", "apple juice", "an apple a day"],              // 3–5 real collocations
      forms: "",                       // optional: word family, e.g. "sun (n) → sunny (adj)"
      say: "Stress: APP-le. Two syllables.",   // optional pronunciation / spelling tip
      uk_us: "",                       // optional BrE/AmE note, e.g. "US: chips"
      fact: "",                        // optional ONE short true, fun fact (CONFIRMED / common knowledge only)
      grammar: "Countable: an apple, two apples, How many apples…?",   // how it behaves in the unit grammar
      related: ["pear","grape","orangejuice"],   // 2–5 ids from §5, clickable in the app
      patterns: ["shape"],             // ids of pattern cards that mention this word
      trap: ""                         // optional typical learner mistake: "✗ an apples → ✓ an apple / some apples"
    }
  ]
};
```
Every id in §5 must have an entry (bonus words too; for `destroy` use pos verb, `shocking`/`rare` adj).
Adjective weather words (cloudy, foggy…) get their own entries with `count: "—"` and `forms` linking
to the noun.

## 9. Pattern cards — `data/u6-patterns.js` (PATTERNS.u6) / `data/u7-patterns.js` (PATTERNS.u7)

The deep relationships behind the word list — this is the heart of the vocabulary design. 9–12 cards per unit.
```js
window.PATTERNS = window.PATTERNS || {};
PATTERNS.u6 = [
  { id: "shape", icon: "🫙", title: "Pour it, spread it, scoop it? Then you can't count it.",
    kind: "grammar",              // grammar | family | contrast | scale | sound | culture | link
    insight: "The explanation (60–140 words, simple but clever).",
    items: ["water","honey","rice","apple","egg"],       // word ids
    examples: ["…", "…"],                               // 2–4 lines a student can read aloud
    drill: "One thing to do in under a minute." }
];
```

## 10. Storybooks — `data/u6-story.js` / `data/u7-story.js` (STORIES.u6 / STORIES.u7)

```js
window.STORIES = window.STORIES || {};
STORIES.u6 = {
  title: "…", blurb: "One line. Tap any gold word to open its card.",
  cast: [ {name:"Tonkla", desc:"13, …"}, {name:"Fah", desc:"13, …"} ],
  chapters: [
    { n:1, title:"…", subtitle:"…",
      pages: [
        { tint:"warm", art:"🛒", img:"",          // img stays empty (photo mosaic is used until art is made)
          alt:"Description of the illustration (for screen readers and for the illustrator).",
          prompt:"NotebookLM / image-generator prompt for this page's illustration (see §10 rules).",
          text:"… {{apple|apples}} … {{orangejuice|orange juice}} …" }
      ] }
  ]
};
```
Markup `{{id|surface form}}` makes a tappable gold word; the surface form may be a plural or other form.
Rules: every id in that unit's §5 list appears at least once (bonus too). 4 chapters × 2–3 pages,
70–120 words per page, A2 core language with a little B1. The story should quietly model the unit's
grammar (Unit 6: some/any, much/many/a lot of, How much/How many, should; Unit 7: going to, will,
present continuous for future, correct word order) — a reader can spot it, but it is a story first:
funny, a little suspense, a satisfying ending, interesting for a 13-year-old Thai boy.
Cast (both books): **Tonkla** (13, boy, Bangkok, loves football and cooking videos, over-confident) and
his cousin **Fah** (13, girl, Chiang Mai, calm, wants to be a wildlife photographer), plus adults as needed.
Image prompts: Thai teenagers, realistic modern Bangkok/Thai settings, warm watercolour-and-ink style,
no text in the image, no brand logos, no copyrighted characters. Facts in the story must be true
(fact-check.md) — e.g. hippos cannot swim (they walk on the riverbed); African penguins live at
Boulders Beach in South Africa.

## 11. Tests — `data/tests.js` (TESTS array)

```js
window.TESTS = window.TESTS || [];
TESTS.push({
  id: "triage", kind: "triage", name: "Trailhead Check", minutes: 0,
  blurb: "…",
  items: [ { …item schema (§3)…, id:"tri-1", module:"g6m1" } ]     // module = id from §6 it diagnoses
});
TESTS.push({
  id: "mock1", kind: "mock", name: "TU-style Mock 1", minutes: 60,
  label: "TU-style practice (format unofficial)",
  blurb: "…",
  sections: [
    { part: "Part 1", title: "Error identification", instructions: "Choose the underlined part that is NOT correct.",
      items: [ { …error item…, id:"m1-1", module:"g6m8" } ] },
    { part: "Part 5", title: "Passage cloze", instructions: "Read the text and choose the best word for each blank.",
      passage: "Text with numbered blanks written as (21) ______ in the passage.",
      items: [ { id:"m1-21", type:"cloze", blank:21, stem:"(21)", options:[…], answer:0, why:"…", hint:"", cefr:"B1", module:"v6m7" } ] },
    { part: "Part 6", title: "Reading", instructions: "Read the passage and answer the questions.",
      passage: "…", source: "",
      items: [ { id:"m1-33", type:"read", stem:"What is the passage mainly about?", options:[…], answer:2, why:"…", cefr:"B1", module:"read" } ] }
  ]
});
```
`module` for reading items may be `"read"`. Mock items need `why` (shown in the review) and may have an empty `hint`
(hints are hidden in mocks). Every mock item MUST still satisfy §1.
