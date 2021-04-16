import s from './Proem.module.scss';

const Proem = () => {
    return (
        <div className={s.proemWrapper}>
            <span className={s.textSmall}>"How Would You Like <strong>Us To Hold You By The Hand</strong> As You</span>
            <span className={s.textMedium}>Learn To Code</span>
            <span className={s.textLarge}>In JavaScript!"</span>
        </div>
    )
}

export default Proem;