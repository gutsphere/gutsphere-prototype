export default {
  persona: {
    name: 'Anika',
    initials: 'AP',
    fullName: 'Anika Patel',
    profileDesc: 'Diagnostic workup phase',
    stage: 'Cause investigation',
    stageNote: "Here's what matters now.",
    focus: 'Chronic diarrhea focus',
    visitNote: 'Stool test results in 2 days',
  },

  entries: {
    bm: { title:'Bowel movement', subtitle:'Urgent, watery, 3rd episode \u00b7 10:15 AM', icon:'poop', details:[['Type','Bristol 7'],['Urgency','9/10'],['Frequency','3x today'],['Duration','2 min']] },
    food: { title:'Food', subtitle:'Plain toast, banana, electrolyte water \u00b7 9:00 AM', icon:'utensils', details:[['Meal','Breakfast'],['Foods','Plain toast, banana, electrolyte water'],['Tags','BRAT-friendly, hydrating'],['Time','9:00 AM']] },
  },

  patterns: {
    'urgency-triggers': {
      title: 'Specific foods and urgency episodes',
      subtitle: 'Certain foods appear to trigger urgent episodes within 1-2 hours of eating.',
      confidence: 50,
      chip: 'green', chipLabel: 'Moderate evidence',
      bars: [40,65,80,35,75,50,85,45,70,55,80,40,72,58],
      summary: 'When you eat dairy, spicy food, or high-fat meals, urgent bowel episodes tend to follow within 1-2 hours. The pattern is moderate but growing clearer as you log more food-episode pairs. Bland and BRAT-friendly foods rarely trigger urgency.',
      factors: [
        ['utensils','Trigger food consumption','Moderate signal','var(--green)','50%','#D1FAE5'],
        ['droplets','Low hydration','Contributing','#F59E0B','30%','#FEF3C7'],
        ['brain','Anxiety at mealtime','Uncertain','var(--text-hint)','18%','var(--sand-light)'],
        ['activity','Physical activity after eating','Weak signal','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log every meal with timing for 7 days','Note urgency onset time after each meal','Track which specific foods precede episodes'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'dehydration-risk': {
      title: 'Low fluid intake and symptom severity',
      subtitle: 'Days with lower fluid intake tend to show worse fatigue and prolonged episodes.',
      confidence: 40,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [25,50,70,35,65,30,55],
      summary: 'On days when you drink fewer than 6 glasses of water or electrolyte fluids, your symptoms tend to be more severe and recovery slower. Dehydration risk increases with higher episode frequency.',
      factors: [
        ['droplets','Daily fluid intake','Moderate signal','#F59E0B','40%','#FEF3C7'],
        ['activity','Energy levels','Contributing','#F59E0B','28%','#FEF3C7'],
        ['utensils','Electrolyte intake','Uncertain','var(--text-hint)','18%','var(--sand-light)'],
      ],
      clarify: ['Log hydration after every episode','Track electrolyte vs plain water intake','Note energy levels throughout the day'],
      trackAction: "nav('track');openSheet('hydration')",
      chatGuide: 'nutrition',
    },
    'morning-pattern': {
      title: 'Early morning urgency cluster',
      subtitle: 'Most urgent episodes cluster in the early morning hours.',
      confidence: 58,
      chip: 'green', chipLabel: 'Moderate evidence',
      bars: [50,70,85,60,90,55,80,65,88,58,82,62,86,60],
      summary: 'The majority of your urgent episodes occur between 5 AM and 9 AM. Morning urgency is significantly more intense than episodes later in the day. This pattern has been consistent over the past 2 weeks and may point to overnight gut motility changes.',
      factors: [
        ['clock','Morning timing','Strong signal','var(--green)','58%','#D1FAE5'],
        ['moon','Sleep quality','Contributing','#F59E0B','35%','#FEF3C7'],
        ['utensils','Previous evening meal','Moderate signal','#F59E0B','30%','#FEF3C7'],
        ['brain','Morning anxiety','Uncertain','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log exact time of each morning episode for 10 days','Rate urgency intensity for morning vs afternoon episodes','Track what you eat for dinner the night before'],
      trackAction: "nav('track');openSheet('symptom')",
      chatGuide: 'gastro',
    },
    'dairy-reaction': {
      title: 'Dairy consumption and diarrhea episodes',
      subtitle: 'Dairy intake may be followed by increased episode frequency.',
      confidence: 45,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [35,60,75,40,70,45,65,50],
      summary: 'On days you consume dairy products, your episode count tends to be higher and stools are more watery. This signal is growing but needs more controlled elimination data to confirm lactose intolerance as a factor.',
      factors: [
        ['utensils','Dairy consumption','Moderate signal','#F59E0B','45%','#FEF3C7'],
        ['droplets','Hydration level','Contributing','#F59E0B','25%','#FEF3C7'],
        ['brain','Stress level','Weak signal','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Eliminate dairy for 5 days and log results','Reintroduce dairy and track response','Note whether all dairy types trigger equally'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'anxiety-urgency': {
      title: 'Social anxiety and urgency',
      subtitle: 'Stressful social situations may trigger or worsen urgent episodes.',
      confidence: 32,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [20,45,60,30,55,35,50,25],
      summary: 'On days with social events or high social anxiety, you report more urgent episodes and greater difficulty managing symptoms. The pattern is early but worth tracking, as the gut-brain axis may be amplifying your symptoms.',
      factors: [
        ['brain','Social anxiety level','Early signal','#F59E0B','32%','#FEF3C7'],
        ['utensils','Eating out / unfamiliar food','Contributing','#F59E0B','22%','#FEF3C7'],
        ['activity','Bathroom access anxiety','Uncertain','var(--text-hint)','18%','var(--sand-light)'],
      ],
      clarify: ['Rate anxiety before social events for 2 weeks','Log episodes during and after social situations','Note whether familiar vs unfamiliar settings matter'],
      trackAction: "nav('track');openSheet('mental')",
      chatGuide: 'psychology',
    },
    'electrolyte-impact': {
      title: 'Electrolyte balance and energy levels',
      subtitle: 'Low electrolyte intake may correlate with fatigue and prolonged recovery.',
      confidence: 20,
      chip: 'amber', chipLabel: 'Very early',
      bars: [15,35,25,50,20,40,30],
      summary: 'On days with frequent episodes and low electrolyte supplementation, you report worse fatigue and slower recovery. This is a new signal that needs consistent tracking to validate.',
      factors: [
        ['droplets','Electrolyte intake','Early signal','#F59E0B','20%','#FEF3C7'],
        ['activity','Energy level','Uncertain','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log electrolyte intake daily for 2 weeks','Track energy levels alongside episode count','Note whether ORS vs sports drinks differ in effect'],
      trackAction: "nav('track');openSheet('hydration')",
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
      prompts: ['What should I log next?','Explain this pattern','Help me prepare for my results review','What should I do now?'],
      userMsg: 'What should I log next?',
      assistantMsg: 'Based on your recent logs, the most useful thing right now would be to log your hydration intake after each episode. Your dehydration risk pattern needs more data, and with your stool test results coming in 2 days, having a complete hydration log will help your doctor assess severity.',
      routeOuts: [['Track hydration',"nav('track');openSheet('hydration')"],['View patterns',"nav('patterns')"]],
    },
    track: {
      intro: 'Helps you figure out what to track, when, and why \u2014 so every log moves you toward useful answers.',
      focuses: ['What to log next','Tracking consistency','Signal gaps','Logging priority','Building evidence'],
      prompts: ['What should I log right now?','Help me track more consistently','What signals am I missing?','Which logs matter most?'],
      userMsg: 'What signals am I missing?',
      assistantMsg: 'You\'ve been good about logging episodes, but the gap is hydration tracking. You\'re not consistently logging fluid intake after episodes, which means the dehydration risk pattern can\'t strengthen. Also, try logging exact timing of urgency onset after meals \u2014 that will help clarify your food trigger pattern.',
      routeOuts: [['Log hydration',"nav('track');openSheet('hydration')"],['Continue tracking',"nav('track');setSegment('track','continue')"]],
    },
    patterns: {
      intro: 'Helps you understand what your data means \u2014 trends, relationships, and what\'s becoming clearer or more uncertain.',
      focuses: ['Pattern interpretation','Signal strength','What\'s changing','Confidence levels','Data relationships'],
      prompts: ['What does my recent data show?','Compare this week to last week','Which patterns are strengthening?','What\'s still uncertain?'],
      userMsg: 'What does my recent data show?',
      assistantMsg: 'Over the last 14 days, your strongest signal is the morning urgency pattern \u2014 most episodes cluster before 9 AM with higher intensity. It\'s at 58% confidence. Your dairy-reaction signal is at 45% and needs a controlled elimination to confirm. The anxiety-urgency link is early but worth watching.',
      routeOuts: [['View pattern detail',"nav('patterns');navSub('pattern-detail')"],['Track food triggers',"nav('track');openSheet('food')"]],
    },
    selfcare: {
      intro: 'Supports your daily habits, guided plans, flare management, and practical self-care between appointments.',
      focuses: ['Daily routines','Guided exercises','Flare support','Habit building','Self-management'],
      prompts: ['What should I focus on today?','Help me with my routine','What\'s my next best step?','I\'m having a flare'],
      userMsg: 'I\'m having a flare',
      assistantMsg: 'I\'m sorry you\'re dealing with this. Let\'s focus on what matters most right now: stay hydrated with small, frequent sips of electrolyte water or ORS. Stick to BRAT foods (banana, rice, applesauce, toast) and avoid dairy and caffeine. If you see blood, have a fever above 38.5\u00b0C, or can\'t keep fluids down for 6+ hours, that\'s a signal to seek urgent care.',
      routeOuts: [['Flare support',"nav('care');setSegment('care','self');setSegment('self','flare')"],['Log episode',"openEntry('bm')"]],
    },
    clinicalnav: {
      intro: 'Helps you prepare for visits, build questions, organise your data for doctors, and navigate the clinical system.',
      focuses: ['Visit preparation','Doctor questions','Summary generation','Test preparation','Referral guidance'],
      prompts: ['Help me prepare for my results review','What questions should I ask?','Turn my patterns into a summary','What should I bring up?'],
      userMsg: 'Help me prepare for my results review',
      assistantMsg: 'Your stool test results are due in 2 days. Based on your logs, the top things to discuss are: your chronic diarrhea pattern with morning urgency clustering, the dairy reaction signal, and whether further testing (lactobreath test, bile acid test) is warranted. I can generate a symptom diary summary and help you build a question list for the gastroenterologist.',
      routeOuts: [['Visit prep',"nav('care');setSegment('care','navigation');navSub('visit')"],['View summary',"nav('patterns');setSegment('patterns','trends')"]],
    },
    clinicalcare: {
      intro: 'Helps you organise treatment plans, track medication adherence, monitor treatment response, and coordinate follow-up.',
      focuses: ['Treatment tracking','Medication adherence','Response monitoring','Follow-up planning','Care coordination'],
      prompts: ['Is my treatment helping?','What should I track for follow-up?','Review my medication adherence','What changed since I started treatment?'],
      userMsg: 'Is my treatment helping?',
      assistantMsg: 'You\'re currently in the diagnostic phase, so treatment hasn\'t formally started yet. Once your stool test results come back, your gastroenterologist will likely recommend a targeted approach. In the meantime, your BRAT diet days and electrolyte supplementation are helping manage symptoms \u2014 episode severity has been slightly lower on days you follow both consistently.',
      routeOuts: [['Treatment timeline',"nav('care');setSegment('care','clinical')"],['Log treatment',"nav('track');openSheet('treatment')"]],
    },
    gastro: {
      intro: 'Provides a gastroenterology perspective on your symptoms, patterns, and clinical questions.',
      focuses: ['GI symptom interpretation','Differential considerations','Test guidance','Red flag assessment','Clinical context'],
      prompts: ['What could be causing this?','Should I be concerned?','What tests might help?','Is this pattern typical?'],
      userMsg: 'What could be causing this chronic diarrhea?',
      assistantMsg: 'Chronic diarrhea with morning urgency and possible dairy sensitivity has several potential explanations. Common causes include lactose intolerance, bile acid malabsorption, IBS-D, or post-infectious IBS. Your stool test will help rule out infections and inflammation. If results are normal, your gastroenterologist might consider a hydrogen breath test for lactose intolerance or a SeHCAT scan for bile acid malabsorption. The morning clustering pattern is particularly relevant \u2014 it\'s common in bile acid diarrhea.',
      routeOuts: [['View patterns',"nav('patterns')"],['Prepare for results',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
    nutrition: {
      intro: 'Provides guidance on diet, food triggers, meal timing, and how nutrition relates to your GI symptoms.',
      focuses: ['Food-symptom connections','Meal timing','Dietary strategies','Trigger identification','Nutritional support'],
      prompts: ['Are there foods I should avoid?','Help me with hydration','Review my food-symptom patterns','What diet changes might help?'],
      userMsg: 'Help me with hydration',
      assistantMsg: 'With frequent diarrhea, hydration is critical. Aim for at least 8 glasses of fluid daily, but prioritise electrolyte-rich options \u2014 plain water alone doesn\'t replace lost sodium and potassium. ORS (oral rehydration solution) is ideal after each episode. Coconut water and diluted broth are good alternatives. Avoid caffeine and alcohol as they worsen fluid loss. Sip small amounts frequently rather than large volumes at once.',
      routeOuts: [['Log hydration',"nav('track');openSheet('hydration')"],['View food patterns',"nav('patterns');setSegment('patterns','connections')"]],
    },
    pelvic: {
      intro: 'Provides guidance on pelvic floor function, evacuation mechanics, and exercises that support bowel health.',
      focuses: ['Pelvic floor function','Evacuation support','Urgency management','Coordination exercises','Motility support'],
      prompts: ['Help with urgency control','What pelvic floor exercises help?','Can I improve bowel control?','Is my pelvic floor involved?'],
      userMsg: 'Can I improve bowel control during urgency?',
      assistantMsg: 'Urgency and difficulty controlling bowel movements can involve pelvic floor muscle coordination. Kegel exercises and pelvic floor strengthening can help improve control during urgency episodes. The "urge wave" technique \u2014 tightening your pelvic floor, breathing deeply, and waiting for the wave to pass \u2014 can help you reach a bathroom without accidents. If incontinence is a concern, biofeedback therapy can be very effective.',
      routeOuts: [['Pelvic floor exercises',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log bowel movement',"openEntry('bm')"]],
    },
    psychology: {
      intro: 'Explores the gut-brain connection \u2014 how stress, anxiety, and mental health affect your GI symptoms and what to do about it.',
      focuses: ['Gut-brain axis','Stress-symptom links','Nervous system regulation','Cognitive patterns','Emotional wellbeing'],
      prompts: ['How does anxiety affect my gut?','Help me understand the gut-brain connection','What calming techniques help?','Is social anxiety making this worse?'],
      userMsg: 'Is social anxiety making my diarrhea worse?',
      assistantMsg: 'Very likely, yes. The gut-brain axis means anxiety directly increases gut motility and sensitivity. Social anxiety is particularly impactful because the fear of not having bathroom access creates a vicious cycle \u2014 anxiety triggers urgency, which increases anxiety. Your data shows a 32% signal linking social situations to worse episodes. Cognitive behavioral techniques, exposure therapy, and gut-directed hypnotherapy have strong evidence for breaking this cycle.',
      routeOuts: [['Breathing exercise',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log stress',"nav('track');openSheet('mental')"]],
    },
    functional: {
      intro: 'Offers a root-cause, systems-level perspective on your GI health \u2014 looking at the bigger picture beyond individual symptoms.',
      focuses: ['Root-cause thinking','Systems perspective','Lifestyle factors','Holistic context','Integrative approach'],
      prompts: ['What root causes should I explore?','How do my systems connect?','What lifestyle factors matter?','What am I missing?'],
      userMsg: 'What root causes should I explore?',
      assistantMsg: 'Looking at your full picture \u2014 chronic diarrhea, morning urgency, dairy sensitivity, and social anxiety \u2014 there are several interconnected systems. The gut microbiome may be disrupted (your stool test will help clarify). Lactose intolerance or bile acid malabsorption could be primary drivers. Anxiety amplifies motility through the gut-brain axis. A functional approach would start with the stool test results, then consider an elimination diet to isolate triggers, followed by targeted probiotic support and nervous system calming.',
      routeOuts: [['View all connections',"nav('patterns');setSegment('patterns','connections')"],['Daily habits',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    ayurveda: {
      intro: 'Provides a traditional Ayurvedic perspective on digestion, lifestyle balance, and natural approaches to gut health.',
      focuses: ['Digestive fire (Agni)','Constitutional balance','Lifestyle rhythm','Natural remedies','Seasonal guidance'],
      prompts: ['What does Ayurveda say about diarrhea?','How can I balance my digestion?','What daily routine helps?'],
      userMsg: 'What does Ayurveda say about diarrhea?',
      assistantMsg: 'In Ayurveda, chronic diarrhea is often associated with weakened Agni (digestive fire) and Pitta imbalance \u2014 excess heat and liquidity in the digestive system. Key recommendations include cooling and binding foods (rice, banana, pomegranate), avoiding spicy, oily, and fermented foods, and drinking warm cumin-coriander-fennel tea to calm the digestive tract. Regular meal timing is considered essential \u2014 irregular eating weakens Agni further. Room-temperature water is preferred over cold.',
      routeOuts: [['Morning routine',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log hydration',"nav('track');openSheet('hydration')"]],
    },
    pharmacy: {
      intro: 'Provides guidance on medications, supplements, interactions, and adherence \u2014 helping you understand what you\'re taking and why.',
      focuses: ['Medication review','Side effects','Drug interactions','Supplement guidance','Adherence support'],
      prompts: ['Could this be a side effect?','Check my interactions','Should I adjust timing?','What supplements might help?'],
      userMsg: 'What supplements might help with diarrhea?',
      assistantMsg: 'Probiotics (particularly Saccharomyces boulardii) have evidence for reducing diarrhea frequency. Electrolyte supplements or ORS packets are essential for replacing lost minerals. If bile acid malabsorption is suspected, your doctor may consider cholestyramine. Avoid taking multiple supplements without discussing with your gastroenterologist, as some can worsen symptoms. Always take probiotics at least 2 hours apart from any antibiotics.',
      routeOuts: [['Log medication',"nav('track');openSheet('meds')"],['Treatment plan',"nav('care');setSegment('care','clinical')"]],
    },
  },

  screens: {
    // Today screen
    todayGreeting: 'Good morning, Anika',
    todaySubtitle: "Cause investigation \u00b7 Here's what matters now.",
    todayStatePills: [
      { icon: 'activity', text: '3 of 5 signals' },
      { icon: 'calendar', text: 'Test results in 2 days', urgent: true },
      { text: '4 episodes today' },
    ],
    todayTopPriority: {
      title: 'Top priority',
      subtitle: 'Track each bowel episode and hydration intake to assess severity trend',
      action: "nav('track');setSegment('track','quick');openSheet('symptom')",
      ctaText: 'Do this now',
    },
    todayFeed: [
      { icon: 'thermom', title: 'Must do today', subtitle: 'Log hydration after every episode to track dehydration risk', action: "nav('track');openSheet('hydration')" },
      { icon: 'compass', title: 'Continue where you left off', subtitle: 'Result prep and questions for gastroenterologist', action: "nav('care');setSegment('care','navigation');navSub('visit')" },
      { icon: 'trendUp', title: 'New discovery', subtitle: 'Morning urgency cluster is your strongest signal', action: "nav('patterns');openPattern('morning-pattern')" },
      { icon: 'droplets', title: 'Hydration check', subtitle: 'Log your electrolyte and fluid intake', action: "nav('track');openSheet('hydration')" },
      { icon: 'msgCircle', title: 'Chat prompt', subtitle: 'Ask about dehydration signs or what to track next', action: "nav('chat')" },
      { icon: 'clock', title: 'Recent activity', subtitle: 'Bowel episode logged at 10:15 AM', action: "openEntry('bm')" },
    ],

    // Track screen
    quickGrid: [
      ['poop','Bowel',"openEntry('bm')"],['thermom','Symptoms',"openSheet('symptom')"],['utensils','Nutrition',"openEntry('food')"],
      ['droplets','Hydration',"openSheet('hydration')"],['moon','Sleep',"openSheet('sleep')"],['brain','Stress & Mood',"openSheet('mental')"],
      ['activity','Movement',"openSheet('movement')"],['pill','Meds & Supps',"openSheet('meds')"],['flower','Period',"openSheet('menstrual')"],
      ['fileText','Notes',"openSheet('note')"],
    ],
    mainTrackers: [
      ['poop','Bowel Movement','Highest-value signal for your diarrhea journey',"openEntry('bm')"],
      ['thermom','Symptoms','Track symptom timing and severity',"openSheet('symptom')"],
      ['utensils','Nutrition','Track meals, timing, and food-response context',"openEntry('food')"],
    ],

    continueTrackers: {
      groups: [
        { label: 'Resume Incomplete', items: [
          ['droplets','Finish logging hydration','You started but didn\'t add electrolyte details',"openSheet('hydration')"],
        ]},
        { label: 'Suggested Next Log', items: [
          ['droplets','Log hydration after episode','Track fluid replacement to assess dehydration risk',"openSheet('hydration')"],
          ['utensils','Track food before next episode','Strengthen your food trigger pattern',"openSheet('food')"],
        ]},
        { label: 'In-Progress Tracking', items: [
          ['steth','Log treatment response','Useful when treatment monitoring is active',"openSheet('treatment')"],
        ]},
      ],
    },

    recentEntries: {
      groups: [
        { label: 'Today', items: [
          ['poop','Bowel movement','Urgent, watery, 3rd episode \u00b7 10:15 AM',"openEntry('bm')"],
          ['utensils','Food','Plain toast, banana, electrolyte water \u00b7 9:00 AM',"openEntry('food')"],
          ['thermom','Symptoms','Not logged yet today',"openSheet('symptom')"],
        ]},
        { label: 'Yesterday', items: [
          ['poop','Bowel movement','Urgent, loose \u00b7 6:30 AM',"openEntry('bm')"],
          ['utensils','Food','Rice, chicken broth \u00b7 6:00 PM',"openEntry('food')"],
          ['thermom','Symptoms','Cramping 6/10 \u00b7 7:00 AM',"openSheet('symptom')"],
        ]},
        { label: 'This Week', items: [
          ['moon','Sleep','5.5 hours average \u00b7 3 entries',"openSheet('sleep')"],
          ['brain','Stress & Mood','Elevated anxiety \u00b7 2 entries',"openSheet('mental')"],
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
      ['utensils','Breakfast logged','1 hour before episode',"openEntry('food')"],
      ['thermom','No symptom logged yet','Add symptoms to strengthen the pattern',"openSheet('symptom')"],
    ],

    // Patterns screen
    patternHero: {
      title: 'Early morning urgency cluster',
      subtitle: 'Most urgent episodes cluster between 5 AM and 9 AM with higher intensity.',
      chip: 'green',
      chipLabel: 'Moderate evidence',
      bars: [50,70,85,60,90,55,80,65,88,58,82,62,86,60],
      confidence: 58,
      confidenceColor: 'var(--green)',
      action: "openPattern('morning-pattern')",
      signalRows: [
        { color: 'green', label: 'Urgent episodes before 9 AM', value: '8 of 12' },
        { color: 'muted', label: 'Afternoon episodes with urgency', value: '2 of 7' },
        { color: 'muted', label: 'Evening episodes with urgency', value: '1 of 5' },
      ],
    },

    patternFeed: {
      groups: [
        { label: 'Strongest Patterns', items: [
          ['clock','Early morning urgency cluster','Moderate evidence \u00b7 consistent signal',"openPattern('morning-pattern')"],
        ]},
        { label: 'Active Patterns', items: [
          ['utensils','Food triggers \u2192 urgency episodes','Moderate evidence \u00b7 tracking in progress',"openPattern('urgency-triggers')"],
          ['utensils','Dairy \u2192 increased episodes','Moderate confidence \u00b7 needs elimination data',"openPattern('dairy-reaction')"],
        ]},
        { label: 'New Signals', items: [
          ['droplets','Dehydration risk \u2192 worse severity','Low confidence \u00b7 needs more data',"openPattern('dehydration-risk')"],
          ['brain','Social anxiety \u2192 urgency','Early signal \u00b7 8 data points',"openPattern('anxiety-urgency')"],
        ]},
        { label: 'Strengthening', items: [
          ['trendUp','Morning pattern growing','Confidence up from 42% to 58%',"openPattern('morning-pattern')"],
        ]},
        { label: 'What Changed', items: [
          ['refresh','Electrolyte signal needs data','Inconsistent tracking this week',"openPattern('electrolyte-impact')"],
        ]},
      ],
    },

    patternConnections: [
      ['utensils','Food \u2192 Episodes','Specific foods trigger urgency within 1-2 hours',"openPattern('urgency-triggers')"],
      ['poop','Episode Timing \u2192 Severity','Morning episodes are more intense',"openPattern('morning-pattern')"],
      ['droplets','Hydration \u2192 Recovery','Low fluid days show worse fatigue',"openPattern('dehydration-risk')"],
      ['brain','Anxiety \u2192 Urgency','Social situations may trigger episodes',"openPattern('anxiety-urgency')"],
      ['utensils','Dairy \u2192 Episodes','Dairy days show higher episode counts',"openPattern('dairy-reaction')"],
      ['droplets','Electrolytes \u2192 Energy','Low electrolytes may prolong recovery',"openPattern('electrolyte-impact')"],
    ],

    patternExperiments: [
      ['utensils','Dairy elimination trial','Remove all dairy for 5 days and track episodes',"nav('track');setSegment('track','continue')"],
      ['pill','Probiotic trial','Add S. boulardii daily for 7 days and track response',"nav('track');setSegment('track','continue')"],
    ],

    patternTrends: [
      ['thermom','Symptom Trends','Episode frequency and urgency over 30 days'],
      ['poop','Bowel Trends','Stool consistency and frequency over 14 days'],
      ['utensils','Nutrition Trends','Food triggers and meal timing patterns'],
      ['moon','Daily Foundations Trends','Sleep, hydration, and movement'],
    ],
    patternTrendsChart: {
      bars: [60,75,90,50,85,70,40,80,65,55,88,45,72,92],
    },

    patternReports: [
      ['clipList','Weekly Summary','This week at a glance'],
      ['calendar','Monthly Summary','30-day pattern overview'],
      ['compass','Visit-Ready Summary','Formatted for your gastroenterologist',"nav('care');setSegment('care','navigation');navSub('visit')"],
      ['clock','Pattern History','How patterns have evolved over time'],
    ],

    // Care screen
    careHabits: [
      { icon: 'droplets', name: 'Hydration schedule', meta: 'Ongoing \u00b7 Fluid replacement after each episode', tag: 'Recommended now' },
      { icon: 'pill', name: 'Electrolyte supplementation', meta: 'ORS or electrolyte water with each episode' },
      { icon: 'utensils', name: 'BRAT diet days', meta: 'Banana, rice, applesauce, toast during flares' },
      { icon: 'compass', name: 'Bathroom mapping', meta: 'Know nearest bathrooms for outings and routes' },
    ],

    carePlans: [
      ['clipList','Hydration plan','Ongoing \u00b7 Track fluid intake after every episode'],
      ['utensils','Food elimination plan','Identify triggers through systematic removal'],
      ['droplets','Electrolyte plan','Maintain electrolyte balance during active episodes'],
    ],

    careFlare: [
      { icon: 'alertTri', name: 'Acute diarrhea protocol', meta: 'Hydration, ORS, and when to go to ER' },
      { icon: 'droplets', name: 'Rehydration routine', meta: 'Step-by-step ORS and fluid replacement' },
      { icon: 'shield', name: 'When to seek urgent care', meta: 'Blood, fever, severe dehydration, inability to keep fluids down' },
    ],

    careRecs: [
      ['droplets','Increase electrolytes','Frequent episodes deplete sodium and potassium rapidly'],
      ['utensils','Avoid dairy temporarily','Your data suggests dairy may be increasing episode frequency'],
      ['poop','Track frequency precisely','Exact episode counts and timing will strengthen your patterns'],
    ],

    careExperiments: [
      ['utensils','Dairy elimination trial','Remove all dairy for 5 days and track episodes',"nav('track');setSegment('track','continue')"],
      ['pill','Probiotic trial','Add S. boulardii daily for 7 days and track response',"nav('track');setSegment('track','continue')"],
      ['droplets','ORS experiment','Use ORS after every episode for 5 days and track energy',"nav('track');setSegment('track','continue')"],
    ],

    careNavItems: [
      ['clipList','Prepare for Results Review','Checklist, summary, and questions',"navSub('visit')"],
      ['helpCircle','Questions for Gastroenterologist','Organise your main concerns',"navSub('visit')"],
      ['testTube','Tests & Procedures','Prep, instructions, and reminders'],
      ['compass','Referrals & Specialists','Track referrals and specialist visits'],
      ['fileText','Visit Summaries','Review and export past visit notes'],
    ],

    careClinical: {
      timeline: [
        { status: 'done', title: 'Initial consultation', sub: 'Completed \u00b7 1 week ago' },
        { status: 'active', title: 'Stool test submitted', sub: 'Results due \u00b7 In 2 days' },
        { status: '', title: 'Results review', sub: 'Scheduled \u00b7 After results' },
        { status: '', title: 'Treatment plan', sub: 'Pending \u00b7 Based on results', last: true },
      ],
      items: [
        ['clipList','Treatment Plan','Pending stool test results'],
        ['pill','Medications & Adherence','Track clinician-directed treatment'],
        ['calendar','Follow-Up Plan','Next check-ins and monitoring priorities'],
        ['users','Care Team Coordination','Coordinate across your care team'],
        ['testTube','Results & Interpretation','Lab results, tests, and what they mean'],
      ],
    },

    // Visit prep
    visitPrep: {
      title: 'Visit preparation',
      subtitle: 'Stool test results in 2 days',
      stepsTotal: 4,
      stepsDone: 2,
      checklist: [
        { label: 'Define main concern', done: true },
        { label: 'Write questions to ask', done: true },
        { label: 'Review symptom diary', done: false },
        { label: 'Export or print summary', done: false },
      ],
      mainConcern: 'Chronic diarrhea with morning urgency clustering and possible dairy sensitivity. 4+ episodes daily for the past 3 weeks.',
      questions: [
        'What do the stool test results mean for my diagnosis?',
        'Should I get a hydrogen breath test for lactose intolerance?',
        'Could this be bile acid malabsorption given the morning pattern?',
      ],
      summaryNote: 'Auto-generated from your logs and patterns. 6 patterns, 14 days of data.',
    },

    // Chat screen
    chatConversations: [
      ['compass','Results prep conversation','Continued 1 hour ago'],
      ['trendUp','Morning pattern discussion','Yesterday'],
      ['droplets','Hydration guidance','2 days ago'],
      ['sparkles','General GI questions','Last week'],
    ],

    // Notifications
    notifications: {
      action: [
        { group: 'Red Flags', items: [
          { icon: 'alertTri', title: 'High episode frequency', sub: '4 episodes today \u2014 monitor hydration closely', time: 'Today', unread: true, urgent: true },
        ]},
        { group: 'Pattern Changes', items: [
          { icon: 'trendUp', title: 'Pattern confidence changed', sub: 'Morning urgency signal strengthened to 58%', time: 'Today', action: "nav('patterns');openPattern('morning-pattern')", unread: true },
        ]},
        { group: 'Care Tasks Due', items: [
          { icon: 'droplets', title: 'Log hydration', sub: 'Track fluid intake after your last episode', time: '10:30 AM', action: "nav('track');openSheet('hydration')", unread: true },
        ]},
        { group: 'Medication & Supplements', items: [
          { icon: 'pill', title: 'Electrolyte reminder', sub: 'Take ORS after your next episode', time: '11:00 AM', action: "openSheet('meds')" },
        ]},
        { group: 'Visits & Tests Due', items: [
          { icon: 'calendar', title: 'Stool test results in 2 days', sub: 'Continue your prep \u2014 2 of 4 steps complete', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true, urgent: true },
        ]},
        { group: 'Missing Important Data', items: [
          { icon: 'droplets', title: 'No hydration log after episode', sub: 'Filling gaps improves dehydration risk pattern', time: 'Today', action: "openSheet('hydration')" },
        ]},
      ],
      updates: [
        { group: 'Pattern Updates', items: [
          { icon: 'trendUp', title: 'Weekly pattern summary', sub: '6 patterns tracked, 1 strengthened', time: 'Today', action: "nav('patterns')", unread: true },
        ]},
        { group: 'Results & Reports', items: [
          { icon: 'clipList', title: 'Symptom diary ready', sub: 'Preview your updated report for gastroenterologist', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Shared & Network Updates', items: [
          { icon: 'users', title: 'Care team update', sub: 'Dr. Mehta reviewed your symptom diary', time: '1 day ago' },
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
        { icon: 'alertTri', title: 'High episode frequency', sub: 'Monitor hydration closely', time: '10:30 AM', unread: true, urgent: true },
        { icon: 'trendUp', title: 'Pattern confidence changed', sub: 'Morning urgency signal at 58%', time: '11:00 AM', action: "nav('patterns');openPattern('morning-pattern')", unread: true },
        { icon: 'droplets', title: 'Log hydration', sub: 'Track fluid replacement after episodes', time: '10:45 AM', action: "nav('track');openSheet('hydration')" },
        { type: 'time-group', label: 'Yesterday' },
        { icon: 'poop', title: 'Morning episode check-in', sub: 'Log your morning episodes', time: '7:00 AM' },
        { icon: 'utensils', title: 'Food trigger logging', sub: 'Track what you ate before episodes', time: '12:00 PM' },
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
