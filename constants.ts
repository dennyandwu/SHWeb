import { Attraction, EssentialTip } from './types';

export const ATTRACTIONS: Attraction[] = [
  {
    id: '1',
    name: 'The Bund (Writon)',
    description: 'The iconic waterfront promenade featuring historic colonial architecture facing the futuristic skyline of Lujiazui. The perfect collision of East meets West.',
    category: 'History',
    imageUrl: 'https://picsum.photos/id/122/800/600',
    location: 'Zhongshan East 1st Rd'
  },
  {
    id: '2',
    name: 'Yu Garden',
    description: 'A classical Chinese garden located beside the City God Temple in the Old City. Extensive rockeries, ponds, and traditional pavilions.',
    category: 'History',
    imageUrl: 'https://picsum.photos/id/216/800/600',
    location: '218 Anren St, Huangpu'
  },
  {
    id: '3',
    name: 'Shanghai Tower',
    description: 'The tallest building in China. Visit the observation deck on the 118th floor for a 360-degree view of the sprawling megalopolis.',
    category: 'Modern',
    imageUrl: 'https://picsum.photos/id/234/800/600',
    location: '501 Yincheng Middle Rd'
  },
  {
    id: '4',
    name: 'Former French Concession',
    description: 'Tree-lined avenues, art deco apartments, and trendy cafes. A walkable district perfect for experiencing the "Paris of the East" vibe.',
    category: 'Art',
    imageUrl: 'https://picsum.photos/id/305/800/600',
    location: 'Xuhui / Luwan District'
  },
  {
    id: '5',
    name: 'M50 Creative Park',
    description: 'A contemporary art district housed in former textile mills. Famous for graffiti walls, galleries, and artist studios.',
    category: 'Art',
    imageUrl: 'https://picsum.photos/id/400/800/600',
    location: '50 Moganshan Rd'
  },
  {
    id: '6',
    name: 'Nanjing Road Pedestrian Street',
    description: 'One of the world\'s busiest shopping streets. Neon lights, historic department stores, and a bustling atmosphere day and night.',
    category: 'Modern',
    imageUrl: 'https://picsum.photos/id/435/800/600',
    location: 'Nanjing East Rd'
  }
];

export const ESSENTIAL_TIPS: EssentialTip[] = [
  {
    id: 'visa',
    title: '144-Hour Visa-Free Transit',
    icon: '🛂',
    summary: 'Visit Shanghai without a visa for up to 6 days.',
    details: 'Citizens from 54 countries (including most EU nations) can enter Shanghai visa-free for up to 144 hours if they have a connecting ticket to a third country/region. You must arrive and depart from eligible ports (like PVG or SHA airports).'
  },
  {
    id: 'payment',
    title: 'Digital Payments',
    icon: '💳',
    summary: 'Cash is rarely used. Setup Alipay or WeChat Pay.',
    details: 'Download Alipay or WeChat. You can link your European Visa/Mastercard directly to these apps. Look for the "Scan" button to pay merchants, or show your "Payment Code" for them to scan. Always carry a small amount of cash just in case.'
  },
  {
    id: 'internet',
    title: 'Internet & Connectivity',
    icon: '📱',
    summary: 'Your home apps (Google, WhatsApp, IG) may be blocked.',
    details: 'Use an eSIM (like Holafly or Airalo) which usually bypasses the Great Firewall by routing through Hong Kong or elsewhere. Alternatively, install a reliable VPN *before* you arrive. Public Wi-Fi requires SMS verification (often Chinese numbers only).'
  },
  {
    id: 'transport',
    title: 'Getting Around',
    icon: '🚇',
    summary: 'Metro is world-class. Taxis use apps.',
    details: 'The Shanghai Metro is fast, cheap, and has English signage. Use the "Metro Da Dui" app or Apple Maps for routes. For taxis, download the "DiDi" app (the Uber of China) which has an English interface and auto-translation for chatting with drivers.'
  }
];