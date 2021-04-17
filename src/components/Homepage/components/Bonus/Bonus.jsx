import Image from 'next/image';
import ClientTestimony from '../../../ClientTestimony/ClientTestimony';
import CtaButton from '../../../CtaButton/CtaButton';
import s from './Bonus.module.scss';

const Bonus = () => {
    return (
        <div className={s.bonusWrapper}>
            <div className="flex-parent">
                <div className={`${s.bonusSidebar} flex-sm`}>
                    <h2>Bonus #1:</h2>
                    <p className={s.subText}>HTML &amp; CSS For Beginners Course</p>
                    <p>($97 Value)</p>
                    <Image
                        src="/html-beginner.png"
                        alt="HTML Beginner"
                        width={368}
                        height={265}
                    />
                    <CtaButton size="small" />
                    <ClientTestimony person="Stanley" />
                    <ClientTestimony person="Chuck" />
                </div>
                <div className="flex-lg">
                    <p>It's not enough to only know JavaScript to get your first job. <em>Employers want developers who have a mastery of many technologies</em> to build next-gen software.</p>
                    <h2>HTML &amp; CSS For Beginners</h2>
                    <p>Millions of websites run on JavaScript, HTML, &amp; CSS.</p>
                    <p>Though JavaScript is the "brains" behind modern websites, you still need the "body" or structure. This is where HTML &amp; CSS comes in.</p>
                    <p>But you can't just learn how to make things look pretty, you also have to build modularized, re-useable code.</p>
                    <div style={{ textAlign: 'center', color: 'var(--color-primary)' }} >
                        <h2>Build Your First Website</h2>
                        <p><strong>You'll learn the basics and then build your very first full website with HTML &amp; CSS</strong></p>
                    </div>
                    <p>In this course you'll learn the basics of HTML &amp; CSS and then move on to more complex subjects.</p>
                    <p>By the end you'll have built your <strong>very first website</strong> and have the skills to take on freelance work for HTML &amp; CSS.</p>
                    <ul className={s.redCheck}>
                        <li><strong>HTML</strong></li>
                        <li><strong>Forms</strong></li>
                        <li><strong>CSS</strong></li>
                        <li><strong>Responsive CSS</strong></li>
                        <li><strong>Full-scale Websites</strong></li>
                    </ul>
                    <p>This <strong>is the place</strong> to start if you want to become a web developer</p>
                    <p>30+ modules... <br /> Exercises &amp; projects</p>
                    <p>Build full websites <strong>today!</strong></p>
                </div>
            </div>
            <hr />
            <div className="flex-parent">
                <div className="flex-lg">
                    <p>In the 30 Day Code Challenge, <strong>you’ll be given tasks</strong> that will take your JavaScript skills to a whole new <strong>LEVEL</strong>.</p>
                    <p>But where do you go next?</p>
                    <div style={{textAlign: 'center', color: 'var(--color-primary)'}}>
                        <h2>API Development With NodeJS</h2>
                        <p><strong>Build back-end APIs with JavaScript and unlock the power of full-stack development</strong></p>
                    </div>
                    <p>Every good front-end app needs a <strong> back-end API to power it</strong>.</p>
                    <p>In this course, you'll get:</p>
                    <ul className={s.redCheck}>
                        <li><strong>Basics of NodeJS</strong> and how to build server-side JS applications</li>
                        <li><strong>Beginner &amp; advanced ES6</strong> to write modern and eleagant code</li>
                        <li><strong>Databases &amp; MongoDB</strong> to store the data needed for your applications</li>
                        <li><strong>Connecting Your Apps</strong> - learn how to connect front-end apps to the back-end API</li>
                    </ul>
                    <Image
                        src="/javascript.png"
                        alt="JavaScript"
                        width={235}
                        height={200}
                    />
                </div>
                <div className={`${s.bonusSidebar} flex-sm`}>
                    <h2>Bonus #2:</h2>
                    <p className={s.subText}>APIs With Node &amp; JavaScript Course</p>
                    <Image
                        src="/api.png"
                        alt="API Course"
                        width={368}
                        height={265}
                    />
                    <CtaButton size="small" />
                    <ClientTestimony person="Ben" />
                    <ClientTestimony person="Marko" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Bonus;