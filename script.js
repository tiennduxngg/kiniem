/* =====================================
   LẤY ELEMENT
===================================== */

const okayBtn = document.getElementById("okayBtn");

const volumeScreen =
    document.getElementById("volumeScreen");

const mainPage =
    document.getElementById("mainPage");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const musicDisc =
    document.getElementById("musicDisc");


let currentBox = null;


/* =====================================
   OKAY
===================================== */

okayBtn.onclick = function () {

    console.log("OKAY đã được bấm");


    /*
     * 1. Trang 2 xuất hiện
     */

    mainPage.classList.add("active");


    /*
     * 2. Trang 1 trượt sang trái
     */

    volumeScreen.style.transform =
        "translateX(-100%)";


    /*
     * 3. Sau animation thì ẩn trang 1
     */

    setTimeout(function () {

        volumeScreen.style.display =
            "none";

    }, 700);


    /*
     * 4. Thử bật nhạc
     */

    music.play()
        .then(function () {

            musicDisc.classList.add(
                "playing"
            );

            musicButton.innerHTML =
                "❚❚";

        })
        .catch(function (error) {

            console.log(
                "Trình duyệt chặn autoplay:",
                error
            );

        });

};


/* =====================================
   MỞ BOX
===================================== */

function openBox(number) {

    currentBox = number;


    /*
     * Ẩn FOUR BOX
     */

    mainPage.classList.remove(
        "active"
    );


    /*
     * Đóng tất cả box
     */

    const pages =
        document.querySelectorAll(
            ".gift-page"
        );

    pages.forEach(function (page) {

        page.classList.remove(
            "active"
        );

    });


    /*
     * Mở box được chọn
     */

    const page =
        document.getElementById(
            "boxPage" + number
        );


    if (page) {

        page.classList.add(
            "active"
        );

        page.scrollTop = 0;

    }

}


/* =====================================
   BACK
===================================== */

function goBack() {

    /*
     * Đóng box
     */

    const pages =
        document.querySelectorAll(
            ".gift-page"
        );

    pages.forEach(function (page) {

        page.classList.remove(
            "active"
        );

    });


    /*
     * Hiện lại FOUR BOX
     */

    mainPage.classList.add(
        "active"
    );


    currentBox = null;

}


/* =====================================
   MUSIC BUTTON
===================================== */

musicButton.onclick = function () {

    if (music.paused) {

        music.play()
            .then(function () {

                musicDisc.classList.add(
                    "playing"
                );

                musicButton.innerHTML =
                    "❚❚";

            });

    } else {

        music.pause();

        musicDisc.classList.remove(
            "playing"
        );

        musicButton.innerHTML =
            "▶";

    }

};


/* =====================================
   ESC = BACK
===================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            currentBox !== null
        ) {

            goBack();

        }

    }
);
