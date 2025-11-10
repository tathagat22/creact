import React, { useState } from "react";
import "./Login.css";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <div className="login-box">
          {/* Logo Section */}
          <div className="logo-section">
            <img
              src="https://app.clinchit.io/Clinch_Logo_Log_In.baded3287cf9ba51de0c3792d07dd9e1.svg"
              alt="Clinch Logo"
              className="logo"
            />
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Log In
            </button>
            <button
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* Conditional Rendering for Login / Signup */}
          {activeTab === "login" ? (
            <>
              {/* Social Buttons */}
              <div className="social-buttons">
                <button className="google-btn">
                  <FaGoogle className="icon" /> Log In with Google
                </button>
                <button className="microsoft-btn">
                  <FaMicrosoft className="icon" /> Log In with Microsoft
                </button>
              </div>

              {/* Divider */}
              <div className="divider">
                <span>OR</span>
              </div>

              {/* Email Login Form */}
              <form className="form">
                <button type="submit" className="email-btn">
                  Continue with Email
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Social Buttons */}
              <div className="social-buttons">
                <button className="google-btn">
                  <FaGoogle className="icon" /> Sign Up with Google
                </button>
                <button className="microsoft-btn">
                  <FaMicrosoft className="icon" /> Sign Up with Microsoft
                </button>
              </div>

              {/* Divider */}
              <div className="divider">
                <span>OR</span>
              </div>

              {/* Email Signup Form */}
              <form className="form">
                <button type="submit" className="email-btn">
                  Continue with Email
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <img src="/login.svg" alt="Illustration" className="right-image" />
        <h2 className="right-text">
          Empower your teams with AI
        </h2>
      </div>
    </div>
  );
};

export default Login;
