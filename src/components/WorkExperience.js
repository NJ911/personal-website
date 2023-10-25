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
    title: "Software Engineer",
    company: "Niftory",
    location: "Seattle, WA",
    description: `Orchestrated a team of three developers to construct a comprehensive automation testing repository encompassing
    80% of Niftory’s APIs. Employed sharding in our CI environment to significantly decrease test duration from 16
    minutes to 7 minutes.`,
    date: "April 2023- Presenet",
    icon: "/images/niftory.png",
    link: "https://niftory.com/",
  },
  {
    title: "Full Stack Web Developer",
    company: "Tradable Bits",
    location: "Vancouver, BC",
    description: `Built out data and marketing tools for people in the sports and music industries! Got to build for international music 
    labels (it's a secret as to which ones :D), the Toronto Raptors, and the Maple Leafs.`,
    date: "Sep 2022- Present",
    icon: "/images/tbits.png",
    link: "https://tradablebits.com/",
  },
  {
    title: "Software Engineer",
    company: "Niftory",
    location: "Seattle, WA",
    description: ` Built out GraphQL APIs allowing other devs to use Niftory's backend workflows.
      Also built dashboards for admins to manage their Niftory stores and run marketing campaigns using our APIs.`,
    date: "October 2021- Sep 2022",
    icon: "/images/niftory.png",
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
