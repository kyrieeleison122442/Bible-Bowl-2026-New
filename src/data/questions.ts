import { Question } from '../types';

export const BIBLE_BOWL_QUESTIONS: Question[] = [
  // --- USER PROTOCOL QUESTIONS (1-50) ---
  {
    id: 'q-1',
    type: 'short',
    question: "What is the exact count of the \"seed of Jacob\" who entered Egypt, and what parenthetical reason follows it?",
    answer: "Seventy-five persons; \"(for Joseph was in Egypt already).\"",
    reference: "1:5"
  },
  {
    id: 'q-2',
    type: 'mc',
    question: "What are the names of the three strong cities built for Pharaoh in the OSB text?",
    answer: "B",
    options: ["Goshen, Succoth, Etham", "Pithom, Raamses, and On", "Memphis, Thebes, Cairo", "Pithom, Raamses, and Migdol"],
    reference: "1:11",
    hint: "On is also known as Heliopolis"
  },
  {
    id: 'q-3',
    type: 'fitb',
    question: "Because the midwives feared God and disobeyed Pharaoh, the text states that He \"provided __________ for them.\"",
    answer: "households",
    reference: "1:21"
  },
  {
    id: 'q-4',
    type: 'short',
    question: "Name the specific earth-based substance Moses' mother used to daub (seal) the ark of bulrushes.",
    answer: "Asphalt",
    reference: "2:3"
  },
  {
    id: 'q-5',
    type: 'fitb',
    question: "When the Hebrew man questioned Moses about killing the Egyptian, Moses' internal emotional reaction was that he was \"__________.\"",
    answer: "alarmed",
    reference: "2:14"
  },
  {
    id: 'q-6',
    type: 'mc',
    question: "What was the exact phrasing of the invitation Reuel told his daughters to extend to Moses?",
    answer: "B",
    options: ["\"Bring him in, that he may dwell with us\"", "\"Call him, that he may eat bread\"", "\"Invite him to drink water\"", "\"Tell him to come share our tent\""],
    reference: "2:20"
  },
  {
    id: 'q-7',
    type: 'short',
    question: "When Moses asks for God's name, what is the exact ontological title God gives Himself in the OSB?",
    answer: "\"I AM the Existing One\"",
    reference: "3:14"
  },
  {
    id: 'q-8',
    type: 'fitb',
    question: "When Moses objects to his calling, he claims he is \"weak in __________ and slow of __________.\"",
    answer: "speech; tongue",
    reference: "4:10"
  },
  {
    id: 'q-9',
    type: 'short',
    question: "What specific primitive tool did Zipporah use to perform the emergency circumcision on her son?",
    answer: "A sharp stone",
    reference: "4:25"
  },
  {
    id: 'q-10',
    type: 'mc',
    question: "When the Hebrew officers cried out to Pharaoh after being beaten, what noun did they use twice to address themselves in relation to him?",
    answer: "B",
    options: ["Slaves", "Servants", "People", "Laborers"],
    reference: "5:15"
  },
  {
    id: 'q-11',
    type: 'short',
    question: "What specific derogatory term did Pharaoh repeat twice to dismiss the people's desire to sacrifice to the Lord?",
    answer: "Loafers (\"You are loafers! You are loafers!\")",
    reference: "5:17"
  },
  {
    id: 'q-12',
    type: 'tf',
    question: "In the Levitical genealogy, the OSB records that the years of the life of Kohath were one hundred and thirty-seven.",
    answer: "False",
    reference: "6:18",
    hint: "Kohath lived 133 years"
  },
  {
    id: 'q-13',
    type: 'fitb',
    question: "Aaron took a wife named __________, who was the daughter of Amminadab and the sister of Nahshon.",
    answer: "Elisheba",
    reference: "6:23"
  },
  {
    id: 'q-14',
    type: 'short',
    question: "Eleazar, Aaron's son, took a wife from the daughters of which uniquely named Old Testament figure?",
    answer: "Putiel",
    reference: "6:25"
  },
  {
    id: 'q-15',
    type: 'mc',
    question: "Fill in the blanks regarding the divine hierarchy explained to Moses: \"See, I have made you as a [Blank1] to Pharaoh, and Aaron your brother shall be your [Blank2].\"",
    answer: "C",
    options: ["King / Priest", "Judge / Speaker", "god / prophet", "Master / Servant"],
    reference: "7:1"
  },
  {
    id: 'q-16',
    type: 'mc',
    question: "Which of the following is NOT one of the specific water locations Aaron was commanded to stretch his rod over during the first plague?",
    answer: "C",
    options: ["Streams", "Rivers", "Fountains", "Ponds"],
    reference: "7:19",
    hint: "The list is streams, rivers, ponds, and pools"
  },
  {
    id: 'q-17',
    type: 'fitb',
    question: "The exact historical duration of the first plague is verified by the text stating: \"And __________ days were fulfilled after the Lord had struck the river.\"",
    answer: "Seven",
    reference: "7:25"
  },
  {
    id: 'q-18',
    type: 'short',
    question: "What four-word phrase does Moses use to hand agency over to Pharaoh when offering to pray for the removal of the frogs?",
    answer: "\"Appoint a time for me\"",
    reference: "8:9"
  },
  {
    id: 'q-19',
    type: 'fitb',
    question: "When the frogs died out of the houses and villages, the Egyptians gathered them in heaps, and \"the land __________.\"",
    answer: "stank",
    reference: "8:14"
  },
  {
    id: 'q-20',
    type: 'short',
    question: "Besides the houses of the Egyptians being completely full of dog-flies, what other surface does the text specify they will cover?",
    answer: "The ground on which they stand",
    reference: "8:21"
  },
  {
    id: 'q-21',
    type: 'mc',
    question: "Moses refused to sacrifice within Egypt, stating they would be sacrificing the \"abomination of the Egyptians.\" What consequence did he fear?",
    answer: "C",
    options: ["They would be exiled", "They would be imprisoned", "They would be stoned", "They would be burned"],
    reference: "8:26"
  },
  {
    id: 'q-22',
    type: 'short',
    question: "During the plague of hail, which two specific grain crops survived because they were classified as \"late crops\"?",
    answer: "Wheat and rye",
    reference: "9:32"
  },
  {
    id: 'q-23',
    type: 'fitb',
    question: "Fill in the blank for the Warning of Locusts: \"Thus says the Lord God of the Hebrews: 'How long will you refuse to __________ yourself before Me?'\"",
    answer: "humble",
    reference: "10:3"
  },
  {
    id: 'q-24',
    type: 'mc',
    question: "For exactly how many days was there a thick, palpable darkness over the entire land of Egypt?",
    answer: "C",
    options: ["Seven days", "One day", "Three days", "Forty days"],
    reference: "10:22"
  },
  {
    id: 'q-25',
    type: 'fitb',
    question: "The congregation was instructed that on the __________ day of the first month, every man must choose a lamb for the Paschal meal.",
    answer: "tenth",
    reference: "12:3"
  },
  {
    id: 'q-26',
    type: 'short',
    question: "According to the OSB text, the total sojourn of 430 years took place in which two distinct geographical regions?",
    answer: "Egypt and the land of Canaan",
    reference: "12:40"
  },
  {
    id: 'q-27',
    type: 'tf',
    question: "The structural ritual rule for the Paschal lamb states: \"Nor shall you break one of its bones.\"",
    answer: "True",
    reference: "12:46"
  },
  {
    id: 'q-28',
    type: 'short',
    question: "Whose bones did Moses physically carry out of Egypt due to a ancestral oath sworn centuries prior?",
    answer: "Joseph's bones",
    reference: "13:19"
  },
  {
    id: 'q-29',
    type: 'fitb',
    question: "The text emphasizes the triumphant departure of Israel by stating they went out \"with a __________ __________.\"",
    answer: "high hand",
    reference: "14:8"
  },
  {
    id: 'q-30',
    type: 'mc',
    question: "What is the specific wind direction used by the Lord to divide the Red Sea in the Septuagint/OSB text?",
    answer: "B",
    options: ["A mighty east wind", "A strong south wind", "A cold north wind", "A violent whirlwind"],
    reference: "14:21"
  },
  {
    id: 'q-31',
    type: 'short',
    question: "What was the exact count of the \"elite\" or \"choice\" chariots Pharaoh took to pursue the escaping Hebrews?",
    answer: "Six hundred choice chariots",
    reference: "14:7"
  },
  {
    id: 'q-32',
    type: 'fitb',
    question: "Immediately after crossing the Red Sea, Moses brought Israel out into the Wilderness of __________, where they found no water for three days.",
    answer: "Shur",
    reference: "15:22"
  },
  {
    id: 'q-33',
    type: 'short',
    question: "What physical object did the Lord show Moses to throw into the bitter waters of Marah to immediately turn them sweet?",
    answer: "A tree",
    reference: "15:25"
  },
  {
    id: 'q-34',
    type: 'mc',
    question: "When the camp arrived at the oasis of Elim, what was the precise environmental tally of the site?",
    answer: "B",
    options: ["7 fountains and 12 palm trees", "12 fountains and 70 palm trees", "12 fountains and 120 palm trees", "3 fountains and 72 palm trees"],
    reference: "15:27"
  },
  {
    id: 'q-35',
    type: 'fitb',
    question: "When the morning dew lifted, the manna is described as a small, round substance, \"white like __________ seed, like __________ on the ground.\"",
    answer: "coriander; frost",
    reference: "16:14"
  },
  {
    id: 'q-36',
    type: 'short',
    question: "Give the exact mathematical definition of an \"omer\" as recorded in the final verse of Chapter 16.",
    answer: "One-tenth of three measures",
    reference: "16:36"
  },
  {
    id: 'q-37',
    type: 'mc',
    question: "Moses named his second son Eliezer. What was his explicit, personal text-based reason for this name?",
    answer: "B",
    options: [
      "\"Because I have been a sojourner in a foreign land\"", 
      "\"The God of my father is my help, and He rescued me from the hand of Pharaoh\"", 
      "\"The Lord has looked upon my affliction\"", 
      "\"For God has made me fruitful in the land of my sorrow\""
    ],
    reference: "18:4"
  },
  {
    id: 'q-38',
    type: 'tf',
    question: "If an altar is built of stone, the law commands it must be made of hewn stone, using iron chisels to polish it.",
    answer: "False",
    reference: "20:25",
    hint: "It must NOT be built of hewn stone; lifting a tool on it defiles it"
  },
  {
    id: 'q-39',
    type: 'short',
    question: "What specific craftsman's tool did Aaron use to shape the gold earrings into a molten calf?",
    answer: "An engraving tool",
    reference: "32:4"
  },
  {
    id: 'q-40',
    type: 'fitb',
    question: "When Joshua heard the shouting of the camp from the mountain side, he mistakenly told Moses, \"There is a noise of __________ in the camp.\"",
    answer: "war",
    reference: "32:17"
  },
  {
    id: 'q-41',
    type: 'mc',
    question: "What is the exact OSB/LXX phrase Moses used to correctly identify the sound coming from the camp?",
    answer: "B",
    options: [
      "\"The sound of pagan worship\"", 
      "\"The noise of those that begin the banquet of wine\"", 
      "\"The shouting of a rebellious people\"", 
      "\"The song of those who have forgotten God\""
    ],
    reference: "32:18"
  },
  {
    id: 'q-42',
    type: 'short',
    question: "How many men of Israel fell in a single day when the sons of Levi swept through the camp with their swords?",
    answer: "About three thousand men",
    reference: "32:28"
  },
  {
    id: 'q-43',
    type: 'fitb',
    question: "At Mount Horeb, as a sign of mourning and repentance, the children of Israel stripped themselves of their \"bright __________ and __________.\"",
    answer: "clothes; ornaments",
    reference: "33:6"
  },
  {
    id: 'q-44',
    type: 'mc',
    question: "In Chapter 34, what is the specific command regarding the firstborn of a donkey if it is not redeemed with a sheep?",
    answer: "B",
    options: ["You shall break its neck", "You shall pay a price", "It shall be sacrificed by fire", "It shall be given to the Levites"],
    reference: "34:20",
    hint: "The OSB explicitly states \"pay a price\""
  },
  {
    id: 'q-45',
    type: 'short',
    question: "What specific adjective does the OSB use to describe the skin of Moses' face when he descended Sinai with the second set of tablets?",
    answer: "Glorified",
    reference: "34:29"
  },
  {
    id: 'q-46',
    type: 'fitb',
    question: "Bezalel fashioned the bronze laver (washbasin) and its base using the bronze mirrors belonging to the women who __________ at the tabernacle doors.",
    answer: "fasted",
    reference: "38:8"
  },
  {
    id: 'q-47',
    type: 'short',
    question: "While the hooks of the inner veil posts were gold, what metal was used to make the hooks for the outer court posts?",
    answer: "Silver",
    reference: "38:19"
  },
  {
    id: 'q-48',
    type: 'mc',
    question: "What was the exact weight calculation of gold used for the holy places as recorded in the master tally?",
    answer: "C",
    options: ["100 talents and 1,775 shekels", "70 talents and 1,500 shekels", "29 talents and 720 shekels", "50 talents and 500 shekels"],
    reference: "39:1"
  },
  {
    id: 'q-49',
    type: 'short',
    question: "State the exact number of men surveyed from twenty years old and upward who were counted in the silver tally census.",
    answer: "603,550 men",
    reference: "39:3"
  },
  {
    id: 'q-50',
    type: 'fitb',
    question: "When assembling the final layout, Moses set the golden Lampstand specifically on the __________ side of the tabernacle.",
    answer: "south",
    reference: "40:22"
  },

  // --- ADDITIONAL SIMILAR QUESTIONS (PRACTICE SET) ---
  {
    id: 's-1',
    type: 'mc',
    question: "How many years did Amram, the father of Moses, live according to Chapter 6?",
    answer: "A",
    options: ["137 years", "120 years", "133 years", "110 years"],
    reference: "6:20"
  },
  {
    id: 's-2',
    type: 'short',
    question: "After the darkness plague, what did Pharaoh tell Moses would happen to him if he saw his face again?",
    answer: "He would die",
    reference: "10:28"
  },
  {
    id: 's-3',
    type: 'tf',
    question: "The children of Israel remained in Egypt for exactly 400 years according to the OSB.",
    answer: "False",
    reference: "12:40",
    hint: "It was 430 years"
  },
  {
    id: 's-4',
    type: 'fitb',
    question: "In the battle against Amalek, Moses' hands were supported by __________ and __________.",
    answer: "Aaron; Hur",
    reference: "17:12"
  },
  // --- MASTER LIST QUESTIONS (PDF SOURCES) ---
  {
    id: 'ml-1',
    type: 'tf',
    question: "The first verse in Exodus is, 'Now these are the names of the children of Israel who came to Egypt; each man and his household came with Joseph.'",
    answer: "False",
    reference: "1:1",
    hint: "Should read - 'came with Jacob.'"
  },
  {
    id: 'ml-2',
    type: 'fitb',
    question: "But there arose a new king in Egypt who knew not ______",
    answer: "Joseph",
    reference: "1:8"
  },
  {
    id: 'ml-3',
    type: 'fitb',
    question: "The new king of Egypt who 'knew not Joseph' said to his nation: 'Look, the face of the children of Israel is a great multitude and is stronger than we; come, let us ________ ________ lest the multiply...'",
    answer: "outwit them; war",
    reference: "1:9"
  },
  {
    id: 'ml-4',
    type: 'fitb',
    question: "But the more they humbled them the more they ___________ and grew; and the Egyptians ________ ________ the children of Israel.",
    answer: "Multiplied; greatly abhorred",
    reference: "1:12"
  },
  {
    id: 'ml-5',
    type: 'short',
    question: "What reason did the midwives give to Pharaoh for 'saving the male children alive'?",
    answer: "Because the Hebrew women are not like the women of Egypt for they are lively and give birth before the midwives arrive.",
    reference: "1:19"
  },
  {
    id: 'ml-6',
    type: 'tf',
    question: "When the woman of Levi could no longer hide her son, she built an ark of reeds and daubed it with tree sap.",
    answer: "False",
    reference: "2:3",
    hint: "She 'took an ark of bulrushes, daubed it with asphalt...'"
  },
  {
    id: 'ml-7',
    type: 'short',
    question: "Who kept an eye on the baby in the ark among the reeds?",
    answer: "His sister (Miriam)",
    reference: "2:4"
  },
  {
    id: 'ml-8',
    type: 'mc',
    question: "What did Moses do at the well in Midian?",
    answer: "C/D",
    options: ["He fought with a shepherd", "He talked to the seven daughters", "He stood up to the shepherds", "He watered the sheep of Jethro"],
    reference: "2:17",
    hint: "He both stood up to the shepherds and watered the sheep"
  },
  {
    id: 'ml-9',
    type: 'short',
    question: "What is another name for Jethro in the Exodus text?",
    answer: "Reuel",
    reference: "2:18"
  },
  {
    id: 'ml-10',
    type: 'fitb',
    question: "In Chapter 3 God says: 'Thus I will stretch out My hand and strike the Egyptians with all My _______ which I will work among them...'",
    answer: "wonders",
    reference: "3:20"
  },
  {
    id: 'ml-11',
    type: 'fitb',
    question: "Moses and Aaron responded to Pharaoh: '__________ has called us to Him. Let us go three days’ journey into the desert...'",
    answer: "The God of the Hebrews",
    reference: "5:3"
  },
  {
    id: 'ml-12',
    type: 'mc',
    question: "Which raw material did Pharaoh withhold from the people of Israel first?",
    answer: "B",
    options: ["Asphalt", "Straw", "Bulrushes", "Sand"],
    reference: "5:9"
  },
  {
    id: 'ml-13',
    type: 'short',
    question: "What did the clerks know after hearing Pharaoh say 'You shall not reduce any bricks from your daily quota'?",
    answer: "They knew they were in trouble",
    reference: "5:19"
  },
  {
    id: 'ml-14',
    type: 'short',
    question: "With what kind of hand did the Lord say Pharaoh would let the Israelites go?",
    answer: "A strong hand",
    reference: "6:1"
  },
  {
    id: 'ml-15',
    type: 'fitb',
    question: "Then you shall know I am the Lord your God who brought you out from under the ________ _______.",
    answer: "Egyptian Tyranny",
    reference: "6:7"
  },
  {
    id: 'ml-16',
    type: 'mc',
    question: "What time of day did God tell Moses to go see Pharaoh to turn the water to blood?",
    answer: "B",
    options: ["Moment immediately", "Early in the morning", "At midnight", "At dusk"],
    reference: "7:15"
  },
  {
    id: 'ml-17',
    type: 'fitb',
    question: "Regarding the plague of dog-flies, the Lord warns: 'the houses shall be full of dog-flies, and also the __________ on which they stand.'",
    answer: "ground",
    reference: "8:21"
  },
  {
    id: 'ml-18',
    type: 'short',
    question: "Where is the one place in Egypt that was NOT struck by hail?",
    answer: "The land of Goshen",
    reference: "9:26"
  },
  {
    id: 'ml-19',
    type: 'fitb',
    question: "Pharaoh's servants asked him: 'How long shall this man be a ______ to us? Let the men go...'",
    answer: "snare",
    reference: "10:7"
  },
  {
    id: 'ml-20',
    type: 'fitb',
    question: "During the plague of Darkness, 'No one saw his _______ for three days; nor did anyone rise from his bed...'",
    answer: "brother",
    reference: "10:23"
  },
  {
    id: 'ml-21',
    type: 'short',
    question: "What did Moses say against descendants of Israel, be it man or cattle, a dog shall NOT do?",
    answer: "Snarl its tongue",
    reference: "11:7"
  },
  {
    id: 'ml-22',
    type: 'fitb',
    question: "In Chapter 33, the Lord said: 'Now therefore take off your bright clothes and ______.'",
    answer: "Ornaments",
    reference: "33:5"
  },
  {
    id: 'ml-23',
    type: 'short',
    question: "Which tribe stood with Moses on the Lord's side against the sin of the golden calf?",
    answer: "The Levites (Levi)",
    reference: "32:26"
  },
  {
    id: 'ml-24',
    type: 'fitb',
    question: "Moses made the ______ that in it Moses and Aaron and his sons might wash their hands and feet.",
    answer: "Laver",
    reference: "38:27"
  },
  {
    id: 'ml-25',
    type: 'short',
    question: "What specific items did Bezalel use to make the bronze laver and its base?",
    answer: "Bronze mirrors of the women who fasted",
    reference: "38:26"
  }
];
