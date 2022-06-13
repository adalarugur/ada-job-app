import React, { useState } from "react";
import ListAdd from "./ListAdd";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/jobSlice";

function AppHeader() {
  const dispatch = useDispatch();
  const initialFilterStatus = useSelector((state) => state.job.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  return (
    <div>
       <h2>title and logo</h2>
      <br></br>
      <ListAdd> </ListAdd>
      <br></br>
    </div>
  );
}

export default AppHeader;
