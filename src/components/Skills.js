import React from 'react';
import '../style/Skills.css';
import Python from '../images/Python.png';
import Javascript from '../images/Javascript.png';
import Typescript from '../images/Typescript.png';
import SQL from '../images/SQL.png';
import C from '../images/C.png';
import ReactIcon from '../images/ReactIcon.png';
import VueIcon from '../images/VueIcon.png';
import VSCodeIcon from '../images/VSCodeIcon.png';
import PyCharmIcon from '../images/PyCharmIcon.png';
import SublimeTextIcon from '../images/SublimeTextIcon.png';
import SeleniumIcon from '../images/SeleniumIcon.png';
import PandasIcon from '../images/PandasIcon.png';
import ExcelIcon from '../images/ExcelIcon.png';
import CloseIcon from '../images/Closeicon.png';

const Skills = ({ toggleSkills }) => {
    return (
        <div className="skills-window">
            <div className="title-bar">
                <div className="title-bar-text">Skills</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={toggleSkills} className="windows-button">
                        <img src={CloseIcon} alt="Close" />
                    </button>
                </div>
            </div>
            <div className="skills-content">
                <div className="skills-container">
                    {/* Programming Languages */}
                    <div className="column">
                        <h3>Languages</h3>
                        <div className="Python">
                            <img src={Python} alt="Python" className="Python-icon" />
                            <span className="Python-text">Python</span>
                        </div>
                        <div className="Javascript">
                            <img src={Javascript} alt="Javascript" className="Javascript-icon" />
                            <span className="Javascript-text">JavaScript</span>
                        </div>
                        <div className="Typescript">
                            <img src={Typescript} alt="Typescript" className="Typescript-icon" />
                            <span className="Typescript-text">TypeScript</span>
                        </div>
                        <div className="SQL">
                            <img src={SQL} alt="SQL" className="SQL-icon" />
                            <span className="SQL-text">SQL</span>
                        </div>
                        <div className="CSharp">
                            <img src={C} alt="C#" className="CSharp-icon" />
                            <span className="CSharp-text">C#</span>
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="column">
                        <h3>Frameworks</h3>
                        <div className="React">
                            <img src={ReactIcon} alt="React" className="React-icon" />
                            <span className="React-text">React</span>
                        </div>
                        <div className="Vue.js">
                            <img src={VueIcon} alt="Vue.js" className="Vue-icon" />
                            <span className="Vue-text">Vue.js</span>
                        </div>
                    </div>

                    {/* Environments */}
                    <div className="column">
                        <h3>Environments</h3>
                        <div className="VS Code">
                            <img src={VSCodeIcon} alt="VS Code" className="VSCode-icon" />
                            <span className="VSCode-text">VS Code</span>
                        </div>
                        <div className="PyCharm">
                            <img src={PyCharmIcon} alt="PyCharm" className="PyCharm-icon" />
                            <span className="PyCharm-text">PyCharm</span>
                        </div>
                        <div className="Sublime Text">
                            <img src={SublimeTextIcon} alt="Sublime Text" className="SublimeText-icon" />
                            <span className="SublimeText-text">Sublime Text</span>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="column">
                        <h3>Tools</h3>
                        <div className="Selenium">
                            <img src={SeleniumIcon} alt="Selenium" className="Selenium-icon" />
                            <span className="Selenium-text">Selenium</span>
                        </div>
                        <div className="Pandas">
                            <img src={PandasIcon} alt="Pandas" className="Pandas-icon" />
                            <span className="Pandas-text">Pandas</span>
                        </div>
                        <div className="MicrosoftExcel">
                            <img src={ExcelIcon} alt="MicrosoftExcel" className="MicrosoftExcel-icon" />
                            <span className="MicrosoftExcel-text">Microsoft Excel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
