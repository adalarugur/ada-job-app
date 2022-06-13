import React from "react";
import { useSelector } from "react-redux";
import LisItem from "./LisItem";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";

function AppList() {
  const jobList = useSelector((state) => state.job.jobList);
  const filterStatus = useSelector((state) => state.job.filterStatus);
  const sortedJobList = [...jobList];
  debugger;
  sortedJobList.sort((a, b) => b.status < a.status);
  const filteredJobList = sortedJobList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });
  return (
    <div>
     
      
      <br></br>

      <ListGroup>
        {filteredJobList && filteredJobList.length > 0 ? (
          filteredJobList.map((job) => <LisItem key={job.id} job={job} />)
        ) : (
          <p>not jobs</p>
        )}
      </ListGroup>
    </div>

    /*
    <div>
      {filteredJobList && filteredJobList.length > 0 ? (
        filteredJobList.map((job) => <LisItem key={job.id} job={job} />)
      ) : (
        <p>not jobs</p>
      )}
      </div> */
  );
}

export default AppList;
