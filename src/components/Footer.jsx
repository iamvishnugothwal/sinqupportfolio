import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    // { href: "/insight", label: "Insight" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-use", label: "Terms Of Use" },
    { href: "/refund-policy", label: "Refund Policy" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/sinqup.studio/",
      icon: <FaInstagram className="w-6 h-6" />,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/sinqup-studio/",
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "Instagram",
    },
    {
      href: "#",
      icon: <FaFacebook className="w-6 h-6" />,
      label: "Facebook",
    },
    {
      href: "#",
      icon: <FaYoutube className="w-6 h-6" />,
      label: "YouTube",
    },
    {
      href: "#",
      icon: <FaXTwitter className="w-6 h-6" />,
      label: "Twitter",
    },
  ];

  return (
    <footer className="w-full h-full my-5 border-t border-white/10 px-6 py-8 space-y-10">
      <div className="flex justify-between gap-5">
        <div className="max-w-7xl flex flex-col mx-auto w-full">
          <div className="relative w-[150px] md:w-[260px] h-[60px] md:h-[80px] ">
            <Image
              src={"/img/logo2.webp"}
              alt="SINQUP"
              fill
              className="object-contain "
            />
          </div>
          <div className="md:text-lg">For Those Who Dare to Grow.</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="mb-12">
          <div className="flex flex-col md:flex-row  items-center  gap-y-4">
            <div className="flex justify-start gap-5 md:gap-10 w-full ">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex  md:justify-end gap-5 md:gap-10 w-full ">
              {legalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-purple-500 hover:text-purple-300 transition-colors duration-200 text-sm cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-800">
          {/* Copyright */}
          <div className="text-gray-300 text-sm">
            © 2025 SINQUP. All rights reserved.
          </div>

          {/* Made with passion */}
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <span>Made with intention by</span>
            <Link href="https://sinqup.com" rel="noopener noreferrer">
              <Image
                src={"/img/logoicon.webp"}
                alt="SINQUP"
                width={15}
                height={10}
                className=""
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
