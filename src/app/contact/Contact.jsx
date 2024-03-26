import React from "react";
import contactSyles from "../../styles/contact/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { TransitionWrapper1, TransitionWrapper2 } from "@/components/framer-motion/TransitionWrapper";
import RightLeft from "@/components/framer-motion/RightLeft";

const Contact = () => {
  return (
    <section className={contactSyles.contact_container}>
      <div className={contactSyles.contact_header}>
        <h1 className={contactSyles.contact_title}>Get In Touch</h1>
        <p>On the other hand denounce righteous indignation dislike mens</p>
        <p>who beguiled and demoralized charmso pleasure</p>
      </div>
      <div className={contactSyles.contact_card_group}>
        <TransitionWrapper1 index={1}>
          <div
            className={`${contactSyles.contact_card} ${contactSyles.left_one_s}`}
          >
            <i>
              <FontAwesomeIcon icon={faLocationDot} />
            </i>
            <h3 className={contactSyles.contact_card_title}>Office Address</h3>
            <p>420 Love Street 133/22</p>
            <p>Nevis Caribbean Dhaka</p>
          </div>
        </TransitionWrapper1>
        <TransitionWrapper1 index={2}>
          <div
            className={`${contactSyles.contact_card} ${contactSyles.left_half_s}`}
          >
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            <h3 className={contactSyles.contact_card_title}>Phone Number</h3>
            <p>+(066) 19 5017 800</p>
            <p>+(088) 29 6027 900</p>
          </div>
        </TransitionWrapper1>
        <TransitionWrapper1 index={3}>
          <div
            className={`${contactSyles.contact_card} ${contactSyles.right_one_s}`}
          >
            <i>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <h3 className={contactSyles.contact_card_title}>Send Us Mail</h3>
            <p>info.contact@gmail.co</p>
            <p>name@website.com</p>
          </div>
        </TransitionWrapper1>
      </div>
      <div className={contactSyles.contact_form_and_location}>
        <RightLeft side={"-120%"} duration={0.5}>
          <div
            className={`${contactSyles.contact_form} ${contactSyles.down_half_s}`}
          >
            <h1 className={contactSyles.contact_form_title}>
              Have any Question On Mind!
            </h1>
            <p className={contactSyles.contact_description}>
              Your email address will no be published. Required fields are
              marked
            </p>
            <div className={contactSyles.static_input_group}>
              <input
                className={contactSyles.input_name}
                type="text"
                placeholder="Your Name"
              />
              <input
                className={contactSyles.input_address}
                type="email"
                placeholder="Email Address"
              />
              <input
                className={contactSyles.input_phone}
                type="number"
                placeholder="Your Phone"
              />
              <input
                className={contactSyles.input_subject}
                type="text"
                placeholder="Your Subject"
              />
            </div>
            <textarea
              className={contactSyles.contact_textarea}
              placeholder="Your Comment"
              name="Your Comment"
              id=""
              cols="30"
              rows="8"
            ></textarea>
            <button className={contactSyles.send_message_btn}>
              Send Message
            </button>
          </div>
        </RightLeft>
        <RightLeft side={"120%"} duration={0.5}>
          <iframe
            className={contactSyles.contact_location}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4311461517973!2d90.37832571115702!3d23.87432558391771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c53e92f19a3d%3A0x1c85b210e403a0d6!2sSolutya%20Pvt.%20Ltd.-%20Best%20Software%20Company!5e0!3m2!1sen!2sbd!4v1696421511746!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </RightLeft>
      </div>
    </section>
  );
};

export default Contact;
