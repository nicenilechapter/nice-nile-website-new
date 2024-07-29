import Navigation from "@/components/navigation";
import fs from "fs";
import Image from "next/image";
import path from "path";

export default function ConferencesPage(){

    const directory = path.join(process.cwd(), "public/assets/nse-excursion");
    const files = fs.readdirSync(directory); //Images are not optimized
    

    return (
        <main className="min-h-screen">
            <Navigation/>

            <h1 className="text-3xl font-semibold text-center mt-3">
                Conference
            </h1>

            {/* Should have put this in a component but oh well */}

            <section className="px-4 pt-3">
                <h2 className="text-xl font-semibold">
                    Excursion to NSE Headquarters
                </h2>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 my-3">
                    {
                        files.map((file) => (
                            <Image
                                key={file}
                                src={`/assets/nse-excursion/${file}`}
                                alt={file}
                                width={200}
                                height={300}
                                className="w-full md:w-auto"
                                loading="lazy"
                            />

                        ))
                    }
                </div>

            </section>
        </main>
    )
}