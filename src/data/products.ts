import { commonData } from "./locations-i18n.js";

function createDummyImage(label: string) {
  return `https://dummyimage.com/1400x900/0f172a/e2e8f0&text=${encodeURIComponent(label).replace(/%20/g, "+")}`;
}

const baseModels = {
  submersible22: commonData.models[0],
  hydraulic30: commonData.models[1],
};

export const productPages = [
  {
    slug: "22-hp-submersible",
    priceValue: "480000",
    imageUrl: createDummyImage("22 HP Submersible"),
    localeContent: {
      en: {
        pageTitle: "22 HP Submersible Boring Machine | ASR Drillers",
        pageDescription:
          "22 HP submersible boring machine for farmers and small contractors. Covers 150-300 ft drilling depth with low operating cost and easy ownership.",
        breadcrumbLabel: "22 HP Submersible",
        hero: {
          eyebrow: "Affordable entry model for field drilling",
          title: "22 HP Submersible Boring Machine for Farmers and Lean Drilling Teams",
          description:
            "This model is built for buyers who need dependable drilling without stepping into a heavy-duty budget. It is the easiest ASR machine to own, transport, and run in day-to-day field work.",
          primaryActionLabel: "Ask Price on WhatsApp",
          secondaryActionLabel: "Call for Details",
          whatsappMessage:
            "Hi! I want details about the 22 HP Submersible boring machine.",
          signals: [
            { value: "150-300 ft", label: "Depth Range" },
            { value: "₹4.8 Lakh", label: "Starting Price" },
            { value: "8-10 L/day", label: "Fuel Use" },
          ],
          visualTitle: "Best for practical first-time ownership",
          visualLines: [
            "Low-running-cost machine for farm and village drilling use.",
            "Simple maintenance with readily available spares.",
            "Ideal when portability and affordability matter most.",
          ],
        },
        stripItems: [
          { value: "22 HP", label: "Power", note: "Kirloskar diesel engine" },
          { value: "4-6 inch", label: "Bore Diameter", note: "Best for standard tubewell work" },
          { value: "Portable", label: "Field Setup", note: "Easier transport and deployment" },
          { value: "1-2 Years", label: "Warranty", note: "Factory-backed support" },
        ],
        summary: {
          title: "Who this machine is made for",
          paragraphs: [
            "The 22 HP model is the most accessible entry point in the ASR lineup. It works well when the buyer wants dependable output, manageable fuel use, and a machine that is not intimidating to operate or maintain.",
            "For many farm owners and early-stage contractors, this is the model that balances budget, drilling depth, and ease of transport better than the larger machines.",
          ],
          bullets: [
            "Suitable for clay, sandy soil, and softer formations",
            "Lower daily fuel cost than heavier contractor models",
            "Quicker ROI for buyers starting with fewer jobs per month",
          ],
          visualLabel: "Dummy machine photo slot",
        },
        buyersTitle: "Best fit buyers",
        buyers: [
          {
            title: "Farm owners",
            desc: "A strong fit for irrigation-focused buyers who need their own drilling capability without moving into high contractor spend.",
          },
          {
            title: "Smaller contractors",
            desc: "Useful for teams building a local boring business and looking for manageable ownership cost in the first machine purchase.",
          },
          {
            title: "Shared village projects",
            desc: "An affordable route for cooperative or pooled-use drilling in areas where depth needs stay in the mid range.",
          },
        ],
        advantagesTitle: "Why buyers choose it",
        advantages: [
          {
            title: "Affordable and easier to recover",
            desc: "The price point and fuel usage make it easier to start operations and reach payback without chasing only large-ticket jobs.",
          },
          {
            title: "Simple to run and maintain",
            desc: "This machine is easier for local teams to understand, maintain, and keep productive with less ownership friction.",
          },
          {
            title: "Portable field behavior",
            desc: "The lighter setup makes transport and positioning easier when compared with heavier drilling options.",
          },
        ],
        specsTitle: "Technical and ownership overview",
        specsSubtitle:
          "These summary blocks keep the important buying facts visible without forcing the visitor through a long technical wall.",
        specGroups: [
          {
            title: "Power and drilling",
            items: [
              { label: "Engine", value: baseModels.submersible22.engine },
              { label: "Depth Band", value: `${baseModels.submersible22.minDepth}-${baseModels.submersible22.maxDepth}` },
              { label: "Diameter", value: baseModels.submersible22.diameter },
              { label: "Torque", value: baseModels.submersible22.torque },
            ],
          },
          {
            title: "Ownership profile",
            items: [
              { label: "Price", value: baseModels.submersible22.price },
              { label: "Fuel / Day", value: baseModels.submersible22.fuelPerDay },
              { label: "Best For", value: baseModels.submersible22.bestFor },
              { label: "Core Benefit", value: "Lower operating cost and easier portability" },
            ],
          },
        ],
        testimonialsTitle: "What owners notice first",
        testimonialsSubtitle:
          "The strongest feedback on this model usually comes down to fuel savings, easy handling, and consistent support.",
        testimonials: [
          {
            name: "Farmer Rajesh",
            location: "Kanpur District",
            role: "Farm Owner",
            text: "The 22 HP gave me my own boring capacity without pushing me into a bigger contractor budget. Fuel cost stays manageable and the machine is easy to handle.",
            rating: 5,
            project: "Farm irrigation boring",
          },
          {
            name: "Contractor Amit",
            location: "Lucknow",
            role: "Small Drilling Contractor",
            text: "I started with the 22 HP and it helped me build early jobs without too much maintenance stress. Support from Kanpur stayed quick whenever I had questions.",
            rating: 5,
            project: "Early-stage contractor setup",
          },
        ],
        faqTitle: "Common questions about the 22 HP",
        faqs: [
          {
            question: "Can the 22 HP handle 300 feet on every site?",
            answer:
              "Not on every site. Soil type matters. In favorable soil it can reach the upper range, while harder formations may reduce the practical depth.",
          },
          {
            question: "Is this machine good for first-time buyers?",
            answer:
              "Yes. It is the most ownership-friendly model in the lineup, especially for farm users and small contractors who want lower risk and simpler maintenance.",
          },
          {
            question: "What kind of fuel cost should I expect?",
            answer:
              "Expect around 8-10 liters per day in continuous drilling conditions, with actual consumption changing based on soil hardness and working hours.",
          },
          {
            question: "Do you include installation and training?",
            answer:
              "Yes. Installation guidance and operator onboarding are part of the support experience so the machine is easier to start using confidently.",
          },
        ],
        modelsTitle: "Compare the full ASR lineup",
        modelsSubtitle:
          "Use the table below to see when the 22 HP is the right fit and when a buyer should step up to a bigger model.",
        cta: {
          headline: "Want to know if the 22 HP is enough for your soil and target depth?",
          subheadline:
            "Send your location, expected depth, and soil condition on WhatsApp. We can tell you honestly if this is the right model or if you should step up to the 30 HP.",
        },
      },
      hi: {
        pageTitle: "22 HP सबमर्सिबल बोरिंग मशीन | ASR ड्रिलर्स",
        pageDescription:
          "22 HP सबमर्सिबल बोरिंग मशीन किसानों और छोटे ठेकेदारों के लिए। 150-300 फुट गहराई, कम रनिंग कॉस्ट और आसान उपयोग।",
        breadcrumbLabel: "22 HP सबमर्सिबल",
        hero: {
          eyebrow: "किफायती एंट्री मॉडल",
          title: "किसानों और छोटे ड्रिलिंग टीमों के लिए 22 HP सबमर्सिबल बोरिंग मशीन",
          description:
            "यह मॉडल उन खरीदारों के लिए है जिन्हें भरोसेमंद ड्रिलिंग चाहिए, लेकिन heavy-duty budget नहीं चाहिए। इसे चलाना, संभालना और maintain करना बाकी बड़े मॉडल की तुलना में आसान है।",
          primaryActionLabel: "व्हाट्सऐप पर कीमत पूछें",
          secondaryActionLabel: "विवरण के लिए कॉल करें",
          whatsappMessage:
            "नमस्ते! मुझे 22 HP सबमर्सिबल बोरिंग मशीन के बारे में जानकारी चाहिए।",
          signals: [
            { value: "150-300 फुट", label: "गहराई रेंज" },
            { value: "₹4.8 लाख", label: "शुरुआती कीमत" },
            { value: "8-10 ली/दिन", label: "ईंधन खपत" },
          ],
          visualTitle: "पहली खरीद के लिए मजबूत विकल्प",
          visualLines: [
            "फार्म और हल्के फील्ड काम के लिए कम रनिंग कॉस्ट वाला मॉडल।",
            "मेंटेनेंस आसान और स्पेयर जल्दी उपलब्ध।",
            "जब portability और budget दोनों अहम हों तब यह बेहतर फिट है।",
          ],
        },
        stripItems: [
          { value: "22 HP", label: "पावर", note: "किर्लोस्कर डीजल इंजन" },
          { value: "4-6 इंच", label: "बोर व्यास", note: "सामान्य ट्यूबवेल काम के लिए" },
          { value: "पोर्टेबल", label: "फील्ड सेटअप", note: "आसान ट्रांसपोर्ट और तैनाती" },
          { value: "1-2 वर्ष", label: "वारंटी", note: "फैक्टरी सपोर्ट के साथ" },
        ],
        summary: {
          title: "यह मशीन किनके लिए सही है",
          paragraphs: [
            "22 HP मॉडल ASR लाइनअप का सबसे आसान एंट्री पॉइंट है। यह उन खरीदारों के लिए सही है जिन्हें भरोसेमंद ड्रिलिंग चाहिए लेकिन भारी निवेश नहीं करना है।",
            "कई किसान और शुरुआती ठेकेदार इसी मॉडल से शुरुआत करते हैं क्योंकि इसमें कीमत, गहराई और उपयोग की सरलता का अच्छा संतुलन मिलता है।",
          ],
          bullets: [
            "चिकनी मिट्टी, रेतीली मिट्टी और हल्की फॉर्मेशन के लिए उपयुक्त",
            "बड़े मॉडल की तुलना में कम दैनिक ईंधन खर्च",
            "कम काम प्रति माह वाले खरीदार के लिए तेज ROI",
          ],
          visualLabel: "मशीन फोटो स्लॉट",
        },
        buyersTitle: "किन खरीदारों के लिए सही",
        buyers: [
          {
            title: "किसान",
            desc: "सिंचाई जरूरत वाले ऐसे खरीदार जो अपनी ड्रिलिंग क्षमता चाहते हैं लेकिन contractor-level खर्च नहीं करना चाहते।",
          },
          {
            title: "छोटे ठेकेदार",
            desc: "ऐसी टीमों के लिए उपयोगी जो पहली मशीन खरीद के साथ स्थानीय बोरिंग काम शुरू करना चाहते हैं।",
          },
          {
            title: "साझा गांव प्रोजेक्ट",
            desc: "उन क्षेत्रों के लिए किफायती विकल्प जहां गहराई की जरूरत मध्यम स्तर तक रहती है।",
          },
        ],
        advantagesTitle: "लोग इसे क्यों चुनते हैं",
        advantages: [
          {
            title: "किफायती और जल्दी recover होने वाला",
            desc: "कीमत और ईंधन खपत इसे ऐसा मॉडल बनाते हैं जिसे चलाना और लागत वापस निकालना ज्यादा आसान होता है।",
          },
          {
            title: "चलाने और maintain करने में आसान",
            desc: "स्थानीय टीमों के लिए इसे समझना, maintain करना और लगातार काम में रखना अपेक्षाकृत सरल है।",
          },
          {
            title: "फील्ड में आसान व्यवहार",
            desc: "हल्का सेटअप होने के कारण इसे बड़े मॉडल की तुलना में ट्रांसपोर्ट और सेट करना आसान रहता है।",
          },
        ],
        specsTitle: "टेक्निकल और ownership overview",
        specsSubtitle:
          "यह सेक्शन लंबे technical wall की जगह खरीद से जुड़े सबसे जरूरी तथ्य साफ दिखाता है।",
        specGroups: [
          {
            title: "पावर और ड्रिलिंग",
            items: [
              { label: "इंजन", value: baseModels.submersible22.engine },
              { label: "गहराई", value: `${baseModels.submersible22.minDepth}-${baseModels.submersible22.maxDepth}` },
              { label: "व्यास", value: baseModels.submersible22.diameter },
              { label: "टॉर्क", value: baseModels.submersible22.torque },
            ],
          },
          {
            title: "ownership profile",
            items: [
              { label: "कीमत", value: baseModels.submersible22.price },
              { label: "ईंधन / दिन", value: baseModels.submersible22.fuelPerDay },
              { label: "किसके लिए", value: "किसान, छोटे ठेकेदार" },
              { label: "मुख्य लाभ", value: "कम रनिंग कॉस्ट और आसान portability" },
            ],
          },
        ],
        testimonialsTitle: "उपयोगकर्ता सबसे पहले क्या महसूस करते हैं",
        testimonialsSubtitle:
          "इस मॉडल के बारे में सबसे ज्यादा तारीफ ईंधन बचत, आसान उपयोग और तेज सपोर्ट को लेकर मिलती है।",
        testimonials: [
          {
            name: "राजेश",
            location: "कानपुर जिला",
            role: "किसान",
            text: "22 HP ने मुझे अपनी बोरिंग क्षमता दी, लेकिन बड़े contractor budget में नहीं धकेला। ईंधन खर्च काबू में रहता है और मशीन संभालना आसान है।",
            rating: 5,
            project: "फार्म सिंचाई बोरिंग",
          },
          {
            name: "अमित",
            location: "लखनऊ",
            role: "छोटे ठेकेदार",
            text: "मैंने 22 HP से काम शुरू किया और शुरुआती jobs बिना ज्यादा maintenance stress के चल पाईं। कानपुर से support भी अच्छा मिला।",
            rating: 5,
            project: "शुरुआती ठेकेदार सेटअप",
          },
        ],
        faqTitle: "22 HP के बारे में आम सवाल",
        faqs: [
          {
            question: "क्या 22 HP हर साइट पर 300 फुट तक जा सकता है?",
            answer:
              "हर साइट पर नहीं। मिट्टी और फॉर्मेशन पर निर्भर करता है। अच्छी मिट्टी में ऊपरी रेंज मिल सकती है, जबकि कठिन परतों में practical depth कम हो सकती है।",
          },
          {
            question: "क्या यह पहली बार खरीदने वालों के लिए सही है?",
            answer:
              "हाँ। यह लाइनअप का सबसे ownership-friendly मॉडल है, खासकर किसानों और छोटे ठेकेदारों के लिए।",
          },
          {
            question: "ईंधन खर्च कितना रहेगा?",
            answer:
              "लगातार ड्रिलिंग में लगभग 8-10 लीटर/दिन मान सकते हैं, हालांकि वास्तविक खपत मिट्टी और काम के घंटों पर निर्भर करेगी।",
          },
          {
            question: "क्या इंस्टॉलेशन और ट्रेनिंग मिलती है?",
            answer:
              "हाँ। इंस्टॉलेशन गाइडेंस और ऑपरेटर onboarding support का हिस्सा है ताकि मशीन आत्मविश्वास के साथ शुरू की जा सके।",
          },
        ],
        modelsTitle: "पूरी ASR लाइनअप की तुलना करें",
        modelsSubtitle:
          "नीचे देखें कि कब 22 HP सही विकल्प है और कब खरीदार को बड़े मॉडल की तरफ जाना चाहिए।",
        cta: {
          headline: "जानना चाहते हैं कि आपकी मिट्टी और गहराई के लिए 22 HP पर्याप्त है या नहीं?",
          subheadline:
            "अपनी लोकेशन, अपेक्षित गहराई और मिट्टी की जानकारी व्हाट्सऐप पर भेजें। हम ईमानदारी से बताएंगे कि 22 HP सही रहेगा या 30 HP लेना बेहतर होगा।",
        },
      },
    },
  },
  {
    slug: "30-hp-hydraulic",
    priceValue: "580000",
    imageUrl: createDummyImage("30 HP Hydraulic"),
    localeContent: {
      en: {
        pageTitle: "30 HP Hydraulic Boring Machine | ASR Drillers",
        pageDescription:
          "30 HP hydraulic boring machine for contractors and deeper drilling work. Better torque, variable control, and stronger performance in harder soil conditions.",
        breadcrumbLabel: "30 HP Hydraulic",
        hero: {
          eyebrow: "Contractor-grade hydraulic drilling system",
          title: "30 HP Hydraulic Boring Machine for Tougher Ground and Higher Output",
          description:
            "This is the lineup choice for buyers who want more depth, more control, and a machine that can support a serious drilling business. It is built for mixed soil, harder formations, and higher-value jobs.",
          primaryActionLabel: "Ask for Contractor Pricing",
          secondaryActionLabel: "Talk to Sales",
          whatsappMessage:
            "Hi! I want details about the 30 HP Hydraulic boring machine.",
          signals: [
            { value: "200-400 ft", label: "Depth Range" },
            { value: "₹5.8 Lakh", label: "Starting Price" },
            { value: "12-14 L/day", label: "Fuel Use" },
          ],
          visualTitle: "Built for higher-value boring work",
          visualLines: [
            "Better control for changing soil conditions and contractor jobs.",
            "Higher torque and a more serious output profile than the 22 HP.",
            "A strong middle ground before moving to maximum-depth heavy-duty setups.",
          ],
        },
        stripItems: [
          { value: "30 HP", label: "Power", note: "Kirloskar diesel engine" },
          { value: "6-10 inch", label: "Bore Diameter", note: "For larger and deeper work" },
          { value: "Hydraulic", label: "Control Type", note: "Better adjustment during drilling" },
          { value: "24/7", label: "Support", note: "Fast response from the factory team" },
        ],
        summary: {
          title: "Why contractors move up to this model",
          paragraphs: [
            "The 30 HP Hydraulic exists for buyers who have outgrown entry-level boring or who know from the start that their business depends on higher output and better control.",
            "It is the practical contractor model in the lineup: strong enough for tougher jobs, but still balanced enough to remain attractive on ownership cost and versatility.",
          ],
          bullets: [
            "A better fit for mixed soil and harder layers",
            "Supports stronger day-to-day contractor economics",
            "Ideal for buyers who need more confidence in difficult drilling conditions",
          ],
          visualLabel: "Dummy hydraulic machine photo slot",
        },
        buyersTitle: "Best fit buyers",
        buyers: [
          {
            title: "Active contractors",
            desc: "A clear fit for businesses doing recurring boring jobs and needing a more serious machine than the 22 HP.",
          },
          {
            title: "Harder-soil operators",
            desc: "Useful for terrain where clay, rock, and changing formations demand more torque and more control.",
          },
          {
            title: "Deeper project work",
            desc: "Strong for buyers targeting deeper wells and higher-value contracts without stepping all the way to the heaviest setup.",
          },
        ],
        advantagesTitle: "Why buyers step up to hydraulic",
        advantages: [
          {
            title: "Better control in changing formations",
            desc: "Hydraulic behavior helps the operator adapt more confidently when the soil condition changes across depth bands.",
          },
          {
            title: "More capable contractor economics",
            desc: "The stronger output profile helps justify the higher purchase price by supporting bigger and more demanding jobs.",
          },
          {
            title: "Balanced upgrade path",
            desc: "It gives buyers a major step up from 22 HP performance without jumping immediately to the largest and costliest model.",
          },
        ],
        specsTitle: "Technical and ownership overview",
        specsSubtitle:
          "This summary keeps the most decision-relevant data visible: output, running profile, and where the machine creates business value.",
        specGroups: [
          {
            title: "Power and drilling",
            items: [
              { label: "Engine", value: baseModels.hydraulic30.engine },
              { label: "Depth Band", value: `${baseModels.hydraulic30.minDepth}-${baseModels.hydraulic30.maxDepth}` },
              { label: "Diameter", value: baseModels.hydraulic30.diameter },
              { label: "Torque", value: baseModels.hydraulic30.torque },
            ],
          },
          {
            title: "Ownership profile",
            items: [
              { label: "Price", value: baseModels.hydraulic30.price },
              { label: "Fuel / Day", value: baseModels.hydraulic30.fuelPerDay },
              { label: "Best For", value: "Contractors and deeper drilling jobs" },
              { label: "Core Benefit", value: "More depth, more control, stronger contractor use case" },
            ],
          },
        ],
        testimonialsTitle: "Why contractors like the 30 HP",
        testimonialsSubtitle:
          "Feedback usually focuses on better control, stronger drilling confidence, and the ability to take on more serious jobs.",
        testimonials: [
          {
            name: "Rajesh K.",
            location: "Rajasthan",
            role: "Drilling Contractor",
            text: "The 30 HP hydraulic gave me the confidence to take harder-ground work that I avoided before. It feels like the right machine for real contractor growth.",
            rating: 5,
            project: "Rocky-terrain drilling jobs",
          },
          {
            name: "Amar",
            location: "Madhya Pradesh",
            role: "Project Engineer",
            text: "What stands out is consistency. The machine handles mixed conditions better, and the overall control profile makes the work feel more professional.",
            rating: 5,
            project: "Multi-site irrigation work",
          },
        ],
        faqTitle: "Common questions about the 30 HP",
        faqs: [
          {
            question: "Why should I choose hydraulic over a simpler machine?",
            answer:
              "Hydraulic control gives buyers better handling across changing formations and a stronger contractor-grade operating profile.",
          },
          {
            question: "Is this model the right step up from the 22 HP?",
            answer:
              "Yes, if your work is moving toward deeper boring, harder formations, or a more professional contractor workflow with stronger output expectations.",
          },
          {
            question: "What is the daily fuel profile?",
            answer:
              "Expect around 12-14 liters per day in continuous drilling conditions, with actual usage varying by formation and work style.",
          },
          {
            question: "Can you help decide between 30 HP and 38 HP?",
            answer:
              "Yes. Share your target depth, soil condition, and expected workload, and we can help decide if the 30 HP is enough or if you should move to a heavier model.",
          },
        ],
        modelsTitle: "Compare the full ASR lineup",
        modelsSubtitle:
          "Use the comparison table to judge whether the 30 HP is the right business model for your workload or if another machine fits better.",
        cta: {
          headline: "Need to know whether the 30 HP is the right contractor machine for your jobs?",
          subheadline:
            "Send the type of soil, expected depth, and how many jobs you handle in a month. We can help you compare the 30 HP against the 22 HP and 38 HP honestly.",
        },
      },
      hi: {
        pageTitle: "30 HP हाइड्रोलिक बोरिंग मशीन | ASR ड्रिलर्स",
        pageDescription:
          "30 HP हाइड्रोलिक बोरिंग मशीन ठेकेदारों और गहरी ड्रिलिंग वाले काम के लिए। ज्यादा टॉर्क, बेहतर कंट्रोल और कठिन मिट्टी में मजबूत प्रदर्शन।",
        breadcrumbLabel: "30 HP हाइड्रोलिक",
        hero: {
          eyebrow: "कॉन्ट्रैक्टर-ग्रेड हाइड्रोलिक सिस्टम",
          title: "कठिन जमीन और ज्यादा आउटपुट के लिए 30 HP हाइड्रोलिक बोरिंग मशीन",
          description:
            "यह मॉडल उन खरीदारों के लिए है जिन्हें अधिक गहराई, बेहतर कंट्रोल और ऐसा सेटअप चाहिए जो गंभीर ड्रिलिंग बिजनेस को सपोर्ट कर सके।",
          primaryActionLabel: "कॉन्ट्रैक्टर कीमत पूछें",
          secondaryActionLabel: "सेल्स टीम से बात करें",
          whatsappMessage:
            "नमस्ते! मुझे 30 HP हाइड्रोलिक बोरिंग मशीन के बारे में जानकारी चाहिए।",
          signals: [
            { value: "200-400 फुट", label: "गहराई रेंज" },
            { value: "₹5.8 लाख", label: "शुरुआती कीमत" },
            { value: "12-14 ली/दिन", label: "ईंधन खपत" },
          ],
          visualTitle: "बड़े और कठिन काम के लिए बना मॉडल",
          visualLines: [
            "बदलती मिट्टी और कॉन्ट्रैक्टर jobs के लिए बेहतर कंट्रोल।",
            "22 HP की तुलना में ज्यादा टॉर्क और मजबूत आउटपुट।",
            "सबसे heavy model पर जाने से पहले यह मजबूत upgrade path है।",
          ],
        },
        stripItems: [
          { value: "30 HP", label: "पावर", note: "किर्लोस्कर डीजल इंजन" },
          { value: "6-10 इंच", label: "बोर व्यास", note: "बड़े और गहरे काम के लिए" },
          { value: "हाइड्रोलिक", label: "कंट्रोल सिस्टम", note: "ड्रिलिंग के दौरान बेहतर adjustment" },
          { value: "24/7", label: "सपोर्ट", note: "फैक्टरी टीम से तेज response" },
        ],
        summary: {
          title: "ठेकेदार इस मॉडल पर क्यों आते हैं",
          paragraphs: [
            "30 HP हाइड्रोलिक उन खरीदारों के लिए है जो entry-level boring से आगे बढ़ चुके हैं या शुरुआत से ही ज्यादा capable मशीन चाहते हैं।",
            "यह लाइनअप का practical contractor model है: 22 HP से काफी मजबूत, लेकिन ownership cost और versatility के लिहाज से अभी भी संतुलित।",
          ],
          bullets: [
            "मिश्रित मिट्टी और कठिन परतों के लिए बेहतर",
            "कॉन्ट्रैक्टर बिजनेस के लिए मजबूत economics",
            "ज्यादा challenging drilling conditions में ज्यादा भरोसा",
          ],
          visualLabel: "हाइड्रोलिक मशीन फोटो स्लॉट",
        },
        buyersTitle: "किन खरीदारों के लिए सही",
        buyers: [
          {
            title: "सक्रिय ठेकेदार",
            desc: "उन बिजनेस के लिए अच्छा विकल्प जो नियमित boring jobs कर रहे हैं और 22 HP से ऊपर का setup चाहते हैं।",
          },
          {
            title: "कठिन मिट्टी वाले ऑपरेटर",
            desc: "ऐसी जगहों के लिए उपयोगी जहां चिकनी मिट्टी, पत्थर और बदलती फॉर्मेशन ज्यादा कंट्रोल मांगती है।",
          },
          {
            title: "गहरे प्रोजेक्ट वाले खरीदार",
            desc: "ऐसे काम के लिए बेहतर जहां ज्यादा गहराई और अधिक मूल्य वाले कॉन्ट्रैक्ट चाहिए हों।",
          },
        ],
        advantagesTitle: "लोग हाइड्रोलिक पर क्यों जाते हैं",
        advantages: [
          {
            title: "बदलती फॉर्मेशन में बेहतर कंट्रोल",
            desc: "हाइड्रोलिक व्यवहार ऑपरेटर को depth के साथ बदलती मिट्टी में ज्यादा आत्मविश्वास देता है।",
          },
          {
            title: "कॉन्ट्रैक्टर economics बेहतर",
            desc: "मजबूत आउटपुट profile ज्यादा मांग वाले jobs लेने में मदद करती है, जिससे खरीद का औचित्य मजबूत होता है।",
          },
          {
            title: "संतुलित upgrade path",
            desc: "यह 22 HP से बड़ा कदम है, लेकिन सबसे बड़े और महंगे मॉडल तक जाने से पहले का समझदार विकल्प है।",
          },
        ],
        specsTitle: "टेक्निकल और ownership overview",
        specsSubtitle:
          "यह सेक्शन आउटपुट, रनिंग प्रोफाइल और बिजनेस वैल्यू जैसे निर्णय वाले डेटा को साफ दिखाता है।",
        specGroups: [
          {
            title: "पावर और ड्रिलिंग",
            items: [
              { label: "इंजन", value: baseModels.hydraulic30.engine },
              { label: "गहराई", value: `${baseModels.hydraulic30.minDepth}-${baseModels.hydraulic30.maxDepth}` },
              { label: "व्यास", value: baseModels.hydraulic30.diameter },
              { label: "टॉर्क", value: baseModels.hydraulic30.torque },
            ],
          },
          {
            title: "ownership profile",
            items: [
              { label: "कीमत", value: baseModels.hydraulic30.price },
              { label: "ईंधन / दिन", value: baseModels.hydraulic30.fuelPerDay },
              { label: "किसके लिए", value: "ठेकेदार और गहरे ड्रिलिंग काम" },
              { label: "मुख्य लाभ", value: "ज्यादा गहराई, ज्यादा कंट्रोल, मजबूत contractor use case" },
            ],
          },
        ],
        testimonialsTitle: "ठेकेदार 30 HP को क्यों पसंद करते हैं",
        testimonialsSubtitle:
          "सबसे ज्यादा feedback बेहतर कंट्रोल, ज्यादा drilling confidence और बड़े jobs लेने की क्षमता पर आता है।",
        testimonials: [
          {
            name: "राजेश के.",
            location: "राजस्थान",
            role: "ड्रिलिंग ठेकेदार",
            text: "30 HP हाइड्रोलिक ने मुझे कठिन जमीन वाले काम लेने का भरोसा दिया। यह सच में contractor growth के लिए सही मशीन लगती है।",
            rating: 5,
            project: "पथरीली जमीन के jobs",
          },
          {
            name: "अमर",
            location: "मध्य प्रदेश",
            role: "प्रोजेक्ट इंजीनियर",
            text: "सबसे अच्छा पहलू इसकी consistency है। mixed conditions में मशीन बेहतर behave करती है और पूरा काम ज्यादा professional लगता है।",
            rating: 5,
            project: "मल्टी-साइट सिंचाई कार्य",
          },
        ],
        faqTitle: "30 HP के बारे में आम सवाल",
        faqs: [
          {
            question: "साधारण मशीन की जगह हाइड्रोलिक क्यों लें?",
            answer:
              "हाइड्रोलिक कंट्रोल बदलती फॉर्मेशन में बेहतर handling देता है और contractor-grade operating profile तैयार करता है।",
          },
          {
            question: "क्या 22 HP से आगे बढ़ने के लिए यह सही मॉडल है?",
            answer:
              "हाँ, अगर आपका काम ज्यादा गहराई, कठिन मिट्टी या अधिक professional contractor workflow की तरफ बढ़ रहा है।",
          },
          {
            question: "दैनिक ईंधन प्रोफाइल क्या रहेगा?",
            answer:
              "लगातार ड्रिलिंग में लगभग 12-14 लीटर/दिन मान सकते हैं, हालांकि वास्तविक खपत मिट्टी और काम के तरीके पर निर्भर करेगी।",
          },
          {
            question: "क्या आप 30 HP और 38 HP के बीच फैसला करने में मदद करेंगे?",
            answer:
              "हाँ। अपनी target depth, मिट्टी की condition और monthly workload भेजें, हम बताएंगे कि 30 HP पर्याप्त है या heavy model लेना चाहिए।",
          },
        ],
        modelsTitle: "पूरी ASR लाइनअप की तुलना करें",
        modelsSubtitle:
          "टेबल देखकर तय करें कि 30 HP आपके workload के लिए सही बिजनेस मॉडल है या कोई दूसरा मॉडल ज्यादा उपयुक्त है।",
        cta: {
          headline: "जानना चाहते हैं कि 30 HP आपके काम के लिए सही contractor machine है या नहीं?",
          subheadline:
            "मिट्टी का प्रकार, अपेक्षित गहराई और महीने के jobs की संख्या भेजें। हम 22 HP, 30 HP और 38 HP के बीच साफ तुलना करके सलाह देंगे।",
        },
      },
    },
  },
] as const;

export type ProductPage = (typeof productPages)[number];
