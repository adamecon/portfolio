import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adams Okeyo</title>
        <meta name="description" content="Adams Okeyo: Developer Portfolio" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Adams Okeyo</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Adams Okeyo
            </h2>
            <h3 className="text-2xl py-2">Web And Mobile Developer</h3>
            <p>
              I'm Adams Okeyo and I'm a Web and Mobile Developer. Motivated and
              passionate professional with a strong drive for success. Skilled
              in various areas of web and mobile development, I bring expertise
              in MERN stack web development, leveraging React, MongoDB, Express,
              and Node.js to create scalable applications. Additionally, I
              possess proficiency in React Native for mobile development,
              harnessing the flexibility of the React ecosystem to transition
              seamlessly from web to mobile platforms. With a solid
              understanding of PHP Laravel framework, I am adept at building
              full-stack web applications, capitalizing on Laravel's
              developer-friendly features. Furthermore, I have a strong
              background in machine learning, encompassing PyTorch, TensorFlow,
              deep learning, data science, and natural language processing
              (NLP). This expertise allows me to analyze and preprocess data,
              construct machine learning models and neural networks, and train
              them to achieve accurate results. Committed to delivering
              exceptional solutions, I am deeply motivated and driven to excel
              in every project I undertake.
            </p>
          </div>
          <div>
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </section>
      </main>
    </div>
  );
}
