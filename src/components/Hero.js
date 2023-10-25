import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Center,
  Flex,
  Heading,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Wave from "react-wavify";
import { WAVE_COLOR } from "../utils";
import Mediabox from "./MediaBox";

// const meDescriptors = ["a software developer."];

const Hero = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 720px)");

  if (isLargerThan1280) {
    return (
      <Stack alignItems="center" height="100vh" backgroundColor="white">
        <Flex height="60%" alignItems="center" justifyContent="center">
          <Box paddingLeft="7vw" width="40vw">
            <motion.header
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 85, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <Heading fontSize="7xl">Hey! I'm Neeraj</Heading>
              <Heading fontSize="3xl" marginBottom="2vw">
                I am a Software Developer.{" "}
                {/* <TypeAnimation
                sequence={meDescriptors
                  
                }
                speed = {50}
                repeat={Infinity}/> */}
              </Heading>
              <Mediabox />
            </motion.header>
          </Box>
          <Center width="60vw" marginTop="10vh">
            <Image
              width="60vw"
              marginTop="10vh"
              src="/images/itsme.jpg"
              borderRadius="full"
              boxSize="md"
            />
          </Center>
        </Flex>
        <Flex height="40%" width="100%" alignItems="flex-end">
          <Wave
            fill={WAVE_COLOR}
            paused={false}
            options={{
              height: 20,
              amplitude: 10,
              speed: 0.4,
              points: 4,
            }}
          />
        </Flex>
      </Stack>
    );
  }
  return (
    <Stack alignItems="center" height="100vh" backgroundColor="white">
      <Flex height="60%" alignItems="center" flexDirection="column">
        <Center width="90vw" marginTop="2vh">
          <Image src="/images/itsme.jpg" borderRadius="100%" boxSize="xs" />
        </Center>
        <Box>
          <motion.header
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 35, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <Heading fontSize="4xl" textAlign="center">
              Hey! I'm Neeraj
            </Heading>
            <Center>
              <Heading fontSize="xl" marginBottom="0.5vh">
                I am a Software Developer.{" "}
                {/* <TypeAnimation
                sequence={meDescriptors
                  
                }
                speed = {50}
                repeat={Infinity}
                /> */}
                {/* <Typed
                  strings={meDescriptors}
                  typeSpeed={40}
                  backSpeed={50}
                  startDelay={700}
                /> */}
              </Heading>
            </Center>
            <Center marginTop="2vw">
              <Mediabox />
            </Center>
          </motion.header>
        </Box>
       
      </Flex>
      <Flex height="40%" width="100%" alignItems="flex-end">
        <Wave
          fill={WAVE_COLOR}
          paused={false}
          options={{
            height: 20,
            amplitude: 4,
            speed: 0.4,
            points: 4,
          }}
        />
      </Flex>
    </Stack>
  );
};

export default Hero;
