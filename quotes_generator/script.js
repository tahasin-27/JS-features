// Variables

let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let btn = document.querySelector(".newbtn");

// Creating array with quotes
let quotes = [
    {
        quote: `"In the end, we will remember not the words of our enemies, but the silence of our friends."`,
        person: `Martin Luther King Jr.`,
    },
    {
        quote: `"The only way to do great work is to love what you do." `,
        person: `Steve Jobs`,
    },
    {
        quote: `"It is never too late to be what you might have been."`,
        person: `George Eliot`,
    },
    {
        quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
        person: `Winston Churchill`,
    },
    {
        quote: `"Happiness is not something ready-made. It comes from your own actions."`,
        person: ` Dalai Lama`,
    },
    {
        quote: `"You miss 100% of the shots you don’t take."`,
        person: ` Wayne Gretzky`,
    },
    {
        quote: `"To live is the rarest thing in the world. Most people exist, that is all."`,
        person: `Oscar Wilde`,
    },
    {
        quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
        person: `Ralph Waldo Emerson`,
    }
];

btn.addEventListener("click", function() {
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})