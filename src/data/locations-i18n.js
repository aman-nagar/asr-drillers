// ASR Drillers - Multilingual Translations & Location Data
// English (en) and Hindi (hi) content for all locations
// This is the single source of truth for all multilingual content

// ============================================================================
// COMMON DATA - Shared across all languages (contact, models, company info)
// ============================================================================

export const commonData = {
  // Contact Info
  phone: "+91-98765-43210",
  whatsapp: "+919876543210",

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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["Bihar", "Patna", "Nalanda"],
      shippingInfo: "Delivery to Bihar: 3-5 days. Free on-site training.",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["बिहार", "पटना", "नालंदा"],
      shippingInfo: "बिहार में डिलीवरी: 3-5 दिन। स्थल पर मुफ्त प्रशिक्षण।",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["Rajasthan", "Jaipur", "Jodhpur"],
      shippingInfo: "Delivery to Rajasthan: 4-7 days. Installation included.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "Contact for details",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["राजस्थान", "जयपुर", "जोधपुर"],
      shippingInfo: "राजस्थान में डिलीवरी: 4-7 दिन। स्थापन शामिल।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "विवरण के लिए संपर्क करें",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["Delhi", "NCR", "Noida", "Gurgaon"],
      shippingInfo: "Delhi NCR delivery: 2 days. Free installation.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "Contact for logistics",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["दिल्ली", "NCR", "नोएडा", "गुड़गांव"],
      shippingInfo: "दिल्ली NCR में डिलीवरी: 2 दिन। मुफ्त स्थापन।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "लॉजिस्टिक्स के लिए संपर्क करें",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["Kolkata", "West Bengal"],
      shippingInfo: "Kolkata delivery: 4-6 days. Free installation.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "Contact for logistics",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["कोलकाता", "पश्चिम बंगाल"],
      shippingInfo: "कोलकाता में डिलीवरी: 4-6 दिन। मुफ्त स्थापन।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "लॉजिस्टिक्स के लिए संपर्क करें",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["Madhya Pradesh", "Indore", "Bhopal"],
      shippingInfo: "MP delivery: 3-6 days. Installation included.",
      factoryDetails: {
        address: "Kanpur Factory",
        distance: "Contact for logistics",
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
      localProblems: [],
      localSolutions: [],
      localTestimonials: [],
      areaServed: ["मध्य प्रदेश", "इंदौर", "भोपाल"],
      shippingInfo: "MP में डिलीवरी: 3-6 दिन। स्थापन शामिल।",
      factoryDetails: {
        address: "कानपुर कारखाना",
        distance: "लॉजिस्टिक्स के लिए संपर्क करें",
        hours: "दैनिक 8 AM – 8 PM",
      },
    },
  },
};
