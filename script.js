/* ==================================================
   ELEMENTS
================================================== */

const intro = document.getElementById("intro");
const home = document.getElementById("home");
const okayBtn = document.getElementById("okayBtn");

const pages = document.querySelectorAll(".content-page");

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const disc = document.getElementById("disc");


/* ==================================================
   OKAY
================================================== */

okayBtn.addEventListener("click", function () {

    intro.classList.add("hide");

    setTimeout(function () {

        intro.style.display = "none";

        home.classList.add("show");

    }, 500);

});


/* ==================================================
   OPEN PAGE
================================================== */

function openPage(pageId) {

    /*
       Đóng tất cả page trước
    */

    pages.forEach(function (page) {

        page.classList.remove("active");

    });


    /*
       Ẩn HOME
    */

    home.classList.remove("show");


    /*
       Mở page được chọn
    */

    const page =
        document.getElementById(pageId);

    if (!page) return;

    page.classList.add("active");

    page.scrollTop = 0;
}


/* ==================================================
   HOME
================================================== */

function goHome() {

    /*
       Dừng nhạc
    */

    if (audio) {

        audio.pause();

        audio.currentTime = 0;

    }


    /*
       Reset nút
    */

    if (playBtn) {

        playBtn.innerHTML = "▶";

        playBtn.classList.remove("playing");

    }


    /*
       Reset đĩa
    */

    if (disc) {

        disc.classList.remove("playing");

    }


    /*
       Đóng page
    */

    pages.forEach(function (page) {

        page.classList.remove("active");

    });


    /*
       Mở HOME
    */

    home.classList.add("show");

}


/* ==================================================
   MUSIC PLAY / PAUSE
================================================== */

playBtn.addEventListener(
    "click",
    async function () {

        /*
           Nếu đang pause
        */

        if (audio.paused) {

            try {

                await audio.play();

            } catch (error) {

                console.error(error);

                alert(
                    "Không phát được MP3!\n\n" +
                    "Hãy kiểm tra file:\n" +
                    "music/song.mp3"
                );

            }

        }

        /*
           Nếu đang phát
        */

        else {

            audio.pause();

        }

    }
);


/* ==================================================
   AUDIO PLAY
================================================== */

audio.addEventListener(
    "play",
    function () {

        playBtn.innerHTML = "❚❚";

        playBtn.classList.add("playing");

        disc.classList.add("playing");

    }
);


/* ==================================================
   AUDIO PAUSE
================================================== */

audio.addEventListener(
    "pause",
    function () {

        playBtn.innerHTML = "▶";

        playBtn.classList.remove("playing");

        disc.classList.remove("playing");

    }
);


/* ==================================================
   AUDIO END
================================================== */

audio.addEventListener(
    "ended",
    function () {

        playBtn.innerHTML = "▶";

        playBtn.classList.remove("playing");

        disc.classList.remove("playing");

    }
);


/* ==================================================
   ESC = BACK
================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            const opened =
                document.querySelector(
                    ".content-page.active"
                );

            if (opened) {

                goHome();

            }

        }

    }
);
