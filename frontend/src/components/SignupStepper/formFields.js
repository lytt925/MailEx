const signupFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username"
  },
  {
    labelText: "Email address",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address"
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password"
  },
  // {
  //   labelText: "Confirm Password",
  //   labelFor: "confirm-password",
  //   id: "confirmPassword",
  //   name: "confirm-password",
  //   type: "password",
  //   autoComplete: "confirm-password",
  //   isRequired: true,
  //   placeholder: "Confirm Password"
  // }
]

const basicInfo2 = [
  {
    labelText: "Age",
    labelFor: "age",
    id: "age",
    name: "age",
    type: "number",
    isRequired: true,
    placeholder: "age"
  },
  {
    labelText: "Gender",
    labelFor: "gender",
    id: "gender",
    name: "gender",
    type: "select",
    isRequired: true,
    placeholder: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "others", label: "Others" },
    ]
  }
]

// max 85 char
const oneLineBio = [
  {
    labelText: "Short introduction about yourself",
    labelFor: "profile_content",
    id: "profile_content",
    name: "profile_content",
    type: "textarea",
    autoComplete: "one-line-bio",
    isRequired: false,
    placeholder: "Write a short introduction about yourself",
    maxLength: 85
  }
]

export { signupFields, basicInfo2, oneLineBio }