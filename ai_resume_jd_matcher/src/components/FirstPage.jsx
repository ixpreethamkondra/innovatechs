import { useNavigate } from "react-router-dom";
// import "../App.css";

function FirstPage() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1>Hello People</h1>

      <div className="image-grid">
        <div
        style={{
            display:"flex",gap:"50px",marginTop:"100px"
        }}>
          <img
            src="https://media.istockphoto.com/id/1696781145/photo/modern-building-in-the-city-with-blue-sky.jpg?s=612x612&w=0&k=20&c=POfayTyDe06tGX4CeJgS8-fb896MUC46dl3ZbHXBqN4="
            className="img"
            onClick={() => navigate("/company-login")}
            style={{ cursor: "pointer",
                
             }}
          />
          <>Company</>
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrIfMx7WH_mKywvWyKfkHPlCNMGGdGS1Mew&s"
            className="img"
            onClick={() => navigate("/user-login")}
            style={{ cursor: "pointer" }}
          />
          <>Users</>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
