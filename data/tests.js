// Trail Mix — tests: Trailhead Check (triage) + two TU-style mocks (format unofficial).
// Units: Gateway to the World A2, printed Unit 6 "Fabulous food!" (pp.78–91) and Unit 7 "Into the wild" (pp.92–103).
// All texts, items and names are original; people and places in passages are fictional.
window.TESTS = window.TESTS || [];
window.TESTS.push({
 "id": "triage",
 "kind": "triage",
 "name": "Trailhead Check",
 "minutes": 0,
 "blurb": "44 quick questions: one for every study module in Unit 6 · Fabulous food! (pp.78–91) and Unit 7 · Into the wild (pp.92–103). Every mistake shows you a module to study first.",
 "items": [
  {
   "id": "tri-1",
   "module": "g6m1",
   "unit": 6,
   "type": "odd",
   "cefr": "A2",
   "stem": "Odd one out: three of these are countable. Which one is uncountable?",
   "options": [
    "carrot",
    "rice",
    "egg",
    "grape"
   ],
   "answer": 1,
   "hint": "Can you say 'two ___s'? Try it with each word.",
   "why": "<em>Rice</em> is uncountable: we say <em>some rice</em> or <em>a bowl of rice</em>, never <em>two rices</em>. You can count the others: <em>two carrots, three eggs, some grapes</em>."
  },
  {
   "id": "tri-2",
   "module": "g6m2",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "Mek is always hungry. He eats ___ at lunch every day.",
   "options": [
    "two rices",
    "two bowls of rice",
    "two bowl of rice",
    "two bowls of rices"
   ],
   "answer": 1,
   "hint": "Rice can't be counted by itself. What can you count instead?",
   "why": "Count uncountable food with a container: <em>two bowls of rice</em>. The container gets the plural <em>-s</em>; <em>rice</em> never does, so <em>two rices</em> is wrong."
  },
  {
   "id": "tri-3",
   "module": "g6m3",
   "unit": 6,
   "type": "choose",
   "cefr": "B1",
   "stem": "Which sentence is correct?",
   "options": [
    "Can you give me some informations about the trip?",
    "Can you give me an information about the trip?",
    "Can you give me a few informations about the trip?",
    "Can you give me some information about the trip?"
   ],
   "answer": 3,
   "hint": "Is this noun countable in English? Check before you add -s or an.",
   "why": "<em>Information</em> is always uncountable: no <em>-s</em>, no <em>an</em>, no <em>a few</em>. Say <em>some information</em> or <em>a piece of information</em>."
  },
  {
   "id": "tri-4",
   "module": "g6m4",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "We waited for ___ hour, and then our food finally arrived.",
   "options": [
    "a",
    "an",
    "some",
    "any"
   ],
   "answer": 1,
   "hint": "Say the next word aloud. Does it start with a vowel sound or a consonant sound?",
   "why": "Use <em>an</em> before a vowel <strong>sound</strong>. The <em>h</em> in <em>hour</em> is silent, so the word starts with a vowel sound: <em>an hour</em>. Compare <em>a house</em>."
  },
  {
   "id": "tri-5",
   "module": "g6m5",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "We can't make pancakes. There aren't ___ eggs in the fridge.",
   "options": [
    "some",
    "a",
    "any",
    "much"
   ],
   "answer": 2,
   "hint": "Is the sentence positive or negative? Is eggs singular or plural?",
   "why": "Use <em>any</em> in negative sentences and questions: <em>There aren't any eggs.</em> <em>Some</em> is for positive sentences, <em>a</em> is for one thing, and <em>much</em> doesn't go with plurals."
  },
  {
   "id": "tri-6",
   "module": "g6m6",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "___ two cafés and a 7-Eleven near my school.",
   "options": [
    "There are",
    "There is",
    "Have",
    "There have"
   ],
   "answer": 0,
   "hint": "Look at the first thing after the gap: one café or two?",
   "why": "To say what is in a place, use <em>there is / there are</em>, not <em>have</em>. The first noun, <em>two cafés</em>, is plural, so it's <em>There are</em>."
  },
  {
   "id": "tri-7",
   "module": "g6m7",
   "unit": 6,
   "type": "situation",
   "cefr": "A2",
   "context": "Your friend Pim is visiting your home. You want to offer her a drink.",
   "stem": "What do you say?",
   "options": [
    "Would you like any orange juice?",
    "Do you like some orange juice?",
    "You like some orange juice?",
    "Would you like some orange juice?"
   ],
   "answer": 3,
   "hint": "You are offering something. Do offers follow the normal question rule?",
   "why": "In offers and requests we use <em>some</em>, even in a question: <em>Would you like some…?</em> <em>Do you like…?</em> asks about your taste; it isn't an offer."
  },
  {
   "id": "tri-8",
   "module": "g6m8",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "We can't make a big salad. There aren't ___ tomatoes in the fridge.",
   "options": [
    "many",
    "much",
    "a few of",
    "lot of"
   ],
   "answer": 0,
   "hint": "Tomatoes: countable or uncountable? And is the sentence negative?",
   "why": "Use <em>many</em> with plural countable nouns in negatives: <em>There aren't many tomatoes.</em> <em>Much</em> is for uncountable nouns like <em>milk</em>, and <em>lot of</em> needs <em>a</em>."
  },
  {
   "id": "tri-9",
   "module": "g6m9",
   "unit": 6,
   "type": "dialogue",
   "cefr": "A2",
   "lines": [
    {
     "who": "Ploy",
     "text": "How ___ sugar do you want in your tea?"
    },
    {
     "who": "Fah",
     "text": "Not much. Just one spoon, please."
    }
   ],
   "stem": "",
   "options": [
    "many",
    "a lot",
    "any",
    "much"
   ],
   "answer": 3,
   "hint": "Can you count sugar? Look at Fah's answer too.",
   "why": "<em>Sugar</em> is uncountable, so ask <em>How much…?</em> <em>How many</em> is for plural nouns: <em>How many spoons?</em> Fah's answer, <em>Not much</em>, matches."
  },
  {
   "id": "tri-10",
   "module": "g6m10",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "You look really tired. You should ___ to bed early tonight.",
   "options": [
    "to go",
    "go",
    "goes",
    "going"
   ],
   "answer": 1,
   "hint": "Which verb form follows can or must? Should works the same way.",
   "why": "After <em>should</em>, use the base verb with no <em>to</em> and no <em>-s</em>: <em>You should go.</em> <em>Should to go</em> is a very common mistake."
  },
  {
   "id": "tri-11",
   "module": "g6m11",
   "unit": 6,
   "type": "situation",
   "cefr": "A2",
   "context": "Your friend Beam says, \"I've got a terrible toothache.\"",
   "stem": "What is the best advice?",
   "options": [
    "I don't think you should see a dentist.",
    "I think you should eat some sweets.",
    "I think you should see a dentist.",
    "I don't think you should brush your teeth."
   ],
   "answer": 2,
   "hint": "Advice means 'a good idea'. Which idea would really help Beam?",
   "why": "Good advice for a toothache: <em>I think you should see a dentist.</em> <em>I don't think you should…</em> means 'it's not a good idea', so it gives the wrong advice here."
  },
  {
   "id": "tri-12",
   "module": "g6m12",
   "unit": 6,
   "type": "dialogue",
   "cefr": "A2",
   "lines": [
    {
     "who": "Waiter",
     "text": "Are you ready to order?"
    },
    {
     "who": "Mint",
     "text": "Yes. ___ a chicken burger, please?"
    }
   ],
   "stem": "",
   "options": [
    "Would you like",
    "Could you have",
    "What about",
    "Could I have"
   ],
   "answer": 3,
   "hint": "Mint is the customer. How does a customer ask politely for food?",
   "why": "Customers order with <em>Could I have…, please?</em> <em>Would you like…?</em> is what the waiter says, and <em>Could you have</em> asks if the waiter will eat it!"
  },
  {
   "id": "tri-13",
   "module": "g6m13",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "context": "From an email invitation:",
   "stem": "I'm having a pizza party on Saturday. Let me ___ if you can come!",
   "options": [
    "to know",
    "know",
    "knowing",
    "known"
   ],
   "answer": 1,
   "hint": "After let me, which verb form do we use? Compare 'Let me help you.'",
   "why": "In invitations we write <em>Let me know if you can come.</em> After <em>let me</em>, use the base verb, with no <em>to</em> and no <em>-ing</em>."
  },
  {
   "id": "tri-14",
   "module": "v6m1",
   "unit": 6,
   "type": "picture",
   "cefr": "A2",
   "img": "melon",
   "stem": "What's in the picture?",
   "options": [
    "melon",
    "lemon",
    "pear",
    "pepper"
   ],
   "answer": 0,
   "hint": "Think about the size and shape of this fruit. Then check the spelling.",
   "why": "This is a <em>melon</em>: a big round fruit, sweet and juicy inside. Careful: <em>lemon</em> has the same letters, but it is a small, sour, yellow fruit."
  },
  {
   "id": "tri-15",
   "module": "v6m2",
   "unit": 6,
   "type": "choose",
   "cefr": "A2",
   "stem": "Mek is cutting a vegetable and his eyes are full of tears. What is he probably cutting?",
   "options": [
    "an onion",
    "a carrot",
    "a cucumber",
    "a cabbage"
   ],
   "answer": 0,
   "hint": "Which vegetable has a strong smell when you cut it?",
   "why": "Cutting an <em>onion</em> makes your eyes water. Carrots, cucumbers and cabbages don't do this."
  },
  {
   "id": "tri-16",
   "module": "v6m3",
   "unit": 6,
   "type": "odd",
   "cefr": "A2",
   "stem": "Which one is NOT a dairy food (a food made from milk)?",
   "options": [
    "butter",
    "yoghurt",
    "sausage",
    "cream"
   ],
   "answer": 2,
   "hint": "Dairy food comes from milk. Think about what each one is made from.",
   "why": "A <em>sausage</em> is made from meat. <em>Butter</em>, <em>yoghurt</em> and <em>cream</em> are all made from milk, so they are dairy foods."
  },
  {
   "id": "tri-17",
   "module": "v6m4",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "Tonkla made a cold ___ with milk, ice cream and bananas.",
   "options": [
    "milkshake",
    "lemonade",
    "soft drink",
    "soup"
   ],
   "answer": 0,
   "hint": "Look at the three things he used. Which drink do you make with them?",
   "why": "A <em>milkshake</em> is a cold drink made with milk and ice cream. <em>Lemonade</em> is made with lemons, and a <em>soft drink</em> is a fizzy drink like cola."
  },
  {
   "id": "tri-18",
   "module": "v6m5",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "I put some ___ on my toast. It's made from strawberries and sugar.",
   "options": [
    "honey",
    "butter",
    "salt",
    "jam"
   ],
   "answer": 3,
   "hint": "Read the second sentence again: what is it made from?",
   "why": "<em>Jam</em> is made from fruit and sugar, and we spread it on toast. <em>Honey</em> is sweet too, but bees make it."
  },
  {
   "id": "tri-19",
   "module": "v6m6",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "It's cold and rainy, so Mum is making a hot bowl of chicken ___.",
   "options": [
    "salad",
    "toast",
    "soup",
    "pizza"
   ],
   "answer": 2,
   "hint": "What do we eat from a bowl when we want to feel warm?",
   "why": "We eat hot <em>soup</em> from a bowl. <em>Salad</em> is usually cold, and we don't eat toast or pizza from a bowl."
  },
  {
   "id": "tri-20",
   "module": "v6m7",
   "unit": 6,
   "type": "gap",
   "cefr": "B1",
   "stem": "Could you get a ___ of jam from the cupboard, please?",
   "options": [
    "jar",
    "bottle",
    "cup",
    "can"
   ],
   "answer": 0,
   "hint": "Picture jam in a shop. What kind of container is it sold in?",
   "why": "Jam comes in a <em>jar</em>: a glass container with a lid. Lemonade comes in a <em>bottle</em>, tea is in a <em>cup</em> and cola is in a <em>can</em>."
  },
  {
   "id": "tri-21",
   "module": "v6m8",
   "unit": 6,
   "type": "gap",
   "cefr": "B1",
   "stem": "I can't open this ___ of beans. Where's the can opener?",
   "options": [
    "jar",
    "tin",
    "packet",
    "bag"
   ],
   "answer": 1,
   "hint": "Read the second sentence. What do you open with a can opener?",
   "why": "A <em>tin</em> (US: <em>can</em>) is a metal container for beans or soup, and you open it with a can opener. A <em>jar</em> is made of glass and has a lid."
  },
  {
   "id": "tri-22",
   "module": "v6m9",
   "unit": 6,
   "type": "gap",
   "cefr": "B1",
   "stem": "In British English, the thin, dry slices of potato that you buy in a packet are called ___.",
   "options": [
    "chips",
    "crisps",
    "biscuits",
    "sweets"
   ],
   "answer": 1,
   "hint": "British and American English use different words for this snack.",
   "why": "In British English they are <em>crisps</em> (US: <em>chips</em>). In Britain, <em>chips</em> are hot fried potatoes, like French fries."
  },
  {
   "id": "tri-23",
   "module": "v6m10",
   "unit": 6,
   "type": "gap",
   "cefr": "A2",
   "stem": "Fah wants to eat more ___ food, so she has fruit after school instead of crisps.",
   "options": [
    "healthy",
    "health",
    "healthily",
    "unhealthy"
   ],
   "answer": 0,
   "hint": "You need an adjective before food. Which one matches 'fruit instead of crisps'?",
   "why": "Before a noun we need an adjective: <em>healthy food</em>. <em>Health</em> is a noun and <em>healthily</em> is an adverb. <em>Unhealthy</em> is the opposite of what Fah wants."
  },
  {
   "id": "tri-24",
   "module": "g7m1",
   "unit": 7,
   "type": "gap",
   "cefr": "A2",
   "stem": "Ken ___ visit his grandparents in Chiang Mai next month.",
   "options": [
    "going to",
    "is going to",
    "is going",
    "are going to"
   ],
   "answer": 1,
   "hint": "Check three things: the verb be, the word to, and the subject.",
   "why": "The form is <em>am/is/are + going to + base verb</em>. <em>Ken</em> is one person, so <em>is going to</em>. Don't leave out <em>is</em> or <em>to</em>."
  },
  {
   "id": "tri-25",
   "module": "g7m2",
   "unit": 7,
   "type": "gap",
   "cefr": "B1",
   "stem": "Look at those dark clouds over the hills! It ___.",
   "options": [
    "is going to raining",
    "going to rain",
    "rains",
    "is going to rain"
   ],
   "answer": 3,
   "hint": "You can see something now that tells you about the future.",
   "why": "When we can see evidence now, we use <em>going to</em> + base verb: <em>It's going to rain.</em> No <em>-ing</em> after <em>to</em>, and don't leave out <em>is</em>."
  },
  {
   "id": "tri-26",
   "module": "g7m3",
   "unit": 7,
   "type": "gap",
   "cefr": "A2",
   "stem": "Don't worry about the test tomorrow. I'm sure you ___ well.",
   "options": [
    "will to do",
    "will does",
    "are do",
    "will do"
   ],
   "answer": 3,
   "hint": "What comes after will? Is it the same for every person?",
   "why": "After <em>will</em>, use the base verb, the same for everyone: <em>you will do</em>. No <em>to</em> and no <em>-s</em> after <em>will</em>."
  },
  {
   "id": "tri-27",
   "module": "g7m4",
   "unit": 7,
   "type": "gap",
   "cefr": "A2",
   "stem": "In 2050, I think people ___ to the Moon for their holidays.",
   "options": [
    "go",
    "will go",
    "went",
    "will goes"
   ],
   "answer": 1,
   "hint": "This is an opinion about the future. Which form do we use for predictions?",
   "why": "For predictions (<em>I think… in 2050</em>) use <em>will</em> + base verb: <em>people will go</em>. <em>Go</em> and <em>went</em> are not future, and <em>will goes</em> is wrong."
  },
  {
   "id": "tri-28",
   "module": "g7m5",
   "unit": 7,
   "type": "gap",
   "cefr": "A2",
   "stem": "Sorry, I can't play on Saturday. I ___ my cousin at the cinema at two. We've got the tickets!",
   "options": [
    "'m meeting",
    "'m meet",
    "met",
    "meeting"
   ],
   "answer": 0,
   "hint": "The plan is fixed: time, place and tickets. Which form do we use for diary plans?",
   "why": "For a fixed plan with a time and place, use the present continuous: <em>I'm meeting my cousin at two.</em> <em>I'm meet</em> has no <em>-ing</em>, and <em>I meeting</em> has no <em>am</em>."
  },
  {
   "id": "tri-29",
   "module": "g7m6",
   "unit": 7,
   "type": "meaning",
   "cefr": "A2",
   "stem": "<em>\"We're flying to Phuket on Friday.\"</em> What does this sentence mean?",
   "options": [
    "It's a plan for Friday.",
    "They're on the plane now.",
    "They fly there every Friday.",
    "They flew there last Friday."
   ],
   "answer": 0,
   "hint": "Look for the time expression. Is it now, or later?",
   "why": "The present continuous with a future time (<em>on Friday</em>) talks about a fixed plan, not something happening now. The time words tell you it's the future."
  },
  {
   "id": "tri-30",
   "module": "g7m7",
   "unit": 7,
   "type": "dialogue",
   "cefr": "B1",
   "lines": [
    {
     "who": "Mum",
     "text": "Oh no, there's no milk for breakfast."
    },
    {
     "who": "Nut",
     "text": "Really? I didn't know. Don't worry, I ___ some from 7-Eleven now."
    }
   ],
   "stem": "",
   "options": [
    "'m going to get",
    "get",
    "'ll get",
    "got"
   ],
   "answer": 2,
   "hint": "Did Nut decide before, or is he deciding right now?",
   "why": "Nut decides when he hears the news, so we use <em>will</em>: <em>I'll get some.</em> <em>Going to</em> is for plans decided before speaking."
  },
  {
   "id": "tri-31",
   "module": "g7m8",
   "unit": 7,
   "type": "gap",
   "cefr": "B1",
   "stem": "I'll send you a message when I ___ at the airport.",
   "options": [
    "will arrive",
    "arrived",
    "arrive",
    "arriving"
   ],
   "answer": 2,
   "hint": "Look at the word when. Which tense follows it when we talk about the future?",
   "why": "After <em>when</em>, <em>if</em> and <em>as soon as</em>, use the present simple for the future: <em>when I arrive</em>. <em>When I will arrive</em> is a very common mistake."
  },
  {
   "id": "tri-32",
   "module": "g7m9",
   "unit": 7,
   "type": "choose",
   "cefr": "A2",
   "stem": "Which question is correct?",
   "options": [
    "What time the bus is leaving?",
    "What time is leaving the bus?",
    "What time the bus leaving is?",
    "What time is the bus leaving?"
   ],
   "answer": 3,
   "hint": "In questions, where does the helping verb go: before or after the subject?",
   "why": "In questions the helping verb (<em>is</em>) goes before the subject (<em>the bus</em>): <em>What time is the bus leaving?</em>"
  },
  {
   "id": "tri-33",
   "module": "g7m10",
   "unit": 7,
   "type": "choose",
   "cefr": "A2",
   "stem": "Which sentence is correct?",
   "options": [
    "Ploy always is late for school.",
    "Always Ploy is late for school.",
    "Ploy is always late for school.",
    "Ploy is late always for school."
   ],
   "answer": 2,
   "hint": "Find the verb be. Do words like always go before it or after it?",
   "why": "Frequency adverbs like <em>always</em> go after <em>be</em>: <em>Ploy is always late.</em> With other verbs they go before the verb: <em>She always walks.</em>"
  },
  {
   "id": "tri-34",
   "module": "g7m11",
   "unit": 7,
   "type": "gap",
   "cefr": "A2",
   "stem": "It's so hot today. Why don't we ___ to the swimming pool?",
   "options": [
    "going",
    "to go",
    "go",
    "goes"
   ],
   "answer": 2,
   "hint": "Which verb form follows 'Why don't we'? Compare 'Let's'.",
   "why": "<em>Why don't we</em> + base verb makes a suggestion: <em>Why don't we go…?</em> We use <em>-ing</em> only after <em>What about</em>."
  },
  {
   "id": "tri-35",
   "module": "g7m12",
   "unit": 7,
   "type": "dialogue",
   "cefr": "A2",
   "lines": [
    {
     "who": "Leo",
     "text": "Are you free on Saturday afternoon? Let's go to the skate park."
    },
    {
     "who": "Mia",
     "text": "___ I'm visiting my aunt in Nonthaburi."
    }
   ],
   "stem": "",
   "options": [
    "Sorry, I can't.",
    "Yes, sure.",
    "OK, great. See you there!",
    "Good idea."
   ],
   "answer": 0,
   "hint": "Read what Mia says next. Is she free?",
   "why": "Mia already has a plan (<em>I'm visiting my aunt</em>), so she rejects the suggestion: <em>Sorry, I can't.</em> The other answers accept it."
  },
  {
   "id": "tri-36",
   "module": "v7m1",
   "unit": 7,
   "type": "picture",
   "cefr": "A2",
   "img": "jellyfish",
   "stem": "What's in the picture?",
   "options": [
    "shark",
    "whale",
    "butterfly",
    "jellyfish"
   ],
   "answer": 3,
   "hint": "Look at its body. Does it have fins, a tail or wings?",
   "why": "A <em>jellyfish</em> is a soft sea animal with long thin parts that can sting. It has no bones, fins or wings."
  },
  {
   "id": "tri-37",
   "module": "v7m2",
   "unit": 7,
   "type": "gap",
   "cefr": "B1",
   "stem": "A ___ is a very big, heavy animal with one or two horns on its nose.",
   "options": [
    "rhino",
    "hippo",
    "tiger",
    "bear"
   ],
   "answer": 0,
   "hint": "Read the end of the sentence. Which animal has something on its nose?",
   "why": "A <em>rhino</em> has one or two <em>horns</em> on its nose. A <em>hippo</em> is also big and heavy, but it has no horns."
  },
  {
   "id": "tri-38",
   "module": "v7m3",
   "unit": 7,
   "type": "gap",
   "cefr": "B1",
   "stem": "Only a few of these frogs are left in the wild. They are very ___.",
   "options": [
    "common",
    "rare",
    "wild",
    "dangerous"
   ],
   "answer": 1,
   "hint": "Read the first sentence again. How many frogs are there?",
   "why": "<em>Rare</em> means there are only a few of them. <em>Common</em> is the opposite. Being <em>dangerous</em> has nothing to do with how many are left."
  },
  {
   "id": "tri-39",
   "module": "v7m4",
   "unit": 7,
   "type": "gap",
   "cefr": "B1",
   "stem": "We walked down from the mountain into a green ___ with a river in the middle.",
   "options": [
    "sky",
    "island",
    "ocean",
    "valley"
   ],
   "answer": 3,
   "hint": "You walk down into it from a mountain. What is it called?",
   "why": "A <em>valley</em> is the low land between hills or mountains, often with a river. You can't walk down into the sky or an ocean."
  },
  {
   "id": "tri-40",
   "module": "v7m5",
   "unit": 7,
   "type": "gap",
   "cefr": "A2",
   "stem": "We took a boat to a small ___ in the sea. It had white sand and no cars.",
   "options": [
    "lake",
    "river",
    "island",
    "waterfall"
   ],
   "answer": 2,
   "hint": "It's in the sea and you need a boat to get there.",
   "why": "An <em>island</em> is land with water all around it. A <em>lake</em> and a <em>river</em> are water on land, so they can't be in the sea."
  },
  {
   "id": "tri-41",
   "module": "v7m6",
   "unit": 7,
   "type": "gap",
   "cefr": "A2",
   "stem": "The sky is grey and ___ today. Maybe it will rain later.",
   "options": [
    "cloud",
    "cloudy",
    "clouds",
    "clouding"
   ],
   "answer": 1,
   "hint": "After 'grey and', do you need a noun or an adjective?",
   "why": "We need an adjective here, like <em>grey</em>: <em>grey and cloudy</em>. <em>Cloud</em> is the noun. Many weather adjectives add <em>-y</em>: <em>sunny, windy, rainy</em>."
  },
  {
   "id": "tri-42",
   "module": "v7m7",
   "unit": 7,
   "type": "gap",
   "cefr": "B1",
   "stem": "There was very ___ rain last night, and some streets in Bangkok were flooded.",
   "options": [
    "strong",
    "big",
    "thick",
    "heavy"
   ],
   "answer": 3,
   "hint": "This word is a partner (collocation) of rain. English and Thai use different words.",
   "why": "We say <em>heavy rain</em> (and <em>heavy snow</em>). <em>Strong</em> goes with <em>wind</em>, and <em>thick</em> goes with <em>fog</em>. <em>Big rain</em> is not English."
  },
  {
   "id": "tri-43",
   "module": "v7m8",
   "unit": 7,
   "type": "gap",
   "cefr": "A2",
   "stem": "The ___ spends most of the day in rivers and lakes, but it can't swim. It walks along the bottom!",
   "options": [
    "shark",
    "penguin",
    "hippo",
    "eagle"
   ],
   "answer": 2,
   "hint": "Think about where each animal lives: sea, river or sky?",
   "why": "<em>Hippos</em> live in rivers and lakes. They are so heavy that they walk on the bottom instead of swimming. Sharks and penguins swim in the sea, and eagles fly."
  },
  {
   "id": "tri-44",
   "module": "v7m9",
   "unit": 7,
   "type": "gap",
   "cefr": "B1",
   "stem": "At night we saw three ___ near our tent in the forest.",
   "options": [
    "wolfs",
    "wolf",
    "wolves",
    "wolfes"
   ],
   "answer": 2,
   "hint": "Some nouns ending in -f change in the plural. Think of leaf.",
   "why": "The plural of <em>wolf</em> is <em>wolves</em>: <em>-f</em> changes to <em>-ves</em>, like <em>leaf → leaves</em>. <em>Wolfs</em> is a common spelling mistake."
  }
 ]
});
window.TESTS.push({
 "id": "mock1",
 "kind": "mock",
 "name": "TU-style Mock 1 · Base Camp",
 "minutes": 60,
 "label": "TU-style practice (format unofficial)",
 "blurb": "40 questions in 60 minutes, in six parts, using the grammar and vocabulary of Unit 6 and Unit 7. A first full practice paper: mostly A2, some B1.",
 "sections": [
  {
   "part": "Part 1",
   "title": "Error identification",
   "instructions": "Choose the underlined part that is NOT correct.",
   "items": [
    {
     "id": "m1-1",
     "module": "g6m8",
     "type": "error",
     "cefr": "A2",
     "stem": "We [[haven't got]] [[much]] carrots, so Mum [[is going to]] buy [[a lot of]] vegetables at the market.",
     "options": [
      "haven't got",
      "much",
      "is going to",
      "a lot of"
     ],
     "answer": 1,
     "fix": "many",
     "hint": "",
     "why": "<em>Carrots</em> are countable and plural, so this negative needs <em>many</em>: <em>We haven't got many carrots.</em> <em>A lot of vegetables</em> is correct in a positive sentence."
    },
    {
     "id": "m1-2",
     "module": "g6m3",
     "type": "error",
     "cefr": "B1",
     "stem": "My teacher [[gave]] me [[some]] [[useful advices]] [[about]] the speech contest.",
     "options": [
      "gave",
      "some",
      "useful advices",
      "about"
     ],
     "answer": 2,
     "fix": "useful advice",
     "hint": "",
     "why": "<em>Advice</em> is uncountable, so it never takes <em>-s</em>: <em>some useful advice</em>. <em>Some</em> is correct here because the sentence is positive."
    },
    {
     "id": "m1-3",
     "module": "g6m6",
     "type": "error",
     "cefr": "A2",
     "stem": "In my grandparents' village [[have]] [[a lot of]] rice fields, and there [[is]] [[a]] small river too.",
     "options": [
      "have",
      "a lot of",
      "is",
      "a"
     ],
     "answer": 0,
     "fix": "there are",
     "hint": "",
     "why": "To say what is in a place, use <em>there are</em>, not <em>have</em>: <em>In the village there are a lot of rice fields.</em> <em>There is a small river</em> is correct."
    },
    {
     "id": "m1-4",
     "module": "g6m10",
     "type": "error",
     "cefr": "A2",
     "stem": "You [[look]] tired, Nut. I think you [[should to]] go to bed [[early]] and [[stop]] playing games.",
     "options": [
      "look",
      "should to",
      "early",
      "stop"
     ],
     "answer": 1,
     "fix": "should",
     "hint": "",
     "why": "After <em>should</em>, use the base verb with no <em>to</em>: <em>you should go</em>. <em>You look tired</em> is correct: <em>look</em> + adjective."
    },
    {
     "id": "m1-5",
     "module": "g7m3",
     "type": "error",
     "cefr": "B1",
     "stem": "Next weekend my family [[is going to]] visit Khao Yai, and we [[will]] [[probably]] [[seeing]] some monkeys.",
     "options": [
      "is going to",
      "will",
      "probably",
      "seeing"
     ],
     "answer": 3,
     "fix": "see",
     "hint": "",
     "why": "After <em>will</em>, use the base verb: <em>we will probably see</em>. <em>My family is going to visit</em> is correct, and <em>probably</em> often goes after <em>will</em>."
    },
    {
     "id": "m1-6",
     "module": "g7m8",
     "type": "error",
     "cefr": "B1",
     "stem": "I [[will]] call you [[as soon as]] the bus [[will arrive]] [[at]] the station.",
     "options": [
      "will",
      "as soon as",
      "will arrive",
      "at"
     ],
     "answer": 2,
     "fix": "arrives",
     "hint": "",
     "why": "After <em>as soon as</em>, <em>when</em> and <em>if</em>, use the present simple for the future: <em>as soon as the bus arrives</em>. <em>Will</em> is correct in the other part."
    },
    {
     "id": "m1-7",
     "module": "g7m10",
     "type": "error",
     "cefr": "A2",
     "stem": "My cousin [[always is]] hungry, so he [[often]] [[eats]] [[some]] biscuits after school.",
     "options": [
      "always is",
      "often",
      "eats",
      "some"
     ],
     "answer": 0,
     "fix": "is always",
     "hint": "",
     "why": "Frequency adverbs go after <em>be</em>: <em>He is always hungry.</em> With other verbs they go before the verb: <em>he often eats</em>."
    }
   ]
  },
  {
   "part": "Part 2",
   "title": "Sentence completion",
   "instructions": "Choose the best answer to complete each sentence.",
   "items": [
    {
     "id": "m1-8",
     "module": "g6m4",
     "type": "gap",
     "cefr": "A2",
     "stem": "All the students at my school wear ___ uniform with the school badge on it.",
     "options": [
      "an",
      "a",
      "some",
      "any"
     ],
     "answer": 1,
     "hint": "",
     "why": "Choose by the first <strong>sound</strong>. <em>Uniform</em> starts with a /j/ sound, like <em>you</em>, so it's <em>a uniform</em>, not <em>an</em>."
    },
    {
     "id": "m1-9",
     "module": "g6m5",
     "type": "gap",
     "cefr": "A2",
     "stem": "There isn't ___ bread left, so we'll have rice for breakfast.",
     "options": [
      "some",
      "a",
      "any",
      "many"
     ],
     "answer": 2,
     "hint": "",
     "why": "Use <em>any</em> in negative sentences: <em>There isn't any bread.</em> <em>Bread</em> is uncountable, so <em>a</em> and <em>many</em> are wrong too."
    },
    {
     "id": "m1-10",
     "module": "g6m9",
     "type": "gap",
     "cefr": "A2",
     "stem": "How ___ money do you spend on snacks every week?",
     "options": [
      "many",
      "a lot",
      "any",
      "much"
     ],
     "answer": 3,
     "hint": "",
     "why": "<em>Money</em> is uncountable, so we ask <em>How much money…?</em> <em>How many</em> is for plural nouns, like <em>How many coins…?</em>"
    },
    {
     "id": "m1-11",
     "module": "g6m11",
     "type": "gap",
     "cefr": "A2",
     "stem": "You ___ swim in the river after heavy rain. The water moves very fast.",
     "options": [
      "shouldn't",
      "should",
      "don't should",
      "shouldn't to"
     ],
     "answer": 0,
     "hint": "",
     "why": "Swimming in fast water is not a good idea, so the advice is negative: <em>You shouldn't swim.</em> The negative is <em>shouldn't</em> + base verb, never <em>don't should</em>."
    },
    {
     "id": "m1-12",
     "module": "g7m4",
     "type": "gap",
     "cefr": "A2",
     "stem": "\"I can't do this maths homework!\" — \"Don't worry. I ___ you after dinner.\"",
     "options": [
      "help",
      "'ll to help",
      "'ll help",
      "helped"
     ],
     "answer": 2,
     "hint": "",
     "why": "This is an offer made at the moment of speaking, so we use <em>will</em>: <em>I'll help you.</em> After <em>will</em>, use the base verb with no <em>to</em>."
    },
    {
     "id": "m1-13",
     "module": "g7m5",
     "type": "gap",
     "cefr": "B1",
     "stem": "I can't play football with you on Sunday. I ___ my grandparents in Ayutthaya. Dad bought the train tickets yesterday.",
     "options": [
      "'m visit",
      "'m visiting",
      "will visiting",
      "visited"
     ],
     "answer": 1,
     "hint": "",
     "why": "A fixed plan with tickets already bought uses the present continuous: <em>I'm visiting my grandparents.</em> <em>I'm visit</em> and <em>will visiting</em> are not correct forms."
    },
    {
     "id": "m1-14",
     "module": "g7m11",
     "type": "gap",
     "cefr": "A2",
     "stem": "I'm bored. What about ___ a film at my house this evening?",
     "options": [
      "watch",
      "to watch",
      "we watch",
      "watching"
     ],
     "answer": 3,
     "hint": "",
     "why": "<em>What about</em> is followed by a noun or a verb + <em>-ing</em>: <em>What about watching a film?</em> Other suggestions take the base verb: <em>Let's watch…</em>"
    }
   ]
  },
  {
   "part": "Part 3",
   "title": "Vocabulary in context",
   "instructions": "Choose the best word or phrase, or the answer closest in meaning to the underlined word.",
   "items": [
    {
     "id": "m1-15",
     "module": "v6m7",
     "type": "gap",
     "cefr": "B1",
     "stem": "Can you buy a ___ of crisps for the party? The small ones are only 20 baht.",
     "options": [
      "jar",
      "glass",
      "packet",
      "cup"
     ],
     "answer": 2,
     "hint": "",
     "why": "Crisps come in a <em>packet</em> (or a bag). A <em>jar</em> is for jam or honey, and a <em>glass</em> or a <em>cup</em> is for drinks."
    },
    {
     "id": "m1-16",
     "module": "v6m10",
     "type": "gap",
     "cefr": "B1",
     "stem": "My doctor says I need to change my ___: less sugar and more vegetables.",
     "options": [
      "menu",
      "weight",
      "health",
      "diet"
     ],
     "answer": 3,
     "hint": "",
     "why": "<em>Less sugar and more vegetables</em> describes food, so the word is <em>diet</em>: the food you usually eat. A <em>menu</em> is a restaurant's list of dishes."
    },
    {
     "id": "m1-17",
     "module": "v7m6",
     "type": "gap",
     "cefr": "B1",
     "stem": "The road was ___ this morning, so the car slid and hit a tree.",
     "options": [
      "icy",
      "foggy",
      "sunny",
      "dry"
     ],
     "answer": 0,
     "hint": "",
     "why": "<em>Icy</em> means covered with ice, and cars slide on ice. <em>Foggy</em> weather makes it hard to see, but fog doesn't make a car slide."
    },
    {
     "id": "m1-18",
     "module": "v7m4",
     "type": "meaning",
     "cefr": "B1",
     "stem": "The village is in a <u>valley</u> between two high hills. The word <u>valley</u> means…",
     "options": [
      "the top of a high hill",
      "a big area of water",
      "land with lots of trees",
      "low land between hills"
     ],
     "answer": 3,
     "hint": "",
     "why": "A <em>valley</em> is the low land between hills or mountains. Land with lots of trees is a <em>forest</em>, and a big area of water is a lake or an ocean."
    },
    {
     "id": "m1-19",
     "module": "v7m3",
     "type": "meaning",
     "cefr": "B1",
     "stem": "Last year, Pim's uncle found a new <u>species</u> of frog in a forest in Nan. <u>Species</u> means…",
     "options": [
      "home",
      "colour",
      "baby",
      "type"
     ],
     "answer": 3,
     "hint": "",
     "why": "A <em>species</em> is a type of animal or plant. <em>A new species of frog</em> is a type of frog nobody knew before, not a new colour or a baby frog."
    },
    {
     "id": "m1-20",
     "module": "v7m1",
     "type": "gap",
     "cefr": "A2",
     "stem": "The ___ landed on a flower and opened its colourful wings.",
     "options": [
      "jellyfish",
      "penguin",
      "butterfly",
      "snake"
     ],
     "answer": 2,
     "hint": "",
     "why": "A <em>butterfly</em> has big colourful wings and lands on flowers. A <em>penguin</em> has wings but can't fly, and jellyfish and snakes have no wings."
    }
   ]
  },
  {
   "part": "Part 4",
   "title": "Conversation",
   "instructions": "Choose the best line to complete each conversation.",
   "items": [
    {
     "id": "m1-21",
     "module": "g6m12",
     "type": "dialogue",
     "cefr": "A2",
     "lines": [
      {
       "who": "Waiter",
       "text": "Can I get you anything else?"
      },
      {
       "who": "Anna",
       "text": "___"
      },
      {
       "who": "Waiter",
       "text": "Of course. That's 240 baht, please."
      }
     ],
     "stem": "",
     "options": [
      "No, thanks. Can we have the bill, please?",
      "Yes, please. What would you like to drink?",
      "Would you like to pay by card or in cash?",
      "Small or large? They're the same price."
     ],
     "answer": 0,
     "hint": "",
     "why": "The waiter then gives the price, so Anna asked for the bill: <em>Can we have the bill, please?</em> The other lines are things a waiter says, not a customer."
    },
    {
     "id": "m1-22",
     "module": "g6m13",
     "type": "dialogue",
     "cefr": "A2",
     "lines": [
      {
       "who": "Ploy",
       "text": "I'm having a birthday party at my house on Saturday at four. ___"
      },
      {
       "who": "Fah",
       "text": "I'd love to! What should I bring?"
      }
     ],
     "stem": "",
     "options": [
      "Would you like some cake?",
      "Would you like to come?",
      "Are you going to the party?",
      "Do you like parties?"
     ],
     "answer": 1,
     "hint": "",
     "why": "<em>I'd love to!</em> answers an invitation: <em>Would you like to come?</em> <em>Would you like some cake?</em> is an offer of food; the answer would be <em>Yes, please</em>."
    },
    {
     "id": "m1-23",
     "module": "g7m11",
     "type": "dialogue",
     "cefr": "A2",
     "lines": [
      {
       "who": "Jay",
       "text": "Are you doing anything on Sunday?"
      },
      {
       "who": "Mint",
       "text": "No, I'm free. ___"
      },
      {
       "who": "Jay",
       "text": "Good idea! Let's meet at the BTS station at ten."
      }
     ],
     "stem": "",
     "options": [
      "Shall we go to the aquarium?",
      "Sorry, I'm busy.",
      "I went to the aquarium.",
      "Yes, I'm doing my homework."
     ],
     "answer": 0,
     "hint": "",
     "why": "Jay answers <em>Good idea!</em>, so Mint made a suggestion: <em>Shall we go…?</em> <em>Sorry, I'm busy</em> doesn't match <em>I'm free</em>."
    },
    {
     "id": "m1-24",
     "module": "g7m4",
     "type": "dialogue",
     "cefr": "B1",
     "lines": [
      {
       "who": "Grandma",
       "text": "Oh dear, I can't read this message on my phone. The letters are too small."
      },
      {
       "who": "Nut",
       "text": "___"
      },
      {
       "who": "Grandma",
       "text": "Thank you, dear. Your eyes are better than mine!"
      }
     ],
     "stem": "",
     "options": [
      "Really? I think the letters look big enough.",
      "Don't worry. I'll send you a message later.",
      "No, thanks. I'm not reading it now.",
      "Give it to me. I'll read it to you."
     ],
     "answer": 3,
     "hint": "",
     "why": "Nut offers to help right now, so he uses <em>will</em>: <em>I'll read it to you.</em> Grandma's answer about his eyes shows that he read the message for her."
    },
    {
     "id": "m1-25",
     "module": "g6m11",
     "type": "dialogue",
     "cefr": "A2",
     "lines": [
      {
       "who": "Beam",
       "text": "I've got a stomach ache. I ate too much spicy som tam."
      },
      {
       "who": "Ken",
       "text": "___"
      },
      {
       "who": "Beam",
       "text": "OK. I'll get some water and lie down."
      }
     ],
     "stem": "",
     "options": [
      "I think you should eat some more som tam.",
      "You should drink some water and rest.",
      "I don't think you should rest.",
      "You shouldn't drink any water."
     ],
     "answer": 1,
     "hint": "",
     "why": "Beam follows the advice (water and lying down), so Ken said <em>You should drink some water and rest.</em> The other lines give the opposite advice."
    }
   ]
  },
  {
   "part": "Part 5",
   "title": "Passage cloze",
   "instructions": "Read the text and choose the best word for each blank.",
   "passage": "<strong>Our Class Picnic</strong><br>Next Saturday, our class (26) ______ have a picnic in the park near our school. Our teacher, Khru Nok, says everybody should bring some food to share. Tonkla is bringing (27) ______ old picnic blanket and some paper cups. Ploy wants to make sandwiches, but she hasn't got (28) ______ bread at home, so she is going to buy some bread and a (29) ______ of strawberry jam on her way to the park. Mek loves sweet (30) ______, so he is bringing grapes, a melon and some bananas. The weather forecast says it will be hot and (31) ______ all day, so we must remember our hats and some water. Khru Nok has one more rule: if it (32) ______, we will eat our picnic in the school hall instead!",
   "items": [
    {
     "id": "m1-26",
     "module": "g7m1",
     "type": "cloze",
     "blank": 26,
     "cefr": "A2",
     "stem": "(26)",
     "options": [
      "is going",
      "going to",
      "will to",
      "is going to"
     ],
     "answer": 3,
     "hint": "",
     "why": "<em>Be going to</em> + base verb talks about a plan: <em>our class is going to have a picnic</em>. You need both <em>is</em> and <em>to</em>."
    },
    {
     "id": "m1-27",
     "module": "g6m4",
     "type": "cloze",
     "blank": 27,
     "cefr": "A2",
     "stem": "(27)",
     "options": [
      "a",
      "some",
      "an",
      "any"
     ],
     "answer": 2,
     "hint": "",
     "why": "<em>Blanket</em> is singular and countable, and <em>old</em> starts with a vowel sound, so we need <em>an</em>: <em>an old picnic blanket</em>."
    },
    {
     "id": "m1-28",
     "module": "g6m5",
     "type": "cloze",
     "blank": 28,
     "cefr": "A2",
     "stem": "(28)",
     "options": [
      "some",
      "many",
      "a",
      "any"
     ],
     "answer": 3,
     "hint": "",
     "why": "<em>Hasn't got</em> is negative and <em>bread</em> is uncountable, so use <em>any</em>. <em>Many</em> and <em>a</em> don't go with uncountable nouns."
    },
    {
     "id": "m1-29",
     "module": "v6m7",
     "type": "cloze",
     "blank": 29,
     "cefr": "B1",
     "stem": "(29)",
     "options": [
      "glass",
      "cup",
      "box",
      "jar"
     ],
     "answer": 3,
     "hint": "",
     "why": "Jam comes in a <em>jar</em>. We drink from a <em>glass</em> or a <em>cup</em>, and a <em>box</em> is for things like chocolates or cereal."
    },
    {
     "id": "m1-30",
     "module": "v6m1",
     "type": "cloze",
     "blank": 30,
     "cefr": "A2",
     "stem": "(30)",
     "options": [
      "vegetables",
      "fruit",
      "meat",
      "drinks"
     ],
     "answer": 1,
     "hint": "",
     "why": "Grapes, melons and bananas are all <em>fruit</em>. Here <em>fruit</em> is uncountable: <em>sweet fruit</em>."
    },
    {
     "id": "m1-31",
     "module": "v7m6",
     "type": "cloze",
     "blank": 31,
     "cefr": "A2",
     "stem": "(31)",
     "options": [
      "sun",
      "sunshine",
      "sunny",
      "suns"
     ],
     "answer": 2,
     "hint": "",
     "why": "After <em>it will be hot and</em> we need an adjective: <em>sunny</em>. <em>Sun</em> and <em>sunshine</em> are nouns."
    },
    {
     "id": "m1-32",
     "module": "g7m8",
     "type": "cloze",
     "blank": 32,
     "cefr": "B1",
     "stem": "(32)",
     "options": [
      "will rain",
      "rainy",
      "rains",
      "is rain"
     ],
     "answer": 2,
     "hint": "",
     "why": "After <em>if</em>, use the present simple for the future: <em>if it rains, we will eat…</em> <em>If it will rain</em> is a common mistake."
    }
   ]
  },
  {
   "part": "Part 6",
   "title": "Reading (Passage A)",
   "instructions": "Read the passage and answer the questions.",
   "passage": "<strong>The Canteen Challenge</strong><br>Last term, students at Sai Thong School in Bangkok noticed a problem in their canteen. Every day, a lot of food went into the bins: half-eaten plates of rice, bowls of soup and pieces of fruit. A group of M2 students decided to find out how much food was wasted. For two weeks, they weighed the food that students threw away after lunch. The result surprised everyone: about 40 kilograms a day.<br><br>The group's leader, a girl called Pim, talked to the cooks and to other students. The group learned that many younger students got big portions which they could not finish, and some did not like the vegetables. So the group suggested three changes. First, students could choose a small or a large plate of rice. Second, the cooks put the vegetables in a separate bowl, so students could take as much as they wanted. Third, fruit peel and old vegetables went into a compost bin (a bin that turns old food into soil) for the school garden.<br><br>After one month, the daily waste fell to 15 kilograms. The cooks were happy too, because they spent less money on rice. Now Pim's team is going to visit two other schools next month to share their idea. \"It isn't difficult,\" Pim says. \"You just have to ask people why they leave food on their plates.\"",
   "source": "",
   "items": [
    {
     "id": "m1-33",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "What is the passage mainly about?",
     "options": [
      "why younger students don't like vegetables",
      "how students cut food waste at their school",
      "how the school cooks learned to cook better",
      "why a school garden needs a compost bin"
     ],
     "answer": 1,
     "hint": "",
     "why": "Most of the passage describes the problem, the students' three changes and the result: much less food waste. The vegetables and the compost bin are only details."
    },
    {
     "id": "m1-34",
     "module": "read",
     "type": "read",
     "cefr": "A2",
     "stem": "How did the students find out how much food was wasted?",
     "options": [
      "They asked the cooks to count the plates.",
      "They weighed the food left after lunch.",
      "They counted the bins every morning.",
      "They asked students to keep a food diary."
     ],
     "answer": 1,
     "hint": "",
     "why": "Paragraph 1 says that for two weeks they weighed the food students threw away after lunch. They talked to the cooks later, about the reasons."
    },
    {
     "id": "m1-35",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "The word <em>portions</em> in paragraph 2 is closest in meaning to…",
     "options": [
      "amounts of food for one person",
      "kinds of food from other countries",
      "plates that need to be washed",
      "pieces of fruit for the garden"
     ],
     "answer": 0,
     "hint": "",
     "why": "Younger students got big <em>portions</em> they couldn't finish, so a portion is the amount of food one person gets. The small or large plate of rice is a clue."
    },
    {
     "id": "m1-36",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "What can we infer about Pim?",
     "options": [
      "She works as a cook in the school canteen.",
      "She is going to move to another school soon.",
      "She thinks other schools can copy the idea easily.",
      "She does not like eating vegetables at all."
     ],
     "answer": 2,
     "hint": "",
     "why": "Pim says <em>It isn't difficult</em>, and her team is going to share the idea with other schools. She is visiting schools, not moving to one."
    }
   ]
  },
  {
   "part": "Part 6",
   "title": "Reading (Passage B)",
   "instructions": "Read the passage and answer the questions.",
   "passage": "<strong>Three Days in the Mountains</strong><br>Last month, Mek and his family drove from Bangkok to a national park in the mountains of northern Thailand. They stayed for three nights in a small wooden cabin next to a lake.<br><br>On the first morning, Mek woke up at five because he wanted to take photos of the sunrise. Unfortunately, it was so foggy that he couldn't even see the lake in front of the cabin. A park ranger told him that fog is common there in the cool season and that it usually disappears by nine o'clock. She was right. By half past nine, the sky was clear and blue.<br><br>In the afternoon, the family walked through the forest to a waterfall. On the way, they saw a group of monkeys, some colourful butterflies and a big lizard on a rock. Mek's little sister, Mint, wanted to give the monkeys some biscuits, but the ranger said that visitors should never feed the animals, because human food makes them sick.<br><br>On their last afternoon, it rained heavily for hours, and the path from the cabin to the car park turned into deep mud. \"We'll stay one more night and leave in the morning,\" Mek's dad said.<br><br>Mek is already planning his next visit. This time, he is going to take a better camera and a raincoat.",
   "source": "",
   "items": [
    {
     "id": "m1-37",
     "module": "read",
     "type": "read",
     "cefr": "A2",
     "stem": "What is the best title for the passage?",
     "options": [
      "A Family Trip to the Mountains",
      "How to Take Photos of Fog",
      "Why Monkeys Get Sick",
      "The Best Waterfalls in Thailand"
     ],
     "answer": 0,
     "hint": "",
     "why": "The passage follows Mek's family through their trip to a national park in the mountains. Fog, monkeys and the waterfall are only parts of the story."
    },
    {
     "id": "m1-38",
     "module": "read",
     "type": "read",
     "cefr": "A2",
     "stem": "Why couldn't Mek see the lake on the first morning?",
     "options": [
      "It was raining heavily.",
      "There was a lot of fog.",
      "He left his camera in the car.",
      "The cabin was far from the lake."
     ],
     "answer": 1,
     "hint": "",
     "why": "Paragraph 2 says it was so foggy that he couldn't see the lake. The heavy rain was on the last afternoon, and the cabin was next to the lake."
    },
    {
     "id": "m1-39",
     "module": "read",
     "type": "read",
     "cefr": "A2",
     "stem": "In paragraph 3, <em>them</em> in 'human food makes them sick' refers to…",
     "options": [
      "the animals in the park",
      "the visitors to the park",
      "Mek's family",
      "the park rangers"
     ],
     "answer": 0,
     "hint": "",
     "why": "The ranger says visitors should never feed <em>the animals</em>, because human food makes <em>them</em> (the animals) sick."
    },
    {
     "id": "m1-40",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "Why did Mek's dad probably decide to stay one more night?",
     "options": [
      "The muddy path made it hard to reach the car.",
      "The family wanted to see the sunrise again.",
      "Mint was sick after eating some biscuits.",
      "The ranger told them to visit the waterfall."
     ],
     "answer": 0,
     "hint": "",
     "why": "The path to the car park turned into deep mud after hours of rain, so reaching the car was difficult. Nothing says that Mint was sick or that the ranger sent them anywhere."
    }
   ]
  }
 ]
});
window.TESTS.push({
 "id": "mock2",
 "kind": "mock",
 "name": "TU-style Mock 2 · Summit",
 "minutes": 60,
 "label": "TU-style practice (format unofficial)",
 "blurb": "40 harder questions in 60 minutes: longer sentences, more exam traps and denser texts, all from Unit 6 and Unit 7. Mostly B1.",
 "sections": [
  {
   "part": "Part 1",
   "title": "Error identification",
   "instructions": "Choose the underlined part that is NOT correct.",
   "items": [
    {
     "id": "m2-1",
     "module": "g6m8",
     "type": "error",
     "cefr": "B1",
     "stem": "[[A lot of]] the fruit that my aunt sells at the floating market [[comes]] from her own farm, and [[some]] of it [[are]] sweeter than the fruit in supermarkets.",
     "options": [
      "A lot of",
      "comes",
      "some",
      "are"
     ],
     "answer": 3,
     "fix": "is",
     "hint": "",
     "why": "<em>Some of it</em> means part of the fruit, which is uncountable here, so the verb is singular: <em>some of it is</em>. <em>A lot of the fruit … comes</em> is correct for the same reason."
    },
    {
     "id": "m2-2",
     "module": "g6m6",
     "type": "error",
     "cefr": "A2",
     "stem": "Ploy's school [[has]] a big garden, and in the garden [[have]] [[a lot of]] vegetables that the students [[grow]] themselves.",
     "options": [
      "has",
      "have",
      "a lot of",
      "grow"
     ],
     "answer": 1,
     "fix": "there are",
     "hint": "",
     "why": "To say what is in a place, use <em>there are</em>: <em>in the garden there are a lot of vegetables</em>. <em>Ploy's school has a big garden</em> is correct, because the school owns it."
    },
    {
     "id": "m2-3",
     "module": "g7m1",
     "type": "error",
     "cefr": "B1",
     "stem": "Pim and her family [[going to]] spend [[a week]] on an island in the south, and they [[are]] [[really]] excited about it.",
     "options": [
      "going to",
      "a week",
      "are",
      "really"
     ],
     "answer": 0,
     "fix": "are going to",
     "hint": "",
     "why": "<em>Going to</em> needs <em>be</em> before it: <em>Pim and her family are going to spend…</em> Leaving out <em>are</em> is a very common mistake."
    },
    {
     "id": "m2-4",
     "module": "g7m8",
     "type": "error",
     "cefr": "B1",
     "stem": "We [[won't]] go kayaking on the lake [[if]] it [[will be]] [[too]] windy on Saturday.",
     "options": [
      "won't",
      "if",
      "will be",
      "too"
     ],
     "answer": 2,
     "fix": "is",
     "hint": "",
     "why": "After <em>if</em>, use the present simple for the future: <em>if it is too windy</em>. <em>We won't go</em> is correct in the main part of the sentence."
    },
    {
     "id": "m2-5",
     "module": "g7m10",
     "type": "error",
     "cefr": "A2",
     "stem": "My uncle [[always]] [[takes]] beautiful photos of [[birds rare]] [[in]] the forest near his home.",
     "options": [
      "always",
      "takes",
      "birds rare",
      "in"
     ],
     "answer": 2,
     "fix": "rare birds",
     "hint": "",
     "why": "In English, adjectives go before the noun: <em>rare birds</em>, not <em>birds rare</em>. <em>Always takes</em> is correct, because frequency adverbs go before the main verb."
    },
    {
     "id": "m2-6",
     "module": "g6m4",
     "type": "error",
     "cefr": "B1",
     "stem": "Fah bought [[a useful map]] and [[an umbrella]], and [[a kind woman]] at the bus stop told her that the driver was [[a honest man]].",
     "options": [
      "a useful map",
      "an umbrella",
      "a kind woman",
      "a honest man"
     ],
     "answer": 3,
     "fix": "an honest man",
     "hint": "",
     "why": "Choose <em>a</em> or <em>an</em> by the first <strong>sound</strong>. The <em>h</em> in <em>honest</em> is silent, so it's <em>an honest man</em>. <em>Useful</em> starts with /j/, so <em>a useful map</em> is correct."
    },
    {
     "id": "m2-7",
     "module": "g6m8",
     "type": "error",
     "cefr": "B1",
     "stem": "There [[weren't]] [[much]] tourists on the beach because it was cloudy and [[windy]], so we [[had]] a quiet day.",
     "options": [
      "weren't",
      "much",
      "windy",
      "had"
     ],
     "answer": 1,
     "fix": "many",
     "hint": "",
     "why": "<em>Tourists</em> are countable and plural, so this negative needs <em>many</em>: <em>There weren't many tourists.</em> <em>Weren't</em> is correct because it agrees with the plural noun."
    }
   ]
  },
  {
   "part": "Part 2",
   "title": "Sentence completion",
   "instructions": "Choose the best answer to complete each sentence.",
   "items": [
    {
     "id": "m2-8",
     "module": "g6m9",
     "type": "gap",
     "cefr": "B1",
     "stem": "How ___ of the students in your class bring their own lunch boxes to school?",
     "options": [
      "much",
      "many",
      "a lot",
      "any"
     ],
     "answer": 1,
     "hint": "",
     "why": "<em>Students</em> are countable, so ask <em>How many of the students…?</em> <em>How much</em> is for uncountable nouns like <em>food</em> or <em>money</em>."
    },
    {
     "id": "m2-9",
     "module": "g6m6",
     "type": "gap",
     "cefr": "B1",
     "stem": "After the storm, ___ a lot of plastic rubbish on the beach, so the students spent the morning cleaning it up.",
     "options": [
      "there was",
      "there were",
      "it had",
      "had"
     ],
     "answer": 0,
     "hint": "",
     "why": "<em>Rubbish</em> is uncountable, so the verb is singular: <em>there was a lot of rubbish</em>. <em>A lot of</em> doesn't make it plural, and <em>it had</em> can't mean <em>there was</em>."
    },
    {
     "id": "m2-10",
     "module": "g7m8",
     "type": "gap",
     "cefr": "B1",
     "stem": "My parents say that if I ___ the TU entrance exam, they will take me to Japan for a holiday.",
     "options": [
      "will pass",
      "pass",
      "passed",
      "am passing"
     ],
     "answer": 1,
     "hint": "",
     "why": "After <em>if</em>, use the present simple for the future: <em>if I pass</em>. The <em>will</em> goes in the other part of the sentence: <em>they will take me</em>."
    },
    {
     "id": "m2-11",
     "module": "g7m5",
     "type": "gap",
     "cefr": "B1",
     "stem": "Sorry, I can't help with the science project tomorrow afternoon. I ___ the dentist at three. Mum made the appointment last week.",
     "options": [
      "'m seeing",
      "'m see",
      "will seeing",
      "seeing"
     ],
     "answer": 0,
     "hint": "",
     "why": "An appointment at a fixed time is an arrangement, so use the present continuous: <em>I'm seeing the dentist at three.</em> <em>I'm see</em> and <em>will seeing</em> are not correct forms."
    },
    {
     "id": "m2-12",
     "module": "g7m10",
     "type": "gap",
     "cefr": "A2",
     "stem": "Fah's grandfather lives on a farm in Nan, and he ___ up before the sun rises.",
     "options": [
      "always gets",
      "gets always",
      "is always get",
      "always is getting"
     ],
     "answer": 0,
     "hint": "",
     "why": "Frequency adverbs go before the main verb: <em>he always gets up</em>. They go after <em>be</em> only when <em>be</em> is the main verb: <em>He is always tired.</em>"
    },
    {
     "id": "m2-13",
     "module": "g6m10",
     "type": "gap",
     "cefr": "B1",
     "stem": "\"My cousin from Australia is coming to Bangkok for the first time. Where ___ him?\" — \"The floating market, of course!\"",
     "options": [
      "I should take",
      "should I take",
      "should I to take",
      "do I should take"
     ],
     "answer": 1,
     "hint": "",
     "why": "To ask for advice, put <em>should</em> before the subject: <em>Where should I take him?</em> Never add <em>to</em> after <em>should</em> or use <em>do</em> with it."
    },
    {
     "id": "m2-14",
     "module": "g6m3",
     "type": "gap",
     "cefr": "B1",
     "stem": "The news about the forest fire ___ very bad, so the whole class wanted to help.",
     "options": [
      "were",
      "was",
      "are",
      "have been"
     ],
     "answer": 1,
     "hint": "",
     "why": "<em>News</em> ends in <em>-s</em> but it is uncountable, so it takes a singular verb: <em>the news was bad</em>. <em>The news were</em> is a common mistake."
    }
   ]
  },
  {
   "part": "Part 3",
   "title": "Vocabulary in context",
   "instructions": "Choose the best word or phrase, or the answer closest in meaning to the underlined word.",
   "items": [
    {
     "id": "m2-15",
     "module": "v6m8",
     "type": "gap",
     "cefr": "B1",
     "stem": "On the way home, I bought a ___ of strawberry jam and a ___ of crisps.",
     "options": [
      "jar / packet",
      "packet / jar",
      "tin / cup",
      "bottle / box"
     ],
     "answer": 0,
     "hint": "",
     "why": "Jam comes in a <em>jar</em> and crisps come in a <em>packet</em>. A <em>packet of jam</em> and a <em>jar of crisps</em> are not normal English."
    },
    {
     "id": "m2-16",
     "module": "v7m7",
     "type": "gap",
     "cefr": "B1",
     "stem": "The fog was so ___ that we couldn't see the car in front of us.",
     "options": [
      "thick",
      "strong",
      "high",
      "hard"
     ],
     "answer": 0,
     "hint": "",
     "why": "We say <em>thick fog</em> when it is hard to see through. <em>Strong</em> goes with <em>wind</em>, and <em>heavy</em> goes with <em>rain</em>."
    },
    {
     "id": "m2-17",
     "module": "v7m9",
     "type": "meaning",
     "cefr": "B1",
     "stem": "People are <u>destroying</u> the forest where these rare monkeys live. The word <u>destroying</u> is closest in meaning to…",
     "options": [
      "carefully protecting",
      "often visiting",
      "quickly finding",
      "badly damaging"
     ],
     "answer": 3,
     "hint": "",
     "why": "To <em>destroy</em> something means to damage it so badly that it can't be used again. <em>Protecting</em> is the opposite."
    },
    {
     "id": "m2-18",
     "module": "v6m10",
     "type": "gap",
     "cefr": "B1",
     "stem": "Doctors say we should eat less ___ food, like crisps, sweets and fried chicken.",
     "options": [
      "healthy",
      "unhealthy",
      "health",
      "unhealth"
     ],
     "answer": 1,
     "hint": "",
     "why": "Crisps, sweets and fried chicken are <em>unhealthy</em>: bad for your body. Before a noun we need an adjective, so <em>health</em> is wrong, and <em>unhealth</em> isn't a word."
    },
    {
     "id": "m2-19",
     "module": "v7m2",
     "type": "gap",
     "cefr": "A2",
     "stem": "The guide said the ___ looks slow and friendly, but it is very dangerous. It lives in rivers and can run fast on land.",
     "options": [
      "penguin",
      "hippo",
      "jellyfish",
      "eagle"
     ],
     "answer": 1,
     "hint": "",
     "why": "<em>Hippos</em> live in rivers and lakes, and they can run fast on land. Penguins and jellyfish live in the sea, and eagles fly."
    },
    {
     "id": "m2-20",
     "module": "v6m9",
     "type": "gap",
     "cefr": "A2",
     "stem": "Americans say <em>cookie</em>, but British people say ___.",
     "options": [
      "crisp",
      "sweet",
      "biscuit",
      "cake"
     ],
     "answer": 2,
     "hint": "",
     "why": "British <em>biscuit</em> = American <em>cookie</em>. <em>Crisps</em> are potato snacks and <em>sweets</em> are candy, so they are different foods."
    }
   ]
  },
  {
   "part": "Part 4",
   "title": "Conversation",
   "instructions": "Choose the best line to complete each conversation.",
   "items": [
    {
     "id": "m2-21",
     "module": "g6m12",
     "type": "dialogue",
     "cefr": "A2",
     "lines": [
      {
       "who": "Waitress",
       "text": "Hi! Are you ready to order?"
      },
      {
       "who": "Leo",
       "text": "Yes. I'd like the green curry with rice, please."
      },
      {
       "who": "Waitress",
       "text": "___"
      },
      {
       "who": "Leo",
       "text": "Yes, please. A lemonade."
      }
     ],
     "stem": "",
     "options": [
      "Can we have the bill, please?",
      "Would you like to pay by card or with cash?",
      "Would you like a drink with that?",
      "Here's your change. Enjoy your meal!"
     ],
     "answer": 2,
     "hint": "",
     "why": "Leo answers with a drink, so the waitress offered one: <em>Would you like a drink with that?</em> <em>Can we have the bill?</em> is what a customer says."
    },
    {
     "id": "m2-22",
     "module": "g7m12",
     "type": "dialogue",
     "cefr": "B1",
     "lines": [
      {
       "who": "Sam",
       "text": "We're having a barbecue at my house on Friday evening. Can you come?"
      },
      {
       "who": "Ploy",
       "text": "___ I've got a piano exam on Saturday morning and I need to practise."
      },
      {
       "who": "Sam",
       "text": "No problem. Good luck with your exam!"
      }
     ],
     "stem": "",
     "options": [
      "I'd love to, but I'm afraid I can't.",
      "Yes, of course I'll be there!",
      "Great! What should I bring?",
      "Thanks, I'll come after my exam on Friday."
     ],
     "answer": 0,
     "hint": "",
     "why": "Ploy gives a reason why she can't come, and Sam says <em>No problem</em>, so she politely says no: <em>I'd love to, but I'm afraid I can't.</em>"
    },
    {
     "id": "m2-23",
     "module": "g7m11",
     "type": "dialogue",
     "cefr": "A2",
     "lines": [
      {
       "who": "Nut",
       "text": "I'm so bored. There's nothing to do this afternoon."
      },
      {
       "who": "Mia",
       "text": "___"
      },
      {
       "who": "Nut",
       "text": "That's a great idea! I love the penguins there."
      }
     ],
     "stem": "",
     "options": [
      "Why didn't we go to the zoo?",
      "We went to the zoo last week.",
      "Why don't we go to the zoo?",
      "Do you often go to the zoo?"
     ],
     "answer": 2,
     "hint": "",
     "why": "<em>That's a great idea!</em> answers a suggestion: <em>Why don't we go…?</em> <em>Why didn't we…?</em> asks about the past, so it can't be a suggestion."
    },
    {
     "id": "m2-24",
     "module": "g7m4",
     "type": "dialogue",
     "cefr": "A2",
     "lines": [
      {
       "who": "Mum",
       "text": "Oh no! I forgot to buy eggs, and I need them for the cake."
      },
      {
       "who": "Tonkla",
       "text": "___"
      },
      {
       "who": "Mum",
       "text": "Thanks, dear. Take some money from my bag."
      }
     ],
     "stem": "",
     "options": [
      "Don't worry. I go to the shop now.",
      "Don't worry. I went to the shop.",
      "Don't worry. I'm going to the shop next week.",
      "Don't worry. I'll go to the shop now."
     ],
     "answer": 3,
     "hint": "",
     "why": "Tonkla decides to help at the moment of speaking, so he uses <em>will</em>: <em>I'll go to the shop now.</em> <em>I go</em> is a common mistake in offers."
    },
    {
     "id": "m2-25",
     "module": "g6m11",
     "type": "dialogue",
     "cefr": "A2",
     "lines": [
      {
       "who": "Jay",
       "text": "I want to get a good score in the TU exam, but I always forget new words."
      },
      {
       "who": "Teacher",
       "text": "___"
      },
      {
       "who": "Jay",
       "text": "Good idea. I'll start tonight."
      }
     ],
     "stem": "",
     "options": [
      "I don't think you should study English at home at all.",
      "You should learn ten words a day and test yourself.",
      "You shouldn't learn any new words this year.",
      "You should forget all the old words first."
     ],
     "answer": 1,
     "hint": "",
     "why": "Jay wants to remember words and likes the idea, so the advice must help him: <em>You should learn ten words a day…</em> The others would make the problem worse."
    }
   ]
  },
  {
   "part": "Part 5",
   "title": "Passage cloze",
   "instructions": "Read the text and choose the best word for each blank.",
   "passage": "<strong>The Island Clean-Up</strong><br>Every year in May, the students at Mek's school take a boat to a small island in the Gulf of Thailand. This year they (26) ______ going to spend two days cleaning its beaches. Last year they collected 300 kilograms of rubbish, and (27) ______ of it was plastic. \"There (28) ______ always a lot of plastic rubbish on the sand after a (29) ______ night,\" says their teacher, Mr Ken. \"The wind and the waves bring it in from the sea.\"<br><br>The students also have a plan for the food stalls on the island. They are going to ask the owners to sell drinks in glass (30) ______ and to give their customers paper bags instead of plastic ones. Each student will also bring (31) ______ used T-shirt, and they will turn the T-shirts into cloth shopping bags for the stall owners.<br><br>Mr Ken is sure the trip (32) ______ a success. \"These students really care about the ocean,\" he says. \"And when young people care, adults listen.\"",
   "items": [
    {
     "id": "m2-26",
     "module": "g7m1",
     "type": "cloze",
     "blank": 26,
     "cefr": "A2",
     "stem": "(26)",
     "options": [
      "is",
      "are",
      "will",
      "have"
     ],
     "answer": 1,
     "hint": "",
     "why": "<em>Going to</em> always needs <em>be</em>, and <em>they</em> takes <em>are</em>: <em>they are going to spend</em>. <em>Will going</em> and <em>have going</em> are not correct forms."
    },
    {
     "id": "m2-27",
     "module": "g6m8",
     "type": "cloze",
     "blank": 27,
     "cefr": "B1",
     "stem": "(27)",
     "options": [
      "many",
      "a few",
      "several",
      "a lot"
     ],
     "answer": 3,
     "hint": "",
     "why": "<em>It</em> means the rubbish, which is uncountable, so use <em>a lot of it</em>. <em>Many</em>, <em>a few</em> and <em>several</em> need a plural: <em>many of them</em>."
    },
    {
     "id": "m2-28",
     "module": "g6m6",
     "type": "cloze",
     "blank": 28,
     "cefr": "B1",
     "stem": "(28)",
     "options": [
      "are",
      "have",
      "is",
      "has"
     ],
     "answer": 2,
     "hint": "",
     "why": "<em>Rubbish</em> is uncountable, so use <em>there is</em>, even after <em>a lot of</em>. Don't use <em>have</em> or <em>has</em> to say that something is in a place."
    },
    {
     "id": "m2-29",
     "module": "v7m6",
     "type": "cloze",
     "blank": 29,
     "cefr": "A2",
     "stem": "(29)",
     "options": [
      "windy",
      "wind",
      "winds",
      "winded"
     ],
     "answer": 0,
     "hint": "",
     "why": "Before the noun <em>night</em> we need an adjective: <em>a windy night</em>. <em>Wind</em> is the noun, as in the next sentence: <em>The wind and the waves…</em>"
    },
    {
     "id": "m2-30",
     "module": "v6m7",
     "type": "cloze",
     "blank": 30,
     "cefr": "A2",
     "stem": "(30)",
     "options": [
      "bottles",
      "packets",
      "bags",
      "boxes"
     ],
     "answer": 0,
     "hint": "",
     "why": "Drinks come in <em>bottles</em> (or cans), and glass bottles can be used again. Packets, bags and boxes are not made of glass."
    },
    {
     "id": "m2-31",
     "module": "g6m4",
     "type": "cloze",
     "blank": 31,
     "cefr": "B1",
     "stem": "(31)",
     "options": [
      "an",
      "some",
      "any",
      "a"
     ],
     "answer": 3,
     "hint": "",
     "why": "Choose by the first <strong>sound</strong>: <em>used</em> starts with /j/, like <em>you</em>, so it's <em>a used T-shirt</em>, not <em>an</em>. <em>Some</em> and <em>any</em> don't go with one T-shirt."
    },
    {
     "id": "m2-32",
     "module": "g7m4",
     "type": "cloze",
     "blank": 32,
     "cefr": "A2",
     "stem": "(32)",
     "options": [
      "will be",
      "is being",
      "be",
      "will"
     ],
     "answer": 0,
     "hint": "",
     "why": "<em>Is sure</em> shows an opinion about the future, so use <em>will</em> + base verb: <em>the trip will be a success</em>. <em>Will</em> alone has no main verb."
    }
   ]
  },
  {
   "part": "Part 6",
   "title": "Reading (Passage A)",
   "instructions": "Read the passage and answer the questions.",
   "passage": "<strong>Storm Warning: Ko Sai Marine Park</strong><br>A tropical storm is moving towards the coast. From Thursday afternoon until Saturday night, there will be strong winds and heavy rain, and the waves in the bay may be up to three metres high. Please read the following information carefully.<br><br><strong>Boat trips:</strong> All boat trips to the outer islands are cancelled from 12 noon on Thursday until Saturday evening. If you paid for a trip before this warning, the park office will give you your money back or move your booking to another day.<br><br><strong>Paths:</strong> The waterfall path will be closed, because the rocks there become very slippery when they are wet. The beach paths will stay open.<br><br><strong>Swimming:</strong> Swimming is not allowed on any beach while the red flags are flying.<br><br><strong>Camping:</strong> Campers on Long Beach should move to the visitor centre before 6 p.m. on Thursday. The centre has a large hall with free drinking water and electricity.<br><br>We expect the weather to improve on Sunday, but the storm may change direction, so please check this notice board every morning. Rangers are working day and night during the warning. In an emergency, speak to any ranger in a green uniform.<br><br>Thank you for helping us to keep everyone safe.",
   "source": "",
   "items": [
    {
     "id": "m2-33",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "What is the main purpose of this notice?",
     "options": [
      "to sell boat trips to the outer islands after the storm",
      "to explain to visitors how tropical storms begin",
      "to invite campers to a party at the visitor centre",
      "to explain how the storm will change visitors' plans"
     ],
     "answer": 3,
     "hint": "",
     "why": "The notice lists what the storm will change (boats, paths, swimming, camping) and how to stay safe. Campers and boat trips are only parts of it."
    },
    {
     "id": "m2-34",
     "module": "read",
     "type": "read",
     "cefr": "A2",
     "stem": "What will happen to visitors who paid for a boat trip that is now cancelled?",
     "options": [
      "They must take the trip on Thursday morning instead.",
      "They can sleep in the visitor centre hall for free.",
      "They have to pay for the trip again after the storm.",
      "They can get their money back or go on another day."
     ],
     "answer": 3,
     "hint": "",
     "why": "The notice says the park office will give the money back or move the booking to another day. The visitor centre is for campers."
    },
    {
     "id": "m2-35",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "The word <em>slippery</em> is closest in meaning to…",
     "options": [
      "very hot after a sunny day",
      "full of deep water",
      "easy to slide and fall on",
      "difficult to see in the fog"
     ],
     "answer": 2,
     "hint": "",
     "why": "The rocks become <em>slippery</em> when they are wet, so the path is closed: people could slide and fall. Wet rocks are not hot or hard to see."
    },
    {
     "id": "m2-36",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "Which visitor will probably <strong>NOT</strong> need to change their plans?",
     "options": [
      "a family camping on Long Beach on Friday night",
      "a girl who wants to walk to the waterfall on Friday",
      "a group with a boat trip at 9 a.m. on Thursday",
      "a boy who wants to swim at the beach on Friday"
     ],
     "answer": 2,
     "hint": "",
     "why": "Boat trips are cancelled only from 12 noon on Thursday, so a 9 a.m. trip can still go. Campers must move, the waterfall path is closed and swimming is stopped."
    }
   ]
  },
  {
   "part": "Part 6",
   "title": "Reading (Passage B)",
   "instructions": "Read the passage and answer the questions.",
   "passage": "<strong>Bees, Honey and a Big Idea</strong><br>Fah is fourteen and lives in a village in the hills of Chiang Mai. Her grandmother started keeping bees there more than thirty years ago. Every morning, thousands of bees fly out to the fields and forests to collect food from flowers. While they do this, they carry pollen (a yellow powder) from one plant to another, and this helps the plants to make fruit and seeds. In fact, more than three-quarters of the world's food crops need this help from animals such as bees, at least partly.<br><br>Last year was difficult. There was very little rain in the cool season, so there weren't many flowers, and the bees made much less honey than usual. At the market, Fah's grandmother sold only forty jars, half the usual number.<br><br>Then Fah had an idea. She took photos of the bees and the hills, made a simple web page and started selling the honey online. To her surprise, people from Bangkok and Phuket bought all the honey in two weeks. Some customers even asked if they could visit the farm.<br><br>Now Fah and her grandmother are going to plant more flowers around the village, so the bees will have enough food even in dry years. Next year they are also going to open the farm to small groups of visitors. \"Some people think bees are dangerous,\" says Fah. \"I want them to see that bees are our partners.\"",
   "source": "",
   "items": [
    {
     "id": "m2-37",
     "module": "read",
     "type": "read",
     "cefr": "A2",
     "stem": "What is the passage mainly about?",
     "options": [
      "why there is very little rain in Chiang Mai",
      "how to make a simple web page for a small shop",
      "why some people are afraid of bees and flowers",
      "how a girl helped her grandmother's honey business"
     ],
     "answer": 3,
     "hint": "",
     "why": "The passage tells how Fah sold her grandmother's honey online after a bad year, and what they plan next. The rain and the web page are only details."
    },
    {
     "id": "m2-38",
     "module": "read",
     "type": "read",
     "cefr": "A2",
     "stem": "Why did the bees make less honey last year?",
     "options": [
      "The bees flew away to other villages.",
      "Fah's grandmother sold most of her bees.",
      "There were too many visitors on the farm.",
      "Dry weather meant there were fewer flowers."
     ],
     "answer": 3,
     "hint": "",
     "why": "Paragraph 2 says there was very little rain, so there weren't many flowers, and the bees made much less honey. The other reasons are not in the text."
    },
    {
     "id": "m2-39",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "In the last paragraph, <em>them</em> in 'I want them to see…' refers to…",
     "options": [
      "Fah and her grandmother",
      "the bees on the farm",
      "people who think bees are dangerous",
      "the customers who bought honey online"
     ],
     "answer": 2,
     "hint": "",
     "why": "Fah says <em>Some people think bees are dangerous. I want them to see…</em>, so <em>them</em> means those people. She wants to change their minds."
    },
    {
     "id": "m2-40",
     "module": "read",
     "type": "read",
     "cefr": "B1",
     "stem": "Which sentence is probably true?",
     "options": [
      "Fah's grandmother usually sells about twenty jars at the market.",
      "Some customers from Bangkok visited the farm last year.",
      "Fah did not expect the honey to sell so quickly.",
      "Fah wants to stop keeping bees because they are dangerous."
     ],
     "answer": 2,
     "hint": "",
     "why": "<em>To her surprise</em> shows Fah didn't expect it. <em>Half the usual number</em> means about eighty jars, not twenty, and customers only asked to visit."
    }
   ]
  }
 ]
});
