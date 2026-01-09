import { FaChevronRight } from 'react-icons/fa';

interface LinkItem {
  id: string;
  label: string;
  href: string;
}

const links: LinkItem[] = [
  { id: '1', label: "Notariuslar ro'yxati", href: '#' },
  { id: '2', label: 'Kadastr xizmatlari', href: '#' },
  { id: '3', label: "Kommunal to'lovlar", href: '#' },
  { id: '4', label: 'Soliqlar haqida', href: '#' },
];

export function SidebarLinks() {
  return (
    <div className="space-y-3">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition group"
        >
          <span className="font-bold text-gray-700">{link.label}</span>
          <FaChevronRight className="text-gray-400 group-hover:text-primary" />
        </a>
      ))}
    </div>
  );
}

