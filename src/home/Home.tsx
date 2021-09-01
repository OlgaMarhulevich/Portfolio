import React from 'react';
import s from './Home.module.css'
import styleContainer from '../common/styles/container.module.css'
import styleWrapper from '../common/styles/wrapper.module.css'

function Home() {
    return <div className={`${s.home} ${styleWrapper.wrapper}`} id={'home'}>
        <div className={styleContainer.container}>
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
