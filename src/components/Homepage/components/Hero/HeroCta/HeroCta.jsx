import Image from 'next/image';
import CtaButton from '../../../../CtaButton/CtaButton';
import CtaCounter from './HeroCounter';
import s from './HeroCta.module.scss';

const HeroCta = ({ className }) => {
    return (
        <div className={className}>
            <h3>The Next <strong>30 Day Code Challenge</strong> Starts On April 26th at 10AM PDT...</h3>
            <Image
                src="/major_cover@1x.png"
                alt="30 day challenge"
                width={500}
                height={146.25}
            />
            <div className={s.spacer} />
            <CtaCounter
                CHALLENGE_DATE="03/31/2021"
            />
            <p>Registration Ends March 31st At 11:59PM PDT!</p>
            <h3><strong>Join The Challenge Now For A One-Time Discounted Payment Of Only $100</strong></h3>
            <CtaButton size="small" />
            <p><i>You can get a full refund up until the start date. Once the challenge starts there are no refunds.</i></p>
        </div>
    )
}

export default HeroCta;