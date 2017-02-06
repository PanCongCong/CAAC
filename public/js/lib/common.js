//设置cookie
function setCookie(cname, cvalue, exdays) {
    var expires;
    if (exdays != 0) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    else {
        document.cookie = cname + "=" + cvalue;
    }
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie  
function clearCookie(name) {
    setCookie(name, "", -1);
}
function checkCookie() {
    var NAME = getCookie("username");
    if (NAME != "") {
        alert("Welcome again " + NAME);
    } else {
        NAME = prompt("Please enter your name:", "");
        if (NAME != "" && NAME != null) {
            setCookie("username", NAME, 365);
        }
    }
}
function back(cookie) {
    clearCookie(cookie);
    window.location = "login.html";
}
// function getTemp(tempid){
//     switch(tempid){
//         case "11":{
//             return "";
//         }
//         case "12":{
//             return "";
//         }
//     }
// }
//排除重复项
function getGroup(arrayList, key) {
    var result = [];
    var flag = [];
    for (var i = 0; i < arrayList.length; i++) {
        if (flag.indexOf(arrayList[i][key]) < 0) {
            result.push(arrayList[i]);
            flag.push(arrayList[i][key]);
        }
    }
    return result;
}
function formatDateTime(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
};  