import './wedo.scss'
import Fade from 'react-reveal/Fade';

const Wedo = () => {
    return (
        <div className="wedo__container container">
            <Fade>
                <h1 className="text-center">THIS IS WHAT WE DO</h1>
            </Fade>
            <Fade>

                <div class="wedo__cards__container">
                    <div class="card__container">
                        <div className="card">
                            <svg class="card__svg" viewBox="0 0 800 500">

                                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#152C55" />
                                <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                            </svg>
                            <div class="card__content">
                                <h2>Create your e-commerce</h2>
                                <p>We can create your e-commerce site from scratch</p>
                            </div>
                        </div>
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