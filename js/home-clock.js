function home_clock(){
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let daysNumber = date.getDay();

    var formate = document.getElementById("formate");
    var greeting = document.getElementById("greeting");
    var days = document.getElementById("days");

    const arrayOfWeek = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];


    // greeting setup
    if(hour >= 6 && hour < 12){
        greeting.innerHTML = "শুভ সকাল";
    }

    if(hour >= 12 && hour <= 17){
        greeting.innerHTML = "শুভ অপরাহ্ণ";
    }

    if(hour >= 18 && hour <= 19){
        greeting.innerHTML = "শুভ সন্ধ্যা";
    }

    if(hour >= 20){
        greeting.innerHTML = "শুভ রাত্রি";
    }

    // AMPM Setup

    if(hour == 0){
        hour = 12;
    }
    if(hour < 12){
        formate.innerHTML = "AM";
    }
    if(hour > 12){
        hour = hour - 12;
        formate.innerHTML = "PM";
    }

    // formate minute
    if(hour < 10){
        hour = '0' + hour;
    }


    if(minute < 10){
        minute = '0' + minute;
    }

    if(second < 10){
        second = '0' + second;
    }

    document.getElementById("clock").innerHTML = `এখন সময় ${hour} : ${minute} : ${second}`;

    days.innerHTML = ` || ${arrayOfWeek[daysNumber]}`

    setInterval(home_clock, 1000);
}

home_clock();