import Image from "next/image";

export default function IntroSection() {
    return (
        <section className="w-full my-40 px-5 box-border grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col md:justify-center">
                <h2 className="text-2xl text-center font-semibold mb-6">
                    Who Are We?
                </h2>

                <div className="my-3 flex flex-col gap-6">
                    <p>
                        So, what is NICE-SA, and what do we do for you? Let us break it down for you:
                        NICE-SA (Nigerian Institution of Civil Engineers Student Association):
                    </p>

                    <p>
                        NICE-SA is here to be your reliable support system, offering assistance with 
                        any questions or issues you may face as you embark on your Civil Engineering 
                        BSc journey.
                    </p>

                    <p>
                        We are all about the fun too! NICE-SA brings you a vibrant social scene with 
                        sports events, social gatherings, and exciting opportunities to connect with 
                        your fellow students.
                    </p>

                    <p>
                        We collaborate to organize engaging lecture conferences, tutorials, and field 
                        trips to enhance your learning experience.
                    </p>

                    <p>
                        Exploring the real world of civil engineering? We have got you covered with field 
                        trips and industry exposure to give you a taste of what awaits in your future career.
                    </p>
                </div>
            </div>
            <div className="px-3 space-y-3 md:space-y-6">
                <Image
                    src={"/assets/nse-excursion/DSC_0940.jpg"}
                    alt="NSE Excursion"
                    width={300}
                    height={250}
                    className="w-full md:w-4/5 rounded-md h-auto md:h-[250px] md:mx-auto object-cover"
                />

                <Image
                    src={"/assets/julius-berger-excursion/DSC_1253.jpg"}
                    alt="Julius Berger Excursion"
                    width={300}
                    height={250}
                    className="w-full md:w-4/5 rounded-md h-auto md:h-[250px] md:mx-auto object-cover"
                />

            </div>
        </section>
    )
}