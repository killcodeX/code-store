import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import { useFormik } from "formik";
import { Form, Button, Col } from "react-bootstrap";
import { getAddPostodal } from "../../Redux/Actions/postActions";
import { Post } from "../../Interface/interface";
import { ModalHead, FormLabel } from './style';

export default function AddPost() {
  const display = useSelector((state: any) => state.post.addP);

  const validate = (values: Post) => {
    const errors: Post = {};

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.desc) {
      errors.desc = "Required";
    }

    if (!values.language) {
      errors.language = "Required";
    }

    if (!values.code) {
      errors.code = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      language: "",
      code: ``,
    },
    validate: validate,
    onSubmit: (values: Post, { resetForm }) => {
      console.log("values -->", values);
      //resetForm({ values: "" });
    },
  });

  return (
    <Modal display={display} close={getAddPostodal}>
      <ModalHead>Add Post</ModalHead>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="title">
          <FormLabel>Title</FormLabel>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={formik.values.title}
            onChange={formik.handleChange}
            // isInvalid={formik.errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="pt-3" controlId="desc">
          <FormLabel>Description</FormLabel>
          <Form.Control
            as="textarea"
            placeholder="Enter Code description"
            value={formik.values.desc}
            onChange={formik.handleChange}
            // isInvalid={formik.errors.desc}
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          {formik.errors.desc}
        </Form.Control.Feedback>
        <Form.Group className="mt-3" controlId="language">
          <FormLabel>Select Language</FormLabel>
          <Form.Control
            as="select"
            onChange={formik.handleChange}
            // isInvalid={formik.errors.language}
          >
            <option value="">
              Select Any language
            </option>
            <option value="JavaScript">JavaScript</option>
            <option value="CSS">CSS</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
            <option value="HTML">HTML</option>
            <option value="Go">Go</option>
            <option value="Dart">Dart</option>
            <option value="React">React</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {formik.errors.language}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="pt-3 mb-3" controlId="code">
          <FormLabel>Code</FormLabel>
          <Form.Control
            as="textarea"
            placeholder="Enter Code"
            value={formik.values.code}
            onChange={formik.handleChange}
            // isInvalid={formik.errors.code}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.code}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Snippet
        </Button>
      </Form>
    </Modal>
  );
}
