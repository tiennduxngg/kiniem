const startBtn = document.getElementById("startBtn");

const welcome = document.getElementById("welcome");
const boxesScreen = document.getElementById("boxesScreen");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const giftBoxes = document.querySelectorAll(".gift-box");
const giftContents = document.querySelectorAll(".gift-content");

const progressText = document.getElementById("progressText");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let openedBoxes = [];


// ==============================
// BẮT ĐẦU
// ==============================

startBtn.addEventListener("click", () => {

    welcome.classList.remove("active");

    setTimeout(() => {
        boxesScreen.classList.add("active");
    }, 300);

});


// ==============================
// MỞ BOX
// ==============================

giftBoxes.forEach(box => {

    box.addEventListener("click", () => {

        const number = box.dataset.box;

        // Không cho mở lại animation
        if (!openedBoxes.includes(number)) {

            openedBoxes.push(number);

            box.classList.add("opened");

            updateProgress();

        }

        showContent(number);

    });

});


// ==============================
// HIỆN NỘI DUNG
// ==============================

function showContent(number) {

    giftContents.forEach(content => {
        content.classList.remove("active");
    });

    const selected = document.getElementById(
        `content${number}`
    );

    if (selected) {
        selected.classList.add("active");
    }

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


// ==============================
// ĐÓNG POPUP
// ==============================

function closePopup() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}

closeModal.addEventListener("click", closePopup);

document.querySelector(".modal-bg").addEventListener(
    "click",
    closePopup
);


// ==============================
// ESC
// ==============================

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {
        closePopup();
    }

});


// ==============================
// TIẾN ĐỘ
// ==============================

function updateProgress() {

    progressText.textContent =
        `${openedBoxes.length} / 4 đã mở`;

    if (openedBoxes.length === 4) {

        setTimeout(() => {

            progressText.textContent =
                "Bạn đã mở hết 4 món quà ♡";

        }, 500);

    }

}


// ==============================
// MUSIC
// ==============================

musicBtn.addEventListener("click", async () => {

    if (music.paused) {

        try {

            await music.play();

            musicBtn.textContent = "❚❚";

            document.querySelector(".disc")
                .classList.add("playing");

        } catch (error) {

            alert(
                "Không thể phát nhạc. Hãy kiểm tra file assets/music.mp3"
            );

        }

    } else {

        music.pause();

        musicBtn.textContent = "▶";

        document.querySelector(".disc")
            .classList.remove("playing");

    }

});


// ==============================
// HIỆU ỨNG CLICK
// ==============================

document.addEventListener("click", event => {

    const heart = document.createElement("span");

    heart.textContent = "♡";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    heart.style.fontSize = "18px";
    heart.style.color = "#e8a7bb";

    heart.style.animation =
        "heartFloat 1s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});


// CSS animation tạo bằng JS
const style = document.createElement("style");

style.innerHTML = `
@keyframes heartFloat {

    0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(.5);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -120px) scale(1.5);
    }

}
`;

document.head.appendChild(style);
