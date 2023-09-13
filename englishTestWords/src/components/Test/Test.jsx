import { Link } from "react-router-dom";

import { CONFIGURE_ROUTE } from "../../utils/consts";

import "./test.css";

const Test = ({ loading, shuffledWords, param, currentWord, word, setWord, checkWord, wins }) => {

    const checkButton = (event) => {
        if (event.key == "Enter") {
            checkWord();
        };
    };

    return (
        <>
            {shuffledWords.length >= 1
                ?
                <article className="test">
                    <div className="test__word test__element">
                        <h2>
                            {Array.isArray(shuffledWords[currentWord][param])
                                ? shuffledWords[currentWord][param].join(", ")
                                : shuffledWords[currentWord][param]
                            }
                        </h2>
                    </div>
                    <div className="test__place test__element">
                        <input
                            type="text"
                            className="test__input"
                            placeholder="Переклад (лише 1 слово)"
                            value={word}
                            onKeyDown={e => checkButton(e)}
                            onChange={e => setWord(e.target.value.toLowerCase())}
                        />
                    </div>
                    <div className="test__place test__element">
                        <button
                            className="test__button button--enter"
                            onClick={checkWord}
                        >
                            Enter
                        </button>
                    </div>
                    <div className="test__stats test__element">
                        {wins}/{currentWord}
                    </div>
                    <div className="test__word word--last">
                        <h4>
                            {currentWord != 0
                                ? `${shuffledWords[currentWord - 1].word} - ${shuffledWords[currentWord - 1].translates.join(", ")}`
                                : ""
                            }
                        </h4>
                    </div>
                </article>
                :
                <div>
                    {!loading &&
                        <span>
                            У вас немає жодного слова у словнику.
                            <Link to={CONFIGURE_ROUTE}>Додайте його</Link>
                        </span>
                    }
                </div>
            }
        </>
    );
};

export default Test;