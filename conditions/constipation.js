export default {
  persona: {
    name: 'Bimal',
    initials: 'BM',
    fullName: 'Bimal Maharjan',
    profileDesc: 'Stable personal workspace',
    stage: 'Diagnosis investigation',
    stageNote: "Here's what matters now.",
    focus: 'Constipation focus',
    visitNote: 'GI visit in 3 days',
  },

  entries: {
    bm: { title:'Bowel movement', subtitle:'Strong urge, nothing came out · 8:20 AM', icon:'poop', details:[['Urge','8/10'],['Strain','6/10'],['Pain','3/10'],['Time','5 min']] },
    food: { title:'Food', subtitle:'Oatmeal, banana, tea · 9:05 AM', icon:'utensils', details:[['Meal','Breakfast'],['Foods','Oatmeal, banana, tea'],['Tags','Light meal, caffeine'],['Time','9:05 AM']] },
  },

  patterns: {
    'compound-sequence': {
      title: 'Late dinner + poor sleep sequence',
      subtitle: 'When both happen on the same day, the next morning tends to be significantly worse.',
      confidence: 76,
      chip: 'green', chipLabel: 'Strong evidence',
      bars: [45,55,85,50,92,48,88,55,90,52,86,60,90,55],
      summary: 'When late dinner (after 8 PM) and short sleep (under 6 hours) happen on the same night, the following morning shows incomplete evacuation and higher strain in 9 out of 11 instances. Interestingly, neither factor alone produces this effect at the same strength — it appears to be the combination that matters.',
      factors: [
        ['utensils','Late dinner + short sleep combo','Strong compound signal','var(--green)','76%','#D1FAE5'],
        ['utensils','Late dinner alone','Weaker alone','#F59E0B','28%','#FEF3C7'],
        ['moon','Short sleep alone','Weaker alone','#F59E0B','34%','#FEF3C7'],
        ['brain','Stress on same day','May amplify','var(--text-hint)','18%','var(--sand-light)'],
      ],
      clarify: ['Continue tracking to see if the pattern holds over 6 weeks','Note whether meal size matters alongside timing','Track whether the sequence affects day 2 as well'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'gastro',
    },
    'late-meals': {
      title: 'Late meals and symptoms',
      subtitle: 'Symptoms may be worse on days with later dinners.',
      confidence: 28,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [20,50,85,40,90,25,75],
      summary: 'Symptoms appear more often on days with later dinners, but more consistent logging is needed to confirm this.',
      factors: [
        ['utensils','Dinner timing','Strong signal','var(--coral)','65%','var(--coral-glow)'],
        ['droplets','Low hydration days','Moderate signal','#F59E0B','40%','#FEF3C7'],
        ['moon','Poor sleep nights','Weak signal','var(--text-hint)','20%','var(--sand-light)'],
        ['brain','High stress days','Uncertain','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log dinner timing for 7 days','Log symptoms after dinner','Track hydration alongside meals'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'patterns',
    },
    'sleep-gut': {
      title: 'Poor sleep and morning strain',
      subtitle: 'Morning bowel difficulty may be worse after poor sleep.',
      confidence: 42,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [30,65,45,80,35,70,90,50,75],
      summary: 'On nights with fewer than 6 hours of sleep, you report more straining and incomplete evacuation the following morning. The signal is moderate but growing.',
      factors: [
        ['moon','Sleep duration','Strong signal','var(--coral)','58%','var(--coral-glow)'],
        ['brain','Evening stress','Moderate signal','#F59E0B','35%','#FEF3C7'],
        ['utensils','Late dinner','Contributing','#F59E0B','28%','#FEF3C7'],
        ['activity','No evening movement','Weak signal','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log sleep duration consistently for 10 days','Rate morning strain after each bowel attempt','Track evening wind-down routine'],
      trackAction: "nav('track');openSheet('sleep')",
      chatGuide: 'psychology',
    },
    'hydration-bowel': {
      title: 'Hydration and bowel consistency',
      subtitle: 'Lower hydration days may precede harder stools.',
      confidence: 18,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [15,40,25,60,20,45,30],
      summary: 'On days where you log fewer than 5 glasses of water, the following day\'s bowel movements tend to be harder and less complete. This is a new signal that needs more data.',
      factors: [
        ['droplets','Daily water intake','Early signal','#F59E0B','32%','#FEF3C7'],
        ['utensils','Fibre intake','Uncertain','var(--text-hint)','18%','var(--sand-light)'],
        ['activity','Movement level','Weak signal','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log hydration daily for 2 weeks','Track stool consistency alongside hydration','Note caffeine vs water ratio'],
      trackAction: "nav('track');openSheet('hydration')",
      chatGuide: 'nutrition',
    },
    'stress-variability': {
      title: 'Stress and symptom variability',
      subtitle: 'High-stress days show more unpredictable symptoms.',
      confidence: 22,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [35,55,70,25,80,40,65,30],
      summary: 'On days you rate stress above 6/10, your symptom reports are more variable — bloating, urgency, and incomplete evacuation appear in less predictable combinations. The pattern is early.',
      factors: [
        ['brain','Stress rating','Early signal','#F59E0B','38%','#FEF3C7'],
        ['moon','Sleep quality','Contributing','var(--text-hint)','22%','var(--sand-light)'],
        ['utensils','Irregular meals','Uncertain','var(--text-hint)','14%','var(--sand-light)'],
      ],
      clarify: ['Log stress rating daily for 2 weeks','Note what kind of stress (work, social, physical)','Track symptoms within 4 hours of high-stress events'],
      trackAction: "nav('track');openSheet('mental')",
      chatGuide: 'psychology',
    },
    'movement-morning': {
      title: 'Movement and morning outcomes',
      subtitle: 'Light activity may correlate with better morning bowel function.',
      confidence: 15,
      chip: 'amber', chipLabel: 'Very early',
      bars: [20,35,50,25,45,30,55],
      summary: 'On days with 15+ minutes of light activity (walking, stretching), the following morning\'s bowel attempt tends to be more complete. Very few data points so far.',
      factors: [
        ['activity','Daily movement','Early signal','#F59E0B','25%','#FEF3C7'],
        ['utensils','Meal timing','Uncertain','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log daily movement for 2 weeks','Track morning bowel outcomes alongside','Note timing of activity (morning vs evening)'],
      trackAction: "nav('track');openSheet('movement')",
      chatGuide: 'functional',
    },
  },

  sheetTitles: {
    quick: 'Quick Add',
    symptom: 'Log symptom',
    food: 'Log food',
    meds: 'Log medication',
    note: 'Add note',
    hydration: 'Log hydration',
    sleep: 'Log sleep',
    mental: 'Log mental health',
    movement: 'Log energy & movement',
    menstrual: 'Log menstrual health',
    allergy: 'Track food sensitivity',
    fasting: 'Track fasting',
    biometrics: 'Update biometrics',
    treatment: 'Track treatment adherence',
    results: 'Add test results',
  },

  guides: [
    { group: 'Your Guides', items: [
      { id: 'copilot', name: 'GI Copilot', desc: 'Your main GI copilot for any question', icon: 'sparkles', color: 'neutral' },
      { id: 'track', name: 'Track Guide', desc: 'Help with what and how to log', icon: 'penLine', color: 'neutral' },
      { id: 'patterns', name: 'Patterns Guide', desc: 'Understand your trends and signals', icon: 'barChart', color: 'neutral' },
      { id: 'selfcare', name: 'Self Care Guide', desc: 'Daily habits, plans, and flare support', icon: 'heart', color: 'neutral' },
      { id: 'clinicalnav', name: 'Clinical Navigation Guide', desc: 'Visit prep, questions, and next steps', icon: 'compass', color: 'neutral' },
      { id: 'clinicalcare', name: 'Clinical Care Guide', desc: 'Treatment, meds, and follow-up', icon: 'steth', color: 'neutral' },
    ]},
    { group: 'Specialist Guides', items: [
      { id: 'gastro', name: 'Gastroenterology Guide', desc: 'Clinically anchored GI perspective', icon: 'steth', color: 'neutral' },
      { id: 'nutrition', name: 'Nutrition Guide', desc: 'Diet, triggers, and meal timing', icon: 'utensils', color: 'neutral' },
      { id: 'pelvic', name: 'Pelvic Floor Guide', desc: 'Motility, strain, and pelvic floor support', icon: 'activity', color: 'neutral' },
      { id: 'psychology', name: 'GI Psychology Guide', desc: 'Gut-brain connection and mental health', icon: 'brain', color: 'neutral' },
      { id: 'functional', name: 'Functional Medicine Guide', desc: 'Root-cause and systems perspective', icon: 'leaf', color: 'neutral' },
      { id: 'ayurveda', name: 'Ayurveda Guide', desc: 'Traditional Ayurvedic perspective', icon: 'flower', color: 'neutral' },
      { id: 'pharmacy', name: 'Pharmacy Guide', desc: 'Medications, interactions, and adherence', icon: 'pill', color: 'neutral' },
    ]},
    { group: 'Group Chats', items: [
      { id: 'multiguide', name: 'Multi-Guide Chat', desc: 'Bring multiple guides into one conversation', icon: 'users', color: 'neutral' },
      { id: 'careteam', name: 'Care Team Chat', desc: 'Coordinate with your care team', icon: 'steth', color: 'neutral' },
      { id: 'family', name: 'Family / Caregiver Chat', desc: 'Share context with family and caregivers', icon: 'heart', color: 'neutral' },
      { id: 'custom', name: 'Custom Group Chat', desc: 'Create your own group conversation', icon: 'msgCircle', color: 'neutral' },
    ]},
  ],

  guideData: {
    copilot: {
      intro: 'Your main GI copilot. Ask anything about your symptoms, patterns, what to do next, or how to prepare for care.',
      focuses: ['Symptom interpretation','Next best step','Visit preparation','Pattern clarification','Routing to the right guide'],
      prompts: ['What should I log next?','Explain this pattern','Help me prepare for my visit','What should I do now?'],
      userMsg: 'What should I log next?',
      assistantMsg: 'Based on your recent logs, the most useful thing right now would be to log symptoms after your meals today. Your data shows a late-meal pattern forming but it needs more data points to reach useful confidence. After logging, check Pattern to see if the signal strengthens.',
      routeOuts: [['Track symptoms',"nav('track');openSheet('symptom')"],['View patterns',"nav('patterns')"]],
    },
    track: {
      intro: 'Helps you figure out what to track, when, and why — so every log moves you toward useful answers.',
      focuses: ['What to log next','Tracking consistency','Signal gaps','Logging priority','Building evidence'],
      prompts: ['What should I log right now?','Help me track more consistently','What signals am I missing?','Which logs matter most?'],
      userMsg: 'What signals am I missing?',
      assistantMsg: 'You\'ve been consistent with bowel and food logs, which is great. The gap right now is symptom timing — you\'re logging symptoms but not always after meals, which makes it harder to connect food to how you feel. Try logging symptoms within 2 hours of eating for the next few days.',
      routeOuts: [['Log symptoms',"nav('track');openSheet('symptom')"],['Continue tracking',"nav('track');setSegment('track','continue')"]],
    },
    patterns: {
      intro: 'Helps you understand what your data means — trends, relationships, and what\'s becoming clearer or more uncertain.',
      focuses: ['Pattern interpretation','Signal strength','What\'s changing','Confidence levels','Data relationships'],
      prompts: ['What does my recent data show?','Compare this week to last week','Which patterns are strengthening?','What\'s still uncertain?'],
      userMsg: 'What does my recent data show?',
      assistantMsg: 'Over the last 14 days, your strongest signal is the late-meal pattern — symptoms appear more often on days you eat dinner after 8 PM. It\'s at 28% confidence and climbing. Your sleep-gut signal is weaker and needs more consistent sleep logging to clarify.',
      routeOuts: [['View pattern detail',"nav('patterns');navSub('pattern-detail')"],['Track dinner timing',"nav('track');openSheet('food')"]],
    },
    selfcare: {
      intro: 'Supports your daily habits, guided plans, flare management, and practical self-care between appointments.',
      focuses: ['Daily routines','Guided exercises','Flare support','Habit building','Self-management'],
      prompts: ['What should I focus on today?','Help me with my routine','What\'s my next best step?','I\'m having a bad day'],
      userMsg: 'I\'m having a bad day',
      assistantMsg: 'I\'m sorry you\'re struggling. Let\'s start with what you can do right now. A 5-minute breathing exercise can help calm your nervous system, which research suggests can influence gut motility. After that, log how you\'re feeling so we can track whether these flare days cluster with anything specific.',
      routeOuts: [['Flare support',"nav('care');setSegment('care','self');setSegment('self','flare')"],['Breathing exercise',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    clinicalnav: {
      intro: 'Helps you prepare for visits, build questions, organise your data for doctors, and navigate the clinical system.',
      focuses: ['Visit preparation','Doctor questions','Summary generation','Test preparation','Referral guidance'],
      prompts: ['Help me prepare for my visit','What questions should I ask?','Turn my patterns into a summary','What should I bring up?'],
      userMsg: 'Help me prepare for my visit',
      assistantMsg: 'Your GI visit is in 3 days. Based on your logs, the top things to discuss are: your constipation pattern with incomplete evacuation, the late-meal signal, and whether pelvic floor testing might help. I can generate a doctor-ready summary from your data and help you build a question list.',
      routeOuts: [['Visit prep',"nav('care');setSegment('care','navigation');navSub('visit')"],['View summary',"nav('patterns');setSegment('patterns','trends')"]],
    },
    clinicalcare: {
      intro: 'Helps you organise treatment plans, track medication adherence, monitor treatment response, and coordinate follow-up.',
      focuses: ['Treatment tracking','Medication adherence','Response monitoring','Follow-up planning','Care coordination'],
      prompts: ['Is my treatment helping?','What should I track for follow-up?','Review my medication adherence','What changed since I started treatment?'],
      userMsg: 'Is my treatment helping?',
      assistantMsg: 'You\'re on day 10 of 30 for your current treatment. Looking at your logs, bowel frequency has improved slightly (from 2/week to 3/week) but strain levels haven\'t changed yet. It\'s still early — most GI treatments take 4-6 weeks to show full effect. Keep logging so we can give your doctor a clear before-and-after picture.',
      routeOuts: [['Treatment timeline',"nav('care');setSegment('care','clinical')"],['Log treatment',"nav('track');openSheet('treatment')"]],
    },
    gastro: {
      intro: 'Provides a gastroenterology perspective on your symptoms, patterns, and clinical questions.',
      focuses: ['GI symptom interpretation','Differential considerations','Test guidance','Red flag assessment','Clinical context'],
      prompts: ['What could be causing this?','Should I be concerned?','What tests might help?','Is this pattern typical?'],
      userMsg: 'What could be causing this constipation pattern?',
      assistantMsg: 'Constipation with strong urge but incomplete evacuation can have several explanations. The most common include pelvic floor dyssynergia (muscles not coordinating properly), slow-transit constipation, or outlet obstruction. Your late-meal timing pattern is interesting — it suggests motility may be part of the picture. A gastroenterologist might consider anorectal manometry testing to check pelvic floor function.',
      routeOuts: [['View patterns',"nav('patterns')"],['Prepare for visit',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
    nutrition: {
      intro: 'Provides guidance on diet, food triggers, meal timing, and how nutrition relates to your GI symptoms.',
      focuses: ['Food-symptom connections','Meal timing','Dietary strategies','Trigger identification','Nutritional support'],
      prompts: ['Are there foods I should avoid?','Help me with meal timing','Review my food-symptom patterns','What diet changes might help?'],
      userMsg: 'Help me with meal timing',
      assistantMsg: 'Your data shows a clear signal: symptoms are worse on days you eat dinner after 8 PM. This is common — late meals may slow gastric motility and contribute to morning constipation. You might consider moving dinner to before 7 PM for the next week and log the results. Also, eating your largest meal earlier in the day may help your system process food more effectively.',
      routeOuts: [['Log food',"nav('track');openSheet('food')"],['View food patterns',"nav('patterns');setSegment('patterns','connections')"]],
    },
    pelvic: {
      intro: 'Provides guidance on pelvic floor function, evacuation mechanics, and exercises that support bowel health.',
      focuses: ['Pelvic floor function','Evacuation support','Straining reduction','Coordination exercises','Motility support'],
      prompts: ['Help with straining','What pelvic floor exercises help?','Why can\'t I fully evacuate?','Is my posture affecting this?'],
      userMsg: 'Why can\'t I fully evacuate even with a strong urge?',
      assistantMsg: 'Strong urge with incomplete evacuation can sometimes be associated with pelvic floor dyssynergia — where your pelvic floor muscles tighten instead of relaxing when you try to go. This is a well-recognized pattern that many people find manageable with the right support. Diaphragmatic breathing on the toilet, proper positioning (feet elevated, lean forward), and pelvic floor relaxation exercises may help. If it persists, biofeedback therapy is often recommended and may be effective.',
      routeOuts: [['Pelvic floor exercises',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log bowel movement',"openEntry('bm')"]],
    },
    psychology: {
      intro: 'Explores the gut-brain connection — how stress, anxiety, and mental health affect your GI symptoms and what to do about it.',
      focuses: ['Gut-brain axis','Stress-symptom links','Nervous system regulation','Cognitive patterns','Emotional wellbeing'],
      prompts: ['How does stress affect my gut?','Help me understand the gut-brain connection','What calming techniques help?','Is anxiety making this worse?'],
      userMsg: 'How does stress affect my gut?',
      assistantMsg: 'Research suggests stress may directly influence gut motility through the gut-brain axis. When you\'re stressed, your nervous system shifts into fight-or-flight mode, which can slow digestion, increase sensitivity to pain, and worsen constipation. Your data shows higher symptom variability on high-stress days. Regular nervous system calming — even 5 minutes of diaphragmatic breathing — may help support gut function over time.',
      routeOuts: [['Breathing exercise',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log stress',"nav('track');openSheet('mental')"]],
    },
    functional: {
      intro: 'Offers a root-cause, systems-level perspective on your GI health — looking at the bigger picture beyond individual symptoms.',
      focuses: ['Root-cause thinking','Systems perspective','Lifestyle factors','Holistic context','Integrative approach'],
      prompts: ['What root causes should I explore?','How do my systems connect?','What lifestyle factors matter?','What am I missing?'],
      userMsg: 'What root causes should I explore?',
      assistantMsg: 'Looking at your full picture — constipation, late meals, moderate stress, inconsistent sleep — there are several interconnected factors. Sleep quality affects cortisol, which affects motility. Late meals reduce overnight digestive rest. Stress compounds both. A functional approach would focus on stabilising sleep and meal timing first, then assessing whether digestive support (like magnesium or fibre adjustments) helps.',
      routeOuts: [['View all connections',"nav('patterns');setSegment('patterns','connections')"],['Daily habits',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    ayurveda: {
      intro: 'Provides a traditional Ayurvedic perspective on digestion, lifestyle balance, and natural approaches to gut health.',
      focuses: ['Digestive fire (Agni)','Constitutional balance','Lifestyle rhythm','Natural remedies','Seasonal guidance'],
      prompts: ['What does Ayurveda say about constipation?','How can I improve my digestive fire?','What daily routine helps?'],
      userMsg: 'What does Ayurveda say about constipation?',
      assistantMsg: 'In Ayurveda, In Ayurvedic tradition, constipation is often viewed through the lens of Vata imbalance — dryness, irregularity, and cold qualities in the digestive system. Traditional suggestions you might explore include warm water first thing in the morning, regular meal timing (your late dinners would be seen as Vata-aggravating), warm cooked foods over raw, and self-massage with warm oil. Consistency in routine is traditionally regarded as particularly important for Vata-type constipation.',
      routeOuts: [['Morning routine',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log hydration',"nav('track');openSheet('hydration')"]],
    },
    pharmacy: {
      intro: 'Provides guidance on medications, supplements, interactions, and adherence — helping you understand what you\'re taking and why.',
      focuses: ['Medication review','Side effects','Drug interactions','Supplement guidance','Adherence support'],
      prompts: ['Could this be a side effect?','Check my interactions','Should I adjust timing?','What supplements might help?'],
      userMsg: 'Could this be a side effect?',
      assistantMsg: 'Several common medications may contribute to or worsen constipation — including certain antacids, iron supplements, and some antidepressants. If you\'ve recently started or changed any medication, that\'s worth flagging with your doctor. Log your medication timing alongside symptoms so we can look for temporal correlations.',
      routeOuts: [['Log medication',"nav('track');openSheet('meds')"],['Treatment plan',"nav('care');setSegment('care','clinical')"]],
    },
  },

  screens: {
    // Today screen
    todayGreeting: 'Good morning, Bimal',
    todaySubtitle: "Diagnosis investigation · Here's what matters now.",
    todayStatePills: [
      { icon: 'activity', text: '2 of 5 signals' },
      { icon: 'calendar', text: 'Visit in 3 days', urgent: true },
      { text: 'Visit prep active' },
    ],
    todayTopPriority: {
      title: 'Top priority',
      subtitle: 'Log symptoms after meals today to reduce uncertainty and strengthen pattern confidence.',
      action: "nav('track');setSegment('track','quick');openSheet('symptom')",
      ctaText: 'Do this now',
    },
    todayFeed: [
      { icon: 'thermom', title: 'Must do today', subtitle: "Log symptoms to strengthen today's signal", action: "nav('track');openSheet('symptom')" },
      { icon: 'compass', title: 'Continue where you left off', subtitle: 'Visit prep and doctor questions partially complete', action: "nav('care');setSegment('care','navigation');navSub('visit')" },
      { icon: 'trendUp', title: 'New discovery', subtitle: 'A compound pattern may explain your worst mornings', action: "nav('patterns');openPattern('compound-sequence')" },
      { icon: 'wind', title: 'Guided support', subtitle: 'Do your 5-minute calming routine', action: "nav('care');setSegment('care','self');setSegment('self','habits')" },
      { icon: 'msgCircle', title: 'Chat prompt', subtitle: 'Ask what to track next or how to prepare', action: "nav('chat')" },
      { icon: 'clock', title: 'Recent activity', subtitle: 'Bowel movement logged at 8:20 AM', action: "openEntry('bm')" },
    ],

    // Track screen
    quickGrid: [
      ['poop','Bowel',"openEntry('bm')"],['thermom','Symptoms',"openSheet('symptom')"],['utensils','Nutrition',"openEntry('food')"],
      ['droplets','Hydration',"openSheet('hydration')"],['moon','Sleep',"openSheet('sleep')"],['brain','Stress & Mood',"openSheet('mental')"],
      ['activity','Movement',"openSheet('movement')"],['pill','Meds & Supps',"openSheet('meds')"],['flower','Period',"openSheet('menstrual')"],
      ['fileText','Notes',"openSheet('note')"],
    ],
    mainTrackers: [
      ['poop','Bowel Movement','Highest-value signal for your constipation journey',"openEntry('bm')"],
      ['thermom','Symptoms','Track symptom timing and severity',"openSheet('symptom')"],
      ['utensils','Nutrition','Track meals, timing, and food-response context',"openEntry('food')"],
    ],

    continueTrackers: {
      groups: [
        { label: 'Resume Incomplete', items: [
          ['utensils','Finish logging breakfast','You started but didn\'t add details',"openEntry('food')"],
        ]},
        { label: 'Suggested Next Log', items: [
          ['thermom','Add symptoms after breakfast','Best next signal to separate meal timing from stress',"openSheet('symptom')"],
          ['utensils','Track dinner timing tonight','Strengthen your current late-meal pattern',"openSheet('food')"],
        ]},
        { label: 'In-Progress Tracking', items: [
          ['steth','Log treatment response','Useful when treatment monitoring is active',"openSheet('treatment')"],
        ]},
      ],
    },

    recentEntries: {
      groups: [
        { label: 'Today', items: [
          ['poop','Bowel movement','Strong urge, nothing came out · 8:20 AM',"openEntry('bm')"],
          ['utensils','Food','Oatmeal, banana, tea · 9:05 AM',"openEntry('food')"],
          ['thermom','Symptoms','Not logged yet today',"openSheet('symptom')"],
        ]},
        { label: 'Yesterday', items: [
          ['poop','Bowel movement','Incomplete evacuation · 7:45 AM',"openEntry('bm')"],
          ['utensils','Food','Pasta, salad · 7:30 PM',"openEntry('food')"],
          ['thermom','Symptoms','Bloating 5/10 · 8:15 PM',"openSheet('symptom')"],
        ]},
        { label: 'This Week', items: [
          ['moon','Sleep','6.5 hours average · 3 entries',"openSheet('sleep')"],
          ['brain','Stress & Mood','Moderate stress · 2 entries',"openSheet('mental')"],
        ]},
      ],
    },

    moreTrackers: {
      groups: [
        { label: 'Daily Foundations', items: [
          ['pill','Medication & Supplements','Track adherence and timing',"openSheet('meds')"],
          ['brain','Mental Health','Stress and mood context for gut patterns',"openSheet('mental')"],
          ['activity','Energy & Movement','Movement and energy to support gut health',"openSheet('movement')"],
        ]},
        { label: 'Specialised Context', items: [
          ['flower','Menstrual / Hormonal','Cycle context that may affect symptoms',"openSheet('menstrual')"],
          ['shield','Food Sensitivity & Allergy','Track reactions and food-response context',"openSheet('allergy')"],
          ['timer','Fasting','Track fasting patterns and metabolic context',"openSheet('fasting')"],
          ['heartPulse','Biometrics & Demographics','Update personal health context',"openSheet('biometrics')"],
        ]},
        { label: 'Care & Evidence', items: [
          ['steth','Treatment Adherence','Track clinician-directed care',"openSheet('treatment')"],
          ['testTube','Test Results','Add or review tests and reports',"openSheet('results')"],
        ]},
      ],
    },

    entryContext: [
      ['utensils','Breakfast logged','45 minutes later',"openEntry('food')"],
      ['thermom','No symptom logged yet','Add symptoms to strengthen the pattern',"openSheet('symptom')"],
    ],

    // Patterns screen
    patternHero: {
      title: 'Late dinner + poor sleep \u2192 next-day flare',
      subtitle: 'Neither factor alone is as strong. The combination appears to matter most.',
      chip: 'green',
      chipLabel: 'Strong evidence',
      bars: [45,55,85,50,92,48,88,55,90,52,86,60,90,55],
      confidence: 76,
      confidenceColor: 'var(--green)',
      action: "openPattern('compound-sequence')",
      signalRows: [
        { color: 'green', label: 'Difficult mornings after combo nights', value: '9 of 11' },
        { color: 'muted', label: 'Late dinner alone \u2192 difficult morning', value: '3 of 8' },
        { color: 'muted', label: 'Short sleep alone \u2192 difficult morning', value: '4 of 9' },
      ],
    },

    patternFeed: {
      groups: [
        { label: 'Strongest Patterns', items: [
          ['moon','Late dinner + poor sleep sequence','Strong evidence \u00b7 compound signal',"openPattern('compound-sequence')"],
        ]},
        { label: 'Active Patterns', items: [
          ['utensils','Late meals \u2192 worse symptoms','Low confidence \u00b7 tracking in progress',"openPattern('late-meals')"],
          ['moon','Poor sleep \u2192 morning strain','Moderate confidence \u00b7 10 data points',"openPattern('sleep-gut')"],
        ]},
        { label: 'New Signals', items: [
          ['droplets','Hydration gaps \u2192 harder stools','Very early \u00b7 needs more data',"openPattern('hydration-bowel')"],
          ['brain','Stress \u2192 symptom variability','Early signal \u00b7 8 data points',"openPattern('stress-variability')"],
        ]},
        { label: 'Strengthening', items: [
          ['trendUp','Sleep-gut signal growing','Confidence up from 30% to 42%',"openPattern('sleep-gut')"],
        ]},
        { label: 'What Changed', items: [
          ['refresh','Movement signal weakened','Less consistent tracking this week',"openPattern('movement-morning')"],
        ]},
      ],
    },

    patternConnections: [
      ['utensils','Food \u2192 Symptoms','Late meals cluster with worse symptom days',"openPattern('late-meals')"],
      ['poop','Bowel Movement \u2192 Symptoms','Incomplete evacuation linked to afternoon bloating',"openPattern('late-meals')"],
      ['moon','Sleep \u2192 Gut','Poor sleep nights precede harder mornings',"openPattern('sleep-gut')"],
      ['brain','Stress / Mood \u2192 Gut','High stress days show more symptom variability',"openPattern('stress-variability')"],
      ['activity','Movement \u2192 Gut','Light activity correlates with better mornings',"openPattern('movement-morning')"],
      ['pill','Medication \u2192 Symptoms','Supplement response still uncertain',"openPattern('late-meals')"],
    ],

    patternExperiments: [
      ['utensils','Early dinner experiment','Track dinner before 7 PM for 7 days',"nav('track');setSegment('track','continue')"],
      ['droplets','Hydration experiment','Track 8 glasses daily for 5 days',"nav('track');setSegment('track','continue')"],
    ],

    patternTrends: [
      ['thermom','Symptom Trends','Bloating frequency over 30 days'],
      ['poop','Bowel Trends','Completeness and strain over 14 days'],
      ['utensils','Nutrition Trends','Meal timing and composition patterns'],
      ['moon','Daily Foundations Trends','Sleep, hydration, and movement'],
    ],
    patternTrendsChart: {
      bars: [40,55,80,65,90,50,20,60,75,45,85,25,70,95],
    },

    patternReports: [
      ['clipList','Weekly Summary','This week at a glance'],
      ['calendar','Monthly Summary','30-day pattern overview'],
      ['compass','Visit-Ready Summary','Formatted for your doctor',"nav('care');setSegment('care','navigation');navSub('visit')"],
      ['clock','Pattern History','How patterns have evolved over time'],
    ],

    // Care screen
    careHabits: [
      { icon: 'wind', name: 'Breathing exercise', meta: '5 min \u00b7 Nervous system calming', tag: 'Recommended now' },
      { icon: 'sunrise', name: 'Morning bowel routine', meta: 'Hydration, walk, and timed attempt' },
      { icon: 'yoga', name: 'Pelvic floor relaxation', meta: '6 min \u00b7 Strain and evacuation support' },
      { icon: 'moon', name: 'Sleep support routine', meta: 'Wind-down guidance and sleep consistency' },
    ],

    carePlans: [
      ['clipList','Constipation plan','Week 2 of 4 \u00b7 3 tasks remaining'],
      ['utensils','Food plan','Track tolerance during the current plan'],
      ['droplets','Hydration plan','Build consistent daily hydration'],
    ],

    careFlare: [
      { icon: 'alertTri', name: 'What to do now', meta: 'Immediate self-care steps' },
      { icon: 'wind', name: 'Calming routine', meta: '5 min \u00b7 Guided support you can follow right now' },
      { icon: 'shield', name: 'When to escalate', meta: 'Know when self-care is no longer enough' },
    ],

    careRecs: [
      ['utensils','Try earlier dinners','Your data suggests late meals may worsen symptoms'],
      ['droplets','Increase hydration','Low hydration days correlate with harder mornings'],
      ['wind','Add daily breathing','Nervous system support may help gut motility'],
    ],

    careExperiments: [
      ['utensils','Early dinner experiment','Track dinner before 7 PM for 7 days',"nav('track');setSegment('track','continue')"],
      ['droplets','Hydration challenge','Track 8 glasses daily for 5 days',"nav('track');setSegment('track','continue')"],
      ['activity','Morning walk experiment','Walk 15 min before breakfast for 7 days',"nav('track');setSegment('track','continue')"],
    ],

    careNavItems: [
      ['clipList','Prepare for Visit','Checklist, summary, and questions',"navSub('visit')"],
      ['helpCircle','Questions for Doctor','Organise your main concerns',"navSub('visit')"],
      ['testTube','Tests & Procedures','Prep, instructions, and reminders'],
      ['compass','Referrals & Specialists','Track referrals and specialist visits'],
      ['fileText','Visit Summaries','Review and export past visit notes'],
    ],

    careClinical: {
      timeline: [
        { status: 'done', title: 'Initial consultation', sub: 'Completed \u00b7 2 weeks ago' },
        { status: 'active', title: 'Treatment started', sub: 'In progress \u00b7 Day 10 of 30' },
        { status: '', title: 'Follow-up visit', sub: 'Scheduled \u00b7 In 18 days' },
        { status: '', title: 'Treatment review', sub: 'Pending \u00b7 After follow-up', last: true },
      ],
      items: [
        ['clipList','Treatment Plan','Current plan details and goals'],
        ['pill','Medications & Adherence','Track clinician-directed treatment'],
        ['calendar','Follow-Up Plan','Next check-ins and monitoring priorities'],
        ['users','Care Team Coordination','Coordinate across your care team'],
        ['testTube','Results & Interpretation','Lab results, tests, and what they mean'],
      ],
    },

    // Visit prep
    visitPrep: {
      title: 'Visit preparation',
      subtitle: 'GI appointment in 3 days',
      stepsTotal: 4,
      stepsDone: 3,
      checklist: [
        { label: 'Define main concern', done: true },
        { label: 'Write questions to ask', done: true },
        { label: 'Review doctor summary', done: false },
        { label: 'Export or print summary', done: false },
      ],
      mainConcern: 'Constipation with strong urge, but incomplete evacuation. Worsening over the past 3 weeks.',
      questions: [
        'What could cause strong urge with nothing coming out?',
        'Should I be concerned about the straining?',
        'What should I track before my next visit?',
      ],
      summaryNote: 'Auto-generated from your logs and patterns. 3 patterns, 14 days of data.',
    },

    // Chat screen
    chatConversations: [
      ['compass','Visit prep conversation','Continued 2 hours ago'],
      ['trendUp','Pattern clarification','Yesterday'],
      ['pill','Treatment check-in','3 days ago'],
      ['sparkles','General GI questions','Last week'],
    ],

    // Notifications
    notifications: {
      action: [
        { group: 'Red Flags', items: [
          { icon: 'alertTri', title: 'Unusual symptom pattern', sub: 'New pain location reported \u2014 review with your doctor', time: 'Today', unread: true, urgent: true },
        ]},
        { group: 'Pattern Changes', items: [
          { icon: 'trendUp', title: 'Pattern confidence changed', sub: 'Late meals signal strengthened to 28%', time: 'Today', action: "nav('patterns');openPattern('late-meals')", unread: true },
        ]},
        { group: 'Care Tasks Due', items: [
          { icon: 'thermom', title: 'Log symptoms', sub: "Strengthen today's signal before dinner", time: '2:30 PM', action: "nav('track');openSheet('symptom')", unread: true },
        ]},
        { group: 'Medication & Supplements', items: [
          { icon: 'pill', title: 'Evening medication', sub: 'Evening dose reminder', time: '7:00 PM', action: "openSheet('meds')" },
        ]},
        { group: 'Visits & Tests Due', items: [
          { icon: 'calendar', title: 'GI visit in 3 days', sub: 'Continue your prep \u2014 3 of 4 steps complete', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true, urgent: true },
        ]},
        { group: 'Missing Important Data', items: [
          { icon: 'poop', title: 'No bowel log yesterday', sub: 'Filling gaps improves pattern accuracy', time: 'Yesterday', action: "openEntry('bm')" },
        ]},
      ],
      updates: [
        { group: 'Pattern Updates', items: [
          { icon: 'trendUp', title: 'Weekly pattern summary', sub: '3 patterns tracked, 1 strengthened', time: 'Today', action: "nav('patterns')", unread: true },
        ]},
        { group: 'Results & Reports', items: [
          { icon: 'clipList', title: 'Doctor summary ready', sub: 'Preview your updated report', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Shared & Network Updates', items: [
          { icon: 'users', title: 'Care team update', sub: 'Dr. Singh viewed your summary', time: '2 days ago' },
        ]},
        { group: 'Integrations', items: [
          { icon: 'watch', title: 'Apple Health sync', sub: 'Sleep and activity data updated', time: 'Today' },
        ]},
        { group: 'Product & Account', items: [
          { icon: 'sparkles', title: 'New feature available', sub: 'Experiments are now in Patterns', time: '3 days ago' },
        ]},
      ],
      inbox: [
        { type: 'time-group', label: 'Today' },
        { icon: 'alertTri', title: 'Unusual symptom pattern', sub: 'Review with your doctor', time: '10:30 AM', unread: true, urgent: true },
        { icon: 'trendUp', title: 'Pattern confidence changed', sub: 'Late meals signal at 28%', time: '11:20 AM', action: "nav('patterns');openPattern('late-meals')", unread: true },
        { icon: 'thermom', title: 'Log symptoms', sub: "Strengthen today's signal", time: '2:30 PM', action: "nav('track');openSheet('symptom')" },
        { type: 'time-group', label: 'Yesterday' },
        { icon: 'poop', title: 'Morning bowel check-in', sub: 'Log your morning attempt', time: '8:00 AM' },
        { icon: 'wind', title: 'Guided breathing session', sub: 'Complete your calming routine', time: '1:00 PM' },
      ],
    },

    // Profile sections
    profileSections: [
      ['My Profile', [['user','Personal Profile','Name, age, and personal info'],['heartPulse','Health Profile','Current health context'],['clipList','Conditions & History','Diagnoses and medical history'],['target','Goals','What you want to achieve'],['sliders','Preferences','App behaviour and defaults']]],
      ['My Network', [['users','Family & Caregivers','Shared support network'],['steth','Care Team','Doctors and clinicians'],['heart','Support Network','Trusted people in your care'],['globe','Communities','Peer spaces and groups'],['repeat','Sharing & Collaboration','Control what you share']]],
      ['My Resources', [['fileText','Records & Documents','Medical records and uploads'],['list','Saved Resources','Saved articles, guides, and notes']]],
      ['My Integrations', [['watch','Apple Health / Wearables','Connected devices and sensors'],['hospital','EHR Connection','Clinical record systems'],['testTube','Labs / Test Imports','Import lab and test data'],['pill','Pharmacy / Medication Data','Connected pharmacy data'],['globe','Connected Apps','Third-party app connections']]],
      ['My Settings', [['lock','Privacy & Data','Control your data and privacy'],['creditCard','Subscription & Billing','Plan and payment'],['helpCircle','Help & Support','Get help and guidance']]],
    ],
  },
};
