import React from 'react';
import s from './SkillElement.module.scss'

type SkillPropsType = {
    img: string,
    title: string,
    description: string
}

function SkillElement(props: SkillPropsType) {
    return <div className={s.skillBlock}>
        <div className={s.titleBlock}>
            <div className={s.imgBox}>
                <img alt={'img ' + props.title} src={props.img}/>
            </div>
            <h3>{props.title}</h3>
        </div>
        <div className={s.description}>
            <p className={s.description}>{props.description}</p>
        </div>
    </div>
}

export default SkillElement;
