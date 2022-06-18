import * as yup from "yup";

export const validateSchema = yup.object().shape({
  appname: yup.string().min(1).max(18).required(),
  clientname: yup.string().min(1).max(22).required(),
  appdescription: yup.string().required(),
  email: yup.string().email().required()
});
