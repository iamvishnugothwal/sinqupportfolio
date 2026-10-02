"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullNav, setShowFullNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileLogoBar, setShowMobileLogoBar] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const controlNavbar = () => {
      if (window.innerWidth < 1024) {
        // Mobile behavior
        if (window.scrollY <= 50) {
          setShowMobileLogoBar(true); // show logo bar
        } else {
          setShowMobileLogoBar(false); // hide logo bar after scroll
        }
        setIsScrolled(true); // always show hamburger in mobile
        return;
      }

      // Desktop behavior
      if (window.scrollY <= 10) {
        setShowFullNav(true);
        setIsScrolled(false);
      } else {
        setShowFullNav(false);
        setIsScrolled(true);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    window.addEventListener("scroll", controlNavbar);
    window.addEventListener("resize", controlNavbar);
    controlNavbar();

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("resize", controlNavbar);
    };
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "contact us", href: "/contact" },
    // { label: "Insights", href: "/insights" },
  ];

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: -10 },
  };

  const arrowVariants = {
    initial: { opacity: 0, x: -10 },
    hover: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Desktop Full Nav (all pages, only before scroll) */}
      <AnimatePresence>
        {showFullNav && !isMobile && (
          <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{ y: -80 }}
            transition={{ duration: 0.3 }}
            className={`hidden md:flex fixed top-0 w-full z-50 px-6 py-4 items-center justify-center
              ${
                isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
              }`}
          >
            <div className="flex w-full items-center justify-between ">
              {/* Logo */}
              <Link href="/">
                <div className="relative w-[200px] h-[100px]">
                  <Image
                    fill
                    src={"/img/logo2.webp"}
                    alt="Sinqup Studio Logo"
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Nav Links */}
              <div className="flex items-center gap-8 text-white">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative text-lg xl:text-lg font-primary uppercase text-white transition before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 before:bg-[#762ff0] before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="https://calendly.com/sinqup-studio/new-meeting"
                target="_blank"
                className="border-2 border-white px-4 py-2 rounded-lg text-white hover:bg-white hover:text-black transition font-medium"
              >
                Book A Call
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Logo Bar (only before scroll) */}
      {isMobile && showMobileLogoBar && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full px-6 bg-transparent z-40 flex items-center"
        >
          <Link href="/">
            <div className="relative w-[160px] sm:w-[200px] md:w-[280px] h-[100px] md:h-[140px]">
              <Image
                fill
                src={"/img/logo2.webp"}
                alt="Sinqup Studio Logo"
                className="object-contain"
              />
            </div>
          </Link>
        </motion.div>
      )}

      {/* Hamburger Button (Desktop after scroll / Mobile always) */}
      {(isScrolled && !showFullNav) || isMobile ? (
        <motion.button
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMenuOpen(true)}
          className="fixed text-2xl md:text-4xl top-6 right-3 sm:top-8 sm:right-10 z-50 p-3 sm:p-4 rounded-full bg-white text-black hover:opacity-80 shadow-xl shadow-black/40 cursor-pointer"
        >
          <FiMenu />
        </motion.button>
      ) : null}

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white px-5 lg:px-10"
          >
            {/* Close Button */}
            <button
              className="absolute text-2xl md:text-4xl top-6 right-3 sm:top-8 sm:right-10 z-50 p-3 cursor-pointer rounded-full bg-white text-black"
              onClick={() => setMenuOpen(false)}
            >
              <FiX size={40} />
            </button>

            {/* Nav Links */}
            <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto items-start pt-10">
              <div className="flex flex-col gap-10 md:gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                      className="flex items-center justify-center text-left w-max group cursor-pointer"
                    >
                      <motion.span className="duration-300 text-4xl sm:text-5xl uppercase md:text-7xl lg:text-8xl xl:text-5xl font-primary">
                        {link.label}
                      </motion.span>
                      <motion.span
                        variants={arrowVariants}
                        className="duration-100"
                      >
                        <FiArrowUpRight className="text-purple-500 xl:text-7xl" />
                      </motion.span>
                    </motion.div>
                  </a>
                ))}
              </div>
              <a
                href="https://calendly.com/sinqup-studio/new-meeting"
                target="_blank"
                className="border-3 border-white px-6 py-2 rounded-lg text-xl md:text-4xl lg:text-6xl xl:text-4xl text-white hover:bg-white hover:text-black transition my-5"
              >
                Book a Call
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 self-center items-center sm:items-start w-full max-w-7xl mx-auto">
              <a href="#" target="_blank">
                <FaXTwitter className="hover:text-blue-600 text-3xl md:text-5xl lg:text-7xl xl:text-4xl" />
              </a>
              <a
                href="https://www.instagram.com/sinqup.studio/"
                target="_blank"
              >
                <FaInstagram className="hover:text-pink-500 text-3xl md:text-5xl lg:text-7xl xl:text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/sinqup-studio/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-blue-500 text-3xl md:text-5xl lg:text-7xl xl:text-4xl" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
