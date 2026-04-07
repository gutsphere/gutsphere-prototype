export default {
  persona: {
    name: 'Taylor',
    initials: 'TK',
    fullName: 'Taylor Kim',
    profileDesc: 'New to gut health tracking',
    stage: 'Getting started',
    stageNote: "Symptoms for ~3 months. Here's how to start.",
    focus: 'General gut health',
    visitNote: 'GI appointment in 1 week',
  },

  entries: {
    bm: { title:'Bowel movement', subtitle:'Varied consistency, some discomfort \u00b7 8:45 AM', icon:'poop', details:[['Type','Bristol 3-5'],['Discomfort','4/10'],['Regularity','Variable'],['Time','10 min']] },
    food: { title:'Food', subtitle:'Cereal, milk, orange juice \u00b7 8:00 AM', icon:'utensils', details:[['Meal','Breakfast'],['Foods','Cereal, milk, orange juice'],['Tags','Mixed, dairy, acidic'],['Time','8:00 AM']] },
  },

  patterns: {
    'food-sensitivity': {
      title: 'Possible food sensitivities emerging',
      subtitle: 'Some foods may be triggering discomfort, but the signal is still early.',
      confidence: 25,
      chip: 'amber', chipLabel: 'Early signal',
      bars: [20,35,55,30,60,25,45],
      summary: 'On days when you eat dairy or acidic foods, you report more discomfort in the hours that follow. The connection is still early and needs more consistent food logging to confirm whether specific foods are responsible or whether timing and quantity matter more.',
      factors: [
        ['utensils','Dairy intake','Early signal','#F59E0B','25%','#FEF3C7'],
        ['utensils','Acidic foods','Uncertain','var(--text-hint)','18%','var(--sand-light)'],
        ['droplets','Hydration with meals','Weak signal','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log all meals for 7 days with details','Note discomfort within 2 hours of eating','Try removing one suspect food for 2\u20133 weeks and compare'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'irregular-habits': {
      title: 'Irregular eating and symptom timing',
      subtitle: 'Inconsistent meal timing may be contributing to unpredictable symptoms.',
      confidence: 30,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [25,50,40,65,30,55,35],
      summary: 'Your meal timing varies significantly from day to day. On days with more regular spacing between meals, your symptoms tend to be milder. This could be a meaningful signal but needs more consistent logging to separate from other factors.',
      factors: [
        ['utensils','Meal timing consistency','Early signal','#F59E0B','30%','#FEF3C7'],
        ['clock','Gap between meals','Uncertain','var(--text-hint)','20%','var(--sand-light)'],
        ['brain','Daily routine stability','Weak signal','var(--text-hint)','14%','var(--sand-light)'],
      ],
      clarify: ['Log meal times consistently for 10 days','Note gaps longer than 5 hours between meals','Track whether skipping meals affects symptoms'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'mixed-symptoms': {
      title: 'Multiple overlapping symptoms',
      subtitle: 'Several symptoms appear together, making it harder to isolate triggers.',
      confidence: 18,
      chip: 'amber', chipLabel: 'Very early',
      bars: [15,30,45,20,50,25,40],
      summary: 'You report bloating, discomfort, and irregular bowel movements in overlapping patterns. It is not yet clear whether these share a single trigger or represent separate issues. More granular symptom logging will help separate the signals.',
      factors: [
        ['thermom','Bloating frequency','Early signal','#F59E0B','22%','#FEF3C7'],
        ['thermom','Discomfort timing','Uncertain','var(--text-hint)','16%','var(--sand-light)'],
        ['poop','Bowel variability','Weak signal','var(--text-hint)','10%','var(--sand-light)'],
      ],
      clarify: ['Log each symptom separately when they occur','Rate severity for each symptom individually','Note which symptom appears first in a cluster'],
      trackAction: "nav('track');openSheet('symptom')",
      chatGuide: 'gastro',
    },
    'stress-gut': {
      title: 'Stress and general gut discomfort',
      subtitle: 'Higher stress days tend to coincide with more gut symptoms.',
      confidence: 35,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [30,55,70,40,75,35,60,45],
      summary: 'On days you rate stress above 5/10, you report more bloating, discomfort, and irregular bowel movements. The gut-brain connection is well established in research, and your data is starting to show a personal version of this link. More consistent stress and symptom logging will clarify the strength.',
      factors: [
        ['brain','Daily stress level','Moderate signal','#F59E0B','35%','#FEF3C7'],
        ['moon','Sleep quality','Contributing','var(--text-hint)','22%','var(--sand-light)'],
        ['utensils','Stress eating patterns','Uncertain','var(--text-hint)','15%','var(--sand-light)'],
        ['activity','Physical activity','Weak signal','var(--text-hint)','10%','var(--sand-light)'],
      ],
      clarify: ['Log stress rating daily for 2 weeks','Note gut symptoms within 4 hours of stressful events','Track whether exercise on stressful days changes outcomes'],
      trackAction: "nav('track');openSheet('mental')",
      chatGuide: 'psychology',
    },
    'sleep-digestion': {
      title: 'Sleep quality and digestive comfort',
      subtitle: 'Poor sleep nights may precede days with more gut discomfort.',
      confidence: 22,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [20,40,55,30,60,25,50],
      summary: 'On nights with fewer than 6 hours of sleep or poor sleep quality, the following day shows slightly more digestive discomfort. The signal is early and needs more consistent sleep logging to confirm.',
      factors: [
        ['moon','Sleep duration','Early signal','#F59E0B','22%','#FEF3C7'],
        ['brain','Evening stress','Contributing','var(--text-hint)','18%','var(--sand-light)'],
        ['utensils','Late eating','Uncertain','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log sleep duration and quality for 10 days','Rate digestive comfort the following morning','Track evening habits that may affect sleep'],
      trackAction: "nav('track');openSheet('sleep')",
      chatGuide: 'psychology',
    },
    'hydration-comfort': {
      title: 'Hydration and overall gut comfort',
      subtitle: 'Lower hydration days may correlate with more gut discomfort.',
      confidence: 15,
      chip: 'amber', chipLabel: 'Very early',
      bars: [15,30,20,45,25,35,20],
      summary: 'On days where you log fewer than 5 glasses of water, you tend to report slightly more bloating and discomfort the following day. This is a very new signal with limited data points.',
      factors: [
        ['droplets','Daily water intake','Early signal','#F59E0B','15%','#FEF3C7'],
        ['utensils','Food moisture content','Uncertain','var(--text-hint)','10%','var(--sand-light)'],
      ],
      clarify: ['Log hydration daily for 2 weeks','Track gut comfort alongside hydration','Note caffeine and alcohol intake separately'],
      trackAction: "nav('track');openSheet('hydration')",
      chatGuide: 'nutrition',
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
      intro: 'Your main GI copilot. Ask anything about your symptoms, patterns, what to do next, or how to prepare for your first appointment.',
      focuses: ['Symptom interpretation','Getting started guidance','Visit preparation','What to track first','Routing to the right guide'],
      prompts: ['What should I track first?','Help me understand my symptoms','How do I prepare for my GI visit?','What does this pattern mean?'],
      userMsg: 'What should I track first?',
      assistantMsg: 'Great question. Since you\'re just getting started, focus on three things: bowel movements, meals, and how you feel after eating. Log these consistently for a week and your patterns will start to emerge. Don\'t worry about being perfect \u2014 even partial logs help build your baseline.',
      routeOuts: [['Start tracking',"nav('track');openSheet('symptom')"],['View guides',"nav('chat')"]],
    },
    track: {
      intro: 'Helps you figure out what to track, when, and why \u2014 especially important when you\'re just getting started.',
      focuses: ['What to log first','Building tracking habits','Signal gaps','Logging priority','Creating a baseline'],
      prompts: ['What should I log first?','How often should I track?','Am I logging enough?','What\'s most important to track?'],
      userMsg: 'What should I log first?',
      assistantMsg: 'Start with the basics: bowel movements and meals. Log every bowel movement (even if it seems normal) and every meal with approximate timing. After 3\u20135 days of this, we\'ll have enough to start spotting early signals. Once that feels natural, add symptom logs after meals.',
      routeOuts: [['Log bowel movement',"openEntry('bm')"],['Log food',"openEntry('food')"]],
    },
    patterns: {
      intro: 'Helps you understand what your data means \u2014 even when you\'re early in your tracking journey.',
      focuses: ['Early pattern detection','What signals mean','Building confidence','Data relationships','Baseline context'],
      prompts: ['What do my first logs show?','Is this enough data?','What patterns should I look for?','What\'s still unclear?'],
      userMsg: 'What do my first logs show?',
      assistantMsg: 'You\'re in the early stages, which is completely normal. Your first few logs show some variability in bowel consistency and a possible connection between stress and gut discomfort. Keep logging for another week \u2014 most patterns need 7\u201314 days of data to become meaningful.',
      routeOuts: [['View early signals',"nav('patterns')"],['Keep tracking',"nav('track');openSheet('symptom')"]],
    },
    selfcare: {
      intro: 'Supports your daily habits, guided plans, and practical self-care as you begin your gut health journey.',
      focuses: ['Building daily routines','Beginner habits','Comfort measures','Habit formation','Self-management basics'],
      prompts: ['What habits should I start with?','How do I build a routine?','What can I do for discomfort?','What\'s the simplest first step?'],
      userMsg: 'What habits should I start with?',
      assistantMsg: 'Start simple: a daily check-in where you note how your gut feels, consistent meal timing, and drinking enough water. These three habits give you a foundation to build on. Don\'t try to change everything at once \u2014 pick one habit and do it for a week before adding another.',
      routeOuts: [['Daily habits',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Getting started plan',"nav('care');setSegment('care','self');setSegment('self','plans')"]],
    },
    clinicalnav: {
      intro: 'Helps you prepare for your first GI visit \u2014 what to bring, what to say, and what to expect.',
      focuses: ['First visit preparation','Describing symptoms to a doctor','What to expect','Building a question list','Organising your data'],
      prompts: ['Help me prepare for my first visit','What should I tell my doctor?','What questions should I ask?','What will the doctor want to know?'],
      userMsg: 'Help me prepare for my first visit',
      assistantMsg: 'Your GI appointment is in 1 week \u2014 that\'s great timing to prepare. Your doctor will want to know: how long you\'ve had symptoms, what they feel like, what makes them better or worse, and any patterns you\'ve noticed. I can help you organise your logs into a summary and build a question list so you make the most of your visit.',
      routeOuts: [['Visit prep',"nav('care');setSegment('care','navigation');navSub('visit')"],['Build question list',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
    clinicalcare: {
      intro: 'Helps you understand treatment options, track what your doctor recommends, and monitor how things are going.',
      focuses: ['Understanding treatment options','Tracking recommendations','Response monitoring','Follow-up planning','Care coordination'],
      prompts: ['What might my doctor suggest?','How do I track treatment?','What should I monitor?','How long until I see improvement?'],
      userMsg: 'What might my doctor suggest?',
      assistantMsg: 'That depends on what your doctor finds. Common first steps include a thorough history, dietary review, basic blood work, and possibly further testing depending on what your doctor finds. The most helpful thing you can do now is bring clear data about your symptoms \u2014 your logs will give your doctor a much better starting point.',
      routeOuts: [['Track treatment',"nav('track');openSheet('treatment')"],['View care plan',"nav('care');setSegment('care','clinical')"]],
    },
    gastro: {
      intro: 'Provides a gastroenterology perspective on your symptoms and helps you understand what might be going on.',
      focuses: ['GI symptom interpretation','Common conditions','When to worry','Test guidance','Clinical context'],
      prompts: ['What could be causing my symptoms?','Should I be concerned?','What tests might help?','Is this normal?'],
      userMsg: 'What could be causing my general gut discomfort?',
      assistantMsg: 'General gut discomfort with variable symptoms can have many explanations \u2014 from dietary factors and stress to functional or structural conditions that your doctor can evaluate. The fact that your symptoms are variable and overlap is actually useful information. Your doctor will likely want to rule out common causes first. Your food and symptom logs will be very helpful in narrowing things down.',
      routeOuts: [['View patterns',"nav('patterns')"],['Prepare for visit',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
    nutrition: {
      intro: 'Provides guidance on diet, food triggers, and how nutrition relates to your gut symptoms.',
      focuses: ['Food-symptom connections','What to eat','Trigger identification','Meal timing basics','Starting a food diary'],
      prompts: ['Could food be causing my symptoms?','What should I eat?','How do I find my triggers?','Help me start a food diary'],
      userMsg: 'How do I find my food triggers?',
      assistantMsg: 'The best way to find triggers is consistent food logging alongside symptom tracking. Log everything you eat with timing, then note any symptoms within 2\u20134 hours. After a week, we can start looking for connections. Common triggers include dairy, gluten, high-FODMAP foods, and acidic foods \u2014 but everyone is different, which is why your personal data matters most. Don\'t eliminate major food groups without discussing with your doctor first \u2014 your doctor may want a clean dietary baseline for testing.',
      routeOuts: [['Log food',"nav('track');openSheet('food')"],['View food patterns',"nav('patterns');setSegment('patterns','connections')"]],
    },
    pelvic: {
      intro: 'Provides guidance on pelvic floor function and how it relates to bowel health and comfort.',
      focuses: ['Pelvic floor basics','Bowel mechanics','Posture and positioning','Relaxation techniques','When to seek specialist help'],
      prompts: ['What is the pelvic floor?','Could this affect my symptoms?','What exercises help?','How does posture matter?'],
      userMsg: 'Could my pelvic floor be affecting my gut symptoms?',
      assistantMsg: 'It\'s possible. The pelvic floor plays a key role in bowel function \u2014 both in evacuation and in comfort. If you experience straining, incomplete emptying, or pelvic discomfort, the pelvic floor could be contributing. Simple things like proper toilet posture (feet elevated, leaning forward) and diaphragmatic breathing can help. If symptoms persist, a pelvic floor physiotherapist can assess further.',
      routeOuts: [['Posture tips',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log bowel movement',"openEntry('bm')"]],
    },
    psychology: {
      intro: 'Explores the gut-brain connection \u2014 how stress, anxiety, and mental health affect your GI symptoms and what to do about it.',
      focuses: ['Gut-brain axis basics','Stress-symptom links','Nervous system regulation','Building awareness','Emotional wellbeing'],
      prompts: ['How does stress affect my gut?','Is anxiety making this worse?','What calming techniques help?','Why does my gut react to stress?'],
      userMsg: 'How does stress affect my gut?',
      assistantMsg: 'Stress has a direct, physical effect on your gut through the gut-brain axis. When you\'re stressed, your nervous system can speed up or slow down digestion, increase gut sensitivity, and trigger bloating or discomfort. Your early data suggests a connection between higher stress days and more gut symptoms. Tracking stress alongside symptoms will help clarify how strong this link is for you personally.',
      routeOuts: [['Log stress',"nav('track');openSheet('mental')"],['Breathing exercise',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    functional: {
      intro: 'Offers a root-cause, systems-level perspective on your GI health \u2014 looking at how everything connects.',
      focuses: ['Root-cause thinking','Systems perspective','Lifestyle factors','Holistic context','Where to start'],
      prompts: ['What could be the root cause?','How do my symptoms connect?','What lifestyle factors matter?','Where should I start?'],
      userMsg: 'Where should I start looking for root causes?',
      assistantMsg: 'With general gut issues, the best starting point is building a clear picture of your daily patterns: what you eat, when you eat, how you sleep, and your stress levels. These four pillars \u2014 nutrition, timing, sleep, and stress \u2014 interact with each other and with your gut. Your first week of tracking will help identify which area to focus on first. Most people find that one or two of these pillars have the strongest influence on their symptoms.',
      routeOuts: [['View connections',"nav('patterns');setSegment('patterns','connections')"],['Daily habits',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    ayurveda: {
      intro: 'Provides a traditional Ayurvedic perspective on digestion, lifestyle balance, and natural approaches to gut health.',
      focuses: ['Digestive fire (Agni)','Constitutional balance','Lifestyle rhythm','Natural remedies','Seasonal guidance'],
      prompts: ['What does Ayurveda say about gut health?','How can I improve my digestion?','What daily routine helps?'],
      userMsg: 'What does Ayurveda say about gut health?',
      assistantMsg: 'In Ayurveda, strong digestion (Agni) is considered the foundation of health. General gut discomfort often signals weakened Agni, which can result from irregular eating, cold or processed foods, and stress. Key recommendations include eating your main meal at midday when digestion is strongest, drinking warm water throughout the day, and establishing consistent meal times. A regular daily routine (Dinacharya) is considered one of the most powerful tools for gut health.',
      routeOuts: [['Daily routine',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log hydration',"nav('track');openSheet('hydration')"]],
    },
    pharmacy: {
      intro: 'Provides guidance on medications, supplements, interactions, and what to know before your first appointment.',
      focuses: ['Medication awareness','Supplement basics','Side effect context','What to tell your doctor','Over-the-counter options'],
      prompts: ['Could medication be causing this?','What supplements might help?','What should I tell my doctor about medications?','Are over-the-counter options safe?'],
      userMsg: 'Could medication be causing this?',
      assistantMsg: 'It\'s worth considering. Many common medications can affect gut function \u2014 antibiotics, pain relievers (NSAIDs), iron supplements, and some antidepressants are frequent culprits. Make a list of everything you take, including supplements and over-the-counter products, and bring it to your GI appointment. Even medications you\'ve taken for a long time can contribute to gut symptoms.',
      routeOuts: [['Log medication',"nav('track');openSheet('meds')"],['Visit prep',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
  },

  screens: {
    // Today screen
    todayGreeting: 'Good morning, Taylor',
    todaySubtitle: "Getting started \u00b7 Here's what matters now.",
    todayStatePills: [
      { icon: 'activity', text: '1 of 5 signals' },
      { icon: 'calendar', text: 'GI appointment in 1 week' },
      { text: 'Building baseline' },
    ],
    todayTopPriority: {
      title: 'Top priority',
      subtitle: 'Start building your tracking habit \u2014 log meals and symptoms to find your baseline.',
      action: "nav('track');setSegment('track','quick');openSheet('food')",
      ctaText: 'Do this now',
    },
    todayFeed: [
      { icon: 'thermom', title: 'Log your first symptoms', subtitle: 'Start building your symptom baseline', action: "nav('track');openSheet('symptom')" },
      { icon: 'compass', title: 'Explore your guides', subtitle: 'Learn what each guide can help you with', action: "nav('chat')" },
      { icon: 'trendUp', title: 'Build your tracking habit', subtitle: 'Consistent logging unlocks your personal patterns', action: "nav('track')" },
      { icon: 'barChart', title: 'Learn about patterns', subtitle: 'Understand how your data becomes insights', action: "nav('patterns')" },
      { icon: 'msgCircle', title: 'Chat prompt', subtitle: 'Ask what to track first or how to get started', action: "nav('chat')" },
      { icon: 'clock', title: 'Recent activity', subtitle: 'Bowel movement logged at 8:45 AM', action: "openEntry('bm')" },
    ],

    // Track screen
    quickGrid: [
      ['poop','Bowel',"openEntry('bm')"],['thermom','Symptoms',"openSheet('symptom')"],['utensils','Nutrition',"openEntry('food')"],
      ['droplets','Hydration',"openSheet('hydration')"],['moon','Sleep',"openSheet('sleep')"],['brain','Stress & Mood',"openSheet('mental')"],
      ['activity','Movement',"openSheet('movement')"],['pill','Meds & Supps',"openSheet('meds')"],['flower','Period',"openSheet('menstrual')"],
      ['fileText','Notes',"openSheet('note')"],
    ],
    mainTrackers: [
      ['poop','Bowel Movement','Track consistency and comfort to find your baseline',"openEntry('bm')"],
      ['thermom','Symptoms','Log symptoms to start identifying your triggers',"openSheet('symptom')"],
      ['utensils','Nutrition','Track meals, timing, and how food makes you feel',"openEntry('food')"],
    ],

    continueTrackers: {
      groups: [
        { label: 'Resume Incomplete', items: [
          ['utensils','Finish logging breakfast','You started but didn\'t add details',"openEntry('food')"],
        ]},
        { label: 'Suggested Next Log', items: [
          ['thermom','Log how you feel after eating','Connect food to symptoms for your baseline',"openSheet('symptom')"],
          ['droplets','Track your water intake','Hydration data helps complete the picture',"openSheet('hydration')"],
        ]},
        { label: 'In-Progress Tracking', items: [
          ['brain','Log your stress level','Stress-gut connection is one of your early signals',"openSheet('mental')"],
        ]},
      ],
    },

    recentEntries: {
      groups: [
        { label: 'Today', items: [
          ['poop','Bowel movement','Varied consistency, some discomfort \u00b7 8:45 AM',"openEntry('bm')"],
          ['utensils','Food','Cereal, milk, orange juice \u00b7 8:00 AM',"openEntry('food')"],
          ['thermom','Symptoms','Not logged yet today',"openSheet('symptom')"],
        ]},
        { label: 'Yesterday', items: [
          ['poop','Bowel movement','Normal consistency \u00b7 9:10 AM',"openEntry('bm')"],
          ['utensils','Food','Sandwich, chips, soda \u00b7 12:30 PM',"openEntry('food')"],
          ['thermom','Symptoms','Mild bloating \u00b7 2:00 PM',"openSheet('symptom')"],
        ]},
        { label: 'This Week', items: [
          ['moon','Sleep','7 hours average \u00b7 2 entries',"openSheet('sleep')"],
          ['brain','Stress & Mood','Moderate stress \u00b7 1 entry',"openSheet('mental')"],
        ]},
      ],
    },

    moreTrackers: {
      groups: [
        { label: 'Daily Foundations', items: [
          ['pill','Medication & Supplements','Track what you take and when',"openSheet('meds')"],
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
      ['utensils','Breakfast logged','45 minutes earlier',"openEntry('food')"],
      ['thermom','No symptom logged yet','Add symptoms to start building your baseline',"openSheet('symptom')"],
    ],

    // Patterns screen
    patternHero: {
      title: 'Stress and gut discomfort connection',
      subtitle: 'Higher stress days tend to coincide with more gut symptoms. The signal is early but growing.',
      chip: 'amber',
      chipLabel: 'Low confidence',
      bars: [30,55,70,40,75,35,60,45],
      confidence: 35,
      confidenceColor: '#F59E0B',
      action: "openPattern('stress-gut')",
      signalRows: [
        { color: 'amber', label: 'Gut symptoms on high-stress days', value: '4 of 6' },
        { color: 'muted', label: 'Gut symptoms on low-stress days', value: '1 of 5' },
        { color: 'muted', label: 'Stress rating above 5/10', value: '6 days' },
      ],
    },

    patternFeed: {
      groups: [
        { label: 'Strongest Patterns', items: [
          ['brain','Stress \u2192 gut discomfort','Low confidence \u00b7 early signal',"openPattern('stress-gut')"],
        ]},
        { label: 'Active Patterns', items: [
          ['utensils','Irregular eating \u2192 unpredictable symptoms','Low confidence \u00b7 tracking in progress',"openPattern('irregular-habits')"],
          ['utensils','Possible food sensitivities','Early signal \u00b7 needs more data',"openPattern('food-sensitivity')"],
        ]},
        { label: 'New Signals', items: [
          ['moon','Sleep quality \u2192 digestive comfort','Low confidence \u00b7 early data',"openPattern('sleep-digestion')"],
          ['thermom','Multiple overlapping symptoms','Very early \u00b7 needs separation',"openPattern('mixed-symptoms')"],
        ]},
        { label: 'Strengthening', items: [
          ['trendUp','Stress-gut signal growing','More data points this week',"openPattern('stress-gut')"],
        ]},
        { label: 'What Changed', items: [
          ['refresh','Hydration signal emerging','New data point added yesterday',"openPattern('hydration-comfort')"],
        ]},
      ],
    },

    patternConnections: [
      ['utensils','Food \u2192 Symptoms','Some foods may trigger discomfort',"openPattern('food-sensitivity')"],
      ['poop','Bowel Movement \u2192 Comfort','Variable consistency linked to overall discomfort',"openPattern('mixed-symptoms')"],
      ['moon','Sleep \u2192 Gut','Poor sleep nights may precede worse gut days',"openPattern('sleep-digestion')"],
      ['brain','Stress / Mood \u2192 Gut','Higher stress days show more gut symptoms',"openPattern('stress-gut')"],
      ['droplets','Hydration \u2192 Comfort','Low hydration may worsen discomfort',"openPattern('hydration-comfort')"],
      ['activity','Movement \u2192 Gut','Activity level and digestive comfort',"openPattern('irregular-habits')"],
    ],

    patternExperiments: [
      ['utensils','Food diary challenge','Log every meal for 7 days with details',"nav('track');setSegment('track','continue')"],
      ['droplets','Hydration baseline','Track water intake daily for 7 days',"nav('track');setSegment('track','continue')"],
    ],

    patternTrends: [
      ['thermom','Symptom Trends','Discomfort frequency over first 14 days'],
      ['poop','Bowel Trends','Consistency and comfort over 7 days'],
      ['utensils','Nutrition Trends','Meal timing and food-symptom connections'],
      ['moon','Daily Foundations Trends','Sleep, hydration, and stress'],
    ],
    patternTrendsChart: {
      bars: [25,40,55,35,60,30,45,50,65,40,55,30,50,60],
    },

    patternReports: [
      ['clipList','Weekly Summary','Your first week at a glance'],
      ['calendar','Monthly Summary','30-day pattern overview'],
      ['compass','Visit-Ready Summary','Formatted for your doctor',"nav('care');setSegment('care','navigation');navSub('visit')"],
      ['clock','Pattern History','How patterns have evolved over time'],
    ],

    // Care screen
    careHabits: [
      { icon: 'clipList', name: 'Daily check-in', meta: '2 min \u00b7 Note how your gut feels today', tag: 'Recommended now' },
      { icon: 'utensils', name: 'Food diary practice', meta: 'Log meals with timing and details' },
      { icon: 'droplets', name: 'Hydration tracking', meta: 'Track water intake through the day' },
      { icon: 'brain', name: 'Stress awareness', meta: '3 min \u00b7 Rate your stress and note triggers' },
    ],

    carePlans: [
      ['clipList','Getting started plan','Week 1 \u00b7 Build your tracking foundation'],
      ['calendar','First-week tracking plan','Daily logging goals and milestones'],
    ],

    careFlare: [
      { icon: 'alertTri', name: 'When to call your doctor', meta: 'Seek immediate attention for: unintentional weight loss, blood in stool, severe or worsening pain, fever, difficulty swallowing, or family history of GI cancers' },
      { icon: 'heart', name: 'Comfort measures', meta: 'Simple steps for general gut discomfort' },
      { icon: 'shield', name: 'When to escalate', meta: 'Red flags: unintentional weight loss, blood in stool, severe or worsening pain, fever, difficulty swallowing, family history of GI cancers' },
    ],

    careRecs: [
      ['utensils','Start with a food diary','Tracking what you eat is the most important first step'],
      ['poop','Track bowel movements daily','Even normal days matter for building your baseline'],
      ['brain','Note your stress levels','The gut-brain connection may be part of your picture'],
    ],

    careExperiments: [
      ['utensils','Food diary challenge','Log every meal for 7 days with timing and details',"nav('track');setSegment('track','continue')"],
      ['droplets','Hydration baseline','Track water intake daily for 7 days',"nav('track');setSegment('track','continue')"],
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
        { status: 'active', title: 'First GI appointment', sub: 'Scheduled \u00b7 In 1 week' },
        { status: '', title: 'Initial assessment', sub: 'Pending \u00b7 After first visit' },
        { status: '', title: 'Follow-up plan', sub: 'Pending \u00b7 Based on assessment' },
        { status: '', title: 'Treatment review', sub: 'Pending \u00b7 After follow-up', last: true },
      ],
      items: [
        ['clipList','Treatment Plan','Will be created after your first visit'],
        ['pill','Medications & Adherence','Track any current or new medications'],
        ['calendar','Follow-Up Plan','Next steps after your appointment'],
        ['users','Care Team Coordination','Coordinate across your care team'],
        ['testTube','Results & Interpretation','Lab results, tests, and what they mean'],
      ],
    },

    // Visit prep
    visitPrep: {
      title: 'Visit preparation',
      subtitle: 'First GI appointment in 1 week',
      stepsTotal: 4,
      stepsDone: 1,
      checklist: [
        { label: 'Define main concern', done: true },
        { label: 'Write questions to ask', done: false },
        { label: 'Review doctor summary', done: false },
        { label: 'Export or print summary', done: false },
      ],
      mainConcern: 'General gut discomfort with variable symptoms. Looking for answers and a baseline understanding.',
      questions: [
        'What could be causing my gut symptoms?',
        'What tests or assessments should I expect?',
        'What should I track before my next visit?',
      ],
      summaryNote: 'Auto-generated from your logs and patterns. 1 early signal, 7 days of data.',
    },

    // Chat screen
    chatConversations: [
      ['compass','Getting started conversation','Started today'],
      ['sparkles','What to track first','Today'],
      ['trendUp','Understanding my symptoms','Yesterday'],
      ['utensils','Food and gut questions','2 days ago'],
    ],

    // Notifications
    notifications: {
      action: [
        { group: 'Getting Started', items: [
          { icon: 'sparkles', title: 'Welcome to Gutsphere', sub: 'Start by logging your first meal and bowel movement', time: 'Today', unread: true },
        ]},
        { group: 'Pattern Changes', items: [
          { icon: 'trendUp', title: 'First pattern detected', sub: 'Stress-gut connection emerging at 35%', time: 'Today', action: "nav('patterns');openPattern('stress-gut')", unread: true },
        ]},
        { group: 'Care Tasks Due', items: [
          { icon: 'thermom', title: 'Log symptoms', sub: 'Add symptom data to build your baseline', time: '2:30 PM', action: "nav('track');openSheet('symptom')", unread: true },
        ]},
        { group: 'Medication & Supplements', items: [
          { icon: 'pill', title: 'Log any medications', sub: 'Track what you take so your doctor has context', time: 'Anytime', action: "openSheet('meds')" },
        ]},
        { group: 'Visits & Tests Due', items: [
          { icon: 'calendar', title: 'GI visit in 1 week', sub: 'Start preparing \u2014 1 of 4 steps complete', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Missing Important Data', items: [
          { icon: 'thermom', title: 'No symptom log yet', sub: 'Symptom data is key to finding your triggers', time: 'Today', action: "openSheet('symptom')" },
        ]},
      ],
      updates: [
        { group: 'Pattern Updates', items: [
          { icon: 'trendUp', title: 'Early pattern summary', sub: '1 signal detected, 5 more building', time: 'Today', action: "nav('patterns')", unread: true },
        ]},
        { group: 'Results & Reports', items: [
          { icon: 'clipList', title: 'First summary available', sub: 'Preview your initial data summary', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Shared & Network Updates', items: [
          { icon: 'users', title: 'No care team yet', sub: 'Add your doctor after your first visit', time: 'Today' },
        ]},
        { group: 'Integrations', items: [
          { icon: 'watch', title: 'Apple Health available', sub: 'Connect to import sleep and activity data', time: 'Today' },
        ]},
        { group: 'Product & Account', items: [
          { icon: 'sparkles', title: 'Getting started tips', sub: 'Learn how to make the most of Gutsphere', time: 'Today' },
        ]},
      ],
      inbox: [
        { type: 'time-group', label: 'Today' },
        { icon: 'sparkles', title: 'Welcome to Gutsphere', sub: 'Log your first meal and symptoms', time: '8:00 AM', unread: true },
        { icon: 'trendUp', title: 'First pattern detected', sub: 'Stress-gut connection at 35%', time: '10:00 AM', action: "nav('patterns');openPattern('stress-gut')", unread: true },
        { icon: 'thermom', title: 'Log symptoms', sub: 'Build your symptom baseline', time: '2:30 PM', action: "nav('track');openSheet('symptom')" },
        { type: 'time-group', label: 'Yesterday' },
        { icon: 'poop', title: 'Morning bowel check-in', sub: 'Log your morning movement', time: '8:00 AM' },
        { icon: 'utensils', title: 'Food diary reminder', sub: 'Log your meals to find patterns', time: '12:00 PM' },
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
