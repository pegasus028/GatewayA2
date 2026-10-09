// Trail Mix — VOCAB.u7: vocabulary training for Unit 7 "Into the wild" (Student's Book pp.92–103).
// Stages v7s1–v7s4, modules v7m1–v7m9 (SPEC §6). Every item: 4 options, one key; answer = index of the key.
window.VOCAB = window.VOCAB || {};
VOCAB.u7 = {
  unit: 7,
  title: "Into the wild",
  pages: "pp.92–103",
  stages: [
    {
      id: "v7s1",
      n: 1,
      name: "Wild animals",
      icon: "🐾",
      blurb: "Wings, fins, stripes and stings: meet the 20 wild animals of Unit 7 and learn how to tell them apart.",
      modules: [
        {
          id: "v7m1",
          name: "Wings and fins",
          page: "p.92, p.102",
          cefr: "A2",
          extra: false,
          rule: {
            key: "Wings or fins? Look at how an animal moves, but don't trust every name!",
            body: [
              "Birds have feathers, wings and a beak. An <strong>eagle</strong> and an <strong>owl</strong> fly and hunt; the owl usually hunts at night. A <strong>penguin</strong> is a bird too, but it can't fly: it uses its wings to swim.",
              "Insects have six legs, and many have wings. A <strong>bee</strong> and a <strong>butterfly</strong> are insects. A bee makes honey and can sting you; a butterfly can't sting.",
              "In the ocean, look twice. A <strong>shark</strong> is a fish: it breathes in the water. A <strong>whale</strong> looks like a giant fish, but it is a mammal (an animal whose babies drink milk): it comes up to breathe air. And a <strong>jellyfish</strong> is not a fish at all: it has no bones and no brain."
            ],
            table: [
              ["Animal", "It moves with…", "Group"],
              ["eagle, owl", "wings: it flies", "bird"],
              ["penguin", "wings: it swims", "bird that can't fly"],
              ["bee, butterfly", "wings: it flies", "insect (6 legs)"],
              ["shark", "fins and a tail", "fish"],
              ["whale", "flippers and a tail", "mammal (breathes air)"],
              ["jellyfish", "its soft body opens and closes", "not a fish!"]
            ],
            examples: [
              { ok: true, s: "An <strong>owl</strong> hunts at night." },
              { ok: true, s: "A <strong>penguin</strong> can swim, but it can't fly." },
              { ok: false, s: "A jellyfish is a fish.", fix: "A jellyfish is a sea animal, but it isn't a fish." }
            ],
            tip: "Bee = buzz and sting. Butterfly = big colourful wings. Eagle = eyes in the sky. Owl = eyes in the dark.",
            words: ["bee", "butterfly", "eagle", "owl", "penguin", "jellyfish", "shark", "whale"]
          },
          items: [
            {
              id: "v7m1-1",
              type: "picture",
              cefr: "A2",
              img: "owl",
              stem: "What's in the picture?",
              options: ["an owl", "an eagle", "a penguin", "a bee"],
              answer: 0,
              hint: "Look at the shape of its face and the size of its eyes.",
              why: "An <em>owl</em> has a round, flat face with two big eyes at the front, and it usually hunts at night. An <em>eagle</em> also hunts, but its face isn't round and flat."
            },
            {
              id: "v7m1-2",
              type: "classify",
              cefr: "A2",
              stem: "<strong>penguin</strong>: which animal group is it in?",
              options: ["birds", "fish", "insects", "mammals"],
              answer: 0,
              hint: "Forget where it lives. What covers its body, and what does it have instead of arms?",
              why: "A <em>penguin</em> is a bird: it has feathers, wings and a beak, and it lays eggs. It swims in the sea, but that doesn't make it a fish."
            },
            {
              id: "v7m1-3",
              type: "odd",
              cefr: "A2",
              stem: "All four have wings. Which one can't fly?",
              options: ["eagle", "owl", "butterfly", "penguin"],
              answer: 3,
              hint: "Wings don't always do the same job. Where does each animal use its wings?",
              why: "A <em>penguin</em> uses its wings like flippers to swim under the water. Eagles, owls and butterflies all use their wings to fly."
            },
            {
              id: "v7m1-4",
              type: "gap",
              cefr: "A2",
              stem: "Be careful when you swim in the sea near Krabi: a ___ can sting you, and it really hurts.",
              options: ["bee", "jellyfish", "shark", "whale"],
              answer: 1,
              hint: "Two clues: where the animal is, and what it does to you.",
              why: "A <em>jellyfish</em> lives in the sea and can sting. A <em>bee</em> can sting too, but it doesn't live in the sea. Sharks bite; they don't sting."
            },
            {
              id: "v7m1-5",
              type: "meaning",
              cefr: "B1",
              stem: "What is an <strong>eagle</strong>?",
              options: [
                "a big bird with very sharp eyes that hunts in the day",
                "a bird with a round, flat face that hunts at night",
                "a black and white sea bird that can swim but can't fly",
                "a small yellow and black insect that makes honey"
              ],
              answer: 0,
              hint: "Think about its size, its eyes and when it hunts.",
              why: "An <em>eagle</em> is a big hunting bird with excellent eyes, and it hunts in the day. The bird with a round face that hunts at night is an <em>owl</em>."
            },
            {
              id: "v7m1-6",
              type: "dialogue",
              cefr: "B1",
              context: "Tonkla and Fah are on a boat trip in the Gulf of Thailand.",
              lines: [
                { who: "Tonkla", text: "Why does that whale keep coming up to the top of the water?" },
                { who: "Fah", text: "It needs to breathe air. A whale isn't a fish. It's a ___." }
              ],
              stem: "",
              options: ["reptile", "bird", "insect", "mammal"],
              answer: 3,
              hint: "Whale babies drink their mother's milk. Which group does that?",
              why: "A <em>whale</em> is a mammal: it breathes air and its babies drink milk. Sea turtles (reptiles) also come up to breathe, but they lay eggs and don't make milk."
            }
          ]
        },
        {
          id: "v7m2",
          name: "Big and powerful",
          page: "p.92, p.102",
          cefr: "A2",
          extra: false,
          rule: {
            key: "Stripes, spots, horns or a huge mouth? Every big animal has a 'signature' you can see from far away.",
            body: [
              "Big cats: a <strong>tiger</strong> has orange fur with black stripes; a <strong>leopard</strong> has yellow fur with dark spots. Both are good climbers, and tigers love water and swim very well. Wild tigers still live in Thai forests such as Huai Kha Khaeng.",
              "The dog family: a <strong>wolf</strong> and a <strong>fox</strong> are wild cousins of the dog. A wolf is big and grey and lives and hunts in a family group (a pack). A fox is smaller, often red-brown, with a long, thick tail.",
              "The giants: a <strong>hippo</strong> is huge and grey and spends the day in rivers and lakes. A <strong>rhino</strong> has one or two horns on its nose. A <strong>bear</strong> is big and heavy, with thick fur, and it can stand up on its back legs."
            ],
            table: [
              ["Animal", "Look for…", "Family"],
              ["tiger", "orange fur + black stripes", "big cat"],
              ["leopard", "yellow fur + dark spots", "big cat"],
              ["wolf", "big, grey, lives in a pack", "dog family"],
              ["fox", "smaller, red-brown, thick tail", "dog family"],
              ["bear", "thick fur, stands on two legs", "bear family"],
              ["hippo", "huge mouth, lives in rivers", "hippo family"],
              ["rhino", "one or two horns on its nose", "rhino family"]
            ],
            examples: [
              { ok: true, s: "A <strong>rhino</strong> has a horn on its nose." },
              { ok: true, s: "<strong>Wolves</strong> hunt together in a pack." },
              { ok: false, s: "Hippos are very good swimmers.", fix: "Hippos can't really swim: they walk along the bottom of the river." }
            ],
            tip: "Tiger = stripes, leopard = spots. And say LEP-ard: the o is silent!",
            words: ["bear", "hippo", "leopard", "rhino", "tiger", "wolf", "fox"]
          },
          items: [
            {
              id: "v7m2-1",
              type: "picture",
              cefr: "A2",
              img: "leopard",
              stem: "What animal is this?",
              options: ["a tiger", "a fox", "a wolf", "a leopard"],
              answer: 3,
              hint: "Look closely at the pattern on its fur.",
              why: "A <em>leopard</em> is a big cat with dark spots. A <em>tiger</em> is also a big cat, but it has stripes, not spots."
            },
            {
              id: "v7m2-2",
              type: "gap",
              cefr: "A2",
              stem: "This huge grey animal stays in the river all day to keep cool, and comes out at night to eat grass. It's a ___.",
              options: ["rhino", "hippo", "bear", "wolf"],
              answer: 1,
              hint: "Find the clue about where the animal spends its day.",
              why: "A <em>hippo</em> spends the day in rivers and lakes and eats grass at night. A <em>rhino</em> is also big and grey, but it doesn't live in the river."
            },
            {
              id: "v7m2-3",
              type: "odd",
              cefr: "A2",
              stem: "Three of these animals hunt other animals for food. Which one eats only plants?",
              options: ["tiger", "leopard", "rhino", "wolf"],
              answer: 2,
              hint: "Think about teeth and claws. Who needs them to catch food?",
              why: "A <em>rhino</em> eats grass and leaves. <em>Tigers</em>, <em>leopards</em> and <em>wolves</em> are hunters: they catch and eat other animals."
            },
            {
              id: "v7m2-4",
              type: "classify",
              cefr: "B1",
              stem: "<strong>fox</strong>: which animal family is it in?",
              options: ["the cat family", "the bear family", "the monkey family", "the dog family"],
              answer: 3,
              hint: "Think of the bigger grey animal that hunts in a pack. Is the fox its cousin?",
              why: "A <em>fox</em> is in the dog family, like the <em>wolf</em>. Some foxes move a little like cats, but they are not cats."
            },
            {
              id: "v7m2-5",
              type: "meaning",
              cefr: "A2",
              stem: "What is a <strong>rhino</strong>?",
              options: [
                "a big grey animal that spends the day in rivers",
                "a big grey animal with a horn or two on its nose",
                "a big animal with thick fur that can stand on two legs",
                "a big cat with orange fur and black stripes"
              ],
              answer: 1,
              hint: "Think about its skin, its nose and where it spends the day.",
              why: "A <em>rhino</em> has thick grey skin and one or two horns on its nose. A <em>hippo</em> is big and grey too, but it has no horn and spends the day in rivers."
            },
            {
              id: "v7m2-6",
              type: "dialogue",
              cefr: "A2",
              context: "Pim and Ken are making a poster for science class.",
              lines: [
                { who: "Pim", text: "What's your favourite wild animal?" },
                { who: "Ken", text: "The ___. I love its black stripes, and it's a great swimmer too!" }
              ],
              stem: "",
              options: ["leopard", "hippo", "bear", "tiger"],
              answer: 3,
              hint: "Two clues: the pattern on its body and what it can do in water.",
              why: "A <em>tiger</em> has black stripes and swims very well. A <em>leopard</em> has spots, and a <em>hippo</em> can't really swim: it walks along the bottom of the river."
            }
          ]
        },
        {
          id: "v7m3",
          name: "Small and surprising",
          page: "p.92, p.93",
          cefr: "A2",
          extra: false,
          rule: {
            key: "Count the legs: 0, 4, 6 or 8? Small animals are full of surprises, and three big words help us talk about animals in danger.",
            body: [
              "A <strong>snake</strong> and a <strong>lizard</strong> are reptiles: they have dry skin with scales (small hard pieces of skin) and love warm places. A snake has no legs; a lizard has four short legs and a long tail. The little gecko on your bedroom wall is a lizard!",
              "A <strong>scorpion</strong> has eight legs, two claws and a sting at the end of its tail. Insects have six legs, so a scorpion is not an insect: it is in the spider group (arachnids).",
              "A <strong>monkey</strong> is clever, climbs trees and can hold things with its hands, like the famous monkeys of Lopburi. A <strong>rat</strong> is like a big mouse with a long thin tail, and it lives almost everywhere people live.",
              "Animals in danger: some <strong>species</strong> (types of animal) are now <strong>rare</strong> (there are very few left). For years, people killed rhinos for their <strong>horns</strong>."
            ],
            table: [
              ["Legs", "Animal", "Group"],
              ["0", "snake", "reptile"],
              ["4", "lizard", "reptile"],
              ["4 (hands and feet)", "monkey, rat", "mammal"],
              ["6", "bee, butterfly", "insect"],
              ["8", "scorpion", "spider group (arachnid)"]
            ],
            examples: [
              { ok: true, s: "A <strong>scorpion</strong> has eight legs." },
              { ok: false, s: "A scorpion is an insect.", fix: "A scorpion isn't an insect. Insects have six legs." },
              { ok: true, s: "Snow leopards are a <strong>rare species</strong>: there aren't many left." }
            ],
            tip: "One species, two species: the word never changes!",
            words: ["lizard", "monkey", "rat", "scorpion", "snake", "rare", "species", "horn"]
          },
          items: [
            {
              id: "v7m3-1",
              type: "picture",
              cefr: "A2",
              img: "lizard",
              stem: "What's in the picture?",
              options: ["a lizard", "a snake", "a scorpion", "a rat"],
              answer: 0,
              hint: "Count its legs, and look at its skin and tail.",
              why: "A <em>lizard</em> has four short legs, a long tail and dry skin. A <em>snake</em> has the same kind of skin, but no legs at all."
            },
            {
              id: "v7m3-2",
              type: "classify",
              cefr: "A2",
              stem: "<strong>scorpion</strong>: which group is it in?",
              options: ["insects", "reptiles", "fish", "the spider group"],
              answer: 3,
              hint: "Count its legs. How many legs does an insect have?",
              why: "A <em>scorpion</em> has eight legs, like a spider, so it is in the spider group (arachnids). Insects, like bees and butterflies, have only six legs."
            },
            {
              id: "v7m3-3",
              type: "gap",
              cefr: "B1",
              stem: "Only a few Sumatran rhinos are left in the world. They are very ___.",
              options: ["rare", "shocking", "common", "wild"],
              answer: 0,
              hint: "The first sentence tells you how many there are. Which word matches that?",
              why: "<em>Rare</em> means there are very few. The news about rhinos is <em>shocking</em>, but the animals themselves aren't. <em>Common</em> means the opposite of rare."
            },
            {
              id: "v7m3-4",
              type: "meaning",
              cefr: "B1",
              stem: "What is a <strong>species</strong>?",
              options: [
                "one type of animal or plant",
                "an animal that may disappear soon",
                "the natural home of a wild animal",
                "a group of animals that hunt together"
              ],
              answer: 0,
              hint: "Are a tiger and a snow leopard one species or two?",
              why: "A <em>species</em> is one type of animal or plant: tigers are one species, snow leopards are another. A species can be in danger, but the word doesn't mean 'in danger'."
            },
            {
              id: "v7m3-5",
              type: "odd",
              cefr: "A2",
              stem: "Which animal is NOT a reptile (an animal with dry skin and scales)?",
              options: ["snake", "lizard", "rat", "crocodile"],
              answer: 2,
              hint: "What covers each animal's body?",
              why: "A <em>rat</em> has fur and its babies drink milk, so it is a mammal. Snakes, lizards and crocodiles have dry skin with scales: they are reptiles."
            },
            {
              id: "v7m3-6",
              type: "dialogue",
              cefr: "A2",
              context: "Nut is talking to a ranger in a national park.",
              lines: [
                { who: "Nut", text: "Why aren't there any rhinos in this forest now?" },
                { who: "Ranger", text: "Many years ago, hunters killed them for their ___." }
              ],
              stem: "",
              options: ["teeth", "fur", "tails", "horns"],
              answer: 3,
              hint: "Remember the 'Frozen zoos' text on p.93.",
              why: "Hunters killed rhinos for their <em>horns</em>. People kill elephants for their tusks (very long teeth), but a rhino's horn is not a tooth."
            }
          ]
        }
      ],
      checkpoint: {
        id: "v7s1ck",
        name: "Checkpoint",
        items: [
          {
            id: "v7s1ck-1",
            type: "choose",
            cefr: "A2",
            stem: "Which sentence about whales is true?",
            options: ["A whale is a very big fish.", "A whale can breathe under water.", "A whale breathes air, like us.", "A whale lays its eggs in the sea."],
            answer: 2,
            hint: "Why does a whale keep coming up to the top of the water?",
            why: "A <em>whale</em> is a mammal: it comes up to breathe air, and its babies drink milk. It looks like a big fish, but it isn't one."
          },
          {
            id: "v7s1ck-2",
            type: "gap",
            cefr: "A2",
            stem: "A ___ visits flowers all day and makes honey.",
            options: ["butterfly", "fly", "bee", "beetle"],
            answer: 2,
            hint: "Read the end of the sentence carefully.",
            why: "A <em>bee</em> makes honey. A <em>butterfly</em> also visits flowers, but it doesn't make honey."
          },
          {
            id: "v7s1ck-3",
            type: "picture",
            cefr: "A2",
            img: "wolf",
            stem: "What animal is this?",
            options: ["a fox", "a wolf", "a bear", "a leopard"],
            answer: 1,
            hint: "Look at its size, its colour and its ears.",
            why: "A <em>wolf</em> is big and grey, like a large dog. A <em>fox</em> is in the same family, but it is smaller and usually red-brown."
          },
          {
            id: "v7s1ck-4",
            type: "classify",
            cefr: "B1",
            stem: "<strong>shark</strong>: which animal group is it in?",
            options: ["mammals", "reptiles", "birds", "fish"],
            answer: 3,
            hint: "How does a shark breathe: with air, or in the water?",
            why: "A <em>shark</em> is a fish: it breathes in the water and has fins. A <em>whale</em> looks similar, but it is a mammal that breathes air."
          },
          {
            id: "v7s1ck-5",
            type: "odd",
            cefr: "A2",
            stem: "Which animal has NO wings?",
            options: ["jellyfish", "penguin", "bee", "owl"],
            answer: 0,
            hint: "Wings don't always mean flying.",
            why: "A <em>jellyfish</em> has no wings: it moves by opening and closing its soft body. A <em>penguin</em> can't fly, but it does have wings."
          },
          {
            id: "v7s1ck-6",
            type: "dialogue",
            cefr: "B1",
            context: "Mint and Jay are visiting an old temple in Lopburi.",
            lines: [
              { who: "Mint", text: "Hold your bag tightly!" },
              { who: "Jay", text: "Why?" },
              { who: "Mint", text: "The ___ here jump on people and take their food." }
            ],
            stem: "",
            options: ["monkeys", "rats", "foxes", "lizards"],
            answer: 0,
            hint: "Which animal can climb, jump and grab things with its hands?",
            why: "Lopburi is famous for its <em>monkeys</em>: they climb, jump and grab food with their hands. <em>Rats</em> also take food, but they don't jump on people."
          }
        ]
      }
    },
    {
      id: "v7s2",
      n: 2,
      name: "The natural world",
      icon: "🏞️",
      blurb: "From rice fields to mountain tops, rivers to islands: the words for the land, the water and the sky.",
      modules: [
        {
          id: "v7m4",
          name: "Land",
          page: "p.92, p.102",
          cefr: "A2",
          extra: false,
          rule: {
            key: "Walk from a flat field to the top of a mountain: every step up has a name, and so does the low land in between.",
            body: [
              "Start low and flat: a <strong>field</strong> is open land with grass, where farmers grow food (like rice) or keep animals.",
              "Go up a little: a <strong>hill</strong> is higher than a field but lower than a mountain, and usually round and green. Go up a lot: a <strong>mountain</strong> is very high, often with rocks at the top. Doi Inthanon is the highest mountain in Thailand.",
              "Between two hills or mountains, the land goes down: that low land is a <strong>valley</strong>, and a river often runs along it.",
              "Things that grow: <strong>plants</strong> is the big word. <strong>Grass</strong> is short and green; <strong>flowers</strong> are the colourful part of a plant; a <strong>forest</strong> is a big area with lots of trees."
            ],
            table: [
              ["Word", "High or low?", "What you see"],
              ["field", "flat", "grass, rice, cows"],
              ["hill", "a bit high", "a round, green top"],
              ["mountain", "very high", "rocks, cool air"],
              ["valley", "low, between hills", "often a river"],
              ["forest", "high or low", "lots of trees"]
            ],
            examples: [
              { ok: true, s: "We climbed the <strong>hill</strong> behind our school." },
              { ok: true, s: "There's a river at the bottom of the <strong>valley</strong>." },
              { ok: false, s: "We sat on the grasses.", fix: "We sat on the grass." }
            ],
            tip: "Grass is uncountable, like rice: some grass, a lot of grass. Flowers and plants are countable: two flowers, some plants.",
            words: ["field", "forest", "grass", "hill", "mountain", "valley", "flowers", "plants"]
          },
          items: [
            {
              id: "v7m4-1",
              type: "picture",
              cefr: "B1",
              img: "valley",
              stem: "Look at the picture. What do we call the low land between the hills or mountains?",
              options: ["a field", "a hill", "a lake", "a valley"],
              answer: 3,
              hint: "Is it land or water? Is it high or low?",
              why: "A <em>valley</em> is the low land between hills or mountains, often with a river. A <em>field</em> is flat open land, and it can be anywhere."
            },
            {
              id: "v7m4-2",
              type: "choose",
              cefr: "A2",
              stem: "Which list goes from flat land to the highest land?",
              options: ["hill → field → mountain", "mountain → hill → field", "field → hill → mountain", "field → mountain → hill"],
              answer: 2,
              hint: "Start on flat ground and walk up. Which climb comes first, the small one or the big one?",
              why: "A <em>field</em> is flat, a <em>hill</em> is a little high and a <em>mountain</em> is very high. The list that starts with mountain goes the wrong way: from highest to flat."
            },
            {
              id: "v7m4-3",
              type: "odd",
              cefr: "A2",
              stem: "Which one does NOT grow?",
              options: ["hills", "grass", "flowers", "trees"],
              answer: 0,
              hint: "Which ones need water and sun?",
              why: "<em>Grass</em>, <em>flowers</em> and trees are plants: they need water and sun to grow. A <em>hill</em> is land, and land doesn't grow."
            },
            {
              id: "v7m4-4",
              type: "gap",
              cefr: "A2",
              stem: "In January, some trees in the mountains of northern Thailand are covered in pink ___.",
              options: ["grass", "plants", "flowers", "fields"],
              answer: 2,
              hint: "The colour is your clue.",
              why: "<em>Flowers</em> are the colourful part of a plant, and they can be pink. <em>Plants</em> is too general here: the trees themselves are plants."
            },
            {
              id: "v7m4-5",
              type: "meaning",
              cefr: "A2",
              stem: "What is a <strong>forest</strong>?",
              options: [
                "an open area of grass where farmers grow food",
                "the low land between hills or mountains",
                "a large area of land with a lot of trees",
                "a large area of water with land around it"
              ],
              answer: 2,
              hint: "Think about Khao Yai National Park. What covers most of it?",
              why: "A <em>forest</em> is a big area covered with trees. A <em>field</em> is open land with grass or food plants, and it doesn't have many trees."
            },
            {
              id: "v7m4-6",
              type: "classify",
              cefr: "A2",
              stem: "In <em>We sat on the grass</em>, what kind of noun is <strong>grass</strong>?",
              options: ["countable", "uncountable", "always plural", "not a noun"],
              answer: 1,
              hint: "Remember Unit 6: can you count it one by one, like apples, or not, like rice?",
              why: "<em>Grass</em> is uncountable, like rice: some grass, a lot of grass. We say <em>sit on the grass</em>, not <em>on the grasses</em>."
            }
          ]
        },
        {
          id: "v7m5",
          name: "Water and sky",
          page: "p.92, p.102",
          cefr: "A2",
          extra: false,
          rule: {
            key: "An island is land with water all around it. A lake is water with land all around it. Same idea, turned inside out!",
            body: [
              "Water that moves: a <strong>river</strong> flows across the land to the sea. When a river drops over high rocks, you get a <strong>waterfall</strong>, like Erawan Waterfall in Kanchanaburi, which has seven levels.",
              "Water that stays: a <strong>lake</strong> has land all around it. An <strong>ocean</strong> is enormous salt water; the Pacific is the biggest. Thailand's west coast is on the Andaman Sea, part of the Indian Ocean.",
              "Where land meets water: a <strong>beach</strong> is the sand next to the sea or a lake. An <strong>island</strong> is land with water all around it; Phuket is Thailand's biggest island.",
              "Above it all is the <strong>sky</strong>, where you see the sun, the clouds and the birds. We almost always say <em>the sky</em>."
            ],
            table: [
              ["Word", "What is it?", "Thai example"],
              ["river", "moving water, goes to the sea", "the Chao Phraya"],
              ["waterfall", "a river dropping over rocks", "Erawan"],
              ["lake", "water with land all around", "Songkhla Lake"],
              ["island", "land with water all around", "Phuket"],
              ["ocean", "enormous salt water", "the Indian Ocean"],
              ["beach", "sand next to the water", "Hua Hin"]
            ],
            examples: [
              { ok: true, s: "We swam in the <strong>lake</strong> and walked around it." },
              { ok: true, s: "Phuket is an <strong>island</strong> in the Andaman Sea." },
              { ok: false, s: "There are a lot of birds on the sky.", fix: "There are a lot of birds in the sky." }
            ],
            tip: "Island has a silent s: say EYE-land.",
            words: ["beach", "island", "lake", "ocean", "river", "waterfall", "sky"]
          },
          items: [
            {
              id: "v7m5-1",
              type: "picture",
              cefr: "A2",
              img: "island",
              stem: "Look at the picture. Land with water all around it is called…",
              options: ["a lake", "an island", "a beach", "an ocean"],
              answer: 1,
              hint: "In the middle of the picture, is it land or water?",
              why: "An <em>island</em> is land with water all around it. A <em>lake</em> is the opposite: water with land all around it."
            },
            {
              id: "v7m5-2",
              type: "gap",
              cefr: "A2",
              stem: "The Chao Phraya is a long ___. Its water moves through Bangkok and into the sea.",
              options: ["lake", "waterfall", "beach", "river"],
              answer: 3,
              hint: "Does the water stay in one place, or does it move?",
              why: "A <em>river</em> is long, and its water moves to the sea. The water in a <em>lake</em> stays in one place, with land all around it."
            },
            {
              id: "v7m5-3",
              type: "meaning",
              cefr: "B1",
              stem: "What is a <strong>waterfall</strong>?",
              options: [
                "the place where a river goes into the sea",
                "heavy rain that comes down very quickly",
                "a small, deep lake at the top of a mountain",
                "where a river drops over high rocks"
              ],
              answer: 3,
              hint: "Split the word into two parts. What does each part mean?",
              why: "A <em>waterfall</em> is water + fall: a river drops over high rocks. Rain also falls fast sometimes, but we call that <em>heavy rain</em>, not a waterfall."
            },
            {
              id: "v7m5-4",
              type: "odd",
              cefr: "A2",
              stem: "Which one is NOT water?",
              options: ["lake", "beach", "ocean", "river"],
              answer: 1,
              hint: "Think about what you would touch with your feet in each place.",
              why: "A <em>beach</em> is sand or small stones next to the water. A <em>lake</em>, an <em>ocean</em> and a <em>river</em> are all water."
            },
            {
              id: "v7m5-5",
              type: "classify",
              cefr: "A2",
              stem: "<strong>lake</strong>: which description fits?",
              options: [
                "still water with land all around it",
                "moving water that goes to the sea",
                "land with water all around it",
                "huge salt water that covers much of the Earth"
              ],
              answer: 0,
              hint: "Imagine you are standing next to Songkhla Lake. What is all around the water?",
              why: "A <em>lake</em> is still water with land all around it. An <em>island</em> is the opposite idea: land with water all around it."
            },
            {
              id: "v7m5-6",
              type: "dialogue",
              cefr: "A2",
              context: "Jay and Mia are talking about the school holidays.",
              lines: [
                { who: "Jay", text: "What are you going to do in Hua Hin?" },
                { who: "Mia", text: "Lie on the sand all day and swim in the sea. I love the ___!" }
              ],
              stem: "",
              options: ["lake", "river", "field", "beach"],
              answer: 3,
              hint: "Find two clues in Mia's answer.",
              why: "A <em>beach</em> is the sandy place next to the sea. You can swim in a <em>lake</em> or a <em>river</em> too, but Mia is talking about sand and the sea."
            }
          ]
        }
      ],
      checkpoint: {
        id: "v7s2ck",
        name: "Checkpoint",
        items: [
          {
            id: "v7s2ck-1",
            type: "gap",
            cefr: "A2",
            stem: "Doi Inthanon is the highest ___ in Thailand.",
            options: ["hill", "valley", "mountain", "island"],
            answer: 2,
            hint: "It is 2,565 metres high.",
            why: "Doi Inthanon is 2,565 metres high, so it's a <em>mountain</em>. A <em>hill</em> is much lower and rounder."
          },
          {
            id: "v7s2ck-2",
            type: "choose",
            cefr: "B1",
            stem: "Which sentence is correct?",
            options: ["We had a picnic on the grasses.", "We had a picnic on the grass.", "We had a picnic on a grass.", "We had a picnic on grasses."],
            answer: 1,
            hint: "Can you count grass one by one, like apples?",
            why: "<em>Grass</em> is uncountable, like rice, so no <em>a</em> and no <em>-s</em>: <em>on the grass</em>."
          },
          {
            id: "v7s2ck-3",
            type: "picture",
            cefr: "A2",
            img: "hill",
            stem: "Look at the picture. This land is higher than a field, but lower than a mountain. It's a ___.",
            options: ["mountain", "hill", "valley", "field"],
            answer: 1,
            hint: "Think of the order: flat land, a bit higher, very high.",
            why: "A <em>hill</em> is higher than a field but lower than a mountain. A <em>mountain</em> is very high, often with rocks at the top."
          },
          {
            id: "v7s2ck-4",
            type: "odd",
            cefr: "A2",
            stem: "Which one is NOT a place with water?",
            options: ["field", "lake", "river", "ocean"],
            answer: 0,
            hint: "Think about what you would see in each place.",
            why: "A <em>field</em> is open land with grass or food plants. A <em>lake</em>, a <em>river</em> and an <em>ocean</em> are all water."
          },
          {
            id: "v7s2ck-5",
            type: "classify",
            cefr: "B1",
            stem: "<strong>valley</strong>: which description fits?",
            options: [
              "land a bit higher than a field",
              "flat open land where farmers grow rice",
              "the low land between hills",
              "land with water all around it"
            ],
            answer: 2,
            hint: "Is a valley up high or down low?",
            why: "A <em>valley</em> is the low land between hills or mountains, often with a river. A <em>hill</em> is the higher land on each side."
          },
          {
            id: "v7s2ck-6",
            type: "dialogue",
            cefr: "A2",
            context: "Tonkla and Fah are at the top of a hill in Chiang Mai.",
            lines: [
              { who: "Tonkla", text: "The view from up here is amazing!" },
              { who: "Fah", text: "Yes! Look at the white clouds in the blue ___." }
            ],
            stem: "",
            options: ["sky", "ocean", "lake", "river"],
            answer: 0,
            hint: "Look up!",
            why: "Clouds are in the <em>sky</em>. An <em>ocean</em> or a <em>lake</em> can look blue too, but the clouds aren't in the water."
          }
        ]
      }
    },
    {
      id: "v7s3",
      n: 3,
      name: "The weather",
      icon: "⛅",
      blurb: "Rain or rainy? Hot or warm? Learn the weather pairs and three ways to talk about the weather.",
      modules: [
        {
          id: "v7m6",
          name: "Noun or adjective?",
          page: "p.95, p.102",
          cefr: "A2",
          extra: false,
          rule: {
            key: "Add -y to a weather noun and you get an adjective: rain → rainy. But watch the spelling!",
            body: [
              "The noun is the thing: <strong>rain</strong>, <strong>snow</strong>, <strong>sun</strong>, <strong>wind</strong>, <strong>cloud</strong>, <strong>fog</strong>, <strong>ice</strong>, <strong>storm</strong>. The adjective describes the day: <strong>It's windy.</strong> <strong>a rainy day</strong>.",
              "Most nouns just add -y: cloud → cloudy, rain → rainy, snow → snowy, storm → stormy, wind → windy.",
              "A short word ending in one vowel + one consonant doubles the consonant: sun → <strong>sunny</strong>, fog → <strong>foggy</strong>. A word ending in -e drops the e: ice → <strong>icy</strong>. (Snow doesn't double: we never double w.)",
              "Noun after <em>the</em>, <em>a lot of</em> or <em>There's</em>: <em>There's ice on the road.</em> Adjective after <em>It's</em> or before a noun: <em>It's icy.</em> <em>an icy road</em>."
            ],
            table: [
              ["Noun (the thing)", "Adjective (it describes)", "Spelling"],
              ["rain, snow, wind, cloud, storm", "rainy, snowy, windy, cloudy, stormy", "+ y"],
              ["sun, fog", "sunny, foggy", "double the last letter + y"],
              ["ice", "icy", "drop the e + y"]
            ],
            examples: [
              { ok: true, s: "It's very <strong>windy</strong> today. Hold on to your hat!" },
              { ok: true, s: "There's <strong>ice</strong> on the road, so drive slowly." },
              { ok: false, s: "It's sun today.", fix: "It's sunny today." },
              { ok: false, s: "It was a fogy morning.", fix: "It was a foggy morning." }
            ],
            tip: "Short and sharp, like sun and fog? Double it: sunny, foggy.",
            words: ["cloud", "cloudy", "fog", "foggy", "ice", "icy", "rain", "rainy", "snow", "snowy", "storm", "stormy", "sun", "sunny", "wind", "windy"]
          },
          items: [
            {
              id: "v7m6-1",
              type: "picture",
              cefr: "A2",
              img: "foggy",
              stem: "What's the weather like in the picture?",
              options: ["It's foggy.", "It's fog.", "It's fogging.", "It's a fog."],
              answer: 0,
              hint: "After It's, do you need a thing or a describing word?",
              why: "After <em>It's</em> use the adjective: <em>It's foggy</em>. <em>Fog</em> is the noun, so say <em>There's fog</em> or <em>There's a lot of fog</em>."
            },
            {
              id: "v7m6-2",
              type: "gap",
              cefr: "A2",
              stem: "In winter there's a lot of ___ on the mountains in Japan.",
              options: ["snowy", "snows", "snow", "snowing"],
              answer: 2,
              hint: "After a lot of, do you need a thing or a describing word?",
              why: "After <em>a lot of</em> we need the noun: <em>snow</em>. It's uncountable, so no <em>-s</em>. <em>Snowy</em> is the adjective: <em>snowy mountains</em>."
            },
            {
              id: "v7m6-3",
              type: "choose",
              cefr: "B1",
              stem: "Which adjective is spelled correctly?",
              options: ["icey", "iccy", "icy", "icie"],
              answer: 2,
              hint: "The noun is ice. What happens to a final -e when you add -y?",
              why: "<em>Ice</em> ends in -e, so drop the e and add -y: <em>icy</em>. <em>Icey</em> is a very common spelling mistake."
            },
            {
              id: "v7m6-4",
              type: "classify",
              cefr: "B1",
              stem: "<strong>fog → foggy</strong>: which spelling rule is it?",
              options: ["just add -y to the word", "drop the final e, then add -y", "change -y to -ies", "double the last letter + -y"],
              answer: 3,
              hint: "Look at the end of fog: one vowel and one consonant?",
              why: "<em>Fog</em> is short and ends in one vowel + one consonant, so we double the consonant: <em>foggy</em>. <em>Sun → sunny</em> works the same way."
            },
            {
              id: "v7m6-5",
              type: "odd",
              cefr: "A2",
              stem: "Which word is NOT an adjective?",
              options: ["windy", "cloudy", "storm", "rainy"],
              answer: 2,
              hint: "Look closely at the endings.",
              why: "<em>Storm</em> is a noun (a thing): <em>a big storm</em>. Its adjective is <em>stormy</em>. <em>Windy</em>, <em>cloudy</em> and <em>rainy</em> are all adjectives."
            },
            {
              id: "v7m6-6",
              type: "dialogue",
              cefr: "A2",
              context: "Ken is in Chiang Mai. He's chatting with Ploy in Bangkok.",
              lines: [
                { who: "Ken", text: "What's the weather like in Bangkok today?" },
                { who: "Ploy", text: "It's really ___. There isn't a cloud in the sky." }
              ],
              stem: "",
              options: ["sun", "sunshine", "suns", "sunny"],
              answer: 3,
              hint: "Which word can follow really?",
              why: "<em>Really</em> + adjective: <em>It's really sunny</em>. <em>Sun</em> and <em>sunshine</em> are nouns: <em>The sun is shining</em>, <em>a lot of sunshine</em>."
            }
          ]
        },
        {
          id: "v7m7",
          name: "Hot, cold, wet, dry",
          page: "p.95, p.102",
          cefr: "A2",
          extra: false,
          rule: {
            key: "Three ways to talk about rain: It's raining (it's happening), It's rainy (a rainy day), There's a lot of rain (the thing).",
            body: [
              "Temperature is a line: <strong>cold</strong> → (cool) → <strong>warm</strong> → <strong>hot</strong>. Warm is nice; hot is a lot, like Bangkok in April. <strong>Wet</strong> means with water on it (wet clothes, a wet day); <strong>dry</strong> is the opposite (a dry towel, the dry season).",
              "Three ways to say it. Verb: <em>It's raining.</em> Adjective: <em>It's rainy.</em> Noun: <em>There's a lot of rain.</em> Of these weather words, only rain and snow are verbs: ✗ It's sunning, ✗ It's winding → ✓ It's sunny, ✓ It's windy.",
              "Partners: <strong>heavy rain</strong> (not strong rain), <strong>strong wind</strong>, <strong>thick fog</strong>, heavy snow.",
              "Remember Unit 6: rain, snow, fog and ice are uncountable (a lot of rain, not much snow). A storm and a cloud are countable (two storms, a lot of clouds)."
            ],
            table: [
              ["", "Verb", "Adjective", "Noun"],
              ["rain", "It's raining.", "It's rainy.", "There's a lot of rain."],
              ["snow", "It's snowing.", "It's snowy.", "There's a lot of snow."],
              ["wind", "✗ (no verb)", "It's windy.", "There's a strong wind."],
              ["sun", "✗ (no verb)", "It's sunny.", "The sun is shining."]
            ],
            examples: [
              { ok: true, s: "Take an umbrella. It's <strong>raining</strong>!" },
              { ok: true, s: "There was <strong>heavy rain</strong> last night." },
              { ok: false, s: "Today is very rain.", fix: "It's very rainy today. / It's raining a lot today." },
              { ok: false, s: "It has a lot of rain in September.", fix: "There's a lot of rain in September." }
            ],
            tip: "Rain and snow can 'do' something: It's raining. Sun, wind, fog and cloud can't: It's sunny, windy, foggy, cloudy.",
            words: ["hot", "warm", "cold", "dry", "wet", "rain", "rainy", "wind", "fog", "snow", "storm"]
          },
          items: [
            {
              id: "v7m7-1",
              type: "gap",
              cefr: "A2",
              stem: "Look out of the window! It's ___ really hard. Let's stay inside.",
              options: ["rainy", "rain", "raining", "rains"],
              answer: 2,
              hint: "It's happening now, and 'really hard' describes an action.",
              why: "<em>It's raining</em> is the verb, for weather happening now. <em>Rainy</em> is an adjective, so it can't go with <em>really hard</em>: we say <em>a rainy day</em>."
            },
            {
              id: "v7m7-2",
              type: "choose",
              cefr: "A2",
              stem: "Which sentence is correct?",
              options: ["It's very wind today.", "It's winding a lot today.", "It's very windy today.", "There is very windy today."],
              answer: 2,
              hint: "Check two things: how the sentence starts, and the word after very.",
              why: "Use <em>It's</em> + adjective: <em>It's very windy</em>. <em>Wind</em> is a noun, there's no weather verb <em>to wind</em>, and <em>There is</em> needs a noun: <em>There's a strong wind</em>."
            },
            {
              id: "v7m7-3",
              type: "dialogue",
              cefr: "B1",
              context: "Anna arrives at Mek's house after school.",
              lines: [
                { who: "Mek", text: "Why is your hair so ___?" },
                { who: "Anna", text: "I walked here from school without an umbrella." }
              ],
              stem: "",
              options: ["rainy", "raining", "dry", "wet"],
              answer: 3,
              hint: "Is the word describing the weather, or a thing?",
              why: "<em>Wet</em> describes things with water on them, like hair or clothes. <em>Rainy</em> only describes weather: <em>a rainy day</em>, not <em>rainy hair</em>."
            },
            {
              id: "v7m7-4",
              type: "meaning",
              cefr: "A2",
              stem: "<strong>Warm</strong> means…",
              options: [
                "a little hot, in a nice way",
                "extremely hot, too hot to play outside",
                "a little cold, like an air-conditioned room",
                "covered with water"
              ],
              answer: 0,
              hint: "Think of the line from cold to hot. Where is warm?",
              why: "<em>Warm</em> sits between cool and hot, and it usually feels nice. Very high temperatures are <em>hot</em>; a little cold is <em>cool</em>."
            },
            {
              id: "v7m7-5",
              type: "odd",
              cefr: "B1",
              stem: "Which phrase is NOT natural English?",
              options: ["heavy rain", "strong rain", "strong wind", "thick fog"],
              answer: 1,
              hint: "Some adjectives are partners of some weather nouns. Check each pair.",
              why: "We say <em>heavy rain</em>, not <em>strong rain</em>. <em>Strong</em> is the partner of <em>wind</em>, and <em>thick</em> is the partner of <em>fog</em>."
            },
            {
              id: "v7m7-6",
              type: "classify",
              cefr: "A2",
              stem: "In <em>There's a lot of rain in September</em>, what kind of word is <strong>rain</strong>?",
              options: ["a countable noun", "an adjective", "a verb", "an uncountable noun"],
              answer: 3,
              hint: "Is it the thing or a description? And can you count it one by one?",
              why: "Here <em>rain</em> is the thing, an uncountable noun like water: <em>a lot of rain</em>. In <em>It's raining</em> it's a verb, and <em>rainy</em> is the adjective."
            }
          ]
        }
      ],
      checkpoint: {
        id: "v7s3ck",
        name: "Checkpoint",
        items: [
          {
            id: "v7s3ck-1",
            type: "gap",
            cefr: "B1",
            stem: "There was ___ rain last night, and the street outside my house was full of water.",
            options: ["strong", "big", "heavy", "thick"],
            answer: 2,
            hint: "Which adjective is the usual partner of rain?",
            why: "Rain is <em>heavy</em> (or light). <em>Strong</em> is the partner of <em>wind</em>, and <em>thick</em> is the partner of <em>fog</em>."
          },
          {
            id: "v7s3ck-2",
            type: "picture",
            cefr: "A2",
            img: "windy",
            stem: "Look at the picture. What's the weather like?",
            options: ["It's winding.", "It's windy.", "It's wind.", "It's winds."],
            answer: 1,
            hint: "Which word describes the day?",
            why: "Use <em>It's</em> + adjective: <em>It's windy</em>. There is no weather verb <em>to wind</em>, and <em>wind</em> is the noun: <em>There's a strong wind</em>."
          },
          {
            id: "v7s3ck-3",
            type: "choose",
            cefr: "B1",
            stem: "Which sentence is correct?",
            options: [
              "There were a lot of storm this year.",
              "There was a lot of storms this year.",
              "There were a lot of stormy this year.",
              "There were a lot of storms this year."
            ],
            answer: 3,
            hint: "Is storm countable? Check the noun and the verb.",
            why: "<em>Storm</em> is countable, so use the plural <em>storms</em> with <em>were</em>. Compare uncountable rain: <em>There was a lot of rain</em>."
          },
          {
            id: "v7s3ck-4",
            type: "odd",
            cefr: "A2",
            stem: "Which sentence is NOT correct?",
            options: ["It's raining.", "It's snowing.", "It's sunny.", "It's sunning."],
            answer: 3,
            hint: "Which of these weather words can also be verbs?",
            why: "<em>Rain</em> and <em>snow</em> are verbs, so <em>It's raining</em> and <em>It's snowing</em> are fine. <em>Sun</em> isn't a weather verb: say <em>It's sunny</em> or <em>The sun is shining</em>."
          },
          {
            id: "v7s3ck-5",
            type: "classify",
            cefr: "B1",
            stem: "<strong>icy</strong>: what kind of word is it?",
            options: ["a noun", "an adjective", "a verb", "a plural noun"],
            answer: 1,
            hint: "Does it name a thing, or describe a thing?",
            why: "<em>Icy</em> is an adjective: <em>an icy road</em>. The noun is <em>ice</em>: <em>There's ice on the road</em>."
          },
          {
            id: "v7s3ck-6",
            type: "dialogue",
            cefr: "A2",
            context: "Sam, a student from Canada, is chatting with Nut.",
            lines: [
              { who: "Sam", text: "When is the best time to visit Thailand?" },
              { who: "Nut", text: "From November to February. It's the cool, ___ season: there isn't much rain." }
            ],
            stem: "",
            options: ["wet", "rainy", "dry", "hot"],
            answer: 2,
            hint: "Look at what Nut says about the rain.",
            why: "Not much rain means <em>dry</em>. <em>Wet</em> and <em>rainy</em> mean a lot of rain, and <em>hot</em> doesn't go with <em>cool</em>."
          }
        ]
      }
    },
    {
      id: "v7s4",
      n: 4,
      name: "Word power",
      icon: "🧭",
      blurb: "Put it all together: who lives where, in or on, plurals, compound words and silent letters.",
      modules: [
        {
          id: "v7m8",
          name: "Habitats",
          page: "p.92, p.93",
          cefr: "A2",
          extra: false,
          rule: {
            key: "Every animal has an address: a place, plus the right little word in front of it. Monkeys live in the forest; turtles lay their eggs on the beach.",
            body: [
              "<strong>in</strong> = inside a space that is all around you: in a forest, in a field, in a valley, in the ocean, in a river, in a lake, in the sky.",
              "<strong>on</strong> = on top of a surface under your feet: on a beach, on an island, on a hill, on a mountain, on the grass. (<em>At the beach</em> is fine too, for a place you go to.)",
              "Animal addresses: the ocean → whales, sharks, jellyfish; rivers and lakes → hippos; the forest → monkeys, tigers, owls; flowers and fields → bees, butterflies; the sky over the mountains → eagles."
            ],
            table: [
              ["in (a space around you)", "on (a surface under you)"],
              ["in a forest, in a field, in a valley", "on a beach, on an island"],
              ["in the ocean, in a river, in a lake", "on a hill, on a mountain"],
              ["in the sky", "on the grass"],
              ["in the mountains (a mountain area)", "on the mountain (its side or top)"]
            ],
            examples: [
              { ok: true, s: "Hippos spend the day <strong>in</strong> the river." },
              { ok: true, s: "We camped <strong>on</strong> a small island." },
              { ok: false, s: "Birds fly on the sky.", fix: "Birds fly in the sky." }
            ],
            tip: "All around you (forest, ocean, sky)? Use in. Under your feet (beach, island, hill)? Use on.",
            words: [
              "whale",
              "shark",
              "jellyfish",
              "hippo",
              "monkey",
              "penguin",
              "bee",
              "eagle",
              "forest",
              "ocean",
              "river",
              "lake",
              "beach",
              "island",
              "sky",
              "field",
              "flowers"
            ]
          },
          items: [
            {
              id: "v7m8-1",
              type: "choose",
              cefr: "A2",
              stem: "Which sentence is correct?",
              options: ["Monkeys live on the forest.", "Monkeys live at the forest.", "Monkeys live in the forest.", "Monkeys live into the forest."],
              answer: 2,
              hint: "Is a forest a space all around you, or a surface under your feet?",
              why: "A forest is a space with trees all around you, so we say <em>in the forest</em>. <em>On</em> is for surfaces, like <em>on a beach</em>."
            },
            {
              id: "v7m8-2",
              type: "gap",
              cefr: "B1",
              stem: "We camped ___ a small island near Krabi for two nights.",
              options: ["on", "in", "into", "onto"],
              answer: 0,
              hint: "Think about where your tent is: inside a space, or on top of some land?",
              why: "We say <em>on an island</em>: you are on land in the water. <em>In</em> is for spaces, like <em>in a forest</em>. <em>Into</em> and <em>onto</em> show movement."
            },
            {
              id: "v7m8-3",
              type: "classify",
              cefr: "A2",
              stem: "<strong>whale</strong>: where does it usually live?",
              options: ["in a river", "in the ocean", "in a lake", "on the beach"],
              answer: 1,
              hint: "Salt water or fresh water? And how much space does it need?",
              why: "<em>Whales</em> live in the ocean. A <em>river</em> or a <em>lake</em> is far too small for them, and a whale on a beach is in danger."
            },
            {
              id: "v7m8-4",
              type: "odd",
              cefr: "A2",
              stem: "Which phrase is NOT correct?",
              options: ["in a forest", "on a beach", "on the sky", "on an island"],
              answer: 2,
              hint: "Is each place a space all around you, or a surface under your feet?",
              why: "The sky is a space all around us, so we say <em>in the sky</em>. <em>In a forest</em>, <em>on a beach</em> and <em>on an island</em> are all correct."
            },
            {
              id: "v7m8-5",
              type: "picture",
              cefr: "A2",
              img: "penguin",
              stem: "This bird can't fly. Where does it find its food?",
              options: ["in the sky", "in the ocean", "in the forest", "in a field"],
              answer: 1,
              hint: "It's a great swimmer. What does it eat?",
              why: "<em>Penguins</em> swim in the ocean and catch fish there. They can't fly, so they never hunt in the sky."
            },
            {
              id: "v7m8-6",
              type: "dialogue",
              cefr: "B1",
              context: "Fah is visiting a farm in Chiang Mai.",
              lines: [
                { who: "Fah", text: "Why are there so many bees here?" },
                { who: "Farmer", text: "They come for the ___. They take something sweet from them and make honey." }
              ],
              stem: "",
              options: ["grass", "rivers", "flowers", "rocks"],
              answer: 2,
              hint: "Bees need something sweet. Where in a field can they find it?",
              why: "Bees take a sweet liquid from <em>flowers</em> to make honey. <em>Grass</em> is a plant too, but it doesn't give bees anything sweet."
            }
          ]
        },
        {
          id: "v7m9",
          name: "Word builders",
          page: "p.93, p.102",
          cefr: "B1",
          extra: false,
          rule: {
            key: "Big words are often two small words glued together, and plurals and silent letters follow a few simple rules.",
            body: [
              "Compounds: water + fall = <strong>waterfall</strong>. butter + fly = <strong>butterfly</strong>, jelly + fish = <strong>jellyfish</strong>. Careful: the parts can lie! A butterfly is not a fly, and a jellyfish is not a fish. (Unit 6: milk + shake = milkshake, pan + cake = pancake.)",
              "Plurals: wolf → <strong>wolves</strong>; fox → <strong>foxes</strong>; butterfly → <strong>butterflies</strong>, but monkey → monkeys and valley → valleys; hippo → <strong>hippos</strong>, rhino → <strong>rhinos</strong>. No change: one jellyfish, two jellyfish; one species, two species.",
              "Silent letters: <strong>island</strong> (no s: EYE-land), <strong>whale</strong> (no h), <strong>leopard</strong> (no o: LEP-ard).",
              "Strong words for bad news: <strong>destroy</strong> = damage something so badly that it is gone (destroy a forest). <strong>shocking</strong> = very bad and surprising (shocking news). The person feels <em>shocked</em>."
            ],
            table: [
              ["Rule", "Example"],
              ["-f → -ves", "wolf → wolves"],
              ["-x → add -es", "fox → foxes"],
              ["consonant + y → -ies", "butterfly → butterflies"],
              ["vowel + y → just add -s", "monkey → monkeys, valley → valleys"],
              ["short forms in -o → add -s", "hippo → hippos, rhino → rhinos"],
              ["no change", "jellyfish → jellyfish, species → species"]
            ],
            examples: [
              { ok: true, s: "Two <strong>wolves</strong> are walking across the snow." },
              { ok: false, s: "We saw three foxs.", fix: "We saw three foxes." },
              { ok: false, s: "There are many monkies in Lopburi.", fix: "There are many monkeys in Lopburi." },
              { ok: false, s: "I was shocking when I saw the news.", fix: "I was shocked when I saw the news." }
            ],
            tip: "Shocking news makes you shocked: -ing = the thing that does it, -ed = how you feel.",
            words: [
              "waterfall",
              "butterfly",
              "jellyfish",
              "wolf",
              "fox",
              "hippo",
              "rhino",
              "monkey",
              "island",
              "whale",
              "leopard",
              "species",
              "destroy",
              "shocking"
            ]
          },
          items: [
            {
              id: "v7m9-1",
              type: "picture",
              cefr: "B1",
              img: "waterfall",
              stem: "Look at the picture. Which word completes its name: ___fall?",
              options: ["water", "rain", "snow", "ice"],
              answer: 0,
              hint: "All four make real words with -fall. Which one matches the picture?",
              why: "The picture shows a <em>waterfall</em>: water falling over rocks. <em>Rainfall</em> and <em>snowfall</em> are real words too, but they mean how much rain or snow falls."
            },
            {
              id: "v7m9-2",
              type: "choose",
              cefr: "A2",
              stem: "Which sentence has the correct plurals?",
              options: [
                "There are monkies and foxes at the zoo.",
                "There are monkeys and foxes at the zoo.",
                "There are monkeys and foxs at the zoo.",
                "There are monkies and foxs at the zoo."
              ],
              answer: 1,
              hint: "Check the letter before the -y, and the last letter of fox.",
              why: "<em>Monkey</em> has a vowel before -y, so just add -s: <em>monkeys</em>. <em>Fox</em> ends in x, so add -es: <em>foxes</em>."
            },
            {
              id: "v7m9-3",
              type: "meaning",
              cefr: "B1",
              stem: "'A fire can <strong>destroy</strong> a forest in a few days.' What does destroy mean here?",
              options: ["damage a small part of it", "damage it completely", "make it smaller for a short time", "move it to a different place"],
              answer: 1,
              hint: "Think about the forest after the fire. Is anything left?",
              why: "<em>Destroy</em> means damage something so badly that it is gone. A fire that burns only a few trees damages the forest, but it doesn't destroy it."
            },
            {
              id: "v7m9-4",
              type: "odd",
              cefr: "A2",
              stem: "Which word has NO silent letter?",
              options: ["fox", "island", "whale", "leopard"],
              answer: 0,
              hint: "Say each word slowly. Do you hear every letter?",
              why: "In <em>fox</em> you hear every letter (x = /ks/). <em>Island</em> has a silent s, <em>whale</em> a silent h and <em>leopard</em> a silent o."
            },
            {
              id: "v7m9-5",
              type: "classify",
              cefr: "B1",
              stem: "<strong>species</strong>: singular or plural?",
              options: ["the same word for both", "singular only", "plural only", "singular specie, plural species"],
              answer: 0,
              hint: "Think of other words that don't change in the plural, like jellyfish.",
              why: "<em>Species</em> is the same in the singular and the plural: <em>one species, two species</em>. <em>Specie</em> is not the singular: that's a common mistake."
            },
            {
              id: "v7m9-6",
              type: "dialogue",
              cefr: "B1",
              context: "Mint and Jay are talking at lunch.",
              lines: [
                { who: "Mint", text: "Did you see the news about the forest fire?" },
                { who: "Jay", text: "Yes, it was ___. Hundreds of animals lost their homes." }
              ],
              stem: "",
              options: ["shocked", "shocking", "shock", "shocks"],
              answer: 1,
              hint: "Is the word about how Jay feels, or about the news itself?",
              why: "The news is <em>shocking</em> (-ing = the thing that makes you feel it). Jay feels <em>shocked</em> (-ed = the person's feeling)."
            }
          ]
        }
      ],
      checkpoint: {
        id: "v7s4ck",
        name: "Checkpoint",
        items: [
          {
            id: "v7s4ck-1",
            type: "gap",
            cefr: "A2",
            stem: "In the documentary, a group of ___ was hunting in the snow.",
            options: ["wolfs", "wolfes", "wolve", "wolves"],
            answer: 3,
            hint: "Many words that end in -f change in the plural.",
            why: "<em>Wolf</em> ends in -f, so the plural is <em>wolves</em> (f → ves). <em>Wolfs</em> is a common mistake."
          },
          {
            id: "v7s4ck-2",
            type: "odd",
            cefr: "A2",
            stem: "Three of these animals usually live in the ocean. Which one usually lives in rivers and lakes?",
            options: ["whale", "hippo", "shark", "jellyfish"],
            answer: 1,
            hint: "Think about salt water and fresh water.",
            why: "<em>Hippos</em> live in rivers and lakes in Africa. <em>Whales</em>, <em>sharks</em> and <em>jellyfish</em> usually live in the ocean."
          },
          {
            id: "v7s4ck-3",
            type: "choose",
            cefr: "A2",
            stem: "Which sentence is correct?",
            options: [
              "The children played on the beach.",
              "The children played in the beach.",
              "The children played into the beach.",
              "The children played onto the beach."
            ],
            answer: 0,
            hint: "Is a beach a space all around you, or a surface under your feet?",
            why: "A beach is a surface you walk on, so <em>on the beach</em> (or <em>at the beach</em>). <em>In the beach</em> would mean under the sand!"
          },
          {
            id: "v7s4ck-4",
            type: "meaning",
            cefr: "B1",
            stem: "'Snow leopards are <strong>rare</strong>.' What does rare mean?",
            options: ["They are very dangerous.", "There aren't many of them.", "They are very beautiful.", "They live only in cold places."],
            answer: 1,
            hint: "Think about how many snow leopards there are in the wild.",
            why: "<em>Rare</em> means there are very few: only about 4,000 to 6,500 snow leopards live in the wild. Rare doesn't mean dangerous or beautiful."
          },
          {
            id: "v7s4ck-5",
            type: "choose",
            cefr: "B1",
            stem: "How do you say <strong>leopard</strong>?",
            options: ["LEE-oh-pard", "LEP-ard", "leh-OH-pard", "LEE-pard"],
            answer: 1,
            hint: "One letter in the middle is silent.",
            why: "<em>Leopard</em> is /ˈlep.əd/: <em>LEP-ard</em>. The o is silent, and the stress is on the first part."
          },
          {
            id: "v7s4ck-6",
            type: "dialogue",
            cefr: "B1",
            context: "A ranger is talking to Pim's class in a national park.",
            lines: [
              { who: "Ranger", text: "People are cutting down the trees here. They're ___ the animals' homes." },
              { who: "Pim", text: "That's terrible!" }
            ],
            stem: "",
            options: ["destroying", "protecting", "visiting", "cleaning"],
            answer: 0,
            hint: "Pim says 'That's terrible!' Is the action good or bad?",
            why: "Cutting down trees <em>destroys</em> the animals' homes, so <em>They're destroying</em> them. <em>Protecting</em> means the opposite: keeping them safe."
          }
        ]
      }
    }
  ]
};
