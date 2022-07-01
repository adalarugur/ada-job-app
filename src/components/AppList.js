import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LisItem from "./LisItem";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import ListFilter from "./ListFilter";

function AppList() {
  const jobList = useSelector((state) => state.job.jobList);
  const filterStatus = useSelector((state) => state.job.filterStatus);
  const filterText = useSelector((state) => state.job.filterText);
  const [searchedData, setSearchedData] = useState([]);

  //refactor
  useEffect(() => {
    if (filterText === "") {
      setSearchedData(jobList);
    } else {
      setSearchedData(filterText);
    }
  }, [jobList, filterText]);

  const sortedJobList = searchedData;

  /*if(sortedJobList !== null && sortedJobList.length>0) {
  sortedJobList.sort((a, b) => {
    return b.statusid - a.statusid;
  });
 }*/
  //array manipulation sorted?

  const filteredJobList = sortedJobList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  filteredJobList.sort((a, b)=>{return a.statusid - b.statusid});  //bug??

  return (
    <div>
      <h3>Job List</h3>

      <ListFilter />
      <br />

      <ListGroup>
        {filteredJobList && filteredJobList.length > 0 ? (
          filteredJobList.map((job) => <LisItem key={job.id} job={job} />)
        ) : (
          <p>not jobs</p>
        )}
      </ListGroup>
    </div>
  );
}

export default AppList;
