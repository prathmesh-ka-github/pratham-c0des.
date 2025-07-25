// import { getViews } from "./viewsAPI"

async function showblog(id){
    if (document.getElementById(`blogt${id}`)) {
        blogtid = document.getElementById(`blogt${id}`)
        blogtid.classList.toggle('big-title')
    }
    if (document.getElementById(`blog${id}`)) {
        blogid = document.getElementById(`blog${id}`)
        blogid.classList.toggle('show-blog')
    }
    if (document.getElementById(`code${id}`)) {
        code = document.getElementById(`code${id}`)
        code.classList.toggle("hide-code")
    }
    if (document.getElementById(`blogimg${id}`)) {
        allblogimgs = document.querySelectorAll(`#blogimg${id}`)
        allblogimgs.forEach(blogimg => {
            blogimg.classList.toggle('showimg')
        });
    }
    // document.cookie = "blog1=true; expires=Thu, 17 Dec 2025 12:00:00 UTC; path=/";
    // document.cookie = "username=John Smith; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/";
    // document.cookie = "name=Tim Cook; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/";
    // document.cookie = "name; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/";
    // const now = new Date();
    // console.log(now.getHours());
    // let allcookies = decodeURIComponent(document.cookie);
    // let cookiearry = allcookies.split(';')
    // console.log(allcookies);
    
    // fetch('http://localhost:3000/blogviews').then( res => {
    //     if (!res.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     return res.json()
    // }).then( data => {
    //     data.forEach(d => {
    //         if (d.blog == id) {
    //             console.log(d)
    //         }
    //     })
    //     console.log(data)
    // })
}

async function getViews(){
    fetch('http://localhost:3000/blogviews').then( res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return res.json()
    }).then( data => {
        data.forEach(d => {
            const displayview = document.getElementById(`view${d.blog}`)
            displayview.innerText = d.views
        })
    })
    // view1
}
getViews()