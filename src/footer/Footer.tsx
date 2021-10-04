import React from 'react';
import s from './Footer.module.scss'
import Links from "../common/components/links/Links";

function Footer() {
    return <div className={s.footerBlock}>
        <Links/>
        <p className={s.copyRight}>© 2021, All Rights Reserved.</p>
    </div>
}

export default Footer;
