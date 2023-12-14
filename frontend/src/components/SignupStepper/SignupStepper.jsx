import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SignupPanel from './SignupPanel';
import { Baloo_Paaji_2 } from 'next/font/google';
const baloo = Baloo_Paaji_2({ subsets: ['latin'] });
import { CircularProgress } from '@mui/material';
import api from '@/api/index';

const steps = ['Setup Account', 'Basic Info I', 'Basic Info II', 'One Line Bio (Optional)'];

export default function SignupStepper() {
    const router = useRouter();
    const [activeStep, setActiveStep] = useState(0);
    const [passed, setPassed] = useState(steps.map((_) => false))
    const [skipped, setSkipped] = useState(new Set());
    const [isSignupSuccess, setIsSignupSuccess] = useState(false);
    const [signupInfo, setSignupInfo] = useState({
        username: '',
        email: '',
        password: '',
        country_code: '',
        languages: [{ name: 'Chinese (Traditional)', code: "zh-TW", proficiency_level: 'native' }],
        profile_content: '',
        age: 0,
        gender: '',
        provider: 'native'
    });

    console.log(signupInfo);

    const isStepOptional = (step) => {
        return step === 3;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = async () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

        if (activeStep === steps.length - 1) {
            // post /user/signup
            const body = {
                username: signupInfo.username,
                email: signupInfo.email,
                password: signupInfo.password,
                country_code: signupInfo.country_code,
                profile_content: signupInfo.profile_content,
                age: parseInt(signupInfo.age),
                gender: signupInfo.gender,
                provider: signupInfo.provider,
            }
            const { data } = await api.post('/user/signup', body)
            console.log(data);
            if (data.access_token) {
                setIsSignupSuccess(true);
                setTimeout(() => {
                    router.push('/login');
                }, 1500)
            }
        }
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
            <div className="bg-white w-[90%] md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:w-[550px] p-6 lg:p-12 xl:p-12 md:border md:rounded-md md:shadow flex items-center justify-center">
                <div className="w-full h-full">
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
                        isSignupSuccess ? (
                            <div className='flex w-full justify-center my-8 items-center'>
                                <CircularProgress size={'30px'} />
                                <Typography sx={{ mt: 2, mb: 1, ml: 2 }}>
                                    Signup Successfully! Redirect to login page
                                </Typography>
                            </div>) : (
                            <div className='flex w-full justify-center my-8 items-center'>
                                <CircularProgress size={'30px'} />
                                <Typography sx={{ mt: 2, mb: 1, ml: 2 }}>
                                    Signup...
                                </Typography>
                            </div>
                        )
                    ) : (
                        <>
                            <SignupPanel key={activeStep} activeStep={activeStep} signupInfo={signupInfo} setSignupInfo={setSignupInfo} passed={passed} setPassed={setPassed} />
                            <Box sx={{ display: 'flex', marginX: "auto", pt: 4, width: "90%" }}>
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

                                <Button onClick={handleNext} disabled={!passed[activeStep]}>
                                    {activeStep === steps.length - 1 ? 'Signup' : 'Next'}
                                </Button>
                            </Box>
                        </>
                    )}
                    {
                        activeStep !== steps.length &&
                        <p className="text-base mt-8 w-[88%] mx-auto">Already have an account? &nbsp;
                            <Link href="/login" className="text-app-primary hover:text-app-primary-light font-semibold">
                                Login now
                            </Link>
                        </p>
                    }
                </div>
            </div>
        </section>
    );
}