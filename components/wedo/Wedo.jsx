import './wedo.scss'
import Fade from 'react-reveal/Fade';

const Wedo = () => {
    return (
        <div className="wedo__container container">
            <Fade>
            <h1 className="text-center">THIS IS WHAT WE DO</h1>
            </Fade>
            <Fade bottom>

            <div class="wedo__cards__container">
                <div className="card">
                    <h2>Create your e-commerce</h2>
                    <p>We can create your e-commerce site from scratch</p>
                </div>
                <div className="card">
                    <h2>Your e-commerce API integrations</h2>
                    <p>We connect your store with third party services and providers</p>
                </div>
                <div className="card">
                    <h2>Mobile phone Apps</h2>
                    <p>We have what you need</p>
                </div>
            </div>
            </Fade>

        </div>

    )
}

export default Wedo