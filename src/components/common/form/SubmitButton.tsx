import { Button, ButtonProps } from "@chakra-ui/react";
import { useFormikContext } from "formik";

type SubmitButtonProps = ButtonProps & {
  disableIfNotValid?: boolean;
};

const SubmitButton = <T extends {}>({
  title = "Submit",
  disableIfNotValid,
  ...restProps
}: SubmitButtonProps) => {
  const { submitForm, isValid } = useFormikContext<T>();

  const isDisabled = disableIfNotValid && !isValid;

  return (
    <Button
      variant="solid"
      colorScheme="blue"
      onClick={submitForm}
      disabled={isDisabled}
      {...restProps}
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
