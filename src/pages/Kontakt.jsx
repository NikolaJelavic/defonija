import Footer from "../components/Footer";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";




export default function Kontakt() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "",
          "",
          form.current,
          ""
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    

    return (
        <>
            <div className="flex justify-center items-center flex-col">
        <h1 className="sm:text-2xl mt-3 sm:w-1/3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi, eius quo natus architecto ipsam ab tenetur rem maxime nostrum, vero reprehenderit repellendus? Neque quasi voluptatem culpa alias molestiae voluptatibus.
        </h1>
     
      
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg my-10"
      >
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Ime</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-blue-500"
            placeholder=""
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Poruka</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-blue-500"
            placeholder=""
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-slate-500 rounded hover:bg-slate-700 focus:outline-none focus:bg-blue-600 mb-6"
          />
        </div>
      </form>
            <Footer/>
        </>
    )
};
