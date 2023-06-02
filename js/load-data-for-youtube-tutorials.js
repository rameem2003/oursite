const youtube = [

    {
        // Listen coder's

        tumbnail : "https://yt3.googleusercontent.com/TDsYiFewzbNR19DuM2TusvAo16gFUWHXz-Y7k9L9-iYtBFpYWXXSp3rPYMnGghZKBLOg6K0RgYY=s176-c-k-c0x00ffffff-no-rj",

        titleName : "Republic of Legends",

        subTitle : "Android Development",

        topic : "XML, JAVA",

        youtubeLink : "https://www.youtube.com/playlist?list=PLIAcm_4Er8ZaZuPqJQSIDFEhZmUC2x60V",
    },

    {
        // Listen coder's

        tumbnail : "https://yt3.googleusercontent.com/TDsYiFewzbNR19DuM2TusvAo16gFUWHXz-Y7k9L9-iYtBFpYWXXSp3rPYMnGghZKBLOg6K0RgYY=s176-c-k-c0x00ffffff-no-rj",

        titleName : "Republic of Legends",

        subTitle : "SQL Tutorials",

        topic : "XAMPP, SQL",

        youtubeLink : "https://youtube.com/playlist?list=PLIAcm_4Er8ZYJ0j5o1i9mWs05O6i1XQ6v",
    },

    {
        // Listen coder's

        tumbnail : "https://yt3.googleusercontent.com/_4HMsc2PoJGF64YVxpCEEi4VJnSVP3ulSHcrYbPGKcaQhsQOmftW7vGGoLdt_R3OIBPEuvmEfw=s176-c-k-c0x00ffffff-no-rj",

        titleName : "Listen Coder",

        subTitle : "Web Development Class",

        topic : "HTML, CSS",

        youtubeLink : "https://youtube.com/playlist?list=PL9FdqxTbhKIK9Xv_V-lKdAG78xCX0IsXu",
    },


    {
        // Anisul islam Bootstrap

        tumbnail : "https://yt3.ggpht.com/ytc/AKedOLSKVDfHa1cOpwRjgKSrQXd492eXXIPGZYQ8XZNxlQ=s88-c-k-c0x00ffffff-no-rj",

        titleName : "Anisul Islam's",

        subTitle : "Bootstrap Tutorials",

        topic : "Bootstrap 4 & 5",

        youtubeLink : "https://youtube.com/playlist?list=PLgH5QX0i9K3oC_wmWEZa2xWxJauIRQ9kG",
    },

    {
        // Anisul islam jquery

        tumbnail : "https://yt3.ggpht.com/ytc/AKedOLSKVDfHa1cOpwRjgKSrQXd492eXXIPGZYQ8XZNxlQ=s88-c-k-c0x00ffffff-no-rj",

        titleName : "Anisul Islam's",

        subTitle : "JQuery Tutorials",

        topic : "JQuery v3.6.0",

        youtubeLink : "https://youtube.com/playlist?list=PLgH5QX0i9K3pSJG9Hwjnykd0hLGEsW4DB",
    },

    {
        // Darun IT PHP

        tumbnail : "https://yt3.ggpht.com/ytc/AKedOLSNEKy-v8nwZRZhRyzBROxlWHgmWVgueTXRBj9v=s88-c-k-c0x00ffffff-no-rj",

        titleName : "Darun IT",

        subTitle : "PHP Tutorials",

        topic : "Project",

        youtubeLink : "https://youtube.com/playlist?list=PLaCUFUZ_YQwVGxKqjXaQcWEeTMIWeEFjX",
    },


    {
        // C# tutorials

        tumbnail : "https://docs.microsoft.com/cs-cz/windows/images/csharp-logo.png",

        titleName : "Abdullah Al Mahmud's",

        subTitle : "C# Tutorials",

        topic : "",

        youtubeLink : "https://youtube.com/playlist?list=PLI8xDViFp_S8dyJ2CAEyG_K2hNn57jaNK",
    }
]


const youtubeSection = document.getElementById("youtubeSection");

const loadYoutube = () => {
    youtube.map(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-md-4");
        cardElement.classList.add("col-sm-12");

        cardElement.innerHTML = `
            <div class="row p-3 box">
                <div class="col-md-4 img">
                    <img class="m-3 tut-img" src="${card.tumbnail}" alt="">
                </div>
                <div class="col-md-8 col-sm-12">
                    <h2 class="text-center text-md-left">${card.titleName}</h2>
                    <p class="text-center text-md-left">${card.subTitle}</p>
                    <p class="text-center text-md-left">${card.topic}</p>

                    <a class="btn btn-primary d-block click" href="${card.youtubeLink}" target="_blank">Youtube Channel</a>
                </div>
            </div>
        `;

        youtubeSection.appendChild(cardElement);
    });
}


loadYoutube();