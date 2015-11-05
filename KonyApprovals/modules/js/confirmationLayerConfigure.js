//Type your code here
function configureLayerKA(){
  	var flexRef  = frmCompleteOrderLayerKA.FlexContainerMainKA;
    var flexBg  = frmCompleteOrderLayerKA.FlexContainerBgKA;
    if(flexBg){
        flexBg.removeFromParent();
    }
    if(flexRef){
        flexRef.removeFromParent();
    }
    frmCompleteOrderKA.add(flexBg);
    frmCompleteOrderKA.add(flexRef);

    frmCompleteOrderKA.FlexContainerMainKA.animate(getAnimationObject(),animConfig(),{animationStart:function(){},animationEnd:endCallBack});
    function getAnimationObject(){
        var animDefinition = {"100" :{ "top":"10%"}};
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

    }
    frmCompleteOrderKA.FlexContainerMainKA.zIndex = 20;
    frmCompleteOrderKA.FlexContainerBgKA.zIndex = 10;
    frmCompleteOrderKA.flxcontainerOrderKA.zIndex = 1;

}

function showHideHamburgerMenuKA(){
  if(!isMenuShown){
    	var menuFlexRef  = frmHamburgerMenuWOKA.flexMenuContainerKA;
    if(menuFlexRef){
        menuFlexRef.removeFromParent();
    }
    frmOrderListKA.add(menuFlexRef);
    frmOrderListKA.flexMenuContainerKA.animate(getAnimationObject(),animConfig(),{animationStart:function(){},animationEnd:endCallBack});
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
      frmOrderListKA.flexOrderHeaderKA.right = "-80%";
      isMenuShown = true;
    } 	
    
  }else{
    var menuRef = frmOrderListKA.flexMenuContainerKA;
    menuRef.removeFromParent();
    frmHamburgerMenuWOKA.add(menuRef);
    frmOrderListKA.flexOrderHeaderKA.right = "0%";
    isMenuShown = false;
  }
  
}