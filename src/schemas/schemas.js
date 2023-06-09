import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// Regular Expression to match Bangladeshi Phone number
const phoneBd = /^(?:\+88|88)?(01[3-9]\d{8})$/;

export const signUpSchema = yup.object().shape({
  name: yup.string().min(4).required("Name is a required field"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  hackerrankId: yup.string().required("HackerrankId is a required field"),
  phone: yup
    .string()
    .matches(phoneBd, { message: "Enter a valid phone number" })
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password with minimum 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const updateUsSchema = yup.object().shape({
  name: yup.string().min(4).required("Name is a required field"),
  hackerrankId: yup.string().required("HackerrankId is a required field"),
  phone: yup
    .string()
    .matches(phoneBd, { message: "Enter a valid phone number" })
    .required("Required"),
  password: yup.string().required("Required"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().required("Required"),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password with minimum 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
