$(function() {
    $('.ng-star-inserted iframe').on('load', function(e) {
        var hash = $("div.row.vtRow5 .value.ng-binding", this.contentDocument)[0].textContent;
        chrome.storage.local.set({"hash": hash}, function() {
          console.log('Value is set to ' + hash);
        });
    });

});