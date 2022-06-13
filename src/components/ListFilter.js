import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Row, Col } from "react-bootstrap";
import { updateFilterStatus } from "../slices/jobSlice";

function ListFilter() {
  const initialFilterStatus = useSelector((state) => state.job.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };
  return (
    <Form >
      <Row>
        <Col>
          <input type="text" placeholder="search job"></input>
        </Col>
        <Col>
          <Form.Select
            id="status"
            onChange={(e) => updateFilter(e)}
            value={filterStatus}
          >
            <option value="all">All</option>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
}

export default ListFilter;
