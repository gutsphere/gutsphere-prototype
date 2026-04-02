# High level

# **Memo: Proposed Navigation Structure for the Gutsphere Mobile App**

Team,

I want to document the navigation structure I believe we should standardize for the Gutsphere mobile app so we can align product, design, and engineering around one clear architecture.

## **Proposed navigation structure**

### **Header**

* top left: profile avatar

* top right: notifications

### **Bottom navigation**

* Today

* Track

* Patterns

* Care

* Chat

This should be the main navigation model we design and build around.

## **Why this structure makes sense**

A mobile app like Gutsphere should separate three things clearly:

* primary destinations

* utility/account access

* short tasks

When these are mixed together, the app becomes harder to learn, harder to scan, and harder to use quickly. That is especially important for our users, because many of them may be symptomatic, stressed, or trying to do something fast.

The structure above gives us a cleaner split:

### **Bottom nav \= primary product surfaces**

These are the places users will likely return to most often in their day-to-day use of the app.

### **Header \= account and utility access**

These are important, but they are not the main product surfaces.

### **Sheets / modals \= quick tasks**

These are temporary task flows such as quick logging, filtering, or small actions.

This creates a more native, more intuitive, and more scalable mobile architecture.

## **What each area is responsible for**

### **Today**

This is the command center.

Purpose:

Help the user understand what matters now and what they should do next.

Examples:

* daily action dashboard

* next best step

* reminders

* latest pattern summary

* recent activity

* care nudges

User question this answers:

“What should I focus on right now?”

### **Track**

This is the logging and history layer.

Purpose:

Help the user record the core signals in a fast, low-friction way.

Examples:

* bowel movement

* food

* symptom

* medication

* notes

* entry history

User question this answers:

“How do I record what happened?”

### **Patterns**

This is the interpretation layer.

Purpose:

Help the user understand trends, possible triggers, timing relationships, and signal summaries.

Examples:

* pattern summary

* trigger candidates

* trends

* compare periods

* reports

User question this answers:

“What might be going on?”

### **Care**

This is the action and navigation layer.

Purpose:

Help the user turn logs and patterns into next steps.

Examples:

* visit prep

* doctor-ready summary

* care plans

* tests / procedures

* questions to ask

* next-step guidance

User question this answers:

“What do I do with what I learned?”

### **Chat**

This is the conversational copilot layer.

Purpose:

Help the user ask questions, clarify uncertainty, and get guided support across the journey.

Examples:

* what might this mean

* what should I track next

* help me prepare for my visit

* explain this pattern

* help me think through next steps

User question this answers:

“Can you help me think through this?”

### **Profile avatar**

This is the account and personalization entry point.

Purpose:

Hold lower-frequency, user-specific setup and configuration.

Examples:

* profile

* care context

* preferences

* settings

* integrations

* subscription

* notification settings

User question this answers:

“How is this app set up for me?”

### **Notifications**

This is the utility inbox.

Purpose:

Surface reminders, alerts, updates, and important nudges.

Examples:

* logging reminders

* pattern updates

* care reminders

* summary-ready alerts

User question this answers:

“What needs my attention?”

## **Product logic behind this structure**

This structure matches the product we are trying to build.

We are not building:

* a generic tracker

* a settings-heavy health app

* a pure chat app

* a clinic-style interface

We are building a connected GI operating system where the user moves through a clear loop:

* start in Today

* record in Track

* understand in Patterns

* act in Care

* clarify and get help in Chat

That is a much stronger product story than a collection of disconnected features.

## **Why Chat belongs in the bottom nav**

If conversation is one of the main ways users receive value from Gutsphere, then Chat should be treated as a first-class product surface.

Chat is not just a helper. It can become one of the main places users go to:

* ask what a log means

* ask what to do next

* ask what to track

* ask how to prepare

* ask for explanation and guidance

That makes it a stronger candidate for bottom-nav placement than lower-frequency account/settings functionality.

## **Why the profile avatar belongs in the header**

Profile, settings, and account-level actions are important, but they are not the core daily-use surfaces of the app.

Putting them behind the avatar gives us:

* a cleaner bottom nav

* a more native mobile feel

* a better use of limited primary navigation space

* a clearer distinction between product surfaces and account surfaces

This is a better behavioral model of how users will actually use the app.

## **Navigation principles we should follow**

### **1\. Bottom nav is for destinations**

Only true top-level product surfaces should live there.

### **2\. Header is for account and utilities**

The avatar and notifications should stay there.

### **3\. Quick tasks should not become destinations**

Quick logging, filtering, and lightweight actions should open through sheets, modals, or contextual entry points.

### **4\. Each tab needs a clear first-screen purpose**

Each tab should feel like a real home, not just a list of leftover features.

### **5\. The app should feel like one connected system**

The structure should reinforce the product loop, not fragment it.

## **What this means for design**

Design should optimize for:

* fewer competing destinations

* stronger hierarchy

* clearer purpose for each tab

* a calm, Apple-like navigation model

* faster recognition of where things live

This means the first screen inside each tab matters a lot. Each one should immediately communicate why that tab exists.

## **What this means for engineering**

Engineering should treat this as the navigation contract:

* bottom nav is fixed to Today, Track, Patterns, Care, Chat

* profile/account items live behind the avatar

* notifications live in the top right

* quick tasks should use sheets or lightweight flows where appropriate

* we should avoid navigation sprawl as we add features

## **In the coming days**

The next step is to finalize what goes inside each area.

This will involve reorganizing the features we already have across:

* Today

* Track

* Patterns

* Care

* Chat

* Profile avatar

* Notifications

As part of that work, we should expect four things:

* some current features will simply move into a more logical home

* some features will need redesign so they fit this structure better

* some features may no longer make sense in their current form and should be removed

* some gaps will become obvious, and we will need to add new features or new entry points

In other words, this is not just a naming exercise. It is a product architecture exercise.

The goal is to make sure each area has:

* a clear role

* a clean first screen

* the right set of features

* a strong reason to exist in the user’s mental model

In practical terms, our next phase should focus on:

* defining the role of each tab more precisely

* defining what belongs behind the profile avatar

* defining what belongs in notifications

* mapping current features into the right home

* identifying what to remove, merge, redesign, or add

* making sure the overall flow feels coherent across the entire app

## **Immediate implementation direction**

For the first prototype and early production validation, we should prioritize:

* Today Home

* Track Home

* Quick Add

* Log Bowel Movement

* Log Food

* Patterns Home

* Pattern Detail

* Care Home

* Visit Prep

* Chat Home

* Profile / Account Entry

* Notifications Inbox

That should be enough to validate the navigation and the core product loop.

## **Recommendation**

We should standardize the app-level navigation as:

### **Header**

* profile avatar on the top left

* notifications on the top right

### **Bottom nav**

* Today

* Track

* Patterns

* Care

* Chat

And we should standardize the rule that:

* bottom nav is for destinations

* header is for account and utilities

* sheets are for quick tasks

This gives us a cleaner, more native, more intuitive app structure and a stronger foundation for the product we want Gutsphere to become.

# High level V2 Final

# **Gutsphere Final Navigation Architecture Memo**

## **Why this memo exists**

This memo synthesizes the tab-level navigation IA documents into one final architecture view.

Its purpose is to give a complete picture of:

* the high-level navigation  
* the role of each section  
* how the sections work together  
* how the product serves different GI stages and intensities  
* what the stable architecture is  
* what should adapt dynamically by user state

This memo is the architectural conclusion before deeper prototype refinement.

---

# **1\. Final top-level navigation**

The top-level navigation should remain:

1. **Today**  
2. **Track**  
3. **Pattern**  
4. **Care**  
5. **Chat**

Supporting navigation outside the bottom tab bar should remain:

* **Profile** from the top-left avatar  
* **Notifications** from the top-right bell icon  
* **Quick Add** from the floating plus button

This is the right high-level structure for Gutsphere.

---

# **2\. Why this architecture is right**

This architecture is strong because it maps clearly to real GI jobs to be done.

The logic is:

* **Today** \= what matters now  
* **Track** \= capture the right signals  
* **Pattern** \= understand what may be going on  
* **Care** \= act on what you know  
* **Chat** \= clarify uncertainty and get guided help  
* **Profile** \= stable personal workspace  
* **Notifications** \= high-signal timing and re-entry layer

This means the product is not:

* a tracker-only app  
* a chat-only app  
* a clinic-only app  
* a generic wellness app

It becomes a GI copilot system with a coherent loop:

**notice → capture → interpret → act → clarify**

---

# **3\. Role of each major surface**

## **Today**

Today is the **command center**.

It should be a ranked GI care feed that answers:

* what matters now  
* what changed  
* what to do next  
* what to continue  
* where to go next

Today should not be a static dashboard.  
It should be the orchestration layer for the rest of the product.

## **Track**

Track is the **capture layer**.

It should help users capture the right GI signals with low friction, in a way that builds useful evidence for Pattern, Care, and Chat.

Track should not feel like a tracker catalog.  
It should feel like a smart capture system.

## **Pattern**

Pattern is the **interpretation layer**.

It should help users move from raw logs into:

* relationships  
* trends  
* uncertainty reduction  
* summaries  
* doctor-useful outputs

Pattern is where Gutsphere stops feeling like a tracker and starts feeling intelligent.

## **Care**

Care is the **action layer**.

It should help users:

* do useful things on their own  
* prepare for care  
* organize formal clinical care  
* follow guided support

Care is one of the clearest expressions of Gutsphere as proactive, continuous support.

## **Chat**

Chat is the **conversational copilot layer**.

It should help users:

* ask questions in the moment  
* reduce uncertainty  
* understand what things may mean  
* decide what to do next  
* get routed into Track, Pattern, or Care when needed

## **Profile**

Profile is the **personal workspace layer**.

It should organize:

* stable personal context  
* support network  
* resources  
* integrations  
* account needs

It should not feel like a generic settings drawer.

## **Notifications**

Notifications is the **timely nudge and alert layer**.

It should surface:

* reminders  
* updates  
* care alerts

It should be high-signal and useful, not noisy.

---

# **4\. Final internal navigation by tab**

## **Track**

Track should be structured as:

1. **Quick Add**  
2. **Your Main Trackers**  
3. **Continue Tracking**  
4. **Recent Entries**  
5. **More Trackers**  
   * Daily Foundations  
   * Specialized Context  
   * Care & Evidence

### **Why this is right**

This structure balances:

* speed  
* personalization  
* continuity  
* depth

It avoids making Track feel like a generic library.

---

## **Pattern**

Pattern should be structured as:

1. **Overview**  
2. **Trends**  
3. **Reports**

And support shared deeper destinations such as:

* Pattern Detail  
* Trend Detail  
* Report Preview

### **Why this is right**

This structure separates:

* top interpretation  
* time-based understanding  
* output-ready summaries

It prevents Pattern from becoming just a chart tab.

---

## **Care**

Care should be structured as:

1. **Self Care**  
   * Guided  
   * Plans  
   * Routines  
   * Flare Support  
2. **Navigation**  
3. **Clinical Care**

### **Why this is right**

This structure separates:

* what the user can do on their own  
* how they navigate the healthcare journey  
* how they organize formal care

This is one of the strongest parts of the whole architecture.

---

## **Chat**

Chat should be structured as:

1. **Copilot**  
2. **History**

### **Why this is right**

This structure gives users:

* a place to ask for help now  
* a place to continue prior useful conversations

It also helps Chat feel longitudinal rather than disposable.

---

## **Profile**

Profile should be structured as:

1. **Me**  
   * Profile  
   * Care Context  
   * Preferences  
   * Settings  
2. **My Network**  
   * Family  
   * Care Team  
   * Communities  
3. **My Resources**  
   * Lists  
   * Test Results  
4. **Integrations**  
   * Devices  
   * EHR  
5. **Account**  
   * Subscription  
   * Help

### **Why this is right**

This structure keeps Profile as a stable personal workspace rather than a junk drawer.

---

## **Notifications**

Notifications should be structured as:

1. **Reminders**  
2. **Updates**  
3. **Care Alerts**

### **Why this is right**

This separates:

* recurring task support  
* meaningful product change  
* time-sensitive care prompts

It helps Notifications stay useful and high-signal.

---

## **Today**

Today should be structured as:

1. **State Header**  
2. **Top Priority Card**  
3. **Ranked Care Feed**  
   * Must Do Today  
   * Important Update  
   * Continue Where You Left Off  
   * Relevant Care Surface  
   * Pattern To Review  
   * Guided Support  
   * Chat Prompt  
   * Recent Activity

### **Why this is right**

This makes Today an orchestration surface, not a dumping ground.

---

# **5\. The key architectural principle**

The most important architectural principle is:

## **Stable navigation, adaptive product state**

The navigation should stay stable.  
The product should adapt by stage.

This means:

* do not create new tabs for every situation  
* do not make the top-level IA unstable  
* instead, change ranking, emphasis, prompts, and default routes by user state

This is the cleanest way to support different GI journeys without making the product messy.

---

# **6\. Cross-product user modes**

The architecture works best when the product recognizes these modes:

1. **Diagnosis Investigation**  
2. **Flare Support**  
3. **Pre-Visit / Pre-Test**  
4. **Treatment Monitoring**  
5. **Maintenance / Prevention**

These are not tabs.  
They are product states that change emphasis across tabs.

---

# **7\. How the tabs should adapt by mode**

## **Diagnosis Investigation**

The product should emphasize:

* Track for evidence-building  
* Pattern for uncertainty reduction  
* Care \> Navigation for visit prep and diagnosis acceleration  
* Chat for clarification  
* Today as a diagnosis-journey command center

## **Flare Support**

The product should emphasize:

* Today for immediate prioritization  
* Track for acute capture  
* Care \> Self Care \> Flare Support  
* Guided support inside Self Care  
* Chat for structured help now  
* Pattern for short-horizon recent change, not broad history first

## **Pre-Visit / Pre-Test**

The product should emphasize:

* Today for countdown and prep  
* Track for pre-visit evidence capture  
* Pattern \> Reports  
* Care \> Navigation  
* Chat for prep guidance  
* Notifications for care alerts

## **Treatment Monitoring**

The product should emphasize:

* Today for treatment response and follow-up  
* Track for meds, adherence, and response  
* Pattern for change-from-baseline and treatment-response trends  
* Care \> Clinical Care  
* Chat for treatment-aware clarification  
* Profile integrations and results where relevant

## **Maintenance / Prevention**

The product should emphasize:

* Today as a lighter command center  
* Track as low-burden check-in  
* Pattern for stability and drift  
* Care \> Self Care with routines and guided support  
* Chat as optional lighter support  
* quieter Notifications

---

# **8\. What the architecture does especially well**

## **Strongest areas**

The current architecture is especially strong for:

* undiagnosed but struggling users  
* pre-visit / pre-test users  
* diagnosed-and-managing users

These are important because they align strongly with Gutsphere’s positioning.

## **Strongest strategic surfaces**

The strongest strategic parts of the architecture are:

* **Today** as a command center  
* **Pattern** as the interpretation layer  
* **Care \> Navigation** as a diagnosis and visit-prep differentiator  
* **Care \> Self Care \> Guided** as an everyday usefulness surface  
* **Chat** as a context-aware GI copilot layer

---

# **9\. Biggest architectural gaps to keep in mind**

## **1\. Flare support must become first-class**

This is the biggest recurring gap across the product.

Flare support must be clearly expressed across:

* Today  
* Track  
* Care  
* Chat  
* Pattern

## **2\. Treatment monitoring needs stronger prominence**

The architecture supports it, but it must be made more explicit in:

* Today  
* Track  
* Pattern  
* Care \> Clinical Care  
* Chat  
* Profile integrations/resources when relevant

## **3\. Diagnosis acceleration should stay central**

One of the biggest reasons this product matters is helping users:

* stop guessing  
* gather the right evidence  
* prepare better  
* shorten the diagnosis journey

That should remain especially visible in:

* Today  
* Pattern  
* Care \> Navigation  
* Chat

## **4\. Maintenance mode should feel lighter**

The architecture supports lower-severity users, but the experience must become lighter for them.

---

# **10\. Boundaries between tabs**

These boundaries are important and should stay clear.

## **Today**

Command center and ranked feed

## **Track**

Capture

## **Pattern**

Interpretation

## **Care**

Action

## **Chat**

Clarification and guided routing

## **Profile**

Stable personal workspace

## **Notifications**

Timely inbox for high-signal reminders, updates, and alerts

If these boundaries blur too much, the product will feel messy.  
If they stay clear, the system will feel coherent.

---

# **11\. Does this architecture align with the product vision?**

## **Jobs to be done alignment**

Yes.  
The structure maps well to real GI jobs:

* what matters now  
* what should I log  
* what may be going on  
* what should I do  
* what should I ask  
* how do I prepare  
* how do I stay on track

## **Positioning alignment**

Yes.  
The structure supports Gutsphere as:

* multidisciplinary  
* proactive  
* continuous  
* action-oriented  
* more than a tracker  
* more than a generic AI chat

## **Mission alignment**

Yes.  
The structure supports:

* accessibility  
* actionability  
* continuity between visits  
* everyday usefulness  
* diagnosis support  
* care navigation

## **“What we say we do” alignment**

Yes, at the architecture level.  
But this only remains true if the product surfaces inside the tabs actually deliver on the promise.

---

# **12\. Final architectural decision**

## **Keep the high-level navigation**

Do not restart the architecture.  
The top-level structure is good.

## **Keep the tab-level internal navigation**

The tab structures are directionally right.

## **Build around stage-aware emphasis**

The most important next move is not changing the tabs.  
It is making the same architecture adapt intelligently by stage and state.

---

# **13\. Final summary**

The final architecture should be understood as:

* **Today** tells the user what matters now  
* **Track** captures the right GI signals  
* **Pattern** helps the user understand what those signals may mean  
* **Care** helps the user act, prepare, and follow through  
* **Chat** helps the user clarify uncertainty and get routed to the right next step  
* **Profile** holds the user’s stable context, people, resources, integrations, and account needs  
* **Notifications** brings the user back in at the right time with high-signal prompts

This is a strong architecture for Gutsphere.

The next step is not to rethink the structure.  
The next step is to make it **adaptive, mode-aware, and stage-aware** so the same architecture works beautifully across:

* diagnosis investigation  
* flare support  
* pre-visit / pre-test  
* treatment monitoring  
* maintenance / prevention

# Track

# **Gutsphere Tab Navigation IA — Track**

## **Why this document exists**

This document defines the **internal navigation architecture** for the **Track** tab only.

This follows the improved documentation standard, so it covers not only internal navigation, but also:

* the role of Track in the product  
* the jobs Track serves  
* how Track serves different user stages  
* what gets emphasized by stage  
* what should not live inside Track  
* how Track connects to the rest of the product

This document is intentionally focused on:

* complete-state internal navigation  
* jobs-to-be-done by stage  
* product boundaries and hierarchy

This document is intentionally not focused on:

* detailed tracker forms  
* exact fields for each tracker  
* detailed logging UX  
* final UI design  
* engineering implementation details

---

## **Role of Track in the product**

Track is the **capture layer** of Gutsphere.

Its job is to help users capture the right signals, at the right time, with the least friction possible, so those signals become useful for:

* Pattern  
* Self Care  
* Clinical Navigation  
* Clinical Care  
* Chat guidance

Track should not feel like a library of trackers.  
Track should feel like a **smart GI capture system**.

---

## **Core jobs of Track**

Track should help users do these jobs:

1. log the most important things quickly  
2. know what is worth logging next  
3. continue incomplete or high-value tracking  
4. review what they already logged  
5. access less-frequent or specialized trackers without cluttering the main experience

---

## **Complete-state internal navigation for Track**

At the highest level, Track should contain five navigation layers:

1. **Quick Add**  
2. **Your Main Trackers**  
3. **Continue Tracking**  
4. **Recent Entries**  
5. **More Trackers**

That is the complete-state internal navigation structure inside the Track tab.

---

# **1\. Quick Add**

## **Role**

This is the fastest entry point in the whole Track tab.

## **Why it exists**

Users often open Track with one immediate intent:

* log a bowel movement  
* log food  
* log symptoms  
* log medication  
* add a note or photo

They should not have to browse categories first.

## **What belongs here**

Quick Add should only contain the highest-frequency, highest-urgency capture actions:

* Bowel Movement  
* Food  
* Symptoms  
* Medication  
* Note / Photo

## **Navigation behavior**

Tap from Quick Add should go directly into the relevant logging flow.

Examples:

* Track → Quick Add → Bowel Movement Log  
* Track → Quick Add → Food Log  
* Track → Quick Add → Symptom Log  
* Track → Quick Add → Medication Log  
* Track → Quick Add → Note / Photo

## **Important rule**

Quick Add should remain short.  
It should not expand into the whole tracker universe.

---

# **2\. Your Main Trackers**

## **Role**

This is the personalized recurring tracker layer.

## **Why it exists**

Not every user should see the same tracker set promoted equally.  
The app should elevate the trackers that matter most for the user’s current situation.

## **What belongs here**

This section should contain the user’s most relevant recurring trackers.

For many GI users this may include:

* Bowel Movement  
* Symptoms  
* Food  
* Hydration  
* Sleep

For some users it may also elevate:

* Medication & Supplements  
* Mental Health  
* Energy & Movement  
* Menstrual Health  
* Treatment Adherence

## **Navigation behavior**

Tap from Main Trackers should go to either:

* direct log flow, or  
* tracker home/detail if that tracker has more context/history

Examples:

* Track → Main Trackers → Bowel Movement  
* Track → Main Trackers → Symptoms  
* Track → Main Trackers → Hydration

## **Important rule**

This section is not the full library.  
It is the **personalized priority layer**.

---

# **3\. Continue Tracking**

## **Role**

This is the continuity layer.

## **Why it exists**

Tracking is often not one isolated event.  
Users may need follow-up logging that increases the value of their data.

Examples:

* add symptoms after breakfast  
* log dinner timing tonight  
* finish today’s hydration  
* log response to medication  
* add note for incomplete evacuation

## **What belongs here**

This section should contain:

* incomplete tracking threads  
* high-value next logs  
* follow-up prompts that strengthen interpretation

## **Navigation behavior**

Tap from Continue Tracking should take the user directly into the missing or follow-up log flow.

Examples:

* Track → Continue Tracking → Add symptoms after breakfast  
* Track → Continue Tracking → Log treatment response

## **Important rule**

This section should feel smart and contextual, not generic.  
This is one of the strongest ways Track becomes more than a data-entry surface.

---

# **4\. Recent Entries**

## **Role**

This is the recent activity and continuity timeline inside Track.

## **Why it exists**

Users need to:

* remember what they already logged  
* review the last thing they entered  
* edit if needed  
* continue from recent context

## **What belongs here**

Recent Entries should contain the most recent logs in reverse chronological order.

Examples:

* bowel movement logged  
* breakfast logged  
* symptoms logged  
* medication logged

## **Navigation behavior**

Tap from Recent Entries should open the entry detail screen.

Examples:

* Track → Recent Entries → Bowel Movement Entry Detail  
* Track → Recent Entries → Food Entry Detail

From entry detail, the user should be able to:

* review  
* edit  
* add follow-up context  
* ask Chat about the entry

## **Important rule**

Recent Entries should support continuity, not become a full historical archive. A fuller history or filters can exist later, but this section should primarily support recent activity.

---

# **5\. More Trackers**

## **Role**

This is the full tracker library for less-frequent, contextual, or specialized trackers.

## **Why it exists**

Some trackers matter a lot, but not often enough to deserve top-level prominence for every user.

## **Internal grouping inside More Trackers**

More Trackers should be grouped by meaning, not by internal product labels like daily/monthly/occasional.

The complete-state grouping should be:

### **A. Daily Foundations**

These are recurring trackers that often matter but do not always deserve top placement.  
Examples:

* Medication & Supplements  
* Mental Health  
* Energy & Movement

### **B. Specialized Context**

These are context trackers relevant depending on the user.  
Examples:

* Menstrual Health  
* Food Sensitivity & Allergy  
* Fasting  
* Biometrics & Demographics

### **C. Care & Evidence**

These are trackers that support formal care and documentation.  
Examples:

* Treatment Adherence  
* Test Results

## **Navigation behavior**

Tap from More Trackers should go directly into that tracker’s flow or tracker home.

Examples:

* Track → More Trackers → Menstrual Health  
* Track → More Trackers → Treatment Adherence  
* Track → More Trackers → Test Results

## **Important rule**

More Trackers should feel available, but visually secondary to Quick Add and Main Trackers.  
This is where breadth lives, not where priority lives.

---

## **Secondary navigation inside Track**

The Track tab therefore has this internal navigation hierarchy:

## **Level 1 — Track tab home**

* Quick Add  
* Your Main Trackers  
* Continue Tracking  
* Recent Entries  
* More Trackers

## **Level 2 — Tracker or entry destination**

From the home, users move into:

* specific logging flows  
* tracker-specific surfaces  
* entry detail surfaces  
* grouped More Trackers categories

## **Level 3 — Detail / follow-up surfaces**

Inside those destinations, users can go deeper into:

* entry detail  
* edit entry  
* add follow-up context  
* related tracker history  
* ask Chat about this entry or signal

---

# **Jobs by stage**

This is where we pressure-test the Track structure against real GI user stages.

---

## **1\. Undiagnosed but struggling**

### **Jobs Track serves**

* what should I log?  
* how do I avoid logging random things and instead capture what matters?  
* how do I build useful evidence for diagnosis faster?

### **What gets emphasized**

* **Quick Add** should be highly visible  
* **Your Main Trackers** should strongly emphasize bowel movement, symptoms, food, hydration, and sleep  
* **Continue Tracking** should help users fill evidence gaps  
* **More Trackers** should stay visually secondary

### **Why**

This user needs Track to feel clarifying, not overwhelming.

---

## **2\. Diagnosed but unstable**

### **Jobs Track serves**

* what changed?  
* what should I log during unstable periods?  
* what contextual signals matter right now?

### **What gets emphasized**

* **Quick Add** stays highly important  
* **Your Main Trackers** should emphasize symptoms, bowel movement, food, hydration, and meds where relevant  
* **Continue Tracking** becomes especially valuable  
* **More Trackers** should remain available but secondary

### **Why**

This user often needs quick, high-value capture without having to browse.

---

## **3\. Diagnosed and managing**

### **Jobs Track serves**

* how do I keep tracking light and useful?  
* how do I stay consistent without burden?  
* what recurring trackers matter most for me?

### **What gets emphasized**

* **Your Main Trackers** becomes the strongest everyday layer  
* **Quick Add** stays useful for speed  
* **Recent Entries** and **Continue Tracking** support continuity  
* **More Trackers** stays available but lower priority

### **Why**

This user often wants low-friction continuity more than deep exploration.

---

## **4\. Pre-visit / pre-test**

### **Jobs Track serves**

* what should I capture before this appointment or test?  
* what evidence is still missing?  
* what is worth tracking before I go?

### **What gets emphasized**

* **Continue Tracking** becomes especially important  
* **Your Main Trackers** should emphasize the most visit-relevant signals  
* **Quick Add** should remain fast for capture  
* **More Trackers** may become relevant when the visit or test requires extra context

### **Why**

This user needs Track to support evidence gathering before a care event.

---

## **5\. Flare support**

### **Jobs Track serves**

* what should I log right now?  
* how do I capture the acute picture quickly?  
* what matters most in a bad moment?

### **What gets emphasized**

* **Quick Add** should be overwhelmingly primary  
* **Your Main Trackers** should temporarily prioritize symptoms, bowel movement, meds, food, and note  
* **Continue Tracking** should surface acute follow-up prompts  
* **More Trackers** should become very quiet visually

### **Why**

This user needs Track to feel like an acute capture mode, not a library.

---

## **6\. Treatment monitoring**

### **Jobs Track serves**

* what should I log about treatment today?  
* how do I track adherence and response?  
* what signals matter while I am on a plan?

### **What gets emphasized**

* **Your Main Trackers** should elevate medication and treatment adherence for relevant users  
* **Continue Tracking** should surface response-related follow-up logs  
* **Recent Entries** is useful for reviewing recent response patterns  
* **More Trackers** stays available for supporting context

### **Why**

This user needs Track to become more treatment-aware than usual.

---

## **7\. Maintenance / prevention**

### **Jobs Track serves**

* how do I keep tracking low burden?  
* what should I check in on lightly?  
* how do I notice drift without logging everything?

### **What gets emphasized**

* **Your Main Trackers** should become lighter and fewer  
* **Quick Add** remains useful  
* **Recent Entries** supports continuity  
* **More Trackers** should stay visually de-emphasized

### **Why**

This user needs Track to remain calm and low effort.

---

# **What gets emphasized by stage — summary**

| Stage | Primary emphasis | Secondary emphasis | Lower emphasis |
| ----- | ----- | ----- | ----- |
| Undiagnosed but struggling | Quick Add, Main Trackers | Continue Tracking | More Trackers |
| Diagnosed but unstable | Quick Add, Main Trackers | Continue Tracking | More Trackers |
| Diagnosed and managing | Main Trackers | Quick Add, Recent Entries, Continue Tracking | More Trackers |
| Pre-visit / pre-test | Continue Tracking, Main Trackers | Quick Add | More Trackers |
| Flare support | Quick Add, Main Trackers | Continue Tracking | More Trackers |
| Treatment monitoring | Main Trackers, Continue Tracking | Recent Entries, Quick Add | More Trackers |
| Maintenance / prevention | Main Trackers | Quick Add, Recent Entries | More Trackers |

The navigation stays stable, but the emphasis changes by stage.

---

## **What Track should not contain**

Track should not become:

* a giant dashboard  
* a settings page  
* a generic health tracker catalog  
* a duplicate of Pattern  
* a duplicate of Care

Track should stay focused on capture and continuity.

---

## **Relationship to the rest of the product**

Track connects outward to the rest of the product like this:

* **Today** sends users into Track when logging is the next best step  
* **Pattern** depends on Track for useful signal quality  
* **Care** depends on Track for evidence and adherence  
* **Chat** uses Track context to answer more intelligently

So Track is not isolated. It is the evidence engine for the rest of the app.

---

## **Complete-state mental model for Track**

The clearest way to think about Track is:

**Track \= fast capture \+ personalized priority \+ continuity \+ full library**

Or more simply:

**Track \= the place where users capture the right GI signals without having to think too hard**

---

## **Final internal navigation summary**

Track should be structured as:

1. **Quick Add**  
2. **Your Main Trackers**  
3. **Continue Tracking**  
4. **Recent Entries**  
5. **More Trackers**  
   * Daily Foundations  
   * Specialized Context  
   * Care & Evidence

And the emphasis should shift by stage, while the navigation stays stable.

This is the complete-state internal navigation architecture for the Track tab.

# Patterns

# **Gutsphere Tab Navigation IA — Pattern**

## **Why this document exists**

This document defines the **internal navigation architecture** for the **Pattern** tab only.

This follows the improved documentation standard, so it covers not only internal navigation, but also:

* the role of Pattern in the product  
* the jobs Pattern serves  
* how Pattern serves different user stages  
* what gets emphasized by stage  
* what should not live inside Pattern  
* how Pattern connects to the rest of the product

This document is intentionally focused on:

* complete-state internal navigation  
* jobs-to-be-done by stage  
* product boundaries and hierarchy

This document is intentionally not focused on:

* exact pattern-detection rules  
* full clinical reasoning logic  
* data science implementation  
* final UI details

---

## **Role of Pattern in the product**

Pattern is the **interpretation layer** of Gutsphere.

Its job is to help users move from:

* raw logs  
* scattered symptoms  
* disconnected life events

into:

* trend recognition  
* possible relationships  
* useful summaries  
* clearer next steps  
* doctor-useful outputs

Pattern is where Gutsphere stops feeling like a tracker and starts feeling like a **GI copilot**.

---

## **Core jobs of Pattern**

Pattern should help users do these jobs:

1. see what may be going on  
2. understand trends over time  
3. connect multiple signals together  
4. know what could clarify uncertainty  
5. generate summaries and reports that help with care

---

## **Complete-state internal navigation for Pattern**

At the highest level, Pattern should contain three major internal sections:

1. **Overview**  
2. **Trends**  
3. **Reports**

That is the complete-state internal navigation structure inside the Pattern tab.

---

# **1\. Overview**

## **Role**

Overview is the **primary interpretation home** inside Pattern.

## **Why it exists**

Most users do not open Pattern because they want to browse analytics.  
They open Pattern because they want to quickly answer:

* what patterns are showing up?  
* what matters most?  
* what is still uncertain?

Overview should be the place that answers that first.

## **What belongs here**

Overview should contain the highest-signal interpretation layer.

Examples of what belongs here conceptually:

* top pattern summary  
* signal summary  
* possible trigger candidates  
* strongest current relationships  
* confidence and uncertainty framing  
* what could clarify the picture

## **Navigation behavior**

Pattern should open to **Overview** by default.

From Overview, users should be able to move to:

* a specific pattern detail page  
* Trends for broader time-based interpretation  
* Reports for clinician-ready summaries

Examples:

* Pattern → Overview → Pattern Detail  
* Pattern → Overview → Trends  
* Pattern → Overview → Reports

## **Important rule**

Overview should not try to show everything.  
It should show the **most useful current interpretation first**.

---

# **2\. Trends**

## **Role**

Trends is the **time-based interpretation layer**.

## **Why it exists**

Users often want to understand:

* how things changed over time  
* whether symptoms are improving or worsening  
* whether certain signals cluster together  
* whether a treatment, routine, or behavior is associated with change

That is different from Overview.  
Overview answers “what seems to matter right now?”  
Trends answers “how is this changing over time?”

## **What belongs here**

Trends should contain time-based pattern views.

Examples of what belongs here conceptually:

* symptom changes over time  
* bowel pattern changes over time  
* food-symptom timing trends  
* sleep-stress-symptom relationships  
* before vs after comparisons  
* stability vs drift views

## **Navigation behavior**

From Trends, users should be able to move to:

* narrower comparison views  
* specific trend detail pages  
* related pattern detail pages  
* Reports when they want to export or summarize findings

Examples:

* Pattern → Trends → Trend Detail  
* Pattern → Trends → Pattern Detail  
* Pattern → Trends → Reports

## **Important rule**

Trends should remain interpretive, not turn into a generic chart dashboard.  
It should show change in a way that helps people make decisions.

---

# **3\. Reports**

## **Role**

Reports is the **summary and output layer** of Pattern.

## **Why it exists**

Users often need to transform logs and pattern interpretation into something more structured and shareable.

Examples:

* preparing for a doctor visit  
* preparing for a test or follow-up  
* reviewing the strongest findings  
* building a doctor-ready summary

Reports is where Pattern becomes useful beyond the app itself.

## **What belongs here**

Reports should contain the output-oriented views.

Examples of what belongs here conceptually:

* top patterns to discuss  
* concise summaries  
* trend summary  
* report preview  
* clinician-ready export surfaces  
* visit-oriented pattern summaries

## **Navigation behavior**

From Reports, users should be able to move to:

* report detail / preview  
* Care \> Navigation when the next step is visit prep  
* underlying pattern details if they want to inspect the source interpretation

Examples:

* Pattern → Reports → Report Preview  
* Pattern → Reports → Care Navigation  
* Pattern → Reports → Pattern Detail

## **Important rule**

Reports should not just dump raw data.  
They should organize interpretation into a usable story.

---

## **Secondary navigation inside Pattern**

The Pattern tab therefore has this internal navigation hierarchy:

## **Level 1 — Pattern tab home**

* Overview  
* Trends  
* Reports

## **Level 2 — specific interpretation destination**

From the Pattern tab, users move into:

* pattern detail  
* trend detail  
* report preview / report detail

## **Level 3 — connected action destinations**

From those detailed views, users may move outward into:

* Track when more data is needed  
* Care when action or visit prep is needed  
* Chat when clarification is needed

This is important because Pattern is not the end state.  
Pattern should often point users toward the next useful step.

---

## **Pattern Detail as a shared destination**

Although Overview, Trends, and Reports are the main navigation layers, the product should also support a shared **Pattern Detail** destination.

## **Why it exists**

Users often need to open one specific pattern and understand:

* what was observed  
* confidence level  
* what might be contributing  
* what could clarify it  
* what to do next

## **How it fits the navigation**

Pattern Detail should be reachable from:

* Overview  
* Trends  
* Reports  
* Today  
* Chat

Examples:

* Today → Pattern Detail  
* Pattern → Overview → Pattern Detail  
* Pattern → Trends → Pattern Detail  
* Chat → Pattern Detail

This makes Pattern Detail a cross-product interpretation destination, even though it lives inside the Pattern ecosystem.

---

# **Jobs by stage**

This is where we pressure-test the Pattern structure against real GI user stages.

---

## **1\. Undiagnosed but struggling**

### **Jobs Pattern serves**

* what may be going on?  
* what signals seem related?  
* what is still uncertain?  
* what could clarify the picture?  
* what should I discuss with my clinician?

### **What gets emphasized**

* **Overview** should be strongest  
* **Reports** becomes highly relevant for doctor-useful summaries  
* **Trends** is secondary but still useful

### **Why**

This user needs Pattern to help reduce guessing and turn scattered logs into something more coherent.

---

## **2\. Diagnosed but unstable**

### **Jobs Pattern serves**

* what changed recently?  
* what may be making things worse or better?  
* what short-term relationships matter?

### **What gets emphasized**

* **Overview** remains strong  
* **Trends** becomes especially important for short-horizon change  
* **Reports** is secondary unless a follow-up or visit is near

### **Why**

This user needs interpretation that helps explain instability without becoming too abstract.

---

## **3\. Diagnosed and managing**

### **Jobs Pattern serves**

* is my current routine helping?  
* are things staying steady?  
* what is improving or drifting?

### **What gets emphasized**

* **Trends** becomes strongest  
* **Overview** remains useful for the most important current summary  
* **Reports** stays secondary unless a care event is near

### **Why**

This user often benefits most from longitudinal understanding, not just top-level alerts.

---

## **4\. Pre-visit / pre-test**

### **Jobs Pattern serves**

* what are the strongest findings to discuss?  
* what summary is most useful for my visit?  
* how do I turn logs into a clearer clinical story?

### **What gets emphasized**

* **Reports** should be strongest  
* **Overview** remains important for the main interpretation summary  
* **Trends** supports deeper review when needed

### **Why**

This is one of the strongest use cases for Pattern because it helps translate data into visit-ready value.

---

## **5\. Flare support**

### **Jobs Pattern serves**

* what changed in the last 24 to 72 hours?  
* does this resemble past episodes?  
* what may be contributing right now?

### **What gets emphasized**

* **Overview** and **Trends** should become more short-horizon and recent-change oriented  
* **Reports** should stay quieter unless a visit becomes relevant

### **Why**

This user needs Pattern to be more recent and acute-aware, not only broad and historical.

---

## **6\. Treatment monitoring**

### **Jobs Pattern serves**

* is treatment helping?  
* what changed since treatment started?  
* is there a response pattern or side-effect pattern?

### **What gets emphasized**

* **Trends** should become especially important  
* **Overview** should surface treatment-response summaries  
* **Reports** becomes useful for follow-up prep

### **Why**

This user needs Pattern to become treatment-response aware, not only trigger-aware.

---

## **7\. Maintenance / prevention**

### **Jobs Pattern serves**

* am I staying steady?  
* what seems to be helping?  
* is anything drifting?

### **What gets emphasized**

* **Trends** should be strongest  
* **Overview** should stay calm and light  
* **Reports** should remain quiet unless needed

### **Why**

This user needs lighter interpretation that supports stability rather than heavy problem framing.

---

# **What gets emphasized by stage — summary**

| Stage | Primary emphasis | Secondary emphasis | Lower emphasis |
| ----- | ----- | ----- | ----- |
| Undiagnosed but struggling | Overview | Reports, Trends |  |
| Diagnosed but unstable | Overview, Trends | Reports |  |
| Diagnosed and managing | Trends | Overview | Reports |
| Pre-visit / pre-test | Reports | Overview, Trends |  |
| Flare support | Overview, Trends | Reports |  |
| Treatment monitoring | Trends, Overview | Reports |  |
| Maintenance / prevention | Trends | Overview | Reports |

The navigation stays stable, but the emphasis changes by stage.

---

## **What Pattern should not contain**

Pattern should not become:

* a raw analytics dashboard  
* a chart-only surface  
* a duplicate of Track  
* a care plan manager  
* a generic medical diagnosis engine

Pattern should stay focused on:

* interpretation  
* relationships  
* trends  
* confidence-aware summaries  
* clarity on what could clarify uncertainty

---

## **Relationship to the rest of the product**

Pattern connects outward like this:

* **Today** uses Pattern to decide what matters now  
* **Track** feeds Pattern with signal quality  
* **Care** uses Pattern to turn interpretation into action  
* **Chat** should reference Pattern when helping users understand what their data may mean

So Pattern is not isolated.  
It is the interpretation engine for the rest of the app.

---

## **Complete-state mental model for Pattern**

The clearest way to think about Pattern is:

**Pattern \= interpretation \+ time-based understanding \+ reportable summary**

Or more simply:

**Pattern \= the place where users understand what their tracking may actually mean**

---

## **Final internal navigation summary**

Pattern should be structured as:

1. **Overview**  
2. **Trends**  
3. **Reports**

And support shared deeper destinations such as:

* Pattern Detail  
* Trend Detail  
* Report Preview

And the emphasis should shift by stage, while the navigation stays stable.

This is the complete-state internal navigation architecture for the Pattern tab.

# Care

# **Gutsphere Tab Navigation IA — Care**

## **Why this document exists**

This document defines the **internal navigation architecture** for the **Care** tab.

This follows the improved documentation standard, so it covers not only internal navigation, but also:

* the role of Care in the product  
* the jobs Care serves  
* how Care serves different user stages  
* what gets emphasized by stage  
* what should not live inside Care  
* how Care connects to the rest of the product

This document is intentionally focused on:

* complete-state internal navigation  
* jobs-to-be-done by stage  
* product boundaries and hierarchy

This document is intentionally not focused on:

* detailed feature specs  
* exact content of every workflow  
* field-level forms  
* full clinical logic  
* final UI design

---

## **Role of Care in the product**

Care is the **action layer** of Gutsphere.

Its job is to help users turn what they are tracking and learning into useful next steps.

If:

* **Track** is where users capture signals,  
* **Pattern** is where users understand what those signals may mean,

then **Care** is where users act on that understanding.

Care is one of the clearest expressions of Gutsphere as a:

* GI copilot  
* proactive system  
* continuous care layer  
* bridge between self-care and clinical care

---

## **Core jobs of Care**

Care should help users do these jobs:

1. know what to do on their own between visits  
2. follow along with structured support in the moment  
3. prepare for visits, tests, and procedures  
4. organize formal clinician-directed care  
5. reduce confusion across different care steps  
6. connect day-to-day life with the healthcare system

---

## **Complete-state internal navigation for Care**

At the highest level, Care should contain three internal sections:

1. **Self Care**  
2. **Navigation**  
3. **Clinical Care**

That is the complete-state internal navigation structure inside the Care tab.

This split is important because Care is not one thing.  
Users need different kinds of action support:

* what they can do now on their own  
* what they can follow along with right now  
* how to navigate care better  
* how to organize formal treatment and follow-up

---

# **1\. Self Care**

## **Role**

Self Care is the part of Care focused on what the user can do between visits and on their own.

## **Why it exists**

Many GI users need practical help that does not begin and end with clinical appointments.  
They need:

* routines  
* plans  
* safe next steps  
* what to try now  
* what to keep doing  
* what to watch  
* structured support they can actually follow in the moment

Self Care is where Gutsphere becomes useful in everyday life.

## **Complete-state internal navigation inside Self Care**

At the highest level, Self Care should contain these internal sections:

1. **Guided**  
2. **Plans**  
3. **Routines**  
4. **Flare Support**

This is important because Self Care should not only inform users. It should help them **follow along and act**.

---

## **1.1 Guided**

### **Role**

Guided is the follow-along action layer inside Self Care.

### **Why it exists**

If Gutsphere wants to be extremely useful every day, it cannot stop at education or recommendation. It must also help users actually do the thing.

Guided is where users engage with structured supportive experiences such as:

* guided exercises  
* meditations  
* breathing exercises  
* nervous-system calming practices  
* pelvic floor relaxation guidance  
* constipation support routines  
* movement routines  
* sleep wind-down guidance  
* flare-day guided support

### **Navigation behavior**

Examples:

* Care → Self Care → Guided → Breathing Exercise  
* Care → Self Care → Guided → Pelvic Floor Relaxation  
* Care → Self Care → Guided → Flare-Day Calming Routine

### **Important rule**

Guided should be one of the most practically useful everyday surfaces in the whole product.  
It is not just content. It is a follow-along action experience.

---

## **1.2 Plans**

### **Role**

Plans is the structured action-plan layer inside Self Care.

### **Why it exists**

Users often need an organized plan they can follow over time.

Examples of what belongs here conceptually:

* constipation plan  
* food plan  
* hydration plan  
* sleep support plan  
* symptom-calming plan

### **Navigation behavior**

Examples:

* Care → Self Care → Plans → Active Plan  
* Care → Self Care → Plans → Plan Detail

### **Important rule**

Plans should help users follow an organized path over time, not just view recommendations once.

---

## **1.3 Routines**

### **Role**

Routines is the recurring day-to-day habits layer inside Self Care.

### **Why it exists**

Many users need practical, repeatable routines that fit everyday life.

Examples of what belongs here conceptually:

* morning bowel routine  
* meal timing routine  
* hydration routine  
* stress-reduction routine  
* sleep-support routine

### **Navigation behavior**

Examples:

* Care → Self Care → Routines → Morning Routine  
* Care → Self Care → Routines → Routine Detail

### **Important rule**

Routines should feel lightweight and repeatable, not like a heavy treatment plan.

---

## **1.4 Flare Support**

### **Role**

Flare Support is the acute self-care layer inside Self Care.

### **Why it exists**

Users need a place for bad days, symptom spikes, and flare moments.

Examples of what belongs here conceptually:

* what to do now  
* what to try first  
* what to watch  
* when to escalate  
* flare-day guided support

### **Navigation behavior**

Examples:

* Care → Self Care → Flare Support → What To Do Now  
* Care → Self Care → Flare Support → Flare Plan  
* Care → Self Care → Flare Support → When To Escalate

### **Important rule**

Flare Support should be practical, calm, and low-friction.

---

## **What belongs in Self Care**

Self Care should contain user-facing action surfaces such as:

* guided experiences  
* active self-care plans  
* routines  
* flare plans  
* supportive day-to-day guidance  
* practical recommendations

## **Navigation behavior**

Care should open to the most relevant subsection based on user state, but the internal structure remains:

* Care → Self Care → Guided  
* Care → Self Care → Plans  
* Care → Self Care → Routines  
* Care → Self Care → Flare Support

## **Important rule**

Self Care should be practical, ongoing, and supportive.  
It should not try to become the whole healthcare system.

---

# **2\. Navigation**

## **Role**

Navigation is the part of Care focused on helping users move through the healthcare journey more effectively.

## **Why it exists**

This is one of Gutsphere’s strongest differentiators.  
Users with GI issues often struggle with:

* preparing for visits  
* knowing what to bring  
* knowing what questions to ask  
* preparing for tests or procedures  
* turning messy history into something clinician-useful

Navigation exists to reduce wasted visits, shorten the diagnosis journey, and make care interactions more useful.

## **What belongs here**

Navigation should contain action surfaces such as:

* visit prep  
* doctor summary  
* questions builder  
* test prep  
* procedure prep  
* next-step healthcare guidance

## **Navigation behavior**

Examples of movement inside Navigation:

* Care → Navigation → Visit Prep  
* Care → Navigation → Doctor Summary  
* Care → Navigation → Questions Builder  
* Care → Navigation → Test / Procedure Guide

## **Important rule**

Navigation must be deep and excellent.  
If it is thin, one of the biggest strategic strengths of the product weakens.

---

# **3\. Clinical Care**

## **Role**

Clinical Care is the part of Care focused on formal clinician-directed treatment and follow-up.

## **Why it exists**

Once a user is in active clinical care, they often need help organizing:

* treatment plans  
* medications  
* adherence  
* response  
* follow-up steps  
* monitoring

Clinical Care is the home for the formal care layer.

## **What belongs here**

Clinical Care should contain surfaces such as:

* current care plan  
* medication plan  
* treatment plan  
* treatment response  
* follow-up plan  
* clinician-directed next steps

## **Navigation behavior**

Examples of movement inside Clinical Care:

* Care → Clinical Care → Current Care Plan  
* Care → Clinical Care → Medication Plan  
* Care → Clinical Care → Treatment Response  
* Care → Clinical Care → Follow-up Plan

## **Important rule**

Clinical Care should not feel like a placeholder.  
It must become a real organizing layer for formal care, not just a static section.

---

## **Secondary navigation inside Care**

The Care tab therefore has this internal navigation hierarchy:

## **Level 1 — Care tab home**

* Self Care  
* Navigation  
* Clinical Care

## **Level 2 — workflow destination**

From those sections, users move into:

* guided experiences  
* active plans  
* routines  
* flare support flows  
* prep flows  
* summaries  
* treatment plans  
* follow-up workflows

## **Level 3 — deeper execution surfaces**

Inside those, users may move further into:

* specific guided session  
* plan detail  
* routine detail  
* flare detail  
* question list detail  
* summary preview  
* test guide detail  
* treatment response detail

Care should support depth, but the high-level architecture should remain easy to scan.

---

# **Jobs by stage**

This is where we pressure-test the Care structure against real GI user stages.

---

## **1\. Undiagnosed but struggling**

### **Jobs Care serves**

* what can I do now?  
* how do I prepare for the right visit?  
* how do I reduce guessing?  
* how do I gather the right evidence?  
* what guided support can help me act today, not just learn?

### **What gets emphasized**

* **Navigation** should be emphasized first  
* **Self Care** should support day-to-day function while the user is still figuring things out  
* inside Self Care, **Guided** and **Plans** should rise earlier than deeper routine complexity  
* **Clinical Care** should stay lighter until it becomes relevant

### **Why**

For this user, Care should feel like:

* diagnosis journey support  
* prep support  
* actionable next steps  
* guided everyday support

---

## **2\. Diagnosed but unstable**

### **Jobs Care serves**

* what do I do now?  
* how do I manage between visits?  
* when should I escalate?  
* how do I stay organized across self-care and formal care?  
* what guided support can help me regulate, calm, and act during unstable periods?

### **What gets emphasized**

* **Self Care** should be emphasized strongly  
* inside Self Care, **Flare Support** and **Guided** should be highly visible  
* **Clinical Care** should rise when treatment or follow-up is active  
* **Navigation** remains relevant for follow-up visits and tests

### **Why**

This user needs help both with daily action and with knowing when to move toward more formal care.

---

## **3\. Diagnosed and managing**

### **Jobs Care serves**

* how do I stay consistent?  
* how do I keep routines going?  
* how do I organize formal care without overcomplicating life?  
* what guided support helps me follow through more consistently?

### **What gets emphasized**

* **Self Care** should be the main everyday surface  
* inside Self Care, **Routines**, **Plans**, and **Guided** should be strongest  
* **Clinical Care** should support structured follow-up  
* **Navigation** should appear when care events are near

### **Why**

This user often lives mostly in Self Care, with periodic use of Navigation and Clinical Care.

---

## **4\. Pre-visit / pre-test**

### **Jobs Care serves**

* how do I prepare?  
* what should I bring?  
* what questions should I ask?  
* what should I do before and after the test or visit?

### **What gets emphasized**

* **Navigation** should be overwhelmingly first  
* **Self Care** is secondary  
* **Clinical Care** is secondary unless the visit is specifically treatment-focused

### **Why**

This is one of the strongest use cases for Navigation.

---

## **5\. Flare support**

### **Jobs Care serves**

* what should I do now?  
* what can I safely try?  
* when should I escalate?  
* what self-care steps matter most?  
* what guided support can help me in the moment?

### **What gets emphasized**

* **Self Care** should be first  
* inside Self Care, **Flare Support** and **Guided** should be most prominent  
* **Clinical Care** rises if escalation or formal follow-up becomes relevant  
* **Navigation** can support care-event preparation if symptoms persist

### **Why**

Care must support bad days, not just stable periods.

---

## **6\. Treatment monitoring**

### **Jobs Care serves**

* what is my current plan?  
* is treatment helping?  
* what follow-up matters?  
* what should I monitor?

### **What gets emphasized**

* **Clinical Care** should be first  
* **Self Care** should support treatment-adjacent routines  
* **Navigation** should support follow-up logistics

### **Why**

This user needs Care to feel like a formal organizing layer, not just a prep area.

---

## **7\. Maintenance / prevention**

### **Jobs Care serves**

* how do I stay well?  
* what routines matter most?  
* how do I keep the burden low?  
* what guided support helps me stay consistent without overwhelm?

### **What gets emphasized**

* **Self Care** should be the main surface  
* inside Self Care, **Routines** and **Guided** should be strongest  
* **Navigation** and **Clinical Care** should become quieter unless relevant

### **Why**

This user needs a lighter, less medicalized Care experience.

---

# **What gets emphasized by stage — summary**

| Stage | Primary emphasis | Secondary emphasis | Lower emphasis |
| ----- | ----- | ----- | ----- |
| Undiagnosed but struggling | Navigation | Self Care (especially Guided and Plans) | Clinical Care |
| Diagnosed but unstable | Self Care (especially Flare Support and Guided) | Clinical Care | Navigation |
| Diagnosed and managing | Self Care (especially Routines, Plans, Guided) | Clinical Care | Navigation |
| Pre-visit / pre-test | Navigation | Self Care | Clinical Care |
| Flare support | Self Care (especially Flare Support and Guided) | Clinical Care | Navigation |
| Treatment monitoring | Clinical Care | Self Care | Navigation |
| Maintenance / prevention | Self Care (especially Routines and Guided) | Navigation | Clinical Care |

This is important because the internal navigation stays stable, but the emphasis changes by stage.

---

## **What should not live inside Care**

Care should not become:

* a raw tracker surface  
* a generic insight dashboard  
* a generic chat surface  
* an account/settings area

Care should remain focused on:

* action  
* follow-along support  
* plans  
* preparation  
* formal care organization

The boundaries should stay clear:

* **Track** \= capture  
* **Pattern** \= interpretation  
* **Care** \= action  
* **Chat** \= clarification and guidance  
* **Profile** \= stable personal workspace

---

## **Relationship to the rest of the product**

Care connects outward like this:

* **Today** should send users into the right Care subsection when it is the most useful next step  
* **Track** provides the evidence that makes Care more personalized and useful  
* **Pattern** provides interpretation that should inform Care actions  
* **Chat** should help users understand which Care path is most relevant  
* **Profile** can provide supporting context such as care team, lists, and test results

Care is therefore not isolated.  
It is the action layer that turns the rest of the system into something useful.

---

## **Complete-state mental model for Care**

The clearest way to think about Care is:

**Care \= what I can do, what I can follow along with, how I navigate care, and how I organize formal treatment**

Or more simply:

**Care \= the place where Gutsphere helps users act on what they know**

---

## **Final internal navigation summary**

Care should be structured as:

1. **Self Care**  
   * Guided  
   * Plans  
   * Routines  
   * Flare Support  
2. **Navigation**  
3. **Clinical Care**

And the emphasis should shift by stage, while the navigation stays stable.

This is the complete-state internal navigation architecture for the Care tab.

---

# Chat

[https://chatgpt.com/canvas/shared/69cbf68b6fd08191b2b30c6eb60004ae](https://chatgpt.com/canvas/shared/69cbf68b6fd08191b2b30c6eb60004ae) 

# **Gutsphere Tab Navigation IA — Chat**

## **Why this document exists**

This document defines the internal navigation architecture for the Chat tab in Gutsphere.

It follows the improved documentation standard, so it does not only describe internal navigation. It also defines the role of Chat in the overall product, the jobs Chat serves, how Chat should support different user stages, what should and should not live inside Chat, and how Chat connects to the rest of the product.

This document is intentionally focused on complete-state internal navigation, jobs-to-be-done by stage, and product boundaries and hierarchy. It is not focused on final prompt design, AI orchestration details, model behavior, safety implementation specifics, or final visual design.

## **Role of Chat in the product**

Chat is the conversational copilot layer of Gutsphere.

Its job is to help users turn uncertainty into clarity and action.

If Track is where users capture signals, Patterns is where users understand what those signals may mean, and Care is where users act on that understanding, then Chat is where users ask questions, clarify ambiguity, and get guided support across all of it.

Chat is therefore one of the clearest product surfaces expressing Gutsphere as a GI copilot, a multidisciplinary guide, a proactive support layer, and a continuous companion between visits. It is not a generic chatbot bolted onto the product. It is the communication layer across the system.

## **Core job of Chat**

The core job of Chat is simple:

**Help the user talk to the right guide, get clarity, and move toward the right next step.**

That means Chat should help users:

* ask questions in the moment  
* clarify what logs, patterns, and care steps may mean  
* decide what to do next when they are unsure  
* get help navigating tracking, pattern review, and care preparation  
* turn conversation into action instead of only explanation

The purpose of Chat is not to replace Track, Patterns, or Care. Its purpose is to make those surfaces easier to use by helping users understand where to go, what matters most, and what to do next.

## **Core design principle**

Chat should be organized the way humans naturally organize help: as people-like guides they can reach out to.

Users should not have to understand abstract AI modes, hidden orchestration, or technical personas. Instead, Chat should feel like a familiar contact list. Each contact represents a clear kind of support. The user chooses who they want help from, opens a thread, and talks naturally. When they need another perspective, they can summon another guide inside the conversation with `@persona`.

This turns product complexity into a simple human behavior:

**Pick the right guide for the moment.**

That is the key design choice. It makes Chat feel familiar, self-explanatory, personal, flexible, and deep without feeling technical.

## **Final internal navigation architecture**

The complete-state internal navigation for Chat should be:

## **1\. Guides**

## **2\. History**

That is the top-level structure.

This means Chat is not organized around abstract tabs like Ask, Understand, Plan, or Prepare. It is organized around who the user wants help from now, and what conversations they want to revisit later.

## **1\. Guides**

### **Role**

Guides is the primary home of the Chat tab.

It is the live, user-facing contact list of people-like guides the user can message.

### **Why it exists**

Most users do not come to Chat because they want to “use AI.” They come because they need help. They want to ask a question, understand what is happening, figure out what to do next, prepare for a visit, think through a flare, or get another perspective on their data.

Organizing Chat as a guide list makes that help easy to access without exposing technical architecture.

### **What belongs here**

Guides should contain a structured contact list of support roles grouped into clear categories.

#### **General**

These are the most broadly useful, high-frequency guides for everyday use.

* **Gutsphere**  
  The main GI copilot and the default place for most conversations.  
* **My GI Data**  
  Helps users talk to their logs, patterns, history, and changes over time.  
* **Daily Coach**  
  Helps users turn context into action today through next steps, daily follow-through, and lightweight guidance.

#### **Core Specialists**

These provide clinically anchored multidisciplinary depth.

* **GI Specialist**  
* **Motility & Pelvic Floor Specialist**  
* **GI Nutrition Specialist**  
* **Gut-Brain Specialist**  
* **Clinical Care Navigator**  
* **Safety Guide**  
* **Medication & Supplement Guide**  
* **Procedure & Testing Guide**

These should be framed as specialist guides or specialist perspectives, not as literal licensed clinicians. Their job is to help users view the same situation through different expert lenses.

#### **Complementary Specialists**

These provide broader, supportive, and holistic perspectives.

* **Functional Medicine Guide**  
* **Ayurvedic Guide**  
* **Integrative Medicine Guide**  
* **Lifestyle Medicine Guide**  
* **Breathwork & Nervous System Guide**  
* **Movement & Yoga Guide**

These should clearly remain complementary. They should expand the user’s range of support without implying inappropriate clinical authority or replacing formal medical care where needed.

### **Navigation behavior**

A typical flow inside Guides should be:

**Chat → Guides → Select guide → Open thread**

Examples:

* Chat → Guides → Gutsphere  
* Chat → Guides → My GI Data  
* Chat → Guides → GI Nutrition Specialist  
* Chat → Guides → Clinical Care Navigator

Each guide opens into a simple thread view. That thread should feel like a real conversation, not a tool interface.

## **2\. History**

### **Role**

History is the continuity and recall layer inside Chat.

### **Why it exists**

Users may want to revisit previous questions, earlier explanations, care-prep conversations, flare support threads, or treatment-monitoring discussions. History makes Chat feel longitudinal rather than disposable.

### **What belongs here**

History should contain:

* prior conversations  
* grouped conversation threads  
* pinned or saved threads over time  
* easy re-entry into an old conversation

Examples:

* Chat → History → Visit Prep Conversation  
* Chat → History → Flare Support Conversation  
* Chat → History → Treatment Monitoring Conversation

From History, users should be able to reopen a thread, continue it, and route into Track, Patterns, or Care when relevant.

History should support continuity, not become a cluttered archive. Its purpose is resumption, not storage for storage’s sake.

## **Thread experience**

Once the user opens a guide, they should enter a straightforward conversation thread.

That thread should include:

* the active conversation  
* contextual prompts  
* suggested questions  
* route-outs into Track, Patterns, and Care  
* relevant user context when appropriate  
* the ability to summon another guide with `@persona`

The thread should not feel like a generic AI chat box. It should feel grounded in the user’s GI context, history, and current stage. Even if multiple internal agents are involved, the external experience must feel coherent.

The principle is:

**Many internal agents, one coherent Gutsphere voice.**

## **The role of `@persona`**

Inside any conversation, the user should be able to summon another guide with `@persona`.

Examples:

* `@GI Nutrition Specialist do you see any meal timing issues here?`  
* `@Motility & Pelvic Floor Specialist what bowel movement clues matter most?`  
* `@Clinical Care Navigator turn this into questions for my doctor`  
* `@Safety Guide is anything here concerning?`

This allows users to get a lightweight case-conference experience without leaving the thread or switching modes. It preserves simplicity while exposing multidisciplinary depth.

This is one of the strongest parts of the model because it makes the product’s expert system legible in a human-native way.

## **How Chat connects to the rest of the product**

Chat should behave as a clarification and routing layer across the product.

That means:

* **Today** should route users into Chat when they are uncertain and need help deciding what to do next  
* **Track** should be reachable from Chat when logging is the right next step  
* **Patterns** should be reachable from Chat when interpretation is the right next step  
* **Care** should be reachable from Chat when preparation, follow-through, or care organization is the right next step  
* **Profile** should provide stable user context that makes Chat more grounded and useful

The product boundaries should stay clear:

**Track \= capture**  
**Patterns \= interpretation**  
**Care \= action**  
**Chat \= clarification and guided routing**  
**Profile \= stable personal workspace**

## **Jobs Chat serves by stage**

The navigation should stay stable across stages, but the prompts, tone, and routing inside Chat should adapt to the user’s stage.

### **1\. Undiagnosed but struggling**

Chat helps the user answer:

* what should I track next?  
* what could this mean?  
* how do I stop guessing?  
* how do I prepare for my doctor visit?

For this user, Guides should strongly emphasize Gutsphere, My GI Data, and Clinical Care Navigator. The experience should reduce confusion and direct the user toward useful next steps.

### **2\. Diagnosed but unstable**

Chat helps the user answer:

* what changed?  
* what should I do today?  
* how do I think through this flare or unstable period?  
* what should I track right now?

For this user, Gutsphere, Daily Coach, Safety Guide, and the relevant specialist guides should be more prominent.

### **3\. Diagnosed and managing**

Chat helps the user answer:

* is this change meaningful?  
* what should I do next?  
* how do I interpret this without digging through everything manually?

For this user, Chat may be lower-frequency but should remain highly useful. My GI Data and Daily Coach become especially relevant over time.

### **4\. Pre-visit or pre-test**

Chat helps the user answer:

* help me prepare for my visit  
* what questions should I ask?  
* what should I track before this appointment or test?  
* what matters most from my logs?

This is one of the strongest use cases for Chat. Gutsphere, Clinical Care Navigator, and Procedure & Testing Guide should be especially visible.

### **5\. Flare support**

Chat helps the user answer:

* what should I do right now?  
* what should I log right now?  
* when should I escalate?  
* what guided support should I try first?

This is a high-value, high-stakes use case. The thread must remain structured, calm, and safe. Safety Guide, Daily Coach, and the relevant specialist perspectives should be easy to access.

### **6\. Treatment monitoring**

Chat helps the user answer:

* is this treatment helping?  
* what should I keep tracking?  
* could this be a side effect?  
* what should I discuss at follow-up?

Here, My GI Data, Medication & Supplement Guide, and Clinical Care Navigator become especially useful, while History becomes more important because continuity matters.

### **7\. Maintenance or prevention**

Chat helps the user answer:

* what should I watch this week?  
* what seems to be helping?  
* what should I do if things drift again?

This stage should feel lighter and less medicalized. The system should remain helpful without making the user feel like they are in constant management mode.

## **What should not live inside Chat**

Chat should not become:

* a generic AI assistant detached from product context  
* a replacement for Track  
* a replacement for Patterns  
* a replacement for Care workflows  
* an account or settings area

Chat must remain focused on:

* clarification  
* guidance  
* question answering  
* multidisciplinary perspective  
* routing into action

That discipline matters. If Chat tries to swallow the rest of the product, the product will become less legible, not more.

## **Why the contact-list model is the right choice**

A tabbed chat structure such as Ask, Understand, Plan, or Prepare is logically defensible, but it is still product-native rather than human-native.

A contact-list structure is human-native.

People already understand:

* choosing someone to message  
* opening a thread  
* continuing a conversation  
* bringing another perspective into the conversation when needed

That is why the contact-list model should be more intuitive and lower-friction than a more abstract IA. It translates the product’s deeper architecture into a behavior users already know.

## **Naming principle**

Guide names must be self-explanatory.

Good names:

* Gutsphere  
* My GI Data  
* Daily Coach  
* GI Specialist  
* GI Nutrition Specialist  
* Clinical Care Navigator

Bad names:

* Motility Agent  
* Nutrition Persona  
* Behavioral Module  
* Triage Bot

The name should make the guide’s purpose obvious before the user taps it.

## **Custom guides**

Over time, users should be able to create their own guides and add them to the contact list.

But the first version should not allow unconstrained agent creation. A safer and cleaner approach is template-based custom guides.

Examples:

* Low FODMAP Coach  
* Constipation Coach  
* Prep Day Guide  
* Morning Routine Coach

This gives users ownership and personalization while keeping the system understandable and reliable. It also reinforces the idea that they are building their own GI care team in their pocket.

## **Risks**

There are real risks with this model.

The first is too many contacts. If the list becomes too long, it will feel gimmicky and heavy.

The second is overlapping roles. If two guides sound too similar, users will not know who to choose.

The third is fragmented voice. If each guide feels like a different product, trust weakens.

The fourth is false authority. Complementary and specialist guides must be framed carefully.

The fifth is complexity creep. The contact list should hide product complexity, not expose more of it.

## **How to reduce those risks**

We reduce those risks by:

* launching with a small, clear set of guides  
* making each guide’s purpose sharp and distinct  
* maintaining one consistent Gutsphere tone across all guides  
* framing guides as support perspectives, not literal doctors  
* keeping the home surface simple and only exposing deeper power when needed

In practice, that means the first launch should likely prioritize:

* Gutsphere  
* My GI Data  
* Daily Coach  
* GI Specialist  
* GI Nutrition Specialist  
* Clinical Care Navigator  
* Safety Guide

The broader set of specialists can expand over time once the mental model is working. This keeps the product credible and legible from day one.

## **Success criteria**

This model is working if users quickly understand:

* who to talk to  
* what each guide helps with  
* how to bring another guide into the conversation  
* that the system knows their context  
* that Chat helps them move toward a useful next step

It is especially working if users say things like:

* “I knew exactly who to ask.”  
* “It felt like talking to the right person.”  
* “It was easy to get another perspective.”  
* “This feels like a care team, not a chatbot.”

That is the bar.

## **Final recommendation**

Gutsphere should adopt the WhatsApp-style contact-list model for Chat.

The final Chat IA should be:

**Guides \+ History**

Guides is the primary entry point. History provides continuity. Gutsphere is the default primary guide. `@persona` is the depth mechanism that allows another perspective to be pulled into the same thread without breaking the experience.

The core idea is simple:

**People naturally reach out to a person when they need help.**  
**So Gutsphere should organize help as people-like guides users can contact.**

That makes Chat feel natural, structured, and powerful at the same time.

If you want, I can next turn this into a **supporting product memo for the team** or a **canvas-ready prototype spec for the Chat screen, contact list, and thread view**.

# Notifications

# **Gutsphere Tab Navigation IA — Notifications**

## **Why this document exists**

This document defines the **internal navigation architecture** for the **Notifications** area accessed from the top-right bell icon.

This follows the improved documentation standard, so it covers not only internal navigation, but also:

* the role of Notifications in the product  
* the jobs Notifications serves  
* how Notifications serves different user stages  
* what gets emphasized by stage  
* what should not live inside Notifications  
* how Notifications connects to the rest of the product

This document is intentionally focused on:

* complete-state internal navigation  
* jobs-to-be-done by stage  
* product boundaries and hierarchy

This document is intentionally not focused on:

* detailed notification rules  
* exact trigger logic  
* exact cadence or frequency settings  
* final UI design

---

## **Role of Notifications in the product**

Notifications is the **timely nudge and alert layer** of Gutsphere.

Its job is to surface important reminders, updates, and care prompts at the right time so users do not have to remember everything themselves.

If:

* **Today** is the command center,  
* **Track** is capture,  
* **Pattern** is interpretation,  
* **Care** is action,  
* **Chat** is clarification,

then **Notifications** is the lightweight inbox that pulls users back into the right surface when timing matters.

Notifications should not become a noisy engagement machine.  
It should feel like a high-signal support system.

---

## **Core jobs of Notifications**

Notifications should help users do these jobs:

1. remember important next steps  
2. notice meaningful changes or updates  
3. prepare for upcoming care events  
4. avoid missing critical or high-value actions  
5. re-enter the app in the right place at the right time

---

## **Complete-state internal navigation for Notifications**

At the highest level, Notifications should contain three internal sections:

1. **Reminders**  
2. **Updates**  
3. **Care Alerts**

That is the complete-state internal navigation structure inside Notifications.

This split is important because not every notification is the same type:

* some help the user remember a task  
* some surface new information  
* some are tied to healthcare timing or urgency

---

# **1\. Reminders**

## **Role**

Reminders is the behavior-support layer inside Notifications.

## **Why it exists**

Users often need help remembering recurring or time-sensitive actions such as:

* logging symptoms  
* following a plan  
* doing a guided routine  
* completing visit prep  
* taking medication

Reminders should support follow-through without becoming nagging.

## **What belongs here**

Reminders should contain notifications such as:

* tracking reminders  
* routine reminders  
* guided-session reminders  
* medication reminders  
* adherence nudges

## **Navigation behavior**

Examples:

* Notifications → Reminders → Log symptoms now  
* Notifications → Reminders → Do your guided breathing session  
* Notifications → Reminders → Take medication

These should route directly into the relevant destination inside:

* Track  
* Care  
* Chat when appropriate

## **Important rule**

Reminders should support useful follow-through, not spam. They should be timely and relevant.

---

# **2\. Updates**

## **Role**

Updates is the information-change layer inside Notifications.

## **Why it exists**

Users need a place where meaningful product-generated updates are surfaced, such as:

* a stronger pattern  
* a new summary  
* a report is ready  
* confidence improved  
* a new result was processed

Updates should make the product feel alive and longitudinal.

## **What belongs here**

Updates should contain notifications such as:

* pattern updates  
* report readiness  
* summary updates  
* result processing updates  
* progress or confidence improvements

## **Navigation behavior**

Examples:

* Notifications → Updates → Pattern updated  
* Notifications → Updates → Doctor summary ready  
* Notifications → Updates → New report available

These should route directly into:

* Pattern  
* Care \> Navigation  
* Profile \> My Resources when relevant

## **Important rule**

Updates should surface meaningful change, not trivial noise.

---

# **3\. Care Alerts**

## **Role**

Care Alerts is the care-timing and higher-importance layer inside Notifications.

## **Why it exists**

Some prompts are more than reminders or updates. They are tied to care events, timelines, or urgency.

Examples:

* upcoming appointment prep  
* colonoscopy prep window  
* follow-up due soon  
* treatment check-in due  
* warning-style prompts to review a flare plan or escalate when appropriate

## **What belongs here**

Care Alerts should contain notifications such as:

* visit prep alerts  
* test/procedure prep alerts  
* follow-up alerts  
* treatment monitoring alerts  
* escalation-oriented alerts where appropriate

## **Navigation behavior**

Examples:

* Notifications → Care Alerts → Visit in 3 days  
* Notifications → Care Alerts → Start colonoscopy prep  
* Notifications → Care Alerts → Review flare plan now

These should route directly into:

* Care \> Navigation  
* Care \> Clinical Care  
* Care \> Self Care  
* Today when the alert belongs in the command center view

## **Important rule**

Care Alerts should be high-signal and time-sensitive. They should feel important without feeling alarming unless truly necessary.

---

## **Secondary navigation inside Notifications**

The Notifications area therefore has this internal navigation hierarchy:

## **Level 1 — Notifications home**

* Reminders  
* Updates  
* Care Alerts

## **Level 2 — specific notification destination**

From Notifications, users move into:

* specific reminder item  
* specific update item  
* specific care alert item

## **Level 3 — linked product surface**

From each notification, users should be routed to the relevant product destination, such as:

* Track  
* Pattern  
* Care  
* Profile / Resources  
* Today

Notifications should therefore behave as a routing layer, not an isolated inbox.

---

# **Jobs by stage**

This is where we pressure-test the Notifications structure against real GI user stages.

---

## **1\. Undiagnosed but struggling**

### **Jobs Notifications serves**

* remind me to track the right things  
* alert me when a pattern or summary becomes more useful  
* remind me to prepare for a visit

### **What gets emphasized**

* **Reminders** should focus on evidence-building  
* **Updates** should surface pattern confidence and summary readiness  
* **Care Alerts** should support visit prep timing

### **Why**

This user benefits from nudges that reduce guessing and help build the right evidence over time.

---

## **2\. Diagnosed but unstable**

### **Jobs Notifications serves**

* remind me to follow the right plan  
* surface relevant changes quickly  
* alert me when care follow-up may matter

### **What gets emphasized**

* **Reminders** and **Care Alerts** become more important  
* **Updates** should surface meaningful pattern change, not noise

### **Why**

This user may need more active support, but notifications must still stay high-signal.

---

## **3\. Diagnosed and managing**

### **Jobs Notifications serves**

* keep me consistent  
* remind me about routines or meds  
* surface meaningful updates only when relevant

### **What gets emphasized**

* **Reminders** are often strongest  
* **Updates** and **Care Alerts** should stay quieter unless relevant

### **Why**

This user needs continuity support more than constant alerts.

---

## **4\. Pre-visit / pre-test**

### **Jobs Notifications serves**

* remind me what to do before the visit or test  
* surface summary readiness  
* remind me what still needs to be completed

### **What gets emphasized**

* **Care Alerts** should be strongest  
* **Updates** should surface report and summary readiness  
* **Reminders** should support final prep tasks

### **Why**

This is one of the strongest use cases for Notifications because timing matters a lot.

---

## **5\. Flare support**

### **Jobs Notifications serves**

* remind me of the right acute steps if needed  
* route me into flare support when relevant  
* surface only the most important prompts

### **What gets emphasized**

* **Care Alerts** may rise when a flare-related action matters  
* **Reminders** should stay minimal and useful  
* **Updates** should not overwhelm the user during acute moments

### **Why**

Notifications should help, not burden, during bad days.

---

## **6\. Treatment monitoring**

### **Jobs Notifications serves**

* remind me about medication and adherence  
* remind me to monitor response  
* alert me when follow-up timing matters

### **What gets emphasized**

* **Reminders** and **Care Alerts** become strongest  
* **Updates** should surface treatment-related summaries or response changes when relevant

### **Why**

This user needs structured timing support around formal care.

---

## **7\. Maintenance / prevention**

### **Jobs Notifications serves**

* lightly remind me about routines or check-ins  
* surface drift only when it matters  
* avoid overburdening me

### **What gets emphasized**

* **Reminders** should be light and low-frequency  
* **Updates** should stay selective  
* **Care Alerts** should be rare unless a real care event is approaching

### **Why**

This user needs a quieter notification system.

---

# **What gets emphasized by stage — summary**

| Stage | Primary emphasis | Secondary emphasis | Lower emphasis |
| ----- | ----- | ----- | ----- |
| Undiagnosed but struggling | Reminders, Updates | Care Alerts |  |
| Diagnosed but unstable | Reminders, Care Alerts | Updates |  |
| Diagnosed and managing | Reminders | Updates, Care Alerts |  |
| Pre-visit / pre-test | Care Alerts | Updates, Reminders |  |
| Flare support | Care Alerts | Reminders | Updates |
| Treatment monitoring | Reminders, Care Alerts | Updates |  |
| Maintenance / prevention | Reminders | Updates | Care Alerts |

The navigation stays stable, but the emphasis changes by stage.

---

## **What should not live inside Notifications**

Notifications should not become:

* a noisy engagement feed  
* a duplicate of Today  
* a second chat inbox  
* a dumping ground for low-value status messages

Notifications should remain focused on:

* timing  
* re-entry  
* useful reminders  
* meaningful updates  
* care-relevant alerts

The boundaries should stay clear:

* **Today** \= command center and ranked feed  
* **Notifications** \= timely inbox for high-signal nudges and alerts

---

## **Relationship to the rest of the product**

Notifications connects outward like this:

* **Today** should often reflect the same priorities as Notifications, but in a richer ranked form  
* **Track** receives users from reminder notifications when logging matters  
* **Pattern** receives users from update notifications when interpretation changed  
* **Care** receives users from care alerts when action or prep matters  
* **Profile** receives users when resources or results need to be reviewed  
* **Chat** may be a destination when a notification is best handled conversationally

Notifications is therefore not isolated.  
It is the timing layer that brings users back into the right surface.

---

## **Complete-state mental model for Notifications**

The clearest way to think about Notifications is:

**Notifications \= the high-signal inbox for timely reminders, meaningful updates, and care alerts**

Or more simply:

**Notifications \= the place that tells users what they should not miss**

---

## **Final internal navigation summary**

Notifications should be structured as:

1. **Reminders**  
2. **Updates**  
3. **Care Alerts**

And the emphasis should shift by stage, while the navigation stays stable.

This is the complete-state internal navigation architecture for Notifications.

---

# Profile

# **Gutsphere Tab Navigation IA — Profile**

## **Why this document exists**

This document defines the **internal navigation architecture** for the **Profile** area accessed from the avatar.

This follows the improved documentation standard, so it covers not only internal navigation, but also:

* the role of Profile in the product  
* the jobs Profile serves  
* how Profile serves different user stages  
* what gets emphasized by stage  
* what should not live inside Profile  
* how Profile connects to the rest of the product

This document is intentionally focused on:

* complete-state internal navigation  
* jobs-to-be-done by stage  
* product boundaries and hierarchy

This document is intentionally not focused on:

* detailed settings fields  
* permissions models  
* exact collaboration workflows  
* final UI design

---

## **Role of Profile in the product**

Profile is the **personal workspace layer** of Gutsphere.

Its job is to organize the user’s stable personal context, support network, resources, integrations, and account needs so the rest of the product can feel more personalized, more grounded, and more longitudinal.

If:

* **Track** is where users capture signals,  
* **Pattern** is where users understand what those signals may mean,  
* **Care** is where users act,  
* **Chat** is where users clarify uncertainty,

then **Profile** is where the user’s stable context, people, resources, and connected systems live.

Profile should not feel like a generic settings drawer.  
It should feel like the user’s personal GI workspace.

---

## **Core jobs of Profile**

Profile should help users do these jobs:

1. define and update their personal care context  
2. organize the people involved in their care and support system  
3. store and revisit important resources such as lists and test results  
4. connect stable systems such as devices and EHR  
5. manage account and support needs without cluttering the rest of the product

---

## **Complete-state internal navigation for Profile**

At the highest level, Profile should contain five internal sections:

1. **Me**  
2. **My Network**  
3. **My Resources**  
4. **Integrations**  
5. **Account**

That is the complete-state internal navigation structure inside Profile.

This split is important because users need different kinds of personal organization:

* their own context  
* their people  
* their saved information  
* their connected systems  
* their account/help needs

---

# **1\. Me**

## **Role**

Me is the personal context layer inside Profile.

## **Why it exists**

The app needs a place where the user’s core GI context and preferences can live in a structured way.

This is one of the most important parts of Profile because it makes the rest of the product more personalized.

## **What belongs here**

Me should contain stable personal surfaces such as:

* Profile  
* Care Context  
* Preferences  
* Settings  
* Notification Settings if they remain grouped under personal preferences

## **Navigation behavior**

Examples:

* Profile → Me → Profile  
* Profile → Me → Care Context  
* Profile → Me → Preferences  
* Profile → Me → Settings

## **Important rule**

Me should not feel like generic account settings only.  
Care Context should be one of the strongest and most important surfaces here.

---

# **2\. My Network**

## **Role**

My Network is the support-and-people layer inside Profile.

## **Why it exists**

GI users often do not navigate their journey alone. They may rely on:

* family  
* caregivers  
* clinicians  
* condition-based communities

This section organizes those relationships.

## **What belongs here**

My Network should contain:

* Family  
* Care Team  
* Communities

## **Navigation behavior**

Examples:

* Profile → My Network → Family  
* Profile → My Network → Care Team  
* Profile → My Network → Communities

## **Important rule**

My Network should support real relationships and support structure.  
It should not become a generic social feed.

---

# **3\. My Resources**

## **Role**

My Resources is the saved-information layer inside Profile.

## **Why it exists**

Users need a stable place to keep important, reusable, and longitudinal materials.

Examples include:

* questions for doctors  
* saved routines  
* checklists  
* test results  
* summaries they want to revisit

## **What belongs here**

My Resources should contain:

* Lists  
* Test Results

This can expand later, but these are the clearest starting surfaces.

## **Navigation behavior**

Examples:

* Profile → My Resources → Lists  
* Profile → My Resources → Test Results

## **Important rule**

My Resources should store useful personal reference material, not become a dumping ground.

---

# **4\. Integrations**

## **Role**

Integrations is the connected-systems layer inside Profile.

## **Why it exists**

If Gutsphere is going to feel continuous and useful beyond manual input, users need a place to connect external systems that make the product more intelligent and less burdensome.

## **What belongs here**

Integrations should contain:

* Devices  
* EHR

This can expand later into other connected systems, but these are the clearest starting surfaces.

## **Navigation behavior**

Examples:

* Profile → Integrations → Devices  
* Profile → Integrations → EHR

## **Important rule**

Integrations should live in Profile because they are stable system-level connections, not daily action surfaces.  
They should support the rest of the product without cluttering Track, Care, or Today.

---

# **5\. Account**

## **Role**

Account is the administrative support layer inside Profile.

## **Why it exists**

Users still need a place for subscription, billing, help, and support, but those surfaces should not dominate the product.

## **What belongs here**

Account should contain:

* Subscription  
* Help

It can expand later into billing, legal, privacy, and support-related items if needed.

## **Navigation behavior**

Examples:

* Profile → Account → Subscription  
* Profile → Account → Help

## **Important rule**

Account should stay lightweight and secondary.  
It should not overpower the personal workspace parts of Profile.

---

## **Secondary navigation inside Profile**

The Profile area therefore has this internal navigation hierarchy:

## **Level 1 — Profile home**

* Me  
* My Network  
* My Resources  
* Integrations  
* Account

## **Level 2 — specific personal destination**

From Profile, users move into:

* Profile  
* Care Context  
* Preferences  
* Family  
* Care Team  
* Communities  
* Lists  
* Test Results  
* Devices  
* EHR  
* Subscription  
* Help

## **Level 3 — deeper detail surfaces**

Inside those destinations, users may move into:

* detail and edit surfaces  
* relationship detail  
* list detail  
* test result detail  
* device connection detail  
* EHR connection detail  
* support/help detail

Profile should support depth, but the top-level architecture should remain clean and calm.

---

# **Jobs by stage**

This is where we pressure-test the Profile structure against real GI user stages.

---

## **1\. Undiagnosed but struggling**

### **Jobs Profile serves**

* define top symptoms and current concerns  
* store diagnostic journey context  
* organize care team and support people  
* save questions and test results as they accumulate

### **What gets emphasized**

* **Me**, especially **Care Context**, should be most important  
* **My Resources** should become useful for lists and results  
* **My Network** should support care team organization  
* **Integrations** stays secondary early on  
* **Account** stays quiet

### **Why**

This user needs Profile to help structure uncertainty without feeling diagnostic or overwhelming.

---

## **2\. Diagnosed but unstable**

### **Jobs Profile serves**

* keep current care context up to date  
* organize clinicians and support people  
* store relevant lists and results  
* maintain a stable personal care record

### **What gets emphasized**

* **Me** remains strong, especially **Care Context**  
* **My Network** becomes more important  
* **My Resources** is highly relevant  
* **Integrations** may become more relevant if device data matters  
* **Account** stays secondary

### **Why**

This user needs Profile to feel current and useful, not static.

---

## **3\. Diagnosed and managing**

### **Jobs Profile serves**

* maintain organized personal context  
* keep support network and resources accessible  
* make the app feel personalized without clutter

### **What gets emphasized**

* **Me** and **My Resources** are strongest  
* **My Network** remains useful  
* **Integrations** is useful when connected devices support continuity  
* **Account** is secondary

### **Why**

This user often needs Profile as a stable personal home rather than a frequent action surface.

---

## **4\. Pre-visit / pre-test**

### **Jobs Profile serves**

* organize care team  
* access saved lists and questions  
* review test results  
* maintain stable clinical context  
* connect and benefit from EHR data when available

### **What gets emphasized**

* **My Resources** becomes especially important  
* **My Network**, especially **Care Team**, rises in relevance  
* **Integrations**, especially **EHR**, becomes more relevant  
* **Me** remains important for Care Context  
* **Account** stays secondary

### **Why**

This user needs Profile as a supporting workspace around active care preparation.

---

## **5\. Flare support**

### **Jobs Profile serves**

* provide access to family, care team, lists, and prior results when needed

### **What gets emphasized**

* **My Network** and **My Resources** may become useful in the background  
* **Integrations** may help if connected records are relevant  
* **Profile** is not the main acute-use surface  
* **Account** remains low priority

### **Why**

Profile is a support surface during flares, not the main place users should go first.

---

## **6\. Treatment monitoring**

### **Jobs Profile serves**

* keep treatment-related context grounded  
* organize care team  
* store results and supporting materials  
* preserve longitudinal personal context  
* connect formal records and device data when relevant

### **What gets emphasized**

* **Me** remains important  
* **My Network** and **My Resources** become highly relevant  
* **Integrations**, especially **EHR** and **Devices**, rises in importance  
* **Account** stays secondary

### **Why**

This user benefits from Profile as a stable organizing layer around formal care.

---

## **7\. Maintenance / prevention**

### **Jobs Profile serves**

* maintain light personal context  
* keep useful resources available  
* avoid unnecessary complexity

### **What gets emphasized**

* **Me** should feel lighter  
* **My Resources** remains useful  
* **My Network** may be less active but still valid  
* **Integrations** can support passive continuity if relevant  
* **Account** stays secondary

### **Why**

This user needs Profile to remain calm and not feel over-medicalized.

---

# **What gets emphasized by stage — summary**

| Stage | Primary emphasis | Secondary emphasis | Lower emphasis |
| ----- | ----- | ----- | ----- |
| Undiagnosed but struggling | Me (especially Care Context) | My Resources, My Network | Integrations, Account |
| Diagnosed but unstable | Me, My Network | My Resources | Integrations, Account |
| Diagnosed and managing | Me, My Resources | My Network, Integrations | Account |
| Pre-visit / pre-test | My Resources, My Network, Integrations | Me | Account |
| Flare support | My Network, My Resources | Me, Integrations | Account |
| Treatment monitoring | Me, My Network, My Resources, Integrations |  | Account |
| Maintenance / prevention | Me, My Resources | My Network, Integrations | Account |

The navigation stays stable, but the emphasis changes by stage.

---

## **What should not live inside Profile**

Profile should not become:

* a second Care tab  
* a second Track tab  
* the main acute-use surface for bad days  
* a generic junk drawer

Profile should remain focused on:

* stable personal context  
* people and support structure  
* saved resources  
* integrations  
* account/support needs

The boundaries should stay clear:

* **Track** \= capture  
* **Pattern** \= interpretation  
* **Care** \= action  
* **Chat** \= clarification and routing  
* **Profile** \= stable personal workspace

---

## **Relationship to the rest of the product**

Profile connects outward like this:

* **Today** can route users toward Profile surfaces when context, people, resources, or connected systems matter  
* **Track** becomes more personalized because of Profile context and integrations  
* **Pattern** becomes more grounded through Care Context, Results, and connected data  
* **Care** can reference Care Team, Lists, Test Results, and EHR context from Profile  
* **Chat** becomes more useful when Profile context and integrations are available

Profile is therefore not isolated.  
It is the background structure that makes the rest of the product more personal and coherent.

---

## **Complete-state mental model for Profile**

The clearest way to think about Profile is:

**Profile \= my context, my people, my resources, my integrations, and my account**

Or more simply:

**Profile \= the stable personal workspace behind the avatar**

---

## **Final internal navigation summary**

Profile should be structured as:

1. **Me**  
   * Profile  
   * Care Context  
   * Preferences  
   * Settings  
2. **My Network**  
   * Family  
   * Care Team  
   * Communities  
3. **My Resources**  
   * Lists  
   * Test Results  
4. **Integrations**  
   * Devices  
   * EHR  
5. **Account**  
   * Subscription  
   * Help

And the emphasis should shift by stage, while the navigation stays stable.

This is the complete-state internal navigation architecture for Profile.

---

# Today

# **Gutsphere Tab Navigation IA — Today**

## **Why this document exists**

This document defines the **internal navigation architecture** for the **Today** tab.

We intentionally left Today for last because Today should not be designed in isolation.  
It should be designed after Track, Pattern, Care, Chat, Profile, and Notifications are clear.

Today is not just a home screen.  
It is the **command center** of Gutsphere.

This document therefore focuses on:

* the role of Today in the product  
* the jobs Today serves  
* the complete-state internal navigation of Today  
* how Today changes by user stage  
* what gets emphasized by stage  
* how Today pulls from the rest of the system

This document is intentionally not focused on:

* final ranking algorithms  
* final card designs  
* exact notification logic  
* final personalization logic implementation  
* final UI visuals

---

## **Role of Today in the product**

Today is the **command center and ranked care feed** of Gutsphere.

Its job is to help users understand:

* what matters now  
* what changed  
* what they should do next  
* what they should continue  
* where they should go in the app

If:

* **Track** is capture,  
* **Pattern** is interpretation,  
* **Care** is action,  
* **Chat** is clarification,  
* **Profile** is stable personal context,  
* **Notifications** is the timely inbox,

then **Today** is the layer that organizes all of that into one dynamic daily operating surface.

Today should not feel like a static dashboard.  
It should feel like a **high-signal ranked GI care feed**.

---

## **Core jobs of Today**

Today should help users do these jobs:

1. know what matters now  
2. know what to do next  
3. continue where they left off  
4. notice meaningful changes  
5. move into the right surface without having to think too hard  
6. feel supported daily without being overwhelmed

---

## **Complete-state internal navigation for Today**

At the highest level, Today should contain these internal layers:

1. **State Header**  
2. **Top Priority Card**  
3. **Ranked Care Feed**

That is the complete-state internal navigation structure inside Today.

This is important because Today is not a tab full of equal sections.  
It is a ranked orchestration layer.

---

# **1\. State Header**

## **Role**

State Header is the orientation layer at the top of Today.

## **Why it exists**

Users should quickly understand:

* what kind of day this is  
* what mode they are in  
* what frame the app is using to organize the rest of Today

Examples of what State Header may communicate:

* symptom-monitoring week  
* flare support mode  
* visit in 3 days  
* treatment check-in day  
* steady week

## **What belongs here**

State Header should contain:

* greeting or lightweight opening context  
* current mode / current state framing  
* high-level orientation for the rest of the feed

## **Navigation behavior**

State Header usually does not need to be deep navigation itself.  
Its job is to orient the user for the rest of Today.

## **Important rule**

State Header should be short, useful, and grounding.  
It should not become a paragraph of text.

---

# **2\. Top Priority Card**

## **Role**

Top Priority Card is the highest-value action or message on Today.

## **Why it exists**

Users should not have to guess what the most useful next step is.

Examples:

* log symptoms after meals today  
* prepare for tomorrow’s GI visit  
* follow your flare support routine now  
* log treatment response today  
* keep your routine going this week

## **What belongs here**

Top Priority Card should contain:

* one primary action or message  
* why it matters now  
* a clear route into the next relevant surface

## **Navigation behavior**

The Top Priority Card should route directly into the next relevant tab or sub-surface.

Examples:

* Today → Top Priority Card → Track  
* Today → Top Priority Card → Care \> Navigation  
* Today → Top Priority Card → Care \> Self Care \> Guided  
* Today → Top Priority Card → Chat

## **Important rule**

There should only be one true top-priority item visible in this slot.  
Today should feel ranked, not cluttered.

---

# **3\. Ranked Care Feed**

## **Role**

Ranked Care Feed is the dynamic stack of cards below the top priority.

## **Why it exists**

Users need more than one thing surfaced, but not everything at once.  
The feed should show the next-most-useful items in descending importance.

## **What belongs here**

The Ranked Care Feed should contain card types such as:

* Must Do Today  
* Important Update  
* Continue Where You Left Off  
* Relevant Care Surface  
* Pattern To Review  
* Guided Support  
* Chat Prompt  
* Recent Activity

These are not necessarily always shown together. What appears and how high it ranks should change by stage and context.

## **Navigation behavior**

Each feed card should route directly into the most relevant surface.

Examples:

* Today → Must Do Today → Track  
* Today → Important Update → Pattern Detail  
* Today → Continue Where You Left Off → Care \> Navigation  
* Today → Guided Support → Care \> Self Care \> Guided  
* Today → Chat Prompt → Chat  
* Today → Recent Activity → Entry Detail

## **Important rule**

This feed should be:

* dynamic in content  
* stable in logic

It should feel fresh and current without feeling random or chaotic.

---

## **Secondary navigation inside Today**

The Today tab therefore has this internal navigation hierarchy:

## **Level 1 — Today tab home**

* State Header  
* Top Priority Card  
* Ranked Care Feed

## **Level 2 — specific destination card**

From Today, users move into:

* Track destinations  
* Pattern destinations  
* Care destinations  
* Chat  
* entry detail  
* resource or summary destinations when relevant

## **Level 3 — deeper execution surfaces**

From those destinations, users go into the deeper flows already defined in the other tabs.

This is important because Today is not the final destination for most workflows.  
It is the orchestration and routing layer.

---

# **Jobs by stage**

This is where we pressure-test Today against real GI user stages.

---

## **1\. Undiagnosed but struggling**

### **Jobs Today serves**

* what should I track next?  
* what matters most today?  
* how do I reduce guessing?  
* how do I prepare for diagnosis and a better visit?

### **What gets emphasized**

* evidence-building next steps  
* missing-signal prompts  
* pattern confidence progress  
* visit prep continuation  
* chat prompts for uncertainty reduction

### **Why**

This user needs Today to feel like a diagnosis-journey guide, not just a daily dashboard.

---

## **2\. Diagnosed but unstable**

### **Jobs Today serves**

* what changed?  
* what should I do today?  
* what should I monitor?  
* what should I continue?

### **What gets emphasized**

* must-do cards  
* care mode visibility  
* high-signal updates  
* self-care continuation  
* route into flare-aware support when needed

### **Why**

This user needs Today to help them manage instability without overload.

---

## **3\. Diagnosed and managing**

### **Jobs Today serves**

* how do I stay on track?  
* what is the one useful thing today?  
* what changed, if anything?  
* what should I continue?

### **What gets emphasized**

* continuity  
* routine support  
* one high-value next step  
* recent activity and light updates

### **Why**

This user needs a low-friction command center for continuity.

---

## **4\. Pre-visit / pre-test**

### **Jobs Today serves**

* what still needs to be done before my visit?  
* what should I track before the appointment?  
* is my summary ready?  
* what should I review now?

### **What gets emphasized**

* visit/test countdown  
* summary readiness  
* prep tasks  
* questions and doctor summary continuation  
* care alerts reflected in the feed

### **Why**

This is one of the strongest use cases for Today because it can prioritize time-sensitive preparation clearly.

---

## **5\. Flare support**

### **Jobs Today serves**

* what should I do right now?  
* what should I log right now?  
* when should I escalate?  
* what guided or self-care support matters first?

### **What gets emphasized**

* flare-state banner or top framing  
* immediate next step  
* acute tracking prompt  
* flare support route  
* escalation-aware card  
* chat prompt for structured support

### **Why**

This is one of Today’s most important gaps to solve. The command center must be useful in bad moments, not only stable ones.

---

## **6\. Treatment monitoring**

### **Jobs Today serves**

* what should I log about treatment today?  
* is follow-up coming up?  
* what should I continue monitoring?  
* what changed since treatment started?

### **What gets emphasized**

* treatment response check-in  
* medication/adherence reminder or continuation  
* treatment-related pattern updates  
* route into Clinical Care

### **Why**

This user needs Today to feel treatment-aware, not only trigger-aware.

---

## **7\. Maintenance / prevention**

### **Jobs Today serves**

* how do I stay steady?  
* what one useful routine matters today?  
* is anything drifting?  
* how do I keep the burden low?

### **What gets emphasized**

* lighter routine support  
* calm stability messaging  
* drift detection if needed  
* low-burden check-ins

### **Why**

This user needs Today to remain useful without feeling heavy or over-medicalized.

---

# **What gets emphasized by stage — summary**

| Stage | Primary emphasis | Secondary emphasis | Lower emphasis |
| ----- | ----- | ----- | ----- |
| Undiagnosed but struggling | What to track next, diagnosis progress | Pattern confidence, prep continuation | Recent activity |
| Diagnosed but unstable | Must-do now, what changed, self-care continuation | Pattern updates, care mode | Low-priority history |
| Diagnosed and managing | Continuity, one next step | Light updates, recent activity | Heavy prep surfaces |
| Pre-visit / pre-test | Countdown, prep tasks, summary readiness | Track-before-visit prompts | Routine-only cards |
| Flare support | Do this now, acute logging, flare support | Escalation awareness, chat | Broad historical review |
| Treatment monitoring | Treatment response, adherence, follow-up | Pattern updates, clinical care route | Low-value generic reminders |
| Maintenance / prevention | Light routine, stability, drift | Optional check-ins | Heavy acute or clinical surfaces |

The structure stays stable, but the ranking and prominence change by stage.

---

## **What should not live inside Today**

Today should not become:

* a giant static dashboard  
* a duplicate of Notifications  
* a raw tracker catalog  
* a full pattern review surface  
* a full care workflow surface  
* a dumping ground for every possible card

Today should remain focused on:

* prioritization  
* ranking  
* orchestration  
* daily guidance  
* routing to the right deeper surface

The boundaries should stay clear:

* **Today** \= command center and ranked care feed  
* **Notifications** \= timely inbox  
* **Track** \= capture  
* **Pattern** \= interpretation  
* **Care** \= action  
* **Chat** \= clarification

---

## **Relationship to the rest of the product**

Today connects outward like this:

* **Track** is often the destination when Today decides logging is the next best step  
* **Pattern** is often the destination when Today surfaces interpretation or review  
* **Care** is often the destination when Today surfaces action, self-care, prep, or clinical next steps  
* **Chat** is often the destination when Today surfaces uncertainty or guided decision support  
* **Profile** may be referenced when context, resources, team, or results matter  
* **Notifications** often reflect similar priorities, but Today should organize them into a richer ranked view

Today is therefore not isolated.  
It is the orchestration layer that makes the rest of the product feel coherent.

---

## **Complete-state mental model for Today**

The clearest way to think about Today is:

**Today \= the ranked GI command center that tells the user what matters now, what changed, and what to do next**

Or more simply:

**Today \= the dynamic command center of Gutsphere**

---

## **Final internal navigation summary**

Today should be structured as:

1. **State Header**  
2. **Top Priority Card**  
3. **Ranked Care Feed**  
   * Must Do Today  
   * Important Update  
   * Continue Where You Left Off  
   * Relevant Care Surface  
   * Pattern To Review  
   * Guided Support  
   * Chat Prompt  
   * Recent Activity

And the emphasis should shift by stage through:

* ranking  
* card type prominence  
* routing  
* tone  
* urgency

while the command-center structure stays stable.

This is the complete-state internal navigation architecture for the Today tab.
