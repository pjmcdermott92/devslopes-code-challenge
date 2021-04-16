import Image from 'next/image';
import s from './StepCards.module.scss';

const StepCards = () => {

    const STEP_CARDS = [
        {
            image: '/step1.png',
            title: 'The Training',
            body: [
                <p>Each day, you will receive <u>new training from Mark</u>, unlocked in the online portal.</p>,
                <p>These videos will train you on the programming language and give you the <u>skills</u> you need to be a developer.</p>,
                <p>You will have the ability to network with and ask questions to our coaches as well as others students who are also going through the challenge with you!</p>
            ]
        },
        {
            image: '/step2.png',
            title: 'Implementation',
            body: [
                <p>After you complete the training, you will be given a <strong>mission</strong> for that day with the exact step by step tactics you need to implement to complete that mission.</p>,
                <p>These missions will be challenging but are <u>critical</u> in developing core programming skills.</p>,
                <p>These missions will take between 30-60 minutes to complete each day.</p>
            ]
        },
        {
            image: '/step3.png',
            title: 'Coaching',
            body: [
                <p>Not only do you get 30 days of learning and missions…</p>,
                <p>You also get <strong>access to code coaches</strong> in our private chatroom to help you complete your tasks.</p>,
                <p>You also receive <strong>LIVE</strong> coaching each week in a private Zoom meetup.</p>,
                <p><strong>It’s like having your very own DEDICATED SUPPORT TEAM.</strong></p>
            ]
        },
    ]

    return (
        <div className={s.stepCardsWrapper}>
            {
                STEP_CARDS.map((card, index) => {
                    const { image, title, body } = card;
                    return (
                        <div className={s.stepCard} key={index}>
                            <h2>Step #{index + 1}</h2>
                            <div className={s.image}>
                                <Image
                                    src={image}
                                    alt={title}
                                    width={300}
                                    height={192}
                                />
                            </div>
                            <h3>{title}</h3>
                            {
                                body.map((p, index) => {
                                    return <div key={index}>{p}</div>
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    )
}

export default StepCards;