'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();
  const here = '◀️';

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home {path === '/' ? here : ''}</Link>
        </li>
        <li>
          <Link href="/about-us">
            About Us {path === '/about-us' ? here : ''}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
