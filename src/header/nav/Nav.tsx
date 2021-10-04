import React from 'react';
import s from './Nav.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return <>
        <div className={s.nav}>
            <a className={s.link} href={'#home'}>Home</a>
            <a className={s.link} href={'#about'}>About me</a>
            <a className={s.link} href={'#skills'}>Skills</a>
            <a className={s.link} href={'#projects'}>Projects</a>
            <a className={s.link} href={'#contacts'}>Contacts</a>
        </div>
        <FontAwesomeIcon icon={faBars} color={'white'} className={s.bar}/>
    </>

}

export default Nav;
