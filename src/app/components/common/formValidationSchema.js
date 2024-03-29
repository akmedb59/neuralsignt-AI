import * as yup from "yup";

// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/; // regex for password
export const regVal = yup.object().shape({
  firstname: yup.string().min(1).required("Please enter full name"),
  lastname: yup.string().min(1).required("Please enter full name"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRegex, {
      message:
        "Passowrd must have at least on digit, one lowercase letter, one uppercase letter and between 8-20 characters in length",
    })
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Please Confirm password"),
});

export const loginVal = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const editFormVal = yup.object().shape({
  firstname: yup.string().min(1).required("Please enter full name"),
  lastname: yup.string().min(1).required("Please enter full name"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Please Enter username"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  currentpassword: yup
    .string()
    .min(8)
    .matches(passwordRegex, {
      message:
        "Passowrd must have at least on digit, one lowercase letter, one uppercase letter and between 8-20 characters in length",
    })
    .notRequired(),
  newpassword: yup
    .string()
    .min(8)
    .matches(passwordRegex, {
      message:
        "Passowrd must have at least on digit, one lowercase letter, one uppercase letter and between 8-20 characters in length",
    })
    .notRequired(),
  newconfirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .notRequired(),
});
