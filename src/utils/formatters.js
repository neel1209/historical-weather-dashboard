export const dataFormatter = (dateArray, maxArray, minArray) => {
    return dateArray.map((currentDate, index) => ({
        date: currentDate,
        max: maxArray[index],
        min: minArray[index],
    }));
};

export const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
    ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};
