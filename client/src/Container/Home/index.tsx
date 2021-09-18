import React from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { HomeSectionWrapper } from "./style";

export default function Home() {
  let arr = [1, 2, 3, 4];
  return (
    <div>
      <Header />
      <SideBar />
      <HomeSectionWrapper>
        <div className="row">
          {arr.map((item) => {
            return <div className="col-sm-4">hi</div>;
          })}
        </div>
      </HomeSectionWrapper>
    </div>
  );
}
