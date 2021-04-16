import { Navbar } from '..';
import Logo from '../Logo/Logo';
import s from './PageHeader.module.scss';

const PageHeader = () => {
    return (
        <header className={s.pageHeader}>
            <div className={s.headerContainer}>
                <div className={s.brandWrapper}>
                    <Logo />
                </div>
                <Navbar className={s.navLinks} />
            </div>
        </header>
    )
}

export default PageHeader;
