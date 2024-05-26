const reviews=[
    {
        id: 1,
        name: "Sana",
        job: "Frontend Developer",
        img: "./images/sq1.jpg",
        text: "A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. "
    },
    { 
        id: 2,
        name: "Eram",
        job: "Backend Developer",
        img: "./images/pan2.jpg",
        text: "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.",
    },

    {
        id: 3,
        name: "Sayba",
        job: "Frontend Developer",
        img: "./images/bir3.jpg",
        text: "A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. "
    },

    {
        id: 4,
        name: "Nisha",
        job: "Backend Developer",
        img: "./images/img3.jpg",
        text: "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.",
    },

    {
        id: 5,
        name: "Chandani",
        job: "Backend Developer",
        img: "./images/pan3.jpg",
        text: "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.",
    },

    {
        id: 6,
        name: "Sangeeta",
        job: "Frontend Developer",
        img: "./images/img7.jpg",
        text: "A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. ",
    }
]




let currentIndex = 0;
const image = document.querySelector(".image");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

function updateReview() {
    const review = reviews[currentIndex];
    image.src = review.img;
    name.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
}

updateReview();

const nextbtn = document.querySelector(".fa-greater-than");
const prevbtn = document.querySelector(".fa-less-than");

nextbtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex === reviews.length) {
        currentIndex = 0;
    }
    updateReview();
});

prevbtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1; 
    }
    updateReview();
});