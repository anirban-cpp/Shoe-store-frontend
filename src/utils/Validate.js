export const validateEmailAndUsername = (inputValue) => {
  const { name, email } = inputValue;

  if (!name.match("^[a-zA-Z ]+$")) {
    // name not valid
    return {
      valid: false,
      message: "Name can contain only uppercase and lowercase alphabets 🤨",
    };
  }

  if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    // email not valid
    return {
      valid: false,
      message: "Invalid email address 🤨",
    };
  }

  return {
    valid: true,
  };
}

const Validate = (formValue) => {
  const { name, email, password, confirmpassword } = formValue;

  if (!name.match("^[a-zA-Z ]+$")) {
    // name not valid
    return {
      valid: false,
      message: "Name can contain only uppercase and lowercase alphabets 🤨",
    };
  }

  if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    // email not valid
    return {
      valid: false,
      message: "Invalid email address 🤨",
    };
  }

  if (
    !password.match(
      "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,20}$"
    )
  ) {
    // password not valid
    return {
      valid: false,
      message:
        "Password should be 8 to 20 characters and contain uppercase characters, lowercase characters, digits and atleast one special character 🤨",
    };
  }

  if (!confirmpassword.match(password)) {
    return {
      valid: false,
      message: "Passwords do not match 😓",
    };
  }

  return {
    valid: true,
  };
};

export default Validate;
