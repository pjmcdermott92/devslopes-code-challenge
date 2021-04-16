import { useState, useEffect } from 'react';
import s from './HeroCta.module.scss';

const CtaCounter = ({ CHALLENGE_DATE }) => {

        const [countdownDate, setCountdownDate] = useState(new Date(CHALLENGE_DATE).getTime());
        const [counter, setCounter] = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        });

        useEffect(() => {
            setInterval(() => updateCountdown(), 1000)
        }, []);

        const updateCountdown = () => {
            if (countdownDate) {
                const currentTime = new Date().getTime()
                const distanceToDate = countdownDate - currentTime
                let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
                let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),)
                let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))
                let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

                const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Visual Appeal

                if (numbersToAddZeroTo.includes(hours)) hours = `0${hours}`
                if (numbersToAddZeroTo.includes(minutes)) minutes = `0${minutes}`

                setCounter({ days: days, hours: hours, minutes, seconds });
            }
        }

        const COUNTER_ELMS = [
            { interval: 'Days', value: counter.days || '0'},
            { interval: 'Hours', value: counter.hours || '0'},
            { interval: 'Minutes', value: counter.minutes || '0'},
            { interval: 'Seconds', value: counter.seconds || '0'},
        ];

    return (
        <div className={s.ctaCounter}>
            {
                COUNTER_ELMS.map((countEl, index) => {
                    let { value, interval } = countEl;

                    return(
                        <span className={s.countItem} key={index}>
                            <span className={s.countValue}>{value}</span>
                            <span className={s.interval}>{interval}</span>
                        </span>
                    );
                })
            }
        </div>
    )
}

export default CtaCounter;
