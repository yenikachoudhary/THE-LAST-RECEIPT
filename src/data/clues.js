const clues = [
  {
    id: 1,
    caseId: 1,
    period: "MAY 2023",
    title: "A Quiet Beginning",
    value: "382",
    unit: "transactions",
    category: "ACTIVITY",
    color: "bg-blue",
    rotate: "-2deg",

    observation:
      "May recorded 382 transactions.",

    meaning:
      "This gives us a baseline for comparing what happens next.",

    doesNotProve:
      "It does not tell us why activity looked this way.",

    archivist:
      "Start here. Before we can spot a change, we need to know what normal looked like."
  },

  {
    id: 2,
    caseId: 1,
    period: "JUNE 2023",
    title: "Something Spiked",
    value: "575",
    unit: "transactions",
    category: "ACTIVITY",
    color: "bg-coral",
    rotate: "2deg",

    observation:
      "June recorded 575 transactions compared with 382 in May.",

    meaning:
      "Activity increased substantially from the previous month.",

    doesNotProve:
      "An increase in activity does not tell us what caused it.",

    archivist:
      "There. That's our first movement. June suddenly looks different."
  },

  {
    id: 3,
    caseId: 1,
    period: "JUNE 2023",
    title: "The Big Number",
    value: "2.85M",
    unit: "total amount",
    category: "SPENDING",
    color: "bg-yellow",
    rotate: "-3deg",

    observation:
      "The total recorded amount for June was approximately 2.85 million.",

    meaning:
      "June was not only more active. The spending signal increased alongside the activity signal.",

    doesNotProve:
      "It does not prove what the money was spent on or why spending increased.",

    archivist:
      "Wait. The activity jumped... and so did the spending. That's two signals moving together."
  },

  {
    id: 4,
    caseId: 1,
    period: "JUNE 2023",
    title: "Many Entities",
    value: "72",
    unit: "active entities",
    category: "NETWORK",
    color: "bg-purple",
    rotate: "3deg",

    observation:
      "June involved 72 active entities.",

    meaning:
      "The June increase involved activity across many entities rather than a single recorded entity.",

    doesNotProve:
      "It does not prove that all 72 entities were related to the same event.",

    archivist:
      "And it's not just one corner of the trail. A lot of entities were active in June."
  },

  {
    id: 5,
    caseId: 1,
    period: "JULY 2023",
    title: "The Drop",
    value: "418",
    unit: "transactions",
    category: "ACTIVITY",
    color: "bg-mint",
    rotate: "-2deg",

    observation:
      "July recorded 418 transactions after June's 575.",

    meaning:
      "The June activity surge did not continue into July.",

    doesNotProve:
      "It does not tell us why activity decreased.",

    archivist:
      "Interesting. Whatever happened in June didn't simply continue."
  },

  {
    id: 6,
    caseId: 1,
    period: "AUGUST 2023",
    title: "Travel Appears",
    value: "35.1%",
    unit: "travel share",
    category: "PLACES",
    color: "bg-orange",
    rotate: "2deg",

    observation:
      "Travel represented 35.1% of the recorded activity in August.",

    meaning:
      "The composition of activity shifted toward travel.",

    doesNotProve:
      "It does not prove that the person was on vacation.",

    archivist:
      "Now we're seeing a different kind of change. The trail itself is taking on a different shape."
  },

  {
    id: 7,
    caseId: 1,
    period: "AUGUST 2023",
    title: "Shopping Trail",
    value: "17.0%",
    unit: "online shopping share",
    category: "PURCHASES",
    color: "bg-blue",
    rotate: "-3deg",

    observation:
      "Online shopping represented 17.0% of the recorded activity in August.",

    meaning:
      "August contained a noticeable online-shopping component alongside the travel activity.",

    doesNotProve:
      "It does not prove what was purchased or why.",

    archivist:
      "Travel and shopping. The trail changed composition after the June spike."
  },
];

export default clues;