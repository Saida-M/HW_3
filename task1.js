const getDate = (seconds) => {
    if (typeof seconds !== "number" || isNaN(seconds) || seconds <= 0) {
        return "Enter a positive number";
    }
    let year = 0;
    let month = 0;
    let day = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;

    minute = Math.trunc(seconds / 60);
    second = seconds % 60;
    hour = Math.trunc(minute / 60);
    minute = minute % 60;
    day = Math.trunc(hour / 24);
    hour = hour % 24;
    month = Math.trunc(day / 30);
    day = day % 30;
    year = Math.trunc(month / 12);
    month = month % 12;

    let obj = {
        years: year,
        months: month,
        days: day,
        hours: hour,
        minutes: minute,
        seconds: second,
    };
    return obj;
}
console.log(getDate(86500));