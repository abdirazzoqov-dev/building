import { SearchTab } from '@/types';
import { cn } from '@/shared/utils';

interface SearchTabsProps {
  activeTab: SearchTab;
  onChange: (tab: SearchTab) => void;
}

const TABS: { id: SearchTab; label: string }[] = [
  { id: 'sotib', label: 'Sotib olish' },
  { id: 'ijara', label: 'Ijara' },
  { id: 'tijorat', label: 'Tijorat' },
  { id: 'yangi', label: 'Yangi binolar' },
];

export function SearchTabs({ activeTab, onChange }: SearchTabsProps) {
  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'flex-shrink-0 px-8 py-4 rounded-xl font-bold transition text-lg',
            activeTab === tab.id
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
          aria-label={`${tab.label} tab`}
          aria-selected={activeTab === tab.id}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

