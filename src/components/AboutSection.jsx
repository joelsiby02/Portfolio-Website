import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Computer Vision (CV)</li>
        <li>Natural Language Processing (NLP)</li>
        <li>Generative AI</li>
        <li>Flask</li>
        <li>Streamlit</li>
        <li>Langchain</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Programming Languages",
    id: "programming-languages",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B-Tech in CSE, Musaliar College of Engineering Patanamthitta</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [showContent, setShowContent] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setShowContent(true);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrollingDown && tab !== null) {
      setTab(null);
    }
  }, [isScrollingDown]);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setIsScrollingDown(currentPosition > scrollPosition);
    setScrollPosition(currentPosition);
  };

  const handleTabChange = (id) => {
    setTab((prevTab) => (prevTab === id ? null : id));

    // Scroll to the skills container when the "Skills" tab is clicked
    if (id === "skills") {
      const skillsContainer = contentRef.current;
      if (skillsContainer) {
        skillsContainer.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="about" className="bg-black-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="sm:flex items-center justify-between gap-16 max-w-screen-xl">
          <div className="sm:w-1/2">
            <div className="image object-center text-center">
              <img
                src="https://i.imgur.com/WbQnbas.png"
                alt="About Me"
                className="w-full max-w-xs sm:max-w-none"
              />
              <div className="mt-4 text-left flex-col h-full"></div>
            </div>
          </div>
          <div className="sm:w-1/2">
            <Transition
              show={showContent}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="text" ref={contentRef}>
                <h2 className="my-4 font-bold text-3xl sm:text-4xl font-serif">
                  About <span className="text-indigo-600">Me</span>
                </h2>
                <p className="text-white-700 font-serif text-lg sm:text-xl">
                  I'm a passionate student pursuing my Bachelor's degree in
                  Computer Science & Engineering (B.Tech), with a keen interest
                  in Data Science and Generative AI. Since childhood, I've been
                  fascinated by the idea of building intelligent systems that
                  can understand and interact with the world around us, just
                  like the iconic AI assistant, Friday, from the Iron Man.
                </p>
                <div className="mb-4"></div>
                <p className="text-white-700 font-serif text-lg sm:text-xl">
                  Driven by my passion for technology and innovation, I'm
                  constantly exploring new concepts and pushing the boundaries
                  of what's possible. Whether it's diving deep into machine
                  learning algorithms or experimenting with neural networks,
                  I'm always eager to learn and grow in the field of AI.
                </p>
                <div className="mb-4"></div>
                <p className="text-white-700 font-serif text-lg sm:text-xl">
                  In addition to my technical pursuits, I'm also dedicated to
                  fostering a collaborative and inclusive environment in the
                  tech community. I believe in the power of teamwork and
                  diversity to drive innovation and create positive change in
                  the world.
                </p>
                <div className="mb-4"></div>
                <p className="text-white-700 font-serif text-lg sm:text-xl">
                  Join me on this exciting journey as I continue to explore the
                  fascinating world of technology and work towards bringing my
                  dream of creating an AI companion to life. Together, we can
                  shape a future where technology enhances our lives in
                  meaningful and empowering ways.
                </p>
                <div className="flex flex-row justify-start mt-8">
                  {TAB_DATA.map((tabItem) => (
                    <TabButton
                      key={tabItem.id}
                      onClick={() => handleTabChange(tabItem.id)}
                      active={tab === tabItem.id}
                    >
                      {tabItem.title}
                    </TabButton>
                  ))}
                </div>
                <Transition
                  show={tab !== null}
                  enter="transition-opacity duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="mt-8" id="skills-container">
                    {tab && TAB_DATA.find((t) => t.id === tab)?.content}
                  </div>
                </Transition>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
