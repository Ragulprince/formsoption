import React from "react";
import { MainTimeBar } from "../../components/MainTimeBar";
import "./style.css";

export const FormsOptions = () => {
  return (
    <div className="forms-options">
      <div className="div">
        <div className="overlap">
          <MainTimeBar
            className="main-time-bar-instance"
            img="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/vector-5.svg"
            vector="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/vector-6.svg"
          />
          <MainTimeBar
            className="main-time-bar-2"
            elementPmClassName="design-component-instance-node"
            group="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/group-1865-1@2x.png"
            img="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/vector-1.svg"
            vector="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/vector-2.svg"
          />
        </div>
        <h1 className="welcome-demo">Welcome, Demo</h1>
        <div className="forms-button">
          <div className="overlap-group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="ic-baseline" />
                <div className="text-wrapper">forms</div>
              </div>
            </div>
            <img
              className="vector-2"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/vector-4.svg"
            />
          </div>
        </div>
        <div className="profile">
          <div className="overlap-group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-2">profile</div>
              </div>
            </div>
            <img
              className="group-2"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/group@2x.png"
            />
          </div>
        </div>
        <div className="total-count">
          <div className="overlap-group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-3">total count</div>
              </div>
            </div>
            <img
              className="vector-3"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/vector-3.svg"
            />
          </div>
        </div>
        <img
          className="daco"
          alt="Daco"
          src="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/daco-5185090-1@2x.png"
        />
        <div className="group-3">
          <div className="text-wrapper-4">Log Out</div>
          <img
            className="material-symbols"
            alt="Material symbols"
            src="https://generation-sessions.s3.amazonaws.com/39cca356aafca08925fca1616561f660/img/material-symbols-power-rounded.svg"
          />
        </div>
      </div>
    </div>
  );
};
