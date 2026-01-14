import { Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import "./TedxFooter.css";

export default function TedxFooter() {
  return (
    <footer className="tedx-footer mt-10">
      <div className="tedx-container">
        
        <div className="tedx-brand">
          <h2>
            <span>Abhijeet</span> IIT Indore
          </h2>
          <p>
            This GDG is organized under license from Google.
            <br />
            Ideas worth spreading. Curated locally.
          </p>
        </div>

       
        <div className="tedx-links">
          <h3 style={{ fontSize: '27px' }}>Quick Links</h3>
          <ul>
            {[
              "About me",
              "Splitter",
              "Groups Members",
            
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

    
        <div className="tedx-social">
          <h3 style={{ fontSize: '27px' }}>Connect With Us</h3>
          <div className="icons">
            {[ 
              { Icon: Instagram, link: "https://www.instagram.com/its_og_abhijeet?igsh=MWQ5ZThlZHlwdzlybQ==" },
              { Icon: Linkedin, link: "https://www.linkedin.com/in/abhijeet-a524423a5/" },
              { Icon: Twitter, link: "https://x.com/Abhijeetiiti1" },
              { Icon: Youtube, link: "https://youtube.com/@Abhijeet-IITI-1" },
              { Icon: Mail, link: "sse250021001@iiti.ac.in" },
            ].map(({ Icon, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noreferrer">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

   
      <div className="tedx-bottom">
        <p>© {new Date().getFullYear()} Abhijeet IIT Indore. All rights reserved.</p>
        <p>Designed with ❤️ by Abhijeet SSE</p>
      </div>
    </footer>
  );
}
