/* =============== SERVICES / DATA =============== */
const skills = [
    { name: "SolidWorks", icon: "assets/img/solid.png" },
    { name: "AutoCAD", icon: "assets/img/autocad.png" },
    { name: "Matlab", icon: "assets/img/mat.png" },
    { name: "Ansys", icon: "assets/img/ansys.png" },
    { name: "ROS", icon: "assets/img/ROS.png" },
    { name: "Gazebo", icon: "assets/img/gazebo.png" },
    { name: "MoveIt", icon: "assets/img/moveit.png" },
    { name: "Python", icon: "assets/img/python.png" },
    { name: "MS Word", icon: "assets/img/word.png" },
    { name: "MS Excel", icon: "assets/img/excel.png" },
    { name: "PowerBI", icon: "assets/img/power.png" }
];

const projects = [
    {
        name: "Robot Navigation",
        category: "design",
        image: "assets/img/robot.gif",
        links: { code: "https://github.com/Jawad0695/Robot_localization_and_mapping" }
    },
    {
        name: "Robotic Arm YOLOv8",
        category: "design",
        image: "assets/img/arm.gif",
        links: { code: "https://github.com/Jawad0695/Human-Arm-Mimicking-Robot" }
    },
    {
        name: "Lane Detection",
        category: "web",
        image: "assets/img/lane.gif",
        links: { code: "https://github.com/Jawad0695/Lane-Detection" }
    },
    {
        name: "RTAB-Map Mapping",
        category: "design",
        image: "assets/img/rtab.png",
        links: { code: "https://github.com/Jawad0695/Robot_Rtab_maping" }
    },
    {
        name: "Mobile Robot Design",
        category: "web",
        image: "assets/img/ROBOTICS.gif",
        links: { code: "https://github.com/Jawad0695/robot-cad" }
    },
    {
        name: "Multi Object Tracking",
        category: "web",
        image: "assets/img/object.gif",
        links: { code: "https://github.com/Jawad0695/Multi-object-Tracking" }
    },
    {
        name: "ORBSLAM3",
        category: "design",
        image: "assets/img/orbslam.gif", /* Placeholder image */
        links: { code: "https://github.com/Jawad0695/ORB-SLAM3-ROS2-Docker" }
    },
    {
        name: "A* Algorithm",
        category: "design",
        image: "assets/img/astar.gif", /* Placeholder image */
        links: { code: "https://github.com/Jawad0695/Astar-algorithum-in-ros2" }
    }
];

/* =============== RENDER SKILLS =============== */
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="skill-card">
            <img src="${skill.icon}" alt="${skill.name}" />
            <h3>${skill.name}</h3>
        </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

/* =============== RENDER PROJECTS =============== */
function showProjects(projects) {
    let projectsContainer = document.querySelector(".work__container");
    if (!projectsContainer) return;
    let projectHTML = "";
    projects.forEach(project => {
        // Check if image source is a video (simple check for now)
        let isVideo = project.image.endsWith('.mp4') || project.image.endsWith('.webm');

        let mediaHTML = isVideo
            ? `<video src="${project.image}" autoplay muted loop playsinline class="work__bg"></video>`
            : `<img src="${project.image}" alt="${project.name}" class="work__bg">`;

        projectHTML += `
        <a href="${project.links.code}" target="_blank" class="work__card mix ${project.category}">
            ${mediaHTML}
            <div class="work__overlay">
                <h3 class="work__title">${project.name}</h3>
            </div>
        </a>`
    });
    projectsContainer.innerHTML = projectHTML;
}

// Initialize Data
showSkills(skills);
showProjects(projects);


/* =============== CHANGE BACKGROUND HEADER =============== */
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* =============== MIXITUP FILTER PORTFOLIO =============== */
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))


/* =============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })
sr.reveal(`.about__img`, { origin: 'left' })
sr.reveal(`.about__data`, { origin: 'right' })
sr.reveal(`.skills__content`, { origin: 'bottom' })
sr.reveal(`.work__card`, { interval: 100 })
sr.reveal(`.timeline-item:nth-child(odd)`, { interval: 200, origin: 'left' })
sr.reveal(`.timeline-item:nth-child(even)`, { interval: 200, origin: 'right' })
sr.reveal(`.contact__content`, { interval: 200 })
sr.reveal(`.footer`, { origin: 'bottom' })

/* Magic Cursor Follower - REMOVED per request */

/* =============== EXPERIENCE TOGGLE =============== */
const experienceItems = document.querySelectorAll('.timeline-content--expandable');

experienceItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle current item
        item.classList.toggle('expanded');

        // Optional: Close other items if you want accordion style
        // experienceItems.forEach(otherItem => {
        //     if (otherItem !== item) otherItem.classList.remove('expanded');
        // });
    });
});

/* WhatsApp Widget Logic */
function toggleChat() {
    const chat = document.getElementById('whatsapp-chat');
    chat?.classList.toggle('active');
}

function sendWhatsapp() {
    const input = document.getElementById('chat-input').value;
    const phone = "+923150120355";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(input)}`;
    window.open(url, '_blank');
}

/* Allow Enter key to send */
document.getElementById('chat-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendWhatsapp();
    }
});