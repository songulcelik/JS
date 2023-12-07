/*
    SORTING
    Eğer negatif bir sayı dönerse, a, b den önce sıralanır
    Eğer pozitif bir sayı dönerse, b, a dan önce sıralanır.
    Eğer sıfır dönerse değişiklik yapmaz
*/
const stringSortASC = (arr) => {
    return arr.sort((a, b) => a.localeCompare(b));
};
const stringSortDESC = (arr) => {
    return arr.sort((a, b) => b.localeCompare(a));
};
const numberSortASC = (arr) => {
    return arr.sort((a, b) => a - b);
};
const numberSortDESC = (arr) => {
    return arr.sort((a, b) => b - a);
};
const randomSort = (arr) => {};
