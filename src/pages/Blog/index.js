import React, { useState, useEffect } from "react";

const Blog = () => {
  const posts = [
    {
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      authorName: "Sidi dev",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
      authorName: "Luis",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
      img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Lourin",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl pb-12 md:px-8">
      <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
        <h1 className="three_h text-3xl  font-extrabold">Our Blog Posts</h1>

        <div className="max-w-sm flex items-center border m-auto border-btnbrown rounded-md p-1">
          <input
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            type="email"
            placeholder="Search Articles"
            className="w-full hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown p-2.5 outline-none py-3 px-4 rounded-md shadow  text_cur"
          />
          <button className="flex items-center border-btnbrown border-b-4 border-l-4 open_banana justify-center  py-3 px-4 text-btnbrown bg-btnyellow  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 font-medium duration-150 border rounded-md md:inline-flex">
            Search
          </button>
        </div>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border-btnbrown border-b-4 border-l-4 border bg-btnyellow hover:border-l-0 hover:border-b-0 hover:border-t-4 hover:border-r-4 rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md"
              />
              <div className="flex items-center mt-2 pt-3 mr-2">
                <div className="ml-3">
                  <span className="block text-btnbrown text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-btnbrown">{items.title}</h3>
                <p className="text-black text-sm mt-1">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
