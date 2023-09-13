import { Link } from "react-router-dom";

import { CONFIGURE_ROUTE } from "../../utils/consts";
import ratingCalculate from "../../utils/ratingCalculate";

import RatingView from "../RatingView/RatingView";

import "./results.css";

const Results = ({ wins, currentWord, restart }) => {

    return (
        <article className="results">
            <div className="results__title">
                <h1>Результати:</h1>
            </div>
            <div className="results__stats">
                <RatingView rate={ratingCalculate(wins, currentWord)} />
                <span className="stats">
                    {wins}/{currentWord}
                </span>
                <RatingView rate={ratingCalculate(wins, currentWord)} />
            </div>
            <div className="results__buttons">
                <button
                    className="results__button button--restart"
                    onClick={restart}
                >
                    Пройти спочатку
                </button>
                <br />
                <Link to={CONFIGURE_ROUTE}>
                    <button className="results__button button--to_dict">
                        Словник
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default Results;