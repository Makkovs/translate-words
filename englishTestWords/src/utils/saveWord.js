export default function saveWord(newWords) {
    const unUsedWords = JSON.parse(localStorage.getItem("words"))
        .filter(word => word.status === false);
    localStorage.setItem("words", JSON.stringify([...newWords, ...unUsedWords]));
};