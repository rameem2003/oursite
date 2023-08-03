const noticeBoard = [

    // {
    //     // 6th semester final
    //     title : "৬ষ্ঠ সেমিস্টার",
    //     subTitle : "ব্যবহারিক পরীক্ষার রুটিন",
    //     update : "সর্বশেষ আপডেট ২৬ ফেব্রুয়ারি ২০২৩",
    //     link : "../others/semester-practical-exam-routine.html",
    //     btnColor : "btn-primary",
    //     downloadIcon : "",
    //     btnText : "দেখুন"
    // },

    {
        // 7th semester final
        title : "ব্যাচ উদযাপন ২০২৩",
        subTitle : "কম্পিউটার ২০১৯ / ২০",
        update : "শীঘ্রই আসছে",
        link : "../others/ragday2023.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },

    {
        // 7th semester final
        title : "৭ম সেমিস্টার",
        subTitle : "ফাইনাল পরীক্ষার রুটিন",
        update : "সর্বশেষ আপডেট ২৫ জুন ২০২৩",
        link : "../others/semester-final-exam-routine.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },

    {
        // 6th semester class routine
        title : "৭ম সেমিস্টার",
        subTitle : "ক্লাস রুটিন",
        update : "সর্বশেষ আপডেট ০৯ ই মার্চ ২০২৩",
        link : "../docs/7th_semester_class_routine.pdf",
        btnColor : "btn-danger",
        downloadIcon : `<i class="fas fa-download"></i>`,
        btnText : "ডাউনলোড করুন"
    },

    {
        // 7th semester assignment
        title : "৭ম সেমিস্টার",
        subTitle : "Assignment এর আপডেট",
        update : "সর্বশেষ আপডেট ০৫ ই জুন ২০২৩",
        link : "../others/assignment-update.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },

    {
        // 6th semester suggestion
        title : "৬ষ্ঠ সেমিস্টার",
        subTitle : "সাজেশন এর আপডেট",
        update : "সর্বশেষ আপডেট ০২ রা ফেব্রুয়ারি ২০২৩",
        link : "../others/suggestion-update.html",
        btnColor : "btn-primary",
        downloadIcon : "",
        btnText : "দেখুন"
    },

    // {
    //     // 6th semester midterm
    //     title : "৬ষ্ঠ সেমিস্টার",
    //     subTitle : "মিডটার্ম পরীক্ষার রুটিন",
    //     update : "সর্বশেষ আপডেট ২৩ নভেম্বর ২০২২",
    //     link : "../others/6th-semester-midterm-exam-routine.html",
    //     btnColor : "btn-primary",
    //     downloadIcon : "",
    //     btnText : "দেখুন"
    // },
    
    // {
    //     // 6th semester class routine
    //     title : "৬ষ্ঠ সেমিস্টার",
    //     subTitle : "ক্লাস রুটিন",
    //     update : "সর্বশেষ আপডেট ১৩ অক্টোবর ২০২২",
    //     link : "../docs/6th Semester class routine.pdf",
    //     btnColor : "btn-danger",
    //     downloadIcon : `<i class="fas fa-download"></i>`,
    //     btnText : "ডাউনলোড করুন"
    // },

    {
        // 7th semester book list
        title : "৭ম সেমিস্টার",
        subTitle : "বইয়ের তালিকা",
        update : "সর্বশেষ আপডেট ০৫ ই মার্চ ২০২৩",
        link : "../docs/7th_semester_book_list.pdf",
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