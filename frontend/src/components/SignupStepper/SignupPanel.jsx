import { signupFields, basicInfo2, oneLineBio } from "./formFields"
import { useEffect, useState, useMemo } from "react";
// https://www.loginradius.com/blog/engineering/guest-post/modern-login-signup-form-tailwindcss-react/
import Input from "./Input";
import { IoIosAddCircle } from "react-icons/io";
import Stack from '@mui/material/Stack';
import LangModal from "./LangModal";
import { RxCross1 } from "react-icons/rx";
import countriesJson from '@/api/countries.json';


const Item = ({ langName, select, signupInfo, setSignupInfo }) => {
  const thisLang = signupInfo.languages.filter(language => language.name === langName)[0];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let level = 0;
  switch (select) {
    case "beginner":
      level = 1;
      break;
    case "elementary":
      level = 2;
      break;
    case "intermediate":
      level = 3;
      break;
    case "proficient":
      level = 4;
      break;
    case "native":
      level = 5;
      break;
    default:
      break;
  }

  return (
    <div className="cursor-pointer flex items-center shadow p-2 text-base mx-1">
      <RxCross1
        className="cursor-pointer text-[14px] mt-1 mr-2"
        onClick={() => {
          const newLanguages = signupInfo.languages.filter(language => language.name !== langName);
          setSignupInfo({ ...signupInfo, languages: newLanguages });
        }}
      />
      <div className="flex items-center justify-between w-full text-sm" onClick={handleOpen}>
        {langName}
        {/* generate five circles */}
        <div className="flex ml-auto">
          <div className={`h-3 w-3 rounded-full ${level >= 1 ? 'bg-app-primary' : 'bg-gray-300'} mr-1`}></div>
          <div className={`h-3 w-3 rounded-full ${level >= 2 ? 'bg-app-primary' : 'bg-gray-300'} mr-1`}></div>
          <div className={`h-3 w-3 rounded-full ${level >= 3 ? 'bg-app-primary' : 'bg-gray-300'} mr-1`}></div>
          <div className={`h-3 w-3 rounded-full ${level >= 4 ? 'bg-app-primary' : 'bg-gray-300'} mr-1`}></div>
          <div className={`h-3 w-3 rounded-full ${level >= 5 ? 'bg-app-primary' : 'bg-gray-300'} mr-1`}></div>
        </div>
      </div>
      <LangModal
        key={thisLang.code}
        open={open}
        handleClose={handleClose}
        signupInfo={signupInfo}
        setSignupInfo={setSignupInfo}
        thisLang={thisLang}
      />
    </div >
  )
}

{/* <div className={`h-3 w-3 rounded-full ${level <= 1 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer hover:bg-app-primary`}></div>
<div className={`h-3 w-3 rounded-full ${level <= 2 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer peer-hover:bg-app-primary hover:bg-app-primary`}></div>
<div className={`h-3 w-3 rounded-full ${level <= 3 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer peer-hover:bg-app-primary hover:bg-app-primary`}></div>
<div className={`h-3 w-3 rounded-full ${level <= 4 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer peer-hover:bg-app-primary hover:bg-app-primary`}></div>
<div className={`h-3 w-3 rounded-full ${level <= 5 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer peer-hover:bg-app-primary hover:bg-app-primary`}></div> */}


export default function SignupPanel({ activeStep, signupInfo, setSignupInfo, passed, setPassed }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { id, name, value } = event.target;
    setSignupInfo({ ...signupInfo, [id]: value });
  }



  // let fields = [];
  // switch (activeStep) {
  //   case 0:
  //     fields = signupFields;
  //     break;
  //   case 2:
  //     fields = basicInfo2;
  //     break;
  //   case 3:
  //     fields = oneLineBio;
  //     break;
  //   default:
  //     break;
  // }
  const fields = useMemo(() => {
    switch (activeStep) {
      case 0:
        return signupFields;
      case 2:
        return basicInfo2;
      case 3:
        return oneLineBio;
      default:
        return [];
    }
  }, [activeStep]);

  useEffect(() => {
    if (activeStep !== 1) {
      let pass = true;
      for (const field of fields) {
        if (field.isRequired) {
          if (signupInfo[field.id] === "") {
            pass = false; // Set the flag to true if any required field has a value
            break; // Break the loop as we have found a filled required field
          }
        }
      }
      if (passed[activeStep] !== pass) {
        const newPassed = [...passed]
        newPassed[activeStep] = pass;
        setPassed(newPassed);
      }
    } else if (activeStep === 1) {
      if (signupInfo.country_code !== "" && signupInfo.languages.length > 0 && passed[activeStep] !== true) {
        const newPassed = [...passed]
        newPassed[activeStep] = true;
        setPassed(newPassed);
      }
    }
  }, [signupInfo, activeStep, passed, setPassed, fields])

  if (activeStep === 1) {
    const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-app-primary focus:border-app-primary focus:z-10 sm:text-sm"
    return (
      <div className="mt-8 space-y-6">
        <div className="">
          <div className="my-5 w-[90%] mx-auto" key="country">
            <div className="text-base ml-1 pb-3">
              <label htmlFor="country">
                Country
              </label>
            </div>
            <select
              onChange={handleInputChange}
              id="country_code"
              name="country"
              required={true}
              value={signupInfo.country_code}
              className={fixedInputClass}
            >
              {countriesJson.countries.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="ml-1 flex items-center h-10 gap-1 mb-1">
            <div className="text-base ml-5 pb-1">Languages</div>
            <IoIosAddCircle className="cursor-pointer text-[24px] text-backup-primary" onClick={handleOpen} />
          </div>
          <div className="border border-gray-200 rounded-md w-[90%] h-36 overflow-auto mx-auto shadow-inner">
            <Stack spacing={0}>
              {
                signupInfo.languages && signupInfo.languages.map((language, index) => {
                  if (language.name) {
                    return (
                      <Item
                        key={language.code}
                        langName={language.name}
                        select={language.proficiency_level}
                        signupInfo={signupInfo}
                        setSignupInfo={setSignupInfo}
                        handleOpen={handleOpen}
                      />
                    )
                  }
                })
              }
            </Stack>
          </div>
          <LangModal
            key={signupInfo.languages.length}
            open={open}
            handleClose={handleClose}
            signupInfo={signupInfo}
            setSignupInfo={setSignupInfo}
          />
        </div>
      </div>
    )
  }

  if (activeStep === 3) {
    return (
      <div className="mt-8 space-y-6 w-[90%] mx-auto">
        <div className="">
          {
            fields.map(field =>
              <Input
                key={field.id}
                handleChange={handleInputChange}
                value={signupInfo[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                customClass={"h-40"}
              />
            )
          }
        </div>
      </div>
    )
  }


  return (
    <div className="mt-8 space-y-6">
      <div className="">
        {
          fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleInputChange}
              value={signupInfo[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              customClass={field.customClass}
              options={field.options}
            />
          )
        }
      </div>
    </div>
  )
}