import { Article } from '@/types';
import { cn } from '@/shared/utils';

interface ArticleCardProps {
  article: Article;
}

const categoryLabels: Record<Article['category'], string> = {
  advice: 'Maslahat',
  analysis: 'Tahlil',
  guide: "Qo'llanma",
};

const categoryColors: Record<Article['category'], string> = {
  advice: 'text-primary',
  analysis: 'text-blue-600',
  guide: 'text-green-600',
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col sm:flex-row gap-6 group cursor-pointer pb-6 border-b">
      <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div>
        <div className={cn('text-xs font-bold mb-2 uppercase', categoryColors[article.category])}>
          {categoryLabels[article.category]}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
      </div>
    </article>
  );
}

