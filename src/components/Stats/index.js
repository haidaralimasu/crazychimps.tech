import React from "react";

const Stats = () => {
  const stat = [
    {
      data: "60+",
      title: "Projects Completed",
    },
    {
      data: "100+",
      title: "Happy Clients",
    },
    {
      data: "5M+",
      title: "Total Value Added",
    },
  ];

  return (
    <section className="pb-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="three_h text-3xl font-semibold sm:text-4xl">
            Our Clients Are Always Happy {":)"}
          </h3>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            {stat.map((item, idx) => (
              <li
                key={idx}
                className="w-full text-center bg-btnyellow border-btnbrown border border-l-4 border-b-4 px-12 py-4 rounded-lg sm:w-auto"
              >
                <h4 className="text-4xl text-btnbrown font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 text-btnbrown font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;
