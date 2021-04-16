import Image from 'next/image';

const ParalaxBox = ({ className, title, subtitle }) => {
    return (
        <div className={className}>
            <div className="flex-parent">
                <div className="flex-xs">
                    <Image
                        src='/minor_cover.png'
                        alt="30 Day Code Challenge"
                        width={325}
                        height={260}
                    />
                </div>
                <div className="flex-lg">
                    {subtitle}
                    {title}
                </div>
            </div>
        </div>
    )
}

export default ParalaxBox;