import React, { useEffect, useState } from "react";
import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteJob, updateJob } from "../slices/jobSlice";
import { getClasses } from "../util/getClasses";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

function LisItem({ job }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  debugger;
  useEffect(() => {}, []);

  return (
    <ListGroupItem style={{ alignItems: "flex-start" }} as="li">
      <p> {job.title} </p>

      <Button variant="secondary">
        <AiOutlineEdit></AiOutlineEdit>
      </Button>
      <Button variant="danger">
        <AiFillDelete></AiFillDelete>
      </Button>
    </ListGroupItem>
  );
}

export default LisItem;
