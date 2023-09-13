const year = (y) => {
  const number = "০১২৩৪৫৬৭৮৯";
  let input = String(y);

  let result = "";

  for (let i = 0; i < input.length; i++) {
    result = result + number[Number(input[i])];
  }

  return result;
};

document.getElementById("rights").innerHTML = `&copy; ২০২২-${year(
  new Date().getFullYear()
)} মাহমুদ হাসান রামীম। সর্বসত্ত্ব সংরক্ষিত।`;

$("#hide_text").hide(); // from index.html
$("#php_code").hide(); // form web development assignment-update.html
$("#C_S_Code_method_overloading").hide(); // form oop assignment-update.html
$("#C_S_Code_inheritance").hide(); // form oop assignment-update.html
$("#bootstrap_code").hide(); // form web development assignment-update.html

// index page hide text
$("#hide_btn").click(function () {
  $("#hide_text").slideToggle(); // from index.html
});
