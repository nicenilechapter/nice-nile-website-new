export default function IntroVideo() {
    return (
        <section id="intro">
            <video
                src='/assets/nicesa-video.mp4'
                autoPlay={true}
                loop={true}
                controls={true}
                poster='/assets/nileBuilding.png'
                className='absolute w-full md:w-screen h-full bottom-0 right-0'
            />

        </section>
    )
}