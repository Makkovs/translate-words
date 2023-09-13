import { useEffect, useState } from "react";

import shuffleArray from "../utils/shuffleArray";

const useWords = (setLoading) => {
    const [words, setWords] = useState([]);
    const [shuffledWords, setShuffledWords] = useState([]);

    useEffect(() => {
        const localWords = localStorage.getItem("words") || [];
        if (!localWords.length) {
            localStorage.setItem("words", JSON.stringify([]));
        };

        const parsedLocalWords = JSON.parse(localWords);
        const sortedLocalWords = parsedLocalWords.filter(word => word.status === true);
        const shuffle = shuffleArray(sortedLocalWords);

        setWords(sortedLocalWords);
        setShuffledWords(shuffle);
        setLoading(false);
    }, []);

    return [words, setWords, shuffledWords, setShuffledWords];
};

export default useWords;