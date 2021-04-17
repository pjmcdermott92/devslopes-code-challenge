import s from './ClientTestimony.module.scss';

const ClientTestimony = ({ person }) => {
    const TESTIMONIES = [
        {
            name: 'Jay',
            image: '/test_Jay.png',
            test: [
                <>
                    <span className={s.highlight}>I had a pretty awesome day.</span>&nbsp;
                    Because I started learning programming via Devslopes I wrote some awesome scripts at work!
                </>,
                <>
                    Because of them I have a passion for code. Learning programming can help you in more ways than you realize!
                </>
            ]
        },
        {
            name: 'Kelly',
            image: '/test_Kelly.png',
            test: [
                <>I'm very grateful for Devslopes.<span className={s.highlight}>I made so much more progress this time around.</span>Having the structure and mentorship has been invaluable!</>
            ]
        },
        {
            name: 'Rick',
            image: 'test_Rick.png',
            test: [
                <>I can honestly say the <span className={s.highlight}>value you get here is far beyond the price.</span> Just the coding alone is well worth it!</>,
                <>But not only that, it's the mental and emotional support they give you as you go through the hills and valleys of coding.</>
            ]
        },
        {
            name: 'Stanley',
            image: 'avatar.png',
            test: [
                <>I feel like <span className={s.highlight}>I've jumped on a moving train to success.</span> I'm so confident that I'm becoming a different person in this journey with Devslopes.</>
            ]
        },
        {
            name: 'Chuck',
            image: 'test_Chuck.png',
            test: [
                <><strong>I'm learning a TON with Devslopes.</strong> The Devslopes team is super responsive. Last night I was stuck on an issue. In the past, I would spend HOURS searching and reading, but last night the CEO of the company personally helped me solve my problem. I'm totally excited for this community!</>
            ]
        },
        {
            name: 'Ben',
            image: 'test_Benjamin.png',
            test: [
                <>I know I sound a little dramatic, but I want to say <span className={s.highlight}>you guys are turning my life around.</span>I'm working a dead-end job and wasn't convinced I would ever realize my dreams. I've learned more now with Devslopes than my whole 4 years at college!</>
            ]
        },
        {
            name: 'Marko',
            image: 'avatar.png',
            test: [
                <>Before I found Devslopes, learning to code was tough!<span className={s.highlight}>But now everything seems so simple!</span></>,
                <>The teachers are great and this is the best investment in my life so far! I couldn't have made it this far without them!</>
            ]
        },
        {
            name: 'Paul',
            image: 'test_Paul.png',
            test: [
                <><span className={s.highlight}>I didn't write my first line of code until the age of 44.</span> But with the help of Mark and the team I have a new career as a developer working at BMW!</>
            ]
        },
    ];

    const currentTestimony = TESTIMONIES.find(testimony => testimony.name === person);

    return (
        <div className={s.testimonyWrapper}>
            <img
                src={currentTestimony.image}
                alt={currentTestimony.name}
                width={80}
                height={80}
            />
            <div className={s.inner}>
                <p className={s.name}>{currentTestimony.name}</p>
                {currentTestimony.test.map((p, index) => {
                    return <p key={index}>{p}</p>
                })}
            </div>
        </div>
    )
}

export default ClientTestimony;