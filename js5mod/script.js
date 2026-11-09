const form = document.querySelector("#haku");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const kysely = document.querySelector("#query").value;
    const vastaus = await fetch(`https://api.tvmaze.com/search/shows?q=${kysely}`);
    const data = await vastaus.json();
    console.log(data);

    const tulostus = document.querySelector("#tulostus");
    tulostus.innerHTML = "";

    data.forEach((tulos) => {
        const sarja = tulos.show;

        tulostus.innerHTML += `
            <article>
                <h2>${sarja.name}</h2>
                <a href="${sarja.url}" target="_blank">Lisätiedot</a>
                <br>
                <img src="${sarja.image?.medium}" alt="${sarja.name}">
                <div>${sarja.summary}</div>
            </article>
        `;
    });
});