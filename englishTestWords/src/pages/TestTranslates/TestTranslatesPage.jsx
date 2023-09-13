import { useState } from "react";

import shuffleArray from "../../utils/shuffleArray";
import saveWord from "../../utils/saveWord";
import useWords from "../../hooks/useWords";

import Loading from "../../components/UI/Loading/Loading";
import Results from "../../components/Results/Results";
import Test from "../../components/Test/Test";

import "./translates.css";

const TestTranslatesPage = () => {

    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(false);

    const [wins, setWins] = useState(0);
    const [currentWord, setCurrentWord] = useState(0);
    const [word, setWord] = useState("");

    const [words, setWords, shuffledWords, setShuffledWords] = useWords(setLoading);

    const checkWord = () => {
        const newWords = [...words];
        const currentShuffledWord = shuffledWords[currentWord];
        const wordIndex = words.findIndex(findWord => findWord.translates.join("") == currentShuffledWord.translates.join(""));

        newWords[wordIndex].tries += 1;
        if (currentShuffledWord.word == word) {
            newWords[wordIndex].wins += 1;
            setWins(wins + 1);
        };

        saveWord(newWords);

        setWord("");
        if (currentWord + 1 >= words.length) {
            setResults(true);
        };
        setCurrentWord(currentWord + 1);
    };

    const restart = () => {
        setLoading(true);
        setWord("");
        setShuffledWords(shuffleArray(words));
        setCurrentWord(0);
        setWins(0);
        setResults(0);
        setLoading(false);
    };

    return (
        <main className="test_uk">
            <Loading loading={loading} />
            {!loading &&
                <>
                    {results
                        ?
                        <Results
                            wins={wins}
                            currentWord={currentWord}
                            restart={restart}
                        />
                        :
                        <Test
                            loading={loading}
                            shuffledWords={shuffledWords}
                            param={"translates"}
                            currentWord={currentWord}
                            word={word}
                            setWord={setWord}
                            checkWord={checkWord}
                            wins={wins}
                        />
                    }
                </>
            }
        </main>
    );
};

export default TestTranslatesPage;