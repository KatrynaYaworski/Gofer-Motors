import React from "react";
import styles from "./ContactUs.module.css";
import ContactUsCard from "../ContactUsCard/ContactUsCard";
import GoferLocationSection from "../HomePage/GoferLocationSection";

import displayImgOne from "../../assets/contact_us_images/standing-by-car-talking.jpg"
import displayImgTwo from "../../assets/contact_us_images/customer-service-woman-on-a-phone.jpg"
import displayImgThree from "../../assets/contact_us_images/test_drive2.jpg"

function ContactUs () {

    const customStyle = {
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '100vw'
    }
    const lineCustomStyle = {
        display: 'none'
    }
    return (
        
       <div className={styles.contact_container}>
        <div className={styles.location_wrapper}>
        <GoferLocationSection lineStyleProp={lineCustomStyle} styleProp={customStyle} className={styles.contact_info} />
        </div>
                
                <div className={styles.visit_container}>
                    
        <div className={styles.visit_title}>
        <hr/>
            Visit, make a call, or send us a quick message!
            </div>
            <div className={styles.visit_message}>
            We are committed to providing you with exceptional customer service. Need assistance with the purchasing process? 
            <br/>
            Our dedicated service team is available to help you, whether it's through email, phone, or in-person meetings.
            <br/>
             Your satisfaction is our priority.
             </div>
             </div>
             <br/>
        <ContactUsCard className={styles.contact_us} />
        <div className={styles.contact_pics_container}>
            <img className={styles.contact_pic} height={200} width={350} src={displayImgOne} alt="people talking"/>
            <img className={styles.contact_pic} height={200} width={350} src={displayImgTwo} alt="woman working"/>
            <img className={styles.contact_pic} height={200} width={350} src={displayImgThree} alt="woman driving"/>
       

       </div>
       </div>
    )
}

export default ContactUs;