import React from 'react';
import s from './Home.module.scss'

function Home() {
    return <div className={s.home} id={'home'}>
        <div className={s.container}>
            <div className={s.greeting}>
                <h1 className={s.title}>Hi, I’m <span>Olga Marhulevich</span>
                    <br/> <span className={s.span}>Frontend Developer</span>
                </h1>
                <p className={s.description}>I design and code beautifully simple things, and I love
                    what I do. I use animation as a third dimension by which Lorem ipsum dolor sit
                    amet consectetur adipisicing. </p>

            </div>
            <div className={s.photo}>

            </div>
        </div>
    </div>
}

export default Home;
