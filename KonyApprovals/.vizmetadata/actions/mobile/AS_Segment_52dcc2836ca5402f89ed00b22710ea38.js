function AS_Segment_52dcc2836ca5402f89ed00b22710ea38() {

var segment = frmPurchaseOrderlListKA.segOrderListKA.selectedRowIndex[0];
var row = frmPurchaseOrderlListKA.segOrderListKA.selectedRowIndex[1];
//alert(frmPurchaseOrderlListKA.segOrderListKA.selectedItems[0].lblTitleKA);
po_number = frmPurchaseOrderlListKA.segOrderListKA.selectedItems[0].lblTitleKA;
createOrderDetail(po_number);

}