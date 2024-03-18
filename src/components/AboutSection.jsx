import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";

// Component to render each icon as a link
const IconLink = ({ href, src, alt }) => (
  <a className="m-2" href={href} target="_blank" rel="noreferrer">
    <img src={src} width="36" height="36" alt={alt} />
  </a>
);

const AboutSection = () => {
  const [tab, setTab] = useState("about");
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
                  I&apos;m a passionate student pursuing my Bachelor&apos;s degree in
                  Computer Science &amp; Engineering (B.Tech), with a keen interest
                  in Data Science and Generative AI. Since childhood, I&apos;ve been
                  fascinated by the idea of building intelligent systems that
                  can understand and interact with the world around us, just
                  like the iconic AI assistant, Friday, from the Iron Man.
                </p>
                <div className="mb-4"></div>
                <p className="text-white-700 font-serif text-lg sm:text-xl">
                  Driven by my passion for technology and innovation, I&apos;m
                  constantly exploring new concepts and pushing the boundaries
                  of what&apos;s possible. Whether it&apos;s diving deep into machine
                  learning algorithms or experimenting with neural networks,
                  I&apos;m always eager to learn and grow in the field of AI.
                </p>
                <div className="mb-4"></div>
                <p className="text-white-700 font-serif text-lg sm:text-xl">
                  In addition to my technical pursuits, I&apos;m also dedicated to
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

                <div className="mt-8">
                  {/* Skills heading */}
                  <h4 className="text-center text-4xl font-bold mb-4">Skills</h4>
                  {/* Skills icons */}
                  <div className="flex justify-center flex-wrap">
                    {/* First row of icons */}
                    <div className="flex items-center justify-center mb-4">
                      <IconLink href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" alt="C" />
                      <IconLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" />
                      <IconLink href="https://www.oracle.com/java/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" alt="Java" />
                      <IconLink href="https://git-scm.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" />
                      <IconLink href="https://www.typescriptlang.org/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" alt="TypeScript" />
                      <IconLink href="https://www.python.org/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" alt="Python" />
                      <IconLink href="https://www.visualstudiocode.com" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" alt="VS Code" />
                      <IconLink href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" />
                      <IconLink href="https://reactjs.org/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" alt="React" />
                      <IconLink href="https://nextjs.org/docs" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg" alt="NextJs" />
                      <IconLink href="https://www.w3.org/TR/CSS/#css" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" />
                      <IconLink href="https://sass-lang.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" alt="Sass" />
                      <IconLink href="https://tailwindcss.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" alt="TailwindCSS" />
                    </div>
                    {/* Second row of icons */}
                    <div className="flex items-center justify-center">
                      <IconLink href="https://nodejs.org/en/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="NodeJS" />
                      <IconLink href="https://expressjs.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg" alt="Express" />
                      <IconLink href="https://fastapi.tiangolo.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg" alt="Fast API" />
                      <IconLink href="https://www.mysql.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="MySQL" />
                      <IconLink href="https://supabase.io/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg" alt="Supabase" />
                      <IconLink href="https://www.heroku.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" alt="Heroku" />
                      <IconLink href="https://firebase.google.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" alt="Firebase" />
                      <IconLink href="https://flask.palletsprojects.com/en/2.0.x/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored-dark.svg" alt="Flask" />
                      <IconLink href="https://www.adobe.com/uk/products/premiere.html" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/premierepro-colored-dark.svg" alt="Premiere Pro" />
                      <IconLink href="https://www.adobe.com/uk/products/photoshop.html" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored-dark.svg" alt="Photoshop" />
                      <IconLink href="https://www.figma.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" alt="Figma" />
                      <IconLink href="https://filebase.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/filebase-colored.svg" alt="Filebase" />
                      <IconLink href="https://cloud.google.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg" alt="Google Cloud" />
                      <IconLink href="https://wordpress.com" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/wordpress-colored.svg" alt="Wordpress" />
                      <IconLink href="https://wix.com" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/wix-colored.svg" alt="Wix" />
                      <IconLink href="https://www.djangoproject.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored-dark.svg" alt="Django" />
                      <IconLink href="https://aws.amazon.com" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored-dark.svg" alt="Amazon Web Services" />
                      <IconLink href="https://www.docker.com/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" alt="Docker" />
                      <IconLink href="https://www.linux.org" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" alt="Linux" />
                      <IconLink href="https://pytorch.org/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/pytorch-colored.svg" alt="PyTorch" />
                      <IconLink href="https://www.tensorflow.org/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg" alt="TensorFlow" />
                      <IconLink href="https://www.raspberrypi.org/" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/raspberrypi-colored.svg" alt="Raspberry Pi" />
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
