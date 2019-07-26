const quoteBox = document.getElementById("quote-box");
let quoteCounter = 1;
let quoteType = "All";
let quoteTypeIndex;
let quoteStart = 0;
let quoteEnd = 21;
let timeQuoteStart = 0;
let timeQuoteEnd = 10;
let moneyQuoteStart = 11;
let moneyQuoteEnd = 21;

const updateQuoteCounter = () => {
  quoteCounter = document.getElementById("quote-counter").value;
  quoteBox.innerHTML = "";
};

const updateQuoteType = () => {
  quoteTypeIndex = document.getElementById("quote-type");
  quoteType = quoteTypeIndex.options[quoteTypeIndex.selectedIndex].textContent;
  quoteBox.innerHTML = "";
};

const getRandomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const showQuotes = () => {
  quoteBox.innerHTML = "";

  let arr = [];
  if (quoteType === "Time") {
    for (let i = 0; i < quoteCounter; i++) {
      let para = document.createElement("p");
      let randBegin = getRandomIndex(timeQuoteStart, timeQuoteEnd);
      let randMiddle = getRandomIndex(timeQuoteStart, timeQuoteEnd);
      let randEnd = getRandomIndex(timeQuoteStart, timeQuoteEnd);
      let quote = `${quotes[randBegin].begin} ${quotes[randMiddle].middle} ${
        quotes[randEnd].end
      }`;
      arr.push(quote);
      para.innerHTML = quote;
      quoteBox.append(para);
    }
  } else if (quoteType === "Money") {
    for (let i = 0; i < quoteCounter; i++) {
      let para = document.createElement("p");
      let randBegin = getRandomIndex(moneyQuoteStart, moneyQuoteEnd);
      let randMiddle = getRandomIndex(moneyQuoteStart, moneyQuoteEnd);
      let randEnd = getRandomIndex(moneyQuoteStart, moneyQuoteEnd);
      let quote = `${quotes[randBegin].begin} ${quotes[randMiddle].middle} ${
        quotes[randEnd].end
      }`;
      arr.push(quote);
      para.innerHTML = quote;
      quoteBox.append(para);
    }
  } else {
    for (let i = 0; i < quoteCounter; i++) {
      let para = document.createElement("p");
      let randBegin = getRandomIndex(quoteStart, quoteEnd);
      let randMiddle = getRandomIndex(quoteStart, quoteEnd);
      let randEnd = getRandomIndex(quoteStart, quoteEnd);
      let quote = `"${quotes[randBegin].begin} ${quotes[randMiddle].middle} ${
        quotes[randEnd].end
      }"`;
      arr.push(quote);
      para.innerHTML = quote;
      quoteBox.append(para);
    }
  }
  console.log(arr);
};
