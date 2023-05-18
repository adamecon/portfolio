import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

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
            <p className="text-md py-5 leading-8 text-gray-800">
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
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">What I Bring</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              With a passion for creating dynamic and user-friendly
              applications, I excel{" "}
              <span className="text-teal-500">
                in front-end development, utilizing HTML, CSS, and JavaScript
                frameworks
              </span>
              . I possess expertise in responsive design and optimizing
              performance across various platforms. My strong problem-solving
              skills enable me to troubleshoot and debug code efficiently.
              Additionally, I have experience working with{" "}
              <span className="text-teal-500">
                back-end technologies such as Node.js and databases like MySQL
                and MongoDB
              </span>
              . I am a collaborative team player, dedicated to delivering
              high-quality results within project deadlines. Together, let us
              build innovative and impactful digital experiences.
            </p>
          </div>
          <div>
            <div>
              <Image src={code} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
