export default {
  persona: {
    name: 'Priya',
    initials: 'PS',
    fullName: 'Priya Sharma',
    profileDesc: 'Active treatment phase',
    stage: 'Treatment monitoring',
    stageNote: "Here's what matters now.",
    focus: 'GERD focus',
    visitNote: 'GI review in 10 days',
  },

  entries: {
    bm: { title:'Bowel movement', subtitle:'Normal movement · 7:30 AM', icon:'poop', details:[['Type','Bristol 4'],['Discomfort','2/10'],['Reflux','None'],['Time','5 min']] },
    food: { title:'Food', subtitle:'Toast, eggs, herbal tea · 8:15 AM', icon:'utensils', details:[['Meal','Breakfast'],['Foods','Toast, scrambled eggs, chamomile tea'],['Tags','Low-acid, GERD-safe'],['Time','8:15 AM']] },
  },

  patterns: {
    'acid-triggers': {
      title: 'Spicy/acidic foods and heartburn episodes',
      subtitle: 'Heartburn episodes cluster after spicy or acidic meals.',
      confidence: 68,
      chip: 'green', chipLabel: 'Strong evidence',
      bars: [50,70,90,55,85,60,92,65,88,50,80,58,86,62],
      summary: 'When you eat spicy or highly acidic foods, heartburn episodes occur within 2 hours in 8 out of 12 instances. The signal is strong and consistent across multiple food types including tomato-based dishes, citrus, and chilli.',
      factors: [
        ['utensils','Spicy/acidic food intake','Strong signal','var(--green)','68%','#D1FAE5'],
        ['utensils','Meal size','Contributing','#F59E0B','35%','#FEF3C7'],
        ['brain','Stress on same day','May amplify','var(--text-hint)','20%','var(--sand-light)'],
        ['pill','PPI timing','Protective when timed well','var(--green)','55%','#D1FAE5'],
      ],
      clarify: ['Continue logging food triggers for 4 more weeks','Note portion size alongside trigger foods','Track whether PPI timing reduces the effect'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'gastro',
    },
    'positional-reflux': {
      title: 'Lying down after meals and nighttime reflux',
      subtitle: 'Reflux episodes are more frequent when lying down within 2 hours of eating.',
      confidence: 55,
      chip: 'amber', chipLabel: 'Moderate evidence',
      bars: [40,60,80,45,75,50,85,55,70,48],
      summary: 'On nights when you lie down within 2 hours of dinner, nighttime reflux occurs in 7 out of 10 instances. Staying upright for at least 2 hours after eating significantly reduces nighttime symptoms.',
      factors: [
        ['utensils','Post-meal position','Strong signal','var(--green)','55%','#D1FAE5'],
        ['moon','Bedtime proximity to meal','Contributing','#F59E0B','42%','#FEF3C7'],
        ['utensils','Meal size at dinner','Moderate signal','#F59E0B','30%','#FEF3C7'],
        ['activity','Sleeping position','May amplify','var(--text-hint)','22%','var(--sand-light)'],
      ],
      clarify: ['Log time between last meal and lying down','Track sleeping position and nighttime symptoms','Note meal size at dinner'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'gastro',
    },
    'coffee-reflux': {
      title: 'Coffee consumption and acid symptoms',
      subtitle: 'Coffee intake may be associated with increased acid symptoms.',
      confidence: 42,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [35,55,70,40,65,45,75,50],
      summary: 'On days you drink coffee, acid symptoms appear within 1-2 hours more frequently than on coffee-free days. The signal is moderate but the effect may depend on whether coffee is consumed on an empty stomach.',
      factors: [
        ['utensils','Coffee intake','Moderate signal','#F59E0B','42%','#FEF3C7'],
        ['utensils','Empty stomach coffee','May amplify','#F59E0B','35%','#FEF3C7'],
        ['pill','PPI taken before coffee','Protective','var(--text-hint)','28%','var(--sand-light)'],
        ['brain','Stress level','Uncertain','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Track coffee timing relative to meals for 10 days','Note whether decaf produces the same effect','Log PPI timing alongside coffee consumption'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'meal-timing-reflux': {
      title: 'Late dinner and morning throat symptoms',
      subtitle: 'Late dinners may be linked to morning throat irritation and hoarseness.',
      confidence: 38,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [25,50,65,35,60,30,55],
      summary: 'On mornings following dinners after 8 PM, you report throat irritation and hoarseness more often. This could indicate nocturnal acid reflux affecting the throat. More data is needed to confirm.',
      factors: [
        ['utensils','Late dinner timing','Early signal','#F59E0B','38%','#FEF3C7'],
        ['moon','Sleep position','Contributing','var(--text-hint)','25%','var(--sand-light)'],
        ['utensils','Dinner composition','Uncertain','var(--text-hint)','18%','var(--sand-light)'],
        ['pill','Evening PPI dose','May protect','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log dinner timing for 7 days','Track morning throat symptoms upon waking','Note sleeping position and pillow elevation'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'stress-acid': {
      title: 'Stress and esophageal acid sensitivity',
      subtitle: 'High-stress days may correlate with worse acid symptoms.',
      confidence: 28,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [20,45,60,30,55,35,50,25],
      summary: 'On days you rate stress above 6/10, acid symptoms appear somewhat more frequently and with greater intensity. Stress increases esophageal sensitivity to acid (visceral hyperalgesia) and may affect lower esophageal sphincter tone, rather than directly increasing acid production. The relationship is early and may also be mediated by eating habits that change under stress.',
      factors: [
        ['brain','Stress rating','Early signal','#F59E0B','28%','#FEF3C7'],
        ['utensils','Stress-related eating','Contributing','var(--text-hint)','20%','var(--sand-light)'],
        ['moon','Sleep quality','Uncertain','var(--text-hint)','15%','var(--sand-light)'],
        ['pill','PPI adherence on stress days','Uncertain','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log stress rating daily for 2 weeks','Note eating changes on high-stress days','Track acid symptoms within 4 hours of stress events'],
      trackAction: "nav('track');openSheet('mental')",
      chatGuide: 'psychology',
    },
    'ppi-response': {
      title: 'PPI medication timing and symptom control',
      subtitle: 'Taking PPI 30 minutes before meals provides significantly better symptom control.',
      confidence: 72,
      chip: 'green', chipLabel: 'Strong evidence',
      bars: [55,75,90,60,88,65,92,70,85,58,90,68],
      summary: 'When you take your PPI 30 minutes before breakfast, daytime acid symptoms are reduced by roughly 60% compared to days when PPI timing is inconsistent or taken with food. This is one of the strongest signals in your data.',
      factors: [
        ['pill','PPI timing (30 min before meal)','Strong signal','var(--green)','72%','#D1FAE5'],
        ['pill','PPI adherence','Contributing','var(--green)','60%','#D1FAE5'],
        ['utensils','Food triggers on same day','May reduce PPI effect','#F59E0B','30%','#FEF3C7'],
        ['brain','Stress level','Minor factor','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Continue logging PPI timing precisely','Track symptom-free hours after PPI dose','Note days when PPI timing is off and compare outcomes'],
      trackAction: "nav('track');openSheet('meds')",
      chatGuide: 'pharmacy',
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
      intro: 'Your main GI copilot. Ask anything about your GERD symptoms, patterns, what to do next, or how to prepare for care.',
      focuses: ['Symptom interpretation','Next best step','Visit preparation','Pattern clarification','Routing to the right guide'],
      prompts: ['What should I log next?','Explain this pattern','Help me prepare for my review','What should I do now?'],
      userMsg: 'What should I log next?',
      assistantMsg: 'Based on your recent logs, the most useful thing right now would be to log reflux episodes after meals today. Your acid-triggers pattern is strong but benefits from continued tracking. Also log your PPI timing precisely — the PPI-response signal is your strongest pattern and consistent data keeps it reliable.',
      routeOuts: [['Track symptoms',"nav('track');openSheet('symptom')"],['View patterns',"nav('patterns')"]],
    },
    track: {
      intro: 'Helps you figure out what to track, when, and why — so every log moves you toward useful answers.',
      focuses: ['What to log next','Tracking consistency','Signal gaps','Logging priority','Building evidence'],
      prompts: ['What should I log right now?','Help me track more consistently','What signals am I missing?','Which logs matter most?'],
      userMsg: 'What signals am I missing?',
      assistantMsg: 'You\'ve been consistent with food and medication logs, which is great. The gap right now is post-meal symptom timing — you\'re logging reflux but not always noting the time relative to eating, which makes it harder to connect specific foods to acid episodes. Try logging symptoms within 1-2 hours of each meal for the next few days.',
      routeOuts: [['Log symptoms',"nav('track');openSheet('symptom')"],['Continue tracking',"nav('track');setSegment('track','continue')"]],
    },
    patterns: {
      intro: 'Helps you understand what your data means — trends, relationships, and what\'s becoming clearer or more uncertain.',
      focuses: ['Pattern interpretation','Signal strength','What\'s changing','Confidence levels','Data relationships'],
      prompts: ['What does my recent data show?','Compare this week to last week','Which patterns are strengthening?','What\'s still uncertain?'],
      userMsg: 'What does my recent data show?',
      assistantMsg: 'Over the last 14 days, your strongest signal is PPI timing — symptom control is significantly better on days you take PPI 30 minutes before breakfast. Your acid-triggers pattern is also strong at 68% confidence. The coffee-reflux signal is moderate and needs more data to separate coffee from other morning factors.',
      routeOuts: [['View pattern detail',"nav('patterns');navSub('pattern-detail')"],['Track PPI timing',"nav('track');openSheet('meds')"]],
    },
    selfcare: {
      intro: 'Supports your daily habits, guided plans, flare management, and practical self-care between appointments.',
      focuses: ['Daily routines','Guided exercises','Flare support','Habit building','Self-management'],
      prompts: ['What should I focus on today?','Help me with my routine','What\'s my next best step?','I\'m having a flare'],
      userMsg: 'I\'m having a flare',
      assistantMsg: 'I\'m sorry you\'re dealing with a flare. Let\'s start with what you can do right now. Stay upright — avoid lying down. If you have antacids (calcium carbonate), take one for immediate relief. Sip water and avoid any acidic or spicy foods for the rest of the day. If you haven\'t taken your PPI today, check your timing. Log this episode so we can track whether flare days cluster with specific triggers.',
      routeOuts: [['Flare support',"nav('care');setSegment('care','self');setSegment('self','flare')"],['Log symptoms',"nav('track');openSheet('symptom')"]],
    },
    clinicalnav: {
      intro: 'Helps you prepare for visits, build questions, organise your data for doctors, and navigate the clinical system.',
      focuses: ['Visit preparation','Doctor questions','Summary generation','Test preparation','Referral guidance'],
      prompts: ['Help me prepare for my review','What questions should I ask?','Turn my patterns into a summary','What should I bring up?'],
      userMsg: 'Help me prepare for my review',
      assistantMsg: 'Your GI review is in 10 days. Based on your logs, the top things to discuss are: your PPI response and whether the current dose is optimal, your acid trigger patterns, and whether an endoscopy is warranted to assess the esophageal lining. I can generate a doctor-ready summary from your data and help you build a question list.',
      routeOuts: [['Visit prep',"nav('care');setSegment('care','navigation');navSub('visit')"],['View summary',"nav('patterns');setSegment('patterns','trends')"]],
    },
    clinicalcare: {
      intro: 'Helps you organise treatment plans, track medication adherence, monitor treatment response, and coordinate follow-up.',
      focuses: ['Treatment tracking','Medication adherence','Response monitoring','Follow-up planning','Care coordination'],
      prompts: ['Is my treatment helping?','What should I track for follow-up?','Review my medication adherence','What changed since I started treatment?'],
      userMsg: 'Is my treatment helping?',
      assistantMsg: 'You\'re on day 21 of 60 for your current PPI treatment. Looking at your logs, heartburn frequency has decreased from daily to about 3 times per week, and nighttime reflux episodes are down when you maintain the 3-hour post-dinner upright period. The PPI timing pattern shows clear benefit when taken 30 minutes before breakfast. Keep logging so we can give your doctor a clear treatment response picture.',
      routeOuts: [['Treatment timeline',"nav('care');setSegment('care','clinical')"],['Log treatment',"nav('track');openSheet('treatment')"]],
    },
    gastro: {
      intro: 'Provides a gastroenterology perspective on your symptoms, patterns, and clinical questions.',
      focuses: ['GI symptom interpretation','Differential considerations','Test guidance','Red flag assessment','Clinical context'],
      prompts: ['What could be causing this?','Should I be concerned?','What tests might help?','Is this pattern typical?'],
      userMsg: 'Should I be concerned about my GERD symptoms?',
      assistantMsg: 'Your GERD symptoms appear to be responding to PPI therapy, which is encouraging. The key things to monitor are: whether symptoms are adequately controlled on your current dose, any alarm features like difficulty swallowing or unintended weight loss, and the duration of treatment. If symptoms persist despite optimal PPI use, your gastroenterologist may recommend an upper endoscopy to evaluate the esophageal lining and rule out complications like Barrett\'s esophagus.',
      routeOuts: [['View patterns',"nav('patterns')"],['Prepare for review',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
    nutrition: {
      intro: 'Provides guidance on diet, food triggers, meal timing, and how nutrition relates to your GERD symptoms.',
      focuses: ['Food-symptom connections','Meal timing','Dietary strategies','Trigger identification','Nutritional support'],
      prompts: ['Are there foods I should avoid?','Help me with meal timing','Review my food-symptom patterns','What diet changes might help?'],
      userMsg: 'What foods should I avoid for GERD?',
      assistantMsg: 'Your data shows clear triggers: spicy foods, citrus, and tomato-based dishes correlate strongly with heartburn episodes. Coffee is a moderate signal. Beyond individual triggers, meal timing matters — eating within 3 hours of bedtime worsens nighttime reflux. Try smaller, more frequent meals and focus on GERD-safe foods: lean proteins, non-citrus fruits, vegetables, whole grains, and ginger or chamomile tea.',
      routeOuts: [['Log food',"nav('track');openSheet('food')"],['View food patterns',"nav('patterns');setSegment('patterns','connections')"]],
    },
    pelvic: {
      intro: 'Provides guidance on pelvic floor function, evacuation mechanics, and exercises that support bowel health.',
      focuses: ['Pelvic floor function','Evacuation support','Straining reduction','Coordination exercises','Motility support'],
      prompts: ['Help with straining','What pelvic floor exercises help?','Why can\'t I fully evacuate?','Is my posture affecting this?'],
      userMsg: 'Can posture affect my GERD symptoms?',
      assistantMsg: 'Absolutely. Posture has a direct impact on GERD. Slouching or bending forward increases abdominal pressure, which can push stomach acid upward. Staying upright after meals, maintaining good posture during eating, and elevating the head of your bed 6-8 inches can all reduce reflux episodes. Your positional-reflux pattern at 55% confidence supports this connection in your data.',
      routeOuts: [['Sleeping position habits',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log symptoms',"nav('track');openSheet('symptom')"]],
    },
    psychology: {
      intro: 'Explores the gut-brain connection — how stress, anxiety, and mental health affect your GERD symptoms and what to do about it.',
      focuses: ['Gut-brain axis','Stress-symptom links','Nervous system regulation','Cognitive patterns','Emotional wellbeing'],
      prompts: ['How does stress affect my acid reflux?','Help me understand the gut-brain connection','What calming techniques help?','Is anxiety making this worse?'],
      userMsg: 'How does stress affect my acid reflux?',
      assistantMsg: 'Stress can worsen GERD through multiple pathways. It heightens esophageal sensitivity to acid (visceral hyperalgesia), may affect lower esophageal sphincter tone, and can change eating behaviours (eating faster, choosing comfort foods that may be triggers). Your data shows a 28% confidence link between high-stress days and worse acid symptoms. Diaphragmatic breathing is particularly helpful for GERD — it strengthens the diaphragm, which acts as a natural anti-reflux barrier.',
      routeOuts: [['Breathing exercise',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log stress',"nav('track');openSheet('mental')"]],
    },
    functional: {
      intro: 'Offers a root-cause, systems-level perspective on your GI health — looking at the bigger picture beyond individual symptoms.',
      focuses: ['Root-cause thinking','Systems perspective','Lifestyle factors','Holistic context','Integrative approach'],
      prompts: ['What root causes should I explore?','How do my systems connect?','What lifestyle factors matter?','What am I missing?'],
      userMsg: 'What root causes should I explore for my GERD?',
      assistantMsg: 'Looking at your full picture — acid reflux, food triggers, stress, and meal timing — there are several interconnected factors. Stress increases esophageal sensitivity to acid and may impair sphincter function. Late meals reduce the protective upright period. Coffee and spicy foods can trigger transient lower esophageal sphincter relaxations (TLESRs) and activate acid-sensitive receptors in the esophagus. A functional approach would focus on optimising PPI timing, establishing a consistent 3-hour pre-bed fasting window, managing stress, and systematically identifying and removing trigger foods.',
      routeOuts: [['View all connections',"nav('patterns');setSegment('patterns','connections')"],['Daily habits',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    ayurveda: {
      intro: 'Provides a traditional Ayurvedic perspective on digestion, lifestyle balance, and natural approaches to gut health.',
      focuses: ['Digestive fire (Agni)','Constitutional balance','Lifestyle rhythm','Natural remedies','Seasonal guidance'],
      prompts: ['What does Ayurveda say about acid reflux?','How can I balance my digestive fire?','What daily routine helps?'],
      userMsg: 'What does Ayurveda say about acid reflux?',
      assistantMsg: 'In Ayurveda, acid reflux is typically associated with Pitta imbalance — excess heat and sharpness in the digestive system. Key recommendations include cooling foods (cucumber, coconut, fennel), avoiding sour and spicy tastes, eating your main meal at midday when digestive fire is strongest, and drinking room-temperature or cool water between meals. Aloe vera juice and DGL (deglycyrrhizinated licorice) are traditionally used to soothe the digestive tract. Important: regular licorice root should be avoided as it can cause high blood pressure and electrolyte problems — DGL has the problematic compound removed. Avoiding eating when stressed or rushed is considered essential.',
      routeOuts: [['Daily routine',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log food',"nav('track');openSheet('food')"]],
    },
    pharmacy: {
      intro: 'Provides guidance on medications, supplements, interactions, and adherence — helping you understand what you\'re taking and why.',
      focuses: ['Medication review','Side effects','Drug interactions','Supplement guidance','Adherence support'],
      prompts: ['How should I time my PPI?','Check my interactions','Should I adjust my dosage?','What supplements might help?'],
      userMsg: 'How should I time my PPI?',
      assistantMsg: 'PPI timing is crucial for effectiveness. Take your PPI 30 minutes before your first meal of the day — this is when the medication works best because it needs food-stimulated acid production to activate. Your data strongly supports this: days with proper PPI timing show 60% fewer acid symptoms. If you\'re on twice-daily dosing, take the second dose 30 minutes before dinner. Avoid taking PPIs with other medications that affect absorption. Note: long-term PPI use has been associated with certain risks including vitamin B12 deficiency, increased fracture risk, and C. difficile infection — discuss the planned duration and ongoing need with your doctor at your next review.',
      routeOuts: [['Log medication',"nav('track');openSheet('meds')"],['Treatment plan',"nav('care');setSegment('care','clinical')"]],
    },
  },

  screens: {
    // Today screen
    todayGreeting: 'Good morning, Priya',
    todaySubtitle: "Treatment monitoring · Here's what matters now.",
    todayStatePills: [
      { icon: 'activity', text: '4 of 6 signals' },
      { icon: 'calendar', text: 'GI review in 10 days' },
      { text: 'Treatment day 21 of 60' },
    ],
    todayTopPriority: {
      title: 'Top priority',
      subtitle: 'Take PPI 30 minutes before breakfast and log reflux episodes after meals',
      action: "nav('track');setSegment('track','quick');openSheet('meds')",
      ctaText: 'Do this now',
    },
    todayFeed: [
      { icon: 'thermom', title: 'Must do today', subtitle: "Log reflux episodes after each meal to track acid triggers", action: "nav('track');openSheet('symptom')" },
      { icon: 'pill', title: 'PPI timing check', subtitle: 'Log your PPI dose timing for treatment monitoring', action: "nav('track');openSheet('meds')" },
      { icon: 'trendUp', title: 'Strong signal', subtitle: 'PPI timing pattern shows clear benefit — keep logging', action: "nav('patterns');openPattern('ppi-response')" },
      { icon: 'utensils', title: 'Trigger awareness', subtitle: 'Spicy/acidic food pattern at 68% confidence', action: "nav('patterns');openPattern('acid-triggers')" },
      { icon: 'msgCircle', title: 'Chat prompt', subtitle: 'Ask about PPI timing or food triggers', action: "nav('chat')" },
      { icon: 'clock', title: 'Recent activity', subtitle: 'Bowel movement logged at 7:30 AM', action: "openEntry('bm')" },
    ],

    // Track screen
    quickGrid: [
      ['poop','Bowel',"openEntry('bm')"],['thermom','Symptoms',"openSheet('symptom')"],['utensils','Nutrition',"openEntry('food')"],
      ['droplets','Hydration',"openSheet('hydration')"],['moon','Sleep',"openSheet('sleep')"],['brain','Stress & Mood',"openSheet('mental')"],
      ['activity','Movement',"openSheet('movement')"],['pill','Meds & Supps',"openSheet('meds')"],['flower','Period',"openSheet('menstrual')"],
      ['fileText','Notes',"openSheet('note')"],
    ],
    mainTrackers: [
      ['thermom','Symptoms','Track reflux episodes, heartburn, and throat symptoms',"openSheet('symptom')"],
      ['utensils','Nutrition','Track meals, triggers, and food-response context',"openEntry('food')"],
      ['pill','Medication','Track PPI timing and adherence',"openSheet('meds')"],
    ],

    continueTrackers: {
      groups: [
        { label: 'Resume Incomplete', items: [
          ['utensils','Finish logging breakfast','You started but didn\'t add details',"openEntry('food')"],
        ]},
        { label: 'Suggested Next Log', items: [
          ['thermom','Log reflux after meals','Best next signal to connect food to acid symptoms',"openSheet('symptom')"],
          ['pill','Track PPI timing','Strengthen your PPI response pattern',"openSheet('meds')"],
        ]},
        { label: 'In-Progress Tracking', items: [
          ['steth','Log treatment response','Track PPI treatment response on day 21',"openSheet('treatment')"],
        ]},
      ],
    },

    recentEntries: {
      groups: [
        { label: 'Today', items: [
          ['poop','Bowel movement','Normal movement · 7:30 AM',"openEntry('bm')"],
          ['utensils','Food','Toast, eggs, herbal tea · 8:15 AM',"openEntry('food')"],
          ['thermom','Symptoms','Not logged yet today',"openSheet('symptom')"],
        ]},
        { label: 'Yesterday', items: [
          ['thermom','Symptoms','Heartburn 4/10 after dinner · 8:45 PM',"openSheet('symptom')"],
          ['utensils','Food','Pasta with tomato sauce · 7:30 PM',"openEntry('food')"],
          ['pill','Medication','PPI taken at 7:00 AM',"openSheet('meds')"],
        ]},
        { label: 'This Week', items: [
          ['moon','Sleep','7 hours average · 4 entries',"openSheet('sleep')"],
          ['brain','Stress & Mood','Moderate stress · 3 entries',"openSheet('mental')"],
        ]},
      ],
    },

    moreTrackers: {
      groups: [
        { label: 'Daily Foundations', items: [
          ['pill','Medication & Supplements','Track PPI adherence and timing',"openSheet('meds')"],
          ['brain','Mental Health','Stress and mood context for acid patterns',"openSheet('mental')"],
          ['activity','Energy & Movement','Movement and energy to support digestive health',"openSheet('movement')"],
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
      ['thermom','No reflux logged yet','Add symptoms to strengthen acid trigger pattern',"openSheet('symptom')"],
    ],

    // Patterns screen
    patternHero: {
      title: 'Spicy/acidic foods \u2192 heartburn episodes',
      subtitle: 'Heartburn episodes cluster after spicy or acidic meals with strong consistency.',
      chip: 'green',
      chipLabel: 'Strong evidence',
      bars: [50,70,90,55,85,60,92,65,88,50,80,58,86,62],
      confidence: 68,
      confidenceColor: 'var(--green)',
      action: "openPattern('acid-triggers')",
      signalRows: [
        { color: 'green', label: 'Heartburn after spicy/acidic meals', value: '8 of 12' },
        { color: 'green', label: 'PPI timing reduces episodes', value: '9 of 11' },
        { color: 'muted', label: 'Coffee alone \u2192 acid symptoms', value: '5 of 10' },
      ],
    },

    patternFeed: {
      groups: [
        { label: 'Strongest Patterns', items: [
          ['pill','PPI timing and symptom control','Strong evidence \u00b7 72% confidence',"openPattern('ppi-response')"],
          ['utensils','Spicy/acidic foods and heartburn','Strong evidence \u00b7 68% confidence',"openPattern('acid-triggers')"],
        ]},
        { label: 'Active Patterns', items: [
          ['moon','Lying down after meals and reflux','Moderate evidence \u00b7 55% confidence',"openPattern('positional-reflux')"],
          ['utensils','Coffee and acid symptoms','Moderate confidence \u00b7 tracking in progress',"openPattern('coffee-reflux')"],
        ]},
        { label: 'New Signals', items: [
          ['utensils','Late dinner and morning throat symptoms','Low confidence \u00b7 needs more data',"openPattern('meal-timing-reflux')"],
          ['brain','Stress and esophageal acid sensitivity','Early signal \u00b7 needs more data',"openPattern('stress-acid')"],
        ]},
        { label: 'Strengthening', items: [
          ['trendUp','PPI response signal growing','Confidence up from 60% to 72%',"openPattern('ppi-response')"],
        ]},
        { label: 'What Changed', items: [
          ['refresh','Coffee signal needs clarity','More data needed to separate from other factors',"openPattern('coffee-reflux')"],
        ]},
      ],
    },

    patternConnections: [
      ['utensils','Food \u2192 Acid Symptoms','Spicy and acidic foods cluster with heartburn episodes',"openPattern('acid-triggers')"],
      ['pill','PPI \u2192 Symptom Control','Proper PPI timing provides significant relief',"openPattern('ppi-response')"],
      ['moon','Position \u2192 Reflux','Lying down after meals triggers nighttime reflux',"openPattern('positional-reflux')"],
      ['utensils','Coffee \u2192 Acid','Coffee intake linked to increased acid symptoms',"openPattern('coffee-reflux')"],
      ['brain','Stress \u2192 Acid','High stress days show more acid symptoms',"openPattern('stress-acid')"],
      ['utensils','Meal Timing \u2192 Throat','Late dinners linked to morning throat symptoms',"openPattern('meal-timing-reflux')"],
    ],

    patternExperiments: [
      ['utensils','Coffee elimination trial','Remove coffee for 7 days and track acid symptoms',"nav('track');setSegment('track','continue')"],
      ['utensils','Dinner timing experiment','Eat dinner before 6 PM for 7 days',"nav('track');setSegment('track','continue')"],
    ],

    patternTrends: [
      ['thermom','Symptom Trends','Heartburn and reflux frequency over 30 days'],
      ['pill','Medication Trends','PPI adherence and timing patterns'],
      ['utensils','Nutrition Trends','Trigger food exposure and meal timing'],
      ['moon','Daily Foundations Trends','Sleep, position, and stress'],
    ],
    patternTrendsChart: {
      bars: [60,45,70,35,80,40,25,55,65,30,75,20,50,85],
    },

    patternReports: [
      ['clipList','Weekly Summary','This week at a glance'],
      ['calendar','Monthly Summary','30-day pattern overview'],
      ['compass','Visit-Ready Summary','Formatted for your doctor',"nav('care');setSegment('care','navigation');navSub('visit')"],
      ['clock','Pattern History','How patterns have evolved over time'],
    ],

    // Care screen
    careHabits: [
      { icon: 'bed', name: 'Elevated sleeping position', meta: 'Raise head of bed 6-8 inches to reduce nighttime reflux', tag: 'Recommended now' },
      { icon: 'clock', name: 'Post-meal upright period', meta: 'Stay upright 2-3 hours after eating' },
      { icon: 'pill', name: 'PPI timing reminder', meta: 'Take PPI 30 minutes before breakfast' },
      { icon: 'droplets', name: 'Water between meals', meta: 'Stay hydrated between meals — some people find alkaline water helpful, but evidence is limited' },
    ],

    carePlans: [
      ['clipList','GERD elimination diet','Week 3 of 6 \u00b7 Identifying trigger foods'],
      ['pill','PPI optimization plan','Day 21 of 60 \u00b7 Monitoring treatment response'],
    ],

    careFlare: [
      { icon: 'alertTri', name: 'Acute heartburn relief', meta: 'Antacids (calcium carbonate) for immediate relief, stay upright, avoid triggers' },
      { icon: 'droplets', name: 'Hydration and positioning', meta: 'Stay upright, sip water, avoid triggers — alkaline water is optional (limited evidence)' },
      { icon: 'shield', name: 'When to escalate', meta: 'Know when self-care is no longer enough' },
    ],

    careRecs: [
      ['utensils','Avoid eating 3 hours before bed','Your data shows nighttime reflux worsens with late meals'],
      ['utensils','Reduce coffee intake','Coffee-reflux signal at 42% — consider elimination trial'],
      ['utensils','Eat smaller, more frequent meals','Smaller meals reduce stomach pressure and acid reflux'],
    ],

    careExperiments: [
      ['utensils','Coffee elimination trial','Remove coffee for 7 days and track acid symptoms',"nav('track');setSegment('track','continue')"],
      ['utensils','Dinner timing experiment','Eat dinner before 6 PM for 7 days',"nav('track');setSegment('track','continue')"],
      ['moon','Sleep position experiment','Sleep elevated for 7 nights and track reflux',"nav('track');setSegment('track','continue')"],
    ],

    careNavItems: [
      ['clipList','Prepare for Review','Checklist, summary, and questions',"navSub('visit')"],
      ['helpCircle','Questions for Doctor','Organise your main concerns',"navSub('visit')"],
      ['testTube','Tests & Procedures','Endoscopy prep, instructions, and reminders'],
      ['compass','Referrals & Specialists','Track referrals and specialist visits'],
      ['fileText','Visit Summaries','Review and export past visit notes'],
    ],

    careClinical: {
      timeline: [
        { status: 'done', title: 'Initial consultation', sub: 'Completed \u00b7 3 weeks ago' },
        { status: 'active', title: 'PPI treatment started', sub: 'In progress \u00b7 Day 21 of 60' },
        { status: '', title: 'GI review', sub: 'Scheduled \u00b7 In 10 days' },
        { status: '', title: 'Potential endoscopy', sub: 'Pending \u00b7 Based on review outcome', last: true },
      ],
      items: [
        ['clipList','Treatment Plan','PPI therapy and lifestyle modifications'],
        ['pill','Medications & Adherence','Track PPI timing and response'],
        ['calendar','Follow-Up Plan','Next check-ins and monitoring priorities'],
        ['users','Care Team Coordination','Coordinate across your care team'],
        ['testTube','Results & Interpretation','Lab results, tests, and what they mean'],
      ],
    },

    // Visit prep
    visitPrep: {
      title: 'Visit preparation',
      subtitle: 'GI review in 10 days',
      stepsTotal: 4,
      stepsDone: 2,
      checklist: [
        { label: 'Define main concern', done: true },
        { label: 'Write questions to ask', done: true },
        { label: 'Review doctor summary', done: false },
        { label: 'Export or print summary', done: false },
      ],
      mainConcern: 'GERD management — assessing PPI efficacy, discussing trigger patterns, and evaluating need for endoscopy.',
      questions: [
        'Is my PPI dose adequate or should we adjust?',
        'Should I have an endoscopy to check for esophageal damage?',
        'How long should I stay on PPI treatment?',
      ],
      summaryNote: 'Auto-generated from your logs and patterns. 6 patterns, 21 days of data.',
    },

    // Chat screen
    chatConversations: [
      ['pill','PPI timing discussion','Continued 1 hour ago'],
      ['utensils','Food trigger analysis','Yesterday'],
      ['compass','Review preparation','3 days ago'],
      ['sparkles','General GERD questions','Last week'],
    ],

    // Notifications
    notifications: {
      action: [
        { group: 'Red Flags', items: [
          { icon: 'alertTri', title: 'Persistent throat symptoms', sub: 'Morning hoarseness 3 days in a row \u2014 mention at your review', time: 'Today', unread: true, urgent: true },
        ]},
        { group: 'Pattern Changes', items: [
          { icon: 'trendUp', title: 'Pattern confidence changed', sub: 'PPI response signal strengthened to 72%', time: 'Today', action: "nav('patterns');openPattern('ppi-response')", unread: true },
        ]},
        { group: 'Care Tasks Due', items: [
          { icon: 'thermom', title: 'Log reflux after lunch', sub: "Strengthen today's acid trigger signal", time: '1:00 PM', action: "nav('track');openSheet('symptom')", unread: true },
        ]},
        { group: 'Medication & Supplements', items: [
          { icon: 'pill', title: 'Morning PPI reminder', sub: 'Take 30 minutes before breakfast', time: '7:00 AM', action: "openSheet('meds')" },
        ]},
        { group: 'Visits & Tests Due', items: [
          { icon: 'calendar', title: 'GI review in 10 days', sub: 'Continue your prep \u2014 2 of 4 steps complete', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Missing Important Data', items: [
          { icon: 'thermom', title: 'No reflux log after dinner', sub: 'Post-meal logging improves trigger pattern accuracy', time: 'Yesterday', action: "openSheet('symptom')" },
        ]},
      ],
      updates: [
        { group: 'Pattern Updates', items: [
          { icon: 'trendUp', title: 'Weekly pattern summary', sub: '6 patterns tracked, 2 strengthened', time: 'Today', action: "nav('patterns')", unread: true },
        ]},
        { group: 'Results & Reports', items: [
          { icon: 'clipList', title: 'Doctor summary ready', sub: 'Preview your updated report', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Shared & Network Updates', items: [
          { icon: 'users', title: 'Care team update', sub: 'Dr. Patel viewed your summary', time: '2 days ago' },
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
        { icon: 'alertTri', title: 'Persistent throat symptoms', sub: 'Mention at your review', time: '9:00 AM', unread: true, urgent: true },
        { icon: 'trendUp', title: 'Pattern confidence changed', sub: 'PPI response at 72%', time: '10:15 AM', action: "nav('patterns');openPattern('ppi-response')", unread: true },
        { icon: 'thermom', title: 'Log reflux after lunch', sub: "Strengthen today's signal", time: '1:00 PM', action: "nav('track');openSheet('symptom')" },
        { type: 'time-group', label: 'Yesterday' },
        { icon: 'pill', title: 'PPI timing check', sub: 'Log your morning dose timing', time: '7:00 AM' },
        { icon: 'utensils', title: 'Dinner trigger alert', sub: 'Tomato sauce flagged as potential trigger', time: '8:00 PM' },
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
