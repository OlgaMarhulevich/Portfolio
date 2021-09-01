import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/container.module.css'
import SkillElement from "./skillElement/SkillElement";
import styleWrapper from "../common/styles/wrapper.module.css";

type SkillType = {
    img: string,
    title: string,
    description: string
}
function Skills() {
    const skillsArray: Array<SkillType> = [
        {img: '', title: 'CSS', description: 'something'},
        {img: '', title: 'JS', description: 'something'},
        {img: '', title: 'React', description: 'something'},
    ]
    const skills = skillsArray.map(s =>
        <SkillElement img={s.img} title={s.title} description={s.description}/>)

    return <div className={`${s.skillsBlock} ${styleWrapper.wrapper}`} id={'skills'}>
        <div className={`${styleContainer.container} ${s.container}`}>
            <div>
                <h2>My skills</h2>
            </div>
            <div className={s.skills}>
                {skills}
            </div>
        </div>
    </div>
}

export default Skills;
