window.onload = function () {
  followButton = document.getElementById("follow_button");
  blockButton = document.getElementById("block_button");
  profileText = document.getElementById("profile_text");

  blockPrompts = [
    "bruhh why u reporting me!",
    "u just jealous",
    "bruh why u report when this is my website",
    "HEY!!!!!!",
    "whatever atleast i have my own website",
  ];

  followPrompts = [
    "thanks queen",
    "as u should",
    "bro im this close to buying followers",
    "yes!!!!!!",
    "ill follow u back but i cant coz this is my website",
    "ill know when u unfollow",
  ];

  followButton.addEventListener("click", function () {
    var i =
      Math.floor(Math.random() * (0 - followPrompts.length)) +
      followPrompts.length;
    profileText.innerText = followPrompts[i];
    profileText.classList.add("text-green-600");
    profileText.classList.remove("text-red-600");
  });

  blockButton.addEventListener("click", function () {
    var i =
      Math.floor(Math.random() * (0 - blockPrompts.length)) +
      blockPrompts.length;
    profileText.innerText = blockPrompts[i];
    profileText.classList.remove("text-green-600");
    profileText.classList.add("text-red-600");
  });

  const commentsDiv1 = document.getElementById("comments1");
  const username1 = document.getElementById("username1");
  const comment1 = document.getElementById("comment1");
  const send1 = document.getElementById("send1");

  const commentsDiv2 = document.getElementById("comments2");
  const username2 = document.getElementById("username2");
  const comment2 = document.getElementById("comment2");
  const send2 = document.getElementById("send2");

  const commentsDiv3 = document.getElementById("comments3");
  const username3 = document.getElementById("username3");
  const comment3 = document.getElementById("comment3");
  const send3 = document.getElementById("send3");

  const commentsDiv4 = document.getElementById("comments4");
  const username4 = document.getElementById("username4");
  const comment4 = document.getElementById("comment4");
  const send4 = document.getElementById("send4");

  const commentsDiv5 = document.getElementById("comments5");
  const username5 = document.getElementById("username5");
  const comment5 = document.getElementById("comment5");
  const send5 = document.getElementById("send5");

  send1.addEventListener("click", function () {
    const commentHTML = `<p class="-mt-1">
        <span class="text-xs font-semibold text-neutral-500 ml-5 -mt-2.5">
          ${username1.value}
        </span>
        <span class="text-xs text-neutral-500">${comment1.value}</span>
      </p>`;
    commentsDiv1.insertAdjacentHTML("beforeend", commentHTML);
    username1.value = "";
    comment1.value = "";
  });

  send2.addEventListener("click", function () {
    const commentHTML = `<p class="-mt-1">
        <span class="text-xs font-semibold text-neutral-500 ml-5 -mt-2.5">
          ${username2.value}
        </span>
        <span class="text-xs text-neutral-500">${comment2.value}</span>
      </p>`;
    commentsDiv2.insertAdjacentHTML("beforeend", commentHTML);
    username2.value = "";
    comment2.value = "";
  });

  send3.addEventListener("click", function () {
    const commentHTML = `<p class="-mt-1">
        <span class="text-xs font-semibold text-neutral-500 ml-5 -mt-2.5">
          ${username3.value}
        </span>
        <span class="text-xs text-neutral-500">${comment3.value}</span>
      </p>`;
    commentsDiv3.insertAdjacentHTML("beforeend", commentHTML);
    username3.value = "";
    comment3.value = "";
  });

  send4.addEventListener("click", function () {
    const commentHTML = `<p class="-mt-1">
        <span class="text-xs font-semibold text-neutral-500 ml-5 -mt-2.5">
          ${username4.value}
        </span>
        <span class="text-xs text-neutral-500">${comment4.value}</span>
      </p>`;
    commentsDiv4.insertAdjacentHTML("beforeend", commentHTML);
    username4.value = "";
    comment4.value = "";
  });

  send5.addEventListener("click", function () {
    const commentHTML = `<p class="-mt-1">
        <span class="text-xs font-semibold text-neutral-500 ml-5 -mt-2.5">
          ${username5.value}
        </span>
        <span class="text-xs text-neutral-500">${comment5.value}</span>
      </p>`;
    commentsDiv5.insertAdjacentHTML("beforeend", commentHTML);
    username5.value = "";
    comment5.value = "";
  });

  const heart1 = document.getElementById("heart1");
  heart1.addEventListener("click", function () {
    heart1.classList.add("stroke-brown4");
    heart1.classList.add("fill-brown3");
  });

  const heart2 = document.getElementById("heart2");
  heart2.addEventListener("click", function () {
    heart2.classList.add("stroke-brown4");
    heart2.classList.add("fill-brown3");
  });

  const heart3 = document.getElementById("heart3");
  heart3.addEventListener("click", function () {
    heart3.classList.add("stroke-brown4");
    heart3.classList.add("fill-brown3");
  });

  const heart4 = document.getElementById("heart4");
  heart4.addEventListener("click", function () {
    heart4.classList.add("stroke-brown4");
    heart4.classList.add("fill-brown3");
  });

  const heart5 = document.getElementById("heart5");
  heart5.addEventListener("click", function () {
    heart5.classList.add("stroke-brown4");
    heart5.classList.add("fill-brown3");
  });

  const prev5 = document.getElementById("prev5")
  const next5 = document.getElementById("next5")
  const img5 = document.getElementById("img5")

  next5.addEventListener("click", function(){
    img5.src = "imgs/5b.jpg"
    prev5.classList.remove("invisible")
    next5.classList.add("invisible")
  })

  prev5.addEventListener("click", function(){
    img5.src = "imgs/5a.jpg"
    next5.classList.remove("invisible")
    prev5.classList.add("invisible")
  })
};
