import { FormLabel } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { Question } from "../services/questions";

type FormQuestionProps = {
  stepNumber: number;
};

const FormQuestion = ({ stepNumber }: FormQuestionProps) => {
  const { values } = useFormikContext<Question>();

  return (
    <FormLabel
      marginBottom={4}
    >{`Q${stepNumber}: ${values.question}`}</FormLabel>
  );
};

export default FormQuestion;
