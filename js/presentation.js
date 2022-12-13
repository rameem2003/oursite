const presentation = {
    rameem : [
        "RDBMS Security",
        "RAID",
        "RDBMS Trigger",
    ],

    fahmida : [
        "Referencial Intrigity",
        "RDBMS Security",
        "Physical Storage Media",
    ],

    pathan : [
        "RAID Level",
        "Database Encryption & Authentication",
        "RDBMS Security"
    ],

    mahabul : [
        "RDBMS Trigger",
        "RDBMS Assertion",
        "Referencial Intrigity",
        "Fixed Lenght Record File",
    ],

    bithi : [
        "Database Security Encryption",
        "Sequencial File Organization",
        "Authentication Level",
    ],

    mong : [
        "RDBMS Security",
        "File Organization",
        "Encryption"
    ]


}


const regularStudent = [
    {
        name : "MD Emon Hossain",
        roll : 451618,
        topic : presentation.pathan,
    },

    {
        name : "Abdul Baten",
        roll : 451627,
        topic : presentation.rameem,
    },

    {
        name : "Fahmida Yeasmin",
        roll : 451628,
        topic : presentation.fahmida,
    },

    {
        name : "Mahmood Hassan Rameem",
        roll : 451638,
        topic : presentation.rameem,
    },

    {
        name : "Jahad Al Mahmud",
        roll : 451641,
        topic : presentation.mahabul,
    },

    {
        name : "Mong Mong San",
        roll : 451643,
        topic : presentation.mong,
    },

    {
        name : "Protik Chandra Barman",
        roll : 451644,
        topic : presentation.pathan,
    },

    {
        name : "Abdullah Al Sayem",
        roll : 451649,
        topic : presentation.mahabul,
    },

    {
        name : "Bithi Akter",
        roll : 451651,
        topic : presentation.bithi,
    },

    {
        name : "Mahabul Alam",
        roll : 451652,
        topic : presentation.mahabul,
    },

    {
        name : "Jahedul Islam Rasel",
        roll : 451670,
        topic : presentation.rameem,
    },

    {
        name : "Farzana Akter Shithila",
        roll : 451683,
        topic : presentation.bithi,
    },

    {
        name : "Mahadi Hassan",
        roll : 451699,
        topic : presentation.pathan,
    },

    {
        name : "Moumita Islam Urmi",
        roll : 451706,
        topic : presentation.bithi,
    },

    {
        name : "Pabel Pathan",
        roll : 144812,
        topic : presentation.pathan
    }


]


const presentationListSection = document.getElementById("presentationListSection");


const loadPresentationData = () => {
    regularStudent.map(student => {
        var alltopics = student.topic;
        let item = "";

        for(let i = 0; i < alltopics.length; i++){
            item = item + `<li class="font-weight-bold">${alltopics[i]}</li>`
        }

        const cardElement = document.createElement("div");
        cardElement.classList.add("col-md-4");
        cardElement.classList.add("col-sm-12");
        cardElement.innerHTML = `
            <div class="row p-3 text-white box">
                <div class="col-md-12 col-sm-12">
                    <h2 class="text-center">${student.name}</h2>
                    <p class="text-center">Roll: ${student.roll}</p>
                    <p class="text-center">Your Topics</p>
                    <ul class="text-center" style="list-style-type: none;"  id="list">${item}</ul>    
                </div>
            </div>
        `;



        presentationListSection.appendChild(cardElement)

    });
}

loadPresentationData();