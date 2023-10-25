import { useRef } from "react";
import { useInView } from "framer-motion";
import { Flex } from "@chakra-ui/react";

const TextFromSide = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});


  return (
      <Flex
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        ref={ref}
        marginTop="1vw"
      >
        {children}
      </Flex>
  );
};

export default TextFromSide