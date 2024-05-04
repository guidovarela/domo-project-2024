let services = [
    {
        icon:"<i class='fa-regular fa-newspaper'></i>",
        title: "Business & Product Concept",
        content: "Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audit and prepare a viable and sensible product roadmap for achieving a perfect market fit",
        link:"#"
    },
    {
        icon:"<i class='fa-solid fa-desktop'></i>",
        title: "Web & Mobile Development",
        content: "Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages",
        link:"#"
    },
    {
        icon:"<i class='fa-regular fa-pen-ruler'></i>",
        title: "UX & UI Design",
        content: "Sketch information architectureand simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience",
        link:"#"
    },
]

let dataClients = [
    {
        name:"TNW",
        src:"img/tnw.jpg"
    },{
        name:"Google",
        src:"img/google.jpg"
    },{
        name:"Nike",
        src:"img/nike.jpg"
    },{
        name:"Airbnb",
        src:"img/airbnb.jpg"
    },{
        name:"ITNewsAfrica",
        src:"img/it-na.jpg"
    },

]

const siteNames = () => {
    let siteName = "compleet labs"
    let dataName = document.querySelectorAll(".name")
    for (const i of dataName) {
        i.innerHTML+=siteName
    }
}
siteNames()


const data = document.querySelector(".cards")
for (const i of services) {
    data.innerHTML+=`
        <div class="col-md-6 col-lg-4">
            <div class="card-single">
                <div class="icon">
                <span>${i.icon}</span>
                </div>
                <div class="title-card">
                    ${i.title}
                </div>
                <div class="title-content">
                    ${i.content}
                </div>
                <div class="link-card my-5">
                    <a href="${i.link}" class="btn-outline btn-online-lightmode">Learn More</a>
                </div>
            </div>
        </div>
    `
}

const getClients = () => {
    let logos = document.querySelector(".logos")
    for (const i of dataClients) {
        logos.innerHTML+=`
        <div><img class='img' src='${i.src}' alt='${i.name}'></div>
        `
    } 
}
getClients()