(function(){var A=1,S=G("sug"),B=G("kww"),N,Z=null,V=-1,E=false,Q=false,$=false,F=true,R=null,H=null,Y=0;function I(){B.setAttribute("autocomplete","on")}function c(){if(Browser.isIE)G("sugif").style.display="none";S.style.display="none";Y=0;F=true}function b(){var $=H.rows;for(var _=0;_<$.length;_++)$[_].className="ml"}var O={},f=true;function e(_){return function(){if(Browser.isGecko)B.blur();clearTimeout(Y);O.startTime=new Date();var A=this,_=0;while(A&&A.tagName=="TR"){A=A.previousSibling;_++}DynamicForm.sugCurIndex=_;B.value=N.s[_-1];L=B.value;B.focus();$=true}}function P($){var $=window.event||$,_=$.target||$.srcElement;if((new Date()-O.startTime)/1000>0.5&&L!=_.innerHTML)return;else{DynamicForm.submit();B.value=L;c()}}function K(){if(typeof(N)!="object"||typeof(N.s)=="undefined")return;F=false;var tab=C("table");with(tab){id="sug_t";style.width="100%";style.backgroundColor="#fff";cellSpacing=0;cellPadding=2;style.cursor="default"}var _=C("tbody");tab.appendChild(_);for(var I=0;I<N.s.length;I++){var A=_.insertRow(-1);A.onmouseover=function(){b();this.className="mo";Q=true};A.onmouseout=b;A.onmousedown=e(I);A.onmouseup=P;var D=A.insertCell(-1),$="";D.innerHTML=N.s[I];if(Browser.isOpera){D.style.lineHeight="20px";D.style.width=B.clientWidth+"px"}}S.innerHTML="";S.appendChild(tab);S.style.width=(((!Browser.isStrict)&&Browser.isIE)?B.offsetWidth:B.offsetWidth-2)+"px";S.style.top=(Browser.isIE)?(Browser.isGecko?B.offsetHeight-1:B.offsetHeight)+"px":(Browser.isGecko?B.offsetHeight-1:B.offsetHeight)+"px";S.style.display="block";if(Browser.isIE){var E=G("sugif");with(E.style){display="";position="absolute";width=S.offsetWidth+"px";height=tab.offsetHeight+"px"}}if(G("sug_t"))H=G("sug_t");V=-1;L=""}function J(A){A=A||window.event;E=false;var D=null;if(A.keyCode==9){c();return}if(A.keyCode==13){c();return}if(A.keyCode==38||A.keyCode==40){Q=false;if(S.style.display!="none"){var $=H.rows,C=$.length;for(var G=0;G<C;G++)if($[G].className=="mo"){V=G;break}b();if(A.keyCode==38)if(V==0){B.value=N.q;V=-1;E=true;DynamicForm.sugCurIndex=null}else{if(V==-1)V=C;D=$[--V];D.className="mo";var F=D,_=0;while(F&&F.tagName.toUpperCase()=="TR"){F=F.previousSibling;_++}DynamicForm.sugCurIndex=_;B.value=N.s[_-1];L=B.value}if(A.keyCode==40)if(V==C-1){DynamicForm.sugCurIndex=null;B.value=N.q;V=-1;E=true}else{D=$[++V];D.className="mo";F=D,_=0;while(F&&F.tagName.toUpperCase()=="TR"){F=F.previousSibling;_++}DynamicForm.sugCurIndex=_;B.value=N.s[_-1];L=B.value}if(!Browser.isIE)A.preventDefault()}}}window.baidu={sug:function($){if(typeof($)=="object"&&typeof($.s)!="undefined"&&typeof($.s[0])!="undefined"){N=$;K()}else{c();N={}}}};var T="",L=B.value,W=0;function _(){if(A==0)return;B.onbeforedeactivate=function(){if(F)return;window.event.cancelBubble=true;window.event.returnValue=false;$=false;return false};var J=true,K=B.value;if(typeof(H)!="undefined"&&H!=null){var _=H.rows;for(var L=0;L<_.length;L++)if(_[L].className=="mo")if(K==_[L].cells[0].innerHTML&&!Q)J=false}if(J&&!E){var D=encodeURIComponent(B.value),I=(new Date()).getTime(),G="";(function(){var $="web";switch($){case"mp3":G="http://sug.mp3.baidu.com/su?wd="+D+"&sc=hao123&t="+I;break;case"image":G="http://sug.image.baidu.com/su?wd="+D+"&fm=hao123&t="+I;break;case"video":G="http://sug.video.baidu.com/su?wd="+D+"&sc=hao123&t="+I;break;case"zhidao":G="http://zhidao.sug.baidu.com/su?wd="+D+"&sc=hao123&t="+I;break;default:case"web":G="http://suggestion.baidu.com/su?wd="+D+"&sc=hao123&t="+I;break;case"tieba":case"news":G=null;break}})();if(Z)document.body.removeChild(Z);Z=C("script");Z.src=G;document.body.appendChild(Z)}}function M(){var $=B.value;if($==T&&$!=""&&$!=L){if(W==0)W=setTimeout(_,100)}else{clearTimeout(W);W=0;T=$;if($=="")c();if(L!=B.value)L=""}}var U=setInterval(M,10),a=0;B.oncontextmenu=function(){E=false};if(A==1)B.onkeydown=J;f=false;window.onblur=function(){c()};B.onblur=function(){if(f)if(Y==0){Y=setTimeout(c,200);c()}f=false};document.onmousedown=function(_){if($){$=false;return false}B.onbeforedeactivate=function(){};_=_||window.event;var A=_.target||_.srcElement;if(A==B)return;while(A==A.parentNode)if(A==S||A==B){f=true;return}if(Y==0)Y=setTimeout(c,200)};function d(){if(typeof(Y)!="undefined"&&Y!=0)clearTimeout(Y);X()}on(window,"resize",d);S.style.zIndex=200;if(Browser.isIE){var g=C("IFRAME");g.src="javascript:void(0)";g.id="sugif";g.style.zIndex="20";with(g.style){display="none";position="absolute"}S.parentNode.insertBefore(g,S)}function X(){if(S.style.display!="none")setTimeout(function(){c();if(N!=null){K(N);B.focus()}},100)}function D($){if(Browser.isGecko){$=$||window.event;if($.ctrlKey)if($.keyCode==61||$.keyCode==107||$.keyCode==109||$.keyCode==96||$.keyCode==48)X()}}on(document,"keydown",D);window.onunload=function(){}})()