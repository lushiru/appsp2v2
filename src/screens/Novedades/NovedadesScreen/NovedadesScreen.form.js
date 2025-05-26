import * as Yup from "yup";

export function initialValues() {
  return {
    mensaje: "",
  };
}

export function validationSchema() {
  return Yup.object({
    mensaje: Yup.string().required(true),
  });
}