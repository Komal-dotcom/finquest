import { Lesson } from '../types';

export const LESSONS_BATCH_2: Lesson[] = [
  {
    id: 'lesson-28',
    order: 28,
    title: 'Health Insurance: Mediclaim vs Super Top-Up',
    titleHinglish: 'Health Insurance Aur Super Top-Up Strategy',
    category: 'Insurance',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Medical inflation in India runs at 14% annually. A single hospital stay can wipe out years of hard-earned savings without adequate health insurance.',
      'A Base Health Insurance policy covers initial medical costs up to its sum insured (e.g. ₹5 Lakhs).',
      'A Super Top-Up plan provides massive additional coverage (e.g. ₹20 Lakhs) with a small deductible at a fraction of the cost of a full base policy.'
    ],
    contentHinglish: [
      'India me medical inflation 14% hai. Bina health insurance ek badi bimari poori savings safaya kar sakti hai.',
      'Base Health Insurance ₹5 Lakh tak ka hospital bill cover karti hai.',
      'Super Top-Up plan bohot kam premium me ₹20-50 Lakh ka extra cover deta hai.'
    ],
    takeaways: [
      'Always secure a base policy of at least ₹5-10 Lakhs.',
      'Super Top-Up plans drastically boost coverage at low costs.',
      'Never rely solely on employer health coverage.'
    ],
    takeawaysHinglish: [
      'Kam se kam ₹5-10 Lakh ka personal base plan rakho.',
      'Super Top-Up se kam kharche me coverage 25-50 Lakh tak badhayein.',
      'Sirf company ke insurance par bharosa mat karo.'
    ],
    quiz: [
      {
        id: 'q28-1',
        question: 'Why is combining a Base Health Policy with a Super Top-Up cost-effective?',
        questionHinglish: 'Base Policy ke sath Super Top-Up lene se kharcha kyu kam hota hai?',
        options: ['Super Top-Up offers huge coverage at cheap rates due to deductible threshold', 'Base policy gives free cash every month', 'Super top-up pays for grocery bills', 'Insurance companies give 100% cashback'],
        optionsHinglish: ['Deductible hone ki wajah se Super Top-Up bohot sasta milta hai', 'Base policy har mahine free cash deti hai', 'Super top-up ration bill deta hai', '100% cashback milta hai'],
        correctAnswerIndex: 0,
        explanation: 'Super top-up plans trigger only after the base policy deductible is hit, making premiums cheap.',
        explanationHinglish: 'Super top-up tab activate hota hai jab base policy threshold reach hota hai, isliye iska premium bohot sasta hota hai.'
      }
    ]
  },
  {
    id: 'lesson-29',
    order: 29,
    title: 'Term Life Insurance: Protection for Loved Ones',
    titleHinglish: 'Term Insurance: Family Ki Financial Protection',
    category: 'Insurance',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Term insurance is pure protection. In the event of the breadwinner’s untimely death, the insurer pays a lump-sum sum assured to the family.',
      'Rule of Thumb: Buy a term cover equal to at least 15x to 20x your annual income when you are young and healthy to lock in low premiums.',
      'Avoid Endowment or LIC money-back policies that mix insurance with low returns (4%-5%). Keep insurance and investment separate.'
    ],
    contentHinglish: [
      'Term insurance pure financial safety hai. Earner ke na rehne par family ko sum assured milta hai.',
      'Rule: Apni annual salary ka kam se kam 15-20 guna ka term cover lo.',
      'Endowment plans me investment aur insurance mix mat karo jahan returns 4-5% se kam hote hain.'
    ],
    takeaways: [
      'Buy 15-20x annual income sum assured in early 20s or 30s.',
      'Pure term insurance offers maximum coverage at lowest premiums.',
      'Separate investment from insurance for wealth growth.'
    ],
    takeawaysHinglish: [
      'Annual salary ka 15-20x cover lock karo.',
      'Pure term plan me saste premium me bada cover milta hai.',
      'Insurance aur investment ko hamesha alag rakho.'
    ],
    quiz: [
      {
        id: 'q29-1',
        question: 'What is the recommended sum assured for Term Life Insurance?',
        questionHinglish: 'Term Life Insurance me kitna sum assured hona chahiye?',
        options: ['1x annual income', '15x to 20x annual income', '₹50,000 total', '100x monthly grocery bill'],
        optionsHinglish: ['1x annual income', 'Annual income ka 15x se 20x', 'Total ₹50,000', 'Monthly grocery ka 100x'],
        correctAnswerIndex: 1,
        explanation: '15-20x annual income ensures your dependents can maintain their lifestyle and pay off debts.',
        explanationHinglish: '15-20x income hone par family ki jaruratein aur loans smoothly handle hote hain.'
      }
    ]
  },
  {
    id: 'lesson-30',
    order: 30,
    title: 'Understanding Inflation & Purchasing Power Loss',
    titleHinglish: 'Inflation (Mehngai) Aur Paisa Ki Value',
    category: 'Economics',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'Inflation is the silent erosion of purchasing power over time. If inflation is 6%, an item costing ₹100 today will cost ₹106 next year.',
      'Keeping all money in a standard savings account earning 3% interest means losing 3% real purchasing power every single year.',
      'To build real wealth, your investment portfolio returns must consistently outperform the national inflation rate.'
    ],
    contentHinglish: [
      'Inflation (mehngai) chupchap aapke paise ki value ghatati hai. Agar inflation 6% hai, toh ₹100 ki cheez agle saal ₹106 ki hogi.',
      'Savings account me 3% interest milne par 6% inflation ke agge har saal 3% ka loss hota hai.',
      'Wealth banane ke liye aisi jagah invest karo jahan returns inflation se zyada ho.'
    ],
    takeaways: [
      'Savings accounts lose real value due to inflation.',
      'Real Return = Nominal Investment Return minus Inflation Rate.',
      'Equity and real estate historically beat inflation over decades.'
    ],
    takeawaysHinglish: [
      'Savings account me rakha paisa mehngai se peeche chhoot jata hai.',
      'Real Return = Return minus Inflation.',
      'Long term me Stocks aur Equity index inflation ko beat karte hain.'
    ],
    quiz: [
      {
        id: 'q30-1',
        question: 'If your investment returns 8% and inflation is 6%, what is your real rate of return?',
        questionHinglish: 'Agar return 8% hai aur inflation 6%, toh aapka real return kitna hua?',
        options: ['14%', '2%', '8%', '0%'],
        optionsHinglish: ['14%', '2%', '8%', '0%'],
        correctAnswerIndex: 1,
        explanation: 'Real Return = 8% - 6% = 2%. Purchasing power grows by 2%.',
        explanationHinglish: 'Real return 8% me se 6% inflation minus karke 2% banta hai.'
      }
    ]
  },
  {
    id: 'lesson-31',
    order: 31,
    title: 'Rule of 72: Doubling Your Money Math',
    titleHinglish: 'Rule of 72: Paisa Double Karne Ka Formula',
    category: 'Saving',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'The Rule of 72 is a quick mental math shortcut to estimate how many years it will take for an investment to double at a given annual return rate.',
      'Formula: Divide 72 by the annual return rate. Example: At 12% stock market returns, 72 ÷ 12 = 6 years to double money.',
      'At a 6% FD rate, 72 ÷ 6 = 12 years to double money. This demonstrates the power of seeking higher compound interest rates.'
    ],
    contentHinglish: [
      'Rule of 72 ek simple mental math formula hai jo batata hai kitne saal me aapka paisa double hoga.',
      'Formula: 72 ÷ Interest Rate. Agar 12% return mil raha hai, toh 72 ÷ 12 = 6 saal me paisa double.',
      'FD me 6% milne par 72 ÷ 6 = 12 saal lagenge. Ye higher returns ki power dikhata hai.'
    ],
    takeaways: [
      'Years to Double = 72 divided by Annual Interest Rate.',
      'At 12% return, money doubles every 6 years.',
      'Helps evaluate and compare investment options quickly.'
    ],
    takeawaysHinglish: [
      'Paisa double hone ke saal = 72 ÷ Return Rate.',
      '12% return par har 6 saal me paisa double.',
      'Investment compare karne ke liye quick tool hai.'
    ],
    quiz: [
      {
        id: 'q31-1',
        question: 'Using the Rule of 72, how long will it take to double money at 9% interest?',
        questionHinglish: 'Rule of 72 se, 9% interest par paisa double hone me kitne saal lagenge?',
        options: ['8 years', '10 years', '72 years', '5 years'],
        optionsHinglish: ['8 saal', '10 saal', '72 saal', '5 saal'],
        correctAnswerIndex: 0,
        explanation: '72 ÷ 9 = 8 years to double your investment capital.',
        explanationHinglish: '72 ko 9 se divide karne par 8 saal nikalta hai.'
      }
    ]
  },
  {
    id: 'lesson-32',
    order: 32,
    title: 'Old vs New Income Tax Regime',
    titleHinglish: 'Old vs New Tax Regime: Kon Sahi Hai?',
    category: 'Tax',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'India introduced the New Tax Regime with lower slab rates but zero deductions (no 80C, 80D, HRA exemptions).',
      'The Old Tax Regime offers higher slab rates but allows extensive tax deductions through 80C (PPF/ELSS), 80D (Health Insurance), and Home Loan Interest.',
      'If your total claimable tax deductions exceed ₹3.75 Lakhs, the Old Regime is generally cheaper; otherwise, the New Regime wins on simplicity.'
    ],
    contentHinglish: [
      'New Tax Regime me tax rates kam hain par koi 80C, 80D ya HRA ki tax deduction nahi milti.',
      'Old Tax Regime me 80C, 80D aur Home Loan interest ki vajah se tax kam ho jata hai.',
      'Agar deductions ₹3.75 Lakh se zyada hain toh Old Regime, varna New Regime best hai.'
    ],
    takeaways: [
      'New Regime is default with simpler slabs and zero paperwork.',
      'Old Regime rewards disciplined tax-saving investments.',
      'Calculate net tax under both regimes before filing ITR.'
    ],
    takeawaysHinglish: [
      'New regime simple hai bina kisi paperwork ke.',
      'Old regime me 80C/80D se tax kafi save hota hai.',
      'ITR file karne se pehle dono me tax calculate karke compare karo.'
    ],
    quiz: [
      {
        id: 'q32-1',
        question: 'Which of the following is true regarding the New Income Tax Regime in India?',
        questionHinglish: 'New Income Tax Regime ke baare me kya sach hai?',
        options: ['It offers lower tax slab rates but forfeits Section 80C deductions', 'It requires 100% investment in physical gold', 'It charges 50% tax on everyone', 'It allows ₹5 Lakh extra 80C deduction'],
        optionsHinglish: ['Tax rates kam hain lekin 80C deductions nahi milti', 'Gold me 100% invest karna zaroori hai', 'Sab par 50% tax lagta hai', '₹5 Lakh extra 80C deduction milta hai'],
        correctAnswerIndex: 0,
        explanation: 'The New Regime trades off deductions for lower overall slab tax rates.',
        explanationHinglish: 'New regime me tax rates saste hain par deductions khatam ho jaati hain.'
      }
    ]
  },
  {
    id: 'lesson-33',
    order: 33,
    title: 'Tax Deducted at Source (TDS) & Form 15G/15H',
    titleHinglish: 'TDS Kya Hai Aur Form 15G/15H Kaise Bharein',
    category: 'Tax',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'TDS is tax deducted upfront by payers (like employers or banks) before transferring money to you.',
      'Banks deduct 10% TDS on FD interest if total interest across branches exceeds ₹40,000 per year (₹50,000 for senior citizens).',
      'If your total annual income is below the taxable limit, submit Form 15G (or Form 15H for seniors) to prevent unwanted TDS deduction.'
    ],
    contentHinglish: [
      'TDS wo tax hai jo bank ya employer aapko payment dene se pehle kaat leta hai.',
      'Bank FD interest ₹40,000/year se upar hone par 10% TDS kat-ta hai.',
      'Agar aapki total income tax slab se kam hai, toh Form 15G/15H dekar TDS katne se bach sakte ho.'
    ],
    takeaways: [
      'TDS is credited against your total tax liability in Form 26AS.',
      'Submit Form 15G if income is below exemption limit.',
      'Claim TDS refunds by filing Income Tax Return (ITR).'
    ],
    takeawaysHinglish: [
      'Kata hua TDS Form 26AS me dikhta hai.',
      'Low income wale Form 15G dekar TDS bachayein.',
      'ITR file karke kata hua TDS wapas refund le sakte ho.'
    ],
    quiz: [
      {
        id: 'q33-1',
        question: 'Why do non-taxable individuals submit Form 15G to banks?',
        questionHinglish: 'Jinpar tax nahi banta wo bank me Form 15G kyu jama karte hain?',
        options: ['To prevent banks from deducting TDS on FD interest', 'To open a free credit card', 'To double FD interest rate', 'To close bank accounts instantly'],
        optionsHinglish: ['Bank FD par TDS katne se rokne ke liye', 'Free credit card lene ke liye', 'Interest rate double karne ke liye', 'Account close karne ke liye'],
        correctAnswerIndex: 0,
        explanation: 'Form 15G declares that your income is below taxable limits, instructing banks not to deduct TDS.',
        explanationHinglish: 'Form 15G se bank ko pata chalta hai aapki income tax free limit me hai, toh wo TDS nahi kat-te.'
      }
    ]
  },
  {
    id: 'lesson-34',
    order: 34,
    title: 'The 50/30/20 Budgeting Rule',
    titleHinglish: '50/30/20 Rule: Golden Formula',
    category: 'Budgeting',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'The 50/30/20 rule is an intuitive framework for allocating monthly net income.',
      '50% goes to Needs (Rent, groceries, utilities, minimum debt payments).',
      '30% goes to Wants (Dining out, shopping, hobbies, trips). 20% goes to Savings & Investments (SIPs, Emergency Fund, PPF).'
    ],
    contentHinglish: [
      '50/30/20 rule monthly income ko manage karne ka golden formula hai.',
      '50% Needs (Rent, ration, bills), 30% Wants (Ghoomna, dining out, shopping).',
      '20% Savings & Investments (SIP, Mutual Funds, Emergency Fund).'
    ],
    takeaways: [
      '50% Needs, 30% Wants, 20% Investments.',
      'Prevents overspending on lifestyle desires.',
      'Increase savings percentage above 20% as income grows.'
    ],
    takeawaysHinglish: [
      '50% Zaroorat, 30% Shock, 20% Bachat.',
      'Lifestyle kharcho ko limit me rakhta hai.',
      'Salary badhne par savings 20% se badha kar 40% karein.'
    ],
    quiz: [
      {
        id: 'q34-1',
        question: 'Under the 50/30/20 rule, what percentage of income should be saved/invested?',
        questionHinglish: '50/30/20 rule ke according kitna % invest/save karna chahiye?',
        options: ['20%', '50%', '30%', '5%'],
        optionsHinglish: ['20%', '50%', '30%', '5%'],
        correctAnswerIndex: 0,
        explanation: 'At least 20% of net monthly income must be directed toward future financial goals and investments.',
        explanationHinglish: 'Kam se kam 20% net income savings aur SIP me jaana zaroori hai.'
      }
    ]
  }
];
