import Link from 'next/link';
import Logo from '../Logo/Logo';
import s from './PageFooter.module.scss';

const PageFooter = () => {
    return (
        <footer className={s.pageFooter}>
            <div className={s.footerLogo}>
                <Logo />
            </div>
            <p>© 2021 Devslopes - All Rights Reserved. Page developed by <Link href='http://www.pjmcdermott.com'><a>PJMcDermott</a></Link></p>
        </footer>
    )
}

export default PageFooter;