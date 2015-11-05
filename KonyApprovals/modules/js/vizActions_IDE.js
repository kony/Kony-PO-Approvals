/*This is a auto generated file.Any changes to this file will be overwritten.*/

function frmItemDetailsKA_btnBackKA_onClick_mobile(){
  AS_Button_a325c2019a544aa89b03bebaca3e8f59();
}

function frmItemDetailsKAA_btnBackKA_onClick_mobile(){
  AS_Button_614372fac9854bb29d7b5b6dd876a2e3();
}

function frmItemDetailsKAA_btnCompleteKA_onClick_mobile(){
  AS_Button_27daec0c61c9493bb0ff16a9e757355c();
}

function frmLoginKA_init_mobile(){
  AS_Form_d6c1bbe4de0d4a88adcbca6bf30cd9ae();
}

function frmLoginKA_btnLoginKA_onClick_mobile(){
  AS_Button_d06ee076a079442585e95b47627f2efc();
}

function frmPurchaseOrderlListKA_init_mobile(){
  AS_Form_a4858e531155482f8d34e27ba28592de();
}

function frmPurchaseOrderlListKA_segOrderListKA_onRowClick_mobile(){
  AS_Segment_52dcc2836ca5402f89ed00b22710ea38();
}

function frmRequestExecutionKA_btnHeaderKA_onClick_mobile(){
  AS_Button_f9849069be144a3896299cac28bc151f();
}

function frmRequestExecutionKA_segDetailsKA_onRowClick_mobile(){
  AS_Segment_7b1086f331e74b9184fbe7f9ae7fa55a();
}

function frmRequestExecutionKA_btnApproveKA_onClick_mobile(){
  AS_Button_911dd5bb7cdd408b81f834674cc043fe();
}

function frmRequestExecutionKA_btnFowardKA_onClick_mobile(){
  AS_Button_03618a14654b4860b746b4dc2f85f06f();
}

function frmTenantKA_btnConnectKA_onClick_mobile(){
  AS_Button_d06ee076a079442585e95b47627f2efc();
}

function AS_Button_03618a14654b4860b746b4dc2f85f06f() {
RejectPO();

}function AS_Button_04793c91f055478caa846424ffa2c368() {
kony.application.getPreviousForm().show();

}function AS_Button_06d5e868f387462fb56ba91eec81995e() {

}function AS_Button_0729b82630284f8c90cebb3f904f9186() {
undefined.show();

}

function AS_Button_0b445bab056146f6a8cbe7bc9c07ce77() {
//Generated code




(function NAVIGATE_TO_FORM__onClick_90d9071ed3fc438a893cf97a40289a9b() {
frmOrdersViewsKA.show();
})();




}

function AS_Button_0bce0aa77a0d4f8ca92aa7e3f55f8541() {
undefined.show();

}function AS_Button_10b3238ea16c477a98da1e2dcfee1274() {
undefined.show();

}function AS_Button_153855b2edf04096ad92aecb72a81c2e() {
undefined.show();

}function AS_Button_18bbe1b1003946e3913f94884934de58() {
undefined.show();

}function AS_Button_1bd59d8d76914bd2bd315efc45106235() {
frmRequestExecutionKA.show();

}function AS_Button_1f8032b9e0454444ba191e9ba3881c10() {

}function AS_Button_2236b081e23c4adda9e4b6ea1cfc2f6a() {
undefined.show();

}

function AS_Button_2477f7e89f4142749b67048283177df6() {
//Generated code




(function ADD_SNIPPET_onTouchStart_a08413337dce44ccb8090501d76bc83a() {

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
})();




}

function AS_Button_27daec0c61c9493bb0ff16a9e757355c() {
undefined.show();

}function AS_Button_28855ef2ae114474a19f65cd9ca79824() {
undefined.show();

}function AS_Button_28ebd79add9041a2a598d8258a750ae7() {
approvePO();

}function AS_Button_29136c70cad24286a03f92af9e228a4d() {
undefined.show();

}

function AS_Button_2946b0bc5716408fbfcaacfa00161ad5() {
//Generated code




(function NAVIGATE_TO_FORM_frmCompleteOrderKA_onClick_9b8dfe6aeb914007bfc7e7e6d8da7b5d() {
frmCompleteOrderKA.show();
})();




}

function AS_Button_2a4287d9b0994889bcc818bd68e6fca5() {
frmRequestExecutionKA.show();

}

function AS_Button_2da190508ce84c099f90cf742d16ac1b() {
//Generated code




(function NAVIGATE_TO_FORM_frmResourceExecutionKA_onClick_55b6de2ffdf840eb9b2954e56da98337() {
frmResourceExecutionKA.show();
})();




}

function AS_Button_2e297abbbdb14f7a87e9ab3397af0b27() {

}function AS_Button_3151039407684e7e8696fcf5db66f0b0() {
undefined.show();

}function AS_Button_32dcac3441d5438999655148cf579e51() {
frmRequestExecutionKA.show();

}function AS_Button_3834aa76a106423fadb41e4189b156d5() {
undefined.show();

}function AS_Button_3c4060f3b1884e4bb4ef6dec36184104() {


}function AS_Button_3dc6960c0147477683333d60963dbf19() {
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

}function AS_Button_413d2baf513a49829cb07a2438577566() {
undefined.show();

}function AS_Button_41c0c4200c1b4730aab4409a03486945() {
undefined.show();

}

function AS_Button_4395517375ee4dcb99ad55cee03979aa() {
//Generated code




(function NAVIGATE_TO_FORM_frmOrderListKA_onClick_ccb372edc2c94e13883d2fa65072a7ca() {
frmOrderListKA.show();
})();




}



function AS_Button_47b7acb929ab4414b69a52e054eac572() {
//Generated code




(function ADD_SNIPPET_onClick_ceccff282c9a4c6bbb358ae91b333785() {
frmOrderListKA.segOrderListKA.setVisibility(true);
frmOrderListKA.mapMyOrderListKA.setVisibility(false);
})();




}

function AS_Button_4a9035d9ba194994a13ad351defb1c62() {
undefined.show();

}

function AS_Button_4d8f72e0462c4ef180fe10d865ea9278() {
//Generated code




(function ADD_SNIPPET_onClick_8ff01c455ae5496fb9cf4b0e3a4b3314() {
frmOrderListKA.segOrderListKA.setVisibility(false);
frmOrderListKA.mapMyOrderListKA.setVisibility(true);
})();




}

function AS_Button_54400b5f1f9a40fe92476b9d347c493c() {
undefined.show();

}function AS_Button_596448264dbc496db7d10cf1e97b6f0f() {
undefined.show();

}function AS_Button_5a5ba6e61f98443b930bbb82e5f4a82b() {
undefined.show();

}function AS_Button_5cb587f0395e4d28a618b028fb5a5c24() {
frmOrderListKA.btnMapShowKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.btnListOrderKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.segOrderListKA.setVisibility(false);
frmOrderListKA.mapMyOrderListKA.setVisibility(true);

}function AS_Button_614372fac9854bb29d7b5b6dd876a2e3() {
frmRequestExecutionKA.show();

}function AS_Button_64f1a9a250e745f1b73b3543143a35c2() {
undefined.show();

}function AS_Button_67726e606e0c40c585d494d7c4cef7e6() {
undefined.show();

}function AS_Button_688854acfd4d4280800b3a0659e64b89() {
undefined.show();

}function AS_Button_6b65d1a17c59498d9e4b6ea8c5f8bbcf() {
frmRequestExecutionKA.show();

}function AS_Button_6f5474b9bdac4bfd9e6208c1c8e5eea2() {
undefined.show();

}function AS_Button_6f8ecfced8784a2c8849c5a0085e0bde() {
undefined.show();

}function AS_Button_743db45affba43fca0defd039e355de5() {
undefined.show();

}function AS_Button_82232bb2338d41ff80d3747d29a77203() {

}function AS_Button_840e4b8d98e34a139ecebaa87aac8e03() {
undefined.show();

}function AS_Button_8438299d913643c1b30bb675bd1ea0b7() {
undefined.show();

}function AS_Button_85b5935d04d94cc0ac5547ad9a8f1f2a() {
undefined.show();

}function AS_Button_8c9e74c8fd7f424eb78a58180db15ad2() {
frmRequestExecutionKA.show();

}function AS_Button_911dd5bb7cdd408b81f834674cc043fe() {
approvePO();

}function AS_Button_948af9b242c64bdaa68698cc5368f45a() {
undefined.show();

}function AS_Button_950d39d142214d958b5828d7251cc5aa() {
undefined.show();

}function AS_Button_9abe7cc24ec9446cb1853e72d6044007() {
undefined.show();

}function AS_Button_9adbc597a990478a9bbfc9c927580727() {
undefined.show();

}function AS_Button_9f5f8f3a3ac54c718d30d10943af7c0d() {
kony.application.getPreviousForm().show();


}function AS_Button_a114a4f08a3f4c72a5acdb42d3523053() {
showHideHamburgerMenuKA();

}function AS_Button_a21adb14ed814d42a7f0c0d48a763597() {
undefined.show();

}function AS_Button_a325c2019a544aa89b03bebaca3e8f59() {
frmRequestExecutionKA.show();

}function AS_Button_a389dba4f81a48578c69515ffdeb3fc9() {
undefined.show();

}function AS_Button_a5762a08a22142f09a980d2872a4a4fe() {
frmOrderListKA.btnMapShowKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA;
frmOrderListKA.btnListOrderKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA;
frmOrderListKA.segOrderListKA.setVisibility(true);
frmOrderListKA.mapMyOrderListKA.setVisibility(false);

}function AS_Button_a651d9d61b304da1ad1f94309a349dae() {
undefined.show();

}function AS_Button_aa60f60f635c48478e6a55aabdac1530() {
frmRequestExecutionKA.show();

}

function AS_Button_b0611922231a4aac9be31e38a26ec6bd() {
//Generated code




(function NAVIGATE_TO_FORM_frmResourceExecutionAddKA_onClick_6fec95bdf4b343859db7918409ef26e9() {
frmResourceExecutionAddKA.show();
})();




}

function AS_Button_b4720a1c73ab400d931892a4ae507eeb() {
undefined.show();

}function AS_Button_b53b2b27f9334e008103f108c1f8db71() {
frmOrderListKA.segOrderListKA.setVisibility(false);
frmOrderListKA.mapMyOrderListKA.setVisibility(true);

}function AS_Button_b624d69f270243c7a708e80e97730e99() {
undefined.show();

}function AS_Button_b7509e7c0c9643d0a14cb357bad6fbef() {
undefined.show();

}

function AS_Button_b9ee0c3fc364451fbc16dbe866b926ba() {
//Generated code




(function NAVIGATE_TO_FORM_frmOrderExecutionKA_onClick_386f69953d0246048a7a3ede3a2187b2() {
frmOrderExecutionKA.show();
})();




}

function AS_Button_be45153f189e4c6590b9984ba59501ee() {
undefined.show();

}function AS_Button_beab3e991a1e4eeeb693f0fbea477e2b() {
undefined.show();

}function AS_Button_c612a15ac81641a6aa4ed108f69b4874() {
configureLayerKA();

}function AS_Button_c74e09eb5cad45a086eaecd439e8ec0b() {
undefined.show();

}function AS_Button_ceabc5b7d90d43358d050d400f1fcff9() {
undefined.show();

}

function AS_Button_cec60fd988834489ac34226587d16866() {
//Generated code




(function NAVIGATE_TO_FORM__onTouchStart_e426b3b4e624411da6f94d61508e116c() {
frmResourceExecutionKA.show();
})();




}

function AS_Button_d06ee076a079442585e95b47627f2efc() {
logon();

}function AS_Button_d42b74d9f6864d09bc9d5243b75a5376() {
configureLayerKA();

}function AS_Button_db369c1c96c54fa090e15a1641741b15() {
undefined.show();

}function AS_Button_e12eb1ee1404495abb4f6dfc710328ce() {
undefined.show();

}function AS_Button_e25190ff1f1f4bb5942eee2d217bd483() {
frmOrderListKA.segOrderListKA.setVisibility(true);
frmOrderListKA.mapMyOrderListKA.setVisibility(false);

}function AS_Button_e2612e462d2045278f2b68de1cfbc09a() {

}function AS_Button_e543cc2ddfef4cd3a809cec9ff46cadd() {
undefined.show();

}function AS_Button_e89e2a8c098a4e11a14f9ebdf0babdaa() {
showHideHamburgerMenuKA();

}function AS_Button_e9e9d1846b5e44e4813f518a3b977f9f() {
undefined.show();

}

function AS_Button_ec7d5fc3a83f4a4b9919fb9651222576() {
//Generated code




(function NAVIGATE_TO_FORM__onClick_7f93b959b4714b23ac6ecc789e74f1b5() {
frmTaskResourcesKA.show();
})();




}

function AS_Button_ee2995e0d62045f6b9c4021f4712a34b() {
undefined.show();

}function AS_Button_ef3fe8745e2046b68a72355d52652e05() {

}function AS_Button_f118b04b76a44c8b9c0fba0ddced98ef() {
undefined.show();

}function AS_Button_f422076c10a045cf80c3487a87eb0990() {
RejectPO();

}function AS_Button_f5245f9a0df24dfc9881e7ccf90a6189() {
undefined.show();

}function AS_Button_f9849069be144a3896299cac28bc151f() {
frmPurchaseOrderlListKA.show();

}function AS_Button_fae503d0ea1b4de7ba039fb5f78e6fb1() {
undefined.show();

}function AS_Button_fb24801d59f04a709f9fb6667dbaedf8() {

}function AS_Button_fdc20bdc83854896a4f9c69523f2659b() {
undefined.show();

}function AS_Button_fdd375196b4343d48f151b5701742c53() {
undefined.show();

}function AS_Button_ff27189abb244d5a983544c7ff6d2e7a() {
frmRequestExecutionKA.show();

}function AS_Button_ffdb0e6ab7b44d47bf9107580e1195d3() {

}function AS_FlexContainer_023cae7cefbb45aaaacfccf01c578a48() {
undefined.show();

}function AS_FlexContainer_0859ce9f1c8a42c28014407b7399c121() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(true);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_093f9cd61d014419a41415ad86405e7e() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(true);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_17be2edbd4d7429fa352de9b7dbcb096() {
undefined.show();

}function AS_FlexContainer_1fd04faf26d24c2f9c2732052d690a5c() {
undefined.show();

}function AS_FlexContainer_20df94b1c5384437ae651136e3c7129a() {

}function AS_FlexContainer_342fdf62aa534439988a0340b53437df() {
undefined.show();

}function AS_FlexContainer_3c9c43ee8c1d4153b7741d689d387690() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(true);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_40bbe3110a17420aa7667d56c953cb8e() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(true);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_44f7f4b8f2bf48b2994d515abda09c32() {
undefined.show();

}function AS_FlexContainer_56da121754bb4e74b33f4c80c84fb0c4() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(true);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_5aa5f377391a4ca98ed888b56b8b47ef() {
undefined.show();

}function AS_FlexContainer_63dfb6a2599b4121a75810d42b19ac28() {
undefined.show();

}function AS_FlexContainer_67ee932e377f4340af5ec4ff3192ce30() {
undefined.show();

}function AS_FlexContainer_78d4eb3fd7eb45c490b24ac405f4cb63() {
undefined.show();

}function AS_FlexContainer_79b021e858374840a7919d2b1e288a52() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(true);

}function AS_FlexContainer_89eb3f689e094a87accfe28882f842aa() {

}function AS_FlexContainer_8e10179250b8446297b26c70baae5ae0() {
undefined.show();

}function AS_FlexContainer_93f1b00e617d4ce39fd3fde78dd3703d() {
undefined.show();

}function AS_FlexContainer_953cb319885c4adeabc868fa9b7f80e8() {

}function AS_FlexContainer_9b9e1065e5954bae8619b12e2766db30() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(true);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_9be6bc6604c245658d9fe66dc0d9b807() {
undefined.show();

}function AS_FlexContainer_9d966f9ceb004b71b5891f8076e4e755() {
undefined.show();

}function AS_FlexContainer_a4c0bbc194fd4e71b6dc32eecf2818e7() {
undefined.show();

}function AS_FlexContainer_a83111f566bf40daa02cf000376a2341() {

}function AS_FlexContainer_bd41e0df0a564bd68a504dcc41ebcdff() {
undefined.show();

}function AS_FlexContainer_c8d473922d774ba6839a1f09fdfed57c() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(true);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_cd2c058b369d4b5c910e2195293c57b3() {
undefined.show();

}function AS_FlexContainer_cd7eeea57fae460bafa62209777b0c38() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(true);

}function AS_FlexContainer_cde8a58988b945e29b9dd7e453fd5e71() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(true);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_ce4e251f095e41c3b715e6cb9e80f2a7() {
undefined.show();

}function AS_FlexContainer_d53b5345842b4acbb4fe79de54f41169() {
frmLoginKA.show();

}function AS_FlexContainer_e4013710da2e4cacbaa02449d5b6c8a5() {
undefined.show();

}function AS_FlexContainer_e6a7a24ab13e47bd91d3b10aeb9452fb() {
undefined.show();

}function AS_FlexContainer_ebe5ebd6520542848c5a9670c802dfea() {

}function AS_FlexContainer_ec0381dee51944ea8fcf54edaf27edd5() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(false);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(true);

}function AS_FlexContainer_f107b0f85f674a1e8c393624398d1871() {
frmAddNotificationKA.FlxscrllLocationKA
.setVisibility(false);
frmAddNotificationKA.flxProbDescKA
.setVisibility(true);
frmAddNotificationKA.flxAttachPhotoKA
.setVisibility(false);
frmAddNotificationKA.flxScrllAddNotificationDetailsKA
.setVisibility(false);

}function AS_FlexContainer_f9c26530a2b440c284458a78e8a179ca() {
undefined.show();

}function AS_FlexContainer_fe8676f7122045819836ad161b3055be() {
undefined.show();

}function AS_FlexContainer_fed90ddaf8a84ffe8afe7079725d2672() {
undefined.show();

}function AS_FlexScrollContainer_7f026d89f9334c6bb2ef510c2497df29() {

}function AS_FlexScrollContainer_c5effe2ed1284f3aabdf1e55007949a8() {

}function AS_Form_037e4f1822b449bdb1531c44a553a866() {

}function AS_Form_18ac607ad3c847569a72ac0ea8a7c1b9() {

}function AS_Form_612224d2f18f4b228e18b7d586338a53() {
var orderDetailsKA = function(){
      frmOrderDetailsKA.show();
};

var orderattachmentsKA = function(){
      frmOrderAttachmentsKA.show();
}

var orderResourcesListKA = function(){
      frmOrderResourcesListKA.show();
                
}
var completeOrderKA = function(){
      frmCompleteOrderKA.show();
}

var widgets=[
{"src" : "bf_details.png","ontouch":orderDetailsKA},
{"src" : "bf_order_ex_attachments.png","ontouch":orderattachmentsKA},
{"src" : "bf_order_ex_history.png","ontouch":completeOrderKA},
{"src" : "bf_resources.png","ontouch":orderResourcesListKA}
];


addToScroll(frmCompleteOrderKA,"flxScrllSubMenuKA",widgets);

}function AS_Form_68831429f3ad408788b1a93b94fb37ad() {

}function AS_Form_6f49c2809bae48898105a57543b24cdb() {



}function AS_Form_714cda2763654660b456ae16c70ba36d() {

}function AS_Form_76d415def43545dca195407b0694aabc() {
var orderResourceDetailsKA = function(){
  frmOrderResourceDetailsKA.show();
};

var resourecAttachmentDetailsKA = function(){
  frmOrderAttachmentsKA.show();
};

var dummyFunctionKA = function(){
	alert("not implemented in this release");
};


var widgets=[
{"src" : "bf_details.png","ontouch":orderResourceDetailsKA},
{"src" : "bf_resource_ex_stock_info.png","ontouch": dummyFunctionKA},
{"src" : "bf_order_ex_attachments.png","ontouch":resourecAttachmentDetailsKA},
{"src" : "notification_add_photo.png","ontouch":dummyFunctionKA}
];


addToScroll(frmResourceExecutionKA,"FlexScrollContainerOptionsKA",widgets);

}function AS_Form_7cc2b597690d4100ad229f9791fb3290() {
/*var widgets=[
{"src" : "order.png","ontouch":"resources"},
{"src" : "attchments_file.png","ontouch":"attachments"},
{"src" : "files.png","ontouch":"resources"},
{"src" : "text.png","ontouch":"resources"},
{"src" : "pdf.png","ontouch":"resources"},
{"src" : "word.png","ontouch":"attachments"}
];


addToScroll(frmOrderExecutionKA,"flxScrollTypesKA",widgets);*/

}function AS_Form_a4858e531155482f8d34e27ba28592de() {

frmPurchaseOrderlListKA.segOrderListKA.removeAt(0,0);
frmPurchaseOrderlListKA.segOrderListKA.removeAt(0,1);
frmPurchaseOrderlListKA.segOrderListKA.removeAt(0,2);
getApprovals();

}function AS_Form_b6c8125d36334f078ce10ba79478ded9() {
isMenuShown = false;

}function AS_Form_b73d1474267643ce8bfcc5823b118727() {

}function AS_Form_b8af6776f4274dc98aae93edefe39594() {
undefined.show();

}function AS_Form_bd351303e95341558d2027c11b6644ff() {


}function AS_Form_c92e413709e543d2adf9287da409591d() {

}function AS_Form_d6c1bbe4de0d4a88adcbca6bf30cd9ae() {
init();

}function AS_Form_e067d6b367074721bb831a3a29f9c513() {

}function AS_Form_ef0f7d50f384438183cc337e26be1ceb() {


}function AS_Form_efe9f7da28494ac58f4e5d0ef5000ecf() {
var widgets=[
{"src" : "notification_execution_details.png","ontouch":"Details"},
{"src" : "bf_order_ex_attachments.png","ontouch":"attachments"},
{"src" : "files.png","ontouch":"resources"},
{"src" : "text.png","ontouch":"resources"},
{"src" : "pdf.png","ontouch":"resources"},
{"src" : "word.png","ontouch":"attachments"}
];


var orderResourceDetailsKA = function(){
      frmOrderResourceDetailsKA.show();
};

var stockDetailsKA = function(){
                //  write your code here
}

var attachmentKA = function(){
                
}


}function AS_Form_f609b01655c14eca96273150618c0495() {
isMenuShown = false;

}

function AS_Image_08bded50e8ac418b84ac6a942ad75c23() {
//Generated code




(function NAVIGATE_TO_FORM__onTouchStart_79e58c1586254214802f62cd29b9028a() {
frmContactDetailsKA.show();
})();




}

function AS_Image_1318bd77ff0e4fdf8bc7aca328d672bc() {
undefined.show();

}function AS_Image_226ec4d9cf3e4f078ffcb46bf784e530() {

}function AS_Image_26464e987b6943c8a35a35278a22e29e() {
frmRequestExecutionKA.show();

}function AS_Image_33c2d5dbfed3474180b9877cb1959b9c() {
undefined.show();

}function AS_Image_3658072cea854a23acfd3b3053d9556a() {
undefined.show();

}function AS_Image_373b5f0a42314dbd85dbbde2e80365f9() {
undefined.show();

}function AS_Image_49fd7f3d09f74847a7abdc4642d42b06() {

}function AS_Image_4bc3b6c6d6ef4a6abde880608ed0f596() {
frmItemDetailsKAA.show();

}function AS_Image_4d3ba81d896b4e0998ce6edf08f32b40() {
undefined.show();

}function AS_Image_5f368fbadb51421abdefda9e2b86fc90() {
frmItemDetailsKAA.show();

}function AS_Image_653ae2827032447bab97b493808c7a03() {

}function AS_Image_6680a78a9bff4ec696955abd1f6ffa5e() {
showHideHamburgerMenuKA();

}function AS_Image_677aeaff013c4222b3c9896aa6b3242e() {
undefined.show();

}function AS_Image_6dcf6a889ac246d0be4ed10bd018f1e4() {
undefined.show();

}function AS_Image_749308188b21476d991df78d99938561() {
undefined.show();

}function AS_Image_83a4b1889c8e46fa9f63da8c299d5e50() {

}function AS_Image_86e5cde6aeb746d6829b4bf455621f35() {

}function AS_Image_8736970427a04d60b0a13d50339c1598() {
undefined.show();

}function AS_Image_87e37e7d06b543129cac78e2eab67286() {
undefined.show();

}function AS_Image_91aed56f69664caab0d96a12db09829e() {
undefined.show();

}function AS_Image_9efe6b538d9b49c5a2be4a4cc148a408() {

}function AS_Image_a59cdbf3df8a48fa8a7ae6d4dad7a0dd() {

}function AS_Image_b54b83756dce40c29951568164715f52() {

}function AS_Image_b7311bf2c10f431eba82761604950e04() {
undefined.show();

}function AS_Image_d9aa77677adf4b488f1e2e8cd5a29793() {

}function AS_Image_db616a7249d64ba2952956996b7667c5() {
undefined.show();

}function AS_Image_e6561156267042138fbf568b89ac1100() {
undefined.show();

}function AS_Image_f07baf4ad6874f9aacd4d05eed9faee3() {
undefined.show();

}function AS_Image_fd79ebb348cd4e6dba88c1991203be77() {
undefined.show();

}function AS_Segment_049288a3ca49443eb09fad91ba61877e() {
frmRequestExecutionKA.show();

}function AS_Segment_0525e79d2adb420b9b0b91e96f0e285f() {
undefined.show();

}function AS_Segment_05c0683ea5124877bc623e00c5bf24f7() {
frmItemDetailsKAA.show();

}function AS_Segment_15211391b41a47b2967bd7a0151eac75() {
undefined.show();

}function AS_Segment_2445f3ca313c4f779450a4cf1e0b7055() {
frmItemDetailsKAA.show();

}function AS_Segment_2a8f3fc4deca4998bb30cdf52402543f() {
frmRequestExecutionKA.show();

}function AS_Segment_2aecd2f419234271b2879545d796d87b() {
undefined.show();

}function AS_Segment_2d644379fb984055972c32e3ab519650() {
frmRequestExecutionKA.show();

}function AS_Segment_52dcc2836ca5402f89ed00b22710ea38() {

var segment = frmPurchaseOrderlListKA.segOrderListKA.selectedRowIndex[0];
var row = frmPurchaseOrderlListKA.segOrderListKA.selectedRowIndex[1];
//alert(frmPurchaseOrderlListKA.segOrderListKA.selectedItems[0].lblTitleKA);
po_number = frmPurchaseOrderlListKA.segOrderListKA.selectedItems[0].lblTitleKA;
createOrderDetail(po_number);

}function AS_Segment_617e022a94d746ab9e997fa1ae62879a() {
undefined.show();

}function AS_Segment_7b1086f331e74b9184fbe7f9ae7fa55a() {
var segment = frmRequestExecutionKA.segDetailsKA.selectedRowIndex[0];
var row = frmRequestExecutionKA.segDetailsKA.selectedRowIndex[1];
//alert(frmRequestExecutionKA.segDetailsKA.selectedItems[0].lblTypeKA);
po_item = frmRequestExecutionKA.segDetailsKA.selectedItems[0].lblTypeKA;
itemDetails(po_item);

}function AS_Segment_81397c54b3da4c559c285d1e304ea432() {
frmItemDetailsKAA.show();

}function AS_Segment_89bb76262697498fa9d7fae6669f8db6() {

}function AS_Segment_9385bd2dd7c7461e972133b9c32b4f9a() {
undefined.show();

}function AS_Segment_958589c75fad4bd390c532ea86ba249b() {
frmRequestExecutionKA.show();

}function AS_Segment_9f78bd74b1dc48d39092a625a2d95e24() {
undefined.show();

}function AS_Segment_a2d0e8262fe8426fa58e60bc224058df() {
frmRequestExecutionKA.show();

}function AS_Segment_af064c8c84c241798873089128fa8398() {
undefined.show();

}function AS_Segment_bf016c2e66e54d9aa9ebd8f4ec65c9d3() {
frmRequestExecutionKA.show();

}function AS_Segment_d42d7edb50374ee3a2df17a50b71278f() {
frmRequestExecutionKA.show();

}function AS_Segment_d5123594e5e64ab1998c6be63c0f8491() {
undefined.show();

}function AS_Segment_eadde0ca2b71448a96a5a31c9451d833() {
undefined.show();

}function AS_Segment_ec333a1cc1944f40bd86ac6dee81fcd0() {
frmRequestExecutionKA.show();

}function AS_Segment_f30893f0f7cf4d718a7e318d9dad366a() {
undefined.show();

}function AS_Segment_fb7d4fb69789455e826ac00ae96600c8() {
frmRequestExecutionKA.show();

}function HamburgerNotificationKAMyNotificationOnClick() {
return AS_FlexContainer_d4ee222e4d0b48129db1d8a7009b50a2();
}
function AS_FlexContainer_d4ee222e4d0b48129db1d8a7009b50a2() {
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

}function HamburgerNotificationMenuAddNotificationOnClick() {
return AS_FlexContainer_9bbf6467da02470c946fd9cd1abeb120();
}
function AS_FlexContainer_9bbf6467da02470c946fd9cd1abeb120() {
undefined.show();

}function WOHamburgerMenu1OnClick() {
return AS_FlexContainer_57bf90474ad74f129b47a557b87c7422();
}
function AS_FlexContainer_57bf90474ad74f129b47a557b87c7422() {
undefined.show();

}function btnLogoutOnClick() {
return AS_Button_8b4687464d4b452bb5eb48b9212a2232();
}
function AS_Button_8b4687464d4b452bb5eb48b9212a2232() {
frmLoginKA.show();

}function btnNotificationLogoutOnclick() {
return AS_Button_096acfd6e72548cfa968c5f5dcd27a70();
}
function AS_Button_096acfd6e72548cfa968c5f5dcd27a70() {
frmLoginKA.show();

}function frmCompleteOrderBtnBack() {
return AS_Button_61d6a58d957d4993b14400eecfe45144();
}
function AS_Button_61d6a58d957d4993b14400eecfe45144() {
configureLayerKA();

}function frmCompleteOrderBtnBackOnClick() {
return AS_Button_31976d874be5418aa5a94991f4870ff7();
}
function AS_Button_31976d874be5418aa5a94991f4870ff7() {
configureLayerKA();

}function frmCompleteOrderBtndoneKA() {
return AS_Button_f00b5455d7a44f35a077454857c8b392();
}
function AS_Button_f00b5455d7a44f35a077454857c8b392() {
configureLayerKA();

}function frmCompleteOrderCheckListBtnDoneOnClick() {
return AS_Button_86f2e836e72f4b69a422630dabff2e7c();
}
function AS_Button_86f2e836e72f4b69a422630dabff2e7c() {
undefined.show();

}function frmCompleteOrderInit() {
return AS_Form_8377004e77624c938733b4da20022bea();
}
function AS_Form_8377004e77624c938733b4da20022bea() {
var orderDetailsKA = function(){
      frmCompleteOrderSummaryKA.show();
};

var orderattachmentsKA = function(){
      frmOrderAttachmentsKA.show();
}

var orderResourcesListKA = function(){
      frmOrderResourcesListKA.show();
                
}
var completeOrderKA = function(){
      alert("Not implemented in current release");
}

var widgets=[
{"src" : "bf_details.png","ontouch":orderDetailsKA},
{"src" : "bf_order_ex_attachments.png","ontouch":orderattachmentsKA},
{"src" : "bf_order_ex_history.png","ontouch":completeOrderKA},
{"src" : "bf_resources.png","ontouch":orderResourcesListKA}
];


addToScroll(frmCompleteOrderKA,"flxScrollTypesKA",widgets);

}function frmCompleteOrderKAFlexOnClick() {
return AS_FlexContainer_8fa0863668fa462ea25e24b9392bd3cb();
}
function AS_FlexContainer_8fa0863668fa462ea25e24b9392bd3cb() {
undefined.show();

}function frmCompleteOrderKAFlexOnStart() {
return AS_FlexContainer_54db4e9649c34b6baca528e105953d52();
}
function AS_FlexContainer_54db4e9649c34b6baca528e105953d52() {
undefined.show();

}function frmCompleteOrderKAInit() {
return AS_Form_69eceaf1718c4bec9861c4cd8f1a51cb();
}
function AS_Form_69eceaf1718c4bec9861c4cd8f1a51cb() {
var orderDetailsKA = function(){
      frmOrderDetailsKA.show();
};

var orderattachmentsKA = function(){
      frmOrderAttachmentsKA.show();
}

var orderResourcesListKA = function(){
      frmOrderResourcesListKA.show();
                
}
var completeOrderKA = function(){
      frmCompleteOrderKA.show();
}

var widgets=[
{"src" : "bf_details.png","ontouch":orderDetailsKA},
{"src" : "bf_order_ex_attachments.png","ontouch":orderattachmentsKA},
{"src" : "bf_order_ex_history.png","ontouch":completeOrderKA},
{"src" : "bf_resources.png","ontouch":orderResourcesListKA}
];


addToScroll(frmCompleteOrderKA,"flxScrllSubMenuKA",widgets);

}function frmCompleteOrderLayerKAbtnCloseKAonClick() {
return AS_Button_cec60fd988834489ac34226587d16866();
}
function AS_Button_cec60fd988834489ac34226587d16866() {
undefined.show();

}function frmCompleteOrderSummaryFlexDescriptionOnclick() {
return AS_FlexContainer_afbfe0ad89264713a30dec128577d855();
}
function AS_FlexContainer_afbfe0ad89264713a30dec128577d855() {
undefined.show();

}function frmCompleteOrderSummaryKABtnBackKAonClick() {
return AS_Button_2946b0bc5716408fbfcaacfa00161ad5();
}
function AS_Button_2946b0bc5716408fbfcaacfa00161ad5() {
undefined.show();

}function frmContactDetailsCallKA() {
return AS_Image_025ade2a693044ffad79d11f68e34ba5();
}
function AS_Image_025ade2a693044ffad79d11f68e34ba5() {
kony.phone.sendSMS("8319823456","Your order is recieved")

}function frmContactDetailsKAbtnBackOnClick() {
return AS_Button_5a8f53ca679348238c238e94e95896b3();
}
function AS_Button_5a8f53ca679348238c238e94e95896b3() {
kony.application.getPreviousForm().show();


}function frmContactDetailsSendEmailaKA() {
return AS_Image_cf997d4edec54f4ba597584c81104b13();
}
function AS_Image_cf997d4edec54f4ba597584c81104b13() {
kony.phone.openEmail(["alekhya.oruganti@kony.com"],[],[],'Order',"Hi,\n\nYour order has been placed.\n\nRegards,\nAmrita.",true)

}function frmContactDetailssendMessageKA() {
return AS_Image_7bfd83f7af414e149763b4ec06f428e6();
}
function AS_Image_7bfd83f7af414e149763b4ec06f428e6() {
kony.phone.sendSMS("987654289","Your order has been recieved")

}function frmHamburgerMenuBtnOrderOnClick() {
return AS_FlexContainer_711d582312bb4d8cbf5c5ce7d4e2f633();
}
function AS_FlexContainer_711d582312bb4d8cbf5c5ce7d4e2f633() {
showHideHamburgerMenuKA();

}function frmHamburgerMenuWOKAMyOrderOnClick() {
return AS_FlexContainer_224080cd49194906b0e5ce57de36223f();
}
function AS_FlexContainer_224080cd49194906b0e5ce57de36223f() {
undefined.show();

}function frmLoginBtnLoginOnclick() {
return AS_Button_4491123f86b24e41b74e1080f8dfe7a7();
}
function AS_Button_4491123f86b24e41b74e1080f8dfe7a7() {
undefined.show();

}function frmMyNotificationBtnMapOnClick() {
return AS_Button_a21b91de26ae4703803968c3e05328e5();
}
function AS_Button_a21b91de26ae4703803968c3e05328e5() {
frmMyNotificationListKA.btnMapShowKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmMyNotificationListKA.btnListNotificationsKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmMyNotificationListKA.segNotificationsListKA.setVisibility(false);
frmMyNotificationListKA.mapMyNotificationsListKA.setVisibility(true);

}function frmMyNotificationKABtnListOnclick() {
return AS_Button_c0457ce42026499bbb5283c9a4db8635();
}
function AS_Button_c0457ce42026499bbb5283c9a4db8635() {
frmMyNotificationListKA.btnMapShowKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA;
frmMyNotificationListKA.btnListNotificationsKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA;
frmMyNotificationListKA.segNotificationsListKA.setVisibility(true);
frmMyNotificationListKA.mapMyNotificationsListKA.setVisibility(false);

}function frmMyNotificationKASegOnClick() {
return AS_Segment_ac5e00bc995545199204f262cbaf3cbe();
}
function AS_Segment_ac5e00bc995545199204f262cbaf3cbe() {
undefined.show();

}function frmMyNotificationListKAInit() {
return AS_Form_020cc9b38a55475cb4fe25ac2f44269e();
}
function AS_Form_020cc9b38a55475cb4fe25ac2f44269e() {
isMenuShown = false;

}function frmMyNotificationListKAViewOnClick() {
return AS_Button_24ab3b9c9eae4665abbd45a862ab609f();
}
function AS_Button_24ab3b9c9eae4665abbd45a862ab609f() {
undefined.show();

}function frmNotificationDetailflxContactDetailsOnClick() {
return AS_FlexContainer_76cc539a65224929990a18f4b1f32638();
}
function AS_FlexContainer_76cc539a65224929990a18f4b1f32638() {
undefined.show();

}function frmNotificationDetailsbtnBackonClick() {
return AS_Button_3d25b505dfb64618a5a93a589710b57f();
}
function AS_Button_3d25b505dfb64618a5a93a589710b57f() {
undefined.show();

}function frmNotificationExecutionBtnBackOnClick() {
return AS_Button_0860e84efd1041b5b278e31da7c11ac9();
}
function AS_Button_0860e84efd1041b5b278e31da7c11ac9() {
undefined.show();

}function frmNotificationExecutionDescriptionOnClick() {
return AS_FlexContainer_d34737e220ee41f2a011201d5350a374();
}
function AS_FlexContainer_d34737e220ee41f2a011201d5350a374() {
undefined.show();

}function frmNotificationExecutionKAInit() {
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

}function frmNotificationExecutionbtncompleteOnClick() {
return AS_Button_1998e5e289e84995a0b0a9f23b51d330();
}
function AS_Button_1998e5e289e84995a0b0a9f23b51d330() {
undefined.show();

}function frmNotificationFilterViewBtnCancelOnClick() {
return AS_Button_92de3d715b904567aa4aff807c93c3ae();
}
function AS_Button_92de3d715b904567aa4aff807c93c3ae() {
undefined.show();

}function frmNotificationListKAMenuOnClick() {
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

}function frmOrderAttachmentBtnBackOnClick() {
return AS_Button_048ec4bb20a84e649efa0045232ac5e5();
}
function AS_Button_048ec4bb20a84e649efa0045232ac5e5() {

}function frmOrderDetailFlexDescriptionOnTouch() {
return AS_FlexContainer_70f786f05cf7456f871bbc558eac6923();
}
function AS_FlexContainer_70f786f05cf7456f871bbc558eac6923() {

}function frmOrderDetailsContactNAv() {
return AS_Image_08bded50e8ac418b84ac6a942ad75c23();
}
function AS_Image_08bded50e8ac418b84ac6a942ad75c23() {
undefined.show();

}function frmOrderDetailsFlexContactOnTouch() {
return AS_FlexContainer_43c85bdc2601402bac82b7c76d5ff53e();
}
function AS_FlexContainer_43c85bdc2601402bac82b7c76d5ff53e() {
undefined.show();

}function frmOrderDetailsbtnBackKAOrdeExecNav() {
return AS_Button_b9ee0c3fc364451fbc16dbe866b926ba();
}
function AS_Button_b9ee0c3fc364451fbc16dbe866b926ba() {

}function frmOrderExecutionBtnCompleteOnclick() {
return AS_Button_5150ee5e44f74eb69851cf83d534e547();
}
function AS_Button_5150ee5e44f74eb69851cf83d534e547() {
undefined.show();

}function frmOrderExecutionCompleteBtnKA() {
return AS_Button_43cbcb2c05c647e7beb42b5a89d8ce94();
}
function AS_Button_43cbcb2c05c647e7beb42b5a89d8ce94() {
undefined.show();

}function frmOrderExecutionInitKA() {
return AS_Form_1c681e4f8c114bc4a664cf1d65735a52();
}
function AS_Form_1c681e4f8c114bc4a664cf1d65735a52() {
var orderDetailsKA = function(){
      frmOrderDetailsKA.show();
};

var orderAttachmentsKA = function(){
                frmOrderAttachmentsKA.show();
}

var orderResourcesKA = function(){
                 frmOrderResourcesListKA.show();
}

var orderHistoryKA = function(){
                alert("Page loading..!!");
}
var orderNotificationKA = function(){
                alert("Page loading..!!");
}

var widgets=[
{"src" : "notification_execution_details.png","ontouch":orderDetailsKA},
{"src" : "notification_execution_attachments.png","ontouch":orderAttachmentsKA},
{"src" : "bf_order_ex_history.png","ontouch":orderHistoryKA},
{"src" : "bf_resources.png","ontouch":orderResourcesKA},
{"src" : "notification_execution_photos.png","ontouch":orderNotificationKA}
];



addToScroll(frmOrderExecutionKA,"flxScrollTypesKA",widgets);

}function frmOrderExecutionKABtnCompleteOnClick() {
return AS_Button_ce0f54ae772b43ba8f34c41680c21db7();
}
function AS_Button_ce0f54ae772b43ba8f34c41680c21db7() {
undefined.show();

}function frmOrderExecutionbtnHeaderKABackNAv() {
return AS_Button_4395517375ee4dcb99ad55cee03979aa();
}
function AS_Button_4395517375ee4dcb99ad55cee03979aa() {

}function frmOrderExecutionsedDetailsKATaskExecNAv() {
return AS_Segment_f31e324dde414dc68c91d8cd5b83d097();
}
function AS_Segment_f31e324dde414dc68c91d8cd5b83d097() {

}function frmOrderLIstKABtnListOnClick() {
return AS_Button_fb3b78eabe8b47c5956b8e05ab883e46();
}
function AS_Button_fb3b78eabe8b47c5956b8e05ab883e46() {
frmOrderListKA.btnMapShowKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA;
frmOrderListKA.btnListOrderKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA;
frmOrderListKA.segOrderListKA.setVisibility(true);
frmOrderListKA.mapMyOrderListKA.setVisibility(false);

}function frmOrderListAppMenuOnClick() {
return AS_Button_123cce0c83c74b7b9f4f4bc3694f461c();
}
function AS_Button_123cce0c83c74b7b9f4f4bc3694f461c() {
showHideHamburgerMenuKA();

}function frmOrderListButtonListKA() {
return AS_Button_47b7acb929ab4414b69a52e054eac572();
}
function AS_Button_47b7acb929ab4414b69a52e054eac572() {
frmOrderListKA.btnMapKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.btnListKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.segOrderListKA.setVisibility(true);
frmOrderListKA.mapMyOrderListKA.setVisibility(false);

}function frmOrderListFilterViewOnClick() {
return AS_Button_134c7bc6ea6f48c69bab603fafd09dad();
}
function AS_Button_134c7bc6ea6f48c69bab603fafd09dad() {
undefined.show();

}function frmOrderListInit() {
return AS_Form_3b9387e0d8334c50822b2419e2f48e81();
}
function AS_Form_3b9387e0d8334c50822b2419e2f48e81() {
isMenuShown = false;

}function frmOrderListKABtnFilterView() {
return AS_Button_1518281eaa124b4f9ac491f0cceb0fdc();
}
function AS_Button_1518281eaa124b4f9ac491f0cceb0fdc() {

}function frmOrderListKABtnFilterViewKA() {
return AS_Button_aca3781673ee49329af14b77d09ac476();
}
function AS_Button_aca3781673ee49329af14b77d09ac476() {
undefined.show();

}function frmOrderListKABtnListOrderKA() {
return AS_Button_8fd456e06beb442f8a6d2902184f5550();
}
function AS_Button_8fd456e06beb442f8a6d2902184f5550() {
frmOrderListKA.btnListOrderKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.btnMapOrderKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.segOrderListKA.setVisibility(true);
frmOrderListKA.mapMyOrderListKA.setVisibility(false);

}function frmOrderListKABtnMAPKA() {
return AS_Button_ccea8aea55ae4861814323077d2f2085();
}
function AS_Button_ccea8aea55ae4861814323077d2f2085() {
frmOrderListKA.btnListOrderKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.btnMapShowKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.segOrderListKA.setVisibility(false);
frmOrderListKA.mapMyOrderListKA.setVisibility(true);

}function frmOrderListKABtnMapOnClick() {
return AS_Button_2854093eab7e4a148488e88e4fd4b39b();
}
function AS_Button_2854093eab7e4a148488e88e4fd4b39b() {
frmOrderListKA.btnMapShowKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.btnListOrderKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.segOrderListKA.setVisibility(false);
frmOrderListKA.mapMyOrderListKA.setVisibility(true);

}function frmOrderListKABtnMapShowKA() {
return AS_Button_f1a99f4e0829457d97096d9eba01fbec();
}
function AS_Button_f1a99f4e0829457d97096d9eba01fbec() {
frmOrderListKA.btnListOrderKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.btnMapShowKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.segOrderListKA.setVisibility(false);
frmOrderListKA.mapMyOrderListKA.setVisibility(true);

}function frmOrderListKABtnMapViewKA() {
return AS_Button_4c528c5366444197a8b32c648427dcef();
}
function AS_Button_4c528c5366444197a8b32c648427dcef() {
frmOrderListKA.btnMapViewKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.btnListOrderKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.segOrderListKA.setVisibility(true);
frmOrderListKA.mapMyOrderListKA.setVisibility(false);

}function frmOrderListKABtnMenuOnClick() {
return AS_Button_735a581f418a4eb98a338edc07554b34();
}
function AS_Button_735a581f418a4eb98a338edc07554b34() {
showHideHamburgerMenuKA();

}function frmOrderListKABtnViewFilterListKA() {
return AS_Button_67ce900307f04c87b0228045017918ec();
}
function AS_Button_67ce900307f04c87b0228045017918ec() {
undefined.show();

}function frmOrderListKAInit() {
return AS_Form_6d6e5588f6b34703b27f0078b3e6954d();
}
function AS_Form_6d6e5588f6b34703b27f0078b3e6954d() {
isMenuShown = false;

}function frmOrderListKAbtnListKAclick() {
return AS_Button_d45dd2e7cdd34fa0b0eabb13621967e4();
}
function AS_Button_d45dd2e7cdd34fa0b0eabb13621967e4() {
frmOrderListKA.btnMapShowKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.btnListOrderKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.segOrderListKA.setVisibility(true);
frmOrderListKA.mapMyOrderListKA.setVisibility(false);

}function frmOrderListKAbuttonMapKAOnClick() {
return AS_Button_4d8f72e0462c4ef180fe10d865ea9278();
}
function AS_Button_4d8f72e0462c4ef180fe10d865ea9278() {
frmOrderListKA.btnListKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.btnMapKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.segOrderListKA.setVisibility(false);
frmOrderListKA.mapMyOrderListKA.setVisibility(true);

}function frmOrderListSegOnClick() {
return AS_Segment_988bf1419a784bdfb7f436f5b03aaefa();
}
function AS_Segment_988bf1419a784bdfb7f436f5b03aaefa() {

}function frmOrderListbtnMapOrderKA() {
return AS_Button_c135a766b64d42e4a9f3c935d062f42d();
}
function AS_Button_c135a766b64d42e4a9f3c935d062f42d() {
frmOrderListKA.btnMapOrderKA.skin=sknBtnFFFFFFClanProNews28BackgroundFF5D6EKA
frmOrderListKA.btnListOrderKA.skin=sknBtnFF5D6EClanProNews28BackgroundFFFFFFKA
frmOrderListKA.segOrderListKA.setVisibility(false);
frmOrderListKA.mapMyOrderListKA.setVisibility(true);

}function frmOrderResourceDetailsKABtnBackKAonClick() {
return AS_Button_e7f606a2e495416a9fbe2eaf984cbe7a();
}
function AS_Button_e7f606a2e495416a9fbe2eaf984cbe7a() {
undefined.show();

}function frmOrderResourceListKABtnBackKAOnClick() {
return AS_Button_f2184a9e3ac44cda85a1e4c281e9d817();
}
function AS_Button_f2184a9e3ac44cda85a1e4c281e9d817() {
frmRequestExecutionKA.show();

}function frmOrderResourceListKABtnOptionsKAOnClick() {
return AS_Button_99a6758b0d1e4e46b8eb3c087fb73eb1();
}
function AS_Button_99a6758b0d1e4e46b8eb3c087fb73eb1() {
undefined.show();

}function frmOrderResourceListKASegDetailsKAOnRowClick() {
return AS_Segment_0d2602d9ad1d4c929cb732f7b9b97848();
}
function AS_Segment_0d2602d9ad1d4c929cb732f7b9b97848() {
undefined.show();

}function frmOrderResourcesListKAImgSearchKAOnTouchEnd() {
return AS_Image_9168c32e1008420da979b2f632e1f8bc();
}
function AS_Image_9168c32e1008420da979b2f632e1f8bc() {
undefined.show();

}function frmOrderViewKAbtnCancelonClick() {
return AS_Button_3d989ac1eab4409ab4369553eaae1706();
}
function AS_Button_3d989ac1eab4409ab4369553eaae1706() {

}function frmOrdersViewsKABtnCancelKAOnClick() {
return AS_Button_9ef11ad23b0448b1aafc7138c209e4a6();
}
function AS_Button_9ef11ad23b0448b1aafc7138c209e4a6() {
undefined.show();

}function frmOrdersViewsKAsegOrderViewKAOnRowClick() {
return AS_Segment_7da3e316f8ff400fb42884068365d860();
}
function AS_Segment_7da3e316f8ff400fb42884068365d860() {
undefined.show();

}function frmReourceExecutionAddKABtnBackKAonClick() {
return AS_Button_2da190508ce84c099f90cf742d16ac1b();
}
function AS_Button_2da190508ce84c099f90cf742d16ac1b() {
undefined.show();

}function frmResourceDetailsDesciptionKABtnBackKAonClick() {
return AS_Button_70b23c8b0789407a8ff806e6a8f0b2ed();
}
function AS_Button_70b23c8b0789407a8ff806e6a8f0b2ed() {
kony.application.getPreviousForm().show();


}function frmResourceExecutionAddBtnAddKAOnTouchStart() {
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

}function frmResourceExecutionBtnAddKAOnClick() {
return AS_Button_b0611922231a4aac9be31e38a26ec6bd();
}
function AS_Button_b0611922231a4aac9be31e38a26ec6bd() {
undefined.show();

}function frmResourceExecutionInit() {
return AS_Form_2e2ac0d232484b6ab676dd40a2ebe183();
}
function AS_Form_2e2ac0d232484b6ab676dd40a2ebe183() {
var orderResourceDetailsKA = function(){
      frmOrderResourceDetailsKA.show();
};

var stockDetailsKA = function(){
                alert("not implemented in current release");
}

var attachmentKA = function(){
                // write your code here
  frmOrderAttachmentsKA.show();
}

var attachPhotoKA = function(){
                alert("not implemented in current release");
}

var widgets=[
{"src" : "bf_details.png","ontouch": orderResourceDetailsKA},
{"src" : "bf_resource_ex_stock_info.png","ontouch": stockDetailsKA },
{"src" : "bf_order_ex_attachments.png","ontouch":attachmentKA},
{"src" : "notification_add_photo.png","ontouch": attachPhotoKA }
];


addToScroll(frmResourceExecutionKA,"FlexScrollContainerOptionsKA",widgets);

}function frmResourceExecutionKADescriptionFlexOnClick() {
return AS_FlexContainer_3ed76180f1774c92afbd265c9e8b880d();
}
function AS_FlexContainer_3ed76180f1774c92afbd265c9e8b880d() {
undefined.show();

}function frmResourceExecutionbtnBackKAonClick() {
return AS_Button_26efaf57b30b4cee9c07fdf4125db4eb();
}
function AS_Button_26efaf57b30b4cee9c07fdf4125db4eb() {
frmRequestExecutionKA.show();

}function frmTaskDetailKABtnBackOnClick() {
return AS_Button_f729c21198da49d7b088f1c26deccd7b();
}
function AS_Button_f729c21198da49d7b088f1c26deccd7b() {

}function frmTaskDetailsKABtnBackKAOnclick() {
return AS_Button_d8411d8a5c6a4939945a27f341f0479c();
}
function AS_Button_d8411d8a5c6a4939945a27f341f0479c() {
undefined.show();

}function frmTaskExecutionKABtnBackOnClick() {
return AS_Button_26350ce8d3dc48ac9899bfd377123268();
}
function AS_Button_26350ce8d3dc48ac9899bfd377123268() {
frmRequestExecutionKA.show();

}function frmTaskExecutionKABtnCompleteOnClick() {
return AS_Button_a1aa2d0228eb4ec1a69b753b5b5230b1();
}
function AS_Button_a1aa2d0228eb4ec1a69b753b5b5230b1() {
frmRequestExecutionKA.show();

}function frmTaskExecutionKASegOnClick() {
return AS_Segment_7258d7bf94b041289bb2140d215c7c8c();
}
function AS_Segment_7258d7bf94b041289bb2140d215c7c8c() {
undefined.show();

}function frmTaskResourcesBtnBack() {
return AS_Button_532df31cb50347cc95b5f2d0256544e8();
}
function AS_Button_532df31cb50347cc95b5f2d0256544e8() {
undefined.show();

}function frmTaskResourcesBtnFilterViewOnClick() {
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

}function frmTaskResourcesKABtnBarcodeOnTouch() {
return AS_Image_af225e56e05c434ea39703b15cebd090();
}
function AS_Image_af225e56e05c434ea39703b15cebd090() {
undefined.show();

}function frmTaskResourcesSegOnClick() {
return AS_Segment_94fcca27069b4c339582b0004efcdc28();
}
function AS_Segment_94fcca27069b4c339582b0004efcdc28() {
undefined.show();

}function frmTaskViewFilterKAbtnCancelonClick() {
return AS_Button_2c1d65a67823493b8941c92f5ac76323();
}
function AS_Button_2c1d65a67823493b8941c92f5ac76323() {
undefined.show();

}function frmTaskViewFiltersKABtnCancelKAOnclick() {
return AS_Button_ec7d5fc3a83f4a4b9919fb9651222576();
}
function AS_Button_ec7d5fc3a83f4a4b9919fb9651222576() {
undefined.show();

}function frmTaskexecutionKAInit() {
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

}function frmompleteOrderBtnDoneKAOnClick() {
return AS_Button_3cd0dcfcd88644f3b7395388d72cfb89();
}
function AS_Button_3cd0dcfcd88644f3b7395388d72cfb89() {
configureLayerKA();

}