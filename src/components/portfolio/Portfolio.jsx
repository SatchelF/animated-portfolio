import "./portfolio.scss"
import {useRef} from "react"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
const items = [
    {
        id:1,
        title: "Ai-Enhanced Flashcards",
        img: "https://media.istockphoto.com/id/92005495/photo/male-hand-holding-stack-of-flash-cards.jpg?b=1&s=612x612&w=0&k=20&c=0P5H9lIvTqzORcwJhLvX2NVQ8VDu4ldqlec66FLZ_qs=",
        desc: "AI-Enhanced Flashcards is a dynamic study tool that blends a user-friendly flashcard interface with AI-powered hints and analytics. Built on Firebase, it enables users to create, study, and track their learning with insights on time and hint usage, optimizing each study session. ",
        demo:"https://www.youtube.com/watch?v=6qvis2pEO0g&t=77s",
        location:"See Demo"
    },
    {
        id:2,
        title: "Dans Auto Barn",
        img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "DriveRentals is an innovative mock car rental website, leveraging the seamless integration of React's dynamic front-end and Django's robust back-end. It offers users a streamlined experience for renting cars, featuring an intuitive interface for vehicle selection and booking. Additionally, it includes a comprehensive management system for car owners to list vehicles and for admins to oversee employee information, ensuring efficient operation and user convenience.",
        demo:"https://github.com/SatchelF/Auto-Shop",
        location:"View Code"
    },
    {
        id:3,
        title: "Spy Chat Website",
        img: "https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "SpyChat is an innovative chat application that blends React's dynamic UI with SocketIO's real-time communication, all powered by an Express server. It features encrypted messaging, where users encrypt and decrypt messages using a shared passphrase, ensuring secure and private conversations. This project offers a unique and interactive way to experience web development and encryption.",
        demo:"https://github.com/SatchelF",
        location:"View Code"
    },



];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.demo} target="_blank">
                <button>{item.location}</button>
                </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
  export default Portfolio;