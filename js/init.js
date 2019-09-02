$(function() {
	
		$('body').on('click', 'a', function(){
     		chrome.tabs.create({url: $(this).attr('href')});
     		return false;
   		});

	    chrome.storage.local.get(['hash'], function(result) {
            const q = "http://1.1.1.1/q/" + result.hash
            $("#hash-val").attr("href", q);
            $("#current").text(result.hash);
        });
   });