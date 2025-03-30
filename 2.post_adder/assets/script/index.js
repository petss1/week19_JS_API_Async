document.addEventListener("DOMContentLoaded", function() {

    const button = document.querySelector('button');
    const postInput = document.getElementById('postInput');
    const postTextInput = document.getElementById('postTextInput');
    const postContainer = document.getElementById('postContainer');

    button.addEventListener("click", (e) => {
    e.preventDefault();

    const title = postInput.value;
    const body = postTextInput.value;

    const postData = {
        title: title,
        body: body
    };

    fetch ("https://jsonplaceholder.typicode.com/posts", {    
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(postData)     
        })
    
        .then ((res) => res.json())
        .then ((data) => {
                const postHtml = createPostHtml(data);
                addPostToContainer(postHtml);
                
                postInput.value = '';
                postTextInput.value = '';
        })
        .catch ((error) => {
            postInput.textContent = "Ошибка";
            console.error("Произошла ошибка при загрузке данных", error);
        });
    
        function createPostHtml(post) {
            return `<div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-body">${post.body}</p>
                </div>`;
        }
    
        function addPostToContainer(postHtml) {
            postContainer.innerHTML += postHtml;
        }
})
})
