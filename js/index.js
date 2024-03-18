// API DATA

// fetch(APIUrl, (config/params))
// .then(callback)
// .catch(error => {...code //})
// .finally(callback)

const APIUrl = `https://jsonplaceholder.typicode.com`

// fetch(APIUrl + `/posts`)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(post => {
//             document.body.insertAdjacentHTML(
//                 "beforeend",
//                 `
//                     <h1>Post ID: ${post.id}</h1>

//                     <dl>
//                         <dt>${post.title}</dt>
//                         <dd>${post.body}</dd>
//                     </dl>

//                     <hr />
//                 `
//             )
//         });
//     })

const InitFunc = () => {
    const root = document.querySelector("#root");

    root.textContent = "Loading..."

    fetch((APIUrl + "/photos"))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            root.textContent = ""

            data.forEach(photo => {
                root.insertAdjacentHTML("beforeend", `
                <div class="col s12 m7">
                    <div class="card">
                    <div class="card-image">
                        <img src="${photo.thumbnailUrl}">
                        <span class="card-title">
                            Card Title
                        </span>
                    </div>
                    <div class="card-content">
                        <p>
                            ${photo.title}
                        </p>
                    </div>
                    <div class="card-action">
                        <a href="${photo.url}">This is a link</a>
                    </div>
                    </div>
                </div>
                `)
            });
        
        })
}

InitFunc()