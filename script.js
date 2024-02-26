const initLikes = 100;
const initDislikes = 40;

let likesCount = initLikes;
let dislikesCount = initDislikes;

let LikeBtn = document.getElementById("likeBtn");
let disLikeBtn = document.getElementById("dislikeBtn");

LikeBtn.innerText = "👍" + likesCount
disLikeBtn.innerText = "👎" + dislikesCount

function doLike(){
    likesCount++;
    LikeBtn.innerText = "👍" + likesCount
    disableButtons();
    setCookie();
}

function doDislike(){
    dislikesCount++;
    disLikeBtn.innerText = "👎" + dislikesCount
    disableButtons();
    setCookie();
}

function disableButtons(){
    LikeBtn.disabled = true;
    disLikeBtn.disabled = true;
}

function setCookie(){
    document.cookie = "voted=true; SameSite=Strict; Max-Age=" + 60;
}

window.onload = function(){
    if (document.cookie && document.cookie.indexOf("voted")> -1){
        disableButtons();
    }
}