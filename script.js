document.addEventListener("DOMContentLoaded", () => {
  const minuteHand = document.querySelector(".minute");
  const hourHand = document.querySelector(".hour");
  const secondHand = document.querySelector(".second");
  const mainContainer = document.querySelector("#main_container");
  const welcomeButton = document.querySelector("#btn_welcome");
  const changeTextContainer = document.querySelector(".change-txt-container");
  const changeTextButton = document.querySelector("#btn_chg_txt");
  changeTextButton.addEventListener("click", changeText);
  const pictureToChange = document.querySelector("#pic_to_change");
  pictureToChange.addEventListener("mouseover", changeImage);
  const url1 = "Images/hello.jpg";
  const url2 = "Images/do.jpg";
  pictureToChange.src = url1;
  const radios = document.getElementsByName("flexRadioDefault");
  const genderCheckButton = document.querySelector("#btn_gender");
  genderCheckButton.addEventListener("click", checkGender);
  const genderMessage = document.querySelector("#gender_message");
  genderMessage.style.visibility = "hidden";
  const firstName = document.querySelector("#input_first_name");
  const lastName = document.querySelector("#input_last_name");
  const favPet = document.querySelector("#fav_pet");
  const submitButton = document.querySelector("#btn_submit");
  const showInputButton = document.querySelector("#btn_show_input");
  submitButton.addEventListener("click", submitInput);
  showInputButton.addEventListener("click", showInput);
  let inputResults = [];
  const inputResultsPrinted = document.querySelectorAll(".inputs");
  for (i = 0; i < inputResultsPrinted.length; i++) {
    inputResultsPrinted[i].style.visibility = "hidden";
  }

  setInterval(function () {
    let d = new Date();
    let minuteOffset = d.getMinutes() / 2;
    let hourAngle = 30 * (d.getHours() - 12) + minuteOffset;
    let minuteAngle = d.getMinutes() * 6;
    let secondAngle = d.getSeconds() * 6;
    let randRed = Math.floor(Math.random() * 256);
    let randGreen = Math.floor(Math.random() * 256);
    let randBlue = Math.floor(Math.random() * 256);
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    mainContainer.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
  }, 1000);
  welcomeButton.addEventListener("click", () => {
    alert("WELCOME!");
  });
  function changeText() {
    changeTextContainer.style.background = "white";
    changeTextContainer.children[0].style.fontSize = "30px";
    changeTextContainer.children[0].innerHTML = "Text was changed";
  }
  function changeImage() {
    let picName = pictureToChange.src.valueOf().split("/");
    pictureToChange.src = picName.includes("hello.jpg") ? url2 : url1;
  }
  function checkGender() {
    if (radios[0].checked) {
      genderMessage.innerHTML = "Selected Gender: Male";
    } else if (radios[1].checked) {
      genderMessage.innerHTML = "Selected Gender: Female";
    } else {
      genderMessage.innerHTML = "No gender selected";
    }
    genderMessage.style.visibility = "visible";
  }
  function submitInput() {
    inputResults.length = 0;
    inputResults.push(firstName.value);
    inputResults.push(lastName.value);
    inputResults.push(favPet.value);
    window.open("thank.html");
  }
  function showInput() {
    for (let i = 0; i < inputResults.length; i++) {
      inputResultsPrinted[i].innerHTML = inputResults[i];
    }
    for (i = 0; i < inputResultsPrinted.length; i++) {
      inputResultsPrinted[i].style.visibility = "visible";
    }
  }
});
