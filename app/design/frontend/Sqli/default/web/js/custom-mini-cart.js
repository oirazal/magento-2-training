define(['uiComponent', 'Magento_Customer/js/customer-data','mage/translate', 'ko'], function(Component, customerData, $t, ko){
    return Component.extend({
        defaults: {
            countItems: ko.observable(0)
        },
        initialize: function (){
            this._super();
            var customer = customerData.get('customer');
            var cart = customerData.get('cart');

            this.countItems = ko.computed(function(){
                return cart().summary_count || 0;
            })

            this.isConnected = ko.computed(function(){
                return !!customer().fullname;
            });

            this.cartItems = ko.computed(function(){
                return cart().items || [];
            })

            this.fullName = ko.computed(function(){
                return $t("Welcome %1").replace('%1', customer().fullname);
            });
        }
    });
});