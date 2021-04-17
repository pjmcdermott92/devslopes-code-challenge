import CtaButton from '../CtaButton/CtaButton';
import {
    Proem,
    Hero,
    QuestionHeader,
    MarkMessage,
    QuestionaireBox,
    HowItWorks,
    TotalValue,
    ParalaxBox,
    StepCards,
    Mission,
    Bonus,
    Cerification
} from './components';
import s from './Homepage.module.scss';

const Homepage = () => {
    return (
        <>
        <div className={s.aboveFoldWrapper}>
            <div className="container">
                <Proem />
                <Hero className={s.heroSection} />
            </div>
        </div>

        <div className={s.contentWrapper}>
            <div className={s.innerContent}>

                <QuestionHeader />
                <MarkMessage />
                <QuestionaireBox />

                <h4 className={`${s.narrowContent} ${s.largeText}`} style={{ padding: "1rem 0", textAlign: 'center' }}>
                    If You Checked ANY Of The Boxes Above, Then I Want To Invite You To Join The <strong>'30 Day Code Challenge'</strong> <u>And Change Your Life Forever</u>!
                </h4>

                <HowItWorks />

                <div className={s.narrowContent}>
                    <div className="accent-box box-blue">
                        <div className={s.innerContent}>
                            <TotalValue />
                        </div>
                    </div>
                    <h3 className={s.blueHeaderMed}>Need More Information Before You Make Your Decision...?</h3>
                    <p className={s.largeText}>Let Me Break Down All The Awesome Stuff You'll Get When You Join The Challenge Today!</p>
                </div>

                <div className="accent-box box-red">
                    <div className={s.innerContent}>
                        <ParalaxBox
                            className={s.paralaxBox}
                            subtitle={<h3>The first thing <strong><u>You'll Get Access</u> To Is The...</strong></h3>}
                            title={<h2>'30-Day Code' <br />CHALLENGE...</h2>}
                        />
                        <p>Led by trainer <strong>Mark Wahlbeck &amp; Full-Stack Developer Jason Brewer from the Devslopes Team</strong>, this challenge is designed to help you <strong>Learn to Code</strong> and to do it <strong><u>QUICKLY</u></strong> in just 30 days…</p>
                        <StepCards />
                        <Mission className={s.missionSection} />
                        <CtaButton size="large" />
                    </div>
                </div>

                <ParalaxBox
                    className={s.paralaxBox}
                    subtitle={<h3>Get These AMAZING Bonuses...</h3>}
                    title={<h2 style={{ transform: 'scale(.75)' }}>When You Join The "30 Day Code Challenge" Today...</h2>}
                />
                <Bonus />
                <Cerification />
                <CtaButton />
            </div>
        </div>
        </>
    )
}

export default Homepage;