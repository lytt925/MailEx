import { Homepage } from '@/components/Homepage/index'
import { Navbar } from '@/components/Navbar'
import styled from 'styled-components'

export default function MainPage() {
  return (
    <MainWrapper>
      <Navbar />
      <Homepage />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  background-color: #FFFAF0;
  min-height: 100vh
`;