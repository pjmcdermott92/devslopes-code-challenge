import Image from 'next/image';
import CtaButton from '../../../CtaButton/CtaButton';
import s from './TotalValue.module.scss';

const TotalValue = () => {

    const VALUES = [
        { item: '30 Days Of Missions From Devslopes', value: '997', bonusClass: false },
        { item: '30 Days Of Code Coaching With Our Team Of Developers!', value: '997', bonusClass: false },
        { item: '30 Days Of Access To The Code Challenge Chatroom!', value: '247', bonusClass: false },
        { item: 'Over 50 Professional Code Training Modules', value: '297', bonusClass: false },
        { item: 'Live Coaching Meetups Each Week', value: '497', bonusClass: false },
        { item: 'HTML & CSS For Beginners Course', value: '97', bonusClass: true },
        { item: 'API Development With JavaScript & Node Course', value: '197', bonusClass: true },
        { item: 'Devslopes JavaScript Certification', value: '97', bonusClass: true },
    ];

    return (
        <div className={s.totalValue}>
            <Image
                src='/major_cover@1x.png'
                alt='30 Day Cide Challenge'
                width='960'
                height='281'
            />
            <ul className={s.values}>
                {
                    VALUES.map((value, index) => {
                        return (
                            <li key={index} className={value.bonusClass ? s.bonusLi : null}>
                                <div>
                                    <span>
                                        { value.bonusClass
                                            ? <span className={s.bonus}>Bonus:</span>
                                            : null
                                        }
                                        {value.item}
                                    </span>
                                    <span className={s.value}>
                                        {`($${value.value} Value)`}
                                    </span>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
            <h3 className={s.attentionGrabber}>Total Value: <del>$3,426</del></h3>
            <p className={s.largeText}>If you want to learn to code THIS MONTH and take the first steps toward a new career, then <em><u>this</u></em> is the mission we’re giving you...</p>
            <p className={s.largeText}><strong>You have 30 Days, starting March 31st...</strong></p>
            <h2 className={s.largeHeader}>Do <u>YOU</u> Accept?</h2>
            <CtaButton size="large" />
        </div>
    )
}

export default TotalValue;