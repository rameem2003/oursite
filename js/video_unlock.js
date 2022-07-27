const unlock_btn = document.getElementById("unlock_btn");


unlock_btn.addEventListener("click", () => {

    const video = document.getElementById("pcb_video");

    const input = document.getElementById("keys").value;

    const error = document.getElementById("error_text");

    password = "valobasha_obiram_legends";

    if(input == password){
        video.style.display = "block";
        video.src = '../videos/PCB/3d_layout_raw_file.mp4';
        error.innerHTML = "";
        input.style.display = "none";
        unlock_btn.style.display = "none"
    }else{
        video.style.display = "none";
        error.innerHTML = "Invalid password";
    }
})

console.log(video);