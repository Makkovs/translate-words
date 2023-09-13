export default function shuffleArray(array) {
    if (array.length <= 1){
        return array;
    }
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    };
    return array;
};