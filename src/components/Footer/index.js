import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { notifyDanger, notifySuccess } from "../../toasts";

const Footer = () => {
  // const [email, setEmail] = useState("");

  // const validateEmail = async (email) => {
  //   const errors = {};

  //   if (!email) {
  //     errors.email = "Email address required";
  //     await notifyDanger(errors.email);
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //     errors.email = "Invalid email address";
  //     await notifyDanger(errors.email);
  //   } else {
  //     try {
  //       await subscribe(email);
  //       await notifySuccess("Succesfully subscribed!");
  //     } catch (error) {
  //       await notifyDanger(error);
  //     }
  //   }
  // };

  const footerNavs = [
    {
      label: "Links",
      items: [
        {
          href: "/",
          name: "Home",
        },
        {
          href: "/blog",
          name: "Blog",
        },
        {
          href: "/about",
          name: "About",
        },
        {
          href: "/services",
          name: "Services",
        },
      ],
    },
    {
      label: "Contact",
      items: [
        {
          href: "mailto:contact@crazychimps.tech",
          name: "Mail Us",
        },
        {
          href: "mailto:team@crazychimps.tech",
          name: "Team",
        },
        {
          href: "mailto:help@crazychimps.tech",
          name: "Support",
        },
        {
          href: "mailto:help@crazychimps.tech",
          name: "WhatsApp",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          href: "/contact",
          name: "Contact",
        },
        {
          href: "/careers",
          name: "Careers",
        },
        {
          href: "/privacy-policy",
          name: "Privacy Policy",
        },
        {
          href: "/about",
          name: "About US",
        },
      ],
    },
  ];

  return (
    <div className="bg-primaryyellow close_banana">
      <footer className="text-btnbrown bg-primaryyellow px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <img src={logo} height="10px" className="w-20" />
              <p className="leading-relaxed mt-2 close_banana text-[15px]">
                Stay up to date with the roadmap progress, announcements and
                exclusive discounts feel free to sign up with your email.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="block pt-4 pb-2 close_banana">
                Stay up to date
              </label>
              <div className="max-w-sm flex items-center border border-btnbrown  rounded-md p-1">
                <input
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown p-2.5 outline-none py-3 px-4 rounded-md shadow mr-1 text_cur"
                />
                <button className="flex items-center border-btnbrown border-b-4 border-l-4 open_banana justify-center gap-x-2 py-3 px-4 text-btnbrown bg-btnyellow  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 font-medium duration-150 border rounded-md md:inline-flex">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1 display-flex mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-btnbrown underline underline-offset-8 font-medium">
                  {item.label}
                </h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      to={el.href}
                      className="hover:underline text-btnbrown hover:text-btnbrown"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t border-btnbrown items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0 ">
            &copy; 2023 Crazy Chimps Tech All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border-btnbrown border border-b-4 border-l-4 hover:border-t-4 hover:border-r-4 hover:border-l-0 hover:border-b-0 hover:ease-in-out duration-300 bg-btnyellow rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <svg
                    class="svg-icon w-6 h-6 text-btnbrown"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border-btnbrown border border-b-4 border-l-4 hover:border-t-4 hover:border-r-4 hover:border-l-0 hover:border-b-0 hover:ease-in-out duration-300 bg-btnyellow rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <svg
                    class="svg-icon w-6 h-6 text-btnbrown"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border-btnbrown border border-b-4 border-l-4 hover:border-t-4 hover:border-r-4 hover:border-l-0 hover:border-b-0 hover:ease-in-out duration-300 bg-btnyellow rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border-btnbrown border border-b-4 border-l-4 hover:border-t-4 hover:border-r-4 hover:border-l-0 hover:border-b-0 hover:ease-in-out duration-300 bg-btnyellow rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;
