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
      label: "Company",
      items: [
        {
          href: "/",
          name: "Partners",
        },
        {
          href: "/blog",
          name: "Blog",
        },
        {
          href: "/",
          name: "Team",
        },
        {
          href: "/",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "/",
          name: "Contact",
        },
        {
          href: "/",
          name: "Support",
        },
        {
          href: "/",
          name: "Docs",
        },
        {
          href: "/",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "/",
          name: "Terms",
        },
        {
          href: "/",
          name: "License",
        },
        {
          href: "/",
          name: "Privacy",
        },
        {
          href: "/",
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
                  className="w-full border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown p-2.5 outline-none py-3 px-4 rounded-md shadow mr-1 text_cur"
                />
                <button className="flex items-center border-btnbrown border-b-4 border-l-4 open_banana justify-center gap-x-2 py-3 px-4 text-btnbrown bg-btnyellow  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 font-medium duration-150 active:bg-gray-100 border rounded-md md:inline-flex">
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
        <div className="mt-8 py-6 border-t  border-btnbrown items-center justify-center sm:flex">
          <div className="mt-4 sm:mt-0 three_h">
            &copy; 2023 Crazy Chimps Technologies All rights reserved.
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
