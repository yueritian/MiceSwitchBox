/*jQuery.extend({      
	mice_swidthBox: function() {      
		// $("<b>Hello World!</b>").appendTo($(this));
	}    
});// JavaScript Document*/

(function($) {
// 隐藏显示切换框插件
$.fn.mice_swidthBox = function() {
	// 获取元素id
	var thisID = $(this).attr("id");
	// 将按钮加入到想要操作的元素后边
	var switchBox = "<div id='"+thisID+"_mice_switchbox' class='mice_switchbox'>";
	switchBox = switchBox + "<div id='"+thisID+"_mice_switchbox_frame' class='mice_switchbox_frame' onclick='mice_switchbox(\""+thisID+"\")'>";
  switchBox = switchBox + "<div id='"+thisID+"_mice_switchbox_toggle_btn' class='mice_switchbox_toggle_btn'></div>";
	switchBox = switchBox + "</div>";
	switchBox = switchBox + "</div>";
	$(switchBox).insertAfter($(this));
};     
})(jQuery); 

function mice_switchbox(obj){
		$('#'+obj).toggle(1000, function(){
			var pngPath = $("#"+obj+"_mice_switchbox_toggle_btn").css('backgroundImage');
			if(pngPath.indexOf('arrow_up.png')==-1){
				$("#"+obj+"_mice_switchbox_toggle_btn").css('backgroundImage', 'url(arrow_up.png)');
			}else{
				$("#"+obj+"_mice_switchbox_toggle_btn").css('backgroundImage', 'url(arrow_down.png)');
			}
		});
	}

/*$.fn.mice_swidthBox = function(options) {    
  var defaults = {    
    foreground: 'red',    
    background: 'yellow'    
  };    
  // Extend our default options with those provided.    
  var opts = $.extend(defaults, options);    
  // Our plugin implementation code goes here.    
}; */