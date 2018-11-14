jQuery(document).ready(function($) {

    jQuery.fn.cleardefault = function() {
    	return this.focus(function() {
    		if( this.value == this.defaultValue ) {
    			this.value = "";
    		}
    	}).blur(function() {
    		if( !this.value.length ) {
    			this.value = this.defaultValue;
    		}
    	});
    };
    jQuery(".gform_wrapper input[type='text'], .gform_wrapper input[type='email'], .gform_wrapper input[type='tel'], .gform_wrapper input[type='search'], .gform_wrapper input[type='url'], .gform_wrapper input[type='number'], .gform_wrapper textarea").cleardefault();
});
