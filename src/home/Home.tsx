import React from 'react';
import s from './Home.module.scss'
import Links from "../common/components/links/Links";

function Home() {
    return <div className={s.home} id={'home'}>
        <div className={s.container}>
            <div className={s.greeting}>
                <h1 className={s.title}>Hi, I’m <span className={s.name}>Olga Marhulevich</span></h1>
                <div className={s.dev}>Frontend Developer</div>
                <div className={s.linksBox}>
                    <Links/>
                </div>
            </div>
        </div>
    </div>
}

export default Home;
