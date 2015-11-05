function frmTaskResourcesBtnFilterViewOnClick() {
return AS_Button_9f3bc8486e6445eeb0e30bd24686a22c();
}
function AS_Button_9f3bc8486e6445eeb0e30bd24686a22c() {
configureLayerFilterKA();
function configureLayerFilterKA(){
   var flexRef  = frmTaskViewFiltersKA.flxMainKA;
    if(flexRef){
        flexRef.removeFromParent();
    }
    frmTaskResourcesKA.add(flexRef);

    frmTaskResourcesKA.flxMainKA.animate(getAnimationObject(),animConfig(),{animationStart:function(){},animationEnd:endCallBack});
    function getAnimationObject(){
        var animDefinition = {"100" :{ "right":"83%"}};
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
    frmTaskResourcesKA.flxMainKA.zIndex = 20;
    frmTaskResourcesKA.flxContainerTaskResourcesKA.zIndex = 1;

}

}