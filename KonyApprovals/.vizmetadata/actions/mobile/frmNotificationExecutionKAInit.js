function frmNotificationExecutionKAInit() {
return AS_Form_ff535ac8bcc448b68f968e1d069bd75d();
}
function AS_Form_ff535ac8bcc448b68f968e1d069bd75d() {
var notificationDetailsKA = function(){
      frmNotificationDetailsKA.show();
};

var notificationHistoryKA = function(){
                alert("Not in current release");
    };

var notificationAttachmentKA = function(){
                alert("Not in current release");
};

var notificationPhotosKA = function(){
                alert("Not in current release");
};



var widgets=[

{"src" : "notification_execution_details.png","ontouch":notificationDetailsKA},
{"src" : "notification_execution_history.png","ontouch":notificationHistoryKA},
{"src" : "notification_execution_attachments.png","ontouch":notificationAttachmentKA},
{"src" : "notification_execution_photos.png","ontouch":notificationPhotosKA},

];



addToScroll(frmNotificationExecutionKA,"flxScrllSubMenuKA",widgets);

}