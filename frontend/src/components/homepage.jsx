/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/hlP72O3fLFG
 */
import Link from "next/link";

export function Homepage() {
  return (
    (<div key="1" className="bg-[#FFFAF0] dark:bg-[#3B2922] h-screen">
      <nav
        className="flex justify-around items-center bg-[#F5DEB3] dark:bg-[#73563D] py-4 px-6 shadow-md">
        <IconAccountcircle className="text-[#8B4513] dark:text-[#FFDEAD] text-2xl" />
        <IconMailoutline className="text-[#8B4513] dark:text-[#FFDEAD] text-2xl" />
        <Link className="text-[#8B4513] dark:text-[#FFDEAD] font-bold" href="#">
          Find a penpal
        </Link>
      </nav>
      <section className="w-full py-12 flex justify-center">
      </section>
    </div>)
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


function IconFilterlist(props) {
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
      <path d="M3 6h18" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </svg>)
  );
}


function IconSearch(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
