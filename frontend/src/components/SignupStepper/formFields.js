// import language json
import languages from '@/api/languages.json';
import countries from '@/api/countries.json';

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
    labelFor: "email-address",
    id: "email-address",
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
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password"
  }
]


const basicInfo = [
  {
    labelText: "Country",
    labelFor: "country",
    id: "country",
    name: "country",
    type: "select",
    autoComplete: "country",
    isRequired: true,
    options: countries.countries
  },
  {
    labelText: "Language",
    labelFor: "language",
    id: "language",
    name: "language",
    type: "select",
    isRequired: true,
    options: languages.languages
  },
  {
    labelText: "Level",
    labelFor: "proficiency_level",
    id: "proficiency_level",
    name: "proficiency_level",
    type: "select",
    isRequired: true,
    options: [
      { value: "beginner", label: "Beginner" },
      { value: "elementary", label: "Elementary" },
      { value: "intermediate", label: "Intermediate" },
      { value: "proficient", label: "Proficient" },
      { value: "native", label: "Native" }
    ]
  }
]

export { signupFields, basicInfo }