import Image from 'next/image';
import ClientTestimony from '../../../ClientTestimony/ClientTestimony';
import s from '../../Homepage.module.scss';

const Mission = () => {
    return (
        <div>
            <h2 className={s.blueHeaderBig}>Here Is Your Mission,</h2>
            <h3 className={s.largeText}>(Should You Choose To Accept This Challenge…)</h3>
            
            <div className="accent-box box-red">
                <div className={s.innerContent}>
                    <p style={{textAlign: 'center', fontSize: 'calc(1.2rem + 1.5vw)', margin: 0, color: 'var(--color-red-dark)' }}>
                        <strong>Your Challenge Is To <u>TAKE ACTION</u> <br />And Complete The Tasks Given To You,</strong><br />Every Day For 30 Days
                    </p>
                </div>
            </div>

            <div className="flex-parent">
                <div className="flex-lg">
                    <h2 className={s.blueHeaderMed} style={{textAlign: 'left' }}>This Challenge Is 100% JavaScript</h2>
                    <p>No HTML, CSS or UI...</p>
                    <p>Pure, raw, vanilla Javascript...</p>
                    <p>Algorithms &amp; Data Structures...</p>
                    <p>From Beginner to Intermediate...</p>
                    <p>20 Hands-on Projects...</p>
                    <p><strong>Learn to THINK like a programmer</strong></p>
                </div>
                <div className="flex-xs" style={{textAlign: 'center'}}>
                    <Image
                        src="/javascript.png"
                        alt="JavaScript"
                        width={235}
                        height={200}
                    />
                </div>
            </div>

            <div className="flex-parent">
                <div className="flex-lg">
                    <p>Yes, there will be some prep-work involved…</p>
                    <p>Yes, there will be homework…</p>
                    <p>But every day, you’ll be taking steps toward becoming a developer!</p>
                    <p><strong>Our only question for you is…</strong></p>
                    <div style={{textAlign: 'center'}}>
                        <h3 className={s.blueHeaderMed}>“Do YOU Have What It Takes?”</h3>
                        <p><strong>By the time the challenge is over, you will have 30 completed coding projects and <u>AMAZING</u> code skills.</strong></p>
                    </div>
                    <p>You won't just study, but actually write over <strong>5,000</strong> lines of code by the end of the challenge!</p>
                    <p>And, you’ll be able to take these skills and learn <strong>ANY</strong> programming language or toolset--critical steps for getting your first developer job.</p>
                </div>
                <div style={{maxWidth: '375px'}}>
                    <ClientTestimony person="Kelly" />
                    <ClientTestimony person="Rick" />
                </div>
            </div>

        </div>
    )
}

export default Mission;