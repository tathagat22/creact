import React from 'react';
import './WinningTeams.css'; // We will create this
import { FaUserShield, FaChartLine, FaArrowRight } from 'react-icons/fa';

const WinningTeams = () => {
  return (
    <section className="winning-teams">
      <div className="container">
        <h2>Winning revenue teams run on Clinch AI</h2>

        <div className="winning-grid">
          {/* Card 1: CRO */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FaUserShield className="card-icon" />
                <h3>CRO</h3>
                <p>Align your revenue engine with real-time, AI-powered forecasts and a unified view across GTM teams.</p>
                <div className="card-arrow">
                  <FaArrowRight />
                </div>
              </div>
              <div className="flip-card-back">
                <h3>For CROs</h3>
                <p>Get a single source of truth for your entire revenue process. Identify pipeline risk, improve forecast accuracy, and see what's *really* driving your deals.</p>
              </div>
            </div>
          </div>

          {/* Middle Content */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FaUserShield className="card-icon" />
                <h3>Account Executive</h3>
                <p>Align your revenue engine with real-time, AI-powered forecasts and a unified view across GTM teams.</p>
                <div className="card-arrow">
                  <FaArrowRight />
                </div>
              </div>
              <div className="flip-card-back">
                <h3>For CROs</h3>
                <p>Get a single source of truth for your entire revenue process. Identify pipeline risk, improve forecast accuracy, and see what's *really* driving your deals.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Sales Manager */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <FaChartLine className="card-icon" />
                <h3>Sales Manager</h3>
                <p>Deliver high-impact coaching, deal reviews, and real-time deal insights—without digging through call recordings.</p>
                <div className="card-arrow">
                  <FaArrowRight />
                </div>
              </div>
              <div className="flip-card-back">
                <h3>For Sales Managers</h3>
                <p>Stop guessing. Understand exactly why top reps win and scale those behaviors. Get AI-surfaced coaching moments to upskill your entire team, faster.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinningTeams;