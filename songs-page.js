const songList = document.getElementById("songList");
const searchBox = document.getElementById("searchBox");


function displaySongs(songs) {

    songList.innerHTML = "";

    if (songs.length === 0) {

        songList.innerHTML = `
            <div class="no-results">
                No bhajan found.
            </div>
        `;

        return;
    }


    /*
     * Group songs by category
     */

    const groups = {};

    songs.forEach(song => {

        if (!groups[song.category]) {
            groups[song.category] = [];
        }

        groups[song.category].push(song);

    });


    let categoryNumber = 1;


    Object.keys(groups).forEach(category => {

        const categoryBlock =
            document.createElement("div");

        categoryBlock.className =
            "category-block";


        const categoryTitle =
            document.createElement("h2");

        categoryTitle.innerHTML =
            `${categoryNumber}. ${category}`;


        categoryBlock.appendChild(categoryTitle);


        const songsContainer =
            document.createElement("div");

        songsContainer.className =
            "category-songs";


        groups[category].forEach(song => {

            const songLink =
                document.createElement("a");

            songLink.className =
                "song-link";

            songLink.href =
                `song.html?id=${encodeURIComponent(song.id)}`;

            songLink.innerHTML =
                `<span>•</span> ${song.title}`;


            songsContainer.appendChild(songLink);

        });


        categoryBlock.appendChild(songsContainer);

        songList.appendChild(categoryBlock);

        categoryNumber++;

    });

}


/*
 * Initial display
 */

displaySongs(bhajans);


/*
 * Search
 */

searchBox.addEventListener("input", function () {

    const searchText =
        searchBox.value
            .toLowerCase()
            .trim();


    if (!searchText) {

        displaySongs(bhajans);

        return;

    }


    const filtered =
        bhajans.filter(song => {

            return (
                song.title
                    .toLowerCase()
                    .includes(searchText)

                ||

                song.category
                    .toLowerCase()
                    .includes(searchText)

                ||

                song.lyrics
                    .toLowerCase()
                    .includes(searchText)
            );

        });


    displaySongs(filtered);

});
