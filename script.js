/* =========================================
   ELEMENTS
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


let currentBox = null;


/* =========================================
   OKAY
   TRANG 1 → TRANG 2
========================================= */

okayBtn.addEventListener(
    "click",
    async () => {

        /*
         * Phát nhạc sau thao tác
         * của người dùng.
         */

        try {

            await music.play();

            musicDisc.classList.add(
                "playing"
            );

            musicButton.innerHTML =
                "❚❚";

        } catch (error) {

            console.log(
                "Không thể tự phát nhạc:",
                error
            );

        }


        /*
         * Trang volume trượt sang trái
         */

        volumeScreen.classList.add(
            "next"
        );


        /*
         * Trang Four Box trượt vào
         */

        mainPage.classList.add(
            "show"
        );


        /*
         * Sau khi chuyển trang
         */

        setTimeout(() => {

            document.body.style.overflow =
                "";

        }, 700);

    }
);


/* =========================================
   MỞ MỘT HỘP
========================================= */

function openBox(number) {

    currentBox = number;


    /*
     * Ẩn trang Four Box
     */

    mainPage.classList.remove(
        "show"
    );


    /*
     * Đóng các trang quà khác
     */

    document
        .querySelectorAll(".gift-page")
        .forEach(page => {

            page.classList.remove(
                "show"
            );

        });


    /*
     * Tìm trang tương ứng
     */

    const selectedPage =
        document.getElementById(
            "boxPage" + number
        );


    if (!selectedPage) {
        return;
    }


    /*
     * Hiện trang
     */

    selectedPage.classList.add(
        "show"
    );


    /*
     * Cuộn lên đầu
     */

    selectedPage.scrollTop = 0;


    /*
     * Không scroll nền
     */

    document.body.style.overflow =
        "hidden";
}


/* =========================================
   BACK
========================================= */

function goBack() {

    /*
     * Đóng trang quà
     */

    document
        .querySelectorAll(".gift-page")
        .forEach(page => {

            page.classList.remove(
                "show"
            );

        });


    /*
     * Hiện lại Four Box
     */

    mainPage.classList.add(
        "show"
    );


    /*
     * Cho phép scroll
     */

    document.body.style.overflow =
        "";


    currentBox = null;
}


/* =========================================
   MUSIC BUTTON
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
   MUSIC PAUSE
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
   ESC = BACK
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
