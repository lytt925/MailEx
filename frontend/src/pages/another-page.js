// pages/another-page.js
// just practicing server side rendering
import styled from "styled-components";

const StyledDiv = styled.div`
  color: red;
`;

function AnotherPage({ data }) {
  return (
    <StyledDiv>
      <h1>Another Page</h1>
      <p>Data: {data}</p>
    </StyledDiv>
  );
}

// This function gets called at build time
// The function name getServerSideProps is a special function recognized by Next.js for server-side rendering. 
export async function getServerSideProps(context) {

  // context contains request information, including the query parameters
  // console.log(context)

  // Fetch data from an API or perform server-side operations
  let data = "Hello World!"

  return {
    props: {
      data,
    },
  };
}

export default AnotherPage;
