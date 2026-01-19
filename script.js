const music = document.getElementById("bgMusic");
let musicStarted = false;

/* 🎵 Start music ONLY after successful unlock */
function startMusic() {
    if (!musicStarted) {
        music.volume = 0.4;
        music.currentTime = 0;
        music.play().catch(() => { });
        musicStarted = true;
    }
}

/* Card flip */
function flipCard() {
    document.getElementById("card").classList.toggle("flipped");
}

/* Gallery slider */
function slideMemories(value) {
    const gallery = document.getElementById("gallery");
    const wrapper = document.querySelector(".gallery-wrapper");

    const maxScroll = Math.max(
        gallery.scrollHeight - wrapper.clientHeight,
        0
    );

    const translateY = -(maxScroll * (value / 100));
    gallery.style.transform = `translateY(${translateY}px)`;
}

/* 🔐 ACCESS CHECK */
function checkAccess() {
    const name = document
        .getElementById("nameInput")
        .value.trim()
        .toLowerCase();

    const errorMsg = document.getElementById("errorMsg");

    const targetDate = new Date("2026-01-20T00:00:00");
    const today = new Date();

    const isCorrectName = name === "priya";
    const isCorrectDate = today >= targetDate;

    if (isCorrectName && isCorrectDate) {
        document.getElementById("lockScreen").classList.add("d-none");
        document.getElementById("mainContent").classList.remove("d-none");

        setTimeout(startMusic, 500);
    } else {
        errorMsg.classList.remove("d-none");
    }
}

/* ⏳ LIVE COUNTDOWN TIMER */
function startCountdown() {
    const targetDate = new Date("2026-01-20T00:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) return;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (diff % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }, 1000);
}

/* ⌨️ ENTER KEY + TIMER INIT */
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("nameInput");

    if (input) {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                checkAccess();
            }
        });
    }

    startCountdown();
});

/* Modal */
function openMessageModal() {
    const modal = new bootstrap.Modal(
        document.getElementById("messageModal")
    );
    modal.show();
}

/* WhatsApp */
function redirectToWhatsApp() {
    var phoneNumber = "919876543210";
    var message = "Hello !! Looking Forward to connecting with you.";
    var url =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);
    window.open(url, "_blank");
}

