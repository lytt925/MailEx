import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import CircularProgress from '@mui/material/CircularProgress';
import { useUser } from "@/hooks/useUserContext";
import axios from "../../axios"

export function LoginPanel() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // For controlling button state
    const [isLoginFailed, setIsLoginFailed] = useState(false); // For controlling button state
    const { user: { userId }, setUser, setToken } = useUser();
    console.log('login', `https://${process.env.NEXT_PUBLIC_BACKEND_IP}/api/1.0`)
    if (userId !== '') {
        router.push('/');
    }

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    // Handle form submission
    const handleLogin = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        setIsLoading(true); // Enable loading state on button
        try {
            const { data } = await axios.post('/user/login',
                {
                    email,
                    password,
                    provider: 'native'
                })
            localStorage.setItem('jwt', data.access_token);
            setToken(data.access_token);
            const userResponse = {
                userId: data.user.id,
                username: data.user.username,
                email: data.user.email,
                provider: data.user.provider,
            };
            setUser(userResponse);
        } catch (error) {
            console.error('Login failed:', error);
            setIsLoginFailed(true);
        } finally {
            setIsLoading(false);
            // router.push('/');
        }
    };

    return (
        <section className="flex flex-col w-full md:flex-row items-center">
            <div className="bg-white w-[90%] md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 p-6 lg:p-16 xl:p-12 md:border md:rounded-md md:shadow flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight ">
                        Log in to your account
                    </h1>

                    <form className="mt-6" onSubmit={handleLogin}>
                        <div>
                            <label className="text-base block text-gray-700">Email Address</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter Email Address"
                                className="text-base w-full px-4 py-3 rounded mt-2 border bg-gray-100 focus:border-app-primary focus:bg-white focus:outline-none placeholder:text-sm"
                                autoFocus
                                autoComplete="off"
                                required
                                value={email}
                                onChange={handleInputChange}
                                disabled={isLoading}
                            />
                        </div>
                        <div className="mt-5">
                            <label className="text-base block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter Password"
                                minLength="6"
                                className="text-base w-full px-4 py-3 rounded bg-gray-100 mt-2 border focus:border-app-primary focus:bg-white focus:outline-none placeholder:text-sm"
                                required
                                value={password}
                                onChange={handleInputChange}
                                disabled={isLoading}
                            />
                        </div>
                        <div className="flex flex-row-reverse mt-2">
                            <a href="#" className="text-right flex-1 text-sm font-semibold text-gray-700 hover:text-app-primary focus:text-app-primary">
                                Forgot Password?
                            </a>
                            {isLoginFailed ? <p className="text-xs font-semibold text-red-500">Wrong Password!</p> : null}
                        </div>

                        <button type="submit" disabled={isLoading} className="text-app-content h-14 flex items-center justify-center w-full bg-app-primary hover:bg-app-primary-light focus:bg-app-primary-light font-semibold rounded-lg px-4 py-3 mt-6">
                            {isLoading ? <CircularProgress sx={{ color: 'black' }} size={'2rem'} /> : 'Log In'}
                        </button>

                    </form>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button className="h-14 w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            {/* SVG Icon */}
                            <span className="ml-4">Log in with Google</span>
                        </div>
                    </button>

                    <p className="mt-8">Need an account? &nbsp;
                        <a href="#" className="text-app-primary hover:text-app-primary-light font-semibold">
                            Create an account
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
