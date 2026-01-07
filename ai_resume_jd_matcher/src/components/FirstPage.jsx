import { useNavigate } from "react-router-dom";
import "../css/FirstPage.css";

function FirstPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to JobConnect</h1>
      <p className="landing-subtitle">
        A platform where companies post jobs and candidates apply with ease.
      </p>

      <div className="role-grid">
        <div
          className="role-card"
          onClick={() => navigate("/company-login")}
        >
          <img
            src="https://media.istockphoto.com/id/1696781145/photo/modern-building-in-the-city-with-blue-sky.jpg?s=612x612&w=0&k=20&c=POfayTyDe06tGX4CeJgS8-fb896MUC46dl3ZbHXBqN4="
            alt="Company"
          />
          <h3>Company</h3>
          <p>Post jobs and manage applications</p>
        </div>

        <div
          className="role-card"
          onClick={() => navigate("/user-login")}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrIfMx7WH_mKywvWyKfkHPlCNMGGdGS1Mew&s"
            alt="User"
          />
          <h3>Job Seeker</h3>
          <p>Apply for jobs</p>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;