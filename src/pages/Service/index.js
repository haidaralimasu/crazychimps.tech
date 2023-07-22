import React, { useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const features = [
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
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Fast Refresh",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
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
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Analytics",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
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
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Datacenter security",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
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
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Build on your terms",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
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
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
      title: "Safe to use",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
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
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
      title: "Flexible",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
  ];

  const menuItems = [
    "United States of America",
    "Albania",
    "Algeria",
    "Andorra",
    "Argentina",
    "Armenia",
    "Austria",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Brazil",
    "Canada",
    "Colombia",
    "China",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Iraq",
  ];

  const [selectedItem, setSelectedItem] = useState({
    item: null,
    idx: null,
  });

  const [state, setState] = useState(false);

  const handleSearch = (e) => {
    const menuEls = document.querySelectorAll(".menu-el-js");
    const searchVal = e.target.value.toLocaleLowerCase();

    menuEls.forEach((el) => {
      el.classList.remove("hidden");
      if (!el.textContent.toLocaleLowerCase().includes(searchVal)) {
        el.classList.add("hidden");
      }
    });
  };

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="three_h text-3xl font-semibold sm:text-4xl">
              Let’s help power your SaaS
            </h3>
            <p className="mt-3 text-btnbrown">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus.
            </p>
          </div>
          <div className="absolute inset-0 max-w-xs mx-auto "></div>
        </div>
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className=" space-y-3 p-4 border rounded-md border-btnbrown border-b-4 border-l-4 hover:border-b-0 hover:border-l-0 hover:border-r-4 hover:border-t-4 hover:ease-in-out duration-300 bg-btnyellow"
              >
                <div className="text-btnbrown pb-3">{item.icon}</div>
                <h4 className="text-lg text-btnbrown font-semibold">
                  {item.title}
                </h4>
                <p className="text-btnbrown">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5 border p-4 mt-10 rounded-md border-btnbrown"
        >
          <div className="flex  flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
            <div>
              {/* <label className="font-medium">
                What is your Company/Buisness/Studio name ?
              </label> */}
              <input
                type="text"
                required
                placeholder="Your Company/Buisness/Studio name?"
                className="w-full mt-2 px-3 py-3  outline-none  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown shadow-sm rounded-md"
              />
            </div>
            <div>
              {/* <label className="font-medium">Last name</label> */}
              <input
                type="text"
                required
                placeholder="Your Company/Buisness Website"
                className="w-full mt-2 px-3 py-3  outline-none  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown shadow-sm rounded-md"
              />
            </div>
            <div>
              {/* <label className="font-medium">Last name</label> */}
              <input
                type="text"
                required
                placeholder="Your Full Name"
                className="w-full mt-2 px-3 py-3  outline-none  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown shadow-sm rounded-md"
              />
            </div>
          </div>

          <div className="flex  flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
            <div>
              <input
                type="text"
                required
                placeholder="Your Work Email"
                className="w-full mt-2 px-3 py-3  outline-none  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown shadow-sm rounded-md"
              />
            </div>

            <div className="mt-2">
              <button
                className="flex open_banana  items-center bg-primaryyellow justify-between w-full px-3 py-3 text-btnbrown  border-btnbrown border border-l-4 border-b-4 hover:border-l-0 hover:border-b-0 hover:border-r-4 hover:border-t-4 hover:ease-in-out duration-300  rounded-md shadow-sm cursor-default outline-none focus:border-indigo-600"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setState(!state)}
              >
                {selectedItem.item || "Select a country"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-btnbrown"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </button>

              {state ? (
                <div className="relative w-full bg-primaryyellow">
                  <ul
                    className="absolute w-full mt-3 bg-white border  rounded-md shadow-sm"
                    role="listbox"
                  >
                    <div className="shadow flex bg-primaryyellow rounded-md border border-btnbrown border-l-4 border-b-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-3 text-btnbrown"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search"
                        className="p-2 text-btnbrown placeholder-btnbrown bg-primaryyellow  w-full rounded-md outline-none"
                        onInput={handleSearch}
                      />
                    </div>
                    <div className="max-h-64 mt-2 bg-primaryyellow overflow-y-auto ">
                      {menuItems.map((el, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setSelectedItem({
                              item: el,
                              idx,
                            });
                            setState(false);
                          }}
                          role="option"
                          className={`${
                            selectedItem.idx == idx
                              ? "text-btnbrown bg-btnyellow"
                              : ""
                          } menu-el-js flex items-center justify-between open_banana px-3 cursor-default py-2 duration-150 text-btnbrown border-btnbrown  border rounded-md hover:text-btnbrown hover:bg-btnyellow`}
                        >
                          {el}
                          {selectedItem.idx == idx ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-btnbrown"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            ""
                          )}
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>

            <div>
              {/* <label className="font-medium">Last name</label> */}
              <input
                type="text"
                required
                placeholder="Your Full Name"
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
    </section>
  );
};

export default Service;
