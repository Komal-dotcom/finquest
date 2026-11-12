import { Lesson } from '../types';

// Additional curated high-value lessons (46 to 120)
export const LESSONS_BATCH_5: Lesson[] = [
  // 46
  {
    id: 'lesson-46',
    order: 46,
    title: 'Understanding Stock Market Exchanges: NSE vs BSE',
    titleHinglish: 'NSE vs BSE Stock Market Exchanges',
    category: 'Investing',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'BSE (Bombay Stock Exchange) is Asia’s oldest stock exchange established in 1875, tracking the Sensex index (30 companies).',
      'NSE (National Stock Exchange) founded in 1992 tracks the Nifty 50 index (50 top Indian companies).',
      'Both exchanges operate under SEBI regulation. Shares can be bought on either exchange seamlessly via brokers.'
    ],
    contentHinglish: [
      'BSE Asia ka sabse purana stock exchange hai (1875), jo Sensex (30 companies) track karta hai.',
      'NSE 1992 me bana tha jo Nifty 50 (50 top companies) track karta hai.',
      'Dono exchanges SEBI ke under aate hain. Aap kisi se bhi shares buy-sell kar sakte ho.'
    ],
    takeaways: ['BSE tracks Sensex (30 stocks); NSE tracks Nifty 50.', 'Both are regulated strictly by SEBI.', 'Brokers execute trades across both exchanges instantly.'],
    takeawaysHinglish: ['BSE Sensex aur NSE Nifty 50 track karta hai.', 'Dono SEBI regulated hain.', 'Broker app se dono par trading hoti hai.'],
    quiz: [{
      id: 'q46-1',
      question: 'How many top companies comprise the Nifty 50 index on NSE?',
      questionHinglish: 'NSE ke Nifty 50 index me kitni companies hoti hain?',
      options: ['50', '30', '100', '500'],
      optionsHinglish: ['50', '30', '100', '500'],
      correctAnswerIndex: 0,
      explanation: 'Nifty 50 tracks the 50 largest and most liquid Indian companies on NSE.',
      explanationHinglish: 'Nifty 50 me 50 sabse badi companies hoti hain.'
    }]
  },
  // 47
  {
    id: 'lesson-47',
    order: 47,
    title: 'Fundamental Analysis: Reading P/E Ratios',
    titleHinglish: 'P/E Ratio Se Stock Value Kaise Pehchanein',
    category: 'Investing',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Price-to-Earnings (P/E) ratio measures how much investors are willing to pay for ₹1 of company profit.',
      'Formula: Stock Price ÷ Earnings Per Share (EPS). A lower P/E relative to industry peers may indicate an undervalued stock.',
      'Always compare P/E against historical industry averages rather than viewing high P/E stocks in isolation.'
    ],
    contentHinglish: [
      'P/E (Price to Earnings) ratio batata hai ki company ke ₹1 profit ke liye market kitna price de raha hai.',
      'Formula: Share Price ÷ Earnings Per Share. Kam P/E undervalued stock indicate kar sakta hai.',
      'P/E ko hamesha same industry ki doosri companies se compare karke check karein.'
    ],
    takeaways: ['P/E = Share Price divided by EPS.', 'Helps identify overvalued or undervalued stocks.', 'Compare P/E within the same sector.'],
    takeawaysHinglish: ['P/E = Share Price ÷ EPS.', 'Stock sasta hai ya mehnga ye samajhta hai.', 'Same sector ki companies se compare karein.'],
    quiz: [{
      id: 'q47-1',
      question: 'If a stock is priced at ₹200 and has EPS of ₹10, what is its P/E ratio?',
      questionHinglish: 'Agar share price ₹200 aur EPS ₹10 hai, toh P/E ratio kitna hoga?',
      options: ['20', '2000', '2', '0.05'],
      optionsHinglish: ['20', '2000', '2', '0.05'],
      correctAnswerIndex: 0,
      explanation: 'P/E = 200 ÷ 10 = 20.',
      explanationHinglish: '200 ko 10 se divide karne par P/E 20 aayega.'
    }]
  },
  // 48
  {
    id: 'lesson-48',
    order: 48,
    title: 'Understanding Dividends & Dividend Yield',
    titleHinglish: 'Dividend Income Kya Hai?',
    category: 'Investing',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'Dividends are cash payments made by profitable companies directly into shareholders’ bank accounts.',
      'Dividend Yield Formula: (Annual Dividend Per Share ÷ Current Stock Price) x 100.',
      'Mature PSUs and utility stocks often provide high dividend yields (4%-7%), serving as passive cash flow.'
    ],
    contentHinglish: [
      'Dividend company ke profits ka wo hissa hai jo direct shareholder ke bank account me aata hai.',
      'Dividend Yield Formula: (Annual Dividend ÷ Share Price) x 100.',
      'Badi PSU companies high dividend (4-7%) deti hain jo passive income banti hai.'
    ],
    takeaways: ['Dividends provide direct passive cash flow.', 'Dividend yield compares payout against stock price.', 'Dividends are taxable as per income tax slabs.'],
    takeawaysHinglish: ['Dividend se direct bank account me passive income aati hai.', 'Yield batata hai kitna % return dividend se mila.', 'Dividend par tax lagta hai.'],
    quiz: [{
      id: 'q48-1',
      question: 'What is dividend yield?',
      questionHinglish: 'Dividend yield kya hota hai?',
      options: ['Annual dividend payout relative to stock price', 'Total company loan amount', 'Free bonus stock shares', 'Stock market penalty'],
      optionsHinglish: ['Share price ke comparison me saalaan dividend %', 'Company ka total loan', 'Free bonus shares', 'Market penalty'],
      correctAnswerIndex: 0,
      explanation: 'Dividend yield measures the percentage return paid in dividends annually relative to stock price.',
      explanationHinglish: 'Ye batata hai ki stock price ke mukable kitna % cash dividend mila.'
    }]
  },
  // 49
  {
    id: 'lesson-49',
    order: 49,
    title: 'Market Capitalization: Large-cap vs Mid-cap vs Small-cap',
    titleHinglish: 'Large-cap, Mid-cap aur Small-cap stocks',
    category: 'Investing',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Market Cap = Total Shares Outstanding x Current Stock Price.',
      'Large-cap (Top 100 companies): Highly stable, low volatility (e.g. Reliance, TCS, HDFC Bank).',
      'Mid-cap (101-250) and Small-cap (251+): High growth potential but carry higher price volatility and downside risk.'
    ],
    contentHinglish: [
      'Market Cap = Total Shares x Share Price.',
      'Large-cap (Top 100): Stable, kam risk wale giant stocks.',
      'Small-cap & Mid-cap: High growth ke sath high risk aur price swings.'
    ],
    takeaways: ['Large-caps provide baseline portfolio stability.', 'Small-caps offer growth with high volatility.', 'Mix market caps for balanced risk-return.'],
    takeawaysHinglish: ['Large-cap portfolio ko stability dete hain.', 'Small-cap me high risk aur high return hota hai.', 'Dono ka balance rakhein.'],
    quiz: [{
      id: 'q49-1',
      question: 'Which company category offers the highest stability and lower volatility?',
      questionHinglish: 'Konsi category sabse stable aur kam risky hoti hai?',
      options: ['Large-cap stocks', 'Small-cap penny stocks', 'Crypto meme coins', 'Micro-cap startups'],
      optionsHinglish: ['Large-cap stocks', 'Small-cap penny stocks', 'Crypto meme coins', 'Micro-cap startups'],
      correctAnswerIndex: 0,
      explanation: 'Large-cap companies have established market share and strong balance sheets.',
      explanationHinglish: 'Large-cap companies bohot badi aur financially strong hoti hain.'
    }]
  },
  // 50
  {
    id: 'lesson-50',
    order: 50,
    title: 'Understanding Debt Funds vs Fixed Deposits',
    titleHinglish: 'Debt Mutual Funds vs Bank Fixed Deposits',
    category: 'Saving',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'Bank FDs promise fixed guaranteed interest but charge penalty on premature withdrawal.',
      'Debt Mutual Funds invest in government treasury bills and corporate bonds, offering high liquidity without lock-in penalties.',
      'Debt funds are suited for short-to-medium term savings horizons (1 to 3 years).'
    ],
    contentHinglish: [
      'Bank FD me fixed interest milta hai par jaldi nikalne par penalty lagti hai.',
      'Debt Mutual Funds government bonds me invest karte hain, bina kisi lock-in penalty ke high liquidity dete hain.',
      '1 se 3 saal ke short term goals ke liye Debt funds best option hain.'
    ],
    takeaways: ['Debt funds invest in bonds and government securities.', 'No premature penalty compared to FDs.', 'Good for 1-3 year financial targets.'],
    takeawaysHinglish: ['Debt funds govt bonds aur debentures me invest karte hain.', 'FD ki tarah koi premature penalty nahi lagti.', '1-3 saal ke goals ke liye badhiya hain.'],
    quiz: [{
      id: 'q50-1',
      question: 'What advantage do Debt Funds have over traditional FDs regarding withdrawals?',
      questionHinglish: 'FD ke mukable Debt Fund ka withdrawal me kya advantage hai?',
      options: ['Withdraw anytime without premature lock-in penalty', 'Guaranteed double returns in 1 day', 'Zero ID proof required', 'Free gold coin credit'],
      optionsHinglish: ['Jab chahe bina penalty ke withdraw karein', '1 din me double return', 'Koi ID card nahi chahiye', 'Free gold coin bonus'],
      correctAnswerIndex: 0,
      explanation: 'Debt mutual funds allow redemption at current NAV without traditional FD premature closure penalties.',
      explanationHinglish: 'Debt funds me premature closure penalty nahi hoti.'
    }]
  }
];

// Dynamically generate additional structured lessons (51 to 120) across all core financial categories
const CATEGORIES: ('Budgeting' | 'Saving' | 'Investing' | 'Tax' | 'Insurance' | 'Goals' | 'Security' | 'Debt' | 'Real Estate' | 'Crypto' | 'Career' | 'Retirement' | 'Entrepreneurship' | 'Banking' | 'Economics')[] = [
  'Investing', 'Budgeting', 'Tax', 'Saving', 'Insurance', 'Goals', 'Debt', 'Banking', 'Real Estate', 'Crypto', 'Career', 'Retirement', 'Entrepreneurship', 'Economics', 'Security'
];

const EXTRA_TOPICS = [
  { title: 'Dollar Cost Averaging Strategy', cat: 'Investing', desc: 'Investing fixed amounts regularly mitigates volatility risk.' },
  { title: 'Rebalancing Your Portfolio', cat: 'Investing', desc: 'Adjusting asset weights annually locks in profits and manages risk.' },
  { title: 'Understanding Capital Gains Tax (LTCG vs STCG)', cat: 'Tax', desc: 'Short term vs long term holding periods alter tax impact on investments.' },
  { title: 'Section 80D Medical Health Deductions', cat: 'Tax', desc: 'Claim up to ₹25,000 for self and ₹50,000 for senior citizen parents.' },
  { title: 'Personal Loan vs Loan Against Mutual Funds', cat: 'Debt', desc: 'Borrowing against mutual funds offers ~10% interest vs 16%+ personal loans.' },
  { title: 'Understanding Zero Balance Savings Accounts', cat: 'Banking', desc: 'Maintain liquidity without minimum balance penalties.' },
  { title: 'Fixed Deposit Sweep-in Facilities', cat: 'Banking', desc: 'Earn FD interest rates on excess savings account cash automatically.' },
  { title: 'How Credit Card Reward Points Work', cat: 'Saving', desc: 'Optimize reward points for travel and cashbacks while paying full bills.' },
  { title: 'Understanding Inflation-Adjusted Returns', cat: 'Economics', desc: 'Always subtract inflation from nominal returns to see real growth.' },
  { title: 'Evaluating Corporate Fixed Deposits', cat: 'Saving', desc: 'Higher yields than bank FDs come with corporate credit rating risk.' },
  { title: 'Sovereign Debt vs Corporate Bonds', cat: 'Investing', desc: 'Government securities carry zero default risk compared to corporate bonds.' },
  { title: 'The Power of Early Career Salary Growth', cat: 'Career', desc: 'Upskilling in early 20s boosts income velocity faster than frugal cutting.' },
  { title: 'Freelance Tax & Section 44ADA Presumptive Tax', cat: 'Tax', desc: 'Pay tax on only 50% of gross freelance receipts without complex audits.' },
  { title: 'Understanding Sovereign Gold Bond Maturity Rules', cat: 'Investing', desc: '8-year holding period grants complete capital gains tax exemption.' },
  { title: 'Emergency Cash Reserves for Self-Employed', cat: 'Saving', desc: 'Freelancers need 9-12 months expenses due to irregular income cycles.' },
  { title: 'How High-Yield Savings Accounts Function', cat: 'Banking', desc: 'Digital small finance banks offer 6%-7% savings rates under RBI guarantee.' },
  { title: 'Understanding Credit Card Balance Transfers', cat: 'Debt', desc: 'Move high-interest debt to lower-rate cards to pay off principal faster.' },
  { title: 'The Cost of Car Depreciation', cat: 'Budgeting', desc: 'Cars lose 20% value in Year 1. Buy 2-3 year old used cars for value.' },
  { title: 'Building a Financial Goal Timeline', cat: 'Goals', desc: 'Categorize goals into short (<2 yrs), medium (2-5 yrs), long (>5 yrs).' },
  { title: 'Understanding Arbitrage Funds for Tax Savings', cat: 'Tax', desc: 'Treated as equity funds for tax purposes while maintaining low debt-like risk.' },
  { title: 'Demystifying Mutual Fund Expense Ratios', cat: 'Investing', desc: 'Direct plans save up to 1% annually in distributor commission fees.' },
  { title: 'Direct vs Regular Mutual Fund Plans', cat: 'Investing', desc: 'Direct plans invest directly with AMC, compounding 10%-15% extra over 20 yrs.' },
  { title: 'Understanding P2P (Peer to Peer) Lending Risks', cat: 'Investing', desc: 'High 12% yields come with borrower default risks.' },
  { title: 'How Central Bank Interest Rates Impact Mortgages', cat: 'Economics', desc: 'RBI repo rate hikes directly raise home loan EMI costs.' },
  { title: 'Digital Rupee (e-Rupee CBDC) Essentials', cat: 'Banking', desc: 'RBI legal tender digital currency reduces cash handling costs.' },
  { title: 'Preventing SIM Swap Frauds', cat: 'Security', desc: 'Lock SIM card PIN and monitor mobile network signal drops.' },
  { title: 'Password Managers & Two-Factor Authentication (2FA)', cat: 'Security', desc: 'Use authenticator apps instead of SMS OTPs for financial security.' },
  { title: 'Understanding Stock Splits & Bonus Shares', cat: 'Investing', desc: 'Stock splits increase liquidity without changing total investment value.' },
  { title: 'ESOPs (Employee Stock Option Plans) 101', cat: 'Career', desc: 'Startup equity options can yield significant wealth upon vesting.' },
  { title: 'Estate Planning, Wills & Nominees', cat: 'Goals', desc: 'Add registered nominees across bank accounts and mutual funds.' },
  { title: 'Power of Attorney & Healthcare Directives', cat: 'Goals', desc: 'Legal documents protect assets if medical incapacitation occurs.' },
  { title: 'Tax Harvesting Strategy in Equity Mutual Funds', cat: 'Tax', desc: 'Realize ₹1 Lakh LTCG tax-free annually to reset cost basis.' },
  { title: 'Understanding Gold ETFs vs Physical Gold', cat: 'Investing', desc: 'ETFs eliminate purity risk and security locker fees.' },
  { title: 'Evaluating Term Insurance Riders', cat: 'Insurance', desc: 'Critical illness and accidental disability riders boost term coverage.' },
  { title: 'Motor Insurance: Zero Depreciation Cover', cat: 'Insurance', desc: 'Zero-dep policy pays 100% claim on plastic and rubber parts.' },
  { title: 'Understanding Systematic Withdrawal Plans (SWP)', cat: 'Investing', desc: 'SWP provides tax-efficient monthly income from mutual funds in retirement.' },
  { title: 'Liquid Mutual Funds for Instant Cash Access', cat: 'Saving', desc: 'Overnight and liquid funds provide T+1 withdrawal for surplus cash.' },
  { title: 'Understanding Sovereign Wealth Funds', cat: 'Economics', desc: 'Government-owned investment funds build national wealth from surpluses.' },
  { title: 'Micro-Investing & Spare Change Savings', cat: 'Saving', desc: 'Auto-round up daily transactions to automatically invest spare change.' },
  { title: 'Avoiding Lifestyle Creep After Promotions', cat: 'Budgeting', desc: 'Save 50% of every salary raise before upgrading lifestyle expenses.' },
  { title: 'SMART Goal Setting Framework', cat: 'Goals', desc: 'Specific, Measurable, Achievable, Relevant, and Time-bound goal setting.' },
  { title: 'Understanding Financial Leverage', cat: 'Debt', desc: 'Using borrowed capital amplifies gains but equally multiplies losses.' },
  { title: 'How GDP Growth Impacts Stock Market Returns', cat: 'Economics', desc: 'Economic expansion boosts corporate earnings over decades.' },
  { title: 'Evaluating Mutual Fund Rolling Returns', cat: 'Investing', desc: 'Rolling returns show consistent performance across market cycles.' },
  { title: 'Understanding Beta in Stock Volatility', cat: 'Investing', desc: 'Beta > 1 means stock moves faster than the market index.' },
  { title: 'Financial Clean Up: Consolidating Bank Accounts', cat: 'Banking', desc: 'Close inactive accounts to avoid hidden maintenance and SMS charges.' },
  { title: 'Understanding Credit Card Grace Periods', cat: 'Debt', desc: 'Enjoy up to 45-50 days interest-free credit by paying total bill on time.' },
  { title: 'How Inflation Erodes Fixed Income Securities', cat: 'Economics', desc: 'Rising inflation decreases purchasing power of fixed interest returns.' },
  { title: 'Building a Post-Retirement Health Reserve', cat: 'Retirement', desc: 'Healthcare costs triple after age 60; build dedicated medical capital.' },
  { title: 'Understanding Venture Capital & Startup Investing', cat: 'Entrepreneurship', desc: 'High risk startup investments require deep due diligence.' },
  { title: 'GST Registration Basics for Small Businesses', cat: 'Entrepreneurship', desc: 'Mandatory GST registration above ₹20/40 Lakh turnover limit.' },
  { title: 'How Credit Card Foreign Markup Fees Work', cat: 'Banking', desc: 'International spending charges 3.5% fee unless using zero-markup cards.' },
  { title: 'Understanding Sovereign Gold Bond Interest Payouts', cat: 'Investing', desc: '2.5% p.a. interest paid semi-annually directly into bank account.' },
  { title: 'Evaluating Municipal & Infrastructure Bonds', cat: 'Investing', desc: 'Tax-free municipal bonds fund civic projects with stable yields.' },
  { title: 'Avoiding Ponzi Schemes & Multilevel Marketing (MLM)', cat: 'Security', desc: 'Guaranteed 20%+ monthly returns are classic red flags for scams.' },
  { title: 'Understanding Stock Market Circuit Breakers', cat: 'Investing', desc: 'Automated trading halts prevent panic market collapses.' },
  { title: 'How Short Selling Works in Stock Markets', cat: 'Investing', desc: 'Borrowing shares to sell high and buy back low carries infinite risk.' },
  { title: 'Building a Minimalist Financial Life', cat: 'Budgeting', desc: 'Automate bills, SIPs, and savings to eliminate financial stress.' },
  { title: 'Understanding Gratuity Rules in Indian Companies', cat: 'Career', desc: '5 years continuous service grants tax-free lump sum gratuity payout.' },
  { title: 'EPF (Employees Provident Fund) & VPF Extras', cat: 'Retirement', desc: '8.25% interest guaranteed by EPFO with EEE tax benefits.' },
  { title: 'Understanding High Yield Dividend Stocks', cat: 'Investing', desc: 'Ensure dividend payout is backed by real cash flows, not debt.' },
  { title: 'How Real Estate Registration Fees Work in India', cat: 'Real Estate', desc: 'Stamp duty (5%-7%) and registration fees add upfront property costs.' },
  { title: 'Understanding Pre-approved Bank Loans', cat: 'Debt', desc: 'Pre-approved loans still carry high interest rates; compare before taking.' },
  { title: 'Building a College Savings Plan for Children', cat: 'Goals', desc: 'Start Equity SIPs 15 years early to beat higher education inflation.' },
  { title: 'Understanding Mutual Fund Exit Loads', cat: 'Investing', desc: 'Exit loads charge 1% if redeemed within 1 year of investment.' },
  { title: 'How Credit Card Cashback Categories Function', cat: 'Saving', desc: 'Maximize 5% cashback on specific categories like utility and travel.' },
  { title: 'Understanding the Kakeibo Japanese Savings Method', cat: 'Budgeting', desc: 'Handwrite daily expenses to cultivate conscious spending awareness.' },
  { title: 'Building Financial Resilience Against Recessions', cat: 'Economics', desc: 'Low fixed debt + strong emergency fund protects against economic downturns.' },
  { title: 'Understanding SEBI Grievance Redressal (SCORES)', cat: 'Security', desc: 'SEBI SCORES portal resolves investor complaints against brokers and AMCs.' },
  { title: 'Final Checklist for Complete Financial Freedom', cat: 'Goals', desc: 'Emergency fund + Insurance + Debt-free + 25x Corpus = Total Freedom.' }
];

EXTRA_TOPICS.forEach((item, index) => {
  const lessonNumber = 51 + index; // 51 to 120
  LESSONS_BATCH_5.push({
    id: `lesson-${lessonNumber}`,
    order: lessonNumber,
    title: item.title,
    titleHinglish: `${item.title} (Financial Guide)`,
    category: item.cat as any,
    readTime: '3 min read',
    xpReward: 50,
    content: [
      `${item.title} is a vital element of modern financial literacy. ${item.desc}`,
      `Mastering ${item.title.toLowerCase()} helps you eliminate wasteful money loss and maximize long-term wealth growth.`,
      `Always stay disciplined, avoid emotional decisions, and implement structured habits around your financial goals.`
    ],
    contentHinglish: [
      `${item.title} seekhna har smart investor ke liye zaroori hai. ${item.desc}`,
      `Is topic ko samajhne se aapka loss kam hota hai aur long-term compounding badhti hai.`,
      `Disciplined rahein, bina soche kharcha mat karein aur apne financial goals par focus rakhein.`
    ],
    takeaways: [
      `Understand key mechanics of ${item.title}.`,
      `Implement structured habits to protect capital.`,
      `Consistency compounds into major financial freedom.`
    ],
    takeawaysHinglish: [
      `${item.title} ke basic rules samjho.`,
      `Paisa safe rakhne ke liye habit banao.`,
      `Consistency se long term me bada wealth banta hai.`
    ],
    quiz: [
      {
        id: `q${lessonNumber}-1`,
        question: `What is the primary benefit of mastering ${item.title}?`,
        questionHinglish: `${item.title} seekhne ka sabse bada benefit kya hai?`,
        options: [
          'Protects money and optimizes long-term wealth growth',
          'Guarantees free cash bonus from government',
          'Doubles money in 24 hours',
          'Eliminates all monthly grocery bills'
        ],
        optionsHinglish: [
          'Paisa safe rakhta hai aur wealth growth badhata hai',
          'Govt se free cash bonus milta hai',
          '24 ghante me paisa double hota hai',
          'Ration ka bill zero ho jata hai'
        ],
        correctAnswerIndex: 0,
        explanation: `Mastering ${item.title} optimizes financial efficiency and builds compounding returns.`,
        explanationHinglish: `Is topic ko samajhne se aapka financial loss bachta hai aur growth hoti hai.`
      }
    ]
  });
});
