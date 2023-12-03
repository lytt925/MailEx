import { Noto_Sans_TC } from 'next/font/google';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import { Navbar } from '@/components/Navbar'
import { UserProvider } from '@/hooks/useUserContext'; // Assuming UserContext is the file name
import '@/styles/globals.css'


const noto = Noto_Sans_TC({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5B53D',
    },
    white: {
      main: '#fffaf0',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (

    <UserProvider>
      <ThemeProvider theme={theme}>
        <main className={`flex flex-col min-h-screen ${noto.className}`}>
          <Navbar />
          <div className="flex justify-center items-center h-custom w-full xl:max-w-[1280px] text-lg my-0 mx-auto">
            <Component {...pageProps} />
          </div>
        </main >
      </ThemeProvider>
    </UserProvider>
  )
}
