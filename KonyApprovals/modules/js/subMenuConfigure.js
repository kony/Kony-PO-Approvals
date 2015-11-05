function addToScroll(formName,scrollId,widgets){
                var widgetScroll = formName[scrollId];
                var widgetConfig;
                var dynamicImg;
                var basicConfImage;
                var labelConfig;var lbl;var noOfItems=widgets.length-1;
                for(var widget=0;widget<=noOfItems;widget++){
                                
                                widgetConfig = widgets[widget];
                                basicConfImage = {
                                                "id" : "btn"+widget, 
                                                "src": widgetConfig.src,
                                                "onTouchStart" :widgetConfig.ontouch,
                                                "left":(widget == 0 ? 18 : 7 + "%"),
                "height":"50%",
                "width":"9%",
                                "top" : "20%"
                                }
                                
                                labelConfig= {id:"lbl"+widget, skin:"sknLineA0B2C3KA", text:"", left: "7%",height:"53%",width:"1px",top:"20%"};
                                lbl = new kony.ui.Label(labelConfig, {}, {});
                                dynamicImg = new kony.ui.Image2(basicConfImage,{},{});
                                widgetScroll.add(dynamicImg);   
                  				if(widget!== noOfItems){
                                widgetScroll.add(lbl);    
                                }
                                
                }
}
