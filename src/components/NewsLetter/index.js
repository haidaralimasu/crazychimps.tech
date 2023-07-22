import React, { useState } from "react";
// import { subscribe } from "../../helpers";
// import { notifySuccess, notifyDanger } from "../../toasts";

const NewsLetter = () => {
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

  return (
    <section className="py-14 max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden mx-4 px-4 py-14  bg-primaryyellow   border-btnbrown border-l-4 border-b-4 rounded-md bg-btnyewllow md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center ">
          <div className="space-y-3">
            <h3 className="text-3xl three_h font-bold">
              Subscribe to our newsletter
            </h3>
            <p className="text-btnbrown leading-relaxed">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
          </div>
          <div className="mt-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center bg-primaryyellow rounded-lg p-1 sm:max-w-md sm:mx-auto"
            >
              <input
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                type="email"
                placeholder="Enter your email"
                className="w-full hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 border-b-4 border-l-4 bg-primaryyellow border border-btnbrown placeholder-btnbrown p-2.5 outline-none py-3 px-4 rounded-md shadow mr-1 text_cur"
              />
              <button className="flex items-center border-btnbrown border-b-4 border-l-4 open_banana justify-center gap-x-2 py-3 px-4 text-btnbrown bg-btnyellow  hover:border-t-4 hover:border-r-4  hover:border-b-0 hover:border-l-0 hover:ease-in-out duration-300 font-medium duration-150  border rounded-md md:inline-flex">
                Subscribe
              </button>
            </form>
            <p className="mt-3 max-w-lg text-[15px] text-btnbrown sm:mx-auto">
              No spam ever, we are care about the protection of your data.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "btnyellow",
          }}
        ></div>
      </div>
    </section>
  );
};

export default NewsLetter;
