import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addJob } from "../slices/jobSlice";
import { Button, Form, Row, Col } from "react-bootstrap";
import { AiFillAlert } from "react-icons/ai";

function ListAdd() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setTitle("");
    setStatus("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || status === "" || status == null) {
      alert("plase enter title or select status");
      return;
    }
    if (title && status) {
      dispatch(
        addJob({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        })
      );
      alert("Job added successfully");
    }
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Label htmlFor="title">
            Create Job
            <input
              //pattern="[a-zA-Z0-9]+"? regex?
              type="text"
              id="title"
              maxLength="255"
              value={title}
              onChange={(e) => setTitle(e.target.value.match("^[a-zA-Z0-9]+$"))}
            />
          </Form.Label>
        </Col>

        <Col>
          <Form.Select
            id="status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option>Select Status</option>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </Form.Select>
        </Col>

        <Col>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Create Job +
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ListAdd;
