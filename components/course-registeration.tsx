'use client'

import { VStack, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"


interface CourseRegisterationSteps {
    stepNumber: string,
    image: string
}

const STEPS: Array<CourseRegisterationSteps> = [
  {
    stepNumber:
      "Step 1: Log on to your student portal at www.pms.nileuniversity.edu.ng",
    image:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/course-reg-step-1-kYlVQC3X77JJEEJQeGnGevjyR4gYJ1.png",
  },
  {
    stepNumber: "Step 2: Fill in your details and log in.",
    image:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/course-reg-step-2-2CPgSdM6ZuYLllrg6gjRD4KXVl0Olb.png",
  },
  {
    stepNumber: `Step 3: Click on "Course Registration".`,
    image:
      "/assets/course-reg-step-3.pnghttps://owad17hypl5lwyn4.public.blob.vercel-storage.com/course-reg-step-3-CPO3QDC6uruSGgHCuCSqugCn44GvLo.png",
  },
  {
    stepNumber:
      "Step 4: Add your desired courses to the basket and select a section where required.",
    image:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/course-reg-step-4-cfGttUuemaJIWJfVjQyCiktthi3clA.png",
  },
  {
    stepNumber: `Step 5: Ensure that the courses are in the basket then click on "Confirm Registration”`,
    image:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/course-reg-step-5-xAqdf59VxMp5wRdxTBe49dHlIbIfMp.png",
  },
  {
    stepNumber:
      "Step 6: When the course registration has been approved by your course advisor, it should appear like this.",
    image:
      "https://owad17hypl5lwyn4.public.blob.vercel-storage.com/course-reg-step-6-TZKM30FXccd81998r5JMpYk39YMZ0r.png",
  },
];

export default function CourseRegisteration() {
    return (
        <VStack
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            color="#000"
        >
            <ul className="flex flex-col md:grid md:grid-col-2">
                {
                    STEPS.map((step, index) => (
                        <li className="my-4 md:my-9 flex flex-col items-center" key={step.stepNumber}>
                            <h4>{step.stepNumber}</h4>
                            <Image
                                src={step.image}
                                alt={`Step ${index + 1}`}
                                width={400}
                                height={320}
                            />
                        </li>
                    ))
                }
            </ul>

        </VStack>

    )
}