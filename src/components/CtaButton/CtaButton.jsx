import Link from 'next/link';
import s from './CtaButton.module.scss';

const CtaButton = ({ size }) => {

    const BUTTON_LINK = "https://devslopes.thinkific.com/checkout";

    return (
        <Link href={BUTTON_LINK}>
            <a className={s.ctaBtnLink}>
                <div className={s.ctaButton}>
                    <span className={size === 'small' ? s.small : s.large}>
                        Join The Challenge Now!
                    </span>
                    <span className={s.subtext}>
                        I Want Daily Training, Coaching, and Accountability, From Day 1 To Day 30
                    </span>
                </div>
            </a>
        </Link>
    )
}

export default CtaButton;