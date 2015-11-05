function launchBarcodeCapture()
{
      barcode.captureBarcode(barcodeCapCallback)
}

function barcodeCapCallback(barcodeData, androidScannedText)
{
     //kony.print("****************** Inside barcodeCapCallback -> barcode Data: " + barcodeData)
     var PlatformName=kony.os.deviceInfo().name; 
     if(kony.string.startsWith(PlatformName, "android", true)== true){		
		
	//	alert(androidScannedText);
		kony.print("barcode data responce ***"+androidScannedText);
		var responce = androidScannedText;
	    kony.print("barcode data responce 3 ***"+responce);
	    responce=replaceAllBackSlash(responce);
	     kony.print("barcode data responce 4 ***"+responce);
	    obj = JSON.parse(responce);
	    kony.print("barcode data responce 5 ***"+obj);
		kony.print("***User name ****\n"+obj.user);
		kony.print("***Password ****\n"+obj.password);
		kony.print("***InstanceID ****\n"+obj.InstanceID);
		
		username=obj.user;
		password=obj.password;
		InstanceID=obj.url;
		var preUrl = new RegExp("http");
		var postUrl = new RegExp(".com");
        var resPre = preUrl.test(InstanceID);
        var resPost = postUrl.test(InstanceID);
		var UrlFormat = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		
		if(!(UrlFormat.test(InstanceID)))
		{
		  if(!resPre){
		    InstanceID="http://"+InstanceID;
		  }
		  if(!resPost){
		   //  InstanceID=InstanceID+".testdrive.kony.com:8080/appconfig";
           InstanceID=InstanceID+".testdrive.kony.com:8080/authService/100000002/appconfig";
  
		  }  
		}
		else{
		kony.print("***InstanceID ****\n"+InstanceID);
		}
		
		frmLoginKA.tbxCRMUserIDKA.text=username;
		frmLoginKA.tbxCRMPasswordKA.text=password;
		//frmLoginKA.tbxCRMUserIDKA.text=username;
		//frmLoginKA.tbxCRMPasswordKA.text=password;
		frmUrl.txtBoxUrl.text=InstanceID;
		
		
	} else if(kony.string.startsWith(PlatformName, "iphone")== true){
	
		//alert(barcodeData.barcodestring);
		kony.print("barcode data responce ***"+barcodeData.barcodestring);
		var responce = barcodeData.barcodestring;
	    kony.print("barcode data responce 3 ***"+responce);
	    responce=replaceAllBackSlash(responce);
	     kony.print("barcode data responce 4 ***"+responce);
	    obj = JSON.parse(responce);
	    kony.print("barcode data responce 5 ***"+obj);
		kony.print("***User name ****\n"+obj.user);
		kony.print("***Password ****\n"+obj.password);
		kony.print("***InstanceID ****\n"+obj.InstanceID);
		
		username=obj.user;
		password=obj.password;
		InstanceID=obj.url;
		var preUrl = new RegExp("http");
		var postUrl = new RegExp(".com");
        var resPre = preUrl.test(InstanceID);
        var resPost = postUrl.test(InstanceID);
		var UrlFormat = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		
		if(!(UrlFormat.test(InstanceID)))
		{
		  if(!resPre){
		    InstanceID="http://"+InstanceID;
		  }
		  if(!resPost){
		     //InstanceID=InstanceID+".testdrive.kony.com:8080/appconfig";
             InstanceID=InstanceID+".testdrive.kony.com:8080/authService/100000002/appconfig";
		  }  
		}
		else{
		kony.print("***InstanceID ****\n"+InstanceID);
		}
		
		
		frmLoginKA.tbxCRMUserIDKA.text=username;
		frmLoginKA.tbxCRMPasswordKA.text=password;
		frmLoginKA.txtUrl.text=InstanceID;
		frmUrl.txtBoxUrl.text=InstanceID;
		
		
		
	}
      
    
}







function barcodetest(){
        InstanceID="100000032";
        kony.print("***InstanceID ****\n"+InstanceID);
		var preUrl = new RegExp("http");
		var postUrl = new RegExp(".com");
        var resPre = preUrl.test(InstanceID);
        var resPost = postUrl.test(InstanceID);
        
        
		var UrlFormat = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		if(!(UrlFormat.test(InstanceID)))
		{
		  if(!resPre){
		    InstanceID="http://"+InstanceID;
		    kony.print("***InstanceID pre ****\n"+InstanceID);
		  }
		  if(!resPost){
		    // InstanceID=InstanceID+".testdrive.kony.com:8080/appconfig";
           InstanceID=InstanceID+".testdrive.kony.com:8080/authService/100000002/appconfig";
		     kony.print("***InstanceID  post****\n"+InstanceID);
		  }  
		}
		else{
		kony.print("***InstanceID ****\n"+InstanceID);
		}
		
		
		frmLoginKA.tbxCRMUserIDKA.text=username;
		frmLoginKA.tbxCRMPasswordKA.text=password;
		frmLoginKA.txtUrl.text=InstanceID;
		frmUrl.txtBoxUrl.text=InstanceID;
		
		}


function enterInstanceid(){
		
		InstanceID = frmUrl.txtBoxUrl.text;
		kony.print("***InstanceID ****\n"+InstanceID);
		 if(kony.os.deviceInfo().name == "iPhone" ||kony.os.deviceInfo().name == "iPhone Simulator" ||  kony.os.deviceInfo().name == "iPad"  ){
		 frmLoginKA.tbxCRMUserIDKA.text="";
		 frmLoginKA.tbxCRMPasswordKA.text="";
		 }
		
		var preUrl = new RegExp("http");
		var postUrl = new RegExp(".com");
        var resPre = preUrl.test(InstanceID);
        var resPost = postUrl.test(InstanceID);
        
        
		var UrlFormat = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		if(!(UrlFormat.test(InstanceID)))
		{
		  if(!resPre){
		    InstanceID="http://"+InstanceID;
		    kony.print("***InstanceID pre ****\n"+InstanceID);
		  }
		  if(!resPost){
		    // InstanceID=InstanceID+".testdrive.kony.com:8080/appconfig";
             InstanceID=InstanceID+".testdrive.kony.com:8080/authService/100000002/appconfig";
		     kony.print("***InstanceID  post****\n"+InstanceID);
		  }  
		}
		else{
		kony.print("***InstanceID ****\n"+InstanceID);
		}
		
		frmLoginKA.txtUrl.text=InstanceID;
}		



		
function Connect(){

		if(frmUrl.txtBoxUrl.text ==="" || frmUrl.txtBoxUrl.text ===null ){
		  
		  alert("Please enter instance ID or use a QR code scan to auto fill instance ID.");
		  return;
		}
		else{
		onetimeSetup = true;
		//alert(InstanceID);
		init();
		}
		


}