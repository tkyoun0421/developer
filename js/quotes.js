const quotes = [
    {
        quotes: "You will face many defeats in life, but never let yourself be defeated",
        author: "Maya Angelou",
    },
    {
        quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author: "Nelson Mandela",
    },
    {
        quotes: "In the end, it's not the years in your life that count. It's the life in your years",
        author: "Abraham Lincoln",
    },
    {
        quotes: "Never let the fear of striking out keep you from playing the game",
        author: "Babe Ruth",
    },
    {
        quotes: "Life is either a daring adventure or nothing at all",
        author: "Helen Keller",
    },
    {
        quotes: "Many of life's failures are people who did not realize how close they were to success when they gave up",
        author: "Thomas A. Edison",
    },
    {
        quotes: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
        author: "Dr. Seuss",
    },
    {
        quotes: "Being happy never goes out of style",
        author: "Lilly Pulitzer",
    },
    {
        quotes: "Life is either a great adventure or nothing",
        author: "Helen Keller",
    },
    {
        quotes: "All you need in this life is ignorance and confidence; then success is sure",
        author: "Mark Twain",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quotes;
author.innerText = todaysQuotes.author;