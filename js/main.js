document.getElementById("rights").innerHTML = "&copy; ২০২২ মাহমুদ হাসান রামীম। সর্বসত্ত্ব সংরক্ষিত।";

$("#hide_text").hide(); // from index.html
$("#php_code").hide(); // form web development assignment-update.html
$("#C_S_Code_method_overloading").hide(); // form oop assignment-update.html
$("#C_S_Code_inheritance").hide(); // form oop assignment-update.html
$("#bootstrap_code").hide(); // form web development assignment-update.html


// index page hide text 
$("#hide_btn").click(function(){
    $("#hide_text").slideToggle(); // from index.html
});


// oop C# code
$("#hide_btn_cs_method_overloading").click(function(){
    $("#C_S_Code_method_overloading").slideToggle(); // form assignment-update.html
});

// oop C# code
$("#hide_btn_cs_inheritance").click(function(){
    $("#C_S_Code_inheritance").slideToggle(); // form assignment-update.html
});


// web development php code
$("#hide_btn_php").click(function(){
    $("#php_code").slideToggle(); // form assignment-update.html
});


// web development for bootstrap
$("#hide_btn_bootstrap").click(function(){
    $("#bootstrap_code").slideToggle(); // form assignment-update.html
});


