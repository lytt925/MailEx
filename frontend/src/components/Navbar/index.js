import Link from 'next/link';
import styled from 'styled-components';


export const Navbar = () => {
  return (
    <NavbarWrapper>
      <ProfileIcon />
      <MailIcon />
      <ExploreLink href={'/'}>
        Explore
      </ExploreLink>
    </NavbarWrapper>
  );
}


function IconMailoutline(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}

function IconAccountcircle(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
    </svg>)
  );
}


const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F5DEB3;
    padding: 1rem 1.5rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  `;


const ProfileIcon = styled(IconAccountcircle)`
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
    color: #8B4513;
  `

const MailIcon = styled(IconMailoutline)` 
    color: #8B4513;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
  `

const ExploreLink = styled(Link)`
      color: #8B4513;
      font-weight: 700;
  `