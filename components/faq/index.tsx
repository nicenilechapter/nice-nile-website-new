'use client'

import { ChevronDownIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Container, Flex, useColorModeValue, Text, Heading } from "@chakra-ui/react"

interface Question {
    title: string,
    answer: string
}   

const QUESTIONS: Array<Question> = [
    {
        title: 'What does NICESA stand for?',
        answer: 'NICESA is the acronym for the "Nigerian Institution of Civil Engineers Student Association."'
    },
    {
        title: 'How can I become a member of NICESA?',
        answer: `Membership in NICESA can be acquired by completing the official membership form, accessible 
        through our website.`
    },
    {
        title: 'What are the prerequisites for NICESA membership?',
        answer: `There are no specific prerequisites for membership. We warmly welcome all Civil Engineering 
        students, regardless of their level of experience.`
    },
    {
        title: 'Are there any membership fees or dues required to join the Association?',
        answer: `Yes, a nominal membership fee is required to sustain the organization, covering the costs associated 
        with event organization and resource provision for our members.`
    },
    {
        title: 'How can I partake in leadership roles within the organization?',
        answer: `For those interested in leadership positions, NICESA conducts elections at regular intervals. Keep an 
        eye out for announcements and submit your candidacy when the opportunity arises.`
    },
    {
        title: 'Can I join the Association if I am not a Civil Engineering Student?',
        answer: `Certainly! While our primary focus is on Civil Engineering, we extend a warm welcome to students 
        from related fields who share an interest in our initiatives.`
    },
    {
        title: 'What kinds of events and activities does NICESA organize?',
        answer: `NICESA hosts a diverse range of events, encompassing social gatherings, networking opportunities, 
        career development programs, and community service initiatives`
    },
    {
        title: "How can I stay informed about the organization's upcoming events and announcements?",
        answer: `To stay updated on our activities and announcements, we recommend following our official social 
        media accounts, participating in our group chat on your preferred messaging platform, or visiting our 
        dedicated Events Page for timely updates.`
    },
    {
        title: 'How can I contribute my ideas and suggestions to the organization?',
        answer: `We highly value input from our members. You can share your ideas and suggestions through our 
        Contact Us page, where your feedback will be attentively considered`
    },
    {
        title: "How do I participate in the Association's community outreach or volunteering efforts?",
        answer: `To become a volunteer and contribute to our community outreach and volunteering endeavors, 
        kindly complete the volunteer form available on our website. Alternatively, refer to our membership 
        page for further information.`
    },
    {
        title: 'What resources does NICESA offer to Civil Engineering Students?',
        answer: `NICESA provides an array of resources, including study materials, access to online learning platforms, 
        and connections to industry professionals who offer guidance and support. Explore our 
        comprehensive resources page for a detailed overview of these offerings.`
    }
]

export default function FrequentlyAskedQuestions() {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center px-3 py-6 box-border md:overflow-x-hidden">
                
            <div className="mx-auto box-border">
                <h2 className="text-center text-2xl font-semibold">
                    Frequently Asked Questions (FAQs)
                </h2>
                <Accordion marginY={10} allowMultiple maxW="lg" rounded="lg">
                    {
                        QUESTIONS.map(({ title, answer }, i) => (
                        <AccordionItem key={i}>
                            <AccordionButton
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                p={4}
                            >
                                <Text color="#000" fontSize="md">{title}</Text>
                                <ChevronDownIcon color="#000" fontSize="24px" />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text color="gray.600">
                                    { answer }
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
  )

}