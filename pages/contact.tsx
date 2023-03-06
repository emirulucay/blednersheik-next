import Layout from "components/Layout";
import { useFormik } from "formik";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Head from "next/head";
import { MainContext, useContext } from "context";
import Image from "next/image";

interface Values {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { handleSubmit, handleChange, values } = useFormik<Values>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { theme, themeValues } = useContext(MainContext);

  return (
    <>
      <Head>
        <title>Contact — blendersheik</title>
      </Head>
      <Layout>
        <div className="container mx-auto min-h-[80vh] flex mt-24 lg:mt-40 flex-wrap-reverse">
          {/* <div className="flex flex-col md:w-1/2 gap-8 w-full mt-12 md:mt-0">
            <h5 className="font-inter font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">Send Me a Message</h5>
            <form noValidate className="flex flex-col gap-8 mt-2" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-gray-200 font-inter font-semibold tracking-tight leading-none" htmlFor="namee">
                  Name
                </label>
                <input
                  className="h-[44px] w-[350px] text-gray-300 py-2 pl-4 font-inter font-medium focus:outline-0 focus:border-gray-100 hover:border-gray-100
                 focus:border-[1px] bg-darkbg rounded-md transition delay-none border-3a border-[.5px] duration-300 placeholder:text-zinc-600 valid:border-gray-100"
                  id="name"
                  placeholder="eg. Yahya Apaydın"
                  required
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-200 font-inter font-semibold tracking-tight leading-none" htmlFor="emaill">
                  Email
                </label>
                <input
                  className="h-[44px] w-[350px] text-gray-200 py-2 pl-4 font-inter font-medium focus:outline-0 focus:border-gray-100 hover:border-gray-100 focus:border-[1px]
                 bg-darkbg rounded-md transition delay-none border-3a border-[.5px] duration-300 placeholder:text-zinc-600 valid:border-gray-100"
                  id="email"
                  required
                  placeholder="yahya@example.com"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-200 font-inter font-semibold tracking-tight leading-none" htmlFor="messagee">
                  Message
                </label>
                <textarea
                  className="resize-none h-[88px] w-[350px] text-gray-200 py-2 pl-4 font-inter font-medium focus:outline-0 focus:border-gray-100 hover:border-gray-100
                focus:border-[1px] bg-darkbg rounded-md transition delay-none border-3a border-[.5px] duration-300 placeholder:text-zinc-600 valid:border-gray-100"
                  required
                  placeholder="type your message..."
                  id="message"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>

              <button className={`${themeValues[theme]?.bg} button-sm inline w-[90px] font-inter font-medium text-white`} type="submit">
                Send
              </button>
            </form>
          </div> */}
          <div className="flex flex-col gap-8 md:w-1/2 w-full">
            <h3 className="pageTitle md:text-3xl">Social Media</h3>
            <div className="flex gap-4 justify-start items-center mt-2">
              <FaLinkedin className="text-white text-5xl " />
              <div className="flex flex-col gap-1">
                <h2 className="text-gray-200 text-lg font-medium leading-none font-inter">Yahya Apaydın</h2>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${themeValues[theme]?.link} font-regular text-lg font-inter leading-none hover:underline hover:opacity-100 transition-all duration-200`}>
                  hire me
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <FaTwitter className="text-white text-5xl -translate-y-1" />
              <div className="flex flex-col gap-1">
                <h2 className="text-gray-200 text-lg font-medium leading-none font-inter">blendersheik</h2>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${themeValues[theme]?.link} font-regular text-lg font-inter leading-none hover:underline hover:opacity-100 transition-all duration-200`}>
                  follow me
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <FaInstagram className="text-white text-5xl -translate-y-1" />
              <div className="flex flex-col gap-1">
                <h2 className="text-gray-200 text-lg font-medium leading-none font-inter">blendersheik</h2>
                <a
                  href="https://instagram.com/blendersheik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${themeValues[theme]?.link} font-regular text-lg font-inter leading-none hover:underline hover:opacity-100 transition-all duration-200`}>
                  follow me
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center md:w-1/2 w-full">
            <Image
              className="rounded-lg"
              src="/images/contactSheik.jpg"
              alt="Blendersheik"
              width={350}
              height={350}
              priority
              quality={100}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
