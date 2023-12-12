import { signupFields, basicInfo } from "./formFields"
import { useState } from "react";
// https://www.loginradius.com/blog/engineering/guest-post/modern-login-signup-form-tailwindcss-react/
import Input from "./Input";
import { IoIosAddCircle } from "react-icons/io";
import Stack from '@mui/material/Stack';
import { ImCross } from "react-icons/im";
import Popup from 'reactjs-popup';


[{ value: "beginner", label: "Beginner" },
{ value: "elementary", label: "Elementary" },
{ value: "intermediate", label: "Intermediate" },
{ value: "proficient", label: "Proficient" },
{ value: "native", label: "Native" }]

const Item = ({ children, select }) => {
    return (
        <div className="flex items-center shadow p-2 text-base mx-1">
            {children}
            {/* generate five circles */}
            <div className="flex flex-row-reverse ml-auto">
                <div className={`h-3 w-3 cursor-pointer rounded-full ${select === 1 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer hover:bg-app-primary`}></div>
                <div className={`h-3 w-3 cursor-pointer rounded-full ${select === 2 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer peer-hover:bg-app-primary hover:bg-app-primary`}></div>
                <div className={`h-3 w-3 cursor-pointer rounded-full ${select === 3 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer peer-hover:bg-app-primary hover:bg-app-primary`}></div>
                <div className={`h-3 w-3 cursor-pointer rounded-full ${select === 4 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer peer-hover:bg-app-primary hover:bg-app-primary`}></div>
                <div className={`h-3 w-3 cursor-pointer rounded-full ${select === 5 ? 'bg-app-primary' : 'bg-gray-300'} mr-1 peer peer-hover:bg-app-primary hover:bg-app-primary`}></div>
            </div>
        </div>
    )
}


export default function SignupPanel({ activeStep, signupInfo, handleInputChange }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let fields = [];
    switch (activeStep) {
        case 0:
            fields = signupFields;
            break;
        case 1:
            fields = basicInfo;
            break;
        case 2:
            fields = basicInfo;
            break;
        default:
            break;
    }

    if (activeStep === 1) {
        return (
            <div className="mt-8 space-y-6">
                <div className="">
                    <div>
                        <div className="ml-1 flex items-center h-10 gap-1 mb-1">
                            <div className="pb-1">Languages</div>
                            <IoIosAddCircle className="cursor-pointer text-[24px] text-backup-primary" onClick={handleOpen} />
                        </div>
                        <div className="border border-gray-200 rounded w-[100%] h-40 overflow-auto mx-auto shadow-inner">
                            <Stack spacing={0}>
                                <Item key={1}>中文</Item>
                                <Item key={2}>英文</Item>
                            </Stack>
                        </div>
                        <Popup
                            open={open}
                            position="bottom center"
                            onClose={handleClose}
                        >
                            <div className="w-[350px] bg-white shadow-lg rounded-lg p-8 mt-40">
                                <div className="flex w-full justify-end"><ImCross className="cursor-pointer" onClick={handleClose} /></div>
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
                        </Popup>
                    </div>
                    {/* <Modal open={open} handleClose={handleClose} handleOpen={handleOpen} /> */}
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
                        />
                    )
                }
            </div>
        </div>
    )
}