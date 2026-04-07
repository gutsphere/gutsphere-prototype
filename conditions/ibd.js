export default {
  persona: {
    name: 'James',
    initials: 'JO',
    fullName: 'James Okafor',
    profileDesc: 'Active care coordination',
    stage: 'Flare monitoring',
    stageNote: "Here's what matters now.",
    focus: "Crohn's disease focus",
    visitNote: 'Infusion appointment in 4 days',
  },

  entries: {
    bm: { title:'Bowel movement', subtitle:'Urgent, loose with blood · 6:30 AM', icon:'poop', details:[['Type','Bristol 6'],['Urgency','9/10'],['Blood','Present'],['Frequency','4x today']] },
    food: { title:'Food', subtitle:'Rice, chicken, bone broth · 12:00 PM', icon:'utensils', details:[['Meal','Lunch'],['Foods','White rice, grilled chicken, bone broth'],['Tags','Low-residue, IBD-safe'],['Time','12:00 PM']] },
  },

  patterns: {
    'flare-remission': {
      title: 'Flare/remission cycle tracking',
      subtitle: 'Your flare and remission cycles show a recognisable pattern that may help predict and prepare for future episodes.',
      confidence: 70,
      chip: 'green', chipLabel: 'Strong evidence',
      bars: [30,85,90,40,25,80,95,35,20,88,92,30,85,40],
      summary: 'Over the past 3 months, your flare episodes tend to cluster every 4–6 weeks, often preceded by a rise in bowel frequency and urgency 2–3 days before full onset. Remission periods last 3–4 weeks on average. Tracking these transitions closely helps you and your care team time interventions better.',
      factors: [
        ['poop','Bowel frequency spike','Strong flare predictor','var(--green)','70%','#D1FAE5'],
        ['thermom','Urgency increase','Early warning signal','var(--green)','62%','#D1FAE5'],
        ['testTube','CRP elevation','Lab-confirmed correlation','#F59E0B','48%','#FEF3C7'],
        ['brain','Stress preceding flare','May trigger onset','var(--text-hint)','35%','var(--sand-light)'],
      ],
      clarify: ['Log bowel frequency daily to detect flare onset earlier','Track urgency changes as a leading indicator','Compare flare timing with lab results at next infusion'],
      trackAction: "nav('track');openSheet('symptom')",
      chatGuide: 'gastro',
    },
    'med-adherence': {
      title: 'Biologic adherence and flare prevention',
      subtitle: 'Consistent biologic infusions correlate with longer remission periods.',
      confidence: 65,
      chip: 'green', chipLabel: 'Strong evidence',
      bars: [20,30,25,80,85,90,88,92,85,30,35,88,90,85],
      summary: 'When infusion timing is consistent (within the scheduled window), remission periods are notably longer and flare severity is reduced. Delayed or missed infusions appear to precede more intense flare episodes within 2–3 weeks.',
      factors: [
        ['pill','Infusion consistency','Strong protective factor','var(--green)','65%','#D1FAE5'],
        ['calendar','Schedule adherence','Timing matters','var(--green)','60%','#D1FAE5'],
        ['testTube','Trough levels','Lab-supported signal','#F59E0B','45%','#FEF3C7'],
        ['brain','Stress during gaps','May compound risk','var(--text-hint)','22%','var(--sand-light)'],
      ],
      clarify: ['Track infusion dates and any delays','Log symptoms in the week after each infusion','Request trough level testing at next appointment'],
      trackAction: "nav('track');openSheet('meds')",
      chatGuide: 'pharmacy',
    },
    'inflammatory-markers': {
      title: 'CRP/calprotectin trends and symptoms',
      subtitle: 'Lab markers may correlate with symptom severity during flares.',
      confidence: 48,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [40,55,70,80,45,60,75,85,50],
      summary: 'Elevated CRP and faecal calprotectin levels tend to align with your worst symptom days, though the correlation is not perfect. Some flares show elevated markers before symptoms worsen, suggesting labs may serve as an early warning alongside your tracking.',
      factors: [
        ['testTube','CRP levels','Moderate correlation','#F59E0B','48%','#FEF3C7'],
        ['testTube','Calprotectin','Supporting signal','#F59E0B','42%','#FEF3C7'],
        ['poop','Bowel symptoms','Tracks with markers','#F59E0B','55%','#FEF3C7'],
        ['thermom','Pain severity','Partial alignment','var(--text-hint)','30%','var(--sand-light)'],
      ],
      clarify: ['Log symptoms on lab draw days for direct comparison','Track calprotectin trends across flare cycles','Note any symptom changes 48 hours before and after labs'],
      trackAction: "nav('track');openSheet('results')",
      chatGuide: 'gastro',
    },
    'stress-inflammation': {
      title: 'Stress and inflammatory flare risk',
      subtitle: 'High-stress periods may increase flare likelihood.',
      confidence: 35,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [25,45,60,30,70,40,55,35],
      summary: 'On weeks where you report sustained high stress (above 6/10 for 3+ days), your data shows a possible association with flare onset. The signal is still developing and needs more consistent stress logging to confirm.',
      factors: [
        ['brain','Sustained stress','Early signal','#F59E0B','35%','#FEF3C7'],
        ['moon','Poor sleep during stress','Contributing','#F59E0B','28%','#FEF3C7'],
        ['utensils','Irregular eating','Uncertain','var(--text-hint)','18%','var(--sand-light)'],
      ],
      clarify: ['Log stress daily for 3 weeks to strengthen the signal','Note whether acute vs chronic stress matters','Track sleep quality alongside stress ratings'],
      trackAction: "nav('track');openSheet('mental')",
      chatGuide: 'psychology',
    },
    'diet-tolerance': {
      title: 'Food tolerance during flare vs remission',
      subtitle: 'Foods tolerated in remission may trigger symptoms during flares.',
      confidence: 30,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [20,50,35,65,25,55,40],
      summary: 'Your food logs suggest that certain foods (raw vegetables, dairy, high-fibre grains) are tolerated during remission but cause increased urgency and pain during flares. The pattern needs more consistent food logging during both states to confirm.',
      factors: [
        ['utensils','Food type during flare','Early signal','#F59E0B','30%','#FEF3C7'],
        ['utensils','Food type during remission','Baseline comparison','#F59E0B','25%','#FEF3C7'],
        ['thermom','Symptom response timing','Uncertain','var(--text-hint)','18%','var(--sand-light)'],
      ],
      clarify: ['Log all meals during both flare and remission phases','Tag foods that cause immediate symptoms','Track which foods are safe during flares vs remission'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'fatigue-pattern': {
      title: 'Fatigue as early flare indicator',
      subtitle: 'Unusual fatigue may precede flare onset by several days.',
      confidence: 42,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [35,60,75,40,80,50,65,45,70],
      summary: 'In 3 of your last 4 flare episodes, you reported increased fatigue 2–4 days before bowel symptoms worsened. Fatigue may be an early systemic inflammatory signal worth tracking as a flare predictor.',
      factors: [
        ['activity','Fatigue level','Moderate signal','#F59E0B','42%','#FEF3C7'],
        ['moon','Sleep quality','Contributing factor','#F59E0B','35%','#FEF3C7'],
        ['testTube','Inflammatory markers','May confirm','var(--text-hint)','28%','var(--sand-light)'],
      ],
      clarify: ['Rate energy level daily on a 1–10 scale','Note when fatigue feels disproportionate to activity','Compare fatigue onset with flare onset timing'],
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
      intro: 'Your main GI copilot. Ask anything about your symptoms, patterns, flare management, or how to prepare for your infusion.',
      focuses: ['Flare assessment','Next best step','Infusion preparation','Pattern clarification','Routing to the right guide'],
      prompts: ['What should I log next?','Am I flaring?','Help me prepare for my infusion','What should I do now?'],
      userMsg: 'Am I flaring?',
      assistantMsg: 'Based on your recent logs, your bowel frequency has increased to 4x today with urgency at 9/10 and blood present. Your recent data shows similarities to patterns seen before previous flares. You might consider logging symptoms closely over the next 48 hours, staying on your low-residue diet, and flagging this at your infusion appointment in 4 days.',
      routeOuts: [['Log symptoms',"nav('track');openSheet('symptom')"],['View flare pattern',"nav('patterns');openPattern('flare-remission')"]],
    },
    track: {
      intro: 'Helps you figure out what to track, when, and why — so every log moves you toward better flare prediction and management.',
      focuses: ['What to log next','Flare tracking','Signal gaps','Logging priority','Building evidence'],
      prompts: ['What should I log right now?','Help me track my flare','What signals am I missing?','Which logs matter most?'],
      userMsg: 'What signals am I missing?',
      assistantMsg: 'You\'re tracking bowel movements and food well, which is critical during a possible flare. The gap right now is fatigue and energy levels — your data suggests fatigue may be an early flare indicator, but you haven\'t logged energy consistently. Consider rating your energy daily for the next week, especially leading into your infusion.',
      routeOuts: [['Log energy',"nav('track');openSheet('movement')"],['Log symptoms',"nav('track');openSheet('symptom')"]],
    },
    patterns: {
      intro: 'Helps you understand what your data means — flare cycles, treatment response, and what\'s becoming clearer or more uncertain.',
      focuses: ['Flare cycle interpretation','Signal strength','Treatment response','Confidence levels','Data relationships'],
      prompts: ['What does my recent data show?','Am I entering a flare?','Which patterns are strengthening?','How is my treatment working?'],
      userMsg: 'Am I entering a flare?',
      assistantMsg: 'Your last 3 days show rising bowel frequency, increased urgency, and blood — all signals that aligned with previous flare onsets. Your flare-remission pattern is at 70% confidence. Fatigue was also elevated 2 days ago, which preceded your last flare. Your data shows patterns similar to those seen before previous flare episodes.',
      routeOuts: [['View flare pattern',"nav('patterns');openPattern('flare-remission')"],['Log symptoms',"nav('track');openSheet('symptom')"]],
    },
    selfcare: {
      intro: 'Supports your daily habits, flare management, and practical self-care between infusions and appointments.',
      focuses: ['Flare self-care','Daily routines','Stress management','Habit building','Pain management'],
      prompts: ['What should I focus on today?','Help me manage this flare','What\'s my next best step?','I\'m having a bad day'],
      userMsg: 'I\'m having a bad day',
      assistantMsg: 'I\'m sorry you\'re struggling. During a possible flare, the most important things are: consider staying hydrated with clear fluids and bone broth, continuing your low-residue diet, and resting when you can. A gentle stress check-in can also help — stress may amplify inflammation. Let\'s log how you\'re feeling so we can track this flare\'s severity for your infusion appointment.',
      routeOuts: [['Flare support',"nav('care');setSegment('care','self');setSegment('self','flare')"],['Log symptoms',"nav('track');openSheet('symptom')"]],
    },
    clinicalnav: {
      intro: 'Helps you prepare for infusions, build questions, organise your data for your gastroenterologist, and navigate care decisions.',
      focuses: ['Infusion preparation','Doctor questions','Summary generation','Lab preparation','Referral guidance'],
      prompts: ['Help me prepare for my infusion','What questions should I ask?','Turn my patterns into a summary','What labs do I need?'],
      userMsg: 'Help me prepare for my infusion',
      assistantMsg: 'Your infusion is in 4 days. Based on your logs, the key things to discuss are: your current possible flare (increased frequency, urgency, blood), whether medication adjustments are needed, and your latest CRP/calprotectin results. I can generate a flare severity summary from your data and help you build a question list for your care team.',
      routeOuts: [['Visit prep',"nav('care');setSegment('care','navigation');navSub('visit')"],['View summary',"nav('patterns');setSegment('patterns','trends')"]],
    },
    clinicalcare: {
      intro: 'Helps you manage biologic treatment, track infusion response, monitor treatment effectiveness, and coordinate follow-up.',
      focuses: ['Biologic tracking','Infusion adherence','Response monitoring','Follow-up planning','Care coordination'],
      prompts: ['Is my biologic working?','What should I track for follow-up?','Review my infusion adherence','What changed since my last infusion?'],
      userMsg: 'Is my biologic working?',
      assistantMsg: 'Looking at your data over the last 3 infusion cycles, remission periods have averaged 4 weeks when infusions are on schedule. Your current symptoms suggest a possible flare, which is worth discussing at your next infusion — it may indicate the need for dose adjustment or interval changes. Keep logging so we can give your gastroenterologist a clear picture.',
      routeOuts: [['Treatment timeline',"nav('care');setSegment('care','clinical')"],['Log treatment',"nav('track');openSheet('treatment')"]],
    },
    gastro: {
      intro: 'Provides a gastroenterology perspective on your Crohn\'s disease, flare management, and clinical decisions.',
      focuses: ['Crohn\'s disease management','Flare assessment','Biologic optimisation','Surgical considerations','Extraintestinal manifestations'],
      prompts: ['Is this a flare?','Should I be concerned about these symptoms?','What about surgery?','Are my joint pains related?'],
      userMsg: 'Are my joint pains related to my Crohn\'s?',
      assistantMsg: 'Joint pain is reported as one of the more common extraintestinal features associated with Crohn\'s disease, affecting up to 30% of patients. Peripheral arthritis (large joints like knees and ankles) may flare alongside bowel symptoms, while axial arthritis can be independent. Your data showing joint symptoms alongside increased bowel symptoms is consistent with this association. Mention this at your infusion appointment — managing inflammation may also help with joint symptoms.',
      routeOuts: [['Log symptoms',"nav('track');openSheet('symptom')"],['Prepare for infusion',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
    nutrition: {
      intro: 'Provides guidance on diet during flares and remission, food tolerance, and nutrition strategies for Crohn\'s disease.',
      focuses: ['Flare nutrition','Food tolerance mapping','Low-residue guidance','Nutritional deficiencies','Remission diet expansion'],
      prompts: ['What should I eat during a flare?','Help me with food reintroduction','What foods should I avoid right now?','Am I getting enough nutrients?'],
      userMsg: 'What should I eat during a flare?',
      assistantMsg: 'During a flare, a common focus during flares is reducing gut irritation while maintaining nutrition. You might consider low-residue, easily digestible foods: white rice, lean protein (chicken, fish), bone broth, bananas, and well-cooked vegetables. Raw vegetables, whole grains, dairy, spicy foods, and high-fibre items are commonly reduced during flares. Consider discussing your specific tolerances with your care team. Small, frequent meals are better than large ones. Your current lunch of rice, chicken, and bone broth is a good example.',
      routeOuts: [['Log food',"nav('track');openSheet('food')"],['View food patterns',"nav('patterns');openPattern('diet-tolerance')"]],
    },
    pelvic: {
      intro: 'Provides guidance on pelvic floor function, urgency management, and exercises that support bowel health in IBD.',
      focuses: ['Urgency management','Pelvic floor support','Evacuation mechanics','Incontinence prevention','Post-surgical rehabilitation'],
      prompts: ['Help with urgency','What exercises help with bowel control?','How can I manage urgency in public?','Is my pelvic floor affected?'],
      userMsg: 'How can I manage the urgency?',
      assistantMsg: 'Urgency is one of the most challenging IBD symptoms. A few strategies can help: pelvic floor contractions (quick squeezes) may help buy time when urgency hits. Diaphragmatic breathing activates your parasympathetic nervous system, which may calm the urge. Planning bathroom access when you\'re out reduces anxiety, which itself can worsen urgency. Long-term, pelvic floor physiotherapy may help improve control.',
      routeOuts: [['Pelvic floor exercises',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log bowel movement',"openEntry('bm')"]],
    },
    psychology: {
      intro: 'Explores how stress, anxiety, and mental health affect Crohn\'s disease and what to do about the gut-brain connection.',
      focuses: ['Gut-brain axis in IBD','Stress-flare connection','Living with chronic illness','Anxiety management','Mental health support'],
      prompts: ['How does stress affect my Crohn\'s?','Help me cope with flare anxiety','Is my mental health making this worse?','How do I manage the uncertainty?'],
      userMsg: 'How does stress affect my Crohn\'s?',
      assistantMsg: 'Stress doesn\'t cause Crohn\'s disease, but it may trigger flares and worsen symptoms through the gut-brain axis. Research suggests chronic stress may increase inflammatory cytokines, affects gut barrier function, and can alter your microbiome. Your data shows a signal between sustained high-stress periods and flare onset. Regular stress management — even brief daily check-ins and breathing exercises — may help reduce flare risk and improve quality of life.',
      routeOuts: [['Stress check-in',"nav('track');openSheet('mental')"],['Breathing exercise',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    functional: {
      intro: 'Offers a root-cause, systems-level perspective on your Crohn\'s disease — looking at the bigger picture beyond individual symptoms.',
      focuses: ['Root-cause thinking','Systems perspective','Lifestyle factors','Microbiome health','Integrative approach'],
      prompts: ['What root causes should I explore?','How do my systems connect?','What lifestyle factors matter?','What am I missing?'],
      userMsg: 'What root causes should I explore?',
      assistantMsg: 'Looking at your full picture — Crohn\'s with cyclic flares, stress correlation, fatigue as an early indicator, and variable food tolerance — there are interconnected systems at play. Sleep quality affects immune regulation. Stress amplifies inflammation. Nutritional status during flares affects recovery speed. A functional approach would focus on: optimising sleep and stress management to support immune balance, ensuring nutrient absorption between flares, and using fatigue as an early warning system.',
      routeOuts: [['View all connections',"nav('patterns');setSegment('patterns','connections')"],['Daily habits',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    ayurveda: {
      intro: 'Provides a traditional Ayurvedic perspective on inflammatory bowel conditions, digestive balance, and natural approaches to gut health.',
      focuses: ['Digestive fire (Agni)','Pitta balance','Anti-inflammatory practices','Lifestyle rhythm','Natural remedies'],
      prompts: ['What does Ayurveda say about IBD?','How can I reduce inflammation naturally?','What daily routine helps?'],
      userMsg: 'What does Ayurveda say about IBD?',
      assistantMsg: 'In Ayurveda, inflammatory bowel conditions are typically associated with Pitta imbalance — excess heat, sharpness, and inflammation in the digestive system. Key recommendations include cooling foods (rice, ghee, coconut), avoiding hot, spicy, and fermented foods during flares, regular meal timing, and calming practices like meditation. Turmeric (with your doctor\'s approval) is a traditional anti-inflammatory support. Important: Aloe vera is generally not recommended during active flares — its laxative effect can worsen diarrhea and cramping in active Crohn\'s. Shatavari or licorice root tea (with your doctor\'s guidance) are safer Ayurvedic alternatives during flares. Consistency in routine is considered essential for calming Pitta.',
      routeOuts: [['Daily routine',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log food',"nav('track');openSheet('food')"]],
    },
    pharmacy: {
      intro: 'Provides guidance on biologics, medications, interactions, and adherence — helping you understand your Crohn\'s treatment and why timing matters.',
      focuses: ['Biologic management','Infusion scheduling','Drug interactions','Side effect monitoring','Adherence support'],
      prompts: ['Tell me about my biologic','Check my interactions','Should I adjust my infusion timing?','What about side effects?'],
      userMsg: 'Tell me about my biologic treatment',
      assistantMsg: 'Biologic therapies work by targeting specific parts of the immune system that drive Crohn\'s inflammation. Consistent infusion timing is critical — your data shows longer remission periods when infusions stay on schedule. Before your next infusion, discuss whether your current flare symptoms warrant dose adjustment or interval changes. Also ask about trough level testing to ensure your biologic levels are therapeutic.',
      routeOuts: [['Log medication',"nav('track');openSheet('meds')"],['Infusion prep',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
  },

  screens: {
    // Today screen
    todayGreeting: 'Good morning, James',
    todaySubtitle: "Flare monitoring · Here's what matters now.",
    todayStatePills: [
      { icon: 'activity', text: '5 of 6 signals' },
      { icon: 'calendar', text: 'Infusion in 4 days', urgent: true },
      { text: 'Possible flare — monitoring' },
    ],
    todayTopPriority: {
      title: 'Top priority',
      subtitle: 'Log symptoms and bowel frequency to track flare severity before infusion.',
      action: "nav('track');setSegment('track','quick');openSheet('symptom')",
      ctaText: 'Do this now',
    },
    todayFeed: [
      { icon: 'thermom', title: 'Must do today', subtitle: 'Log bowel frequency and urgency to track flare progression', action: "nav('track');openSheet('symptom')" },
      { icon: 'pill', title: 'Medication check', subtitle: 'Confirm biologic adherence and log any missed doses', action: "nav('track');openSheet('meds')" },
      { icon: 'activity', title: 'Energy check-in', subtitle: 'Rate your fatigue — it may signal flare severity', action: "nav('track');openSheet('movement')" },
      { icon: 'testTube', title: 'Lab prep', subtitle: 'Review what labs to request at your infusion', action: "nav('care');setSegment('care','navigation');navSub('visit')" },
      { icon: 'msgCircle', title: 'Chat prompt', subtitle: 'Ask about flare management or infusion preparation', action: "nav('chat')" },
      { icon: 'clock', title: 'Recent activity', subtitle: 'Bowel movement logged at 6:30 AM', action: "openEntry('bm')" },
    ],

    // Track screen
    quickGrid: [
      ['poop','Bowel',"openEntry('bm')"],['thermom','Symptoms',"openSheet('symptom')"],['utensils','Nutrition',"openEntry('food')"],
      ['droplets','Hydration',"openSheet('hydration')"],['moon','Sleep',"openSheet('sleep')"],['brain','Stress & Mood',"openSheet('mental')"],
      ['activity','Movement',"openSheet('movement')"],['pill','Meds & Supps',"openSheet('meds')"],['flower','Period',"openSheet('menstrual')"],
      ['fileText','Notes',"openSheet('note')"],
    ],
    mainTrackers: [
      ['poop','Bowel Movement','Highest-value signal for tracking flare severity',"openEntry('bm')"],
      ['thermom','Symptoms','Track urgency, pain, and blood to monitor flare progression',"openSheet('symptom')"],
      ['utensils','Nutrition','Track meals and food tolerance during flare vs remission',"openEntry('food')"],
    ],

    continueTrackers: {
      groups: [
        { label: 'Resume Incomplete', items: [
          ['utensils','Finish logging lunch','You started but didn\'t add details',"openEntry('food')"],
        ]},
        { label: 'Suggested Next Log', items: [
          ['thermom','Log symptoms after lunch','Track how your low-residue meal affected symptoms',"openSheet('symptom')"],
          ['activity','Rate your energy level','Fatigue tracking helps predict flare onset',"openSheet('movement')"],
        ]},
        { label: 'In-Progress Tracking', items: [
          ['steth','Log treatment response','Track response between infusions',"openSheet('treatment')"],
        ]},
      ],
    },

    recentEntries: {
      groups: [
        { label: 'Today', items: [
          ['poop','Bowel movement','Urgent, loose with blood · 6:30 AM',"openEntry('bm')"],
          ['utensils','Food','Rice, chicken, bone broth · 12:00 PM',"openEntry('food')"],
          ['thermom','Symptoms','Not logged yet today',"openSheet('symptom')"],
        ]},
        { label: 'Yesterday', items: [
          ['poop','Bowel movement','Loose, urgent · 7:15 AM',"openEntry('bm')"],
          ['utensils','Food','Banana, toast, broth · 6:30 PM',"openEntry('food')"],
          ['thermom','Symptoms','Urgency 8/10, cramping · 3:00 PM',"openSheet('symptom')"],
        ]},
        { label: 'This Week', items: [
          ['moon','Sleep','5.5 hours average · 4 entries',"openSheet('sleep')"],
          ['brain','Stress & Mood','Elevated stress · 3 entries',"openSheet('mental')"],
        ]},
      ],
    },

    moreTrackers: {
      groups: [
        { label: 'Daily Foundations', items: [
          ['pill','Medication & Supplements','Track biologic and medication adherence',"openSheet('meds')"],
          ['brain','Mental Health','Stress and mood context for flare patterns',"openSheet('mental')"],
          ['activity','Energy & Movement','Fatigue and movement to detect flare onset',"openSheet('movement')"],
        ]},
        { label: 'Specialised Context', items: [
          ['flower','Menstrual / Hormonal','Cycle context that may affect symptoms',"openSheet('menstrual')"],
          ['shield','Food Sensitivity & Allergy','Track reactions and food tolerance changes',"openSheet('allergy')"],
          ['timer','Fasting','Track fasting patterns and metabolic context',"openSheet('fasting')"],
          ['heartPulse','Biometrics & Demographics','Update personal health context',"openSheet('biometrics')"],
        ]},
        { label: 'Care & Evidence', items: [
          ['steth','Treatment Adherence','Track biologic infusions and clinician-directed care',"openSheet('treatment')"],
          ['testTube','Test Results','Add or review labs, CRP, and calprotectin',"openSheet('results')"],
        ]},
      ],
    },

    entryContext: [
      ['utensils','Lunch logged','Low-residue meal noted',"openEntry('food')"],
      ['thermom','No symptom logged yet','Add symptoms to track flare severity',"openSheet('symptom')"],
    ],

    // Patterns screen
    patternHero: {
      title: 'Flare/remission cycle \u2192 predictable pattern',
      subtitle: 'Bowel frequency spikes and urgency increases precede full flare onset by 2\u20133 days.',
      chip: 'green',
      chipLabel: 'Strong evidence',
      bars: [30,85,90,40,25,80,95,35,20,88,92,30,85,40],
      confidence: 70,
      confidenceColor: 'var(--green)',
      action: "openPattern('flare-remission')",
      signalRows: [
        { color: 'green', label: 'Flare preceded by frequency spike', value: '5 of 6' },
        { color: 'muted', label: 'Fatigue before flare onset', value: '3 of 4' },
        { color: 'muted', label: 'Stress period before flare', value: '2 of 4' },
      ],
    },

    patternFeed: {
      groups: [
        { label: 'Strongest Patterns', items: [
          ['poop','Flare/remission cycle tracking','Strong evidence \u00b7 6 flare cycles analysed',"openPattern('flare-remission')"],
          ['pill','Biologic adherence and flare prevention','Strong evidence \u00b7 consistent infusions help',"openPattern('med-adherence')"],
        ]},
        { label: 'Active Patterns', items: [
          ['testTube','CRP/calprotectin and symptoms','Moderate confidence \u00b7 lab-symptom correlation',"openPattern('inflammatory-markers')"],
          ['activity','Fatigue as early flare indicator','Moderate confidence \u00b7 growing signal',"openPattern('fatigue-pattern')"],
        ]},
        { label: 'New Signals', items: [
          ['brain','Stress and inflammatory flare risk','Low confidence \u00b7 needs more data',"openPattern('stress-inflammation')"],
          ['utensils','Food tolerance during flare vs remission','Low confidence \u00b7 tracking in progress',"openPattern('diet-tolerance')"],
        ]},
        { label: 'Strengthening', items: [
          ['trendUp','Fatigue-flare signal growing','Confidence up from 30% to 42%',"openPattern('fatigue-pattern')"],
        ]},
        { label: 'What Changed', items: [
          ['refresh','Diet tolerance signal needs data','Less consistent food logging during flares',"openPattern('diet-tolerance')"],
        ]},
      ],
    },

    patternConnections: [
      ['poop','Bowel Frequency \u2192 Flare Onset','Rising frequency precedes full flare by 2\u20133 days',"openPattern('flare-remission')"],
      ['pill','Biologic Adherence \u2192 Remission','Consistent infusions extend remission periods',"openPattern('med-adherence')"],
      ['testTube','Lab Markers \u2192 Symptoms','CRP/calprotectin elevations align with flare severity',"openPattern('inflammatory-markers')"],
      ['brain','Stress \u2192 Inflammation','Sustained stress may trigger flare episodes',"openPattern('stress-inflammation')"],
      ['activity','Fatigue \u2192 Flare Warning','Unusual fatigue may precede flare onset',"openPattern('fatigue-pattern')"],
      ['utensils','Food Tolerance \u2192 Disease State','Tolerance changes between flare and remission',"openPattern('diet-tolerance')"],
    ],

    patternExperiments: [
      ['utensils','Food reintroduction during remission','Systematically test foods when stable for 2+ weeks',"nav('track');setSegment('track','continue')"],
      ['brain','Stress management protocol','Daily stress check-in and calming routine for 14 days',"nav('track');setSegment('track','continue')"],
    ],

    patternTrends: [
      ['thermom','Symptom Trends','Urgency and pain over 30 days'],
      ['poop','Bowel Trends','Frequency, blood, and consistency over 14 days'],
      ['testTube','Lab Trends','CRP and calprotectin over 3 months'],
      ['moon','Daily Foundations Trends','Sleep, fatigue, and stress'],
    ],
    patternTrendsChart: {
      bars: [30,85,90,40,25,80,95,35,20,88,92,30,85,40],
    },

    patternReports: [
      ['clipList','Weekly Summary','This week at a glance'],
      ['calendar','Monthly Summary','30-day flare and remission overview'],
      ['compass','Visit-Ready Summary','Formatted for your gastroenterologist',"nav('care');setSegment('care','navigation');navSub('visit')"],
      ['clock','Pattern History','How patterns have evolved over time'],
    ],

    // Care screen
    careHabits: [
      { icon: 'pill', name: 'Medication timing', meta: 'Consistent timing for optimal effect', tag: 'Recommended now' },
      { icon: 'brain', name: 'Stress check-in', meta: '3 min \u00b7 Daily stress and mood rating' },
      { icon: 'activity', name: 'Gentle movement', meta: '10 min \u00b7 Low-impact movement for flare days' },
      { icon: 'heart', name: 'Joint care routine', meta: 'Stretching and support for extraintestinal symptoms' },
    ],

    carePlans: [
      ['clipList','Flare management plan','Active \u00b7 monitoring current symptoms'],
      ['pill','Biologic optimisation plan','Track infusion response and timing'],
    ],

    careFlare: [
      { icon: 'alertTri', name: 'Urgent flare protocol', meta: 'When to call your doctor immediately' },
      { icon: 'droplets', name: 'Hydration protocol', meta: 'Fluid and electrolyte management during flares' },
      { icon: 'thermom', name: 'Pain management', meta: 'NSAIDs (ibuprofen, naproxen) have been associated with Crohn\'s flares. Acetaminophen/paracetamol is often considered a safer alternative — discuss pain management with your doctor.' },
    ],

    careRecs: [
      ['utensils','Low-residue diet during flares','Reduce gut irritation with easily digestible foods'],
      ['thermom','Track extraintestinal symptoms','Joint pain, skin issues, and eye inflammation may relate to flares'],
      ['activity','Monitor fatigue patterns','Fatigue may be an early flare indicator worth tracking'],
    ],

    careExperiments: [
      ['utensils','Food reintroduction during remission','Systematically test foods when stable for 2+ weeks',"nav('track');setSegment('track','continue')"],
      ['brain','Stress management protocol','Daily stress check-in and calming routine for 14 days',"nav('track');setSegment('track','continue')"],
    ],

    careNavItems: [
      ['clipList','Prepare for Infusion','Checklist, summary, and questions',"navSub('visit')"],
      ['helpCircle','Questions for Doctor','Organise your main concerns',"navSub('visit')"],
      ['testTube','Labs & Procedures','CRP, calprotectin, and infusion prep'],
      ['compass','Referrals & Specialists','Track referrals and specialist visits'],
      ['fileText','Visit Summaries','Review and export past visit notes'],
    ],

    careClinical: {
      timeline: [
        { status: 'done', title: 'Diagnosis confirmed', sub: 'Completed \u00b7 6 months ago' },
        { status: 'done', title: 'Biologic started', sub: 'Completed \u00b7 4 months ago' },
        { status: 'active', title: 'Infusion cycle', sub: 'In progress \u00b7 Next infusion in 4 days' },
        { status: '', title: 'Treatment review', sub: 'Pending \u00b7 After next infusion', last: true },
      ],
      items: [
        ['clipList','Treatment Plan','Current biologic plan and goals'],
        ['pill','Medications & Adherence','Track biologic infusions and oral medications'],
        ['calendar','Follow-Up Plan','Next infusion and monitoring priorities'],
        ['users','Care Team Coordination','Coordinate across your care team'],
        ['testTube','Results & Interpretation','Lab results, imaging, and what they mean'],
      ],
    },

    // Visit prep
    visitPrep: {
      title: 'Infusion preparation',
      subtitle: 'Infusion appointment in 4 days',
      stepsTotal: 4,
      stepsDone: 2,
      checklist: [
        { label: 'Document current flare symptoms', done: true },
        { label: 'Review recent lab results', done: true },
        { label: 'Prepare flare severity discussion', done: false },
        { label: 'List medication adjustment questions', done: false },
      ],
      mainConcern: 'Possible flare with increased frequency (4x/day), urgency (9/10), and blood present. Need to discuss severity and medication adjustments.',
      questions: [
        'Should my infusion dose or interval be adjusted given this flare?',
        'Are my CRP and calprotectin levels indicating worsening disease?',
        'Should we consider additional imaging or scope?',
        'Should we check iron levels and screen for anemia given the blood in stool?',
      ],
      summaryNote: 'Auto-generated from your logs and patterns. 6 patterns, 30 days of data.',
    },

    // Chat screen
    chatConversations: [
      ['pill','Infusion prep conversation','Continued 1 hour ago'],
      ['trendUp','Flare pattern discussion','Yesterday'],
      ['utensils','Diet during flare','2 days ago'],
      ['sparkles','General Crohn\'s questions','Last week'],
    ],

    // Notifications
    notifications: {
      action: [
        { group: 'Red Flags', items: [
          { icon: 'alertTri', title: 'Blood in stool detected', sub: 'Log severity and frequency \u2014 discuss at infusion', time: 'Today', unread: true, urgent: true },
        ]},
        { group: 'Pattern Changes', items: [
          { icon: 'trendUp', title: 'Flare pattern activated', sub: 'Symptoms consistent with flare onset', time: 'Today', action: "nav('patterns');openPattern('flare-remission')", unread: true },
        ]},
        { group: 'Care Tasks Due', items: [
          { icon: 'thermom', title: 'Log flare symptoms', sub: 'Track severity before your infusion', time: '2:00 PM', action: "nav('track');openSheet('symptom')", unread: true },
        ]},
        { group: 'Medication & Supplements', items: [
          { icon: 'pill', title: 'Medication reminder', sub: 'Take your oral medications', time: '8:00 AM', action: "openSheet('meds')" },
        ]},
        { group: 'Visits & Tests Due', items: [
          { icon: 'calendar', title: 'Infusion in 4 days', sub: 'Continue prep \u2014 2 of 4 steps complete', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true, urgent: true },
        ]},
        { group: 'Missing Important Data', items: [
          { icon: 'activity', title: 'No energy log today', sub: 'Fatigue tracking helps predict flare severity', time: 'Today', action: "nav('track');openSheet('movement')" },
        ]},
      ],
      updates: [
        { group: 'Pattern Updates', items: [
          { icon: 'trendUp', title: 'Flare cycle analysis updated', sub: '6 patterns tracked, flare signal active', time: 'Today', action: "nav('patterns')", unread: true },
        ]},
        { group: 'Results & Reports', items: [
          { icon: 'clipList', title: 'Infusion summary ready', sub: 'Preview your updated flare report', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Shared & Network Updates', items: [
          { icon: 'users', title: 'Care team update', sub: 'Dr. Adebayo reviewed your summary', time: '1 day ago' },
        ]},
        { group: 'Integrations', items: [
          { icon: 'watch', title: 'Apple Health sync', sub: 'Sleep and activity data updated', time: 'Today' },
        ]},
        { group: 'Product & Account', items: [
          { icon: 'sparkles', title: 'New feature available', sub: 'Flare prediction alerts now in Patterns', time: '2 days ago' },
        ]},
      ],
      inbox: [
        { type: 'time-group', label: 'Today' },
        { icon: 'alertTri', title: 'Blood in stool detected', sub: 'Discuss at infusion appointment', time: '6:45 AM', unread: true, urgent: true },
        { icon: 'trendUp', title: 'Flare pattern activated', sub: 'Symptoms match previous flare onset', time: '7:00 AM', action: "nav('patterns');openPattern('flare-remission')", unread: true },
        { icon: 'thermom', title: 'Log flare symptoms', sub: 'Track severity for infusion prep', time: '2:00 PM', action: "nav('track');openSheet('symptom')" },
        { type: 'time-group', label: 'Yesterday' },
        { icon: 'poop', title: 'Bowel frequency rising', sub: 'Frequency increased to 3x yesterday', time: '8:00 AM' },
        { icon: 'activity', title: 'Fatigue check-in', sub: 'Rate your energy level', time: '10:00 AM' },
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
