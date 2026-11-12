import { Lesson } from '../types';

export const LESSONS_BATCH_3: Lesson[] = [
  {
    id: 'lesson-35',
    order: 35,
    title: 'Avoiding UPI & Cyber Phishing Scams',
    titleHinglish: 'UPI Scams Aur Cyber Online Fraud Se Bachein',
    category: 'Security',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'UPI PIN is strictly required only to SEND money or check account balance—NEVER to receive money into your bank account.',
      'Scammers send fake payment requests or QR codes claiming you will "receive cashback". Scanning or entering your PIN deducts money from your account.',
      'Never share OTPs, bank passwords, or click on unknown SMS links claiming urgent account blocking.'
    ],
    contentHinglish: [
      'UPI PIN sirf paise BEJNE ya balance check karne ke liye lagta hai—paise RECEIVE karne ke liye PIN ki zaroorat bilkul nahi hoti.',
      'Scammers fake cashback links ya QR code bhejte hain. PIN dalte hi aapke account se paisa kat jata hai.',
      'Kabhi bhi OTP, password share mat karo aur kisi unknown link par click mat karo.'
    ],
    takeaways: [
      'Receiving money never requires entering your UPI PIN.',
      'Beware of QR codes sent over WhatsApp for payments.',
      'Report financial fraud immediately to National Cyber Crime helpline 1930.'
    ],
    takeawaysHinglish: [
      'Paisa lene ke liye UPI PIN kabhi mat dalo.',
      'WhatsApp par aaye anjaan QR code scan mat karo.',
      'Cyber fraud hone par 1930 par turant complain register karo.'
    ],
    quiz: [
      {
        id: 'q35-1',
        question: 'When is entering your UPI PIN required?',
        questionHinglish: 'UPI PIN kab dalna zaroori hota hai?',
        options: ['To send money or check balance', 'To receive money from a friend', 'To accept a prize or gift', 'To receive salary in bank'],
        optionsHinglish: ['Paise bhejne ya balance check karne par', 'Friend se paise lene par', 'Prize receive karne par', 'Salary account me lene par'],
        correctAnswerIndex: 0,
        explanation: 'UPI PIN authenticates outgoing transactions only. Receiving money needs zero PIN entry.',
        explanationHinglish: 'UPI PIN sirf aapke account se paise katne ke liye lagta hai.'
      }
    ]
  },
  {
    id: 'lesson-36',
    order: 36,
    title: 'Buy Now Pay Later (BNPL) Trap',
    titleHinglish: 'BNPL (Buy Now Pay Later) Ke Khatre',
    category: 'Debt',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'BNPL apps offer instant zero-cost credit for small shopping purchases, encouraging impulse buying.',
      'Missing a BNPL payment deadline incurs steep late fees, heavy penal interest rates (up to 36%), and negative CIBIL reporting.',
      'Treat BNPL as a loan—if you cannot afford to buy an item with cash today, avoid purchasing it on BNPL.'
    ],
    contentHinglish: [
      'BNPL apps instant credit dekar bina soche shopping karne ki aadat daalti hain.',
      'Due date miss karne par bhari late fees (36% per year tak) lagti hai aur CIBIL score kharab hota hai.',
      'BNPL ko loan samjho. Agar cash me nahi khareed sakte toh BNPL par bhi mat lo.'
    ],
    takeaways: [
      'BNPL encourages emotional overspending.',
      'Late payments ruin credit score history.',
      'Use the 24-hour cooling-off rule before BNPL purchases.'
    ],
    takeawaysHinglish: [
      'BNPL se fizul kharch badhta hai.',
      'Late fee se CIBIL score damage hota hai.',
      'Khareedne se pehle 24 ghante ka wait karo.'
    ],
    quiz: [
      {
        id: 'q36-1',
        question: 'What is a major risk associated with using BNPL apps regularly?',
        questionHinglish: 'BNPL apps use karne ka bada risk kya hai?',
        options: ['Impulse overspending and damage to CIBIL score on delayed payment', 'Free cash bonus', 'Zero requirement of phone number', 'Guaranteed gold coins'],
        optionsHinglish: ['Impulse spending aur payment delay hone par CIBIL kharab hona', 'Free cash bonus', 'Phone number ki zaroorat na hona', 'Guaranteed gold coins'],
        correctAnswerIndex: 0,
        explanation: 'BNPL makes spending frictionless, leading to debt accumulation and credit penalties if missed.',
        explanationHinglish: 'Frictionless spending se overspending hoti hai aur miss hone par CIBIL score girta hai.'
      }
    ]
  },
  {
    id: 'lesson-37',
    order: 37,
    title: 'Real Estate Investment Trusts (REITs)',
    titleHinglish: 'REITs: Bina Property Buy Kiye Real Estate Incomes',
    category: 'Real Estate',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'REITs (Real Estate Investment Trusts) allow you to invest in prime commercial real estate (office parks, malls) with as little as ₹300.',
      'REITs are regulated by SEBI and listed on stock exchanges. By law, they must distribute 90% of their net rental income to unit holders as dividends.',
      'REITs offer high rental yields and liquidity compared to physical real estate which requires lakhs of down payment and high registration costs.'
    ],
    contentHinglish: [
      'REITs se aap sirf ₹300-500 se prime commercial real estate (offices, malls) me invest kar sakte ho.',
      'SEBI rule ke accoding REITs ko apne rental income ka 90% dividends ke roop me investors ko dena padta hai.',
      'Physical property me lakhs lagte hain, jabki REITs stock exchange par easily buy-sell hote hain.'
    ],
    takeaways: [
      'Low entry ticket size for commercial real estate exposure.',
      '90% income payout mandatory via quarterly dividends.',
      'High liquidity compared to physical property sales.'
    ],
    takeawaysHinglish: [
      '₹500 me commercial property ownership.',
      '90% rent dividend ke form me account me aata hai.',
      'Jab chahe stock exchange par sell kar sakte ho.'
    ],
    quiz: [
      {
        id: 'q37-1',
        question: 'What percentage of rental income must REITs legally distribute to investors in India?',
        questionHinglish: 'REITs ko kitna % rental income investors me distribute karna zaroori hai?',
        options: ['90%', '10%', '50%', '0%'],
        optionsHinglish: ['90%', '10%', '50%', '0%'],
        correctAnswerIndex: 0,
        explanation: 'SEBI mandates REITs to payout 90% of taxable net income to maintain tax exemption.',
        explanationHinglish: 'SEBI mandatory 90% rental profit investors ko bat-ta hai.'
      }
    ]
  },
  {
    id: 'lesson-38',
    order: 38,
    title: 'Rent vs Buy: Home Ownership Economics',
    titleHinglish: 'Rent vs Buy: Ghar Kharidein Ya Rent Par Rahein?',
    category: 'Real Estate',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'In Indian metro cities, residential rental yield is low (2%-3%), whereas home loan interest rates hover around 8.5%-9.5%.',
      'Buying a home with high EMIs locks up capital and flexibility in early career years.',
      'If rent is significantly lower than home loan EMI, renting while investing the EMI difference into equity mutual funds can build far higher net worth.'
    ],
    contentHinglish: [
      'Metro cities me rental yield sirf 2-3% hai jabki Home Loan interest 8.5-9.5% hota hai.',
      'Career ke starting me heavy home EMI lene se flexibility aur savings khatam ho jati hai.',
      'Agar Rent EMI se bohot kam hai, toh bacha hua paisa mutual funds me invest karna smarter option ho sakta hai.'
    ],
    takeaways: [
      'Compare rental yield vs home loan interest rate.',
      'Avoid committing >40% of monthly income to home EMIs.',
      'A house is an emotional asset; calculate opportunity costs.'
    ],
    takeawaysHinglish: [
      'Rental yield aur home loan interest compare karo.',
      'Salary ka 40% se zyada EMI me mat jaane do.',
      'Emotional decision se pehle math calculate karo.'
    ],
    quiz: [
      {
        id: 'q38-1',
        question: 'When is renting financially advantageous over buying a house with a loan?',
        questionHinglish: 'Buying ke muqable Rent par rehna kab financial loss se bachata hai?',
        options: ['When monthly EMI is far higher than rent and difference is invested in growth funds', 'When rent is ₹1 Lakh per month', 'When home loans are 0% interest', 'When property prices drop 90% daily'],
        optionsHinglish: ['Jab EMI Rent se bohot zyada ho aur bacha paisa equity me invest ho', 'Jab rent ₹1 Lakh ho', 'Jab loan 0% ho', 'Jab rate 90% drop ho'],
        correctAnswerIndex: 0,
        explanation: 'Investing the EMI-minus-rent surplus into equity outpaces low property price appreciation.',
        explanationHinglish: 'EMI aur rent ka farak SIP me daalne se compounding wealth tezi se badhti hai.'
      }
    ]
  },
  {
    id: 'lesson-39',
    order: 39,
    title: 'Understanding Crypto & Blockchain Risks',
    titleHinglish: 'Crypto & Blockchain: Opportunities Aur Risk',
    category: 'Crypto',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Cryptocurrencies are decentralized digital tokens running on blockchain ledgers like Bitcoin and Ethereum.',
      'Crypto markets are extremely volatile—prices can crash 80% in market downturns. In India, crypto gains face a 30% flat tax with 1% TDS on trades.',
      'If investing in crypto, limit allocation to less than 5% of your total speculative investment portfolio.'
    ],
    contentHinglish: [
      'Crypto digital tokens hain jo blockchain technology par chalte hain.',
      'Crypto bohot volatile hota hai (80% crash ho sakta hai). India me crypto profit par 30% flat tax aur 1% TDS lagta hai.',
      'Agar crypto buy karna ho toh portfolio ka maximum 3-5% se zyada mat lagao.'
    ],
    takeaways: [
      'Cryptocurrency is highly speculative and unregulated.',
      'Flat 30% tax on crypto profits in India without loss offset.',
      'Cap exposure to <5% of overall assets.'
    ],
    takeawaysHinglish: [
      'Crypto highly risky aur speculative asset hai.',
      'Profit par flat 30% tax lagta hai.',
      'Total savings ka 5% se kam hi allocate karein.'
    ],
    quiz: [
      {
        id: 'q39-1',
        question: 'What is the flat tax rate applied to cryptocurrency gains in India?',
        questionHinglish: 'India me crypto profits par kitna flat tax lagta hai?',
        options: ['30%', '10%', '0%', '50%'],
        optionsHinglish: ['30%', '10%', '0%', '50%'],
        correctAnswerIndex: 0,
        explanation: 'Indian tax law imposes a flat 30% tax plus applicable cess on virtual digital asset profits.',
        explanationHinglish: 'Crypto income par flat 30% tax lagta hai.'
      }
    ]
  },
  {
    id: 'lesson-40',
    order: 40,
    title: 'The Psychology of Money & FOMO',
    titleHinglish: 'Paisa Aur Mindset: FOMO Se Kaise Bachein',
    category: 'Goals',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'Financial success is less about intelligence and more about behavioral discipline.',
      'FOMO (Fear Of Missing Out) leads people to buy hyped stocks or luxury items they don’t need just because others are doing so.',
      'True wealth is what you don’t see: cars not purchased, watches not worn, and money invested for freedom.'
    ],
    contentHinglish: [
      'Financial success dimaag se zyada behavioral discipline par depend karti hai.',
      'FOMO ke chakkar me log dosto ko dekh kar bewajah mehngi cheezein aur trendy stocks khareed lete hain.',
      'Asli wealth wo hai jo dikhti nahi—bachaye hue paise jo tumhe financial freedom dete hain.'
    ],
    takeaways: [
      'Wealth is hidden savings and unspent options.',
      'Avoid comparing your financial journey on social media.',
      'Focus on long-term goals over short-term social status.'
    ],
    takeawaysHinglish: [
      'Asli wealth bachat aur investments hoti hai.',
      'Social media par dosto ke kharcho se khud ko compare mat karo.',
      'Short-term status se zyada long-term freedom zaroori hai.'
    ],
    quiz: [
      {
        id: 'q40-1',
        question: 'According to Morgan Housel’s Psychology of Money, what is true wealth?',
        questionHinglish: 'Psychology of Money ke mutabiq asli wealth kya hai?',
        options: ['Unspent financial assets and future freedom', 'Expensive designer clothes and sports cars', 'Posting luxury photos online', 'Having 10 credit cards'],
        optionsHinglish: ['Bachat aur future ki financial freedom', 'Mehngi car aur clothes showoff', 'Online luxury photos post karna', '10 credit card rakhna'],
        correctAnswerIndex: 0,
        explanation: 'Wealth is the financial options, security, and unspent assets you retain.',
        explanationHinglish: 'Wealth wo bacha hua paisa hai jo aapko azadi aur security deta hai.'
      }
    ]
  }
];
