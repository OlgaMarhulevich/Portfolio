import React from 'react';
import s from './Skills.module.scss'
import SkillElement from "./skillElement/SkillElement";
import Title from "../common/components/title/Title";

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
        <SkillElement key={s.title} img={s.img} title={s.title} description={s.description}/>)

    return <div className={`${s.skillsBlock}`} id={'skills'}>
        <div className={s.container}>
            <Title title={'my skills'}/>
            <div className={s.skills}>
                {skills}
            </div>
        </div>
    </div>
}

export default Skills;
