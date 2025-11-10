import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import './TestimonialSlider.css';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Stephen Banbury',
    title: 'VP of Marketing, ClearlyRated',
    companyLogo: 'https://clinchit.io/images/ClearlyRated_Logo.svg',
    avatar: 'https://d3urjsb4t4pqwq.cloudfront.net/assets/Stephen_Banbury_Profile.jpg',
    quote: "A lot of tools give you insights. Clinch goes a step further—it executes actions across tools like Slack, Intercom, and HubSpot. It's the closest thing I've seen to an AI teammate."
  },
  {
    id: 2,
    name: 'Mathew Cagney',
    title: 'CEO, ShiftCare',
    companyLogo: 'https://clinchit.io/images/ShiftCare_Logo.svg',
    avatar: 'https://d3urjsb4t4pqwq.cloudfront.net/assets/Mathew_Cagney_profile.jpg',
    quote: "With Clinch, our CS agents have gone from handling 5-15 calls per day to 30-40 calls per day. That's a 2.5x boost in daily calls."
  },
  {
    id: 3,
    name: 'Jory Zemanek',
    title: 'Director of Partnerships, Venzi',
    companyLogo: 'https://clinchit.io/images/BreakAway_Data_Logo.svg',
    avatar: 'https://d3urjsb4t4pqwq.cloudfront.net/assets/Jory_Zemanek_Profile.jpg',
    quote: "Clinch generated emails increased our trial conversion rate by 30%... It's an essential tool for our growth."
  }
];

// Progress bar constants
const AUTOPLAY_DURATION = 5000; // 5 seconds
const PROGRESS_INTERVAL = 50;   // 50ms refresh rate

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const startProgress = () => {
    // Clear any existing timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (AUTOPLAY_DURATION / PROGRESS_INTERVAL));
        if (newProgress >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          return 100;
        }
        return newProgress;
      });
    }, PROGRESS_INTERVAL);
  };

  useEffect(() => {
    startProgress(); // Start on component mount
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // new change
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  //new change
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // We use custom arrows
    autoplay: true,
    autoplaySpeed: AUTOPLAY_DURATION,
    beforeChange: (current, next) => {
      setProgress(0);
      startProgress();
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        
        <div className="testimonial-header">
          <div className="testimonial-title">
            See what our customers say
          </div>
          <div className="progress-bar-track">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="slider-nav">
            {/* Previous Button - NOW WITH PROPER NULL CHECK */}
            <div className="nav-btn" onClick={handlePrev}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                  <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="white"></path>
                  <path d="M15.8284 19.0009L21.1924 13.6369L19.7782 12.2227L12 20.0009L19.7782 27.779L21.1924 26.3648L15.8284 21.0009H28V19.0009H15.8284Z" fill="#09061E"></path>
                </g>
                <g className="nav-btn-active">
                  <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="white"></path>
                  <path d="M15.8284 19.0009L21.1924 13.6369L19.7782 12.2227L12 20.0009L19.7782 27.779L21.1924 26.3648L15.8284 21.0009H28V19.0009H15.8284Z" fill="#09061E"></path>
                </g>
              </svg>
            </div>
            
            {/* Next Button - NOW WITH PROPER NULL CHECK */}
            <div className="nav-btn" onClick={handleNext}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                  <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="white"></path>
                  <path d="M24.1716 19.0009L18.8076 13.6369L20.2218 12.2227L28 20.0009L20.2218 27.779L18.8076 26.3648L24.1716 21.0009H12V19.0009H24.1716Z" fill="#09061E"></path>
                </g>
                <g className="nav-btn-active">
                  <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="white"></path>
                  <path d="M24.1716 19.0009L18.8076 13.6369L20.2218 12.2227L28 20.0009L20.2218 27.779L18.8076 26.3648L24.1716 21.0009H12V19.0009H24.1716Z" fill="#09061E"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-slide">
              <div className="testimonial-card-glass">
                <div className="card-header">
                  <div 
                    className="avatar" 
                    style={{ backgroundImage: `url(${item.avatar})` }}
                  ></div>
                  <img src={item.companyLogo} alt="Company Logo" className="company-logo" />
                </div>
                <p className="quote">"{item.quote}"</p>
                <div className="author">
                  <span className="name">{item.name}</span>
                  <span className="title">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;