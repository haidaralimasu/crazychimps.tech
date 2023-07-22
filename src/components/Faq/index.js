import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden  border border-btnbrown border-l-4 border-b-4 rounded-md bg-btnyellow "
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer  py-2 px-2 qa flex items-center justify-between text-lg text-btnbrown font-medium">
        {faqsList.q}
        {state ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 200 200"
            fill="none"
            className="open_banana"
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
            width="30"
            height="30"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="open_banana"
          >
            <g filter="url(#filter0_d_12_70)">
              <path
                d="M138.043 89.3443V84.2263C138.043 75.7481 147.171 70.1241 154.69 74.5489L181.496 90.3227C188.835 94.641 188.835 105.359 181.496 109.677L154.69 125.451C147.171 129.876 138.043 124.252 138.043 115.774V109.594C131.847 110.56 124.203 111.287 115.72 111.707C112.072 117.061 105.966 120.613 99 120.613C92.0562 120.613 85.9668 117.083 82.3152 111.759C73.866 111.369 66.22 110.678 59.9573 109.752L59.9573 115.774C59.9573 124.252 50.8295 129.876 43.3098 125.451L16.5039 109.677C9.16537 105.359 9.16536 94.641 16.5039 90.3227L43.3098 74.5489C50.8295 70.1241 59.9573 75.7481 59.9573 84.2263L59.9573 89.1862C66.4177 88.2316 74.3512 87.5263 83.1217 87.1435C86.8266 82.439 92.5464 79.3874 99 79.3874C105.476 79.3874 111.213 82.4601 114.917 87.1925C123.722 87.6066 131.653 88.3484 138.043 89.3443Z"
                fill="#6D3C1B"
              />
              <path
                d="M134.043 84.2263V84.7478C128.914 84.1078 123.099 83.6123 116.844 83.2835C112.433 78.4616 106.093 75.3874 99 75.3874C91.9345 75.3874 85.6156 78.4381 81.2065 83.228C74.952 83.5349 69.1231 84.0069 63.9573 84.621V84.2263C63.9573 72.8297 51.6173 65.0193 41.2812 71.1015L14.4753 86.8752C4.50823 92.7403 4.50824 107.26 14.4753 113.125L41.2812 128.898C51.6173 134.981 63.9573 127.17 63.9573 115.774V114.318C68.8584 114.9 74.3555 115.355 80.2452 115.662C84.6727 121.088 91.4002 124.613 99 124.613C106.627 124.613 113.376 121.063 117.803 115.603C123.692 115.275 129.176 114.798 134.043 114.191V115.774C134.043 127.17 146.383 134.981 156.719 128.898L183.525 113.125C193.492 107.26 193.492 92.7403 183.525 86.8752L156.719 71.1015C146.383 65.0193 134.043 72.8298 134.043 84.2263Z"
                stroke="white"
                stroke-width="8"
              />
            </g>
            <path
              d="M55.2873 103.168L52.9 102.696V105.13L52.9 116.57C52.9 119.966 49.2089 122.104 46.2451 120.397L19.216 104.828C16.2613 103.126 16.2613 98.8745 19.216 97.1725L46.2451 81.6028C49.2089 79.8956 52.9 82.0343 52.9 85.4304L52.9 95.8227V98.256L55.2873 97.7848C62.5302 96.3553 73.1855 95.2874 85.6052 94.8442L86.6812 94.8058L87.2416 93.8865C89.656 89.9259 94.0189 87.2857 99 87.2857C103.996 87.2857 108.37 89.9415 110.78 93.9215L111.337 94.8422L112.413 94.884C124.978 95.3726 135.649 96.5032 142.686 97.9939L145.1 98.5054V96.0373V85.4304C145.1 82.0343 148.791 79.8956 151.755 81.6028L178.784 97.1725C181.739 98.8745 181.739 103.126 178.784 104.828L151.755 120.397C148.791 122.104 145.1 119.966 145.1 116.57V104.915V102.447L142.686 102.958C135.76 104.426 125.313 105.544 113.002 106.045L111.826 106.093L111.297 107.144C109.036 111.636 104.378 114.714 99 114.714C93.6369 114.714 88.9896 111.653 86.7216 107.181L86.1892 106.131L85.0128 106.087C72.8456 105.631 62.414 104.574 55.2873 103.168Z"
              fill="#FCD900"
              stroke="#6D3C1B"
              stroke-width="4"
            />
            <defs>
              <filter
                id="filter0_d_12_70"
                x="3"
                y="63.961"
                width="196"
                height="71.0781"
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
                  result="effect1_dropShadow_12_70"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_12_70"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-btnbrown px-2 py-2 qa">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqsList = [
    {
      q: "How does the prompt-generating wizard work?",
      a: "The prompt-generating wizard utilizes pre created prompts templates to use the information provided by users. It then generates tailored prompt based on that information, offering unique ideas and customized prompt.",
    },
    {
      q: "Can I customize the prompts generated by the wizard?",
      a: "Absolutely! Our prompt-generating wizard is designed to be flexible. You can adjust settings, specify preferences, and even fine-tune the generated prompts to align with your specific needs and interests.",
    },
    {
      q: "What type of information does the wizard require from users?",
      a: "The wizard typically requires some basic information related to the creative project or topic of interest. This could include keywords, fields, or any specific details that you want the prompts to incorporate.",
    },
    {
      q: "Is this a chat bot?",
      a: "No! our prompt-genrating wizard will just give you prompts based on your inputs and you can use that prompt in any chatbot you like.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl three_h text-gray-800 font-semibold">
          Frequently Asked Questions !
        </h1>
        <p className="text-btnbrown max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
