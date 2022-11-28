'use strict';

const text = document.querySelector('.post-text');
const chooseImg = document.querySelector('.choose-img');
const chooseImgIcon = document.querySelector('.icon');
const post = document.querySelector('.post');
const feed = document.querySelector('.feed');
let uploadedImage = '';

post.addEventListener('click', () => {
    verifyPost();
});

chooseImg.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
});

/*********************************
 *  Functions
*********************************/

function verifyPost() {
    if (chooseImg.value === '' && text.value === '') 
        alert('Please type something in the text box, or choose an image to upload.');
    else createPost();  
}

function createPost() {
    let newPost = ``;
    let addImg = ``;
    if (chooseImg.value !== '') {
        addImg = `<img src="${uploadedImage}" alt="User image">`
    }
    newPost = `<div class="container">
                    <header class="feed-head flexbox">
                        <div class="poster flexbox">
                            <div class="profile"></div>
                            <p class="user-name">John Doe</p>
                        </div>
                        <p class="date-posted">${new Date().toString().substring(4, 15)}</p>
                    </header>

                    <section class="content">
                        <p>${text.value.trim()}</p>
                        ${addImg}
                    </section>
                </div>`;
    feed.innerHTML = newPost + feed.innerHTML;
    clearPostBox();
}

function clearPostBox() {
    text.value = ``;
    chooseImg.value = ``;
}