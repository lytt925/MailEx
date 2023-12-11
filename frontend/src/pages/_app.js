import { Noto_Sans_TC } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from '@/components/Navbar'
import { UserProvider } from '@/hooks/useUserContext'; // Assuming UserContext is the file name
import '@/styles/globals.css'


const noto = Noto_Sans_TC({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5B53D',
      light: 'rgb(245,204,127)',
      // dark: will be calculated from palette.primary.main,
      // contrastText: '#fff',
    },
    white: {
      main: '#fffaf0',
    },
  },
});

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <main className={`flex flex-col min-h-screen ${noto.className}`}>
            <Navbar />
            <div className="flex justify-center items-center h-custom w-full xl:max-w-[1300px] text-lg my-0 mx-auto"> {/* w-full */}
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </div>
          </main >
        </ThemeProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}
