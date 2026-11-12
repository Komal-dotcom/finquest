import { Lesson, DailyChallenge, LeaderboardUser } from '../types';
import { getEmojiAvatarSvg } from '../utils/avatar';
import { LESSONS_BATCH_1 } from './lessonsBatch1';
import { LESSONS_BATCH_2 } from './lessonsBatch2';
import { LESSONS_BATCH_3 } from './lessonsBatch3';
import { LESSONS_BATCH_4 } from './lessonsBatch4';
import { LESSONS_BATCH_5 } from './lessonsBatch5';

const BASE_LESSONS: Lesson[] = [
  {
    id: 'lesson-1',
    order: 1,
    title: 'What is Budgeting?',
    titleHinglish: 'Budgeting Kya Hai?',
    category: 'Budgeting',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Budgeting is simply a plan for your money. It tracks how much income you receive and controls where every rupee goes before you spend it.',
      'Without a budget, money seems to slip away on small daily expenses like coffees, subscriptions, and impulse online buys. A budget gives you total financial control.',
      'Creating a budget isn\'t about restricting yourself; it\'s about giving yourself permission to spend intentional money on things that actually matter to you.'
    ],
    contentHinglish: [
      'Budgeting simple shabd me tumhare paise ka plan hai. Ye track karta hai kitna paisa aa raha hai aur kharch hone se pehle decide karta hai ki kaha jaayega.',
      'Bina budget ke, chote-chote daily kharche jaise online shopping, chai-coffee me paise gayab ho jaate hain. Budget se tumhe poora control milta hai.',
      'Budget ka matlab khud ko rokna nahi hai, balki apne zaroori aur pasandida sapno ke liye sahi jagah kharch karna hai.'
    ],
    takeaways: [
      'A budget is a blueprint for income vs expenses.',
      'It prevents money leakage on non-essential purchases.',
      'It helps you save systematically for future financial goals.'
    ],
    takeawaysHinglish: [
      'Budget income aur kharche ka blueprint hota hai.',
      'Ye faaltu ke kharche aur impulse buying rokta hai.',
      'Ye tumhe future ke goals ke liye paise bachane me help karta hai.'
    ],
    quiz: [
      {
        id: 'q1-1',
        question: 'What is the primary purpose of creating a monthly budget?',
        questionHinglish: 'Monthly budget banane ka main purpose kya hai?',
        options: [
          'To stop spending money completely',
          'To plan income and track where every rupee goes',
          'To show off your savings to friends',
          'To avoid paying any taxes'
        ],
        optionsHinglish: [
          'Kharcha bilkul band kar dena',
          'Income plan karna aur har rupee ka hisab rakhna',
          'Dosto me flaunt karna',
          'Tax dene se bachna'
        ],
        correctAnswerIndex: 1,
        explanation: 'A budget helps you plan your income and track every rupee intentionally so you reach your goals.'
      },
      {
        id: 'q1-2',
        question: 'Which of the following is an example of a fixed expense?',
        questionHinglish: 'Inme se konsa fixed expense ka example hai?',
        options: [
          'Weekend movie ticket',
          'Monthly house rent',
          'Dining out at a restaurant',
          'New sneakers purchase'
        ],
        optionsHinglish: [
          'Weekend movie ticket',
          'Mahine ka makan kiraya (Rent)',
          'Restaurant me khana',
          'Naye sneakers kharidna'
        ],
        correctAnswerIndex: 1,
        explanation: 'House rent stays constant every month, making it a classic fixed expense.'
      },
      {
        id: 'q1-3',
        question: 'You receive a bonus of ₹10,000. What is the smartest budget move?',
        questionHinglish: 'Aapko ₹10,000 ka bonus mila. Sabse samajhdar move kya hoga?',
        options: [
          'Spend all of it on a party immediately',
          'Save or invest at least 20% and allocate the rest',
          'Lend it to a random stranger',
          'Keep it under your mattress without planning'
        ],
        optionsHinglish: [
          'Turant poore paise party me uda do',
          'At least 20% save/invest karo aur baki plan karo',
          'Kisi anjaan ko udhar de do',
          'Bina plan ke gaddhe ke niche daba do'
        ],
        correctAnswerIndex: 1,
        explanation: 'Allocating unexpected bonuses toward savings/investments accelerates your wealth building.'
      }
    ]
  },
  {
    id: 'lesson-2',
    order: 2,
    title: 'Needs vs Wants',
    titleHinglish: 'Zaroorat (Needs) vs Shauk (Wants)',
    category: 'Budgeting',
    readTime: '3 min read',
    xpReward: 50,
    content: [
      'Distinguishing between Needs and Wants is the cornerstone of personal finance.',
      'Needs are essential for survival and maintaining basic living conditions: food, rent, utility bills, basic healthcare, and transport.',
      'Wants are desires that enhance your comfort or lifestyle: latest smartphones, dining out, concert tickets, and designer clothes. Before buying, ask yourself: "Can I survive without this for a month?"'
    ],
    contentHinglish: [
      'Needs (Zaroorat) aur Wants (Shauk) ke beech fark samajhna financial literacy ka sabse bada rule hai.',
      'Needs wo cheezein hain jinke bina guzara nahi ho sakta: Roti, kapda, makaan, electricity bill aur basic healthcare.',
      'Wants wo hain jo lifestyle upgrade karti hain: Mahanga phone, restaurant ka khana, brand items. Kharidne se pehle socho: "Kya main 1 mahina iske bina reh sakta hu?"'
    ],
    takeaways: [
      'Needs are non-negotiable survival expenses.',
      'Wants are optional lifestyle upgrades.',
      'Delaying gratification on Wants boosts your savings rate drastically.'
    ],
    takeawaysHinglish: [
      'Needs ke bina life nahi chal sakti.',
      'Wants optional hain jo mood aur lifestyle ke liye hote hain.',
      'Wants par thoda control karne se savings double ho sakti hain.'
    ],
    quiz: [
      {
        id: 'q2-1',
        question: 'Which item is classified as a "Need"?',
        questionHinglish: 'Inme se konsi cheez "Need" (Zaroorat) me aati hai?',
        options: [
          'Netflix 4K Subscription',
          'Monthly Grocery Store items',
          'Designer sunglasses',
          'Gaming Console'
        ],
        optionsHinglish: [
          'Netflix 4K plan',
          'Mahine ka Rashan / Grocery',
          'Branded sunglasses',
          'PlayStation Console'
        ],
        correctAnswerIndex: 1,
        explanation: 'Groceries provide essential nutrition required for survival.'
      },
      {
        id: 'q2-2',
        question: 'What is the 24-hour rule for managing "Wants"?',
        questionHinglish: 'Wants ko manage karne ka 24-hour rule kya hota hai?',
        options: [
          'Buy the product within 24 hours before sale ends',
          'Wait 24 hours before buying non-essential items to curb impulse buying',
          'Return the product 24 hours after purchase',
          'Spend 24 hours finding discounts'
        ],
        optionsHinglish: [
          '24 ghante me turant kharid lo',
          'Impulse buying se bachne ke liye kharidne se pehle 24 ghante wait karo',
          '24 ghante me saman wapas kar do',
          '24 ghante tak offer dhoondho'
        ],
        correctAnswerIndex: 1,
        explanation: 'Waiting 24 hours cools down emotional impulse buying so you can decide rationally.'
      },
      {
        id: 'q2-3',
        question: 'If you downgrade your mobile data plan from 100GB to a realistic 20GB to save ₹500/month, what did you adjust?',
        questionHinglish: 'Agar aap mahange mobile plan ko saste zaroorat vale plan par shift karte ho, aapne kya kiya?',
        options: [
          'Reduced a Want to fulfill the Need efficiently',
          'Increased your debt',
          'Destroyed your credit score',
          'Gave up a basic Need'
        ],
        optionsHinglish: [
          'Apni Want ko cut karke Need efficiently poori ki',
          'Apna debt bada diya',
          'Credit score kharab kar diya',
          'Basic Need chhod di'
        ],
        correctAnswerIndex: 0,
        explanation: 'Basic connectivity is a need, but excessive premium plans are wants. Adjusting saves money.'
      }
    ]
  },
  {
    id: 'lesson-3',
    order: 3,
    title: 'Emergency Fund',
    titleHinglish: 'Emergency Fund Kya Hai?',
    category: 'Saving',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'An emergency fund is a financial safety net designed to cover unexpected financial crises, such as sudden job loss, medical emergencies, or urgent vehicle repairs.',
      'Financial experts recommend storing 3 to 6 months worth of essential living expenses in a highly liquid account like a high-yield savings account or liquid mutual fund.',
      'Never invest your emergency fund in risky assets like stocks or crypto, because you need immediate, guaranteed access without market volatility risks.'
    ],
    contentHinglish: [
      'Emergency fund tumhari safety net hai jo kisi bhi sudden musibat (job loss, medical emergency, gadi ki repair) me kaam aati hai.',
      'Rules ke hisab se tumhare paas 3 se 6 mahine ke zaroori kharchon ke barabar cash secure hona chahiye.',
      'Is paise ko kabhi bhi share market ya risky jagah me mat dalo. Isko easy-to-withdraw account me rakho.'
    ],
    takeaways: [
      'Save 3 to 6 months of essential living expenses.',
      'Keep emergency funds in liquid, risk-free accounts.',
      'Emergency funds protect you from taking high-interest loans in tough times.'
    ],
    takeawaysHinglish: [
      '3-6 mahine ke kharche ke barabar fund ready rakho.',
      'Safe aur liquid account me paise rakho.',
      'Ye fund tumhe mushkil samay me high-interest loan se bachata hai.'
    ],
    quiz: [
      {
        id: 'q3-1',
        question: 'How much should ideally be in your emergency fund?',
        questionHinglish: 'Emergency fund me kitna paisa hona chahiye?',
        options: [
          '1 week of pocket money',
          '3 to 6 months of essential living expenses',
          '5 years of total income',
          '₹0 if you have a credit card'
        ],
        optionsHinglish: [
          '1 hafte ki pocket money',
          '3 se 6 mahine ka zaroori kharcha',
          '5 saal ki total income',
          '₹0 agar credit card hai'
        ],
        correctAnswerIndex: 1,
        explanation: '3 to 6 months of expenses gives you adequate time to recover from sudden financial shocks.'
      },
      {
        id: 'q3-2',
        question: 'Where is the BEST place to park an emergency fund?',
        questionHinglish: 'Emergency fund rakhne ki sabse sahi jagah konsi hai?',
        options: [
          'Volatile Crypto Coins',
          'Liquid Mutual Fund or High-yield Savings Account',
          'Real Estate Property',
          'Lock-in Fixed Deposit for 10 years'
        ],
        optionsHinglish: [
          'Risky Crypto Coins',
          'Liquid Mutual Fund ya Savings Bank Account',
          'Zameen / Property',
          '10 saal ki locked FD'
        ],
        correctAnswerIndex: 1,
        explanation: 'Liquid funds and savings accounts offer safety and fast withdrawal within hours.'
      },
      {
        id: 'q3-3',
        question: 'Is buying the latest iPhone considered a valid reason to use your emergency fund?',
        questionHinglish: 'Kya naya iPhone lena emergency fund use karne ka valid reason hai?',
        options: [
          'Yes, if it is on discount',
          'No! Emergency funds are strictly for unforeseen survival crises',
          'Yes, if your current phone is 6 months old',
          'Yes, if you upload unboxing videos'
        ],
        optionsHinglish: [
          'Haan, agar discount chal raha ho',
          'Nahi! Emergency fund sirf asli unexpected crisis ke liye hai',
          'Haan, agar purana phone 6 mahine purana ho',
          'Haan, unboxing video ke liye'
        ],
        correctAnswerIndex: 1,
        explanation: 'Phones are luxury wants, not life emergencies!'
      }
    ]
  },
  {
    id: 'lesson-4',
    order: 4,
    title: '50/30/20 Rule',
    titleHinglish: '50/30/20 Ka Niyam',
    category: 'Budgeting',
    readTime: '5 min read',
    xpReward: 50,
    content: [
      'The 50/30/20 rule is an intuitive budgeting framework popularized by Senator Elizabeth Warren. It breaks your after-tax income into three balanced buckets.',
      '50% for Needs (Rent, utilities, groceries, transportation). 30% for Wants (Dining out, movies, hobbies, travel). 20% for Savings & Debt Payoff (Emergency fund, SIPs, investments).',
      'For example, if your monthly income is ₹50,000: ₹25,000 goes to Needs, ₹15,000 to Wants, and ₹10,000 directly into Savings & Investments.'
    ],
    contentHinglish: [
      '50/30/20 rule ek world-famous money framework hai jo tumhari monthly salary ko 3 part me baatta hai.',
      '50% Needs ke liye (Rent, Rashan, Bills), 30% Wants ke liye (Outing, Shopping, Entertainment), aur 20% Savings & SIP Investments ke liye.',
      'Maan lo tumhari salary ₹50,000 hai: Toh ₹25,000 Needs par, ₹15,000 Wants par, aur ₹10,000 sidha Savings & Investments me jayenge.'
    ],
    takeaways: [
      '50% Needs, 30% Wants, 20% Savings.',
      'Automate your 20% savings on pay-day before spending.',
      'Adjust percentages based on your debt or higher financial goals.'
    ],
    takeawaysHinglish: [
      '50% Zaroorat, 30% Shauk, 20% Bachat.',
      'Salary aate hi 20% pehle save karo.',
      'Apne goals ke hisab se numbers thoda adjust kar sakte ho.'
    ],
    quiz: [
      {
        id: 'q4-1',
        question: 'Under the 50/30/20 rule, what percentage of income should go toward Savings/Investing?',
        questionHinglish: '50/30/20 rule ke according kitna % Savings/Investing me jana chahiye?',
        options: ['50%', '30%', '20%', '10%'],
        optionsHinglish: ['50%', '30%', '20%', '10%'],
        correctAnswerIndex: 2,
        explanation: '20% is dedicated to paying off debt, emergency funds, and long-term investments.'
      },
      {
        id: 'q4-2',
        question: 'If your take-home pay is ₹30,000, how much money should be budgeted for Wants (30%)?',
        questionHinglish: 'Agar aapki salary ₹30,000 hai, toh Wants (30%) ke liye kitna budget banta hai?',
        options: ['₹15,000', '₹9,000', '₹6,000', '₹3,000'],
        optionsHinglish: ['₹15,000', '₹9,000', '₹6,000', '₹3,000'],
        correctAnswerIndex: 1,
        explanation: '30% of ₹30,000 is 30,000 x 0.30 = ₹9,000.'
      },
      {
        id: 'q4-3',
        question: 'What is the strategy "Pay Yourself First"?',
        questionHinglish: '"Pay Yourself First" strategy kya hoti hai?',
        options: [
          'Buy luxury gifts for yourself before paying rent',
          'Automatically transfer 20% to savings on payday before spending on anything else',
          'Ask your boss for an advance salary',
          'Pay your friends for dinner first'
        ],
        optionsHinglish: [
          'Rent dene se pehle khud ke liye mahanga gift kharidna',
          'Salary aate hi pehle 20% savings account me daal dena',
          'Boss se advance maangna',
          'Dosto ka bill pehle pay karna'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pay Yourself First prioritizes your financial future before lifestyle spending takes over.'
      }
    ]
  },
  {
    id: 'lesson-5',
    order: 5,
    title: 'Compound Interest',
    titleHinglish: 'Compound Interest (Chakravriddhi Byaj)',
    category: 'Investing',
    readTime: '5 min read',
    xpReward: 50,
    content: [
      'Albert Einstein famously called compound interest the "8th Wonder of the World". It is the process where interest is earned on both your initial principal and previous accumulated interest.',
      'In simple interest, you only earn interest on your original deposit. In compound interest, your money grows exponentially because your money makes interest, and that interest makes more interest!',
      'The key ingredient to compounding power isn\'t huge amounts of money — it is TIME. Starting to invest at age 22 vs age 32 can double or triple your final wealth at retirement.'
    ],
    contentHinglish: [
      'Compound interest ko world ka 8th wonder kaha jata hai. Iska matlab hai "Byaj par bhi Byaj milna".',
      'Simple interest me sirf mool-dhan par byaj milta hai. Par Compound interest me tumhara paisa aur uska mila hua byaj dono milkya compound hote hain.',
      'Compounding ka sabse bada secret PAISA nahi, TIME hai. 22 saal ki umar me start karne wala 32 saal wale se double se ziada wealth bana leta hai.'
    ],
    takeaways: [
      'Compounding earns interest on interest exponentially.',
      'Time in the market beats timing the market.',
      'Start early, even with tiny monthly amounts like ₹500.'
    ],
    takeawaysHinglish: [
      'Compounding se paise par byaj multiply hota hai.',
      'Jitna jaldi start karoge, utna bada magic dikhega.',
      'Choti amount (₹500/month) se bhi compounding miracle karti hai.'
    ],
    quiz: [
      {
        id: 'q5-1',
        question: 'What makes Compound Interest different from Simple Interest?',
        questionHinglish: 'Compound Interest, Simple Interest se kaise alag hai?',
        options: [
          'It is only available for government workers',
          'Interest is calculated on both principal and accumulated past interest',
          'It reduces your total money over time',
          'It charges higher banking maintenance fees'
        ],
        optionsHinglish: [
          'Ye sirf sarkari logo ke liye hota hai',
          'Isme mool-dhan aur pichle byaj dono par byaj milta hai',
          'Ye time ke sath paisa kam kar deta hai',
          'Isme bank fees ziada lagti hai'
        ],
        correctAnswerIndex: 1,
        explanation: 'Compounding adds interest to principal, generating earnings on past earnings.'
      },
      {
        id: 'q5-2',
        question: 'What is the most crucial factor in unleashing the power of compounding?',
        questionHinglish: 'Compounding ka fayda uthane ke liye sabse important factor kya hai?',
        options: [
          'Timing the exact stock market high',
          'Starting early and giving it long TIME',
          'Investing only once every 10 years',
          'Checking your portfolio 50 times a day'
        ],
        optionsHinglish: [
          'Market ke top ko guess karna',
          'Jaldi start karna aur lambe TIME tak rehna',
          '10 saal me sirf ek baar invest karna',
          'Din me 50 baar portfolio check karna'
        ],
        correctAnswerIndex: 1,
        explanation: 'Time exponentializes the compounding growth curve!'
      },
      {
        id: 'q5-3',
        question: 'According to the Rule of 72, if an investment yields 12% return annually, how long will it take to DOUBLE your money?',
        questionHinglish: 'Rule of 72 ke according, 12% annual return par aapka paisa kitne saal me DOUBLE hoga?',
        options: [
          '72 / 12 = 6 Years',
          '12 Years',
          '24 Years',
          '72 Years'
        ],
        optionsHinglish: [
          '72 / 12 = 6 Saal',
          '12 Saal',
          '24 Saal',
          '72 Saal'
        ],
        correctAnswerIndex: 0,
        explanation: 'Rule of 72 formula: 72 divided by the interest rate = years to double (72 / 12 = 6 years).'
      }
    ]
  },
  {
    id: 'lesson-6',
    order: 6,
    title: 'Credit Score Basics',
    titleHinglish: 'Credit Score (CIBIL) Sikho',
    category: 'Investing',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'A Credit Score (like CIBIL in India) is a 3-digit numerical rating ranging from 300 to 900 that reflects your creditworthiness based on borrowing history.',
      'A score above 750 is considered excellent. It unlocks lower interest rates on home/car loans, higher credit card limits, and instant loan approvals.',
      'To maintain a high credit score: pay all credit card bills in full before the due date, keep credit utilization below 30%, and avoid applying for too many credit cards at once.'
    ],
    contentHinglish: [
      'Credit Score (CIBIL) 300 se 900 ke beech ek 3-digit number hota hai jo batata hai ki tum loan lene aur chukane me kitne zimmedar ho.',
      '750+ score ko bohot accha mana jata hai. Isse tumhe kam interest rate par home/car loan aur jaldi approvals milte hain.',
      'Score accha rakhne ke liye: Credit card bill time par pay karo, limit ka sirf 30% use karo, aur faltu credit cards apply mat karo.'
    ],
    takeaways: [
      'Aim for a CIBIL credit score above 750.',
      'Never miss or delay bill payment deadlines.',
      'Keep credit utilization under 30% of total limit.'
    ],
    takeawaysHinglish: [
      '750+ CIBIL score maintain karo.',
      'Credit card bill hamesha due date se pehle poora pay karo.',
      'Total limit ka 30% se ziada kharcha mat karo.'
    ],
    quiz: [
      {
        id: 'q6-1',
        question: 'What is considered a good CIBIL score in India?',
        questionHinglish: 'India me accha CIBIL score kitna mana jata hai?',
        options: ['300 - 500', '500 - 650', '750 - 900', 'Above 1000'],
        optionsHinglish: ['300 - 500', '500 - 650', '750 - 900', '1000 se upar'],
        correctAnswerIndex: 2,
        explanation: 'Scores from 750 to 900 are ideal for favorable loan approvals and lower interest rates.'
      },
      {
        id: 'q6-2',
        question: 'What happens if you pay only the "Minimum Amount Due" on a credit card bill?',
        questionHinglish: 'Agar aap credit card bill me sirf "Minimum Amount" pay karoge toh kya hoga?',
        options: [
          'Your total debt is cleared automatically',
          'Heavy interest charges (up to 40% per year) apply on the remaining balance',
          'You earn bonus cashback rewards',
          'Your score reaches 900 instantly'
        ],
        optionsHinglish: [
          'Aapka poora debt khatam ho jayega',
          'Bache hue balance par 40% tak ka bhaari interest lagega',
          'Aapko extra cashback milega',
          'Score 900 ho jayega'
        ],
        correctAnswerIndex: 1,
        explanation: 'Paying minimum balance triggers exorbitant interest rates on the unpaid total.'
      },
      {
        id: 'q6-3',
        question: 'If your credit card limit is ₹100,000, what is the maximum recommended spending per month to protect your score?',
        questionHinglish: 'Agar credit card limit ₹1,00,000 hai, toh CIBIL bachaney ke liye max kitna spent karna chahiye?',
        options: [
          '₹30,000 (30% utilization)',
          '₹99,000 (99% utilization)',
          '₹0 (never use it)',
          '₹150,000 (exceed limit)'
        ],
        optionsHinglish: [
          '₹30,000 (30% utilization)',
          '₹99,000 (99% utilization)',
          '₹0 (kabhi mat chhuo)',
          '₹1,50,000 (limit se bahar)'
        ],
        correctAnswerIndex: 0,
        explanation: 'Keeping utilization below 30% demonstrates responsible credit usage.'
      }
    ]
  },
  {
    id: 'lesson-7',
    order: 7,
    title: 'What is SIP / Mutual Funds?',
    titleHinglish: 'SIP & Mutual Funds Kya Hain?',
    category: 'Investing',
    readTime: '5 min read',
    xpReward: 50,
    content: [
      'A Mutual Fund pools money from thousands of investors to invest in a diversified portfolio of stocks, bonds, or government securities managed by professional fund managers.',
      'A Systematic Investment Plan (SIP) is a method of investing in mutual funds where you invest a fixed amount regularly (e.g., ₹500/month) on a set date.',
      'SIPs leverage Rupee Cost Averaging: buying more fund units when prices drop and fewer when prices rise, smoothing out volatility over time automatically.'
    ],
    contentHinglish: [
      'Mutual Fund me hazaron logon ka paisa ek jagah collect karke professional managers stocks aur bonds me invest karte hain.',
      'SIP (Systematic Investment Plan) mutual funds me har mahine ek fixed amount (jaise ₹500/mahina) disciplined tarike se invest karne ka tarika hai.',
      'SIP se Rupee Cost Averaging ka fayda milta hai: Jab market girta hai toh ziada units milti hain, jab market chadhta hai toh value badhti hai.'
    ],
    takeaways: [
      'Mutual funds offer instant diversification.',
      'SIP enables disciplined monthly investing automatically.',
      'Rupee Cost Averaging reduces market timing risks.'
    ],
    takeawaysHinglish: [
      'Mutual fund se ek saath bohot si companies me diversification milta hai.',
      'SIP se har mahine automatically disciplined investment hota hai.',
      'Market up-down ka tension lene ki zaroorat nahi rehti.'
    ],
    quiz: [
      {
        id: 'q7-1',
        question: 'What does SIP stand for in personal finance?',
        questionHinglish: 'Personal finance me SIP ka full form kya hai?',
        options: [
          'Systematic Investment Plan',
          'Savings In Bank Plan',
          'Stock Interest Percentage',
          'Single Investor Portfolio'
        ],
        optionsHinglish: [
          'Systematic Investment Plan',
          'Savings In Bank Plan',
          'Stock Interest Percentage',
          'Single Investor Portfolio'
        ],
        correctAnswerIndex: 0,
        explanation: 'SIP stands for Systematic Investment Plan.'
      },
      {
        id: 'q7-2',
        question: 'What is the primary benefit of Rupee Cost Averaging in SIPs?',
        questionHinglish: 'SIP me Rupee Cost Averaging ka sabse bada fayda kya hai?',
        options: [
          'Guarantees 100% profit every single day',
          'Buys more fund units when market is low and fewer when high',
          'Eliminates government taxes permanently',
          'Doubles your salary automatically'
        ],
        optionsHinglish: [
          'Har din 100% fixed profit guarantee karta hai',
          'Market down hone par ziada units aur up hone par kam units buy karta hai',
          'Tax permanently zero kar deta hai',
          'Salary double kar deta hai'
        ],
        correctAnswerIndex: 1,
        explanation: 'Rupee Cost Averaging averages out purchase price automatically across market cycles.'
      },
      {
        id: 'q7-3',
        question: 'Can you start a mutual fund SIP with as little as ₹500 per month in India?',
        questionHinglish: 'Kya India me sirf ₹500/mahine se SIP start ho sakti hai?',
        options: [
          'Yes! Many equity mutual funds allow ₹100 or ₹500 SIPs',
          'No, minimum is ₹50,000 per month',
          'Only if you own a house',
          'Only for corporate CEOs'
        ],
        optionsHinglish: [
          'Haan! Bohot se funds ₹100 ya ₹500 se SIP allow karte hain',
          'Nahi, minimum ₹50,000 chahiye',
          'Sirf agar apna ghar ho',
          'Sirf company CEOs ke liye'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mutual funds democratize investing so anyone can start small with ₹100 - ₹500/month.'
      }
    ]
  },
  {
    id: 'lesson-8',
    order: 8,
    title: 'Tax Basics (Section 80C)',
    titleHinglish: 'Tax Basics & Section 80C',
    category: 'Tax',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Income Tax is a tax levied by the central government on your annual earnings. Understanding deductions helps you keep more of your hard-earned money legally.',
      'Section 80C of the Indian Income Tax Act allows individuals to claim tax deductions up to ₹1.5 Lakhs per financial year.',
      'Eligible 80C investments include ELSS (Equity Linked Savings Scheme) mutual funds (3-year lock-in), PPF (Public Provident Fund), EPF, NPS, and life insurance premiums.'
    ],
    contentHinglish: [
      'Income Tax tumhari yearly earning par lagne wala government tax hai. Tax rules jaan kar tum legally apna paisa bacha sakte ho.',
      'Section 80C Indian Income Tax Act ka bohot popular section hai jo tumhe saal me ₹1.5 Lakh tak tax exemption claim karne deta hai.',
      '80C me tax bachane ke option: ELSS Mutual Funds (sirf 3 saal lock-in), PPF, EPF, NPS aur Life Insurance policies.'
    ],
    takeaways: [
      'Section 80C allows up to ₹1.5 Lakh tax deductions annually.',
      'ELSS has the shortest lock-in period (3 years) among 80C options.',
      'Start tax planning in April at the beginning of the financial year.'
    ],
    takeawaysHinglish: [
      'Section 80C se saal ka ₹1.5 Lakh tak tax bacha sakte ho.',
      'ELSS ka lock-in period sabse kam (3 saal) hai aur ache returns deta hai.',
      'Tax planning saal ke shuruat (April) me hi plan kar leni chahiye.'
    ],
    quiz: [
      {
        id: 'q8-1',
        question: 'What is the maximum deduction limit under Section 80C of Income Tax Act?',
        questionHinglish: 'Section 80C ke under max deduction limit kitni hai?',
        options: ['₹50,000', '₹1.5 Lakhs', '₹5 Lakhs', 'Unlimited'],
        optionsHinglish: ['₹50,000', '₹1.5 Lakhs', '₹5 Lakhs', 'Unlimited'],
        correctAnswerIndex: 1,
        explanation: 'Section 80C caps tax deductions at ₹1.5 Lakhs per financial year.'
      },
      {
        id: 'q8-2',
        question: 'Which Section 80C investment option has the shortest lock-in period of 3 years?',
        questionHinglish: '80C options me se kiska lock-in period sabse kam (3 saal) hai?',
        options: [
          'PPF (Public Provident Fund - 15 yrs)',
          'ELSS (Equity Linked Savings Scheme - 3 yrs)',
          'Tax Saving FD (5 yrs)',
          'NPS (National Pension System)'
        ],
        optionsHinglish: [
          'PPF (15 saal)',
          'ELSS Tax Saving Mutual Fund (3 saal)',
          '5-year Tax Saving Bank FD',
          'NPS (Retirement tak)'
        ],
        correctAnswerIndex: 1,
        explanation: 'ELSS has a short 3-year lock-in while offering equity wealth potential.'
      },
      {
        id: 'q8-3',
        question: 'When is the best time to start planning your tax-saving investments?',
        questionHinglish: 'Tax saving investments plan karne ka sabse sahi time kab hota hai?',
        options: [
          'In March on the very last day of financial year',
          'In April at the start of the financial year',
          'After receiving a tax penalty notice',
          'Never'
        ],
        optionsHinglish: [
          '31st March ko aakhri minute par',
          'Financial year ke shuruat (April) me',
          'Tax penalty notice aane ke baad',
          'Kabhi nahi'
        ],
        correctAnswerIndex: 1,
        explanation: 'Starting in April allows comfortable monthly SIPs instead of panic March lump sums.'
      }
    ]
  },
  {
    id: 'lesson-9',
    order: 9,
    title: 'Insurance 101',
    titleHinglish: 'Insurance 101 (Life & Health)',
    category: 'Insurance',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Insurance is a contract in which an individual receives financial protection or reimbursement against losses from an insurance company.',
      'There are two essential insurance policies everyone must have: Term Life Insurance (protects your family financially if you pass away) and Health Insurance (covers hospital bills and treatments).',
      'Avoid mixing investment with insurance (like ULIPs or endowment plans). Keep insurance pure (Term Plan) and keep investments pure (Mutual Funds/Stocks).'
    ],
    contentHinglish: [
      'Insurance ek safety contract hai jo musibat ke time tumhare aur tumhari family ke financial losses cover karta hai.',
      '2 sabse zaroori insurance: Term Life Insurance (tumhare na rehne par family ki financially help) aur Health Insurance (hospital aur medical bills ka kharcha).',
      'Insurance aur Investment ko mix mat karo (jaise ULIPs). Insurance pure rakho (Term Plan) aur Investment alag karo (SIP/Mutual Funds).'
    ],
    takeaways: [
      'Health Insurance protects your savings from hospital bill wipes.',
      'Term Insurance provides massive coverage at affordable premiums.',
      'Do not treat insurance policies as wealth investment schemes.'
    ],
    takeawaysHinglish: [
      'Health insurance hospital bill se tumhari hard-earned savings bachata hai.',
      'Term plan kam premium me family ko bada cover deta hai.',
      'Insurance ko investment scheme samajhne ki galti mat karo.'
    ],
    quiz: [
      {
        id: 'q9-1',
        question: 'What is the primary role of Health Insurance?',
        questionHinglish: 'Health Insurance ka main kaam kya hai?',
        options: [
          'To make you rich when you visit doctors',
          'To cover expensive hospitalization and medical bills without draining savings',
          'To give guaranteed 15% annual returns',
          'To buy luxury spa packages'
        ],
        optionsHinglish: [
          'Doctor ke paas jane par ameer banana',
          'Hospitalization aur medical bill ka kharcha uthana',
          'Fixed 15% return dena',
          'Spa treatment ke paise dena'
        ],
        correctAnswerIndex: 1,
        explanation: 'Health insurance absorbs catastrophic medical expenses.'
      },
      {
        id: 'q9-2',
        question: 'Why is Term Life Insurance recommended over Endowment/ULIP plans?',
        questionHinglish: 'Term Insurance ko Endowment / ULIP se behter kyu mana jata hai?',
        options: [
          'It offers high sum assured life cover for a very low, affordable premium',
          'It gives free holiday packages',
          'It promises double gold coins',
          'It requires no paperwork'
        ],
        optionsHinglish: [
          'Ye kam premium me bohot bada life cover deta hai',
          'Ye free trip deta hai',
          'Ye sone ke sikke deta hai',
          'Isme koi paper nahi lagta'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pure term plans deliver high coverage (e.g. ₹1 Crore cover) at minimal cost.'
      },
      {
        id: 'q9-3',
        question: 'At what age should you ideally buy health & life insurance?',
        questionHinglish: 'Insurance buy karne ki sabse best age konsi hai?',
        options: [
          'As young and healthy as possible (in your 20s when premiums are cheapest)',
          'Only after reaching age 60',
          'Only after getting diagnosed with illness',
          'Never'
        ],
        optionsHinglish: [
          'Jitna jaldi aur young ho sake (20s me jab premium sasta hota hai)',
          '60 saal ki umar ke baad',
          'Bimari hone ke baad',
          'Kabhi nahi'
        ],
        correctAnswerIndex: 0,
        explanation: 'Premiums increase with age. Buying young locks in cheap rates without pre-existing medical exclusion periods.'
      }
    ]
  },
  {
    id: 'lesson-10',
    order: 10,
    title: 'How to Set Financial Goals',
    titleHinglish: 'Financial Goals Kaise Set Kare?',
    category: 'Goals',
    readTime: '5 min read',
    xpReward: 50,
    content: [
      'Financial goals give purpose and direction to your money. Without clear goals, saving feels like a chore rather than an exciting milestone.',
      'Structure goals into Short-term (under 1 year: emergency fund, vacation, laptop purchase) and Long-term (over 3 years: house down payment, retirement, business fund).',
      'Make goals SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Example: "Save ₹10,000 for emergency fund in 3 months" instead of "Save some money someday".'
    ],
    contentHinglish: [
      'Financial goals tumhare paise ko ek maqsad aur direction dete hain. Bina goal ke bachat karna bohot boring lagta hai.',
      'Goals ko 2 part me baanto: Short-term (1 saal ke andar: emergency fund, phone, trip) aur Long-term (3 saal se upar: ghar, retirement, startup).',
      'Goal SMART banao: Clear number aur time set karo. Jaise "3 mahine me ₹10,000 emergency fund bachana hai" na ki "kabhi thode paise bacha lunga".'
    ],
    takeaways: [
      'Set clear short-term (<1 year) and long-term (>3 years) goals.',
      'Use the SMART framework for concrete target amounts and timelines.',
      'Track progress regularly and celebrate milestones!'
    ],
    takeawaysHinglish: [
      'Short-term aur Long-term goals me clarity rakho.',
      'Target amount aur deadline fix karke SMART goal banao.',
      'Regularly progress check karo aur complete hone par celebrate karo!'
    ],
    quiz: [
      {
        id: 'q10-1',
        question: 'What does the "T" stand for in SMART financial goals?',
        questionHinglish: 'SMART financial goals me "T" ka kya matlab hai?',
        options: ['Taxable', 'Time-bound', 'Tough', 'Temporary'],
        optionsHinglish: ['Taxable', 'Time-bound (Deadline wala)', 'Tough', 'Temporary'],
        correctAnswerIndex: 1,
        explanation: 'Time-bound means setting a clear deadline (e.g. 6 months) for your goal.'
      },
      {
        id: 'q10-2',
        question: 'Which of the following is a well-formatted Short-Term financial goal?',
        questionHinglish: 'Inme se konsa accha Short-Term goal ka example hai?',
        options: [
          'Become a billionaire someday',
          'Save ₹15,000 in 4 months for an emergency fund',
          'Buy a mansion in Dubai when I turn 80',
          'Win a lottery next week'
        ],
        optionsHinglish: [
          'Kabhi na kabhi billionaire banna',
          '4 mahine me ₹15,000 emergency fund ke liye bachana',
          '80 saal ki umar me Dubai me ghar lena',
          'Agle hafte lottery jeetna'
        ],
        correctAnswerIndex: 1,
        explanation: 'It has a specific target amount (₹15,000) and clear deadline (4 months).'
      },
      {
        id: 'q10-3',
        question: 'Why is tracking goal progress visually (like goal meters) effective?',
        questionHinglish: 'Goal progress ko visually track karna (jaise Goal Meter) kyu helpful hota hai?',
        options: [
          'It provides continuous motivation and reinforces good financial habits',
          'It increases bank interest rates automatically',
          'It takes away all your stress instantly',
          'It prints currency notes at home'
        ],
        optionsHinglish: [
          'Ye continuous motivation deta hai aur disciplined rakhta hai',
          'Ye bank interest badha deta hai',
          'Ye stress permanently khatam kar deta hai',
          'Ye ghar pe notes print karta hai'
        ],
        correctAnswerIndex: 0,
        explanation: 'Visual feedback loops tap into psychological motivation rewards!'
      }
    ]
  },
  {
    id: 'lesson-11',
    order: 11,
    title: 'Inflation & Purchasing Power',
    titleHinglish: 'Mehangai (Inflation) Aur Purchasing Power',
    category: 'Saving',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Inflation is the rate at which the general level of prices for goods and services rises, eroding your money\'s purchasing power over time.',
      'If inflation is 6% per year, something that costs ₹100 today will cost ₹106 next year. If your cash is sitting idle in a 3% bank account, you lose 3% purchasing power every year!',
      'To preserve and grow your real wealth, your investments must generate annual returns higher than the prevailing inflation rate.'
    ],
    contentHinglish: [
      'Inflation (Mehangai) ka matlab hai samay ke sath cheezon ke daam badhna aur paise ki power kam hona.',
      'Agar mehangai 6% hai aur aapka paisa 3% wale bank account me pada hai, toh har saal aapka paisa real me 3% kamzor ho raha hai!',
      'Apni wealth bachane ke liye aapke investments ko mehangai rate se ziada return dena padega.'
    ],
    takeaways: [
      'Inflation erodes the purchasing power of cash.',
      'Idle cash in low-interest accounts loses real value.',
      'Invest in inflation-beating assets like equity mutual funds.'
    ],
    takeawaysHinglish: [
      'Mehangai paise ki khareedne ki shakti kam karti hai.',
      'Khali bank account me pada paisa har saal kamzor hota hai.',
      'Mehangai se ziada return dene wali jagah invest karo.'
    ],
    quiz: [
      {
        id: 'q11-1',
        question: 'What is the effect of Inflation on your savings?',
        questionHinglish: 'Mehangai (Inflation) ka aapki savings par kya asar padta hai?',
        options: [
          'It increases the purchasing power of cash',
          'It erodes purchasing power so money buys fewer goods over time',
          'It makes all items free of cost',
          'It doubles your bank balance automatically'
        ],
        optionsHinglish: [
          'Ye paise ki khareedne ki shakti badha deta hai',
          'Ye purchasing power ghatata hai jisse paise ki value kam hoti hai',
          'Ye saari cheezein free kar deta hai',
          'Ye bank balance double kar deta hai'
        ],
        correctAnswerIndex: 1,
        explanation: 'Inflation increases the cost of living, reducing what each rupee can buy.'
      },
      {
        id: 'q11-2',
        question: 'If Inflation is 6% and your Bank Savings Account gives 3% interest, what is your REAL return?',
        questionHinglish: 'Agar Inflation 6% hai aur Bank 3% interest deta hai, toh REAL return kitna hua?',
        options: [
          '+9%',
          '+3%',
          '-3% (Negative real return)',
          '+18%'
        ],
        optionsHinglish: [
          '+9%',
          '+3%',
          '-3% (Lassan / Loss)',
          '+18%'
        ],
        correctAnswerIndex: 2,
        explanation: 'Real Return = Interest Rate (3%) - Inflation Rate (6%) = -3%.'
      },
      {
        id: 'q11-3',
        question: 'Which investment class historically beats inflation over long periods?',
        questionHinglish: 'Inme se konsa investment long term me mehangai ko beat karta hai?',
        options: [
          'Paper Cash under the mattress',
          'Equity Mutual Funds / Stocks',
          '0% interest checking account',
          'Physical lottery tickets'
        ],
        optionsHinglish: [
          'Gaddhe ke niche rakha cash',
          'Equity Mutual Funds / Stocks',
          '0% interest account',
          'Lottery tickets'
        ],
        correctAnswerIndex: 1,
        explanation: 'Equity investments grow with business profits, outpacing inflation long-term.'
      }
    ]
  },
  {
    id: 'lesson-12',
    order: 12,
    title: 'Stock Market 101',
    titleHinglish: 'Stock Market (Share Bazaar) Seekho',
    category: 'Investing',
    readTime: '5 min read',
    xpReward: 50,
    content: [
      'The stock market is a platform where shares of publicly traded companies are bought and sold by investors.',
      'When you purchase a share of a company, you become a part-owner (shareholder) and participate in its business growth and profits through stock price appreciation and dividends.',
      'Key market benchmarks in India are Nifty 50 (top 50 largest companies on NSE) and Sensex (top 30 companies on BSE), which measure the pulse of the Indian economy.'
    ],
    contentHinglish: [
      'Stock market ek platform hai jahan companies ke shares ki khareed-bech hoti hai.',
      'Jab aap kisi company ka share kharidte ho, toh aap us company ke part-owner ban jaate ho.',
      'India ke main benchmarks hain Nifty 50 (NSE ki top 50 companies) aur Sensex (BSE ki top 30 companies).'
    ],
    takeaways: [
      'Stocks represent fractional ownership in real businesses.',
      'Nifty 50 & Sensex track major market movements.',
      'Invest for long-term compounding, not short-term speculation.'
    ],
    takeawaysHinglish: [
      'Share khareedne se aap company ke hissedar bante ho.',
      'Nifty 50 aur Sensex poore market ki movement batate hain.',
      'Long-term ke liye disciplined investment karo.'
    ],
    quiz: [
      {
        id: 'q12-1',
        question: 'What does buying a stock in a company represent?',
        questionHinglish: 'Company ka share khareedne ka kya matlab hota hai?',
        options: [
          'Taking a high-risk personal bank loan',
          'Becoming a fractional owner/shareholder of that company',
          'Working as a full-time employee for the company',
          'Getting free products from the company store'
        ],
        optionsHinglish: [
          'Bank se loan lena',
          'Company me fractional owner (hissedar) banna',
          'Company ka employee ban jana',
          'Dukaan se free items milna'
        ],
        correctAnswerIndex: 1,
        explanation: 'A stock unit represents ownership equity in that business.'
      },
      {
        id: 'q12-2',
        question: 'What is Nifty 50 on the National Stock Exchange (NSE)?',
        questionHinglish: 'National Stock Exchange (NSE) par Nifty 50 kya hai?',
        options: [
          'A list of 50 cheapest penny stocks',
          'An index tracking 50 of the largest, most liquid Indian companies',
          'A 50% discount coupon on shares',
          'A 50-day trading challenge'
        ],
        optionsHinglish: [
          '50 saste penny stocks',
          'India ki top 50 badi companies ka index',
          '50% discount coupon',
          '50 dino ki trading challenge'
        ],
        correctAnswerIndex: 1,
        explanation: 'Nifty 50 measures the weighted performance of 50 bluechip Indian corporations.'
      },
      {
        id: 'q12-3',
        question: 'What are Dividends in stock investing?',
        questionHinglish: 'Stock investing me Dividend kya hota hai?',
        options: [
          'Fines paid by investors to stock brokers',
          'A portion of company profits distributed directly to shareholders',
          'Government taxes deducted automatically',
          'Monthly subscription fees'
        ],
        optionsHinglish: [
          'Broker ko diya gaya fine',
          'Company ke profit ka wo hissa jo shareholders ko milta hai',
          'Government tax deduction',
          'Monthly subscription fee'
        ],
        correctAnswerIndex: 1,
        explanation: 'Profitable companies reward shareholders by distributing dividends.'
      }
    ]
  },
  {
    id: 'lesson-13',
    order: 13,
    title: 'High-Interest Debt & Credit Traps',
    titleHinglish: 'Karza (Debt) Aur Credit Card Traps',
    category: 'Budgeting',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Debt is a double-edged sword. Low-interest debt (home loans, student loans) builds assets, but high-interest consumer debt (credit cards, 36% APR loan apps) destroys wealth rapidly.',
      'The Minimum Payment Trap: paying only the minimum due on a credit card covers interest fees while leaving principal debt intact for years.',
      'Use proven debt repayment strategies: Debt Avalanche (pay highest interest debt first to save money) or Debt Snowball (pay smallest balance first for quick psychological momentum).'
    ],
    contentHinglish: [
      'Har karza ek jaisa nahi hota. Home loan asset banata hai, par Credit card aur Instant loan apps (36% interest) wealth khatam karte hain.',
      'Minimum Amount Trap: Sirf minimum bill bharne se sirf byaj chukta hai aur karza saalon tak kam nahi hota.',
      'Karza chukane ke 2 tarike: Debt Avalanche (pehle sabse mehanga karza chukao) ya Debt Snowball (pehle sabse chota karza khatam karo).'
    ],
    takeaways: [
      'Avoid high-interest consumer debt above 15% APR.',
      'Always pay full credit card bills, not just minimum due.',
      'Eliminate debts using Snowball or Avalanche methods.'
    ],
    takeawaysHinglish: [
      'Mehangay interest wale karze se door raho.',
      'Credit card bill hamesha 100% full pay karo.',
      'Snowball ya Avalanche method se karze se azadi pao.'
    ],
    quiz: [
      {
        id: 'q13-1',
        question: 'Why is paying only the "Minimum Amount Due" on a credit card dangerous?',
        questionHinglish: 'Credit card me sirf "Minimum Amount" bharna khatarnaak kyu hai?',
        options: [
          'It clears your balance instantly',
          'Unpaid balance incurs compound interest up to 36-42% per year',
          'It gives you free reward points',
          'It closes your card account automatically'
        ],
        optionsHinglish: [
          'Isse balance khatam ho jata hai',
          'Bache hue paise par 36-42% tak ka bhari byaj lagta hai',
          'Isse free reward points milte hain',
          'Isse card account band ho jata hai'
        ],
        correctAnswerIndex: 1,
        explanation: 'Paying minimum balance leaves the principal unpaid, incurring high compound interest.'
      },
      {
        id: 'q13-2',
        question: 'What is the Debt Avalanche method?',
        questionHinglish: 'Debt Avalanche method kya hota hai?',
        options: [
          'Paying off debts starting from the HIGHEST interest rate first',
          'Ignoring debts until winter',
          'Paying only the smallest debts',
          'Taking another loan to pay old loans'
        ],
        optionsHinglish: [
          'Sabse HIGHEST interest wale karze ko pehle chukana',
          'Karze ko ignore kar dena',
          'Sirf sabse chote karze pehle bharna',
          'Naya loan lekar purana loan bharna'
        ],
        correctAnswerIndex: 0,
        explanation: 'Avalanche saves the maximum interest money by targeting highest APR debts first.'
      },
      {
        id: 'q13-3',
        question: 'Which type of debt is generally considered "Good Debt" if managed responsibly?',
        questionHinglish: 'Inme se kisse "Good Debt" mana jata hai agar zimmedari se manage ho?',
        options: [
          'Credit card debt for luxury clothes',
          'Low-interest Education or Housing Loan',
          'Instant payday loan apps with 40% interest',
          'Money borrowed for gambling'
        ],
        optionsHinglish: [
          'Designer kapde ke liye credit card loan',
          'Sasta Education ya Home Loan',
          '40% interest wale Instant loan apps',
          'Gambling ke liye liya gaya loan'
        ],
        correctAnswerIndex: 1,
        explanation: 'Education and housing create long-term skill equity or asset value.'
      }
    ]
  },
  {
    id: 'lesson-14',
    order: 14,
    title: 'Multiple Streams of Income',
    titleHinglish: 'Multiple Income Streams & Side Hustles',
    category: 'Goals',
    readTime: '5 min read',
    xpReward: 50,
    content: [
      'Relying on a single job or employer creates a single point of financial vulnerability. Multiple streams build resilience.',
      'Understand Active vs Passive Income: Active income trades time directly for money (salary/freelance). Passive income earns revenue from assets you built or bought (dividends, digital products, rental returns).',
      'Start a side hustle based on your existing skills—coding, writing, graphic design, tutoring—and channel 100% of side earnings directly into investments.'
    ],
    contentHinglish: [
      'Sirf ek salary par depend rehna risky hota hai. Multiple income sources se security milti hai.',
      'Active vs Passive Income: Active income me aap time ke badle paisa kamate ho. Passive income me aapke assets se bina daily kaam ke paisa aata hai.',
      'Apni skills ke hisab se side hustle start karo aur uski earnings ko 100% invest karo.'
    ],
    takeaways: [
      'Diversify income sources to eliminate single-job dependency.',
      'Build passive income assets (dividends, investments).',
      'Reinvest 100% of side-hustle profits for accelerated growth.'
    ],
    takeawaysHinglish: [
      'Income ke alag-alag zariye banao.',
      'Passive income wale assets build karo.',
      'Side hustle ki earnings ko kharch karne ke bajaye invest karo.'
    ],
    quiz: [
      {
        id: 'q14-1',
        question: 'What is the primary difference between Active Income and Passive Income?',
        questionHinglish: 'Active Income aur Passive Income me main fark kya hai?',
        options: [
          'Active income requires direct continuous time; Passive income earns from pre-existing assets',
          'Active income is illegal; Passive income is legal',
          'Active income comes only from lottery; Passive income comes from salary',
          'There is no difference'
        ],
        optionsHinglish: [
          'Active me direct time dena padta hai; Passive me assets se earings aati hain',
          'Active illegal hota hai',
          'Active lottery se aata hai',
          'Dono ek hi hain'
        ],
        correctAnswerIndex: 0,
        explanation: 'Active trades time for cash, whereas passive leverages assets and systems.'
      },
      {
        id: 'q14-2',
        question: 'What is the smartest financial move when you start earning from a Side Hustle?',
        questionHinglish: 'Side Hustle se kamai hone par sabse smart move kya hoga?',
        options: [
          'Immediately upgrade your lifestyle and spend it all',
          'Direct side earnings into long-term investments & emergency fund',
          'Quit your primary job on day 1 without savings',
          'Hide cash under your bed'
        ],
        optionsHinglish: [
          'Turant poora paisa party aur shopping me uda do',
          'Us kamai ko long-term investments aur emergency fund me dalo',
          'Day 1 par hi bina savings ke job chhod do',
          'Gaddhe me daba ke rakh do'
        ],
        correctAnswerIndex: 1,
        explanation: 'Investing 100% of side income accelerates your path to financial independence.'
      },
      {
        id: 'q14-3',
        question: 'Which of the following is an example of generating Passive Income?',
        questionHinglish: 'Inme se konsa Passive Income ka example hai?',
        options: [
          'Working 10 hours overtime at an office',
          'Earning dividend payouts from stock/mutual fund investments',
          'Driving a cab for 12 hours',
          'Selling old furniture once'
        ],
        optionsHinglish: [
          'Office me 10 ghante overtime karna',
          'Stocks aur Mutual Funds se Dividend payouts milna',
          '12 ghante cab chalana',
          'Purana saman ek baar bechna'
        ],
        correctAnswerIndex: 1,
        explanation: 'Dividends are earned passively from equity ownership without trading daily hours.'
      }
    ]
  },
  {
    id: 'lesson-15',
    order: 15,
    title: 'UPI & Cyber Fraud Safety',
    titleHinglish: 'UPI & Online Frauds Se Kaise Bache?',
    category: 'Security',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Digital payments through UPI are fast and convenient, but cyber criminals actively target users with phishing, fake QR codes, and OTP scams.',
      'Golden Rule of UPI: Entering your UPI PIN is ONLY required when SENDING or TRANSFERRING money. You NEVER need to enter a PIN to receive money!',
      'Never share OTPs, CVV, or passwords on phone calls. Report cyber frauds immediately to the official National Cyber Crime Helpline in India: 1930.'
    ],
    contentHinglish: [
      'UPI payments fast hain, par cyber fraud, fake QR codes aur OTP scam se savdhan rehna zaroori hai.',
      'UPI ka Golden Rule: UPI PIN sirf TABHI daalna hota hai jab aap PAISA BHEJ RAHE HO! Paisa lene ke liye kabhi PIN nahi lagta!',
      'Kisi ko OTP ya CVV mat batao. Fraud hone par 1930 Cyber Crime helpline par report karo.'
    ],
    takeaways: [
      'UPI PIN is needed ONLY to send money, NEVER to receive.',
      'Never share OTP, CVV, or passwords over call or chat.',
      'Report financial scams immediately to National Helpline 1930.'
    ],
    takeawaysHinglish: [
      'UPI PIN sirf paise BHEJNE ke liye chahiye, lene ke liye NAHI.',
      'OTP aur CVV kisi ke sath share mat karo.',
      'Fraud hone par 1930 par call karke report karo.'
    ],
    quiz: [
      {
        id: 'q15-1',
        question: 'When do you need to enter your 4-digit or 6-digit UPI PIN?',
        questionHinglish: 'Aapko apna UPI PIN kab daalna padta hai?',
        options: [
          'ONLY when sending/paying money from your account',
          'When receiving money from a stranger',
          'To check WhatsApp messages',
          'Whenever someone sends you an email'
        ],
        optionsHinglish: [
          'Sirf tab jab aap apne account se PAISA BHEJ RAHE HO',
          'Jab kisi se paisa lena ho',
          'WhatsApp check karne ke liye',
          'Email aane par'
        ],
        correctAnswerIndex: 0,
        explanation: 'Receiving money requires ZERO PIN entries. If someone asks for PIN to receive money, it is a SCAM!'
      },
      {
        id: 'q15-2',
        question: 'Someone claiming to be a Bank Manager calls asking for your OTP to avoid card block. What should you do?',
        questionHinglish: 'Kisi ne Bank Manager bankar OTP maanga. Aap kya karoge?',
        options: [
          'Give OTP immediately',
          'NEVER share OTP with anyone and disconnect call immediately',
          'Post OTP on social media',
          'Pay them ₹1000'
        ],
        optionsHinglish: [
          'Turant OTP de do',
          'Kabhi OTP share mat karo aur call disconnect karo',
          'Social media par daal do',
          'Unhe ₹1000 de do'
        ],
        correctAnswerIndex: 1,
        explanation: 'Banks NEVER ask for OTPs or credentials over phone calls.'
      },
      {
        id: 'q15-3',
        question: 'What is the official National Cyber Crime Helpline number in India for reporting online financial frauds?',
        questionHinglish: 'India me cyber fraud report karne ke liye National Helpline number kya hai?',
        options: [
          '100',
          '1930',
          '108',
          '9999'
        ],
        optionsHinglish: [
          '100',
          '1930',
          '108',
          '9999'
        ],
        correctAnswerIndex: 1,
        explanation: '1930 is the official financial cyber crime helpline in India.'
      }
    ]
  },
  {
    id: 'lesson-16',
    order: 16,
    title: 'Crypto & High-Risk Assets',
    titleHinglish: 'Crypto & High-Risk Assets Ka Sach',
    category: 'Investing',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Cryptocurrencies and speculative digital tokens promise rapid upside, but carry extreme volatility—often dropping 80-90% in market downturns.',
      'Never put your emergency fund or money needed in the next 3 years into speculative unregulated assets.',
      'Keep speculative high-risk bets capped at under 5% of your total portfolio, building 95% of your core wealth in regulated Index Funds, Mutual Funds, and Gold.'
    ],
    contentHinglish: [
      'Crypto me high returns dikhte hain, par ye 80-90% tak gir bhi sakte hain.',
      'Emergency fund ya zaroori paise ko kabhi speculative assets me mat dalo.',
      'Crypto/High-risk assets ko total portfolio ka max 5% rakho, baki 95% core investments (Mutual Funds, Gold, FD) me rakho.'
    ],
    takeaways: [
      'Crypto carries extreme volatility and regulatory risk.',
      'Limit speculative bets to <5% of total wealth.',
      'Build 95% of core wealth in regulated, transparent assets.'
    ],
    takeawaysHinglish: [
      'Crypto bohot volatile aur risky hota hai.',
      'Speculative assets ko 5% se ziada mat hone do.',
      'Core wealth safe aur regulated funds me rakho.'
    ],
    quiz: [
      {
        id: 'q16-1',
        question: 'What is the recommended maximum portfolio allocation for high-risk speculative assets like Crypto?',
        questionHinglish: 'Crypto jaise high-risk assets me portfolio ka max kitna % hona chahiye?',
        options: [
          '100% of your net worth',
          'Under 5% of total portfolio',
          '50% of your emergency fund',
          'All borrowed money'
        ],
        optionsHinglish: [
          'Poora 100% paisa',
          'Total portfolio ka 5% se kam',
          'Emergency fund ka 50%',
          'Karza lekar poora paisa'
        ],
        correctAnswerIndex: 1,
        explanation: 'Limiting high-risk assets to <5% protects your financial foundation from market crashes.'
      },
      {
        id: 'q16-2',
        question: 'Why should Emergency Funds NEVER be invested in Cryptocurrencies?',
        questionHinglish: 'Emergency Fund ko Crypto me kyu NAHI daalna chahiye?',
        options: [
          'Crypto is extremely volatile and can lose 80% value overnight during a crisis',
          'Crypto is endorsed by banks',
          'Crypto never changes price',
          'Crypto pays 50% guaranteed monthly interest'
        ],
        optionsHinglish: [
          'Crypto bohot volatile hota hai aur zarurat ke vakt 80% gir sakta hai',
          'Crypto bank endorse karta hai',
          'Iska daam kabhi nahi badalta',
          'Isme 50% fixed return milta hai'
        ],
        correctAnswerIndex: 0,
        explanation: 'Emergency funds require 100% principal safety and instant liquidity without loss.'
      },
      {
        id: 'q16-3',
        question: 'What forms the core 90-95% foundation of a prudent investor\'s portfolio?',
        questionHinglish: 'Prudent investor ke portfolio ka 90-95% hissa kin me hona chahiye?',
        options: [
          'Regulated Index Mutual Funds, Debt, Gold & Sovereign bonds',
          'Unregulated meme coins',
          'Lottery tickets',
          'Casino chips'
        ],
        optionsHinglish: [
          'Regulated Index Mutual Funds, Gold, Sovereign Bonds',
          'Meme coins',
          'Lottery tickets',
          'Casino chips'
        ],
        correctAnswerIndex: 0,
        explanation: 'Regulated core assets build sustainable, compound wealth over time.'
      }
    ]
  },
  {
    id: 'lesson-17',
    order: 17,
    title: 'Psychology of Money & Lifestyle Creep',
    titleHinglish: 'Psychology of Money & Lifestyle Creep',
    category: 'Budgeting',
    readTime: '4 min read',
    xpReward: 50,
    content: [
      'Financial mastery is 20% knowledge and 80% behavior. Controlling emotions like status flexing and FOMO (Fear of Missing Out) dictates long-term wealth.',
      'Lifestyle Creep occurs when your living expenses automatically rise as your income increases, leaving your savings rate stagnating at zero.',
      'Rule of Increments: Whenever you get a salary hike or promotion, automatically allocate at least 50% of the raise into investments before upgrading your lifestyle.'
    ],
    contentHinglish: [
      'Paisa kamana 20% knowledge aur 80% behavior hai. Show-off aur FOMO se bachna sabse bada secret hai.',
      'Lifestyle Creep ka matlab hai salary badhne par kharche bhi badha lena, jisse savings zero hi rehti hain.',
      'Rule of Increments: Jab bhi salary badhe, us increment ka 50% pehle invest karo.'
    ],
    takeaways: [
      'Behavioral control beats complex financial formulas.',
      'Avoid Lifestyle Creep when your salary grows.',
      'Automate 50% of all income raises into investments.'
    ],
    takeawaysHinglish: [
      'Money control dimaag aur habits se aata hai.',
      'Salary badhne par saare kharche mat badhao.',
      'Increment ka 50% pehle invest karo.'
    ],
    quiz: [
      {
        id: 'q17-1',
        question: 'What is "Lifestyle Creep"?',
        questionHinglish: '"Lifestyle Creep" kya hota hai?',
        options: [
          'When expenses rise automatically alongside every salary increment',
          'Buying a cheaper phone',
          'Living in a small apartment forever',
          'Getting a tax refund'
        ],
        optionsHinglish: [
          'Salary badhne par kharche bhi automatic badha lena',
          'Sasta phone khareedna',
          'Chote ghar me rehna',
          'Tax refund milna'
        ],
        correctAnswerIndex: 0,
        explanation: 'Lifestyle creep eats up income raises, preventing net worth growth.'
      },
      {
        id: 'q17-2',
        question: 'What is the 50% Rule for Salary Raises?',
        questionHinglish: 'Salary Raise ke liye 50% Rule kya hai?',
        options: [
          'Spend 50% on a celebration trip and give 50% to friends',
          'Invest at least 50% of any new raise before increasing living costs',
          'Quit 50% of your work hours',
          'Donate 50% of income'
        ],
        optionsHinglish: [
          '50% party me aur 50% dosto ko do',
          'Increment ka kam se kam 50% pehle invest karo',
          '50% kaam chhod do',
          '50% donate kar do'
        ],
        correctAnswerIndex: 1,
        explanation: 'Investing 50% of raises builds wealth fast without affecting current lifestyle standards.'
      },
      {
        id: 'q17-3',
        question: 'Which emotional trap drives people to buy expensive items they cannot afford?',
        questionHinglish: 'Konsa emotional trap logon se mehangi cheezein khareedwata hai?',
        options: [
          'FOMO & Status Flexing (dosto me show-off)',
          'Budget tracking habit',
          'Disciplined SIP investing',
          'Emergency preparedness'
        ],
        optionsHinglish: [
          'FOMO aur Status Flexing (show-off)',
          'Budget tracking habit',
          'Disciplined SIP',
          'Emergency preparedness'
        ],
        correctAnswerIndex: 0,
        explanation: 'Status competition causes impulse spending on non-essential flex items.'
      }
    ]
  },
  {
    id: 'lesson-18',
    order: 18,
    title: 'The FIRE Movement & Early Freedom',
    titleHinglish: 'FIRE Movement & Financial Freedom',
    category: 'Goals',
    readTime: '5 min read',
    xpReward: 50,
    content: [
      'FIRE stands for Financial Independence, Retire Early. It is a philosophy focused on aggressive savings and investing to gain complete ownership of your time.',
      'Your "FIRE Target": Accumulate a net worth equal to 25 times your annual living expenses.',
      'The 4% Safe Withdrawal Rule suggests that withdrawing 4% annually from your invested portfolio allows your nest egg to sustainably fund living expenses for decades.'
    ],
    contentHinglish: [
      'FIRE ka matlab hai Financial Independence, Retire Early. Ye apne TIME par poora control pane ka philosophy hai.',
      'Aapka "FIRE Target" = Saal ke kul kharche ka 25 गुना (25x Annual Expenses).',
      '4% Safe Withdrawal Rule ke mutabiq aap apne portfolio se saal me 4% nikal kar bina paisa khatam kiye jee sakte ho.'
    ],
    takeaways: [
      'FIRE Target = 25x Annual Expenses.',
      'Financial Independence gives freedom over your time.',
      '4% Safe Withdrawal Rule ensures long-term portfolio longevity.'
    ],
    takeawaysHinglish: [
      'FIRE Number = Saal ke kharche ka 25 guna.',
      'Financial independence aapko time aur choice ki azadi deta hai.',
      '4% rule se portfolio saalon tak chalta rehta hai.'
    ],
    quiz: [
      {
        id: 'q18-1',
        question: 'What does the acronym FIRE stand for in personal finance?',
        questionHinglish: 'Personal finance me FIRE ka full form kya hai?',
        options: [
          'Financial Independence, Retire Early',
          'Fixed Income Return Equity',
          'Fast Investment Rate Exchange',
          'Fund Interest Relief Fund'
        ],
        optionsHinglish: [
          'Financial Independence, Retire Early',
          'Fixed Income Return Equity',
          'Fast Investment Rate Exchange',
          'Fund Interest Relief Fund'
        ],
        correctAnswerIndex: 0,
        explanation: 'FIRE stands for Financial Independence, Retire Early.'
      },
      {
        id: 'q18-2',
        question: 'How do you calculate your FIRE corpus goal?',
        questionHinglish: 'Aapka FIRE corpus goal kaise calculate hota hai?',
        options: [
          '25 times your annual living expenses',
          '1 year of pocket money',
          '100 times your monthly gym fee',
          '₹10,000 fixed for everyone'
        ],
        optionsHinglish: [
          'Saal ke kul kharche ka 25 GUNA (25x Annual Expenses)',
          '1 saal ki pocket money',
          'Gym fee ka 100 guna',
          'Sabke liye fixed ₹10,000'
        ],
        correctAnswerIndex: 0,
        explanation: 'Accumulating 25x annual expenses provides complete financial independence.'
      },
      {
        id: 'q18-3',
        question: 'What is the 4% Safe Withdrawal Rule?',
        questionHinglish: '4% Safe Withdrawal Rule kya hota hai?',
        options: [
          'Withdrawing max 4% of portfolio per year so investments last indefinitely',
          'Giving 4% tip at restaurants',
          'Paying 4% tax on all savings',
          'Withdrawing 4% every single day'
        ],
        optionsHinglish: [
          'Portfolio se saal me max 4% nikalna jisse paisa saalon tak na khatam ho',
          'Restaurant me 4% tip dena',
          '4% tax dena',
          'Har din 4% nikalna'
        ],
        correctAnswerIndex: 0,
        explanation: 'The 4% rule allows living off portfolio growth while keeping the principal intact.'
      }
    ]
  }
];

export const INITIAL_LESSONS: Lesson[] = [
  ...BASE_LESSONS,
  ...LESSONS_BATCH_1,
  ...LESSONS_BATCH_2,
  ...LESSONS_BATCH_3,
  ...LESSONS_BATCH_4,
  ...LESSONS_BATCH_5
];

export const INITIAL_DAILY_CHALLENGES: DailyChallenge[] = [
  {
    id: 'ch-1',
    text: 'Avoid food delivery today 🍱',
    textHinglish: 'Aaj online food order mat karo 🍱',
    xpReward: 25
  },
  {
    id: 'ch-2',
    text: 'Track every expense today 📝',
    textHinglish: 'Aaj ka har chota-bada kharcha likho 📝',
    xpReward: 25
  },
  {
    id: 'ch-3',
    text: 'Save ₹100 today 💰',
    textHinglish: 'Aaj ₹100 piggy bank/savings me dalo 💰',
    xpReward: 25
  },
  {
    id: 'ch-4',
    text: 'Tell a friend about budgeting 📣',
    textHinglish: 'Ek dost ko budgeting rule batao 📣',
    xpReward: 25
  },
  {
    id: 'ch-5',
    text: 'Check your bank balance right now 📱',
    textHinglish: 'Abhi apna bank balance check karo 📱',
    xpReward: 25
  }
];

export const INITIAL_LEADERBOARD_USERS: LeaderboardUser[] = [
  {
    rank: 1,
    id: 'user-top-1',
    name: 'Aarav Sharma',
    avatar: getEmojiAvatarSvg('😎', '#2563eb'),
    xp: 1450,
    streak: 18,
    levelTitle: 'Wealth Builder 🌟'
  },
  {
    rank: 2,
    id: 'user-top-2',
    name: 'Ananya Verma',
    avatar: getEmojiAvatarSvg('🤩', '#ec4899'),
    xp: 1120,
    streak: 14,
    levelTitle: 'Wealth Builder 🌟'
  },
  {
    rank: 3,
    id: 'user-top-3',
    name: 'Rohan Gupta',
    avatar: getEmojiAvatarSvg('🤠', '#d97706'),
    xp: 880,
    streak: 10,
    levelTitle: 'Investor 📈'
  },
  {
    rank: 4,
    id: 'user-top-4',
    name: 'Priya Patel',
    avatar: getEmojiAvatarSvg('🥳', '#a855f7'),
    xp: 740,
    streak: 7,
    levelTitle: 'Investor 📈'
  },
  {
    rank: 5,
    id: 'user-top-5',
    name: 'Vikram Singh',
    avatar: getEmojiAvatarSvg('🤖', '#4f46e5'),
    xp: 620,
    streak: 6,
    levelTitle: 'Investor 📈'
  },
  {
    rank: 6,
    id: 'user-top-6',
    name: 'Sneha Reddy',
    avatar: getEmojiAvatarSvg('🦊', '#e11d48'),
    xp: 480,
    streak: 5,
    levelTitle: 'Saver 💰'
  },
  {
    rank: 7,
    id: 'user-top-7',
    name: 'Kabir Mehta',
    avatar: getEmojiAvatarSvg('🦁', '#ea580c'),
    xp: 390,
    streak: 4,
    levelTitle: 'Saver 💰'
  },
  {
    rank: 8,
    id: 'user-top-8',
    name: 'Neha Joshi',
    avatar: getEmojiAvatarSvg('🐼', '#10b981'),
    xp: 290,
    streak: 3,
    levelTitle: 'Saver 💰'
  },
  {
    rank: 9,
    id: 'user-top-9',
    name: 'Devansh Kumar',
    avatar: getEmojiAvatarSvg('🚀', '#06b6d4'),
    xp: 180,
    streak: 2,
    levelTitle: 'Beginner 💼'
  }
];
