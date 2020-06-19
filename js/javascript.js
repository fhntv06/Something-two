
// 
const Navigation = document.querySelector(".navigation");
$(document).ready(function(){ //Вызов функции по загрузке интерфейса
  var tempScrollTop, currentScrollTop = $(window).scrollTop(); //объявление переменных и присвоение им значений
  $(window).scroll(function(){ //Вызов функции при прокрутке страницы
    currentScrollTop = $(window).scrollTop(); //присвоение переменной нового значения
      if (currentScrollTop > 125 ) { //Проверка условия 'переменная больше высоты шапки'
        $('.navigation-1').addClass('fixed-navigation-1'); // создание класса 'fixed-header' в селекторе 'body'
        if (currentScrollTop > 800 ) {
          $('.navigation-2').addClass('fixed-navigation-2');   
        }else{
          $('.navigation-2').removeClass('fixed-navigation-2');
        }
      } else  { // выполнение, если первое условие не прошло проверку
        $('.navigation-1').removeClass('fixed-navigation-1'); // удаление класса 'fixed-header' в селекторе 'body'
        $('.navigation-2').removeClass('fixed-navigation-2'); 
      }
  });
});


const navigationText = document.querySelector(".navigation-text");

navigationText.addEventListener("click", function(){
  console.log(navigationText);
});