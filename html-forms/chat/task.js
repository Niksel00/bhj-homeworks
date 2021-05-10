const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const chatWidgetInput = document.querySelector(".chat-widget__input");

const arrMessages = [
  "Где ваша совесть?",
  "Вы кто?",
  "Уходите",
  "Добрый день! До свидания!",
];

chatWidget.addEventListener("click", function () {
  chatWidget.classList.add("chat-widget_active");
});

chatWidgetInput.addEventListener("keyup", (event) => {
  event.keyCode === 13 ? validate() : false;
  function randomMessages(arrMessages) {
    return Math.floor(Math.random() * arrMessages);
  }

  function validate() {
    if (chatWidgetInput.value === "") {
      return false;
    } else {
      sendMessages();
    }
  }

  function sendMessages() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    messages.innerHTML += `
          <div class="message message_client">
              <div class="message__time">${hours}:${minutes}</div>
              <div class="message__text">${chatWidgetInput.value}</div>
          </div>`;
    messages.innerHTML += `
          <div class="message">
              <div class="message__time">${hours}:${minutes}</div>
              <div class="message__text">${
                arrMessages[randomMessages(arrMessages.length)]
              }</div>
          </div>`;
    chatWidgetInput.value = "";
  }
}); 