import React from 'react';
import s from './Footer.module.scss'

function Footer() {
    return <div className={s.footerBlock}>
            <div className={s.linksBox}>
                <div className={s.imgBox}><a href={'#'}><img alt={''} src={''}/></a></div>
                <div className={s.imgBox}><a href={'#'}><img alt={''} src={''}/></a></div>
                <div className={s.imgBox}><a href={'#'}><img alt={''} src={''}/></a></div>
                <div className={s.imgBox}><a href={'#'}><img alt={''} src={''}/></a></div>
            </div>
    </div>
}

export default Footer;
