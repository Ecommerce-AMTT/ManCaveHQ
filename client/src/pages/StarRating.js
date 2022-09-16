import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating({
  handleMouseLeave,
  handleMouseEnter,
  handleClickRating,
  hoverIndex,
  starCount,
}) {
  return (
    <>
      {" "}
      <div style={{ paddingLeft: "3rem" }}>
        {Array(starCount)
          .fill(0)
          .map((_, index) => {
            return (
              <FontAwesomeIcon
                icon={faStar}
                key={index}
                style={{
                  cursor: "pointer",
                  padding: "0.1rem",
                  color: hoverIndex > index ? "orange" : "gray",
                  height: "2.5rem",
                }}
                onClick={() => handleClickRating(index + 1)}
                onMouseEnter={() => handleMouseEnter(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
      </div>
    </>
  );
}
