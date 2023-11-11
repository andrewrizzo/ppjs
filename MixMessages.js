var messages = [
    "I love you more than words can say.",
    "You are the best thing that has ever happened to me.",
    "I can't imagine my life without you.",
    "You make me so happy.",
    "I am so lucky to have you in my life.",
  ];
  
  function generateMessage() {
    var randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
  
  document.getElementById("message").innerHTML = generateMessage();
  