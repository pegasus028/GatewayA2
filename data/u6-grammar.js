// Trail Mix — Unit 6 "Fabulous food!" (Gateway to the World A2, pp.78–91) — GRAMMAR content
// Stages g6s1–g6s5, modules g6m1–g6m13 (SPEC §6). Generated from a source file with balanced key positions.
window.GRAMMAR = window.GRAMMAR || {};
window.GRAMMAR.u6 = {
  "unit": 6,
  "title": "Fabulous food!",
  "pages": "pp.78–91",
  "stages": [
    {
      "id": "g6s1",
      "n": 1,
      "name": "Count it!",
      "icon": "🍎",
      "blurb": "Can you count it? Learn which food words take a/an and -s — and how to count rice, water and bread.",
      "modules": [
        {
          "id": "g6m1",
          "name": "Countable or uncountable?",
          "page": "p.80, p.88",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Can you count it — one, two, three? Then it's <strong>countable</strong>: <em>an egg, two eggs</em>. If you can't, it's <strong>uncountable</strong>: <em>some rice</em>, never <em>two rices</em>.",
            "body": [
              "Look at a bowl of grapes. You can count them: one grape, two grapes, three grapes. Now look at a glass of water. Can you say “one water, two waters”? No — water is one thing that you pour. That is the whole difference.",
              "Countable nouns have a singular and a plural: <em>an apple → apples</em>, <em>a carrot → carrots</em>. In the singular they need <em>a/an</em> (or <em>one, my, the</em>): ✗ <em>I ate apple.</em>",
              "Uncountable nouns have no plural and no <em>a/an</em>: <em>salt, honey, water, rice, butter, sugar, milk, bread</em>. Use them alone or with <em>some</em>: <em>I'd like some honey.</em> The verb is singular: <em>The rice <strong>is</strong> hot.</em>"
            ],
            "table": [
              [
                "",
                "Countable (egg)",
                "Uncountable (rice)"
              ],
              [
                "one",
                "an egg ✓",
                "a rice ✗"
              ],
              [
                "more than one",
                "three eggs ✓",
                "three rices ✗"
              ],
              [
                "some",
                "some eggs ✓",
                "some rice ✓"
              ],
              [
                "verb",
                "The eggs <strong>are</strong> fresh.",
                "The rice <strong>is</strong> hot."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "There are <strong>some grapes</strong> in the bowl."
              },
              {
                "ok": true,
                "s": "Can you pass the <strong>salt</strong>, please?"
              },
              {
                "ok": false,
                "s": "I want a rice with my curry.",
                "fix": "I want some rice with my curry."
              },
              {
                "ok": false,
                "s": "I eat two egg every morning.",
                "fix": "I eat two eggs every morning."
              },
              {
                "ok": false,
                "s": "This honey are very sweet.",
                "fix": "This honey is very sweet."
              }
            ],
            "extra": "Some food words can be countable <strong>and</strong> uncountable — <em>chicken, fish, pizza, cake</em>. You'll meet them in <em>Tricky nouns</em>. In this module we only use words that are always one or the other.",
            "tip": "Pour it, spread it or scoop it? Then you probably can't count it: water, butter, rice."
          },
          "items": [
            {
              "id": "g6m1-1",
              "type": "classify",
              "cefr": "A2",
              "stem": "Which group is <strong>honey</strong> in?",
              "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Plural only (like <em>jeans</em>)"
              ],
              "answer": 1,
              "hint": "Can you say “one honey, two honeys”?",
              "why": "<em>Honey</em> is uncountable: you can't count it, so there's no <em>a honey</em> and no <em>honeys</em>. Say <em>some honey</em> or <em>a jar of honey</em>."
            },
            {
              "id": "g6m1-2",
              "type": "gap",
              "cefr": "A2",
              "stem": "Ploy bought ___ at the night market — red ones and green ones.",
              "options": [
                "grapes",
                "a grapes",
                "a grape",
                "grape"
              ],
              "answer": 0,
              "hint": "“Red ones and green ones” — is that one thing or more than one?",
              "why": "<em>Grape</em> is countable, and <em>ones</em> tells us there are many, so we need the plural <em>grapes</em>. <em>A</em> never goes with a plural."
            },
            {
              "id": "g6m1-3",
              "type": "error",
              "cefr": "B1",
              "stem": "Mek [[says]] the [[honey]] from Chiang Mai [[are]] [[really]] good.",
              "options": [
                "says",
                "honey",
                "are",
                "really"
              ],
              "answer": 2,
              "fix": "is",
              "hint": "Is honey singular or plural? Check the verb.",
              "why": "Uncountable nouns take a singular verb: <em>the honey <strong>is</strong> really good</em>. They never take <em>are</em>, because they have no plural."
            },
            {
              "id": "g6m1-4",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which sentence is correct?",
              "options": [
                "A rice is ready. Let's eat!",
                "The rice are ready. Let's eat!",
                "The rices are ready. Let's eat!",
                "The rice is ready. Let's eat!"
              ],
              "answer": 3,
              "hint": "Can you count rice? Then think about -s, a/an and the verb.",
              "why": "<em>Rice</em> is uncountable: no <em>-s</em>, no <em>a</em>, and a singular verb — <em>the rice is</em>. <em>The rice are</em> uses a plural verb, so it's wrong."
            },
            {
              "id": "g6m1-5",
              "type": "odd",
              "cefr": "A2",
              "stem": "Odd one out: which word is uncountable?",
              "options": [
                "bean",
                "salt",
                "egg",
                "tomato"
              ],
              "answer": 1,
              "hint": "Which one can't have a number in front of it?",
              "why": "<em>Salt</em> is uncountable — you can't say <em>two salts</em>. The others are countable: <em>an egg, two beans, three tomatoes</em>."
            },
            {
              "id": "g6m1-6",
              "type": "picture",
              "cefr": "A2",
              "stem": "Look at the picture. Mum cooked ___ for dinner.",
              "options": [
                "some rices",
                "two rices",
                "some rice",
                "a rice"
              ],
              "answer": 2,
              "img": "rice",
              "hint": "Do you count rice grain by grain, or scoop it?",
              "why": "<em>Rice</em> is uncountable, so use <em>some rice</em> (or <em>a bowl of rice</em>). Uncountable nouns have no <em>a</em> and no plural <em>-s</em>."
            }
          ]
        },
        {
          "id": "g6m2",
          "name": "Counting the uncountable",
          "page": "p.81, p.88",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Want to count something uncountable? Count the <strong>container</strong> or the <strong>piece</strong>: <em>a bottle of water, two slices of bread</em>.",
            "body": [
              "You can't say <em>two waters</em> or <em>a bread</em>. But you can count the things that hold them: one bottle, two bottles. So: <em>a bottle of water, two bottles of water</em>.",
              "The pattern is: number + container or piece + <strong>of</strong> + food. The container takes the plural <em>-s</em>; the food never changes: <em>two cartons of milk</em> (✗ two carton of milks).",
              "Pieces work the same way: <em>a slice of bread / pizza / toast</em>, <em>a piece of fruit</em>, <em>a bowl of rice / soup</em>. Countable food can use containers too: <em>a box of eggs, a packet of biscuits, a bag of apples</em>."
            ],
            "table": [
              [
                "number",
                "container / piece",
                "of",
                "food"
              ],
              [
                "a",
                "bottle",
                "of",
                "water"
              ],
              [
                "two",
                "cartons",
                "of",
                "milk"
              ],
              [
                "three",
                "slices",
                "of",
                "bread"
              ],
              [
                "a",
                "jar",
                "of",
                "honey"
              ],
              [
                "four",
                "packets",
                "of",
                "biscuits"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "Can I have <strong>a glass of water</strong>, please?"
              },
              {
                "ok": true,
                "s": "Mum bought <strong>two cartons of milk</strong> at 7-Eleven."
              },
              {
                "ok": true,
                "s": "I had <strong>a bowl of rice</strong> and some green curry."
              },
              {
                "ok": false,
                "s": "She ate three slice of breads.",
                "fix": "She ate three slices of bread."
              },
              {
                "ok": false,
                "s": "Can you buy a bottle water?",
                "fix": "Can you buy a bottle of water?"
              }
            ],
            "extra": "In a café you may hear <em>Two teas, please</em> — it means two cups of tea. That's fine when you order a drink, but in tests and in writing, use the container: <em>two cups of tea</em>.",
            "tip": "The container takes the -s, the food stays the same: two jar<strong>s</strong> of honey."
          },
          "items": [
            {
              "id": "g6m2-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "Mum asked me to buy ___ at 7-Eleven.",
              "options": [
                "two cartons of milk",
                "two cartons of milks",
                "two carton of milk",
                "two cartons milk"
              ],
              "answer": 0,
              "hint": "Which part of the phrase can you count: the carton or the milk?",
              "why": "Count the container, not the milk: <em>two cartons</em> + <em>of</em> + <em>milk</em>. <em>Milk</em> is uncountable, so it never takes <em>-s</em>, and you need <em>of</em> in the middle."
            },
            {
              "id": "g6m2-2",
              "type": "picture",
              "cefr": "A2",
              "stem": "Look at the picture. Fah always takes ___ to school.",
              "options": [
                "a bottle water",
                "a bottles of water",
                "a bottle of waters",
                "a bottle of water"
              ],
              "answer": 3,
              "img": "bottle",
              "hint": "Think of the pattern: a + container + ? + drink.",
              "why": "The pattern is <em>a bottle <strong>of</strong> water</em>. <em>A</em> means one bottle, so no <em>-s</em> on <em>bottle</em>, and <em>water</em> is uncountable, so no <em>-s</em> there either."
            },
            {
              "id": "g6m2-3",
              "type": "error",
              "cefr": "A2",
              "stem": "[[For lunch]], Tonkla [[ate]] [[two]] [[slice]] of pizza.",
              "options": [
                "For lunch",
                "ate",
                "two",
                "slice"
              ],
              "answer": 3,
              "fix": "slices",
              "hint": "After a number bigger than one, what does a countable noun need?",
              "why": "<em>Slice</em> is countable, so after <em>two</em> it needs <em>-s</em>: <em>two slices of pizza</em>. The slice takes the plural; the food stays the same."
            },
            {
              "id": "g6m2-4",
              "type": "choose",
              "cefr": "B1",
              "stem": "Which sentence is correct?",
              "options": [
                "Can you buy two jars of honey?",
                "Can you buy two jar of honey?",
                "Can you buy two jar of honeys?",
                "Can you buy two jars of honeys?"
              ],
              "answer": 0,
              "hint": "Which word can be plural here: jar or honey?",
              "why": "<em>Jar</em> is countable: <em>two jars</em>. <em>Honey</em> is uncountable, so it stays <em>honey</em>. Only the container takes the <em>-s</em>."
            },
            {
              "id": "g6m2-5",
              "type": "situation",
              "cefr": "A2",
              "context": "You're at your friend's house. You're thirsty and you want some water from the kitchen.",
              "stem": "What do you say?",
              "options": [
                "Can I have a glasses of water, please?",
                "Can I have glass of water, please?",
                "Can I have a glass of water, please?",
                "Can I have a glass water, please?"
              ],
              "answer": 2,
              "hint": "Use a container to count water. What joins the container and the drink?",
              "why": "<em>A glass of water</em> = <em>a</em> + one glass + <em>of</em> + water. <em>A glasses</em> mixes one and many, and <em>a glass water</em> is missing <em>of</em>."
            },
            {
              "id": "g6m2-6",
              "type": "odd",
              "cefr": "B1",
              "stem": "Odd one out: three phrases are correct. Which one is NOT?",
              "options": [
                "a slice of toast",
                "a slice of soup",
                "a piece of fruit",
                "a bowl of soup"
              ],
              "answer": 1,
              "hint": "Think about each food. Can you cut it with a knife?",
              "why": "Soup is a liquid — you can't cut it into slices. Use <em>a bowl of soup</em>. <em>A slice of toast</em> and <em>a piece of fruit</em> are both correct."
            }
          ]
        },
        {
          "id": "g6m3",
          "name": "Tricky nouns",
          "page": "p.80, p.89",
          "cefr": "B1",
          "extra": true,
          "rule": {
            "key": "Some food words change meaning: <em>a chicken</em> is an animal, <em>some chicken</em> is meat. And some words are <strong>never</strong> countable in English: <em>advice, information, homework, money, news</em>.",
            "body": [
              "The book asks: can some words go in both groups? Yes! <em>Chicken, fish, pizza, chocolate</em> and <em>cake</em> can be countable or uncountable. It depends on what you mean.",
              "Countable = one whole thing: <em>a chicken</em> (the bird), <em>a pizza</em> (the whole round one), <em>a cake</em>. Uncountable = some of it, as food: <em>some chicken</em>, <em>a slice of pizza</em>, <em>some cake</em>. <em>Fish</em> is special: the plural is usually <em>fish</em> — <em>one fish, three fish</em>.",
              "Some words are countable in other languages but always uncountable in English: <em>advice, information, homework, money, news</em>. No <em>a/an</em>, no <em>-s</em>. <em>News</em> ends in -s but takes a singular verb: <em>The news <strong>is</strong> good.</em>"
            ],
            "table": [
              [
                "",
                "Countable (one whole thing)",
                "Uncountable (food)"
              ],
              [
                "chicken",
                "There's a chicken in the garden.",
                "I had some chicken for lunch."
              ],
              [
                "fish",
                "Tonkla caught two fish.",
                "Fish is good for you."
              ],
              [
                "pizza",
                "We ordered two pizzas.",
                "Can I have some pizza?"
              ],
              [
                "chocolate",
                "a box of chocolates",
                "a bar of chocolate"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "Grandma keeps <strong>three chickens</strong> on her farm."
              },
              {
                "ok": true,
                "s": "Can I ask you for some <strong>advice</strong>?"
              },
              {
                "ok": false,
                "s": "Can you give me an advice?",
                "fix": "Can you give me some advice / a piece of advice?"
              },
              {
                "ok": false,
                "s": "I have a lot of homeworks tonight.",
                "fix": "I have a lot of homework tonight."
              },
              {
                "ok": false,
                "s": "The news are on TV at eight.",
                "fix": "The news is on TV at eight."
              }
            ],
            "extra": "<em>Money</em> is uncountable, but coins and notes are countable: <em>a lot of money</em> ✓, <em>three coins</em> ✓, <em>three moneys</em> ✗. To count advice or information, say <em>a piece of advice</em>, <em>two pieces of information</em>.",
            "tip": "Five words, never a/an, never a plural: advice, information, homework, money, news. Say them like a chant!"
          },
          "items": [
            {
              "id": "g6m3-1",
              "type": "classify",
              "cefr": "A2",
              "stem": "The test on p.89 asks: C, U or B? Which group is <strong>pizza</strong> in?",
              "options": [
                "Countable",
                "Uncountable",
                "Both",
                "Plural only (like <em>jeans</em>)"
              ],
              "answer": 2,
              "hint": "Think of a whole pizza in a box — and then a piece of one.",
              "why": "<em>Pizza</em> is both. A whole one is countable: <em>We ordered two pizzas.</em> Part of one is uncountable: <em>Can I have some pizza?</em>"
            },
            {
              "id": "g6m3-2",
              "type": "gap",
              "cefr": "B1",
              "stem": "Grandma has a farm in Chiang Mai. Look — there's ___ walking in the garden!",
              "options": [
                "some chicken",
                "any chicken",
                "chicken",
                "a chicken"
              ],
              "answer": 3,
              "hint": "Is it meat on a plate, or an animal?",
              "why": "A walking chicken is an animal — one whole bird — so it's countable: <em>a chicken</em>. <em>Some chicken</em> means chicken meat, the food."
            },
            {
              "id": "g6m3-3",
              "type": "error",
              "cefr": "B1",
              "stem": "Our teacher [[gave]] us [[a lot of]] [[homeworks]] [[for]] the weekend.",
              "options": [
                "gave",
                "a lot of",
                "homeworks",
                "for"
              ],
              "answer": 2,
              "fix": "homework",
              "hint": "One of the always-uncountable words is hiding in this sentence.",
              "why": "<em>Homework</em> is always uncountable in English — no <em>-s</em>. Say <em>a lot of homework</em>. <em>A lot of</em> is fine with uncountable nouns."
            },
            {
              "id": "g6m3-4",
              "type": "choose",
              "cefr": "B1",
              "stem": "Which sentence is correct?",
              "options": [
                "Can you give me advices about my diet?",
                "Can you give me some advice about my diet?",
                "Can you give me an advice about my diet?",
                "Can you give me some advices about my diet?"
              ],
              "answer": 1,
              "hint": "Is advice countable or uncountable in English?",
              "why": "<em>Advice</em> is uncountable: no <em>a/an</em>, no <em>-s</em>. Say <em>some advice</em> or <em>a piece of advice</em>. <em>An advice</em> is a very common mistake."
            },
            {
              "id": "g6m3-5",
              "type": "meaning",
              "cefr": "B1",
              "stem": "In which sentence is <em>fish</em> an animal, not food?",
              "options": [
                "Fah saw three fish in the river.",
                "Fah had fish soup for dinner.",
                "Fah cooked fish for her family.",
                "Fah ate some fish with rice at lunch."
              ],
              "answer": 0,
              "hint": "Where are the fish? Are they alive?",
              "why": "Fish swimming in a river are animals, so <em>fish</em> is countable: <em>three fish</em> (the plural is usually <em>fish</em>). In the other sentences it's food, so it's uncountable."
            },
            {
              "id": "g6m3-6",
              "type": "odd",
              "cefr": "B1",
              "stem": "Odd one out: three words are always uncountable. Which one can be countable?",
              "options": [
                "money",
                "information",
                "news",
                "pizza"
              ],
              "answer": 3,
              "hint": "Which one can you put a number in front of?",
              "why": "You can say <em>two pizzas</em>, so <em>pizza</em> can be countable. <em>Information, money</em> and <em>news</em> are always uncountable — no <em>a/an</em>, no plural."
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g6s1ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g6s1ck-1",
            "type": "error",
            "cefr": "A2",
            "stem": "I [[had]] [[two]] [[toasts]] [[with]] jam for breakfast.",
            "options": [
              "had",
              "two",
              "toasts",
              "with"
            ],
            "answer": 2,
            "fix": "slices of toast",
            "hint": "Look at the nouns. Do they all follow the rules for their group?",
            "why": "<em>Toast</em> is uncountable, so no <em>-s</em>. To count it, use a piece word: <em>two slices of toast</em>. <em>Two</em> is fine — we're counting the slices."
          },
          {
            "id": "g6s1ck-2",
            "type": "picture",
            "cefr": "A2",
            "stem": "Look at the picture. This is a jar. Which phrase is correct?",
            "options": [
              "a jar of honey",
              "a jar honey",
              "a jars of honey",
              "a jar of honeys"
            ],
            "answer": 0,
            "img": "jar",
            "hint": "Remember the container pattern from this stage.",
            "why": "<em>A jar of honey</em>: one jar, then <em>of</em>, then the food. <em>Honey</em> is uncountable, so no <em>-s</em>, and <em>a</em> needs a singular <em>jar</em>."
          },
          {
            "id": "g6s1ck-3",
            "type": "choose",
            "cefr": "A2",
            "stem": "Which sentence is correct?",
            "options": [
              "I need some carrot and some rices.",
              "I need some carrots and some rice.",
              "I need a carrots and a rice.",
              "I need some carrots and some rices."
            ],
            "answer": 1,
            "hint": "One food is countable and one isn't.",
            "why": "<em>Carrot</em> is countable, so <em>some</em> + plural <em>carrots</em>. <em>Rice</em> is uncountable, so <em>some rice</em> with no <em>-s</em>."
          },
          {
            "id": "g6s1ck-4",
            "type": "gap",
            "cefr": "B1",
            "stem": "Can you give me ___ about the Triam Udom exam?",
            "options": [
              "some informations",
              "a information",
              "an information",
              "some information"
            ],
            "answer": 3,
            "hint": "Information is one of the tricky nouns. Can you count it in English?",
            "why": "<em>Information</em> is always uncountable: no <em>a/an</em> and no <em>-s</em>. Say <em>some information</em> or <em>a piece of information</em>."
          },
          {
            "id": "g6s1ck-5",
            "type": "gap",
            "cefr": "A2",
            "stem": "Mia was so thirsty after football that she drank ___.",
            "options": [
              "two glasses of water",
              "two glasses of waters",
              "two glass of water",
              "two glass waters"
            ],
            "answer": 0,
            "hint": "Which word in the phrase can you count?",
            "why": "Count the glasses: <em>two glasses</em> + <em>of</em> + <em>water</em>. <em>Water</em> is uncountable, so it doesn't take <em>-s</em>."
          },
          {
            "id": "g6s1ck-6",
            "type": "classify",
            "cefr": "B1",
            "stem": "Which group is <strong>news</strong> in?",
            "options": [
              "Countable",
              "Uncountable",
              "Both",
              "Plural only (like <em>jeans</em>)"
            ],
            "answer": 1,
            "hint": "Don't let the -s trick you. Can you say “a news”?",
            "why": "<em>News</em> ends in <em>-s</em> but it's uncountable, with a singular verb: <em>The news <strong>is</strong> good.</em> There's no <em>a news</em>; say <em>a piece of news</em>."
          }
        ]
      }
    },
    {
      "id": "g6s2",
      "n": 2,
      "name": "a, an, some, any",
      "icon": "🛒",
      "blurb": "Fill your shopping bag: a or an, some or any, there is or there are — and how to offer and ask politely.",
      "modules": [
        {
          "id": "g6m4",
          "name": "a or an?",
          "page": "p.80, p.88",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Listen, don't look! Use <em>an</em> before a vowel <strong>sound</strong> (<em>an egg, an hour</em>) and <em>a</em> before a consonant sound (<em>a banana, a uniform</em>).",
            "body": [
              "<em>A</em> and <em>an</em> mean “one”. Use them only with singular countable nouns: <em>an apple, a pear</em>. Never with plurals (✗ <em>a grapes</em>) or uncountable nouns (✗ <em>a rice</em>).",
              "Most of the time the first letter helps: a, e, i, o, u → <em>an</em>: <em>an onion, an egg, an orange</em>. Other letters → <em>a</em>: <em>a sausage, a tomato</em>.",
              "But English spelling plays tricks. The rule is about the first <strong>sound</strong>. In <em>hour</em> the h is silent, so it sounds like “our”: <em>an hour</em>. <em>Uniform</em> starts with a “you” sound: <em>a uniform</em>.",
              "If an adjective comes first, the adjective decides: <em>an egg</em> but <em>a big egg</em>; <em>a sandwich</em> but <em>an egg sandwich</em>."
            ],
            "table": [
              [
                "First sound",
                "Use",
                "Examples"
              ],
              [
                "vowel sound (a, e, i, o, u)",
                "an",
                "an apple, an egg, an onion"
              ],
              [
                "silent h → vowel sound",
                "an",
                "an hour"
              ],
              [
                "“you” sound (u, eu)",
                "a",
                "a uniform, a university"
              ],
              [
                "consonant sound",
                "a",
                "a melon, a big apple"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "I eat <strong>an</strong> orange every morning."
              },
              {
                "ok": true,
                "s": "We waited for <strong>an</strong> hour at the bus stop."
              },
              {
                "ok": true,
                "s": "Pim wears <strong>a</strong> uniform at school."
              },
              {
                "ok": false,
                "s": "Can I have a apple, please?",
                "fix": "Can I have an apple, please?"
              },
              {
                "ok": false,
                "s": "He had an big egg for breakfast.",
                "fix": "He had a big egg for breakfast."
              },
              {
                "ok": false,
                "s": "I want a grapes.",
                "fix": "I want some grapes. / I want a grape."
              }
            ],
            "extra": "Letters said by their name follow the sound too: <em>an MP3 player</em> (M sounds like “em”) — that's the book's own example on p.88.",
            "tip": "Say it aloud: “a apple” is hard to say, “an apple” flows. Your mouth knows the rule!"
          },
          "items": [
            {
              "id": "g6m4-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "I'd like ___ and a banana, please.",
              "options": [
                "an oranges",
                "a oranges",
                "an orange",
                "a orange"
              ],
              "answer": 2,
              "hint": "Say the next word aloud. Is the first sound a vowel sound?",
              "why": "<em>Orange</em> starts with a vowel sound, so use <em>an</em>: <em>an orange</em>. <em>A</em> and <em>an</em> mean one thing, so no <em>-s</em>."
            },
            {
              "id": "g6m4-2",
              "type": "gap",
              "cefr": "A2",
              "stem": "Fah made ___ for her little brother's lunch.",
              "options": [
                "an egg sandwich",
                "a egg sandwich",
                "a egg sandwiches",
                "an egg sandwiches"
              ],
              "answer": 0,
              "hint": "The article listens to the very next word. What sound does that word start with?",
              "why": "The next word is <em>egg</em>, which starts with a vowel sound, so <em>an egg sandwich</em>. <em>An</em> means one, so <em>sandwich</em> stays singular."
            },
            {
              "id": "g6m4-3",
              "type": "error",
              "cefr": "B1",
              "stem": "At my school, [[an]] [[uniform]] [[costs]] [[a lot of]] money.",
              "options": [
                "an",
                "uniform",
                "costs",
                "a lot of"
              ],
              "answer": 0,
              "fix": "a",
              "hint": "Spelling and sound don't always match. Say each word aloud.",
              "why": "<em>Uniform</em> starts with the letter u, but the sound is “you” — a consonant sound. So it's <em>a uniform</em>. <em>A lot of money</em> is correct."
            },
            {
              "id": "g6m4-4",
              "type": "picture",
              "cefr": "A2",
              "stem": "Look at the picture. Mek puts ___ in his school bag every day.",
              "options": [
                "a apples",
                "a apple",
                "an apples",
                "an apple"
              ],
              "answer": 3,
              "img": "apple",
              "hint": "It's one piece of fruit. What's its first sound?",
              "why": "<em>Apple</em> begins with a vowel sound, so it's <em>an apple</em>. <em>A apple</em> is hard to say — that's why English uses <em>an</em>."
            },
            {
              "id": "g6m4-5",
              "type": "odd",
              "cefr": "B1",
              "stem": "Odd one out: which word takes <em>an</em>, not <em>a</em>?",
              "options": [
                "house",
                "hour",
                "holiday",
                "hamburger"
              ],
              "answer": 1,
              "hint": "All four start with h. In which one can't you hear the h?",
              "why": "In <em>hour</em> the h is silent, so the word starts with a vowel sound: <em>an hour</em>. You can hear the h in <em>a house, a holiday, a hamburger</em>."
            },
            {
              "id": "g6m4-6",
              "type": "choose",
              "cefr": "B1",
              "stem": "Which sentence is correct?",
              "options": [
                "Ken had a big egg and a orange.",
                "Ken had an big egg and an orange.",
                "Ken had a big egg and an orange.",
                "Ken had an big egg and a orange."
              ],
              "answer": 2,
              "hint": "Look at the word right after each a/an — not at the noun.",
              "why": "The word straight after the article decides. <em>Big</em> starts with a consonant sound → <em>a big egg</em>. <em>Orange</em> starts with a vowel sound → <em>an orange</em>."
            }
          ]
        },
        {
          "id": "g6m5",
          "name": "some or any?",
          "page": "p.80, p.88",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "<em>some</em> in positive sentences; <em>any</em> in negatives and questions — with plural nouns (<em>eggs</em>) and uncountable nouns (<em>milk</em>).",
            "body": [
              "<em>Some</em> and <em>any</em> mean “a number of” or “an amount of” when the exact number isn't important. Use them with plural countable nouns and uncountable nouns — not with one thing (✗ <em>some apple</em> → <em>an apple</em>).",
              "Positive sentence → <em>some</em>: <em>We've got some eggs. There's some milk.</em> Negative sentence (with <em>not / n't</em>) → <em>any</em>: <em>We haven't got any eggs. There isn't any milk.</em>",
              "Question → <em>any</em>: <em>Have you got any eggs? Is there any milk?</em> (Offers and requests are different — see the Extra module <em>Offers and requests</em>.)"
            ],
            "table": [
              [
                "",
                "Plural countable",
                "Uncountable"
              ],
              [
                "+",
                "I've got <strong>some</strong> grapes.",
                "I've got <strong>some</strong> rice."
              ],
              [
                "–",
                "I haven't got <strong>any</strong> grapes.",
                "I haven't got <strong>any</strong> rice."
              ],
              [
                "?",
                "Have you got <strong>any</strong> grapes?",
                "Have you got <strong>any</strong> rice?"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "There are <strong>some</strong> mushrooms in the soup."
              },
              {
                "ok": true,
                "s": "We don't have <strong>any</strong> sugar."
              },
              {
                "ok": true,
                "s": "Are there <strong>any</strong> onions in this salad?"
              },
              {
                "ok": false,
                "s": "He hasn't got some homework.",
                "fix": "He hasn't got any homework."
              },
              {
                "ok": false,
                "s": "I've got any friends in Phuket.",
                "fix": "I've got some friends in Phuket."
              },
              {
                "ok": false,
                "s": "I need some flower for Mum.",
                "fix": "I need some flowers / a flower for Mum."
              }
            ],
            "extra": "Not every question takes <em>any</em>. When you <strong>offer</strong> or <strong>ask for</strong> something, use <em>some</em>: <em>Would you like some tea? Can I have some water?</em>",
            "tip": "Some = sure (+). Any = not or ? (–, ?)."
          },
          "items": [
            {
              "id": "g6m5-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "Sorry, we haven't got ___ strawberries today. Come back tomorrow!",
              "options": [
                "no",
                "any",
                "a",
                "some"
              ],
              "answer": 1,
              "hint": "Positive, negative or question? Look at the verb.",
              "why": "The sentence is negative (<em>haven't</em>), so use <em>any</em>. <em>No</em> is wrong because <em>haven't</em> is already negative, and <em>a</em> can't go with a plural."
            },
            {
              "id": "g6m5-2",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Dad",
                  "text": "Can you check the fridge for me, Ploy?"
                },
                {
                  "who": "Ploy",
                  "text": "OK… There's ___ milk, but there aren't any eggs."
                }
              ],
              "stem": "",
              "options": [
                "an",
                "any",
                "a",
                "some"
              ],
              "answer": 3,
              "hint": "Is “There's ___ milk” positive or negative?",
              "why": "<em>There's … milk</em> is positive, so use <em>some</em>. <em>Milk</em> is uncountable, so <em>a/an</em> are wrong. <em>Any</em> is for the negative part: <em>aren't any eggs</em>."
            },
            {
              "id": "g6m5-3",
              "type": "error",
              "cefr": "A2",
              "stem": "[[I've got]] [[some]] grapes, but I [[haven't got]] [[some strawberries]].",
              "options": [
                "I've got",
                "some",
                "haven't got",
                "some strawberries"
              ],
              "answer": 3,
              "fix": "any strawberries",
              "hint": "This sentence has two parts. Is each part positive or negative?",
              "why": "The second part is negative (<em>haven't got</em>), so it needs <em>any</em>: <em>I haven't got any strawberries</em>. The first part is positive, so <em>some grapes</em> is right."
            },
            {
              "id": "g6m5-4",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which question is correct?",
              "options": [
                "Is there a sugar in this drink?",
                "Is there any sugars in this drink?",
                "Is there any sugar in this drink?",
                "Are there any sugar in this drink?"
              ],
              "answer": 2,
              "hint": "Is sugar countable? Then choose the verb and the noun form.",
              "why": "<em>Sugar</em> is uncountable: singular verb, no <em>-s</em> — <em>Is there any sugar…?</em> Questions take <em>any</em>, and <em>a</em> can't go with uncountable nouns."
            },
            {
              "id": "g6m5-5",
              "type": "situation",
              "cefr": "A2",
              "context": "You want to make an omelette, but you don't know what's in the fridge. You ask your brother.",
              "stem": "What do you say?",
              "options": [
                "Have we got many egg?",
                "Have we got any eggs?",
                "Have we got an eggs?",
                "Have we got some egg?"
              ],
              "answer": 1,
              "hint": "It's a real question — you don't know the answer. Is egg countable?",
              "why": "This is a real question, so use <em>any</em>, and <em>egg</em> is countable, so it needs the plural: <em>any eggs</em>. <em>An eggs</em> mixes one and many."
            },
            {
              "id": "g6m5-6",
              "type": "odd",
              "cefr": "A2",
              "stem": "Odd one out: three sentences need <em>any</em>. Which one needs <em>some</em>?",
              "options": [
                "There's ___ juice in the fridge.",
                "I don't want ___ juice, thanks.",
                "We haven't got ___ juice.",
                "There isn't ___ juice in the fridge."
              ],
              "answer": 0,
              "hint": "Look for not or n't in each sentence.",
              "why": "<em>There's some juice</em> is the only positive sentence, so it takes <em>some</em>. The other three are negative (<em>isn't, don't, haven't</em>), so they take <em>any</em>."
            }
          ]
        },
        {
          "id": "g6m6",
          "name": "There is / There are",
          "page": "p.81, p.89",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "To say something is in a place, use <em>There is</em> (+ one thing or uncountable) or <em>There are</em> (+ plural) — not <em>have</em>.",
            "body": [
              "<em>There's</em> + <em>a/an</em> + singular noun: <em>There's an apple in my bag.</em> <em>There's</em> + <em>some</em> + uncountable: <em>There's some rice.</em> <em>There are</em> + <em>some</em> + plural: <em>There are some grapes.</em>",
              "Negatives: <em>There isn't any milk. There aren't any eggs.</em> Questions: put <em>is/are</em> first — <em>Is there any milk? Are there any eggs?</em> Short answers: <em>Yes, there is. / No, there aren't.</em>",
              "Careful: in some languages one word means both “have” and “there is”. In English they are different. <em>Have</em> needs an owner: <em>I have a dog. My school has a pool.</em> For what exists in a place, use <em>there is/are</em>: <em>There are a lot of cars in Bangkok.</em> (✗ <em>In Bangkok have a lot of cars.</em>)"
            ],
            "table": [
              [
                "",
                "+",
                "–",
                "?"
              ],
              [
                "one thing",
                "There's an egg.",
                "There isn't an egg.",
                "Is there an egg?"
              ],
              [
                "uncountable",
                "There's some milk.",
                "There isn't any milk.",
                "Is there any milk?"
              ],
              [
                "plural",
                "There are some eggs.",
                "There aren't any eggs.",
                "Are there any eggs?"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "<strong>There are</strong> a lot of food stalls at the night market."
              },
              {
                "ok": true,
                "s": "<strong>Is there</strong> any water in the bottle? — No, there isn't."
              },
              {
                "ok": false,
                "s": "In my school have a big canteen.",
                "fix": "There's a big canteen at my school. / My school has a big canteen."
              },
              {
                "ok": false,
                "s": "There is some grapes in the bowl.",
                "fix": "There are some grapes in the bowl."
              },
              {
                "ok": false,
                "s": "There has a 7-Eleven near my house.",
                "fix": "There's a 7-Eleven near my house."
              }
            ],
            "tip": "Something in a place? Start with There is / There are. Something you own? Use have."
          },
          "items": [
            {
              "id": "g6m6-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "___ some great food stalls at the night market on Saturdays.",
              "options": [
                "There is",
                "Have",
                "There have",
                "There are"
              ],
              "answer": 3,
              "hint": "Are you saying who owns something, or what is in a place? One thing or many?",
              "why": "To say what is in a place, use <em>there is/are</em>, not <em>have</em>. <em>Food stalls</em> is plural, so <em>There are</em>."
            },
            {
              "id": "g6m6-2",
              "type": "picture",
              "cefr": "A2",
              "stem": "Leo was very thirsty, so he drank it all! Now there ___ water in his glass.",
              "options": [
                "is any",
                "isn't some",
                "isn't any",
                "aren't any"
              ],
              "answer": 2,
              "img": "water",
              "hint": "Is water countable? Is the sentence positive or negative?",
              "why": "The glass is empty, so the sentence is negative: <em>isn't any</em>. <em>Water</em> is uncountable, so use singular <em>isn't</em>, not <em>aren't</em>."
            },
            {
              "id": "g6m6-3",
              "type": "error",
              "cefr": "A2",
              "stem": "[[Have]] [[a lot of]] [[cars]] [[in]] Bangkok.",
              "options": [
                "Have",
                "a lot of",
                "cars",
                "in"
              ],
              "answer": 0,
              "fix": "There are",
              "hint": "Is this about owning something, or about what is in a place?",
              "why": "To say what is in a place, start with <em>There are</em>: <em>There are a lot of cars in Bangkok.</em> <em>Have</em> needs a person or thing that owns something."
            },
            {
              "id": "g6m6-4",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Leo",
                  "text": "I'm hungry. ___ any bread?"
                },
                {
                  "who": "Mia",
                  "text": "Yes, there's some in the cupboard."
                }
              ],
              "stem": "",
              "options": [
                "There is",
                "Is there",
                "Are there",
                "Has it"
              ],
              "answer": 1,
              "hint": "Bread is uncountable. How do you start a question with there?",
              "why": "<em>Bread</em> is uncountable, so use the singular question <em>Is there any bread?</em> In questions, <em>is</em> comes before <em>there</em>. <em>Has it</em> is the “have” mistake."
            },
            {
              "id": "g6m6-5",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which sentence is correct?",
              "options": [
                "There are some grapes and there's an apple.",
                "There are some grapes and there are an apple.",
                "There are some grapes and there's a apple.",
                "There are some grape and there's an apple."
              ],
              "answer": 0,
              "hint": "Check each half: one thing or many? a or an?",
              "why": "<em>Grapes</em> is plural → <em>there are some grapes</em>. <em>Apple</em> is one thing with a vowel sound → <em>there's an apple</em>."
            },
            {
              "id": "g6m6-6",
              "type": "meaning",
              "cefr": "B1",
              "stem": "Which sentence means the same as <em>My school has a big canteen</em>?",
              "options": [
                "There has a big canteen at my school.",
                "There's a big canteen at my school.",
                "My school there is a big canteen.",
                "It has a big canteen at my school."
              ],
              "answer": 1,
              "hint": "Which structure tells us something is in a place?",
              "why": "<em>There's a big canteen at my school</em> = my school has one. <em>There has</em> mixes two structures, and in <em>it has</em> we don't know what <em>it</em> is."
            }
          ]
        },
        {
          "id": "g6m7",
          "name": "Offers and requests",
          "page": "p.86, p.146",
          "cefr": "A2",
          "extra": true,
          "rule": {
            "key": "Questions usually take <em>any</em> — but when you <strong>offer</strong> something or <strong>ask for</strong> something, use <em>some</em>: <em>Would you like some tea? Can I have some water?</em>",
            "body": [
              "The book rule says: questions → <em>any</em>. That's true for questions that ask for information: <em>Is there any milk?</em> (I don't know — tell me.)",
              "But some questions are really offers or requests. You expect the answer “yes”, so English uses <em>some</em>. Offer = you give: <em>Would you like some cake?</em> Request = you ask for: <em>Can I have some water, please? Could we have some bread?</em>",
              "With one countable thing, use <em>a/an</em> as usual: <em>Would you like an apple? Could I have a burger, please?</em>"
            ],
            "table": [
              [
                "Kind of question",
                "Example",
                "Word"
              ],
              [
                "asking for information",
                "Are there any onions in it?",
                "any"
              ],
              [
                "offer (you give)",
                "Would you like some juice?",
                "some"
              ],
              [
                "request (you ask for)",
                "Can I have some bread, please?",
                "some"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "<strong>Would you like some</strong> rice with your curry?"
              },
              {
                "ok": true,
                "s": "Could I have <strong>some</strong> water, please?"
              },
              {
                "ok": true,
                "s": "Is there <strong>any</strong> sugar in this? I don't eat sugar."
              },
              {
                "ok": false,
                "s": "Would you like any tea?",
                "fix": "Would you like some tea?"
              }
            ],
            "extra": "The book's rule box only says “any in questions”. Asking if a shop or café has something is a normal question: <em>Have you got any orange juice?</em> (Speaking bank, p.86). Asking for it is a request: <em>Can I have some orange juice?</em>",
            "tip": "Giving or asking for something? Say some. Just asking for information? Say any."
          },
          "items": [
            {
              "id": "g6m7-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "Could we have ___ bread with our soup, please?",
              "options": [
                "many",
                "any",
                "much",
                "some"
              ],
              "answer": 3,
              "hint": "Is this a real question for information, or are you asking the waiter for food?",
              "why": "This is a request — you're asking for something — so use <em>some</em>, even in a question. <em>Many</em> can't go with uncountable <em>bread</em>, and <em>much</em> doesn't fit a polite request."
            },
            {
              "id": "g6m7-2",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Grandma",
                  "text": "You look hungry, Tonkla. Would you like ___ sticky rice?"
                },
                {
                  "who": "Tonkla",
                  "text": "Yes, please! I love it."
                }
              ],
              "stem": "",
              "options": [
                "a",
                "any",
                "some",
                "many"
              ],
              "answer": 2,
              "hint": "Is Grandma asking for information, or is she giving Tonkla food?",
              "why": "Grandma is making an offer: <em>Would you like some…?</em> Offers take <em>some</em>. <em>Sticky rice</em> is uncountable, so <em>a</em> and <em>many</em> are wrong."
            },
            {
              "id": "g6m7-3",
              "type": "meaning",
              "cefr": "A2",
              "stem": "Which question is an <strong>offer</strong>?",
              "options": [
                "Are there any biscuits?",
                "Would you like some biscuits?",
                "Did you remember to buy any biscuits?",
                "Have you got any biscuits?"
              ],
              "answer": 1,
              "hint": "An offer means you want to give something to someone.",
              "why": "<em>Would you like some…?</em> offers food to someone. The other three just ask about biscuits — nobody is giving anything, so they use <em>any</em>."
            },
            {
              "id": "g6m7-4",
              "type": "situation",
              "cefr": "A2",
              "context": "Your friend Jay comes to your house after football. He looks hot and tired.",
              "stem": "You offer him a drink. What do you say?",
              "options": [
                "Would you like some cold waters?",
                "Would you like any cold water?",
                "Would you like some cold water?",
                "Would you like a cold waters?"
              ],
              "answer": 2,
              "hint": "You're offering something. Is water countable?",
              "why": "An offer takes <em>some</em>: <em>Would you like some cold water?</em> <em>Water</em> is uncountable, so no <em>-s</em>."
            },
            {
              "id": "g6m7-5",
              "type": "error",
              "cefr": "B1",
              "stem": "[[Can]] I [[have]] [[some]] [[honeys]] on my toast, please?",
              "options": [
                "Can",
                "have",
                "some",
                "honeys"
              ],
              "answer": 3,
              "fix": "honey",
              "hint": "Requests follow a special rule. Which part is really wrong?",
              "why": "<em>Some</em> is correct — it's a request. The mistake is <em>honeys</em>: <em>honey</em> is uncountable, so no <em>-s</em>. Say <em>some honey</em>."
            },
            {
              "id": "g6m7-6",
              "type": "classify",
              "cefr": "A2",
              "stem": "<em>“Would you like some juice?”</em> Which group is this sentence in?",
              "options": [
                "a negative sentence → any",
                "asking for information → any",
                "a request → some",
                "an offer → some"
              ],
              "answer": 3,
              "hint": "Who will get the juice — the speaker or the listener?",
              "why": "The speaker is giving juice to the listener, so it's an offer, and offers take <em>some</em>. A request is when you ask for something for yourself."
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g6s2ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g6s2ck-1",
            "type": "gap",
            "cefr": "B1",
            "stem": "Pim's brother is ___ in Chiang Mai.",
            "options": [
              "a university student",
              "an university students",
              "an university student",
              "a university students"
            ],
            "answer": 0,
            "hint": "Listen to the first sound of “university”, not the first letter.",
            "why": "<em>University</em> starts with a “you” sound — a consonant sound — so <em>a university student</em>. <em>A</em> means one, so <em>student</em> has no <em>-s</em>."
          },
          {
            "id": "g6s2ck-2",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Anna",
                "text": "I want to make a cake. ___ any eggs in the fridge?"
              },
              {
                "who": "Sam",
                "text": "Yes, there are six."
              }
            ],
            "stem": "",
            "options": [
              "Is there",
              "Have",
              "Are there",
              "There are"
            ],
            "answer": 2,
            "hint": "Eggs is plural. How do you start a question with there?",
            "why": "<em>Eggs</em> is plural, so <em>Are there any eggs?</em> In questions, <em>are</em> comes before <em>there</em>. <em>Have any eggs…?</em> is the “have” mistake."
          },
          {
            "id": "g6s2ck-3",
            "type": "error",
            "cefr": "A2",
            "stem": "[[There]] [[is]] [[some]] [[sausages]] on the barbecue.",
            "options": [
              "There",
              "is",
              "some",
              "sausages"
            ],
            "answer": 1,
            "fix": "are",
            "hint": "Is the noun singular or plural? Check the verb.",
            "why": "<em>Sausages</em> is plural, so we need <em>There are some sausages</em>. <em>Some</em> is right here because the sentence is positive."
          },
          {
            "id": "g6s2ck-4",
            "type": "situation",
            "cefr": "A2",
            "context": "Your friend Beam is at your house. You want to give him some snacks.",
            "stem": "What do you say?",
            "options": [
              "Would you like some biscuits?",
              "Do you would like some biscuits?",
              "Would you like a biscuits?",
              "Would you like some biscuit?"
            ],
            "answer": 0,
            "hint": "It's an offer. Is biscuit countable? Check the question form, too.",
            "why": "Offers use <em>Would you like some…?</em> <em>Biscuit</em> is countable, so after <em>some</em> it's plural: <em>some biscuits</em>. <em>Would</em> starts the question — no <em>do</em>."
          },
          {
            "id": "g6s2ck-5",
            "type": "choose",
            "cefr": "B1",
            "stem": "Which sentence is correct?",
            "options": [
              "I've got an orange and some grapes.",
              "I've got an oranges and some grapes.",
              "I've got a orange and some grapes.",
              "I've got an orange and any grapes."
            ],
            "answer": 0,
            "hint": "Check both halves: the sound after a/an, and the kind of sentence.",
            "why": "<em>Orange</em> starts with a vowel sound → <em>an orange</em> (one, no <em>-s</em>). The sentence is positive → <em>some grapes</em>, not <em>any</em>."
          },
          {
            "id": "g6s2ck-6",
            "type": "picture",
            "cefr": "A2",
            "stem": "Look at the picture. ___ some carrots in Mum's shopping basket.",
            "options": [
              "It has",
              "There is",
              "There have",
              "There are"
            ],
            "answer": 3,
            "img": "carrot",
            "hint": "What is in the basket? One thing or more than one?",
            "why": "<em>Carrots</em> is plural, so <em>There are some carrots</em>. To say what is in a place, use <em>there is/are</em>, not <em>have</em>."
          }
        ]
      }
    },
    {
      "id": "g6s3",
      "n": 3,
      "name": "How much? How many?",
      "icon": "🔢",
      "blurb": "Talk about big and small amounts with a lot of, much and many — and ask How much? and How many?",
      "modules": [
        {
          "id": "g6m8",
          "name": "much, many, a lot of",
          "page": "p.84, p.88",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Big amounts: <em>a lot of</em> works in every sentence. <em>Many</em> (plurals) and <em>much</em> (uncountables) are best in negatives and questions.",
            "body": [
              "<em>A lot of</em> goes with plural nouns and uncountable nouns, in every kind of sentence: <em>There are a lot of carrots. There isn't a lot of milk. Do you eat a lot of fruit?</em>",
              "<em>Many</em> + plural countable nouns: <em>There aren't many eggs. Are there many people?</em> <em>Much</em> + uncountable nouns: <em>I don't drink much milk. Is there much sugar in it?</em>",
              "In positive sentences, use <em>a lot of</em>: <em>I spent a lot of money</em> (✗ <em>I spent much money</em>). <em>Many</em> in a positive sentence isn't wrong, but it sounds formal — <em>a lot of</em> is the safe choice.",
              "Don't forget the <em>a</em>: ✗ <em>lot of</em>, ✓ <em>a lot of</em>. And don't mix them up: ✗ <em>much eggs</em>, ✗ <em>many water</em>."
            ],
            "table": [
              [
                "",
                "Plural (eggs)",
                "Uncountable (milk)"
              ],
              [
                "+",
                "There are <strong>a lot of</strong> eggs.",
                "There's <strong>a lot of</strong> milk."
              ],
              [
                "–",
                "There aren't <strong>many</strong> eggs.",
                "There isn't <strong>much</strong> milk."
              ],
              [
                "?",
                "Are there <strong>many</strong> eggs?",
                "Is there <strong>much</strong> milk?"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "There's <strong>a lot of</strong> traffic in Bangkok."
              },
              {
                "ok": true,
                "s": "We don't have <strong>much</strong> time."
              },
              {
                "ok": true,
                "s": "Are there <strong>many</strong> students in your class?"
              },
              {
                "ok": false,
                "s": "I have so much friends.",
                "fix": "I have a lot of friends. / I have so many friends."
              },
              {
                "ok": false,
                "s": "There isn't many milk.",
                "fix": "There isn't much milk."
              },
              {
                "ok": false,
                "s": "There are lot of places to visit.",
                "fix": "There are a lot of places to visit."
              }
            ],
            "extra": "With <em>too</em> and <em>so</em>, <em>much</em> and <em>many</em> are fine in positive sentences: <em>You eat too much sugar. There were so many people!</em>",
            "tip": "Not sure? A lot of works with any plural or uncountable noun, in any kind of sentence."
          },
          "items": [
            {
              "id": "g6m8-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "There isn't ___ sugar in this lemonade. It's not very sweet.",
              "options": [
                "a lot",
                "much",
                "many",
                "lot of"
              ],
              "answer": 1,
              "hint": "Is sugar countable? Is the sentence negative?",
              "why": "<em>Sugar</em> is uncountable and the sentence is negative, so <em>much</em>. <em>Many</em> is for plurals, and <em>a lot</em> and <em>lot of</em> each miss a word."
            },
            {
              "id": "g6m8-2",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Mum",
                  "text": "Do you eat ___ vegetables at school, Mek?"
                },
                {
                  "who": "Mek",
                  "text": "Not really. Just a little cabbage in my soup."
                }
              ],
              "stem": "",
              "options": [
                "lot of",
                "a lot",
                "many",
                "much"
              ],
              "answer": 2,
              "hint": "Vegetables — can you count them? And it's a question.",
              "why": "<em>Vegetables</em> is a plural countable noun, so in a question use <em>many</em>. <em>Much</em> is for uncountable nouns; <em>a lot</em> and <em>lot of</em> each miss a word."
            },
            {
              "id": "g6m8-3",
              "type": "picture",
              "cefr": "A2",
              "stem": "Look at the picture. We picked ___ strawberries at a farm in Chiang Mai.",
              "options": [
                "much",
                "a lot of",
                "a lots of",
                "lots"
              ],
              "answer": 1,
              "img": "strawberry",
              "hint": "Is the sentence positive? Is the noun plural or uncountable?",
              "why": "In positive sentences use <em>a lot of</em>: <em>a lot of strawberries</em>. <em>Much</em> is for uncountable nouns, <em>lots</em> needs <em>of</em>, and <em>a lots of</em> doesn't exist."
            },
            {
              "id": "g6m8-4",
              "type": "error",
              "cefr": "B1",
              "stem": "I [[spent]] [[much]] [[money]] [[at]] the night market.",
              "options": [
                "spent",
                "much",
                "money",
                "at"
              ],
              "answer": 1,
              "fix": "a lot of",
              "hint": "Positive sentence + uncountable noun. Which word doesn't sound natural here?",
              "why": "In positive sentences, use <em>a lot of</em>: <em>I spent a lot of money</em>. <em>Much</em> sounds wrong in positive sentences; keep it for negatives and questions."
            },
            {
              "id": "g6m8-5",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which sentence is correct?",
              "options": [
                "We haven't got many time, so let's hurry.",
                "We haven't got lot of time, so let's hurry.",
                "We haven't got much time, so let's hurry.",
                "We haven't got a lot time, so let's hurry."
              ],
              "answer": 2,
              "hint": "Is time countable here? Then check each option for a missing word.",
              "why": "<em>Time</em> is uncountable and the sentence is negative, so <em>much time</em> is right. <em>Many</em> is for plurals; <em>a lot time</em> and <em>lot of time</em> each miss a word."
            },
            {
              "id": "g6m8-6",
              "type": "odd",
              "cefr": "A2",
              "stem": "Odd one out: three phrases are correct. Which one is wrong?",
              "options": [
                "a lot of juice",
                "not much water",
                "not many apples",
                "not much eggs"
              ],
              "answer": 3,
              "hint": "Check each noun: plural or uncountable? Does the word before it match?",
              "why": "<em>Eggs</em> is plural, so it needs <em>many</em>: <em>not many eggs</em>. <em>Much</em> goes with uncountable nouns like <em>water</em>."
            }
          ]
        },
        {
          "id": "g6m9",
          "name": "How much? How many?",
          "page": "p.85, p.88, p.146",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Can you count it? <em>How many</em> + plural. Can't count it? <em>How much</em> + uncountable. For prices: <em>How much is it?</em>",
            "body": [
              "<em>How many</em> + plural countable noun: <em>How many eggs do we need?</em> <em>How much</em> + uncountable noun: <em>How much water do you drink?</em> The noun comes straight after: ✗ <em>How many of eggs</em>, ✗ <em>How many egg</em>.",
              "Short answers: a number (<em>Three.</em>), <em>A lot. / Not many. / Not much.</em> When no noun comes after <em>a lot</em>, drop <em>of</em>: <em>Are there any grapes? — Yes, there are a lot.</em> (✗ <em>there are a lot of.</em>)",
              "Prices: <em>How much is it? How much are they? How much is that?</em> = What's the price? Here <em>much</em> means money, so you don't need a noun. (✗ <em>How much price…?</em>)"
            ],
            "table": [
              [
                "Question",
                "Short answer"
              ],
              [
                "How many sausages do you want?",
                "Two, please. / Not many. / A lot!"
              ],
              [
                "How much milk is there?",
                "Not much. / A lot."
              ],
              [
                "How much is this pizza?",
                "It's 120 baht."
              ],
              [
                "How much are these apples?",
                "They're 60 baht a kilo."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "<strong>How many</strong> glasses of water do you drink a day?"
              },
              {
                "ok": true,
                "s": "<strong>How much</strong> is the green curry? — It's 60 baht."
              },
              {
                "ok": false,
                "s": "How many milk do we need?",
                "fix": "How much milk do we need?"
              },
              {
                "ok": false,
                "s": "How many apple do you want?",
                "fix": "How many apples do you want?"
              },
              {
                "ok": false,
                "s": "Are there any nuts? — Yes, there are a lot of.",
                "fix": "Yes, there are a lot."
              }
            ],
            "extra": "Look at the noun right after <em>How much/many</em>, not the food inside it: <em>How many <strong>cups</strong> of tea…?</em> (cups = countable) but <em>How much <strong>tea</strong>…?</em>",
            "tip": "Many → numbers (1, 2, 3…). Much → amounts. Price → How much is it?"
          },
          "items": [
            {
              "id": "g6m9-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "___ rice do we need for the party?",
              "options": [
                "How much",
                "How many of",
                "How much of",
                "How many"
              ],
              "answer": 0,
              "hint": "Can you count rice?",
              "why": "<em>Rice</em> is uncountable, so ask <em>How much rice…?</em> Put the noun straight after <em>How much</em> — no <em>of</em>."
            },
            {
              "id": "g6m9-2",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Leo",
                  "text": "Are there any sausages left?"
                },
                {
                  "who": "Fah",
                  "text": "Yes, there are ___. Take two!"
                }
              ],
              "stem": "",
              "options": [
                "lot",
                "a lot of",
                "a lot",
                "much"
              ],
              "answer": 2,
              "hint": "Is there a noun after the gap?",
              "why": "When no noun comes after <em>a lot</em>, drop <em>of</em>: <em>Yes, there are a lot.</em> <em>A lot of</em> needs a noun after it, like <em>a lot of sausages</em>."
            },
            {
              "id": "g6m9-3",
              "type": "situation",
              "cefr": "A2",
              "context": "You're at a fruit stall at a market in Chiang Mai. You want to know the price of a bag of apples.",
              "stem": "What do you say?",
              "options": [
                "How much is this bag of apples?",
                "How much are this bag of apples?",
                "How many costs this bag of apples?",
                "How many is this bag of apples?"
              ],
              "answer": 0,
              "hint": "Which question asks about money? Then check the verb: one bag or many?",
              "why": "For prices, use <em>How much</em>: <em>How much is this bag…?</em> The subject is one bag, so <em>is</em>, not <em>are</em>. <em>How many</em> asks about a number of things."
            },
            {
              "id": "g6m9-4",
              "type": "error",
              "cefr": "B1",
              "stem": "[[How much]] [[glasses]] of water [[do you]] [[drink]] every day?",
              "options": [
                "How much",
                "glasses",
                "do you",
                "drink"
              ],
              "answer": 0,
              "fix": "How many",
              "hint": "Which noun does the question word really go with?",
              "why": "The noun after the question word is <em>glasses</em> — countable and plural — so it's <em>How many glasses of water…?</em> <em>Water</em> is uncountable, but we're counting the glasses."
            },
            {
              "id": "g6m9-5",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which question is correct?",
              "options": [
                "How much eggs do we need?",
                "How many egg do we need?",
                "How many of eggs do we need?",
                "How many eggs do we need?"
              ],
              "answer": 3,
              "hint": "Countable or uncountable? Singular or plural after the question word?",
              "why": "<em>Eggs</em> are countable, so <em>How many</em> + plural: <em>How many eggs…?</em> <em>How much</em> is for uncountable nouns, and there's no <em>of</em>."
            },
            {
              "id": "g6m9-6",
              "type": "meaning",
              "cefr": "B1",
              "stem": "Ploy asks: <em>“How much is the mango sticky rice?”</em> What does she want to know?",
              "options": [
                "how many mangoes are in it",
                "the price",
                "the size",
                "how much rice there is"
              ],
              "answer": 1,
              "hint": "Where do people usually ask this question?",
              "why": "<em>How much is…?</em> with no noun asks about the price. To ask about the amount of rice, you need the noun: <em>How much rice is there?</em>"
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g6s3ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g6s3ck-1",
            "type": "error",
            "cefr": "A2",
            "stem": "[[There]] [[aren't]] [[much]] [[eggs]] in the box.",
            "options": [
              "There",
              "aren't",
              "much",
              "eggs"
            ],
            "answer": 2,
            "fix": "many",
            "hint": "Look at the noun. Can you count it?",
            "why": "<em>Eggs</em> is plural and countable, so in a negative sentence use <em>many</em>: <em>There aren't many eggs.</em> <em>Much</em> is for uncountable nouns like <em>milk</em>."
          },
          {
            "id": "g6s3ck-2",
            "type": "odd",
            "cefr": "B1",
            "stem": "Odd one out: which noun can't follow <em>How many</em>?",
            "options": [
              "onions",
              "cups of tea",
              "sausages",
              "sugar"
            ],
            "answer": 3,
            "hint": "Try “one ___, two ___”. Which one doesn't work?",
            "why": "<em>Sugar</em> is uncountable, so ask <em>How much sugar…?</em> <em>Sausages, onions</em> and <em>cups</em> are countable plurals — <em>How many cups of tea?</em> is fine."
          },
          {
            "id": "g6s3ck-3",
            "type": "gap",
            "cefr": "B1",
            "stem": "There's ___ traffic in Bangkok in the morning.",
            "options": [
              "much",
              "lots",
              "a lots of",
              "a lot of"
            ],
            "answer": 3,
            "hint": "Positive sentence, uncountable noun.",
            "why": "<em>Traffic</em> is uncountable and the sentence is positive, so use <em>a lot of</em>. <em>Much</em> sounds wrong in positive sentences, and <em>lots</em> needs <em>of</em>."
          },
          {
            "id": "g6s3ck-4",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Shop assistant",
                "text": "Can I help you?"
              },
              {
                "who": "Mia",
                "text": "Yes. ___ are these biscuits?"
              },
              {
                "who": "Shop assistant",
                "text": "They're 25 baht a packet."
              }
            ],
            "stem": "",
            "options": [
              "What much",
              "How much",
              "How much price",
              "How many"
            ],
            "answer": 1,
            "hint": "Look at the assistant's answer. What is it about?",
            "why": "To ask about price, say <em>How much are these…?</em> <em>How much price</em> is a common mistake — <em>much</em> already means money here. <em>How many</em> asks for a number."
          },
          {
            "id": "g6s3ck-5",
            "type": "choose",
            "cefr": "B1",
            "stem": "Which sentence is correct?",
            "options": [
              "Do you drink a lot water after football?",
              "Do you drink lot of water after football?",
              "Do you drink much water after football?",
              "Do you drink many water after football?"
            ],
            "answer": 2,
            "hint": "Water: countable or not? Then look for missing words.",
            "why": "<em>Water</em> is uncountable, so in a question use <em>much</em> (or <em>a lot of</em>). <em>Many</em> is for plurals; <em>a lot water</em> and <em>lot of water</em> each miss a word."
          },
          {
            "id": "g6s3ck-6",
            "type": "picture",
            "cefr": "A2",
            "stem": "Look at the picture. Dad is making som tam: “___ tomatoes do we need?”",
            "options": [
              "How many",
              "How much",
              "How much of",
              "How many of"
            ],
            "answer": 0,
            "img": "tomato",
            "hint": "Can you count them?",
            "why": "<em>Tomatoes</em> are countable and plural, so ask <em>How many tomatoes…?</em> Put the noun straight after <em>How many</em> — no <em>of</em>."
          }
        ]
      }
    },
    {
      "id": "g6s4",
      "n": 4,
      "name": "Good advice",
      "icon": "💡",
      "blurb": "Give good advice with should and shouldn't — and get the form right every time.",
      "modules": [
        {
          "id": "g6m10",
          "name": "should: the form",
          "page": "p.85, p.88",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "<em>should</em> + base verb — the same for everyone. No <em>to</em>, no <em>-s</em>, no <em>do</em>.",
            "body": [
              "<em>Should</em> means “it's a good idea”. <em>Shouldn't</em> means “it's not a good idea”. <em>You should drink more water. You shouldn't eat a lot of sweets.</em>",
              "The form never changes: <em>I / you / he / she / we / they should eat</em>. After <em>should</em>, use the base verb: ✗ <em>should to eat</em>, ✗ <em>should eats</em>, ✗ <em>She shoulds</em>.",
              "Negative: <em>shouldn't</em> (= should not), never ✗ <em>don't should</em>. Questions: put <em>should</em> first — <em>Should I eat fish? What should we do?</em> (✗ <em>Do I should…?</em>) Short answers: <em>Yes, you should. / No, you shouldn't.</em>",
              "When you speak, <em>should</em> is usually short and weak, but <em>shouldn't</em> is strong. Listen for the <em>n't</em>!"
            ],
            "table": [
              [
                "",
                "Form",
                "Example"
              ],
              [
                "+",
                "should + verb",
                "She should go to bed early."
              ],
              [
                "–",
                "shouldn't + verb",
                "You shouldn't stay up late."
              ],
              [
                "?",
                "Should + I/you… + verb?",
                "Should I bring some food?"
              ],
              [
                "Short answers",
                "Yes, … should. / No, … shouldn't.",
                "Yes, you should."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "Mek <strong>should eat</strong> more vegetables."
              },
              {
                "ok": true,
                "s": "<strong>Should I bring</strong> my own drink?"
              },
              {
                "ok": false,
                "s": "We should to go home now.",
                "fix": "We should go home now."
              },
              {
                "ok": false,
                "s": "Fah shoulds study harder.",
                "fix": "Fah should study harder."
              },
              {
                "ok": false,
                "s": "Do we should call him?",
                "fix": "Should we call him?"
              },
              {
                "ok": false,
                "s": "You don't should drink so much cola.",
                "fix": "You shouldn't drink so much cola."
              }
            ],
            "tip": "Should works like can: no to, no -s, no do. You never say “He cans”, so don't say “He shoulds”!"
          },
          "items": [
            {
              "id": "g6m10-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "You look tired, Ploy. You should ___ to bed early tonight.",
              "options": [
                "going",
                "to go",
                "goes",
                "go"
              ],
              "answer": 3,
              "hint": "Which form of the verb comes after should?",
              "why": "After <em>should</em>, use the base verb: <em>should go</em>. No <em>to</em>, no <em>-s</em>, no <em>-ing</em>."
            },
            {
              "id": "g6m10-2",
              "type": "error",
              "cefr": "A2",
              "stem": "[[I think]] Mek [[should to]] [[eat]] [[less]] sugar.",
              "options": [
                "I think",
                "should to",
                "eat",
                "less"
              ],
              "answer": 1,
              "fix": "should",
              "hint": "Should works like can. Check each part.",
              "why": "<em>Should</em> is followed by the base verb with no <em>to</em>: <em>Mek should eat less sugar</em>. <em>Less sugar</em> is correct, because <em>sugar</em> is uncountable."
            },
            {
              "id": "g6m10-3",
              "type": "dialogue",
              "cefr": "B1",
              "lines": [
                {
                  "who": "Pim",
                  "text": "I've got a sore throat. What ___?"
                },
                {
                  "who": "Doctor",
                  "text": "You should drink warm water with honey."
                }
              ],
              "stem": "",
              "options": [
                "should I do",
                "I should do",
                "do I should",
                "should I to do"
              ],
              "answer": 0,
              "hint": "In a question, where does should go?",
              "why": "In questions, <em>should</em> comes before the subject: <em>What should I do?</em> We never use <em>do</em> with <em>should</em>, and there's no <em>to</em>."
            },
            {
              "id": "g6m10-4",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which sentence is correct?",
              "options": [
                "You shouldn't plays games all night.",
                "You shouldn't to play games all night.",
                "You shouldn't play games all night.",
                "You don't should play games all night."
              ],
              "answer": 2,
              "hint": "How do you make should negative? What comes after it?",
              "why": "The negative is <em>shouldn't</em> + base verb: <em>You shouldn't play</em>. No <em>don't</em>, no <em>to</em>, no <em>-s</em>."
            },
            {
              "id": "g6m10-5",
              "type": "situation",
              "cefr": "A2",
              "context": "Your friend asks: <em>“Should I wear my school uniform to the party?”</em> You think it's not a good idea.",
              "stem": "What do you say?",
              "options": [
                "No, you shouldn't.",
                "No, you shouldn't wear.",
                "No, you not should.",
                "No, you don't."
              ],
              "answer": 0,
              "hint": "How do you give a short answer to a question with should?",
              "why": "Short answers to <em>Should I…?</em> repeat <em>should</em>: <em>Yes, you should. / No, you shouldn't.</em> Don't add the main verb, and don't use <em>do</em>."
            },
            {
              "id": "g6m10-6",
              "type": "odd",
              "cefr": "B1",
              "stem": "Odd one out: three sentences are correct. Which one is wrong?",
              "options": [
                "They should drink a lot more water.",
                "He should goes to the dentist.",
                "We should help each other.",
                "She should eat breakfast."
              ],
              "answer": 1,
              "hint": "Should is the same for every person. Check the verb after it.",
              "why": "After <em>should</em>, use the base verb, even with <em>he/she</em>: <em>He should go</em>. <em>Should</em> never changes, and neither does the verb after it."
            }
          ]
        },
        {
          "id": "g6m11",
          "name": "Giving advice",
          "page": "p.85, p.146",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "Problem → advice. Use <em>You should…</em> for a good idea, and <em>You shouldn't…</em> or <em>I don't think you should…</em> for a bad idea.",
            "body": [
              "First listen to the problem. Then give a good idea: <em>“I'm always tired.” — “You should go to bed earlier.”</em> Or say what's a bad idea: <em>“You shouldn't play games so late.”</em>",
              "Make your advice softer with <em>I think</em>: <em>I think you should see a doctor.</em> For a negative, English speakers usually say <em>I don't think you should…</em>: <em>I don't think you should eat that — it smells bad!</em>",
              "Ask for advice with <em>What should I do?</em> or <em>Should I…?</em>: <em>Should I tell the teacher?</em>",
              "<em>Should</em> is advice — you can choose. <em>Must</em> is a strong rule — no choice: <em>You must wear a helmet on a motorbike.</em> but <em>You should try the mango sticky rice.</em>"
            ],
            "table": [
              [
                "Problem",
                "Good idea ✓",
                "Bad idea ✗"
              ],
              [
                "I'm thirsty.",
                "You should drink some water.",
                "You shouldn't drink a lot of cola."
              ],
              [
                "I've got toothache.",
                "You should see a dentist.",
                "You shouldn't eat a lot of sweets."
              ],
              [
                "I'm always tired.",
                "I think you should go to bed earlier.",
                "I don't think you should play games all night."
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "I've got a stomach ache. — You <strong>shouldn't</strong> eat any more cake!"
              },
              {
                "ok": true,
                "s": "<strong>I don't think you should</strong> go out in this storm."
              },
              {
                "ok": true,
                "s": "Mek wants to get fit. He <strong>should</strong> play football more often."
              },
              {
                "ok": false,
                "s": "I'm hungry. — You should go to bed.",
                "fix": "I'm hungry. — You should eat something."
              },
              {
                "ok": false,
                "s": "You should to see a doctor.",
                "fix": "You should see a doctor."
              }
            ],
            "extra": "<em>I think you shouldn't…</em> is not wrong, but <em>I don't think you should…</em> is more common and sounds friendlier.",
            "tip": "Good advice fits the problem: tired → sleep, hungry → eat, toothache → dentist."
          },
          "items": [
            {
              "id": "g6m11-1",
              "type": "situation",
              "cefr": "A2",
              "context": "Your friend Jay says: <em>“I've got a terrible toothache.”</em>",
              "stem": "What's the best advice?",
              "options": [
                "You should eat more sweets.",
                "You shouldn't see a dentist.",
                "You should drink some cola.",
                "You should see a dentist."
              ],
              "answer": 3,
              "hint": "Which idea will really help Jay's teeth?",
              "why": "Good advice fits the problem: toothache → <em>see a dentist</em>. Sweets and cola are bad for teeth, and <em>shouldn't see a dentist</em> is the opposite of good advice."
            },
            {
              "id": "g6m11-2",
              "type": "gap",
              "cefr": "A2",
              "stem": "Leo eats burgers every day and never does any exercise. He ___ eat so much fast food.",
              "options": [
                "doesn't should",
                "should",
                "shouldn't",
                "should not to"
              ],
              "answer": 2,
              "hint": "Is eating so much fast food a good idea or a bad idea?",
              "why": "Eating fast food every day is a bad idea, so use <em>shouldn't</em>. <em>Doesn't should</em> and <em>should not to</em> are wrong forms."
            },
            {
              "id": "g6m11-3",
              "type": "dialogue",
              "cefr": "B1",
              "lines": [
                {
                  "who": "Anna",
                  "text": "My new phone is broken, and I only bought it last week!"
                },
                {
                  "who": "Sam",
                  "text": "I think you ___ take it back to the shop."
                }
              ],
              "stem": "",
              "options": [
                "don't should",
                "shouldn't",
                "should",
                "should to"
              ],
              "answer": 2,
              "hint": "What's a good idea for Anna? Then check the form.",
              "why": "Taking the phone back is a good idea, so <em>I think you should take it back</em>. <em>Shouldn't</em> gives the opposite advice; <em>should to</em> and <em>don't should</em> are wrong forms."
            },
            {
              "id": "g6m11-4",
              "type": "meaning",
              "cefr": "B1",
              "stem": "Mum says: <em>“I don't think you should go out tonight.”</em> What does Mum mean?",
              "options": [
                "Going out tonight is not a good idea.",
                "You must go out tonight.",
                "Going out tonight is a good idea.",
                "Mum doesn't know if you're going out."
              ],
              "answer": 0,
              "hint": "Where is the negative? Which part of the sentence does it really change?",
              "why": "<em>I don't think you should…</em> is a polite way to say “it's not a good idea”. The negative goes on <em>think</em>, but it changes the advice."
            },
            {
              "id": "g6m11-5",
              "type": "choose",
              "cefr": "B1",
              "context": "Fah wants to get better at English.",
              "stem": "Which is the best advice?",
              "options": [
                "She should watch films in Thai.",
                "She shouldn't speak English.",
                "She should to watch films in English.",
                "She should watch films in English."
              ],
              "answer": 3,
              "hint": "Check two things: does it help her English, and is the form right?",
              "why": "<em>She should watch films in English</em> is useful and correct. Films in Thai won't help her English, and <em>should to</em> is a wrong form."
            },
            {
              "id": "g6m11-6",
              "type": "odd",
              "cefr": "B1",
              "context": "Ploy says: <em>“I always feel tired at school.”</em>",
              "stem": "Odd one out: which is NOT good advice?",
              "options": [
                "You shouldn't play games at night.",
                "You should drink more cola at night.",
                "You should go to bed earlier.",
                "I don't think you should stay up late."
              ],
              "answer": 1,
              "hint": "Which idea will make the problem worse?",
              "why": "Cola at night can keep you awake, so it makes Ploy more tired. The other three all help her sleep more — they're good advice."
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g6s4ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g6s4ck-1",
            "type": "gap",
            "cefr": "A2",
            "stem": "We ___ throw rubbish in the river. It's bad for the fish.",
            "options": [
              "should",
              "shouldn't",
              "don't should",
              "not should"
            ],
            "answer": 1,
            "hint": "Good idea or bad idea? Then check the negative form.",
            "why": "Throwing rubbish in a river is a bad idea, so use <em>shouldn't</em>. The negative of <em>should</em> is <em>shouldn't</em> — never <em>don't should</em>."
          },
          {
            "id": "g6s4ck-2",
            "type": "dialogue",
            "cefr": "A2",
            "lines": [
              {
                "who": "Mia",
                "text": "___ bring anything to your party?"
              },
              {
                "who": "Leo",
                "text": "Yes, please bring some snacks."
              }
            ],
            "stem": "",
            "options": [
              "Should I",
              "Do I should",
              "I should",
              "Should I to"
            ],
            "answer": 0,
            "hint": "How do you make a question with should?",
            "why": "To ask for advice, put <em>should</em> before the subject: <em>Should I bring…?</em> No <em>do</em> and no <em>to</em>."
          },
          {
            "id": "g6s4ck-3",
            "type": "error",
            "cefr": "B1",
            "stem": "[[Fah]] [[doesn't should]] [[drink]] [[so much]] cola.",
            "options": [
              "Fah",
              "doesn't should",
              "drink",
              "so much"
            ],
            "answer": 1,
            "fix": "shouldn't",
            "hint": "Check the negative form carefully.",
            "why": "The negative of <em>should</em> is <em>shouldn't</em>: <em>Fah shouldn't drink so much cola.</em> <em>So much</em> is fine, because <em>cola</em> here is uncountable."
          },
          {
            "id": "g6s4ck-4",
            "type": "situation",
            "cefr": "A2",
            "context": "Your cousin says: <em>“I want to be healthier.”</em>",
            "stem": "What's the best advice?",
            "options": [
              "You shouldn't eat vegetables.",
              "You should eat more sweets.",
              "You should eating more vegetables.",
              "You should eat more vegetables."
            ],
            "answer": 3,
            "hint": "Find a healthy idea with the correct form.",
            "why": "Vegetables are healthy, so <em>You should eat more vegetables</em> is good advice. After <em>should</em>, use the base verb <em>eat</em>, not <em>eating</em>."
          },
          {
            "id": "g6s4ck-5",
            "type": "classify",
            "cefr": "B1",
            "context": "A sign at a swimming pool says: <em>“You must take a shower before you swim.”</em>",
            "stem": "Which group is this sentence in?",
            "options": [
              "advice — a good idea",
              "advice — a bad idea",
              "asking for advice",
              "a strong rule — no choice"
            ],
            "answer": 3,
            "hint": "Can swimmers choose not to do it?",
            "why": "<em>Must</em> is a strong rule — at this pool you have no choice. <em>Should</em> is for advice, when you can choose: <em>You should swim every week.</em>"
          },
          {
            "id": "g6s4ck-6",
            "type": "meaning",
            "cefr": "B1",
            "stem": "Your teacher says: <em>“You should read in English every day.”</em> What does she mean?",
            "options": [
              "It isn't a good idea to read in English every day.",
              "You read in English every day.",
              "It's a good idea to read in English every day.",
              "It's a school rule: you must read in English every day."
            ],
            "answer": 2,
            "hint": "Think about what should means.",
            "why": "<em>Should</em> gives advice — a good idea that you can choose to follow. A rule with no choice uses <em>must</em>. <em>Shouldn't</em> would mean it's not a good idea."
          }
        ]
      }
    },
    {
      "id": "g6s5",
      "n": 5,
      "name": "At the café",
      "icon": "☕",
      "blurb": "Order food like a pro and write a friendly email invitation.",
      "modules": [
        {
          "id": "g6m12",
          "name": "Ordering food",
          "page": "p.86",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "In a café, the waiter offers and asks; you answer politely: <em>Could I have…, please? / I'd like… / I think I'll have…</em>",
            "body": [
              "The waiter or waitress says: <em>Can I help you? Are you ready to order? What can I get you? What would you like? Would you like a drink with that? Small or large? Can I get you anything else? That's 85 baht, please. Here's your change. Enjoy your meal!</em>",
              "The customer says: <em>Could I have a chicken burger, please? I'd like a milkshake. I think I'll have a pancake. Have you got any orange juice? How much is that? Can we have the bill, please?</em>",
              "Grammar inside: <em>I'd like</em> = I would like (polite; ✗ <em>I like a milkshake, please</em>). After <em>Could I</em> use the base verb <em>have</em>. For prices, ask <em>How much…?</em>, never <em>How many…?</em>",
              "Be polite: add <em>please</em> and <em>thank you</em>. <em>I want a burger</em> isn't wrong English, but it can sound rude to a waiter."
            ],
            "table": [
              [
                "Waiter / waitress",
                "Customer"
              ],
              [
                "Are you ready to order?",
                "Yes. Could I have the green curry, please?"
              ],
              [
                "Would you like a drink with that?",
                "Yes, I'd like an orange juice, please."
              ],
              [
                "Small or large?",
                "Large, please."
              ],
              [
                "Can I get you anything else?",
                "No, thanks. How much is that?"
              ],
              [
                "That's 95 baht, please.",
                "Here you are."
              ],
              [
                "Here's your change. Enjoy your meal!",
                "Thank you!"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "<strong>Could I have</strong> the vegetable rice, please?"
              },
              {
                "ok": true,
                "s": "<strong>I'd like</strong> a bottle of water, please."
              },
              {
                "ok": true,
                "s": "<strong>Can we have the bill</strong>, please?"
              },
              {
                "ok": false,
                "s": "I like a milkshake, please.",
                "fix": "I'd like a milkshake, please."
              },
              {
                "ok": false,
                "s": "Could I having a pancake, please?",
                "fix": "Could I have a pancake, please?"
              },
              {
                "ok": false,
                "s": "How many is that?",
                "fix": "How much is that?"
              }
            ],
            "extra": "When you order one drink, <em>an orange juice</em> or <em>a lemonade</em> is fine — it means one glass or bottle. In other sentences, use the container: <em>I drink a glass of orange juice every day.</em>",
            "tip": "Learn them in pairs: Ready to order? → Could I have…? / Anything else? → No, thanks."
          },
          "items": [
            {
              "id": "g6m12-1",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Waitress",
                  "text": "Hello. Are you ___ to order?"
                },
                {
                  "who": "Mek",
                  "text": "Yes. Could I have the chicken curry, please?"
                }
              ],
              "stem": "",
              "options": [
                "ready for",
                "already",
                "ready",
                "finish"
              ],
              "answer": 2,
              "hint": "Which word means you've decided what you want?",
              "why": "<em>Are you ready to order?</em> means “Do you know what you want?” <em>Already</em> sounds similar but means “before now”, and <em>ready for</em> needs a noun after it."
            },
            {
              "id": "g6m12-2",
              "type": "dialogue",
              "cefr": "A2",
              "lines": [
                {
                  "who": "Waiter",
                  "text": "What can I get you?"
                },
                {
                  "who": "Fah",
                  "text": "___ an orange juice, please."
                }
              ],
              "stem": "",
              "options": [
                "I'd like",
                "I would",
                "I'm like",
                "I like"
              ],
              "answer": 0,
              "hint": "Which phrase is a polite way to say “I want”?",
              "why": "<em>I'd like</em> (= I would like) is the polite way to order. <em>I like</em> means you enjoy something in general, and <em>I would</em> needs <em>like</em> after it."
            },
            {
              "id": "g6m12-3",
              "type": "situation",
              "cefr": "A2",
              "context": "You and your friends have finished your meal at a café. You want to pay.",
              "stem": "What do you say to the waiter?",
              "options": [
                "Can we have the change, please?",
                "How many is the bill, please?",
                "Can we have the bill, please?",
                "Can we have the menu, please?"
              ],
              "answer": 2,
              "hint": "What's the piece of paper that shows how much you must pay?",
              "why": "<em>Can we have the bill, please?</em> asks for the paper with the price. The <em>change</em> is the money you get back, and the <em>menu</em> is for choosing food."
            },
            {
              "id": "g6m12-4",
              "type": "meaning",
              "cefr": "A2",
              "stem": "The waiter asks: <em>“Would you like a drink with that?”</em> What is he doing?",
              "options": [
                "offering you a drink",
                "giving you your change",
                "asking you to pay",
                "asking about the price"
              ],
              "answer": 0,
              "hint": "What does Would you like…? usually do?",
              "why": "<em>Would you like…?</em> is an offer. The waiter wants to know if you want a drink with your food. He isn't talking about money."
            },
            {
              "id": "g6m12-5",
              "type": "error",
              "cefr": "B1",
              "stem": "Excuse me, [[how many]] [[is]] [[a plate]] [[of]] fried rice?",
              "options": [
                "how many",
                "is",
                "a plate",
                "of"
              ],
              "answer": 0,
              "fix": "how much",
              "hint": "What does the customer want to know?",
              "why": "To ask a price, use <em>How much is…?</em> <em>How many</em> is for counting things, like <em>How many plates?</em> <em>A plate of fried rice</em> is correct."
            },
            {
              "id": "g6m12-6",
              "type": "odd",
              "cefr": "A2",
              "stem": "Odd one out: three of these are said by the waiter. Which one does the customer say?",
              "options": [
                "Are you ready to order?",
                "How much is that?",
                "Can I get you anything else?",
                "Here's your change."
              ],
              "answer": 1,
              "hint": "Who pays? Who brings the food?",
              "why": "The customer asks <em>How much is that?</em> before paying. The waiter asks if you're ready, offers more food and gives you your change."
            }
          ]
        },
        {
          "id": "g6m13",
          "name": "Invitations",
          "page": "p.87",
          "cefr": "A2",
          "extra": false,
          "rule": {
            "key": "A good invitation says what, when and where — and asks the person to come: <em>Would you like to come?</em>",
            "body": [
              "An informal email invitation answers four questions: What's the event? When and where is it? Would you like to come? Do you need to bring anything? (This is just like the A2 Key email task.)",
              "Inviting: <em>I'm having a party on Saturday. I'm inviting some friends to go to the night market. Would you like to come? Can you come? Please come!</em> Details: <em>It starts at 6 pm. We're meeting at the park. Please bring your own drinks. Can you bring some snacks?</em>",
              "Ending: <em>Let me know if you can come / can't make it. Hope you can come! See you there! Don't be late!</em> (<em>make it</em> = be able to come)",
              "Grammar traps: <em>Would you like <strong>to</strong> come?</em> (✗ <em>Would you like come?</em>). <em>Let me know</em> (✗ <em>Let me to know</em>). <em>Can you bring</em> + base verb. Use contractions in a friendly email: <em>I'm, it's, don't</em>."
            ],
            "table": [
              [
                "Job",
                "Useful expressions"
              ],
              [
                "Invite",
                "I'm inviting some friends to… / Would you like to come? / Can you come? / Please come!"
              ],
              [
                "Time and place",
                "It starts at (7 pm). / We're meeting at (the park)."
              ],
              [
                "What to bring",
                "Please bring (your own drinks). / Can you bring (some food)?"
              ],
              [
                "End",
                "Let me know if you can / can't make it. / Hope you can come! / See you there! / Don't be late!"
              ]
            ],
            "examples": [
              {
                "ok": true,
                "s": "Hi Beam, I'm having a pizza party on Friday. <strong>Would you like to come?</strong>"
              },
              {
                "ok": true,
                "s": "<strong>Let me know</strong> if you can't make it."
              },
              {
                "ok": false,
                "s": "Would you like come to my party?",
                "fix": "Would you like to come to my party?"
              },
              {
                "ok": false,
                "s": "Let me to know if you can come.",
                "fix": "Let me know if you can come."
              },
              {
                "ok": false,
                "s": "Please bring you own snacks.",
                "fix": "Please bring your own snacks."
              }
            ],
            "tip": "Before you send: What? When? Where? What to bring? And one question: Would you like to come?"
          },
          "items": [
            {
              "id": "g6m13-1",
              "type": "gap",
              "cefr": "A2",
              "stem": "Hi Mint, I'm having a barbecue on Sunday. Would you like ___? It starts at 4 pm.",
              "options": [
                "coming",
                "come",
                "for come",
                "to come"
              ],
              "answer": 3,
              "hint": "Would you like + which verb form?",
              "why": "<em>Would you like</em> + <em>to</em> + verb: <em>Would you like to come?</em> <em>Would you like come</em> is missing <em>to</em>, and <em>coming</em> is the wrong form."
            },
            {
              "id": "g6m13-2",
              "type": "choose",
              "cefr": "A2",
              "stem": "Which sentence is correct for an invitation?",
              "options": [
                "Please to bring your own drinks.",
                "Please bring you own drinks.",
                "Please bring your own drinks.",
                "Please bringing your own drinks."
              ],
              "answer": 2,
              "hint": "Check the verb after please, and the word before own.",
              "why": "<em>Please</em> + base verb: <em>Please bring</em>. Before <em>own</em> we need a possessive: <em>your own drinks</em>, not <em>you own</em>."
            },
            {
              "id": "g6m13-3",
              "type": "error",
              "cefr": "A2",
              "stem": "[[Can]] [[you]] [[bringing]] [[some]] snacks?",
              "options": [
                "Can",
                "you",
                "bringing",
                "some"
              ],
              "answer": 2,
              "fix": "bring",
              "hint": "Can is followed by which form of the verb?",
              "why": "After <em>can</em>, use the base verb: <em>Can you bring some snacks?</em> <em>Some</em> is correct — this is a request."
            },
            {
              "id": "g6m13-4",
              "type": "situation",
              "cefr": "B1",
              "context": "You want to invite your friend Ken to watch a football match at your house on Saturday.",
              "stem": "Which is the best first line for your email?",
              "options": [
                "Hi Ken, would you like watching the football at my house on Saturday?",
                "Hi Ken, I watched the football at my house on Saturday.",
                "Hi Ken, do you like watching football at my house?",
                "Hi Ken, would you like to watch the football at my house on Saturday?"
              ],
              "answer": 3,
              "hint": "An invitation asks about a plan. Check the verb form, too.",
              "why": "<em>Would you like to…?</em> invites someone to do something. <em>Do you like…?</em> asks what he enjoys in general, and <em>I watched</em> is about the past."
            },
            {
              "id": "g6m13-5",
              "type": "meaning",
              "cefr": "A2",
              "context": "You invited Ploy to your party.",
              "stem": "Ploy replies: <em>“Sorry, I can't make it on Saturday.”</em> What does she mean?",
              "options": [
                "She can come on Saturday.",
                "She can't come on Saturday.",
                "She can't make a cake on Saturday.",
                "She can't cook on Saturday."
              ],
              "answer": 1,
              "hint": "In invitations, make it has a special meaning.",
              "why": "<em>I can't make it</em> means “I can't come”. It's very common in invitations: <em>Let me know if you can't make it.</em> It has nothing to do with making food."
            },
            {
              "id": "g6m13-6",
              "type": "odd",
              "cefr": "A2",
              "stem": "Odd one out: three of these can end an invitation email. Which one can't?",
              "options": [
                "Hope you can come!",
                "It starts at 7 pm.",
                "See you there!",
                "Let me know if you can come."
              ],
              "answer": 1,
              "hint": "Which one gives information about the party?",
              "why": "<em>It starts at 7 pm</em> gives a detail about the time, so it goes in the middle. <em>See you there!</em>, <em>Hope you can come!</em> and <em>Let me know…</em> are good endings."
            }
          ]
        }
      ],
      "checkpoint": {
        "id": "g6s5ck",
        "name": "Checkpoint",
        "items": [
          {
            "id": "g6s5ck-1",
            "type": "dialogue",
            "cefr": "B1",
            "lines": [
              {
                "who": "Waiter",
                "text": "Here's your pizza. ___ I get you anything else?"
              },
              {
                "who": "Anna",
                "text": "No, thanks. Just the bill, please."
              }
            ],
            "stem": "",
            "options": [
              "Am",
              "Have",
              "Do",
              "Can"
            ],
            "answer": 3,
            "hint": "Which word makes a polite offer to help?",
            "why": "<em>Can I get you anything else?</em> is the waiter's polite offer. <em>Do I get…?</em> asks about a habit, and <em>Am</em> or <em>Have</em> can't start a question with <em>I get</em>."
          },
          {
            "id": "g6s5ck-2",
            "type": "gap",
            "cefr": "A2",
            "stem": "Let me ___ if you can't make it to my party.",
            "options": [
              "know",
              "knows",
              "knowing",
              "to know"
            ],
            "answer": 0,
            "hint": "Let me + which verb form?",
            "why": "<em>Let me</em> + base verb: <em>Let me know</em>. No <em>to</em>, no <em>-ing</em>, no <em>-s</em>. It's a friendly way to say “tell me”."
          },
          {
            "id": "g6s5ck-3",
            "type": "situation",
            "cefr": "A2",
            "context": "The waiter asks: <em>“What would you like?”</em> You want the green curry.",
            "stem": "What do you say?",
            "options": [
              "I'd like have the green curry, please.",
              "Could I having the green curry, please?",
              "Could I has the green curry, please?",
              "Could I have the green curry, please?"
            ],
            "answer": 3,
            "hint": "After could, which form of have?",
            "why": "<em>Could I have…, please?</em> is a polite way to order. After <em>could</em>, use the base verb <em>have</em>. <em>I'd like have</em> is wrong — say <em>I'd like the green curry</em>."
          },
          {
            "id": "g6s5ck-4",
            "type": "error",
            "cefr": "B1",
            "stem": "[[I'm]] [[inviting]] some friends [[to go]] to the beach. Would you like [[come]]?",
            "options": [
              "I'm",
              "inviting",
              "to go",
              "come"
            ],
            "answer": 3,
            "fix": "to come",
            "hint": "Check every verb pattern in both sentences.",
            "why": "After <em>Would you like</em>, use <em>to</em> + verb: <em>Would you like to come?</em> <em>I'm inviting some friends to go…</em> is correct, just like the Writing bank."
          },
          {
            "id": "g6s5ck-5",
            "type": "meaning",
            "cefr": "A2",
            "stem": "The waitress asks: <em>“Are you ready to order?”</em> What does she want to know?",
            "options": [
              "if you want to pay now",
              "if you finished your meal",
              "if you know what you want",
              "if you are hungry"
            ],
            "answer": 2,
            "hint": "When does a waitress usually ask this — before or after you eat?",
            "why": "<em>Are you ready to order?</em> means “Have you decided what you want to eat?” Waiters ask it before the meal, not when you pay."
          },
          {
            "id": "g6s5ck-6",
            "type": "odd",
            "cefr": "A2",
            "stem": "Odd one out: an invitation needs a time and a place. Which sentence gives neither?",
            "options": [
              "Please bring some snacks.",
              "It starts at 3 pm.",
              "We're meeting at the park.",
              "The party is at my house."
            ],
            "answer": 0,
            "hint": "Look for words about when or where.",
            "why": "<em>Please bring some snacks</em> says what to bring, not when or where. The other three give a time (<em>3 pm</em>) or a place (<em>the park, my house</em>)."
          }
        ]
      }
    }
  ]
};
