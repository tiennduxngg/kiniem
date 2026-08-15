/* =====================================================
   ELEMENT
===================================================== */

const okayBtn =
    document.getElementById("okayBtn");

const volumeScreen =
    document.getElementById("volumeScreen");

const mainPage =
    document.getElementById("mainPage");

const music =
    document.getElementById("audio");

const musicButton =
    document.getElementById("musicButton");

const musicDisc =
    document.getElementById("musicDisc");


/* =====================================================
   STATE
===================================================== */

let currentBox = null;

let isPlaying = false;


/* =====================================================
   OKAY
===================================================== */

okayBtn.addEventListener(
    "click",
    function () {

        volumeScreen.classList.add(
            "hide"
        );

        mainPage.classList.add(
            "show"
        );

        setTimeout(
            function () {

                volumeScreen.style.display =
                    "none";

            },
            700
        );

    }
);


/* =====================================================
   OPEN BOX
===================================================== */

function openBox(number) {

    currentBox =
        number;


    /*
     * Đóng tất cả các trang Box
     */

    document
        .querySelectorAll(".gift-page")
        .forEach(
            function(page) {

                page.classList.remove(
                    "show"
                );

            }
        );


    /*
     * Ẩn Four Box
     */

    mainPage.classList.remove(
        "show"
    );


    /*
     * Box 1-4
     */

    const selectedPage =
        document.getElementById(
            "boxPage" + number
        );


    if (selectedPage) {

        selectedPage.classList.add(
            "show"
        );

        selectedPage.scrollTop =
            0;

    }

}


/* =====================================================
   MUSIC
===================================================== */

musicButton.addEventListener(
    "click",
    async function(event) {

        event.preventDefault();

        event.stopPropagation();


        /*
         * ĐANG PHÁT
         */

        if (isPlaying) {

            music.pause();

            return;

        }


        /*
         * CHƯA PHÁT
         */

        try {

            await music.play();

        }

        catch(error) {

            console.log(
                "Không thể phát MP3:",
                error
            );

        }

    }
);


/* =====================================================
   MUSIC PLAY
===================================================== */

music.addEventListener(
    "play",
    function() {

        isPlaying =
            true;

        musicButton.innerHTML =
            "❚❚";

        musicButton.classList.add(
            "playing"
        );

        musicDisc.classList.add(
            "playing"
        );

    }
);


/* =====================================================
   MUSIC PAUSE
===================================================== */

music.addEventListener(
    "pause",
    function() {

        isPlaying =
            false;

        musicButton.innerHTML =
            "▶";

        musicButton.classList.remove(
            "playing"
        );

        musicDisc.classList.remove(
            "playing"
        );

    }
);


/* =====================================================
   MUSIC END
===================================================== */

music.addEventListener(
    "ended",
    function() {

        isPlaying =
            false;

        musicButton.innerHTML =
            "▶";

        musicButton.classList.remove(
            "playing"
        );

        musicDisc.classList.remove(
            "playing"
        );

    }
);


/* =====================================================
   GO BACK
===================================================== */

function goBack() {

    /*
     * Dừng nhạc
     */

    music.pause();

    music.currentTime =
        0;


    /*
     * Reset nút
     */

    isPlaying =
        false;

    musicButton.innerHTML =
        "▶";

    musicButton.classList.remove(
        "playing"
    );

    musicDisc.classList.remove(
        "playing"
    );


    /*
     * Đóng Box
     */

    document
        .querySelectorAll(".gift-page")
        .forEach(
            function(page) {

                page.classList.remove(
                    "show"
                );

            }
        );


    /*
     * Về FOUR BOX
     */

    mainPage.classList.add(
        "show"
    );


    currentBox =
        null;

}


/* =====================================================
   ESC
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            currentBox !== null
        ) {

            goBack();

        }

    }
);
