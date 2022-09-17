import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRatingDisabled({ hoverIndex, starCount, cursor }) {
  return (
    <>
      {" "}
      <div>
        {Array(starCount)
          .fill(0)
          .map((_, index) => {
            return (
              <FontAwesomeIcon
                icon={faStar}
                key={index}
                style={{
                  cursor: { cursor },
                  padding: "0.1rem",
                  color: hoverIndex > index ? "orange" : "gray",
                  height: "2rem",
                }}
              />
            );
          })}
      </div>
    </>
  );
}
