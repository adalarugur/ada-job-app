import React, { useEffect, useState } from "react";
import { ListGroupItem, Button, Container, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { deleteJob, updateJob } from "../slices/jobSlice";
import { getClasses } from "../util/getClasses";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import UpdateModal from "./UpdateModal"; //parent child bootsrap modal problem?

function LisItem({ job }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(job.status);

  useEffect(() => {}, []);

  const handleDelete = () => {
    confirmAlert({
      title: "Job  Delete Screen",
      message: "Job" + job.title + " is delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteJob(job.id)),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const handleUpdate = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleUpdateStatus = () => {
    if (job.status !== updateStatus) {
      dispatch(updateJob({ ...job, updateStatus }));
      alert("job Updated successfully");
    } else {
      alert("No changes made");
      return;
    }
  };

  return (
    <>
      <div>
        <ListGroupItem style={{ alignItems: "flex" }} as="li">
          <p> {job.title} </p>
          <p //to do ternary status colour control or state control?
          >
            {job.status}
          </p>

          <Button variant="secondary">
            <AiOutlineEdit onClick={() => handleUpdate()}></AiOutlineEdit>
          </Button>
          <Button onClick={() => handleDelete(job)} variant="danger">
            <AiFillDelete></AiFillDelete>
          </Button>
        </ListGroupItem>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Job Status : {job.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Select Job Status</Modal.Body>
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
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
          <Button onClick={handleUpdateStatus} variant="primary">
            Update Status
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    // modal component parent child props problem? refactor?
  );
}

export default LisItem;
