'use client'
import { VStack, useColorModeValue } from "@chakra-ui/react";

export default function History(){
    return (
        <VStack
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            color="#000"
        >
            <section className="h-screen grid grid-cols-2 md:grid-cols-2">
                <div className="flex items-center justify-center flex-col">
                    <h2 className="font-semibold text-3xl">
                        Our Mission
                    </h2>
                    <p>
                        To foster a thriving community of Civil Engineering students dedicated to academic excellence, 
                        professional growth, and societal impact.
                    </p>
                </div>

                <div className="flex items-center justify-center flex-col">
                    <h2 className="font-semibold text-3xl">
                        Our Vision
                    </h2>
                    <p>
                        We envision NICESA as a catalyst for innovation, knowledge exchange, and holistic 
                        development within the Civil Engineering fraternity. Striving for excellence, we aspire 
                        to connect, educate, and empower future civil engineers.
                    </p>
                </div>
            </section>
            
            <section className="h-screen flex items-center justify-center text-center">

                <div>
                    <h2 className="font-semibold text-3xl">
                        Goal of the Chapter
                    </h2>
                    <p>
                        To cultivate a dynamic and inclusive environment that empowers Civil Engineering 
                        students at Nile University of Nigeria, Abuja, fostering their academic, professional, 
                        and personal growth. This includes facilitating opportunities for education, networking, 
                        skill development, and practical engagement within the field, ultimately preparing members 
                        to become adept, responsible, and influential contributors to the advancement of Civil Engineering 
                        in Nigeria.
                    </p>
                </div>

            </section>

            
        </VStack>

    )
}