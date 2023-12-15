import './globals.css'

const ContactForm = () => {
    return (
        <div className="contact-form-container">
        <h2>MESSAGE ME</h2>
        <form id="contact-form" action="https://formspree.io/f/xpzvaanz" method="POST">
            <div className="input-group">
                <input type="text" id="name" name="name" placeholder="Name" required/>
            </div>
            <div className="input-group">
                <input type="email" id="email" name="email" placeholder="E-mail" required/>
            </div>
            <div className="input-group">
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <div className="captcha-container">
                
            </div>
            <button type="submit">SEND</button>
        </form>
    </div>
)
}
export default ContactForm;