define(['uiComponent', 'ko'], function(Component, ko){

    return Component.extend({
        defaults: {
            content: ko.observable('yeaaaaaaaap !!')
        },
        clear: function(){
            this.content('');
        }
    });
});