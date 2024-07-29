'use client'
import { Flex, VStack, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"

interface IExecutives {
    name: string,
    photo: string,
    position: string
}

const EXECUTIVES: Array<IExecutives> = [
  {
    name: "Steven Iguza",
    photo:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/steven-iguza-he5uUn7VID9BeGQjwASd02Th6klseL.png",
    position: "President",
  },
  {
    name: "Farida Dantata",
    photo:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/farida-dantata-K97TpWGvOToQ4fxglFi54TnhHwwc8Y.png",
    position: "Vice President",
  },
  {
    name: "Zainab Hadi",
    photo:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/zainab-hadi-Z2LyZ4Rur1xGowYWRpW41Dada2FkI5.png",
    position: "Treasurer",
  },
  {
    name: "Okeke Okemsinachi",
    photo:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/okemsinachi-okeke-JvqLgfuDDlaK7uGiLDz0hQJYygfGK3.png",
    position: "Financial Secretary",
  },
  {
    name: "Sopruchukwu Ashford Mbachu",
    photo:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/sopru-mbachu-pQsOCYUdWTFijuSmzz4F062ti4Zssg.png",
    position: "General Secretary",
  },
  {
    name: "Onanefe Great Akpotu",
    photo:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/onanefe-great-romQvIHcopKrbyR0vmylTZEnjjJviJ.png",
    position: "Social Media Director",
  },
  {
    name: "Nansak Destiny Daji",
    photo:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/nansak-daji-y2g4RxZPVTlTyWmD7OGLYIFQKi7lnA.png",
    position: "PRO",
  },
];

const ACCOMPLISHMENTS = [
    "Establishing an official association website.",
    "Conducting a comprehensive review of the constitution, restructuring it to its current form.",
    "Creating an official association bank account in our name.",
    "Successfully collecting dues from over 50% of the department's population.",
    "Implementing a new, efficient online platform for dues collection.",
    "Establishing a robust feedback mechanism for student voices."
]

export default function Executives() {
    return (
        <VStack
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            color="#000"
        >
            <div className="text-center">
                <h1>The Executives</h1>
                <p>Meet your current executives</p>
            </div>

            <div>
                <p>The current NICESA executive board comprises seven dedicated members</p>
                <p>
                    President Steven Iguza, Vice President Farida Dantata, General Secretary Sopuruchukwu Ashford Mbachu, 
                    Financial Secretary Okeke Okemsinachi, Treasurer Zainab Hadi Farouk, Social Media Director Onanefe Great Akpotu, 
                    and PRO Nansak Destiny Daji. Appointed at the onset of the 2023/2024 academic session, our team has been diligently 
                    revitalizing the association and fostering awareness among the Civil Engineering students at Nile University of Nigeria.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-9">
                {
                    EXECUTIVES.slice(0, 2).map((executive, i) => (
                        <ExecutiveProfile 
                            key={i}
                            {...executive}
                        />
                    ))
                }
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-9">
                {
                    EXECUTIVES.slice(2, 5).map((executive, i) => (
                        <ExecutiveProfile 
                            key={i}
                            {...executive}
                        />
                    ))
                }
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-9">
                {
                    EXECUTIVES.slice(5, 7).map((executive, i) => (
                        <ExecutiveProfile
                            key={i} 
                            {...executive}
                        />
                    ))
                }
            </div>

            <div>
                <h2>Accomplishments</h2>
                <ul>
                    {
                        ACCOMPLISHMENTS.map((accomplishment, i) => (
                            <li key={i}>{accomplishment}</li>
                        ))
                    }
                </ul>

                <p>
                    As our tenure progresses, we are committed to accomplishing even more before its conclusion. We are 
                    dedicated to further enhancing the associations impact and service to the student community within 
                    the upcoming months.
                </p>
            </div>

        </VStack>
    )
}

function ExecutiveProfile({ name, photo, position }: IExecutives) {
    return (
        <div className="text-center">
            <Image
                src={photo}
                alt={name}
                width={300}
                height={250}
            />
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    )
}