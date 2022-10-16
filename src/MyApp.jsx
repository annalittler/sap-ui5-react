import React from "react";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/add.js";
import Home from "./Home";
import Detail from "./Detail";
import FSNILogo from "./FSNI.png";
import UserImg from "./UserImg.jpg";
import { Routes, Route, Navigate } from "react-router-dom";

export default function MyApp() {
  return (
    <>
      <ShellBar
        logo={<img src={FSNILogo} />}
        profile={
          <Avatar>
            <img src={UserImg} />
          </Avatar>
        }
        primaryTitle="My App"
      >
        <ShellBarItem icon="add" text="Add" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
}
