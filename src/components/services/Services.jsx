import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          I specialize in developing visually appealing, functional websites using Angular, React, and JavaScript. My expertise lies in delivering user-friendly, responsive, and performance-optimized web solutions for businesses, e-commerce, or personal blogs. 
          I am committed to crafting sites that precisely meet and exceed your specific needs.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Engineering</h2>
          <p>
          As a software engineer skilled in Object-Oriented Programming (OOP), 
          I offer development services using Python, Java, and C#. My focus is on creating scalable, maintainable, 
          and efficient software solutions with robust, modular, and reusable code.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
          I focus on backend development, providing solutions in database management, server-side scripting, and API integration. Utilizing Django, AWS, and MySQL, I create secure, efficient, 
          and scalable backend architectures to ensure the smooth operation of your applications and platforms.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Andriod Applications</h2>
          <p>
          I specialize in Android app development using Kotlin, delivering custom solutions with sleek design and efficient functionality. 
          My focus is on intuitive, engaging user experiences, optimized for Android devices.
           The goal is to ensure your app looks great and performs seamlessly on a variety of devices.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;