import Star from './Star';

const StarsGroup1 = () => {
  return (
    <div className="stars-group relative relative h-full w-20">
      <Star src="star1.svg" className="rotate-clockwise bottom-6 md:right-8" />
      <Star src="star2.svg" className="rotate-counterclockwise top-10" />
    </div>
  );
};

const StarsGroup2 = () => {
  return (
    <div className="stars-group relative h-full w-10">
      <Star src="star3.svg" className="rotate-clockwise right-4 md:right-auto md:left-10" />
      <Star src="star4.svg" className="rotate-counterclockwise top-16" />
      <Star src="star5.svg" className="rotate-clockwise bottom-10 md:right-8" />
    </div>
  );
};

export { StarsGroup1, StarsGroup2 }
