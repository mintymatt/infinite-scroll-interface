(function($){
	$.fn.isi = function(data){
		$.fn.isi.options = $.extend({descriptor:this},$.fn.isi.options,data);
		if ($.fn.isi.options.debug){
			$.each($.fn.isi.options,function(index, element){
				if (element==null){
					console.error("ISI: "+index+" is not set.");
				}
			});
		}
		return;
	};
	$.fn.isi.setStart = function(start){
		$.fn.isi.options.start = start;
	};
	$.fn.isi.getStart = function(start){
		return $.fn.isi.options.start;
	};
	$.fn.isi.setAmount = function(amount){
		$.fn.isi.options.amount = amount;
	};
	$.fn.isi.getAmount = function(amount){
		return $.fn.isi.options.amount;
	};
	$.fn.isi.next = function(){
		$.fn.isi.setStart($.fn.getStart()+$.fn.isi.getAmount());
		$.fn.isi.load();
	};
	$.fn.isi.load = function(){

	};
	//default settings.
	$.fn.isi.options = {
		debug: true,				//view errors.
		preloaded: false,			//is any content already loaded. if true, set the start value to the amount loaded.
		start: 0,					//current interval value of content. incremented each load.
		amount: 3,					//amount to load each time.
		url: null,					//url of server-script handler.
		method: "post",				//ajax method.
		selectedFilter: "",			//current filter for shown content
		filters: [],				//available filters.
		sortDirection: "ascending"	//sorting direction of content.
	};
}(jQuery));