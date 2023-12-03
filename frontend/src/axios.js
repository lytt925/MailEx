import axios from 'axios'

const NODE_ENV = process.env.NODE_ENV;

const instance = axios.create({
  baseURL: NODE_ENV === 'development'
    ? `http://${process.env.NEXT_PUBLIC_BACKEND_IP}/api/1.0`
    : `https://${process.env.NEXT_PUBLIC_BACKEND_IP}/api/1.0`,
});

console.log("api endpoint", `http://${process.env.NEXT_PUBLIC_BACKEND_IP}/api/1.0`)
export default instance;
