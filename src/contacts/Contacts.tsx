import React from 'react';
import s from './Contacts.module.scss'
import Title from "../common/components/title/Title";

function Contacts() {
    return <div className={s.contactsBlock} id={'contacts'}>
        <div className={s.container}>
            <Title title={'contacts'}/>
            <form className={s.form}>
                <input placeholder={"Name"}/>
                <input placeholder={"Email"}/>
                <input placeholder={"Phone number"}/>
                <textarea placeholder={"Your message..."}/>
                <div className={s.btnBox}>
                    <button type={"submit"}>SEND MESSAGE</button>
                </div>
            </form>
        </div>
    </div>
}

export default Contacts;
