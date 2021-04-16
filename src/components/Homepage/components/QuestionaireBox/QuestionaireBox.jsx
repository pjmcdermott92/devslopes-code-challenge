import s from './QuestionaireBox.module.scss';

const QuestionaireBox = () => {

    const QUESTIONS = [
        <>Do you want to learn to code, build apps or websites, but you have absolutely <u>NO IDEA where to start</u>?</>,
        <>Have you been taking online courses or tutorials, but for some reason <u>you're feeling stuck?</u></>,
        <>Do you want <u>direct live access</u> to experts who can help you with your code, data structures, algorithms, and ANY question you have?</>,
        <>Do you need someone to just <strong>give you the path</strong>, so you <u>don't have to think about what to learn</u>?</>,
        <>Are you <strong>convinced that you want learn to code</strong>, but you aren't quite sure what steps to take?</>,
        <>Do you want to become a <u>paid developer</u>, and make sure you get there <strong>as fast as possible!?!</strong></>
    ];
    

    return (
        <div className={s.questionaireBox}>
            <h3>Please Check All Of The Questions Where Your Answer Is YES!</h3>
            {
                
                QUESTIONS.map((q, index) => {
                    
                    return (
                        <div className="flex-parent nowrap" key={index}>
                            <span>
                                <input type='checkbox' id={index} />
                            </span>
                            <label htmlFor={index}>{q}</label>
                        </div>
                    );
                })
                
            }
        </div>
    )
}

export default QuestionaireBox;