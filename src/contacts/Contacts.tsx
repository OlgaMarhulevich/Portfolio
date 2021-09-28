import React from 'react';
import s from './Contacts.module.css'
import styleContainer from '../common/styles/container.module.css'
import styleWrapper from '../common/styles/wrapper.module.css'
import Title from "../common/components/title/Title";

function Contacts() {
    return <div className={`${s.contactsBlock} ${styleWrapper.wrapper}`} id={'contacts'}>
        <div className={`${styleContainer.container} ${s.container}`}>
            <Title title={'contacts'}/>
            <form className={s.form}>
                <input/>
                <input/>
                <textarea/>
                <div className={s.btnBox}>
                    <button type={"submit"}>SEND MESSAGE</button>
                </div>
            </form>
        </div>
    </div>
}

export default Contacts;
