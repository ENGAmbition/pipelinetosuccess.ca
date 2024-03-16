import { FC, JSX } from "react";
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

const FooterSection: FC = (): JSX.Element => {
  return (
    <div className="Footer" style={{ width: "100%", backgroundColor: "#f5fbfc", paddingBottom: "4rem" }}>
      <div className="container" style={{ marginLeft: "auto", marginRight: "auto", paddingLeft: "3rem", paddingRight: "2rem", maxWidth: "1300px" }}>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col items-left py-20 text-brand-neutral-600">
              <h3 className="mb-4">
                <Image
                  src="/pipeline-logo.webp"
                  alt="Pipeline To Success Logo"
                  width={150}
                  height={47.07}
                />
              </h3>
              <p className="text-left md:text-left">
                Connecting academia and career with practical experiences that shape the future of students at Guelph and beyond.
              </p>
              <div className="flex mt-4">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="mr-2">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="mr-2">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-left py-20 text-black text-lg">
              <h5 className="mb-4">Resources</h5>
              <ul className="list-disc pl-4 text-sm text-brand-neutral-600">
                <li className="nav-item">
                  <a className="" href="/">Tutorials</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">News</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-left py-20 text-black text-lg">
              <h5 className="mb-4">Company</h5>
              <ul className="list-disc pl-4 text-sm text-brand-neutral-600">
                <li className="nav-item">
                  <a className="" href="/">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Career</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-left py-20 text-black text-lg">
              <h5 className="mb-4">Stay Up to Date</h5>
              <a className="text-sm text-brand-neutral-600" href="/">Subscribe to our newsletter</a><br />
              <div className="flex items-center">
                <input type="email" placeholder="Email" className="text-sm text-black px-4 py-2 rounded-md" style={{ minWidth: "150px", backgroundColor: "#c1d8db"}} />
                <button className="bg-gray-300 text-black px-4 py-2 rounded-md" style={{ background: "transparent", border: "none" }}>
                  <FaArrowRight size={20} style={{ background: "transparent" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="FooterLine">
          <hr className="border-gray-400 my-2" style={{ width: "100%" }} />
        </div>
        <div className="FooterLine flex justify-between text-sm text-brand-neutral-600" style={{ marginTop: "2rem" }}>
          <div>@2024 Pipeline Ltd, all rights reserved</div><br />
          <div>
            <a href="/privacy-policy" className="mr-4 text-sm text-brand-neutral-600">Privacy Policy</a> 
            <a href="/terms-of-use" className="mr-4 text-sm text-brand-neutral-600">Terms of Use</a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
