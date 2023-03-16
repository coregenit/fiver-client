waJSQuery(window).load(function(){
initializeAllWA_gallery();
});
function WYxiQ()
{
var FRrQR=waJSQuery(".wa-fullscreen-contenair:visible");
var xnirP=FRrQR.find(".wa-gallery")
if(xnirP.length>0)
{
var tORfn=FRrQR.data("wa-window-size")
if((tORfn==undefined)||((tORfn.width()!=getWindowSize().width())||(tORfn.height()!=getWindowSize().height())))
{
var Cwwig=iKlon(xnirP)
var WSeMi=Cwwig.data("timer_resize")
if(WSeMi!=null)
{
clearTimeout(WSeMi)
Cwwig.data("timer_resize",null)
}
WSeMi=wa_timeout(function(){UNwUC(xnirP)},200);
Cwwig.data("timer_resize",WSeMi)
FRrQR.data("wa-window-size",getWindowSize())
}
}
}
waJSQuery(window).scroll(function()
{
WYxiQ()
});
waJSQuery(window).resize(function()
{
WYxiQ()
});
function centerGalleryContainer()
{
return;
var FRrQR=waJSQuery('#wa-dialog-container');
var xLcRr=waJSQuery(window).scrollLeft();
var siKmf=waJSQuery(window).scrollTop();
var VIVUD=getWindowSize()
var xnirP=FRrQR.find(".wa-gallery")
if(xnirP.length>0)
{
FRrQR.css({left:xLcRr,top:siKmf,width:VIVUD.width(),height:VIVUD.height()})
FRrQR.show()
}
}
function rYuFo(FFPOm,QrSRx)
{
if(QrSRx<0)QrSRx=0;
var mSkWq=RYEpe(FFPOm);
if(!FFPOm.data("datas"))
{
alert('browser error')
return;
}
var ScQjo=ipXuI(FFPOm)
var lTScg=gikeU(FFPOm);
if(lTScg<=0) return;
if(QrSRx+1>Math.ceil(ScQjo/lTScg)) return;
if(mSkWq==QrSRx) return;
var SWZdK=FFPOm.find(".wa-gallery-page-selector") 
var WeNZf=asSMZ(FFPOm)
var hvIwo=(WeNZf==0)?1:0;
var tAnHK=SBOJM(FFPOm,WeNZf);
var iIGMd=SBOJM(FFPOm,hvIwo);
var BeRLs=FFPOm.find(".wa-gallery-scroll-pane");
var wKQXW=500;
if(iIvnR(FFPOm))return;
xQSic(FFPOm,true)
var KWTAR=FFPOm.data("mode")
var sgFkc=FFPOm.data("type_gallery") 
var YRbqd=FFPOm.data("datas").global_config.transition_effect/100;
if(KWTAR!="fullscreen")
{
if(sgFkc==0)
{
YRbqd=1;
}
}
var EcuOO=YRbqd;
var RBisi=true;
if(YRbqd>0.85)
{
RBisi=false 
}
if(isMobileBrowser()&&(isIPad()==false))
{
if(YRbqd<0.5)
{
EcuOO=0
}
else
{
RBisi=false
EcuOO=1
}
}
if(RBisi)
{
iIGMd.fadeIn(wKQXW)
tAnHK.fadeOut(wKQXW)
}
else
{
iIGMd.show() 
}
var drELk=0;
var XunkA=BeRLs.position().left
if(QrSRx>mSkWq)
{
drELk=tAnHK.position().left+EcuOO*tAnHK.width();
XunkA-=EcuOO*tAnHK.width();
}
if(QrSRx<mSkWq)
{
drELk=tAnHK.position().left-EcuOO*tAnHK.width();
XunkA+=EcuOO*tAnHK.width();
}
tAnHK.css("z-index",1)
iIGMd.css("z-index",0)
iIGMd.css("left",drELk)
var hRxST=waJSQuery(">.wa-gallery-image-contenair",iIGMd);
var LIahw=QrSRx*lTScg
hRxST.each(function(i)
{
if(LIahw+i<ScQjo)
{
WtPts(waJSQuery(this),FFPOm,LIahw+i)
}
else
{
WtPts(waJSQuery(this),FFPOm,null)
}
});



{
BeRLs.animate({left:XunkA},wKQXW,function(){
xiNOr(FFPOm,QrSRx)
});
}
}
function xiNOr(FFPOm,QrSRx)
{
var WeNZf=asSMZ(FFPOm)
var hvIwo=(WeNZf==0)?1:0;
xQSic(FFPOm,false)
FFPOm.data("page",QrSRx)
FFPOm.data("first-layout",hvIwo) 
var BeRLs=FFPOm.find(".wa-gallery-scroll-pane");
var tAnHK=SBOJM(FFPOm,WeNZf);
var iIGMd=SBOJM(FFPOm,hvIwo);
tAnHK.css("left",tAnHK.position().left+BeRLs.position().left)
iIGMd.css("left",iIGMd.position().left+BeRLs.position().left)
BeRLs.css("left",0)
tAnHK.hide()
EOTuP(FFPOm)
var LIahw=QrSRx*gikeU(FFPOm)
iKlon(FFPOm).data("current_image",LIahw);
ARSNQ(FFPOm)
}
function fbJHi(FFPOm)
{
var Cwwig=iKlon(FFPOm);
var sgFkc=FFPOm.data("type_gallery")
var DxcdH=parseInt(Cwwig.data("auto_diapo"))
return((sgFkc==1)&&(DxcdH==1)) 
}
function ARSNQ(FFPOm)
{
var KWTAR=FFPOm.data("mode")
var sgFkc=FFPOm.data("type_gallery")
var ExwNC=FFPOm.find(".wa-gallery-navigation")
var xnirP=iKlon(FFPOm);
var hpRZB=FFPOm.data("datas").global_config;
var ueuBM=FFPOm.find(".wa-gallery-comment-zone")
ueuBM.empty()
var SEOUk=RYEpe(FFPOm)
var klXPR="";
if(KWTAR=="fullscreen")
{
if(hpRZB.comment_display_ImageNumber)
{
klXPR+=(SEOUk+1)+" / "+ipXuI(FFPOm);
}
}
var HoSut=wevFS(FFPOm,SEOUk,"link") 
if(klXPR.length>0)
{
klXPR+="<br>";
}
klXPR+=wevFS(FFPOm,SEOUk,"comment")
klXPR=klXPR.replace(/<br>/gi,"\n")
klXPR=waJSQuery.trim(klXPR)
klXPR=klXPR.replace(/\n/gi,"<br>")
if((klXPR.length==0)||(FFPOm.data("datas").global_config.show_comment==false))
{
ueuBM.hide()
return;
}
if((KWTAR=="normal")&&(sgFkc==1))
{
}
else
{
if((KWTAR!="fullscreen"))
{
ueuBM.hide()
return;
}
}
var aXOjt=getWindowSize().width();
var uIUfU=getWindowSize().height();
var rviWI=oCklj(FFPOm)
var lEiUJ=10;
ueuBM.css("padding",lEiUJ)
ueuBM.show()
if(isMSIE_lower_than_ie9())
{
ueuBM.append("<div class=\"wa-gallery-comment-bg\" style=\"position:absolute;background-color:#000000;filter:alpha(opacity=50); opacity:0.5;\"></div>")
}
ueuBM.append("<div class=\"wa-gallery-comment\" ></div>")
var KmEJB=80;
var lUpcq=ueuBM.find(".wa-gallery-comment")
lUpcq.css("width",rviWI.width()) 
lUpcq.html(klXPR)
var Qadsd=lUpcq.outerWidth(true)
var udlPc=lUpcq.outerHeight(true)
var newHeight=Math.min(KmEJB,udlPc)
var xLcRr=waJSQuery(window).scrollLeft();
var siKmf=waJSQuery(window).scrollTop();
var CGagX=(aXOjt-Qadsd)/2
var OhFqD=uIUfU-newHeight-2*lEiUJ
if(KWTAR=="fullscreen")
{
CGagX+=xLcRr
OhFqD+=siKmf
}
lUpcq.css("left",CGagX);
lUpcq.css("height",newHeight);
lUpcq.css("width",Qadsd);
ueuBM.css("left",0);
ueuBM.css("top",OhFqD);
ueuBM.css("width",aXOjt);
ueuBM.css("height",newHeight+2*lEiUJ);
if((KWTAR=="normal")&&(sgFkc==1))
{
klXPR=klXPR.replace(/<br>/gi," ") 
lUpcq.html(klXPR)
var vnEYS=0;
if(HoSut.length>0)
{
vnEYS=16;
}
var xxJep=15+vnEYS;
var gEcGU=FFPOm.width()
var XUSkG=FFPOm.height()
lUpcq.css("textAlign","left");
lUpcq.css("left",0);
lUpcq.css("top",0);
lUpcq.css("height",xxJep);
lUpcq.css("width",gEcGU);
lUpcq.css("fontSize",13);
lUpcq.css("margin",3);
lUpcq.css("overflow","hidden");
lUpcq.css("whiteSpace","nowrap");
lUpcq.css("textOverflow","ellipsis");
ueuBM.css("left",0);
ueuBM.css("top",XUSkG-xxJep-50);
ueuBM.css("width",gEcGU);
ueuBM.css("height",xxJep);
var WeNZf=asSMZ(FFPOm)
var tAnHK=SBOJM(FFPOm,WeNZf);
var fsFLP=tAnHK.find(".wa-gallery-image");
var hRxST=tAnHK.find(".wa-gallery-image-contenair");
var IaKtH=hRxST.position().top+XUSkG-35
var SwadS=hRxST.position().top+fsFLP.height()-35-vnEYS
var eSnpb=Math.min(IaKtH,SwadS) 

ueuBM.css("top",eSnpb);
var dcUtm=(gEcGU-fsFLP.width())/2
ueuBM.css("left",dcUtm);
lUpcq.css("width",fsFLP.width()-20);
ueuBM.css("width",fsFLP.width()-20);
}
else
{
ueuBM.hide()
ueuBM.fadeIn()
}
if(isMSIE_lower_than_ie9())
{
var FbiZI=ueuBM.find(".wa-gallery-comment-bg")
FbiZI.css({"left":0,"top":0,"width":ueuBM.outerWidth(true),"height":ueuBM.outerHeight(true)});
}
}
function ZxssQ(FFPOm,qnFaq)
{
var qnZTq=null
if(qnFaq["photos"])
{
qnZTq=qnFaq.photos
}
else
if(qnFaq["photoset"])
{
qnZTq=qnFaq.photoset
}
return qnZTq;
}
function wevFS(FFPOm,faigv,ZluMR)
{
var SnCUe=iKlon(FFPOm).data("3rdparty_datas")
if(SnCUe)
{
var WFVsb=FFPOm.data("config")
var OioYm=WFVsb.image_size;
var qnZTq=ZxssQ(FFPOm,SnCUe)
var xgZjp=qnZTq.photo[faigv]
var PPCvk=xgZjp.farm
var nXoYo=xgZjp.server
var nWlMA=xgZjp.id
var pFPER=xgZjp.secret 
if(ZluMR=="comment")
{
return xgZjp.title
}
var AhZSe=["t","s","m","z","l"]
var WXetn="";
var heiPU=0;
var vgRKD=0;
for(var i=0;i<AhZSe.length;i++)
{
var fjPev=AhZSe[i]
var rQsTe=xgZjp["url_"+fjPev]
if(rQsTe)
{
var aXOjt=parseInt(xgZjp["width_"+fjPev])
var uIUfU=parseInt(xgZjp["height_"+fjPev])
if((WXetn.length==0)||((aXOjt>heiPU)&&(uIUfU>vgRKD)))
{
WXetn=rQsTe;
heiPU=aXOjt
vgRKD=uIUfU
}
}
}
if(ZluMR=="th")
{
var QhTQv=""
for(var i=0;i<AhZSe.length;i++)
{
var fjPev=AhZSe[i]
var rQsTe=xgZjp["url_"+fjPev]
if(rQsTe)
{
var aXOjt=parseInt(xgZjp["width_"+fjPev])
var uIUfU=parseInt(xgZjp["height_"+fjPev])
QhTQv=rQsTe
if((aXOjt>OioYm)&&(uIUfU>OioYm))
{
break;
}
}
}
return QhTQv;
}
if(ZluMR=="big")
{
return WXetn 
}
if(ZluMR=="sl_img")
{
return WXetn 
}
if(ZluMR=="src")
{
return WXetn 
}
if(ZluMR=="size")
{
return new Size(heiPU,vgRKD)
}
return ""
}
if(faigv>=FFPOm.data("datas").images.length)
{
return ";"
}
var xgZjp=FFPOm.data("datas").images[faigv]
var cFIpt=FFPOm.data("folder");
if(ZluMR=="th")
{
return cFIpt+"th_"+xgZjp.fn+"?"+xgZjp.mod_th
}
if(ZluMR=="big")
{
return cFIpt+"big_"+xgZjp.fn+"?"+xgZjp.mod
}
if(ZluMR=="sl_img")
{
return cFIpt+"sl_"+xgZjp.fn+"?"+xgZjp.mod
}
if(ZluMR=="src")
{
return cFIpt+xgZjp.fn+"?"+xgZjp.mod
}
if(ZluMR=="size")
{
return new Size(xgZjp.size.w,xgZjp.size.h)
}
if(ZluMR=="link")
{
if(xgZjp.lnk&&(xgZjp.lnk.url.length>0))
{
var CArrW=xgZjp.lnk.url;
return CArrW;
}
return "";
}
if(ZluMR=="comment")
{
var lUpcq=""
if(xgZjp.comment)
lUpcq+=xgZjp.comment
lUpcq=lUpcq.replace(/\n/gi,"<br>")
if(lUpcq.length>0)lUpcq+="<br>"
if(xgZjp.lnk&&(xgZjp.lnk.url.length>0))
{
var CArrW=xgZjp.lnk.url;
var KKboQ=waJSONLinkToOnClick(xgZjp.lnk)
lUpcq+="<div class='wa-gallery-comment-link' "+KKboQ+" >"+CArrW+"</div>"
}
return lUpcq;
}
if(ZluMR=="tooltip")
{
return(xgZjp.tooltip)
}
}
function WtPts(MCgOj,FFPOm,saCQP)
{
var xnirP=iKlon(FFPOm);
var hpRZB=FFPOm.data("datas").global_config;
var sgFkc=FFPOm.data("type_gallery");
var ZqHqw=waJSQuery(">.wa-dyn-loader",MCgOj);
waActivateDynamicLoader(MCgOj)
var fsFLP=waJSQuery(">.wa-gallery-image",MCgOj);
if(saCQP==null)
{
ZqHqw.hide()
fsFLP.hide()
MCgOj.hide()
return;
}
ZqHqw.show()
fsFLP.hide() 
MCgOj.show()
var ipAxY=false;
var KWTAR=FFPOm.data("mode")
var cFIpt=FFPOm.data("folder");
var AhBIu="";
var QuNih=extractParamInfo(xnirP,"source")
var EkMuV=mJShq(FFPOm);
if((KWTAR=="normal")&&(sgFkc==0))
{
ipAxY=true;
}
if((KWTAR=="normal")&&(sgFkc==1)&&(hpRZB.open_popup_when_clicking==true))
{
ipAxY=true;
}

if((KWTAR=="fullscreen")||(EkMuV==false))
{
var aXOjt=getWindowSize().width();
var uIUfU=getWindowSize().height();
var lEiUJ=25;
var fiIlg=0;
if(EkMuV==false)
{
aXOjt=FFPOm.width();
uIUfU=FFPOm.height();
lEiUJ=hpRZB.inner_slideshow_image_margin;
}
var YuNJJ=new Size(aXOjt-2*lEiUJ,uIUfU-2*lEiUJ-fiIlg)
var SPNnN=wevFS(FFPOm,saCQP,"size");
var LsEiY=(((sgFkc==1)||(sgFkc==2))&&(hpRZB.fit_image_to_slideshow==true));
var bWANP=true;
if((KWTAR=="normal")&&LsEiY)
{
bWANP=false;
}
if(bWANP)
{
SPNnN.scale(YuNJJ)
}
else
{
SPNnN=new Size(FFPOm.width(),FFPOm.height());
}
if(KWTAR=="fullscreen")
{
var rviWI=oCklj(FFPOm)
SPNnN.scale(rviWI)
}
if(KWTAR=="normal")
{
AhBIu=wevFS(FFPOm,saCQP,"sl_img");
}
else
{
AhBIu=wevFS(FFPOm,saCQP,"big");
}
var vwsfN=false;
if(QuNih.length>0)
{
if(LsEiY)
{
vwsfN=true;
}

}
fsFLP.css("width",SPNnN.width())
fsFLP.css("height",SPNnN.height())
MCgOj.css("width",SPNnN.width())
MCgOj.css("height",SPNnN.height())
if(vwsfN)
{
var AgVRQ=wevFS(FFPOm,saCQP,"size");
var iUeHO=AgVRQ;
iUeHO.scaleByExpanding(SPNnN.clone())
fsFLP.css("width",iUeHO.width())
fsFLP.css("height",iUeHO.height())
var bKuut=-(iUeHO.width()-SPNnN.width())/2;
var Ddcvf=-(iUeHO.height()-SPNnN.height())/2;
fsFLP.css({"left":bKuut,"top":Ddcvf})
}
var CGagX=Math.round((aXOjt-SPNnN.width())/2)
var OhFqD=Math.round((uIUfU-fiIlg-SPNnN.height())/2)
var xLcRr=waJSQuery(window).scrollLeft();
var siKmf=waJSQuery(window).scrollTop();
if(KWTAR!="normal")
{
CGagX+=xLcRr
OhFqD+=siKmf
}
MCgOj.css("left",CGagX)
MCgOj.css("top",OhFqD)
}
else
{
var HgHAk=false;
if(QuNih.length>0)
{
HgHAk=true;
}
if(HgHAk)
{
var WFVsb=FFPOm.data("config")
var OioYm=WFVsb.image_size;
var pXRJt=new Size(OioYm,OioYm)
var SPNnN=wevFS(FFPOm,saCQP,"size");
var iUeHO=SPNnN.clone();
iUeHO.scaleByExpanding(pXRJt) 
if(iUeHO.width()==iUeHO.height())
{
var sEPQo=Math.min(OioYm,SPNnN.width())
var BDSgL=Math.min(OioYm,SPNnN.height())
fsFLP.css({"width":sEPQo,"height":BDSgL,"clip":"rect(auto auto auto auto)","left":(pXRJt.width()-sEPQo)/2,"top":(pXRJt.height()-BDSgL)/2});
}
else
{
fsFLP.css({width:iUeHO.width(),height:iUeHO.height()});
if(iUeHO.width()>iUeHO.height())
{
var Vxftg=Math.floor((iUeHO.width()-pXRJt.width())/2);;
fsFLP.css({"left":-Vxftg,"top":(pXRJt.height()-iUeHO.height())/2,"clip":"rect(auto "+(iUeHO.width()-Vxftg)+"px auto "+Vxftg+"px)"});
}
else
{
var vjgjN=Math.floor((iUeHO.height()-pXRJt.height())/2);;
fsFLP.css({"left":(pXRJt.width()-iUeHO.width())/2,"top":-vjgjN,"clip":"rect("+vjgjN+"px auto "+(iUeHO.height()-vjgjN)+"px auto)"});
}
}
}
AhBIu=wevFS(FFPOm,saCQP,"th");
}
MCgOj.css('cursor',(ipAxY)?'pointer':'Default');
var WOQWE=fsFLP.attr("src")
if(WOQWE!=AhBIu)
{
fsFLP.load(function(){
var fsFLP=waJSQuery(this);
ZqHqw.hide()
fsFLP.show()
});
}
else
{
ZqHqw.hide()
fsFLP.show()
}
fsFLP.attr("title",wevFS(FFPOm,saCQP,"tooltip"))
fsFLP.attr("src",AhBIu)
ZqHqw.css("left",(fsFLP.width()-ZqHqw.width())/2)
ZqHqw.css("top",(fsFLP.height()-ZqHqw.height())/2)
}
function ieoZo(FFPOm)
{
var Cwwig=iKlon(FFPOm);
var DxcdH=parseInt(Cwwig.data("auto_diapo"))
var sgFkc=parseInt(Cwwig.data("type_gallery"))
var ScQjo=ipXuI(FFPOm)
if(isMSIE()) 
{
FFPOm.css("background-image","url(wa_transparent.gif)")
}
var KWTAR=FFPOm.data("mode")
var WFVsb=FFPOm.data("config")
var hpRZB=FFPOm.data("datas").global_config
var xNWRE=""
xNWRE+="<div style=\"position:absolute;left:"+WFVsb.margin_left+"px;top:"+WFVsb.margin_top+"px;padding:0px;";
xNWRE+="width:"+FFPOm.width()+"px;\" class=\"wa-gallery-page\">"
var gNcoA="" 

if(WFVsb.has_shadow)
{
gNcoA+="wa-gallery-shadow "
}
var n=0;
var nZdrq=WFVsb.image_spacing;
for(var uWxeb=0;uWxeb<WFVsb.rows;uWxeb++)
{
var wwAal=WFVsb.image_spacing;
for(var WPiGr=0;WPiGr<WFVsb.cols;WPiGr++)
{
xNWRE+="<div class='wa-gallery-image-contenair "+gNcoA+"' style=\"position:absolute;left:"+wwAal+"px;top:"+nZdrq+"px;width:"+WFVsb.image_size+"px;height:"+WFVsb.image_size+"px;\">"
xNWRE+="<img class='wa-gallery-image' style=\"position:absolute;left:0px;top:0px;width:"+WFVsb.image_size+"px;height:"+WFVsb.image_size+"px;border:none;\"/>" 
xNWRE+=htmlDynamicLoader(true,FFPOm.width(),FFPOm.height()) 
xNWRE+="</div>"
wwAal+=WFVsb.image_size+2*WFVsb.image_spacing
if(n>ScQjo)
{
break
}
n++;
}
nZdrq+=WFVsb.image_size+2*WFVsb.image_spacing
}
xNWRE+="</div>";
var BeRLs=FFPOm.find(".wa-gallery-scroll-pane")
BeRLs.append(xNWRE);
BeRLs.append(xNWRE);
var tAnHK=SBOJM(FFPOm,0);
var cFIpt=FFPOm.data("folder");
if(FFPOm.data("datas")==undefined)
{
alert("_folder="+cFIpt)
}
var SZeiR=WFVsb.default_selected_image;
var FlspL=0;
if(SZeiR)
{
FlspL=Math.floor(SZeiR/gikeU(FFPOm))
}
FFPOm.data("page",FlspL)
var hRxST=waJSQuery(">.wa-gallery-image-contenair",tAnHK);
var LIahw=RYEpe(FFPOm)*gikeU(FFPOm)
hRxST.each(function(i)
{
if(LIahw+i<ScQjo)
{
WtPts(waJSQuery(this),FFPOm,LIahw+i)
}
else
{
WtPts(waJSQuery(this),FFPOm,null)
}
});
var iIGMd=SBOJM(FFPOm,1);
iIGMd.hide() 
var FCMlr=FFPOm.find(".wa-gallery-page")
var VCOOR=true;
if((sgFkc==1)||(sgFkc==2))
{
VCOOR=false;
if(hpRZB.open_popup_when_clicking)
{
VCOOR=true;
}
}
if(VCOOR)
FCMlr.each(function(i)
{
var hRxST=waJSQuery(">.wa-gallery-image-contenair",waJSQuery(this));
hRxST.each(function(i)
{
var fsFLP=waJSQuery(this) 
fsFLP.css("cursor","pointer")
fsFLP.click(function(){
var FlspL=RYEpe(FFPOm)
var NCWhT=gikeU(FFPOm)
var SEOUk=NCWhT*FlspL+i
mFaSs(FFPOm,SEOUk)
return false 
});
});
});
var ExwNC=FFPOm.find(".wa-gallery-navigation")
var PeehO="wa-gallery-bt-design wa-gallery-button "
PeehO+=(KWTAR=="normal")?"wa-gallery-bt-action-mini wa-gallery-corner-mini":"wa-gallery-bt-action-big wa-gallery-corner-big"
var gZcRL=""
gZcRL+=(KWTAR=="normal")?"wa-gallery-button wa-gallery-bt-design-arrow wa-gallery-arrow-mini wa-gallery-corner-mini":"wa-gallery-bt-design-arrow"
ExwNC.append("<div class=\"wa-gallery-comment-zone\"></div>") 
if(fbJHi(FFPOm)==false)
{
ExwNC.append("<div class=\"wa-gallery-arrow  param[type(prev)] "+gZcRL+"\"></div>")
ExwNC.append("<div class=\"wa-gallery-arrow param[type(next)] "+gZcRL+"\"></div>")
ExwNC.append("<div class=\"wa-gallery-bt-action param[type(act-close)] wa-gallery-bt-corner\"></div>")
ExwNC.append("<div class=\"wa-gallery-bt-action param[type(act-list)] wa-gallery-bt-corner\"></div>")
ExwNC.append("<div class=\"wa-gallery-bt-action param[type(act-diapo)] wa-gallery-bt-corner\"></div>")
}
var RmBDC="wa-gallery-bt-design "
RmBDC=""
RmBDC+=(KWTAR=="normal")?"wa-gallery-page-selector-mini wa-gallery-corner-mini":"wa-gallery-page-selector-big wa-gallery-corner-big"
ExwNC.append("<div style='position:absolute;' class=\"wa-gallery-page-selector "+RmBDC+"\"></div>")
FFPOm.find(".wa-gallery-arrow").each(function(i)
{
var QwxEo=waJSQuery(this);
var JKste=extractParamInfo(QwxEo,"type")
if(JKste=="prev")
{
QwxEo.html("<img class='wa-gallery-arrow-left' style='display:none' src=\"wa_fancybox/fancy_nav_left.png\" border=0>")
}
else
{
QwxEo.html("<img class='wa-gallery-arrow-right' style='display:none' src=\"wa_fancybox/fancy_nav_right.png\" border=0>")
}
QwxEo.click(function() 
{
var xnirP=QwxEo.parents(".wa-gallery");
SBOJM(xnirP,0)
var FFPOm=waJSQuery(this)
var OHuMS=RYEpe(xnirP)
var vFgZO=(JKste=="next")?(OHuMS+1):(OHuMS-1);
rYuFo(xnirP,vFgZO)
return false
});
{
var iImin=QwxEo.find("img")
iImin.fadeOut()
QwxEo.hover(function()
{
iImin.stop(true,true).fadeIn()
},function()
{
iImin.stop(true,true).fadeOut()
});
}
});
FFPOm.find(".wa-gallery-bt-action").each(function(i)
{
var QwxEo=waJSQuery(this);
var JKste=extractParamInfo(QwxEo,"type")
QwxEo.css({"width":41,"height":28}) 
if(JKste=="act-diapo")
{
QwxEo.html("<img src='wa_gallery/wa_bt_start_diapo.png' border=0>")
}
else
if(JKste=="act-list")
{
QwxEo.html("<img src='wa_gallery/wa_bt_list.png' border=0>")
}
else
if(JKste=="act-close")
{
QwxEo.css({"width":30,"height":30})
QwxEo.html("<img src='wa_fancybox/fancy_close.png' border=0>")
}
centerElement(QwxEo,"div")
QwxEo.click(function()
{
var xnirP=QwxEo.parents(".wa-gallery");
iSwWj(xnirP)
if(JKste=="act-list")
{
var vsUAT=RYEpe(xnirP)*gikeU(xnirP)
iKlon(xnirP).data("fullscreen_contenair","windows");
loadFullscreen("fullscreen_list",vsUAT)
}
if(JKste=="act-diapo")
{
wTPJA(iKlon(xnirP))
}
if(JKste=="act-close")
{
closeFullscreen()
}
return false;
});
});
if(KWTAR=="normal")
{
if(hpRZB.always_display_nav_elements)
{
iPaSZ(FFPOm,true)
}
else
{
FFPOm.hover(function(){iPaSZ(waJSQuery(this),true);},function(){iPaSZ(waJSQuery(this),false);});
iPaSZ(FFPOm,false)
}
}
else
{
iPaSZ(FFPOm,true)
}
xQSic(FFPOm,false)
if(iKlon(FFPOm).data("auto_diapo")==1)
{
orAQF(FFPOm)
}
else
{
EOTuP(FFPOm)
}
centerGalleryContainer();
var oxorc=document.wa_global_query_info
if(oxorc)
{
if(oxorc.m_unid+"/"==cFIpt)
{
mFaSs(FFPOm,oxorc.m_index_item) 
}
}
}
function iPaSZ(FFPOm,hYlDX)
{
if(hYlDX==FFPOm.data("_is_visible"))
{
return;
}
var KWTAR=FFPOm.data("mode")
var WFVsb=FFPOm.data("config")
var hpRZB=FFPOm.data("datas").global_config
var sgFkc=FFPOm.data("type_gallery");
FFPOm.data("_is_visible",hYlDX);
if(hpRZB.always_display_nav_elements&&(hYlDX==false))
{
return;
}
{
if(isMSIE_lower_than_ie9())
{
var ExwNC=FFPOm.find(".wa-gallery-navigation");
var uwBGg=ExwNC.children()
if(hYlDX)
{
uwBGg.stop(true,true).fadeIn();
EOTuP(FFPOm)
}
else
{
uwBGg.stop(true,true).fadeOut()
}
}
else
{
var ExwNC=FFPOm.find(".wa-gallery-navigation");
var uwBGg=ExwNC.children()
if(hYlDX)
{
uwBGg.stop(true,true).fadeIn();
EOTuP(FFPOm)
}
else
{
uwBGg.stop(true,true).fadeOut()
}
}
}
ARSNQ(FFPOm)
}
function EOTuP(FFPOm)
{
var ExwNC=FFPOm.find(".wa-gallery-navigation")
if(document.internalPreview)
{
ExwNC.hide()
return;
}
var xnirP=FFPOm;
var sgFkc=FFPOm.data("type_gallery");
var KWTAR=FFPOm.data("mode")
var mlbCe=sgFkc>0
var hpRZB=FFPOm.data("datas").global_config
var VCOOR=true;
if((sgFkc==1)||(sgFkc==2))
{
VCOOR=false;
if(hpRZB.open_popup_when_clicking)
{
VCOOR=true;
}
}
var ledSG=(KWTAR=="fullscreen")||((KWTAR=="normal")&&(VCOOR==false)) 
var ScQjo=ipXuI(FFPOm);
var gVnVo=rsmve(FFPOm);
var gEcGU=FFPOm.width()
var XUSkG=FFPOm.height()
if((KWTAR=="fullscreen")||(KWTAR=="fullscreen_list"))
{
gEcGU=getWindowSize().width()
XUSkG=getWindowSize().height()
}
var Zpgka=rbMhu(FFPOm) 
var VdLVF=Math.min(gEcGU,Zpgka)
var qaohU=Math.min(XUSkG,Zpgka)
if((KWTAR=="fullscreen")||(KWTAR=="fullscreen_list"))
{
var rviWI=oCklj(FFPOm)
VdLVF=rviWI.width()
qaohU=rviWI.height()
}
var lEiUJ=10;
var AReOS=3;
var CGagX=(gEcGU-VdLVF)/2+lEiUJ
var DeOuX=(gEcGU-VdLVF)/2+VdLVF-lEiUJ
var OhFqD=(XUSkG-VdLVF)/2+lEiUJ
var xLcRr=waJSQuery(window).scrollLeft();
var siKmf=waJSQuery(window).scrollTop();
if(KWTAR=="normal")
{
CGagX=AReOS
DeOuX=gEcGU-AReOS
}
if(KWTAR=="fullscreen_list")
{
CGagX=lEiUJ
DeOuX=gEcGU-lEiUJ
}
var WeNZf=asSMZ(FFPOm)
var tAnHK=SBOJM(FFPOm,WeNZf);
var fsFLP=tAnHK.find("img")
var LbtOo=fsFLP.width();
LbtOo=Math.max(LbtOo,150) 
FFPOm.find(".wa-gallery-arrow").each(function(i)
{
var QwxEo=waJSQuery(this);
var iImin=QwxEo.find("img") 
var JKste=extractParamInfo(QwxEo,"type")
var mSkWq=RYEpe(xnirP);
var ChIaU=10
var QfBPM=0;
var rEHtO=(XUSkG-QwxEo.height())/2;
var uMvQH=0;
if(ledSG)
{
if(KWTAR=="normal")
{
QwxEo.css({"width":gEcGU/3,"height":XUSkG})
}
else
{
QwxEo.css({"width":fsFLP.width()/3,"height":fsFLP.height()*2/3})
}
}
else
{
if(KWTAR=="normal")
{
QwxEo.css({"height":XUSkG})
}
else
{
QwxEo.css({"height":fsFLP.height()*2/3})
}
}

if(JKste=="prev")
{
QfBPM=CGagX
uMvQH=0;
if(KWTAR=="normal")
{
QfBPM=0
}
else
{
QfBPM=(gEcGU-LbtOo)/2
}
rEHtO=(XUSkG-QwxEo.height())/2
uMvQH=ChIaU
if(mSkWq==0)
{
iImin.hide();
QwxEo.hide();
}
else
QwxEo.show();
}
else
{
QfBPM=DeOuX-QwxEo.width()
uMvQH=(QwxEo.width()-30)
if(KWTAR=="normal")
{
QfBPM=gEcGU-QwxEo.width();
}
else
{
QfBPM=(gEcGU-LbtOo)/2+LbtOo-QwxEo.width()
}
rEHtO=(XUSkG-QwxEo.height())/2
uMvQH=QwxEo.width()-30-ChIaU
if(mSkWq>=rsmve(FFPOm)-1)
{
iImin.hide();
QwxEo.hide();
}
else QwxEo.show();
}
if((KWTAR=="fullscreen")||(KWTAR=="fullscreen_list"))
{
QfBPM=xLcRr+QfBPM
rEHtO=siKmf+rEHtO
}
QwxEo.css({"left":QfBPM,"top":rEHtO})
if(isMSIE())
{
QwxEo.css("background-image","url(wa_transparent.gif)")
}
iImin.css({"position":"absolute","left":uMvQH,"top":(QwxEo.height()-30)/2})
if(BqSAA(FFPOm))
{
iImin.hide();
QwxEo.hide();
}
});
var SWZdK=FFPOm.find(".wa-gallery-page-selector")
if((hpRZB.type_display_page_navigator!=0)&&(gVnVo>1) &&((KWTAR=="normal")||(KWTAR=="fullscreen_list")))
{
var baSVF=false;
var paTFH=20;
var FLuWk=20;
var wEjKA=FLuWk
var rHQZw=12 
var bnSaq=gEcGU-2*rHQZw;

var uDhTT=paTFH*gVnVo+2*rHQZw
if(uDhTT>bnSaq)
{
baSVF=false;
wEjKA=30
}
else
{
baSVF=true;
FLuWk=paTFH;
wEjKA=30
}
var pSbWD=FLuWk*gVnVo+2*rHQZw
bnSaq=Math.min(bnSaq,pSbWD)
SWZdK.css("height",wEjKA)
SWZdK.html("<div style='position:absolute;' class='wa-gallery-page-selector-inner'></div>")
var FfZEV=SWZdK.find(".wa-gallery-page-selector-inner")
if(baSVF)
{
}
else
{
FfZEV.css({"background-color":"#000000","opacity":0.8,"border":"1px solid rgba(220,220,220,0.7)","border-radius":4})
}
var Xcnpl=RYEpe(FFPOm);
var BCkFM=FLuWk
var wJomq=Math.floor(bnSaq/FLuWk) 
wJomq=Math.min(wJomq,gVnVo)
if(wJomq>1)
{
if(KWTAR=="normal")
{
var kEFMK=2 
if(hpRZB.type_display_page_navigator==1) 
{
SWZdK.css("top",XUSkG-SWZdK.height()-kEFMK)
}
else
if(hpRZB.type_display_page_navigator==2) 
{
SWZdK.css("top",XUSkG)
}
}
else
{
SWZdK.css("top",XUSkG-50)
}
SWZdK.css("width",bnSaq)
SWZdK.css("left",(gEcGU-SWZdK.width())/2) 
FfZEV.css({"width":bnSaq,"height":FLuWk,"top":wEjKA-FLuWk}) 
var YBIGn=Math.ceil(Xcnpl-(wJomq/2))
YBIGn=Math.max(YBIGn,0)
var OCffX=YBIGn+wJomq
OCffX=Math.min(OCffX,gVnVo)
if(OCffX-wJomq>=0)
{
YBIGn=OCffX-wJomq
}
var xBut=(bnSaq-(wJomq*FLuWk))/2
var xpQZw="";
for(var i=0;i<wJomq;i++)
{
var saCQP=YBIGn+i;
if(saCQP<gVnVo)
{
if(baSVF)
{
xpQZw+="<div class='wa-gallery-page-selector-bt-design' style='vertical-align:middle;line-height:"+BCkFM+"px;' ></div>";
}
else
{
xpQZw+="<div class='wa-gallery-page-selector-bt-design' style='vertical-align:middle;line-height:"+BCkFM+"px;' >"+(saCQP+1)+"</div>";
}
}
}
FfZEV.html(xpQZw)
var jUrtg=SWZdK.find(".wa-gallery-page-selector-bt-design") 
jUrtg.each(function(i){
var QwxEo=waJSQuery(this)
var saCQP=YBIGn+i;
if(baSVF)
{
if(Xcnpl==saCQP)
{
QwxEo.html("<img src='wa_gallery/wa_navigation_past_on.png' border=0>")
}
else
{
QwxEo.html("<img src='wa_gallery/wa_navigation_past_off.png' border=0>")
}
}
else
{
if(Xcnpl==saCQP)
{
QwxEo.css({"font-size":"14px","font-weight":"bold"})
}
else
{
QwxEo.css({"font-size":"12px","font-weight":"normal"})
}
}
QwxEo.css({"left":xBut,"top":0,"width":FLuWk,"height":BCkFM})
xBut+=FLuWk;
if(Xcnpl!=saCQP)
{
QwxEo.click(function()
{
rYuFo(FFPOm,saCQP);
return false
})
}
}) 
}
else
{
SWZdK.hide();
}
}
else
{
SWZdK.hide();
}
var NRePK=0;
var lOKfL=0;
var fLZOm=0;
var lEiUJ=10;
if((KWTAR=="normal")||(KWTAR=="fullscreen_list"))
{
if(KWTAR=="normal")
{
NRePK=gEcGU
lOKfL=0
}
if(KWTAR=="fullscreen_list")
{
NRePK=gEcGU-lEiUJ
lOKfL=lEiUJ
}
}
else
{
var nwTbQ=oCklj(FFPOm);
NRePK=(gEcGU-nwTbQ.width)/2+nwTbQ.width
lOKfL=(XUSkG-nwTbQ.height)/2
}
var XCkIf=6;
FFPOm.find(".wa-gallery-bt-action").each(function(i)
{
var QwxEo=waJSQuery(this);
var JKste=extractParamInfo(QwxEo,"type")
var iVwTB=false;
var djNVC=true 
if(JKste=="act-list")
{
if(hpRZB.has_fullscreen_thumbnail_mode)
{
iVwTB=((BqSAA(FFPOm)==false)&&(KWTAR=="fullscreen")&&(rsmve(FFPOm)>1))
}
}
if(JKste=="act-diapo")
{
{
iVwTB=((BqSAA(FFPOm)==false)&&(KWTAR=="fullscreen")&&(rsmve(FFPOm)>1)&&(hpRZB.show_diaporama_button==true))
}
}
var EkMuV=mJShq(FFPOm);
if(JKste=="act-close")
{
iVwTB=(KWTAR!="normal")&&(BqSAA(FFPOm)==false)&&(EkMuV==true)
if(KWTAR=="fullscreen")
{
djNVC=false;
}
}
if(iVwTB&&djNVC)
{
var arFkP=QwxEo.width()+XCkIf
fLZOm+=arFkP
NRePK-=arFkP
}
QwxEo.css("top",lOKfL-QwxEo.height()-2)
QwxEo.css("left",NRePK)
if(iVwTB) QwxEo.show();else QwxEo.hide();
QwxEo.data("wa_is_visible",iVwTB)
});
if((KWTAR=="fullscreen")||(KWTAR=="fullscreen_list"))
{
var kAVRv=(gEcGU-fLZOm)/2
var WeNZf=asSMZ(FFPOm)
var tAnHK=SBOJM(FFPOm,WeNZf);
var fsFLP=tAnHK.find("img")
var qsHJl=(gEcGU-fsFLP.width())/2+fsFLP.width();
FFPOm.find(".wa-gallery-bt-action").each(function(i)
{
var QwxEo=waJSQuery(this);
if(QwxEo.data("wa_is_visible"))
{
var JKste=extractParamInfo(QwxEo,"type")
var djNVC=true
if(KWTAR=="fullscreen")
{
djNVC=false;
}
var QfBPM=0;
var rEHtO=0;
var fKwMA=QwxEo.width();
if(djNVC)
{
QfBPM=kAVRv;
if(KWTAR=="fullscreen")
{
rEHtO=Math.max(5,OhFqD-30)
}
if(KWTAR=="fullscreen_list")
{
rEHtO=5;
}
kAVRv+=fKwMA+XCkIf
}
else
{
if(JKste=="act-close")
{
qsHJl=qsHJl-fKwMA/2
QfBPM=qsHJl
rEHtO=(XUSkG-fsFLP.height())/2-QwxEo.height()/2
}
if(JKste=="act-list")
{
qsHJl=qsHJl-5
qsHJl=qsHJl-fKwMA
QfBPM=qsHJl
rEHtO=(XUSkG-fsFLP.height())/2-QwxEo.height()/2
}
if(JKste=="act-diapo")
{
qsHJl=qsHJl-5
qsHJl=qsHJl-fKwMA
QfBPM=qsHJl
rEHtO=(XUSkG-fsFLP.height())/2-QwxEo.height()/2
}
}
QfBPM+=xLcRr
rEHtO+=siKmf
QwxEo.css({"left":QfBPM,"top":rEHtO})
}
})
}
}
function oCklj(FFPOm)
{
var lEiUJ=10;
var aXOjt=getWindowSize().width();
var uIUfU=getWindowSize().height();
if(isIPhone())
{
return new Size(aXOjt-2*lEiUJ,uIUfU-2*lEiUJ);
}
var Zpgka=rbMhu(FFPOm) 
return new Size(Math.min(Zpgka,aXOjt-2*lEiUJ),Math.min(Zpgka,uIUfU-2*lEiUJ))
}
function rbMhu(FFPOm)
{
var Zpgka=FFPOm.data("datas").global_config.max_image_resolution
if(Zpgka==-1) Zpgka=6000;
return Zpgka
}
function hiccY(url,WIIFe,kfrJV)
{
var e=document.createElement("script");
e.src=url;
e.type="text/javascript";
e.onerror=function(){

}
if(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)){
e.onreadystatechange=function(){
if((this.readyState=='complete')||(this.readyState=='loaded')){
WIIFe(kfrJV)
}
}
}else
{
e.onload=function(){
WIIFe(kfrJV)
}
}
document.getElementsByTagName("head")[0].appendChild(e);
}
function wa_jsonFlickrApi(SnCUe)
{
document.wa_current_datas_gallery=SnCUe
}
function rINnh(kfrJV)
{
var FFPOm=kfrJV.objGallery 
var ggQnL=kfrJV.config
var nfhYZ=kfrJV.idAlbum
var json=kfrJV.json 
{
var SnCUe=document.wa_current_datas_gallery
if(SnCUe==null)
{
return;
}
if(SnCUe.stat=="fail")
{
return;
}
iKlon(FFPOm).data("3rdparty_datas",SnCUe)
FFPOm.data("datas",json)
if(!ggQnL) ggQnL=FFPOm.data("datas").normal_config;
FFPOm.data("config",ggQnL)
FFPOm.data("folder",nfhYZ+"/")
ieoZo(FFPOm);
}
}
function mdZxk(FFPOm,ggQnL)
{
xQSic(FFPOm,true)
var nfhYZ=extractParamInfo(FFPOm,"config_key")
var pfgHF=extractParamInfo(FFPOm,"modif_id") 
var QuNih=extractParamInfo(iKlon(FFPOm),"source") 
var UMvnG="";
if(nfhYZ.length>0)
{
UMvnG=nfhYZ+"/photo-album-definition" 
var rSDaI=Translator.m_lang_for_filename
if(rSDaI.length>0)
{
rSDaI="_"+rSDaI;
}
UMvnG+=rSDaI+".js"
UMvnG+="?t="+pfgHF
}




function CxRRW(json)
{
var sgFkc=FFPOm.data("type_gallery");
var KWTAR=FFPOm.data("mode")
var QuNih=extractParamInfo(iKlon(FFPOm),"source") 
var gvett=null
if(QuNih=="flickr")
{
var lxNAl=extractParamInfo(iKlon(FFPOm),"user_id") 
var oTvOk=extractParamInfo(iKlon(FFPOm),"album") 
var vNJWS="flickr.people.getPublicPhotos"
if(oTvOk.length>0)
{
vNJWS="flickr.photosets.getPhotos"
}
gvett="http://api.flickr.com/services/rest/?method="+vNJWS+"&api_key=624245e80423b78999b7037a68645766&user_id="+lxNAl
gvett+="&extras=url_t, url_s, url_m, url_z, url_l, url_o" 
gvett+="&format=json"
gvett+="&privacy_filter=1"
gvett+="&photoset_id="+oTvOk
gvett+="&jsoncallback=wa_jsonFlickrApi"
}
var SnCUe=iKlon(FFPOm).data("3rdparty_datas")
if((gvett)&&(SnCUe==undefined))
{
var kfrJV={objGallery:FFPOm,"config":ggQnL,"idAlbum":nfhYZ,"json":json}

hiccY(gvett,rINnh,kfrJV) 
return;
}
FFPOm.data("datas",json)
if(!ggQnL) ggQnL=FFPOm.data("datas").normal_config;
FFPOm.data("config",ggQnL)
FFPOm.data("folder",nfhYZ+"/")
ieoZo(FFPOm);
if(isMobileBrowser())
{
FFPOm.touchwipe({
wipeLeft:function(){
mBgPD(FFPOm)
return false
},wipeRight:function(){
WWFhw(FFPOm)
return false
},preventDefaultEvents:true
})
}
if(KWTAR!="normal")
{
if(waJSQuery.fn.mousewheel)
{
FFPOm.bind('mousewheel.fb',function(e,delta)
{
e.preventDefault();
if(delta>0)
{
WWFhw(FFPOm)
}
else
{
mBgPD(FFPOm)
}
});
}
}
}
if(nfhYZ.length==0)
{

CxRRW(waPreviewJsonGalleryDatas)
}
else
{
waJSQuery.getJSON(UMvnG,{},CxRRW)
}
}
function HcWIk(FFPOm,e)
{
var KWTAR=FFPOm.data("mode")
if(KWTAR=="normal") return;
if(e.which=='27')
{
closeFullscreen()
e.preventDefault();
}
if(BqSAA(FFPOm)==false)
{
if(e.which=='37')
{
WWFhw(FFPOm)
e.preventDefault();
}
if(e.which=='39')
{
mBgPD(FFPOm)
e.preventDefault();
}
}
}
function initializeAllWA_gallery()
{
waJSQuery(".wa-gallery").each(function(index)
{
var FFPOm=waJSQuery(this)
FFPOm.data("mode","normal") 
var sgFkc=parseInt(extractParamInfo(FFPOm,"type_gallery"))
var DxcdH=parseInt(extractParamInfo(FFPOm,"auto_diapo"))
FFPOm.data("type_gallery",sgFkc)
FFPOm.data("auto_diapo",DxcdH)
if(sgFkc==1)
{
var ggQnL={
"rows":1,"cols":1,"image_size":100,"image_spacing":0,"nb_images_per_page":1,"margin_left":0,"margin_top":0,"default_selected_image":0,"has_shadow":false
}
mdZxk(FFPOm,ggQnL)
}
else
{
mdZxk(FFPOm)
}
});
waJSQuery(window).keydown(function(e){
var FFPOm=waJSQuery(".wa-fullscreen-contenair").find(".wa-gallery")
if(FFPOm&&(FFPOm.length>0))
{
HcWIk(FFPOm,e)
}
});
}
function iSwWj(FFPOm)
{
var KWTAR=FFPOm.data("mode")
if(KWTAR=="normal")
{
waJSQuery(document).data("origin_fullscreen_gallery",FFPOm)
}
}
function UNwUC(FFPOm)
{
var Cwwig=iKlon(FFPOm)
var LIahw=iKlon(FFPOm).data("current_image");
var KWTAR=FFPOm.data("mode")
loadFullscreen(KWTAR,LIahw)
}
function mFaSs(FFPOm,faigv)
{
if(BqSAA(FFPOm)) return;
var KWTAR=FFPOm.data("mode")
if((KWTAR=="normal")||(KWTAR=="fullscreen_list"))
{
iSwWj(FFPOm)
loadFullscreen("fullscreen",faigv)
}
else
if(KWTAR=="fullscreen")
{
return
}
}
function closeFullscreen()
{
var hkdxG=waJSQuery(document).data("origin_fullscreen_gallery") 
hkdxG.data("diaporama",false)
var FRrQR=waJSQuery(".wa-fullscreen-contenair");
FRrQR.fadeOut(200,function(){
var FFPOm=waJSQuery(document).data("origin_fullscreen_gallery")
FRrQR.empty()
FFPOm.focus()
})
waSetVisibilityMainPageContenair(true) 

}
function mJShq(FFPOm)
{
var KWTAR=FFPOm.data("mode")
var sgFkc=iKlon(FFPOm).data("type_gallery")
if((KWTAR=="normal")&&(sgFkc==1)) return false;
return true;
}
function loadFullscreen(EDADR,SZeiR)
{
var hkdxG=waJSQuery(document).data("origin_fullscreen_gallery")
if(SZeiR==undefined)
{
SZeiR=hkdxG.data("current_image");
}
else
{
hkdxG.data("current_image",SZeiR);
}

var QKKTh=getDocumentSize().width()
var lsKdw=getDocumentSize().height()
waSetVisibilityMainPageContenair(false) 
var nfhYZ=extractParamInfo(hkdxG,"config_key")
var xpQZw=""
xpQZw+="<div class='wa-dialog-container-bg' style='position:absolute;left:0px;top:0px;;' ></div>"
xpQZw+="<div style=\"";
xpQZw+="position:absolute;width:100%;height:100%;"
xpQZw+="overflow:hidden;";
xpQZw+="\" class=\"wa-gallery  param[config_key("+nfhYZ+")]\">";
xpQZw+="<div class=\"wa-gallery-scroll-pane\"></div>";
xpQZw+="<div class=\"wa-gallery-navigation\"></div>";
xpQZw+="</div>";
var FRrQR=waJSQuery(".wa-fullscreen-contenair");
FRrQR.empty()
FRrQR.html(xpQZw)
FRrQR.css("width",QKKTh)
FRrQR.css("height",lsKdw)
FRrQR.show()
var dabOi=FRrQR.find(".wa-dialog-container-bg");
var kVveS=new RGBColor(CONST_WA_GLOBAL_SETTINGS.overlayColor)
dabOi.css({"backgroundColor":kVveS.toHexaOpaqueColor(),"opacity":kVveS.a})
dabOi.css({width:QKKTh,height:lsKdw})
var FFPOm=FRrQR.find(".wa-gallery")
FFPOm.click(function(){
closeFullscreen()
return false
});
FRrQR.css("cursor","pointer") 
var qqqoq=200;
var dbiDe=5;
var SJQYe=false;
var jXDej=0;
var JdswJ=0;
var IuWjU=0;
if(EDADR=="fullscreen_list")
{
jXDej=50
JdswJ=30
if(rsmve(FFPOm)>1)
{
IuWjU=40
}
}
var MOKCC=QKKTh-2*jXDej
var bbxJP=lsKdw-(IuWjU+JdswJ)
if(EDADR=="fullscreen_list")
{
var JXmTj=hkdxG.data("datas").fullscreen_list_config
var lFnWW=Math.min(MOKCC,bbxJP)
qqqoq=Math.min(JXmTj.image_size,lFnWW*0.8)
var TGJvP=10 
dbiDe=(TGJvP/2)*qqqoq/100;
SJQYe=JXmTj.has_shadow;
}
var xLcRr=waJSQuery(window).scrollLeft();
var siKmf=waJSQuery(window).scrollTop();
var LZrAC=Math.floor((MOKCC)/(qqqoq+2*dbiDe));
var boKhf=Math.floor((bbxJP)/(qqqoq+2*dbiDe));
var xaKDh=siKmf+JdswJ+(bbxJP-boKhf*(qqqoq+2*dbiDe))/2;
var Hmjkh=xLcRr+(QKKTh-(LZrAC*(qqqoq+2*dbiDe)))/2;
var KWTAR=FFPOm.data("mode")
if(EDADR=="fullscreen")
{
qqqoq=800;
dbiDe=0;
LZrAC=1;
boKhf=1;
xaKDh=0;
Hmjkh=0;
}
FFPOm.data("mode",EDADR)
var ggQnL={
"rows":boKhf,"cols":LZrAC,"image_size":qqqoq,"image_spacing":dbiDe,"nb_images_per_page":LZrAC*boKhf,"margin_left":Hmjkh,"margin_top":xaKDh,"default_selected_image":SZeiR,"has_shadow":SJQYe
}
mdZxk(FFPOm,ggQnL)
return FFPOm
}
function ipXuI(FFPOm)
{
var SnCUe=iKlon(FFPOm).data("3rdparty_datas")
if(SnCUe)
{
return ZxssQ(FFPOm,SnCUe).photo.length
}
return iKlon(FFPOm).data("datas").images.length
}
function gikeU(FFPOm)
{
var tAnHK=SBOJM(FFPOm,0)
var CfKYj=waJSQuery(">.wa-gallery-image-contenair",tAnHK);
return CfKYj.length;
}
function rsmve(FFPOm)
{
var wEkRt=ipXuI(FFPOm);
return Math.ceil(wEkRt/gikeU(FFPOm));
}
function RYEpe(FFPOm)
{
var faigv=FFPOm.data("page")
return(faigv==undefined)?0:faigv;
}
function SBOJM(FFPOm,faigv)
{
var FCMlr=FFPOm.find(".wa-gallery-page")
var bRWKn=null;
FCMlr.each(function(i)
{
if(i==faigv)
{
bRWKn=waJSQuery(this)
return false;
}
});
return bRWKn;
}
function asSMZ(FFPOm)
{
var faigv=FFPOm.data("first-layout")
return(faigv==undefined)?0:faigv;
}
function iIvnR(FFPOm)
{
var faigv=FFPOm.data("isBusy")
return(faigv==undefined)?false:faigv;
}
function xQSic(FFPOm,b)
{
FFPOm.data("isBusy",b)
}
function WWFhw(FFPOm)
{
var OHuMS=RYEpe(FFPOm)
rYuFo(FFPOm,OHuMS-1)
}
function mBgPD(FFPOm)
{
var OHuMS=RYEpe(FFPOm)
rYuFo(FFPOm,OHuMS+1)
}
function iKlon(FFPOm)
{
if(FFPOm.data("mode")!="normal") return waJSQuery(document).data("origin_fullscreen_gallery")
return FFPOm
}
function opNdN()
{
var FFPOm=waJSQuery(".wa-fullscreen-contenair").find(".wa-gallery")
if(FFPOm&&(FFPOm.length>0))
{
return FFPOm
}
return null;
}
function BqSAA(FFPOm)
{
return FFPOm.data("diaporama")==true 
}
function orAQF(FFPOm)
{
var ZpgqR=iKlon(FFPOm).data("datas").global_config.diaporama_time*1000;
FFPOm.data("diaporama",true)
wa_timeout(function(){BdjXl(FFPOm)},ZpgqR)
}
function BdjXl(FFPOm)
{
if(BqSAA(FFPOm)==false)
{
return;
}
var JZDrp=null;
if(JZDrp==null) JZDrp=FFPOm;
if(RYEpe(JZDrp)>=rsmve(JZDrp)-1)
{

JZDrp.data("page",-1)
}
if(FFPOm.data("datas").global_config.random_diaporama)
{
var faigv=Math.round((ipXuI(FFPOm)-1)*Math.random());
JZDrp.data("page",faigv-1)
}
mBgPD(JZDrp)
orAQF(FFPOm);
}
function wTPJA(FFPOm)
{

var vsUAT=RYEpe(FFPOm)*gikeU(FFPOm)
var kFvha=loadFullscreen("fullscreen",vsUAT)
orAQF(kFvha)
}
