import { Menu } from '@/shared/menu';
import Link from 'next/link';

const MENUS: Menu[] = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/settings',
        title: 'Setting',
    },
    {
        href: '/photos',
        title: 'Photo',
    },
];

export default function Header() {
    return (
        <header className="py-10">
            <div className="container">
                <nav>
                    <ul className="flex items-center justify-center gap-10 text-lg font-bold uppercase tracking-wider text-gray-500">
                        {MENUS.map((menu) => (
                            <li key={menu.href}>
                                <Link href={menu.href}>{menu.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
