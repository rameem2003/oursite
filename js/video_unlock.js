const unlock_btn = document.getElementById("unlock_btn");


unlock_btn.addEventListener("click", () => {

    const video = document.getElementById("pcb_video");

    // const input = document.getElementById("keys").value;

    const error = document.getElementById("error_text");

    // const password = "valobasha_obiram_legends";
    // const password_for_all = "istt_cmt_5th_pcb";


    // if(input == password || input == password_for_all){
    //     video.style.display = "block";
    //     video.src = '../videos/PCB/3D_circuit_design.mp4';
    //     error.innerHTML = "";
    //     input.style.display = "none";
    //     unlock_btn.style.display = "none"
    // }else{
    //     video.style.display = "none";
    //     error.innerHTML = "Invalid password";
    // }


    video.style.display = "block";
    video.src = '../videos/PCB/3D_circuit_design.mp4';
    error.innerHTML = "";
})

// console.log(video);