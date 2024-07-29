'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'

export default function AltHeroPage() {

  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="relative">
      <video
        src="https://owad17hypl5lwyn4.public.blob.vercel-storage.com/nicesa-video-FKnp3OfXdDrQCzLkj1wkwgSEn4YTX2.mp4"
        autoPlay={true}
        loop={true}
        controls={false}
        poster="https://owad17hypl5lwyn4.public.blob.vercel-storage.com/banner-xraKKEm9b5iV7SI1Q3URJn81CbdmTb.png"
        className="w-full md:w-screen h-full -z-20"
      />

      <VStack
        w={"full"}
        h={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 0, md: 8 })}
        zIndex={10}
        top={0}
        position={"absolute"}
        paddingX={useBreakpointValue({ base: "12px", md: "0" })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl", md: "4xl" })}
            boxSizing="border-box"
            width={"full"}
          >
            The Official website of NICESA - Nile University of Nigeria Chapter
            and the Department of Civil Engineering
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"whiteAlpha.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Learn more
            </Button>
            {/* <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Who we are
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </div>
  );
}