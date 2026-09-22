document.addEventListener("DOMContentLoaded", function () {

    const enterButton =
        document.getElementById("enterButton");

    enterButton.addEventListener("click", function () {

        /*
         * For now this goes to songs.html.
         *
         * Later we will replace this with
         * our actual song-list/search page.
         */

        window.location.href = "songs.html";

    });

});
