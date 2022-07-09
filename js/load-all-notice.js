const noticeBoard = [
    {
        // 4th semester final exam routine
        title : "৫ম সেমিস্টার",
        subTitle : "মিডটার্ম পরীক্ষার রুটিন",
        update : "সর্বশেষ আপডেট ২৩ জুন ২০২২",
        link : "../others/5th-semester-final-exam-routine.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },


    {
        // 5th semester suggestion
        title : "৫ম সেমিস্টার",
        subTitle : "সাজেশন এর আপডেট",
        update : "সর্বশেষ আপডেট ২৪ জুন ২০২২",
        link : "../others/suggestion-update.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },


    {
        // 5th semester assignment
        title : "৫ম সেমিস্টার",
        subTitle : "Assignment এর আপডেট",
        update : "সর্বশেষ আপডেট ০৮ জুলাই ২০২২",
        link : "../others/assignment-update.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },


    {
        // 5th semester class routine
        title : "৫ম সেমিস্টার",
        subTitle : "ক্লাস রুটিন",
        update : "সর্বশেষ আপডেট ৯ই জুন ২০২২",
        link: "../docs/5th Semester class routine(reviced).pdf",
        btnColor : "btn-danger",
        downloadIcon : `<i class="fas fa-download"></i>`,
        btnText : "ডাউনলোড করুন"
    },

    {
        // 5th semester book list
        title : "৫ম সেমিস্টার",
        subTitle : "বইয়ের তালিকা",
        update : "সর্বশেষ আপডেট ১৩ এপ্রিল ২০২২",
        link : "../docs/5th-semester-book-list.png",
        btnColor : "btn-danger",
        downloadIcon : `<i class="fas fa-download"></i>`,
        btnText : "ডাউনলোড করুন"
    },

    {
        // 4th semester book list
        title : "৪র্থ সেমিস্টার",
        subTitle : "বইয়ের তালিকা",
        update : "সর্বশেষ আপডেট ১১ই মে ২০২২",
        link : "../docs/4th-semester-book-list.jpg",
        btnColor : "btn-danger",
        downloadIcon : `<i class="fas fa-download"></i>`,
        btnText : "ডাউনলোড করুন"
    },

    {
        // cover page
        title : "Cover page",
        subTitle : "For All Assignment",
        update : "Computer Technology batch 2019-2020",
        link : "../docs/Cover page.pdf",
        btnColor : "btn-danger",
        downloadIcon : `<i class="fas fa-download"></i>`,
        btnText : "ডাউনলোড করুন"
    }
]


const noticeSection = document.getElementById("noticeSection");


const loadNotice = () => {
    noticeBoard.map(notices => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-md-4");
        cardElement.classList.add("col-sm-12");
        cardElement.innerHTML = `

            <div class="row p-3 box">
                <div class="col-md-4 img">
                    <img class="m-3" src="../img/istt1.png" alt="istt logo">
                </div>
                <div class="col-md-8 col-sm-12">
                    <h2 class="text-center text-md-left">${notices.title}</h2>
                    <p class="text-center text-md-left">${notices.subTitle}</p>
                    <p class="text-center text-md-left">${notices.update}</p>

                    <a class="btn ${notices.btnColor} d-block click" href="${notices.link}">${notices.downloadIcon} ${notices.btnText}</a>
                </div>
            </div>
        `;

        noticeSection.appendChild(cardElement);
    });
}


loadNotice();