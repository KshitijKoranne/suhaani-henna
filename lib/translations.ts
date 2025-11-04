export type Language = 'en' | 'hi'

export interface Translations {
  // Navigation
  nav: {
    home: string
    products: string
    ourStory: string
    gallery: string
    contact: string
  }
  // Homepage
  home: {
    heroTitle: string
    heroSubtitle: string
    exploreProducts: string
    aboutSuhaani: string
    pureNaturalTitle: string
    pureNaturalSubtitle: string
    feature1Title: string
    feature1Description: string
    feature2Title: string
    feature2Description: string
    feature3Title: string
    feature3Description: string
    naturalDescription: string
    globalStandardsTitle: string
    globalStandardsDescription: string
    ecoFriendlyTitle: string
    ecoFriendlyDescription: string
    featuredProducts: string
    featuredProductsTitle: string
    product1Title: string
    product1Description: string
    product2Title: string
    product2Description: string
    product3Title: string
    product3Description: string
    product4Title: string
    product4Description: string
    viewProduct: string
    fromPlantTitle: string
    fromPlantDescription: string
    plantToPasteTitle: string
    plantToPasteDescription: string
    discoverOurStory: string
    discoverStory: string
    testimonialsTitle: string
    newsletterTitle: string
    newsletterDescription: string
    emailPlaceholder: string
    subscribe: string
  }
  // Products Page
  products: {
    heroTitle: string
    pageTitle: string
    pageDescription: string
    categories: string
    allProducts: string
    hairHenna: string
    bodyArtHenna: string
    hennaCones: string
    essentialOils: string
    hennaKits: string
    filterByPrice: string
    addToCart: string
    product1Name: string
    product1Desc: string
    product2Name: string
    product2Desc: string
    product3Name: string
    product3Desc: string
    product4Name: string
    product4Desc: string
    product5Name: string
    product5Desc: string
    product6Name: string
    product6Desc: string
  }
  // Our Story Page
  ourStory: {
    heroTitle: string
    heroSubtitle: string
    commitmentTitle: string
    commitmentPara1: string
    commitmentPara2: string
    promiseTitle: string
    promiseDescription: string
    naturalTitle: string
    naturalDescription: string
    globalTitle: string
    globalDescription: string
    ecoTitle: string
    ecoDescription: string
    qualityProcessTitle: string
    qualityProcessDescription: string
    sourcingTitle: string
    sourcingDescription: string
    dryingTitle: string
    dryingDescription: string
    grindingTitle: string
    grindingDescription: string
    siftingTitle: string
    siftingDescription: string
    qualityControlTitle: string
    qualityControlDescription: string
    packagingTitle: string
    packagingDescription: string
    plantToPasteTitle: string
    plantToPasteDescription: string
    ctaTitle: string
    ctaDescription: string
  }
  // Gallery Page
  gallery: {
    title: string
    description: string
    shareCreation: string
    filterAll: string
    filterCustomer: string
    filterBodyArt: string
    filterHairCare: string
    filterTattoos: string
    filterProfessional: string
  }
  // Contact Page
  contact: {
    title: string
    description: string
    formTitle: string
    nameLabel: string
    emailLabel: string
    subjectLabel: string
    messageLabel: string
    sendMessage: string
    contactInfoTitle: string
    contactInfoPlaceholder: string
    faqTitle: string
    faq1Question: string
    faq1Answer: string
    faq2Question: string
    faq2Answer: string
    faq3Question: string
    faq3Answer: string
    faq4Question: string
    faq4Answer: string
  }
  // Footer
  footer: {
    shopTitle: string
    bodyArt: string
    hairCare: string
    aftercare: string
    kits: string
    supportTitle: string
    contactUs: string
    faq: string
    shipping: string
    terms: string
    madeBy: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      ourStory: 'Our Story',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'Beauty in Every Leaf',
      heroSubtitle: 'Suhaani Henna is a leading manufacturer and supplier of premium-quality Mehndi products, known for natural ingredients, rich color payoff, and skin-safe formulation.',
      exploreProducts: 'Explore Products',
      aboutSuhaani: 'About Suhaani',
      pureNaturalTitle: 'Pure. Natural. Suhaani.',
      pureNaturalSubtitle: 'We are committed to providing you with the highest quality, all-natural henna for beautiful, safe, and authentic results.',
      feature1Title: '100% Natural Ingredients',
      feature1Description: 'Sourced from the finest henna plants, free from any harmful chemicals or additives.',
      feature2Title: 'Rich Color Payoff',
      feature2Description: 'Our finely sifted henna powder guarantees a deep, long-lasting stain.',
      feature3Title: 'Skin-Safe Formulation',
      feature3Description: 'Made with natural ingredients, gentle on your skin and hair.',
      naturalDescription: 'Sourced from the finest henna leaves, our products are 100% natural and chemical-free.',
      globalStandardsTitle: 'Global Standards',
      globalStandardsDescription: 'Meeting international quality benchmarks with every batch we produce.',
      ecoFriendlyTitle: 'Eco-Friendly',
      ecoFriendlyDescription: 'Sustainable packaging and practices that honor our planet.',
      featuredProducts: 'Featured Products',
      featuredProductsTitle: 'Featured Products',
      product1Title: 'Classic Henna Cones',
      product1Description: 'Ready-to-use cones for intricate body art.',
      product2Title: 'Herbal Hair Color Kit',
      product2Description: 'Nourish and color your hair naturally.',
      product3Title: 'Aftercare Balm',
      product3Description: 'Protect and deepen your henna stain.',
      product4Title: 'Essential Oil Blend',
      product4Description: "Enhance your henna's color and longevity.",
      viewProduct: 'View Product',
      fromPlantTitle: 'From Plant to Paste',
      fromPlantDescription: 'Our journey begins in the sun-drenched fields where the finest henna plants are grown. We honor the traditions passed down through generations, carefully harvesting and preparing each leaf to create a paste that is pure, potent, and perfect for your skin and hair. Our commitment to authenticity means you receive a product that is not just a cosmetic, but a piece of cultural heritage.',
      plantToPasteTitle: 'From Plant to Paste',
      plantToPasteDescription: 'Our journey begins in the sun-drenched fields where the finest henna plants are grown. We honor the traditions passed down through generations, carefully harvesting and preparing each leaf to create a paste that is pure, potent, and perfect for your skin and hair. Our commitment to authenticity means you receive a product that is not just a cosmetic, but a piece of cultural heritage.',
      discoverOurStory: 'Discover Our Story',
      discoverStory: 'Discover Our Story',
      testimonialsTitle: 'What Our Customers Say',
      newsletterTitle: 'Stay Updated',
      newsletterDescription: 'Subscribe to our newsletter for exclusive offers and henna tips.',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
    },
    products: {
      heroTitle: 'Discover the Art of Natural Beauty',
      pageTitle: 'Our Natural Henna Collection',
      pageDescription: 'Browse our range of 100% pure and natural henna products for hair and body art.',
      categories: 'Categories',
      allProducts: 'All Products',
      hairHenna: 'Hair Henna',
      bodyArtHenna: 'Body Art Henna',
      hennaCones: 'Henna Cones',
      essentialOils: 'Essential Oils',
      hennaKits: 'Henna Kits',
      filterByPrice: 'Filter by Price',
      addToCart: 'Add to Cart',
      product1Name: 'Suhaani Henna Powder',
      product1Desc: '100% pure, finely sifted Rajasthani henna.',
      product2Name: 'Suhaani Henna Paste',
      product2Desc: 'Freshly made with natural ingredients.',
      product3Name: 'Suhaani Henna Cones',
      product3Desc: 'Ready-to-use for intricate body art.',
      product4Name: 'Herbal Hair Care Oil',
      product4Desc: 'Nourishes & Strengthens',
      product5Name: 'Bridal Henna Kit',
      product5Desc: 'Complete Bridal Package',
      product6Name: 'Natural Hair Henna',
      product6Desc: 'For Rich Auburn Tones',
    },
    ourStory: {
      heroTitle: 'Our Story: The Heart of Suhaani Henna',
      heroSubtitle: 'From the finest leaves to your hands, discover our journey of purity, quality, and passion.',
      commitmentTitle: 'Our Commitment to Excellence',
      commitmentPara1: 'Welcome to Suhaani Henna, where tradition intertwines with modern elegance. Our journey began with a simple mission: to provide 100% pure, natural henna products that celebrate the timeless art of body adornment while ensuring unparalleled quality and customer satisfaction.',
      commitmentPara2: 'As a leading manufacturer and supplier, we meticulously source our henna from the finest leaves, cultivated in the most fertile regions. Each leaf is processed with the utmost care in state-of-the-art facilities, maintaining controlled temperatures to preserve its natural potency and rich dyeing properties. Our dedication extends to serving a diverse clientele, including wholesalers, retailers, beauty professionals, and export markets worldwide.',
      promiseTitle: 'Our Promise of Purity & Quality',
      promiseDescription: 'We adhere to strict manufacturing standards and international quality benchmarks, using eco-friendly packaging to honor our commitment to both our customers and the planet.',
      naturalTitle: '100% Natural',
      naturalDescription: 'Sourced from the finest henna leaves, free from any additives or harmful chemicals.',
      globalTitle: 'Global Standards',
      globalDescription: 'Meeting international quality benchmarks to serve our worldwide clientele.',
      ecoTitle: 'Eco-Friendly',
      ecoDescription: 'Utilizing sustainable practices and eco-friendly packaging for a better tomorrow.',
      qualityProcessTitle: 'From Plant to Paste: Our Purity Process',
      qualityProcessDescription: 'Our meticulous process ensures that every packet of Suhaani Henna delivers the richest color and purest quality. We combine ancient traditions with modern standards to bring you a product that is authentically natural and incredibly effective.',
      sourcingTitle: 'The Source: Hand-picked Leaves',
      sourcingDescription: "Our journey begins in the arid fields of Rajasthan, where the world's finest Lawsonia inermis plants grow. Our farmers, with generations of knowledge, select only the most vibrant leaves, ensuring the highest lawsone (natural dye) content. No pesticides or synthetic fertilizers are ever used.",
      dryingTitle: 'The Preparation: Natural Sun-Drying',
      dryingDescription: 'The harvested leaves are never treated with chemicals. They are laid out to dry naturally under the warm Indian sun. This slow, traditional method preserves the delicate essential oils and powerful pigment of the leaves, something that industrial ovens cannot replicate.',
      grindingTitle: 'The Transformation: Stone-Ground & Triple-Sifted',
      grindingDescription: "We use traditional stone grinders to gently mill the dried leaves. This avoids generating excess heat, which can degrade the henna's quality. The powder is then triple-sifted through fine muslin cloth, resulting in a silken, ethereal powder that is completely free of impurities. No additives, no fillers, just pure henna.",
      siftingTitle: 'The Purity Test: Rigorous Quality Control',
      siftingDescription: 'Every single batch undergoes rigorous testing in our in-house lab. We test for fineness, purity, and color potency. Most importantly, we certify that our henna is 100% free from PPD, ammonia, metallic salts, and any other synthetic contaminants commonly found in commercial henna.',
      qualityControlTitle: 'The Art of the Blend: Small-Batch Mixing',
      qualityControlDescription: 'For our ready-to-use products, the pure henna powder is mixed in small batches. We use only purified water, a touch of sugar to improve the stain, and a blend of pure essential oils like eucalyptus and lavender. We never use artificial preservatives.',
      packagingTitle: 'The Delivery: Sealed for Freshness',
      packagingDescription: 'Our finished henna powder and paste are immediately sealed in airtight, light-proof packaging. This protects the henna from oxidation and moisture, ensuring that the product that reaches you is as fresh and potent as the day it was crafted.',
      plantToPasteTitle: 'From Plant to Paste',
      plantToPasteDescription: 'Follow the journey of our henna, from lush green fields to the rich, vibrant paste that adorns your skin.',
      ctaTitle: 'Join Hands with Suhaani Henna',
      ctaDescription: 'Where tradition meets innovation, and nature meets excellence. Explore our collection and experience the purity for yourself.',
    },
    gallery: {
      title: 'Suhaani Henna Inspiration Gallery',
      description: 'Explore a world of creativity with Suhaani Henna. Discover beautiful designs from our community and professional artists, showcasing the versatile uses of our 100% pure, natural henna for body art, hair, and more.',
      shareCreation: 'Share Your Creation',
      filterAll: 'All',
      filterCustomer: 'Customer Submissions',
      filterBodyArt: 'Body Art',
      filterHairCare: 'Hair Care',
      filterTattoos: 'Temporary Tattoos',
      filterProfessional: 'Professional Artists',
    },
    contact: {
      title: 'Get in Touch',
      description: "Have a question or a comment? Fill out the form below, and we'll get back to you within 24 hours. For quick answers, check out our FAQ section.",
      formTitle: 'Send Us a Message',
      nameLabel: 'Name',
      emailLabel: 'Email Address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      sendMessage: 'Send Message',
      contactInfoTitle: 'Contact Information',
      contactInfoPlaceholder: 'Contact details will be added soon.',
      faqTitle: 'Frequently Asked Questions',
      faq1Question: 'What is Henna?',
      faq1Answer: 'Henna is a plant-based dye made from the leaves of the Lawsonia inermis plant. When crushed into a powder and mixed into a paste, it releases a natural dye that temporarily stains the skin or hair a reddish-brown color.',
      faq2Question: 'What are the origins and history of henna?',
      faq2Answer: 'Henna has been used for over 5,000 years for body art and hair dyeing in cultures across South Asia, the Middle East, and Africa. It holds deep cultural and ceremonial significance, often used in weddings and festivals. Suhaani Henna honors this rich history while innovating this ancient tradition for modern use.',
      faq3Question: 'Is Suhaani Henna safe?',
      faq3Answer: 'Absolutely. Our henna is 100% natural, pure, and free from harmful chemicals like PPD, ammonia, or preservatives. We source the finest quality henna leaves and process them carefully to ensure a product that is completely safe for your skin and hair, providing a beautiful, natural color.',
      faq4Question: 'What is your shipping and return policy?',
      faq4Answer: 'We ship worldwide! Orders are typically processed within 1-2 business days. Due to the nature of our products, we do not accept returns on opened items, but if you have any issues with your order, please contact us and we will be happy to help.',
    },
    footer: {
      shopTitle: 'Shop',
      bodyArt: 'Body Art',
      hairCare: 'Hair Care',
      aftercare: 'Aftercare',
      kits: 'Kits & Bundles',
      supportTitle: 'Support',
      contactUs: 'Contact Us',
      faq: 'FAQ',
      shipping: 'Shipping & Returns',
      terms: 'Terms of Service',
      madeBy: 'Made proudly in India by KJR Labs. All rights reserved.',
    },
  },
  hi: {
    // Hindi translations - placeholder for now, will be filled from your document
    nav: {
      home: 'होम',
      products: 'उत्पाद',
      ourStory: 'हमारी कहानी',
      gallery: 'गैलरी',
      contact: 'संपर्क',
    },
    home: {
      heroTitle: 'प्रत्येक पत्ती में सुंदरता',
      heroSubtitle: 'सुहानी हेना प्रीमियम-गुणवत्ता वाले मेहंदी उत्पादों का एक अग्रणी निर्माता और आपूर्तिकर्ता है, जो प्राकृतिक सामग्री, समृद्ध रंग और त्वचा-सुरक्षित फॉर्मूलेशन के लिए जाना जाता है।',
      exploreProducts: 'उत्पाद देखें',
      aboutSuhaani: 'सुहानी के बारे में',
      pureNaturalTitle: 'शुद्ध। प्राकृतिक। सुहानी।',
      pureNaturalSubtitle: 'हम आपको सुंदर, सुरक्षित और प्रामाणिक परिणामों के लिए उच्चतम गुणवत्ता वाली, पूरी तरह से प्राकृतिक मेहंदी प्रदान करने के लिए प्रतिबद्ध हैं।',
      feature1Title: '100% प्राकृतिक सामग्री',
      feature1Description: 'बेहतरीन मेहंदी के पौधों से प्राप्त, किसी भी हानिकारक रसायन या योजक से मुक्त।',
      feature2Title: 'समृद्ध रंग',
      feature2Description: 'हमारा बारीक छना हुआ मेहंदी पाउडर गहरे, लंबे समय तक टिकने वाले रंग की गारंटी देता है।',
      feature3Title: 'त्वचा-सुरक्षित फॉर्मूलेशन',
      feature3Description: 'प्राकृतिक सामग्री से बना, आपकी त्वचा और बालों के लिए कोमल।',
      naturalDescription: 'बेहतरीन मेहंदी की पत्तियों से प्राप्त, हमारे उत्पाद 100% प्राकृतिक और रसायन-मुक्त हैं।',
      globalStandardsTitle: 'वैश्विक मानक',
      globalStandardsDescription: 'हमारे द्वारा उत्पादित हर बैच के साथ अंतरराष्ट्रीय गुणवत्ता मानकों को पूरा करना।',
      ecoFriendlyTitle: 'पर्यावरण के अनुकूल',
      ecoFriendlyDescription: 'टिकाऊ पैकेजिंग और प्रथाएं जो हमारे ग्रह का सम्मान करती हैं।',
      featuredProducts: 'विशेष उत्पाद',
      featuredProductsTitle: 'विशेष उत्पाद',
      product1Title: 'क्लासिक हेना कोन',
      product1Description: 'जटिल बॉडी आर्ट के लिए उपयोग के लिए तैयार कोन।',
      product2Title: 'हर्बल हेयर कलर किट',
      product2Description: 'अपने बालों को प्राकृतिक रूप से पोषण और रंग दें।',
      product3Title: 'आफ्टरकेयर बाम',
      product3Description: 'अपने मेहंदी के दाग को सुरक्षित और गहरा करें।',
      product4Title: 'एसेंशियल ऑयल ब्लेंड',
      product4Description: 'अपने मेहंदी के रंग और स्थायित्व को बढ़ाएं।',
      viewProduct: 'उत्पाद देखें',
      fromPlantTitle: 'पौधे से पेस्ट तक',
      fromPlantDescription: 'हमारी यात्रा उन धूप से भरे खेतों में शुरू होती है जहां बेहतरीन मेहंदी के पौधे उगाए जाते हैं। हम पीढ़ियों से चली आ रही परंपराओं का सम्मान करते हैं, प्रत्येक पत्ती को सावधानीपूर्वक काटते और तैयार करते हैं ताकि एक पेस्ट बनाया जा सके जो शुद्ध, शक्तिशाली और आपकी त्वचा और बालों के लिए एकदम सही हो।',
      plantToPasteTitle: 'पौधे से पेस्ट तक',
      plantToPasteDescription: 'हमारी यात्रा उन धूप से भरे खेतों में शुरू होती है जहां बेहतरीन मेहंदी के पौधे उगाए जाते हैं। हम पीढ़ियों से चली आ रही परंपराओं का सम्मान करते हैं, प्रत्येक पत्ती को सावधानीपूर्वक काटते और तैयार करते हैं ताकि एक पेस्ट बनाया जा सके जो शुद्ध, शक्तिशाली और आपकी त्वचा और बालों के लिए एकदम सही हो। प्रामाणिकता के प्रति हमारी प्रतिबद्धता का मतलब है कि आपको एक ऐसा उत्पाद मिलता है जो सिर्फ एक सौंदर्य प्रसाधन नहीं है, बल्कि सांस्कृतिक विरासत का एक टुकड़ा है।',
      discoverOurStory: 'हमारी कहानी जानें',
      discoverStory: 'हमारी कहानी जानें',
      testimonialsTitle: 'हमारे ग्राहक क्या कहते हैं',
      newsletterTitle: 'अपडेट रहें',
      newsletterDescription: 'विशेष ऑफ़र और मेहंदी टिप्स के लिए हमारे न्यूज़लेटर की सदस्यता लें।',
      emailPlaceholder: 'आपका ईमेल पता',
      subscribe: 'सदस्यता लें',
    },
    products: {
      heroTitle: 'प्राकृतिक सुंदरता की कला की खोज करें',
      pageTitle: 'हमारा प्राकृतिक मेहंदी संग्रह',
      pageDescription: 'बालों और बॉडी आर्ट के लिए हमारे 100% शुद्ध और प्राकृतिक मेहंदी उत्पादों को ब्राउज़ करें।',
      categories: 'श्रेणियाँ',
      allProducts: 'सभी उत्पाद',
      hairHenna: 'हेयर हेना',
      bodyArtHenna: 'बॉडी आर्ट हेना',
      hennaCones: 'हेना कोन',
      essentialOils: 'आवश्यक तेल',
      hennaKits: 'हेना किट',
      filterByPrice: 'कीमत के अनुसार फ़िल्टर करें',
      addToCart: 'कार्ट में जोड़ें',
      product1Name: 'सुहानी हेना पाउडर',
      product1Desc: '100% शुद्ध, बारीक छना हुआ राजस्थानी मेहंदी।',
      product2Name: 'सुहानी हेना पेस्ट',
      product2Desc: 'प्राकृतिक सामग्री के साथ ताज़ा बनाया गया।',
      product3Name: 'सुहानी हेना कोन',
      product3Desc: 'जटिल बॉडी आर्ट के लिए उपयोग के लिए तैयार।',
      product4Name: 'हर्बल हेयर केयर ऑयल',
      product4Desc: 'पोषण और मजबूती प्रदान करता है',
      product5Name: 'ब्राइडल हेना किट',
      product5Desc: 'संपूर्ण ब्राइडल पैकेज',
      product6Name: 'नेचुरल हेयर हेना',
      product6Desc: 'समृद्ध ऑबर्न टोन के लिए',
    },
    ourStory: {
      heroTitle: 'हमारी कहानी: सुहानी हेना का दिल',
      heroSubtitle: 'बेहतरीन पत्तियों से आपके हाथों तक, शुद्धता, गुणवत्ता और जुनून की हमारी यात्रा की खोज करें।',
      commitmentTitle: 'उत्कृष्टता के प्रति हमारी प्रतिबद्धता',
      commitmentPara1: 'सुहानी हेना में आपका स्वागत है, जहां परंपरा आधुनिक लालित्य के साथ जुड़ती है। हमारी यात्रा एक सरल मिशन के साथ शुरू हुई: 100% शुद्ध, प्राकृतिक मेहंदी उत्पाद प्रदान करना जो शरीर अलंकरण की कालातीत कला का जश्न मनाते हैं।',
      commitmentPara2: 'एक अग्रणी निर्माता और आपूर्तिकर्ता के रूप में, हम अपने मेहंदी को बेहतरीन पत्तियों से सावधानीपूर्वक प्राप्त करते हैं, जो सबसे उपजाऊ क्षेत्रों में उगाई जाती हैं।',
      promiseTitle: 'शुद्धता और गुणवत्ता का हमारा वादा',
      promiseDescription: 'हम सख्त विनिर्माण मानकों और अंतरराष्ट्रीय गुणवत्ता मानकों का पालन करते हैं।',
      naturalTitle: '100% प्राकृतिक',
      naturalDescription: 'बेहतरीन मेहंदी की पत्तियों से प्राप्त, किसी भी योजक या हानिकारक रसायनों से मुक्त।',
      globalTitle: 'वैश्विक मानक',
      globalDescription: 'हमारे विश्वव्यापी ग्राहकों की सेवा के लिए अंतरराष्ट्रीय गुणवत्ता मानकों को पूरा करना।',
      ecoTitle: 'पर्यावरण के अनुकूल',
      ecoDescription: 'बेहतर कल के लिए टिकाऊ प्रथाओं और पर्यावरण के अनुकूल पैकेजिंग का उपयोग।',
      qualityProcessTitle: 'पौधे से पेस्ट तक: हमारी शुद्धता की प्रक्रिया',
      qualityProcessDescription: 'हमारी सावधानीपूर्वक प्रक्रिया यह सुनिश्चित करती है कि सुहानी मेंहदी का हर पैकेट सबसे गहरा रंग और शुद्धतम गुणवत्ता प्रदान करे। हम आपको एक ऐसा उत्पाद लाने के लिए प्राचीन परंपराओं को आधुनिक मानकों के साथ जोड़ते हैं जो प्रामाणिक रूप से प्राकृतिक और अविश्वसनीय रूप से प्रभावी है।',
      sourcingTitle: 'स्रोत: हाथ से चुनी गई पत्तियां',
      sourcingDescription: 'हमारी यात्रा राजस्थान के शुष्क क्षेत्रों में शुरू होती है, जहाँ दुनिया के सबसे अच्छे लॉसनिया इनर्मिस पौधे उगते हैं। हमारे किसान, पीढ़ियों के ज्ञान के साथ, केवल सबसे जीवंत पत्तियों का चयन करते हैं, जो उच्चतम लॉसन (प्राकृतिक डाई) सामग्री सुनिश्चित करते हैं। किसी भी कीटनाशक या सिंथेटिक उर्वरक का उपयोग कभी नहीं किया जाता है।',
      dryingTitle: 'तैयारी: प्राकृतिक धूप में सुखाना',
      dryingDescription: 'काटी गई पत्तियों का कभी भी रसायनों से उपचार नहीं किया जाता है। उन्हें गर्म भारतीय धूप के नीचे स्वाभाविक रूप से सूखने के लिए बिछाया जाता है। यह धीमी, पारंपरिक विधि पत्तियों के नाजुक आवश्यक तेलों और शक्तिशाली रंगद्रव्य को संरक्षित करती है, कुछ ऐसा जो औद्योगिक ओवन दोहरा नहीं सकते।',
      grindingTitle: 'परिवर्तन: पत्थर से पिसा हुआ और तिहरा छाना हुआ',
      grindingDescription: 'हम सूखे पत्तों को धीरे-धीरे पीसने के लिए पारंपरिक पत्थर की चक्की का उपयोग करते हैं। यह अतिरिक्त गर्मी पैदा करने से बचता है, जो मेंहदी की गुणवत्ता को खराब कर सकता है। पाउडर को फिर महीन मलमल के कपड़े के माध्यम से तिहरा छाना जाता है, जिसके परिणामस्वरूप एक रेशमी, अलौकिक पाउडर होता है जो अशुद्धियों से पूरी तरह मुक्त होता है। कोई योजक नहीं, कोई भराव नहीं, बस शुद्ध मेंहदी।',
      siftingTitle: 'शुद्धता परीक्षण: कठोर गुणवत्ता नियंत्रण',
      siftingDescription: 'हर एक बैच हमारी इन-हाउस लैब में कठोर परीक्षण से गुजरता है। हम सुंदरता, शुद्धता और रंग शक्ति का परीक्षण करते हैं। सबसे महत्वपूर्ण बात, हम यह प्रमाणित करते हैं कि हमारी मेंहदी पीपीडी, अमोनिया, धातु लवण और वाणिज्यिक मेंहदी में आमतौर पर पाए जाने वाले किसी भी अन्य सिंथेटिक संदूषक से 100% मुक्त है।',
      qualityControlTitle: 'मिश्रण की कला: छोटे बैच में मिश्रण',
      qualityControlDescription: 'हमारे उपयोग के लिए तैयार उत्पादों के लिए, शुद्ध मेंहदी पाउडर को छोटे बैचों में मिलाया जाता है। हम केवल शुद्ध पानी, दाग को बेहतर बनाने के लिए थोड़ी सी चीनी, और नीलगिरी और लैवेंडर जैसे शुद्ध आवश्यक तेलों का मिश्रण उपयोग करते हैं। हम कभी भी कृत्रिम परिरक्षकों का उपयोग नहीं करते हैं।',
      packagingTitle: 'वितरण: ताजगी के लिए सील किया गया',
      packagingDescription: 'हमारा तैयार मेंहदी पाउडर और पेस्ट तुरंत वायुरोधी, प्रकाश-प्रूफ पैकेजिंग में सील कर दिया जाता है। यह मेंहदी को ऑक्सीकरण और नमी से बचाता है, यह सुनिश्चित करता है कि आप तक पहुंचने वाला उत्पाद उतना ही ताजा और शक्तिशाली हो जितना कि जिस दिन इसे तैयार किया गया था।',
      plantToPasteTitle: 'पौधे से पेस्ट तक',
      plantToPasteDescription: 'हरे-भरे हरे खेतों से समृद्ध, जीवंत पेस्ट तक हमारी मेहंदी की यात्रा का अनुसरण करें।',
      ctaTitle: 'सुहानी हेना के साथ हाथ मिलाएं',
      ctaDescription: 'जहां परंपरा नवाचार से मिलती है, और प्रकृति उत्कृष्टता से मिलती है।',
    },
    gallery: {
      title: 'सुहानी हेना प्रेरणा गैलरी',
      description: 'सुहानी हेना के साथ रचनात्मकता की दुनिया का अन्वेषण करें। हमारे समुदाय और पेशेवर कलाकारों से सुंदर डिज़ाइन खोजें।',
      shareCreation: 'अपनी रचना साझा करें',
      filterAll: 'सभी',
      filterCustomer: 'ग्राहक सबमिशन',
      filterBodyArt: 'बॉडी आर्ट',
      filterHairCare: 'हेयर केयर',
      filterTattoos: 'अस्थायी टैटू',
      filterProfessional: 'पेशेवर कलाकार',
    },
    contact: {
      title: 'संपर्क करें',
      description: 'कोई प्रश्न या टिप्पणी है? नीचे दिया गया फॉर्म भरें, और हम 24 घंटों के भीतर आपसे संपर्क करेंगे।',
      formTitle: 'हमें एक संदेश भेजें',
      nameLabel: 'नाम',
      emailLabel: 'ईमेल पता',
      subjectLabel: 'विषय',
      messageLabel: 'संदेश',
      sendMessage: 'संदेश भेजें',
      contactInfoTitle: 'संपर्क जानकारी',
      contactInfoPlaceholder: 'संपर्क विवरण जल्द ही जोड़े जाएंगे।',
      faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
      faq1Question: 'मेहंदी क्या है?',
      faq1Answer: 'मेहंदी लॉसोनिया इनर्मिस पौधे की पत्तियों से बनी एक पौधे आधारित रंग है। जब इसे पाउडर में कुचला जाता है और पेस्ट में मिलाया जाता है, तो यह एक प्राकृतिक रंग छोड़ता है।',
      faq2Question: 'मेहंदी की उत्पत्ति और इतिहास क्या है?',
      faq2Answer: 'मेहंदी का उपयोग 5,000 से अधिक वर्षों से दक्षिण एशिया, मध्य पूर्व और अफ्रीका में शरीर कला और बाल रंगाई के लिए किया जाता रहा है।',
      faq3Question: 'क्या सुहानी हेना सुरक्षित है?',
      faq3Answer: 'बिल्कुल। हमारी मेहंदी 100% प्राकृतिक, शुद्ध है और PPD, अमोनिया या परिरक्षकों जैसे हानिकारक रसायनों से मुक्त है।',
      faq4Question: 'आपकी शिपिंग और रिटर्न नीति क्या है?',
      faq4Answer: 'हम विश्वव्यापी शिप करते हैं! ऑर्डर आमतौर पर 1-2 व्यावसायिक दिनों के भीतर संसाधित किए जाते हैं।',
    },
    footer: {
      shopTitle: 'खरीदारी',
      bodyArt: 'बॉडी आर्ट',
      hairCare: 'हेयर केयर',
      aftercare: 'आफ्टरकेयर',
      kits: 'किट और बंडल',
      supportTitle: 'सहायता',
      contactUs: 'हमसे संपर्क करें',
      faq: 'अक्सर पूछे जाने वाले प्रश्न',
      shipping: 'शिपिंग और रिटर्न',
      terms: 'सेवा की शर्तें',
      madeBy: 'भारत में KJR Labs द्वारा गर्व से बनाया गया। सर्वाधिकार सुरक्षित।',
    },
  },
}
