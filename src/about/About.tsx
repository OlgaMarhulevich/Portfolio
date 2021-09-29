import React from 'react';
import s from './About.module.scss'
import Title from "../common/components/title/Title";
import me from '../common/images/photos/me.jpg'

function About() {
    return <div className={s.aboutBlock} id={'about'}>
        <div className={s.container}>
            <Title title={'about me'}/>
            <div className={s.contentAbout}>
                <div className={s.img} style={{backgroundImage: `url("${me}")`}}/>
                <div className={s.description}>
                    Hi! I'm Olga. I am a front-end developer with experience in
                    creating SPA with React/Redux/TypeScript.
                    Now I am improving my skills in this direction
                    and expanding them with new technologies.
                    I'm planing to study Node.js, because my next
                    focus is to become a Full-Stack Developer.
                    I spend my free time on Codewars or reading
                    adapted books to improve my level of English.
                    Open for your suggestions. Ready to consider
                    project work and full-time employment.
                    Available to relocate to Minsk.
                </div>
            </div>
        </div>
    </div>
}

export default About;
