import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
            <Link className='footer_logo' to="/">University Clone</Link>

            <div className="footer_item">
                <div className="footer_list">
                    <h3>About Us</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed corrupti, sequi porro voluptates repellendus id quibusdam incidunt non quisquam facere dignissimos ipsam illum ab quas nemo, maiores ipsa, pariatur soluta ipsum eveniet. Totam voluptates provident fugit cum praesentium vero blanditiis dolores. Dicta, eligendi? Quis, ipsa quam molestias ipsum ut praesentium!</p>
                </div>

                <div className="footer_list">
                    <h3>Resources</h3>

                    <ul>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/support">Support</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer_list second_footer_list">
                    <h3>Connect</h3>
                    <p><strong>Location :</strong> #######</p>
                    <p><strong>Email :</strong> #######</p>
                    <p><strong>P.O. Box :</strong> #######</p>
                    <p><strong>Phone No :</strong> #######</p>
                </div>
            </div>
      </footer>
    </>
  );
};

export default Footer;
