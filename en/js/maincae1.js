let pathname = window.location.pathname.replace('/en', '')+window.location.hash;
$(function (){
    $('#navation').on('click', function(){
        var obj = $(this).children('i'), obj1 = $('nav');
        if(obj.hasClass('ri-close-line')){
            obj.removeClass('ri-close-line').addClass('ri-menu-line');
            obj1.stop(true,true).slideUp(300);
        }else{
            obj.removeClass('ri-menu-line').addClass('ri-close-line');
            obj1.stop(true,true).slideDown(300);
        }
    });
    console.log(`${pathname}`);
    $('#lang').attr('href', `${pathname}`);
})