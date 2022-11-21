import {
  Button,
  Center,
  Divider,
  Flex,
  Progress,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useMarks } from "../services/questions";

type ResultProps = {
  onRestart: () => void;
};

const Result = ({ onRestart }: ResultProps) => {
  const { data: marks } = useMarks();

  return (
    <>
      <Center>
        <Text marginBottom={10} fontSize="lg" as="sub">
          {`You did a great job! your total marks is: ${marks}`}
        </Text>
      </Center>
      <Divider marginBottom={3} />
      <Flex>
        <Spacer />
        <Button
          variant="solid"
          colorScheme="blue"
          disabled={false}
          onClick={onRestart}
        >
          Restart
        </Button>
      </Flex>
    </>
  );
};

export default Result;
