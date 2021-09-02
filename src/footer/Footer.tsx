import React from 'react';
import s from './Footer.module.css'
import styleWrapper from "../common/styles/wrapper.module.css";
import styleContainer from "../common/styles/container.module.css";

function Footer() {
    return <div className={`${styleWrapper.wrapper} ${s.footerBlock}`}>
        <div className={`${styleContainer.container} ${s.container}`}>
            <div className={s.linksBox}>
                <div className={s.imgBox}><a href={'#'}><img alt={''} src={''}/></a></div>
                <div className={s.imgBox}><a href={'#'}><img alt={''} src={''}/></a></div>
                <div className={s.imgBox}><a href={'#'}><img alt={''} src={''}/></a></div>
                <div className={s.imgBox}><a href={'#'}><img alt={''} src={''}/></a></div>
            </div>
        </div>
    </div>
}

export default Footer;
