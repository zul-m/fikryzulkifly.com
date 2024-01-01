"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaTelegram } from "react-icons/fa";

export default function () {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/js",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="max-w-5xl p-4 mx-auto">
      <h1 className="items-center text-4xl font-bold text-center font-playfair md:text-5xl">
        HUBUNGI KAMI
      </h1>
      <div className="flex flex-col py-10 md:flex-row lg:justify-between">
        <div className="my-auto space-y-10 font-inter md:w-1/2">
          <p className="mx-1 text-center md:text-left text-l md:text-xl">
            Hubungi kami jika anda mempunyai sebarang pertanyaan, cadangan, atau
            maklum balas. Ikuti "listing" di saluran{" "}
            <a
              href="https://t.me/fzpropertylisting"
              rel="noreferrer"
              target="_blank"
              className="font-semibold text-teal-600 hover:text-teal-700"
            >
              Telegram
            </a>{" "}
            yang dikemaskini setiap hari.
          </p>
          <div className="flex flex-row items-center justify-center space-x-3 md:items-start md:justify-start">
            <FaPhoneAlt size={30} />
            <p>+60 17-651 5784</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-3 md:items-start md:justify-start">
            <FaEnvelope size={30} />
            <p>fikryzulkiflyproperty@gmail.com</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-3 md:items-start md:justify-start">
            <FaTelegram size={30} />
            <p>fzpropertylisting</p>
          </div>
        </div>
        <div className="my-auto md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 pt-4 mt-10 border rounded font-inter"
          >
            <div>
              <label htmlFor="fullname">
                Nama<span className="text-red-600">*</span>
              </label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                type="text"
                id="fullname"
                placeholder="Fikry Zulkifly"
              />
            </div>
            <div>
              <label htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                id="email"
                placeholder="fikryzulkiflyproperty@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message">
                Mesej / Pertanyaan<span className="text-red-600">*</span>
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="h-32"
                id="message"
                placeholder="Taip mesej anda di sini..."
              ></textarea>
            </div>
            <button
              className="p-3 mx-3 font-bold text-white bg-teal-600 rounded shadow-md hover:bg-teal-700 md:mx-5"
              type="submit"
            >
              Hantar
            </button>
            <div className="flex flex-col bg-slate-100">
              {error &&
                error.map((e) => (
                  <div
                    className={`${
                      success ? "text-green-800" : "text-red-600"
                    } px-5 py-2`}
                  >
                    {e}
                  </div>
                ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
