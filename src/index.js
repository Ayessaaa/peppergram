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
    profileText.classList.add("text-green-600")
    profileText.classList.remove("text-red-600")
  });

  blockButton.addEventListener("click", function () {
    var i =
      Math.floor(Math.random() * (0 - blockPrompts.length)) +
      blockPrompts.length;
    profileText.innerText = blockPrompts[i];
    profileText.classList.remove("text-green-600")
    profileText.classList.add("text-red-600")
  });
};
