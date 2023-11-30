import styled from 'styled-components';
import TextField from '@mui/material/TextField';

//w-full py-12 flex justify-center
const HomepageWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 3rem/* 48px */;
  padding-bottom: 3rem/* 48px */;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  display: grid;
  gap: 1rem/* 16px */;
  padding-left: 1rem/* 16px */;
  padding-right: 1rem/* 16px */;

  @media (min-width: 768px) {
    gap: 2rem/* 32px */;
    padding-left: 1.5rem/* 24px */;
    padding-right: 1.5rem/* 24px */;
  }
`
// Continue to create styled components for other elements
export function Homepage() {
  return (
    <HomepageWrapper>
      <ContentWrapper>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          InputProps={{
            // startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
      </ContentWrapper>
    </HomepageWrapper>
  );
}
