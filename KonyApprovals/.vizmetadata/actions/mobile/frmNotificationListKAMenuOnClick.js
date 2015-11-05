function frmNotificationListKAMenuOnClick() {
return AS_Button_54221445441d4c84a6c86a14d873ebcd();
}
function AS_Button_54221445441d4c84a6c86a14d873ebcd() {
if(!isMenuShown){
    	var menuFlexRef  = frmHamburgerMenuNotifKA.flexMenuContainerKA;
    if(menuFlexRef){
        menuFlexRef.removeFromParent();
    }
    frmMyNotificationListKA.add(menuFlexRef);
    frmMyNotificationListKA.flexMenuContainerKA.animate(getAnimationObject(),animConfig(),{animationStart:function(){},animationEnd:endCallBack});
    function getAnimationObject(){
        var animDefinition = {"100" :{ "left":"0%"}};
        animDef = kony.ui.createAnimation(animDefinition);
        return animDef;
    };

    function animConfig(){
        var config = {
           "duration":10,
           "iterationCount":1,
           "delay":2,
           "fillMode":kony.anim.FILL_MODE_FORWARDS
        };
        return config;
    }

    function endCallBack(){
      frmMyNotificationListKA.flexNotificationHeaderKA.right = "-80%";
      isMenuShown = true;
    } 	
    
  }else{
    var menuRef = frmMyNotificationListKA.flexMenuContainerKA;
    menuRef.removeFromParent();
    frmHamburgerMenuNotifKA.add(menuRef);
    frmMyNotificationListKA.flexNotificationHeaderKA.right = "0%";
    isMenuShown = false;
  }

}