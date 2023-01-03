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
        name : "Mamun Sarkar",
        roll : 451629,
        topic : presentation.rameem,
    },

    {
        name : "Tushar Ahmed",
        roll : 451632,
        topic : presentation.fahmida,
    },

    {
        name : "Mahmood Hassan Rameem",
        roll : 451638,
        topic : presentation.rameem,
    },

    {
        name : "Mohammad Shishir Ahmed",
        roll : 451640,
        topic : presentation.pathan,
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
        name : "Nusrat Jahan Sorna",
        roll : 451655,
        topic : presentation.mahabul
    },

    {
        name : "Abdullah Al Mamun",
        roll : 451659,
        topic : presentation.mong,
    },

    {
        name : "Rifatun Naher Mim",
        roll : 451663,
        topic : presentation.bithi,
    },

    {
        name : "Raihan Mahmud Salman",
        roll : 451664,
        topic : presentation.pathan
    },

    {
        name : "Jahedul Islam Rasel",
        roll : 451670,
        topic : presentation.rameem,
    },

    {
        name : "Mohammad Najmul Islam",
        roll : 451671,
        topic : presentation.pathan,
    },

    {
        name : "Maysha Siddiqi",
        roll : 451672,
        topic : presentation.bithi,
    },

    {
        name : "Najmus Sakib Junayed",
        roll : 451673,
        topic : presentation.mong,
    },

    {
        name : "Reetu Rahman",
        roll : 451682,
        topic : presentation.mong,
    },

    {
        name : "Farzana Akter Shithila",
        roll : 451683,
        topic : presentation.bithi,
    },

    {
        name : "Mohammad Sohel Rana",
        roll : 451686,
        topic : presentation.mahabul,
    },

    {
        name : "Nayem Kibria",
        roll : 451692,
        topic : presentation.fahmida,
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
        name : "Fatema Begum",
        roll : 451708,
        topic : presentation.pathan,
    },

    {
        name : "Sumona Islam Chadni",
        roll : 495514,
        topic : presentation.pathan,
    },

    {
        name : "Pabel Pathan",
        roll : 144812,
        topic : presentation.pathan
    },

    {
        name : "Mohammad Mainuddin",
        roll : 184351,
        topic : presentation.mahabul,
    },

    {
        name : "Mahammad Jasim Uddin",
        roll : 185533,
        topic : presentation.mong,
    },


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