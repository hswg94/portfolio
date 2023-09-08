import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

import { Icon, Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: FaEnvelope,
    url: "mailto: hswg94@gmail.com",
  },
  {
    icon: FaGithub,
    url: "https://github.com/hswg94",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/wlmg/",
  },
];

const Header = () => {
  const scrollToSection = (sectionId) => () => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box backgroundColor="#18181b" position="sticky" top="0" zIndex={1}>
      <Box color="white" maxWidth="1600px" margin="auto" p={3}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack spacing={3}>
            {socials.map(({ icon, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <Icon mb="-1.5" boxSize={8} as={icon} key={url} />
              </a>
            ))}
          </HStack>
          <HStack spacing={8}>
            <a href="#project" onClick={scrollToSection("project-section")}>
              Projects
            </a>
            <a href="#cert" onClick={scrollToSection("cert-section")}>
              Certificates
            </a>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
