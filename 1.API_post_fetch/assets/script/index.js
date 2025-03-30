document.addEventListener("DOMContentLoaded", function() {
const postList = document.getElementById("post-list");
fetch ("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
            "Accept": "application/json; charset=UTF-8"
    }
})

    .then ((res) => res.json())
    .then ((data) => {
        data.forEach((post) => {
            const postHtml = createPostHtml(post);
            addPostToContainer(postHtml);
        });
    })
    .catch ((error) => {
        postList.textContent = "Ошибка";
        console.error("Произошла ошибка при загрузке данных", error);
    });

    function createPostHtml(post) {
        return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
                </li>`;
    }

    function addPostToContainer(postHtml) {
        postList.innerHTML += postHtml;
    }
});