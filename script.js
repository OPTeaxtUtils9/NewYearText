let texts = [
    "Happy New Year 2025!",
    "A fresh year, a new beginning.",
    "May all your dreams come true.",
    "Here's to a prosperous year ahead.",
    "Wishing you love, laughter, and peace.",
    "May 2025 be your best year yet.",
    "Cheers to new adventures and opportunities.",
    "Embrace the new year with a smile.",
    "Let's welcome 2025 with open arms.",
    "May your heart be filled with joy.",
    "Wishing you success in all endeavors.",
    "A year full of good health.",
    "Here's to new beginnings and growth.",
    "May happiness surround you always.",
    "Let the year ahead be bright.",
    "Stay positive and keep moving forward.",
    "May 2025 bring peace and harmony.",
    "Hoping for new challenges and triumphs.",
    "Wishing you endless moments of joy.",
    "Cherish every moment this year.",
    "Let go of past sorrows.",
    "Embrace 2025 with renewed energy.",
    "A year of good luck and success.",
    "May you find happiness in everything.",
    "Wishing you love in abundance.",
    "Cheers to achieving your goals.",
    "May the year ahead be fulfilling.",
    "New beginnings bring new possibilities.",
    "Embrace every new opportunity this year.",
    "Here's to laughter and unforgettable memories.",
    "Let kindness guide your actions this year.",
    "Hoping for a year filled with blessings.",
    "A year to cherish and create memories.",
    "May you experience growth in every way.",
    "Celebrate life and all its gifts.",
    "Here's to love, health, and happiness.",
    "May your dreams take flight in 2025.",
    "Let's make this year unforgettable.",
    "Wishing you joy, peace, and prosperity.",
    "A year to shine brighter than ever.",
    "May your hard work pay off.",
    "May 2025 be filled with hope.",
    "Let the new year bring change.",
    "Keep pushing forward toward success.",
    "Celebrate the new year's opportunities.",
    "Here's to a year of blessings.",
    "May love and joy fill your days.",
    "Wishing you good fortune and peace.",
    "Here's to new experiences and challenges.",
    "Let this be your most exciting year.",
    "May all your dreams be realized.",
    "Wishing you courage to pursue your goals.",
    "A year full of positivity and hope.",
    "May 2025 be a year of growth.",
    "Embrace new beginnings with an open heart.",
    "Here's to a year of adventures.",
    "Wishing you an abundance of happiness.",
    "May every moment be filled with joy.",
    "A year of laughter and love ahead.",
    "Here's to a prosperous and peaceful year.",
    "Wishing you strength and resilience in 2025.",
    "May you overcome every obstacle with grace.",
    "Let 2025 be your year of success.",
    "A fresh start with endless possibilities.",
    "May peace reign in your heart.",
    "Here's to making new memories.",
    "May you find fulfillment in everything.",
    "A year to reach new heights.",
    "Stay optimistic and hopeful in 2025.",
    "Let go of doubts and fears.",
    "May your heart be light and joyful.",
    "Here's to a year of achievements.",
    "May you live each day with purpose.",
    "Wishing you peace, joy, and contentment.",
    "A year of learning and growing.",
    "May you find balance in 2025.",
    "Wishing you success in every venture.",
    "Let every challenge turn into an opportunity.",
    "May 2025 be filled with gratitude.",
    "A year to create unforgettable moments.",
    "Here's to health, happiness, and love.",
    "May your path be filled with blessings.",
    "Wishing you inner peace and tranquility.",
    "Here's to growth and personal development.",
    "May you achieve your dreams this year.",
    "Let the new year inspire you.",
    "Wishing you a year full of adventure.",
    "May your spirit be lifted in 2025.",
    "Here's to a year full of possibilities.",
    "May you find joy in the little things.",
    "A year of prosperity and new beginnings.",
    "Wishing you courage and strength ahead.",
    "May your year be bright and vibrant.",
    "A fresh start, a world of possibilities.",
    "May you overcome every challenge with grace.",
    "Wishing you everything you desire this year.",
    "Here's to a year of endless joy.",
    "May you achieve everything you set out to.",
    "A year of love, growth, and adventure.",
    "Happy New Year 2025 – make it amazing!"
  ];
let currentIndex = 0;  // To keep track of the current text

document.getElementById("fetchTextBtn").addEventListener("click", fetchText);
document.getElementById("copyTextBtn").addEventListener("click", copyToClipboard);

function fetchText() {
  // Get the next text from the array
  const text = texts[currentIndex];
  // Update the text on the page
  document.getElementById("text").innerText = text;

  // Enable the "Copy Text" button
  document.getElementById("copyTextBtn").disabled = false;

  // Update the index for the next text
  currentIndex++;
  if (currentIndex >= texts.length) {
      currentIndex = 0;  // If we reach the end, start again from the first text
  }
}

function copyToClipboard() {
  const text = document.getElementById("text").innerText;
  if (text) {
      navigator.clipboard.writeText(text)
          .then(() => {                
          })
          .catch((err) => {
              console.error("Failed to copy text: ", err);
          });
  }
}