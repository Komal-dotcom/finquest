export const EMOJI_AVATARS = [
  { emoji: '😎', name: 'Cool', bg: '#2563eb' },
  { emoji: '🤩', name: 'Starry', bg: '#0284c7' },
  { emoji: '🤠', name: 'Cowboy', bg: '#d97706' },
  { emoji: '🥳', name: 'Party', bg: '#ec4899' },
  { emoji: '🤖', name: 'Bot', bg: '#4f46e5' },
  { emoji: '🦁', name: 'Lion', bg: '#ea580c' },
  { emoji: '🐯', name: 'Tiger', bg: '#f59e0b' },
  { emoji: '🦊', name: 'Fox', bg: '#e11d48' },
  { emoji: '🐼', name: 'Panda', bg: '#10b981' },
  { emoji: '🦄', name: 'Unicorn', bg: '#a855f7' },
  { emoji: '👑', name: 'Crown', bg: '#8b5cf6' },
  { emoji: '🚀', name: 'Rocket', bg: '#06b6d4' },
  { emoji: '⚡', name: 'Spark', bg: '#eab308' },
  { emoji: '🦉', name: 'Wise Owl', bg: '#64748b' },
  { emoji: '🥷', name: 'Ninja', bg: '#1e293b' },
  { emoji: '👾', name: 'Gamer', bg: '#9333ea' }
];

export function getEmojiAvatarSvg(emoji: string, bgColor: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="58" fill="${bgColor}"/>
    <text x="50%" y="54%" dominant-baseline="central" text-anchor="middle" font-size="64">${emoji}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function getRandomEmojiAvatar(): string {
  const item = EMOJI_AVATARS[Math.floor(Math.random() * EMOJI_AVATARS.length)];
  return getEmojiAvatarSvg(item.emoji, item.bg);
}
