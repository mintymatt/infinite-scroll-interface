(function($){
	$.fn.isi = function(data){
		$.fn.isi.options = $.extend({descriptor:this},$.fn.isi.options,data);
		var status = $.fn.isi.isValid();
		if ($.fn.isi.options.debug && status!=true){
			console.error(status);
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
	$.fn.isi.isValid = function(){
		var status = [];
		$.each($.fn.isi.options,function(index,element){
			if (element==null){
				status.push([index,element]);
			}
		});
		if (status==[]&&!$fn.isi.options.finished){
			return true;
		}
		return status;
	};
	$.fn.isi.load = function(){
		if ($.fn.isi.isValid){
			$.ajax({
				post: $.fn.isi.options.method,
				url: $.fn.isi.options.url,
				data: $fn.isi.data(),
				success: function(callback){
					var json = JSON.parse(callback);
					if (json.finished){
						$.fn.isi.options.finished = true;
						return;
					}
					$.each(json.content,function(index,element){
						$.fn.isi.addContent(element);
					});
				}
			});
		}
	};
	$.fn.isi.addContent = function(json){
		console.log(json);
	};
	$.fn.isi.data = function(){
		return {start:$.fn.isi.getStart(),amount:$.fn.isi.getAmount};
	}
	//default settings.
	$.fn.isi.options = {
		debug: true,				//view errors.
		preloaded: false,			//is any content already loaded. if true, set the start value to the amount loaded.
		start: 0,					//current interval value of content. incremented each load.
		amount: 3,					//amount to load each time.
		finished: false,
		url: null,					//url of server-script handler.
		method: "post",				//ajax method.
		selectedFilter: "",			//current filter for shown content
		filters: [],				//available filters.
		sortDirection: "ascending"	//sorting direction of content.
	};
}(jQuery));