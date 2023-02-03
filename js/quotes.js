const quotes = [
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "We don't know a millionth of one percent about anything.",
        author: "Thomas A. Edison"
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {
        quote: "Believe those who are seeking the truth. Doubt those who find it.",
        author: "Andre Gide"
    },
    {
        quote: "He that lives upon hope will die fasting.",
        author: "Benjamin Franklin"
    },
    {
        quote: "It is a bad plan that admits of no modification.",
        author: "Publilius Syrus"
    },
    {
        quote: "Prejudice is opinion without judgement.",
        author: "Voltaire"
    },
    {
        quote: "The superior man is modest in his speech, but excels in his actions.",
        author: "Confucius"
    },
    {
        quote: "The merit of an action lies in finishing it to the end.",
        author: "Genghis Khan"
    },
    {
        quote: "Only actions give life strength; only moderation gives it a charm.",
        author: "Jean Paul Richter"
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText =todaysQuote.author;