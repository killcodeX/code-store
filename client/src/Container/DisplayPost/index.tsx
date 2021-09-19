import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import { getDisplayPostModal } from "../../Redux/Actions/postActions";
import { ModalHead, PostTitle, PostDesc, PostTag } from "./style";

export default function DisplayPost() {
  const display = useSelector((state: any) => state.post.displayP);
  return (
    <Modal display={display} close={getDisplayPostModal}>
      <ModalHead>Display Post</ModalHead>
      <PostTitle>
        Frontend Performance Optimization with Code Splitting using React.Lazy &
        Suspense 🔥
      </PostTitle>
      <PostDesc>
        You will learn how to build and deploy a Serverless API with Cloudflare
        Workers. Enabling you to effectively manage a highly available backend
        for your projects.
      </PostDesc>
      <PostTag>Python</PostTag>
      <SyntaxHighlighter language="javascript" style={docco}>
        console.log('print')
      </SyntaxHighlighter>
    </Modal>
  );
}
