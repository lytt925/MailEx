import { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Popup from 'reactjs-popup';
import Input from "./Input";
import languagesJson from '@/api/languages.json';

const LangModal = ({ open, handleClose, setSignupInfo, signupInfo, thisLang }) => {
    const [lang, setLang] = useState(() => {
        if (!thisLang?.code) {
            return { name: 'Chinese (Traditional)', code: 'zh-TW', proficiency_level: 'proficient' }
        } else {
            return thisLang;
        }
    }); //{ name: '', code: '', proficiency_level: '' }

    const handleChanges = (event) => {
        const { name, value } = event.target;
        if (name === "language") {
            const text = event.target.options[event.target.selectedIndex].text;
            setLang({ ...lang, "name": text, "code": value, "proficiency_level": "intermediate" })
        } else {
            setLang({ ...lang, [name]: value });
        }
    }

    return (
        <Popup
            open={open}
            position="bottom center"
            onClose={handleClose}
        >
            <div className="w-[350px] bg-white shadow-lg rounded-lg p-8 mt-40">
                <div className="flex w-full justify-end"><RxCross1 className="cursor-pointer" onClick={handleClose} /></div>
                <Input
                    key="language"
                    handleChange={handleChanges}
                    labelText="Language"
                    labelFor="language"
                    value={lang?.code}
                    id="language"
                    name="language"
                    type="select"
                    isRequired={true}
                    options={languagesJson.languages}
                />
                <Input
                    key="proficiency_level"
                    value={lang?.proficiency_level || "intermediate"}
                    handleChange={handleChanges}
                    labelText="Level"
                    labelFor="proficiency_level"
                    id="proficiency_level"
                    name="proficiency_level"
                    type="select"
                    isRequired={true}
                    options={[
                        { value: "beginner", label: "Beginner" },
                        { value: "elementary", label: "Elementary" },
                        { value: "intermediate", label: "Intermediate" },
                        { value: "proficient", label: "Proficient" },
                        { value: "native", label: "Native" }
                    ]}
                />
                <div className='flex justify-center'>
                    <button
                        onClick={() => {
                            console.log("add language")
                            const langs = signupInfo.languages;
                            // if lang exists, check code
                            // if code exists, replace
                            // else add
                            if (langs.find(l => l.name === lang.name)) {
                                const index = langs.findIndex(l => l.name === lang.name);
                                langs[index] = lang;
                            } else {
                                langs.push(lang);
                            }
                            setSignupInfo({ ...signupInfo, languages: langs });
                            handleClose()
                        }}
                        className="bg-app-primary text-white rounded-md px-4 py-2 mt-4 w-[100px]">
                        Add
                    </button>
                </div>
            </div>
        </Popup>
    )
}

export default LangModal