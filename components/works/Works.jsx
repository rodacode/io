import './works.scss'
import Fade from 'react-reveal/Fade'

const Works = () => {
    return (
        <div className="works__container container">
            <Fade>
                <h1 className="text-center">OUR WORKS</h1>
            </Fade>
            <Fade bottom>
                <div class="works__cards__container">
                    <div className="card">
                        <h2>Le Parfum</h2>
                        <p>Web development with React.js, Next.js</p>
                    </div>
                    <div className="card">
                        <h2>Envases Take Away</h2>
                        <p>E-commerce site development and SEO campaign.</p>
                    </div>
                    <div className="card">
                        <h2>Audio Empathy</h2>
                        <p>We have what you need</p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Works