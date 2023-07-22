import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "Support@example.com",
      link: "mailto:haidaralimasu123@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+1 (555) 000-000",
      link: "mailto:haidaralimasu123@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Mountain View, California, United State.",
      link: "mailto:haidaralimasu123@gmail.com",
    },
  ];

  return (
    <main className="py-14 bg-primaryyellow">
      <div className="max-w-screen-xl mx-auto px-4 text-btnbrown md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-btnbrown font-semibold">Contact</h3>
            <p className="three_h text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p className="text-btnbrown">
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <p className="flex-none text-btnbrown">{item.icon}</p>
                    <a
                      href={item.link}
                      className="text-btnbrown  hover:underline hover:ease-in-out duration-300"
                    >
                      {item.contact}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 border p-4 rounded-md border-btnbrown"
            >
              <div className="flex  flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                <div>
                  {/* <label className="font-medium">First name</label> */}
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    className="w-full mt-2 px-3 py-3  outline-none  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown shadow-sm rounded-md"
                  />
                </div>
                <div>
                  {/* <label className="font-medium">Last name</label> */}
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    className="w-full mt-2 px-3 py-3  outline-none  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown shadow-sm rounded-md"
                  />
                </div>
              </div>
              <div>
                {/* <label className="font-medium">Email</label> */}
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full mt-2 px-3 py-3  outline-none  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown shadow-sm rounded-md"
                />
              </div>
              <div>
                {/* <label className="font-medium">Message</label> */}
                <textarea
                  required
                  placeholder="Messege"
                  className="w-full mt-2 h-36 px-3 py-3 resize-none placeholder-btnbrown appearance-none border-btnbrown border-l-4 border-b-4 hover:border-l-0 hover:border-b-0 hover:border-t-4 hover:border-r-4 hover:ease-in-out duration-300 bg-primaryyellow outline-none border  shadow-sm rounded-md"
                ></textarea>
              </div>
              <Link
                to="/"
                className="flex border-b-4 w-full items-center border-btnbrown border-l-4   open_banana justify-center gap-x-2 py-3 px-4 text-btnbrown bg-btnyellow hover:border-l-0 hover:border-b-0 hover:border-r-4 hover:border-t-4 hover:ease-in-out duration-300 font-medium duration-150  border rounded-md md:inline-flex"
              >
                Explore Blogs
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_12_94)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34 100C34 92.6842 39.9544 86.7536 47.2995 86.7536L113.132 86.7536V83.9396C113.132 74.7622 123.107 69.0263 131.086 73.615L159.015 89.6754C166.995 94.2641 166.995 105.736 159.015 110.325L131.086 126.385C123.107 130.974 113.132 125.238 113.132 116.06V113.246H47.2995C39.9544 113.246 34 107.316 34 100Z"
                      fill="#6D3C1B"
                    />
                    <path
                      d="M47.2995 83.2536C38.0346 83.2536 30.5 90.738 30.5 100C30.5 109.262 38.0346 116.746 47.2995 116.746H109.646C110.131 128.235 122.738 135.223 132.831 129.419L160.76 113.359C171.08 107.424 171.08 92.5758 160.76 86.6413L132.831 70.5809C122.738 64.7771 110.131 71.7653 109.646 83.2536L47.2995 83.2536Z"
                      stroke="white"
                      stroke-width="7"
                    />
                  </g>
                  <path
                    d="M120.895 108.055V105.055H117.895H46.9558C44.2538 105.055 42 102.827 42 100C42 97.1729 44.2538 94.9448 46.9558 94.9448H117.895H120.895V91.9448L120.895 83.7227C120.895 80.8067 123.962 79.1174 126.326 80.4993L154.171 96.7766C156.61 98.2021 156.61 101.798 154.171 103.223L126.326 119.501C123.962 120.883 120.895 119.193 120.895 116.277V108.055Z"
                    fill="#FCD900"
                    stroke="#6D3C1B"
                    stroke-width="6"
                  />
                  <defs>
                    <filter
                      id="filter0_d_12_94"
                      x="27"
                      y="63.9932"
                      width="149"
                      height="71.0135"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="-1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_12_94"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_12_94"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
