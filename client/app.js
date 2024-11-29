
async function fetchServerDate(){
    const response = await fetch("http://localhost:4567/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: "query { ognoo }",
        }),
    });

    const body = await response.json();
    return body.data.ognoo;
}

fetchServerDate().then(ognoo => {
    document.getElementById("message").textContent = ognoo;
});
