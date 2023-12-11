import axios from "axios";


const NODE_ENV = process.env.NODE_ENV;

const instance = axios.create({
  // baseURL: NODE_ENV === 'development' ? `http://${process.env.NEXT_PUBLIC_BACKEND_IP}/api/1.0` : `http://backend:4000/api/1.0`
  baseURL: NODE_ENV === 'development' ? `http://${process.env.NEXT_PUBLIC_BACKEND_IP}/api/1.0` : `http://${process.env.NEXT_PUBLIC_BACKEND_IP}/api/1.0`
});

export default instance;