<!--
 
waJSQuery(function(){
waJSQuery.fn.extend({
disableSelection:function(){
this.each(function(){
this.onselectstart=function(){return false;};
this.unselectable="on";
waJSQuery(this).css('-moz-user-select','none');
waJSQuery(this).css('-webkit-user-select','none');
});
}
});
waJSQuery.fn.extend({everyTime:function(interval,label,fn,times,belay){return this.each(function(){waJSQuery.timer.add(this,interval,label,fn,times,belay);});},oneTime:function(interval,label,fn){return this.each(function(){waJSQuery.timer.add(this,interval,label,fn,1);});},stopTime:function(label,fn){return this.each(function(){waJSQuery.timer.remove(this,label,fn);});}});waJSQuery.extend({timer:{guid:1,global:{},regex:/^([0-9]+)\s*(.*s)?$/,powers:{
'ms':1,'cs':10,'ds':100,'s':1000,'das':10000,'hs':100000,'ks':1000000},timeParse:function(value){if(value==undefined||value==null) return null;var result=this.regex.exec(waJSQuery.trim(value.toString()));if(result[2]){var num=parseInt(result[1],10);var mult=this.powers[result[2]]||1;return num*mult;}else{return value;}},add:function(element,interval,label,fn,times,belay){var counter=0;if(waJSQuery.isFunction(label)){if(!times) times=fn;fn=label;label=interval;}interval=waJSQuery.timer.timeParse(interval);if(typeof interval!='number'||isNaN(interval)||interval<=0) return;if(times&&times.constructor!=Number){belay=!!times;times=0;}times=times||0;belay=belay||false;if(!element.$timers) element.$timers={};if(!element.$timers[label]) element.$timers[label]={};fn.$timerID=fn.$timerID||this.guid++;var handler=function(){if(belay&&this.inProgress) return;this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false) waJSQuery.timer.remove(element,label,fn);this.inProgress=false;};handler.$timerID=fn.$timerID;if(!element.$timers[label][fn.$timerID]) element.$timers[label][fn.$timerID]=window.setInterval(handler,interval);if(!this.global[label]) this.global[label]=[];this.global[label].push(element);},remove:function(element,label,fn){var timers=element.$timers,ret;if(timers){if(!label){for(label in timers) this.remove(element,label,fn);}else if(timers[label]){if(fn){if(fn.$timerID){window.clearInterval(timers[label][fn.$timerID]);delete timers[label][fn.$timerID];}}else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn];}}for(ret in timers[label]) break;if(!ret){ret=null;delete timers[label];}}for(ret in timers) break;if(!ret) element.$timers=null;}}}});if(waJSQuery.browser.msie) waJSQuery(window).one("unload",function(){var global=waJSQuery.timer.global;for(var label in global){var els=global[label],i=els.length;while(--i) waJSQuery.timer.remove(els[i],label);}});
if(document.internalPreview!=true)
{
waJSQuery(".wa-market-link").each(function()
{
var NwniJ=waJSQuery(this);
NwniJ.css("cursor","pointer") 
NwniJ.click(function()
{
javascript:WA_showMarketCart() 
});
});
}
});


function waParseCleanStringJSON(s)
{
var lZtIw="{"
var fAMUm="}"
var vnPrn=""
var c;
for(var i=0;i<s.length;i++)
{
c=s.charAt(i)
if(c=="\"")
{
do
{
i++;
c=s.charAt(i)
}
while(c!="\"")
}
if(c==lZtIw)
{
var YTZjP=0;
var TVnkt=true;
var GaqEq=false;
do
{
TVnkt=true;
i++;
c=s.charAt(i)
if((GaqEq==false)&&(c=="\""))
{
GaqEq=true;
}
else
if((GaqEq==true)&&(c=="\""))
{
GaqEq=false;
}
if(GaqEq==false)
{
if(c==lZtIw)
{
YTZjP++;
}
if((c!=fAMUm)||(YTZjP!=0))
{
vnPrn+=c;
}
if(YTZjP>0)
if(c==fAMUm)
{
YTZjP--;
TVnkt=false
}
}
else
{
vnPrn+=c;
}
}
while((TVnkt==false)||(c!=fAMUm)||(YTZjP!=0))
break;
}
}
vnPrn=lZtIw+vnPrn+fAMUm 
try{
return waJSQuery.parseJSON(vnPrn);
}
catch(e){
}
return null;
}
function waLoadGoogleFonts()
{
var wf=document.createElement('script');
wf.src=('https:'==document.location.protocol?'https':'http')+'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type='text/javascript';
wf.async='true';
var s=document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf,s);
}
var BrowserDetect={
init:function(){
this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(data){
for(var i=0;i<data.length;i++){
var dataString=data[i].string;
var dataProp=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(dataString){
if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(dataProp)
return data[i].identity;
}
},searchVersion:function(dataString){
var index=dataString.indexOf(this.versionSearchString);
if(index==-1) return;
return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
},dataBrowser:[
{
string:navigator.userAgent,subString:"Chrome",identity:"Chrome"
},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"
},{
string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"
},{
prop:window.opera,identity:"Opera",versionSearch:"Version"
},{
string:navigator.vendor,subString:"iCab",identity:"iCab"
},{
string:navigator.vendor,subString:"KDE",identity:"Konqueror"
},{
string:navigator.userAgent,subString:"Firefox",identity:"Firefox"
},{
string:navigator.vendor,subString:"Camino",identity:"Camino"
},{
string:navigator.userAgent,subString:"Netscape",identity:"Netscape"
},{
string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"
},{
string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"
},{
string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"
}
],dataOS:[
{
string:navigator.platform,subString:"Win",identity:"Windows"
},{
string:navigator.platform,subString:"Mac",identity:"Mac"
},{
string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"
},{
string:navigator.platform,subString:"Linux",identity:"Linux"
}
]
};
BrowserDetect.init();
function RGBColor(gkLGW)
{
this.ok=false;this.a=1.0;
if(gkLGW.charAt(0)=='#'){gkLGW=gkLGW.substr(1);}
gkLGW=gkLGW.replace(/ /g,'');
gkLGW=gkLGW.toLowerCase();
var CtcFa=[
{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,2}\.*\d{0,2})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3]),parseFloat(""+bits[4]) ];}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3])];}},{re:/^(\w{2})(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16),Math.round(parseInt(bits[4],16)*100/255)/100 ];}},{re:/^(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16) ];}}
];
for(var i=0;i<CtcFa.length;i++){
var XfNRq=CtcFa[i].re;
var TuGGJ=CtcFa[i]._process;
var iiQIv=XfNRq.exec(gkLGW);
if(iiQIv){
var SdJAm=TuGGJ(iiQIv);
this.r=SdJAm[0];this.g=SdJAm[1];this.b=SdJAm[2];this.a=SdJAm[3];
this.ok=true;
}
}
this.r=(this.r<0||isNaN(this.r))?0:((this.r>255)?255:this.r);
this.g=(this.g<0||isNaN(this.g))?0:((this.g>255)?255:this.g);
this.b=(this.b<0||isNaN(this.b))?0:((this.b>255)?255:this.b);
this.a=(this.a>1||isNaN(this.a))?1:((this.a<0)?0:this.a);
this.toRGB=function()
{
if(this.a==1)return 'rgb('+this.r+', '+this.g+', '+this.b+')';
return 'rgba('+this.r+', '+this.g+', '+this.b+','+this.a+')';
}
this.toRGB_opaque=function()
{
return 'rgb('+this.r+', '+this.g+', '+this.b+')';
}
this.TrUcQ=function(SPNnN)
{
if(SPNnN.length==1)SPNnN="0"+SPNnN
return SPNnN
}
this.toHexaOpaqueColor=function()
{
return  "#"+this.TrUcQ(this.r.toString(16))+this.TrUcQ(this.g.toString(16))+this.TrUcQ(this.b.toString(16));
}
}
function compliantColor(PDmoO)
{
if(isMSIE_lower_than_ie9())
{
if(PDmoO=="") return "";
if(PDmoO=="transparent") return "";
var eGWZE=new RGBColor(PDmoO)
if(eGWZE.a==0) return ""
return eGWZE.toHexaOpaqueColor();
}
return PDmoO;
}
function isProbablyRobot()
{
return BrowserDetect.browser.length==0
}
function isMSIE()
{
return BrowserDetect.browser=="Explorer"
}
function isFirefox()
{
return BrowserDetect.browser=="Firefox" 
}
function isChrome()
{
return BrowserDetect.browser=="Chrome"
}
function isWindowsOS()
{
if(BrowserDetect.OS.match(/windows/i)) return true;
return false;
}
function isMSIE8()
{
if((BrowserDetect.browser=="Explorer")&&(BrowserDetect.version==8))
{
return true;
}
return false;
}
function isMSIE_lower_than_ie9()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode>=9)
{
return false;
}
}
return true;
}
return false;
}
function isMSIE_higher_than_ie8()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode>=9)
{
return true;
}
}
return false;
}
return false;
}
function isWebKit()
{
if(navigator.userAgent.match(/webkit/i)) return true;
return false;
}
function isAndroidMobile()
{
if(navigator.userAgent.match(/android/i)) return true;
return false;
}
function isMobileBrowser()
{
return isAppleMobile()||isAndroidMobile();
}
function isChrome()
{
if(navigator.userAgent.match(/Chrome/i))
return true;
return false;
}
function isAppleMobile()
{
return isIPhone()||isIPad()
}
function isIPad()
{
if(navigator.userAgent.match(/iPad/i))
return true;
return false;
}
function isIPhone()
{
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))
return true;
return false;
}
function extractNum(st)
{
var len=st.length
if((len>0)&&(st.substring(len-2,len)=="px"))
{
return wa_evaluate(st.substring(0,len-2))
}
return 0;
}
function waJSONLinkToHref(NwniJ)
{
var SPNnN=""
var CArrW=NwniJ.url
var rSDaI=Translator.m_lang_for_filename
if(rSDaI.length>0)rSDaI="_"+rSDaI
CArrW=CArrW.replace(/@lng@/g,rSDaI)
var DfIRS=NwniJ.js
if(DfIRS==undefined)DfIRS=""
SPNnN+="href=\""+CArrW+"\" "
if(NwniJ.open==1)
{
SPNnN+="target="
SPNnN+="_blank "
}
if(DfIRS.length>0)
{
SPNnN+="onclick=waLaunchFunction(function(){"+DfIRS+"}) "
}
return SPNnN;
}
function waJSONLinkToOnClick(NwniJ)
{
var SPNnN=""
var CArrW=NwniJ.url
var rSDaI=Translator.m_lang_for_filename
if(rSDaI.length>0)rSDaI="_"+rSDaI
CArrW=CArrW.replace(/@lng@/g,rSDaI)
var JhaoX="";
if(NwniJ.open==1)
{
JhaoX="_blank"
}
var DfIRS=NwniJ.js
if(DfIRS==undefined)DfIRS=""
DfIRS=DfIRS.replace(/\"/g,"&quot;")
SPNnN+="onclick=\"waOnClick('"+CArrW+"',{'targ':'"+JhaoX+"'";
if(DfIRS.length>0)
{
SPNnN+=",'js':function(){"+DfIRS+"}"
}
SPNnN+="});return false;\" "
return SPNnN;
}
function waLaunchFunction(lTZvg)
{
lTZvg()
}
function waOnClick(CArrW,QEapR)
{
if(QEapR.js!=undefined)
{
try
{
QEapR.js()
}
catch(e)
{
alert('ERROR: javascript link '+QEapR.js)
}
}
if((CArrW==undefined)||(CArrW.length==0)) return;
var JhaoX=QEapR.targ;
if(JhaoX&&JhaoX.length>0)
{
if((JhaoX.length>0)&&(JhaoX!="_blank"))
{
window.frames[JhaoX].location.href=(CArrW)
}
else
{
window.open(CArrW,JhaoX)
}
}
else
{
window.location.href=(CArrW)
}
return false;
}


function waActivateDynamicLoader(AHxro,otKcZ)
{
var ZqHqw=AHxro.find(".wa-dyn-loader")
if(ZqHqw.data('timer_animation_initialized')==true)
{
return;
}
ZqHqw.data('timer_animation_initialized',true) 
if(otKcZ)
{
ZqHqw.css({"width":AHxro.width(),"height":AHxro.height()})
}
var mxDIv=65
var hKjBT=500;
var fsFLP=ZqHqw.children("img")
ZqHqw.everyTime(mxDIv,function(i)
{
var VoDIU=waJSQuery(this).data("anim_delay_img")
if(VoDIU==undefined)VoDIU=mxDIv;
if(VoDIU>=hKjBT)
{
fsFLP.show()
}
var XYKwD=ZqHqw.data("anim_frm")
if(XYKwD==undefined)XYKwD=0;
var ZbLTP=40
var bKuut=0;
var Ddcvf=XYKwD*ZbLTP
var cbfag=bKuut+ZbLTP;
var qOkoX=Ddcvf+ZbLTP;;
var kMxki=(waJSQuery(this).width()-ZbLTP)/2
var vnEYS=(waJSQuery(this).height()-ZbLTP)/2
fsFLP.css({"left":kMxki,"top":-Ddcvf+vnEYS})
fsFLP.css({"clip":"rect("+Ddcvf+"px,"+cbfag+"px,"+qOkoX+"px,"+bKuut+"px)"})
XYKwD=(XYKwD+1)%12
waJSQuery(this).data("anim_frm",XYKwD)
VoDIU+=mxDIv
waJSQuery(this).data("anim_delay_img",VoDIU)
});
}
function htmlDynamicLoader(cgfou,tKTAa,YmMYO)
{
var SPNnN=""
SPNnN+="<div class='wa-dyn-loader' style=\"";
if(cgfou)
{
SPNnN+="position:absolute;left:0px;top:0px;"
}
else
{
SPNnN+="position:relative;left:0px;top:0px;"
}
SPNnN+="width:"+tKTAa+"px;height:"+YmMYO+"px;"
SPNnN+="overflow:hidden;" 
var n=0
var ZbLTP=40
var bKuut=0;
var Ddcvf=n*ZbLTP
var cbfag=bKuut+ZbLTP;
var qOkoX=Ddcvf+ZbLTP;;
SPNnN+=";\">"
SPNnN+="<img style=\"position:absolute;border:none;left:0px;top:0px;";
SPNnN+="display:none;"
SPNnN+="clip:rect("+Ddcvf+"px,"+cbfag+"px,"+qOkoX+"px,"+bKuut+"px);"
SPNnN+="\" ";
SPNnN+="src=\"wa_loading.png\" />"
SPNnN+="</div>"
return SPNnN;
}
function Size(lx,ly)
{
this.tKTAa=lx;this.YmMYO=ly;
this.width=function(){return this.tKTAa}
this.height=function(){return this.YmMYO}
this.clone=function(){return new Size(this.tKTAa,this.YmMYO)}
this.greaterThan=function(SPNnN){if(SPNnN==undefined) return null;return(this.tKTAa>SPNnN.tKTAa)&&(this.YmMYO>SPNnN.YmMYO)}
this.toString=function()
{
return this.width()+"x"+this.height()
}
this.scale=function(ixYTh,VZkLN)
{
if(!VZkLN)VZkLN=false
var ZbLTP=this;
var XEduR=ZbLTP.width()
var eeQDE=ZbLTP.height()
var p1=XEduR*ixYTh.height();
var p2=ixYTh.width()*eeQDE;
var r1=XEduR/eeQDE;
var r2=eeQDE/XEduR;
var newSize1=new Size(ixYTh.height()*r1,ixYTh.height());
var newSize2=new Size(ixYTh.width(),ixYTh.width()*r2);
if(p2>p1)
{
if((VZkLN==true)||((newSize1.width()<=ZbLTP.width())&&(newSize1.height()<=ZbLTP.height())))
{
ZbLTP.tKTAa=Math.round(newSize1.width());
ZbLTP.YmMYO=Math.round(newSize1.height());
}
}
else
{
if((VZkLN==true)||((newSize2.width()<=ZbLTP.width())&&(newSize2.height()<=ZbLTP.height())))
{
ZbLTP.tKTAa=Math.round(newSize2.width());
ZbLTP.YmMYO=Math.round(newSize2.height());
}
}
this.tKTAa=ZbLTP.width();
this.YmMYO=ZbLTP.height();
return true;
}
this.scaleByExpanding=function(ixYTh)
{
var ZbLTP=this;
var XEduR=ZbLTP.width()
var eeQDE=ZbLTP.height()
var p1=XEduR*ixYTh.height();
var p2=ixYTh.width()*eeQDE;
var r1=XEduR/eeQDE;
var r2=eeQDE/XEduR;
var newSize1=new Size(ixYTh.height()*r1,ixYTh.height());
var newSize2=new Size(ixYTh.width(),ixYTh.width()*r2);
if(p2<p1)
{
if((newSize1.width()<=ZbLTP.width())&&(newSize1.height()<=ZbLTP.height()))
{
ZbLTP.tKTAa=Math.round(newSize1.width());
ZbLTP.YmMYO=Math.round(newSize1.height());
}
}
else
{
if((newSize2.width()<=ZbLTP.width())&&(newSize2.height()<=ZbLTP.height()))
{
ZbLTP.tKTAa=Math.round(newSize2.width());
ZbLTP.YmMYO=Math.round(newSize2.height());
}
}
this.tKTAa=ZbLTP.width();
this.YmMYO=ZbLTP.height();
return true;
}
}
function Point(p_x,p_y){this.x=p_x;this.y=p_y;
this.translate=function(wwAal,nZdrq){this.x+=wwAal;this.y+=nZdrq;}
this.clone=function(){return new Point(this.x,this.y)}
}
function Rect(p_x,p_y,lx,ly)
{
this.x=p_x;this.y=p_y;this.width=lx;this.height=ly;
this.clone=function(){return new Rect(this.x,this.y,this.width,this.height)}
this.equals=function(FFPOm){return(this.x==FFPOm.x)&&(this.y==FFPOm.y)&&(this.width==FFPOm.width)&&(this.height==FFPOm.height);}
this.copy=function(FFPOm){this.x=FFPOm.x;this.y=FFPOm.y;this.width=FFPOm.width;this.height=FFPOm.height;}
this.translate=function(wwAal,nZdrq){this.x+=wwAal;this.y+=nZdrq;}
this.isValid=function(){return(this.width>0)&&(this.height>0);}
}
var MoRiw=[
{acc:"e",l:["é","è","ë"]},{acc:"a",l:["à","ä","â","ã"]},{acc:"u",l:["ü","û"]},{acc:"c",l:["ç"]},{acc:"o",l:["ö","ô"]}
];
function removeAccentsFromString(s)
{
var res=s.toLowerCase();
for(var i=0;i<MoRiw.length;i++)
{
var array2=MoRiw[i].l;
for(var i2=0;i2<array2.length;i2++)
{
var reg=new RegExp(array2[i2],"g");
res=res.replace(reg,MoRiw[i].acc)
}
}
return res;
}
function IsNumeric(oHZPD)
{
var XPGOu="0123456789.";var QUQGU=true;var ncVxu;
for(SEHhk=0;SEHhk<oHZPD.length&&QUQGU==true;SEHhk++){ncVxu=oHZPD.charAt(SEHhk);if(XPGOu.indexOf(ncVxu)==-1) QUQGU=false;}
return QUQGU;
}
function getDocumentSize()
{
return new Size(waJSQuery(document).width(),waJSQuery(document).height());
}
function getWindowSize()
{
if(isAppleMobile())
{
return new Size(window.innerWidth,window.innerHeight);
}
return new Size(waJSQuery(window).width(),waJSQuery(window).height());
}
function urlSuffixe(mxDIv_minuts)
{
var vhZSW=mxDIv_minuts*60;
var ZeCNN=new Date();
var VFpjO=0;
VFpjO+=ZeCNN.getYear()*12*31*24*60*60;
VFpjO+=ZeCNN.getMonth()*31*24*60*60;
VFpjO+=ZeCNN.getDate()*24*60*60;
VFpjO+=ZeCNN.getHours()*60*60;
VFpjO+=ZeCNN.getMinutes()*60;
VFpjO+=ZeCNN.getSeconds();
if(vhZSW!=0)
{
VFpjO=Math.floor(VFpjO/vhZSW)*vhZSW
}
return "-"+VFpjO;
}
function urlAntiCacheForPreview()
{
if(document.webaca_is_preview) return urlSuffixe(0);
return "";
}
function HxdKD()
{
var njdOG=document.getElementsByTagName("A");
for(var SEHhk=0;SEHhk<njdOG.length;SEHhk++)
{
var FFPOm=njdOG[SEHhk];
if(FFPOm.onmouseover)FFPOm.onmouseover=null;
if(FFPOm.onmouseout)FFPOm.onmouseout=null;
}
}
function TlHTf()
{
for(var faigv in document.wa_global_list_element)
{
var GQHAV=document.wa_global_list_element[faigv]
var pfVPa=document.getElementById(GQHAV)
pfVPa.onclick=function()
{
WA_focus(this)
}
}
}
function WA_declare(GQHAV)
{
if(!document.wa_global_list_element)
{
document.wa_global_list_element=new Array();;
}
document.wa_global_list_element.push(GQHAV)
}
function ZwaCo()
{
var CArrW=window.location.search;
if(CArrW.substr(0,1)=="?")CArrW=CArrW.substr(1);
if(CArrW.length==0)return;
var mOKfG=new Array();
var ErIcm=CArrW.split("&");
for(var i=0;i<ErIcm.length;i++)
{
var uRPEF=ErIcm[i].split("=");mOKfG[uRPEF[0]]=uRPEF[1];
}
var SPNnN_info=mOKfG["wa_key"];
if(!SPNnN_info)return;
var oxorc=new Array();
oxorc.m_unid=SPNnN_info;
oxorc.m_index_item=-1;
var SEOUk_sep_info=SPNnN_info.indexOf("-");
if(SEOUk_sep_info!=-1)
{
oxorc.m_unid=SPNnN_info.substring(0,SEOUk_sep_info);
oxorc.m_index_item=parseInt(SPNnN_info.substring(SEOUk_sep_info+1));
}
document.wa_global_query_info=oxorc;
}
function IS_onload_WA()
{
if(isAppleMobile())
{
HxdKD()
}
else
{
TlHTf()
}
ZwaCo();

rSkTP()
}
function rSkTP()
{
var EjaXl=0;
var jtApt=document.webaca_banner_height;
var vtHmR=document.webaca_page_option_background
if(document.webaca_page_is_centered)
{
var qrTOZ=getDocumentSize().width() 

var boxKH=document.webaca_width_page
if((vtHmR==0)||(vtHmR==1))
{
if(qrTOZ>boxKH)EjaXl=(qrTOZ-boxKH)/2;
}
else
if(vtHmR==2)
{
}
else
if(vtHmR==3) 
{
EjaXl=qrTOZ/2-(document.webaca_page_background_img_size[0]/2);
}
}
if(document.body&&document.body.style)
document.body.style.backgroundPosition=EjaXl+"px "+jtApt+"px";
}
waJSQuery(window).resize(function(){
rSkTP()
});


function WA_loadMessages()
{
for(var k in CONST_WA_TR)
{
var key=CONST_WA_TR[k]
Translator.m_tr[key[0]]=key[1]
}
for(var n=0;n<CONST_WA_COUNTRIES.codes.length;n++)
{
var ZluMR=CONST_WA_COUNTRIES.codes[n]
var BBkxp=CONST_WA_COUNTRIES.labels[n]
Translator.m_countries[ZluMR]=BBkxp
}
}
function Translator()
{
}
Translator.m_tr=new Array();
Translator.m_countries=new Array();
Translator.tr=function(k,bEncodeBr)
{
try
{
var v=Translator.m_tr[k]
if((v==undefined)||(v.length==0))return "@"+k;
if(bEncodeBr!=false)
{
v=v.replace(/\n/g,"<br>")
}
return v
}
catch(e){}
return k;
}
Translator.country=function(k)
{
try
{
var v=Translator.m_countries[k]
if((v==undefined)||(v.length==0))return "@"+k;
return v
}
catch(e){}
return k;
}

function isOperaBrowser()
{
return(/opera/i.test(navigator.userAgent))
}
function WA_exec_callback_opera_compliant(TelYE,WIIFe)
{
WIIFe.call(TelYE)
}
function WA_exec_delayedCallback(TelYE,WIIFe)
{
wa_timeout(Delegate.create(TelYE,WIIFe),0);
}
function WA_loadScript(url,callback,params)
{
var e=document.createElement("script");
e.src=url;
e.type="text/javascript";
e.onerror=function(){callback(params,false);}
if(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)){
e.onreadystatechange=function(){
if((this.readyState=='complete')||(this.readyState=='loaded')){
callback(params,true);
}
}
}else
{
e.onload=function(){
if(/opera/i.test(navigator.userAgent))
wa_timeout(callback,0,params,true);
else
callback(params,true);
}
}
document.getElementsByTagName("head")[0].appendChild(e);
}
function WA_onSearch(GQHAV_input)
{
var JowVc=document.getElementById(GQHAV_input);
if(document.wa_search_js_loaded==true)
{
WA_openSearchDialog(JowVc,document.const_wa_search_index_js)
}
else
{
WA_Dialog.progress();
NuLSQ(JowVc)
}
}
function NIYUl(kfrJV)
{
document.wa_search_js_loaded=true
WA_openSearchDialog(kfrJV[0],document.const_wa_search_index_js)
}
function NuLSQ(JowVc_field)
{
WA_loadScript(document.const_wa_search_js,NIYUl,[JowVc_field])
}
function YgCax(offset){
var endstr=document.cookie.indexOf(";",offset);
if(endstr==-1)
endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));
}
function WA_GetCookie(name)
{
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while(i<clen)
{
var j=i+alen;
if(document.cookie.substring(i,j)==arg)
return YgCax(j);
i=document.cookie.indexOf(" ",i)+1;
if(i==0) break;
}
return "";
}
function WA_SetCookie(name,value){
var argv=WA_SetCookie.arguments;
var argc=WA_SetCookie.arguments.length;
var expires=(argc>2)?argv[2]:null;
var path=(argc>3)?argv[3]:null;
var domain=(argc>4)?argv[4]:null;
var secure=(argc>5)?argv[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
}

function MD5(string){
function RotateLeft(lValue,iShiftBits){
return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));
}
function AddUnsigned(lX,lY){
var lX4,lY4,lX8,lY8,lResult;
lX8=(lX&0x80000000);
lY8=(lY&0x80000000);
lX4=(lX&0x40000000);
lY4=(lY&0x40000000);
lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);
if(lX4&lY4){
return(lResult^0x80000000^lX8^lY8);
}
if(lX4|lY4){
if(lResult&0x40000000){
return(lResult^0xC0000000^lX8^lY8);
}else{
return(lResult^0x40000000^lX8^lY8);
}
}else{
return(lResult^lX8^lY8);
}
}
function F(x,y,z){return(x&y)|((~x)&z);}
function G(x,y,z){return(x&z)|(y&(~z));}
function H(x,y,z){return(x^y^z);}
function I(x,y,z){return(y^(x|(~z)));}
function FF(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function GG(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function HH(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function II(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function ConvertToWordArray(string){
var lWordCount;
var lMessageLength=string.length;
var lNumberOfWords_temp1=lMessageLength+8;
var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;
var lNumberOfWords=(lNumberOfWords_temp2+1)*16;
var lWordArray=Array(lNumberOfWords-1);
var lBytePosition=0;
var lByteCount=0;
while(lByteCount<lMessageLength){
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));
lByteCount++;
}
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);
lWordArray[lNumberOfWords-2]=lMessageLength<<3;
lWordArray[lNumberOfWords-1]=lMessageLength>>>29;
return lWordArray;
};
function WordToHex(lValue){
var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
for(lCount=0;lCount<=3;lCount++){
lByte=(lValue>>>(lCount*8))&255;
WordToHexValue_temp="0"+lByte.toString(16);
WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
}
return WordToHexValue;
};
function Utf8Encode(string){
string=string.replace(/\r\n/g,"\n");
var utftext="";
for(var n=0;n<string.length;n++){
var c=string.charCodeAt(n);
if(c<128){
utftext+=String.fromCharCode(c);
}
else if((c>127)&&(c<2048)){
utftext+=String.fromCharCode((c>>6)|192);
utftext+=String.fromCharCode((c&63)|128);
}
else{
utftext+=String.fromCharCode((c>>12)|224);
utftext+=String.fromCharCode(((c>>6)&63)|128);
utftext+=String.fromCharCode((c&63)|128);
}
}
return utftext;
};
var x=Array();
var k,AA,BB,CC,DD,a,b,c,d;
var S11=7,S12=12,S13=17,S14=22;
var S21=5,S22=9,S23=14,S24=20;
var S31=4,S32=11,S33=16,S34=23;
var S41=6,S42=10,S43=15,S44=21;
string=Utf8Encode(string);
x=ConvertToWordArray(string);
a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;
for(k=0;k<x.length;k+=16){
AA=a;BB=b;CC=c;DD=d;
a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);
d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);
c=FF(c,d,a,b,x[k+2],S13,0x242070DB);
b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);
a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);
d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);
c=FF(c,d,a,b,x[k+6],S13,0xA8304613);
b=FF(b,c,d,a,x[k+7],S14,0xFD469501);
a=FF(a,b,c,d,x[k+8],S11,0x698098D8);
d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);
c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);
d=GG(d,a,b,c,x[k+6],S22,0xC040B340);
c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);
a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);
d=GG(d,a,b,c,x[k+10],S22,0x2441453);
c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);
a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);
d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);
b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);
a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);
c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);
b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);
d=HH(d,a,b,c,x[k+8],S32,0x8771F681);
c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);
d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);
c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);
b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);
c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);
b=HH(b,c,d,a,x[k+6],S34,0x4881D05);
a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);
d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);
a=II(a,b,c,d,x[k+0],S41,0xF4292244);
d=II(d,a,b,c,x[k+7],S42,0x432AFF97);
c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
b=II(b,c,d,a,x[k+5],S44,0xFC93A039);
a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);
c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
b=II(b,c,d,a,x[k+1],S44,0x85845DD1);
a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);
d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
c=II(c,d,a,b,x[k+6],S43,0xA3014314);
b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
a=II(a,b,c,d,x[k+4],S41,0xF7537E82);
d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);
b=II(b,c,d,a,x[k+9],S44,0xEB86D391);
a=AddUnsigned(a,AA);
b=AddUnsigned(b,BB);
c=AddUnsigned(c,CC);
d=AddUnsigned(d,DD);
}
var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
return temp.toLowerCase();
}
function centerTextContent(FFPOm)
{
var BBkxp=FFPOm.html()
FFPOm.html("<div class='inner-content' style='position:absolute;'></div>")
var qmZdp=FFPOm.find(".inner-content")
qmZdp.html(BBkxp)
qmZdp.css({top:(FFPOm.height()-qmZdp.height())/2,left:(FFPOm.width()-qmZdp.width())/2})
}
function centerElement(MduQC,LuTqb)
{
var fsFLP=MduQC.children(LuTqb)
fsFLP.css("left",(MduQC.width()-fsFLP.width())/2)
fsFLP.css("top",(MduQC.height()-fsFLP.height())/2)
}
function splitClassParameters(s,sep1,sep2)
{
s=jQuery.trim(s);
var arr=new Array()
var clName=""
var clParam=""
var c;
for(var i=0;i<s.length;i++)
{
c=s.charAt(i)
if((c==' ')||(c=='\n')||(c==sep2))
{
arr[clName]=clParam;
clName=""
clParam=""
}
else
if(c==sep1)
{
var YTZjP=0;
var TVnkt=true;
do
{
TVnkt=true;
i++;
c=s.charAt(i)
if(c==sep1)
{
YTZjP++;
}
if((c!=sep2)||(YTZjP!=0))
{
clParam+=c;
}
if(YTZjP>0)
if(c==sep2)
{
YTZjP--;
TVnkt=false
}
}
while((TVnkt==false)||(c!=sep2)||(YTZjP!=0)) 
}
else
{
clName+=c;
}
}
if(clName.length>0)
{
arr[clName]=clParam;
}
return arr;
}
function splitClass(s)
{
var arr=splitClassParameters(s,'[',']')
for(k in arr)
{
var v=arr[k];
if(v.length>0)
{
var arr2=splitClassParameters(v,'(',')')
for(k2 in arr2)
{
alert("#"+k+"  "+k2+" = "+arr2[k2])
}
}
}
}
function extractClassInfo(s,className)
{
var arr=splitClassParameters(s,'[',']')
for(k in arr)
{
var v=arr[k];
if(v.length>0)
{
if(k==className)
{
var arr2=splitClassParameters(v,'(',')') 

return arr2;
}
}
}
return null
}
function extractParamInfo(FFPOm,usCdv,oLdJh)
{
if(oLdJh==undefined)oLdJh="param"
if(FFPOm==undefined) return ""
var Moidi=FFPOm.attr("class");
if(Moidi==undefined) return ""
var gDFIk=extractClassInfo(Moidi,oLdJh);
if(gDFIk==null) return ""
if(gDFIk==undefined) return ""
if(gDFIk[usCdv]==undefined) return ""
if(usCdv) return  gDFIk[usCdv]
return gDFIk;
}


function getBrowserInfos()
{
var RmSkA={
}
if(waJSQuery.browser.webkit)RmSkA.engine="webkit"
if(waJSQuery.browser.mozilla)RmSkA.engine="ff"
if(waJSQuery.browser.msie)RmSkA.engine="ie"
return RmSkA
}
function waSetVisibilityMainPageContenair(hYlDX)
{
if(hYlDX)
{
waJSQuery(".wa-video").show()
}
else
{
waJSQuery(".wa-video").hide()
}
}
function isValidEmailAddress(jZBhp)
{
var TKLfQ=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
return TKLfQ.test(jZBhp);
}
function selUW(c,x,y,lx,ly)
{
c.beginPath();
c.moveTo(x,y);
c.lineTo(x+lx,y);
c.lineTo(x+lx,y+ly);
c.lineTo(x,y+ly);
c.lineTo(x,y);
c.closePath();
}
function XPAuW(c,x,y,lx,ly,RNhfu,kaPPQ)
{
if(typeof(RNhfu)=="number")
{
RNhfu=[RNhfu,RNhfu,RNhfu,RNhfu]
}
if(kaPPQ)
{
c.moveTo(x+RNhfu[0],y);c.lineTo(x+lx-RNhfu[1],y);c.quadraticCurveTo(x+lx,y,x+lx,y+RNhfu[1]);c.lineTo(x+lx,y+ly-RNhfu[2]);c.quadraticCurveTo(x+lx,y+ly,x+lx-RNhfu[2],y+ly);c.lineTo(x+RNhfu[3],y+ly);c.quadraticCurveTo(x,y+ly,x,y+ly-RNhfu[3]);c.lineTo(x,y+RNhfu[0]);c.quadraticCurveTo(x,y,x+RNhfu[0],y);
return;
}
c.moveTo(x,y+RNhfu[0]);c.lineTo(x,y+ly-RNhfu[3]);c.quadraticCurveTo(x,y+ly,x+RNhfu[3],y+ly);c.lineTo(x+lx-RNhfu[2],y+ly);c.quadraticCurveTo(x+lx,y+ly,x+lx,y+ly-RNhfu[2]);c.lineTo(x+lx,y+RNhfu[1]);c.quadraticCurveTo(x+lx,y,x+lx-RNhfu[1],y);c.lineTo(x+RNhfu[0],y);c.quadraticCurveTo(x,y,x,y+RNhfu[0]);
}
function waExtractCssStyle(SPNnN,ZluMR)
{
return eSmpn(SPNnN,ZluMR);
}
function eSmpn(SPNnN,ZluMR)
{
if(SPNnN==undefined) return ""
var TwOiV=SPNnN.indexOf(ZluMR);
if((TwOiV>-1)||((TwOiV>0)&&(SPNnN.substring(TwOiV-1)==";")))
{
SPNnN=SPNnN.substring(TwOiV)
TwOiV=SPNnN.indexOf(";");
if(TwOiV>-1)
{
SPNnN=SPNnN.substring(0,TwOiV) 
TwOiV=SPNnN.indexOf(":");
if(TwOiV>-1)
{
SPNnN=SPNnN.substring(TwOiV+1)
}
return waJSQuery.trim(SPNnN);
}
else
{
TwOiV=SPNnN.indexOf(":");
if(TwOiV>-1)
{
SPNnN=SPNnN.substring(TwOiV+1)
}
return waJSQuery.trim(SPNnN);
}
}
return "";
}
function waExtractRadiusFromCss(FFPOm)
{
var AwPUX=0;
var vDPtc=FFPOm.attr("style");
var BNRNw="border-radius"
if(isMSIE_higher_than_ie8())
{
BNRNw="-moz-border-radius" 
}
var  DCSUn=eSmpn(vDPtc,BNRNw) 
if(DCSUn.length==0)
{
var GvRRY=eSmpn(vDPtc,"border-top-left-radius")
var WeTQs=eSmpn(vDPtc,"border-top-right-radius")
var qUVlR=eSmpn(vDPtc,"border-bottom-right-radius")
var QYxhA=eSmpn(vDPtc,"border-bottom-left-radius") 
if(GvRRY.length==0)GvRRY="0px"
if(WeTQs.length==0)WeTQs="0px"
if(qUVlR.length==0)qUVlR="0px"
if(QYxhA.length==0)QYxhA="0px"
DCSUn=GvRRY+" "+WeTQs+" "+qUVlR+" "+QYxhA 


}
var splitradiusStr=DCSUn.split(" ") 

var WeTQs=Math.max(0,parseInt(splitradiusStr[0])-AwPUX)
var qUVlR=Math.max(0,parseInt(splitradiusStr[1])-AwPUX)
var QYxhA=Math.max(0,parseInt(splitradiusStr[2])-AwPUX)
var WkjFX=Math.max(0,parseInt(splitradiusStr[3])-AwPUX)
if(splitradiusStr.length==1)
{
qUVlR=WeTQs;QYxhA=WeTQs;WkjFX=WeTQs;
}
if(isNaN(WeTQs))WeTQs=0
if(isNaN(qUVlR))qUVlR=WeTQs
if(isNaN(QYxhA))QYxhA=qUVlR
if(isNaN(WkjFX))WkjFX=QYxhA
return new Array(WeTQs,qUVlR,QYxhA,WkjFX)
}
function waSoustractFromArrayRadius(jVStV,NGwvi)
{
for(var i=0;i<jVStV.length;i++)
{
if(isNaN(jVStV[i])||(jVStV[i].length==0))
{
jVStV[i]=0
}
else
{
jVStV[i]=Math.max(0,jVStV[i]-NGwvi)
}
}
return jVStV;
}
function waGenerateNewGradientID()
{
var ovTtY=waJSQuery(document).data("curCanvasGradientId")
if(ovTtY==undefined)ovTtY=0;
waJSQuery(document).data("curCanvasGradientId",ovTtY+1)
return "canvasGradientId"+ovTtY;
}
function waGetDrawingSurface(FFPOm,aXOjt,uIUfU)
{
var uXBiG="wa-div-bg-gradient" 
var CSjlv=null
var BNMcn=FFPOm.find("."+uXBiG) 
if(BNMcn.length==0)
{

var saCQP=-1;
FFPOm.append("<div class='"+uXBiG+"' ></div>")
BNMcn=FFPOm.find("."+uXBiG)
BNMcn.css({position:"absolute",top:0,left:0,width:aXOjt,height:uIUfU,zIndex:saCQP})
var QigcP=waGenerateNewGradientID();
BNMcn.html("<canvas id='"+QigcP+"' width="+aXOjt+" height="+uIUfU+" style='z-index:"+saCQP+"' ></canvas>")
BNMcn.data("waCanvasId",QigcP)
CSjlv=document.getElementById(QigcP);
if(isMSIE_lower_than_ie9())
{
if(window.G_vmlCanvasManager)
window.G_vmlCanvasManager.initElement(CSjlv);
}
}
else
{
var QigcP=BNMcn.data("waCanvasId")
CSjlv=document.getElementById(QigcP);
}
if(CSjlv==null)
{
if(isMSIE())
{
if(document.documentMode==8)
{
if(/MSIE 9/.test(navigator.userAgent))
{
if(document.warning_ie9_frame!=true)
{
document.warning_ie9_frame=true
alert(window.location+"\n"+Translator.tr("This site is probably in a frame,Display problems can occur with IE9 you have to enabled Force IE8 rendering in WA4 website properties",false));
}
}
}
}
return null;
}
var WPiGr=CSjlv.getContext('2d');
return WPiGr;
}
function DIHtF(WPiGr,fLSoS)
{
var qnqFs=fLSoS.split(" ")
if(qnqFs.length>1)
{
var GPQCd=parseInt(qnqFs[0]);
var TIcjE=parseInt(qnqFs[1]);;
var LVeuD=parseInt(qnqFs[2]);
var LtlRi=parseInt(qnqFs[3]);
var mDXgB=qnqFs[4]
var KFZss="";
if(qnqFs.length>5)
{
KFZss=qnqFs[5]
}
if(mDXgB=="undefined")mDXgB=""
if(KFZss=="undefined")KFZss="" 



if(KFZss=="")KFZss=mDXgB
if(isMSIE_lower_than_ie9())
{

var nXDIQ=new RGBColor(mDXgB)
var rgdLS=new RGBColor(KFZss)
if(mDXgB=="")
{
var xIuAN=new RGBColor(KFZss)
xIuAN.a=0;
mDXgB=xIuAN.toRGB()
}
if(KFZss=="")
{
var xIuAN=new RGBColor(mDXgB)
xIuAN.a=0;
KFZss=xIuAN.toRGB()
}
}





var bMacf=WPiGr.createLinearGradient(GPQCd,TIcjE,LVeuD,LtlRi);
bMacf.addColorStop(0,mDXgB);
bMacf.addColorStop(1,KFZss);


return bMacf
}
else
{
return fLSoS
}
}
function waDrawRoundedRectInSurface(WPiGr,aXOjt,uIUfU,RNhfu,fLSoS,AwPUX,RIUkw)
{

if((RIUkw==undefined)||(RIUkw.length==0))
{
AwPUX=0
}
if(AwPUX==0)
{
RIUkw=""
}
var itdUu=aXOjt-2*AwPUX
var tmNEM=uIUfU-2*AwPUX
var SMerU=new Array(RNhfu[0],RNhfu[1],RNhfu[2],RNhfu[3])
SMerU=waSoustractFromArrayRadius(SMerU,AwPUX)
if(fLSoS!=null)
{
{
WPiGr.fillStyle=DIHtF(WPiGr,fLSoS) 
var wwAal=AwPUX
var nZdrq=AwPUX
if(WPiGr.fillStyle!="")
{
WPiGr.beginPath();
XPAuW(WPiGr,wwAal,nZdrq,itdUu,tmNEM,SMerU)
WPiGr.closePath();
WPiGr.fill()
}
}
}
if((AwPUX>0)&&(RIUkw)&&(RIUkw.length>0))
{
WPiGr.fillStyle=RIUkw;
WPiGr.beginPath();
XPAuW(WPiGr,0,0,aXOjt,uIUfU,RNhfu)
XPAuW(WPiGr,AwPUX,AwPUX,itdUu,tmNEM,SMerU,true)
WPiGr.closePath();
WPiGr.fill()
}
}
function waDrawRoundedRect(FFPOm,aXOjt,uIUfU,RNhfu,fLSoS,AwPUX,RIUkw)
{
var WPiGr=waGetDrawingSurface(FFPOm,aXOjt,uIUfU)
waDrawRoundedRectInSurface(WPiGr,aXOjt,uIUfU,RNhfu,fLSoS,AwPUX,RIUkw)
}
function waDrawButton(FFPOm,fLSoS,RIUkw,aessA,snWcT)
{
var MUdDj=FFPOm.parent()
var fsonr=MUdDj.find(".waButInner")
fsonr.hide()
var rGUuN=MUdDj.find(".waButGlossInner")
rGUuN.hide()
FFPOm.css("background","")
FFPOm.css("border","none")
var AwPUX=1;
if((RIUkw==undefined)||(RIUkw.length==0))
{
AwPUX=0;
}
var eHOSr=1;
var lrdEo=FFPOm.outerWidth()
var pBFvK=FFPOm.outerHeight()
var aXOjt=lrdEo
var uIUfU=pBFvK
var tHcmx=(extractParamInfo(FFPOm,"aqua")=="1")
var RNhfu=waExtractRadiusFromCss(FFPOm)
var WPiGr=waGetDrawingSurface(FFPOm,aXOjt,uIUfU) 
if(isMSIE_lower_than_ie9())
{
FFPOm.css("border","")
}
WPiGr.clearRect(0,0,aXOjt,uIUfU)
var aMZDm=RIUkw
if(isMSIE_lower_than_ie9())
{
var NrRSi=fLSoS.split(" ")
var mDXgB=""
var KFZss="" 
if(NrRSi.length<=1)
{
mDXgB=fLSoS
KFZss=fLSoS
}
else
{
mDXgB=NrRSi[4]
KFZss=NrRSi[5]
}
if(mDXgB==KFZss)
{
waDrawRoundedRectInSurface(WPiGr,aXOjt,uIUfU,RNhfu,mDXgB,AwPUX,aMZDm)
}
else
{
var mCkZi=40;
if(tHcmx)
{
mCkZi=70;
}
var LCbPh=uIUfU-Math.round(uIUfU*mCkZi/100)
var WeTQs=[RNhfu[0],RNhfu[1],0,0]
waDrawRoundedRectInSurface(WPiGr,aXOjt,uIUfU-LCbPh,WeTQs,mDXgB,AwPUX,"")
var qUVlR=[0,0,RNhfu[2],RNhfu[3]]
var tCsik="0 0 0 "+LCbPh+" "+mDXgB+" "+KFZss
WPiGr.fillStyle=DIHtF(WPiGr,tCsik)
WPiGr.beginPath();
var VnHoa=uIUfU-LCbPh
XPAuW(WPiGr,0,VnHoa,aXOjt,LCbPh,qUVlR)
WPiGr.closePath();
WPiGr.fill() 
if((aMZDm.length>0)&&(AwPUX>0))
{
WPiGr.fillStyle=""
WPiGr.strokeStyle=aMZDm;
WPiGr.beginPath();
XPAuW(WPiGr,0,0,aXOjt,uIUfU,RNhfu)
WPiGr.closePath();
WPiGr.stroke();
}
}
}
else
{

waDrawRoundedRectInSurface(WPiGr,aXOjt,uIUfU,RNhfu,fLSoS,AwPUX,aMZDm)
}
if(aessA&&(aessA.length>0))
{
WPiGr.fillStyle=""
if(isMSIE_lower_than_ie9())
{
WPiGr.strokeStyle=aessA;
}
else
{
WPiGr.strokeStyle=DIHtF(WPiGr,"0 "+Math.round(uIUfU/2)+" 0 "+uIUfU+" "+aessA+" transparent") 
}
WPiGr.beginPath();
XPAuW(WPiGr,1.5,1.5,aXOjt-3,uIUfU-3,RNhfu)
WPiGr.closePath();
WPiGr.stroke()
}
if(tHcmx)
{
var mDXgB="rgba(255,255,255,0.5)"
var KFZss="rgba(255,255,255,0.1)"
var LCbPh=Math.round(uIUfU*0.5);
var gKYTT=RNhfu[0]
var nQEpH=gKYTT;
nQEpH=Math.min(nQEpH,LCbPh/2);
var xgSAW=gKYTT-nQEpH;
xgSAW=Math.max(xgSAW,0);
var fLSoS="0 0 0 "+LCbPh+" "+mDXgB+" "+KFZss 
WPiGr.fillStyle=DIHtF(WPiGr,fLSoS)
WPiGr.beginPath();
var VnHoa=0
XPAuW(WPiGr,xgSAW,VnHoa,aXOjt-2*xgSAW,VnHoa+LCbPh,nQEpH)
WPiGr.closePath();
WPiGr.fill()
}
}
function waHackGradient()
{
if(isWebKit()||isFirefox())
{
return false;
}
waJSQuery(".wa-bg-gradient").each(function()
{
var FFPOm=waJSQuery(this)
var vDPtc=FFPOm.attr("style");
var fLSoS=extractParamInfo(FFPOm,"grad") 
var OaoMv_borderProps=extractParamInfo(FFPOm,"border").split(" ")
var AwPUX=0
var RIUkw=""
if(OaoMv_borderProps.length>0)
{
AwPUX=parseInt(OaoMv_borderProps[0])
if(isNaN(AwPUX))AwPUX=0;
}
if(OaoMv_borderProps.length>1)
{
RIUkw=OaoMv_borderProps[1]
}
var OnvVW=FFPOm.css("backgroundImage")
if((OnvVW.length>0)&&(OnvVW!="none"))
{
fLSoS=null
}
var aXOjt=FFPOm.width()+2*AwPUX
var uIUfU=FFPOm.height()+2*AwPUX
var RNhfu=waExtractRadiusFromCss(FFPOm)
FFPOm.css({border:"0px none",backgroundColor:"transparent"}) 
waDrawRoundedRect(FFPOm,aXOjt,uIUfU,RNhfu,fLSoS,AwPUX,RIUkw)
if(isMSIE())
{
FFPOm.css({width:aXOjt,height:uIUfU})
}
})
}
function waHasButtonHacking()
{
if(isWebKit()||isFirefox())
{
return false;
}
return true;
}
function waHackButtons()
{
if(waHasButtonHacking()==false)
{
return false;
}
waJSQuery(".wa-button").each(function()
{
var FFPOm=waJSQuery(this)
waHackButton(FFPOm)
})
}
function waPercentGradientButton(gIqbP)
{
var tHcmx=(extractParamInfo(gIqbP,"aqua")=="1")
var Zdkfx=40;
if(tHcmx)
{
Zdkfx=70;
}
return Zdkfx;
}
function waHackButton(FFPOm)
{
var MUdDj=FFPOm.parent()
var fsonr=MUdDj.find(".waButInner") 
fsonr.show()
var rGUuN=MUdDj.find(".waButGlossInner")
rGUuN.show()
if(waHasButtonHacking()==false)
{
return false;
}
var YkMpn=FFPOm.data("saved-background-image")
if(YkMpn==null)
{
FFPOm.data("saved-background-image",FFPOm.css("background-image"))
}
var DlUKc=FFPOm.data("saved-background-image")
if((DlUKc.indexOf("url(")>-1)&&(DlUKc.indexOf("wa_transparent.gif")==-1))
{
return false;
}

FFPOm.css("background-color","")
var fLSoS=extractParamInfo(FFPOm,"grad")
var aessA=(extractParamInfo(FFPOm,"inborder"))
var RIUkw=(extractParamInfo(FFPOm,"border"))
waDrawButton(FFPOm,fLSoS,RIUkw,aessA)
}
function waHackButtonOver(FFPOm)
{
if(waHasButtonHacking()==false)
{
return false;
}
var gIqbP=waJSQuery(">button",FFPOm);
var height=parseInt(FFPOm.css("height"));
var cl=FFPOm.attr("class")
var bg=extractParamInfo(FFPOm,"bg")
var fLSoS=null;
var Zdkfx=waPercentGradientButton(gIqbP)
if(bg&&(bg.length>0))
{
var LCbPh=Math.round(height*Zdkfx/100)
var cols=bg.split(" ")
fLSoS="0 "+LCbPh+" 0 "+height+" "+cols[0]+" "+cols[1]
}
var bg_img=extractParamInfo(FFPOm,"bg_img")
if(bg_img&&(bg_img.length>0))
{
return;
}
var RIUkw=extractParamInfo(FFPOm,"bord");
var aessA=extractParamInfo(FFPOm,"inner_bord") 
waDrawButton(gIqbP,fLSoS,RIUkw,aessA)
}
function waHackButtonOut(FFPOm)
{
waHackButton(FFPOm)
}
function waActivateOverButton(qlviR)
{
var SdUHM=true;
var pIgel=null
if(SdUHM)
{
pIgel=qlviR;
}
else
{
pIgel=waJSQuery(">span",qlviR);
}
var o=pIgel
var button=waJSQuery(">button",o);
var txtSpan=null
if(SdUHM)
{
txtSpan=waJSQuery(">div",button);

}
else
{
txtSpan=waJSQuery(">span",button);
}
var gwXLb=qlviR.attr("onclick")
if(gwXLb=="javascript:void(0)")gwXLb=""
if(gwXLb==undefined)gwXLb=""
if(gwXLb=="#")gwXLb=""
if((o.hasClass('wa-js-action')==false)&&(gwXLb.length==0))
{
qlviR.css("cursor","default")
o.css("cursor","default")
button.css("cursor","default")
txtSpan.css("cursor","default")
}
else
{
qlviR.css("cursor","pointer")
o.css("cursor","pointer")
button.css("cursor","pointer")
txtSpan.css("cursor","pointer")
}

if(isMSIE())
{
var oaLfj=false;
var fsFLP=button.css("background-image")
if((fsFLP&&(fsFLP.length==0))||(fsFLP=="none"))
{
button.css("background-image","url(wa_transparent.gif)") 
pIgel.append("<div style='position:absolute;top:0px;left:0px;width:100%;height:100%;;background-image:url(wa_transparent.gif)'></div>")
}
else
{
oaLfj=true;
button.css("background-size",button.width()+" px "+button.height()+" px ")
}
}
var fsonr=o.find(".waButInner")
var sGquG=txtSpan.outerWidth()
sGquG=Math.min(sGquG,button.width())
var img=waJSQuery(">img",button);
var TABjD=Math.round((button.width()-sGquG)/2)
var LAOrm=Math.round((button.height()-txtSpan.outerHeight())/2) 
var VpVMc=button.css("textAlign");
if(VpVMc=="center")
{
TABjD=Math.round((button.width()-sGquG)/2)
}
if(VpVMc=="left")
{
TABjD=3
}
if(VpVMc=="right")
{
TABjD=button.width()-sGquG-3
}
if((img.length==0)||(img.attr("src")==undefined))
{


}
var cl=o.attr("class")
var clParam=extractClassInfo(cl,"param")
fsonr.css("border-bottom","0px none")
var wRVmq=o
wRVmq=pIgel 
wRVmq.data("link_data",o)
if(clParam!=null)
wRVmq.hover(function(){
var o=waJSQuery(this).data("link_data")
var button=waJSQuery(">button",o);
var vsHFV=button.data("waButState")
if(vsHFV==undefined) vsHFV=0;
if(vsHFV!=0) return;
button.data("waButState",1)
var height=button.outerHeight()
var tHcmx=(extractParamInfo(button,"aqua")=="1")
var txtSpan=button.find(".wa-but-txt") 


var imgTag=waJSQuery(">img",button);
imgTag=button.find("img");
var innerSpan=waJSQuery(">.waButInner",o);
button.data('wa-style',button.attr('style'))
if(isMSIE_lower_than_ie9())
{
button.data('wa-style-bg-img',button.css('background-image'))
}
txtSpan.data('wa-style',txtSpan.attr('style'))
imgTag.data('wa-style',imgTag.attr('style'))
innerSpan.data('wa-style',innerSpan.attr('style'))
imgTag.data('wa-style-src',imgTag.attr('src')) 
{
var bg=extractParamInfo(o,"bg")
if(bg.length>0)
{
var cols=bg.split(" ")
var mDXgB=cols[0]
var KFZss=mDXgB
if(cols.length>1)KFZss=cols[1]
var ZWUuk=getBrowserInfos();
var Zdkfx=waPercentGradientButton(button)
if(ZWUuk.engine=="webkit")
{
var LCbPh=Math.round(height*Zdkfx/100) 
button.css("background","-webkit-gradient(linear,0 "+LCbPh+", 0 "+height+",from("+mDXgB+"),to("+KFZss+"))")
}
if(ZWUuk.engine=="ff")
{
button.css("background","-moz-linear-gradient(top left -90deg,"+mDXgB+" "+Zdkfx+"%, "+KFZss+" 100%)")
}
}
var borderCol=extractParamInfo(button,"border");
var borderColOver=extractParamInfo(o,"bord");
var OjOCd=new RGBColor(borderColOver)
var oiLsi=OjOCd.a>0;
var OQNMB=new RGBColor(borderCol)
var bwPrI=OQNMB.a>0;
if(oiLsi)
{
button.css("border","1px solid "+borderColOver)
}
else
{
button.css("border","0px")
}
var bg_img=extractParamInfo(o,"bg_img");
if(bg_img&&(bg_img.length>0))
{

var fSIme=button.width();
var xxJep=button.height();
if((bwPrI))
{
fSIme+=2;
xxJep+=2;
}
button.css({"background-image":"url('"+bg_img+"')","background-size":""+fSIme+"px "+xxJep+"px"})
}
}
var inner_borderCol=extractParamInfo(o,"inner_bord");
if(inner_borderCol&&(inner_borderCol.length>0))
{
innerSpan.css("border-color",inner_borderCol)
}
var txtCol=extractParamInfo(o,"txt");
if(txtCol&&(txtCol.length>0))
{
txtSpan.css("color",txtCol)
button.css("color",txtCol)
}
var iQPWp=extractParamInfo(o,"u");
if(iQPWp&&(iQPWp.length>0))
{
if(iQPWp=="1")
{
txtSpan.css("textDecoration","underline")
if(isMSIE())
{
button.css("textDecoration","underline")
}
}
else
{
txtSpan.css("textDecoration","none")
if(isMSIE())
{
button.css("textDecoration","none")
}
}
}
var img=extractParamInfo(o,"img");
if(img!=undefined)
{
if(img.length==0)
{
imgTag.css("width",0)
}
else
{
var img_pars=img.split(" ")
imgTag.attr("src",img_pars[0])
imgTag.css("width",img_pars[1])
imgTag.css("height",img_pars[2])
}
}
{
waHackButtonOver(o)
}
},function(){
var o=waJSQuery(this).data("link_data") 
var button=waJSQuery(">button",o);
var vsHFV=button.data("waButState")
if(vsHFV==undefined)vsHFV=0;
if(vsHFV!=1) return;
button.data("waButState",0)
var txtSpan=button.find(".wa-but-txt")
var imgTag=waJSQuery(">img",button);
imgTag=button.find("img");
var innerSpan=waJSQuery(">.waButInner",o);
button.attr("style",button.data("wa-style"))
if(isMSIE_lower_than_ie9())
{
button.css("background-image",button.data("wa-style-bg-img"))
}
txtSpan.attr("style",txtSpan.data("wa-style"))
imgTag.attr("style",imgTag.data("wa-style"))
imgTag.attr("src",imgTag.data("wa-style-src"))
innerSpan.attr("style",innerSpan.data("wa-style"))
waHackButtonOut(button)
});
}
function waActivateOverButtons()
{
waJSQuery(".wa-button-link").each(function(i)
{
var FFPOm=waJSQuery(this) 
waActivateOverButton(FFPOm)
})
}
function UNexW(FFPOm)
{
wa_timeout(function(){UNexW(FFPOm)},1000)
var KXDUG=FFPOm.find("div")
KXDUG.position().top
var kfrJV=KXDUG.data("data-marquee")
var wSGdA=kfrJV.orientation
var humvP=kfrJV.speed
}
function XFsis(KXDUG,now,fx)
{
if(isMSIE())
{
var kfrJV=KXDUG.data("data-marquee")
var YIraG=kfrJV.size_cont;
var wqHVn=0;
var vDxaB=0;
if(kfrJV.orientation!=0) 
{
wqHVn=-now;
}
else
{
vDxaB=-now;
}
var aXOjt=YIraG.width()
var uIUfU=YIraG.height()
var xRudf=0;
var bKuut=xRudf+wqHVn;
var Ddcvf=xRudf+vDxaB;
var cbfag=aXOjt+wqHVn;;
var qOkoX=uIUfU+vDxaB
KXDUG.css("clip","rect("+Ddcvf+"px,"+cbfag+"px,"+qOkoX+"px,"+bKuut+"px)")
}
}
function qFZVc(KXDUG,XrUQW)
{
var kfrJV=KXDUG.data("data-marquee")
var dqrVp=kfrJV.prop
var saSQA=kfrJV.size
var wnfAn=kfrJV.innerSize
var gOOJQ=kfrJV.compSize
var HqxNl=0;
var hmtER=0;
var WWDYM={}
if(kfrJV.orientation!=0) 
{
if(XrUQW==false)
{
HqxNl=KXDUG.position().left;;
KXDUG.css({"left":HqxNl})
}
else
{
var xIfEu=KXDUG.data("first-pos-marquee")
if(xIfEu==undefined)
{
xIfEu=KXDUG.position().left;
KXDUG.data("first-pos-marquee",xIfEu)
}
else
{
KXDUG.css({"left":xIfEu})
}
HqxNl=xIfEu;
}
if(HqxNl<=-wnfAn)
{
HqxNl=gOOJQ
KXDUG.css(dqrVp,HqxNl)
}
hmtER=-saSQA;
WWDYM={"left":hmtER}
}
else
{
if(XrUQW==false)
{
HqxNl=KXDUG.position().top;;
KXDUG.css({"top":HqxNl})
}
else
{
var xIfEu=KXDUG.data("first-pos-marquee")
if(xIfEu==undefined)
{
xIfEu=KXDUG.position().top;
KXDUG.data("first-pos-marquee",xIfEu)
}
else
{
KXDUG.css({"top":xIfEu})
}
HqxNl=xIfEu;
}
if(HqxNl<=-wnfAn)
{
HqxNl=gOOJQ
KXDUG.css(dqrVp,HqxNl)
}
hmtER=-saSQA;
WWDYM={"top":hmtER}
}
var wKQXW=((HqxNl-hmtER)*1000)/kfrJV.speed
var ZgTqb={
"duration":wKQXW,"easing":"linear","complete":function(){qFZVc(waJSQuery(this),true);},"step":function(now,fx){XFsis(waJSQuery(this),now,fx);}
};
KXDUG.animate(WWDYM,ZgTqb);
}
function stwHC(FFPOm)
{
var wSGdA=parseInt(extractParamInfo(FFPOm,"orientation","param_marquee"))
var humvP=parseInt(extractParamInfo(FFPOm,"speed","param_marquee")) 

var KXDUG=FFPOm.find("div")
var dqrVp="top"
var ZbLTP=KXDUG.height()
var HDtbq=KXDUG.innerHeight()
var gOOJQ=FFPOm.height();
if(wSGdA!=0) 
{
var FtWex=KXDUG.find("div")
var RuQTZ=FtWex.html()
var JbDTp=KXDUG.innerWidth();
var uIUfU=FtWex.innerHeight();
var TbxWA=uIUfU
var ciNab=JbDTp;
for(var aXOjt=JbDTp;aXOjt<10000;aXOjt+=30)
{
KXDUG.css("width",aXOjt)
uIUfU=FtWex.innerHeight();
if(uIUfU<TbxWA)
{
TbxWA=uIUfU
ciNab=aXOjt
}
}
KXDUG.css("width",ciNab+2)
}
if(wSGdA!=0) 
{
gOOJQ=FFPOm.width();
dqrVp="left"
ZbLTP=KXDUG.width()
HDtbq=KXDUG.innerWidth() 
KXDUG.css(dqrVp,gOOJQ) 

}
else
{
gOOJQ=FFPOm.height();
dqrVp="top"
ZbLTP=KXDUG.height()
HDtbq=KXDUG.innerHeight()
KXDUG.css(dqrVp,gOOJQ)
}
KXDUG.data("data-marquee",{"speed":humvP,"orientation":wSGdA,"size":ZbLTP,"innerSize":HDtbq,"prop":dqrVp,"compSize":gOOJQ,"size_cont":new Size(FFPOm.width(),FFPOm.height())})
KXDUG.hover(function(){
waJSQuery(this).stop();
},function(){
qFZVc(waJSQuery(this),false)
});
qFZVc(KXDUG)
}
function initializeWA_JQuery()
{


if(isMSIE())
{
var gViql=new Array();
var Ollgr=waWebFontDescription.families
for(var i=0;i<Ollgr.length;i++)
{
var guPkt=Ollgr[i]
gViql.push(guPkt+"::latin")
}
WebFontConfig={
google:{families:gViql}
};
if(gViql.length>0)
{
waLoadGoogleFonts()
}
}
IS_onload();




waJSQuery(".reflect").reflect();
waJSQuery(".wa-img").each(function()
{
var FFPOm=waJSQuery(this)
var mtCIU=extractParamInfo(FFPOm,"over");
if(mtCIU.length>0)
{
FFPOm.hover(function(){
var o=waJSQuery(this)
var img=o
var over=extractParamInfo(o,"over");
var cVtgA=waJSQuery(this).data('src_out') 
if(cVtgA==undefined)
{
waJSQuery(this).data('src_out',img.attr('src'))
}

img.attr("src",over)
},function(){
var o=waJSQuery(this)
var img=o
img.attr("src",waJSQuery(this).data("src_out")) 

});
}
}) 


waJSQuery(".wa-text").each(function()
{
if(isMSIE())
{
var aXOjt=waJSQuery(this).width()
var uIUfU=waJSQuery(this).height()
var EhMdS=waJSQuery(this).children("div") 
var lEiUJ=parseInt(EhMdS.css("marginTop"))
if(isNaN(lEiUJ))lEiUJ=0;
var OxaPI=parseInt(extractParamInfo(waJSQuery(this),"border","param")) 
var xRudf=OxaPI;
EhMdS.css("margin",(lEiUJ+xRudf)+"px")
}
}) 


waJSQuery(".wa-textmarquee").each(function()
{
stwHC(waJSQuery(this))
}) 


waActivateOverButtons()
waHackGradient()
waHackButtons()
waGlobalPatchIE()
}
function waGlobalPatchIE()
{
if(isMSIE())
{
if(window.waPatchIE)
{
waPatchIE()
}
}
}(function(waJSQuery){
waJSQuery.fn.extend({
reflect:function(options){
var FFPOm=waJSQuery(this)
var _radius=waExtractRadiusFromCss(FFPOm) 
options=waJSQuery.extend({
height:1/3,opacity:0.5,borderRadius:_radius
},options);
return this.unreflect().each(function(){
var img=this;
if(/^img$/i.test(img.tagName)){
function doReflect(){
var imageWidth=img.width,imageHeight=img.height,reflection,reflectionHeight,wrapper,context,gradient;
reflectionHeight=Math.floor(imageHeight*options.height)
reflection=waJSQuery("<canvas />")[0];
if(reflection.getContext){
context=reflection.getContext("2d");
try{
waJSQuery(reflection).attr({width:imageWidth,height:imageHeight});
context.save();
context.translate(0,imageHeight-1);
context.scale(1,-1);
context.drawImage(img,0,0,imageWidth,imageHeight);
context.restore();
context.globalCompositeOperation="destination-out";
gradient=context.createLinearGradient(0,0,0,reflectionHeight);
gradient.addColorStop(0,"rgba(255, 255, 255, "+(1-options.opacity)+")");
gradient.addColorStop(1,"rgba(255, 255, 255, 1.0)");
context.fillStyle=gradient;
context.rect(0,0,imageWidth,imageHeight);
context.fill();
}catch(e){
return;
}
}else{
if(!waJSQuery.browser.msie) return;
reflection=waJSQuery("<img />").attr("src",img.src).css({
width:imageWidth,height:imageHeight,marginBottom:reflectionHeight-imageHeight,filter:"FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity="+(options.opacity*100)+", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY="+(reflectionHeight/imageHeight*100)+")"
})[0];
}
var AJQWb=options.borderRadius 
var FTEXR=new Array(AJQWb[3],AJQWb[2],AJQWb[1],AJQWb[0])
var RUGjv=AJQWb.join("px ")+"px"
var CKxRx=FTEXR.join("px ")+"px"
waJSQuery(reflection).css({display:"block",borderRadius:CKxRx});
wrapper=waJSQuery(/^a$/i.test(img.parentNode.tagName)?"<span />":"<div />").insertAfter(img).append([img,reflection])[0];
wrapper.className=img.className;
waJSQuery.data(img,"reflected",wrapper.style.cssText=img.style.cssText);
waJSQuery(wrapper).css({width:imageWidth,height:imageHeight+reflectionHeight,overflow:"hidden"});
img.style.cssText="display: block;border:0px none;-webkit-border-radius:"+RUGjv+";-moz-border-radius:"+RUGjv+";border-radius:"+RUGjv+";width:"+imageWidth+"px;height:"+imageHeight+"px;" 

img.className="reflected";
}
if(img.complete) doReflect();
else waJSQuery(img).load(doReflect);
}
});
},unreflect:function(){
return this.unbind("load").each(function(){
var img=this,reflected=waJSQuery.data(this,"reflected"),wrapper;
if(reflected!==undefined){
wrapper=img.parentNode;
img.className=wrapper.className;
img.style.cssText=reflected;
waJSQuery.removeData(img,"reflected");
wrapper.parentNode.replaceChild(img,wrapper);
}
});
}
});
})(waJSQuery);(function(waJSQuery){
waJSQuery.fn.touchwipe=function(settings){
var config={
min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true
};
if(settings) waJSQuery.extend(config,settings);
this.each(function(){
var startX;
var startY;
var isMoving=false;
function cancelTouch(){
this.removeEventListener('touchmove',onTouchMove);
startX=null;
isMoving=false;
}
function onTouchMove(e){
if(config.preventDefaultEvents){
e.preventDefault();
}
if(isMoving){
var x=e.touches[0].pageX;
var y=e.touches[0].pageY;
var dx=startX-x;
var dy=startY-y;
if(Math.abs(dx)>=config.min_move_x){
cancelTouch();
if(dx>0){
config.wipeLeft();
}
else{
config.wipeRight();
}
}
else if(Math.abs(dy)>=config.min_move_y){
cancelTouch();
if(dy>0){
config.wipeDown();
}
else{
config.wipeUp();
}
}
}
}
function onTouchStart(e)
{
if(e.touches.length==1){
startX=e.touches[0].pageX;
startY=e.touches[0].pageY;
isMoving=true;
this.addEventListener('touchmove',onTouchMove,false);
}
}
if('ontouchstart' in document.documentElement){
this.addEventListener('touchstart',onTouchStart,false);
}
});
return this;
};
})(waJSQuery);



function waChgtLanguage(rSDaI,WRoAN)
{
var gEANr=Translator.m_languages;
var BaTXW=window.location.pathname;
var GZgWr=window.location.href;
var fatVT=window.location.host
var faigv=BaTXW.lastIndexOf("/")
var VLXSA=""
var hkOuX=BaTXW
if(faigv>-1)
{
VLXSA=BaTXW.substring(0,faigv+1)
hkOuX=BaTXW.substring(faigv+1)
}
if(hkOuX.length==0)
{
hkOuX="index.html"
GZgWr+=hkOuX;
}
if(document.webaca_is_preview)
{
if(gEANr!=undefined)
{
var MQWkY=gEANr[rSDaI]
if(MQWkY)
{
window.location.replace(MQWkY)
return;
}
}
}
else
{
var UhhXM=GZgWr
UhhXM=UhhXM.replace(fatVT,WRoAN);
if(gEANr!=undefined)
{
var MQWkY=gEANr[rSDaI]
UhhXM=UhhXM.replace(hkOuX,MQWkY);

window.location.replace(UhhXM)
}
}
}
function waAutoDetectAndRedirectLang(LOaJj)
{
if((LOaJj.enable_preview_redirect!=true)&&document.webaca_is_preview)
{
return;
}
if(isProbablyRobot())
{
return;
}
if((LOaJj.restricted_host!=undefined)&&(document.webaca_is_preview!=true))
{
var bRWKn=false;
for(var i=0;i<LOaJj.restricted_host.length;i++)
{
var WRoAN=LOaJj.restricted_host[i]
if(window.location.host==WRoAN)
{
bRWKn=true;
break;
}
}
if(bRWKn==false)
{
return;
}
}
var IHaHk=navigator.language;
if(navigator.browserLanguage)
IHaHk=navigator.browserLanguage;
var faigv=IHaHk.indexOf("-")
if(faigv>0)
{
IHaHk=IHaHk.substr(0,faigv)
}
if(Translator.m_lang!=IHaHk)
{
if(LOaJj.enabled_internal_redirect!=false)
{
var gEANr=Translator.m_languages;
if(gEANr)
{
var rSDaI=gEANr[IHaHk]
if(rSDaI)
{
window.location.replace(rSDaI)
return;
}
}
}
if(LOaJj.redirect!=undefined)
{
var WRoAN=LOaJj.redirect[IHaHk]
if(WRoAN!=undefined)
{
waChgtLanguage(IHaHk,WRoAN);

}
}
}
}

-->
