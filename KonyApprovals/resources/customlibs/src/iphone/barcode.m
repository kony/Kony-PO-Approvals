#import "barcode.h"
#import "DataMatrixReader.h"
#import "Decoder.h"
#import "DecoderDelegate.h"
#import "KLZXingDelegate.h"
#import "MultiFormatOneDReader.h"
#import "MultiFormatUPCEANReader.h"
#import "OverlayView.h"
#import "ParsedResult.h"
#import "QRCodeReader.h"
#import "ZXingWidgetController.h"
#import "lglobals.h"
#import "konymacros.h"




 void barcode_scanbarcode_binding(ExeContext *exeCxt, int a, int b, unsigned char isTailCall) {

 LUA_PLG_NORET();
 	int curIndex	= 0;
	id arg = nil;

 
 LuaClosure* result = nil;

 
 //LuaClosure
 curIndex++;
 arg = LUA_CLOSURE_GUARD(curIndex) {
 result = [arg retain];
 } else {
 //Raise exception
 } 
 

 [KLZXingDelegate scanBarCodeWithCallback:result]; 
 
 [result release];
 
 LUA_EPI_NORET();
 }



