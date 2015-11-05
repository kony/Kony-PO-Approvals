function AS_Form_612224d2f18f4b228e18b7d586338a53() {
var orderDetailsKA = function(){
      frmOrderDetailsKA.show();
};

var orderattachmentsKA = function(){
      frmOrderAttachmentsKA.show();
}

var orderResourcesListKA = function(){
      frmOrderResourcesListKA.show();
                
}
var completeOrderKA = function(){
      frmCompleteOrderKA.show();
}

var widgets=[
{"src" : "bf_details.png","ontouch":orderDetailsKA},
{"src" : "bf_order_ex_attachments.png","ontouch":orderattachmentsKA},
{"src" : "bf_order_ex_history.png","ontouch":completeOrderKA},
{"src" : "bf_resources.png","ontouch":orderResourcesListKA}
];


addToScroll(frmCompleteOrderKA,"flxScrllSubMenuKA",widgets);

}