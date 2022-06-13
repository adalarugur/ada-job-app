import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Row, Col } from "react-bootstrap";
import { updateFilterStatus, updateFilterText } from "../slices/jobSlice";

function ListFilter() {
  const initialFilterStatus = useSelector((state) => state.job.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const initialFilterText = useSelector((state) => state.job.filterText);
  const [filterText, setFilterText] = useState(initialFilterText);

  const dispatch = useDispatch();

  const updateFilter = (e,type) => {
    
    if(type==="selectType"){
        setFilterStatus(e.target.value);
        dispatch(updateFilterStatus(e.target.value));
    }else if(type==="inputType"){
        setFilterText(e.target.value);
        dispatch(updateFilterText(e.target.value));
    }
    
  };
  return (
    <Form >
      <Row>
        <Col>
          <input type="search" placeholder="search job" onChange={(e,type) => updateFilter(e,"inputType")} value={filterText} ></input>
        </Col>
        <Col>
          <Form.Select
            id="status"
            onChange={(e,type) => updateFilter(e,"selectType")}
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
