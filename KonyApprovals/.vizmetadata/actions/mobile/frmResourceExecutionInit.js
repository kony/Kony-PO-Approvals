function frmResourceExecutionInit() {
return AS_Form_2e2ac0d232484b6ab676dd40a2ebe183();
}
function AS_Form_2e2ac0d232484b6ab676dd40a2ebe183() {
var orderResourceDetailsKA = function(){
      frmOrderResourceDetailsKA.show();
};

var stockDetailsKA = function(){
                alert("not implemented in current release");
}

var attachmentKA = function(){
                // write your code here
  frmOrderAttachmentsKA.show();
}

var attachPhotoKA = function(){
                alert("not implemented in current release");
}

var widgets=[
{"src" : "bf_details.png","ontouch": orderResourceDetailsKA},
{"src" : "bf_resource_ex_stock_info.png","ontouch": stockDetailsKA },
{"src" : "bf_order_ex_attachments.png","ontouch":attachmentKA},
{"src" : "notification_add_photo.png","ontouch": attachPhotoKA }
];


addToScroll(frmResourceExecutionKA,"FlexScrollContainerOptionsKA",widgets);

}