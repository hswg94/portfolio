/* eslint-disable react/prop-types */
import {
  Link,
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
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";

const modalText = (
  <>
    This project is hosted on a server using a free-tier plan, the{" "}
    <b>
      <i>initial loading time</i>
    </b>{" "}
    upon access could take a minute or longer.
  </>
);

const CardModal = ({ url }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link as="button" onClick={onOpen} fontWeight="semibold" fontSize="xl">
        View Project <Icon boxSize={4} as={FaExternalLinkAlt} />
      </Link>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="blackAlpha.700" color="white">
          <ModalHeader fontWeight="bold">
            <HStack>
              <Icon as={IoWarningOutline}/><Text>Attention</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalText}</ModalBody>
          <Divider w="90%" mt={5} mx="auto" />
          <ModalFooter>
            <Button mr="3" onClick={onClose}>
              Close
            </Button>
            <Button>
              <Link href={url} isExternal>
                Proceed <Icon boxSize={3} as={FaExternalLinkAlt} />
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardModal;
