function timeCounter(){
    var ramadan = new Date("26 June 2022").getTime();
    var today = new Date().getTime();

    totalTime = (ramadan - today)/1000;

    // variable for store day, hour, minite, second
    var day = Math.floor((totalTime / 3600) / 24);
    var hour = Math.floor((totalTime / 3600) % 24);
    var minute = Math.floor((totalTime / 60) % 60)
    var second = Math.floor(totalTime % 60);

    var banner = document.getElementById("banner");
    var count_down = document.getElementById("count_down");
    var count_down_title = document.getElementById("count_down_title");
    var time_counter_body = document.getElementById("time_counter_body");


    if(day < 0 && hour < 0 && minute < 0 && second < 0){
        count_down_title.innerHTML = "পরীক্ষা শুরু";
        count_down_title.style.fontSize = "60px";
        time_counter_body.style.display = "none";
    }

    



    // block for print day, hour, minute, second in html markup

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

    // console.log(day, hour, minute, second);

    

}


setInterval(timeCounter, 1000);
timeCounter();