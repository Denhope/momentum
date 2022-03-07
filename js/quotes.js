async function getQuotes() {
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');

  const quotes = './js/data.json';
  const res = await fetch(quotes);
  const data = await res.json();

  const randomQuote = data[Math.floor(Math.random() * quotes.length)];
  quote.textContent = randomQuote.text;
  author.textContent = randomQuote.author;
}

export function init() {
  getQuotes();

  const changeQuote = document.querySelector('.change-quote');
  changeQuote.addEventListener('click', () => {
    getQuotes();
  });
}
