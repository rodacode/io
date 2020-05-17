import './team.scss'
import Fade from 'react-reveal/Fade'


const Team = () => {
    return (
        <div className="team__container container">
            <Fade>
                <h1 className="text-center">TEAM</h1>
            </Fade>
            <Fade>
                <div class="team__cards__container">
                    <div className="card">
                        <h2>Nicolás Hardmeier</h2>
                        <p>Frontend Developer. React specialist.</p>
                    </div>
                    <div className="card">
                        <h2>Fidel Iranzo</h2>
                        <p>Graphic Designer / UX Designer</p>
                    </div>
                </div>
            </Fade>
        </div>

    )
}

export default Team