import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <div className="textContainer">
                <h2>Kyle Salaysay</h2>
                <h1>Web Developer and Software Engineer</h1>
                <div className="button-section">
                    <button>See my Latest Work</button>
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
        <div className="imageContainer">
            <img src="/hero.png" alt="iamge" />
        </div>
    </div>
  )
}

export default Hero