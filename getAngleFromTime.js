function getAngleFromTime(time) {
    time = time.split(':');

    const hour = normalizeHour(time[0]);
    const minutes = time[1];

    const angleForHours = 30 * hour + 30 * minutes / 60;
    const angleForMinutes = 6 * minutes;

    if(angleForMinutes > angleForHours) {return angleForMinutes - angleForHours};
    if(angleForHours > angleForMinutes) {return angleForHours - angleForMinutes};
    return 0;
}

function normalizeHour(hour) {
    if (hour == 12) {
        hour = 0;
    } else if (hour > 12) {
        hour = hour - 12;
    }
    return hour;
}

let timeCollection = new Array('12:00', '12:30', '00:00', '23:59', '13:45', '23:00', '19:19');
for(let time of timeCollection) {
    console.log(`Angle for ${time} is ${getAngleFromTime(time)}`);
}