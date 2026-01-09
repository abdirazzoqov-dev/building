import { ArticleCard } from './ArticleCard';
import { SidebarLinks } from './SidebarLinks';
import { TelegramCTA } from './TelegramCTA';
import { ARTICLES } from '@/constants';

export function JournalSection() {
  return (
    <section id="jurnal" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-gray-900 mb-8">Foydali maqolalar</h2>

            <div className="space-y-6">
              {ARTICLES.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-gray-900">Foydali havolalar</h3>
            <SidebarLinks />
            <TelegramCTA />
          </div>
        </div>
      </div>
    </section>
  );
}

