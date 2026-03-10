// import { getViews } from "./viewsAPI"

async function showblog(id) {
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
    // document.cookie = "blog2=true; expires=Thu, 17 Dec 2025 12:00:00 UTC; path=/";
    if (checkBlogCookie(id)) {
        console.log('Dont count the view..... YET');
    } else {

        fetch('https://dripanime.vercel.app/blogviews').then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return res.json()
        }).then(data => {
            data.forEach(d => {
                if (d.blog == id) {
                    fetch('https://dripanime.vercel.app/updateblogviews?number=1', { method: 'POST' }).then(res => {
                        if (!res.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        else {
                            let blogname = 'blog' + id
                            setCookieInTwoHours(blogname, 'true')
                            getViews()
                            console.log("View counted for blog" + id);
                        }
                        return res.json()
                    })
                }
            })
        })
    }
}

function checkBlogCookie(blogid) {
    let cookies = getCookies()
    let blog = 'blog' + blogid
    let blogexists = false
    cookies.forEach(cookie => {
        if (cookie.name === blog) {
            blogexists = true
        }
    })
    if (blogexists) {
        return true
    }
    else {
        return false
    }
}
function getCookies() {
    let allcookies = decodeURIComponent(document.cookie);
    let cookiearry = allcookies.split(';')
    let cookies = []

    if (allcookies == '') {
        // console.log('No cookies');
        return []
    }
    else {
        cookiearry.forEach(c => {
            cshard = c.split('=')
            const cookiename = cshard[0].trim()
            const cookieval = cshard[1].trim()
            cshardobj = {
                name: cookiename,
                val: cookieval
            }
            cookies.push(cshardobj)
        })
        return cookies
    }
}

async function getViews() {
    fetch('https://dripanime.vercel.app/blogviews').then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return res.json()
    }).then(data => {
        data.forEach(d => {
            const displayview = document.getElementById(`view${d.blog}`)
            displayview.innerText = d.views
        })
    })
}
getViews()

function setCookieInTwoHours(name, value) {
    const date = new Date();
    // Add 2 hours (2 * 60 minutes * 60 seconds * 1000 milliseconds)
    date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}