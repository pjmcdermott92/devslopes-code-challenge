const HeroVideo = ({ children, className }) => {
    return (
        <>
        <div className={className}>
            <div className="responsive-item has-shadow">
                <iframe
                    title="Academy"
                    src="https://www.videoask.com/fse3pf1rl"
                    allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;">
                </iframe>
            </div>
            {children}
        </div>
        </>
    )
}

export default HeroVideo;
