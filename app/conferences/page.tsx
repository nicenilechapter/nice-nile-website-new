import Navigation from "@/components/navigation";
import fs from "fs";
import Image from "next/image";
import path from "path";
import { list } from "@vercel/blob";

export default async function ConferencesPage(){

    // const directory = path.join(process.cwd(), "public/assets/nse-excursion");
    // const files = fs.readdirSync(directory); //Images are not optimized
    
    const listOfBlobs = await list({
      //   cursor,
      limit: 1000,
      prefix: "nse-excursion/",
    });

    return (
      <main className="min-h-screen">
        <Navigation />

        <h1 className="text-3xl font-semibold text-center mt-3">Conference</h1>

        {/* Should have put this in a component but oh well */}

        <section className="px-4 pt-3">
          <h2 className="text-xl font-semibold">
            Excursion to NSE Headquarters
          </h2>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 my-3">
            {listOfBlobs.blobs.map((file, i) => (
              <div
                key={i}
                className="animation-pulse w-full min-h-[180px] bg-zinc-300 rounded-md relative"
              >
                <Image
                  src={file.url}
                  alt={file.pathname}
                  fill
                  className="w-full md:w-auto rounded-md"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
}