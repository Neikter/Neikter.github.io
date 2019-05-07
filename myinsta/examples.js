/* Examples */
(function($) {
  /*
   * Example 1:
   *
   * - no animation
   * - custom gradient
   *
   * By the way - you may specify more than 2 colors for the gradient
   */
   function show_graphics() {

     var cmnu1 = $("#procent1").text();
     var cmnu2 = $("#procent2").text();
     var cmnu3 = $("#procent3").text();
     var cmnu4 = $("#procent4").text();
     var cmnu5 = $("#procent5").text();
     var cmnu6 = $("#procent6").text();

     var simbol1 = $("#simbol1").text();
     var simbol2 = $("#simbol2").text();
     var simbol3 = $("#simbol3").text();
     var simbol4 = $("#simbol4").text();
     var simbol5 = $("#simbol5").text();
     var simbol6 = $("#simbol6").text();


     $('.first.circle').circleProgress({
      startAngle: -Math.PI / 4 * 2,
      fill: {gradient: ['#e86593', '#6359c6']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(cmnu1 * progress) + simbol1);
    });


    $('.second.circle').circleProgress({
      startAngle: -Math.PI / 4 * 2,
      fill: {gradient: ['#e86593', '#6359c6']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(cmnu2 * progress) + simbol2);
    });


    $('.third.circle').circleProgress({
      startAngle: -Math.PI / 4 * 2,
      fill: {gradient: ['#e86593', '#6359c6']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(cmnu3 * progress) + simbol3);
    });


    $('.forth.circle').circleProgress({
      startAngle: -Math.PI / 4 * 2,
      fill: {gradient: ['#e86593', '#6359c6']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(cmnu4 * progress) + simbol4);
    });


    $('.fifth.circle').circleProgress({
      startAngle: -Math.PI / 4 * 2,
      fill: {gradient: ['#e86593', '#6359c6']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(cmnu5 * progress) + simbol5);
    });

    $('.six.circle').circleProgress({
      startAngle: -Math.PI / 4 * 2,
      fill: {gradient: ['#e86593', '#6359c6']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(cmnu6 * progress) + simbol6);
    });

    $(window).unbind('scroll.once');
  };

  $(window).bind('scroll.once', function(){ 
    show_graphics();
  });

})(jQuery);