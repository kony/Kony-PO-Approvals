package com.konylabs.ffi;


import com.kony.androidffi.Scanner;
import com.konylabs.libintf.Library;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class barcode implements Library {

 
 
	public static final String scanbarcode = "scanbarcode";
 
	String[] methods = { scanbarcode };


	public barcode(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;

		switch (index) {
 		case 0:
 			if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 {
 com.konylabs.vm.Function result = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 result = (com.konylabs.vm.Function)params[0];
 }
 ret = this.scanbarcode( result );
 }
			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{LuaNil.nil, new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}

	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "barcode";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] scanbarcode( com.konylabs.vm.Function inputKey0 ){

		Object[] ret = null;
 Scanner methodInstance = new Scanner();
 android.content.Context context = com.konylabs.android.KonyMain.getActContext();
 methodInstance.scanBarcode( context , (com.konylabs.vm.Function)inputKey0
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
}

