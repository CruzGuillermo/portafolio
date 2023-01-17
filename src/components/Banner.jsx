import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Typed from 'react-typed';
import foto from "../assets/foto.jpg";

const Banner = () => {

    const [t] = useTranslation("global");

    return (
        <>
            <section className="container mx-auto lg:px-16">
                <div className="banner_container">
                    <input type="checkbox" id="banner_image-click" />
                    <label htmlFor="banner_image-click">
                        <div className="banner_image">

                            <div className="card_face card_face--front">
                                <img src={foto} alt="Foto personal" />
                            </div>

                            <div className="card_face card_face--back">
                                <a href="https://www.linkedin.com/in/guillermo-cruzbeliz/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-secondary" />
                                    <span>cruzguillermo</span>
                                </a>

                                <a href="mailto:guillermobelizcruz98@gmail.com" target="_blank">
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-secondary" />
                                    <span>guillermocruz98@gmail.com</span>
                                </a>

                                <a href="https://github.com/CruzGuillermo" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} className="text-2xl text-secondary" />
                                    <span>cruzguillermo</span>
                                </a>
                            </div>
                        </div>
                    </label>

                    <div className="banner_text-container">
                        <h2>{t("banner.greeting")}</h2>
                        <h1>{t("banner.name")}</h1>
                        <h2>{(  <Typed
                    strings={[
                        "Full Stack Developer",
                      "Front End Developer",
                      "Back End Developer",
                    //   "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />)}</h2>
                    </div>
                </div>

                <div className="box">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Banner;