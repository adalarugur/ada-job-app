import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addJob } from "../slices/jobSlice";
import { Button, Form, Row, Col } from "react-bootstrap";

function ListAdd() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [statusId, setStatusId] = useState(0);
  const [stList, setStList] = useState([]);
  const options = stList;

  useEffect(() => {
    //todo json status list
    fetch("http://localhost:4000/status")
      .then((res) => res.json())
      .then(
        (result) => {
          setStList(result);
        },
        (error) => {
          alert(error);
        }
      );
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
          statusid:statusId,
          time: new Date().toLocaleString(),
        })
      );
      alert("Job added successfully");
    }
  };

  const onSelectStatus = (e) => {
    //very bad code refactor!!!
    if (e.target.value === "urgent") {
      setStatusId(0);
    } else if (e.target.value === "regular") {
      setStatusId(1);
    } else if (e.target.value === "trivial") {
      setStatusId(2);
    }
    setStatus(e.target.value);
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Create Job
            </Form.Label>
            <Col sm="10">
              <Form.Control
                //pattern="[a-zA-Z0-9]+"? regex?
                type="text"
                id="title"
                maxLength="255"
                value={title}
                onChange={
                  (e) => setTitle(e.target.value.match("^[a-zA-Z0-9 '/s']*$")) //regex to do custom hook validation control?
                }
              />
            </Col>
          </Form.Group>
        </Col>

        <Col>
          <Form.Select
            id="status"
            onChange={(e) => onSelectStatus(e)}
            value={status}
          >
            {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
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
