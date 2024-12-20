const quotes = [
  "Lois, if I'm a child, you know what that makes you? A pedophile. And I'll be damned if I'm gonna stand here and take this from a pervert!",
  "Peter, those are Cheerios.",
  "I got a job following fat people around with a tuba.",
  "Why do women have boobs? So you got something to look at while you’re talking to them!",
  "That’s the way the cookie crumbles. I’m sorry. I shouldn’t have said that. I love you.",
  "Let’s go drink until we can’t feel feelings anymore.",
  "You may kill me, but you can’t kill my spirit!",
  "Victory shall be mine!",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function refreshQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = getRandomQuote();
}

// Initial quote on page load
refreshQuote();
