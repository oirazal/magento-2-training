define(['jquery'], function($){
    return function (config, element) {
        $(document).ready(function(){
            if (config.openFirstElement) {
                $('.faq_title', element).eq(0).addClass('open')
                $('.faq_content', element).eq(0).addClass('open')
            }
            $('.faq_title', element).click(function(){
                var $this = $(this);
                $this.toggleClass('open');
                $this.next('.faq_content').toggleClass('open');
            })
        })
    }
});