/* eslint-disable react/prop-types */
import {
  Icon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  HStack,
} from "@chakra-ui/react";

import socialData from "../../data/socialsData";

const ContactModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Contact Me</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="blackAlpha.700" color="white">
          <ModalHeader fontWeight="bold">Select an Option</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack justifyContent="space-evenly">
            {socialData.map(({ icon, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <Icon mb="-1.5" boxSize={14} as={icon} key={url} />
              </a>
            ))}
            </HStack>
          </ModalBody>
          <Divider w="90%" mt={7} mx="auto" />
          <ModalFooter>
            <Button onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
