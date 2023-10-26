import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TextFromSide from "./animateWrappers/TextFromSide";

const workExperiences = [
  {
    title: "Information Technology Advisor",
    company: "InsureBC",
    location: "Victoria, BC",
    description: `I was involved in various IT projects, including server upgrades, implementing new software solutions, and enhancing
     the company's IT infrastructure. I oversaw software installations and updates, making sure that all employees had access to the necessary applications. 
     I also managed hardware assets, such as computers, printers, and other peripherals, ensuring that they were properly maintained and replaced when necessary.`,
    date: "May 2022- Present",
   // icon: "/images/insurebclogo.png",
    link: "https://www.insurebc.ca",
  },
  {
    title: "BC Patients Surveyor",
    company: "R.A. Malatest & Associates",
    location: "Victoria, BC",
    description: `Conducted detailed surveys of patients following their discharge from BC hospitals, guaranteeing the utmost confidentiality of client data.
     My ability to efficiently work remotely from home was a key asset, and I actively engaged in regular team meetings to facilitate effective project coordination and communication.`,
    date: "Jan 2022- May 2022",
    //icon: "/images/niftory.png",
    link: "https://niftory.com/",
  },
];

const TimelineElement = ({
  title,
  location,
  company,
  description,
  date,
  icon,
  link,
  last = false,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      icon={<Image objectFit="cover" src={icon} borderRadius="50%" />}
      contentStyle={{ marginBottom: last ? "0" : "9vw" }}
      iconStyle={{ background: "white", color: "#fff", cursor: "pointer" }}
      iconOnClick={() => (window.location.href = link)}
      dateClassName="datestyle"
    >
      <Heading fontSize="xl">{company}</Heading>
      <Heading fontSize="xl">{title}</Heading>
      <Heading as="i" fontSize="lg">
        {location}
      </Heading>
      <Text>{description}</Text>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  return (
    <Box>
      <TextFromSide>
        <Heading fontSize="6xl" padding="0 0 5vw 4vw">
          Work Experience
        </Heading>
      </TextFromSide>
      <VerticalTimeline>
        {workExperiences.map((work, idx) => {
          const last = idx === workExperiences.length - 1;
          return <TimelineElement last={last} {...work} />;
        })}
      </VerticalTimeline>
    </Box>
  );
};

export default WorkExperience;
