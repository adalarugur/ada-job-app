import React, { useEffect, useState } from "react";
import { ListGroupItem, Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { deleteJob, updateJob } from "../slices/jobSlice";
import { getClasses } from "../util/getClasses";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import "./ListItem.css";
//parent child bootsrap modal problem?

function LisItem({ job }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(job.status);

  useEffect(() => {}, []);

  const handleDelete = () => {
    confirmAlert({
      title: "Are you sure you want delete it?",
      message: "Job" + job.title + " is delete?",
      buttons: [
        {
          label: "Approve",
          onClick: () => dispatch(deleteJob(job.id)),
        },
        {
          label: "Cancel",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  const handleUpdateStatus = () => {
    if (job.status !== updateStatus) {
      dispatch(updateJob({ ...job, updateStatus }));
      confirmAlert({ message: job.title + " priority updated" });
    } else {
      alert("No changes made");
      return;
    }
  };

  return (
    <>
      <div>
        <ListGroupItem style={{ alignItems: "flex-start" }} as="li">        
          <Row>
            <Col><p>{job.title}</p></Col>
            <Col>
              <button disabled className={job.status}>
                {job.status.toUpperCase()}{" "}
              </button>
            </Col>
            <Col>
              <Button variant="secondary">
                <AiOutlineEdit
                  onClick={() => handleModalOpen()}
                ></AiOutlineEdit>
              </Button>
              <Button onClick={() => handleDelete(job)} variant="danger">
                <AiFillDelete></AiFillDelete>
              </Button>
            </Col>
          </Row>
        </ListGroupItem>
      </div>

      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="disabledTextInput">Job Name</Form.Label>
          <Form.Control type="text" placeholder={job.title} disabled readOnly />

          <Form.Label>Job Priority</Form.Label>
          <Form.Select
            id="status"
            onChange={(e) => setUpdateStatus(e.target.value)}
            value={updateStatus}
            defaultValue={job.status}
          >
            <option>Select Status</option>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </Form.Select>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleModalClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdateStatus} variant="danger">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    // modal component parent child props problem? refactor?
  );
}

export default LisItem;
