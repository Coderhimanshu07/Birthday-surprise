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

/* 🔐 ACCESS CHECK (Date + Name) */
function checkAccess() {
    const name = document
        .getElementById("nameInput")
        .value.trim()
        .toLowerCase();

    const errorMsg = document.getElementById("errorMsg");

    const targetDate = new Date("2025-01-20T00:00:00");
    const today = new Date();

    const isCorrectName = name === "priya";
    const isCorrectDate = today >= targetDate;

    if (isCorrectName && isCorrectDate) {
        document.getElementById("lockScreen").classList.add("d-none");
        document.getElementById("mainContent").classList.remove("d-none");

        // 🎵 Start background music AFTER content loads
        setTimeout(() => {
            startMusic();
        }, 500);
    } else {
        errorMsg.classList.remove("d-none");
    }
}

/* ⌨️ ENTER KEY SUPPORT */
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("nameInput");

    if (input) {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                checkAccess();
            }
        });
    }
});



// For modal 
function openMessageModal() {
    const modal = new bootstrap.Modal(
        document.getElementById("messageModal")
    );
    modal.show();
}

// whatsapp button onclikc handler function 

function redirectToWhatsApp() {
    var phoneNumber = "919876543210"; // country code ke saath number
    var message = "Hello !! Looking Forward to connecting with you."; // default message

    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
