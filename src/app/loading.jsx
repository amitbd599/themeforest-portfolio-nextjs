import React from "react";

const loading = () => {
  return (
    <div className="loading-data">
      <div className="radar-spinner">
        <div className="circle">
          <div className="circle-inner-container">
            <div className="circle-inner" />
          </div>
        </div>
        <div className="circle">
          <div className="circle-inner-container">
            <div className="circle-inner" />
          </div>
        </div>
        <div className="circle">
          <div className="circle-inner-container">
            <div className="circle-inner" />
          </div>
        </div>
        <div className="circle">
          <div className="circle-inner-container">
            <div className="circle-inner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
