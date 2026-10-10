'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const Breadcrumbs = () => {
    const pathname = usePathname();

    // Don't show breadcrumbs on homepage
    if (pathname === '/') return null;

    const pathSegments = pathname
        .split('/')
        .filter((segment) => segment !== '');

    const breadcrumbItems = pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return { href, label };
    });

    return (
        <nav className="flex py-4 px-6  mt-[90px] text-sm bg-white rounded-lg shadow-sm mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-wrap">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-700 hover:text-blue-600"
                    >
                        <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        خانه
                    </Link>
                </li>
                {breadcrumbItems.map((item, index) => (
                    <Fragment key={item.href}>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link
                                    href={item.href}
                                    className={`ml-1 text-sm font-medium hover:text-blue-600 md:ml-2 ${index === breadcrumbItems.length - 1
                                        ? 'text-blue-600'
                                        : 'text-gray-700'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        </li>
                    </Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs; 