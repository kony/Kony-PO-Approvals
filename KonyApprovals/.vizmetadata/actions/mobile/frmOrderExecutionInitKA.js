function frmOrderExecutionInitKA() {
return AS_Form_1c681e4f8c114bc4a664cf1d65735a52();
}
function AS_Form_1c681e4f8c114bc4a664cf1d65735a52() {
var orderDetailsKA = function(){
      frmOrderDetailsKA.show();
};

var orderAttachmentsKA = function(){
                frmOrderAttachmentsKA.show();
}

var orderResourcesKA = function(){
                 frmOrderResourcesListKA.show();
}

var orderHistoryKA = function(){
                alert("Page loading..!!");
}
var orderNotificationKA = function(){
                alert("Page loading..!!");
}

var widgets=[
{"src" : "notification_execution_details.png","ontouch":orderDetailsKA},
{"src" : "notification_execution_attachments.png","ontouch":orderAttachmentsKA},
{"src" : "bf_order_ex_history.png","ontouch":orderHistoryKA},
{"src" : "bf_resources.png","ontouch":orderResourcesKA},
{"src" : "notification_execution_photos.png","ontouch":orderNotificationKA}
];



addToScroll(frmOrderExecutionKA,"flxScrollTypesKA",widgets);

}