var exam = "30 March 2022";

function timeCounter(){
    examdate = new Date(exam);
    today = new Date();

    totalTime = (examdate - today)/1000;

    // variable for store day, hour, minite, second
    var day = Math.floor((totalTime / 3600) / 24);
    var hour = Math.floor((totalTime / 3600) % 24);
    var minute = Math.floor((totalTime / 60) % 60)
    var second = Math.floor(totalTime % 60);


    if(day < 10){
        day = "0" + day;
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }



    // block for print day, hour, minute, second in html markup

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

    console.log(day, hour, minute, second);

}


setInterval(timeCounter, 1000);
timeCounter();