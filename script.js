const truthButton = document.getElementById("truth-button");
const dareButton = document.getElementById("dare-button");
const question = document.getElementById("prompt");

const truths = [
 "What is your biggest fear?",
 "Who is the last person you stalked on social       media?",
 "What is the most embarrassing thing in your room right now?",
 "What is the worst thing you have ever done?",
 "Have you ever stolen something?",
"What is your most embarrassing memory?",
"Have you ever cheated on a test or exam?",
"Have you ever had a crush on one of your friends?",
"Have you ever been in love?",
"Have you ever been bullied?",
"Have you ever been in a physical fight?",
"Have you ever been in a car accident?",
"Have you ever been arrested?",
"Have you ever had a one night stand?",
"Have you ever had a secret crush on a celebrity?",
"Have you ever been in a serious relationship?",
"Have you ever been in love with more than one person at the same time?",
"Have you ever been in a long distance relationship?",
"Have you ever been in a relationship with someone you didn't love?",
"Have you ever been in a relationship with someone you knew was bad for you?",
"Have you ever been in a relationship with someone you knew was cheating on you?",
"Have you ever kissed someone of the same gender?",
"Have you ever had a crush on one of your teachers?",
"Have you ever had a dream about someone you know?",
"Have you ever had a crush on someone who didn't know you existed?",
"Have you ever had a crush on someone who was already in a relationship?",
"Have you ever had a crush on someone who was older or younger than you?",
"Have you ever had a crush on someone who was a friend's ex?",
"Have you ever had a crush on someone who was a family member?",
"Have you ever had a crush on someone who was taken?",
"Have you ever had a crush on someone you couldn't have?",
"Have you ever had a crush on someone you didn't want to have?",
"Have you ever had a crush on someone you couldn't stand?",
"Have you ever had a crush on someone you didn't want to have a crush on?",
  "What’s the luckiest thing that’s ever happened to you?",
"Do you have any phobias?",
"Do you believe in an afterlife?",
"If you had to move to a different country tomorrow, where would you go?",
"What do you want to be remembered for most in life?",
"Do you believe in soul mates?",
"Have you ever re-gifted a present? What was it?",
"What’s the weirdest thing you do when you’re alone?"
];

const dares = [
  "Sing the national anthem in front of everyone.",
  "Call your crush and tell them you love them.",
  "Eat a spoonful of hot sauce.",
  "Do the worm dance in front of everyone.",
  "Pick someone in this room and (lovingly) roast them for one minute straight.",
"Let another person post an Instagram caption on your behalf.",
"Hand over your phone to another player who can send a single text saying anything they want to anyone they want.",
"Let the other players go through your phone for one minute.",
"Smell another player's armpit.",
"Smell another player's bare foot.",
"Eat a bite of a banana peel.",
"Do an impression of another player until someone can figure out who it is.",
"Say pickles at the end of every sentence you say until it's your turn again.",
"Imitate a TikTok star until another player guesses who you're portraying.",
"Act like a chicken until your next turn.",
"Talk in a British accent until your next turn.",
"Send a heart-eye emoji to your crush’s Instagram story.",
"Call a friend, pretend it's their birthday, and sing them Happy Birthday to You.",
"Name a famous person that looks like each player in the room.",
"Show us your best dance moves.",
"Eat a packet of hot sauce straight.",
"Let another person draw a tattoo on your back with a permanent marker.",
"Put on a blindfold and touch the other players' faces until you can figure out who's who.",
"Bite into a raw onion without slicing it.",
"Go outside and try to “summon” the rain as loud as possible.",
"Serenade the person to your right for a full minute.",
"Do 20 squats.",
"Let the other players redo your hairstyle.",
"Eat a condiment of your choice straight from the bottle.",
"Dump out your purse, backpack, or pockets and do a show and tell of what's inside.",
"Let the player to your right redo your makeup with their eyes closed.",
"Prank call one of your family members.",
"Let another player create a hat out of toilet paper — and you have to wear it for the rest of the game.",
"Do a plank for a full minute."
];

truthButton.addEventListener("click", function() {
  let randomTruth = truths[Math.floor(Math.random() * truths.length)];
  question.innerHTML = randomTruth;
});

dareButton.addEventListener("click", function() {
  let randomDare = dares[Math.floor(Math.random() * dares.length)];
  question.innerHTML = randomDare;
});
