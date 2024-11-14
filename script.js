(function () {
  let noCount = 0;

  const phrases = [
    "No",

    "Are you sure?",

    "Really sure",

    "Baby please ",

    "Don't do this to me",

    "I am gonna cry...",

    "You're breaking my heart☹️"
  ];

  const $acceptBtn = document.querySelector(".accept-btn");

  const $rejectBtn = document.querySelector(".reject-btn");

  const $mainContainer = document.querySelector(".main-container");

  const $wContainer = document.querySelector(".w-container");

  const handleReject = () => {
    let acceptBtnSize = noCount * 20 + 16;

    if (noCount < phrases.length) {
      $rejectBtn.textContent = phrases[noCount];
    } else {
      // Handle if you want to do something specific when all phrases are used
    }

    noCount = noCount + 1;

    //Increase accept btn font size

    $acceptBtn.style.fontSize = acceptBtnSize + "px";
  };

  const handleW = () => {
    $mainContainer.style.display = "none";

    $wContainer.style.display = "flex";
  };

  $rejectBtn.addEventListener("click", handleReject);

  $acceptBtn.addEventListener("click", handleW);

  $rejectBtn.append(phrases[0]);
})();
