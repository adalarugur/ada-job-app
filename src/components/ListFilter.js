import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col } from "react-bootstrap";
import { updateFilterStatus, updateFilterText } from "../slices/jobSlice";

function ListFilter() {
  const initialFilterStatus = useSelector((state) => state.job.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const initialFilterText = useSelector((state) => state.job.filterText);
  const [filterText, setFilterText] = useState(initialFilterText);

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  const changeSearchTerm = (e) => {
    setFilterText(e.target.value);
    dispatch(updateFilterText(e.target.value));
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Control
              type="search"
              placeholder="search job"
              onInput={(e) => changeSearchTerm(e)}
              value={filterText}
            />
          </Form.Group>
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
