/* =====================================================
   ELEMENT
===================================================== */

const intro =
    document.getElementById("intro");

const home =
    document.getElementById("home");

const okayBtn =
    document.getElementById("okayBtn");

const giftBoxes =
    document.querySelectorAll(".gift-box");

const pages =
    document.querySelectorAll(".page");

const backButtons =
    document.querySelectorAll("[data-back]");


/* =====================================================
   MUSIC
===================================================== */

const audio =
    document.getElementById("audio");

const playBtn =
    document.getElementById("playBtn");

const vinyl =
    document.getElementById("vinyl");

const progress =
    document.getElementById("progress");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");


/* =====================================================
   BIẾN CHUYỂN CẢNH
===================================================== */

let currentPage = null;

let isChangingPage = false;


/* Thời gian fade */

const TRANSITION_TIME = 450;


/* =====================================================
   FORMAT TIME
===================================================== */

function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {

        return "0:00";

    }


    const minutes =
        Math.floor(seconds / 60);


    const secondsLeft =
        Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");


    return (
        minutes +
        ":" +
        secondsLeft
    );

}


/* =====================================================
   INTRO → HOME
===================================================== */

okayBtn.addEventListener(
    "click",
    function () {

        if (isChangingPage) {
            return;
        }


        isChangingPage = true;


        /* Intro biến mất */

        intro.classList.add("hide");


        /* Đợi intro biến mất hoàn toàn */

        setTimeout(
            function () {

                intro.style.display =
                    "none";


                home.style.display =
                    "block";


                home.classList.remove(
                    "home-hidden"
                );


                isChangingPage = false;

            },
            600
        );

    }
);


/* =====================================================
   HIỆN PAGE
===================================================== */

function showPage(pageId) {

    if (isChangingPage) {
        return;
    }


    const newPage =
        document.getElementById(pageId);


    if (!newPage) {
        return;
    }


    if (currentPage === newPage) {
        return;
    }


    isChangingPage = true;


    /* -----------------------------------------
       BƯỚC 1
       Làm Home biến mất
    ----------------------------------------- */

    home.classList.add(
        "home-hidden"
    );


    /* -----------------------------------------
       BƯỚC 2
       Nếu đang ở page khác
       thì làm page đó biến mất
    ----------------------------------------- */

    if (currentPage) {

        currentPage.classList.remove(
            "active"
        );

    }


    /* -----------------------------------------
       BƯỚC 3
       Đợi cảnh cũ biến mất hoàn toàn
    ----------------------------------------- */

    setTimeout(
        function () {


            /* Đảm bảo tất cả page tắt */

            pages.forEach(
                function (page) {

                    page.classList.remove(
                        "active"
                    );

                }
            );


            /* Hiện page mới */

            newPage.classList.add(
                "active"
            );


            currentPage =
                newPage;


            /* Cuộn lên đầu */

            newPage.scrollTop = 0;


            /* Cho phép chuyển tiếp */

            setTimeout(
                function () {

                    isChangingPage = false;

                },
                TRANSITION_TIME
            );


        },
        TRANSITION_TIME
    );

}


/* =====================================================
   MỞ 4 BOX
===================================================== */

giftBoxes.forEach(
    function (box) {

        box.addEventListener(
            "click",
            function () {

                const pageId =
                    box.dataset.page;


                showPage(pageId);

            }
        );

    }
);


/* =====================================================
   BACK → HOME
===================================================== */

function goHome() {

    if (isChangingPage) {
        return;
    }


    isChangingPage = true;


    /* -----------------------------------------
       DỪNG NHẠC
    ----------------------------------------- */

    if (
        audio &&
        !audio.paused
    ) {

        audio.pause();

    }


    if (playBtn) {

        playBtn.textContent =
            "▶";

    }


    if (vinyl) {

        vinyl.classList.remove(
            "playing"
        );

    }


    /* -----------------------------------------
       PAGE CŨ BIẾN MẤT
    ----------------------------------------- */

    if (currentPage) {

        currentPage.classList.remove(
            "active"
        );

    }


    /* -----------------------------------------
       Đợi cảnh cũ biến mất
    ----------------------------------------- */

    setTimeout(
        function () {


            currentPage = null;


            /* Hiện Home */

            home.classList.remove(
                "home-hidden"
            );


            home.style.display =
                "block";


            /* Cuộn Home lên đầu */

            home.scrollTop = 0;


            setTimeout(
                function () {

                    isChangingPage =
                        false;

                },
                TRANSITION_TIME
            );


        },
        TRANSITION_TIME
    );

}


/* =====================================================
   BACK BUTTON
===================================================== */

backButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            goHome
        );

    }
);


/* =====================================================
   MUSIC - METADATA
===================================================== */

audio.addEventListener(
    "loadedmetadata",
    function () {

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);


/* =====================================================
   MUSIC - PLAY / PAUSE
===================================================== */

playBtn.addEventListener(
    "click",
    async function () {

        try {


            /* -------------------------------
               ĐANG DỪNG → PHÁT
            ------------------------------- */

            if (audio.paused) {


                /*
                 * Nếu muốn bắt đầu từ giây 41:
                 *
                 * audio.currentTime = 41;
                 *
                 * Nếu muốn phát từ đầu:
                 * giữ nguyên như hiện tại.
                 */


                if (
                    audio.currentTime === 0
                ) {

                    audio.currentTime = 41;

                }


                await audio.play();


                playBtn.textContent =
                    "Ⅱ";


                vinyl.classList.add(
                    "playing"
                );


            }

            /* -------------------------------
               ĐANG PHÁT → DỪNG
            ------------------------------- */

            else {

                audio.pause();


                playBtn.textContent =
                    "▶";


                vinyl.classList.remove(
                    "playing"
                );

            }


        }

        catch (error) {

            console.error(
                "Audio error:",
                error
            );


            alert(
                "Không thể phát nhạc. " +
                "Hãy kiểm tra file music.mp3."
            );

        }

    }
);


/* =====================================================
   MUSIC - TIME
===================================================== */

audio.addEventListener(
    "timeupdate",
    function () {

        if (!audio.duration) {
            return;
        }


        const percent =
            (
                audio.currentTime /
                audio.duration
            ) * 100;


        progress.value =
            percent;


        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

    }
);


/* =====================================================
   MUSIC - SEEK
===================================================== */

progress.addEventListener(
    "input",
    function () {

        if (!audio.duration) {
            return;
        }


        audio.currentTime =
            (
                progress.value / 100
            ) * audio.duration;

    }
);


/* =====================================================
   MUSIC - END
===================================================== */

audio.addEventListener(
    "ended",
    function () {

        playBtn.textContent =
            "▶";


        vinyl.classList.remove(
            "playing"
        );


        progress.value = 0;


        currentTime.textContent =
            "0:00";

    }
);


/* =====================================================
   KHÔNG TỰ PHÁT NHẠC
===================================================== */

/*
   Nhạc chỉ chạy khi người dùng
   bấm nút PLAY.
*/
