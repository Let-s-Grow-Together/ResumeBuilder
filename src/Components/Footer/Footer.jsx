import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="NextStepCV-footer">
            <div className="footer-top">
                <h2>Let’s Build the Future, One Resume at a Time.</h2>
                <p>Join 1000+ users building standout resumes powered by smart templates & creativity.</p>
            </div>

            <div className="footer-socials">
                <div className="icon"><FaFacebookF /></div>
                <div className="icon"><FaLinkedinIn /></div>
                <div className="icon"><FaTwitter /></div>
                <div className="icon"><FaInstagram /></div>
            </div>

            <div className="footer-links">
                <div className="link-col">
                    <h4>NextStepCV</h4>
                    <a href="#">Templates</a>
                    <a href="#">Resume Builder</a>
                    <a href="#">Cover Letters</a>
                </div>
                <div className="link-col">
                    <h4>Resources</h4>
                    <a href="#">Blog</a>
                    <a href="#">Examples</a>
                    <a href="#">Career Tips</a>
                </div>
                <div className="link-col">
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Help Center</a>
                </div>
                <div className="link-col contact-box">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:hello@NextStepCVresume.com">hello@NextStepCVresume.com</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} NextStepCV Resume Builder — Powered by Let's Grow Together 🌱
            </div>
        </footer>
    );
}

