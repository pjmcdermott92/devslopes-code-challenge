import Image from 'next/image';

const MarkMessage = () => {
    return (
        <div className="flex-parent">
            <div className="flex-lg">
                <p><strong><span className='text-blue'>FROM:</span></strong> Mark Wahlbeck</p>
                <p><strong><span className='text-blue'>WHERE:</span></strong> Austin, Texas</p>
                <p>I've been programming professionally for over 15 years now. I taught myself how to code, and it was the hardest thing I've ever had to do.</p>
                <p>I wish I had a program to give me projects...</p>
                <p>I wish I had a mentor to pull me in the right direction...</p>
                <p><strong>That is what I'm going to do for you today!</strong></p>
                <p>What does <strong>'30 Day Code Challenge' mean for you...?</strong></p>
                <p>For everyone it's different...</p>
                <p>For some of you, <u>you're in a job that you hate</u>, and you're trying to get out.</p>
                <p>For others, you are watching endless tutorials <u>and you're stuck, but not sure why.</u></p>
                <p>And for others of you, you're just looking to finally finish something <strong>and actually hit your goals!</strong></p>
                <p>Before I share with you MY GOAL for this '30 Day Code Challenge' for YOU... let me ask you a few questions...</p>
            </div>
            <div className="flex-sm">
                <Image
                    src="/intense_mark@1x.jpg"
                    alt="Mark Wahlbeck"
                    width={300}
                    height={579}
                />
            </div>
        </div>
    )
}

export default MarkMessage;