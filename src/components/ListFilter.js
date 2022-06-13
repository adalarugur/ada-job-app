import React from 'react'
import { Form,  Row, Col } from "react-bootstrap";

function ListFilter() {
  return (
    <Form>
        <Row>
          <Col>
            <input type="text" placeholder="arama metni"></input>
          </Col>
          <Col>
            <Form.Select
              id="filterstatus"
              //onChange={(e) => setStatus(e.target.value)}
              //value={status}
            >
              <option>Filter Status</option>
              <option value="urgent">Urgent</option>
              <option value="regular">Regular</option>
              <option value="trivial">Trivial</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
  )
}

export default ListFilter