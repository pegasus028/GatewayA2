// Trail Mix — Unit 7 "Into the wild" (Gateway to the World A2, pp.92–103): GRAMMAR
// Stages g7s1–g7s6, modules g7m1–g7m12 (SPEC §6). Future-form items follow IW7-1…IW7-6 (one explicit cue, one key).
window.GRAMMAR = window.GRAMMAR || {};
window.GRAMMAR.u7 = {
  "unit": 7,
  "title": "Into the wild",
  "pages": "pp.92–103",
  "stages": [
    {
      "id": "g7s1",
      "n": 1,
      "name": "Going to",
      "icon": "🎒",
      "blurb": "Plans in your head and clouds in the sky: meet the going-to future.",
      "modules": [
        {
          "id": "g7m1",
          "name": "be going to: the form",
          "page": "p.94, p.102",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "be going to = am / is / are + going to + the base verb. Only the be part changes.",
            "body": [
              "Look: <em>I'm going to visit</em> Grandma. <em>She's going to visit</em> Grandma. <em>They're going to visit</em> Grandma. What changes? Only <em>am / is / are</em>. The words <em>going to</em> and the verb stay the same.",
              "After <em>going to</em>, use the base verb (the infinitive): <em>going to <strong>swim</strong></em> — not <em>going to swimming</em>, <em>going to swims</em> or <em>going to swam</em>.",
              "Negative: put <em>not</em> after be: <em>I'm not / she isn't / we aren't going to…</em> Questions: put be before the subject: <em>Are you going to watch the match?</em> Short answers use be: <em>Yes, I am. / No, she isn't.</em>",
              "Don't forget be! <em>I going to…</em> is a very common mistake. People often say /gənə/ when they speak fast, but always write <em>going to</em>."
            ],
            "table": [
              [
                "",
                "Form",
                "Example"
              ],
              [
                "+",
                "I'm / He's / They're + going to + verb",
                "They're going to camp in Khao Yai."
              ],
              [
                "–",
                "I'm not / He isn't / They aren't + going to + verb",
                "Mek isn't going to play today."
              ],
              [
                "?",
                "Am / Is / Are + subject + going to + verb?",
                "Is Fah going to come with us?"
              ],
              [
                "Short answers",
                "Yes, … am / is / are. No, … 'm not / isn't / aren't.",
                "Yes, she is. / No, they aren't."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "We're <strong>going to sleep</strong> in a tent tonight."
              },
              {
                "ok": false,
                "s": "I going to buy a new phone.",
                "fix": "I'm going to buy a new phone."
              },
              {
                "ok": false,
                "s": "He is going to visits the zoo.",
                "fix": "He is going to visit the zoo."
              },
              {
                "ok": false,
                "s": "Are you going to swimming later?",
                "fix": "Are you going to swim later?"
              },
              {
                "ok": true,
                "s": "<strong>Are</strong> they <strong>going to come</strong>? — No, they <strong>aren't</strong>."
              }
            ],
            "tip": "Three parts, every time: BE + GOING TO + VERB. If one part is missing, the sentence is broken."
          },
          "items": [
            {
              "id": "g7m1-1",
              "type": "gap",
              "cefr": "B1",
              "stem": "The water in the lake is very cold, so we ___ swim today.",
              "options": [
                "isn't going to",
                "don't going to",
                "not going to",
                "aren't going to"
              ],
              "answer": 3,
              "hint": "How do we make <em>be going to</em> negative? Look at the subject too.",
              "why": "<em>We</em> takes <em>are</em>, so the negative is <em>aren't going to</em>. <em>Isn't</em> is for he, she and it, and we never use <em>don't</em> with <em>going to</em>."
            },
            {
              "id": "g7m1-2",
              "type": "gap",
              "cefr": "A2",
              "stem": "Tonkla is going to ___ his bike to school tomorrow.",
              "options": [
                "riding",
                "ride",
                "rides",
                "rode"
              ],
              "answer": 1,
              "hint": "What form of the verb always comes after <em>going to</em>?",
              "why": "After <em>going to</em> we use the base verb: <em>going to ride</em>. No <em>-ing</em>, no <em>-s</em> and no past form."
            },
            {
              "id": "g7m1-3",
              "type": "error",
              "cefr": "A2",
              "stem": "[[Next month]], my parents [[are]] [[going to]] [[bought]] a new car.",
              "options": [
                "Next month",
                "are",
                "going to",
                "bought"
              ],
              "answer": 3,
              "fix": "buy",
              "hint": "Check each part of the going-to future, one by one.",
              "why": "After <em>going to</em> use the base verb: <em>going to buy</em>, not the past form <em>bought</em>. <em>Next month</em> is the future anyway."
            },
            {
              "id": "g7m1-4",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Ploy",
                  "text": "___ you going to watch the football tonight?"
                },
                {
                  "who": "Ken",
                  "text": "No, I'm not. I've got a lot of homework."
                }
              ],
              "stem": "",
              "options": [
                "Are",
                "Do",
                "Is",
                "Will"
              ],
              "answer": 0,
              "hint": "Look at Ken's short answer. Which verb does it use?",
              "why": "Going-to questions start with <em>am / is / are</em>, and <em>you</em> takes <em>are</em>. Ken's answer <em>No, I'm not</em> uses be too. <em>Do you going to…?</em> is wrong."
            },
            {
              "id": "g7m1-5",
              "type": "choose",
              "cefr": "B1",
              "stem": "Which question is correct?",
              "options": [
                "What you are going to do after school?",
                "What are you going to doing after school?",
                "What are you going to do after school?",
                "What do you going to do after school?"
              ],
              "answer": 2,
              "hint": "In a question, where does <em>are</em> go? And what comes after <em>going to</em>?",
              "why": "Question word + <em>are</em> + subject + <em>going to</em> + base verb. <em>What you are going to do</em> keeps statement order, which is wrong in a question."
            },
            {
              "id": "g7m1-6",
              "type": "picture",
              "cefr": "A2",
              "stem": "Mint has packed her swimsuit and a towel for a day here. She ___ swim in the sea.",
              "img": "beach",
              "options": [
                "is going to",
                "are going to",
                "going to",
                "is going"
              ],
              "answer": 0,
              "hint": "Who is the subject? Then make sure all three parts are there.",
              "why": "<em>She</em> takes <em>is</em>: <em>She is going to swim</em>. Without <em>is</em> or without <em>to</em>, the form is broken. <em>Are</em> is for you, we and they."
            }
          ]
        },
        {
          "id": "g7m2",
          "name": "Plans and evidence",
          "page": "pp.94–95, p.102",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Did you decide before now? Then use going to: I've saved my money — I'm going to buy a new football.",
            "body": [
              "The book's rule: we use <em>be going to</em> for <strong>plans and intentions</strong>. Ask yourself: <em>Did I decide before now?</em> If yes, use <em>going to</em>. <em>I've bought the paint. I'm going to paint my room.</em>",
              "The plan doesn't need a time, a ticket or other people. It's an idea already in your head: <em>When I'm 18, I'm going to travel around Thailand.</em> A bucket list is full of <em>going to</em>.",
              "Use it to ask about plans, too: <em>What are you going to do in the holidays?</em> And don't use the present simple for a plan: ✗ <em>I've decided. I buy a bike next month.</em>"
            ],
            "table": [
              [
                "Clue in the situation",
                "Use",
                "Example"
              ],
              [
                "I've decided… / I've saved… / I've already bought…",
                "going to (plan)",
                "I've saved 500 baht. I'm going to buy a new game."
              ],
              [
                "When I'm 18… / bucket list",
                "going to (intention)",
                "I'm going to learn to dive."
              ],
              [
                "Look! / Be careful! — Extra",
                "going to (evidence)",
                "Look at those clouds! It's going to rain."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "I've already bought the flour. I'm <strong>going to make</strong> a cake tonight."
              },
              {
                "ok": false,
                "s": "I've decided. I learn the guitar this year.",
                "fix": "I've decided. I'm going to learn the guitar this year."
              },
              {
                "ok": true,
                "s": "Be careful! That glass is <strong>going to fall</strong>!"
              },
              {
                "ok": false,
                "s": "Look at those black clouds! It rains.",
                "fix": "Look at those black clouds! It's going to rain."
              }
            ],
            "extra": "Extra: <em>going to</em> also predicts something we can SEE coming now: <em>Look at the sky! It's going to rain.</em> / <em>Be careful! You're going to drop those eggs!</em> The proof is in front of your eyes.",
            "tip": "Going to = the future is already on its way: in your head (a plan) or in front of your eyes (evidence)."
          },
          "items": [
            {
              "id": "g7m2-1",
              "type": "situation",
              "cefr": "A2",
              "context": "Tonkla has decided to learn to cook Thai food this summer. Nothing is booked yet — it's just his plan.",
              "stem": "What does he tell his friend?",
              "options": [
                "I learn to cook this summer.",
                "I'm going to learn to cook this summer.",
                "I going to learn to cook this summer.",
                "I'm going to learning to cook this summer."
              ],
              "answer": 1,
              "hint": "He made the decision before now. Which sentence shows a plan, with every part correct?",
              "why": "A plan decided before now takes <em>be going to</em> + base verb. The present simple <em>I learn</em> doesn't show a future plan, and <em>I going to</em> has no <em>am</em>."
            },
            {
              "id": "g7m2-2",
              "type": "picture",
              "cefr": "B1",
              "stem": "Look at those dark clouds! Quick, let's go inside. It ___ any minute now.",
              "img": "storm",
              "options": [
                "is going to raining",
                "is raining",
                "is going to rain",
                "going to rain"
              ],
              "answer": 2,
              "hint": "Has the rain started? What can you see that tells you about the future?",
              "why": "We can see the clouds now, so we predict from evidence: <em>is going to rain</em>. <em>Is raining</em> means it has already started — but it hasn't."
            },
            {
              "id": "g7m2-3",
              "type": "meaning",
              "cefr": "A2",
              "stem": "“I'm going to paint my bedroom green.” What does this tell us?",
              "options": [
                "It's happening now: the speaker is painting at the moment.",
                "It's finished: the speaker painted the room last weekend.",
                "It's a guess: the speaker thinks the room will change one day.",
                "It's a plan: the speaker has already decided."
              ],
              "answer": 3,
              "hint": "Think about the book's rule for <em>be going to</em> on p.102.",
              "why": "<em>Be going to</em> shows a plan or intention: the speaker decided before speaking. Painting at this moment would be <em>I'm painting my bedroom</em>."
            },
            {
              "id": "g7m2-4",
              "type": "classify",
              "cefr": "B1",
              "stem": "“Be careful, Pim! You're going to drop those eggs!” Why does the speaker use <em>going to</em>?",
              "options": [
                "A plan: Pim decided it before now",
                "Evidence: we can see it is about to happen",
                "An arrangement: it has a time and place",
                "An offer: the speaker wants to help"
              ],
              "answer": 1,
              "hint": "Did Pim plan to drop the eggs? What can the speaker see?",
              "why": "Nobody plans to drop eggs! The speaker can see Pim's hands now, so this is a prediction from evidence — the Extra use of <em>going to</em>."
            },
            {
              "id": "g7m2-5",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Mia",
                  "text": "Why have you got a guitar, Leo?"
                },
                {
                  "who": "Leo",
                  "text": "I've decided to learn. ___ a song at Mum's birthday party next month."
                }
              ],
              "stem": "",
              "options": [
                "I'm going to play",
                "I play",
                "I'm going play",
                "I going to play"
              ],
              "answer": 0,
              "hint": "Leo decided before now. Check that every part of the form is there.",
              "why": "<em>I've decided</em> is the clue for a plan: <em>I'm going to play</em>. The present simple <em>I play</em> doesn't show a plan, and <em>going play</em> is missing <em>to</em>."
            },
            {
              "id": "g7m2-6",
              "type": "error",
              "cefr": "A2",
              "stem": "I've [[already]] [[bought]] the flour, so I [[make]] a cake [[for Dad]] tonight.",
              "options": [
                "already",
                "bought",
                "make",
                "for Dad"
              ],
              "answer": 2,
              "fix": "am going to make",
              "hint": "Tonight is in the future, and the plan is decided. Check every verb.",
              "why": "The cake is a plan decided before now (the flour is bought), so use <em>I'm going to make</em>. The present simple <em>I make</em> doesn't talk about a plan."
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g7s1ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g7s1ck-1",
            "type": "gap",
            "cefr": "A2",
            "stem": "___ your brother going to come with us to Khao Yai?",
            "options": [
              "Does",
              "Will",
              "Is",
              "Are"
            ],
            "answer": 2,
            "hint": "Which helper verb starts a going-to question? Check the subject.",
            "why": "Going-to questions start with <em>am / is / are</em>. <em>Your brother</em> = he, so <em>Is your brother going to come…?</em>"
          },
          {
            "id": "g7s1ck-2",
            "type": "picture",
            "cefr": "B1",
            "stem": "Be careful! The path is really icy. ___ fall!",
            "img": "icy",
            "options": [
              "You going to",
              "You're going",
              "You're go to",
              "You're going to"
            ],
            "answer": 3,
            "hint": "Can you see what's about to happen? Then check every part of the form.",
            "why": "We can see the ice now, so we predict from evidence: <em>You're going to fall!</em> Every part matters: <em>are</em> + <em>going to</em> + base verb."
          },
          {
            "id": "g7s1ck-3",
            "type": "error",
            "cefr": "A2",
            "stem": "[[Are]] you going [[to]] [[watching]] the bird show [[later]]?",
            "options": [
              "Are",
              "to",
              "watching",
              "later"
            ],
            "answer": 2,
            "fix": "watch",
            "hint": "Check the going-to question, part by part.",
            "why": "After <em>going to</em> use the base verb: <em>Are you going to watch…?</em> Not the <em>-ing</em> form."
          },
          {
            "id": "g7s1ck-4",
            "type": "situation",
            "cefr": "A2",
            "context": "Beam has already bought a sketchbook and some pencils. She tells her teacher about her plan.",
            "stem": "What does she say?",
            "options": [
              "I draw birds in the park this weekend.",
              "I'm going to draw birds in the park this weekend.",
              "I going to draw birds in the park this weekend.",
              "I'm going to drawing birds in the park this weekend."
            ],
            "answer": 1,
            "hint": "Beam decided before now. Which sentence shows a plan, with every part correct?",
            "why": "Buying the sketchbook shows a decided plan: <em>I'm going to draw</em>. <em>I draw</em> doesn't show a plan, and <em>I going to</em> has no <em>am</em>."
          },
          {
            "id": "g7s1ck-5",
            "type": "odd",
            "cefr": "B1",
            "stem": "Which sentence is NOT about a plan or intention?",
            "options": [
              "I'm going to learn to swim this year.",
              "We're going to clean the beach on Sunday.",
              "Look! That monkey's going to take your sandwich!",
              "My sister is going to save her money for a new laptop."
            ],
            "answer": 2,
            "hint": "For each sentence, ask: did someone decide this?",
            "why": "Nobody decided the monkey's action — the speaker can see it coming. That's a prediction from evidence (Extra). The other three are decided plans."
          },
          {
            "id": "g7s1ck-6",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Mia",
                "text": "What are you going to do in the school holidays?"
              },
              {
                "who": "Leo",
                "text": "___ my cousins in Chiang Mai. I can't wait!"
              }
            ],
            "stem": "",
            "options": [
              "I'm going to visit",
              "I going to visit",
              "I'm going visit",
              "I'm going to visiting"
            ],
            "answer": 0,
            "hint": "Answer with the same form as Mia's question. Check every part.",
            "why": "Mia asks with <em>going to</em>, and Leo answers with his plan: <em>I'm going to visit</em> — be + going to + base verb."
          }
        ]
      }
    },
    {
      "id": "g7s2",
      "n": 2,
      "name": "Will / won't",
      "icon": "🔮",
      "blurb": "Predict the future, offer help and make promises with will.",
      "modules": [
        {
          "id": "g7m3",
          "name": "will/won't: the form",
          "page": "p.98, p.102",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "will / won't + base verb — the same for everybody: I will, she will, they will.",
            "body": [
              "<em>Will</em> is easy: it never changes. <em>I'll go, she'll go, they'll go.</em> After it comes the base verb with no <em>-s</em>, no <em>to</em> and no <em>-ing</em>: <em>She will <strong>speak</strong></em> (✗ <em>will speaks</em>, ✗ <em>will to speak</em>).",
              "Negative: <em>will not</em> = <em>won't</em> (it rhymes with <em>don't</em>, not with <em>want</em>). Never use <em>don't</em> or <em>doesn't</em> with will: ✓ <em>They won't come.</em> ✗ <em>They don't will come.</em>",
              "Questions: put <em>will</em> first: <em>Will it be sunny?</em> (✗ <em>Does it will be…?</em>) Short answers: <em>Yes, it will. / No, it won't.</em> We don't end a short answer with <em>'ll</em>: ✗ <em>Yes, it'll.</em>"
            ],
            "table": [
              [
                "",
                "Form",
                "Example"
              ],
              [
                "+",
                "subject + will ('ll) + verb",
                "It'll be sunny on Saturday."
              ],
              [
                "–",
                "subject + won't + verb",
                "The tigers won't come near the road."
              ],
              [
                "?",
                "Will + subject + verb?",
                "Will we see a whale?"
              ],
              [
                "Short answers",
                "Yes, … will. / No, … won't.",
                "Yes, we will. / No, we won't."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "My brother <strong>will be</strong> 15 next year."
              },
              {
                "ok": false,
                "s": "She will speaks English very well one day.",
                "fix": "She will speak English very well one day."
              },
              {
                "ok": false,
                "s": "We don't will win the match.",
                "fix": "We won't win the match."
              },
              {
                "ok": false,
                "s": "I will to call you tonight.",
                "fix": "I will call you tonight. / I'll call you tonight."
              },
              {
                "ok": false,
                "s": "Does it will rain tomorrow?",
                "fix": "Will it rain tomorrow?"
              },
              {
                "ok": true,
                "s": "<strong>Will</strong> you be at home? — Yes, I <strong>will</strong>."
              }
            ],
            "tip": "Will is a wall: nothing changes after it. Just the base verb — no -s, no to, no -ing."
          },
          "items": [
            {
              "id": "g7m3-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "I think Mek ___ the race on Sports Day. He's very fast.",
              "options": [
                "will wins",
                "will to win",
                "will winning",
                "will win"
              ],
              "answer": 3,
              "hint": "Does the verb after <em>will</em> ever change?",
              "why": "After <em>will</em> we use the base verb with no changes: <em>will win</em>. Not <em>will wins</em> (no -s), <em>will to win</em> (no to) or <em>will winning</em>."
            },
            {
              "id": "g7m3-2",
              "type": "picture",
              "cefr": "A2",
              "stem": "Don't be scared of this butterfly, Mint. It ___ hurt you!",
              "img": "butterfly",
              "options": [
                "don't will",
                "won't",
                "doesn't will",
                "isn't"
              ],
              "answer": 1,
              "hint": "Think of the negative form in the book's table on p.102.",
              "why": "The negative of <em>will</em> is <em>won't</em> (will not). We never use <em>don't</em> or <em>doesn't</em> with <em>will</em>, and <em>isn't hurt</em> is not a future form."
            },
            {
              "id": "g7m3-3",
              "type": "error",
              "cefr": "A2",
              "stem": "[[I think]] [[robots]] [[will]] [[cleans]] our houses in 2050.",
              "options": [
                "I think",
                "robots",
                "will",
                "cleans"
              ],
              "answer": 3,
              "fix": "clean",
              "hint": "Remember: does the form with <em>will</em> change for different subjects?",
              "why": "After <em>will</em> the verb never takes <em>-s</em>, with any subject: <em>robots will clean</em>. <em>I think</em> + <em>will</em> is a correct prediction."
            },
            {
              "id": "g7m3-4",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Ploy",
                  "text": "Will it be sunny at the beach tomorrow?"
                },
                {
                  "who": "Jay",
                  "text": "No, it ___. The app says it'll rain all day."
                }
              ],
              "stem": "",
              "options": [
                "isn't",
                "doesn't",
                "won't",
                "not will"
              ],
              "answer": 2,
              "hint": "A short answer uses the same helper verb as the question.",
              "why": "The question starts with <em>Will</em>, so the short answer uses <em>will</em> too: <em>No, it won't.</em> <em>Isn't</em> and <em>doesn't</em> answer different questions."
            },
            {
              "id": "g7m3-5",
              "type": "choose",
              "cefr": "B1",
              "stem": "Which question is correct?",
              "options": [
                "Will the tigers come out tonight?",
                "Do the tigers will come out tonight?",
                "Will the tigers comes out tonight?",
                "Will the tigers to come out tonight?"
              ],
              "answer": 0,
              "hint": "In a <em>will</em> question, what goes first? And what form is the verb?",
              "why": "<em>Will</em> + subject + base verb: <em>Will the tigers come out…?</em> We don't add <em>do</em>, <em>-s</em> or <em>to</em>."
            },
            {
              "id": "g7m3-6",
              "type": "odd",
              "cefr": "B1",
              "stem": "“Will you come to my party?” Three answers are correct. Which one is NOT?",
              "options": [
                "Yes, I will.",
                "No, I won't.",
                "No, I will not.",
                "Yes, I'll."
              ],
              "answer": 3,
              "hint": "Look at the short answers in the book's table on p.102.",
              "why": "We don't end a short answer with <em>'ll</em>. Say <em>Yes, I will.</em> <em>Won't</em> is fine at the end: <em>No, I won't.</em>"
            }
          ]
        },
        {
          "id": "g7m4",
          "name": "Predictions, offers and promises",
          "page": "pp.98–99, p.102",
          "cefr": "B1",
          "extra": false,
          "rule": {
            "key": "Use will for what you think will happen. Extra: also for offers, promises and decisions you make right now.",
            "body": [
              "The book's rule: <em>will</em> makes <strong>predictions</strong> — your opinion about the future. Clue words: <em>I think, I'm sure, probably, maybe, I hope, in 2050</em>. <em>I think it'll be hot tomorrow. In 2050, robots will cook our dinner.</em>",
              "For a negative opinion, we usually say <em>I don't think … will</em>: <em>I don't think Mek will come.</em> It's the frame on p.99: <em>I think I'll… / I don't think I will…</em>",
              "To ask for someone's opinion: <em>Do you think we'll see an elephant?</em> A prediction is not a plan and not an arrangement — nobody has decided or booked anything."
            ],
            "table": [
              [
                "Clue",
                "Use of will",
                "Example"
              ],
              [
                "I think / I'm sure / probably / in 2050",
                "prediction (book)",
                "I'm sure you'll love Chiang Mai."
              ],
              [
                "The phone's ringing! / Oh no, it's dark!",
                "decision now (Extra)",
                "I'll answer it!"
              ],
              [
                "That bag looks heavy.",
                "offer (Extra)",
                "I'll carry it for you."
              ],
              [
                "I promise…",
                "promise (Extra)",
                "I'll pay you back tomorrow, I promise."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "I'm sure the sharks <strong>won't come</strong> near the beach."
              },
              {
                "ok": false,
                "s": "I think it rains tomorrow.",
                "fix": "I think it'll rain tomorrow."
              },
              {
                "ok": true,
                "s": "It's hot in here. <strong>I'll open</strong> the window."
              },
              {
                "ok": false,
                "s": "“There's someone at the door.” “I go.”",
                "fix": "“I'll go.”"
              },
              {
                "ok": false,
                "s": "I promise I call you tonight.",
                "fix": "I promise I'll call you tonight."
              }
            ],
            "extra": "Extra: <em>will</em> is also for a decision you make at the moment of speaking (<em>The phone's ringing — I'll answer it!</em>), offers (<em>I'll help you with that bag.</em>) and promises (<em>I'll call you tonight, I promise.</em>). The present simple is wrong here: ✗ <em>I answer it.</em>",
            "tip": "Guessing, offering, promising or deciding right now? No old plan? Then it's will."
          },
          "items": [
            {
              "id": "g7m4-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "I'm sure our team ___ the match on Saturday. We've got the best players!",
              "options": [
                "wins",
                "is winning",
                "will win",
                "win"
              ],
              "answer": 2,
              "hint": "<em>I'm sure</em> introduces an opinion about the future. Which form makes predictions?",
              "why": "<em>I'm sure</em> gives an opinion, so this is a prediction: <em>will win</em>. <em>Is winning</em> is for arranged plans, and the present simple <em>wins</em> doesn't predict."
            },
            {
              "id": "g7m4-2",
              "type": "situation",
              "cefr": "A2",
              "context": "Your grandma is carrying two heavy bags of rice up the stairs.",
              "stem": "What do you say?",
              "options": [
                "I carry them for you, Grandma.",
                "I'll carry them for you, Grandma.",
                "I'm carrying them for you, Grandma.",
                "I will carrying them for you, Grandma."
              ],
              "answer": 1,
              "hint": "You are offering help right now. Which form do we use for offers?",
              "why": "Offers use <em>will</em>: <em>I'll carry them for you.</em> The present simple <em>I carry</em> is a common mistake, and <em>I'm carrying</em> sounds like you are already doing it."
            },
            {
              "id": "g7m4-3",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Mum",
                  "text": "Oh no! We haven't got any eggs for the cake."
                },
                {
                  "who": "Nut",
                  "text": "Don't worry, Mum. ___ to 7-Eleven and get some."
                }
              ],
              "stem": "",
              "options": [
                "I go",
                "I'm go",
                "I will to go",
                "I'll go"
              ],
              "answer": 3,
              "hint": "Nut decides at this moment. Which form do we use for a decision made now?",
              "why": "Nut decides while he is speaking, so use <em>will</em>: <em>I'll go</em>. The present simple <em>I go</em> is a very common mistake here."
            },
            {
              "id": "g7m4-4",
              "type": "error",
              "cefr": "B1",
              "stem": "I [[promise]] I [[give]] your book back [[to you]] [[tomorrow]].",
              "options": [
                "promise",
                "give",
                "to you",
                "tomorrow"
              ],
              "answer": 1,
              "fix": "will give",
              "hint": "Promises about the future have their own form. Check every verb.",
              "why": "Promises use <em>will</em>: <em>I promise I'll give your book back.</em> The present simple <em>give</em> can't make a promise about tomorrow."
            },
            {
              "id": "g7m4-5",
              "type": "classify",
              "cefr": "B1",
              "stem": "“It's really dark in here. I'll turn on the light.” What kind of <em>will</em> is this?",
              "options": [
                "A decision made at this moment",
                "A prediction about the future",
                "A plan made last week",
                "A fixed arrangement with a time"
              ],
              "answer": 0,
              "hint": "When did the speaker decide to turn on the light?",
              "why": "The speaker notices the dark and decides right now: an instant decision, so <em>I'll</em>. It isn't an opinion about the future or an old plan."
            },
            {
              "id": "g7m4-6",
              "type": "picture",
              "cefr": "A2",
              "stem": "Ken is on a boat trip. “Keep your camera ready! I think ___ one of these today.”",
              "img": "whale",
              "options": [
                "we'll see",
                "we see",
                "we're seeing",
                "we seeing"
              ],
              "answer": 0,
              "hint": "<em>I think</em> gives Ken's opinion. Which form makes a prediction?",
              "why": "<em>I think</em> + <em>will</em> makes a prediction: <em>we'll see</em>. <em>We're seeing</em> is for arranged plans — and nobody can arrange a whale!"
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g7s2ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g7s2ck-1",
            "type": "gap",
            "cefr": "A2",
            "stem": "In 2050, people ___ drive cars. Robots will drive them for us.",
            "options": [
              "don't will",
              "won't",
              "aren't",
              "doesn't"
            ],
            "answer": 1,
            "hint": "This is a prediction about 2050. How do we make it negative?",
            "why": "Negative predictions use <em>won't</em> + base verb: <em>people won't drive</em>. We never use <em>don't</em> with <em>will</em>, and <em>aren't drive</em> isn't English."
          },
          {
            "id": "g7s2ck-2",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Sam",
                "text": "Will you be at Pim's party on Friday?"
              },
              {
                "who": "Ploy",
                "text": "Yes, ___. See you there!"
              }
            ],
            "stem": "",
            "options": [
              "I'll",
              "I do",
              "I will",
              "I'm"
            ],
            "answer": 2,
            "hint": "Look at the question's first word. Then think about how short answers end.",
            "why": "<em>Will you…?</em> → <em>Yes, I will.</em> We don't end a short answer with <em>'ll</em> or <em>'m</em>, and <em>I do</em> answers a <em>Do you…?</em> question."
          },
          {
            "id": "g7s2ck-3",
            "type": "situation",
            "cefr": "B1",
            "context": "You're at a friend's house. Her little brother can't open his bottle of water.",
            "stem": "What do you say?",
            "options": [
              "Here, I open it for you.",
              "Here, I'm open it for you.",
              "Here, I will opening it for you.",
              "Here, I'll open it for you."
            ],
            "answer": 3,
            "hint": "You are offering help at this moment. Which form do offers use?",
            "why": "Offers use <em>will</em>: <em>I'll open it for you.</em> The present simple <em>I open it</em> is a common mistake, and <em>I'm open it</em> is not a verb form."
          },
          {
            "id": "g7s2ck-4",
            "type": "error",
            "cefr": "B1",
            "stem": "[[Don't]] [[worry]], [[I won't]] [[to tell]] anyone your secret.",
            "options": [
              "Don't",
              "worry",
              "I won't",
              "to tell"
            ],
            "answer": 3,
            "fix": "tell",
            "hint": "Promises use <em>will</em> or <em>won't</em>. Check what follows.",
            "why": "After <em>won't</em> use the base verb with no <em>to</em>: <em>I won't tell anyone.</em> <em>Won't</em> is the right form for this promise."
          },
          {
            "id": "g7s2ck-5",
            "type": "classify",
            "cefr": "A2",
            "stem": "“I'm sure Thailand will win the next match.” What is this?",
            "options": [
              "An offer",
              "A promise",
              "A prediction",
              "An arrangement"
            ],
            "answer": 2,
            "hint": "Does the speaker know, or is it an opinion?",
            "why": "<em>I'm sure</em> + <em>will</em> gives an opinion about the future: a prediction, the book's main use of <em>will</em> (p.102)."
          },
          {
            "id": "g7s2ck-6",
            "type": "picture",
            "cefr": "A2",
            "stem": "The weather app shows this for tomorrow. I think ___ hot all day.",
            "img": "sunny",
            "options": [
              "it's being",
              "it be",
              "it will is",
              "it'll be"
            ],
            "answer": 3,
            "hint": "<em>I think</em> gives an opinion. Which form predicts?",
            "why": "<em>I think</em> + <em>will</em> + base verb makes a prediction: <em>it'll be hot</em>. <em>It's being hot</em> is not how we predict the weather."
          }
        ]
      }
    },
    {
      "id": "g7s3",
      "n": 3,
      "name": "Diary dates",
      "icon": "📅",
      "blurb": "Is it in your diary? Then the -ing form can talk about the future.",
      "modules": [
        {
          "id": "g7m5",
          "name": "Present continuous for arrangements",
          "page": "p.99, p.102",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Is it in your diary? Then use the present continuous: I'm meeting Ploy at Siam at 5 tomorrow.",
            "body": [
              "The present continuous (<em>am / is / are + -ing</em>) can talk about the future! The book's rule: we use it for future plans that are <strong>confirmed</strong> — the time is fixed, the tickets are bought, or other people know about it.",
              "It usually has a future time word: <em>tonight, tomorrow, this weekend, next week, on Friday, at 6 o'clock</em>. <em>I'm playing football</em> = now. <em>I'm playing football on Saturday</em> = the future.",
              "Use it to ask about someone's plans: <em>What are you doing this weekend?</em> (✗ <em>What do you do this weekend?</em>) And don't forget be and -ing: ✗ <em>I meeting</em>, ✗ <em>I'm meet</em>.",
              "<em>Going to</em> isn't wrong for these plans either. But for diary plans English speakers very often choose the present continuous — so practise it!"
            ],
            "table": [
              [
                "",
                "Example"
              ],
              [
                "+",
                "We're flying to Phuket on Friday."
              ],
              [
                "–",
                "Beam isn't coming to the party tomorrow."
              ],
              [
                "?",
                "Are you doing anything on Saturday?"
              ],
              [
                "Time words",
                "tonight · tomorrow · this weekend · next week · on Monday · at 3 pm"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "I'm <strong>meeting</strong> Fah at the night market at 7 tonight."
              },
              {
                "ok": true,
                "s": "My parents <strong>are driving</strong> to Hua Hin on Sunday. They've booked a hotel."
              },
              {
                "ok": false,
                "s": "What do you do tomorrow evening?",
                "fix": "What are you doing tomorrow evening?"
              },
              {
                "ok": false,
                "s": "I'm see the dentist at 4 tomorrow.",
                "fix": "I'm seeing the dentist at 4 tomorrow."
              },
              {
                "ok": false,
                "s": "We going to the cinema on Saturday.",
                "fix": "We're going to the cinema on Saturday."
              }
            ],
            "tip": "Diary test: could you write it in a calendar with a time? Then say it with be + -ing."
          },
          "items": [
            {
              "id": "g7m5-1",
              "type": "gap",
              "cefr": "A2",
              "context": "Fah's diary — Tomorrow: 10:00 meet Ploy at the bookshop",
              "stem": "Fah ___ Ploy at the bookshop at 10 o'clock tomorrow.",
              "options": [
                "meets",
                "is meeting",
                "is meet",
                "meeting"
              ],
              "answer": 1,
              "hint": "It's in Fah's diary with a time and a place. Check all parts of the form.",
              "why": "A diary plan with a time and place takes the present continuous: <em>is meeting</em> (be + -ing). The present simple <em>meets</em> isn't used for personal plans like this."
            },
            {
              "id": "g7m5-2",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Jay",
                  "text": "What ___ this Saturday evening?"
                },
                {
                  "who": "Anna",
                  "text": "I'm going to a concert with my cousin. We've got the tickets!"
                }
              ],
              "stem": "",
              "options": [
                "are you doing",
                "do you do",
                "you are doing",
                "are you do"
              ],
              "answer": 0,
              "hint": "Jay is asking about a plan. Think about question order too.",
              "why": "To ask about plans, use the present continuous in question order: <em>What are you doing…?</em> <em>What do you do?</em> asks about your job or habits."
            },
            {
              "id": "g7m5-3",
              "type": "error",
              "cefr": "A2",
              "stem": "My uncle [[driving]] us to Khao Yai [[next]] Sunday, [[so]] I [[can't]] come to your party.",
              "options": [
                "driving",
                "next",
                "so",
                "can't"
              ],
              "answer": 0,
              "fix": "is driving",
              "hint": "Check the form of the future plan: every part must be there.",
              "why": "The present continuous needs <em>be</em> + <em>-ing</em>: <em>My uncle is driving us…</em> Without <em>is</em>, the sentence has no complete verb."
            },
            {
              "id": "g7m5-4",
              "type": "meaning",
              "cefr": "B1",
              "stem": "“I'm flying to Phuket on Friday.” What does this tell us?",
              "options": [
                "The speaker is on a plane at this moment.",
                "The trip is arranged — maybe the tickets are bought.",
                "The speaker flies to Phuket every Friday.",
                "The speaker is only guessing that the trip will happen."
              ],
              "answer": 1,
              "hint": "Look at the time phrase. Is this about now, a habit or something else?",
              "why": "Present continuous + a future time (<em>on Friday</em>) = a fixed, arranged plan. A habit would be <em>I fly to Phuket every Friday</em>."
            },
            {
              "id": "g7m5-5",
              "type": "picture",
              "cefr": "A2",
              "stem": "Dad has already booked a hotel near this waterfall. He and Pim ___ there next Tuesday.",
              "img": "waterfall",
              "options": [
                "drive",
                "driving",
                "are drive",
                "are driving"
              ],
              "answer": 3,
              "hint": "The hotel is booked, so the plan is fixed. Check the form.",
              "why": "A booked, fixed plan takes the present continuous: <em>are driving</em>. The present simple <em>drive</em> isn't used for personal plans like this, and <em>driving</em> needs <em>are</em>."
            },
            {
              "id": "g7m5-6",
              "type": "situation",
              "cefr": "B1",
              "context": "You want to invite Mint to the cinema this Friday. First, you ask about her plans.",
              "stem": "What do you say?",
              "options": [
                "Do you do anything this Friday evening?",
                "Are you do anything this Friday evening?",
                "Are you doing anything this Friday evening?",
                "Do you doing anything this Friday evening?"
              ],
              "answer": 2,
              "hint": "Look at the Speaking bank on p.100: asking about somebody's plans.",
              "why": "<em>Are you doing anything…?</em> (Speaking bank) asks about plans. <em>Do you do anything…?</em> asks about habits, and the other two mix up <em>do</em>, <em>be</em> and <em>-ing</em>."
            }
          ]
        },
        {
          "id": "g7m6",
          "name": "Now or later?",
          "page": "p.99, p.103",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Same form, two times: “I'm swimming” can be now or the future. The time words tell you which.",
            "body": [
              "<em>Shh! I'm doing my homework.</em> = now. <em>I'm doing my homework with Mint on Sunday.</em> = the future. The verb is exactly the same! So look for the clues.",
              "Future clues: <em>tonight, tomorrow, this weekend, next week, on Friday, at 7 tomorrow</em>. Now clues: <em>now, right now, at the moment, Look!, Listen!, Shh!</em>",
              "No time word? Usually it's about now: <em>What are you doing?</em> = right now. <em>What are you doing tomorrow?</em> = your plans. This is the P / F (present or future) task on p.103."
            ],
            "table": [
              [
                "Sentence",
                "Now or future?",
                "Clue"
              ],
              [
                "Look! The monkeys are eating bananas.",
                "Now",
                "Look!"
              ],
              [
                "We're eating at Grandma's tonight.",
                "Future",
                "tonight"
              ],
              [
                "Is Tonkla playing football at the moment?",
                "Now",
                "at the moment"
              ],
              [
                "Is Tonkla playing football on Saturday?",
                "Future",
                "on Saturday"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "I'm <strong>watching</strong> a film now. (now)"
              },
              {
                "ok": true,
                "s": "I'm <strong>watching</strong> a film with Ken tonight. (future)"
              },
              {
                "ok": false,
                "s": "I watch a film with Ken tonight.",
                "fix": "I'm watching a film with Ken tonight."
              },
              {
                "ok": false,
                "s": "Listen! The birds sing.",
                "fix": "Listen! The birds are singing."
              }
            ],
            "tip": "Same -ing, different time: find the time word first, then decide — now or later?"
          },
          "items": [
            {
              "id": "g7m6-1",
              "type": "classify",
              "cefr": "A2",
              "stem": "“My cousins are arriving from Chiang Mai tomorrow.” Now or future?",
              "options": [
                "Future — a fixed plan",
                "Now — happening at this moment",
                "Every day — a habit",
                "Past — already finished"
              ],
              "answer": 0,
              "hint": "Find the time word. When does it point to?",
              "why": "<em>Tomorrow</em> shows this present continuous is about the future: a fixed plan. Without a time word, <em>are arriving</em> would usually mean now."
            },
            {
              "id": "g7m6-2",
              "type": "picture",
              "cefr": "A2",
              "stem": "Take an umbrella! Look out of the window — ___ right now.",
              "img": "rain",
              "options": [
                "it rains",
                "it's raining",
                "it raining",
                "it rain"
              ],
              "answer": 1,
              "hint": "Find the time words. Is it a habit, a plan or happening at this moment?",
              "why": "<em>Right now</em> means at this moment, so use the present continuous: <em>it's raining</em>. <em>It rains</em> is for habits, like <em>It rains a lot in August</em>."
            },
            {
              "id": "g7m6-3",
              "type": "odd",
              "cefr": "B1",
              "stem": "Which sentence is about NOW, not the future?",
              "options": [
                "Mint is cooking dinner for us on Friday.",
                "We're having a barbecue next weekend.",
                "Mint is cooking dinner — don't call her.",
                "Dad is picking us up at 4 tomorrow."
              ],
              "answer": 2,
              "hint": "Look for the time words in each sentence.",
              "why": "<em>Mint is cooking dinner — don't call her</em> has no future time word, so it means now. The others have <em>on Friday</em>, <em>next weekend</em> and <em>tomorrow</em>: future plans."
            },
            {
              "id": "g7m6-4",
              "type": "gap",
              "cefr": "A2",
              "stem": "We ___ our cousins at the airport at 6 tomorrow evening. Dad has already booked a taxi.",
              "options": [
                "are meeting",
                "meet",
                "meeting",
                "are meet"
              ],
              "answer": 0,
              "hint": "It's arranged and it has a time. Is every part of the form there?",
              "why": "An arranged plan with a time takes the present continuous: <em>are meeting</em>. <em>We meet</em> isn't used for a personal plan like this, and <em>are meet</em> has no <em>-ing</em>."
            },
            {
              "id": "g7m6-5",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Ken",
                  "text": "Can you help me with my maths homework?"
                },
                {
                  "who": "Beam",
                  "text": "Sorry, not now. ___ my mum in the kitchen at the moment. Maybe later?"
                }
              ],
              "stem": "",
              "options": [
                "I help",
                "I helping",
                "I'm help",
                "I'm helping"
              ],
              "answer": 3,
              "hint": "<em>At the moment</em> is a clue. Now or future?",
              "why": "<em>At the moment</em> means now, so use the present continuous: <em>I'm helping</em>. <em>I help</em> is for habits, and <em>I helping</em> has no <em>am</em>."
            },
            {
              "id": "g7m6-6",
              "type": "meaning",
              "cefr": "B1",
              "stem": "“Are you playing badminton on Saturday?” What is the speaker asking about?",
              "options": [
                "Your plans for this Saturday",
                "What you are doing right now",
                "Your badminton habit every Saturday",
                "What you did last Saturday"
              ],
              "answer": 0,
              "hint": "Find the time phrase. Does it point to now, a habit or something else?",
              "why": "Present continuous + <em>on Saturday</em> = a question about plans. A question about a habit would be <em>Do you play badminton on Saturdays?</em>"
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g7s3ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g7s3ck-1",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Nut",
                "text": "___ you doing anything after school today?"
              },
              {
                "who": "Mint",
                "text": "Yes, I've got a piano lesson at 4."
              }
            ],
            "stem": "",
            "options": [
              "Do",
              "Are",
              "Is",
              "Will"
            ],
            "answer": 1,
            "hint": "This is a Speaking bank question for asking about plans. Which helper starts it?",
            "why": "<em>Are you doing anything…?</em> asks about plans (Speaking bank p.100). <em>Doing</em> needs <em>be</em>, and <em>you</em> takes <em>are</em>."
          },
          {
            "id": "g7s3ck-2",
            "type": "odd",
            "cefr": "A2",
            "stem": "Which sentence is about the future?",
            "options": [
              "Shh! Dad is talking on the phone.",
              "Look! The penguins are swimming.",
              "Why are you laughing?",
              "We're flying to Krabi on Thursday."
            ],
            "answer": 3,
            "hint": "Look for a future time word.",
            "why": "<em>On Thursday</em> makes this present continuous a fixed future plan. The others have no future time word, and <em>Shh!</em> and <em>Look!</em> show now."
          },
          {
            "id": "g7s3ck-3",
            "type": "gap",
            "cefr": "A2",
            "stem": "My cousins ___ to Bangkok next weekend. Mum has already cleaned the spare room.",
            "options": [
              "come",
              "coming",
              "are coming",
              "are come"
            ],
            "answer": 2,
            "hint": "It's arranged and it's next weekend. Check every part of the form.",
            "why": "A fixed plan for next weekend takes the present continuous: <em>are coming</em>. <em>Come</em> doesn't show an arranged plan, and <em>coming</em> needs <em>are</em>."
          },
          {
            "id": "g7s3ck-4",
            "type": "error",
            "cefr": "A2",
            "stem": "[[We having]] a barbecue [[at]] Grandma's house [[on]] [[Sunday]].",
            "options": [
              "We having",
              "at",
              "on",
              "Sunday"
            ],
            "answer": 0,
            "fix": "We're having",
            "hint": "Check the future plan form, part by part.",
            "why": "The present continuous needs <em>be</em>: <em>We're having a barbecue on Sunday.</em> Without <em>are</em>, the verb is not complete."
          },
          {
            "id": "g7s3ck-5",
            "type": "meaning",
            "cefr": "B1",
            "stem": "“Is your sister working tomorrow?” What does the speaker want to know?",
            "options": [
              "If your sister has work plans for tomorrow",
              "If your sister is working at this moment",
              "If your sister works every day",
              "If your sister worked yesterday"
            ],
            "answer": 0,
            "hint": "Look at the time word at the end.",
            "why": "<em>Tomorrow</em> makes this a question about future plans. A question about now would have no future time word, like <em>Is your sister working?</em>"
          },
          {
            "id": "g7s3ck-6",
            "type": "situation",
            "cefr": "B1",
            "context": "Your friend wants to play badminton on Saturday at 3. But you've already said yes to Ken's birthday party at that time.",
            "stem": "What do you say?",
            "options": [
              "Sorry, I can't. I go to Ken's party then.",
              "Sorry, I can't. I'm going to Ken's party then.",
              "Sorry, I can't. I going to Ken's party then.",
              "Sorry, I can't. I will going to Ken's party then."
            ],
            "answer": 1,
            "hint": "The party is a fixed plan with other people. Which form, with every part correct?",
            "why": "An arranged plan takes the present continuous: <em>I'm going to Ken's party</em> (be + going). <em>I go</em> is a common mistake for personal plans, and <em>I going</em> has no <em>am</em>."
          }
        ]
      }
    },
    {
      "id": "g7s4",
      "n": 4,
      "name": "Choosing the future",
      "icon": "🧭",
      "blurb": "Find the clue, pick the form — and keep will out of when and if.",
      "modules": [
        {
          "id": "g7m7",
          "name": "Which future?",
          "page": "pp.94–102",
          "cefr": "B1",
          "extra": false,
          "rule": {
            "key": "Find the clue, then choose: decided before → going to; in the diary → present continuous; opinion → will.",
            "body": [
              "English has no single “future tense”. You choose the form from the <strong>clue</strong> in the situation. Read everything first — the clue is often in another sentence: <em>I've saved my money…</em>, <em>We've got the tickets…</em>, <em>I think…</em>",
              "Plan in your head (<em>I've decided, I've saved</em>) → <em>going to</em>. Fixed arrangement (time + place + other people, tickets) → present continuous. Your opinion (<em>I think, I'm sure, probably</em>) → <em>will</em>.",
              "Sometimes two forms are both fine: <em>I'm meeting Ploy at 5</em> and <em>I'm going to meet Ploy at 5</em> are both correct. That's why every question here gives you a clear clue. The present simple (<em>I meet</em>) is usually wrong for personal plans."
            ],
            "table": [
              [
                "Clue",
                "Form",
                "Example"
              ],
              [
                "I've decided / I've saved / I want to…",
                "going to",
                "I've saved 500 baht. I'm going to buy a new game."
              ],
              [
                "time + place + person / tickets / diary",
                "present continuous",
                "I'm meeting Ken at MBK at 4 tomorrow."
              ],
              [
                "I think / I'm sure / probably / in 2050",
                "will",
                "I think it'll be sunny tomorrow."
              ],
              [
                "Look! (evidence) — Extra",
                "going to",
                "Look at that cloud! It's going to rain."
              ],
              [
                "decision now / offer / promise — Extra",
                "will",
                "The phone's ringing. I'll answer it!"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "We've got the tickets. We're <strong>watching</strong> the match at the stadium on Sunday."
              },
              {
                "ok": true,
                "s": "I'm sure you<strong>'ll love</strong> Chiang Mai."
              },
              {
                "ok": false,
                "s": "What do you do tomorrow evening?",
                "fix": "What are you doing tomorrow evening?"
              },
              {
                "ok": false,
                "s": "The phone's ringing. I answer it.",
                "fix": "The phone's ringing. I'll answer it."
              },
              {
                "ok": false,
                "s": "I think it is raining tomorrow.",
                "fix": "I think it'll rain tomorrow."
              }
            ],
            "extra": "Extra clues from the Extra boxes: something you can see now (<em>Look at the sky!</em>) → <em>going to</em>; a decision, offer or promise made at the moment you speak → <em>will</em>.",
            "tip": "Detective rule: no clue, no answer. Find the clue first, then pick the form."
          },
          "items": [
            {
              "id": "g7m7-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "I'm sure ___ the Unit 7 test next week. You've studied so hard!",
              "options": [
                "you're passing",
                "you pass",
                "you'll pass",
                "you passing"
              ],
              "answer": 2,
              "hint": "What's the clue here: a plan, an arrangement or an opinion?",
              "why": "An opinion about the future (<em>I'm sure</em>) is a prediction: <em>you'll pass</em>. <em>You're passing</em> is for arranged plans — you can't arrange a test result!"
            },
            {
              "id": "g7m7-2",
              "type": "situation",
              "cefr": "A2",
              "context": "You and Nut are on a boat near Koh Samet. It isn't raining yet, but the sky is black and the wind is getting stronger.",
              "stem": "What do you say?",
              "options": [
                "It's raining soon. Let's go back!",
                "It's going to raining. Let's go back!",
                "It going to rain. Let's go back!",
                "It's going to rain. Let's go back!"
              ],
              "answer": 3,
              "hint": "You can see something now that tells you about the future.",
              "why": "You can see the black sky, so you predict from evidence: <em>It's going to rain</em>. <em>It's raining soon</em> is a common mistake — rain can't be arranged."
            },
            {
              "id": "g7m7-3",
              "type": "dialogue",
              "cefr": "B1",
              "lines": [
                {
                  "who": "Ploy",
                  "text": "Do you want to go to the night market on Saturday?"
                },
                {
                  "who": "Mek",
                  "text": "Sorry, I can't. ___ my uncle in Hua Hin this Saturday. Dad booked the train tickets last week."
                }
              ],
              "stem": "",
              "options": [
                "I visit",
                "I'm visit",
                "I'm visiting",
                "I visited"
              ],
              "answer": 2,
              "hint": "The tickets are booked. What kind of future plan is this?",
              "why": "Booked tickets = a fixed arrangement, so use the present continuous: <em>I'm visiting</em>. The present simple <em>I visit</em> is a common mistake for personal plans."
            },
            {
              "id": "g7m7-4",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Tonkla",
                  "text": "The phone's ringing! Can someone answer it? My hands are wet!"
                },
                {
                  "who": "Fah",
                  "text": "OK, ___ it!"
                }
              ],
              "stem": "",
              "options": [
                "I answer",
                "I'm answer",
                "I answering",
                "I'll answer"
              ],
              "answer": 3,
              "hint": "Fah decides at the moment of speaking. Which form fits a decision made now?",
              "why": "Fah decides at this moment, so use <em>will</em>: <em>I'll answer it!</em> The present simple <em>I answer it</em> is a very common mistake here."
            },
            {
              "id": "g7m7-5",
              "type": "classify",
              "cefr": "B1",
              "stem": "“I've saved 2,000 baht. I'm going to buy new football boots.” Which clue explains <em>going to</em>?",
              "options": [
                "An arrangement with a time and place",
                "A plan decided before now",
                "Evidence we can see now",
                "An opinion with <em>I think</em>"
              ],
              "answer": 1,
              "hint": "Read the first sentence again. What has the speaker already done?",
              "why": "Saving the money shows the decision was made before now: a plan or intention, the book's main use of <em>going to</em>."
            },
            {
              "id": "g7m7-6",
              "type": "error",
              "cefr": "A2",
              "stem": "[[What]] [[do you do]] [[after school]] [[tomorrow]]? Do you want to come to my house?",
              "options": [
                "What",
                "do you do",
                "after school",
                "tomorrow"
              ],
              "answer": 1,
              "fix": "are you doing",
              "hint": "The question asks about a plan for one day. Which form asks about plans?",
              "why": "To ask about someone's plans, use the present continuous: <em>What are you doing after school tomorrow?</em> <em>What do you do?</em> asks about habits or jobs."
            }
          ]
        },
        {
          "id": "g7m8",
          "name": "when / if + present",
          "page": "Extra (with pp.98–102)",
          "cefr": "B1",
          "extra": true,
          "rule": {
            "key": "After when, if, before, after and as soon as, use the present simple — even for the future: I'll call you when I arrive.",
            "body": [
              "Look: <em>I'll text you when I <strong>get</strong> home.</em> Getting home is in the future, but we say <em>get</em>, not <em>will get</em>. The <em>will</em> goes in the other half of the sentence.",
              "The same with <em>if</em>: <em>If it <strong>rains</strong> tomorrow, we'll stay at home.</em> (✗ <em>If it will rain…</em>) This is a favourite question in find-the-mistake tests.",
              "Two halves: the <em>when / if</em> half uses the present simple; the main half uses <em>will</em> (or an instruction like <em>Call me!</em>). The halves can swap places. Use a comma when the <em>when / if</em> half comes first."
            ],
            "table": [
              [
                "when / if half (present simple)",
                "main half (will / instruction)"
              ],
              [
                "When I finish my homework,",
                "I'll play games."
              ],
              [
                "If it's sunny on Saturday,",
                "we'll go to the beach."
              ],
              [
                "As soon as the film ends,",
                "I'll call you."
              ],
              [
                "Before you go to bed,",
                "close the window."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "If we <strong>see</strong> a snake, we'll walk away slowly."
              },
              {
                "ok": false,
                "s": "I'll call you when I will arrive.",
                "fix": "I'll call you when I arrive."
              },
              {
                "ok": false,
                "s": "If it will rain, we won't go.",
                "fix": "If it rains, we won't go."
              },
              {
                "ok": false,
                "s": "When she will get home, she'll feed the cat.",
                "fix": "When she gets home, she'll feed the cat."
              },
              {
                "ok": true,
                "s": "Text me as soon as you <strong>get</strong> to the station."
              }
            ],
            "extra": "Extra: the book's Unit 7 rule box doesn't show this rule, but error-finding tests love it. Spot <em>when, if, before, after, as soon as</em> — then check there is no <em>will</em> straight after the subject in that half.",
            "tip": "When and if hate will. Keep will out of their half of the sentence."
          },
          "items": [
            {
              "id": "g7m8-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "I'll text you when I ___ home.",
              "options": [
                "get",
                "will get",
                "got",
                "getting"
              ],
              "answer": 0,
              "hint": "Look at the word before the gap. What's the rule for verbs after it?",
              "why": "After <em>when</em>, use the present simple for the future: <em>when I get home</em>. <em>When I will get</em> is a very common mistake in tests."
            },
            {
              "id": "g7m8-2",
              "type": "error",
              "cefr": "A2",
              "stem": "We [[won't go]] to the zoo [[if]] it [[will rain]] [[tomorrow]].",
              "options": [
                "won't go",
                "if",
                "will rain",
                "tomorrow"
              ],
              "answer": 2,
              "fix": "rains",
              "hint": "Remember the rule for <em>if</em> and <em>when</em> sentences about the future.",
              "why": "After <em>if</em>, use the present simple for the future: <em>if it rains tomorrow</em>. The <em>will</em> stays in the other half: <em>We won't go</em>."
            },
            {
              "id": "g7m8-3",
              "type": "error",
              "cefr": "B1",
              "stem": "My mum [[will be]] [[very]] happy [[when]] she [[will see]] my test score.",
              "options": [
                "will be",
                "very",
                "when",
                "will see"
              ],
              "answer": 3,
              "fix": "sees",
              "hint": "Which half of the sentence can have <em>will</em>, and which can't?",
              "why": "<em>Will</em> goes in the main half (<em>My mum will be happy</em>), but after <em>when</em> we use the present simple: <em>when she sees</em>."
            },
            {
              "id": "g7m8-4",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which sentence is correct?",
              "options": [
                "If it will be sunny on Sunday, we'll go to the beach.",
                "If it sunny on Sunday, we'll go to the beach.",
                "If it's sunny on Sunday, we'll to go to the beach.",
                "If it's sunny on Sunday, we'll go to the beach."
              ],
              "answer": 3,
              "hint": "Check the <em>if</em> half first, then the main half.",
              "why": "<em>If</em> + present simple (<em>it's sunny</em>), then <em>will</em> + base verb (<em>we'll go</em>). <em>If it will be</em> puts <em>will</em> in the wrong half."
            },
            {
              "id": "g7m8-5",
              "type": "dialogue",
              "cefr": "B1",
              "lines": [
                {
                  "who": "Dad",
                  "text": "Don't forget to call me."
                },
                {
                  "who": "Mint",
                  "text": "OK, Dad. I'll call you as soon as the bus ___ in Hua Hin."
                }
              ],
              "stem": "",
              "options": [
                "arrives",
                "will arrive",
                "arrive",
                "is arrive"
              ],
              "answer": 0,
              "hint": "<em>As soon as</em> works like <em>when</em>. What's the rule after it?",
              "why": "After <em>as soon as</em> (like <em>when</em>), use the present simple for the future: <em>the bus arrives</em>. <em>Will arrive</em> is wrong here, and after <em>the bus</em> the verb needs <em>-s</em>."
            },
            {
              "id": "g7m8-6",
              "type": "picture",
              "cefr": "A2",
              "stem": "If you ___ one of these in the sea, don't touch it!",
              "img": "jellyfish",
              "options": [
                "will see",
                "see",
                "saw",
                "seeing"
              ],
              "answer": 1,
              "hint": "Remember the rule for verbs after <em>if</em> when we talk about the future.",
              "why": "After <em>if</em>, use the present simple: <em>If you see one…</em> Then comes an instruction: <em>don't touch it!</em> <em>If you will see</em> is a common mistake."
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g7s4ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g7s4ck-1",
            "type": "picture",
            "cefr": "A2",
            "stem": "I don't think ___ tomorrow. The app says it'll be cloudy but dry.",
            "img": "cloudy",
            "options": [
              "it's raining",
              "it rains",
              "it'll rain",
              "it raining"
            ],
            "answer": 2,
            "hint": "<em>I don't think</em> gives an opinion about tomorrow. Which form predicts?",
            "why": "An opinion about the future takes <em>will</em>: <em>I don't think it'll rain</em>. The present continuous is for arranged plans — nobody arranges rain!"
          },
          {
            "id": "g7s4ck-2",
            "type": "error",
            "cefr": "B1",
            "stem": "[[Ploy]] will bring [[her guitar]] [[to the party]] if she [[will come]].",
            "options": [
              "Ploy",
              "her guitar",
              "to the party",
              "will come"
            ],
            "answer": 3,
            "fix": "comes",
            "hint": "Remember the rule for verbs after <em>if</em> about the future.",
            "why": "After <em>if</em>, use the present simple for the future: <em>if she comes</em>. <em>Will</em> stays in the main half: <em>Ploy will bring her guitar</em>."
          },
          {
            "id": "g7s4ck-3",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Dad",
                "text": "Oh no, it's started raining, and the washing is still outside!"
              },
              {
                "who": "Fah",
                "text": "Don't worry, Dad. ___ it in."
              }
            ],
            "stem": "",
            "options": [
              "I bring",
              "I'm bring",
              "I'll bring",
              "I will bringing"
            ],
            "answer": 2,
            "hint": "Fah decides to help at this moment. Which form fits?",
            "why": "A decision made at the moment of speaking takes <em>will</em>: <em>I'll bring it in.</em> <em>I bring it in</em> is the common present-simple mistake."
          },
          {
            "id": "g7s4ck-4",
            "type": "situation",
            "cefr": "B1",
            "context": "Mek and his friends have booked a table at a hotpot restaurant for 7 pm on Friday.",
            "stem": "What does Mek tell his mum?",
            "options": [
              "We have dinner at the hotpot place at 7 on Friday.",
              "We're having dinner at the hotpot place at 7 on Friday.",
              "We having dinner at the hotpot place at 7 on Friday.",
              "We are have dinner at the hotpot place at 7 on Friday."
            ],
            "answer": 1,
            "hint": "The table is booked. What kind of plan is it?",
            "why": "A booked table = a fixed arrangement: <em>We're having dinner…</em> The present simple <em>We have dinner</em> sounds like a routine, not this Friday's plan."
          },
          {
            "id": "g7s4ck-5",
            "type": "choose",
            "cefr": "A2",
            "stem": "Which sentence is correct?",
            "options": [
              "I'll tell you when I know the answer.",
              "I'll tell you when I will know the answer.",
              "I tell you when I will know the answer.",
              "I'll tell you when I knowing the answer."
            ],
            "answer": 0,
            "hint": "Check both halves: the main half and the <em>when</em> half.",
            "why": "<em>Will</em> goes in the main half (<em>I'll tell you</em>); the <em>when</em> half uses the present simple (<em>when I know</em>)."
          },
          {
            "id": "g7s4ck-6",
            "type": "classify",
            "cefr": "B1",
            "stem": "“Oh, you haven't got a pen? I'll lend you mine.” Why does the speaker use <em>will</em>?",
            "options": [
              "A plan made last week",
              "Evidence we can see now",
              "A fixed arrangement",
              "An offer made at this moment"
            ],
            "answer": 3,
            "hint": "When did the speaker find out about the pen?",
            "why": "The speaker learns about the problem now and offers help at once: an offer, so <em>I'll lend</em>. It wasn't planned before."
          }
        ]
      }
    },
    {
      "id": "g7s5",
      "n": 5,
      "name": "Word order",
      "icon": "🧩",
      "blurb": "Put every word in its place: the five Writing bank rules from p.101.",
      "modules": [
        {
          "id": "g7m9",
          "name": "Statements and questions",
          "page": "p.101",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Statements: subject + verb + object. Questions: the helper verb (is, do, will…) jumps in front of the subject.",
            "body": [
              "An English sentence is like a train with a fixed order: <strong>who</strong> (subject) → <strong>does what</strong> (verb) → <strong>to what or whom</strong> (object). <em>Tonkla kicked the ball.</em> Change the order and you change the meaning: <em>The ball kicked Tonkla!</em>",
              "So the object goes after the verb: ✓ <em>You didn't see me.</em> ✗ <em>Me you didn't see.</em> (Writing bank rule a)",
              "In questions, the auxiliary (helper) verb goes before the subject: <em>am / is / are, do / does / did, will, can</em>. <em>Where <strong>is</strong> the class meeting?</em> (✗ <em>Where the class is meeting?</em>) <em>What time <strong>does</strong> the film start?</em> (rule b)"
            ],
            "table": [
              [
                "Question word",
                "Helper",
                "Subject",
                "Verb …"
              ],
              [
                "Where",
                "is",
                "the class",
                "meeting?"
              ],
              [
                "What",
                "are",
                "you",
                "going to do?"
              ],
              [
                "When",
                "will",
                "the bus",
                "arrive?"
              ],
              [
                "—",
                "Did",
                "you",
                "see the whale?"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "My little brother <strong>loves</strong> snakes."
              },
              {
                "ok": false,
                "s": "Me you didn't see at school.",
                "fix": "You didn't see me at school."
              },
              {
                "ok": false,
                "s": "Where the class is meeting?",
                "fix": "Where is the class meeting?"
              },
              {
                "ok": false,
                "s": "What time the film starts?",
                "fix": "What time does the film start?"
              },
              {
                "ok": true,
                "s": "How <strong>are we</strong> travelling to the museum?"
              }
            ],
            "tip": "Statement: S + V + O. Question: jump the helper verb to the front of the subject."
          },
          "items": [
            {
              "id": "g7m9-1",
              "type": "error",
              "cefr": "A2",
              "stem": "Tonkla [[his phone dropped]] [[in]] the river, [[so]] [[he]] was very sad.",
              "options": [
                "his phone dropped",
                "in",
                "so",
                "he"
              ],
              "answer": 0,
              "fix": "dropped his phone",
              "hint": "Remember the basic order of an English statement (Writing bank rule a).",
              "why": "The basic order is subject + verb + object: <em>Tonkla dropped his phone</em>. The object (<em>his phone</em>) goes after the verb, not before it."
            },
            {
              "id": "g7m9-2",
              "type": "error",
              "cefr": "A2",
              "stem": "[[What time]] [[the museum opens]] [[on]] [[Saturdays]]?",
              "options": [
                "What time",
                "the museum opens",
                "on",
                "Saturdays"
              ],
              "answer": 1,
              "fix": "does the museum open",
              "hint": "Is this a statement or a question? Where does the helper verb go?",
              "why": "In questions the auxiliary goes before the subject: <em>What time does the museum open?</em> Present simple questions need <em>does</em>, and then <em>open</em> has no <em>-s</em>."
            },
            {
              "id": "g7m9-3",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which question is correct?",
              "options": [
                "Where you are going on Saturday?",
                "Where are you going on Saturday?",
                "Where are going you on Saturday?",
                "Where do you going on Saturday?"
              ],
              "answer": 1,
              "hint": "In questions, what comes right before the subject?",
              "why": "Question word + helper + subject + verb: <em>Where are you going?</em> <em>Where you are going?</em> keeps the statement order, which is wrong in a question."
            },
            {
              "id": "g7m9-4",
              "type": "gap",
              "cefr": "A2",
              "stem": "___ Fah and Ploy coming to the party tonight?",
              "options": [
                "Do",
                "Is",
                "Will",
                "Are"
              ],
              "answer": 3,
              "hint": "Look at the subject and the verb form. Which helper fits both?",
              "why": "<em>Coming</em> needs a form of <em>be</em>, and <em>Fah and Ploy</em> is plural: <em>Are Fah and Ploy coming?</em> <em>Is</em> is for one person; <em>do</em> and <em>will</em> can't go straight before <em>coming</em>."
            },
            {
              "id": "g7m9-5",
              "type": "dialogue",
              "cefr": "B1",
              "lines": [
                {
                  "who": "Ken",
                  "text": "I'm going to the Night Safari in Chiang Mai tonight."
                },
                {
                  "who": "Anna",
                  "text": "Cool! How ___ there?"
                }
              ],
              "stem": "",
              "options": [
                "are you getting",
                "you are getting",
                "you get",
                "do you getting"
              ],
              "answer": 0,
              "hint": "Questions need the helper verb in a special place. Where?",
              "why": "In questions the helper comes before the subject: <em>How are you getting there?</em> <em>How you are getting</em> keeps statement order; <em>do you getting</em> mixes <em>do</em> and <em>-ing</em>."
            },
            {
              "id": "g7m9-6",
              "type": "odd",
              "cefr": "B1",
              "stem": "Which sentence has the WRONG word order?",
              "options": [
                "Ploy sent me a photo of the eagle.",
                "Did you see the monkeys in the big tree?",
                "Nut the photos showed to his friends.",
                "The tiger is sleeping under the tree."
              ],
              "answer": 2,
              "hint": "Check each one: subject, verb, object in that order? In questions, helper first?",
              "why": "<em>Nut the photos showed</em> puts the object before the verb. Correct: <em>Nut showed the photos to his friends.</em> The other three follow the rules."
            }
          ]
        },
        {
          "id": "g7m10",
          "name": "Adjectives and frequency adverbs",
          "page": "p.101",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Adjective before the noun: a dangerous snake. Frequency adverb after be (I'm never late) but before other verbs (I always walk).",
            "body": [
              "Adjectives go <strong>before</strong> nouns: <em>a <strong>huge</strong> waterfall, the <strong>important</strong> things</em>. In Thai the describing word usually comes after the noun, so this is an easy mistake to make (rule c).",
              "Frequency adverbs (<em>always, usually, often, sometimes, never</em>) go <strong>after</strong> the verb <em>be</em>: <em>I am <strong>never</strong> sure. She's <strong>always</strong> happy.</em> (rule d)",
              "But they go <strong>before</strong> the main verb: <em>I <strong>always</strong> miss the bus. We <strong>usually</strong> go to Hua Hin in April.</em> (rule e) ✗ <em>Always I miss…</em> ✗ <em>I miss always…</em>"
            ],
            "table": [
              [
                "Rule",
                "✓",
                "✗"
              ],
              [
                "adjective + noun",
                "a dangerous snake",
                "a snake dangerous"
              ],
              [
                "be + adverb",
                "He is never late.",
                "He never is late."
              ],
              [
                "adverb + main verb",
                "He always walks to school.",
                "He walks always to school."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "There's a <strong>beautiful</strong> lake near my grandma's house."
              },
              {
                "ok": false,
                "s": "We saw a snake very long.",
                "fix": "We saw a very long snake."
              },
              {
                "ok": false,
                "s": "I never am late for school.",
                "fix": "I am never late for school."
              },
              {
                "ok": false,
                "s": "Always Ken forgets his homework.",
                "fix": "Ken always forgets his homework."
              },
              {
                "ok": true,
                "s": "It's <strong>usually</strong> very hot in Bangkok in April."
              }
            ],
            "tip": "Be? Adverb after. Other verb? Adverb before. Describing word? Before its noun."
          },
          "items": [
            {
              "id": "g7m10-1",
              "type": "error",
              "cefr": "A2",
              "stem": "[[Last weekend]] we [[visited]] [[a waterfall beautiful]] [[in]] Kanchanaburi.",
              "options": [
                "Last weekend",
                "visited",
                "a waterfall beautiful",
                "in"
              ],
              "answer": 2,
              "fix": "a beautiful waterfall",
              "hint": "Remember: English and Thai put describing words in different places.",
              "why": "Adjectives go before nouns in English: <em>a beautiful waterfall</em>. Putting the adjective after the noun is a very common mistake."
            },
            {
              "id": "g7m10-2",
              "type": "gap",
              "cefr": "A2",
              "stem": "My brother ___ late for school. He gets up at 5 every morning!",
              "options": [
                "never is",
                "never",
                "never be",
                "is never"
              ],
              "answer": 3,
              "hint": "Does this sentence need <em>be</em> or another verb? Where does <em>never</em> go then?",
              "why": "With the verb <em>be</em>, the frequency adverb goes after it: <em>is never late</em>. <em>Never is</em> is the wrong order, and <em>never late</em> has no verb."
            },
            {
              "id": "g7m10-3",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Sam",
                  "text": "How does Ploy get to school?"
                },
                {
                  "who": "Mint",
                  "text": "She ___ — she lives very near."
                }
              ],
              "stem": "",
              "options": [
                "always walks",
                "walks always",
                "always walk",
                "is always walk"
              ],
              "answer": 0,
              "hint": "<em>Walk</em> is a main verb, not <em>be</em>. Where do frequency adverbs go?",
              "why": "Frequency adverbs go before the main verb: <em>She always walks</em>. Not after it (<em>walks always</em>), and <em>she</em> needs <em>-s</em>."
            },
            {
              "id": "g7m10-4",
              "type": "choose",
              "cefr": "B1",
              "stem": "Which sentence is correct?",
              "options": [
                "Ken never is hungry in the morning.",
                "Ken is never hungry in the morning.",
                "Never Ken is hungry in the morning.",
                "Ken is hungry never in the morning."
              ],
              "answer": 1,
              "hint": "Find the verb <em>be</em>. Where does <em>never</em> sit with it?",
              "why": "<em>Never</em> goes after <em>be</em>: <em>Ken is never hungry</em>. <em>Never is</em> is the same mistake as the book's <em>I never am sure</em>."
            },
            {
              "id": "g7m10-5",
              "type": "odd",
              "cefr": "A2",
              "stem": "Which phrase has the WRONG word order?",
              "options": [
                "a tiny bee",
                "the dangerous shark",
                "a lizard green",
                "an angry hippo"
              ],
              "answer": 2,
              "hint": "In each phrase, find the noun. Is the adjective in the right place?",
              "why": "Adjectives go before nouns: <em>a green lizard</em>. The other three are correct: <em>a tiny bee, the dangerous shark, an angry hippo</em>."
            },
            {
              "id": "g7m10-6",
              "type": "picture",
              "cefr": "B1",
              "stem": "There's a small lizard in our kitchen. It ___ on the wall near the lamp at night.",
              "img": "lizard",
              "options": [
                "sits always",
                "is always sit",
                "always sits",
                "always sit"
              ],
              "answer": 2,
              "hint": "Is the verb here <em>be</em> or a main verb? That decides where <em>always</em> goes.",
              "why": "<em>Sit</em> is a main verb, so <em>always</em> goes before it: <em>It always sits</em>. <em>It</em> needs <em>-s</em>, and <em>is always sit</em> mixes up <em>be</em> and the main verb."
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g7s5ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g7s5ck-1",
            "type": "error",
            "cefr": "A2",
            "stem": "[[Always]] [[my grandpa]] [[reads]] the newspaper [[in the garden]].",
            "options": [
              "Always",
              "my grandpa",
              "reads",
              "in the garden"
            ],
            "answer": 0,
            "fix": "My grandpa always reads",
            "hint": "Remember the Writing bank rules about frequency adverbs.",
            "why": "Frequency adverbs go before the main verb: <em>My grandpa always reads…</em> <em>Always</em> can't start the sentence like this."
          },
          {
            "id": "g7s5ck-2",
            "type": "error",
            "cefr": "B1",
            "stem": "[[How]] [[we are]] [[travelling]] to the zoo [[tomorrow]]?",
            "options": [
              "How",
              "we are",
              "travelling",
              "tomorrow"
            ],
            "answer": 1,
            "fix": "are we",
            "hint": "Is this a statement or a question? Check the order.",
            "why": "In questions the helper goes before the subject: <em>How are we travelling to the zoo?</em> <em>We are</em> is statement order."
          },
          {
            "id": "g7s5ck-3",
            "type": "gap",
            "cefr": "A2",
            "stem": "At the zoo, we saw ___ in the water.",
            "options": [
              "a huge hippo",
              "a hippo huge",
              "huge a hippo",
              "a hippo is huge"
            ],
            "answer": 0,
            "hint": "Where does the describing word go in English?",
            "why": "Adjectives go before nouns: <em>a huge hippo</em>. <em>A hippo huge</em> puts the adjective after the noun — a very common mistake."
          },
          {
            "id": "g7s5ck-4",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Anna",
                "text": "Do you eat breakfast at home?"
              },
              {
                "who": "Ken",
                "text": "No, I ___ eat at the school canteen."
              }
            ],
            "stem": "",
            "options": [
              "am usually",
              "usually",
              "usually am",
              "usual"
            ],
            "answer": 1,
            "hint": "<em>Eat</em> is a main verb. Do you need <em>be</em> here?",
            "why": "With a main verb, the frequency adverb goes before it, and we don't need <em>be</em>: <em>I usually eat</em>. <em>Usual</em> is an adjective, not an adverb."
          },
          {
            "id": "g7s5ck-5",
            "type": "choose",
            "cefr": "B1",
            "stem": "Which question is correct?",
            "options": [
              "Does often your brother play games at night?",
              "Your brother does often play games at night?",
              "Does your brother play often games at night?",
              "Does your brother often play games at night?"
            ],
            "answer": 3,
            "hint": "Check the place of <em>does</em> and the place of <em>often</em>.",
            "why": "Question: <em>Does</em> + subject first. Then <em>often</em> goes before the main verb: <em>Does your brother often play…?</em> Never between the verb and its object."
          },
          {
            "id": "g7s5ck-6",
            "type": "odd",
            "cefr": "A2",
            "stem": "Which sentence has the WRONG word order?",
            "options": [
              "There's a tall tree next to our house.",
              "My cat is always hungry.",
              "Can you see the yellow butterfly?",
              "Always we go to Hua Hin in April."
            ],
            "answer": 3,
            "hint": "Check the adjectives, adverbs and questions in each sentence.",
            "why": "<em>Always</em> goes before the main verb: <em>We always go to Hua Hin in April.</em> The other sentences follow the Writing bank rules."
          }
        ]
      }
    },
    {
      "id": "g7s6",
      "n": 6,
      "name": "Making plans",
      "icon": "🗺️",
      "blurb": "Suggest, accept, say no politely and fix the day, time and place.",
      "modules": [
        {
          "id": "g7m11",
          "name": "Suggestions",
          "page": "p.100",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Let's go! / Shall we go? / Why don't we go? / We could go — all + base verb. But What about + -ing: What about going?",
            "body": [
              "Five ways to suggest an idea (Speaking bank p.100). Four of them take the base verb: <em>Let's <strong>go</strong></em>, <em>Shall we <strong>go</strong>?</em>, <em>Why don't we <strong>go</strong>?</em>, <em>We could <strong>go</strong></em>.",
              "<em>What about</em> is different: it takes a noun or a verb + <em>-ing</em>: <em>What about <strong>the zoo</strong>?</em> <em>What about <strong>going</strong> to the zoo?</em> (✗ <em>What about go…?</em>)",
              "Watch the small words: no <em>to</em> after <em>Let's</em> (✗ <em>Let's to go</em>). <em>Shall we…?</em> and <em>Why don't we…?</em> are questions — keep the question order: ✗ <em>Why we don't go?</em>"
            ],
            "table": [
              [
                "Expression",
                "+",
                "Example"
              ],
              [
                "Let's",
                "base verb",
                "Let's go swimming."
              ],
              [
                "Shall we",
                "base verb + ?",
                "Shall we meet at 2?"
              ],
              [
                "Why don't we / you",
                "base verb + ?",
                "Why don't we take the BTS?"
              ],
              [
                "We could",
                "base verb",
                "We could have a picnic."
              ],
              [
                "What about",
                "noun or verb-ing + ?",
                "What about playing badminton?"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "<strong>Why don't we go</strong> to the night market on Friday?"
              },
              {
                "ok": false,
                "s": "What about go to the beach?",
                "fix": "What about going to the beach?"
              },
              {
                "ok": false,
                "s": "Let's to meet at 5.",
                "fix": "Let's meet at 5."
              },
              {
                "ok": false,
                "s": "Why don't we going bowling?",
                "fix": "Why don't we go bowling?"
              },
              {
                "ok": true,
                "s": "<strong>We could watch</strong> a film at my house."
              }
            ],
            "tip": "Only What about wants -ing. The other four want the plain verb."
          },
          "items": [
            {
              "id": "g7m11-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "It's so hot today! Let's ___ swimming at the pool.",
              "options": [
                "go",
                "to go",
                "going",
                "goes"
              ],
              "answer": 0,
              "hint": "What form of the verb follows <em>Let's</em>?",
              "why": "<em>Let's</em> + base verb: <em>Let's go swimming.</em> No <em>to</em> and no <em>-ing</em> after <em>Let's</em>."
            },
            {
              "id": "g7m11-2",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Fah",
                  "text": "I'm bored. What can we do this afternoon?"
                },
                {
                  "who": "Ken",
                  "text": "What about ___ the new trampoline park? It's near my house."
                }
              ],
              "stem": "",
              "options": [
                "try",
                "trying",
                "to try",
                "tried"
              ],
              "answer": 1,
              "hint": "<em>What about</em> is different from the other suggestion phrases. What follows it?",
              "why": "<em>What about</em> + verb-<em>ing</em> (or a noun): <em>What about trying…?</em> The others — <em>Let's, Shall we, Why don't we, We could</em> — take the base verb."
            },
            {
              "id": "g7m11-3",
              "type": "error",
              "cefr": "B1",
              "stem": "Why don't we [[going]] to Lumphini Park [[on]] Sunday? [[It's]] [[lovely]] in the morning.",
              "options": [
                "going",
                "on",
                "It's",
                "lovely"
              ],
              "answer": 0,
              "fix": "go",
              "hint": "Check the verb form in the suggestion carefully.",
              "why": "<em>Why don't we</em> + base verb: <em>Why don't we go…?</em> Only <em>What about</em> takes <em>-ing</em>."
            },
            {
              "id": "g7m11-4",
              "type": "situation",
              "cefr": "A2",
              "context": "It's Saturday morning. You and your friend Nut are both free. You want to suggest a bike ride.",
              "stem": "What do you say?",
              "options": [
                "Shall we going for a bike ride?",
                "Shall we to go for a bike ride?",
                "Shall we go for a bike ride?",
                "We shall going for a bike ride?"
              ],
              "answer": 2,
              "hint": "<em>Shall we</em> works like most Speaking bank suggestions. What verb form follows it?",
              "why": "<em>Shall we</em> + base verb + question mark: <em>Shall we go for a bike ride?</em> No <em>to</em> and no <em>-ing</em>."
            },
            {
              "id": "g7m11-5",
              "type": "odd",
              "cefr": "B1",
              "stem": "Which suggestion is NOT correct?",
              "options": [
                "We could have a picnic by the lake.",
                "Let's having a picnic by the lake.",
                "Why don't we have a picnic by the lake?",
                "What about having a picnic by the lake?"
              ],
              "answer": 1,
              "hint": "Check the verb form after each suggestion phrase.",
              "why": "<em>Let's</em> takes the base verb: <em>Let's have a picnic.</em> The <em>-ing</em> form only follows <em>What about</em>, so the other three are correct."
            },
            {
              "id": "g7m11-6",
              "type": "choose",
              "cefr": "B1",
              "stem": "Mia wants to suggest a boat trip to her brother. Which sentence is correct?",
              "options": [
                "Why we don't take a boat to the island?",
                "Why don't we to take a boat to the island?",
                "Why don't we took a boat to the island?",
                "Why don't we take a boat to the island?"
              ],
              "answer": 3,
              "hint": "Two things to check: the word order and the verb form.",
              "why": "<em>Why don't we</em> + base verb: <em>Why don't we take…?</em> <em>Why we don't</em> has statement order, so it doesn't work as a suggestion."
            }
          ]
        },
        {
          "id": "g7m12",
          "name": "Accepting, rejecting and arranging",
          "page": "pp.100–101",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Say yes, or say no politely, then fix the day, time and place: Sorry, I'm busy on Saturday. Are you free on Sunday?",
            "body": [
              "Accepting (Speaking bank p.100): <em>Yes, sure. / That's fine. / OK. / Great. / Good idea.</em> Rejecting politely: <em>Sorry, I can't. / Sorry, I'm busy. / Thanks, but…</em> — <em>Thanks, but…</em> sounds friendly, but it means no!",
              "Give a reason with the present continuous: <em>Sorry, I can't. I'm visiting my grandma on Saturday.</em> Then suggest another time: <em>Are you free on Sunday?</em>",
              "Fix the details: <em>Let's meet <strong>at</strong> 2 pm <strong>at</strong> the bowling alley.</em> Use <em>on</em> + day (<em>on Friday</em>) and <em>at</em> + time (<em>at 3</em>).",
              "In a short message (p.101), answer every point in the task — where, when and how you'll travel. A missing point loses marks."
            ],
            "table": [
              [
                "Job",
                "Useful expressions"
              ],
              [
                "Ask about plans",
                "Are you free on…? · Are you doing anything at…? · Do you want to…? · How about you?"
              ],
              [
                "Accept",
                "Yes, sure. · That's fine. · OK. · Great. · Good idea."
              ],
              [
                "Reject",
                "Sorry, I can't. · Sorry, I'm busy. · Thanks, but…"
              ],
              [
                "Arrange",
                "Let's meet at 4 at… · See you then!"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "<strong>Thanks, but</strong> I don't really like horror films. What about a comedy?"
              },
              {
                "ok": false,
                "s": "Are you free in Sunday?",
                "fix": "Are you free on Sunday?"
              },
              {
                "ok": false,
                "s": "Sorry, I'm busy. I visit my aunt on Saturday.",
                "fix": "Sorry, I'm busy. I'm visiting my aunt on Saturday."
              },
              {
                "ok": false,
                "s": "Do you want go to the cinema?",
                "fix": "Do you want to go to the cinema?"
              },
              {
                "ok": true,
                "s": "<strong>Good idea!</strong> Let's meet at 3 at the BTS station."
              }
            ],
            "tip": "Polite no = Sorry + reason + new idea: Sorry, I'm busy on Friday. Are you free on Saturday?"
          },
          "items": [
            {
              "id": "g7m12-1",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Ploy",
                  "text": "Shall we go to the aquarium on Saturday?"
                },
                {
                  "who": "Jay",
                  "text": "Sorry, I ___. I'm playing in a football match on Saturday."
                }
              ],
              "stem": "",
              "options": [
                "can't",
                "don't",
                "won't can",
                "not can"
              ],
              "answer": 0,
              "hint": "Jay is saying no politely. Which Speaking bank phrase is it?",
              "why": "<em>Sorry, I can't.</em> rejects a suggestion politely (Speaking bank p.100). <em>Won't can</em> and <em>not can</em> are not English, and <em>I don't</em> doesn't answer <em>Shall we…?</em>"
            },
            {
              "id": "g7m12-2",
              "type": "gap",
              "cefr": "A2",
              "stem": "Are you free ___ Friday afternoon? We could go to the cinema.",
              "options": [
                "in",
                "at",
                "on",
                "to"
              ],
              "answer": 2,
              "hint": "Think of days of the week. Which little word goes before them?",
              "why": "We use <em>on</em> with days: <em>on Friday</em>, <em>on Friday afternoon</em>. <em>In</em> is for <em>in the afternoon</em> alone, and <em>at</em> is for times like <em>at 3 pm</em>."
            },
            {
              "id": "g7m12-3",
              "type": "situation",
              "cefr": "A2",
              "context": "Mint says, “Let's go to the night market tonight!” You love night markets, and you're free tonight.",
              "stem": "What do you say?",
              "options": [
                "Thanks, but I'm busy tonight.",
                "Sorry, I can't go tonight.",
                "Sorry, I'm visiting Grandma tonight.",
                "Good idea! What time shall we meet?"
              ],
              "answer": 3,
              "hint": "Read the situation again. Which reply matches how you feel and what you're doing tonight?",
              "why": "You're free and you love night markets, so accept: <em>Good idea!</em> <em>Thanks, but…</em> sounds friendly, but it's a way to say no."
            },
            {
              "id": "g7m12-4",
              "type": "error",
              "cefr": "B1",
              "stem": "[[Sorry]], I can't come on Saturday. [[I visit]] my aunt in Nonthaburi [[that day]]. [[Are you free]] on Sunday?",
              "options": [
                "Sorry",
                "I visit",
                "that day",
                "Are you free"
              ],
              "answer": 1,
              "fix": "I'm visiting",
              "hint": "Give your reason with the right future form. Check each part.",
              "why": "A fixed plan for Saturday takes the present continuous: <em>I'm visiting my aunt</em>. The present simple <em>I visit</em> sounds like a habit, not a plan."
            },
            {
              "id": "g7m12-5",
              "type": "choose",
              "cefr": "B1",
              "context": "Task: Write to your friend Sam. Invite him to the trampoline park on Sunday. Say what time and where you'll meet. Say how you'll travel there.",
              "stem": "Which message includes ALL the information?",
              "options": [
                "Hi Sam! Do you want to come to the trampoline park on Sunday? Let's meet at 2 outside the library. We can take the bus from there.",
                "Hi Sam! Do you want to come to the trampoline park on Sunday? Let's meet at 2 outside the library. It's going to be really, really fun!",
                "Hi Sam! Do you want to come to the trampoline park on Sunday? We can take the bus. It's going to be really, really fun!",
                "Hi Sam! The trampoline park is great. Let's meet at 2 outside the library. We can take the bus from there. See you!"
              ],
              "answer": 0,
              "hint": "Make a checklist: invite, Sunday, time, place, travel. Tick each message.",
              "why": "Only this message invites Sam for Sunday, gives the time and place (2, outside the library) and says how you'll travel (bus). A missing task point loses marks."
            },
            {
              "id": "g7m12-6",
              "type": "meaning",
              "cefr": "A2",
              "stem": "“Thanks, but I don't really like bowling.” What does the speaker mean?",
              "options": [
                "Yes, I'd love to go bowling.",
                "No, I don't want to go bowling.",
                "I'm busy, but I like bowling.",
                "Maybe — I'm not sure. Ask me again later."
              ],
              "answer": 1,
              "hint": "Find this phrase in the Speaking bank on p.100. Which list is it in?",
              "why": "<em>Thanks, but…</em> is a polite way to reject a suggestion. The speaker is saying no and giving a reason: they don't like bowling."
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g7s6ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g7s6ck-1",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Pim",
                "text": "I'm free on Sunday. ___ go to the science museum?"
              },
              {
                "who": "Tonkla",
                "text": "Good idea! Let's meet at 10."
              }
            ],
            "stem": "",
            "options": [
              "Why we don't",
              "What about",
              "Shall we",
              "Do we shall"
            ],
            "answer": 2,
            "hint": "Which Speaking bank question fits before the verb <em>go</em>?",
            "why": "<em>Shall we</em> + base verb: <em>Shall we go…?</em> <em>What about</em> needs <em>going</em>, and <em>Why we don't</em> has the wrong word order."
          },
          {
            "id": "g7s6ck-2",
            "type": "gap",
            "cefr": "A2",
            "stem": "Why don't we ___ a picnic at the lake on Saturday?",
            "options": [
              "to have",
              "having",
              "have",
              "had"
            ],
            "answer": 2,
            "hint": "What verb form follows <em>Why don't we</em>?",
            "why": "<em>Why don't we</em> + base verb: <em>Why don't we have a picnic?</em> No <em>to</em>, no <em>-ing</em>, no past form."
          },
          {
            "id": "g7s6ck-3",
            "type": "situation",
            "cefr": "B1",
            "context": "Ploy invites you to see a horror film on Friday. You don't like horror films, but you want to be polite.",
            "stem": "What do you say?",
            "options": [
              "Thanks, but I don't really like horror films.",
              "Yes, sure. I don't really like horror films.",
              "That's fine. I don't really like horror films.",
              "Good idea. I don't really like horror films."
            ],
            "answer": 0,
            "hint": "Your reason is a reason for saying no. Does your opening phrase match it?",
            "why": "<em>Thanks, but…</em> rejects politely and gives a reason. <em>Yes, sure</em>, <em>That's fine</em> and <em>Good idea</em> all accept, so they don't match the reason."
          },
          {
            "id": "g7s6ck-4",
            "type": "error",
            "cefr": "B1",
            "stem": "[[It's]] a lovely evening. [[What about]] [[go]] [[to]] the night market?",
            "options": [
              "It's",
              "What about",
              "go",
              "to"
            ],
            "answer": 2,
            "fix": "going",
            "hint": "Check the verb form after the suggestion phrase.",
            "why": "<em>What about</em> + verb-<em>ing</em>: <em>What about going to the night market?</em> The base verb follows <em>Let's, Shall we, Why don't we</em> and <em>We could</em>."
          },
          {
            "id": "g7s6ck-5",
            "type": "meaning",
            "cefr": "A2",
            "stem": "“Sorry, I'm busy on Saturday. Are you free on Sunday?” What does the speaker want?",
            "options": [
              "To meet on Saturday, not Sunday",
              "To stay at home all weekend",
              "To meet on both days",
              "To meet on Sunday, not Saturday"
            ],
            "answer": 3,
            "hint": "Find the rejecting phrase, then the question that follows it.",
            "why": "<em>Sorry, I'm busy</em> rejects Saturday; <em>Are you free on Sunday?</em> offers a new day. A polite no plus a new idea."
          },
          {
            "id": "g7s6ck-6",
            "type": "choose",
            "cefr": "B1",
            "context": "Leo asks: “Where shall we meet? What time? How are we getting to the zoo?”",
            "stem": "Which reply answers ALL his questions?",
            "options": [
              "Let's meet at the school gate. My mum is driving us to the zoo.",
              "Let's meet at 9 at the school gate. My mum is driving us to the zoo.",
              "Let's meet at 9 at the school gate. I'm so excited about the zoo trip!",
              "Let's meet at 9. My mum is driving us to the zoo."
            ],
            "answer": 1,
            "hint": "Make a checklist: where? what time? how? Tick each reply.",
            "why": "Only this reply gives the place (school gate), the time (9) and the travel (Mum is driving). Each of the others misses one point."
          }
        ]
      }
    }
  ]
};
