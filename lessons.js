// lessons.js - YANGILANGAN VERSIYA

function openLesson(lesson) {
  const lang = document.documentElement.lang;

  // Practika sahifalariga yo'naltirish
  if(lesson === 'vocabulary'){
    window.location.href = 'vocabulary-practice.html';
  }
  else if(lesson === 'grammar'){
    window.location.href = 'grammar-practice.html';
  }
  else if(lesson === 'speaking'){
    window.location.href = 'speaking-practice.html';
  }
  else if(lesson === 'listening'){
    window.location.href = 'listening-practice.html';
  }
}