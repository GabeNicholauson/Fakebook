'use strict';

import {Subsciber} from './User.js';

const pfp = document.querySelector('.profile');
const modal = document.querySelector('.modal');
const userInfo = document.querySelector('.user-info');
const text = document.querySelector('.post-text');
const chooseImg = document.querySelector('.choose-img');
const selectedImg = document.querySelector('.img');
const post = document.querySelector('.post');
const feed = document.querySelector('.feed');
const subscriber = new Subsciber(
    12345, 
    'Gabriel Nicholauson', 
    'Gabriel', 
    'gabriel@gmail.com', 
    ['Restaurant', 'School'], 
    ['Hockey', 'Baseball'], 
    true);
let uploadedImage = '';

/*********************************
 *  Event listeners
*********************************/
pfp.addEventListener('click', () => {
    modal.classList.remove('hidden');
    addUserInfo();
});

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
})

post.addEventListener('click', () => {
    verifyPost();
});

chooseImg.addEventListener('change', function() {
    getFileName(chooseImg.value);

    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
});

/*********************************
 *  Functions
*********************************/

function addUserInfo() {
    userInfo.innerHTML = subscriber.getInfo();
}

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
                            <p class="user-name">${subscriber.userName}</p>
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
    selectedImg.innerHTML = ``;
}

function getFileName(fileName) {
    if(fileName.length > 40) selectedImg.innerHTML = `${fileName.slice(12, 40)}...`;
    else selectedImg.innerHTML = fileName.slice(12);
}