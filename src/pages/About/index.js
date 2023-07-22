import React from "react";
import { Link } from "react-router-dom";
import { Team } from "../../components";

const About = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex max-w-screen-xl px-4 mx-4 ">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="md:max-w-lg sm:rounded-lg border-btnbrown border-b-4 border-l-4"
              alt=""
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="three_h text-3xl font-semibold sm:text-4xl">
              About Crazy Chimps Technologies
            </p>
            <p className="mt-3 text-btnbrown">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum, sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium
            </p>
            <Link
              to="/"
              className="flex border-b-4 items-center border-btnbrown border-l-4   open_banana justify-center gap-x-2 py-3 px-4 text-btnbrown bg-btnyellow hover:border-l-0 hover:border-b-0 hover:border-r-4 hover:border-t-4 hover:ease-in-out duration-300 font-medium duration-150  border rounded-md md:inline-flex"
            >
              Know More
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
          </div>
        </div>
        <div className="mt-12 max-w-screen-xl px-4 ">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-btnyellow border-btnbrown border-l-4 border-b-4 p-4  rounded-md"
              >
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img src={item.avatar} className="w-16 h-16 rounded-full" />
                    <div>
                      <span className="block text-btnbrown font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-btnbrown text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-btnbrown">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        <Team />
      </div>
    </section>
  );
};

export default About;
