import "./services.scss"
import {motion, useInView} from "framer-motion"

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity: 1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
    }
}


const Services = () => {



    return <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
     <motion.div className="textContainer"variants={variants} initial="initial" animate="animate">
        <p>I focus on helping your brand grow
             <br/>and move forward</p>
        <hr/>

     </motion.div>
     <motion.div className="titleContainer" variants={variants} initial="initial" animate="animate">
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business</h1>
            <button>WHAT I DO?</button>
        </div>

     </motion.div>
     <motion.div className="listContainer" variants={variants} initial="initial" animate="animate">
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Web Dev and Design</h2>
            
            <p style={{paddingTop: "10px"}}>
            Specializing in creating visually appealing and functional websites, I use technologies like Angular, React, and JavaScript to deliver user-friendly, responsive, and performance-optimized web solutions. Whether for business, e-commerce, or personal blogs, my focus is on crafting sites that meet and exceed your unique requirements.
            </p>
            {/* <button>GO</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Android App Development</h2>
            <p style={{paddingTop: "10px"}}>
            With expertise in Android app development using Kotlin,
             I offer custom mobile app solutions that combine sleek
              design with efficient functionality. My approach involves
               crafting intuitive and engaging user experiences optimized
                for Android devices, ensuring that your app not only looks
                 great but also performs seamlessly on a wide range of devices.
            </p>
            {/* <button>GO</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Software Engineering</h2>
            <p style={{paddingTop: "10px"}}>
            As a software engineer with a strong foundation in Object-Oriented Programming (OOP), I provide comprehensive development services. Utilizing languages like Python, Java, and C#, I develop scalable, maintainable, and efficient software solutions. My expertise in OOP ensures the creation of robust applications with modular and reusable code.
            </p>
            {/* <button>GO</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Backend Solutions</h2>
            <p>
            I specialize in backend development, offering solutions that include database management, server-side scripting, and API integration. Using technologies like Django, AWS, and MySQL, I build secure, efficient, and scalable backend architectures that support the smooth functioning of your applications and platforms.
            </p>
            {/* <button>GO</button> */}
        </motion.div>
     </motion.div>
    </motion.div>;
  };
  
  
  
  export default Services;