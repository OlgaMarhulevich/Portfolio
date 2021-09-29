import React from 'react';
import s from './Home.module.scss'
import home from '../common/images/photos/home.jpg'

function Home() {
    return <div style={{backgroundImage: `url("${home}")`}} className={s.home} id={'home'}>
        <div className={s.container}>
            <div className={s.greeting}>
                <h1 className={s.title}>Hi, I’m <span className={s.name}>Olga Marhulevich</span></h1>
                <div className={s.dev}>Frontend Developer</div>
            </div>
        </div>
    </div>
}

export default Home;
