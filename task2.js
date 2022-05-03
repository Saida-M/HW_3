const customTimer = (limit) => {
    if (typeof limit !== "number" || isNaN(limit) || limit <= 0) {
        console.log("Enter a positive number");
        return;
    }
    const getFormattedNumber = (number) => {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }
    let count = 0;
    const date = new Date();
    let seconds = date.getSeconds();
    while (true) {
        if (count === limit) {
            console.log(`Timer has stopped after ${limit} seconds.`);
            break;
        }
        const currentSeconds = new Date().getSeconds();
        if (currentSeconds !== seconds) {
            const currentDate = new Date();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            seconds = currentSeconds;
            count++;
            console.log(`Time: ${getFormattedNumber(hours)} : ${getFormattedNumber(minutes)} : ${getFormattedNumber(seconds)}`);
        }
    }
}

customTimer(10);