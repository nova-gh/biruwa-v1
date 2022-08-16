import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState(false);
  const submitContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    setLoading(false);
    if (!result.error) {
      toast.success(`Email sent from ${result.entry.email}`);
      setSucessMessage(true);
    } else {
      toast.error(result.message);
    }
    setName("");
    setEmail("");
    setMessage("");
    setSucessMessage(true);
  };
  return (
    <div className="py-20 ">
      <div className="flex flex-col items-center cont">
        <h2 className="text-3xl font-bold underline lg:text-4xl text-brand underline-offset-[10px] text-center w-full">
          Contact
        </h2>
        <form
          className="flex flex-col w-full max-w-lg p-4 my-10 space-y-6 border-2 rounded-md border-brand-light"
          onSubmit={submitContact}
        >
          <fieldset className="flex flex-col ">
            <label htmlFor="name" className="mb-2 text-text-dark ">
              Name
            </label>
            <div className="flex items-center mt-2 space-x-2">
              <svg
                width="24"
                height="24"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="text-brand-light"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className="w-full h-12 px-4 mb-2 overflow-hidden text-gray-700 placeholder-gray-500 capitalize border-b xl:text-lg focus:rounded-lg outline-brand-light border-brand-light "
                type="name"
                id="name"
                name="name"
                placeholder="Birwa Plants "
              />
            </div>
          </fieldset>
          <fieldset className="flex flex-col ">
            <label htmlFor="email" className="mb-2 text-text-dark">
              Email
            </label>
            <div className="flex items-center mt-2 space-x-2">
              <svg
                width="24"
                height="24"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="text-brand-light"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 9L12 12.5L17 9"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 px-4 mb-2 overflow-hidden text-gray-700 placeholder-gray-500 border-b xl:text-lg focus:rounded-lg outline-brand-light border-brand-light "
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="birwaplants@gmail.com"
              />
            </div>
          </fieldset>
          <fieldset className="flex flex-col ">
            <label htmlFor="message" className="mb-2 text-text-dark ">
              Message
            </label>
            <div className="flex mt-2 space-x-2">
              <svg
                width="24"
                height="24"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="my-2 text-brand-light"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12L17 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 8L13 8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              <textarea
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 overflow-hidden text-gray-700 placeholder-gray-500 border-b h-28 xl:text-lg focus:rounded-lg outline-brand-light border-brand-light "
                type="text"
                id="message"
                name="message"
                placeholder="Message...."
                value={message}
              />
            </div>
          </fieldset>
          <div className="flex">
            {sucessMessage && <p className="text-brand">Email Sent!</p>}
            <button
              type="submit"
              disabled={loading || !name || !email || !message}
              className="px-4 py-2 ml-auto font-bold text-white rounded-lg btn-hover bg-brand/80 hover:bg-brand w-max disabled:bg-gray-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
