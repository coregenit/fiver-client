function xvlWN()
{
waJSQuery(".wa-comp").each(function(i)
{
var FFPOm=waJSQuery(this)
var vDPtc=FFPOm.attr("style")
var xaVeM=FFPOm.data("ms-opacity")
var KoEZi=waExtractCssStyle(vDPtc,"-moz-transform")
if(KoEZi.length>0)
{
var faigv=KoEZi.indexOf("(")
if(faigv>-1)
{
KoEZi=KoEZi.substring(faigv+1)
faigv=KoEZi.indexOf("deg")
if(faigv>-1)
{
KoEZi=KoEZi.substring(0,faigv)
}
}
KoEZi=parseInt(KoEZi)
var PrqdL=0;
var VBTwd=0;
var xRudf=waExtractCssStyle(vDPtc,"-ms-transform-offset") 
var HaHHt=xRudf.split(" ")
if(HaHHt.length==2)
{
PrqdL=parseInt(HaHHt[0])
VBTwd=parseInt(HaHHt[1])
}
var rad_rot=KoEZi*2*Math.PI/360;
var costheta=Math.cos(rad_rot);
var sintheta=Math.sin(rad_rot);
var M11=costheta;
var M12=-sintheta;
var M21=sintheta;
var M22=costheta;
FFPOm.css({"left":FFPOm.position().left+PrqdL,"top":FFPOm.position().top+VBTwd})
var nQtBN="progid:DXImageTransform.Microsoft.Matrix(M11="+M11+",M12="+M12+",M21="+M21+",M22="+M22+",SizingMethod='auto expand') ";
if((isNaN(xaVeM)==false)&&(xaVeM>=0)&&(xaVeM<1))
{
nQtBN+="Alpha(opacity="+Math.floor(xaVeM*100)+")"
}
FFPOm.css("filter",nQtBN) 
}
});
}
function cIHCt(FFPOm,AHjBr,JhaoX)
{
if(JhaoX==undefined)JhaoX=""
if(AHjBr&&(AHjBr!="#")&&(AHjBr!="javascript:void(0)")&&(AHjBr.indexOf("javascript:")==-1))
{
FFPOm.css("cursor","pointer")
FFPOm.data("href_ie8",AHjBr)
FFPOm.data("target_ie8",JhaoX)
FFPOm.attr("href","javascript:void(0)")
FFPOm.attr("target","")
FFPOm.click(function(){
var FFPOm=waJSQuery(this)
var AHjBr=FFPOm.data("href_ie8")
var JhaoX=FFPOm.data("target_ie8")
return waOnClick(AHjBr,{"targ":JhaoX})
});
}
}
function VcKWG()
{

waJSQuery(".wa-comp").each(function(i)
{
var FFPOm=waJSQuery(this)
var vDPtc=FFPOm.attr("style")
var xaVeM=waExtractCssStyle(vDPtc,"opacity")
var xaVeM=parseFloat(xaVeM)
if((isNaN(xaVeM)==false)&&(xaVeM>=0)&&(xaVeM<1))
{
FFPOm.css("filter","Alpha(opacity="+Math.floor(xaVeM*100)+")")
FFPOm.data("ms-opacity",xaVeM)
}
});
waJSQuery(".wa-button").each(function(i)
{
var FFPOm=waJSQuery(this)
var bKvDl=FFPOm.find(".wa-but-txt")
var KXDUG=bKvDl.parent("div")
KXDUG.css("width",bKvDl.width())
if(FFPOm.height()<KXDUG.height())
{
var QKQKj=(FFPOm.width()-KXDUG.width())/2
var kOnNp=(FFPOm.height()-KXDUG.height())/2 
KXDUG.css({"position":"absolute","left":QKQKj,"top":kOnNp})
}

});

{
waJSQuery(".wa-dynmenu").each(function(i)
{
var FFPOm=waJSQuery(this)
var ggQnL=waGetJsonCss(FFPOm,"config");
if(ggQnL.vertical)
{
var BKOMZ=FFPOm.find("TD")
BKOMZ.each(function(i)
{
var SUDkX=waJSQuery(this)
var uIUfU=SUDkX.height()
uIUfU=uIUfU-2
SUDkX.css({"line-height":uIUfU+"px","height":uIUfU+"px"})
})
}
});
}
xvlWN()
}
function waPatchIE()
{
if(isMSIE()==false)
{
return;
}
if(isMSIE_lower_than_ie9())
{
VcKWG()
}

}
