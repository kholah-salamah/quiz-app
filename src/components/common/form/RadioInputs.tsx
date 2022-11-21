import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  Stack,
  UseRadioGroupProps,
} from "@chakra-ui/react";
import { FieldHookConfig, useField, useFormikContext } from "formik";

type RadioInputsProps<DataType, OptionType> = {
  name: keyof DataType;

  optionsFieldName: keyof DataType;
  textFieldName: keyof OptionType;
  valueFieldName?: keyof OptionType;

  radioGroupProps?: Omit<RadioGroupProps, "children">;
  radioProps?: RadioProps;
};

const RadioInputs = <OptionType, DataType>({
  name,
  textFieldName,
  valueFieldName,
  optionsFieldName,
  radioProps,
  radioGroupProps,
}: RadioInputsProps<DataType, OptionType>) => {
  const { values } = useFormikContext<DataType>();

  const [field, meta, helpers] = useField(
    name as string | FieldHookConfig<OptionType>
  );

  const { value } = meta;
  const { setValue } = helpers;

  const items = values[optionsFieldName as keyof DataType] as OptionType[];

  return (
    <RadioGroup
      {...field}
      {...radioGroupProps}
      value={value as unknown as string}
      onChange={(nextValue: string) => setValue(nextValue as OptionType)}
    >
      <Stack direction="column">
        {items.map((item) => {
          const text = item[textFieldName] as string;
          const value = item[
            valueFieldName || textFieldName
          ] as UseRadioGroupProps["value"];

          return (
            <Radio {...radioProps} key={text} value={value}>
              {text}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default RadioInputs;
