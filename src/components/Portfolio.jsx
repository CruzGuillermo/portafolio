import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';
import ecommerce from "../assets/Pf-HenryMusic.jpeg";
import piDogs from "../assets/Pi-Dogs.jpeg";
import portafolio from "../assets/portafolio.jpeg";

const Portfolio = () => {

    const [t] = useTranslation("global");

    useEffect(() => {
        ScrollReveal().reveal('#title_portfolio', {
            delay: 350,
        });
        ScrollReveal().reveal('#sub_portfolio', {
            delay: 400,
        });
        ScrollReveal().reveal('.portfolio_container', {
            delay: 500,
        });
    }, [])

    return (
        <>
            <section className="container mx-auto px-16 mobile_padding" id="portfolio">
                <div className="about_title" id="title_portfolio">
                    <h2 className='mt-24'>Portfolio</h2>
                </div>

                <div className='flex justify-center items-center text-white font-poppins text-xl text-center' id="sub_portfolio">
                    <h3>{t("portfolio.title")}</h3>
                </div>

                <div className="portfolio_container">
                    <div className="portfolio__item">
                        <picture>
                            <source type="image/jpeg" srcSet={ecommerce}></source>
                            <img className="portfolio__img" alt="Portfolio item - Ecommerce"></img>
                        </picture>
                            <div className="portfolio__description">
                                <h3 className="portfolio__description-title">E-Commerce - Henry Music</h3>
                                <p className="portfolio__description-text">
                                    React, Redux, Node, Express, Sequelize, PostgreSQL, Css, Bootstrap, Tailwind
                                </p>
                                <div className="buttons__container">
                                    <a className="button" href="https://henry-instruments-one.vercel.app/" aria-label="Sitio 1" target="_blank">
                                        <FontAwesomeIcon icon={faEarthAmerica} />
                                        <span>{t("portfolio.website")}</span>
                                    </a>
                                    <a className="button" href="https://github.com/CruzGuillermo/henry_instruments" aria-label="Repo 1" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>{t("portfolio.repository")}</span>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <div className="portfolio__item">
                        <picture>
                            <source type="image/jpeg" srcSet={piDogs}></source>
                            <img className="portfolio__img" alt="Portfolio item - Asteroids"></img>
                        </picture>
                            <div className="portfolio__description">
                                <h3 className="portfolio__description-title">Pi - Dogs</h3>
                                <p className="portfolio__description-text">
                                    React, Redux, Node, Express, Sequelize, PostgreSQL, Css puro
                                </p>
                                <div className="buttons__container">
                                    <a className="button" href="https://github.com/CruzGuillermo/Pi-Dogs-Henry" aria-label="Repo 2" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>{t("portfolio.repository")}</span>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <div className="portfolio__item">
                        <picture>
                            <source type="image/jpeg" srcSet={portafolio}></source>
                            <img className="portfolio__img" alt="Portfolio item - Landing Page"></img>
                        </picture>
                            <div className="portfolio__description">
                                <h3 className="portfolio__description-title">Portfolio </h3>
                                <p className="portfolio__description-text">
                                  vite, react, react-i18next, react-scroll, scrollreveal, fontawesome, tailwindcss
                                </p>
                                <div className="buttons__container">
                                    <a className="button" href="https://github.com/CruzGuillermo/portafolio" aria-label="Repo 3" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>{t("portfolio.repository")}</span>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>

                
            </section>
        </>
    )
}

export default Portfolio;