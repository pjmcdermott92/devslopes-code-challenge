import {
    Proem,
    Hero,
    QuestionHeader,
    MarkMessage,
    QuestionaireBox,
    HowItWorks,
    TotalValue
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

            </div>
        </div>
        </>
    )
}

export default Homepage;