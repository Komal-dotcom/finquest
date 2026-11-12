import { Lesson } from '../types';

export const LESSONS_BATCH_4: Lesson[] = [
  {
    id: 'lesson-41',
    order: 41,
    title: 'Financial Independence, Retire Early (FIRE)',
    titleHinglish: 'FIRE Movement: Jaldi Retire Hone Ka Plan',
    category: 'Goals',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'The FIRE movement advocates saving and investing aggressively (50%+ of income) during early working years to achieve financial freedom.',
      'The 25x Rule: When your invested portfolio reaches 25 times your annual living expenses, you have reached baseline financial independence.',
      'With a 25x corpus, you can safely withdraw 4% each year to cover living expenses perpetually without depleting your capital.'
    ],
    contentHinglish: [
      'FIRE (Financial Independence, Retire Early) me log jawani me 50%+ save karke jaldi financial freedom haasil karte hain.',
      '25x Rule: Jab aapki total investment annual kharcho ka 25 guna ho jaye, toh aap financially independent ho gaye.',
      '25x corpus se aap har saal 4% nikal kar lifelong kharcha chala sakte ho bina original paisa khatam kiye.'
    ],
    takeaways: [
      'Target Portfolio = 25 times Annual Expenses.',
      '4% Safe Withdrawal Rate protects capital against inflation.',
      'High savings rate in early career is the key driver of FIRE.'
    ],
    takeawaysHinglish: [
      'Target Corpus = Saal ke kharche ka 25 guna.',
      '4% withdrawal rate se capital safe rehta hai.',
      'Early age me high savings rate se FIRE fast milta hai.'
    ],
    quiz: [
      {
        id: 'q41-1',
        question: 'According to the FIRE 25x rule, what portfolio size is needed for ₹6 Lakh annual expenses?',
        questionHinglish: 'FIRE 25x rule se ₹6 Lakh annual kharche ke liye kitna corpus chahiye?',
        options: ['₹1.5 Crore', '₹50 Lakh', '₹10 Crore', '₹25 Lakh'],
        optionsHinglish: ['₹1.5 Crore', '₹50 Lakh', '₹10 Crore', '₹25 Lakh'],
        correctAnswerIndex: 0,
        explanation: '₹6 Lakh x 25 = ₹1.5 Crore total investment portfolio needed.',
        explanationHinglish: '₹6 Lakh ko 25 se multiply karne par ₹1.5 Crore banta hai.'
      }
    ]
  },
  {
    id: 'lesson-42',
    order: 42,
    title: 'Sinking Funds vs Emergency Funds',
    titleHinglish: 'Sinking Fund vs Emergency Fund',
    category: 'Saving',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'An Emergency Fund is reserved for unpredictable crises like job loss or medical emergencies.',
      'A Sinking Fund is money saved intentionally for KNOWN future expenses, like buying a smartphone in 6 months, paying annual car insurance, or taking a vacation.',
      'Using sinking funds prevents you from dipping into emergency savings or relying on credit cards for planned expenses.'
    ],
    contentHinglish: [
      'Emergency Fund achanak aayi bimari ya job loss ke liye hota hai.',
      'Sinking Fund PATA HUI upcoming zarooraton ke liye banta hai (jaise mobile khareedna, car insurance, ghoomna).',
      'Sinking fund se planned kharcho ke liye credit card par dependent nahi hona padta.'
    ],
    takeaways: [
      'Sinking funds cover planned non-monthly expenses.',
      'Keeps emergency funds strictly protected for true crises.',
      'Prevents post-vacation credit card debt shock.'
    ],
    takeawaysHinglish: [
      'Aage aane wale kharcho ke liye alag bachat karo.',
      'Emergency fund ko kabhi festive shopping me touch mat karo.',
      'Debt-free festival aur holiday shopping karo.'
    ],
    quiz: [
      {
        id: 'q42-1',
        question: 'Which of the following expense should be funded by a Sinking Fund?',
        questionHinglish: 'Inme se kis kharche ke liye Sinking Fund use hona chahiye?',
        options: ['Annual bike insurance due in 8 months', 'Unexpected hospital admission', 'Sudden layoff', 'House repair after flood'],
        optionsHinglish: ['8 mahine me aane wala bike insurance premium', 'Achanak hospital admit hona', 'Sudden job jaana', 'Flood repair'],
        correctAnswerIndex: 0,
        explanation: 'Bike insurance is a known scheduled expense, ideal for a monthly sinking fund target.',
        explanationHinglish: 'Insurance due date pehle se pata hoti hai, isliye pehle se sinking fund me bachat karein.'
      }
    ]
  },
  {
    id: 'lesson-43',
    order: 43,
    title: 'Side Hustles & Passive Income Strategy',
    titleHinglish: 'Side Hustles Aur Passive Income Strategies',
    category: 'Entrepreneurship',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Relying on a single job income source carries risk. Building active side hustles (freelancing, content, digital products) accelerates financial growth.',
      'Active Income trades time directly for money; Passive Income earns revenue from digital assets, dividends, or rental property.',
      'Reinvest 100% of side hustle earnings directly into growth assets to double your wealth accumulation velocity.'
    ],
    contentHinglish: [
      'Sirf ek salary source par depend hona risky ho sakta hai. Side hustle (freelancing, content) se extra income banao.',
      'Active income me waqt ke badle paisa milta hai; Passive income me assets aur dividend se bina waqt diye kamai hoti hai.',
      'Side hustle ki saari income ko stock market ya mutual funds me reinvest kar do.'
    ],
    takeaways: [
      'Diversify income streams beyond a single salary.',
      'Reinvest side income 100% to compound assets.',
      'Build scalable digital assets that generate ongoing royalties.'
    ],
    takeawaysHinglish: [
      'Single salary ke sath extra side income build karo.',
      'Side earning ko kharch karne ki jagah invest karo.',
      'Digital products aur assets banao.'
    ],
    quiz: [
      {
        id: 'q43-1',
        question: 'What is the most effective way to use side hustle earnings for long-term wealth?',
        questionHinglish: 'Long-term wealth ke liye side hustle earning ka best use kya hai?',
        options: ['Reinvest 100% into income-generating assets', 'Spend all on party and weekend clothes', 'Keep it in cash under mattress', 'Buy expensive gadgets every month'],
        optionsHinglish: ['Saara paisa growth assets me reinvest karo', 'Weekend parties me udao', 'Ghar ke gadday ke niche cash rakho', 'Har mahine mehnga phone khareedo'],
        correctAnswerIndex: 0,
        explanation: 'Reinvesting side hustle capital compounds your net worth dramatically without affecting primary lifestyle budgeting.',
        explanationHinglish: 'Side earning reinvest karne se compounding double speed se kaam karti hai.'
      }
    ]
  },
  {
    id: 'lesson-44',
    order: 44,
    title: 'The 24-Hour Rule for Impulse Purchases',
    titleHinglish: 'Impulse Shopping Rokne Ka 24-Hour Rule',
    category: 'Budgeting',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'Impulse buying triggers dopamine in the brain, urging instant purchases during online flash sales or Instagram ads.',
      'The 24-Hour Rule: Whenever you feel a urge to buy a non-essential item over ₹1,000, force yourself to wait 24 hours before buying.',
      'In 80% of cases, the emotional buying impulse fades after 24 hours, saving you thousands of rupees every year.'
    ],
    contentHinglish: [
      'Impulse buying se dimaag me dopamine release hota hai jo online sale me instant shopping karwa deta hai.',
      '24-Hour Rule: ₹1,000 se mehngi kisi bhi non-essential cheez ko khareedne se pehle 24 ghante wait karo.',
      '80% cases me 24 ghante baad khareedne ka mann khatam ho jata hai aur hazaron rupees bach jaate hain.'
    ],
    takeaways: [
      'Pause for 24 hours before non-essential purchases.',
      'Breaks emotional buying impulse cycles.',
      'Saves substantial money automatically each year.'
    ],
    takeawaysHinglish: [
      'Non-essential khareedari se pehle 24 ghante ruko.',
      'Emotion-based shopping ko rokta hai.',
      'Bina mehnat hazaron rupaye bachat hoti hai.'
    ],
    quiz: [
      {
        id: 'q44-1',
        question: 'How does the 24-Hour Rule prevent bad financial decisions?',
        questionHinglish: '24-Hour Rule financial loss se kaise bachata hai?',
        options: ['By allowing emotional buying urges to cool down before spending', 'By doubling your salary', 'By granting free store credit', 'By blocking your bank card'],
        optionsHinglish: ['Emotional urge ko thanda karke rational decision lene me', 'Salary double karke', 'Free store credit dekar', 'Bank card block karke'],
        correctAnswerIndex: 0,
        explanation: 'Waiting 24 hours allows rational thinking to replace emotional sales triggers.',
        explanationHinglish: '24 ghante rukne se dimaag aagaye aur zaroorat samajh aa jaati hai.'
      }
    ]
  },
  {
    id: 'lesson-45',
    order: 45,
    title: 'Asset Allocation & Diversification',
    titleHinglish: 'Asset Allocation Aur Diversification Strategy',
    category: 'Investing',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      '"Don’t put all your eggs in one basket." Asset allocation spreads investments across equity, debt, gold, and real estate.',
      'When stock markets crash, debt instruments (like fixed deposits or G-Secs) and gold remain stable or rise, cushioning total portfolio loss.',
      'Rule of Thumb for Equity %: (100 - Your Age). At age 25, keep ~75% in high-growth equity and 25% in defensive debt/gold.'
    ],
    contentHinglish: [
      'Saara paisa ek jagah mat lagao. Asset allocation se paisa Equity, Debt, Gold aur Real Estate me divide hota hai.',
      'Jab stock market girta hai, tab Debt aur Gold portfolio ko tootne se bachate hain.',
      'Formula: Equity % = 100 - Your Age. 25 ki age me 75% Equity me aur 25% Debt/Gold me rakho.'
    ],
    takeaways: [
      'Diversification lowers overall portfolio risk.',
      'Rebalance assets once a year back to target ratios.',
      'Equity % = (100 - Age) is a great benchmark.'
    ],
    takeawaysHinglish: [
      'Diversification se investment ka risk kam hota hai.',
      'Saal me ek baar portfolio rebalance karo.',
      '100 minus age formula equity balance rakhne ke liye best hai.'
    ],
    quiz: [
      {
        id: 'q45-1',
        question: 'Using the (100 - Age) rule, what equity percentage is suggested for a 30-year-old?',
        questionHinglish: '(100 - Age) rule se 30 saal ke investor ko kitna % Equity me rakhna chahiye?',
        options: ['70%', '30%', '100%', '50%'],
        optionsHinglish: ['70%', '30%', '100%', '50%'],
        correctAnswerIndex: 0,
        explanation: '100 - 30 = 70% allocated to growth equity investments.',
        explanationHinglish: '100 - 30 = 70% equity allocation.'
      }
    ]
  }
];
