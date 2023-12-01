import styled from 'styled-components'
import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar'

const MainWrapper = styled.div`
  background-color: #FFFAF0;
  min-height: 100vh
`;

export default function App({ Component, pageProps }) {
  return (
    <MainWrapper>
      <Navbar />
      <Component {...pageProps} />
    </MainWrapper>
  )
}
