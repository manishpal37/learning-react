import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // we can do like this way also ({resName, cuisine})
  const { resData } = props; // destructuring objects
  const { cloudinaryImageId, cuisines, avgRating, costForTwo, name, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-image" alt="logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
