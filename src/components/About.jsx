import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faCss3Alt, faJs, faSass, faBootstrap, faReact, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import pdf from "../assets/GuillermoCruzCv.pdf"
import ScrollReveal from 'scrollreveal';
import bootstrap from "../assets/icon/bootstrap.png";
import css from "../assets/icon/css3.png";
import express from "../assets/icon/express.png";
import html from "../assets/icon/html.png";
import javascript from "../assets/icon/javascript.png";
import node from "../assets/icon/node-js.png";
import postgres from "../assets/icon/postgresql.png";
import react from "../assets/icon/react.png";
import sass from "../assets/icon/sass.png";
import redux from "../assets/icon/redux.png";
import sequelize from "../assets/icon/sequelize.png";
import tailwind from "../assets/icon/tailwind-css.png";


const About = () => {
    const [t] = useTranslation("global");

    useEffect(() => {
        ScrollReveal().reveal('#title_about', {
            delay: 250,
        });
        ScrollReveal().reveal('#about_content', {
            delay: 300,
        });
    }, [])

    return (
        <>
            <section className="container mx-auto" id="about">
                <div className="about_title" id="title_about">
                    <h2 className='mt-24'>{t("about.aboutMe")}</h2>
                </div>
                
                <div className="md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 mobile_padding" id="about_content">
                    <div className="about_description lg:mt-5">
                        <h3 className="mb-5">{t("about.who")}</h3>
                        <p className="description">{t("about.description")}</p>
                        <p className="mt-5">{t("about.description2")}</p>
                        <div>
                            <button>
                                <a href={pdf} download="Guillermo Cruz-CV">
                                    <FontAwesomeIcon icon={faFileDownload} />
                                    <span>{t("about.download")}</span>
                                </a>
                            </button>
                        </div>
                    </div>
                    
                    <div className="about_skills lg:mt-5">
                        <div className="skills_title">
                            <h3 className='mb-5'>{t("about.skills")}</h3>
                        </div>
                        <div className="skill_item">
                            <img src={javascript} alt="" />
                            <span>javascript</span>
                        </div>
                        <div className="skill_item">
                            <img src={html} alt="" />
                            <span>html</span>
                        </div>
                        <div className="skill_item">
                            <img src={css} alt="" />
                            <span>css</span>
                        </div>
                        <div className="skill_item">
                            <img src={react} alt="" />
                            <span>react</span>
                        </div>
                        <div className="skill_item">
                            <img src={redux} alt="" />
                            <span>redux</span>
                        </div>
                        <div className="skill_item">
                            <img src={node} alt="" />
                            <span>node.js</span>
                        </div>
                        <div className="skill_item">
                            <img src={postgres} alt="" />
                            <span>postgresql</span>
                        </div>
                        <div className="skill_item">
                            <img src={sequelize} alt="" />
                            <span>sequelize</span>
                        </div>
                        <div className="skill_item">
                            <img src={express} alt="" />
                            <span>express</span>
                        </div>
                        <div className="skill_item">
                            <img src={sass} alt="" />
                            <span>sass</span>
                        </div>
                        <div className="skill_item">
                            <img src={bootstrap} alt="" />
                            <span>bootstrap</span>
                        </div>
                        <div className="skill_item">
                            <img src={tailwind} alt="" />
                            <span>tailwind</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;