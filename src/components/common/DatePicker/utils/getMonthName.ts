/**
 * Возвращает название месяца в локализации en-US
 * @param monthNumber - порядковый номер месяца
 */
export const getMonthName = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-US", { month: "long" });
};
