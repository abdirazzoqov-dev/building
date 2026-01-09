import { HeroSection } from '@/features/search';
import {
  CategoriesGrid,
  HotOffersSection,
  NewBuildingsSection,
  SecondaryMarketSection,
} from '@/features/properties';
import { PartnersSection } from '@/features/partners';
import { MortgageCalculator } from '@/features/mortgage';
import { JournalSection } from '@/features/journal';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesGrid />
      <HotOffersSection />
      <NewBuildingsSection />
      <SecondaryMarketSection />
      <PartnersSection />
      <MortgageCalculator />
      <JournalSection />
    </>
  );
}

