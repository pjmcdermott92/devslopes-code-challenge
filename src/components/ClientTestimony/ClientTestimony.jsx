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
        }
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