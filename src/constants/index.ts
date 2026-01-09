import { Property, Building, Article, Partner, Location } from '@/types';

export const LOCATIONS: Location[] = [
  { id: 'all', name: "Butun O'zbekiston bo'ylab" },
  { id: 'qashqadaryo', name: 'Qashqadaryo viloyati', region: 'Qashqadaryo viloyati' },
  { id: 'qarshi', name: 'Qarshi shahri' },
  { id: 'shahrisabz', name: 'Shahrisabz' },
  { id: 'koson', name: 'Koson tumani' },
  { id: 'guzor', name: "G'uzor tumani" },
  { id: 'kitob', name: 'Kitob tumani' },
  { id: 'buxoro', name: 'Buxoro viloyati', region: 'Buxoro viloyati' },
  { id: 'buxoro-city', name: 'Buxoro shahri' },
];

export const ROOM_OPTIONS = [
  'Xonalar',
  'Studiya',
  '1 xona',
  '2 xona',
  '3 xona',
  '4+ xona',
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Yangi binoda kvartira',
    price: 138_000_000,
    location: "Butun O'zbekiston bo'ylab",
    rooms: 1,
    area: 45,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&fit=crop',
    type: 'apartment',
    badge: { text: 'Keshbek 0.5% gacha', color: 'secondary' },
  },
  {
    id: '2',
    title: 'Hovli uy',
    price: 4_200_000,
    location: 'Qarshi shahri',
    rooms: 3,
    area: 120,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&fit=crop',
    type: 'house',
    badge: { text: "Muddatli to'lov", color: 'primary' },
  },
  {
    id: '3',
    title: 'Yangi binoda kvartira',
    price: 250_000_000,
    location: "Butun O'zbekiston bo'ylab",
    rooms: 2,
    area: 60,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&fit=crop',
    type: 'apartment',
    badge: { text: 'Ipoteka', color: 'yellow' },
  },
];

export const SECONDARY_PROPERTIES: Property[] = [
  {
    id: 's1',
    title: '3 xona, 70 m²',
    price: 180_000_000,
    location: "Qarshi, Navoiy ko'chasi",
    rooms: 3,
    area: 70,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80&fit=crop',
    type: 'apartment',
  },
  {
    id: 's2',
    title: '2 xona, 50 m²',
    price: 125_000_000,
    location: 'Qarshi City',
    rooms: 2,
    area: 50,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80&fit=crop',
    type: 'apartment',
  },
  {
    id: 's3',
    title: '1 xona, 35 m²',
    price: 2_300_000,
    location: 'Shahrisabz',
    rooms: 1,
    area: 35,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80&fit=crop',
    type: 'apartment',
  },
  {
    id: 's4',
    title: 'Hovli uy, 200 m²',
    price: 350_000_000,
    location: 'Koson tumani',
    rooms: 0,
    area: 200,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80&fit=crop',
    type: 'house',
  },
];

export const BUILDINGS: Building[] = [
  {
    id: 'b1',
    name: 'QARSHI CITY RESIDENCE',
    location: 'Qarshi shahri',
    startingPrice: 4_200_000,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&fit=crop',
    status: 'payment_plan',
    badge: { text: "Muddatli to'lov", color: 'primary' },
  },
  {
    id: 'b2',
    name: 'NASAF PLAZA',
    location: 'Qarshi shahri',
    startingPrice: 2_300_000,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&fit=crop',
    status: 'delivered',
    badge: { text: 'Topshirildi', color: 'green' },
  },
  {
    id: 'b3',
    name: 'SHAHRISABZ GARDENS',
    location: 'Shahrisabz',
    startingPrice: 60,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80&fit=crop',
    status: 'under_construction',
    badge: { text: 'Qurilmoqda', color: 'yellow' },
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: "Ipoteka krediti olish uchun qanday hujjatlar kerak?",
    excerpt: "Bankdan kredit olishda talab qilinadigan asosiy hujjatlar ro'yxati va ularni tayyorlash tartibi haqida batafsil ma'lumot.",
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80&fit=crop',
    category: 'advice',
    publishedAt: '2025-01-15',
  },
  {
    id: 'a2',
    title: "2025 yilda ko'chmas mulk bozori qanday rivojlanadi?",
    excerpt: "Mutaxassislarning fikrilariga ko'ra, yangi yilda uy narxlari va ipoteka stavkalari qanday o'zgarishi kutilmoqda.",
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80&fit=crop',
    category: 'analysis',
    publishedAt: '2025-01-10',
  },
  {
    id: 'a3',
    title: "Uy sotib olishda e'tibor berish kerak bo'lgan 10 narsa",
    excerpt: "Yangi uy sotib olayotganingizda qanday jihatlarga e'tibor qaratishingiz kerakligi haqida.",
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80&fit=crop',
    category: 'guide',
    publishedAt: '2025-01-05',
  },
];

export const PARTNERS: Partner[] = [
  { id: 'p1', name: 'QARSHI BUILD', icon: 'FaBuilding', color: 'primary' },
  { id: 'p2', name: 'GOLDEN CITY', icon: 'FaCity', color: 'blue-600' },
  { id: 'p3', name: 'NASAF STROY', icon: 'FaHome', color: 'green-600' },
  { id: 'p4', name: 'DREAM HOUSE', icon: 'FaBuilding', color: 'purple-600' },
  { id: 'p5', name: 'ROYAL ESTATE', icon: 'FaLandmark', color: 'yellow-600' },
];

export const MORTGAGE_CONFIG = {
  annualRate: 17,
  maxTermYears: 20,
  minDownPercent: 10,
  maxDownPercent: 50,
  defaultPrice: 400_000_000,
  defaultDownPercent: 20,
  defaultTermYears: 10,
} as const;

