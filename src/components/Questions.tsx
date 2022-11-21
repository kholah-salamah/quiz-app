import {
  Box,
  Button,
  ButtonGroup,
  CardBody,
  Divider,
  Flex,
  FormControl,
  Progress,
  Spacer,
} from "@chakra-ui/react";
import { FormikHelpers } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import * as Yup from "yup";
import useSteps from "../hooks/useSteps";
import { Question, useMutateQuestion } from "../services/questions";
import Form from "./common/form/Form";
import RadioInputs from "./common/form/RadioInputs";
import SubmitButton from "./common/form/SubmitButton";
import FormQuestion from "./FormQuestion";
import Result from "./Result";

const validationShcema = Yup.object().shape({
  selectedAnswer: Yup.object().required("Required"),
});

type QuestionsProps = {
  questions: Question[];
  startOver: () => void;
};

export const Questions = ({ questions, startOver }: QuestionsProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(["stepIndex"]);
  const [finished, setFinished] = useState(false);

  const {
    isFirst,
    isLast,
    stepNumber,
    percentage,
    stepIndex,
    nextStep,
    prevStep,
    reset: resetCounter,
  } = useSteps(questions.length || 0, parseInt(cookies.stepIndex || 0));

  const { mutate } = useMutateQuestion();

  const handleSubmit = (
    values: Question,
    { resetForm }: FormikHelpers<Question>
  ) => {
    mutate(values);

    if (isLast) {
      setFinished(true);
      // resetForm();
    } else {
      setCookie("stepIndex", stepIndex + 1);
      nextStep();
    }
  };

  const handleRestart = () => {
    removeCookie("stepIndex");
    startOver();
    resetCounter();
    setFinished(false);
  };

  const currentQuestion = questions[stepIndex];

  return (
    <Box>
      <Progress value={finished ? 100 : percentage} />
      <CardBody marginBottom={2}>
        {!finished && (
          <Form
            key={stepNumber}
            initialValues={currentQuestion}
            onSubmit={handleSubmit}
            validationSchema={validationShcema}
            validateOnMount
          >
            <>
              <FormControl>
                <FormQuestion stepNumber={stepNumber} />
                <Divider marginBottom={4} />
                <RadioInputs
                  name={"selectedAnswer.text"}
                  textFieldName={"text"}
                  optionsFieldName={"answers"}
                  radioGroupProps={{ marginBottom: 4 }}
                />
              </FormControl>
              <Divider marginBottom={3} />
              <Flex>
                <Spacer />
                <ButtonGroup spacing="3">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    disabled={isFirst}
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <SubmitButton
                    title={isLast ? "Submit" : "Next"}
                    disableIfNotValid={true}
                  />
                </ButtonGroup>
              </Flex>
            </>
          </Form>
        )}
        {finished && <Result onRestart={handleRestart} />}
      </CardBody>
    </Box>
  );
};
