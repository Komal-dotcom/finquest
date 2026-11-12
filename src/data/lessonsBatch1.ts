import { Lesson } from '../types';

export const LESSONS_BATCH_1: Lesson[] = [
  {
    id: 'lesson-19',
    order: 19,
    title: 'Understanding Debt & Credit',
    titleHinglish: 'Debt aur Credit Samjho',
    category: 'Debt',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'Debt can be a double-edged sword. Good debt builds assets or income (like home loans or education loans), while bad debt consumes your wealth through high interest.',
      'High-interest debts like credit card balances and personal loans can compound against you rapidly if you only pay minimum dues.',
      'Always prioritize paying off debts with interest rates above 12% before allocating heavy capital to volatile investments.'
    ],
    contentHinglish: [
      'Debt do-dhari talwar jaisa hai. Acha debt tumhari wealth badhata hai (jaise home loan), jabki buri debt high interest me tumhara paisa khatam karti hai.',
      'Credit card bills aur personal loans me high interest hota hai. Agar sirf minimum amount bhroge toh debt trap me phass jaoge.',
      'Sabse pehle 12%+ interest wale high loans chukao, uske baad hi stock market me zyada invest karo.'
    ],
    takeaways: [
      'Good debt creates long-term value; bad debt funds consumption.',
      'Paying off 18% credit card debt is equivalent to an 18% guaranteed return.',
      'Clear high-interest liabilities before aggressive investing.'
    ],
    takeawaysHinglish: [
      'Good debt se asset banta hai, bad debt se kharcha hota hai.',
      '18% credit card bill chukana 18% guaranteed return paane jaisa hai.',
      'High-interest loans ko jaldi se jaldi k खत्म karo.'
    ],
    quiz: [
      {
        id: 'q19-1',
        question: 'Which type of debt is generally considered bad debt?',
        questionHinglish: 'Inme se konsa debt bad debt mana jata hai?',
        options: ['High-interest Credit Card Balance', 'Education Loan for Career Growth', 'Home Loan with Low Interest', 'Business Expansion Loan'],
        optionsHinglish: ['High-interest Credit Card Balance', 'Career Growth ke liye Education Loan', 'Low Interest Home Loan', 'Business Expansion Loan'],
        correctAnswerIndex: 0,
        explanation: 'Credit card debt carries exorbitant interest rates (up to 40% per annum) without generating appreciating assets.',
        explanationHinglish: 'Credit card balance par bohot high interest lagta hai aur isse koi asset nahi banta.'
      }
    ]
  },
  {
    id: 'lesson-20',
    order: 20,
    title: 'Emergency Fund Masterclass',
    titleHinglish: 'Emergency Fund Banane Ka Tarika',
    category: 'Saving',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'An Emergency Fund is your financial airbag. It covers 3 to 6 months of essential living expenses in case of unexpected job loss or medical emergencies.',
      'Keep your emergency fund in high-liquidity instruments like savings bank accounts, sweep-in fixed deposits, or liquid mutual funds.',
      'Never invest your emergency money in equity stocks or real estate where value fluctuates or withdrawal takes days.'
    ],
    contentHinglish: [
      'Emergency Fund tumhari financial safety net hai. Ye job loss ya emergency me 3-6 mahine ke kharche cover karta hai.',
      'Is paise ko savings account, sweep-in FD, ya liquid mutual fund me rakho jisse zarurat padte hi nikal sako.',
      'Emergency paise ko kabhi stocks ya real estate me mat lagao jahan value up-down ho sakti hai.'
    ],
    takeaways: [
      'Aim for 6 months of basic living expenses in your reserve.',
      'Prioritize instant liquidity over maximum interest returns.',
      'Replenish the fund immediately after using it.'
    ],
    takeawaysHinglish: [
      '6 mahine ke zaroori expenses hamesha reserve me rakho.',
      'High returns se zyada fast withdrawal par dhyan do.',
      'Kharach hone par emergency fund ko wapas fill karo.'
    ],
    quiz: [
      {
        id: 'q20-1',
        question: 'Where should you ideally store your Emergency Fund?',
        questionHinglish: 'Emergency Fund kahan rakhna sabse best hai?',
        options: ['High-risk Growth Stocks', 'Liquid Funds or High-yield Savings Account', 'Cryptocurrency Wallet', '10-year Locked Real Estate'],
        optionsHinglish: ['High-risk Growth Stocks', 'Liquid Funds ya Savings Account', 'Cryptocurrency Wallet', '10-year Real Estate Lock-in'],
        correctAnswerIndex: 1,
        explanation: 'Emergency funds must be stored in ultra-safe, instantly accessible accounts.',
        explanationHinglish: 'Emergency fund ka main goal safety aur turant withdrawal flexibility hota hai.'
      }
    ]
  },
  {
    id: 'lesson-21',
    order: 21,
    title: 'How Credit Scores Work (CIBIL 101)',
    titleHinglish: 'CIBIL Credit Score Kaise Badhayein',
    category: 'Debt',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Your CIBIL score (300 to 900) measures your creditworthiness based on payment history, credit utilization, credit age, and loan mix.',
      'A score above 750 unlocks lower interest rates on home loans, instant credit card approvals, and higher borrowing limits.',
      'To maintain a 750+ score, pay 100% of your bills on time and keep credit card utilization below 30% of your credit limit.'
    ],
    contentHinglish: [
      'Tumhara CIBIL score (300-900) ye batata hai ki tum kitne responsible borrower ho. Isse banks loan aur rates decide karte hain.',
      '750+ score milne par low-interest loans, faster approvals aur acche credit cards milte hain.',
      'Score strong rakhne ke liye hamesha time par bill bharo aur credit limit ka 30% se kam kharch karo.'
    ],
    takeaways: [
      'Maintain payment timeliness to prevent score drops.',
      'Keep credit utilization under 30% per billing cycle.',
      'Check your free CIBIL report once every quarter for errors.'
    ],
    takeawaysHinglish: [
      'Bills late bharna CIBIL score ko damage karta hai.',
      'Credit limit ka maximum 30% hi use karo.',
      'Har quarter free CIBIL report check karo.'
    ],
    quiz: [
      {
        id: 'q21-1',
        question: 'What credit score is considered ideal by Indian banks?',
        questionHinglish: 'Indian banks ke hisab se konsa credit score ideal mana jata hai?',
        options: ['300 to 500', '750 to 900', '100 to 300', '500 to 600'],
        optionsHinglish: ['300 se 500', '750 se 900', '100 se 300', '500 se 600'],
        correctAnswerIndex: 1,
        explanation: 'A CIBIL score of 750+ proves reliable repayment behavior to lenders.',
        explanationHinglish: '750+ score batata hai ki aapne past me saare loans time par chukaye hain.'
      }
    ]
  },
  {
    id: 'lesson-22',
    order: 22,
    title: 'The Magic of SIP (Systematic Investment Plan)',
    titleHinglish: 'SIP Ki Takaat Aur Benefits',
    category: 'Investing',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly into mutual funds on a chosen date every month.',
      'SIP leverages Rupee Cost Averaging: you buy more mutual fund units when markets drop and fewer when markets rise.',
      'Starting an SIP of even ₹1,000/month in early 20s can build lakhs over a decade thanks to compounding compounding.'
    ],
    contentHinglish: [
      'SIP (Systematic Investment Plan) se tum har mahine fixed date par mutual fund me auto-invest kar sakte ho.',
      'Isse Rupee Cost Averaging ka fayda milta hai: jab market girta hai toh zyada units milti hain aur upar jane par profit hota hai.',
      'Early age me sirf ₹1,000 per month ki SIP se bhi compounding ki wajah se bada corpus ban jata hai.'
    ],
    takeaways: [
      'Automates disciplined investing without market timing anxiety.',
      'Rupee cost averaging smoothens market volatility.',
      'Consistency matters far more than starting with a huge amount.'
    ],
    takeawaysHinglish: [
      'Market timing ke tension bina automatic investment hoti hai.',
      'Market ke उतार-चढ़ाव ko balance karta hai.',
      'Amount se zyada regularity matter karti hai.'
    ],
    quiz: [
      {
        id: 'q22-1',
        question: 'What key benefit does Rupee Cost Averaging offer SIP investors?',
        questionHinglish: 'Rupee Cost Averaging se SIP investor ko kya fayda hota hai?',
        options: ['Guaranteed zero tax', 'Automated buying of more units when markets are low', 'Doubling money in 30 days', 'Exemption from expense ratio'],
        optionsHinglish: ['Guaranteed zero tax', 'Market sasta hone par auto-buying me zyada units milna', '30 din me paisa double', 'Expense ratio nahi lagna'],
        correctAnswerIndex: 1,
        explanation: 'Rupee cost averaging means lower prices automatically buy you higher quantity of units.',
        explanationHinglish: 'Market jab niche girta hai toh aapko utne hi paise me zyada units milti hain.'
      }
    ]
  },
  {
    id: 'lesson-23',
    order: 23,
    title: 'Index Funds vs Active Mutual Funds',
    titleHinglish: 'Index Funds vs Active Mutual Funds',
    category: 'Investing',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Index Funds passively replicate benchmark indices like Nifty 50 or Sensex with ultra-low expense ratios (0.05% to 0.20%).',
      'Active Mutual Funds hire fund managers who try to beat market indices by picking specific stocks, charging higher fees (1.0% to 2.2%).',
      'Historical studies show over 80% of active fund managers fail to beat simple low-cost Index funds over 10-15 year horizons.'
    ],
    contentHinglish: [
      'Index Funds passively Nifty 50 ya Sensex ko copy karte hain. Inka fee/expense ratio bohot kam hota hai (0.1%).',
      'Active Funds me fund manager stocks chun kar market ko beat karne ki koshish karta hai, isliye iska expense ratio mehnga hota hai (1.5%+).',
      'Long term me 80% se zyada active managers simple Index Fund ko beat nahi kar paate.'
    ],
    takeaways: [
      'Index funds offer low cost and high market probability.',
      'High expense ratios compound silently into significant lost returns.',
      'Nifty 50 Index funds are ideal core holdings for beginner investors.'
    ],
    takeawaysHinglish: [
      'Index funds me low charges aur high consistency milti hai.',
      'High expense ratio se long term returns kam hote hain.',
      'Beginners ke liye Nifty 50 Index Fund sabse safe start hai.'
    ],
    quiz: [
      {
        id: 'q23-1',
        question: 'Why do Index Funds have lower expense ratios than Active Funds?',
        questionHinglish: 'Index Funds ka expense ratio Active Funds se kam kyu hota hai?',
        options: ['They don\'t require active stock-picking managers', 'They are illegal to trade', 'They pay zero dividends', 'They are only for government employees'],
        optionsHinglish: ['Inme active stock-picking fund manager ki zaroorat nahi hoti', 'Ye trade karna illegal hai', 'Ye zero dividend dete hain', 'Ye sirf govt staff ke liye hain'],
        correctAnswerIndex: 0,
        explanation: 'Index funds passively mirror an index, reducing research team and management costs.',
        explanationHinglish: 'Index funds automatic index copy karte hain isliye costly fund manager ki salary nahi deni padti.'
      }
    ]
  },
  {
    id: 'lesson-24',
    order: 24,
    title: 'Exchange Traded Funds (ETFs) Demystified',
    titleHinglish: 'ETFs Kya Hain Aur Kaise Buy Karein',
    category: 'Investing',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'ETFs (Exchange Traded Funds) are mutual fund structures that trade on stock exchanges like real-time shares.',
      'You need a Demat and Trading account to buy ETF units during market trading hours (9:15 AM to 3:30 PM).',
      'Popular ETFs in India include Nifty BeES, Gold BeES, and Bank BeES, offering instant diversification.'
    ],
    contentHinglish: [
      'ETF (Exchange Traded Fund) wo funds hain jinhe aap direct stock market hours me shares ki tarah live khareed sakte ho.',
      'ETF buy karne ke liye Demat aur Trading account zaroori hota hai.',
      'India me Nifty BeES aur Gold BeES jaise popular ETFs instant diversification dete hain.'
    ],
    takeaways: [
      'ETFs trade live on exchanges like regular company stocks.',
      'Requires a Demat account for execution.',
      'Combines mutual fund diversification with stock liquidity.'
    ],
    takeawaysHinglish: [
      'ETFs real-time stock market rates par buy-sell hote hain.',
      'Demat account hona zaroori hai.',
      'Mutual fund ki safety aur stock ki liquidity ek sath milti hai.'
    ],
    quiz: [
      {
        id: 'q24-1',
        question: 'What account is strictly required to buy ETFs?',
        questionHinglish: 'ETF buy karne ke liye konsa account mandatory hai?',
        options: ['Demat and Trading Account', 'Fixed Deposit Account', 'Post Office Savings Account', 'Current Account'],
        optionsHinglish: ['Demat aur Trading Account', 'Fixed Deposit Account', 'Post Office Account', 'Current Account'],
        correctAnswerIndex: 0,
        explanation: 'Since ETFs trade on stock exchanges like NSE/BSE, a Demat and broker account is required.',
        explanationHinglish: 'ETFs stock exchange par trade hote hain isliye Demat account zaroori hai.'
      }
    ]
  },
  {
    id: 'lesson-25',
    order: 25,
    title: 'Public Provident Fund (PPF) & Tax Benefits',
    titleHinglish: 'PPF Scheme Aur Tax Relief',
    category: 'Tax',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'PPF is a government-backed, long-term savings scheme offering EEE (Exempt-Exempt-Exempt) tax status.',
      'You can invest up to ₹1.5 Lakh per financial year under Section 80C. Your principal, interest, and maturity proceeds are 100% tax-free.',
      'PPF has a 15-year tenure with sovereign security, making it a cornerstone for risk-averse long-term wealth compounding.'
    ],
    contentHinglish: [
      'PPF Govt-backed safe investment hai jo EEE (Exempt-Exempt-Exempt) status ke sath aati hai.',
      'Section 80C ke tahat saal ka ₹1.5 Lakh tak tax bachaya ja sakta hai. Investment, interest aur maturity teeno 100% tax-free hote hain.',
      'Iska lock-in 15 saal hota hai, jo safe long-term wealth ke liye perfect hai.'
    ],
    takeaways: [
      'Guaranteed EEE tax-free status backed by Government of India.',
      'Max investment ₹1.5 Lakh per financial year under 80C.',
      '15-year lock-in enforces disciplined compounding.'
    ],
    takeawaysHinglish: [
      'Govt guarantee aur 100% tax-free maturity.',
      'Saal ka maximum ₹1.5 Lakh invest kar sakte ho.',
      '15 saal lock-in se disciplined saving hoti hai.'
    ],
    quiz: [
      {
        id: 'q25-1',
        question: 'What does the EEE tax status in PPF signify?',
        questionHinglish: 'PPF ka EEE tax status kya batata hai?',
        options: ['Exempt on deposit, interest, and final maturity', 'Expense, Earnings, and Equity', 'Eligible Every Financial Year', 'Exempt only for Senior Citizens'],
        optionsHinglish: ['Deposit, interest aur maturity teeno par zero tax', 'Expense, Earnings aur Equity', 'Har saal sirf deposit exempt', 'Sirf seniors ke liye tax-free'],
        correctAnswerIndex: 0,
        explanation: 'EEE means your investment reduces taxable income, interest earned is tax-free, and maturity amount is tax-free.',
        explanationHinglish: 'Deposit par 80C deduction milta hai, interest par zero tax lagta hai, aur maturity bhi full tax-free hoti hai.'
      }
    ]
  },
  {
    id: 'lesson-26',
    order: 26,
    title: 'National Pension System (NPS)',
    titleHinglish: 'National Pension Scheme (NPS)',
    category: 'Retirement',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'NPS is a low-cost voluntary retirement scheme regulated by PFRDA combining equity, corporate debt, and government securities.',
      'NPS offers an exclusive additional tax deduction of up to ₹50,000 under Section 80CCD(1B) over and above the ₹1.5 Lakh 80C limit.',
      'At age 60, up to 60% of corpus can be withdrawn tax-free, while 40% goes into an annuity providing regular lifelong pension.'
    ],
    contentHinglish: [
      'NPS retirement ke liye low-cost plan hai jisme equity aur bonds dono ka mix milta hai.',
      'Section 80CCD(1B) me 80C ke ₹1.5 Lakh ke alawa extra ₹50,000 ka tax deduction milta hai.',
      '60 ki umar me 60% paisa tax-free nikal sakte ho aur 40% se lifelong monthly pension milti hai.'
    ],
    takeaways: [
      'Additional ₹50,000 tax deduction under 80CCD(1B).',
      'Market-linked equity returns for retirement building.',
      'Provides guaranteed annuity pension stream post-retirement.'
    ],
    takeawaysHinglish: [
      '80C ke alawa extra ₹50,000 tax saving.',
      'Equity mix hone se inflation ko beat karne wale returns.',
      'Retirement ke baad regular monthly pension.'
    ],
    quiz: [
      {
        id: 'q26-1',
        question: 'How much extra tax deduction does NPS offer under Section 80CCD(1B)?',
        questionHinglish: 'NPS me Section 80CCD(1B) ke tahat kitna extra tax deduction milta hai?',
        options: ['₹1,50,000', '₹50,000', '₹20,000', '₹1,00,000'],
        optionsHinglish: ['₹1,50,000', '₹50,000', '₹20,000', '₹1,00,000'],
        correctAnswerIndex: 1,
        explanation: 'Section 80CCD(1B) allows an exclusive additional ₹50,000 tax deduction dedicated to NPS.',
        explanationHinglish: 'NPS me 80C ke alawa alag se ₹50,000 ka deduction claim kar sakte ho.'
      }
    ]
  },
  {
    id: 'lesson-27',
    order: 27,
    title: 'Gold: Physical vs Digital vs Sovereign Gold Bonds',
    titleHinglish: 'Gold Investment: Physical, Digital ya SGB?',
    category: 'Investing',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Indians love gold, but physical jewelry incurs high making charges (10%-25%) and storage safety risks.',
      'Sovereign Gold Bonds (SGB) issued by RBI offer 2.5% annual interest on top of gold price appreciation and zero capital gains tax if held to 8-year maturity.',
      'Digital Gold and Gold ETFs offer fractional ownership without making charges or locker fees.'
    ],
    contentHinglish: [
      'Physical gold me making charges (10-25%) aur theft ka risk rehta hai.',
      'RBI ke Sovereign Gold Bonds (SGB) me gold price growth ke sath saalaan 2.5% fixed interest aur maturity par zero tax milta hai.',
      'Digital Gold aur Gold ETFs se chote amounts me bhi gold me invest kar sakte ho.'
    ],
    takeaways: [
      'SGBs are the most tax-efficient way to invest in gold.',
      'Physical jewelry is an inefficient investment due to making fees.',
      'Gold acts as an inflation hedge and portfolio stabilizer.'
    ],
    takeawaysHinglish: [
      'SGB gold investment ka sabse smart aur tax-free tarika hai.',
      'Jewelry me making charges ke wajah se returns kam hote hain.',
      'Gold crisis ke time portfolio ko crash hone se bachata hai.'
    ],
    quiz: [
      {
        id: 'q27-1',
        question: 'What extra benefit do Sovereign Gold Bonds (SGBs) offer compared to physical gold?',
        questionHinglish: 'Physical gold ke comparison me SGB ka konsa extra benefit hai?',
        options: ['2.5% annual interest + zero capital gains tax at maturity', 'Free physical delivery at home every month', 'Zero risk of market price change', 'Free gold coin bonus'],
        optionsHinglish: ['2.5% saalaan interest + maturity par zero tax', 'Har mahine free physical delivery', 'Market rate change hone ka zero risk', 'Free gold coin bonus'],
        correctAnswerIndex: 0,
        explanation: 'SGBs pay 2.5% per annum interest paid semi-annually and tax exemption at 8-year maturity.',
        explanationHinglish: 'SGB me 2.5% extra interest ke sath 8 saal maturity par koi capital gains tax nahi lagta.'
      }
    ]
  }
];
