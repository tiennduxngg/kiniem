/* =========================================
   ELEMENTS
========================================= */

const okayBtn =
    document.getElementById("okayBtn");

const volumeScreen =
    document.getElementById("volumeScreen");

const mainPage =
    document.getElementById("mainPage");

const musicButton =
    document.getElementById("musicButton");

const musicDisc =
    document.getElementById("musicDisc");


/* =========================================
   VARIABLES
========================================= */

let player = null;

let youtubeReady = false;

let isPlaying = false;

let currentBox = null;


/* =========================================
   YOUTUBE
========================================= */

/*
    Link:
    https://youtu.be/o1dVTgUa_HA

    Video ID:
    o1dVTgUa_HA
*/

const YOUTUBE_VIDEO_ID =
    "o1dVTgUa_HA";


/*
    Bắt đầu từ giây 41
*/

const MUSIC_START =
    41;


/* =========================================
   YOUTUBE API
========================================= */

window.onYouTubeIframeAPIReady =
function () {

    player =
        new YT.Player(
            "youtube-player",
            {

                videoId:
                    YOUTUBE_VIDEO_ID,

                playerVars: {

                    /*
                     * Không tự động phát
                     */
                    autoplay: 0,

                    /*
                     * Không hiện controls
                     */
                    controls: 0,

                    /*
                     * Quan trọng với iPhone
                     */
                    playsinline: 1,

                    /*
                     * Hạn chế video liên quan
                     */
                    rel: 0,

                    /*
                     * Không fullscreen
                     */
                    fs: 0

                },

                events: {

                    onReady:
                    function () {

                        youtubeReady =
                            true;

                        console.log(
                            "YouTube player ready"
                        );

                    },


                    onStateChange:
                    function (event) {

                        /* =====================
                           PLAYING
                        ===================== */

                        if (
                            event.data ===
                            YT.PlayerState.PLAYING
                        ) {

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


                        /* =====================
                           PAUSED
                        ===================== */

                        else if (
                            event.data ===
                            YT.PlayerState.PAUSED
                        ) {

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


                        /* =====================
                           ENDED
                        ===================== */

                        else if (
                            event.data ===
                            YT.PlayerState.ENDED
                        ) {

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

                    }

                }

            }
        );

};


/* =========================================
   OKAY
========================================= */

okayBtn.addEventListener(
    "click",
    function () {

        /*
         * Chỉ chuyển trang.
         *
         * KHÔNG phát nhạc.
         */

        mainPage.classList.add(
            "show"
        );

        volumeScreen.classList.add(
            "hide"
        );


        /*
         * Xóa màn hình volume sau
         * khi animation hoàn thành.
         */

        setTimeout(
            function () {

                volumeScreen.style.display =
                    "none";

            },
            700
        );

    }
);


/* =========================================
   OPEN BOX
========================================= */

function openBox(number) {

    currentBox =
        number;


    /*
     * Đóng tất cả gift page
     */

    const allPages =
        document.querySelectorAll(
            ".gift-page"
        );

    allPages.forEach(
        function (page) {

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

    selectedPage.scrollTop =
        0;


    /*
     * Khi mở Box 3:
     *
     * tuyệt đối KHÔNG autoplay.
     */

    if (number === 3) {

        stopMusic();

    }

}


/* =========================================
   PLAY / PAUSE
========================================= */

musicButton.addEventListener(
    "click",
    function (event) {

        /*
         * Ngăn click lan ra ngoài
         */

        event.preventDefault();

        event.stopPropagation();


        /*
         * Nếu YouTube chưa sẵn sàng
         */

        if (
            !youtubeReady ||
            !player
        ) {

            console.log(
                "YouTube đang tải..."
            );

            return;

        }


        /* =========================
           PLAY
        ========================= */

        if (!isPlaying) {

            /*
             * Phát video bằng chính
             * thao tác click của người dùng.
             *
             * loadVideoById bắt đầu
             * chính xác từ giây 41.
             */

            player.loadVideoById({

                videoId:
                    YOUTUBE_VIDEO_ID,

                startSeconds:
                    MUSIC_START

            });

        }


        /* =========================
           PAUSE
        ========================= */

        else {

            player.pauseVideo();

        }

    }
);


/* =========================================
   STOP MUSIC
========================================= */

function stopMusic() {

    if (
        player &&
        youtubeReady
    ) {

        try {

            player.pauseVideo();

        }

        catch (error) {

            console.log(
                "Không thể pause YouTube",
                error
            );

        }

    }


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


/* =========================================
   BACK
========================================= */

function goBack() {

    /*
     * Dừng nhạc
     */

    stopMusic();


    /*
     * Đóng toàn bộ gift pages
     */

    const allPages =
        document.querySelectorAll(
            ".gift-page"
        );


    allPages.forEach(
        function (page) {

            page.classList.remove(
                "show"
            );

        }
    );


    /*
     * Quay lại Four Box
     */

    mainPage.classList.add(
        "show"
    );


    currentBox =
        null;

}


/* =========================================
   ESC
========================================= */

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
