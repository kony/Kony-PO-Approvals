function AS_Form_76d415def43545dca195407b0694aabc() {
var orderResourceDetailsKA = function(){
  frmOrderResourceDetailsKA.show();
};

var resourecAttachmentDetailsKA = function(){
  frmOrderAttachmentsKA.show();
};

var dummyFunctionKA = function(){
	alert("not implemented in this release");
};


var widgets=[
{"src" : "bf_details.png","ontouch":orderResourceDetailsKA},
{"src" : "bf_resource_ex_stock_info.png","ontouch": dummyFunctionKA},
{"src" : "bf_order_ex_attachments.png","ontouch":resourecAttachmentDetailsKA},
{"src" : "notification_add_photo.png","ontouch":dummyFunctionKA}
];


addToScroll(frmResourceExecutionKA,"FlexScrollContainerOptionsKA",widgets);

}