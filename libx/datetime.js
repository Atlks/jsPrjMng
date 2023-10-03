


//const moment = require("moment");

// 24 Hour format
//console.log(moment().format("MM/DD/YYYY HH:mm:ss"));

global['curDatetime']=curDatetime
function  curDatetime()
{
  //  return moment().format("MM/DD/YYYY HH:mm:ss")
    return formatDate(new Date())
}

//console.log(curDatetime())
function padTo2Digits(num) {
    if(num.toString().length==1)
        return ""+"0"+num;
    else
        return num;
}


/**
 *
 * @param date
 * @returns {string}
 */
function formatDate(date) {
    return (
        [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}
