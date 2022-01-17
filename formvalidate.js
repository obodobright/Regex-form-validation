export default function validateInfo(
  email,
  name,
  password,
  confirmpassword,
  phone
) {
  const error = {};
  if (!email) {
    error.email = "Email Required";
  } else if (
    !/^([a-zA-Z0-9.\-_]+)@([a-zA-Z0-9.\-_]+)\.([a-zA-Z]+)$/.test(email)
  ) {
    error.email = "Invalid Email";
  }
  if (!name) {
    error.name = "Name Required";
  } else if (!/^[a-zA-Z]([a-zA-z\s]){2,40}$/.test(name)) {
    error.name = "Invalid name";
  }
  if (!phone) {
    error.phone = "phone no. Required";
  } else if (!/^[6-9]{1}[0-9]{9}$/.test(phone)) {
    error.phone = "Invalid Phone number";
  } else if (
    !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
      phone
    )
  ) {
    error.phone = "Invalid Phone number";
  }
  if (!password) {
    error.password = "Password Required";
  } else if (
    !/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/.test(password)
  ) {
    error.password =
      "Minimum 8 characters,Maximum 16 character and atleast one lower case,one uppercase and one numeral";
  }

  if (!confirmpassword) {
    error.confirmpassword = "Please return password again";
  } else if (!(password === confirmpassword)) {
    error.confirmpassword = "Password dosen't match";
  }
  return error;
}
export default function validateInfo(
  email,
  name,
  password,
  confirmpassword,
  phone
) {
  const error = {};
  if (!email) {
    error.email = "Email Required";
  } else if (
    !/^([a-zA-Z0-9.\-_]+)@([a-zA-Z0-9.\-_]+)\.([a-zA-Z]+)$/.test(email)
  ) {
    error.email = "Invalid Email";
  }
  if (!name) {
    error.name = "Name Required";
  } else if (!/^[a-zA-Z]([a-zA-z\s]){2,40}$/.test(name)) {
    error.name = "Invalid name";
  }
  if (!phone) {
    error.phone = "phone no. Required";
  } else if (!/^[6-9]{1}[0-9]{9}$/.test(phone)) {
    error.phone = "Invalid Phone number";
  } else if (
    !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
      phone
    )
  ) {
    error.phone = "Invalid Phone number";
  }
  if (!password) {
    error.password = "Password Required";
  } else if (
    !/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/.test(password)
  ) {
    error.password =
      "Minimum 8 characters,Maximum 16 character and atleast one lower case,one uppercase and one numeral";
  }

  if (!confirmpassword) {
    error.confirmpassword = "Please return password again";
  } else if (!(password === confirmpassword)) {
    error.confirmpassword = "Password dosen't match";
  }
  return error;
}
