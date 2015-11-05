function frmCompleteOrderInit() {
return AS_Form_8377004e77624c938733b4da20022bea();
}
function AS_Form_8377004e77624c938733b4da20022bea() {
var orderDetailsKA = function(){
      frmCompleteOrderSummaryKA.show();
};

var orderattachmentsKA = function(){
      frmOrderAttachmentsKA.show();
}

var orderResourcesListKA = function(){
      frmOrderResourcesListKA.show();
                
}
var completeOrderKA = function(){
      alert("Not implemented in current release");
}

var widgets=[
{"src" : "bf_details.png","ontouch":orderDetailsKA},
{"src" : "bf_order_ex_attachments.png","ontouch":orderattachmentsKA},
{"src" : "bf_order_ex_history.png","ontouch":completeOrderKA},
{"src" : "bf_resources.png","ontouch":orderResourcesListKA}
];


addToScroll(frmCompleteOrderKA,"flxScrollTypesKA",widgets);

}