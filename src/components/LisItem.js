import React, { useEffect, useState } from "react";
import { ListGroupItem, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteJob, updateJob } from "../slices/jobSlice";
import { getClasses } from "../util/getClasses";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import UpdateModal from "./UpdateModal";

function LisItem({ job }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {}, []);

  const handleDelete = () => {
    //to do confirm dialog react lib
    dispatch(deleteJob(job.id));
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
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

    /*<UpdateModal
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        job={job}
      /> */
  );
}

export default LisItem;
