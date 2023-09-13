import ratingCalculate from "../../utils/ratingCalculate";

import "./dictword.css";

const DictWord = ({thisWord, deleteWord, setWordStatus, index}) => {

    return (
        <tr className="dict__word columns">
            <td>
                <input 
                    className="word__checkmark" 
                    type="checkbox"
                    checked={thisWord.status}
                    onChange={e => setWordStatus(index, e)}
                />
                {thisWord.word}
            </td>
            <td>{thisWord.translates.join(", ")}</td>
            <td>
                {thisWord.wins}/{thisWord.tries}
                ({ratingCalculate(thisWord.wins, thisWord.tries)}%)
                <span
                    className="word__delete"
                    onClick={() => deleteWord(thisWord.id)}
                >
                    X
                </span>
            </td>
        </tr>
    );
};

export default DictWord;