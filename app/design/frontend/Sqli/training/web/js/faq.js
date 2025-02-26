define(['jquery'], function($){

    return function(config, element){
        $('.faq-title', element).click(function(){
            $(this).next('.faq-content').toggleClass('open');
        })
    }
});