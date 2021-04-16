import Link from 'next/link';

const Navbar = ({ className }) => {

    const NAV_LINKS = [
        { label: 'Join', href: 'https://devslopes.thinkific.com/checkout' },
        { label: 'Members Login', href: 'https://devslopes.thinkific.com/users/sign_in' },
        { label: 'Support', href: 'mailto:mark@devslopes.com' }
    ];

    return (
        <nav className={className}>
            <ul className="nav-links main-nav defaults-removed">
                {NAV_LINKS.map((link, index) => {
                    const { label, href } = link;
                    return(
                        <li className="nav-link" key={index}>
                            <Link href={href}>
                                <a>{label}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar;