/* =====================================================
   ELEMENTS
===================================================== */

const intro = document.getElementById("intro");

const home = document.getElementById("home");

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
   OKAY
===================================================== */

okayBtn.addEventListener(
    "click",
    function () {

        intro.classList.add("hide");

        home.style.display = "block";

    }
);


/* =====================================================
   OPEN BOX
===================================================== */

giftBoxes.forEach(
    function (box) {

        box.addEventListener(
            "click",
            function () {

                const pageId =
                    box.dataset.page;

                pages.forEach(
                    function (page) {

                        page.classList.remove(
                            "active"
                        );

                    }
                );


                const page =
                    document.getElementById(
                        pageId
                    );


                if (page) {

                    page.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   BACK
===================================================== */

backButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                pages.forEach(
                    function (page) {

                        page.classList.remove(
                            "active"
                        );

                    }
                );


                /* dừng nhạc */

                if (
                    audio &&
                    !audio.paused
                ) {

                    audio.pause();

                    playBtn.textContent =
                        "▶";

                    vinyl.classList.remove(
                        "playing"
                    );

                }


                home.style.display =
                    "block";

            }
        );

    }
);


/* =====================================================
   MUSIC - LOAD
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
   PLAY / PAUSE
===================================================== */

playBtn.addEventListener(
    "click",
    async function () {

        try {

            if (audio.paused) {


                /*
                   Nếu muốn bài hát bắt đầu
                   từ giây 41 thì bỏ // ở dòng dưới:

                   audio.currentTime = 41;
                */

                audio.currentTime = 41;


                await audio.play();


                playBtn.textContent =
                    "Ⅱ";


                vinyl.classList.add(
                    "playing"
                );


            } else {


                audio.pause();


                playBtn.textContent =
                    "▶";


                vinyl.classList.remove(
                    "playing"
                );

            }

        } catch (error) {

            console.error(error);

            alert(
                "Không phát được music.mp3. " +
                "Kiểm tra file music.mp3 đã " +
                "được upload đúng thư mục chưa."
            );

        }

    }
);


/* =====================================================
   UPDATE TIME
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
   SEEK
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
   END
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
