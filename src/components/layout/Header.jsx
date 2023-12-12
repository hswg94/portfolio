import { SiVisualstudiocode } from "react-icons/si";

import {
  Icon,
  Box,
  HStack,
  Link,
  MenuButton,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import ContactModal from "../Modals/ContactModal";

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
        maxW="90vw"
        py={4}
      >
        <Icon as={SiVisualstudiocode} boxSize={9}></Icon>

        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link onClick={scrollToSection("skills-section")}>Skills</Link>
          <Link onClick={scrollToSection("projects-section")}>Projects</Link>
          <Link onClick={scrollToSection("certs-section")}>Certificates</Link>
          <ContactModal />
        </HStack>

        <Menu>
          <MenuButton
            display={{ base: "flex", md: "none" }}
            as={IconButton}
            icon={<HamburgerIcon />}
          />
          <MenuList color="black">
            <MenuItem as={Link} onClick={scrollToSection("skills-section")}>
              Skills
            </MenuItem>
            <MenuItem as={Link} onClick={scrollToSection("projects-section")}>
              Projects
            </MenuItem>
            <MenuItem as={Link} onClick={scrollToSection("certs-section")}>
              Certificates
            </MenuItem>
            <MenuDivider />
            <ContactModal />
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};
export default Header;
