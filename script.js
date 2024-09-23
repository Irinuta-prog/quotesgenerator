const quotes = [
    { quote: "Where miss? To the stars", author: "Movie: Roman Holiday" },
    { quote: "The best way to predict the future, is to create it", author: "Abraham Lincoln" },
    { quote: "Everything you want is on the other side of fear", author: "Jack Canfield" }
  ];

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = selectedQuote.quote;
    document.getElementById('author').textContent = selectedQuote.author;
  }

