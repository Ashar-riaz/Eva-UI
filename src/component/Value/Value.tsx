'use client'; // Add this at the top of the file to make it a Client Component
import { useState } from "react";
import "./value.css"
// Add this type at the top, after imports
type TabType = 'values' | 'vision' | 'mission';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("values"); 

  const tabContent: Record<TabType, JSX.Element> = { 
    values: (
      <>
        <h3>Tab Content Title</h3>
        <ul>
          <li>AI-Based Chatbot Assistant</li>
          <li>Learning And Improving Our Responses</li>
          <li>Language Model Developed By OpenAI</li>
        </ul>
      </>
    ),
    vision: (
      <>
        <h3>Our Vision</h3>
        <ul>
          <li>Delivering Advanced AI Solutions</li>
          <li>Empowering Businesses with AI</li>
          <li>Shaping the Future of Technology</li>
        </ul>
      </>
    ),
    mission: (
      <>
        <h3>Our Mission</h3>
        <ul>
          <li>Driving Innovation Through AI</li>
          <li>Making AI Accessible to Everyone</li>
          <li>Enhancing User Experiences</li>
        </ul>
      </>
    ),
  };

  return (
    <div className="tabs-container">
      {/* Tab Buttons */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "values" ? "active" : ""}`}
          onClick={() => setActiveTab("values")}
        >
         <span className="about-heading"> Our Values</span>
        </button>
        <button
          className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
          onClick={() => setActiveTab("vision")}
        >
          <span className="about-heading"> Our Vision</span>
        </button>
        <button
          className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
          onClick={() => setActiveTab("mission")}
        >
          <span className="about-heading">Our Mission</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabContent[activeTab]} {/* Display content based on active tab */}
      </div>
    </div>
  );
};

export default Tabs;
