# UYSOT - Ko'chmas mulk platformasi

React + TypeScript + Tailwind CSS bilan yaratilgan SPA loyiha.

## Texnologiyalar

- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- React Icons

## O'rnatish

```bash
npm install
```

## Ishga tushirish

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Struktura

```
src/
├── app/              # App va Layout komponentlar
├── pages/            # Sahifalar
├── features/         # Feature-based komponentlar
│   ├── layout/      # Layout komponentlar (TopBar, Navbar, Footer)
│   ├── search/      # Qidiruv funksiyalari
│   ├── properties/  # Ko'chmas mulk komponentlari
│   ├── partners/    # Hamkorlar bo'limi
│   ├── mortgage/    # Ipoteka kalkulyatori
│   └── journal/     # Jurnal bo'limi
├── shared/          # Umumiy komponentlar va utilitylar
│   ├── ui/          # UI komponentlar
│   ├── hooks/       # Custom hooks
│   └── utils/       # Utility funksiyalar
├── types/           # TypeScript turlari
└── constants/       # Konstanta ma'lumotlar
```

## Keyingi qadamlar

- `/listing` - E'lonlar ro'yxati
- `/property/:id` - E'lon batafsil
- `/blog` - Blog sahifasi
- `/calculator` - Kalkulyator sahifasi

