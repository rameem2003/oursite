const softwareInstall = [
    {
        // Proteous 8

        tumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigrWectbmT_FXFYAl5mT1qKS34Benzdtk3zyRSGojgkwL8WggP17CRWXCO-VSsleOTqQ&usqp=CAU",

        titleName : "Proteous 8",

        subTitle : "ডাউনলোড ও ইন্সটল",

        postLink : "./proteous.html",

        btn : "পোস্ট পড়ুন"
    },


    {
        // Ubuntu 22.04

        tumbnail : "https://static.pepper.ru/threads/raw/default/210415_1/re/1024x1024/qt/60/210415_1.jpg",

        titleName : "Ubuntu 22.04",

        subTitle : "ডাউনলোড ও ইন্সটল",

        postLink : "#",

        disable : "disabled",

        btn : "শীঘ্রই আসছে"
    },

    {
        // Git

        tumbnail : "https://panduz.net/wp-content/uploads/2020/12/git.png",

        titleName : "Git",

        subTitle : "ডাউনলোড, ইন্সটল এবং সেটআপ",

        postLink : "./git.html",

        btn : "পোস্ট পড়ুন"
    },

    {
        // NetBeans ও JDK 

        tumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXx3poElYav9KDv9z1Xy28YWVVwZWAbwIroerhI1wgS5TkTJVxNFXkgzBkbHbKZ0qbt34&usqp=CAU",

        titleName : "NetBeans ও JDK",

        subTitle : "ডাউনলোড এবং ইন্সটল",

        postLink : "./netbeans-java-jdk-install.html",

        btn : "পোস্ট পড়ুন"
    },


    {
        // Windows

        tumbnail : "https://yt3.ggpht.com/iKXHVtR-fLwbz17z4ikGr5nUG37KhCHMqBsqMm8y5K3fvqFqhkMS_7lN61frBDAU3k2qnqWu=s88-c-k-c0x00ffffff-no-rj",

        titleName : "Windows 10",

        subTitle : "ডাউনলোড এবং ইন্সটল",

        postLink : "./windows-10.html",

        btn : "পোস্ট পড়ুন"
    },

    {
        // VS code

        tumbnail : "https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s88-c-k-c0x00ffffff-no-rj",

        titleName : "Visual Studio Code",

        subTitle : "ডাউনলোড এবং ইন্সটল",

        postLink : "./visual-studio-code.html",

        btn : "পোস্ট পড়ুন"
    },

    {
        // XAMPP

        tumbnail : "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/XAMPP_logo.svg/1200px-XAMPP_logo.svg.png",

        titleName : "XAMPP",

        subTitle : "ডাউনলোড এবং ইন্সটল",

        postLink : "./xammp.html",

        btn : "পোস্ট পড়ুন"
    },
]


const softwareSection = document.getElementById("softwareSection");

const loadSoftwareTutorials = () => {
    softwareInstall.map(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-md-4");
        cardElement.classList.add("col-sm-12");

        cardElement.innerHTML = `
            <div class="row p-3 box">
                <div class="col-md-12 img">
                    <img class="m-3 soft-img" src="${card.tumbnail}" alt="">
                </div>
                <div class="col-md-12">
                    <h2 class="text-center">${card.titleName}</h2>
                    <p class="text-center">${card.subTitle}</p>

                    <a class="btn btn-primary d-block click ${card.disable}" href="${card.postLink}" target="_blank">${card.btn}</a>
                </div>
            </div>
        `;

        softwareSection.appendChild(cardElement);
    });
}


loadSoftwareTutorials();