import { db } from './server/db';

console.log('🌱 Seeding FinQuest Database...');
db.seedInitialData();
console.log('✅ Database successfully seeded with 10 lessons, quizzes, daily challenges, and leaderboard users!');
