var REF_WFLOW_ID="";
var WFLOW_ID="";
var WFLOW_USER="";
var DOCID="";
var STATUS="";
var objposition="";
WF_PO_ITEMS_Length="";
var poItemPosition="";

function createOrderDetail(po_number){
  
       itemList=[];
       item={};

   for (x=0;x< purchaseOrders.length;x++){
    if(purchaseOrders[x].WF_PO_HEADER.PO_NUMBER==po_number){
      objposition = x;
      REF_WFLOW_ID="0000000"+purchaseOrders[objposition].REF_WFLOW_ID;
      WFLOW_ID="0000000"+purchaseOrders[objposition].WFLOW_ID;
      WFLOW_USER=purchaseOrders[objposition].WFLOW_USER;
      DOCID=purchaseOrders[objposition].DOCID;
      
    }   
   }
   
   if(purchaseOrders[objposition].STATUS === "READY"){
   
    frmRequestExecutionKA.flxFooterKA.setVisibility(true);
     
    frmRequestExecutionKA.lblStatusKA.text ="Pending";
    frmRequestExecutionKA.imgStatusMachineStartedKA.src="status_machine_pending.png";
  }
  else if(purchaseOrders[objposition].STATUS === "APPROVED"){
     
    frmRequestExecutionKA.flxFooterKA.setVisibility(false);
     
    frmRequestExecutionKA.lblStatusKA.text= "Approved";
     frmRequestExecutionKA.imgStatusMachineStartedKA.src="status_machine_accepted.png";
  }else{
    frmRequestExecutionKA.lblStatusKA.text ="Rejected";
   // frmRequestExecutionKA.flxFooterKA.top="0%";
    //menuToggle2();
    frmRequestExecutionKA.flxFooterKA.setVisibility(false); 
    frmRequestExecutionKA.imgStatusMachineStartedKA.src="status_machine_rejected.png";
    
  }
 
  frmRequestExecutionKA.lblTitleKA.text = purchaseOrders[objposition].WF_PO_HEADER.PO_NUMBER;
  frmRequestExecutionKA.lblTypeKA.text= purchaseOrders[objposition].WF_PO_HEADER.CUSTOMERNAME;
  frmRequestExecutionKA.lblValueKA.text="$ "+purchaseOrders[objposition].WF_PO_HEADER.GROS_VALUE;
  frmRequestExecutionKA.lblUserNameKA.text=purchaseOrders[objposition].WF_PO_HEADER.CREATED_BY;
  frmRequestExecutionKA.lblDateKA.text=purchaseOrders[objposition].WF_PO_HEADER.CREATED_ON;;
 // frmRequestExecutionKA.lblPriorityKA.text="High";
  
  

    WF_PO_ITEMS_Length = purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.length;
    if(WF_PO_ITEMS_Length === undefined){
      kony.print(" ****items length is :****** "+purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.length);
          item={};
          if(purchaseOrders[objposition].STATUS === "READY"){
            item.imgStatusMachineStartedKA ="status_machine_pending.png";
            item.lblStatusKA="Pending"; 
          }
          else if(purchaseOrders[objposition].STATUS === "APPROVED"){
             item.imgStatusMachineStartedKA ="status_machine_accepted.png";
             item.lblStatusKA="Approved"; 
          }else{
            item.imgStatusMachineStartedKA ="status_machine_rejected.png";
            item.lblStatusKA="Rejected"; 
            
          }
          item.lblTitleKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.SHORT_TEXT;
          item.lblTypeKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.PO_ITEM;
         //item.lblStatusKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.STATUS;
          item.lblCategoryKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.MAT_GRP_DESC;
          item.lblQuantityKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.QUANTITY+" un";
          item.lblValueKA="$ "+purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.NET_VALUE ;
          itemList.push(item);
          frmRequestExecutionKA.flxPArentKA.segDetailsKA.removeAll();   
          frmRequestExecutionKA.flxPArentKA.segDetailsKA.setData(itemList);
          kony.print(" ****items list is :****** "+JSON.stringify(itemList));

       }

      else{
           
           for(x=0;x<WF_PO_ITEMS_Length;x++){
             item={};
              if(purchaseOrders[objposition].STATUS === "READY"){
                item.imgStatusMachineStartedKA ="status_machine_pending.png";
                item.lblStatusKA="Pending"; 
              }
              else if(purchaseOrders[objposition].STATUS === "APPROVED"){
                 item.imgStatusMachineStartedKA ="status_machine_accepted.png";
                item.lblStatusKA="Approved"; 
              }else{
                 item.imgStatusMachineStartedKA ="status_machine_rejected.png";
                item.lblStatusKA="Rejected"; 
                
              }
              item.lblTitleKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].SHORT_TEXT;
              item.lblTypeKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].PO_ITEM;
              //item.lblStatusKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.STATUS;
              //item.lblCategoryKA="Pump";
              item.lblCategoryKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].MAT_GRP_DESC;
              item.lblQuantityKA=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].QUANTITY+" un";
              item.lblValueKA="$ "+purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].NET_VALUE ;
              itemList.push(item);
             
          }    
         frmRequestExecutionKA.flxPArentKA.segDetailsKA.removeAll(); 
          kony.print(" ****items list is :****** "+JSON.stringify(itemList));
          frmRequestExecutionKA.flxPArentKA.segDetailsKA.setData(itemList);
          
      }
  
        frmRequestExecutionKA.show();
      
}

function itemDetails(po_item){

        if(WF_PO_ITEMS_Length === undefined){
          frmItemDetailsKA.lblItemNo.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.PO_ITEM;
          frmItemDetailsKA.lblCode.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.MATERIAL;
          frmItemDetailsKA.lblDescription.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.SHORT_TEXT;
          frmItemDetailsKA.lblCategory.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.MAT_GRP_DESC ;
          frmItemDetailsKA.lblQuantity.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.QUANTITY;
          frmItemDetailsKA.lblUnitPrice.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.NET_PRICE;
          frmItemDetailsKA.lblNetValue.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.NET_VALUE;
          frmItemDetailsKA.lblPlant.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.PLANT;
          frmItemDetailsKA.lblDeliveryDate.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.DELIV_DATE;
          frmItemDetailsKA.lblCostCentre.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.COST_CTR_DESC;
          frmItemDetailsKA.lblAccount.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.G_L_ACCT;
          frmItemDetailsKA.lblComments.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS.WF_PO_TEXT.TEXT_DATA;
  		  frmItemDetailsKA.show();
          
        } 
  		else{
          
          for (x=0;x< WF_PO_ITEMS_Length;x++){
              if(purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].PO_ITEM==po_item){
                frmItemDetailsKA.lblItemNo.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].PO_ITEM;
                frmItemDetailsKA.lblCode.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].MATERIAL;
                frmItemDetailsKA.lblDescription.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].SHORT_TEXT;
                frmItemDetailsKA.lblCategory.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].MAT_GRP_DESC ;
                frmItemDetailsKA.lblQuantity.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].QUANTITY;
                frmItemDetailsKA.lblUnitPrice.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].NET_PRICE;
                frmItemDetailsKA.lblNetValue.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].NET_VALUE;
                frmItemDetailsKA.lblPlant.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].PLANT;
                frmItemDetailsKA.lblDeliveryDate.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].DELIV_DATE;
                frmItemDetailsKA.lblCostCentre.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].COST_CTR_DESC;
                frmItemDetailsKA.lblAccount.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].G_L_ACCT;
                frmItemDetailsKA.lblComments.text=purchaseOrders[objposition].WF_PO_HEADER.WF_PO_ITEMS[x].WF_PO_TEXT.TEXT_DATA;
                
                  }   
           }
          
          frmItemDetailsKA.show();
        }
}

function menuToggle(){
 kony.print("\n--in menu toggle");
 
   frmRequestExecutionKA.flxFooterKA.animate(
     kony.ui.createAnimation({100:{left:"100","stepConfig":{}}}),
     {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
     {animationEnd: function() {
     } 
  });
}
function menuToggle2(){
 kony.print("\n--in menu toggle");
 
   frmRequestExecutionKA.flxFooterKA.animate(
     kony.ui.createAnimation({100:{left:"0","stepConfig":{}}}),
     {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.40},
     {animationEnd: function() {
     } 
  });
}
