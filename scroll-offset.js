function scrollMe(selector,rep=true,history_=true){
	if(!jQuery(selector).length && rep)
		window.location.href="/"+selector;
	if(jQuery(selector).offset().top-jQuery("header").outerHeight()<=0)
		return;
	setTimeout(function(){jQuery('html, body').animate({
		scrollTop: jQuery(selector).offset().top-(jQuery("header").outerHeight()+20)
	}, 500, function(){
		if(history_)
			history.replaceState(null, null, document.location.pathname + selector);
	});},200);
}
jQuery(document).ready(function(){
	jQuery('a[href^="#"').each(function(){
		if(jQuery(this).attr("href")!="#" && jQuery(jQuery(this).attr("href")).length)
		{
			jQuery(this).attr("onclick","scrollMe('"+jQuery(this).attr("href")+"')");
			jQuery(this).attr("href","javascript:void(0)");
		}
	});
	
    var hash_ = window.location.hash;
    if(hash_!="")
        scrollMe(hash_,false);
});
