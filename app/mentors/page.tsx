import Navigation from "@/components/navigation";
import Image from "next/image";

export default function MentorsPage(){
    return (
        <main className="min-h-screen">
            <Navigation/>

            <h1 className="text-3xl font-semibold text-center mt-4">
                Mentors of the Association
            </h1>
            <section className="flex items-center justify-evenly pt-6">
                <div className="text-center">
                    <Image
                        src="/assets/DEAN.webp"
                        alt="Dean of Engineering"
                        className="mx-auto"
                        width={280}
                        height={500}
                    />
                    <h2 className="font-semibold text-2xl">
                        Assoc. Prof. Petrus Nzerem
                    </h2>
                    <p>Dean, Faculty of Engineering</p>
                </div>

                <div className="text-center">
                    <Image
                        src="/assets/HOD.CVE.webp"
                        alt="HOD of Civil Engineering"
                        className="mx-auto"
                        width={280}
                        height={500}
                    />
                    <h2 className="font-semibold text-2xl">
                        Prof. Abdulhameed Mambo
                    </h2>
                    <p>HOD, Department of Civil Engineering</p>

                </div>
            </section>
        </main>
    )
}