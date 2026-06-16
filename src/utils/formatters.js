export const dataFormatter = (dateArray, maxArray, minArray) => {
    return dateArray.map((currentDate, index) => ({
        date: currentDate,
        max: maxArray[index],
        min: minArray[index],
    }));
};
