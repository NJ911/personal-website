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
    name: "Personal Website v1",
    date: "Jul 2022 - present",
    descriptionPoints: [
      "Designed and built a personal portfolio website using React, HTML/CSS and JavaScript",
      "Used Git to manage and update the code for my website and automated the deployment of the app to the web with every new commit to the codebase",
    ],
    githubLink: "https://github.com/Udbhav8/portfolio",
    technologies: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "NFT app",
    date: "Nov 2022 - Dec 2022",
    descriptionPoints: [
      "Implemented the oauth flow allowing users to login and claim free NFTs",
      "Built a sample app to showcase a basic working application of NFT’s and how they can be created easily usingopen source APIs",
    ],
    githubLink: "https://github.com/Niftory/niftory-samples",
    technologies: ["Niftory APIs", "React", "Node.js", "NextAuth", "GraphQL"],
  },
  {
    name: "Instant Messenger",
    date: "Jan 2022 - March 2022",
    descriptionPoints: [
      "Developed a web messaging app which allows users to start chats with other users using their emails",
      "Used frameworks like Next.js and Chakra UI to build the user interface of the app and Firebase Real time Database to build the backend",
    ],
    githubLink: "https://github.com/Udbhav8/MessagingApp",
    technologies: ["React", "Next.js", "Chakra UI", "Firebase", "TypeScript"],
  },
  {
    name: "Team Management App",
    date: "May 2022 - Aug 2021",
    descriptionPoints: [
      "Built a team management app for a local restaurant allowing them to manage their employees and their shifts",
      "The Front-end was build using React and Chakra UI, allowing users to add manage and delete users according to their needs",
      "Built a REST API using Django which served as a backend for the web app",
    ],
    githubLink: "https://github.com/Udbhav8/usersAppFrontend",
    technologies: ["React", "Django", "Firebase", "Python"],
  },
  {
    name: "MintMe No-Code Minter",
    date: "Aug 2022 - Present",
    descriptionPoints: [
      "Designed and developed an immersive, user-friendly NFT mint tool utilizing the Niftory API and leveraging Dapper Labs’ Flow blockchain. Leveraged NextJS as the foundation for this application. Currently, the tool enjoys an impressive average of 1000 monthly active users.",
      "Led the development of an Authentication service utilizing Google’s Firebase databse, enabling content creators to upload their content as NFT collections, facilitating seamless consumption by users.",
    ],
    githubLink: "https://mint.niftory.com/",
    technologies: ["Nextjs", "Framer Motion", "Firebase Database"],
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
