
const Star = ({ src, className }) => {
  return (
    <img 
      src={`/stars/${src}`} 
      alt="star" 
      className={`star ${className} absolute`} 
    />
  );
};

export default Star;
