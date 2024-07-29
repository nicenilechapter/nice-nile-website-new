'use client'

import { VStack, useColorModeValue } from "@chakra-ui/react"

export default function WhoWeAre(){
    return (
        <VStack
            minH={'100vh'}
            align={'center'}
            justify={'start'}
            textAlign="center"
            bg={useColorModeValue('gray.50', 'gray.800')}
            color="#000"
            paddingTop="12"
            paddingX="28"
        >
            <h1 className="font-semibold text-4xl">Who we are</h1>
            <p>
                So, what is NICE-SA, and what do we do for you? Let us break it down for you:
                NICE-SA (Nigerian Institution of Civil Engineers Student Association):
                NICE-SA is here to be your reliable support system, offering assistance with any questions or issues you may face as you embark on your Civil Engineering BSc journey.
                We collaborate to organize engaging lecture conferences, tutorials, and field trips to enhance your learning experience.
                We are all about the fun too! NICE-SA brings you a vibrant social scene with sports events, social gatherings, and exciting opportunities to connect with your fellow students.
            </p>

            <p>
                Exploring the real world of civil engineering? We have got you covered with field trips and industry exposure to 
                give you a taste of what awaits in your future career. Remember, NICE-SA is just a part of a bigger picture.
            </p>

            <p>
                NICE (Nigerian Institution of Civil Engineers): <br />
                NICE is the senior body, the Nigerian Institution of Civil Engineers, which serves as the professional association for civil engineers in Nigeria.
                It stands under the umbrella of NSC (Nigerian Society of Civil Engineers) and operates in collaboration with COREN (Council for the Regulation of Engineering in Nigeria), the regulatory body responsible for registering engineers in Nigeria to practice their profession.

            </p>
        </VStack>
    )
}