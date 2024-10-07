// Digital Clock
function getCurrentTime() {  
  const date = new Date();  
  let hours = date.getHours();  
  const minutes = date.getMinutes();  
  const seconds = date.getSeconds();  
  const ampm = hours >= 12 ? 'PM' : 'AM';  
  hours = hours % 12 || 12;  
  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;  
}  

function updateClock() {  
  const clockDisplay = document.getElementById('clock');  
  clockDisplay.innerText = getCurrentTime();  
}  

function initClock() {  
  updateClock();  
  setInterval(updateClock, 1000);  
}

// Calendar
function updateCalendar() {  
  const date = new Date();  
  const day = date.getDate();  
  const month = date.getMonth() + 1;  
  const year = date.getFullYear();  

  const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });   
  const monthName = date.toLocaleString('default', { month: 'long' });  
  
  document.getElementById('date').innerText = `${dayOfWeek}, ${monthName} ${day}, ${year}`;
}

// Slideshow
const slideshow = document.getElementById('slideshow');  
const slides = slideshow.children;  
let currentSlide = 0;  
const interval = 2000; // 3 seconds  

function showNextSlide() {  
  slides[currentSlide].style.display = 'none';  
  currentSlide = (currentSlide + 1) % slides.length;  
  slides[currentSlide].style.display = 'block';  
}  

function startSlideshow() {  
  slides[0].style.display = 'block';  
  setInterval(showNextSlide, interval);  
}

// Initialize the clock, calendar, and slideshow
window.onload = function() {
  initClock();
  updateCalendar();
  startSlideshow();
};
