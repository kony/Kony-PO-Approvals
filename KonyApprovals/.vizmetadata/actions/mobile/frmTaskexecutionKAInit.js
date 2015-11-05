function frmTaskexecutionKAInit() {
return AS_Form_48d1d011a022422c92a5abfb46ce1747();
}
function AS_Form_48d1d011a022422c92a5abfb46ce1747() {
var taskDetailsKA = function(){
      frmTaskDetailsKA.show();
};

var taskResourcesKA = function(){
                frmTaskResourcesKA.show();
}

var attachmentKA = function(){
  	frmOrderAttachmentsKA.show();
                 
}



var widgets=[

{"src" : "notification_execution_details.png","ontouch":taskDetailsKA},
{"src" : "notification_execution_attachments.png","ontouch":attachmentKA},
{"src" : "bf_resources.png","ontouch":taskResourcesKA},

];
  
addToScroll(frmTaskExecutionKA,"flxScrollTypesKA",widgets);

}