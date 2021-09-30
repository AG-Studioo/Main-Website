
let quote0 = "“I have not failed. I’ve just found 10,000 ways that won’t work.”";
let quote1 = "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”";
let quote2 = "“Code is like humor. When you have to explain it, it’s bad.”";
let quote3 = "“Copy-and-Paste was programmed by programmers for programmers actually.”";
let quote4 = "“Algorithm: Word used by programmers when they don’t want to explain what they did.”";
let quote5 = "“There are two ways to write error-free programs; only the third works.”";
let quote6 = "“It’s not a bug — it’s an undocumented feature.”";
let quote7 = "“A son asked his father why the sun rises in the east, and sets in the west. His response? It works, don’t touch!”";
let quote8 = "“There are only two kinds of programming languages out there. The ones people complain about and the ones no one uses.”";
let quote9 = "“There is an easy way and a hard way. The hard part is finding the easy way.”";

let quoteDisplay = document.querySelector('.quotes')

let quotes = [quote0, quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9];

function pick(quotes, quoteDisplay) {
    let randomQuote = quotes[Math.floor(Math.random() * 10)];
   
    quoteDisplay.innerHTML = randomQuote;
    
}

pick(quotes, quoteDisplay);
setInterval(pick, 20000, quotes, quoteDisplay);