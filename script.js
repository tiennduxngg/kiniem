/* =========================================
   LẤY ELEMENT
========================================= */

const volumeScreen =
    document.getElementById("volumeScreen");

const okayBtn =
    document.getElementById("okayBtn");

const mainPage =
    document.getElementById("mainPage");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const musicDisc =
    document.getElementById("musicDisc");


/* =========================================
   TRẠNG THÁI
========================================= */

let currentBox = null;


/* =========================================
   MỞ WEBSITE
   TURN UP YOUR VOLUME → FOUR BOX
========================================= */

okayBtn.addEventListener("click", async () => {

    /*
     * iPhone/Safari thường chặn autoplay.
     * Vì người dùng vừa bấm OKAY nên đây là
     * thời điểm thích hợp để phát nhạc.
     */

    try {

        await music.play();

        musicDisc.classList.add("playing");

        musicButton.innerHTML = "❚❚";

    } catch (error) {

        console.log(
            "Trình duyệt không cho phát nhạc:",
            error
        );

    }


    /*
     * Ẩn màn hình volume
     */

    volumeScreen.classList.add("hide");


    /*
     * Hiện màn hình FOUR BOX
     */

    setTimeout(() => {

        volumeScreen.style.display =
            "none";

        mainPage.classList.add("show");

    }, 650);

});


/* =========================================
   MỞ BOX
========================================= */

function openBox(number) {

    currentBox = number;


    /*
     * Ẩn màn FOUR BOX
     */

    mainPage.classList.remove("show");


    /*
     * Đóng tất cả trang quà trước
     */

    document
        .querySelectorAll(".gift-page")
        .forEach(page => {

            page.classList.remove("show");

        });


    /*
     * Mở đúng trang
     */

    const selectedPage =
        document.getElementById(
            "boxPage" + number
        );


    if (!selectedPage) return;


    selectedPage.classList.add("show");


    /*
     * Đưa trang về đầu
     */

    selectedPage.scrollTop = 0;


    /*
     * Ngăn body scroll
     */

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   BACK
========================================= */

function goBack() {

    /*
     * Đóng tất cả trang quà
     */

    document
        .querySelectorAll(".gift-page")
        .forEach(page => {

            page.classList.remove("show");

        });


    /*
     * Hiện lại FOUR BOX
     */

    mainPage.classList.add("show");


    /*
     * Cho phép scroll
     */

    document.body.style.overflow =
        "";


    currentBox = null;

}


/* =========================================
   NÚT MUSIC
========================================= */

musicButton.addEventListener(
    "click",
    async () => {

        if (music.paused) {

            try {

                await music.play();

                musicButton.innerHTML =
                    "❚❚";

                musicDisc.classList.add(
                    "playing"
                );

            } catch (error) {

                console.log(
                    "Không thể phát nhạc:",
                    error
                );

            }

        } else {

            music.pause();

            musicButton.innerHTML =
                "▶";

            musicDisc.classList.remove(
                "playing"
            );

        }

    }
);


/* =========================================
   KHI NHẠC HẾT
========================================= */

music.addEventListener(
    "pause",
    () => {

        musicDisc.classList.remove(
            "playing"
        );

        musicButton.innerHTML =
            "▶";

    }
);


/* =========================================
   ESC → BACK
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            currentBox !== null
        ) {

            goBack();

        }

    }
);


/* =========================================
   NGĂN CLICK BUTTON LÀM RELOAD FORM
========================================= */

document
    .querySelectorAll("button")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

            }
        );

    });
