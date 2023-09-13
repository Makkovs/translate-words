import "./ratingview.css";

const RatingView = ({rate}) => {

    return (
        <div
            className={
                `rating__view ${rate > 70
                ? "rating__view--green"
                : rate > 40
                    ? "rating__view--yellow"
                    : "rating__view--red"
                }`
            }
        >
        </div>
    );
};

export default RatingView;