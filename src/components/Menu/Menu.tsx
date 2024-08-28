'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface links {
  name: string;
  href: string;
}
interface MenuProps {
  onLinkClick: () => void;
  links: links[];
}

export const Menu: React.FC<MenuProps> = ({ onLinkClick, links }) => {
  const pathName = usePathname();

  return (
    <ul className='flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
      {links.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`font-md rounded p-1 ${
              pathName === item.href
                ? 'bg-btn text-primary-300 bg-secondary-100'
                : 'text-secondary hover:text-btn'
            }`}
            onClick={onLinkClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
