const quoteBox = document.getElementById("quote-box");
let quoteCounter = 1;
let quoteType = "All";
let quoteTypeIndex;

//updates the counting of quote
const updateQuoteCounter = () => {
  quoteCounter = document.getElementById("quote-counter").value;
  quoteBox.innerHTML = "";
};

//updates the quote type
const updateQuoteType = () => {
  quoteTypeIndex = document.getElementById("quote-type");
  quoteType = quoteTypeIndex.options[quoteTypeIndex.selectedIndex].textContent;
  quoteBox.innerHTML = "";
};

//gets random index
const getRandomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//shows quote
const showQuotes = () => {
  quoteBox.innerHTML = "";
  let arr = [];
  let quoteSelection = quotes.filter(quote => quote.category === quoteType); //filters only the quotes of selected category

  if (quoteType === "All") {
    quoteSelection = quotes; //when all is selected, then quoteSelection variable stores the quotes array
  }

  //loops according to quoteCounter
  for (let i = 0; i < quoteCounter; i++) {
    let para = document.createElement("p");
    let randBegin = getRandomIndex(0, quoteSelection.length - 1); //selects the beginning part of sentence
    let randMiddle = getRandomIndex(0, quoteSelection.length - 1); //selects the middle part of sentence
    let randEnd = getRandomIndex(0, quoteSelection.length - 1); //selects the ending part of sentence
    //concates all 3 part od sentence
    let quote = `${quoteSelection[randBegin].begin} ${
      quoteSelection[randMiddle].middle
    } ${quoteSelection[randEnd].end}`;

    arr.push(quote);
    para.innerHTML = quote;
    quoteBox.append(para);
  }
};
