export const roundTemp = (temp: number) => {
    return Math.round(temp);
}

export const convertToLocaleTime = (timeZone: number) => {
    var date = new Date(timeZone * 1000);
    var timestr = date.toLocaleTimeString();
}