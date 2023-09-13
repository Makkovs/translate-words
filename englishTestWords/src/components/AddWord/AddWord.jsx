import { useEffect, useRef } from "react";

import "./addword.css";

const AddWord = ({ addWord }) => {

    const wordInputRef = useRef(null);
    const tranlateInputRef = useRef(null);

    useEffect(() => {
        wordInputRef.current.focus();
    }, []);

    const nextInput = () => {
        tranlateInputRef.current.focus();
    };

    const newWord = () => {
        addWord(wordInputRef.current.value, tranlateInputRef.current.value);
        wordInputRef.current.value = "";
        tranlateInputRef.current.value = "";
    };

    const checkButton = (event, callback) => {
        if (event.key == "Enter") {
            callback();
        };
    };

    return (
        <div className="add_word">
            <input
                className="add_word__input"
                type="text"
                placeholder="Слово"
                ref={wordInputRef}
                onKeyDown={e => checkButton(e, nextInput)}
            />
            <input
                className="add_word__input"
                type="text"
                placeholder="Його переклад"
                ref={tranlateInputRef}
                onKeyDown={e => checkButton(e, newWord)}
            />
            <button
                className="add_word__button"
                onClick={newWord}
            >
                Додати слово
            </button>
        </div>
    );
};

export default AddWord;