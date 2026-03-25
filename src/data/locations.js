// ASR Drillers - Location & Product Data
// Central data source for all pages - easy to maintain & reuse

export const commonData = {
  // Contact Info
  phone: "+91-9695041919",
  whatsapp: "+919695041919",

  // Company Info
  companyName: "ASR Drillers",
  baseLocation: "Pukhrayan, Kanpur",
  yearsFounded: 2012,
  yearsActive: "14+",

  // Common Warranty & Service
  warranty: {
    years: "1–2",
    coverage: "Manufacturing defects + on-site installation",
    afterSale:
      "24/7 WhatsApp support, annual free service camps, quick spare parts delivery (24–48 hours from Kanpur factory)",
  },

  // Common After-Sales Benefits
  afterSalesBenefits: [
    {
      title: "24/7 WhatsApp Support",
      desc: "Engineer responds in 1–2 hours. Real troubleshooting, not just 'call during business hours'.",
    },
    {
      title: "On-Site Installation & Training",
      desc: "ASR engineer sets up machine, trains your operator, tests it. You're ready same day.",
    },
    {
      title: "Annual Service Camps",
      desc: "Free maintenance camps across UP, Bihar, Rajasthan. Machine serviced to factory standards.",
    },
    {
      title: "Express Spare Parts",
      desc: "Genuine Kanpur-made spares delivered 24–48 hours. Hydraulic seals, pistons, hoses always in stock.",
    },
    {
      title: "Field Support in North India",
      desc: "Emergency repairs on-site if needed. No waiting 2–3 weeks for distant dealers.",
    },
  ],

  // Common Models - Specs
  models: [
    {
      name: "22 HP Submersible",
      hp: 22,
      engine: "Kirloskar Diesel",
      price: "₹4.8 Lakh",
      minDepth: "150 ft",
      maxDepth: "300 ft",
      diameter: "4–6 inch",
      fuelPerDay: "8–10 L",
      torque: "180 Nm",
      bestFor: "Farmers, small contractors, shallow-to-medium wells",
      advantages: [
        "Most affordable model",
        "Fuel efficient (8–10 L/day)",
        "Lightweight & portable",
        "Simple maintenance",
        "Quick ROI (12–18 months at 6–8 wells/year)",
      ],
    },
    {
      name: "30 HP Hydraulic",
      hp: 30,
      engine: "Kirloskar Diesel",
      price: "₹5.8 Lakh",
      minDepth: "200 ft",
      maxDepth: "400 ft",
      diameter: "6–10 inch",
      fuelPerDay: "12–14 L",
      torque: "280 Nm",
      bestFor: "Professional contractors, deep wells, hard rock terrain",
      advantages: [
        "Variable RPM (precision control)",
        "Hydraulic pressure adjustment mid-drilling",
        "Handles hard rock easily",
        "Higher drilling speed (25–40 ft/hr)",
        "Professional contractor tool",
      ],
    },
    {
      name: "38 HP Tractor-Mounted",
      hp: 38,
      engine: "Field Marshal Diesel",
      price: "₹7.2 Lakh",
      minDepth: "250 ft",
      maxDepth: "500+ ft",
      diameter: "8–12 inch",
      fuelPerDay: "16–20 L",
      torque: "320 Nm",
      bestFor: "Heavy-duty work, maximum depth projects, specialized drilling",
      advantages: [
        "Maximum depth capability",
        "Highest torque power",
        "Field Marshal engine durability",
        "Tractor PTO compatible",
        "Specialized deep-well projects",
      ],
    },
  ],

  // Common FAQ (reusable across pages)
  commonFAQ: [
    {
      question: "What is the maximum depth your boring machines can drill?",
      answer:
        "22 HP: 150–300 feet. 30 HP: 250–400 feet. 38 HP: 300–500+ feet. Actual depth depends on soil type (clay, rock, sand). Hard rock may reduce depths by 15–20%.",
    },
    {
      question: "Do you provide installation in other states?",
      answer:
        "Yes. On-site installation across North India (UP, Bihar, Rajasthan, MP, Delhi-NCR). Delivery 2–5 days depending on distance. Installation team charges ₹2,000–3,000/day on-site.",
    },
    {
      question: "How much fuel does a boring machine use per day?",
      answer:
        "22 HP: 8–10 L/day. 30 HP: 12–14 L/day. 38 HP: 16–20 L/day (continuous operation). Actual consumption varies with soil hardness and drilling speed. Our engines are 20–30% more efficient than imports.",
    },
    {
      question: "What warranty do you offer?",
      answer:
        "1–2 year comprehensive warranty covering manufacturing defects. Free annual service maintenance camps. Post-warranty repairs: ₹2,000–3,000 per service.",
    },
    {
      question: "Can your machines drill through hard rock?",
      answer:
        "Yes. Machines are designed for UP/Bihar clay-rich, rocky soils. 30 HP and 38 HP models handle hard rock easily. Many contractors use us in rocky Rajasthan terrain.",
    },
    {
      question: "What financing options are available?",
      answer:
        "24–36 month EMI at 9–12% interest via HDFC, Axis, ICICI. Loan covers 80–90% of price. Approval in 3–5 days. We handle all paperwork.",
    },
    {
      question: "Can I rent instead of buying?",
      answer:
        "Yes. 22 HP: ₹800–1,000/day. 30 HP: ₹1,200–1,500/day. 38 HP: ₹1,800–2,200/day. Minimum 7 days. Includes delivery & operator support. Rental credited toward purchase if you later buy.",
    },
    {
      question: "What spare parts are available locally?",
      answer:
        "All Kanpur-made spares in stock: hydraulic seals, pistons, hoses, filters, coupling joints. Delivery 24–48 hours from factory. Standard engine parts (Kirloskar/Field Marshal) also available.",
    },
  ],
};

// Location-Specific Data
export const locationsData = {
  kanpur: {
    title: "Boring Machine Manufacturer in Kanpur, UP",
    description:
      "ASR Drillers – Kanpur's trusted factory-based manufacturer since 2012. Pukhrayan industrial hub. Same-day delivery & installation. ₹4.8–7.2 lakhs.",

    heroHeadline: "Boring Machine Manufacturer in Kanpur, Uttar Pradesh",
    heroText:
      "ASR Drillers – Kanpur's trusted factory-based manufacturer since 2012. Visit us in Pukhrayan. Same-day delivery & installation. ₹4.8–7.2 lakhs.",

    localProblems: [
      {
        title: "Unreliable Local Dealers",
        desc: "Middlemen inflate prices by 15–20%. No real factory connection. When machine breaks, 2–3 week service delays.",
      },
      {
        title: "Poor Spare Parts Availability",
        desc: "Cheap competitors' parts not available locally. Must order from distant suppliers. Production halted for weeks.",
      },
      {
        title: "No After-Sales Support in Kanpur",
        desc: "Buyers in Kanpur deal with distant dealers for repairs. No local engineer. Customer satisfaction low.",
      },
    ],

    localSolutions: [
      {
        title: "Factory-Direct Pricing",
        desc: "No middlemen. Buy directly from Pukhrayan factory. Save 15–20% vs. dealers. Know exactly what you're getting.",
      },
      {
        title: "Same-Day Installation Team",
        desc: "Our engineers live in Kanpur. Order morning, machine installed by afternoon. Operator trained same day.",
      },
      {
        title: "1-Hour Spare Parts Response",
        desc: "Kanpur factory warehouse stocks everything. Hydraulic failure? Piston damaged? Spares delivered in 1–2 hours.",
      },
    ],

    localTestimonials: [
      {
        name: "Mr. Rajesh Kumar",
        location: "Kanpur District",
        role: "Farmer",
        text: "Bought ASR's 30 HP two years ago. Drilled three wells trouble-free. Machine never failed. Spares from Kanpur factory always available. Best investment for my farm.",
        rating: 5,
        project: "250 ft well in 2 days",
      },
      {
        name: "Contractor Amit Singh",
        location: "Jajmau, Kanpur",
        role: "Drilling Contractor",
        text: "Started with 22 HP. So reliable, I bought 30 HP next year. Now drilling 12–15 wells/year. Downtime is almost zero. Spares from factory same-day.",
        rating: 5,
        project: "15 wells annually",
      },
      {
        name: "Mr. Mohan Lal",
        location: "Kalyanpur, Kanpur",
        role: "Irrigation Project Lead",
        text: "Drilled 8 irrigation wells for our cooperative. ASR's support was outstanding. Engineers came personally, trained operators, zero breakdowns across all wells.",
        rating: 5,
        project: "8 wells × 200 ft",
      },
      {
        name: "Farmer Suresh",
        location: "Kanpur",
        role: "Agricultural Business",
        text: "Fuel cost cut by ₹200/day. Per-well profit up 25%. ASR's 22 HP is fuel-efficient like nothing else. Kanpur ka apna brand – bilkul bharosa.",
        rating: 5,
        project: "Avg 8 wells/year",
      },
    ],

    areaServed: [
      "Kanpur",
      "Kanpur District",
      "Jajmau",
      "Kalyanpur",
      "Pukhrayan",
    ],

    factoryDetails: {
      address: "Pukhrayan Industrial Area, Kanpur, UP 208201",
      distance: "30 km from Kanpur city center",
      hours: "8 AM – 8 PM Daily (Weekend visits by appointment)",
      services:
        "Factory tours, live equipment, test drilling, in-house repairs",
    },
  },

  lucknow: {
    title: "Best Tubewell Boring Machine in Lucknow, Uttar Pradesh",
    description:
      "ASR Drillers supplies premium boring machines to Lucknow. 22-38 HP diesel models. Free installation. 24/7 WhatsApp support. ₹4.5-7.5 lakhs.",

    heroHeadline: "Best Boring Machine Supplier in Lucknow",
    heroText:
      "ASR Drillers delivers premium tubewell boring machines to Lucknow contractors and farmers. Same-day installation. 24/7 WhatsApp support. ₹4.8–7.2 lakhs.",

    localProblems: [
      {
        title: "Clay-Heavy Soil Clogs Cheap Machines",
        desc: "Lucknow's black soil is dense. Cheap machines break down mid-drilling. You lose days of work and client trust.",
      },
      {
        title: "Distant Support = Lost Income",
        desc: "Nearest dealer 150 km away. Machine problem? 2–3 day repair wait. Every day without drilling = lost profit.",
      },
      {
        title: "High Fuel Costs Kill Margins",
        desc: "Inefficient engines burn ₹300–500/day. Per-well profit shrinks 20–25%. You're working harder for less.",
      },
    ],

    localSolutions: [
      {
        title: "Clay-Proven Design",
        desc: "30 HP hydraulic model handles Lucknow's dense soil perfectly. 250–400 feet guaranteed through black clay.",
      },
      {
        title: "90-Minute WhatsApp Response",
        desc: "Problem at 4 PM? Solution by 5:30 PM. Kanpur-based engineer answers WhatsApp calls. Not an automated system.",
      },
      {
        title: "Express Spares Delivery",
        desc: "Kanpur factory ships parts same-day. Lucknow delivery 24 hours. Never sit idle waiting for spare parts.",
      },
    ],

    localTestimonials: [
      {
        name: "Mr. Ram Singh",
        location: "Gomti Nagar, Lucknow",
        role: "Irrigation Project Manager",
        text: "Tasked with drilling 8 wells in 2 weeks. ASR's 30 HP delivered. All 8 wells done on time (normally takes 3+ weeks). Zero breakdowns. Operator trained by ASR. Highly recommended.",
        rating: 5,
        project: "8 wells × 200 ft in 2 weeks",
      },
      {
        name: "Farmer Rajesh Kumar",
        location: "Kanpur Road, Lucknow",
        role: "Agricultural Owner",
        text: "Bought 22 HP 18 months ago for 40 acres. Drilled 3 borewells trouble-free. When I had an issue, WhatsApp engineer fixed it remotely. Spares same-day from Kanpur. No other machine has this support.",
        rating: 5,
        project: "3 wells × 200–250 ft",
      },
      {
        name: "Contractor Akshay Verma",
        location: "Alambagh, Lucknow",
        role: "Borewell Drilling Contractor",
        text: "Switched to ASR 22 HP. Per-well cost down ₹2,000 (fuel). Drilling faster by 1 day. Running 10 wells/month instead of 7. ROI hit in 11 months. Highly profitable.",
        rating: 5,
        project: "10 wells/month profitable",
      },
      {
        name: "Engineer Vikram",
        location: "Lucknow Municipal Corporation",
        role: "Public Drinking Water Project",
        text: "ASR's 30 HP handled our municipality water project. Professional support, precise drilling, met depth targets. Government approved. Will hire again for phase 2.",
        rating: 5,
        project: "Municipality water wells",
      },
    ],

    areaServed: [
      "Lucknow",
      "Lucknow District",
      "Gomti Nagar",
      "Alambagh",
      "Kanpur Road",
    ],

    deliveryInfo: {
      timeframe: "24–48 hours",
      distance: "Kanpur to Lucknow: 90 km, ~2 hours drive",
      installation: "On-site setup by ASR engineer. Free operator training.",
      costNote: "Free delivery within 100 km. Installation 2–4 hours.",
    },
  },

  bihar: {
    title: "Boring Machine Manufacturer for Bihar - ASR Drillers",
    description:
      "Premium tubewell boring machines for Bihar. Kanpur factory. Handles hard rock & clay. 24/7 WhatsApp support across Bihar, UP borders. ₹4.5-7.5 lakhs.",

    heroHeadline: "Boring Machines for Bihar – Kanpur's Trusted Manufacturer",
    heroText:
      "ASR Drillers serves Bihar drillers with robust 22–38 HP boring machines. Designed for Bihar's hard rock & alluvial soil. Fast delivery from Kanpur. ₹4.8–7.2 lakhs.",

    localProblems: [
      {
        title: "Hard Rock Layers Stop Weak Machines",
        desc: "Bihar's rock formations are challenging. Cheap machines lose power at 150–200 feet. You're forced to abandon profitable deep-well projects.",
      },
      {
        title: "Distant Manufacturer Support",
        desc: "Buying from distant states? Support is 3–5 days away. Machine down = loss of ₹8,000–12,000/day per contractor.",
      },
      {
        title: "Spare Parts from Abroad",
        desc: "Imported machines' parts take weeks. You're stuck. Bihar contractors abandon imports for this reason.",
      },
    ],

    localSolutions: [
      {
        title: "Rock-Proven Power",
        desc: "30 HP & 38 HP models built for hard rock. Bihar contractors trust ASR for 300–500 ft depth in challenging terrain.",
      },
      {
        title: "Kanpur is Closer than You Think",
        desc: "Kanpur-Bihar distance manageable. We service Bihar as home market. WhatsApp engineer responds in 1 hour.",
      },
      {
        title: "Kanpur Spares Network",
        desc: "Spare parts shipped from Kanpur factory within 48 hours. Bihar contractors get same-day service as Kanpur customers.",
      },
    ],

    localTestimonials: [
      {
        name: "Contractor Rajesh",
        location: "Patna District, Bihar",
        role: "Deep-Well Specialist",
        text: "Drilled 350 ft through rock layers using ASR's 38 HP. Previous machines couldn't handle rock. ASR's power is unmatched. Now my reputation = deep-well expert.",
        rating: 5,
        project: "Deep wells 300–400 ft in rock",
      },
      {
        name: "Farmer Group Cooperative",
        location: "Muzaffarpur, Bihar",
        role: "Agricultural Cooperative",
        text: "5 farmers pooled resources for ASR 30 HP. Drilled 4 community wells. Machine handles Bihar's soil perfectly. Support is better than local dealers. Worth every rupee.",
        rating: 5,
        project: "4 community wells",
      },
      {
        name: "Contractor Anil Kumar",
        location: "Begusarai, Bihar",
        role: "Irrigation Contractor",
        text: "Started drilling business 2 years ago with ASR 22 HP. Upgraded to 30 HP after success. Bihar's hard rock is no problem anymore. Profit margin solid.",
        rating: 5,
        project: "12–15 wells/year",
      },
    ],

    areaServed: [
      "Patna",
      "Patna District",
      "Muzaffarpur",
      "Begusarai",
      "Bihar",
      "Eastern UP Border",
    ],

    shippingInfo: {
      timeframe: "3–5 days",
      distance: "Kanpur to Patna: ~400 km",
      carriers: "Reliable road transport",
      costNote: "Delivery ₹5,000–8,000 depending on exact location",
    },
  },

  rajasthan: {
    title: "Boring Machine Manufacturer for Rajasthan - Hard Rock Specialist",
    description:
      "Heavy-duty boring machines for Rajasthan's rocky terrain. 30–38 HP models. Kanpur factory. Handles granite & sandstone. 24/7 WhatsApp. ₹5.8-7.5 lakhs.",

    heroHeadline: "Hard Rock Boring Machines for Rajasthan",
    heroText:
      "ASR Drillers specializes in Rajasthan's toughest drilling challenges. 30–38 HP models crush granite & rock. Proven by 100+ Rajasthan contractors. ₹5.8–7.2 lakhs.",

    localProblems: [
      {
        title: "Granite & Rock Destroys Weak Machines",
        desc: "Rajasthan's hard rock is unforgiving. Entry-level machines fail at 100 ft. You lose equipment + profit.",
      },
      {
        title: "Northern Suppliers Don't Understand Rocky Terrain",
        desc: "Generic machines not tuned for granite. Kanpur-area manufacturers understand rock drilling in ways generic makers don't.",
      },
      {
        title: "High Machine Downtime = Business Loss",
        desc: "One machine failure = ₹10,000+/day loss. Rock drilling demands reliability, not compromise.",
      },
    ],

    localSolutions: [
      {
        title: "Rock-Proven Machines",
        desc: "100+ Rajasthan contractors run ASR machines through granite. 38 HP is legendary for deep Rajasthan wells.",
      },
      {
        title: "Kanpur Proximity",
        desc: "West India focus. Delivery 5–7 days. Technical support responsive.",
      },
      {
        title: "Rock-Drilling Expertise",
        desc: "ASR engineers train on rock-specific techniques. Max torque, optimal RPM for granite layers.",
      },
    ],

    localTestimonials: [
      {
        name: "Contractor Rajesh Singh",
        location: "Jodhpur, Rajasthan",
        role: "Hard Rock Specialist",
        text: "Drilled 450 ft through granite using ASR 38 HP. Competitors' machines quit at 200 ft. Our success rate = 99%. Running 8–10 wells/month. Best investment.",
        rating: 5,
        project: "450 ft granite well",
      },
      {
        name: "Farmer Mohan Singh",
        location: "Bikaner District, Rajasthan",
        role: "Large-Scale Farmer",
        text: "Rajasthan's soil is tough. ASR 30 HP HP handles it. Drilled 3 wells, 250–350 ft each. Took less time than expected. Fuel efficiency is impressive.",
        rating: 5,
        project: "3 wells in sandy-rocky terrain",
      },
      {
        name: "Contractor Vikram",
        location: "Ajmer, Rajasthan",
        role: "Professional Driller",
        text: "15+ years drilling. ASR's 38 HP is the most reliable rock machine I've used. After-sales support is genuine. Kanpur team backs every machine.",
        rating: 5,
        project: "Rocky terrain specialist",
      },
    ],

    areaServed: ["Jodhpur", "Bikaner", "Ajmer", "Rajasthan", "Western India"],

    shippingInfo: {
      timeframe: "5–7 days",
      distance: "Kanpur to Jodhpur: ~850 km",
      carriers: "Long-haul logistics partners",
      costNote:
        "Delivery ₹8,000–12,000. Installation team travels (expense shared).",
    },
  },

  delhi: {
    title: "Boring Machine Supplier in Delhi-NCR",
    description:
      "Premium tubewell boring machines for Delhi & NCR region. 22-38 HP models. Fast delivery from Kanpur. On-site installation & training. ₹4.5-7.5 lakhs.",

    heroHeadline: "Boring Machines for Delhi-NCR – ASR Drillers Kanpur",
    heroText:
      "Professional boring machines for Delhi & nearby states. Kanpur manufacturer serving NCR for 14+ years. Fast delivery, expert support, competitive pricing.",

    localProblems: [
      {
        title: "Delhi Dealers Mark Up Prices 20–30%",
        desc: "Local dealers add middleman cost. You pay premium for same machine. No direct factory connection.",
      },
      {
        title: "Generic Machines for Delhi's Variable Soil",
        desc: "Delhi's soil changes: clay, rock, sandy. Generic machines aren't tuned for variability. Need precision.",
      },
      {
        title: "Support Depends on Dealer's Mood",
        desc: "Dealer-based support = inconsistent. If dealer's having issues, your machine suffers too.",
      },
    ],

    localSolutions: [
      {
        title: "Factory-Direct Pricing",
        desc: "Skip Delhi middlemen. Deal directly with Kanpur factory. Save 15–20% vs. local dealers.",
      },
      {
        title: "Variability-Ready Machines",
        desc: "30 HP hydraulic's variable RPM handles Delhi's mixed soil perfectly. Adjust pressure for each layer.",
      },
      {
        title: "Independent Support",
        desc: "ASR independent of Delhi dealers. Direct factory service = you get priority, not last.",
      },
    ],

    localTestimonials: [
      {
        name: "Contractor Arvind",
        location: "Gurugram, Haryana (NCR)",
        role: "Construction Boring",
        text: "Construction project needed quick, reliable boring. ASR delivered 22 HP in 3 days. Drilled all wells on schedule. Professional support throughout.",
        rating: 5,
        project: "Construction project wells",
      },
      {
        name: "Farmer Pradeep",
        location: "Noida, UP (NCR)",
        role: "Agricultural Entrepreneur",
        text: "Delhi dealers wanted ₹5.2L. ASR quoted ₹4.8L direct. Same machine, better price, better support. Drilled 2 wells, both perfect.",
        rating: 5,
        project: "Farm irrigation wells",
      },
      {
        name: "Irrigation Engineer Mohit",
        location: "Delhi NCR",
        role: "Municipal Project Lead",
        text: "ASR's 30 HP worked perfectly for our NCR water project. Variable RPM handled mixed soil layers. Precise depth control. Govt approved.",
        rating: 5,
        project: "Municipal water wells",
      },
    ],

    areaServed: [
      "Delhi",
      "Gurugram",
      "Noida",
      "Ghaziabad",
      "NCR region",
      "Delhi-surrounding states",
    ],

    shippingInfo: {
      timeframe: "2–3 days",
      distance: "Kanpur to Delhi: ~500 km",
      carriers: "Express logistics",
      costNote: "Free delivery within NCR. Paid installation ₹2,000–3,000/day.",
    },
  },

  kolkata: {
    title: "Boring Machine Supplier in Kolkata, West Bengal",
    description:
      "Submersible & hydraulic boring machines for Kolkata & Eastern India. 22-30 HP models. Designed for alluvial soil. 24/7 WhatsApp support. ₹4.5-6.5 lakhs.",

    heroHeadline: "Boring Machines for Kolkata & Eastern India",
    heroText:
      "ASR Drillers supplies reliable boring machines to Kolkata & West Bengal. Alluvial soil specialists. Fast delivery from Kanpur. Professional support in Hindi & English.",

    localProblems: [
      {
        title: "Alluvial Soil Requires Precision",
        desc: "Kolkata's soil is soft, waterlogged. Machines need careful pressure control. Generic machines cause cave-ins.",
      },
      {
        title: "Local Eastern Makers Have Limited Support",
        desc: "Local Kolkata makers lack Kanpur's manufacturing scale. Parts availability, expertise limited.",
      },
      {
        title: "Imports Take 4–6 Weeks for Spares",
        desc: "Foreign machines' parts sourced from abroad. Eastern Indian contractors lose weeks waiting.",
      },
    ],

    localSolutions: [
      {
        title: "Alluvial Soil Mastery",
        desc: "22 HP & 30 HP hydraulic tuned for soft soil + water management. Variable pressure prevents cave-ins.",
      },
      {
        title: "Kanpur Logistics Hub",
        desc: "Kanpur's scale = faster sourcing. Spares available, not waiting weeks like Eastern makers.",
      },
      {
        title: "Hindi-English Support",
        desc: "Support in regional language comfort. Real engineers, not translation services.",
      },
    ],

    localTestimonials: [
      {
        name: "Contractor Rajib",
        location: "Kolkata, West Bengal",
        role: "Water Well Contractor",
        text: "Alluvial soil is tricky. ASR's 30 HP with variable pressure control is perfect. Drilled 200 ft in soft soil without issues. Better than local machines.",
        rating: 5,
        project: "Soft soil wells",
      },
      {
        name: "Farmer Suresh",
        location: "Hooghly District, West Bengal",
        role: "Agricultural Owner",
        text: "Farm needed bore well quickly. ASR's 22 HP delivered in 4 days. Handled waterlogged soil perfectly. Support was responsive despite distance.",
        rating: 5,
        project: "Waterlogged farm well",
      },
      {
        name: "Municipality Engineer",
        location: "Kolkata Municipal Corp",
        role: "Public Works",
        text: "Municipality chose ASR for 5 public wells. Machine handled alluvial layers precisely. Government satisfied with performance & durability.",
        rating: 5,
        project: "5 municipal wells",
      },
    ],

    areaServed: [
      "Kolkata",
      "West Bengal",
      "Eastern India",
      "Hooghly",
      "Howrah",
    ],

    shippingInfo: {
      timeframe: "4–6 days",
      distance: "Kanpur to Kolkata: ~900 km",
      carriers: "Rail + road logistics",
      costNote: "Delivery ₹10,000–15,000. Installation ₹3,000–4,000/day.",
    },
  },

  mp: {
    title: "Boring Machine Manufacturer for Madhya Pradesh",
    description:
      "Heavy-duty boring machines for MP's diverse terrain. Kanpur-made. 22-38 HP models. Fast delivery. 24/7 WhatsApp. ₹4.5-7.5 lakhs.",

    heroHeadline:
      "Boring Machines for Madhya Pradesh – Rock & Clay Specialists",
    heroText:
      "ASR Drillers serves MP contractors with robust machines. Designed for MP's mixed rock-clay terrain. Proven by 50+ MP professionals. ₹4.8–7.2 lakhs.",

    localProblems: [
      {
        title: "MP's Mixed Terrain Confuses Generic Machines",
        desc: "MP has rock, clay, hard soil. Generic machines need constant adjustments. Precision control = must-have.",
      },
      {
        title: "Local Support from Distant Makers",
        desc: "Machines from far states mean 3–4 day support wait. Machine down = lost income.",
      },
      {
        title: "Spare Parts Network Weak",
        desc: "MP contractors struggle with spare parts sourcing. No organized local parts dealers.",
      },
    ],

    localSolutions: [
      {
        title: "Variability Masters",
        desc: "30 HP & 38 HP hydraulic machines handle MP's terrain shifts. Variable RPM = zero adjustment downtime.",
      },
      {
        title: "Kanpur Proximity Advantage",
        desc: "Kanpur-MP border close. Delivery 2–3 days. Support responsive.",
      },
      {
        title: "Organized Parts Network",
        desc: "Kanpur factory supplies parts systematically. MP contractors get organized sourcing.",
      },
    ],

    localTestimonials: [
      {
        name: "Contractor Vikram",
        location: "Indore, Madhya Pradesh",
        role: "Irrigation Contractor",
        text: "MP terrain is mixed. ASR's 30 HP hydraulic adjusts to each layer automatically. Drilled 25 wells in 6 months. Machine never quit. Highly reliable.",
        rating: 5,
        project: "25 wells in 6 months",
      },
      {
        name: "Farmer Rajesh",
        location: "Bhopal District, MP",
        role: "Agricultural Owner",
        text: "Needed deep well for farm. ASR's 38 HP drilled 400 ft through rock layers. Spares support was excellent. Kanpur team visited for installation. Very professional.",
        rating: 5,
        project: "400 ft rock well",
      },
    ],

    areaServed: ["Indore", "Bhopal", "Madhya Pradesh", "Central India"],

    shippingInfo: {
      timeframe: "2–4 days",
      distance: "Kanpur to Indore: ~600 km",
      carriers: "Express logistics",
      costNote: "Delivery ₹6,000–10,000. Installation team available.",
    },
  },
};

export default { commonData, locationsData };
