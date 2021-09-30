import React from 'react';
import s from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import codewars from '../common/images/footer/codewars.png'

function Footer() {
    return <div className={s.footerBlock}>
            <div className={s.linksBox}>
                <a href={'https://www.linkedin.com/in/%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0-%D0%BC%D0%B0%D1%80%D0%B3%D1%83%D0%BB%D0%B5%D0%B2%D0%B8%D1%87-75b216217/'}><FontAwesomeIcon icon={faLinkedin} color={'white'}/></a>
                <a href={'https://github.com/OlgaMarhulevich'}><FontAwesomeIcon icon={faGithub} color={'white'}/></a>
                <a href={'https://t.me/belaya_olya'}><FontAwesomeIcon icon={faTelegram} color={'white'}/></a>
                <a href={'https://www.codewars.com/users/OlgaMarhulevich'}>
                    <div className={s.imgBox}>
                        <div className={s.img} style={{backgroundImage: `url("${codewars}")`}}/>
                    </div>
                </a>
            </div>

        <p className={s.copyRight}>© 2021, All Rights Reserved.</p>
    </div>
}

export default Footer;
