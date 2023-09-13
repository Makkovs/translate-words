export default function ratingCalculate(wins, tries) {
    const result = (wins / tries) * 100;
    if (!result) {
        return 0;
    };
    return Math.round(result);
};