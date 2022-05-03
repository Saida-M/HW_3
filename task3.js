const setDate = (date) => ({
    year: (year) => ({
        month: (month) => ({
            day: (day) => ({
                hour: (hour) => ({
                    minute: (minute) => ({
                        second: (second) => {
                            if (year) date.setFullYear(year);
                            if (month) date.setMonth(month - 1);
                            if (day) date.setDate(day);
                            if (hour) date.setUTCHours(hour);
                            if (minute) date.setMinutes(minute);
                            if (second) date.setSeconds(second);
                        }
                    })
                })
            })
        })
    })
});

const currentDate = new Date();
setDate(currentDate).year(1995).month(10).day(19).hour(18).minute(0).second(0);
console.log('currentDate :>> ', currentDate);