import React from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { HomeSectionWrapper } from "./style";

export default function Home() {
  return (
    <div>
      <Header />
      <SideBar />
      <HomeSectionWrapper></HomeSectionWrapper>
    </div>
  );
}
