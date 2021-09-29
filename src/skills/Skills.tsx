import React from 'react';
import s from './Skills.module.scss'
import SkillElement from "./skillElement/SkillElement";
import Title from "../common/components/title/Title";
import css from '../common/images/skills/css.svg'
import js from '../common/images/skills/js.svg'
import ts from '../common/images/skills/typescript.svg'
import react from '../common/images/skills/react.svg'
import redux from '../common/images/skills/redux.svg'

type SkillType = {
    img: string,
    title: string
}
function Skills() {
    const skillsArray: Array<SkillType> = [
        {img: `${react}`, title: 'React'},
        {img: `${redux}`, title: 'Redux'},
        {img: `${js}`, title: 'JS'},
        {img: `${ts}`, title: 'TypeScript'},
        {img: `${css}`, title: 'CSS'},
    ]
    const skills = skillsArray.map(s =>
        <SkillElement key={s.title} img={s.img} title={s.title}/>)

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
