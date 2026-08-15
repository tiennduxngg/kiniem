/* ==================================================
   ELEMENTS
================================================== */

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



let player = null;

let isPlaying = false;

let currentBox = null;


/* ==================================================
   YOUTUBE VIDEO ID
================================================== */

/*
    Ví dụ:

    Link:
    https://www.youtube.com/watch?v=dQw4w9WgXcQ

    ID là:
    dQw4w9WgXcQ

    THAY YOUR_YOUTUBE_VIDEO_ID
    bằng ID video của bạn.
*/

const YOUTUBE_VIDEO_ID =
    "YOUR_YOUTUBE_VIDEO_ID";



/* ==================================================
   YOUTUBE API
================================================== */

function onYouTubeIframeAPIReady() {


    player =
        new YT.Player(
            "youtube-player",
            {

                videoId:
                    YOUTUBE_VIDEO_ID,


                playerVars: {

                    /*
                     * Không tự phát
                     */

                    autoplay: 0,


                    /*
                     * Ẩn controls
                     */

                    controls: 0,


                    /*
                     * Không hiện video
                     * liên quan nhiều
                     */

                    rel: 0,


                    /*
                     * Bắt đầu từ 60 giây
                     */

                    start: 60,


                    /*
                     * Không fullscreen
                     */

                    fs: 0

                },


                events: {

                    onReady:
                        function () {

                            console.log(
                                "YouTube đã sẵn sàng"
                            );

                        },


                    onStateChange:
                        function (event) {

                            /*
                             * Đang phát
                             */

                            if (
                                event.data ===
                                YT.PlayerState.PLAYING
                            ) {

                                isPlaying =
                                    true;


                                musicButton.innerHTML =
                                    "❚❚";


                                musicDisc.classList.add(
                                    "playing"
                                );

                            }


                            /*
                             * Đã pause
                             */

                            else if (
                                event.data ===
                                YT.PlayerState.PAUSED
                            ) {

                                isPlaying =
                                    false;


                                musicButton.innerHTML =
                                    "▶";


                                musicDisc.classList.remove(
                                    "playing"
                                );

                            }


                            /*
                             * Video kết thúc
                             */

                            else if (
                                event.data ===
                                YT.PlayerState.ENDED
                            ) {

                                /*
                                 * Quay lại 1:00
                                 */

                                player.seekTo(
                                    60,
                                    true
                                );


                                isPlaying =
                                    false;


                                musicButton.innerHTML =
                                    "▶";


                                musicDisc.classList.remove(
                                    "playing"
                                );

                            }

                        }

                }

            }
        );

}


/* ==================================================
   OKAY
================================================== */

okayBtn.addEventListener(
    "click",
    function () {


        /*
         * KHÔNG PHÁT NHẠC Ở ĐÂY.
         *
         * Chỉ chuyển sang FOUR BOX.
         */


        mainPage.classList.add(
            "show"
        );


        volumeScreen.classList.add(
            "hide"
        );


        /*
         * Sau animation
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


/* ==================================================
   MỞ BOX
================================================== */

function openBox(number) {


    currentBox =
        number;


    /*
     * Ẩn FOUR BOX
     */

    mainPage.classList.remove(
        "show"
    );


    /*
     * Đóng tất cả trang quà
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
     * Mở trang được chọn
     */

    const selectedPage =
        document.getElementById(
            "boxPage" + number
        );


    if (!selectedPage) {

        return;

    }


    selectedPage.classList.add(
        "show"
    );


    /*
     * Cuộn lên đầu
     */

    selectedPage.scrollTop =
        0;


    /*
     * Nếu mở Box 3:
     *
     * KHÔNG phát nhạc.
     */

    if (number === 3) {

        if (
            player &&
            isPlaying
        ) {

            player.pauseVideo();

        }


        isPlaying =
            false;


        musicButton.innerHTML =
            "▶";


        musicDisc.classList.remove(
            "playing"
        );

    }

}


/* ==================================================
   BACK
================================================== */

function goBack() {


    /*
     * Nếu đang nghe nhạc
     * thì pause trước
     */

    if (
        player &&
        isPlaying
    ) {

        player.pauseVideo();

    }


    isPlaying =
        false;


    musicButton.innerHTML =
        "▶";


    musicDisc.classList.remove(
        "playing"
    );


    /*
     * Đóng các trang quà
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
     * Hiện FOUR BOX
     */

    mainPage.classList.add(
        "show"
    );


    currentBox =
        null;

}


/* ==================================================
   NÚT PLAY / PAUSE
================================================== */

musicButton.addEventListener(
    "click",
    function () {


        /*
         * Nếu YouTube chưa load
         */

        if (!player) {

            console.log(
                "YouTube chưa sẵn sàng."
            );

            return;

        }


        /*
         * ĐANG PAUSE
         * → PLAY
         */

        if (!isPlaying) {


            /*
             * Mỗi lần bấm PLAY:
             *
             * bắt đầu từ 1:00
             */

            player.seekTo(
                60,
                true
            );


            player.playVideo();

        }


        /*
         * ĐANG PLAY
         * → PAUSE
         */

        else {

            player.pauseVideo();

        }

    }
);


/* ==================================================
   ESC
================================================== */

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
