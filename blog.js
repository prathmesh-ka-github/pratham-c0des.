// import { getViews } from "./viewsAPI"

function showblog(id){
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
}