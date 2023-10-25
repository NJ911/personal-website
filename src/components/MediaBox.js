import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { Flex, Link } from "@chakra-ui/react";

export const MediaLink = ({ link, children }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      as={motion.a}
      whileHover={{
        translateY: -10,
      }}
    >
      <FontAwesomeIcon icon={children} size="3x" />
    </Link>
  );
};
const Mediabox = () => {
  return (
    <Flex gap="1.5vw">
      <MediaLink link="https://www.linkedin.com/in/neeraj119">
        {faLinkedin}
      </MediaLink>
      <MediaLink link="https://github.com/NJ911">{faGithub}</MediaLink>
      <MediaLink link="/NeerajResumeL.pdf">{faFileLines}</MediaLink>
    </Flex>
  );
};

export default Mediabox;
