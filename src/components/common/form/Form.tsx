import { Formik, FormikConfig, FormikValues } from "formik";
import { PropsWithChildren } from "react";

type Props<DataType extends FormikValues> = PropsWithChildren<DataType>;

const Form = <Values extends FormikValues = FormikValues, ExtraProps = {}>(
  formProps: FormikConfig<Values> & ExtraProps
) => <Formik {...formProps} />;

export default Form;
