import Image from 'next/image';
import ClientTestimony from '../../../ClientTestimony/ClientTestimony';
import s from './Certification.module.scss';

const Certification = () => {
    return (
        <div className={s.certWrapper}>
            <h2>The Devslopes JavaScript <u>Certification</u></h2>
            <div className="flex-parent">
                <div className="flex-lg">
                    <div style={{textAlign: 'center'}}>
                        <Image
                            src="/js-cert.png"
                            alt="JS Certification"
                            width={368}
                            height={235}
                        />
                    </div>
                    <p>If you complete the 30 day code challenge and pass the final exam you will receive the official Devslopes JavaScript Certification. </p>
                    <p><strong>THIS IS NOT EASY TO OBTAIN</strong></p>
                    <p>If you earn the certification we are saying, <em>"You have passed the highest standards of coding in JavaScript and we think you are ready to take on the world."</em></p>
                </div>
            </div>

            <div className="flex-parent">
                <div className="flex-sm">
                    <ClientTestimony person="Paul" />
                </div>
                <div className="flex-sm">
                    <ul className={s.redCheck}>
                        <li>30 Day Code Challenge</li>
                        <li>HTML &amp; CSS Beginner Course</li>
                        <li>APIs With NodeJS &amp; JavaScript Course</li>
                        <li>Devslopes JavaScript Certification</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Certification;