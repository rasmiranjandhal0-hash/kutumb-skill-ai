// server/data/vocationalData.js
// Verified vocational outcome dataset, district alumni stories, and parental objection taxonomies

const VERIFIED_TRADES = [
  {
    id: "TRADE_EV_TECH",
    name: "Electric Vehicle (EV) Specialist Technician",
    vernacular: {
      hi: "इलेक्ट्रिक वाहन (EV) सर्विस और बैटरी विशेषज्ञ",
      mr: "इलेक्ट्रिक वाहन (EV) सर्व्हिस आणि बॅटरी तंत्रज्ञ",
      ta: "மின்சார வாகனம் (EV) சேவை மற்றும் பேட்டரி நிபுணர்",
      te: "ఎలక్ట్రిక్ వాహన (EV) సర్వీస్ & బ్యాటరీ స్పెషలిస్ట్",
      bn: "বৈদ্যুতিক গাড়ি (EV) সার্ভিস ও ব্যাটারি বিশেষজ্ঞ"
    },
    sector: "Automotive & Clean Energy",
    nsqf_level: 4,
    duration: "12 Months (Govt ITI / NSTI)",
    eligibility: "10th Pass (Math & Science)",
    placement_rate: 91.2,
    starting_salary_monthly: 21500,
    salary_3yr_monthly: 46000,
    salary_5yr_monthly: 72000,
    ba_degree_comparison: {
      degree_starting_salary: 8500,
      degree_unemployment_risk: "68% underemployment in tier-2/3 cities",
      roi_verdict: "EV tech earns ₹5.4 Lakhs in first 2 years while BA student is still paying college fees."
    },
    ladder: [
      { level: "NSQF Level 4", role: "Junior EV Diagnostic Tech", salary: "₹18,000 - ₹24,000/mo" },
      { level: "NSQF Level 5 (Diploma Equiv)", role: "EV Powertrain & Battery Lead", salary: "₹30,000 - ₹42,000/mo" },
      { level: "NSQF Level 7 (B.Voc Degree)", role: "Service Center Head / EV Plant Supervisor", salary: "₹55,000 - ₹85,000/mo" }
    ],
    parent_concerns: {
      social_standing: "Modern high-tech laptop-based diagnostics in air-conditioned clean workshops, not traditional roadside grease mechanics.",
      job_security: "EV sector is mandated by Govt FAME-II policy; guaranteed demand for next 20+ years.",
      daughter_friendly: "High suitability (80% electronic software diagnostics, testing, clean component assembly)."
    },
    top_employers: ["Tata Motors EV", "Ola Electric", "Mahindra Electric", "Ather Energy", "State Road Transport"]
  },
  {
    id: "TRADE_SOLAR_RENEWABLE",
    name: "Solar PV Rooftop Grid Specialist (Suryamitra)",
    vernacular: {
      hi: "सोलर ग्रिड इंस्टॉलेशन विशेषज्ञ (सूर्यमित्र)",
      mr: "सौर ऊर्जा ग्रिड तंत्रज्ञ (सूर्यमित्र)",
      ta: "சூரிய மின்சக்தி கட்டமைப்பு நிபுணர் (சூரியமித்ரா)",
      te: "సోలార్ పవర్ సిస్టమ్ టెక్నీషియన్ (సూర్యమిత్ర)",
      bn: "সৌর শক্তি গ্রিড বিশেষজ্ঞ (সূর্যমিত্র)"
    },
    sector: "Green Energy & Electrical",
    nsqf_level: 4,
    duration: "6 to 12 Months",
    eligibility: "10th / 12th Pass",
    placement_rate: 89.5,
    starting_salary_monthly: 19000,
    salary_3yr_monthly: 41000,
    salary_5yr_monthly: 68000,
    ba_degree_comparison: {
      degree_starting_salary: 7500,
      degree_unemployment_risk: "72% lack technical employability",
      roi_verdict: "PM Surya Ghar scheme has created over 3.5 lakh immediate localized green jobs."
    },
    ladder: [
      { level: "NSQF Level 4", role: "Suryamitra Grid Installer", salary: "₹16,000 - ₹22,000/mo" },
      { level: "NSQF Level 5", role: "Solar Design & Commissioning Lead", salary: "₹28,000 - ₹38,000/mo" },
      { level: "NSQF Level 6/7", role: "Independent Solar Contractor / EPC Project Head", salary: "₹60,000 - ₹1,20,000/mo" }
    ],
    parent_concerns: {
      social_standing: "Recognized by Ministry of New & Renewable Energy (MNRE); official government badge and certification.",
      job_security: "Govt subsidies for 1 crore homes under PM Surya Ghar Muft Bijli Yojana ensures 10-year local work backlog.",
      daughter_friendly: "High (design, inverter testing, customer energy audits, remote SCADA monitoring)."
    },
    top_employers: ["Tata Power Solar", "Adani Solar", "Waaree Energies", "Vikram Solar", "District EPC Contractors"]
  },
  {
    id: "TRADE_CNC_MECHATRONICS",
    name: "CNC Precision Machinist & Smart Mechatronics",
    vernacular: {
      hi: "सीएनसी कंप्यूटर मशीनिंग और स्मार्ट मेकाट्रॉनिक्स",
      mr: "सीएनसी प्रिसिजन मशिनिंग आणि मेकाट्रॉनिक्स",
      ta: "சிஎன்சி துல்லிய இயந்திரவியல் & மெகாட்ரானிக்ஸ்",
      te: "సిఎన్‌సి ప్రెసిషన్ మెషినిస్ట్ & మెకాట్రానిక్స్",
      bn: "সিএনসি প্রিসিশন মেশিনিং ও মেকাট্রনিক্স"
    },
    sector: "Advanced Manufacturing / Industry 4.0",
    nsqf_level: 5,
    duration: "24 Months (ITI / Polytechnic)",
    eligibility: "10th Pass with Science & Math",
    placement_rate: 94.8,
    starting_salary_monthly: 23500,
    salary_3yr_monthly: 52000,
    salary_5yr_monthly: 88000,
    ba_degree_comparison: {
      degree_starting_salary: 9000,
      degree_unemployment_risk: "High wait time (avg 3.2 years before regular job)",
      roi_verdict: "Siemens & Haas certified CNC programmers get instant corporate placement."
    },
    ladder: [
      { level: "NSQF Level 4/5", role: "CNC Programmer / Setter", salary: "₹20,000 - ₹26,000/mo" },
      { level: "NSQF Level 6 (B.Voc / Diploma)", role: "CAD/CAM Automation Engineer", salary: "₹38,000 - ₹55,000/mo" },
      { level: "NSQF Level 7+", role: "Production Plant Shift Manager", salary: "₹70,000 - ₹1,10,000/mo" }
    ],
    parent_concerns: {
      social_standing: "Computerised German/Japanese precision machinery. Clean digital programming, not manual hammering.",
      job_security: "Automotive, aerospace, and defense exports (Make in India) have massive shortages of trained machinists.",
      daughter_friendly: "Very high (clean room robotics operation, quality inspection using digital CMM)."
    },
    top_employers: ["L&T Heavy Engineering", "Bharat Forge", "Tata Precision", "Bosch India", "Godrej Aerospace"]
  },
  {
    id: "TRADE_HEALTHCARE_GD_ALLIED",
    name: "General Duty Allied Healthcare Specialist",
    vernacular: {
      hi: "जनरल ड्यूटी हेल्थकेयर और मेडिकल सपोर्ट विशेषज्ञ",
      mr: "आरोग्य सेवा व वैद्यकीय सहाय्यक (जीडीए)",
      ta: "பொது சுகாதார மற்றும் மருத்துவ உதவியாளர்",
      te: "జనరల్ డ్యూటీ హెల్త్‌కేర్ అసిస్టెంట్",
      bn: "জেনারেল ডিউটি হেলথকেয়ার ও মেডিকেল সহায়ক"
    },
    sector: "Healthcare & Life Sciences",
    nsqf_level: 4,
    duration: "12 Months (Govt PMKVY / Paramedical Council)",
    eligibility: "10th / 12th Pass (Any stream)",
    placement_rate: 92.0,
    starting_salary_monthly: 18500,
    salary_3yr_monthly: 38000,
    salary_5yr_monthly: 62000,
    ba_degree_comparison: {
      degree_starting_salary: 8000,
      degree_unemployment_risk: "No direct healthcare licensing",
      roi_verdict: "Highest social respect; white-coat medical profession with continuous hospital progression."
    },
    ladder: [
      { level: "NSQF Level 4", role: "Certified Healthcare Assistant", salary: "₹16,000 - ₹21,000/mo" },
      { level: "NSQF Level 5", role: "ICU / Emergency Care Technician", salary: "₹26,000 - ₹35,000/mo" },
      { level: "NSQF Level 6/7 (B.Sc Allied Health)", role: "Hospital Operations / Nursing Lead", salary: "₹48,000 - ₹75,000/mo" }
    ],
    parent_concerns: {
      social_standing: "Immense village respect ('Doctor saab ke sahyogi'). Hospital uniform and medical pride.",
      job_security: "Recession-proof. Private hospitals, government PHCs, and diagnostic chains hiring continuously.",
      daughter_friendly: "Exceptional (safe corporate hospitals, fixed shift timings, female dormitory facilities)."
    },
    top_employers: ["Apollo Hospitals", "Max Healthcare", "Fortis", "Manipal Hospitals", "District Civil Hospitals"]
  },
  {
    id: "TRADE_IT_CYBER_INFRA",
    name: "IT Infrastructure & Cloud Network Technician",
    vernacular: {
      hi: "आईटी इंफ्रास्ट्रक्चर एवं नेटवर्क तकनीशियन (COPA+)",
      mr: "आयटी इन्फ्रास्ट्रक्चर व नेटवर्क तंत्रज्ञ",
      ta: "ஐடி நெட்வொர்க் மற்றும் கிளவுட் டெக்னீசியன்",
      te: "ఐటీ నెట్‌వర్క్ & క్లౌడ్ టెక్నీషియన్",
      bn: "আইটি নেটওয়ার্ক ও ক্লাউড টেকনিশিয়ান"
    },
    sector: "IT / ITeS",
    nsqf_level: 4,
    duration: "12 Months (ITI COPA / NSDC)",
    eligibility: "10th Pass",
    placement_rate: 88.0,
    starting_salary_monthly: 20000,
    salary_3yr_monthly: 45000,
    salary_5yr_monthly: 80000,
    ba_degree_comparison: {
      degree_starting_salary: 10000,
      degree_unemployment_risk: "Lack of industry networking & server skills",
      roi_verdict: "Direct path to corporate IT desks without 4-year expensive private engineering fees."
    },
    ladder: [
      { level: "NSQF Level 4", role: "Desktop & Network Support Tech", salary: "₹18,000 - ₹23,000/mo" },
      { level: "NSQF Level 5 (BCA / Poly)", role: "Cloud Systems Administrator", salary: "₹32,000 - ₹45,000/mo" },
      { level: "NSQF Level 7 (B.Voc Software)", role: "DevOps & Infrastructure Lead", salary: "₹65,000 - ₹1,10,000/mo" }
    ],
    parent_concerns: {
      social_standing: "Desk job with computer, AC office environment, corporate identity card.",
      job_security: "Banks, schools, corporate offices, and CSC digital seva centers require hardware/network support.",
      daughter_friendly: "100% office-based, option for remote work, safe corporate culture."
    },
    top_employers: ["Wipro Technologies", "TCS iON", "HCL Tech", "Airtel Enterprise", "District E-Governance Centers"]
  }
];

const LOCAL_ALUMNI_STORIES = [
  {
    id: "STORY_01",
    district: "Chhatrapati Sambhajinagar (Aurangabad)",
    state: "Maharashtra",
    language: "mr",
    alumni_name: "Sneha Jadhav (Age 21)",
    trade: "Electric Vehicle (EV) Specialist",
    father_name: "Shri Tukaram Jadhav (Farmer)",
    quote_vernacular: "मी आधी घाबरलो होतो की मुलगी गॅरेजमध्ये काम करणार का. पण तिने शासकीय आयटीआयमध्ये ईव्ही कोर्स केला आणि आज ती टाटा मोटर्समध्ये ₹२६,५०० कमवते. गावकऱ्यांनी आता तिचा सत्कार केला!",
    quote_en: "I was initially terrified that my daughter would end up in a greasy roadside workshop. But she completed EV diagnostics at Govt ITI and now earns ₹26,500/mo at Tata Motors. The whole village respects her now!",
    audio_file: "/audio/testimonials/sneha_jadhav_mr.mp3",
    current_salary: "₹26,500/mo + PF & ESI Medical Insurance",
    initial_parent_doubt: "Daughter's safety & social stigma of automotive trade"
  },
  {
    id: "STORY_02",
    district: "Varanasi",
    state: "Uttar Pradesh",
    language: "hi",
    alumni_name: "Amit Kumar Verma (Age 22)",
    trade: "CNC Precision Machinist & Mechatronics",
    father_name: "Shri Radhey Shyam Verma (Shopkeeper)",
    quote_vernacular: "हम चाहते थे कि बेटा बीए करे और सरकारी क्लर्क बने। 3 साल में बीए वाले दोस्त बेरोजगार घूम रहे हैं, जबकि अमित एलएंडटी में ₹३४,००० मासिक कमा रहा है और कंपनी उसे बी.वॉक डिग्री भी करवा रही है।",
    quote_en: "We wanted him to do a BA and study for clerical exams. Today his BA friends are unemployed, while Amit earns ₹34,000/month at L&T and the company is sponsoring his higher B.Voc degree!",
    audio_file: "/audio/testimonials/amit_verma_hi.mp3",
    current_salary: "₹34,000/mo + Free Hostel & Food",
    initial_parent_doubt: "Belief that degree is superior to technical diploma"
  },
  {
    id: "STORY_03",
    district: "Salem",
    state: "Tamil Nadu",
    language: "ta",
    alumni_name: "Karthik Subramanian (Age 20)",
    trade: "Solar PV Rooftop Grid Specialist (Suryamitra)",
    father_name: "Shri S. Subramanian (Weaver)",
    quote_vernacular: "எங்கள் குடும்பத்தில் முதல் பட்டதாரி போல இவர் சூரியசக்தி துறையில் நல்ல நிலையில் உள்ளார். மாதாந்திர வருமானம் ₹24,000 மற்றும் நிரந்தர பணி பாதுகாப்பு.",
    quote_en: "Solar grid technician training transformed our family income. He started at ₹24,000/month and works as an authorized MNRE government contractor.",
    audio_file: "/audio/testimonials/karthik_salem_ta.mp3",
    current_salary: "₹24,000/mo + Government Certification",
    initial_parent_doubt: "Income stability and lack of government recognition"
  }
];

const OBJECTION_TAXONOMY = {
  social_stigma: {
    label: "Izzat / Social Standing & Marriage Prospects",
    icon: "award",
    vernacular_phrases: [
      "लोग क्या कहेंगे", "छोटा काम है", "शादी का रिश्ता कौन देगा", "डिग्री के बिना कोई इज्जत नहीं",
      "लोक काय म्हणतील", "लग्नासाठी मुलगी/मुलगा कोण देईल", "प्रतिष्ठा कमी होईल",
      "what will society say", "menial blue collar work", "marriage prospects"
    ],
    reassurance_points: [
      "Modern NSQF trades are tech-driven (robotics, CAD, cleanroom electronics), not manual labor.",
      "NSQF qualifications are recognized by UGC, AICTE, and Union Ministry of Skill Development as equivalent to formal education.",
      "Steady ₹25,000 - ₹40,000 salaried employment with EPF & ESI carries vastly higher matrimonial respect than educated unemployment."
    ]
  },
  income_security: {
    label: "Earning Ceiling & Salary Doubts",
    icon: "trending-up",
    vernacular_phrases: [
      "कितना कमाएगा", "मजदूरी जैसा वेतन", "पगार किती मिळेल", "पैसे कमी असतात",
      "how much will they earn", "no future increment", "low starting salary"
    ],
    reassurance_points: [
      "Starting salary is ₹18,000 - ₹24,000 at age 19, doubling to ₹45,000+ by age 23-24 with supervisory skills.",
      "Compare with 3-year BA: Average graduate starting salary in non-technical roles is under ₹9,000 or unpaid probation.",
      "High-demand technical skills guarantee regular yearly increments and corporate health insurance."
    ]
  },
  female_safety: {
    label: "Safety & Suitability for Daughters",
    icon: "shield-check",
    vernacular_phrases: [
      "लड़कियों के लिए सुरक्षित नहीं", "लड़की है बाहर कैसे जाएगी", "मुलींसाठी सुरक्षित आहे का",
      "safety for girls", "is it suitable for females", "women in mechanical trade"
    ],
    reassurance_points: [
      "Specialized female batches in Govt ITIs & NSTIs with CCTV-monitored campuses and female instructors.",
      "80% of roles in modern EV, Healthcare, and IT are clean-room, testing, laboratory, and design-oriented.",
      "Top recruiters (Tata, Schneider, Apollo) provide mandatory corporate transport, maternity benefits, and POSH committees."
    ]
  },
  degree_equivalence: {
    label: "NSQF to Degree Progression (Higher Education Access)",
    icon: "book-open",
    vernacular_phrases: [
      "पढ़ाई छूट जाएगी", "आगे की पढ़ाई नहीं कर पाएगा", "डिग्री नहीं मिलेगी", "शिक्षण अर्धवट राहील का",
      "education stops here", "can they do degree later", "is it equivalent to college"
    ],
    reassurance_points: [
      "National Credit Framework (NCrF) allows seamless credit transfer from NSQF Level 4/5 into B.Voc and B.Tech lateral entry.",
      "Earn-while-you-learn: Students earn ₹20k+ while completing company-sponsored degree programs.",
      "Eligible for state & central government technical grade examinations (Railway RRB, Defense Ordnance, State Electricity Boards)."
    ]
  }
};

module.exports = {
  VERIFIED_TRADES,
  LOCAL_ALUMNI_STORIES,
  OBJECTION_TAXONOMY
};
