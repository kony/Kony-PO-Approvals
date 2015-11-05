function frmResourceExecutionAddBtnAddKAOnTouchStart() {
return AS_Button_2477f7e89f4142749b67048283177df6();
}
function AS_Button_2477f7e89f4142749b67048283177df6() {

  	var flexRef  = frmCompleteOrderLayerKA.FlexContainerMainKA;
    var flexBg  = frmCompleteOrderLayerKA.FlexContainerBgKA;
    if(flexBg){
        flexBg.removeFromParent();
    }
    if(flexRef){
        flexRef.removeFromParent();
    }
    frmResourceExecutionAddKA.add(flexBg);
    frmResourceExecutionAddKA.add(flexRef);
	frmResourceExecutionAddKA.FlexContainerMainKA.zIndex = 20;
	frmResourceExecutionAddKA.FlexContainerBgKA.zIndex = 15;

}