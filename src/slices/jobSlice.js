import { createSlice } from "@reduxjs/toolkit";

const getInitialJob = () => {
  const localJobList = window.localStorage.getItem("jobList");
  //  job list is not empty
  if (localJobList) {
    return JSON.parse(localJobList);
  }
  window.localStorage.setItem("jobList", []);
  return [];
};

const initialValue = {
  filterStatus: "all",
  filterText: "",
  jobList: getInitialJob(),
};

//crud and find
export const jobSlice = createSlice({
  name: "job",
  initialState: initialValue,
  reducers: {
    addJob: (state, action) => {
      state.jobList.push(action.payload);
      const jobList = window.localStorage.getItem("jobList");
      if (jobList) {
        const jobListArr = JSON.parse(jobList);
        jobListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("jobList", JSON.stringify(jobListArr));
      } else {
        window.localStorage.setItem(
          "jobList",
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateJob: (state, action) => {
      debugger;
      const jobList = window.localStorage.getItem("jobList");
      if (jobList) {
        const jobListArr = JSON.parse(jobList);
        jobListArr.forEach((job) => {
          if (job.id === action.payload.id) {
            job.status = action.payload.updateStatus;
          }
        });
        window.localStorage.setItem("jobList", JSON.stringify(jobListArr));
        state.jobList = [...jobListArr];
      }
    },
    deleteJob: (state, action) => {
      const jobList = window.localStorage.getItem("jobList");
      if (jobList) {
        const jobListArr = JSON.parse(jobList);
        jobListArr.forEach((job, index) => {
          if (job.id === action.payload) {
            jobListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem("jobList", JSON.stringify(jobListArr));
        state.jobList = jobListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    updateFilterText: (state, action) => {
      //state.filterText = action.payload;
      /*debugger;
      const filterJobs = state.jobList.filter((job) =>
        job.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filterText: action.payload.length > 0 ? filterJobs : [...state.job],
      };*/
    },
  },
});

export const {
  addJob,
  updateJob,
  deleteJob,
  updateFilterStatus,
  updateFilterText,
} = jobSlice.actions;
export default jobSlice.reducer;
