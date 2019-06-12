$(document).ready(function() {
  $(window).scroll(function () {
    if($(window).scrollTop() > 500) {
      if($(window).width() > 567) {
        $('.map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2518c3f6492349856be6cfd4197d9e361edeadedd01e5d72334c82ccc87a3a4c&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false');
      }
      else {
        $('.map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2518c3f6492349856be6cfd4197d9e361edeadedd01e5d72334c82ccc87a3a4c&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false');
      }
    }
  });
});