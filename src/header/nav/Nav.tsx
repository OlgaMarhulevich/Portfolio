import React from 'react';
import s from './Nav.module.css'

function Nav() {
    return <div className={s.nav}>
        <a className={s.link} href={'#home'}>Home</a>
        <a className={s.link} href={'#about'}>About me</a>
        <a className={s.link} href={'#skills'}>Skills</a>
        <a className={s.link} href={'#projects'}>Projects</a>
        <a className={s.link} href={'#contacts'}>Contacts</a>
    </div>
}

export default Nav;
