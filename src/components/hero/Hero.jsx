import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial : {
        x: -500,
        opacity: 0
    }, 
    animate : {
        x: 0,
        opacity: 1,
        transition : {
            duration : 1,
            staggerChildren : 0.1
        }
    },
    scrollButton : {
        opacity : 0,
        y: 10,
        transition : {
            duration : 2,
            repeat : Infinity,
        }
    }
}

const sliderVariants = {
    initial : {
        x: "-220%",
    }, 
    animate : {
        x: 0,
        transition : {
            duration : 10,
            repeat: Infinity,
            repeatType : "mirror"
        }
    },
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>KYLE SALAYSAY</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and Software Engineer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See My Projects</motion.button>
                    <motion.button variants={textVariants} className='contact'>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
            
        </div>
        <motion.div className="slidingContainer" variants={sliderVariants} initial="initial" animate="animate">
            Developer Engineer Ethical Hacker
        </motion.div>
        <div className="imageContainer">
            <img src="/pic.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero