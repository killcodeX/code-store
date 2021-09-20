import React, { useEffect } from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import CodeCard from "../../Components/CodeCards";
import DisplayPost from "../DisplayPost";
import AddPost from "../AddPost";
import EditPost from "../EditPost";
import { Post } from "../../Interface/interface";
import { HomeSectionWrapper, HomeBannerWrapper } from "./style";
import { getAllPost } from "../../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  let arr = [1, 2, 3];
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.post.allPost);

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <div>
      <Header />
      <SideBar />
      <HomeSectionWrapper>
        <div className="row">
          {posts?.length == 0 ? (
            <HomeBannerWrapper>hi</HomeBannerWrapper>
          ) : (
            posts.map((item: Post) => {
              return (
                <div key={item._id} className="col-sm-4 mb-4">
                  <CodeCard item={item} />
                </div>
              );
            })
          )}
        </div>
      </HomeSectionWrapper>
      <DisplayPost />
      <AddPost />
      <EditPost />
    </div>
  );
}
