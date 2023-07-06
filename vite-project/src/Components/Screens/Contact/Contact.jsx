import style from "./contact.module.scss";
import { FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { Cardz } from "../../Shared/cardz/Cardz";
// import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert("message sent");

    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${style.contact}`}>
        <h2>Contact Us</h2>
        <div className={style.section}>
          <form onSubmit={sendEmail}>
            <Cardz cardClass={style.card}>
              <label>Name:</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="user_email"
                placeholder="Active Email"
                required
              />
              <label>Subject:</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Your Message:</label>
              <textarea name="message" cols={30} rows={10} required></textarea>
              <button type="submit" className="--btn --btn-primary">
                Send Message
              </button>
            </Cardz>
          </form>
          <div className={style.details}>
            <Cardz cardClass={style.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={style.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+92 333 3248521</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>support@rcai.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>+92 333 3248521</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@rcai</p>
                </span>
              </div>
            </Cardz>
          </div>
        </div>
        <h2>Become a Sponsor</h2>

        <div className={style.section}>
          <div className={style.details}>
            <Cardz cardClass={style.card2}>
              <h3>Unlock Your Sponsorship Potential!</h3>
              <p>
                Thank you for your interest in becoming a sponsor and joining
                our mission. By partnering with us, you'll have the opportunity
                to make a lasting impact while gaining valuable exposure for
                your brand. Please take a moment to complete the sponsorship
                form below, and let's embark on this exciting journey together!
              </p>
              <br />
              <br />
              <p>Why Sponsor?</p>
              <br />
              <p>
                <ul>
                    <li>Expand your brand's visibility to our diverse audience.</li>
                    <li>Strengthen your reputation as a socially responsible organization.
                    </li>
                    <li>Access exclusive networking and collaboration opportunities.</li>
                </ul>
              </p>
            </Cardz>
          </div>
          <form onSubmit={sendEmail}>
            <Cardz cardClass={style.card}>
              <label>Name:</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="user_email"
                placeholder="Active Email"
                required
              />
              <label>Amount:</label>
              <input
                type="number"
                name="subject"
                placeholder="Subject"
                required
              />
              <button type="submit" className="--btn --btn-primary">
                Donate
              </button>
            </Cardz>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
