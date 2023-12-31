function convertStringToDateWithoutTimezone(dateInString) {
    const date = new Date(dateInString)
    const computedDate = 60000 * date.getTimezoneOffset()
    return new Date(date.getTime() + computedDate)
}

function convertDateTimeToDate(date) {
    const weekend = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ]
    return weekend[date.getDay()]
        + " "
        + months[date.getMonth()]
        + " "
        + date.getDate()
        + " "
        + date.getFullYear()
}

function convertDateTimeToTime(date) {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

function omitLongString(str, len) {
    if (str.length > len)
        return str.substring(0, len - 3) + "..."
    return str
}

function getToastDataFromResponse(response) {
    const toastDataTemp = {}
    switch (response?.status) {
        case 201:
        case 200:
            toastDataTemp.message = "Success!";
            toastDataTemp.alertType = "success";
            break;
        default:
            toastDataTemp.message = "Error!"
            toastDataTemp.alertType = "error"
            break;
    }
    return toastDataTemp
}

export const Helper = {
    convertStringToDateWithoutTimezone,
    convertDateTimeToDate,
    convertDateTimeToTime,
    omitLongString,
    getToastDataFromResponse,
}