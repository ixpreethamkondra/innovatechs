const ImageCard = ({ image, text }) => {
  return (
    <div className="image-card">
      <img src={image} alt="card" />
      <div className="overlay">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default ImageCard;
