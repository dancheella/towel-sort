module.exports = function towelSort(matrix) {
    // Если аргумент matrix не определен или имеет длину 0, то вернуть пустой массив
    if (!matrix || matrix.length === 0) {
        return [];
    }
// Применяем метод reduce к матрице, инициализируя пустой результат
    return matrix.reduce((result, row, i) => {
        // Если индекс строки четный, то добавляем элементы строки в результат
        if (i % 2 === 0) {
            result.push(...row);
        // Иначе, добавляем элементы строки в обратном порядке
        } else {
            result.push(...row.reverse());
        }
        return result;
    }, []);
};



