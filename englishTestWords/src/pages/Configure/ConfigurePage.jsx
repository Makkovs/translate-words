import { useEffect, useState } from "react";

import Modal from "../../components/UI/Modal/Modal";
import DictWord from "../../components/DictWord/DictWord";
import AddWord from "../../components/AddWord/AddWord";

import "./configure.css";

const ConfigurePage = () => {

    const [visible, setVisible] = useState(false);

    const [words, setWords] = useState([]);
    const [statuses, setStatuses] = useState([]);



    useEffect(() => {
        const localWords = localStorage.getItem("words") || [];
        if (!localWords.length) {
            localStorage.setItem("words", JSON.stringify([]));
        };

        const parsedLocalWords = JSON.parse(localWords);
        setStatuses(parsedLocalWords.map(word => word.status));
        setWords(parsedLocalWords.sort((a, b) => a.id - b.id));
    }, []);

    const addWord = (word, translate) => {
        setVisible(false);

        const splitedTranslete = translate.replace(/\s/g, '').split(",");
        const newWord = {
            id: Date.now(),
            word: word,
            translates: splitedTranslete,
            wins: 0,
            tries: 0,
            status: true
        };

        setWords([...words, newWord]);
        setStatuses([...statuses, true]);
        localStorage.setItem("words", JSON.stringify([...words, newWord]));
    };

    const deleteWord = (id) => {
        const newWords = words.filter(word => word.id !== id);
        localStorage.setItem("words", JSON.stringify(newWords));
        setWords(newWords);
    };

    const globalCheckMark = (event) => {
        const checkmarks = document.getElementsByClassName("word__checkmark");
        const newWords = [...words];

        for (let i = 0; i < checkmarks.length; i++) {
            checkmarks[i].checked = event.target.checked;
            newWords[i].status = event.target.checked;
        };

        localStorage.setItem("words", JSON.stringify(newWords));
        setWords(newWords);
    };

    const setWordStatus = (wordIndex, event) => {
        const newWords = [...words];
        newWords[wordIndex].status = event.target.checked;
        localStorage.setItem("words", JSON.stringify(newWords));
        setWords(newWords);
    };

    return (
        <main className="configure">
            <h2>Словник</h2>
            <article className="dict">
                <table className="dict__table">
                    <thead className="dict__thead">
                        <tr className="thead__columns columns">
                            <th className="thead__column">
                                <input
                                    className="global__checkmark"
                                    type="checkbox"
                                    onChange={e => globalCheckMark(e)}
                                />
                                Слово
                            </th>
                            <th className="thead__column">
                                Переклад
                            </th>
                            <th className="thead__column">
                                Статистика
                            </th>
                        </tr>
                    </thead>
                    {words.length > 0
                        ?
                        <tbody>
                            {words.map((thisWord, index) =>
                                <DictWord
                                    key={thisWord.id}
                                    thisWord={thisWord}
                                    deleteWord={deleteWord}
                                    status={statuses[index]}
                                    setWordStatus={setWordStatus}
                                    index={index}
                                />
                            )}
                        </tbody>
                        :
                        <tbody>
                            <tr>
                                <td>Nothing</td>
                            </tr>
                        </tbody>
                    }
                </table>
                <div className="dict__add_word">
                    <div
                        className="button--add_word"
                        onClick={() => setVisible(true)}
                    >
                        +
                    </div>
                </div>
                <Modal visible={visible} setVisible={setVisible}>
                    <AddWord
                        addWord={addWord}
                    />
                </Modal>
            </article>
        </main>
    );
};

export default ConfigurePage;