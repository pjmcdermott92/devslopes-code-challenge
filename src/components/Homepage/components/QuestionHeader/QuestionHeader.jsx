import Image from 'next/image';
import s from './QuestionHeader.module.scss';

const QuestionHeader = () => {
    return (
        <div className={s.questionHeaderWrapper}>
            <div className="flex-parent">
                <div className={s.questionMark}>
                    <Image
                        src="/question-mark.png"
                        alt="Question mark"
                        width={200}
                        height={200}
                    />
                </div>
                <div className={s.questionHeaderText}>
                    <h2>What Does...</h2>
                    <h1>'30 Day Challenge'</h1>
                    <h2>Mean To You...?</h2>
                </div>
            </div>
        </div>
    )
}

export default QuestionHeader;