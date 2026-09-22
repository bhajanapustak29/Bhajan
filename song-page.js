const params =
    new URLSearchParams(window.location.search);


const songId =
    params.get("id");


const song =
    bhajans.find(
        item => item.id === songId
    );


const titleElement =
    document.getElementById("songTitle");


const categoryElement =
    document.getElementById("songCategory");


const lyricsElement =
    document.getElementById("lyrics");


const youtubeSection =
    document.getElementById("youtubeSection");


if (!song) {

    titleElement.textContent =
        "Bhajan not found";

    categoryElement.textContent = "";

    lyricsElement.innerHTML = `
        <p>
            Sorry, this bhajan could not be found.
        </p>
    `;

}
else {

    /*
     * Page title
     */

    document.title =
        `${song.title} - Bhajan Book`;


    /*
     * Song information
     */

    titleElement.textContent =
        song.title;


    categoryElement.textContent =
        song.category;


    /*
     * Lyrics
     *
     * White-space: pre-line in CSS
     * allows line breaks to remain.
     */

    lyricsElement.textContent =
        song.lyrics;


    /*
     * YouTube
     */

    if (
        song.youtube_url &&
        song.youtube_url.trim() !== ""
    ) {

        youtubeSection.innerHTML = `

            <a
                class="youtube-button"
                href="${song.youtube_url}"
                target="_blank"
                rel="noopener noreferrer"
            >

                ▶ Watch / Listen on YouTube

            </a>

        `;

    }
    else {

        youtubeSection.innerHTML = "";

    }

}
