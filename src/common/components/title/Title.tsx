import React from 'react';
import s from './Title.module.css'

type PropsType = {
    title: string,
}
function Title(props: PropsType) {
    return <div>
                <h2 className={s.title}>{props.title}</h2>
            </div>
}

export default Title;
