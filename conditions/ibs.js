export default {
  persona: {
    name: 'Sarah',
    initials: 'SC',
    fullName: 'Sarah Chen',
    profileDesc: 'Active symptom management',
    stage: 'Flare management',
    stageNote: "Here's what matters now.",
    focus: 'IBS-Mixed focus',
    visitNote: 'GI follow-up in 2 weeks',
  },

  entries: {
    bm: { title:'Bowel movement', subtitle:'Loose stool, urgency \u00b7 7:45 AM', icon:'poop', details:[['Type','Bristol 6'],['Urgency','8/10'],['Pain','5/10'],['Time','3 min']] },
    food: { title:'Food', subtitle:'Yogurt, granola, coffee \u00b7 8:30 AM', icon:'utensils', details:[['Meal','Breakfast'],['Foods','Yogurt, granola, coffee'],['Tags','Dairy, FODMAP-moderate, caffeine'],['Time','8:30 AM']] },
  },

  patterns: {
    'fodmap-triggers': {
      title: 'High-FODMAP foods and symptom flares',
      subtitle: 'Meals with garlic, onion, or wheat tend to trigger bloating and urgency within 4 hours.',
      confidence: 45,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [35,60,40,75,30,65,50,80,35,70,45,60,75,40],
      summary: 'On days where you consume high-FODMAP foods (garlic, onion, wheat, certain fruits), bloating and urgency episodes appear within 2\u20134 hours in roughly half of cases. The signal is moderate \u2014 not every high-FODMAP meal triggers symptoms, which suggests portion size or food combinations may also matter.',
      factors: [
        ['utensils','High-FODMAP meal','Moderate signal','#F59E0B','45%','#FEF3C7'],
        ['utensils','Portion size','Contributing factor','#F59E0B','30%','#FEF3C7'],
        ['brain','Same-day stress','May amplify','var(--text-hint)','22%','var(--sand-light)'],
        ['moon','Poor sleep prior night','Weak signal','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log specific FODMAP categories with each meal for 2 weeks','Note portion sizes alongside food types','Track symptom onset time after meals'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'stress-flare': {
      title: 'Work stress and IBS flare cycle',
      subtitle: 'High-stress workdays consistently precede multi-day symptom flares.',
      confidence: 62,
      chip: 'green', chipLabel: 'Strong evidence',
      bars: [50,70,90,55,85,60,92,50,88,65,90,58,85,70],
      summary: 'When you rate work stress above 7/10, a symptom flare typically begins within 12\u201324 hours and lasts 2\u20133 days. The flare usually starts with urgency and diarrhea, then shifts to constipation as it resolves. This gut-brain pattern is one of the most consistent signals in your data \u2014 it appeared in 8 out of 12 high-stress episodes.',
      factors: [
        ['brain','Work stress rating','Strong signal','var(--green)','62%','#D1FAE5'],
        ['moon','Sleep disruption','Amplifying factor','#F59E0B','40%','#FEF3C7'],
        ['utensils','Irregular meal timing','Contributing','#F59E0B','28%','#FEF3C7'],
        ['activity','Reduced movement','Weak signal','var(--text-hint)','18%','var(--sand-light)'],
      ],
      clarify: ['Continue logging stress type and intensity daily','Track flare duration from onset to resolution','Note whether weekend recovery breaks the cycle'],
      trackAction: "nav('track');openSheet('mental')",
      chatGuide: 'psychology',
    },
    'alternating-bowel': {
      title: 'Diarrhea/constipation alternation pattern',
      subtitle: 'Your bowel habits alternate in roughly 3\u20135 day cycles between loose and hard stools.',
      confidence: 38,
      chip: 'amber', chipLabel: 'Moderate confidence',
      bars: [25,55,70,30,65,45,80,35,60,50,75,40,55,65],
      summary: 'Your bowel logs show a cyclical pattern: 2\u20133 days of loose/urgent stools followed by 2\u20133 days of harder, less frequent stools. This alternating pattern is characteristic of IBS-M. The trigger for each swing is not yet clear \u2014 it may be diet, stress, or an internal rhythm.',
      factors: [
        ['poop','Bowel type cycling','Moderate signal','#F59E0B','38%','#FEF3C7'],
        ['brain','Stress episodes','May trigger swings','#F59E0B','30%','#FEF3C7'],
        ['utensils','Diet changes','Uncertain role','var(--text-hint)','20%','var(--sand-light)'],
        ['flower','Menstrual phase','May influence','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log every bowel movement with Bristol type for 3 weeks','Track the exact day each swing begins','Note what happened in the 24 hours before a swing'],
      trackAction: "nav('track');openSheet('symptom')",
      chatGuide: 'gastro',
    },
    'sleep-disruption': {
      title: 'Poor sleep triggering next-day symptoms',
      subtitle: 'Nights with under 5 hours of sleep are followed by higher urgency and pain.',
      confidence: 30,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [20,45,35,60,25,55,40,70,30,50,45,35,55,40],
      summary: 'On nights where you sleep fewer than 5 hours, the next day shows increased urgency, abdominal pain, and more frequent bowel movements. The signal is still building \u2014 you have 6 data points so far, with 4 showing this pattern.',
      factors: [
        ['moon','Sleep duration','Early signal','#F59E0B','30%','#FEF3C7'],
        ['brain','Pre-sleep anxiety','Contributing','#F59E0B','25%','#FEF3C7'],
        ['utensils','Late-night eating','Uncertain','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Log sleep duration and quality every morning','Rate urgency and pain within 2 hours of waking','Track whether naps help on poor-sleep days'],
      trackAction: "nav('track');openSheet('sleep')",
      chatGuide: 'psychology',
    },
    'caffeine-urgency': {
      title: 'Coffee/caffeine and urgency episodes',
      subtitle: 'Coffee consumption is followed by urgency within 30 minutes on most days.',
      confidence: 52,
      chip: 'green', chipLabel: 'Strong evidence',
      bars: [40,65,80,45,75,55,85,50,70,60,80,55,75,65],
      summary: 'On days where you drink coffee, urgency episodes appear within 15\u201345 minutes in 7 out of 10 instances. The effect is stronger on an empty stomach and on days where you are already in a loose-stool phase of your alternating cycle. Decaf coffee shows a weaker but still present effect, suggesting both caffeine and coffee compounds play a role.',
      factors: [
        ['utensils','Coffee consumption','Strong signal','var(--green)','52%','#D1FAE5'],
        ['utensils','Empty stomach','Amplifying factor','#F59E0B','35%','#FEF3C7'],
        ['poop','Current bowel phase','Context factor','#F59E0B','28%','#FEF3C7'],
        ['brain','Morning anxiety','Weak signal','var(--text-hint)','15%','var(--sand-light)'],
      ],
      clarify: ['Track coffee timing and whether you ate before drinking it','Note urgency onset time precisely after coffee','Try decaf for 5 days and compare urgency patterns'],
      trackAction: "nav('track');openSheet('food')",
      chatGuide: 'nutrition',
    },
    'menstrual-flare': {
      title: 'Menstrual cycle and IBS symptom intensification',
      subtitle: 'IBS symptoms appear to worsen in the 2\u20133 days before and during your period.',
      confidence: 25,
      chip: 'amber', chipLabel: 'Low confidence',
      bars: [15,30,45,20,55,25,40,50,30,45,35,25,40,30],
      summary: 'In the luteal phase and early menstruation, your logs show increased bloating, looser stools, and more abdominal pain. This is a very early signal with only 2 full cycles tracked. Hormonal fluctuations (especially prostaglandins) are known to affect gut motility and sensitivity in IBS.',
      factors: [
        ['flower','Menstrual phase','Early signal','#F59E0B','25%','#FEF3C7'],
        ['brain','PMS-related stress','Contributing','var(--text-hint)','18%','var(--sand-light)'],
        ['utensils','Dietary changes during period','Uncertain','var(--text-hint)','12%','var(--sand-light)'],
      ],
      clarify: ['Log menstrual cycle start and end dates consistently','Rate IBS symptoms daily throughout your cycle','Track for at least 3 full cycles to confirm the pattern'],
      trackAction: "nav('track');openSheet('menstrual')",
      chatGuide: 'gastro',
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
      intro: 'Your main GI copilot. Ask anything about your IBS symptoms, patterns, triggers, or how to prepare for care.',
      focuses: ['Symptom interpretation','Next best step','Visit preparation','Pattern clarification','Routing to the right guide'],
      prompts: ['Why do my symptoms keep changing?','What should I log next?','Help me prepare for my visit','What should I do during a flare?'],
      userMsg: 'Why do my symptoms keep changing?',
      assistantMsg: 'The alternating pattern you\'re experiencing \u2014 swinging between diarrhea and constipation \u2014 is characteristic of IBS-M (mixed type). Your data shows these swings happen in roughly 3\u20135 day cycles. The biggest trigger appears to be work stress, which kicks off a flare that starts with urgency and loose stools, then shifts to constipation as it winds down. Tracking your stress levels and bowel type daily will help us predict and potentially shorten these cycles.',
      routeOuts: [['View alternating pattern',"nav('patterns');openPattern('alternating-bowel')"],['Log stress',"nav('track');openSheet('mental')"]],
    },
    track: {
      intro: 'Helps you figure out what to track, when, and why \u2014 so every log moves you toward understanding your IBS triggers.',
      focuses: ['What to log next','Tracking consistency','Signal gaps','Logging priority','Building evidence'],
      prompts: ['What should I log right now?','Help me track more consistently','What signals am I missing?','Which logs matter most for IBS?'],
      userMsg: 'What signals am I missing?',
      assistantMsg: 'You\'ve been consistent with bowel and food logs, which is great for IBS tracking. The main gap is FODMAP detail \u2014 you\'re logging meals but not always tagging specific FODMAP categories (fructans, lactose, polyols, etc.). The other gap is menstrual cycle tracking, which could explain some of your symptom variability. Try tagging FODMAP groups with each meal and logging your cycle consistently.',
      routeOuts: [['Log food with FODMAP tags',"nav('track');openSheet('food')"],['Log menstrual cycle',"nav('track');openSheet('menstrual')"]],
    },
    patterns: {
      intro: 'Helps you understand what your IBS data means \u2014 trigger relationships, symptom cycles, and what\'s becoming clearer.',
      focuses: ['Pattern interpretation','Signal strength','What\'s changing','Confidence levels','Data relationships'],
      prompts: ['What does my recent data show?','Which patterns are strengthening?','Compare this week to last week','What\'s still uncertain?'],
      userMsg: 'What does my recent data show?',
      assistantMsg: 'Over the last 14 days, your strongest signal is the stress-flare connection at 62% confidence \u2014 work stress consistently precedes multi-day flares. Your caffeine-urgency link is also strong at 52%. The alternating bowel pattern is becoming clearer but needs more consistent Bristol type logging. Your FODMAP trigger signal is moderate at 45% \u2014 portion size may matter as much as food type.',
      routeOuts: [['View stress-flare pattern',"nav('patterns');openPattern('stress-flare')"],['Track FODMAP details',"nav('track');openSheet('food')"]],
    },
    selfcare: {
      intro: 'Supports your daily IBS management \u2014 habits, guided plans, flare support, and practical self-care between appointments.',
      focuses: ['Daily routines','Guided exercises','Flare support','Habit building','Self-management'],
      prompts: ['What should I focus on today?','Help me with my routine','I\'m having a flare','What\'s my next best step?'],
      userMsg: 'I\'m having a flare',
      assistantMsg: 'I\'m sorry you\'re dealing with a flare. Let\'s focus on what helps right now. First, try peppermint oil \u2014 it can reduce cramping and urgency quickly. Then do a 5-minute gut-directed breathing exercise to calm your nervous system, which directly affects IBS symptoms. Stick to low-FODMAP, easy-to-digest foods today. Log your symptoms so we can track this flare and see if it follows your typical stress-triggered pattern.',
      routeOuts: [['Flare support',"nav('care');setSegment('care','self');setSegment('self','flare')"],['Breathing exercise',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    clinicalnav: {
      intro: 'Helps you prepare for GI visits, build questions about your IBS, organise your data for doctors, and navigate next steps.',
      focuses: ['Visit preparation','Doctor questions','Summary generation','Test preparation','Referral guidance'],
      prompts: ['Help me prepare for my visit','What questions should I ask about IBS?','Turn my patterns into a summary','What should I bring up?'],
      userMsg: 'Help me prepare for my visit',
      assistantMsg: 'Your GI follow-up is in 2 weeks. Based on your logs, the top things to discuss are: your IBS-M alternating pattern with unpredictable swings, the strong stress-flare connection, and whether a formal low-FODMAP elimination would help identify specific triggers. I can generate a doctor-ready summary from your data and help you build a question list focused on management options.',
      routeOuts: [['Visit prep',"nav('care');setSegment('care','navigation');navSub('visit')"],['View summary',"nav('patterns');setSegment('patterns','trends')"]],
    },
    clinicalcare: {
      intro: 'Helps you organise IBS treatment plans, track medication adherence, monitor treatment response, and coordinate follow-up.',
      focuses: ['Treatment tracking','Medication adherence','Response monitoring','Follow-up planning','Care coordination'],
      prompts: ['Is my treatment helping?','What should I track for follow-up?','Review my medication adherence','What changed since I started treatment?'],
      userMsg: 'Is my treatment helping?',
      assistantMsg: 'You\'re on day 12 of your current IBS management plan. Looking at your logs, urgency episodes have decreased slightly (from 5/week to 3/week) and the alternating cycles may be lengthening. However, stress-triggered flares are still happening at the same rate. It\'s still early for some interventions \u2014 gut-directed hypnotherapy typically takes 6\u20138 sessions to show full effect. Keep logging so we can give your doctor a clear picture at follow-up.',
      routeOuts: [['Treatment timeline',"nav('care');setSegment('care','clinical')"],['Log treatment',"nav('track');openSheet('treatment')"]],
    },
    gastro: {
      intro: 'Provides a gastroenterology perspective on your IBS symptoms, patterns, and clinical questions.',
      focuses: ['IBS symptom interpretation','Differential considerations','Test guidance','Red flag assessment','Clinical context'],
      prompts: ['Is IBS-M common?','Should I be concerned about these symptoms?','What tests might help?','Is this pattern typical for IBS?'],
      userMsg: 'Is IBS-M common?',
      assistantMsg: 'Yes, IBS-M (mixed type) affects roughly a third of IBS patients. The alternating pattern you\'re experiencing \u2014 cycling between diarrhea and constipation \u2014 is well-recognised. It can be the most challenging subtype to manage because treatments that help one phase may worsen the other. The good news is that identifying your specific triggers (like the stress-flare connection in your data) allows for more targeted management rather than one-size-fits-all approaches.',
      routeOuts: [['View patterns',"nav('patterns')"],['Prepare for visit',"nav('care');setSegment('care','navigation');navSub('visit')"]],
    },
    nutrition: {
      intro: 'Provides guidance on diet, FODMAP management, food triggers, and how nutrition relates to your IBS symptoms.',
      focuses: ['FODMAP guidance','Food-symptom connections','Meal timing','Trigger identification','Nutritional support'],
      prompts: ['How does the FODMAP diet work?','Are there foods I should avoid?','Review my food-symptom patterns','What diet changes might help?'],
      userMsg: 'How does the FODMAP diet work?',
      assistantMsg: 'The low-FODMAP diet is a 3-phase approach specifically designed for IBS. Phase 1 (elimination): remove high-FODMAP foods for 2\u20136 weeks to see if symptoms improve. Phase 2 (reintroduction): add back one FODMAP group at a time to identify your specific triggers. Phase 3 (personalisation): build a long-term diet based on your individual tolerances. Your data already shows a moderate signal around high-FODMAP meals \u2014 a structured elimination could clarify which FODMAP groups are your main triggers.',
      routeOuts: [['Log food with FODMAP tags',"nav('track');openSheet('food')"],['View food patterns',"nav('patterns');setSegment('patterns','connections')"]],
    },
    pelvic: {
      intro: 'Provides guidance on pelvic floor function, IBS-related cramping, and exercises that support bowel regularity.',
      focuses: ['Pelvic floor function','Cramping support','Bowel regularity','Coordination exercises','Motility support'],
      prompts: ['Help with cramping during flares','What exercises help IBS?','Why does urgency feel so intense?','Can pelvic exercises help IBS-M?'],
      userMsg: 'Why does urgency feel so intense?',
      assistantMsg: 'In IBS, the gut is hypersensitive \u2014 normal contractions feel more intense, and the threshold for urgency is lower. This visceral hypersensitivity means your brain amplifies signals from your gut. Pelvic floor exercises can help you gain more control over the urge-to-go response. Deep breathing during urgency episodes activates the parasympathetic nervous system and can reduce the intensity. Over time, gut-directed techniques can actually lower your sensitivity threshold.',
      routeOuts: [['Pelvic floor exercises',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log bowel movement',"openEntry('bm')"]],
    },
    psychology: {
      intro: 'Explores the gut-brain connection in IBS \u2014 how stress, anxiety, and mental health drive your symptom cycles and what to do about it.',
      focuses: ['Gut-brain axis in IBS','Stress-flare cycle','Nervous system regulation','Cognitive patterns','Emotional wellbeing'],
      prompts: ['How does stress trigger IBS flares?','Help me understand the gut-brain connection','What calming techniques help IBS?','Is anxiety making my IBS worse?'],
      userMsg: 'How does stress trigger IBS flares?',
      assistantMsg: 'In IBS, the gut-brain axis is heightened \u2014 your gut is essentially a second brain that responds powerfully to stress. When work stress spikes, your nervous system releases cortisol and activates the fight-or-flight response, which directly disrupts gut motility and increases visceral sensitivity. Your data shows this clearly: 8 out of 12 high-stress episodes triggered multi-day flares. Gut-directed hypnotherapy is one of the most evidence-based treatments for breaking this cycle \u2014 it literally retrains how your brain communicates with your gut.',
      routeOuts: [['View stress-flare pattern',"nav('patterns');openPattern('stress-flare')"],['Log stress',"nav('track');openSheet('mental')"]],
    },
    functional: {
      intro: 'Offers a root-cause, systems-level perspective on your IBS \u2014 looking at the bigger picture beyond individual symptoms.',
      focuses: ['Root-cause thinking','Systems perspective','Lifestyle factors','Holistic context','Integrative approach'],
      prompts: ['What root causes should I explore?','How do my systems connect?','What lifestyle factors matter?','What am I missing?'],
      userMsg: 'What root causes should I explore?',
      assistantMsg: 'Looking at your full picture \u2014 IBS-M, stress-triggered flares, FODMAP sensitivity, caffeine reactivity, and menstrual cycle influence \u2014 several systems are interconnected. Your nervous system dysregulation (stress-flare cycle) may be the central driver, with gut microbiome imbalance amplifying food sensitivities. A functional approach would prioritise nervous system regulation first (gut-directed hypnotherapy, vagal toning), then address the gut environment (targeted probiotics, FODMAP personalisation), and finally optimise supporting factors (sleep, caffeine, cycle-aware management).',
      routeOuts: [['View all connections',"nav('patterns');setSegment('patterns','connections')"],['Daily habits',"nav('care');setSegment('care','self');setSegment('self','habits')"]],
    },
    ayurveda: {
      intro: 'Provides a traditional Ayurvedic perspective on IBS, digestive balance, and natural approaches to managing alternating symptoms.',
      focuses: ['Digestive fire (Agni)','Constitutional balance','Lifestyle rhythm','Natural remedies','Seasonal guidance'],
      prompts: ['What does Ayurveda say about IBS?','How can I balance my digestion?','What daily routine helps IBS?'],
      userMsg: 'What does Ayurveda say about IBS?',
      assistantMsg: 'In Ayurveda, IBS-M reflects an imbalance between Vata (causing constipation, gas, anxiety) and Pitta (causing diarrhea, urgency, inflammation). The alternating pattern suggests your Agni (digestive fire) is variable \u2014 sometimes too weak, sometimes too reactive. Key recommendations include eating warm, well-cooked meals at regular times, avoiding raw and cold foods during flares, drinking warm ginger or fennel tea to stabilise digestion, and establishing a consistent daily routine. Your stress-symptom connection aligns with the Ayurvedic understanding of mind-gut interconnection.',
      routeOuts: [['Morning routine',"nav('care');setSegment('care','self');setSegment('self','habits')"],['Log food',"nav('track');openSheet('food')"]],
    },
    pharmacy: {
      intro: 'Provides guidance on IBS medications, supplements, interactions, and adherence \u2014 helping you understand what you\'re taking and why.',
      focuses: ['IBS medication review','Side effects','Drug interactions','Supplement guidance','Adherence support'],
      prompts: ['What medications help IBS-M?','Could this be a side effect?','What about peppermint oil?','Should I try probiotics?'],
      userMsg: 'What about peppermint oil?',
      assistantMsg: 'Peppermint oil is one of the best-studied natural treatments for IBS. It works as an antispasmodic \u2014 relaxing the smooth muscle in your gut, which reduces cramping, bloating, and urgency. Enteric-coated capsules are recommended so the oil reaches your intestines rather than dissolving in your stomach. Take it 30\u201360 minutes before meals for best effect. Your data suggests it could be especially helpful before coffee or high-FODMAP meals, which are your main urgency triggers.',
      routeOuts: [['Log medication',"nav('track');openSheet('meds')"],['Treatment plan',"nav('care');setSegment('care','clinical')"]],
    },
  },

  screens: {
    // Today screen
    todayGreeting: 'Good morning, Sarah',
    todaySubtitle: "Flare management \u00b7 Here's what matters now.",
    todayStatePills: [
      { icon: 'activity', text: '3 of 5 signals' },
      { icon: 'calendar', text: 'Follow-up in 2 weeks' },
      { text: 'Flare management active' },
    ],
    todayTopPriority: {
      title: 'Top priority',
      subtitle: 'Log food triggers with FODMAP tags today to clarify which foods drive your flares.',
      action: "nav('track');setSegment('track','quick');openSheet('food')",
      ctaText: 'Do this now',
    },
    todayFeed: [
      { icon: 'thermom', title: 'Must do today', subtitle: 'Tag FODMAP groups with meals to sharpen trigger signals', action: "nav('track');openSheet('food')" },
      { icon: 'trendUp', title: 'Pattern update', subtitle: 'Your stress-flare cycle is the strongest signal at 62%', action: "nav('patterns');openPattern('stress-flare')" },
      { icon: 'wind', title: 'Flare support', subtitle: 'Gut-directed breathing to calm IBS symptoms', action: "nav('care');setSegment('care','self');setSegment('self','flare')" },
      { icon: 'utensils', title: 'FODMAP tracking', subtitle: 'Review your food-symptom connections', action: "nav('patterns');openPattern('fodmap-triggers')" },
      { icon: 'msgCircle', title: 'Chat prompt', subtitle: 'Ask about your alternating pattern or triggers', action: "nav('chat')" },
      { icon: 'clock', title: 'Recent activity', subtitle: 'Bowel movement logged at 7:45 AM', action: "openEntry('bm')" },
    ],

    // Track screen
    quickGrid: [
      ['poop','Bowel',"openEntry('bm')"],['thermom','Symptoms',"openSheet('symptom')"],['utensils','Nutrition',"openEntry('food')"],
      ['droplets','Hydration',"openSheet('hydration')"],['moon','Sleep',"openSheet('sleep')"],['brain','Stress & Mood',"openSheet('mental')"],
      ['activity','Movement',"openSheet('movement')"],['pill','Meds & Supps',"openSheet('meds')"],['flower','Period',"openSheet('menstrual')"],
      ['fileText','Notes',"openSheet('note')"],
    ],
    mainTrackers: [
      ['poop','Bowel Movement','Track Bristol type and urgency for your IBS-M pattern',"openEntry('bm')"],
      ['thermom','Symptoms','Track symptom timing, urgency, and pain severity',"openSheet('symptom')"],
      ['utensils','Nutrition','Track meals with FODMAP tags and portion sizes',"openEntry('food')"],
    ],

    continueTrackers: {
      groups: [
        { label: 'Resume Incomplete', items: [
          ['utensils','Finish logging breakfast','Add FODMAP tags to your meal entry',"openEntry('food')"],
        ]},
        { label: 'Suggested Next Log', items: [
          ['thermom','Add symptoms after breakfast','Track urgency and bloating to connect food to symptoms',"openSheet('symptom')"],
          ['brain','Log work stress level','Strengthen your stress-flare pattern signal',"openSheet('mental')"],
        ]},
        { label: 'In-Progress Tracking', items: [
          ['flower','Log menstrual cycle','Build your cycle-symptom connection',"openSheet('menstrual')"],
        ]},
      ],
    },

    recentEntries: {
      groups: [
        { label: 'Today', items: [
          ['poop','Bowel movement','Loose stool, urgency \u00b7 7:45 AM',"openEntry('bm')"],
          ['utensils','Food','Yogurt, granola, coffee \u00b7 8:30 AM',"openEntry('food')"],
          ['thermom','Symptoms','Not logged yet today',"openSheet('symptom')"],
        ]},
        { label: 'Yesterday', items: [
          ['poop','Bowel movement','Hard stool, straining \u00b7 9:10 AM',"openEntry('bm')"],
          ['utensils','Food','Pasta with garlic bread \u00b7 7:00 PM',"openEntry('food')"],
          ['thermom','Symptoms','Bloating 6/10, cramping \u00b7 8:30 PM',"openSheet('symptom')"],
        ]},
        { label: 'This Week', items: [
          ['moon','Sleep','5.5 hours average \u00b7 4 entries',"openSheet('sleep')"],
          ['brain','Stress & Mood','High work stress \u00b7 3 entries',"openSheet('mental')"],
        ]},
      ],
    },

    moreTrackers: {
      groups: [
        { label: 'Daily Foundations', items: [
          ['pill','Medication & Supplements','Track peppermint oil and other IBS treatments',"openSheet('meds')"],
          ['brain','Mental Health','Stress and mood context for IBS flare patterns',"openSheet('mental')"],
          ['activity','Energy & Movement','Movement and energy to support gut regulation',"openSheet('movement')"],
        ]},
        { label: 'Specialised Context', items: [
          ['flower','Menstrual / Hormonal','Cycle context that may affect IBS symptoms',"openSheet('menstrual')"],
          ['shield','Food Sensitivity & Allergy','Track FODMAP reactions and food-response context',"openSheet('allergy')"],
          ['timer','Fasting','Track fasting patterns and metabolic context',"openSheet('fasting')"],
          ['heartPulse','Biometrics & Demographics','Update personal health context',"openSheet('biometrics')"],
        ]},
        { label: 'Care & Evidence', items: [
          ['steth','Treatment Adherence','Track clinician-directed IBS care',"openSheet('treatment')"],
          ['testTube','Test Results','Add or review tests and reports',"openSheet('results')"],
        ]},
      ],
    },

    entryContext: [
      ['utensils','Breakfast logged','45 minutes later',"openEntry('food')"],
      ['thermom','No symptom logged yet','Add symptoms to connect food to your IBS triggers',"openSheet('symptom')"],
    ],

    // Patterns screen
    patternHero: {
      title: 'Work stress \u2192 IBS flare cycle',
      subtitle: 'High-stress workdays consistently trigger multi-day flares starting with urgency.',
      chip: 'green',
      chipLabel: 'Strong evidence',
      bars: [50,70,90,55,85,60,92,50,88,65,90,58,85,70],
      confidence: 62,
      confidenceColor: 'var(--green)',
      action: "openPattern('stress-flare')",
      signalRows: [
        { color: 'green', label: 'Flare within 24h of high stress', value: '8 of 12' },
        { color: 'muted', label: 'Caffeine \u2192 urgency within 30 min', value: '7 of 10' },
        { color: 'muted', label: 'High-FODMAP meal \u2192 symptoms', value: '5 of 10' },
      ],
    },

    patternFeed: {
      groups: [
        { label: 'Strongest Patterns', items: [
          ['brain','Work stress \u2192 IBS flare cycle','Strong evidence \u00b7 62% confidence',"openPattern('stress-flare')"],
          ['utensils','Caffeine \u2192 urgency episodes','Strong evidence \u00b7 52% confidence',"openPattern('caffeine-urgency')"],
        ]},
        { label: 'Active Patterns', items: [
          ['utensils','FODMAP triggers \u2192 symptom flares','Moderate confidence \u00b7 tracking in progress',"openPattern('fodmap-triggers')"],
          ['poop','Diarrhea/constipation alternation','Moderate confidence \u00b7 14 data points',"openPattern('alternating-bowel')"],
        ]},
        { label: 'New Signals', items: [
          ['moon','Poor sleep \u2192 next-day symptoms','Low confidence \u00b7 needs more data',"openPattern('sleep-disruption')"],
          ['flower','Menstrual cycle \u2192 IBS flares','Very early \u00b7 2 cycles tracked',"openPattern('menstrual-flare')"],
        ]},
        { label: 'Strengthening', items: [
          ['trendUp','Stress-flare signal growing','Confidence up from 48% to 62%',"openPattern('stress-flare')"],
        ]},
        { label: 'What Changed', items: [
          ['refresh','FODMAP signal needs detail','Tagging specific FODMAP groups would help',"openPattern('fodmap-triggers')"],
        ]},
      ],
    },

    patternConnections: [
      ['brain','Stress \u2192 IBS Flare','Work stress consistently triggers multi-day symptom flares',"openPattern('stress-flare')"],
      ['utensils','Caffeine \u2192 Urgency','Coffee triggers urgency within 30 minutes',"openPattern('caffeine-urgency')"],
      ['utensils','FODMAP Foods \u2192 Symptoms','High-FODMAP meals trigger bloating and urgency',"openPattern('fodmap-triggers')"],
      ['poop','Bowel Type \u2192 Cycling','Diarrhea and constipation alternate in 3\u20135 day cycles',"openPattern('alternating-bowel')"],
      ['moon','Sleep \u2192 Symptoms','Poor sleep nights precede higher urgency and pain',"openPattern('sleep-disruption')"],
      ['flower','Menstrual Cycle \u2192 IBS','Symptoms may intensify around menstruation',"openPattern('menstrual-flare')"],
    ],

    patternExperiments: [
      ['utensils','FODMAP reintroduction','Reintroduce one FODMAP group at a time for 3 days each',"nav('track');setSegment('track','continue')"],
      ['utensils','Caffeine elimination trial','Remove coffee for 7 days and track urgency changes',"nav('track');setSegment('track','continue')"],
    ],

    patternTrends: [
      ['thermom','Symptom Trends','Urgency and pain frequency over 30 days'],
      ['poop','Bowel Trends','Bristol type and alternation cycles over 14 days'],
      ['utensils','Nutrition Trends','FODMAP exposure and symptom correlation'],
      ['moon','Daily Foundations Trends','Sleep, stress, and movement patterns'],
    ],
    patternTrendsChart: {
      bars: [60,40,75,35,80,45,30,70,50,85,40,65,55,90],
    },

    patternReports: [
      ['clipList','Weekly Summary','This week at a glance'],
      ['calendar','Monthly Summary','30-day pattern overview'],
      ['compass','Visit-Ready Summary','Formatted for your doctor',"nav('care');setSegment('care','navigation');navSub('visit')"],
      ['clock','Pattern History','How patterns have evolved over time'],
    ],

    // Care screen
    careHabits: [
      { icon: 'wind', name: 'Gut-directed hypnotherapy', meta: '15 min \u00b7 Retrain gut-brain communication', tag: 'Recommended now' },
      { icon: 'pill', name: 'Peppermint oil timing', meta: 'Take 30 min before meals for IBS cramping' },
      { icon: 'utensils', name: 'FODMAP-friendly meals', meta: 'Low-FODMAP meal planning and prep' },
      { icon: 'moon', name: 'Sleep support routine', meta: 'Wind-down guidance for IBS-related sleep disruption' },
    ],

    carePlans: [
      ['clipList','Low-FODMAP elimination plan','Week 1 of 6 \u00b7 Elimination phase active'],
      ['brain','Stress management plan','Daily nervous system calming protocol'],
      ['utensils','Caffeine reduction plan','Gradual reduction to assess urgency impact'],
    ],

    careFlare: [
      { icon: 'alertTri', name: 'IBS flare protocol', meta: 'Immediate steps for urgency, pain, and bloating' },
      { icon: 'wind', name: 'Gut-directed breathing', meta: '5 min \u00b7 Calm your nervous system and reduce cramping' },
      { icon: 'shield', name: 'When to escalate', meta: 'Know when IBS symptoms need medical attention' },
    ],

    careRecs: [
      ['utensils','Track FODMAP groups','Tag specific FODMAP categories to identify your personal triggers'],
      ['brain','Daily stress management','Regular nervous system calming to reduce flare frequency'],
      ['wind','Gut-directed hypnotherapy','Evidence-based approach to retrain the gut-brain axis in IBS'],
    ],

    careExperiments: [
      ['utensils','FODMAP reintroduction','Reintroduce one FODMAP group at a time for 3 days each',"nav('track');setSegment('track','continue')"],
      ['utensils','Caffeine elimination','Remove coffee for 7 days and track urgency changes',"nav('track');setSegment('track','continue')"],
      ['brain','Stress-flare interruption','Try breathing exercises at first sign of work stress for 10 days',"nav('track');setSegment('track','continue')"],
    ],

    careNavItems: [
      ['clipList','Prepare for Visit','Checklist, summary, and questions',"navSub('visit')"],
      ['helpCircle','Questions for Doctor','Organise your IBS concerns',"navSub('visit')"],
      ['testTube','Tests & Procedures','Prep, instructions, and reminders'],
      ['compass','Referrals & Specialists','Track referrals and specialist visits'],
      ['fileText','Visit Summaries','Review and export past visit notes'],
    ],

    careClinical: {
      timeline: [
        { status: 'done', title: 'IBS-M diagnosis confirmed', sub: 'Completed \u00b7 6 weeks ago' },
        { status: 'done', title: 'Initial management plan started', sub: 'Completed \u00b7 4 weeks ago' },
        { status: 'active', title: 'Flare management and tracking', sub: 'In progress \u00b7 Ongoing' },
        { status: '', title: 'GI follow-up appointment', sub: 'Scheduled \u00b7 In 2 weeks' },
        { status: '', title: 'Treatment review and adjustment', sub: 'Pending \u00b7 After follow-up', last: true },
      ],
      items: [
        ['clipList','Treatment Plan','Current IBS-M management plan and goals'],
        ['pill','Medications & Adherence','Track peppermint oil, antispasmodics, and other IBS treatments'],
        ['calendar','Follow-Up Plan','Next check-ins and monitoring priorities'],
        ['users','Care Team Coordination','Coordinate across your care team'],
        ['testTube','Results & Interpretation','Lab results, tests, and what they mean'],
      ],
    },

    // Visit prep
    visitPrep: {
      title: 'Visit preparation',
      subtitle: 'GI follow-up in 2 weeks',
      stepsTotal: 4,
      stepsDone: 2,
      checklist: [
        { label: 'Define main concern', done: true },
        { label: 'Write questions to ask', done: true },
        { label: 'Review doctor summary', done: false },
        { label: 'Export or print summary', done: false },
      ],
      mainConcern: 'IBS-M with unpredictable alternating patterns and work-related flare triggers',
      questions: [
        'Should I try a formal low-FODMAP elimination?',
        'Could this be something other than IBS?',
        'What about gut-directed hypnotherapy?',
      ],
      summaryNote: 'Auto-generated from your logs and patterns. 6 patterns, 14 days of data.',
    },

    // Chat screen
    chatConversations: [
      ['brain','Stress and IBS flare discussion','Continued 1 hour ago'],
      ['utensils','FODMAP trigger analysis','Yesterday'],
      ['trendUp','Alternating pattern questions','2 days ago'],
      ['sparkles','General IBS management','Last week'],
    ],

    // Notifications
    notifications: {
      action: [
        { group: 'Red Flags', items: [
          { icon: 'alertTri', title: 'Extended flare duration', sub: 'This flare has lasted longer than usual \u2014 review your management plan', time: 'Today', unread: true, urgent: true },
        ]},
        { group: 'Pattern Changes', items: [
          { icon: 'trendUp', title: 'Stress-flare signal strengthened', sub: 'Confidence increased to 62% \u2014 this is your strongest pattern', time: 'Today', action: "nav('patterns');openPattern('stress-flare')", unread: true },
        ]},
        { group: 'Care Tasks Due', items: [
          { icon: 'utensils', title: 'Tag FODMAP groups', sub: 'Add FODMAP detail to your meals to sharpen trigger signals', time: '12:00 PM', action: "nav('track');openSheet('food')", unread: true },
        ]},
        { group: 'Medication & Supplements', items: [
          { icon: 'pill', title: 'Peppermint oil before lunch', sub: 'Take 30 minutes before your meal', time: '11:30 AM', action: "openSheet('meds')" },
        ]},
        { group: 'Visits & Tests Due', items: [
          { icon: 'calendar', title: 'GI follow-up in 2 weeks', sub: 'Continue your prep \u2014 2 of 4 steps complete', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true, urgent: true },
        ]},
        { group: 'Missing Important Data', items: [
          { icon: 'flower', title: 'No menstrual log this cycle', sub: 'Cycle tracking helps clarify your menstrual-IBS connection', time: 'Yesterday', action: "openSheet('menstrual')" },
        ]},
      ],
      updates: [
        { group: 'Pattern Updates', items: [
          { icon: 'trendUp', title: 'Weekly pattern summary', sub: '6 patterns tracked, 2 strengthened', time: 'Today', action: "nav('patterns')", unread: true },
        ]},
        { group: 'Results & Reports', items: [
          { icon: 'clipList', title: 'Doctor summary draft ready', sub: 'Preview your updated IBS report', time: 'Today', action: "nav('care');setSegment('care','navigation');navSub('visit')", unread: true },
        ]},
        { group: 'Shared & Network Updates', items: [
          { icon: 'users', title: 'Care team update', sub: 'Dr. Park reviewed your symptom summary', time: '3 days ago' },
        ]},
        { group: 'Integrations', items: [
          { icon: 'watch', title: 'Apple Health sync', sub: 'Sleep and activity data updated', time: 'Today' },
        ]},
        { group: 'Product & Account', items: [
          { icon: 'sparkles', title: 'New feature available', sub: 'FODMAP food scanner now in Track', time: '2 days ago' },
        ]},
      ],
      inbox: [
        { type: 'time-group', label: 'Today' },
        { icon: 'alertTri', title: 'Extended flare duration', sub: 'Review your management plan', time: '9:15 AM', unread: true, urgent: true },
        { icon: 'trendUp', title: 'Stress-flare signal strengthened', sub: 'Now at 62% confidence', time: '10:00 AM', action: "nav('patterns');openPattern('stress-flare')", unread: true },
        { icon: 'utensils', title: 'Tag FODMAP groups', sub: 'Add detail to sharpen triggers', time: '12:00 PM', action: "nav('track');openSheet('food')" },
        { type: 'time-group', label: 'Yesterday' },
        { icon: 'poop', title: 'Morning bowel check-in', sub: 'Log your morning symptoms', time: '8:00 AM' },
        { icon: 'wind', title: 'Gut-directed breathing', sub: 'Complete your calming routine', time: '1:00 PM' },
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
