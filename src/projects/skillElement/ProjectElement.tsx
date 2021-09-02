import React from 'react';
import s from './ProjectElement.module.css'

type SkillPropsType = {
    img: string,
    title: string,
    description: string
}

function ProjectElement(props: SkillPropsType) {
    return <div className={s.skillBlock}>
        <div style={{backgroundImage: `url("${props.img}")`}} className={s.imgBlock}>
            <button className={s.btn}>SHOW</button>
        </div>
        <div className={s.descriptionBox}>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    </div>
}

export default ProjectElement;
