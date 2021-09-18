import React from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import CodeCard from "../../Components/CodeCards";
import DisplayModal from "../../Components/DisplayModal";
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
            return (
              <div key={item} className="col-sm-4 mb-4">
                <CodeCard />
              </div>
            );
          })}
        </div>
      </HomeSectionWrapper>
      <DisplayModal />
    </div>
  );
}
