const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const button = document.getElementById('new-quote');

button.addEventListener('click', () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = `"${random.text}"`;
  authorEl.textContent = `— ${random.author}`;
});
