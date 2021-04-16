import s from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={s.logoWrapper}>
            <div className={s.logoImage}>
                <img
                    src="/devslopes-logo.svg"
                    alt="Devslopes Brand Logo"
                    width={75}
                    height={75}
                />
            </div>
            <div className={s.logoText}>
                <span className={s.brandText}>Devslopes</span>
                <span className={s.textSm}>30-Day Javascript</span>
                <span className={s.textLg}>Challenge</span>
            </div>
        </div>
    )
}

export default Logo;