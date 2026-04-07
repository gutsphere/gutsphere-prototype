export default {
  persona: {
    name: 'Marcus',
    initials: 'MR',
    fullName: 'Marcus Rivera',
    profileDesc: 'Early tracking phase',
    stage: 'Pattern discovery',
    stageNote: "Here's what matters now.",
    focus: 'Bloating focus',
    visitNote: 'Dietitian consult in 5 days',
  },

  entries: {
    bm: { title:'Bowel movement', subtitle:'Normal movement, mild gas · 9:10 AM', icon:'poop', details:[['Type','Bristol 4'],['Gas','6/10'],['Bloating','4/10'],['Time','8 min']] },
    food: { title:'Food', subtitle:'Smoothie, toast, coffee · 8:00 AM', icon:'utensils', details:[['Meal','Breakfast'],['Foods','Smoothie with banana, toast, coffee'],['Tags','Fiber-rich, moderate portion'],['Time','8:00 AM']] },
  },

  patterns: {
    'gas-producing-foods': {
      title: 'Certain foods and bloating episodes',
      subtitle: 'Specific foods consistently precede bloating within 2–4 hours.',
      confidence: 55,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [40,60,85,55,90,50,80,65,88,52,78,60,85,58],
      summary: 'When you eat known gas-producing foods (beans, cruciferous vegetables, onions), bloating episodes follow within 2–4 hours in roughly 7 out of 12 tracked instances. The signal is moderate and growing as you log more meals with detail.',
      factors: [
        ['utensils','Gas-producing food intake','Strong signal','var(--green)','55%','#D1FAE5'],
        ['utensils','Meal size','Contributing','#F59E0B','32%','#FEF3C7'],
        ['brain','Stress level','May amplify','var(--text-hint)','18%','var(--sand-light)'],
        ['droplets','Hydration','Uncertain','var(--text-hint)','14%','var(--sand-light)'],
      ],
      clarify: ['Log specific foods in every meal for 2 weeks','Rate bloating severity within 2–4 hours of eating','Note which food categories trigger the strongest response'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'eating-speed': {
      title: 'Fast eating and post-meal distension',
      subtitle: 'Eating quickly may lead to more air swallowing and bloating.',
      confidence: 35,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [25,50,70,35,65,30,55],
      summary: 'On meals where you report eating quickly (under 10 minutes), post-meal distension and gas tend to be higher. The signal is early but consistent in direction.',
      factors: [
        ['utensils','Eating speed','Early signal','#F59E0B','35%','#FEF3C7'],
        ['utensils','Meal size','Contributing','#F59E0B','28%','#FEF3C7'],
        ['brain','Distraction during meals','Uncertain','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log eating duration for each meal','Rate distension 30 minutes after eating','Note whether you ate while distracted'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'carbonation-effect': {
      title: 'Carbonated drinks and gas buildup',
      subtitle: 'Carbonated beverages appear to increase gas and bloating.',
      confidence: 48,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [35,65,80,45,75,40,70,55,82,48],
      summary: 'On days you consume carbonated drinks, gas and abdominal distension ratings are notably higher within 1–2 hours. The pattern is moderate and strengthening with more data points.',
      factors: [
        ['droplets','Carbonated drink intake','Moderate signal','#F59E0B','48%','#FEF3C7'],
        ['utensils','Accompanying food','Contributing','#F59E0B','25%','#FEF3C7'],
        ['brain','Stress on same day','Weak signal','var(--text-hint)','16%','var(--sand-light)'],
      ],
      clarify: ['Log carbonated drink consumption for 10 days','Rate gas severity within 2 hours of drinking','Compare days with and without carbonation'],
      trackAction: "nav('track');openSheet('hydration')",
      chatGuide: 'nutrition',
    },
    'fiber-changes': {
      title: 'Fiber intake changes and bloating severity',
      subtitle: 'Sudden changes in fiber intake may trigger bloating episodes.',
      confidence: 22,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [15,40,60,25,55,20,45],
      summary: 'Days with a significant increase or decrease in fiber compared to your average show more bloating. This is a new signal and needs consistent fiber logging to confirm.',
      factors: [
        ['utensils','Fiber intake variability','Early signal','#F59E0B','22%','#FEF3C7'],
        ['droplets','Hydration level','Contributing','var(--text-hint)','18%','var(--sand-light)'],
        ['activity','Movement level','Uncertain','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log fiber-rich foods specifically for 2 weeks','Track bloating severity after high-fiber meals','Note whether gradual increases are better tolerated'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'meal-size': {
      title: 'Large meal portions and evening bloating',
      subtitle: 'Larger meals may lead to more evening bloating and distension.',
      confidence: 40,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [30,55,75,40,70,35,65,50],
      summary: 'On days with larger-than-usual meals, evening bloating ratings are consistently higher. The effect is strongest when the large meal is dinner.',
      factors: [
        ['utensils','Meal portion size','Moderate signal','#F59E0B','40%','#FEF3C7'],
        ['utensils','Meal timing','Contributing','#F59E0B','30%','#FEF3C7'],
        ['activity','Post-meal activity','Weak signal','var(--text-hint)','18%','var(--sand-light)'],
        ['brain','Evening stress','Uncertain','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log portion sizes for 10 days','Rate evening bloating on a consistent scale','Compare smaller frequent meals vs fewer large meals'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'stress-bloating': {
      title: 'Stress and abdominal distension',
      subtitle: 'High-stress days show more bloating and gas symptoms.',
      confidence: 18,
      chip: 'amber', chipLabel: 'Very early',
      bars: [20,35,50,25,45,30,55],
      summary: 'On days you rate stress above 6/10, bloating and gas reports tend to be higher. The gut-brain connection may be amplifying physical distension. Very few data points so far.',
      factors: [
        ['brain','Stress rating','Early signal','#F59E0B','18%','#FEF3C7'],
        ['utensils','Irregular meals','Contributing','var(--text-hint)','14%','var(--sand-light)'],
        ['moon','Sleep quality','Uncertain','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log stress rating daily for 2 weeks','Note bloating severity on high-stress vs low-stress days','Track whether calming exercises reduce bloating'],
      trackAction: "nav('track');openSheet('mental')",
      chatGuide: 'psychology',
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
      prompts: ['What should I log next?','Explain this pattern','Help me prepare for my consult','What should I do now?'],
      userMsg: 'What should I log next?',
      assistantMsg: 'Based on your recent logs, the most useful thing right now would be to log your meals with specific food details and rate bloating within 2–4 hours. Your gas-producing foods pattern is building but needs more data points to separate triggers. After logging, check Patterns to see if the signal strengthens.',
      routeOuts: [['Track food',"nav('track');openSheet('food')"],['View patterns',"nav('patterns')"]],
    },
    track: {
      intro: 'Helps you figure out what to track, when, and why — so every log moves you toward useful answers.',
      focuses: ['What to log next','Tracking consistency','Signal gaps','Logging priority','Building evidence'],
      prompts: ['What should I log right now?','Help me track more consistently','What signals am I missing?','Which logs matter most?'],
      userMsg: 'What signals am I missing?',
      assistantMsg: 'You\'ve been logging meals and bowel movements, which is a great start. The gap right now is bloating timing — you\'re not always rating distension after meals, which makes it harder to connect specific foods to bloating. Try rating bloating 2–4 hours after each meal for the next few days.',
      routeOuts: [['Log symptoms',"nav('track');openSheet('symptom')"],['Continue tracking',"nav('track');setSegment('track','continue')"]],
    },
    patterns: {
      intro: 'Helps you understand what your data means — trends, relationships, and what\'s becoming clearer or more uncertain.',
      focuses: ['Pattern interpretation','Signal strength','What\'s changing','Confidence levels','Data relationships'],
      prompts: ['What does my recent data show?','Compare this week to last week','Which patterns are strengthening?','What\'s still uncertain?'],
      userMsg: 'What does my recent data show?',
      assistantMsg: 'Over the last 14 days, your strongest signal is gas-producing foods — certain foods precede bloating episodes at 55% confidence. Your carbonation pattern is also growing at 48%. Eating speed and meal size both show early signals but need more consistent logging to clarify.',
      routeOuts: [['View pattern detail',"nav('patterns');navSub('pattern-detail')"],['Track food details',"nav('track');openSheet('food')"]],
    },
    selfcare: {
      intro: 'Supports your daily habits, guided plans, flare management, and practical self-care between appointments.',
      focuses: ['Daily routines','Guided exercises','Flare support','Habit building','Self-management'],
      prompts: ['What should I focus on today?','Help me with my routine','What\'s my next best step?','I\'m feeling really bloated'],
      userMsg: 'I\'m feeling really bloated',
      assistantMsg: 'I\'m sorry you\'re uncomfortable. Let\'s address this right now. A gentle abdominal massage in a clockwise direction can help move trapped gas. A short walk (even 10 minutes) after meals also helps. Log how you\'re feeling so we can track whether these episodes cluster with specific triggers.',
      routeOuts: [['Flare support',"nav('care');setSegment('care','self');setSegment('self','flare')"],['Abdominal massage',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    clinicalnav: {
      intro: 'Helps you prepare for visits, build questions, organise your data for clinicians, and navigate the clinical system.',
      focuses: ['Visit preparation','Clinician questions','Summary generation','Test preparation','Referral guidance'],
      prompts: ['Help me prepare for my consult','What questions should I ask?','Turn my patterns into a summary','What should I bring up?'],
      userMsg: 'Help me prepare for my consult',
      assistantMsg: 'Your dietitian consult is in 5 days. Based on your logs, the top things to discuss are: your bloating pattern with gas-producing foods, the carbonation connection, and whether an elimination diet might help identify your main triggers. I can generate a summary from your data and help you build a question list.',
      routeOuts: [['Visit prep',"nav('care');setSegment('care','navigation');navSub('visit')"],['View summary',"nav('patterns');setSegment('patterns','trends')"]],
    },
    clinicalcare: {
      intro: 'Helps you organise treatment plans, track dietary adherence, monitor response, and coordinate follow-up.',
      focuses: ['Treatment tracking','Dietary adherence','Response monitoring','Follow-up planning','Care coordination'],
      prompts: ['Is my elimination diet helping?','What should I track for follow-up?','Review my dietary adherence','What changed since I started?'],
      userMsg: 'Is my elimination diet helping?',
      assistantMsg: 'You\'re on day 8 of your elimination phase. Looking at your logs, bloating frequency has decreased from daily to every other day, and severity has dropped from 6/10 to 4/10 on average. The early signs are positive. Keep logging so we can give your dietitian a clear before-and-after picture when you start reintroduction.',
      routeOuts: [['Treatment timeline',"nav('care');setSegment('care','clinical')"],['Log food',"nav('track');openSheet('food')"]],
    },
    gastro: {
      intro: 'Provides a gastroenterology perspective on your symptoms, patterns, and clinical questions.',
      focuses: ['GI symptom interpretation','Differential considerations','Test guidance','Red flag assessment','Clinical context'],
      prompts: ['What could be causing this?','Should I be concerned?','What tests might help?','Is this pattern typical?'],
      userMsg: 'What could be causing my bloating?',
      assistantMsg: 'Bloating with gas and distension can have several explanations. The most common include food intolerances (lactose, fructose, FODMAPs), small intestinal bacterial overgrowth (SIBO), celiac disease, functional dyspepsia, or simply aerophagia (swallowing air). Your food-trigger pattern is interesting — it suggests specific food intolerances may be playing a role. In a chronic bloating workup, clinicians often consider ruling out celiac disease — a blood test (tTG-IgA) is commonly used to screen for it — your clinician can advise whether this is appropriate. A gastroenterologist might also consider breath testing for SIBO or carbohydrate malabsorption.',
      routeOuts: [['View patterns',"nav('patterns')"],['Prepare for consult',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
    nutrition: {
      intro: 'Provides guidance on diet, food triggers, meal timing, and how nutrition relates to your GI symptoms.',
      focuses: ['Food-symptom connections','Meal timing','Dietary strategies','Trigger identification','Nutritional support'],
      prompts: ['Are there foods I should avoid?','Help me with portion sizes','Review my food-bloating patterns','What diet changes might help?'],
      userMsg: 'Help me identify my food triggers',
      assistantMsg: 'Your data shows a clear signal: bloating is worse after meals containing known gas-producing foods like beans, broccoli, and onions. Carbonated drinks also seem to contribute. A structured elimination approach — removing the top suspects for 2–3 weeks, then reintroducing one at a time — is the best way to confirm your personal triggers. Log every meal with specific ingredients to build a clearer picture.',
      routeOuts: [['Log food',"nav('track');openSheet('food')"],['View food patterns',"nav('patterns');setSegment('patterns','connections')"]],
    },
    pelvic: {
      intro: 'Provides guidance on pelvic floor function, abdominal mechanics, and exercises that support digestive comfort.',
      focuses: ['Abdominal mechanics','Distension management','Diaphragmatic support','Coordination exercises','Motility support'],
      prompts: ['Help with distension','What exercises help with bloating?','Is my posture affecting this?','How can I reduce gas pain?'],
      userMsg: 'How can I reduce abdominal distension?',
      assistantMsg: 'Abdominal distension often involves both gas production and how your abdominal wall responds to it. Diaphragmatic breathing may help relax the abdominal wall and reduce the sensation of tightness. Gentle abdominal massage in a clockwise direction follows the path of your colon and can help move trapped gas. Proper posture — avoiding slouching after meals — may also support more efficient digestion.',
      routeOuts: [['Abdominal exercises',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log symptoms',"openSheet('symptom')"]],
    },
    psychology: {
      intro: 'Explores the gut-brain connection — how stress, anxiety, and mental health affect your GI symptoms and what to do about it.',
      focuses: ['Gut-brain axis','Stress-symptom links','Nervous system regulation','Cognitive patterns','Emotional wellbeing'],
      prompts: ['How does stress affect my bloating?','Help me understand the gut-brain connection','What calming techniques help?','Is anxiety making this worse?'],
      userMsg: 'How does stress affect my bloating?',
      assistantMsg: 'Stress can affect gut function through the gut-brain axis. When you\'re stressed, the nervous system can alter gut motility, increase gas production, and heighten visceral sensitivity — which may make bloating feel more intense even at normal gas volumes. Your data shows a weak but emerging signal linking high-stress days to worse bloating. Regular nervous system calming — even 5 minutes of diaphragmatic breathing before meals — may help reduce bloating over time.',
      routeOuts: [['Breathing exercise',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log stress',"nav('track');openSheet('mental')"]],
    },
    functional: {
      intro: 'Offers a root-cause, systems-level perspective on your GI health — looking at the bigger picture beyond individual symptoms.',
      focuses: ['Root-cause thinking','Systems perspective','Lifestyle factors','Holistic context','Integrative approach'],
      prompts: ['What root causes should I explore?','How do my systems connect?','What lifestyle factors matter?','What am I missing?'],
      userMsg: 'What root causes should I explore?',
      assistantMsg: 'Looking at your full picture — bloating, food triggers, stress connection, and eating habits — there are several interconnected factors. Your microbiome may be reacting to certain fermentable foods. Eating speed affects air swallowing. Stress affects motility and sensitivity. A functional approach would focus on identifying your personal triggers through elimination, optimising eating habits (slower, smaller meals), and supporting gut flora with gradual fiber introduction and possibly digestive enzymes.',
      routeOuts: [['View all connections',"nav('patterns');setSegment('patterns','connections')"],['Daily habits',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    ayurveda: {
      intro: 'Provides a traditional Ayurvedic perspective on digestion, lifestyle balance, and natural approaches to gut health.',
      focuses: ['Digestive fire (Agni)','Constitutional balance','Lifestyle rhythm','Natural remedies','Seasonal guidance'],
      prompts: ['What does Ayurveda say about bloating?','How can I improve my digestive fire?','What daily routine helps?'],
      userMsg: 'What does Ayurveda say about bloating?',
      assistantMsg: 'In Ayurveda, bloating is primarily associated with Vata imbalance — excess air (vayu) in the digestive system. Key recommendations include drinking warm water with meals (not cold), eating at regular times, favouring cooked foods over raw, and using digestive spices like ginger, cumin, and fennel. Eating in a calm environment without distraction is considered essential. Some traditional Ayurvedic practitioners suggest simplifying meals by not combining too many food types, as this is seen as weakening digestive fire (Agni) — note that food combining theory is a traditional practice without strong modern clinical evidence, though eating simpler meals may still help some people by making it easier to identify triggers.',
      routeOuts: [['Daily routine',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log food',"nav('track');openSheet('food')"]],
    },
    pharmacy: {
      intro: 'Provides guidance on medications, supplements, interactions, and adherence — helping you understand what you\'re taking and why.',
      focuses: ['Medication review','Side effects','Drug interactions','Supplement guidance','Adherence support'],
      prompts: ['Could this be a side effect?','What about digestive enzymes?','Should I try probiotics?','What supplements might help?'],
      userMsg: 'What about digestive enzymes?',
      assistantMsg: 'Digestive enzymes can help if your bloating is related to difficulty breaking down specific foods. For example, lactase helps with dairy, alpha-galactosidase (like Beano) helps with beans and cruciferous vegetables, and broad-spectrum enzymes can support general digestion. Your food-trigger pattern suggests enzyme support might be worth discussing with your dietitian. Log any supplement use alongside symptoms so we can track the response.',
      routeOuts: [['Log medication',"nav('track');openSheet('meds')"],['Treatment plan',"nav('care');setSegment('care','clinical')"]],
    },
  },

  screens: {
    // Today screen
    todayGreeting: 'Good morning, Marcus',
    todaySubtitle: "Pattern discovery · Here's what matters now.",
    todayStatePills: [
      { icon: 'activity', text: '2 of 4 signals' },
      { icon: 'calendar', text: 'Dietitian in 5 days' },
      { text: 'Pattern discovery' },
    ],
    todayTopPriority: {
      title: 'Top priority',
      subtitle: 'Log meals and bloating timing to identify your main triggers',
      action: "nav('track');setSegment('track','quick');openSheet('food')",
      ctaText: 'Do this now',
    },
    todayFeed: [
      { icon: 'utensils', title: 'Log meals with detail', subtitle: 'Include specific ingredients to identify food triggers', action: "nav('track');openSheet('food')" },
      { icon: 'thermom', title: 'Rate bloating after meals', subtitle: 'Track distension 2–4 hours after eating to build your pattern', action: "nav('track');openSheet('symptom')" },
      { icon: 'trendUp', title: 'Gas pattern emerging', subtitle: 'Certain foods are consistently linked to bloating episodes', action: "nav('patterns');openPattern('gas-producing-foods')" },
      { icon: 'wind', title: 'Guided support', subtitle: 'Try a post-meal walk or abdominal massage', action: "nav('care');setSegment('care','self');setSegment('self','habits')" },
      { icon: 'msgCircle', title: 'Chat prompt', subtitle: 'Ask about food triggers or how to prepare for your consult', action: "nav('chat')" },
      { icon: 'clock', title: 'Recent activity', subtitle: 'Bowel movement logged at 9:10 AM', action: "openEntry('bm')" },
    ],

    // Track screen
    quickGrid: [
      ['poop','Bowel',"openEntry('bm')"],['thermom','Symptoms',"openSheet('symptom')"],['utensils','Nutrition',"openEntry('food')"],
      ['droplets','Hydration',"openSheet('hydration')"],['moon','Sleep',"openSheet('sleep')"],['brain','Stress & Mood',"openSheet('mental')"],
      ['activity','Movement',"openSheet('movement')"],['pill','Meds & Supps',"openSheet('meds')"],['flower','Period',"openSheet('menstrual')"],
      ['fileText','Notes',"openSheet('note')"],
    ],
    mainTrackers: [
      ['utensils','Nutrition','Highest-value signal for your bloating journey',"openEntry('food')"],
      ['thermom','Symptoms','Track bloating timing and severity',"openSheet('symptom')"],
      ['poop','Bowel Movement','Track gas and bowel patterns',"openEntry('bm')"],
    ],

    continueTrackers: {
      groups: [
        { label: 'Resume Incomplete', items: [
          ['utensils','Finish logging breakfast','You started but didn\'t add details',"openEntry('food')"],
        ]},
        { label: 'Suggested Next Log', items: [
          ['thermom','Rate bloating after breakfast','Best next signal to connect food to bloating',"openSheet('symptom')"],
          ['utensils','Log lunch with ingredients','Build your food-trigger pattern',"openSheet('food')"],
        ]},
        { label: 'In-Progress Tracking', items: [
          ['steth','Log dietary response','Useful when elimination diet is active',"openSheet('treatment')"],
        ]},
      ],
    },

    recentEntries: {
      groups: [
        { label: 'Today', items: [
          ['poop','Bowel movement','Normal movement, mild gas · 9:10 AM',"openEntry('bm')"],
          ['utensils','Food','Smoothie, toast, coffee · 8:00 AM',"openEntry('food')"],
          ['thermom','Symptoms','Not logged yet today',"openSheet('symptom')"],
        ]},
        { label: 'Yesterday', items: [
          ['poop','Bowel movement','Normal, moderate gas · 8:30 AM',"openEntry('bm')"],
          ['utensils','Food','Bean burrito, sparkling water · 12:45 PM',"openEntry('food')"],
          ['thermom','Symptoms','Bloating 6/10 · 3:00 PM',"openSheet('symptom')"],
        ]},
        { label: 'This Week', items: [
          ['moon','Sleep','7 hours average · 3 entries',"openSheet('sleep')"],
          ['brain','Stress & Mood','Low-moderate stress · 2 entries',"openSheet('mental')"],
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
      ['utensils','Breakfast logged','45 minutes earlier',"openEntry('food')"],
      ['thermom','No bloating rating yet','Add bloating severity to strengthen the pattern',"openSheet('symptom')"],
    ],

    // Patterns screen
    patternHero: {
      title: 'Gas-producing foods \u2192 bloating episodes',
      subtitle: 'Specific foods consistently precede bloating within 2–4 hours.',
      chip: 'green',
      chipLabel: 'Moderate confidence',
      bars: [40,60,85,55,90,50,80,65,88,52,78,60,85,58],
      confidence: 55,
      confidenceColor: 'var(--green)',
      action: "openPattern('gas-producing-foods')",
      signalRows: [
        { color: 'green', label: 'Bloating after gas-producing foods', value: '7 of 12' },
        { color: 'muted', label: 'Bloating after non-trigger foods', value: '2 of 10' },
        { color: 'muted', label: 'Carbonation alone \u2192 bloating', value: '5 of 9' },
      ],
    },

    patternFeed: {
      groups: [
        { label: 'Strongest Patterns', items: [
          ['utensils','Gas-producing foods \u2192 bloating','Moderate confidence \u00b7 food trigger signal',"openPattern('gas-producing-foods')"],
        ]},
        { label: 'Active Patterns', items: [
          ['droplets','Carbonation \u2192 gas buildup','Moderate confidence \u00b7 10 data points',"openPattern('carbonation-effect')"],
          ['utensils','Large meals \u2192 evening bloating','Moderate confidence \u00b7 tracking in progress',"openPattern('meal-size')"],
        ]},
        { label: 'New Signals', items: [
          ['utensils','Eating speed \u2192 post-meal distension','Low confidence \u00b7 needs more data',"openPattern('eating-speed')"],
          ['utensils','Fiber changes \u2192 bloating severity','Early signal \u00b7 6 data points',"openPattern('fiber-changes')"],
        ]},
        { label: 'Strengthening', items: [
          ['trendUp','Carbonation signal growing','Confidence up from 35% to 48%',"openPattern('carbonation-effect')"],
        ]},
        { label: 'What Changed', items: [
          ['refresh','Stress-bloating signal weak','Needs more consistent stress logging',"openPattern('stress-bloating')"],
        ]},
      ],
    },

    patternConnections: [
      ['utensils','Food \u2192 Bloating','Gas-producing foods cluster with bloating episodes',"openPattern('gas-producing-foods')"],
      ['droplets','Carbonation \u2192 Gas','Carbonated drinks precede gas buildup',"openPattern('carbonation-effect')"],
      ['utensils','Meal Size \u2192 Distension','Larger meals linked to evening bloating',"openPattern('meal-size')"],
      ['brain','Stress \u2192 Bloating','High stress days show more abdominal distension',"openPattern('stress-bloating')"],
      ['utensils','Eating Speed \u2192 Gas','Fast eating correlates with more air swallowing',"openPattern('eating-speed')"],
      ['utensils','Fiber \u2192 Bloating','Fiber changes affect bloating severity',"openPattern('fiber-changes')"],
    ],

    patternExperiments: [
      ['utensils','Dairy elimination experiment','Remove dairy for 14 days and track bloating',"nav('track');setSegment('track','continue')"],
      ['utensils','Portion size reduction','Try smaller, more frequent meals for 7 days',"nav('track');setSegment('track','continue')"],
    ],

    patternTrends: [
      ['thermom','Bloating Trends','Bloating frequency and severity over 30 days'],
      ['poop','Gas Trends','Gas severity and bowel patterns over 14 days'],
      ['utensils','Nutrition Trends','Food types, portions, and timing patterns'],
      ['moon','Daily Foundations Trends','Sleep, hydration, and movement'],
    ],
    patternTrendsChart: {
      bars: [35,50,75,60,85,45,25,55,70,40,80,30,65,90],
    },

    patternReports: [
      ['clipList','Weekly Summary','This week at a glance'],
      ['calendar','Monthly Summary','30-day pattern overview'],
      ['compass','Consult-Ready Summary','Formatted for your dietitian',"nav('care');setSegment('care','navigation');navSub('visit')"],
      ['clock','Pattern History','How patterns have evolved over time'],
    ],

    // Care screen
    careHabits: [
      { icon: 'utensils', name: 'Mindful eating practice', meta: '10 min · Slow eating and chewing awareness', tag: 'Recommended now' },
      { icon: 'wind', name: 'Abdominal massage', meta: '5 min · Clockwise massage for gas relief' },
      { icon: 'activity', name: 'Digestive walk after meals', meta: '10 min · Post-meal movement for motility' },
      { icon: 'clipList', name: 'Food diary review', meta: 'Weekly review of food-bloating connections' },
    ],

    carePlans: [
      ['clipList','Elimination diet plan','Week 1 of 3 · Identify top triggers'],
      ['utensils','Portion control plan','Smaller meals, more frequent eating'],
    ],

    careFlare: [
      { icon: 'alertTri', name: 'What to do now', meta: 'Immediate bloating relief steps' },
      { icon: 'wind', name: 'Gas relief routine', meta: '5 min · Abdominal massage and positioning' },
      { icon: 'shield', name: 'When to escalate', meta: 'Know when self-care is no longer enough. Red flags that warrant urgent medical attention: progressive abdominal distension with pain, vomiting, inability to pass gas or stool (possible obstruction), unintended weight loss, blood in stool, or new-onset bloating after age 50' },
    ],

    careRecs: [
      ['utensils','Eat slowly and chew thoroughly','Reducing air swallowing may decrease gas and distension'],
      ['droplets','Reduce carbonation','Carbonated drinks consistently precede bloating episodes'],
      ['pill','Consider discussing digestive enzymes with your provider','Enzyme support may help break down trigger foods'],
      ['pill','Consider a probiotic','Certain strains (e.g., Bifidobacterium infantis) have evidence for reducing bloating. Discuss with your dietitian'],
    ],

    careExperiments: [
      ['utensils','Dairy elimination experiment','Remove dairy for 14 days and track bloating',"nav('track');setSegment('track','continue')"],
      ['utensils','Portion size reduction','Try smaller, more frequent meals for 7 days',"nav('track');setSegment('track','continue')"],
      ['activity','Post-meal walk experiment','Walk 10 min after meals for 7 days',"nav('track');setSegment('track','continue')"],
    ],

    careNavItems: [
      ['clipList','Prepare for Consult','Checklist, summary, and questions',"navSub('visit')"],
      ['helpCircle','Questions for Dietitian','Organise your main concerns',"navSub('visit')"],
      ['testTube','Tests & Procedures','Prep, instructions, and reminders'],
      ['compass','Referrals & Specialists','Track referrals and specialist visits'],
      ['fileText','Visit Summaries','Review and export past visit notes'],
    ],

    careClinical: {
      timeline: [
        { status: 'done', title: 'Initial tracking started', sub: 'Completed · 3 weeks ago' },
        { status: 'active', title: 'Pattern discovery phase', sub: 'In progress · Building food-trigger map' },
        { status: '', title: 'Dietitian consultation', sub: 'Scheduled · In 5 days' },
        { status: '', title: 'Elimination diet phase', sub: 'Pending · After consult', last: true },
      ],
      items: [
        ['clipList','Tracking Plan','Current logging priorities and goals'],
        ['pill','Supplements & Enzymes','Track digestive support adherence'],
        ['calendar','Follow-Up Plan','Next check-ins and monitoring priorities'],
        ['users','Care Team Coordination','Coordinate across your care team'],
        ['testTube','Results & Interpretation','Breath tests, labs, and what they mean'],
      ],
    },

    // Visit prep
    visitPrep: {
      title: 'Visit preparation',
      subtitle: 'Dietitian consultation in 5 days',
      stepsTotal: 4,
      stepsDone: 3,
      checklist: [
        { label: 'Define main concern', done: true },
        { label: 'Write questions to ask', done: true },
        { label: 'Review dietitian summary', done: false },
        { label: 'Export or print summary', done: false },
      ],
      mainConcern: 'Frequent bloating and gas after meals, especially with certain foods. Looking for guidance on elimination diet and trigger identification.',
      questions: [
        'Which foods are most likely causing my bloating?',
        'Should I try a low-FODMAP diet or a simpler elimination approach?',
        'Would digestive enzymes help with my symptoms?',
      ],
      summaryNote: 'Auto-generated from your logs and patterns. 6 patterns, 14 days of data.',
    },

    // Chat screen
    chatConversations: [
      ['utensils','Food trigger discussion','Continued 1 hour ago'],
      ['trendUp','Pattern clarification','Yesterday'],
      ['compass','Dietitian prep conversation','2 days ago'],
      ['sparkles','General bloating questions','Last week'],
    ],

    // Notifications
    notifications: {
      action: [
        { group: 'Red Flags', items: [
          { icon: 'alertTri', title: 'Severe bloating episode', sub: 'Bloating rated 8/10 — review triggers and consider escalation', time: 'Today', unread: true, urgent: true },
        ]},
        { group: 'Pattern Changes', items: [
          { icon: 'trendUp', title: 'Pattern confidence changed', sub: 'Gas-producing foods signal strengthened to 55%', time: 'Today', action: "nav('patterns');openPattern('gas-producing-foods')", unread: true },
        ]},
        { group: 'Care Tasks Due', items: [
          { icon: 'thermom', title: 'Rate bloating', sub: 'Log bloating severity after lunch to strengthen your pattern', time: '2:00 PM', action: "nav('track');openSheet('symptom')", unread: true },
        ]},
        { group: 'Medication & Supplements', items: [
          { icon: 'pill', title: 'Digestive enzyme reminder', sub: 'Take with your next meal', time: '12:00 PM', action: "openSheet('meds')" },
        ]},
        { group: 'Visits & Tests Due', items: [
          { icon: 'calendar', title: 'Dietitian consult in 5 days', sub: 'Continue your prep — 3 of 4 steps complete', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true, urgent: true },
        ]},
        { group: 'Missing Important Data', items: [
          { icon: 'utensils', title: 'No lunch logged yesterday', sub: 'Filling gaps improves food-trigger accuracy', time: 'Yesterday', action: "openSheet('food')" },
        ]},
      ],
      updates: [
        { group: 'Pattern Updates', items: [
          { icon: 'trendUp', title: 'Weekly pattern summary', sub: '6 patterns tracked, 1 strengthened', time: 'Today', action: "nav('patterns')", unread: true },
        ]},
        { group: 'Results & Reports', items: [
          { icon: 'clipList', title: 'Dietitian summary ready', sub: 'Preview your updated report', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Shared & Network Updates', items: [
          { icon: 'users', title: 'Care team update', sub: 'Dietitian reviewed your food log summary', time: '2 days ago' },
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
        { icon: 'alertTri', title: 'Severe bloating episode', sub: 'Review triggers and consider escalation', time: '10:30 AM', unread: true, urgent: true },
        { icon: 'trendUp', title: 'Pattern confidence changed', sub: 'Gas-producing foods signal at 55%', time: '11:20 AM', action: "nav('patterns');openPattern('gas-producing-foods')", unread: true },
        { icon: 'thermom', title: 'Rate bloating', sub: 'Log severity after lunch', time: '2:00 PM', action: "nav('track');openSheet('symptom')" },
        { type: 'time-group', label: 'Yesterday' },
        { icon: 'utensils', title: 'Meal logging reminder', sub: 'Log lunch with ingredients', time: '12:30 PM' },
        { icon: 'wind', title: 'Post-meal walk reminder', sub: 'Try a 10-minute walk after dinner', time: '7:00 PM' },
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
