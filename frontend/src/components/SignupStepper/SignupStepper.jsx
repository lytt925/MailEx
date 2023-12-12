import { useEffect, useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SignupPanel from './SignupPanel';
import { Baloo_Paaji_2 } from 'next/font/google';
const baloo = Baloo_Paaji_2({ subsets: ['latin'] });

const steps = ['Setup Account', 'Basic Info', 'One Line Bio (Optional)'];

export default function SignupStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const [signupInfo, setSignupInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        country_name: '',
        country_code: '',
        language: [{ name: '', code: '', proficiency_level: '' }],
        profile_content: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSignupInfo({ ...signupInfo, [name]: value });
    }

    const isStepOptional = (step) => {
        return step === 2;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };


    return (
        <section className="flex flex-col w-full md:flex-row items-center">
            <div className="bg-white w-[90%] md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:w-[450px] p-6 lg:p-16 xl:p-12 md:border md:rounded-md md:shadow flex items-center justify-center">
                <div className="w-full h-100">
                    <div className={`${baloo.className} pb-8 text-app-content font-bold text-[36px] text-center align-middle tracking-wider w-full`}>
                        MailEx
                    </div>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            // if (isStepOptional(index)) {
                            //     labelProps.optional = (
                            //         <Typography variant="caption">Optional</Typography>
                            //     );
                            // }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box> */}
                        </>
                    ) : (
                        <>
                            <SignupPanel activeStep={activeStep} signupInfo={signupInfo} handleInputChange={handleInputChange} />
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )}

                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </>
                    )}
                    <p className="text-base mt-8">Already have an account? &nbsp;
                        <Link href="/login" className="text-app-primary hover:text-app-primary-light font-semibold">
                            Login now
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}