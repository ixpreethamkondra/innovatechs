import { useState } from "react";
import "./UserHome.css";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    location: "Hyderabad",
    type: "Full Time",
  },
  {
    id: 3,
    title: "Software Intern",
    company: "Microsoft",
    location: "Remote",
    type: "Internship",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Pune",
    type: "Contract",
  },
];

function UserHome() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobsData.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="user-home">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jobs by title, company, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Jobs List */}
      <div className="jobs-container">
        {filteredJobs.length === 0 ? (
          <p className="empty">No jobs found.</p>
        ) : (
          filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h2>{job.title}</h2>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <span className="type">{job.type}</span>
              <button className="apply-btn">Apply</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserHome;
