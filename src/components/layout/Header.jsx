import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

import { Icon, Box, HStack, Link } from "@chakra-ui/react";

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
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      backgroundColor="black"
      position="sticky"
      top="0"
      zIndex={1}
      align="center"
    >
      <HStack
        justifyContent="space-between"
        color="white"
        width="1280px"
        maxW="80vw"
        p={3}
      >
        <HStack spacing={3}>
          {socials.map(({ icon, url }) => (
            <a key={url} href={url} target="_blank" rel="noopener noreferrer">
              <Icon mb="-1.5" boxSize={8} as={icon} key={url} />
            </a>
          ))}
        </HStack>
        <HStack spacing={3}>
          <Link as="button" onClick={scrollToSection("project-section")}>
            Projects
          </Link>
          <Link as="button" onClick={scrollToSection("cert-section")}>
            Certificates
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};
export default Header;
