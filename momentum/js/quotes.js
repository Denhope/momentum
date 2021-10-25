

async function getQuotes() {  
    const quote = document.querySelector('.quote')
    const author = document.querySelector('.author')

    const quotes = './js/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    
    // console.log(data);   
    const randomQuote = data[Math.floor(Math.random() * quotes.length)];
    quote.textContent = randomQuote.text
    author.textContent = randomQuote.author

    // quote.textContent = `${data[Math.floor(Math.random() * quotes.length)].text}`;
    // quote.textContent =  randomQuote(data)
    // author.textContent = ` ${data[].author}`; 


}



export function init(){   
    getQuotes();

    const changeQuote = document.querySelector('.change-quote')
    changeQuote.addEventListener('click',() => {
        getQuotes();
    })


}

