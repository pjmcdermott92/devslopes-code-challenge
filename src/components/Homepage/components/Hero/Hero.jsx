import HeroVideo from './HeroVideo';
import HeroCta from './HeroCta/HeroCta';
import s from './Hero.module.scss';

const Hero = ({ className }) => {
    return (
        <div className={className}>
            <div className={`flex-parent ${s.heroFlex}`}>
                <HeroVideo className={s.heroVideo}>
                    <h3>The <u>Skills</u> You Seek, The <u>Job</u> You Want, The Lifestyle You Need, Is Going To Be Fueled By <strong>TAKING ACTION</strong></h3>
                </HeroVideo>
                <HeroCta className={s.heroCta} />
            </div>
        </div>
    )
}

export default Hero;