$('dl dd').not('dt.activo + dd').hide(); 
                       $('dl dt').click(function(){

                        });
                        $('dl dt').click(function(){
   if ($(css/style.css).hasClass('activo')) {
        $(css/style.css).removeClass('activo');
        $(css/style.css).next().slideUp();
   } else {
        $('dl dt').removeClass('activo');
        $(this).addClass('activo');
        $('dl dd').slideUp();
        $(this).next().slideDown();
   }
});
