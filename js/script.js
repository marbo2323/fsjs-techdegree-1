/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Source of quotes: https://blog.hubspot.com/sales/famous-quotes
 */
const quotes = [
  {
    source: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    citation: "blog.hubspot.com",
    year: "1994",
  },
  {
    source: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
    citation: "blog.hubspot.com",
  },
  {
    source: "Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    year: "2000",
  },
  {
    source: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    source: "Oprah Winfrey",
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
  {
    source: "James Cameron",
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  },
  {
    source: "John Lennon ",
    quote:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one",
  },
  {
    source: "Mahatma Gandhi",
    quote: "You must be the change you wish to see in the world.",
  },
  {
    source: "Mother Teresa",
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
  },
  {
    source: "Franklin D. Roosevelt",
    quote: "The only thing we have to fear is fear itself.",
  },
  {
    source: "Martin Luther King Jr.",
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  },
  {
    source: "Eleanor Roosevelt",
    quote: "Do one thing every day that scares you.",
  },
  { source: "Benjamin Franklin", quote: "Well done is better than well said." },
  {
    source: "Helen Keller",
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  },
  {
    source: "Aristotle",
    quote:
      "It is during our darkest moments that we must focus to see the light.",
  },
  {
    source: "Ralph Waldo Emerson",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  },
  {
    source: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
];

/***
 * Returns quote from quotes array in random order
 */
function getRandomQuote() {
  // idea of generating random number in range: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const randomIndex = Math.floor(Math.random() * (quotes.length - 1));
  return quotes[randomIndex];
}

/***
 * Print out random quote
 */
function printQuote() {
  const randomQuote = getRandomQuote();
  let quoteHtml = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} `;

  if (randomQuote.citation) {
    quoteHtml += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    quoteHtml += `<span class="citation">${randomQuote.year}</span>`;
  }

  quoteHtml += "</p>";

  document.getElementById("quote-box").innerHTML = quoteHtml;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
