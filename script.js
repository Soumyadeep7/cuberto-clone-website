/* =========================================================
   GSAP SETUP
   ========================================================= */

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SHERY CORE EFFECTS
   ========================================================= */

// Custom cursor
Shery.mouseFollower({
    smooth: true,
    skew: true
});

// Magnetic elements
Shery.makeMagnet(".magnet");

/* =========================================================
   HERO HOVER MEDIA
   ========================================================= */

Shery.hoverWithMediaCircle(".hero-content", {
    images: ["./wreb-design.png"],
    videos: ["https://cuberto.com/assets/showreel/short.mp4"]
});

/* =========================================================
   FEATURED SECTION PIN
   ========================================================= */

ScrollTrigger.create({
    trigger: "#featuredimages",
    start: "top top",
    end: "bottom bottom",
    pin: true,
    scrub: true
});

/* =========================================================
   FEATURED LEFT TEXT SCROLL SYNC
   ========================================================= */

const leftItems = document.querySelectorAll(".featuredleftelem");

leftItems.forEach((item, index) => {
    gsap.fromTo(
        item,
        { opacity: 0.3 },
        {
            opacity: 1,
            scrollTrigger: {
                trigger: item,
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        }
    );
});

/* =========================================================
   IMAGE DISTORTION EFFECT
   ========================================================= */

Shery.imageEffect(".images", {
    style: 5,
    y: "-300%",
    ease: "power1.out"
});

/* =========================================================
   NAV SCROLL SHRINK
   ========================================================= */

const nav = document.getElementById("nav");

ScrollTrigger.create({
    start: 100,
    onEnter: () => nav.classList.add("scrolled"),
    onLeaveBack: () => nav.classList.remove("scrolled")
});

/* =========================================================
   SAFETY: REFRESH TRIGGERS ON LOAD
   ========================================================= */

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});
