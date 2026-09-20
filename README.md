# 🧾 THE LAST RECEIPT

### Every life leaves a trail.

**THE LAST RECEIPT** is an interactive reverse-detective experience that transforms fragments of digital-life data into stories.

Instead of presenting raw activity as a traditional dashboard, the project asks the user to investigate evidence, connect clues, recognize patterns, and reconstruct what happened.

> **RAW DATA → INSIGHTS → CONNECTIONS → STORY**

---

## 1. Project Overview

Modern digital lives generate enormous amounts of fragmented information:

* Music
* Purchases
* Places
* Searches
* Messages
* Events
* Photos
* Notes
* Entertainment

Individually, these records may appear meaningless.

But when related records are placed together, patterns begin to emerge.

**THE LAST RECEIPT** explores this idea through an interactive investigation interface.

The user becomes a detective investigating reconstructed digital-life cases.

Instead of simply reading statistics, the user must:

1. Inspect evidence.
2. Identify unusual activity.
3. Select related clues.
4. Test deductions.
5. Discover relationships.
6. Recognize patterns.
7. Reconstruct the story.
8. Separate observed evidence from interpretation.

---

# 2. Problem Interpretation

The core problem is not simply displaying large amounts of data.

The challenge is:

> **How can fragmented digital-life records be transformed into something understandable, engaging, and meaningful without overwhelming the user?**

A conventional data dashboard can show:

```text
Date | Category | Amount | Location | Activity
```

But it does not necessarily communicate:

```text
Something changed.
↓
Here is the evidence.
↓
These clues are connected.
↓
This pattern is unusual.
↓
Here is what we can confidently say.
```

THE LAST RECEIPT therefore treats data exploration as an **investigation** rather than a dashboard.

---

# 3. Core Experience

The experience follows a narrative investigation loop:

```text
INTRO
  ↓
CASE ARCHIVE
  ↓
CASE FILE
  ↓
INSPECT EVIDENCE
  ↓
FORM A HYPOTHESIS
  ↓
CONNECT CLUES
  ↓
DISCOVER PATTERN
  ↓
RECONSTRUCT STORY
  ↓
NEXT CASE
```

The interface continuously asks:

* What should I investigate?
* What clue did I discover?
* What does this connect to?
* What pattern does this reveal?
* What can I actually conclude?

---

# 4. Main Features

## 🔎 Interactive Case Archive

The archive contains multiple fictional investigations.

### Case 01 — The Summer Everything Moved

> Something changed. The receipts noticed before anyone else.

The player investigates activity between May and August 2023.

---

### Case 02 — The Impossible Day

> One day left a trail unlike almost any other.

The player investigates an unusually concentrated day of activity.

---

### Case 03 — The Repeating Ritual

> Random behavior becomes interesting when it repeats.

The player searches for repeated category sequences.

---

# 5. Different Cases, Different Investigation Mechanics

The cases intentionally do not use exactly the same gameplay mechanic.

| Case    | Investigation               |
| ------- | --------------------------- |
| Case 01 | Connect related evidence    |
| Case 02 | Identify an unusual day     |
| Case 03 | Recognize repeated patterns |

This prevents the application from becoming the same puzzle repeated three times.

---

# 6. Case 01 — The Summer Everything Moved

The first investigation examines the following evidence:

### May 2023

**382 transactions**

This establishes a baseline.

### June 2023

**575 transactions**

Activity increases substantially.

June also records:

* Approximately **2.85M total amount**
* **72 active entities**

### July 2023

**418 transactions**

The June increase does not continue.

### August 2023

The composition of activity changes:

* **35.1% travel**
* **17.0% online shopping**

---

## Investigation Questions

The player must connect evidence to answer:

### 1. When did the trail first change?

May → June

### 2. What else changed when activity spiked?

June activity + June spending

### 3. Did the June change last?

June → July

### 4. Did the trail look the same afterward?

July → August

---

# 7. Evidence vs Interpretation

One of the project's core design principles is:

> **Evidence should not be confused with interpretation.**

For example:

### Observed

Travel represented **35.1%** of recorded activity in August.

### Not proven

This does **not** automatically prove that the person went on vacation.

The interface explicitly separates:

**WHAT WE KNOW**

from

**WHAT WE DON'T KNOW**

This prevents the storytelling layer from inventing explanations that are not supported by the evidence.

---

# 8. The Archivist

The project introduces a recurring guide character:

## THE ARCHIVIST

The Archivist acts as the user's investigation companion.

The character is intentionally **not a chatbot**.

Instead, the Archivist provides deterministic contextual reactions such as:

* “Interesting...”
* “Look closer.”
* “That doesn't happen often.”
* “These two clues might belong together.”
* “Careful. That's an interpretation, not evidence.”

The purpose is to make the interface feel like an investigation rather than a collection of disconnected UI components.

---

# 9. Detective Evidence Wall

The evidence board is the central interaction for Case 01.

Evidence is represented as visual notes placed on a detective-style wall.

The player selects two clues and tests their relationship.

When a valid connection is discovered:

```text
CLUE
  \
   \ 
    CONNECTION
   /
  /
CLUE
```

The connection is visually revealed and added to the investigation progress.

This creates an explicit transformation:

```text
RAW EVIDENCE
     ↓
RELATIONSHIP
     ↓
INSIGHT
```

---

# 10. Story Reveal

After the necessary connections are discovered, the application reconstructs the investigation.

The reveal follows:

```text
MAY
382 transactions
      ↓
JUNE
575 transactions
2.85M
72 entities
      ↓
JULY
418 transactions
      ↓
AUGUST
35.1% travel
17.0% shopping
```

The resulting conclusion is:

> **YOU FOUND THE SHIFT.**

The interface then distinguishes between:

### What the evidence shows

* Activity increased in June.
* Spending increased alongside activity.
* The increase did not continue into July.
* August showed a different activity composition.

### What the evidence does not explain

Why the change happened.

This distinction is deliberate.

---

# 11. Data Architecture

The original conceptual dataset may contain millions of records.

Loading millions of records directly into the browser would create unnecessary performance and memory problems.

Instead, the application uses a **precomputed local story dataset**.

Conceptually:

```text
RAW DATA
   ↓
PREPROCESSING
   ↓
STATISTICS
   ↓
CLUES
   ↓
CONNECTIONS
   ↓
STORY
```

The browser receives only the information required for the interactive experience.

This makes the prototype lightweight while preserving the conceptual relationship between raw data and storytelling.

---

# 12. Local Data Model

The project keeps data separate from presentation logic.

```text
src/
└── data/
    ├── cases.js
    ├── clues.js
    ├── connections.js
    ├── receipts.js
    └── journey.js
```

For example, a clue contains information such as:

```js
{
  id: 2,
  caseId: 1,
  date: "June 2023",
  title: "Something Spiked",
  value: "575 transactions",
  description: "...",
  observation: "...",
  doesNotProve: "..."
}
```

This allows UI components to remain reusable while the investigation data remains independent.

---

# 13. Project Structure

```text
src/
│
├── components/
│   ├── Archivist.jsx
│   ├── CaseCard.jsx
│   ├── ClueCard.jsx
│   ├── ClueModal.jsx
│   ├── EvidenceBoard.jsx
│   ├── EvidenceNode.jsx
│   ├── ConnectionDiscovery.jsx
│   ├── StoryReveal.jsx
│   ├── Journey.jsx
│   ├── ReceiptExplorer.jsx
│   ├── Tutorial.jsx
│   ├── ProgressBar.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Intro.jsx
│   ├── CaseArchive.jsx
│   ├── Investigation.jsx
│   ├── Reveal.jsx
│   └── Explorer.jsx
│
├── data/
│   ├── cases.js
│   ├── clues.js
│   ├── connections.js
│   ├── receipts.js
│   └── journey.js
│
├── hooks/
│   └── useInvestigation.js
│
├── utils/
│   ├── formatters.js
│   └── connectionRules.js
│
├── components/
│
├── App.jsx
├── main.jsx
└── index.css
```

The project can be expanded as additional experiences such as the Data Explorer and Digital Journey are implemented.

---

# 14. Technology Stack

## Frontend

* **React**
* **JavaScript**
* **Vite**

## Styling

* **Tailwind CSS**
* Custom CSS variables
* Responsive CSS

## Animation

* **Motion**

Used for:

* Page transitions
* Evidence entrance
* Character movement
* Connection discovery
* Story reveals
* Micro-interactions

## Visualization

* **React Flow / @xyflow/react**

Used for interactive evidence relationships.

## Charts

* **Recharts**

Used for data-driven visualizations where appropriate.

## Icons

* **Lucide React**

---

# 15. Why React?

React allows the experience to be divided into reusable interactive components.

For example:

```text
CaseCard
ClueCard
Archiv
```
