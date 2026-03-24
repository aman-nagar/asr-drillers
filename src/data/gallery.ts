import { commonData } from "./locations-i18n.js";

function createDummyImage(label: string) {
  return `https://dummyimage.com/1200x800/0f172a/e2e8f0&text=${encodeURIComponent(label).replace(/%20/g, "+")}`;
}

export const galleryContentByLocale = {
  en: {
    pageTitle: "Gallery | ASR Drillers Boring Machines",
    pageDescription:
      "Explore ASR Drillers machine visuals, factory process frames, and field installation examples. Dummy image URLs are ready to be swapped with your final photos later.",
    hero: {
      eyebrow: "Machine gallery and field proof",
      title: "A Better Gallery Structure for Machines, Factory Work, and Site Installations",
      description:
        "This gallery is now arranged like a sales asset instead of a placeholder wall. You can replace the dummy URLs later with real machine, workshop, and project images without changing the layout.",
      primaryActionLabel: "Share Photos on WhatsApp",
      secondaryActionLabel: "Call the Team",
      whatsappMessage:
        "Hi! I want to review machine photos and project examples.",
      signals: [
        { value: "8", label: "Showcase Frames" },
        { value: "3", label: "Machine Categories" },
        { value: "24/7", label: "Photo Requests on WhatsApp" },
      ],
      visualTitle: "Gallery-ready content system",
      visualLines: [
        "Dummy media URLs can be replaced one by one with final factory and field visuals.",
        "Sections are now grouped by machine, factory process, and installation proof.",
        "The page is designed to support both English and Hindi without separate layout drift.",
      ],
    },
    stripItems: [
      {
        value: "Machines",
        label: "Product Focus",
        note: "Model-led visuals for buying confidence",
      },
      {
        value: "Factory",
        label: "Trust Layer",
        note: "Show the build environment and QA process",
      },
      {
        value: "Installations",
        label: "Field Proof",
        note: "Demonstrate delivery, setup, and drilling output",
      },
      {
        value: "Reusable",
        label: "Content System",
        note: "Easy to update when final photos arrive",
      },
    ],
    categorySection: {
      title: "Organize Media Like a Sales Conversation",
      subtitle:
        "Instead of mixing everything together, the gallery now guides visitors from machine interest to production trust to field evidence.",
      chips: [
        {
          title: "Machines",
          value: "3 key frames",
          description: "Show the product lineup clearly before specs and pricing.",
        },
        {
          title: "Factory",
          value: "3 trust frames",
          description: "Capture workshop setup, fabrication, and testing activity.",
        },
        {
          title: "Installations",
          value: "2 field frames",
          description: "Prove that delivery, setup, and drilling happen in real conditions.",
        },
      ],
    },
    showcaseSection: {
      title: "Showcase Frames",
      subtitle:
        "These cards use dummy image URLs today, but the structure is ready for polished machine and site photography.",
      items: [
        {
          title: "22 HP Submersible Rig",
          category: "Machine",
          summary: "Entry-to-mid field setup for farmers and smaller contractors.",
          imageUrl: createDummyImage("22 HP Machine Frame"),
          featured: true,
        },
        {
          title: "30 HP Hydraulic Unit",
          category: "Machine",
          summary: "The popular contractor model for deeper work and tougher ground.",
          imageUrl: createDummyImage("30 HP Hydraulic Unit"),
        },
        {
          title: "38 HP Heavy-Duty Build",
          category: "Machine",
          summary: "Position your highest-output machine as the premium visual anchor.",
          imageUrl: createDummyImage("38 HP Heavy Duty Build"),
        },
        {
          title: "Workshop Fabrication Zone",
          category: "Factory",
          summary: "Use this slot for welding, assembly, and in-progress machine frames.",
          imageUrl: createDummyImage("Factory Fabrication Zone"),
        },
        {
          title: "Quality Testing Table",
          category: "Factory",
          summary: "Show testing, inspection, and final checks before dispatch.",
          imageUrl: createDummyImage("Quality Testing Table"),
        },
        {
          title: "On-Site Installation Visit",
          category: "Installation",
          summary: "Replace with setup photos from real customer locations.",
          imageUrl: createDummyImage("On Site Installation"),
          featured: true,
        },
        {
          title: "Dispatch and Delivery",
          category: "Installation",
          summary: "Use this to show transport, unloading, and machine handover.",
          imageUrl: createDummyImage("Dispatch and Delivery"),
        },
        {
          title: "Drilling in Progress",
          category: "Field Proof",
          summary: "Add the final action shot that proves depth and field readiness.",
          imageUrl: createDummyImage("Drilling in Progress"),
        },
      ],
    },
    modelsSection: {
      title: "Machine Visual Cards",
      subtitle:
        "These cards now match the rest of the design system and keep model details consistent with the shared specs data.",
      quoteLabel: "Ask for this model",
      items: [
        {
          name: commonData.models[0].name,
          price: commonData.models[0].price,
          depth: commonData.models[0].maxDepth,
          bestFor: commonData.models[0].bestFor,
          highlights: [
            "Fuel-efficient for smaller projects",
            "Portable field setup",
            "A strong starting point for owner-operators",
          ],
          imageUrl: createDummyImage("22 HP Model Card"),
        },
        {
          name: commonData.models[1].name,
          price: commonData.models[1].price,
          depth: commonData.models[1].maxDepth,
          bestFor: commonData.models[1].bestFor,
          highlights: [
            "Most versatile contractor option",
            "Handles tougher formations with confidence",
            "Strong balance of power and investment",
          ],
          imageUrl: createDummyImage("30 HP Model Card"),
        },
        {
          name: commonData.models[2].name,
          price: commonData.models[2].price,
          depth: commonData.models[2].maxDepth,
          bestFor: commonData.models[2].bestFor,
          highlights: [
            "Premium output for demanding jobs",
            "Designed for bigger depth requirements",
            "Best choice when maximum capability matters",
          ],
          imageUrl: createDummyImage("38 HP Model Card"),
        },
      ],
    },
    storiesSection: {
      title: "What Final Photos Should Prove",
      subtitle:
        "The strongest gallery images are not just pretty. They answer buyer questions about trust, delivery, and performance.",
      items: [
        {
          title: "Factory Confidence",
          quote:
            "Add 2-3 sharp workshop photos that show clean fabrication, stored parts, and active machine assembly.",
          author: "Use for trust building",
          tag: "Production proof",
        },
        {
          title: "Installation Confidence",
          quote:
            "Capture unloading, setup, and operator orientation so buyers can see what support looks like after purchase.",
          author: "Use for conversion support",
          tag: "Service proof",
        },
        {
          title: "Field Confidence",
          quote:
            "Add one strong drilling-action frame with soil or site context to prove the machines are not just showroom products.",
          author: "Use for decision making",
          tag: "Performance proof",
        },
      ],
    },
    cta: {
      headline: "Want this gallery connected to your real machine photos next?",
      subheadline:
        "Send your factory, dispatch, and installation photos on WhatsApp and we can keep this layout while replacing each dummy image URL cleanly.",
    },
  },
  hi: {
    pageTitle: "गैलरी | ASR ड्रिलर्स बोरिंग मशीनें",
    pageDescription:
      "ASR ड्रिलर्स की मशीनें, फैक्टरी प्रक्रिया और फील्ड इंस्टॉलेशन उदाहरण देखें। अभी डमी इमेज URL लगे हैं, जिन्हें बाद में आपकी असली फोटो से बदला जा सकता है।",
    hero: {
      eyebrow: "मशीन गैलरी और फील्ड प्रूफ",
      title: "मशीन, फैक्टरी और साइट इंस्टॉलेशन के लिए बेहतर गैलरी संरचना",
      description:
        "यह गैलरी अब सिर्फ placeholder wall नहीं है। इसे ऐसे व्यवस्थित किया गया है कि बाद में असली फोटो जोड़ने पर भी लेआउट और बिक्री flow मजबूत बना रहे।",
      primaryActionLabel: "फोटो व्हाट्सऐप पर भेजें",
      secondaryActionLabel: "टीम को कॉल करें",
      whatsappMessage:
        "नमस्ते! मुझे मशीन फोटो और प्रोजेक्ट उदाहरण देखने हैं।",
      signals: [
        { value: "8", label: "शोकेस फ्रेम" },
        { value: "3", label: "मीडिया श्रेणियां" },
        { value: "24/7", label: "व्हाट्सऐप रिस्पॉन्स" },
      ],
      visualTitle: "गैलरी-रेडी कंटेंट सिस्टम",
      visualLines: [
        "अभी डमी मीडिया URL हैं, जिन्हें बाद में फैक्टरी और फील्ड फोटो से आसानी से बदला जा सकता है।",
        "सेक्शन अब मशीन, फैक्टरी प्रक्रिया और इंस्टॉलेशन प्रूफ के हिसाब से समूहित हैं।",
        "एक ही लेआउट अंग्रेजी और हिंदी दोनों के लिए काम करता है।",
      ],
    },
    stripItems: [
      {
        value: "मशीनें",
        label: "प्रोडक्ट फोकस",
        note: "खरीदार को मॉडल स्पष्ट दिखाएं",
      },
      {
        value: "फैक्टरी",
        label: "ट्रस्ट लेयर",
        note: "निर्माण और QC प्रक्रिया दिखाएं",
      },
      {
        value: "इंस्टॉलेशन",
        label: "फील्ड प्रूफ",
        note: "डिलीवरी, सेटअप और काम का सबूत",
      },
      {
        value: "रीयूजेबल",
        label: "कंटेंट सिस्टम",
        note: "फोटो आने पर जल्दी अपडेट करें",
      },
    ],
    categorySection: {
      title: "मीडिया को बिक्री बातचीत की तरह व्यवस्थित करें",
      subtitle:
        "अब गैलरी सब कुछ मिलाकर नहीं दिखाती। यह पहले मशीन, फिर फैक्टरी भरोसा, फिर फील्ड प्रूफ दिखाकर उपयोगकर्ता को आगे बढ़ाती है।",
      chips: [
        {
          title: "मशीनें",
          value: "3 मुख्य फ्रेम",
          description: "स्पेक्स और कीमत से पहले मॉडल लाइनअप साफ दिखाएं।",
        },
        {
          title: "फैक्टरी",
          value: "3 ट्रस्ट फ्रेम",
          description: "वर्कशॉप, निर्माण और टेस्टिंग गतिविधि दिखाएं।",
        },
        {
          title: "इंस्टॉलेशन",
          value: "2 फील्ड फ्रेम",
          description: "डिलीवरी, सेटअप और असली साइट उपयोग को साबित करें।",
        },
      ],
    },
    showcaseSection: {
      title: "शोकेस फ्रेम",
      subtitle:
        "आज यहां डमी इमेज URL हैं, लेकिन पूरी संरचना मशीन और साइट फोटो के लिए तैयार है।",
      items: [
        {
          title: "22 HP सबमर्सिबल रिग",
          category: "मशीन",
          summary: "किसानों और छोटे ठेकेदारों के लिए उपयोगी शुरुआती सेटअप।",
          imageUrl: createDummyImage("22 HP Hindi Gallery"),
          featured: true,
        },
        {
          title: "30 HP हाइड्रोलिक यूनिट",
          category: "मशीन",
          summary: "गहराई और कठिन जमीन वाले काम के लिए लोकप्रिय मॉडल।",
          imageUrl: createDummyImage("30 HP Hindi Gallery"),
        },
        {
          title: "38 HP हेवी-ड्यूटी बिल्ड",
          category: "मशीन",
          summary: "प्रीमियम क्षमता वाले मॉडल को हाई-इम्पैक्ट विजुअल की तरह दिखाएं।",
          imageUrl: createDummyImage("38 HP Hindi Gallery"),
        },
        {
          title: "वर्कशॉप फैब्रिकेशन ज़ोन",
          category: "फैक्टरी",
          summary: "यहां वेल्डिंग, असेम्बली और प्रोग्रेस शॉट्स रखें।",
          imageUrl: createDummyImage("Workshop Fabrication Hindi"),
        },
        {
          title: "क्वालिटी टेस्टिंग टेबल",
          category: "फैक्टरी",
          summary: "डिस्पैच से पहले टेस्टिंग और निरीक्षण के फोटो जोड़ें।",
          imageUrl: createDummyImage("Quality Testing Hindi"),
        },
        {
          title: "ऑन-साइट इंस्टॉलेशन विजिट",
          category: "इंस्टॉलेशन",
          summary: "ग्राहक साइट पर सेटअप और सपोर्ट दिखाने के लिए यह स्लॉट रखें।",
          imageUrl: createDummyImage("On Site Installation Hindi"),
          featured: true,
        },
        {
          title: "डिस्पैच और डिलीवरी",
          category: "इंस्टॉलेशन",
          summary: "परिवहन, अनलोडिंग और हैंडओवर के फोटो यहां रखें।",
          imageUrl: createDummyImage("Dispatch Delivery Hindi"),
        },
        {
          title: "ड्रिलिंग प्रगति में",
          category: "फील्ड प्रूफ",
          summary: "असली मिट्टी और साइट संदर्भ के साथ एक मजबूत एक्शन फ्रेम जोड़ें।",
          imageUrl: createDummyImage("Drilling In Progress Hindi"),
        },
      ],
    },
    modelsSection: {
      title: "मशीन विजुअल कार्ड",
      subtitle:
        "ये कार्ड अब बाकी डिजाइन सिस्टम से मेल खाते हैं और साझा specs data के साथ consistent रहते हैं।",
      quoteLabel: "इस मॉडल के बारे में पूछें",
      items: [
        {
          name: "22 HP सबमर्सिबल",
          price: commonData.models[0].price,
          depth: commonData.models[0].maxDepth,
          bestFor: "किसान, छोटे ठेकेदार और हल्के काम",
          highlights: [
            "कम ईंधन और आसान उपयोग",
            "छोटे प्रोजेक्ट के लिए उपयुक्त",
            "शुरुआती खरीददार के लिए मजबूत विकल्प",
          ],
          imageUrl: createDummyImage("22 HP Hindi Model Card"),
        },
        {
          name: "30 HP हाइड्रोलिक",
          price: commonData.models[1].price,
          depth: commonData.models[1].maxDepth,
          bestFor: "कॉन्ट्रैक्टर और कठिन जमीन वाले काम",
          highlights: [
            "सबसे संतुलित कॉन्ट्रैक्टर मॉडल",
            "कठिन फॉर्मेशन में भरोसेमंद",
            "पावर और निवेश का अच्छा संतुलन",
          ],
          imageUrl: createDummyImage("30 HP Hindi Model Card"),
        },
        {
          name: "38 HP हेवी-ड्यूटी",
          price: commonData.models[2].price,
          depth: commonData.models[2].maxDepth,
          bestFor: "ज्यादा गहराई और भारी उपयोग वाले प्रोजेक्ट",
          highlights: [
            "मांग वाले काम के लिए प्रीमियम आउटपुट",
            "ज्यादा गहराई की जरूरत के लिए बेहतर",
            "जब अधिकतम क्षमता जरूरी हो तब सही चुनाव",
          ],
          imageUrl: createDummyImage("38 HP Hindi Model Card"),
        },
      ],
    },
    storiesSection: {
      title: "अंतिम फोटो क्या साबित करें",
      subtitle:
        "सबसे मजबूत गैलरी सिर्फ सुंदर नहीं होती, वह भरोसा, डिलीवरी और प्रदर्शन भी साबित करती है।",
      items: [
        {
          title: "फैक्टरी भरोसा",
          quote:
            "वर्कशॉप, पार्ट्स स्टोरेज और असेम्बली की 2-3 साफ फोटो जोड़ें ताकि खरीदार निर्माण क्षमता देख सके।",
          author: "ट्रस्ट बिल्डिंग के लिए",
          tag: "प्रोडक्शन प्रूफ",
        },
        {
          title: "इंस्टॉलेशन भरोसा",
          quote:
            "अनलोडिंग, सेटअप और ऑपरेटर ट्रेनिंग के फोटो दिखाएं ताकि बिक्री के बाद का समर्थन साफ दिखे।",
          author: "कन्वर्जन सपोर्ट के लिए",
          tag: "सर्विस प्रूफ",
        },
        {
          title: "फील्ड भरोसा",
          quote:
            "मिट्टी और साइट संदर्भ के साथ एक मजबूत drilling action फोटो जोड़ें ताकि मशीनें सिर्फ showroom product न लगें।",
          author: "निर्णय लेने के लिए",
          tag: "परफॉर्मेंस प्रूफ",
        },
      ],
    },
    cta: {
      headline: "अब इस गैलरी में आपकी असली मशीन फोटो जोड़नी हैं?",
      subheadline:
        "फैक्टरी, डिस्पैच और इंस्टॉलेशन फोटो व्हाट्सऐप पर भेजें। यही layout रखते हुए हम हर dummy image URL को आसानी से बदल सकते हैं।",
    },
  },
} as const;
