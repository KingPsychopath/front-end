

const buttonList = [];
function createButtons() {
  for (let i = 0; i < 5; i++) {
    let button = {
        click: function () {
          console.log(this);
        },
        innerText: "Click me",
      };

    button.innerText = "Button " + i;
    button.onclick = function () {
      console.log("Button " + i + " clicked");
    };
    buttonList.push(button);
  }
}

createButtons();
console.log(buttonList);
buttonList[0].onclick();
buttonList[1].onclick();
buttonList[2].onclick();
buttonList[3].onclick();
buttonList[4].onclick();


