const noticeBoard = [
    {
        // 6th semester midterm
        title : "৬ষ্ঠ সেমিস্টার",
        subTitle : "ফাইনাল পরীক্ষার রুটিন",
        update : "সর্বশেষ আপডেট ১২ জানুয়ারি ২০২৩",
        link : "../others/semester-final-exam-routine.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },

    {
        // Presentation
        title : "Presentation",
        subTitle : "DBMS",
        update : "সর্বশেষ আপডেট ১৮ ডিসেম্বর ২০২২",
        link : "../others/presentation.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন",
        // disable : "disabled"
    },

    {
        // Project
        title : "Team List",
        subTitle : "Microcontroller Project",
        update : "সর্বশেষ আপডেট ০৮ জানুয়ারি ২০২৩",
        link : "../others/microcontroller_application.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন",
    },

    {
        // 5th semester assignment
        title : "৬ষ্ঠ সেমিস্টার",
        subTitle : "Assignment এর আপডেট",
        update : "সর্বশেষ আপডেট ০২ জানুয়ারি ২০২৩",
        link : "../others/assignment-update.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },

    {
        // 6th semester suggestion
        title : "৬ষ্ঠ সেমিস্টার",
        subTitle : "সাজেশন এর আপডেট",
        update : "সর্বশেষ আপডেট ৩০ নভেম্বর ২০২২",
        link : "../others/suggestion-update.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },

    {
        // 6th semester midterm
        title : "৬ষ্ঠ সেমিস্টার",
        subTitle : "মিডটার্ম পরীক্ষার রুটিন",
        update : "সর্বশেষ আপডেট ২৩ নভেম্বর ২০২২",
        link : "../others/6th-semester-midterm-exam-routine.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },
    
    {
        // 6th semester class routine
        title : "৬ষ্ঠ সেমিস্টার",
        subTitle : "ক্লাস রুটিন",
        update : "সর্বশেষ আপডেট ১৩ অক্টোবর ২০২২",
        link : "../docs/6th Semester class routine.pdf",
        btnColor : "btn-danger",
        downloadIcon : `<i class="fas fa-download"></i>`,
        btnText : "ডাউনলোড করুন"
    },

    {
        // 6th semester book list
        title : "৬ষ্ঠ সেমিস্টার",
        subTitle : "বইয়ের তালিকা",
        update : "সর্বশেষ আপডেট ০৬ অক্টোবর ২০২২",
        link : "../docs/Book list 6th semester.pdf",
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

                    <a class="btn ${notices.btnColor} ${notices.disable} d-block click" href="${notices.link}">${notices.downloadIcon} ${notices.btnText}</a>
                </div>
            </div>
        `;

        noticeSection.appendChild(cardElement);
    });
}


loadNotice();