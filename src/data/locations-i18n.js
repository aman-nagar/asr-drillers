// ASR Drillers - Multilingual Translations & Location Data
// English (en) and Hindi (hi) content for all locations
// This is the single source of truth for all multilingual content

// ============================================================================
// COMMON DATA - Shared across all languages (contact, models, company info)
// ============================================================================

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
  commonFAQEn: [
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

  commonFAQHi: [
    {
      question: "आपकी ड्रिलिंग मशीनें कितनी गहराई तक ड्रिल कर सकती हैं?",
      answer:
        "22 HP: 150–300 फुट। 30 HP: 250–400 फुट। 38 HP: 300–500+ फुट। वास्तविक गहराई मिट्टी के प्रकार (चिकनी मिट्टी, पत्थर, रेत) पर निर्भर करती है। कठोर पत्थर में गहराई 15–20% कम हो सकती है।",
    },
    {
      question: "क्या आप दूसरे राज्यों में स्थापन प्रदान करते हैं?",
      answer:
        "हाँ। उत्तर भारत (UP, बिहार, राजस्थान, MP, दिल्ली-NCR) में साइट पर स्थापन। दूरी के अनुसार 2–5 दिन में डिलीवरी। स्थापन दल ₹2,000–3,000/दिन लेता है।",
    },
    {
      question: "ड्रिलिंग मशीन प्रति दिन कितना ईंधन खपत करती है?",
      answer:
        "22 HP: 8–10 लीटर/दिन। 30 HP: 12–14 लीटर/दिन। 38 HP: 16–20 लीटर/दिन (लगातार ऑपरेशन)। वास्तविक खपत मिट्टी की कठोरता और ड्रिलिंग गति पर निर्भर करती है। हमारे इंजन आयातित मशीनों से 20–30% अधिक ईंधन दक्ष हैं।",
    },
    {
      question: "आप किस वारंटी की पेशकश करते हैं?",
      answer:
        "1–2 साल की व्यापक वारंटी जो निर्माण दोषों को कवर करती है। मुफ्त वार्षिक रखरखाव सेवा शिविर। वारंटी के बाद की मरम्मत: ₹2,000–3,000 प्रति सेवा।",
    },
    {
      question: "क्या आपकी मशीनें कठोर पत्थर को ड्रिल कर सकती हैं?",
      answer:
        "हाँ। मशीनें UP/बिहार की चिकनी मिट्टी और पथरीली मिट्टी के लिए डिज़ाइन की गई हैं। 30 HP और 38 HP मॉडल आसानी से कठोर पत्थर को ड्रिल कर सकते हैं। राजस्थान में कई ठेकेदार हमारा उपयोग करते हैं।",
    },
    {
      question: "कौन से वित्तपोषण विकल्प उपलब्ध हैं?",
      answer:
        "24–36 महीने की EMI 9–12% ब्याज पर HDFC, Axis, ICICI के माध्यम से। ऋण कीमत का 80–90% कवर करता है। 3–5 दिन में मंजूरी। हम सभी कागजी कार्य संभालते हैं।",
    },
    {
      question: "क्या मैं खरीदने के बजाय किराए पर ले सकता हूँ?",
      answer:
        "हाँ। 22 HP: ₹800–1,000/दिन। 30 HP: ₹1,200–1,500/दिन। 38 HP: ₹1,800–2,200/दिन। न्यूनतम 7 दिन। डिलीवरी और ऑपरेटर समर्थन शामिल। यदि आप बाद में खरीदते हैं तो किराया खरीद मूल्य में से घटाया जाता है।",
    },
    {
      question: "कौन से स्पेयर पार्ट्स स्थानीय रूप से उपलब्ध हैं?",
      answer:
        "सभी कानपुर-निर्मित स्पेयर पार्ट्स स्टॉक में हैं: हाइड्रॉलिक सील, पिस्टन, होज़, फिल्टर, कपलिंग जॉइंट। कारखाने से 24–48 घंटे में डिलीवरी। मानक इंजन पार्ट्स (किरलोस्कर/फील्ड मार्शल) भी उपलब्ध हैं।",
    },
  ],
};

// ============================================================================
// LOCATION DATA - English (en) and Hindi (hi) for each location
// ============================================================================

export const locationsData = {
  kanpur: {
    en: {
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
        },
        {
          name: "Contractor Amit Singh",
          location: "Jajmau, Kanpur",
          role: "Drilling Contractor",
          text: "Started with 22 HP. So reliable, I bought 30 HP next year. Now drilling 12–15 wells/year. Downtime is almost zero. Spares from factory same-day.",
          rating: 5,
        },
        {
          name: "Mr. Mohan Lal",
          location: "Kalyanpur, Kanpur",
          role: "Irrigation Project Lead",
          text: "Drilled 8 irrigation wells for our cooperative. ASR's support was outstanding. Engineers came personally, trained operators, zero breakdowns across all wells.",
          rating: 5,
        },
      ],

      areaServed: [
        "Kanpur",
        "Kanpur District",
        "Jajmau",
        "Kalyanpur",
        "Pukhrayan",
      ],

      shippingInfo:
        "Same-day delivery within Kanpur city. 1-hour delivery in Pukhrayan. Installation included. On-site training for operators.",

      factoryDetails: {
        address: "Pukhrayan Industrial Area, Kanpur, UP 208201",
        distance: "30 km from Kanpur city center",
        hours: "8 AM – 8 PM Daily (Weekend visits by appointment)",
      },
    },

    hi: {
      title: "कानपुर, उत्तर प्रदेश में बोरिंग मशीन निर्माता",
      description:
        "ASR ड्रिलर्स – कानपुर के विश्वस्त कारखाना-आधारित निर्माता (2012 से)। पुखरायन औद्योगिक क्षेत्र। उसी दिन डिलीवरी और स्थापन। ₹4.8–7.2 लाख।",

      heroHeadline: "कानपुर, उत्तर प्रदेश में बेहतरीन बोरिंग मशीन निर्माता",
      heroText:
        "ASR ड्रिलर्स – कानपुर का आपका स्थानीय बोरिंग मशीन विश्वस्त निर्माता (14+ वर्ष)। पुखरायन कारखाने में आएं। उसी दिन स्थापन, मुफ्त प्रशिक्षण, 24/7 समर्थन। ₹4.8–7.2 लाख में।",

      localProblems: [
        {
          title: "अविश्वसनीय स्थानीय डीलर",
          desc: "बिचौलिए कीमत 15–20% तक बढ़ाते हैं। कारखाने से सीधा संबंध नहीं। मशीन खराब हो तो 2–3 हफ्ते की देरी।",
        },
        {
          title: "स्पेयर पार्ट्स की कमी",
          desc: "सस्ती मशीनों के पार्ट्स स्थानीय रूप से नहीं मिलते। दूर के सप्लायर से मंगवाने पड़ते हैं। हफ्तों तक उत्पादन रुका रहता है।",
        },
        {
          title: "कानपुर में आफ्टर-सेल्स सपोर्ट नहीं",
          desc: "मरम्मत के लिए दूर के डीलर के पास जाना पड़ता है। स्थानीय इंजीनियर नहीं। ग्राहक संतुष्टि कम है।",
        },
      ],

      localSolutions: [
        {
          title: "सीधे कारखाने की कीमत",
          desc: "कोई बिचौलिया नहीं। सीधे पुखरायन कारखाने से खरीदें। डीलर से 15–20% सस्ता। पूरी पारदर्शिता।",
        },
        {
          title: "उसी दिन स्थापन दल",
          desc: "हमारे इंजीनियर कानपुर में हैं। सुबह ऑर्डर दें, दोपहर तक मशीन लगाई जाएगी। ऑपरेटर को उसी दिन प्रशिक्षण।",
        },
        {
          title: "1 घंटे में स्पेयर पार्ट्स",
          desc: "कानपुर कारखाना गोदाम में सब कुछ स्टॉक है। हाइड्रॉलिक खराब? पिस्टन टूटा? 1–2 घंटे में डिलीवरी।",
        },
      ],

      localTestimonials: [
        {
          name: "राजेश कुमार",
          location: "कानपुर जिले",
          role: "किसान",
          text: "दो साल पहले ASR का 30 HP खरीदा। तीन कुएं बिना किसी परेशानी के खोदे। मशीन कभी खराब नहीं हुई। स्पेयर पार्ट्स कानपुर कारखाने से हमेशा मिल जाते हैं। मेरी जमीन के लिए सबसे अच्छा निवेश।",
          rating: 5,
        },
        {
          name: "अमित सिंह (ठेकेदार)",
          location: "जाजमऊ, कानपुर",
          role: "ड्रिलिंग ठेकेदार",
          text: "पहले 22 HP से शुरुआत की। इतना भरोसेमंद कि अगले साल 30 HP भी ख़रीद लिया। अब हर साल 12–15 कुएं खोदता हूँ। डाउनटाइम लगभग शून्य है। कारखाने से स्पेयर पार्ट्स उसी दिन मिल जाते हैं।",
          rating: 5,
        },
        {
          name: "मोहन लाल",
          location: "कल्याणपुर, कानपुर",
          role: "सिंचाई परियोजना प्रमुख",
          text: "हमारे सहकारी समिति के लिए 8 सिंचाई कुएं खोदे। ASR का समर्थन शानदार था। इंजीनियर खुद आए, ऑपरेटरों को प्रशिक्षित किया, सभी कुओं में कोई समस्या नहीं।",
          rating: 5,
        },
      ],

      areaServed: ["कानपुर", "कानपुर जिला", "जाजमऊ", "कल्याणपुर", "पुखरायन"],

      shippingInfo:
        "कानपुर शहर में उसी दिन डिलीवरी। पुखरायन में 1 घंटे की डिलीवरी। स्थापन शामिल है। ऑपरेटरों के लिए स्थल पर प्रशिक्षण।",

      factoryDetails: {
        address: "पुखरायन औद्योगिक क्षेत्र, कानपुर, UP 208201",
        distance: "कानपुर शहर के केंद्र से 30 किमी",
        hours: "सोमवार-शुक्रवार 8 AM – 8 PM। सप्ताहांत पर नियुक्ति से।",
      },
    },
  },

  lucknow: {
    en: {
      title: "Best Tubewell Boring Machine in Lucknow, Uttar Pradesh",
      description:
        "ASR Drillers supplies premium boring machines to Lucknow. 22-38 HP diesel models. Free installation. 24/7 WhatsApp support. ₹4.5-7.5 lakhs.",

      heroHeadline:
        "Premium Boring Machines for Lucknow – Fast, Reliable Drilling",
      heroText:
        "ASR Drillers serves Lucknow with premium boring machines. 22-38 HP models. Specialized clay-soil drilling. Fast delivery. Free training. 24/7 WhatsApp support. ₹4.5-7.5 lakhs.",

      localProblems: [
        {
          title: "Clay Soil Challenges in Lucknow",
          desc: "Lucknow's heavy clay soil requires powerful, precise machines. Weak imports collapse. Expensive repairs.",
        },
        {
          title: "Long Service Delays",
          desc: "Machine breaks on Friday evening. Service shop is closed. Contractors lose ₹5,000-10,000/day.",
        },
        {
          title: "Fake Spare Parts",
          desc: "Market flooded with counterfeit hydraulic parts. Installation quality varies wildly.",
        },
      ],

      localSolutions: [
        {
          title: "Clay-Soil Specialist Machines",
          desc: "30 HP Hydraulic designed for Lucknow's clay. Adjustable pressure. Cuts drilling time by 30%.",
        },
        {
          title: "Fast Response Team",
          desc: "Lucknow-based support. Emergency repairs 2-3 hours. Genuine parts guaranteed.",
        },
        {
          title: "Profit-Focused Leasing",
          desc: "Lease our machine, generate ₹20,000-30,000/month. 12 months: ₹2.5+ lakh profit. Then own it.",
        },
      ],

      localTestimonials: [
        {
          name: "Farmer Sanjay Sharma",
          location: "Lucknow",
          role: "Agricultural Contractor",
          text: "Lucknow's clay had my old machine struggling. ASR's 30 HP handles it like nothing. Profit per well doubled. Best decision.",
          rating: 5,
        },
        {
          name: "Contractor Vikram",
          location: "Gomti Nagar, Lucknow",
          role: "Boring Business Owner",
          text: "Rented 22 HP for 3 months. Made ₹2.5 lakhs profit. Bought it outright. Now own two machines. ASR's support is 24/7.",
          rating: 5,
        },
        {
          name: "Irrigation Cooperative Lead",
          location: "Lucknow District",
          role: "Project Manager",
          text: "12 deep wells for irrigation cooperative. ASR drilled 8 successfully. Quality assured. Cost-effective.",
          rating: 5,
        },
      ],

      areaServed: ["Lucknow", "Lucknow District", "Gomti Nagar", "Alambagh"],

      shippingInfo:
        "Lucknow delivery: 2-3 days. Free installation in city. On-site operator training. Spare parts available locally.",

      factoryDetails: {
        address: "Kanpur Factory, 30km from Lucknow",
        distance: "1-1.5 hours drive from Lucknow",
        hours: "By appointment. Fast response to calls.",
      },
    },

    hi: {
      title: "लखनऊ में सर्वश्रेष्ठ बोरिंग मशीन और ड्रिलिंग सेवा",
      description:
        "ASR ड्रिलर्स लखनऊ को प्रीमियम बोरिंग मशीनें प्रदान करता है। 22-38 HP डीजल मॉडल। मुफ्त स्थापन। 24/7 WhatsApp सपोर्ट। ₹4.5-7.5 लाख।",

      heroHeadline:
        "लखनऊ के लिए प्रीमियम बोरिंग मशीनें – तेज़ और विश्वसनीय ड्रिलिंग",
      heroText:
        "ASR ड्रिलर्स लखनऊ को प्रीमियम बोरिंग मशीनें देता है। 22-38 HP मॉडल। लखनऊ की चिकनी मिट्टी के लिए विशेष। तेज़ डिलीवरी। मुफ्त प्रशिक्षण। 24/7 WhatsApp सपोर्ट। ₹4.5-7.5 लाख।",

      localProblems: [
        {
          title: "लखनऊ की चिकनी मिट्टी की चुनौतियाँ",
          desc: "लखनऊ की भारी चिकनी मिट्टी के लिए शक्तिशाली, सटीक मशीनों की जरूरत है। कमजोर आयातित मशीनें विफल हो जाती हैं। महंगी मरम्मत।",
        },
        {
          title: "लंबी सेवा में देरी",
          desc: "शुक्रवार को मशीन खराब हो जाती है। सेवा दुकान बंद है। ठेकेदार ₹5,000-10,000/दिन खो देते हैं।",
        },
        {
          title: "नकली स्पेयर पार्ट्स",
          desc: "बाजार में नकली हाइड्रॉलिक पार्ट्स भरे हुए हैं। स्थापन की गुणवत्ता अलग-अलग होती है।",
        },
      ],

      localSolutions: [
        {
          title: "चिकनी मिट्टी विशेषज्ञ मशीनें",
          desc: "30 HP हाइड्रॉलिक लखनऊ की मिट्टी के लिए डिज़ाइन की गई। समायोज्य दबाव। ड्रिलिंग समय 30% कम करता है।",
        },
        {
          title: "तेज़ प्रतिक्रिया दल",
          desc: "लखनऊ-आधारित समर्थन। 2-3 घंटे में आपातकालीन मरम्मत। असली पार्ट्स की गारंटी।",
        },
        {
          title: "लाभ-केंद्रित लीजिंग",
          desc: "हमारी मशीन किराए पर लें, ₹20,000-30,000/महीना कमाएं। 12 महीने: ₹2.5+ लाख लाभ। फिर अपनी कर लें।",
        },
      ],

      localTestimonials: [
        {
          name: "संजय शर्मा (किसान)",
          location: "लखनऊ",
          role: "कृषि ठेकेदार",
          text: "लखनऊ की चिकनी मिट्टी से मेरी पुरानी मशीन संघर्ष कर रही थी। ASR का 30 HP इसे आसानी से संभालता है। प्रति कुएं लाभ दोगुना हो गया। सर्वश्रेष्ठ निर्णय।",
          rating: 5,
        },
        {
          name: "विक्रम (ठेकेदार)",
          location: "गोमती नगर, लखनऊ",
          role: "बोरिंग व्यवसायी",
          text: "3 महीने के लिए 22 HP किराए पर लिया। ₹2.5 लाख लाभ कमाया। इसे बिल्कुल खरीद लिया। अब दो मशीनों का मालिक हूँ। ASR का समर्थन 24/7 है।",
          rating: 5,
        },
        {
          name: "सिंचाई सहकारी समिति के प्रमुख",
          location: "लखनऊ जिला",
          role: "परियोजना प्रबंधक",
          text: "सिंचाई सहकारी समिति के लिए 12 गहरे कुएं। ASR ने 8 सफलतापूर्वक ड्रिल किए। गुणवत्ता सुनिश्चित। लागत प्रभावी।",
          rating: 5,
        },
      ],

      areaServed: ["लखनऊ", "लखनऊ जिला", "गोमती नगर", "आलमबाग"],

      shippingInfo:
        "लखनऊ डिलीवरी: 2-3 दिन। शहर में मुफ्त स्थापन। स्थल पर ऑपरेटर प्रशिक्षण। स्पेयर पार्ट्स स्थानीय रूप से उपलब्ध।",

      factoryDetails: {
        address: "कानपुर कारखाना, लखनऊ से 30 किमी",
        distance: "लखनऊ से 1-1.5 घंटे की ड्राइव",
        hours: "नियुक्ति से। कॉल पर तेज़ प्रतिक्रिया।",
      },
    },
  },

  // Placeholder structure for remaining locations (to be filled similarly)
  bihar: {
    en: {
      title: "Boring Machine Supplier in Bihar – Reliable Deep Well Drilling",
      description:
        "ASR Drillers serves Bihar with high-performance boring machines. Designed for rocky Bihar terrain. Fast delivery. Expert support. ₹4.8-7.5 lakhs.",
      heroHeadline:
        "Best Boring Machines for Bihar – Expert Deep Well Drilling",
      heroText:
        "ASR Drillers is Bihar's trusted boring machine supplier. Machines designed for rocky, hard-soil terrain. 22-38 HP models. Same-week delivery. 24/7 WhatsApp support.",
      localProblems: [
        {
          title: "Hard Rock Layers Stop Weak Machines",
          desc: "Bihar's rock formations are challenging. Cheap machines fail at 150-200 feet. You're forced to abandon profitable deep-well projects.",
        },
        {
          title: "Distant Manufacturer Support",
          desc: "Buying from distant states? Support is 3-5 days away. Machine down = loss of ₹8,000-12,000/day.",
        },
        {
          title: "Spare Parts from Abroad",
          desc: "Imported machines' parts take weeks. Bihar contractors abandon imports for this reason.",
        },
      ],
      localSolutions: [
        {
          title: "Rock-Proven Power",
          desc: "30 HP & 38 HP models built for hard rock. Bihar contractors trust ASR for 300-500 ft depth in challenging terrain.",
        },
        {
          title: "Kanpur is Closer than You Think",
          desc: "Kanpur-Bihar distance is manageable. We service Bihar as home market. WhatsApp engineer responds in 1 hour.",
        },
        {
          title: "Kanpur Spares Network",
          desc: "Spare parts shipped from Kanpur factory within 48 hours. Bihar contractors get same-day service as Kanpur customers.",
        },
      ],
      localTestimonials: [
        {
          name: "Contractor Rajesh Kumar",
          location: "Patna, Bihar",
          role: "Deep-Well Specialist",
          text: "Drilled 350 ft through rock layers using ASR's 38 HP. Previous machines couldn't handle rock. ASR's power is unmatched. Now my reputation = deep-well expert.",
          rating: 5,
        },
        {
          name: "Farmer Cooperative",
          location: "Muzaffarpur, Bihar",
          role: "Agricultural Cooperative",
          text: "5 farmers pooled resources for ASR 30 HP. Drilled 4 community wells. Machine handles Bihar's soil perfectly. Support is better than local dealers.",
          rating: 5,
        },
        {
          name: "Contractor Anil Kumar",
          location: "Gaya, Bihar",
          role: "Irrigation Contractor",
          text: "Started drilling business 2 years ago with ASR 22 HP. Upgraded to 30 HP after success. Bihar's hard rock is no problem anymore.",
          rating: 5,
        },
      ],
      areaServed: [
        "Patna",
        "Muzaffarpur",
        "Gaya",
        "Bihar Sharif",
        "Darbhanga",
        "Purnia",
        "Katihar",
        "Buxar",
        "Siwan",
        "Chapra",
      ],
      shippingInfo:
        "Delivery to Bihar: 3-5 days. Free on-site training. Installation team available for 2-3 day visits.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "400km from Patna",
        hours: "8 AM – 8 PM Daily",
      },
    },
    hi: {
      title:
        "बिहार में बोरिंग मशीन आपूर्तिकर्ता – विश्वसनीय गहरे कुएं की ड्रिलिंग",
      description:
        "ASR ड्रिलर्स बिहार को उच्च-प्रदर्शन बोरिंग मशीनें प्रदान करता है। बिहार के चट्टानी इलाके के लिए डिज़ाइन किए गए। तेज़ डिलीवरी। विशेषज्ञ समर्थन। ₹4.8-7.5 लाख।",
      heroHeadline:
        "बिहार के लिए सर्वश्रेष्ठ बोरिंग मशीनें – विशेषज्ञ गहरे कुएं की ड्रिलिंग",
      heroText:
        "ASR ड्रिलर्स बिहार का विश्वस्त बोरिंग मशीन आपूर्तिकर्ता है। मशीनें चट्टानी, कठोर मिट्टी वाले इलाके के लिए डिज़ाइन की गई हैं। 22-38 HP मॉडल। एक सप्ताह में डिलीवरी। 24/7 WhatsApp समर्थन।",
      localProblems: [
        {
          title: "कठोर पत्थर की परतें कमजोर मशीनों को रोकती हैं",
          desc: "बिहार की चट्टानी संरचनाएं चुनौतीपूर्ण हैं। सस्ती मशीनें 150-200 फुट पर विफल हो जाती हैं। आपको लाभदायक गहरे कुएं के प्रोजेक्ट छोड़ने पड़ते हैं।",
        },
        {
          title: "दूर के निर्माता समर्थन",
          desc: "दूर के राज्यों से खरीद रहे हैं? समर्थन 3-5 दिन दूर है। मशीन खराब = ₹8,000-12,000/दिन का नुकसान।",
        },
        {
          title: "विदेशों से स्पेयर पार्ट्स",
          desc: "आयातित मशीनों के पार्ट्स हफ्तों लगते हैं। बिहार के ठेकेदार इसीलिए आयात छोड़ देते हैं।",
        },
      ],
      localSolutions: [
        {
          title: "चट्टान-सिद्ध शक्ति",
          desc: "30 HP और 38 HP मॉडल कठोर चट्टान के लिए बनाए गए। बिहार के ठेकेदार 300-500 फुट गहराई पर भरोसा करते हैं।",
        },
        {
          title: "कानपुर आपसे कम दूर है",
          desc: "कानपुर-बिहार की दूरी प्रबंधनीय है। हम बिहार को घरेलू बाजार के रूप में सेवा देते हैं। WhatsApp इंजीनियर 1 घंटे में जवाब देता है।",
        },
        {
          title: "कानपुर स्पेयर नेटवर्क",
          desc: "48 घंटों में कानपुर कारखाने से स्पेयर पार्ट्स भेजे जाते हैं। बिहार के ठेकेदारों को कानपुर ग्राहकों जैसी सेवा मिलती है।",
        },
      ],
      localTestimonials: [
        {
          name: "राजेश कुमार (ठेकेदार)",
          location: "पटना, बिहार",
          role: "गहरे कुएं विशेषज्ञ",
          text: "ASR के 38 HP से चट्टानी परतों में 350 फुट ड्रिल किया। पिछली मशीनें चट्टान नहीं संभाल सकीं। ASR की शक्ति बेजोड़ है।",
          rating: 5,
        },
        {
          name: "किसान सहकारी समिति",
          location: "मुजफ्फरपुर, बिहार",
          role: "कृषि सहकारी",
          text: "5 किसानों ने ASR 30 HP के लिए संसाधन जोड़े। 4 सामुदायिक कुएं ड्रिल किए। मशीन बिहार की मिट्टी को पूरी तरह संभालती है।",
          rating: 5,
        },
        {
          name: "अनिल कुमार (ठेकेदार)",
          location: "गया, बिहार",
          role: "सिंचाई ठेकेदार",
          text: "2 साल पहले ASR 22 HP से ड्रिलिंग व्यवसाय शुरू किया। सफलता के बाद 30 HP में अपग्रेड किया। बिहार की कठोर चट्टान अब कोई समस्या नहीं।",
          rating: 5,
        },
      ],
      areaServed: [
        "पटना",
        "मुजफ्फरपुर",
        "गया",
        "बिहार शरीफ",
        "दरभंगा",
        "पूर्णिया",
        "कटिहार",
        "बक्सर",
        "सीवान",
        "छपरा",
      ],
      shippingInfo:
        "बिहार में डिलीवरी: 3-5 दिन। स्थल पर मुफ्त प्रशिक्षण। 2-3 दिन की यात्रा के लिए स्थापना दल उपलब्ध।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "पटना से 400 किमी",
        hours: "दैनिक 8 AM – 8 PM",
      },
    },
  },

  rajasthan: {
    en: {
      title: "Boring Machine Supplier in Rajasthan – Rocky Terrain Expert",
      description:
        "ASR Drillers is Rajasthan's top boring machine supplier for rocky, hard-soil terrain. 38 HP high-torque models. Fast delivery. ₹5.5-7.5 lakhs.",
      heroHeadline:
        "Professional Boring Machines for Rajasthan – Conquer Hard Rock",
      heroText:
        "ASR Drillers specializes in Rajasthan's rocky terrain. High-torque machines (30-38 HP). Deep wells (300-500+ feet). Professional contractors' choice.",
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
          desc: "West India focus. Delivery 5-7 days. Technical support responsive.",
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
          text: "Drilled 450 ft through granite using ASR 38 HP. Competitors' machines quit at 200 ft. Our success rate = 99%. Running 8-10 wells/month. Best investment.",
          rating: 5,
        },
        {
          name: "Farmer Mohan Singh",
          location: "Bikaner, Rajasthan",
          role: "Large-Scale Farmer",
          text: "Rajasthan's soil is tough. ASR 30 HP handles it. Drilled 3 wells, 250-350 ft each. Took less time than expected. Fuel efficiency is impressive.",
          rating: 5,
        },
        {
          name: "Contractor Vikram",
          location: "Ajmer, Rajasthan",
          role: "Professional Driller",
          text: "15+ years drilling. ASR's 38 HP is the most reliable rock machine I've used. After-sales support is genuine. Kanpur team backs every machine.",
          rating: 5,
        },
      ],
      areaServed: [
        "Jaipur",
        "Jodhpur",
        "Udaipur",
        "Bikaner",
        "Kota",
        "Ajmer",
        "Bharatpur",
        "Alwar",
        "Bhilwara",
        "Sri Ganganagar",
      ],
      shippingInfo:
        "Delivery to Rajasthan: 5-7 days. Installation team available. Transport cost shared for distant locations.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "850km from Jodhpur",
        hours: "8 AM – 8 PM Daily",
      },
    },
    hi: {
      title:
        "राजस्थान में बोरिंग मशीन आपूर्तिकर्ता – चट्टानी इलाके का विशेषज्ञ",
      description:
        "ASR ड्रिलर्स राजस्थान के चट्टानी, कठोर मिट्टी वाले इलाके के लिए शीर्ष बोरिंग मशीन आपूर्तिकर्ता है। 38 HP उच्च-टॉर्क मॉडल। तेज़ डिलीवरी। ₹5.5-7.5 लाख।",
      heroHeadline:
        "राजस्थान के लिए पेशेवर बोरिंग मशीनें – कठोर पत्थर को जीतें",
      heroText:
        "ASR ड्रिलर्स राजस्थान के चट्टानी इलाके में माहिर है। उच्च-टॉर्क मशीनें (30-38 HP)। गहरे कुएं (300-500+ फुट)। पेशेवर ठेकेदारों की पसंद।",
      localProblems: [
        {
          title: "ग्रेनाइट और चट्टान कमजोर मशीनों को नष्ट करती हैं",
          desc: "राजस्थान की कठोर चट्टान बेरहम है। बेसिक मशीनें 100 फुट पर विफल हो जाती हैं। आप उपकरण और लाभ खो देते हैं।",
        },
        {
          title: "उत्तरी आपूर्तिकर्ते चट्टानी इलाके को नहीं समझते",
          desc: "सामान्य मशीनें ग्रेनाइट के लिए ट्यून नहीं हैं। कानपुर क्षेत्र के निर्माता जानते हैं कि चट्टानी ड्रिलिंग कैसे करनी है।",
        },
        {
          title: "उच्च मशीन डाउनटाइम = व्यापारिक नुकसान",
          desc: "एक मशीन विफलता = ₹10,000+/दिन का नुकसान। चट्टानी ड्रिलिंग के लिए विश्वसनीयता जरूरी है।",
        },
      ],
      localSolutions: [
        {
          title: "चट्टान-सिद्ध मशीनें",
          desc: "100+ राजस्थान के ठेकेदार ASR मशीनों से ग्रेनाइट में ड्रिल करते हैं। 38 HP गहरे राजस्थानी कुओं के लिए प्रसिद्ध है।",
        },
        {
          title: "कानपुर निकटता",
          desc: "पश्चिम भारत पर ध्यान। 5-7 दिन में डिलीवरी। तकनीकी समर्थन प्रतिक्रियाशील।",
        },
        {
          title: "चट्टान-ड्रिलिंग विशेषज्ञता",
          desc: "ASR इंजीनियर चट्टान-विशिष्ट तकनीकों पर प्रशिक्षित हैं। ग्रेनाइट परतों के लिए अधिकतम टॉर्क, इष्टतम RPM।",
        },
      ],
      localTestimonials: [
        {
          name: "राजेश सिंह (ठेकेदार)",
          location: "जोधपुर, राजस्थान",
          role: "कठोर चट्टान विशेषज्ञ",
          text: "ASR 38 HP से ग्रेनाइट में 450 फुट ड्रिल किया। प्रतिस्पर्धी मशीनें 200 फुट पर छोड़ देती हैं। हमारी सफलता दर = 99%। 8-10 कुएं/महीना।",
          rating: 5,
        },
        {
          name: "मोहन सिंह (किसान)",
          location: "बीकानेर, राजस्थान",
          role: "बड़े पैमाने पर खेती",
          text: "राजस्थान की मिट्टी कठोर है। ASR 30 HP इसे संभालती है। 3 कुएं ड्रिल किए, प्रत्येक 250-350 फुट। अपेक्षा से कम समय लगा।",
          rating: 5,
        },
        {
          name: "विक्रम (ठेकेदार)",
          location: "अजमेर, राजस्थान",
          role: "पेशेवर ड्रिलर",
          text: "15+ साल ड्रिलिंग। ASR का 38 HP सबसे विश्वसनीय चट्टान मशीन है जिसका मैंने उपयोग किया। आफ्टर-सेल्स सपोर्ट असली है।",
          rating: 5,
        },
      ],
      areaServed: [
        "जयपुर",
        "जोधपुर",
        "उदयपुर",
        "बीकानेर",
        "कोटा",
        "अजमेर",
        "भरतपुर",
        "अलवर",
        " भीलवाड़ा",
        "श्री गंगानगर",
      ],
      shippingInfo:
        "राजस्थान में डिलीवरी: 5-7 दिन। स्थापना दल उपलब्ध। दूर के स्थानों के लिए परिवहन लागत साझा की जाती है।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "जोधपुर से 850 किमी",
        hours: "दैनिक 8 AM – 8 PM",
      },
    },
  },

  delhi: {
    en: {
      title: "Boring Machine Supplier in Delhi NCR – Premium Quality Machines",
      description:
        "ASR Drillers serves Delhi NCR with premium boring machines. Fast 2-day delivery. Expert installation. 24/7 support. ₹4.8-7.5 lakhs.",
      heroHeadline:
        "Premium Boring Machines for Delhi NCR – Professional Solutions",
      heroText:
        "ASR Drillers is Delhi NCR's premium boring machine partner. Quality machines. Fast delivery. Professional support.",
      localProblems: [
        {
          title: "Delhi Dealers Mark Up Prices 20-30%",
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
          desc: "Skip Delhi middlemen. Deal directly with Kanpur factory. Save 15-20% vs. local dealers.",
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
          location: "Gurugram, Haryana",
          role: "Construction Boring",
          text: "Construction project needed quick, reliable boring. ASR delivered 22 HP in 3 days. Drilled all wells on schedule. Professional support throughout.",
          rating: 5,
        },
        {
          name: "Farmer Pradeep",
          location: "Noida, UP",
          role: "Agricultural Entrepreneur",
          text: "Delhi dealers wanted ₹5.2L. ASR quoted ₹4.8L direct. Same machine, better price, better support. Drilled 2 wells, both perfect.",
          rating: 5,
        },
        {
          name: "Irrigation Engineer Mohit",
          location: "Delhi NCR",
          role: "Municipal Project Lead",
          text: "ASR's 30 HP worked perfectly for our NCR water project. Variable RPM handled mixed soil layers. Precise depth control. Govt approved.",
          rating: 5,
        },
      ],
      areaServed: [
        "Delhi",
        "Gurugram",
        "Noida",
        "Ghaziabad",
        "Faridabad",
        "Meerut",
        "Panipat",
        "Karnal",
        "Sonipat",
        "Rohtak",
      ],
      shippingInfo:
        "Delhi NCR delivery: 2 days. Free installation within NCR. Installation team ₹2,000-3,000/day for on-site support.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "500km from Delhi",
        hours: "8 AM – 8 PM Daily",
      },
    },
    hi: {
      title:
        "दिल्ली NCR में बोरिंग मशीन आपूर्तिकर्ता – प्रीमियम गुणवत्ता की मशीनें",
      description:
        "ASR ड्रिलर्स दिल्ली NCR को प्रीमियम बोरिंग मशीनें प्रदान करता है। तेज़ 2 दिन की डिलीवरी। विशेषज्ञ स्थापन। 24/7 समर्थन। ₹4.8-7.5 लाख।",
      heroHeadline: "दिल्ली NCR के लिए प्रीमियम बोरिंग मशीनें – पेशेवर समाधान",
      heroText:
        "ASR ड्रिलर्स दिल्ली NCR का प्रीमियम बोरिंग मशीन भागीदार है। गुणवत्ता की मशीनें। तेज़ डिलीवरी। पेशेवर समर्थन।",
      localProblems: [
        {
          title: "दिल्ली डीलर कीमत 20-30% बढ़ाते हैं",
          desc: "स्थानीय डीलर बिचौलिया लागत जोड़ते हैं। आप उसी मशीन के लिए प्रीमियम देते हैं। कारखाने से सीधा संबंध नहीं।",
        },
        {
          title: "दिल्ली की बदलती मिट्टी के लिए सामान्य मशीनें",
          desc: "दिल्ली की मिट्टी बदलती है: चिकनी, चट्टानी, रेतीली। सामान्य मशीनें बदलाव के लिए ट्यून नहीं हैं। सटीकता चाहिए।",
        },
        {
          title: "समर्थन डीलर के मूड पर निर्भर",
          desc: "डीलर-आधारित समर्थन = असंगत। अगर डीलर को परेशानी है, तो आपकी मशीन भी प्रभावित होती है।",
        },
      ],
      localSolutions: [
        {
          title: "सीधे कारखाने की कीमत",
          desc: "दिल्ली के बिचौलियों को छोड़ें। सीधे कानपुर कारखाने से बात करें। स्थानीय डीलरों से 15-20% बचत।",
        },
        {
          title: "बदलाव-तैयार मशीनें",
          desc: "30 HP हाइड्रॉलिक की वेरिएबल RPM दिल्ली की मिश्रित मिट्टी को पूरी तरह संभालती है। प्रत्येक परत के लिए दबाव समायोजित करें।",
        },
        {
          title: "स्वतंत्र समर्थन",
          desc: "ASR दिल्ली डीलरों से स्वतंत्र है। सीधी कारखाना सेवा = आपको प्राथमिकता मिलती है।",
        },
      ],
      localTestimonials: [
        {
          name: "अर्विंद (ठेकेदार)",
          location: "गुरुग्राम, हरियाणा",
          role: "निर्माण बोरिंग",
          text: "निर्माण प्रोजेक्ट के लिए तेज़, विश्वसनीय बोरिंग चाहिए थी। ASR ने 3 दिन में 22 HP डिलीवर किया। सभी कुएं समय पर ड्रिल हुए।",
          rating: 5,
        },
        {
          name: "प्रदीप (किसान)",
          location: "नोएडा, UP",
          role: "कृषि उद्यमी",
          text: "दिल्ली डीलर ₹5.2L चाहते थे। ASR ने ₹4.8L सीधे उद्धृत किया। वही मशीन, बेहतर कीमत, बेहतर समर्थन।",
          rating: 5,
        },
        {
          name: "मोहित (सिंचाई इंजीनियर)",
          location: "दिल्ली NCR",
          role: "नगरपालिका परियोजना प्रमुख",
          text: "ASR का 30 HP हमारे NCR जल परियोजना के लिए बिल्कुल सही काम किया। वेरिएबल RPM ने मिश्रित मिट्टी परतों को संभाला।",
          rating: 5,
        },
      ],
      areaServed: [
        "दिल्ली",
        "गुरुग्राम",
        "नोएडा",
        "गाज़ियाबाद",
        "फरीदाबाद",
        "मेरठ",
        "पानीपत",
        "करनाल",
        "सोनीपत",
        "रोहतक",
      ],
      shippingInfo:
        "दिल्ली NCR डिलीवरी: 2 दिन। NCR के भीतर मुफ्त स्थापना। ऑन-साइट सपोर्ट के लिए ₹2,000-3,000/दिन।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "दिल्ली से 500 किमी",
        hours: "दैनिक 8 AM – 8 PM",
      },
    },
  },

  kolkata: {
    en: {
      title: "Boring Machine Supplier in Kolkata – Clay Soil Specialist",
      description:
        "ASR Drillers serves Kolkata with clay-soil specialist boring machines. Designed for Bengal terrain. Fast delivery. ₹4.8-7.5 lakhs.",
      heroHeadline: "Boring Machines for Kolkata – Clay Soil Drilling Expert",
      heroText:
        "ASR Drillers is Kolkata's clay-soil boring machine specialist. Machines for Bengal terrain. Expert support.",
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
          title: "Imports Take 4-6 Weeks for Spares",
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
        },
        {
          name: "Farmer Suresh",
          location: "Hooghly, West Bengal",
          role: "Agricultural Owner",
          text: "Farm needed bore well quickly. ASR's 22 HP delivered in 4 days. Handled waterlogged soil perfectly. Support was responsive despite distance.",
          rating: 5,
        },
        {
          name: "Municipality Engineer",
          location: "Kolkata Municipal Corp",
          role: "Public Works",
          text: "Municipality chose ASR for 5 public wells. Machine handled alluvial layers precisely. Government satisfied with performance & durability.",
          rating: 5,
        },
      ],
      areaServed: [
        "Kolkata",
        "Howrah",
        "Hooghly",
        "Asansol",
        "Durgapur",
        "Siliguri",
        "Bardhaman",
        "Malda",
        "Kharagpur",
        "Berhampore",
      ],
      shippingInfo:
        "Kolkata delivery: 4-6 days via rail+road. Installation ₹3,000-4,000/day. Spare parts delivered within 48 hours.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "900km from Kolkata",
        hours: "8 AM – 8 PM Daily",
      },
    },
    hi: {
      title: "कोलकाता में बोरिंग मशीन आपूर्तिकर्ता – चिकनी मिट्टी विशेषज्ञ",
      description:
        "ASR ड्रिलर्स कोलकाता को चिकनी मिट्टी विशेषज्ञ बोरिंग मशीनें प्रदान करता है। बंगाल के इलाके के लिए डिज़ाइन किए गए। तेज़ डिलीवरी। ₹4.8-7.5 लाख।",
      heroHeadline:
        "कोलकाता के लिए बोरिंग मशीनें – चिकनी मिट्टी ड्रिलिंग विशेषज्ञ",
      heroText:
        "ASR ड्रिलर्स कोलकाता का चिकनी मिट्टी बोरिंग मशीन विशेषज्ञ है। बंगाल के इलाके के लिए मशीनें। विशेषज्ञ समर्थन।",
      localProblems: [
        {
          title: "जलोढ़ मिट्टी को सटीकता चाहिए",
          desc: "कोलकाता की मिट्टी नरम, जलमग्न है। मशीनों को सावधानीपूर्वक दबाव नियंत्रण चाहिए। सामान्य मशीनें गुफाएं बनाती हैं।",
        },
        {
          title: "स्थानीय पूर्वी निर्माताओं की सीमित सहायता",
          desc: "स्थानीय कोलकाता निर्माताओं के पास कानपुर जैसा विनिर्माण पैमाना नहीं है। पार्ट्स उपलब्धता, विशेषज्ञता सीमित।",
        },
        {
          title: "आयात के स्पेयर में 4-6 हफ्ते लगते हैं",
          desc: "विदेशी मशीनों के पार्ट्स विदेशों से आते हैं। पूर्वी भारतीय ठेकेदार हफ्तों इंतज़ार करते हैं।",
        },
      ],
      localSolutions: [
        {
          title: "जलोढ़ मिट्टी में महारत",
          desc: "22 HP और 30 HP हाइड्रॉलिक नरम मिट्टी + जल प्रबंधन के लिए ट्यून किए गए। वेरिएबल दबाव गुफाओं को रोकता है।",
        },
        {
          title: "कानपुर लॉजिस्टिक्स हब",
          desc: "कानपुर का पैमाना = तेज़ सोर्सिंग। स्पेयर उपलब्ध, पूर्वी निर्माताओं की तरह हफ्तों इंतज़ार नहीं।",
        },
        {
          title: "हिंदी-अंग्रेजी समर्थन",
          desc: "क्षेत्रीय भाषा में आराम से समर्थन। असली इंजीनियर, अनुवाद सेवाएं नहीं।",
        },
      ],
      localTestimonials: [
        {
          name: "राजीब (ठेकेदार)",
          location: "कोलकाता, पश्चिम बंगाल",
          role: "जल कुआं ठेकेदार",
          text: "जलोढ़ मिट्टी पेचीदा है। ASR का वेरिएबल दबाव नियंत्रण वाला 30 HP बिल्कुल सही है। नरम मिट्टी में 200 फुट बिना समस्या के ड्रिल किया।",
          rating: 5,
        },
        {
          name: "सुरेश (किसान)",
          location: "हावड़ा, पश्चिम बंगाल",
          role: "कृषि मालिक",
          text: "खेत को जल्दी से बोर वेल चाहिए थी। ASR का 22 HP 4 दिन में डिलीवर हुआ। जलमग्न मिट्टी को पूरी तरह संभाला। दूरी के बावजूद समर्थन प्रतिक्रियाशील था।",
          rating: 5,
        },
        {
          name: "नगरपालिका इंजीनियर",
          location: "कोलकाता नगरपालिका निगम",
          role: "लोक निर्माण",
          text: "नगरपालिका ने 5 सार्वजनिक कुओं के लिए ASR चुना। मशीन ने जलोढ़ परतों को सटीकता से संभाला। सरकार प्रदर्शन और स्थायित्व से संतुष्ट रही।",
          rating: 5,
        },
      ],
      areaServed: [
        "कोलकाता",
        "हावड़ा",
        "हुगली",
        "आसनसोल",
        "दुर्गापुर",
        "शिलीगुड़ी",
        "बर्धमान",
        "मालदा",
        "खड़गपुर",
        "बेहरामपोर",
      ],
      shippingInfo:
        "कोलकाता डिलीवरी: रेल+सड़क मार्ग से 4-6 दिन। स्थापना ₹3,000-4,000/दिन। स्पेयर पार्ट्स 48 घंटे में।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "कोलकाता से 900 किमी",
        hours: "दैनिक 8 AM – 8 PM",
      },
    },
  },

  mp: {
    en: {
      title: "Boring Machine Supplier in Madhya Pradesh – Rock Drilling Expert",
      description:
        "ASR Drillers serves Madhya Pradesh with rock-drilling specialist machines. High-performance models. Fast delivery. ₹5.2-7.5 lakhs.",
      heroHeadline: "Professional Boring Machines for MP – Rock Terrain Master",
      heroText:
        "ASR Drillers is Madhya Pradesh's rock-drilling specialist. High-torque machines. Deep wells. Professional support.",
      localProblems: [
        {
          title: "MP's Mixed Terrain Confuses Generic Machines",
          desc: "MP has rock, clay, hard soil. Generic machines need constant adjustments. Precision control = must-have.",
        },
        {
          title: "Local Support from Distant Makers",
          desc: "Machines from far states mean 3-4 day support wait. Machine down = lost income.",
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
          desc: "Kanpur-MP border close. Delivery 2-3 days. Support responsive.",
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
        },
        {
          name: "Farmer Rajesh",
          location: "Bhopal, MP",
          role: "Agricultural Owner",
          text: "Needed deep well for farm. ASR's 38 HP drilled 400 ft through rock layers. Spares support was excellent. Kanpur team visited for installation. Very professional.",
          rating: 5,
        },
        {
          name: "Contractor Deepak",
          location: "Jabalpur, MP",
          role: "Mining Support",
          text: "Rocky Narmada region needs power. ASR 38 HP handles everything. Drilled 30+ wells in 8 months. ROI achieved in 14 months.",
          rating: 5,
        },
      ],
      areaServed: [
        "Indore",
        "Bhopal",
        "Jabalpur",
        "Gwalior",
        "Ujjain",
        "Sagar",
        "Dewas",
        "Satna",
        "Ratlam",
        "Khandwa",
      ],
      shippingInfo:
        "MP delivery: 2-4 days. Installation team available. Transport cost ₹6,000-10,000 depending on location.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "600km from Indore",
        hours: "8 AM – 8 PM Daily",
      },
    },
    hi: {
      title:
        "मध्य प्रदेश में बोरिंग मशीन आपूर्तिकर्ता – चट्टान ड्रिलिंग विशेषज्ञ",
      description:
        "ASR ड्रिलर्स मध्य प्रदेश को चट्टान-ड्रिलिंग विशेषज्ञ मशीनें प्रदान करता है। उच्च-प्रदर्शन मॉडल। तेज़ डिलीवरी। ₹5.2-7.5 लाख।",
      heroHeadline: "MP के लिए पेशेवर बोरिंग मशीनें – चट्टान इलाके का माहिर",
      heroText:
        "ASR ड्रिलर्स मध्य प्रदेश का चट्टान-ड्रिलिंग विशेषज्ञ है। उच्च-टॉर्क मशीनें। गहरे कुएं। पेशेवर समर्थन।",
      localProblems: [
        {
          title: "MP का मिश्रित इलाका सामान्य मशीनों को चकराता है",
          desc: "MP में चट्टान, चिकनी मिट्टी, कठोर मिट्टी है। सामान्य मशीनों को लगातार समायोजन चाहिए। सटीक नियंत्रण = जरूरी।",
        },
        {
          title: "दूर के निर्माताओं से स्थानीय समर्थन",
          desc: "दूर के राज्यों की मशीनें = 3-4 दिन समर्थन प्रतीक्षा। मशीन खराब = आय हानि।",
        },
        {
          title: "कमज़ोर स्पेयर पार्ट्स नेटवर्क",
          desc: "MP ठेकेदार स्पेयर पार्ट्स सोर्सिंग से जूझते हैं। कोई व्यवस्थित स्थानीय पार्ट्स डीलर नहीं।",
        },
      ],
      localSolutions: [
        {
          title: "बदलाव के माहिर",
          desc: "30 HP और 38 HP हाइड्रॉलिक मशीनें MP के इलाके बदलाव को संभालती हैं। वेरिएबल RPM = शून्य समायोजन डाउनटाइम।",
        },
        {
          title: "कानपुर निकटता का लाभ",
          desc: "कानपुर-MP सीमा करीब है। 2-3 दिन में डिलीवरी। समर्थन प्रतिक्रियाशील।",
        },
        {
          title: "व्यवस्थित पार्ट्स नेटवर्क",
          desc: "कानपुर कारखाना व्यवस्थित रूप से पार्ट्स आपूर्ति करता है। MP ठेकेदारों को व्यवस्थित सोर्सिंग मिलती है।",
        },
      ],
      localTestimonials: [
        {
          name: "विक्रम (ठेकेदार)",
          location: "इंदौर, मध्य प्रदेश",
          role: "सिंचाई ठेकेदार",
          text: "MP का इलाका मिश्रित है। ASR का 30 HP हाइड्रॉलिक स्वचालित रूप से प्रत्येक परत के अनुसार समायोजित होता है। 6 महीने में 25 कुएं ड्रिल किए। मशीन कभी नहीं रुकी।",
          rating: 5,
        },
        {
          name: "राजेश (किसान)",
          location: "भोपाल, MP",
          role: "कृषि मालिक",
          text: "खेत के लिए गहरा कुआं चाहिए था। ASR का 38 HP चट्टानी परतों में 400 फुट ड्रिल किया। स्पेयर समर्थन उत्कृष्ट था।",
          rating: 5,
        },
        {
          name: "दीपक (ठेकेदार)",
          location: "जबलपुर, MP",
          role: "खनन सहायता",
          text: "चट्टानी नर्मदा क्षेत्र को शक्ति चाहिए। ASR 38 HP सब कुछ संभालता है। 8 महीने में 30+ कुएं ड्रिल किए। 14 महीने में ROI हासिल।",
          rating: 5,
        },
      ],
      areaServed: [
        "इंदौर",
        "भोपाल",
        "जबलपुर",
        "ग्वालियर",
        "उज्जैन",
        "सागर",
        "देवास",
        "सतना",
        "रतलाम",
        "खंडवा",
      ],
      shippingInfo:
        "MP में डिलीवरी: 2-4 दिन। स्थापना दल उपलब्ध। स्थान के अनुसार परिवहन लागत ₹6,000-10,000।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "इंदौर से 600 किमी",
        hours: "दैनिक 8 AM – 8 PM",
      },
    },
  },
};
