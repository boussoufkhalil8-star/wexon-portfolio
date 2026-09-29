//todo:*==================== 1:scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(section =>{
        let top = window.scrollY;//تمثل مكان المستخدم الحالي في الصفحة.
        let offset = section.offsetTop - 150; //معرفة بداية الـ Section , section.offsetTop تعطيك المسافة بين بداية الـ section وأعلى الصفحة.
        let height = section.offsetHeight; //هذا يعطيك ارتفاع الـ section
        let id = section.getAttribute("id"); //. الحصول على ID

        if(top >= offset && top < offset + height) //هل الـ Scroll الحالي موجود داخل حدود هذا الـ section؟هل الـ Scroll الحالي موجود داخل حدود هذا الـ section؟
        {
            navLinks.forEach(links =>{ //المرور على روابط الـ Navbar
                links.classList.remove("active");//إزالة active من كل الروابط
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");//إضافة active للرابط الصحيح
                //ابحث عن رابط الـ Navbar الذي يحتوي href الخاص به على ID الـ section الحالية، ثم أضف له active.
            })
        }
    })

    //todo:*==================== 2:sticky navbar ====================*/
    let header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 100);

    //todo:*==================== 4:remove toggle icon and navbar when click navbar link (skroll) ====================*/
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};
//todo:*==================== 3:toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};


//todo:*==================== 5: scroll reveal ====================*/

ScrollReveal({
    reset: true,
    distance: "50px",
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading  , #preloader h1', {
    origin: "top"
});

ScrollReveal().reveal('.home-img, .services .container, .project-box , .tools-box', {
    origin: "bottom"
});

ScrollReveal().reveal('.walaa h3, .walaa-img , .product', {
    origin: "left"
});


//todo:*==================== 6: typed js ====================*/

const typed = new Typed(".multiple-text", {
    strings: [
        "Presence",
        "Prestige",
        "Power"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



//!:*==================== 6: dark light mode  ====================*/
let darkmodeIcon = document.querySelector("#darkmode-icon");

darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
}





//!:*====================  make the web do hover in phone  ====================*/

const servicesBoxes = document.querySelectorAll(".services-box");
const color = document.querySelectorAll(".color")

servicesBoxes.forEach(box => {
    box.addEventListener("touchstart", () => {});
});

color.forEach(box => {
    box.addEventListener("touchstart", () => {});
});









/* ==================================================
   PROJECT DATA
================================================== */

const projects = {

    quantum: {

        title: "Quantum — From Idea To Identity",

        tags: [
            "BRAND IDENTITY",
        ],

        description:
            "Quantum Tech a complete visual identity exploring the future of technology through clean design, bold colors, and modern branding.",

        images: [
            "quantum2.JPG",
            "quantum3.JPG",
            "quantum4.JPG",
            "quantum5.JPG",
            "quantum6.JPG",
            "quantum7.JPG",
            "quantum8.JPG",
        ]

    },


    powerfitness: {

        title: "Power fitness — Logo",

        tags: [
            "LOGO DESIGN",
        ],

        description:
            "Conceptual logo redesign for Power Fitness gym",

        images: [
            "powerfitness.PNG",
            "power-fitness1.PNG",
            "power-fitness2.JPG",
        ]

    },


    bonasill: {

        title: "Bon Asill — Brand Identity",

        tags: [
            "BRAND IDENTITY",
        ],

        description:
            "A modern identity designed to communicate simplicity, confidence and a strong visual presence.",

        images: [
            "bon-asill1.PNG",
            "bon-asill2.PNG",
            "bon-asill3.JPG",
        ]

    },


    averra: {

        title: "Averra — Logo Design",

        tags: [
            "LOGO DESIGN",
        ],

        description:
            "A modern logo design to communicate simplicity, confidence and a strong visual presence.",

        images: [
            "averra1.JPG",
            "averra2.PNG",
        ]

    }

};


/* ==================================================
   ELEMENTS
================================================== */

const projectBoxes =
    document.querySelectorAll(".project-box");

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTags =
    document.getElementById("modalTags");

const modalImages =
    document.getElementById("modalImages");

/* ==================================================
   OPEN PROJECT
================================================== */
projectBoxes.forEach(box => {
    box.addEventListener("click", () => {
        const projectId =
            box.dataset.project;
        const project =
            projects[projectId];
        if (!project) return;
        /* ---------- Title ---------- */
        modalTitle.textContent =
            project.title;
        /* ---------- Description ---------- */
        modalDescription.textContent =
            project.description;
        /* ---------- Tags ---------- */
        modalTags.innerHTML = "";
        project.tags.forEach(tag => {
            const span =
                document.createElement("span");
            span.textContent = tag;
            modalTags.appendChild(span);
        });
        /* ---------- Images ---------- */
        modalImages.innerHTML = "";
        project.images.forEach(image => {
            const img =
                document.createElement("img");
            img.src = image;
            img.alt = project.title;
            modalImages.appendChild(img);
        });
        /* ---------- Open modal ---------- */
        projectModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});
/* ==================================================
   CLOSE MODAL
================================================== */
function closeProject() {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
}
/* Close button */
modalClose.addEventListener("click", closeProject);
/* ==================================================
   CLICK OUTSIDE
================================================== */
projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
        closeProject();
    }
});
/* ==================================================
   ESCAPE KEY
================================================== */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeProject();
    }
});
