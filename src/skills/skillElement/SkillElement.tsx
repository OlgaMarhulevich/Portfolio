import React from 'react';
import s from './SkillElement.module.scss'


type SkillPropsType = {
    img: string,
    title: string,
}

function SkillElement(props: SkillPropsType) {
    return <div className={s.skillBlock}>
        <div className={s.titleBlock}>
            <div style={{backgroundImage: `url("${props.img}")`}} className={s.imgBox}/>
            <h3 className={s.title}>{props.title}</h3>
        </div>
    </div>
}

export default SkillElement;
