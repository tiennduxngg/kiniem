* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    min-height: 100%;
}

body {
    overflow: hidden;

    background: #fff5f7;

    color: #403a3d;

    font-family: Arial, sans-serif;
}

button {
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
}


/* ==================================================
   SCREEN
================================================== */

.screen {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100dvh;
}


/* ==================================================
   INTRO
================================================== */

.intro-screen {
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            rgba(255,255,255,.45),
            rgba(255,255,255,.45)
        ),
        #f7f4ee;

    transition: .6s ease;
}

.intro-screen.hide {
    transform: translateX(-100%);
}

.intro-box {
    width: calc(100% - 100px);
    max-width: 730px;

    height: 78dvh;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    text-align: center;
}

.intro-box h1 {
    color: #d56585;

    font-family: Georgia, serif;

    font-size:
        clamp(45px, 10vw, 78px);

    font-style: italic;

    line-height: 1;

    text-shadow: 3px 3px white;
}

.intro-box p {
    margin-top: 40px;

    font-family:
        "Comic Sans MS",
        "Segoe Print",
        cursive;

    font-size: 18px;

    line-height: 1.8;
}

#okayBtn {
    width: 215px;
    height: 70px;

    margin-top: 50px;

    border: 5px solid #d56585;

    border-radius: 50px;

    background: #fffaf7;

    color: #d56585;

    font-size: 20px;

    font-weight: bold;

    cursor: pointer;
}

#okayBtn:active {
    transform: scale(.94);
}


/* ==================================================
   HOME
================================================== */

.home-screen {
    z-index: 100;

    overflow-y: auto;

    padding:
        105px 20px 80px;

    background:
        linear-gradient(
            rgba(255,255,255,.48),
            rgba(255,255,255,.48)
        ),
        #f7f4ee;

    transform: translateX(100%);

    transition: .6s ease;
}

.home-screen.show {
    transform: translateX(0);
}

.home-container {
    width: 100%;
    max-width: 650px;

    margin: auto;
}

.home-title {
    text-align: center;
}

.home-title h1 {
    color: #d56585;

    font-family: Georgia, serif;

    font-size:
        clamp(48px, 11vw, 78px);

    font-style: italic;

    line-height: 1;

    text-shadow: 3px 3px white;
}

.home-title p {
    margin-top: 15px;

    font-family:
        "Comic Sans MS",
        "Segoe Print",
        cursive;

    font-size: 18px;
}


/* ==================================================
   BOXES
================================================== */

.boxes {
    width: 100%;

    margin-top: 80px;

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 60px 28px;
}

.box {
    width: 100%;

    aspect-ratio: 1 / 1;

    border: 5px solid #d56585;

    border-radius: 45px;

    background: #fff;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 20px;

    cursor: pointer;

    transition: .2s ease;
}

.box img {
    width: 78%;
    height: 78%;

    object-fit: contain;
}

.box:active {
    transform: scale(.93);
}


/* ==================================================
   CONTENT PAGE
================================================== */

.content-page {
    position: fixed;
    inset: 0;

    z-index: 500;

    display: none;

    width: 100%;
    height: 100dvh;

    overflow-y: auto;
    overflow-x: hidden;

    background: #f7f4ee;
}

.content-page.active {
    display: block;
}


/* ==================================================
   BACK
================================================== */

.back {
    position: fixed;

    top: 25px;
    left: 30px;

    z-index: 9999;

    width: 195px;
    height: 62px;

    border: 4px solid #d56585;

    border-radius: 50px;

    background: #fffaf8;

    color: #c75d7c;

    font-size: 18px;

    font-weight: bold;

    cursor: pointer;
}

.back:active {
    transform: scale(.94);
}


/* ==================================================
   SIMPLE PAGE
================================================== */

.simple-page {
    width: 100%;
    max-width: 650px;

    margin: auto;

    padding:
        120px 20px 80px;

    text-align: center;
}

.big-image {
    display: block;

    width: 230px;
    height: 230px;

    max-width: 75%;

    margin: auto;

    object-fit: contain;
}

.simple-page h2 {
    margin-top: 30px;

    color: #d56585;

    font-family: Georgia, serif;

    font-size:
        clamp(38px, 9vw, 58px);

    font-style: italic;
}

.big-heart {
    margin: 20px;

    color: #d56585;

    font-size: 45px;
}

.simple-page > p {
    font-family:
        "Comic Sans MS",
        "Segoe Print",
        cursive;

    font-size: 18px;

    line-height: 1.8;
}


/* ==================================================
   LETTER
================================================== */

.letter-box {
    margin-top: 35px;

    padding: 30px;

    border-radius: 20px;

    background: rgba(255,255,255,.8);

    text-align: left;
}

.letter-box p {
    margin-bottom: 18px;

    font-family:
        "Comic Sans MS",
        "Segoe Print",
        cursive;

    line-height: 1.8;
}

.letter-box .signature {
    color: #d56585;

    text-align: right;

    margin-bottom: 0;
}


/* ==================================================
   LITTLE PAGE
================================================== */

.little-page {
    background: #f3f1ec;
}

.little-container {
    width: 100%;

    max-width: 720px;

    margin: auto;

    padding:
        115px 16px 80px;
}


/* ==================================================
   LITTLE CARD
================================================== */

.little-card {
    position: relative;

    width: 100%;

    min-height: 280px;

    margin-bottom: 45px;

    padding: 25px;

    display: flex;

    align-items: center;

    gap: 25px;

    border-radius: 18px;

    overflow: hidden;

    box-shadow:
        0 10px 22px
        rgba(70,55,60,.12);
}


/* CARD 1 */

.card-white {
    background:
        repeating-linear-gradient(
            to bottom,
            #fffafa 0,
            #fffafa 34px,
            #efdee3 35px,
            #fffafa 36px
        );

    transform: rotate(-.7deg);
}


/* CARD 2 */

.card-pink-dots {
    background-color: #f7dce5;

    background-image:
        radial-gradient(
            #e5b6c5 1.7px,
            transparent 1.7px
        );

    background-size: 19px 19px;

    border-left:
        7px solid #d56585;

    transform: rotate(.6deg);
}


/* CARD 3 */

.card-pink-lines {
    background:
        repeating-linear-gradient(
            to bottom,
            #f7dce4 0,
            #f7dce4 36px,
            #eac4cd 37px,
            #f7dce4 38px
        );

    transform: rotate(-.5deg);
}


/* TAB */

.paper-tab {
    position: absolute;

    top: 0;
    left: 50%;

    transform:
        translateX(-50%);

    width: 38px;
    height: 32px;

    border-radius:
        0 0 10px 10px;

    background: #d56585;
}


/* ==================================================
   LITTLE PHOTO
================================================== */

.little-photo {
    width: 150px;

    flex: 0 0 150px;

    padding:
        8px 8px 25px;

    background: #fff;

    box-shadow:
        0 8px 16px
        rgba(50,40,45,.18);

    transform: rotate(-4deg);
}

.little-photo.rotate-left {
    transform: rotate(-6deg);
}

.little-photo.rotate-right {
    transform: rotate(5deg);
}

.little-photo img {
    display: block;

    width: 100%;
    height: 145px;

    object-fit: cover;
}


/* ==================================================
   LITTLE TEXT
================================================== */

.little-text {
    flex: 1;

    min-width: 0;
}

.little-text small {
    display: inline-block;

    margin-bottom: 10px;

    color: #c75d7c;

    font-size: 10px;

    font-weight: bold;

    letter-spacing: 1.5px;
}

.little-text h3 {
    margin-bottom: 10px;

    color: #d56585;

    font-family: Georgia, serif;

    font-size: 20px;

    font-style: italic;

    line-height: 1.2;
}

.little-text p {
    color: #51494c;

    font-family:
        "Comic Sans MS",
        "Segoe Print",
        cursive;

    font-size: 14px;

    line-height: 1.55;
}


/* ==================================================
   LITTLE END
================================================== */

.little-end {
    padding:
        15px 20px 100px;

    text-align: center;
}

.little-end h2 {
    color: #d56585;

    font-family: Georgia, serif;

    font-size: 40px;

    font-style: italic;
}

.little-end p {
    margin-top: 15px;

    font-family:
        "Comic Sans MS",
        "Segoe Print",
        cursive;

    font-size: 15px;

    line-height: 1.7;
}


/* ==================================================
   MUSIC PAGE
================================================== */

.music-page {
    background: #fff5f7;
}

.music-container {
    width: 100%;
    max-width: 650px;

    margin: auto;

    padding:
        110px 20px 80px;

    text-align: center;
}

.music-cover {
    width: min(430px, 85vw);

    aspect-ratio: 1 / 1;

    margin: auto;

    overflow: hidden;

    background: white;

    border: 1px solid #ddd;
}

.music-cover img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.music-container h2 {
    margin-top: 40px;

    color: #d56585;

    font-family: Georgia, serif;

    font-size:
        clamp(40px, 9vw, 58px);

    font-style: italic;
}

.music-heart {
    margin: 12px;

    color: #d56585;

    font-size: 42px;
}

.music-container > p {
    font-family: Georgia, serif;

    font-size: 17px;

    font-style: italic;
}


/* ==================================================
   PLAYER
================================================== */

.player {
    width: 100%;

    margin-top: 40px;

    padding: 14px 16px;

    display: flex;

    align-items: center;

    gap: 14px;

    border-radius: 35px;

    background: #fff;

    box-shadow:
        0 10px 25px
        rgba(100,50,70,.12);
}

.disc {
    width: 72px;
    height: 72px;

    flex: 0 0 72px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: #fff;

    font-size: 25px;

    background:
        radial-gradient(
            circle,
            #e07896 0 20%,
            #51343e 21% 100%
        );

    animation:
        spin 4s linear infinite;

    animation-play-state: paused;
}

.disc.playing {
    animation-play-state: running;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.song-info {
    flex: 1;

    min-width: 0;

    text-align: left;
}

.song-info strong {
    display: block;

    overflow: hidden;

    font-size: 17px;

    white-space: nowrap;

    text-overflow: ellipsis;
}

.song-info span {
    display: block;

    margin-top: 6px;

    color: #9b7e86;

    font-size: 12px;
}

.play-btn {
    width: 60px;
    height: 60px;

    flex: 0 0 60px;

    border: none;

    border-radius: 50%;

    background: #d56585;

    color: #fff;

    font-size: 19px;

    cursor: pointer;
}

.play-btn:active {
    transform: scale(.88);
}

.play-btn.playing {
    background: #b95070;
}

.player-note {
    margin-top: 15px !important;

    color: #9b7e86;

    font-family: Arial, sans-serif !important;

    font-size: 12px !important;

    font-style: normal !important;
}


/* ==================================================
   MOBILE
================================================== */

@media (max-width: 600px) {

    .intro-box h1 {
        font-size: 46px;
    }

    .intro-box p {
        font-size: 16px;
    }

    .home-title h1 {
        font-size: 48px;
    }

    .boxes {
        gap: 50px 16px;
    }

    .box {
        border-radius: 38px;
        border-width: 4px;
    }

    .back {
        left: 25px;

        width: 185px;
        height: 58px;

        font-size: 17px;
    }

    /* LITTLE */

    .little-container {
        padding-top: 105px;
    }

    .little-card {
        min-height: 250px;

        padding: 18px;

        gap: 15px;

        margin-bottom: 38px;
    }

    .little-photo {
        width: 120px;

        flex-basis: 120px;

        padding: 6px 6px 20px;
    }

    .little-photo img {
        height: 115px;
    }

    .little-text small {
        font-size: 8px;
    }

    .little-text h3 {
        font-size: 17px;
    }

    .little-text p {
        font-size: 12.5px;

        line-height: 1.5;
    }

    /* MUSIC */

    .music-container {
        padding-top: 105px;
    }

    .music-cover {
        width: 82vw;
    }

    .disc {
        width: 60px;
        height: 60px;

        flex-basis: 60px;
    }

    .song-info strong {
        font-size: 15px;
    }

    .play-btn {
        width: 56px;
        height: 56px;

        flex-basis: 56px;
    }
}


@media (max-width: 380px) {

    .little-card {
        padding: 14px;

        gap: 10px;
    }

    .little-photo {
        width: 105px;

        flex-basis: 105px;
    }

    .little-photo img {
        height: 100px;
    }

    .little-text h3 {
        font-size: 15px;
    }

    .little-text p {
        font-size: 11.5px;
    }
}
