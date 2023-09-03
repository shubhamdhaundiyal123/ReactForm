import React, { useState } from 'react'
import styles from "./Contact.module.css"
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
const ContactForm = () => {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[text,setText]=useState("");

  const onSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <section className={styles.container} >
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button icon={<MdMessage />} text="VIA SUPPORT CHAT" />
          <Button 
          icon={<FaPhoneAlt />} text="VIA CALL" />
        </div>
        <Button
          isOutline={true}
          icon={<HiMail />} text="VIA EMAIL FORM" />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="" name="name">Name</label>
            <input type="text" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="" name="email">Email</label>
            <input type="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="" >Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{display:'flex',justifyContent:'end'}}>
          <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {name + " " + email + " " + text + " "}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm
