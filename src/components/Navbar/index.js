import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Playground", path: "/playground" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-primaryyellow w-full border-b close_banana md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link className="open_banana" to="/">
            <div>
              <img src={logo} width={50} height={50} alt="Crazy Chimps Logo" />
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  className="open_banana"
                  width="40"
                  height="40"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_25_158)">
                    <path
                      d="M38.3393 38.3393C45.4585 31.2202 57.0008 31.2202 64.1199 38.3393L100.5 74.7194L136.88 38.3394C143.999 31.2202 155.542 31.2202 162.661 38.3393C169.78 45.4585 169.78 57.0008 162.661 64.1199L126.281 100.5L162.661 136.88C169.78 143.999 169.78 155.542 162.661 162.661C155.542 169.78 143.999 169.78 136.88 162.661L100.5 126.281L64.1199 162.661C57.0008 169.78 45.4584 169.78 38.3394 162.661C31.2202 155.542 31.2202 143.999 38.3393 136.88L74.7194 100.5L38.3393 64.1199C31.2202 57.0008 31.2202 45.4585 38.3393 38.3393Z"
                      fill="#6D3C1B"
                    />
                  </g>
                  <path
                    d="M156.225 58.1713L113.897 100.5L156.225 142.829C159.925 146.528 159.925 152.526 156.225 156.225C152.526 159.925 146.528 159.925 142.829 156.225L100.5 113.897L58.1713 156.225C54.4719 159.925 48.474 159.925 44.7746 156.225C41.0751 152.526 41.0751 146.528 44.7746 142.829L87.1032 100.5L44.7746 58.1713C41.0751 54.4719 41.0751 48.474 44.7746 44.7746C48.474 41.0751 54.4719 41.0751 58.1713 44.7746L100.5 87.1032L142.829 44.7746C146.528 41.0751 152.526 41.0751 156.225 44.7746C159.925 48.474 159.925 54.4719 156.225 58.1713Z"
                    fill="#FCD900"
                  />
                  <defs>
                    <filter
                      id="filter0_d_25_158"
                      x="33"
                      y="32"
                      width="139"
                      height="136"
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
                        result="effect1_dropShadow_25_158"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_25_158"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              ) : (
                <svg
                  className="open_banana"
                  width="40"
                  height="40"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_12_66)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M72.7853 56.6301C72.7853 52.7641 75.9193 49.6301 79.7853 49.6301H119.611C123.477 49.6301 126.611 52.7641 126.611 56.6301V73.5419H143.507C147.373 73.5419 150.507 76.6759 150.507 80.5419V120.395C150.507 124.261 147.373 127.395 143.507 127.395H126.611V144.307C126.611 148.173 123.477 151.307 119.611 151.307H79.7853C75.9193 151.307 72.7853 148.173 72.7853 144.307V127.395H55.8896C52.0237 127.395 48.8896 124.261 48.8896 120.395V80.5419C48.8896 76.6759 52.0237 73.5419 55.8896 73.5419H72.7853V56.6301Z"
                      fill="#6D3C1B"
                    />
                    <path
                      d="M79.7853 46.1301C73.9863 46.1301 69.2853 50.8311 69.2853 56.6301V70.0419H55.8896C50.0907 70.0419 45.3896 74.7429 45.3896 80.5419V120.395C45.3896 126.194 50.0907 130.895 55.8896 130.895H69.2853V144.307C69.2853 150.106 73.9863 154.807 79.7853 154.807H119.611C125.41 154.807 130.111 150.106 130.111 144.307V130.895H143.507C149.306 130.895 154.007 126.194 154.007 120.395V80.5419C154.007 74.7429 149.306 70.0419 143.507 70.0419H130.111V56.6301C130.111 50.8311 125.41 46.1301 119.611 46.1301H79.7853Z"
                      stroke="white"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_12_66"
                      x="41.8896"
                      y="41.6301"
                      width="119.617"
                      height="116.677"
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
                        result="effect1_dropShadow_12_66"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_12_66"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8  md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center ease-in-out duration-300 space-y-8 md:flex  md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-black monkey">
                  <Link
                    className="monkey text-btnbrown hover:underline hover:ease-in-out duration-300 underline-offset-8 text-md  open_banana ease-in-out duration-300 "
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block border-primaryyellow hover:border-btnbrown">
          <Link
            to="/"
            className="flex items-center border-btnbrown border-b-4 border-l-4 open_banana justify-center gap-x-2 py-3 px-4 text-btnbrown bg-btnyellow  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 font-medium duration-150 active:bg-gray-100 border rounded-md md:inline-flex"
          >
            Explore More
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
