var count1=0;
var count2=0;
var count3=0;
onetimeSetup=null;
seghide=null;
//appKey="ad1bae4facb3ceec47937c6dc4dd26b3";
//appSecret="42ffdeba8c64b8357935944002e7a1ab";

appKey="deadbeeffacebabedfabbeeffacebabe";
appSecret="da693d4e82452e58a79156c3ae01d0d";
InstanceID="";
username="";
password="";

//serviceURL="https://100000032.auth.konycloud.com/appconfig";
serviceURL="http://i-0b46cdb4.testdrive.kony.com:8080/authService/100000002/appconfig";
           
InstanceID="";
var  username = "";
var  password = "";
KonySAPSessionKey="";
konyObject=null;
var authClient = null;
obj=null;
purchaseOrders = null;
////


// NOTE:
// all the placeholders are represented as <place-holder>, so just that part must be replaced with the actual value.
// rest of the things must remain same.
// the indentation must also be maintained.
// integrationObj = new kony.sdk().getIntegrationService("WFTransactions");



function getApprovals(){
    /*
    successcallBack.
    */
  	function successCallBack(response){
    //  frmPurchaseOrderlListKA.show();
      kony.print("*******response******"+JSON.stringify(response));
      purchaseOrdersTemp  = JSON.parse(response.WF_DO_TRANSACTIONS_MM);
      purchaseOrders = purchaseOrdersTemp.WF_DISTRIBUTION;
      kony.print("*******purchaseOrders******"+JSON.stringify(purchaseOrders));
      kony.print("******* parsed purchaseOrders  is**** "+purchaseOrders);
      tmpPurchaseOrder ={};
      purchaseList2=[];
      purchaseList= [];
      if(purchaseOrders.length===0){
        alert("No records found");
        kony.application.dismissLoadingScreen();  
        return;
      }else{
        
        tmpPurchaseOrderArrayApp=[];
        tmpPurchaseOrderArrayPend=[];
        for(var i=0;i<purchaseOrders.length;i++){
          if(purchaseOrders[i].STATUS === "READY"){
            tmpPurchaseOrder={};
            tmpPurchaseOrder.lblTitleKA=purchaseOrders[i].WF_PO_HEADER.PO_NUMBER;
            tmpPurchaseOrder.imgStatusMachineStartedKA="status_machine_pending.png";
            tmpPurchaseOrder.lblTypeKA=purchaseOrders[i].WF_PO_HEADER.CUSTOMERNAME;
            tmpPurchaseOrder.lblStatusKA="Pending";
            tmpPurchaseOrder.lblindex=i;
            //tmpPurchaseOrder.lblItemsKA=purchaseOrders[i].WF_PO_HEADER.WF_PO_ITEMS.length+" Items";
            tmpPurchaseOrder.lblItemsKA="10 Items";
            tmpPurchaseOrder.lblValueKA="$ "+purchaseOrders[i].WF_PO_HEADER.GROS_VALUE;
            tmpPurchaseOrder.lblUserNameKA=purchaseOrders[i].WF_PO_HEADER.CREATED_BY;
            tmpPurchaseOrder.lblDateKA=purchaseOrders[i].WF_PO_HEADER.CREATED_ON;
            //tmpPurchaseOrder.lblPriorityKA="High";
            tmpPurchaseOrder.lblPriorityKA=purchaseOrders[i].WF_PO_HEADER.DOC_TYPE_DESC;
            //tmpPurchaseOrder.lblDateKA=purchaseOrders[i].WF_OBJECT.TIMESTAMP;
            tmpPurchaseOrderArrayApp.push(tmpPurchaseOrder);
            frmPurchaseOrderlListKA.segOrderListKA.addDataAt(tmpPurchaseOrder,count1,0);
            count1++;
          }else if(purchaseOrders[i].STATUS === "APPROVED"){
            tmpPurchaseOrder={};
            tmpPurchaseOrder.lblindex=i;
            tmpPurchaseOrder.lblTitleKA=purchaseOrders[i].WF_PO_HEADER.PO_NUMBER;
            tmpPurchaseOrder.lblTypeKA=purchaseOrders[i].WF_PO_HEADER.CUSTOMERNAME;
            //tmpPurchaseOrder.lblTypeKA=purchaseOrders[i].WF_PO_HEADER.LASTNAME;
            tmpPurchaseOrder.imgStatusMachineStartedKA="status_machine_accepted.png";
            // tmpPurchaseOrder.lblStatusKA=purchaseOrders[i].STATUS;
            tmpPurchaseOrder.lblStatusKA="Approved";
            //tmpPurchaseOrder.lblItemsKA=purchaseOrders[i].WF_PO_HEADER.WF_PO_ITEMS.length +" Items";
            tmpPurchaseOrder.lblItemsKA="10 Item";
            tmpPurchaseOrder.lblValueKA="$ "+purchaseOrders[i].WF_PO_HEADER.GROS_VALUE;
            tmpPurchaseOrder.lblUserNameKA=purchaseOrders[i].WF_PO_HEADER.CREATED_BY;
           // tmpPurchaseOrder.lblPriorityKA="High";
            tmpPurchaseOrder.lblPriorityKA=purchaseOrders[i].WF_PO_HEADER.DOC_TYPE_DESC;
            //tmpPurchaseOrder.lblDateKA=purchaseOrders[i].WF_OBJECT.TIMESTAMP;
            //tmpPurchaseOrder.lblDateKA="06/10/2015, 10:00 AM";
            tmpPurchaseOrder.lblDateKA=purchaseOrders[i].WF_PO_HEADER.CREATED_ON;
            // frmPurchaseOrderlListKA.flexOrderHeaderKA.segOrderListKA.removeAll();
            tmpPurchaseOrderArrayPend.push(tmpPurchaseOrder);
            frmPurchaseOrderlListKA.segOrderListKA.addDataAt(tmpPurchaseOrder,count2,1);
            count2++;
            // purchaseList.push(tmpPurchaseOrder);
            // tmpPurchaseOrder ={};
          }
          else{
            tmpPurchaseOrder={};
            tmpPurchaseOrder.lblindex=i;
            tmpPurchaseOrder.lblTitleKA=purchaseOrders[i].WF_PO_HEADER.PO_NUMBER;
            tmpPurchaseOrder.lblTypeKA=purchaseOrders[i].WF_PO_HEADER.CUSTOMERNAME;
            //tmpPurchaseOrder.lblTypeKA=purchaseOrders[i].WF_PO_HEADER.LASTNAME;
            tmpPurchaseOrder.imgStatusMachineStartedKA="status_machine_rejected.png";
            // tmpPurchaseOrder.lblStatusKA=purchaseOrders[i].STATUS;
            tmpPurchaseOrder.lblStatusKA="Rejected";
            //tmpPurchaseOrder.lblItemsKA=purchaseOrders[i].WF_PO_HEADER.WF_PO_ITEMS.length +" Items";
            tmpPurchaseOrder.lblItemsKA="10 Item";
            tmpPurchaseOrder.lblValueKA="$ "+purchaseOrders[i].WF_PO_HEADER.GROS_VALUE;
            tmpPurchaseOrder.lblUserNameKA=purchaseOrders[i].WF_PO_HEADER.CREATED_BY;
           // tmpPurchaseOrder.lblPriorityKA="High";
            tmpPurchaseOrder.lblPriorityKA=purchaseOrders[i].WF_PO_HEADER.DOC_TYPE_DESC;
            //tmpPurchaseOrder.lblDateKA=purchaseOrders[i].WF_OBJECT.TIMESTAMP;
            //tmpPurchaseOrder.lblDateKA="06/10/2015, 10:00 AM";
            tmpPurchaseOrder.lblDateKA=purchaseOrders[i].WF_PO_HEADER.CREATED_ON;
            // frmPurchaseOrderlListKA.flexOrderHeaderKA.segOrderListKA.removeAll();
            tmpPurchaseOrderArrayPend.push(tmpPurchaseOrder);
            frmPurchaseOrderlListKA.segOrderListKA.addDataAt(tmpPurchaseOrder,count3,2);
            count3++;
            // purchaseList.push(tmpPurchaseOrder);
            // tmpPurchaseOrder ={};
            
          }
       }
       //frmPurchaseOrderlListKA.segOrderListKA.add(tmpPurchaseOrder,count2,1);
       // frmPurchaseOrderlListKA.flexOrderHeaderKA.segOrderListKA.removeAll();
       //frmPurchaseOrderlListKA.flexOrderHeaderKA.segOrderListKA.setData(purchaseList);
      }
      frmPurchaseOrderlListKA.segOrderListKA.setVisibility(true);
      kony.application.dismissLoadingScreen();
      //frmPurchaseOrderlListKA.segOrderListKA.setVisibility(true);
      //  loadOrderList();
    }
  
  
    serviceName ="WFTransactions";
    operationName =  "getWFDOTRANSACTIONSMM";
    data="";
    headers= {"KonySAP-Session-Key": KonySAPSessionKey};
    frmPurchaseOrderlListKA.segOrderListKA.setVisibility(false);
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
    
    integrationObj.invokeOperation(operationName, headers, data,
                                   successCallBack,
                                                     function(error){
                                                     
                                                     var basicConf = {
                                                     message: JSON.stringify(error),
                                                     alertType: constants.ALERT_TYPE_INFO,
                                                     alertTitle: "Service Failure"
                                                     };
                                                     kony.ui.Alert(basicConf, {});
                                                     kony.application.dismissLoadingScreen();
                                                     // need to show an alert or label alert to show bad login
                                                     //	frmLoginKA.lblTitleKA.text = JSON.stringify(error);
                                                     }
                                                     );
                                   }
                                   
 
 
 
   function init(){
    serviceURL=InstanceID;
   konyObject= new kony.sdk();
  	
   if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" ||kony.os.deviceInfo().name == "iPad" ||kony.os.deviceInfo().name == "iPad Simulator"  )
   kony.application.showLoadingScreen("loading","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER , true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
   else
   kony.application.showLoadingScreen("loading","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER , true, true,null);
   konyObject.init(appKey,appSecret,serviceURL,
                   function(response) {
                   kony.print("Init success --------->>" + JSON.stringify(response));
                   if(onetimeSetup){
                      popupSuccesConfirm.show();
                   }
                   
                   
                   kony.application.dismissLoadingScreen();
                   }, 	
                   function(error){
                   // need to show an alert or label alert to show bad login
            
		           kony.print("Login failure" + JSON.stringify(error));
		           
		          /*
		           var basicConf = {
		           message: JSON.stringify(error),//display the error message
                   alertType: constants.ALERT_TYPE_INFO,
                   alertTitle: "Login Failure"
                   };
                   kony.ui.Alert(basicConf, {});  
		           * 
		           */
		          popupFailureConfirm.show();
                   kony.application.dismissLoadingScreen();
                   
                   }
                   );          
   }  
   
                                   
   function replaceNewLine(targetStr){
   var index=targetStr.indexOf("\n");
   while(index >= 0){
   targetStr=targetStr.replace("\n","");
   index=targetStr.indexOf("\n");
   }
   return targetStr;
   }
       
   function replaceAllBackSlash(targetStr){
   var index=targetStr.indexOf("\\");
   while(index >= 0){
   targetStr=targetStr.replace("\\","");
   index=targetStr.indexOf("\\");
   }
   return targetStr;
   }
                                   
                                   
   function logon(){
  // frmPurchaseOrderlListKA.segOrderListKA.setVisibility(false);
       
		   var  providerName = "MySAPAuthentication";
		   username = frmLoginKA.tbxCRMUserIDKA.text;
		   password = frmLoginKA.tbxCRMPasswordKA.text;
		   
		   if(username === "" || username === null){
		   alert("Login Id should not be empty");
		   return;
		   }else if(password === "" || password ===null){
		   
		     alert("Password should not be empty");
		     return;
		   }else
		   
		   {
		   
		   try {
		   if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" ||kony.os.deviceInfo().name == "iPad" ||kony.os.deviceInfo().name == "iPad Simulator"  )
		   kony.application.showLoadingScreen("loading","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
		   else
		   kony.application.showLoadingScreen("loading","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
		   
		   authClient = konyObject.getIdentityService(providerName);
		   } catch (exception) {
		   kony.print("Exception" + JSON.stringify(exception));
		   kony.application.dismissLoadingScreen();
		   }
		   
		   authClient.login({
		                    "userid": username,
		                    "password": password
		                    }, function(response) {
		     
		                   // kony.print("*******Login responce******" + JSON.stringify(myData));
		                    var back_token = authClient.getBackendToken(false,null,function(response) {
		                    kony.print("BACKENDtOKEN*********"+JSON.stringify(response));
		                    //kony.print("*****session key1 ****"+obj.params["KonySAP-Session-Key"]);
		                    KonySAPSessionKey=response.params["KonySAP-Session-Key"];
		                    kony.print("*****session key1 ****"+KonySAPSessionKey);
		                    kony.store.setItem("InstanceID", InstanceID);
		                   // kony.store.setItem("serviceURL", serviceURL);
		                    kony.store.setItem("username", username);
		                    kony.store.setItem("password", password);
		                    
		                    }, function(response) {}
		                    );
		                    
		                  /*  
							frmPurchaseOrderlListKA.segOrderListKA.removeAt(0,0);
							frmPurchaseOrderlListKA.segOrderListKA.removeAt(0,1);
							frmPurchaseOrderlListKA.segOrderListKA.removeAt(0,2);	
							*/	   	
		                   // kony.application.dismissLoadingScreen();
                           frmPurchaseOrderlListKA.show();
		                   // getApprovals();
		                    }, function(error) {
		                    kony.print("******Login failure*****" + JSON.stringify(error));
		                    var basicConf = {
		                    message: JSON.stringify(error),//display the error message
		                    alertType: constants.ALERT_TYPE_INFO,
		                    alertTitle: "Login Failure"
		                    };
		                    kony.ui.Alert(basicConf, {});
		                    kony.application.dismissLoadingScreen();
		                    
		                    }
		                    );
		     
		   }
   }
 
                      
                                   
function loadOrderList(){
                                   
     tmpPurchaseOrder ={};
     purchaseList= [];
     for (x=0;x<obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION.length;x++){
     tmpPurchaseOrder.lblTitleKA=obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION[x].WF_PO_HEADER.PO_NUMBER;
     tmpPurchaseOrder.lblTypeKA=obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION[x].WF_PO_HEADER.LASTNAME;
                                   tmpPurchaseOrder.lblStatusKA=obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION[x].STATUS;
                                   tmpPurchaseOrder.lblItemsKA=obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION[x].WF_PO_HEADER.WF_PO_ITEMS.length;
                                   tmpPurchaseOrder.lblValueKA=obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION[x].WF_PO_HEADER.GROS_VALUE;
                                   tmpPurchaseOrder.lblUserKA=obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION[x].WF_PO_HEADER.CREATED_BY;
                                   tmpPurchaseOrder.lblPriorityKA=obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION[x].WF_PO_HEADER.STATUS;
                                   tmpPurchaseOrder.lblDateKA=obj.WF_DO_TRANSACTIONS_MM.WF_DISTRIBUTION[x].WF_OBJECT.TIMESTAMP; 
                                   purchaseList.push(tmpPurchaseOrder);
                                   }    
                                   frmPurchaseOrderlListKA.flexOrderHeaderKA.segOrderListKA.removeAll();   
                                   frmPurchaseOrderlListKA.flexOrderHeaderKA.segOrderListKA.setData(purchaseList);  
       }
       
function preappinitfun(){

     InstanceID = kony.store.getItem("InstanceID");
     kony.print("\n******** InstanceID**************-->"+InstanceID);
     if(InstanceID === null){
       frmUrl.txtBoxUrl.text="";
       frmUrl.show();
     }
     else{
        username = kony.store.getItem("username");
        password = kony.store.getItem("password");
        frmLoginKA.tbxCRMUserIDKA.text=username;
		frmLoginKA.tbxCRMPasswordKA.text=password;
		frmUrl.txtBoxUrl.text=InstanceID;
        frmLoginKA.show();
     }
     
}            
                                   
                                   
                           
function ondeviceBack(){
  return;

}                                   
                                   
                                   
                                   