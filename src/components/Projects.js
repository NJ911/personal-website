import React from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { motion, LayoutGroup } from "framer-motion";
import TextFromSide from "./animateWrappers/TextFromSide";
import { MediaLink } from "./MediaBox";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const techColors = {
  TypeScript: "#0C2E35",
  React: "#599B99",
  "HTML/CSS": "#6299FA",
  Python: "#203223",
  JavaScript: "#F4D991",
  Firebase: "#AB5249",
  GraphQL: "#4E493E",
  "Node.js": "#7EB06C",
  "Chakra UI": "#A47439",
  "Next.js": "#3D3B3D",
};

const projectList = [
  {
    name: "Personal Website",
    date: "Sept 2023 - Present",
    descriptionPoints: [
      "Designed and built a personal portfolio website using React, HTML/CSS and JavaScript",
      "Used Git to manage and update the code for my website and automated the deployment of the app to the web using netlify with every new commit to the codebase",
    ],
    githubLink: "https://github.com/Udbhav8/portfolio",
    technologies: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "Limited Drops Bot",
    date: "Jan 2022 - March 2022",
    descriptionPoints: [
      "Wrote a script in Python to automate buying limited items from a website of my choice ",
      "Used Selenium to automate and navigate through the website",
    ],
    //githubLink: "https://github.com/Udbhav8/MessagingApp",
    technologies: ["Python", "Selenium"],
  },
  {
    name: "University Website Integration",
    date: "Jan 2023 - May 2023",
    descriptionPoints: [
      "Designed a prototype to integrate a webpage to an existing university website",
      "The prototype was made using Figma",
      "We created and tested the prototype on students to make improvements to the design",
    ],
    //githubLink: "https://github.com/Udbhav8/usersAppFrontend",
    technologies: ["Figma"],
  },
];

const Project = ({
  name,
  date,
  descriptionPoints,
  githubLink,
  technologies,
}) => {
  return (
    <Box
      as={motion.div}
      borderRadius="2%"
      margin="1vw"
      padding="2vw"
      backgroundColor="rgba(255,255,255,0.8)"
      whileHover={{
        scale: 1.05,
      }}
    >
      <Box
        float="right"
        as={motion.div}
        whileHover={{
          rotate: 10,
        }}
      >
        <MediaLink link={githubLink}>{faGithub}</MediaLink>
      </Box>
      <Heading size="lg">{name}</Heading>
      <Heading color="#365C7E" size="md" marginBottom="1.75vw">
        {date}
      </Heading>
      <Flex flexDirection="row" justifyContent="space-evenly"></Flex>
      {descriptionPoints.map((point) => {
        return <Text fontSize="lg">&bull; {point}</Text>;
      })}
      <Box marginTop="1vw">
        {technologies &&
          technologies.map((tech) => {
            const color = tech in techColors ? techColors[tech] : "black";
            return (
              <Tag backgroundColor={color} size="lg" margin="2px">
                <TagLabel color="white" as="b">
                  {tech}
                </TagLabel>
              </Tag>
            );
          })}
      </Box>
    </Box>
  );
};
export const Projects = () => {
  return (
    <Box margin="8vw 2vw 0 2vw">
      <TextFromSide>
        <Heading fontSize="6xl" padding="0 0 5vw 6vw">
          Projects
        </Heading>
      </TextFromSide>
      <LayoutGroup>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} margin="1vw 5vw">
          {projectList.map((project) => {
            return <Project {...project} />;
          })}
        </SimpleGrid>
      </LayoutGroup>
    </Box>
  );
};
