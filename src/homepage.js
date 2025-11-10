import React, { useState } from 'react';
import './HomePage.css'; // This will be completely rewritten

// --- Import New Components ---
import TestimonialSlider from './TestimonialSlider';
import WinningTeams from './WinningTeam';

// --- Import Icons ---
import {
  FiAlertTriangle, FiTarget, FiBarChart2,
  FiLock, FiCheckCircle, FiStar, FiArrowRight,
  FiX // Added for mobile menu close button
} from 'react-icons/fi';
import {
  FaSlack, FaHubspot, FaSalesforce, FaLinkedin, FaTwitter
} from 'react-icons/fa';

// --- Import Images ---
// We assume these are in `public` or `src`
// Using placeholders for now
import heroLaptop from './marketing_home_hero_image_V3.svg'; // Your existing SVG
import clinchLogo from './logo.svg'; // Your existing logo
import { Navigate, useNavigate } from 'react-router-dom';
const clinchIcon = "https://clinchit.io/images/Clinch_Logo_Icon.svg";
// This is the new logo from your snippet
const clinchLogoFull = "https://clinchit.io/Clinch Logo.8c0a9e1d87f9a10c541f25c08d83cfd3.svg";
const heroBgOrb = "https://clinchit.io/images/UeN8DRPyDg7p.png";
const howItWorksBg = "https://clinchit.io/images/how_it_works.svg";
const signUpImage = "https://clinchit.io/images/1_Sign_Up.svg";
const connectStackImage = "https://clinchit.io/images/2_Connect_your_Stack.svg";
const automateImage = "https://clinchit.io/images/3_Let_Clinch_Automate_Gruntwork.svg";
const gdprLogo = "https://clinchit.io/images/GDPR.svg";
const ccpaLogo = "https://clinchit.io/images/CCPA.svg";
const isoLogo = "https://clinchit.io/images/ISO.svg";
const socLogo = "https://clinchit.io/images/SOC_2_Type_2.svg";


// Data for the dynamic feature tabs (no change)
const featuresData = {
  research: {
    title: 'Walk In Prepared — Every Time',
    points: [
      {
        icon: <FiAlertTriangle className="point-icon" />,
        text: '<strong>20% of a rep’s time</strong> is wasted digging through emails, call notes, LinkedIn, and web pages.',
      },
      {
        icon: <FiTarget className="point-icon" />,
        text: 'Get real-time insights on buyers, accounts, pain points, and opportunity signals—so your team can engage with precision.',
      },
      {
        icon: <FiBarChart2 className="point-icon" />,
        text: '<strong>Increase Win Rates by 35% to 50%</strong> by walking into every conversation armed with the right context.',
      },
    ],
    image: 'https://d3urjsb4t4pqwq.cloudfront.net/assets/Research_Image_V4.svg',
  },
  assist: {
    title: 'Your AI Live Meeting Assistant',
    points: [
      {
        icon: <FiCheckCircle className="point-icon" />,
        text: 'Real-time battle cards and objection handling, delivered to you live as the prospect speaks.',
      },
    ],
    image: 'https://via.placeholder.com/600x450.png?text=Live+Assist+Mockup',
  },
  intelligence: {
    title: 'Unlock Conversational Intelligence',
    points: [
      {
        icon: <FiCheckCircle className="point-icon" />,
        text: 'Transcribe and analyze 100% of your customer conversations to find out what *really* works.',
      },
    ],
    image: 'https://via.placeholder.com/600x450.png?text=Intelligence+Mockup',
  },
  actions: {
    title: 'Execute Actions Automatically',
    points: [
      {
        icon: <FiCheckCircle className="point-icon" />,
        text: 'Automate post-call summaries, CRM updates, and follow-up email drafts instantly.',
      },
    ],
    image: 'https://via.placeholder.com/600x450.png?text=Actions+Mockup',
  },
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('research');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu
  const activeFeature = featuresData[activeTab];
  const navigate = useNavigate();
  const handleClick = () => {

    navigate('/login');

  }


  return (
    <div className="homepage-wrapper">
      <header className="new-header scrollHeaderGradient">

        {/* Desktop Nav */}
        <div className="desktop-nav">
          <div className="col-span-1">
            <a href="/" className="logo-link-desktop">
              <div className="logo-container">
                <img src={clinchLogoFull} alt="ClinchIt Logo" />
              </div>
            </a>
          </div>
          <div className="col-span-4 nav-links-container">

            <div className="nav-item group">
              <a className="nav-link" href="/customers">Customers</a>
            </div>

            <div className="nav-item group has-dropdown">
              <div className="nav-link-dropdown">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="nav-dropdown-arrow">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="dropdown-content">
                <a href="#blog">Blog</a>
                <a href="#case-studies">Case Studies</a>
              </div>
            </div>

            <div className="nav-item group">
              <a className="nav-link" href="/pricing">Pricing</a>
            </div>

            <div className="nav-item group has-dropdown">
              <div className="nav-link-dropdown">
                Company
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="nav-dropdown-arrow">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="dropdown-content">
                <a href="#about">About Us</a>
                <a href="#careers">Careers</a>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-4 auth-buttons-container">
            <div> <button className='try-free-text' onClick={handleClick}>Log In</button>
            <div className="try-free-border"></div>
            </div>

            <div className="try-free-button">
              <div className="try-free-text">Try Free</div>
              <div className="try-free-border"></div>
            </div>

            <div className="bookDemo">
              <a href="/request-demo">Request Demo</a>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="mobile-nav">
          <div className="col-span-2">
            <a href="/" className="mobile-logo-link">
              <span className="sr-only">ClinchIt</span>
              <img className="mobile-logo-img" src={clinchLogoFull} alt="clinchit logo" />
            </a>
          </div>
          <div className="mobile-menu-button-wrapper">
            <button type="button" className="mobile-menu-button" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="mobile-menu-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dialog */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dialog">
          <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <a href="/" className="mobile-logo-link">
                <span className="sr-only">ClinchIt</span>
                <img className="mobile-logo-img" src={clinchLogoFull} alt="clinchit logo" />
              </a>
              <button type="button" className="mobile-menu-button" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <FiX className="mobile-menu-icon" />
              </button>
            </div>
            <div className="mobile-menu-content">
              <a href="/customers" className="mobile-nav-link">Customers</a>
              <a href="/pricing" className="mobile-nav-link">Pricing</a>
              <div className="mobile-nav-group">
                <p className="mobile-nav-heading">Resources</p>
                <a href="#blog" className="mobile-nav-sublink">Blog</a>
                <a href="#case-studies" className="mobile-nav-sublink">Case Studies</a>
              </div>
              <div className="mobile-nav-group">
                <p className="mobile-nav-heading">Company</p>
                <a href="#about" className="mobile-nav-sublink">About Us</a>
                <a href="#careers" className="mobile-nav-sublink">Careers</a>
              </div>
            </div>
            <div className="mobile-menu-footer">
              <a href="#login" className="btn btn-secondary">Log In</a>
              <a href="#try" className="btn btn-tertiary">Try Free</a>
              <a href="/request-demo" className="btn btn-primary">Request Demo</a>
            </div>
          </div>
        </div>
      )}

      {/* 2. Hero Section */}
      <section className="hero">
        {/* ... rest of your hero section ... */}
        {/* Background Orb Image */}
        <img src={heroBgOrb} alt="Background" className="hero-bg-orb" />

        <div className="container hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <div className="g2-badge">
              <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
              <span>5.0 stars G2.com</span>
            </div>
            <h1>The First Agentic AE Operating System That Drives Revenue</h1>
            <p>From CRM chaos to closed-won. Clinch lifts win rates with every rep — automatically.</p>
            <button className="btn btn-primary btn-large">Request Demo</button>
          </div>

          {/* Right Visual Flow */}
          <div className="hero-visual">

            <img src={heroLaptop} alt="Clinch Platform" className="hero-laptop-img" />
          </div>
        </div>
      </section>

      {/* 3. Logo Marquee */}
      <section className="logo-marquee-section">
        {/* ... existing code ... */}
        <h3>Trusted by the high-performing Teams</h3>
        <div className="marquee-container">
          <div className="marquee-content">
            {/* These are text, but styled to look like the logos */}
            <span className="logo-item venzi">venzi</span>
            <span className="logo-item shiftcare">ShiftCare</span>
            <span className="logo-item clearlyrated">clearlyrated</span>
            <span className="logo-item kc">K/C</span>
            <span className="logo-item venzi">venzi</span>
            <span className="logo-item shiftcare">ShiftCare</span>
            <span className="logo-item clearlyrated">clearlyrated</span>
            <span className="logo-item kc">K/C</span>
          </div>
        </div>
      </section>

      {/* 4. "Walk In Prepared" Tabbed Feature Section */}
      <section className="features-section">
        {/* ... existing code ... */}
        <div className="container">
          <div className="tabs-nav">
            <button
              className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
              onClick={() => setActiveTab('research')}
            >
              Research
            </button>
            <button
              className={`tab-btn ${activeTab === 'assist' ? 'active' : ''}`}
              onClick={() => setActiveTab('assist')}
            >
              Live Meeting Assist
            </button>
            <button
              className={`tab-btn ${activeTab === 'intelligence' ? 'active' : ''}`}
              onClick={() => setActiveTab('intelligence')}
            >
              Conversational Intelligence
            </button>
            <button
              className={`tab-btn ${activeTab === 'actions' ? 'active' : ''}`}
              onClick={() => setActiveTab('actions')}
            >
              Executes Actions
            </button>
          </div>

          <div className="tab-content">
            <div className="tab-text">
              <h2>{activeFeature.title}</h2>
              <ul>
                {activeFeature.points.map((point, index) => (
                  <li key={index}>
                    {point.icon}
                    <p dangerouslySetInnerHTML={{ __html: point.text }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="tab-visual">
              <div className="product-mockup">
                {/* Placeholder image, but in the correct frame */}
                <img src={featuresData[activeTab].image} alt={activeFeature.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "How Clinch Works" Section (NEW) */}
      <section className="how-it-works" style={{ backgroundImage: `url(${howItWorksBg})` }}>
        {/* ... existing code ... */}
        <div className="container">
          <h2>How Clinch Works</h2>
          <div className="how-grid">
            {/* Step 1 */}
            <div className="how-step">
              <h3>1. Sign Up</h3>
              <img src={"https://d3urjsb4t4pqwq.cloudfront.net/assets/marketing_home_sign_up.svg"} alt="Sign Up" />
            </div>
            {/* Step 2 */}
            <div className="how-step">
              <h3>2. Connect Your Stack</h3>
              <img src={"https://d3urjsb4t4pqwq.cloudfront.net/assets/marketing_home_connect_slack.svg"} alt="Connect Your Stack" />
            </div>
            {/* Step 3 */}
            <div className="how-step">
              <h3>3. Let Clinch Automate Gruntwork</h3>
              <img src={"https://d3urjsb4t4pqwq.cloudfront.net/assets/marketing_home_clinch_automate.svg"} alt="Automate Gruntwork" />
            </div>
          </div>
          <div className="how-cta">
            <p>More selling time. Less tool thrashing.<br />Faster ramp. Happier reps.</p>
            <button className="btn btn-primary">Request a Demo</button>
          </div>
        </div>
      </section>

      {/* 6. "Winning Teams" Flip Cards (NEW) */}
      <WinningTeams />

      {/* 7. Testimonial Slider (NEW) */}
      <TestimonialSlider />

      {/* 8. Security Section (Redesigned) */}
      <section className="security-section">
        {/* ... existing code ... */}
        <div className="container">
          <div className="security-card-glass">
            <div className="security-content">
              <h3>Enterprise Level Security.</h3>
              <p>Clinch AGI is certified by the highest industry standards to protect your data.</p>
              <button className="btn btn-secondary">See Certification</button>
            </div>
            <div className="security-logos flex items-center justify-center gap-4">
              <img src="/gdpr.png" alt="GDPR" className="w-16 h-auto" />
              <img src="/ccpa.png" alt="CCPA" className="w-16 h-auto" />
              <img src="/ISO.png" alt="ISO" className="w-16 h-auto" />
              <img src="/soc.png" alt="SOC 2 Type 2" className="w-16 h-auto" />
            </div>

          </div>
        </div>
      </section>

      {/* 9. Footer (Redesigned) */}
      <footer className="footer">
        {/* ... existing code ... */}
        <div className="container footer-container">
          <div className="footer-column brand-column">
            <a href="/" className="logo-link">
              <img src={"https://clinchit.io./Clinch-logo-footer.3089885c9863f10fdbc17efc47ff2f03.svg"} alt="Clinch AGI" className="logo-icon" />
            </a>
            <p>&copy; {new Date().getFullYear()} Clinch, Inc. All rights reserved.</p>
            <div className="social-icons">
              <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
          <div className="footer-column links-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#customers">Customers</a></li>
              <li><a href="#help">Help Center</a></li>
            </ul>
          </div>
          <div className="footer-column links-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-column links-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#cookie">Cookie Policy</a></li>
              <li><a href="#data">Data Processing</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;