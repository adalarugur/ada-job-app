import React from "react";
import { useSelector } from "react-redux";
import LisItem from "./LisItem";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import ListFilter from "./ListFilter";

function AppList() {
  const jobList = useSelector((state) => state.job.jobList);
  const filterStatus = useSelector((state) => state.job.filterStatus);
  const filterText = useSelector((state) => state.job.filterText); 

  const sortedJobList = [...jobList];
  debugger;
  sortedJobList.sort(sortedJobList.status);
  const filteredJobList = sortedJobList.filter((item) => {   
    //todo dynamic text input filter

    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });
  return (
    <div>
    <h3>Job List</h3>
      
      <ListFilter />
      <br/>

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
