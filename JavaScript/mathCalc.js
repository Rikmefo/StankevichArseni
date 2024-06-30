// mathCalc.js
function calculate(x) {
    try {
        if (x ** 2 + 3 * x - 4 === 0) throw new Error("Деление на ноль невозможно.");
        const y = (3 - x) / (x ** 2 + 3 * x - 4);
        return y;
    } catch (error) {
        alert(error.message);
        return null;
    }
}
