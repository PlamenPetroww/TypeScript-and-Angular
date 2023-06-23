function workTime(input) {
    const hour = Number(input[0]);
    const day = input[1];
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday " || day === "Friday" || day === "Saturday" && hour >=10 && hour <18) {
        console.log("open");
    } else if (day === "Sunday" && hour <10 && hour > 18) {
        console.log("closed");
    }
}

workTime(["20", "Friday"])