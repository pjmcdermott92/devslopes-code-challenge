import Image from 'next/image';
import ClientTestimony from '../../../ClientTestimony/ClientTestimony';
import s from './HowItWorks.module.scss';

const HowItWorks = () => {
    return (
        <div className={s.howItWorks}>
            <h2>So, Here Is How The Challenge Works...</h2>
            <p><strong>The challenge costs $100 to join.</strong> This covers your content and coaching during the challenge (more details below).</p>
            <div className={s.centerImg}>
                <Image
                    src="/100dollars.png"
                    alt="100 dollars"
                    width={815}
                    height={482}
                />
            </div>
            <p>With the <strong>30 Day Code Challenge</strong>, we could easily charge $1,000 for the full 30 day challenge…</p>
            <p>Probably even $2,000, <em>or more, but...</em></p>
            <h2>All You Pay Is $100!</h2>
            <ClientTestimony person="Jay" />
            <h3>Then In Exchange For That Small $100 Investment, You Get ALL Of This:</h3>
        </div>
    )
}

export default HowItWorks;