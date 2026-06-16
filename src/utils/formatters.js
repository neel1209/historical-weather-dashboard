export const dataFormatter = (maxArray, minArray, dateArray) => {
    return dateArray.map((currentDate, index) => ({
        date: currentDate,
        max: maxArray[index],
        min: minArray[index],
    }));
};
