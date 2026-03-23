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
        date: "Jul 2024 - Aug 2024",
        description: "Autonomous navigation system with SLAM and obstacle avoidance for mobile robots.",
        image: "assets/img/robot.gif",
        tags: ["ROS2", "Python", "Lidar", "SLAM"],
        links: { code: "https://github.com/Jawad0695/Robot_localization_and_mapping" }
    },
    {
        name: "Robotic Arm YOLOv8",
        category: "design",
        date: "Jan 2024 - Mar 2024",
        description: "6-DOF robotic arm integrated with real-time vision using YOLOv8 for gesture mimicking.",
        image: "assets/img/arm.gif",
        tags: ["YOLOv8", "OpenCV", "Python", "Robotics"],
        links: { code: "https://github.com/Jawad0695/Human-Arm-Mimicking-Robot" }
    },
    {
        name: "Lane Detection",
        category: "web",
        date: "Sep 2023 - Oct 2023",
        description: "Real-time lane line detection for autonomous driving using computer vision algorithms.",
        image: "assets/img/lane.gif",
        tags: ["OpenCV", "Python", "Computer Vision"],
        links: { code: "https://github.com/Jawad0695/Lane-Detection" }
    },
    {
        name: "RTAB-Map Mapping",
        category: "design",
        date: "Nov 2023 - Dec 2023",
        description: "3D environment mapping using RTAB-Map and RGB-D cameras for indoor exploration.",
        image: "assets/img/rtab.png",
        tags: ["RTAB-Map", "ROS", "RGB-D", "3D"],
        links: { code: "https://github.com/Jawad0695/Robot_Rtab_maping" }
    },
    {
        name: "Mobile Robot Design",
        category: "web",
        date: "May 2023 - Jun 2023",
        description: "CAD modeling and simulation of a four-wheeled mobile platform in SolidWorks and Gazebo.",
        image: "assets/img/ROBOTICS.gif",
        tags: ["SolidWorks", "Gazebo", "URDF", "CAD"],
        links: { code: "https://github.com/Jawad0695/robot-cad" }
    },
    {
        name: "Multi Object Tracking",
        category: "web",
        date: "Dec 2023 - Jan 2024",
        description: "Efficient multi-object tracking system using SORT and DeepSORT algorithms.",
        image: "assets/img/object.gif",
        tags: ["Python", "OpenCV", "Kalman Filter"],
        links: { code: "https://github.com/Jawad0695/Multi-object-Tracking" }
    },
    {
        name: "ORBSLAM3",
        category: "design",
        date: "Feb 2024 - Present",
        description: "Implementation of ORB-SLAM3 for monocular and stereo visual localization in ROS2.",
        image: "assets/img/orbslam.gif",
        tags: ["ORB-SLAM3", "C++", "ROS2", "SLAM"],
        links: { code: "https://github.com/Jawad0695/ORB-SLAM3-ROS2-Docker" }
    },
    {
        name: "A* Algorithm",
        category: "design",
        date: "Mar 2024",
        description: "Path planning simulation implementing the A* algorithm for grid-based search.",
        image: "assets/img/astar.gif",
        tags: ["A*", "C++", "ROS2", "Path Planning"],
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
    let trackEl = document.getElementById('projectsTrack');
    if (!trackEl) return;
    let html = '';
    projects.forEach((project, i) => {
        let tagsHTML = project.tags.map(tag => `<span class="work__tag">${tag}</span>`).join('');
        html += `
        <div class="featured-card" data-index="${i}">
            <div class="featured-card__img-wrap">
                <img src="${project.image}" alt="${project.name}" class="featured-card__img" loading="lazy">
                <span class="featured-card__badge">${project.date}</span>
            </div>
            <div class="featured-card__body">
                <h3 class="featured-card__title">${project.name}</h3>
                <p class="featured-card__desc">${project.description}</p>
                <button class="featured-card__read-more" onclick="openProjectModal(${i})">Read More</button>
                <div class="featured-card__tags">${tagsHTML}</div>
                <div class="featured-card__btns">
                    <a href="${project.links.code}" target="_blank" class="featured-card__btn featured-card__btn--primary">
                        <i class='bx bxl-github'></i> GitHub
                    </a>
                </div>
            </div>
        </div>`;
    });
    trackEl.innerHTML = html;
    initFeaturedCarousel(projects.length);
}

/* =============== PROJECT MODAL =============== */
function openProjectModal(index) {
    const project = projects[index];
    if (!project) return;

    const tagsHTML = project.tags.map(tag => `<span class="work__tag">${tag}</span>`).join('');

    const modal = document.createElement('div');
    modal.className = 'project-modal-overlay';
    modal.innerHTML = `
        <div class="project-modal">
            <button class="project-modal__close" onclick="this.closest('.project-modal-overlay').remove()">
                <i class='bx bx-x'></i>
            </button>
            <div class="project-modal__img-wrap">
                <img src="${project.image}" alt="${project.name}" class="project-modal__img">
            </div>
            <div class="project-modal__body">
                <h3 class="project-modal__title">${project.name}</h3>
                <span class="project-modal__date">${project.date}</span>
                <p class="project-modal__desc">${project.description}</p>
                <div class="project-modal__tags">${tagsHTML}</div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    /* Close on backdrop click */
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.remove();
    });

    /* Prevent body scroll */
    document.body.style.overflow = 'hidden';
    modal.addEventListener('click', () => {}, { once: false });

    /* Restore scroll when closed */
    const observer = new MutationObserver(() => {
        if (!document.body.contains(modal)) {
            document.body.style.overflow = '';
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true });
}

/* =============== FEATURED CAROUSEL ENGINE =============== */
function initFeaturedCarousel(total) {
    let current = 0;
    const track = document.getElementById('projectsTrack');
    const allCards = () => Array.from(track.querySelectorAll('.featured-card'));
    const prevBtn = document.getElementById('featuredPrev');
    const nextBtn = document.getElementById('featuredNext');
    const dotsWrap = document.getElementById('featuredDots');

    /* Build dots */
    let dotsHTML = '';
    for (let i = 0; i < total; i++) {
        dotsHTML += `<span class="featured-dot" data-i="${i}"></span>`;
    }
    dotsWrap.innerHTML = dotsHTML;

    function goTo(n) {
        current = ((n % total) + total) % total;
        const cardEls = allCards();

        /* Assign position classes */
        cardEls.forEach((card, i) => {
            card.classList.remove('is-prev', 'is-active', 'is-next', 'is-hidden');
            const diff = ((i - current) % total + total) % total;
            if (diff === 0)           card.classList.add('is-active');
            else if (diff === 1)      card.classList.add('is-next');
            else if (diff === total - 1) card.classList.add('is-prev');
            else                       card.classList.add('is-hidden');
        });

        /* Dots */
        dotsWrap.querySelectorAll('.featured-dot').forEach((d, i) =>
            d.classList.toggle('active', i === current)
        );
    }

    goTo(0);

    nextBtn.addEventListener('click', () => goTo(current + 1));
    prevBtn.addEventListener('click', () => goTo(current - 1));

    dotsWrap.addEventListener('click', e => {
        if (e.target.matches('.featured-dot')) goTo(+e.target.dataset.i);
    });

    /* Click side cards to navigate */
    track.addEventListener('click', e => {
        const card = e.target.closest('.featured-card');
        if (!card) return;
        if (card.classList.contains('is-next')) goTo(current + 1);
        if (card.classList.contains('is-prev')) goTo(current - 1);
    });
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


/* Removed MixItUp filter - replaced with custom carousel */
/* const linkWork = document.querySelectorAll('.work__item') */


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
sr.reveal(`.sidebar, .home__scroll`, { delay: 900, origin: 'bottom' })
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
const experienceItems = document.querySelectorAll('.experience__item');

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