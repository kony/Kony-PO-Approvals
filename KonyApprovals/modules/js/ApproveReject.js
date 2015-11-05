


function approvePO(){
    
    serviceName ="WFTransactions";
    operationName =  "postWFDOTRANSACTIONSMM";
    
   // data= {"criteria": "$filters=DOCID[eq]'4500000702'",};
  //  data="";
     ABCdata={
        "entry": {
            "WF_DISTRIBUTION": {
                "REF_WFLOW_ID":REF_WFLOW_ID,
                "WFLOW_ID": WFLOW_ID,
                "WFLOW_USER": WFLOW_USER,
                "DOCID": DOCID,
                "STATUS": "APPROVED"
            }
        }       
};
  
  ABCdata = JSON.stringify(ABCdata);
  var myObj = {"WF_DO_TRANSACTIONS_MM":ABCdata};
  
   // headers= {"KonySAP-Session-Key": "QDYOBMSCOQSQLQKVOXBGP6Y2825RS33G"};
    headers= {"KonySAP-Session-Key": KonySAPSessionKey};
    if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
        kony.application.showLoadingScreen("loading","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
    else
        kony.application.showLoadingScreen("loading","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    try{
        integrationObj = konyObject.getIntegrationService(serviceName);
        
    }
    catch(exception){
        kony.print("Exception" + exception.message);
        var basicConf = {
        message: JSON.stringify(excp),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Exception"
        };
        kony.ui.Alert(basicConf, {});
        kony.application.dismissLoadingScreen();
    }
   
    integrationObj.invokeOperation(operationName, headers, myObj,
                                   
     function(response) {
      
        
         kony.print("*****response*****"+response);
         kony.print("*****response*****"+JSON.stringify(response));
         kony.print("******opstatus*****"+response.opstatus);
         // Turn the response into a string to get rid of the garbage.
         if(response.opstatus===0){
           
        var i=frmPurchaseOrderlListKA.segOrderListKA.selectedItems[0].lblindex;
            purchaseOrders[i].STATUS="APPROVED";
            tmpPurchaseOrder={};
            tmpPurchaseOrder.lblindex=i;
            tmpPurchaseOrder.lblTitleKA=purchaseOrders[i].WF_PO_HEADER.PO_NUMBER;
            tmpPurchaseOrder.lblTypeKA=purchaseOrders[i].WF_PO_HEADER.LASTNAME;
            tmpPurchaseOrder.imgStatusMachineStartedKA="status_machine_accepted.png";
            // tmpPurchaseOrder.lblStatusKA=purchaseOrders[i].STATUS;
            tmpPurchaseOrder.lblStatusKA="Approved";
            //tmpPurchaseOrder.lblItemsKA=purchaseOrders[i].WF_PO_HEADER.WF_PO_ITEMS.length +" Items";
            tmpPurchaseOrder.lblItemsKA="1 Item";
            tmpPurchaseOrder.lblValueKA="$ "+purchaseOrders[i].WF_PO_HEADER.GROS_VALUE;
            tmpPurchaseOrder.lblUserNameKA=purchaseOrders[i].WF_PO_HEADER.CREATED_BY;
            tmpPurchaseOrder.lblPriorityKA="High";
            //tmpPurchaseOrder.lblPriorityKA=purchaseOrders[i].WF_PO_HEADER.STATUS;
            //tmpPurchaseOrder.lblDateKA=purchaseOrders[i].WF_OBJECT.TIMESTAMP;
            tmpPurchaseOrder.lblDateKA="06/10/2015, 10:00 AM";
            var row = frmPurchaseOrderlListKA.segOrderListKA.selectedRowIndex[1];
            frmPurchaseOrderlListKA.segOrderListKA.removeAt(row,0);
            frmPurchaseOrderlListKA.segOrderListKA.addDataAt(tmpPurchaseOrder,0,1);
            frmPurchaseOrderlListKA.show();
           
         }
        
      
      kony.application.dismissLoadingScreen();
      },
     function(error){
              kony.print("*****error*****"+JSON.stringify(error));                                     
             var basicConf = {
              message: JSON.stringify(error),
              alertType: constants.ALERT_TYPE_INFO,
              alertTitle: "Service Failure"
              };
              kony.ui.Alert(basicConf, {});
              kony.application.dismissLoadingScreen();
              // need to show an alert or label alert to show bad login
               //frmLoginKA.lblTitleKA.text = JSON.stringify(error);
              }
      );
  }

function RejectPO(){
    
    serviceName ="WFTransactions";
    operationName =  "postWFDOTRANSACTIONSMM";
    //operationName =  "getWFDOTRANSACTIONSMM";
   // data= {"criteria": "$filters=DOCID[eq]'4500000702'",};
  //  data="";
     ABCdata={
        "entry": {
            "WF_DISTRIBUTION": {
                "REF_WFLOW_ID":REF_WFLOW_ID,
                "WFLOW_ID": WFLOW_ID,
                "WFLOW_USER": WFLOW_USER,
                "DOCID": DOCID,
                "STATUS": "REJECTED"
            }
        }
       
};
  
  ABCdata = JSON.stringify(ABCdata);
  var myObj = {"WF_DO_TRANSACTIONS_MM":ABCdata};
  
   // headers= {"KonySAP-Session-Key": "QDYOBMSCOQSQLQKVOXBGP6Y2825RS33G"};
    headers= {"KonySAP-Session-Key": KonySAPSessionKey};
    if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  )
        kony.application.showLoadingScreen("loading","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
    else
        kony.application.showLoadingScreen("loading","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    try{
        integrationObj = konyObject.getIntegrationService(serviceName);
        
    }
    catch(exception){
        kony.print("Exception" + exception.message);
        var basicConf = {
        message: JSON.stringify(excp),
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Exception"
        };
        kony.ui.Alert(basicConf, {});
        kony.application.dismissLoadingScreen();
    }
   
    integrationObj.invokeOperation(operationName, headers, myObj,
                                   
     function(response) {
      
        
         kony.print("*****response*****"+response);
         kony.print("*****response*****"+JSON.stringify(response));
         kony.print("******opstatus*****"+response.opstatus);
         // Turn the response into a string to get rid of the garbage.
        if(response.opstatus===0){
           
        var i=frmPurchaseOrderlListKA.segOrderListKA.selectedItems[0].lblindex;
            purchaseOrders[i].STATUS="REJECTED";
            tmpPurchaseOrder={};
            tmpPurchaseOrder.lblindex=i;
            tmpPurchaseOrder.lblTitleKA=purchaseOrders[i].WF_PO_HEADER.PO_NUMBER;
            tmpPurchaseOrder.lblTypeKA=purchaseOrders[i].WF_PO_HEADER.LASTNAME;
            tmpPurchaseOrder.imgStatusMachineStartedKA="status_machine_rejected.png";
            // tmpPurchaseOrder.lblStatusKA=purchaseOrders[i].STATUS;
            tmpPurchaseOrder.lblStatusKA="Rejected";
            //tmpPurchaseOrder.lblItemsKA=purchaseOrders[i].WF_PO_HEADER.WF_PO_ITEMS.length +" Items";
            tmpPurchaseOrder.lblItemsKA="1 Item";
            tmpPurchaseOrder.lblValueKA="$ "+purchaseOrders[i].WF_PO_HEADER.GROS_VALUE;
            tmpPurchaseOrder.lblUserNameKA=purchaseOrders[i].WF_PO_HEADER.CREATED_BY;
            tmpPurchaseOrder.lblPriorityKA="High";
            //tmpPurchaseOrder.lblPriorityKA=purchaseOrders[i].WF_PO_HEADER.STATUS;
            //tmpPurchaseOrder.lblDateKA=purchaseOrders[i].WF_OBJECT.TIMESTAMP;
            tmpPurchaseOrder.lblDateKA="06/10/2015, 10:00 AM";
            var row = frmPurchaseOrderlListKA.segOrderListKA.selectedRowIndex[1];
            frmPurchaseOrderlListKA.segOrderListKA.removeAt(row,0);
            frmPurchaseOrderlListKA.segOrderListKA.addDataAt(tmpPurchaseOrder,0,2);
            frmPurchaseOrderlListKA.show();
           
         }
        
      
      kony.application.dismissLoadingScreen();
      },
     function(error){
                                                     
             var basicConf = {
              message: JSON.stringify(error),
              alertType: constants.ALERT_TYPE_INFO,
              alertTitle: "Service Failure"
              };
              kony.ui.Alert(basicConf, {});
              kony.application.dismissLoadingScreen();
              // need to show an alert or label alert to show bad login
               //frmLoginKA.lblTitleKA.text = JSON.stringify(error);
              }
      );
  }
