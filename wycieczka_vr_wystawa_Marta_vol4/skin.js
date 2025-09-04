// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: wystawa_Marty_1.ggsk
// Generated 2025-09-04T11:13:27

function pano2vrSkin(player,base) {
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('opt_url', 2, false);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_3d_preview_1', 2, true);
	player.addVariable('opt_3d_preview_2', 2, true);
	player.addVariable('vis_image_popup_1', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('opt_3d_preview_3', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IldhcnN0d2FfMSIgZGF0YS1uYW1lPSJXYXJzdHdhIDEiPgogPGRlZnM+CiAgPHN0eWxlPi5jbHMtMXtmaWxsOiMwZTMwMTA7fTwvc3R5bGU+CiA8L2RlZnM+CiA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xMyAtNzQuNzIpIiBjbGFzcz0iY2xzLTEiIGQ9Ik01MC4xMiw3NC43MmgwdjUwSDRhMy44OSwzLjg5LDAsMCwxLTMuODktMy44aDBWNzguNjJBMy45MSwzLjkxLDAsMCwxLDQsNzQuNzJaIi8+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 84px;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._koperta=document.createElement('div');
		els=me._koperta__img=document.createElement('img');
		els.className='ggskin ggskin_koperta';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="KOPERTA";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._koperta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._koperta.onclick=function (e) {
			me._image_1.ggVisible = !me._image_1.ggVisible;
			var flag=me._image_1.ggVisible;
			me._image_1.style[domTransition]='none';
			me._image_1.style.visibility=((flag)&&(Number(me._image_1.style.opacity)>0||!me._image_1.style.opacity))?'inherit':'hidden';
		}
		me._koperta.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_2.appendChild(me._koperta);
		me.divSkin.appendChild(me._svg_2);
		el=me._screentint_image=document.createElement('div');
		el.ggId="screentint_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_image.style[domTransition]='';
				if (me._screentint_image.ggCurrentLogicStateVisible == 0) {
					me._screentint_image.style.visibility=(Number(me._screentint_image.style.opacity)>0||!me._screentint_image.style.opacity)?'inherit':'hidden';
					me._screentint_image.ggVisible=true;
				}
				else {
					me._screentint_image.style.visibility="hidden";
					me._screentint_image.ggVisible=false;
				}
			}
		}
		me._screentint_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup_1', false);
		}
		me._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_image);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 3228px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_1);
		el=me._buttons_social=document.createElement('div');
		el.ggId="buttons_social";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons_social.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwLjA3IDI0MC4wNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IldhcnN0d2FfMSIgZGF0YS1uYW1lPSJXYXJzdHdhIDEiPgogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGNsYXNzPSJjbHMtMSIgZD0iTTEzMiwyNDBxLTU1Ljc1LDAtMTExLjUyLjA1QTIwLjQ2LDIwLjQ2LDAsMCwxLDAsMjE5LjU3US4xNCwxMTgsLjA4LDE2LjQzQTE2LjM2LDE2LjM2LDAsMCwxLDE2LjQzLjA3UTExOCwuMDksMjE5LjYxLDBhMjAuND'+
			'MsMjAuNDMsMCwwLDEsMjAuNDYsMjAuNDdxLS4xMyw5OS41MSwwLDE5OUEyMC40NSwyMC40NSwwLDAsMSwyMTkuNTIsMjQwYy0xNC44My0uMDUtMjkuNjcsMC00NC41LDAsLjA2LTEuNS4xOC0zLC4xOS00LjQ5LDAtMjguMTUuMDgtNTYuMjktLjA2LTg0LjQ0LDAtNC4zNCwxLjMyLTYsNS43NC01Ljc1LDYsLjMsMTIsMCwxOCwuMTIsMy4zLjA4LDQuNDUtMS4yNiw0LjQ4LTUuMjVBMTM1LjU4LDEzNS41OCwwLDAsMSwyMDYsMTE2LjI3Yy44Ni00LjU2LjIyLTYuNzMtNC4yNy02LjU4LTcuMTYuMjQtMTQuMzMtLjExLTIxLjQ4LjA2LTMuNjMuMDktNS4yMS0xLjE2LTUuMDYtNC44OC4xOC00LjgyLDAt'+
			'OS42Ni4wOS0xNC40OS4xMi03Ljc3LDMtMTAuNzcsMTAuOTEtMTEsNS4xNi0uMTUsMTAuMzMtLjIxLDE1LjQ4LDAsNCwuMTUsNS4xNi0xLjUyLDQuNTMtNi42NUE4OS4yNiw4OS4yNiwwLDAsMSwyMDYuMTQsNTFjLjY0LTUuMzYsMC03LjQ0LTQuMzYtNy4zNi0xMC42Ni4xOS0yMS4zNy0uNTUtMzIsLjMxLTE5LDEuNTMtMzIuMzIsMTAtMzYuNDUsMzAuNjgtMiw5Ljg4LTEuNTcsMTkuODctMS41LDI5Ljg0LDAsMy44LTEuMiw1LjU3LTUuMTksNS4zMi0zLjY1LS4yMi03LjMzLjExLTExLS4xLTMuNDctLjE5LTQuODEsMS4yNi00Ljc3LDQuNjQuMDgsNi42NiwwLDEzLjMyLDAsMjAsLjEsMTMuMjQtMS'+
			'4xOCwxMC45MSwxMS4xOCwxMS4wOSwxMC4yOS4xNSw5LjY4LTEuMTYsOS43MSw5LjY5UTEzMS45MiwxOTcuNTQsMTMyLDI0MFoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwLjA3IDI0MC4wNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojOTk5O308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IldhcnN0d2FfMSIgZGF0YS1uYW1lPSJXYXJzdHdhIDEiPgogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGNsYXNzPSJjbHMtMSIgZD0iTTEzMiwyNDBxLTU1Ljc1LDAtMTExLjUyLjA1QTIwLjQ2LDIwLjQ2LDAsMCwxLDAsMjE5LjU3US4xNCwxMTgsLjA4LDE2LjQzQTE2LjM2LDE2LjM2LDAsMCwxLDE2LjQzLjA3UTExOCwuMDksMjE5LjYxLDBhMjAuND'+
			'MsMjAuNDMsMCwwLDEsMjAuNDYsMjAuNDdxLS4xMyw5OS41MSwwLDE5OUEyMC40NSwyMC40NSwwLDAsMSwyMTkuNTIsMjQwYy0xNC44My0uMDUtMjkuNjcsMC00NC41LDAsLjA2LTEuNS4xOC0zLC4xOS00LjQ5LDAtMjguMTUuMDgtNTYuMjktLjA2LTg0LjQ0LDAtNC4zNCwxLjMyLTYsNS43NC01Ljc1LDYsLjMsMTIsMCwxOCwuMTIsMy4zLjA4LDQuNDUtMS4yNiw0LjQ4LTUuMjVBMTM1LjU4LDEzNS41OCwwLDAsMSwyMDYsMTE2LjI3Yy44Ni00LjU2LjIyLTYuNzMtNC4yNy02LjU4LTcuMTYuMjQtMTQuMzMtLjExLTIxLjQ4LjA2LTMuNjMuMDktNS4yMS0xLjE2LTUuMDYtNC44OC4xOC00LjgyLDAt'+
			'OS42Ni4wOS0xNC40OS4xMi03Ljc3LDMtMTAuNzcsMTAuOTEtMTEsNS4xNi0uMTUsMTAuMzMtLjIxLDE1LjQ4LDAsNCwuMTUsNS4xNi0xLjUyLDQuNTMtNi42NUE4OS4yNiw4OS4yNiwwLDAsMSwyMDYuMTQsNTFjLjY0LTUuMzYsMC03LjQ0LTQuMzYtNy4zNi0xMC42Ni4xOS0yMS4zNy0uNTUtMzIsLjMxLTE5LDEuNTMtMzIuMzIsMTAtMzYuNDUsMzAuNjgtMiw5Ljg4LTEuNTcsMTkuODctMS41LDI5Ljg0LDAsMy44LTEuMiw1LjU3LTUuMTksNS4zMi0zLjY1LS4yMi03LjMzLjExLTExLS4xLTMuNDctLjE5LTQuODEsMS4yNi00Ljc3LDQuNjQuMDgsNi42NiwwLDEzLjMyLDAsMjAsLjEsMTMuMjQtMS'+
			'4xOCwxMC45MSwxMS4xOCwxMS4wOSwxMC4yOS4xNSw5LjY4LTEuMTYsOS43MSw5LjY5UTEzMS45MiwxOTcuNTQsMTMyLDI0MFoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_facebook";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_facebook.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/marta.brachowska","");
		}
		me._button_facebook.onmouseover=function (e) {
			me._button_facebook__img.style.visibility='hidden';
			me._button_facebook__imgo.style.visibility='inherit';
		}
		me._button_facebook.onmouseout=function (e) {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
		}
		me._button_facebook.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._buttons_social.appendChild(me._button_facebook);
		me.divSkin.appendChild(me._buttons_social);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjkxLjA2IDQxMi4xNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojOTk5O30uY2xzLTJ7ZmlsbDojMGQzMDEzO30uY2xzLTN7ZmlsbDpub25lO30uY2xzLTR7ZmlsbDojZjJmMmYyO308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9ImZhY2Vib29rIj4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzIsMjQwcS01NS43NSwwLTExMS41Mi4wNUEyMC40NiwyMC40NiwwLDAsMSwwLDIxOS41N1EuMTQsMTE4LC4wOCwxNi40M0ExNi4zNiwxNi4zNi'+
			'wwLDAsMSwxNi40My4wN1ExMTgsLjA5LDIxOS42MSwwYTIwLjQzLDIwLjQzLDAsMCwxLDIwLjQ2LDIwLjQ3cS0uMTMsOTkuNTEsMCwxOTlBMjAuNDUsMjAuNDUsMCwwLDEsMjE5LjUyLDI0MGMtMTQuODMtLjA1LTI5LjY3LDAtNDQuNSwwLC4wNi0xLjUuMTgtMywuMTktNC40OSwwLTI4LjE1LjA4LTU2LjI5LS4wNi04NC40NCwwLTQuMzQsMS4zMi02LDUuNzQtNS43NSw2LC4zLDEyLDAsMTgsLjEyLDMuMy4wOCw0LjQ1LTEuMjYsNC40OC01LjI1QTEzNS41OCwxMzUuNTgsMCwwLDEsMjA2LDExNi4yN2MuODYtNC41Ni4yMi02LjczLTQuMjctNi41OC03LjE2LjI0LTE0LjMzLS4xMS0yMS40OC4wNi0z'+
			'LjYzLjA5LTUuMjEtMS4xNi01LjA2LTQuODguMTgtNC44MiwwLTkuNjYuMDktMTQuNDkuMTItNy43NywzLTEwLjc3LDEwLjkxLTExLDUuMTYtLjE1LDEwLjMzLS4yMSwxNS40OCwwLDQsLjE1LDUuMTYtMS41Miw0LjUzLTYuNjVBODkuMjYsODkuMjYsMCwwLDEsMjA2LjE0LDUxYy42NC01LjM2LDAtNy40NC00LjM2LTcuMzYtMTAuNjYuMTktMjEuMzctLjU1LTMyLC4zMS0xOSwxLjUzLTMyLjMyLDEwLTM2LjQ1LDMwLjY4LTIsOS44OC0xLjU3LDE5Ljg3LTEuNSwyOS44NCwwLDMuOC0xLjIsNS41Ny01LjE5LDUuMzItMy42NS0uMjItNy4zMy4xMS0xMS0uMS0zLjQ3LS4xOS00LjgxLDEuMjYtNC43Ny'+
			'w0LjY0LjA4LDYuNjYsMCwxMy4zMiwwLDIwLC4xLDEzLjI0LTEuMTgsMTAuOTEsMTEuMTgsMTEuMDksMTAuMjkuMTUsOS42OC0xLjE2LDkuNzEsOS42OVExMzEuOTIsMTk3LjU0LDEzMiwyNDBaIi8+CiA8L2c+CiA8ZyBpZD0iV2Fyc3R3YV85IiBkYXRhLW5hbWU9IldhcnN0d2EgOSI+CiAgPHJlY3QgeD0iMC41IiBjbGFzcz0iY2xzLTIiIHJ4PSIxNS41NyIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyNDAiLz4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBjbGFzcz0iY2xzLTMiIGQ9Ik0yMTYuMTMsMzQxLjY5djcwLjQ4aDcxbC4zOC0yOC44Ni0yMy4yNS41NiwyNi44NC0yNS45M0wy'+
			'NzAuODUsMzM5UzI0NSwzNjgsMjQ1LDM2Ny4zOVYzNDAuNzVaIi8+CiAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgY2xhc3M9ImNscy00IiBkPSJNMjUuNjMsMTcyLjMySDUzLjg5bC0xMC4yMSwxMC40Yy0xMywxMy4yOS0yNiwyNi41Ny0yNiwyNi41N2E5LjUsOS41LDAsMSwwLDEzLjYsMTMuMjdjMTAuNi0xMC44NywyNS4wOC0yNS42OCwzNi4wNS0zNi44MnYzMC4xOWE5LjUsOS41LDAsMSwwLDE5LDB2LTUzLjFhOS41LDkuNSwwLDAsMC05LjUtOS41SDI1LjYzYTkuNSw5LjUsMCwwLDAsMCwxOVoiLz4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBjbGFzcz0iY2'+
			'xzLTQiIGQ9Ik0yMTQuMzgsMTcyLjMySDE4Ni4xMmwxMC4yMSwxMC40YzEzLDEzLjI5LDI2LDI2LjU3LDI2LDI2LjU3YTkuNSw5LjUsMCwxLDEtMTMuNiwxMy4yN2MtMTAuNi0xMC44Ny0yNS4wOC0yNS42OC0zNi4wNS0zNi44MnYzMC4xOWE5LjUsOS41LDAsMSwxLTE5LDB2LTUzLjFhOS41LDkuNSwwLDAsMSw5LjUtOS41aDUxLjIyYTkuNSw5LjUsMCwwLDEsMCwxOVoiLz4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBjbGFzcz0iY2xzLTQiIGQ9Ik0yNS42Miw2OC42OEg1My44OEw0My42Nyw1OC4yOGMtMTMtMTMuMjktMjYtMjYuNTctMjYtMjYuNTdhOS41LDkuNSwwLDEsMSwx'+
			'My42LTEzLjI3YzEwLjYsMTAuODcsMjUuMDgsMjUuNjgsMzYuMDUsMzYuODJWMjUuMDdhOS41LDkuNSwwLDEsMSwxOSwwdjUzLjFhOS41LDkuNSwwLDAsMS05LjUsOS41SDI1LjYyYTkuNSw5LjUsMCwwLDEsMC0xOVoiLz4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBjbGFzcz0iY2xzLTQiIGQ9Ik0yMTQuMzcsNjguNjhIMTg2LjExbDEwLjIxLTEwLjRjMTMtMTMuMjksMjYtMjYuNTcsMjYtMjYuNTdhOS41LDkuNSwwLDEsMC0xMy42LTEzLjI3Yy0xMC42LDEwLjg3LTI1LjA4LDI1LjY4LTM2LDM2LjgyVjI1LjA3YTkuNSw5LjUsMCwxLDAtMTksMHY1My4xYTkuNSw5LjUsMCwwLD'+
			'AsOS41LDkuNWg1MS4yMmE5LjUsOS41LDAsMCwwLDAtMTlaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_normalscreen";
		el.ggDx=4;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 56px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjkxLjA3IDQxMi4xNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojMWExYTFhO30uY2xzLTJ7ZmlsbDojNjA0YjNiO30uY2xzLTN7ZmlsbDojMGQzMDEzO30uY2xzLTR7ZmlsbDpub25lO30uY2xzLTV7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IldhcnN0d2FfMiIgZGF0YS1uYW1lPSJXYXJzdHdhIDIiPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyNDAiLz4KIDwvZz4KIDxnIGlkPSJXYXJzdHdhXzkiIGRhdGEtbmFtZT0iV2Fyc3R3YS'+
			'A5Ij4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMjMuNjMsMTA4LjMyUTEzMy45NCw5Ny42NiwxNDQuMjMsODdjMy44Ni00LDUuMTgtNC4wNiw5LS4xOHM3LjcsNy42MywxMS41OSwxMS40YzIuNDcsMi4zOSwyLjYzLDQuNTMsMCw3LjA3LTYuNjUsNi40Ni0xMy4xNSwxMy4wNy0xOS42OCwxOS42NS0uNzMuNzItMS45NCwxLjQ2LTEuNiwyLjU3LjQ1LDEuNDUsMiwxLDMuMTEsMSwzLjcxLjA3LDcuNDIsMCwxMS4xMy4wNyw0LjE4LjEyLDYuMjksMi4yNCw2LjM3LDYuNDUuMDksNSwuMTEsMTAuMDcsMCwxNS4xUzE2MiwxNTcsMTU3LDE1Ny4wNXEtMjguMjIsMC01Ni40MywwYy01LjM5LDAtNy0x'+
			'LjQ1LTctNi44MnEtLjE0LTI4LjgsMC01Ny42MmMwLTMuNzgsMi02LDUuODctNi4xMSw1LjY4LS4yMywxMS4zOS0uMjIsMTcuMDgsMCwzLjU0LjEyLDUuNDMsMi40OSw1LjUsNi40Ni4wOCw0Ljg1LDAsOS43MSwwLDE0LjU3WiIvPgogIDxyZWN0IHg9IjAuNSIgY2xhc3M9ImNscy0zIiByeD0iMTUuNTciIHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIi8+CiAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjE2LjEzLDM0MS42OXY3MC40OGg3MWwuMzgtMjguODYtMjMuMjUuNTYsMjYuODQtMjUuOTNMMjcwLjg1LDMzOVMyNDUsMzY4LDI0NSwzNjcuMzlWMzQwLjc1WiIvPgogIDxwYXRoIGNsYXNzPSJjbH'+
			'MtNSIgZD0iTTc1LjcyLDIwNS45NEg0Ny40NmMzLTMuMDUsNi40My02LjUzLDEwLjIyLTEwLjQsMTMtMTMuMjgsMjYtMjYuNTcsMjYtMjYuNTdhOS41LDkuNSwwLDAsMC0xMy42MS0xMy4yNkM1OS40NiwxNjYuNTgsNDUsMTgxLjM5LDM0LDE5Mi41M1YxNjIuMzRhOS41LDkuNSwwLDAsMC0xOSwwdjUzczAsMCwwLC4wN2E5LjUsOS41LDAsMCwwLDkuNSw5LjVINzUuNzJhOS41LDkuNSwwLDAsMCwwLTE5WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTE2NC4zLDIwNS45NGgyOC4yNmMtMy0zLjA1LTYuNDMtNi41My0xMC4yMi0xMC40LTEzLTEzLjI4LTI2LTI2LjU3LTI2LTI2LjU3QTkuNSw5'+
			'LjUsMCwwLDEsMTcwLDE1NS43MWMxMC41OSwxMC44NywyNS4wOCwyNS42OCwzNiwzNi44MlYxNjIuMzRhOS41LDkuNSwwLDAsMSwxOSwwdjUzczAsMCwwLC4wN2E5LjUsOS41LDAsMCwxLTkuNSw5LjVIMTY0LjNhOS41LDkuNSwwLDAsMSwwLTE5WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTc1LjcxLDM0LjA5SDQ3LjQ1bDEwLjIyLDEwLjRjMTMsMTMuMjksMjYsMjYuNTcsMjYsMjYuNTdBOS41LDkuNSwwLDEsMSw3MCw4NC4zM0M1OS40NSw3My40Niw0NSw1OC42NSwzNCw0Ny41MVY3Ny43YTkuNSw5LjUsMCwxLDEtMTksMHYtNTNzMC0uMDUsMC0uMDhhOS41MSw5LjUxLDAsMCwxLDkuNS'+
			'05LjVINzUuNzFhOS41LDkuNSwwLDAsMSwwLDE5WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTE2NC4yOSwzNC4wOWgyOC4yNmwtMTAuMjIsMTAuNGMtMTMsMTMuMjktMjYsMjYuNTctMjYsMjYuNTdBOS41LDkuNSwwLDAsMCwxNzAsODQuMzNDMTgwLjU1LDczLjQ2LDE5NSw1OC42NSwyMDYsNDcuNTFWNzcuN2E5LjUsOS41LDAsMSwwLDE5LDB2LTUzczAtLjA1LDAtLjA4YTkuNTEsOS41MSwwLDAsMC05LjUtOS41SDE2NC4yOWE5LjUsOS41LDAsMSwwLDAsMTlaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_fullscreen";
		el.ggDx=4;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 56px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 56px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwIDI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojMGQzMDEzO30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IldhcnN0d2FfMiIgZGF0YS1uYW1lPSJXYXJzdHdhIDIiPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgcng9IjE1LjU3IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIvPgogPC9nPgogPGcgaWQ9IldhcnN0d2FfNyIgZGF0YS1uYW1lPSJXYXJzdHdhIDciPgogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUpIiBjbGFzcz0iY2xzLTIiIG'+
			'Q9Ik03Ny45Myw3Mi4zOGMyLjEsMi4zMSwzLjYxLDIuNDMsNi4xMy41NGE1OS4yNyw1OS4yNywwLDAsMSw2OC4wNy0yLjQxLDEuNjcsMS42NywwLDAsMCwyLjUyLS4yNWM0LjE4LTQuMjcsOC40My04LjQ3LDEyLjY2LTEyLjcsMS4yOS0xLjI5LDEuMy0xLjMtLjItMi4zOGE4MC4xMSw4MC4xMSwwLDAsMC00Ny4xOS0xNS40Nyw2OC42NSw2OC42NSwwLDAsMC0xMC42NC42N0E4MC40Nyw4MC40NywwLDAsMCw3MC4xNSw1Ni44MnEtMy42NiwyLjg0LS41Niw2LjMyQzcyLjM1LDY2LjI0LDc1LjE0LDY5LjMsNzcuOTMsNzIuMzhaIi8+CiAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSkiIGNs'+
			'YXNzPSJjbHMtMiIgZD0iTTM4Ljk0LDEyMi4xOWE4NCw4NCwwLDAsMCwxLjM4LDEyLjY1LDgwLjYzLDgwLjYzLDAsMCwwLDE0LjM3LDMzYzEsMS4zMiwxLjIzLDEuMzEsMi4zOS4xOCwxLjQ4LTEuNDUsMy0yLjg1LDQuNDctNC4zMiwyLjgyLTIuODQsNS41NC01Ljc3LDguNDMtOC41NC44Ny0uODQsMS0xLjM5LjMyLTIuMzRhNDcuNTgsNDcuNTgsMCwwLDEtNi0xMS42Miw1Ny42Niw1Ny42NiwwLDAsMS0zLjc5LTE4LjljMC0xLjU2LjQ2LTEuOTQsMS45Mi0xLjg4LDIuNzYuMSw1LjUzLDAsOC4zLDBzNS43MywwLDguNiwwYTMuNTgsMy41OCwwLDAsMCwzLjQyLTEuOTJjLjcxLTEuMjctLjA1LTIuMy'+
			'0uNzgtMy4yNC0yLjUxLTMuMjItNC43Ny02LjYyLTcuMTUtMTAtMi44My00LTUuNy03LjkzLTguNTUtMTEuODlMNTIuNTUsNzQuMzZhNy4yMiw3LjIyLDAsMCwwLS42NC0uODJjLTEuODYtMi0zLjg1LTEuOTEtNS40NC4zMlEzMS42MSw5NC42NywxNi43NiwxMTUuNDhhMy4yMSwzLjIxLDAsMCwwLS43MywyLjc2LDMsMywwLDAsMCwzLjI4LDIuMjFjNS44OCwwLDExLjc2LDAsMTcuNjQsMEMzOC4yOCwxMjAuNDIsMzguODksMTIwLjcxLDM4Ljk0LDEyMi4xOVoiLz4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41KSIgY2xhc3M9ImNscy0yIiBkPSJNMjE5LjE0LDEyMC42N2MtNS42OCww'+
			'LTExLjM3LDAtMTcsMC0xLjEzLDAtMS41NS0uMzQtMS41OS0xLjUyLS4wOC0yLjQyLS4yNi00LjgzLS41MS03LjI0YTc5LjM4LDc5LjM4LDAsMCwwLTE1LjE0LTM5Yy0uNzYtMS0xLjIxLS45LTItLjA4LTQuMzMsNC4zOS04LjcsOC43Ny0xMy4xMSwxMy4wOWExLjU4LDEuNTgsMCwwLDAtLjE5LDIuNCw1Mi44LDUyLjgsMCwwLDEsNS4zNCw5Ljg5LDYyLjc3LDYyLjc3LDAsMCwxLDQuMjgsMjAuOTRjMCwxLjE2LS4yNywxLjU5LTEuNDYsMS41Ny0zLS4wNi01LjkzLDAtOC45LDBzLTUuODMsMC04Ljc0LDBhMy41NSwzLjU1LDAsMCwwLTMuMzgsMmMtLjcxLDEuMjctLjA3LDIuMjYuNjIsMy4yNiwyLj'+
			'M2LDMuNDcsNSw2Ljc0LDcuMzcsMTAuMiw0LDUuNzIsOC4wOSwxMS4zMiwxMi4xNiwxN3E1LjQzLDcuNSwxMC44OCwxNWEyLjY1LDIuNjUsMCwwLDAsNCwuMzcsMTEuMDcsMTEuMDcsMCwwLDAsMS40LTEuNzJxMTQuNDItMjAuMjIsMjguODMtNDAuNDNjLjgzLTEuMTcsMS41NC0yLjMyLjc3LTMuODFTMjIwLjY4LDEyMC42NiwyMTkuMTQsMTIwLjY3WiIvPgogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUpIiBjbGFzcz0iY2xzLTIiIGQ9Ik0xNjAuNzMsMTY3LjM1YTMuNTMsMy41MywwLDAsMC01LS4yNmMtMS4yOC45Mi0yLjU1LDEuODctMy44NywyLjczYTU4LjA4LDU4LjA4LDAsMCwx'+
			'LTMzLjUsOS43LDU3LjQ2LDU3LjQ2LDAsMCwxLTMwLjYzLTkuMzYsMS44MywxLjgzLDAsMCwwLTIuNzcuM3EtNi4xNiw2LjQtMTIuNDgsMTIuNjZjLTEuMSwxLjA4LS44MywxLjU1LjI2LDIuMzJhODAsODAsMCwwLDAsNDYuNDksMTUuMmMzLjExLS4xLDUuNTItLjEsNy45NC0uMzNhODAuMTMsODAuMTMsMCwwLDAsNDIuNi0xN2MxLjg3LTEuNDUsMi4xNy0zLjUxLjYtNS4yOVExNjUuNjcsMTcyLjU5LDE2MC43MywxNjcuMzVaIi8+CiAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSkiIGNsYXNzPSJjbHMtMiIgZD0iTTIwMi43NSw0Ni44MWEzLjczLDMuNzMsMCwwLDAsMC01LjQzYy0uOT'+
			'EtMS0xLjg3LTEuOS0yLjgxLTIuODQtMi43Mi0yLjcxLTQuNzMtMi43Mi03LjQ3LDBzLTUuNTksNS40NC04LjI2LDguMjhjLTMuMDUsMy4yMy02LjMxLDYuMjUtOS4zNyw5LjQ3LTQuNTksNC44Mi05LjUyLDkuMzEtMTQuMTYsMTQuMDgtMy4xNCwzLjIyLTYuMzMsNi4zOC05LjUsOS41NS00LjgxLDQuODEtOS42NSw5LjYtMTQuNDcsMTQuNDEtNC42LDQuNi05LjE1LDkuMjctMTMuNzgsMTMuODRzLTksOS4xMi0xMy42MywxMy41N2MtMy40NSwzLjMxLTYuNjEsNi45My0xMC4wOSwxMC4yLTQuOSw0LjYtOS40Niw5LjUzLTE0LjI5LDE0LjE4LTMuMiwzLjA3LTYuMTIsNi40NS05LjM2LDkuNDctNC42'+
			'OSw0LjM4LTksOS4xLTEzLjY2LDEzLjU1LTQuMDUsMy45LTcuOTEsOC0xMS43NiwxMi4wOC00LjI0LDQuNS04LjcyLDguNzUtMTMuMDcsMTMuMTQtMS44NywxLjktMS44NiwzLjgzLDAsNS43MywxLjEsMS4xNCwyLjIyLDIuMjYsMy4zMywzLjM4YTMuNzksMy43OSwwLDAsMCwzLDEuMjJjMS41LjEzLDIuNDYtLjg5LDMuNDUtMS44OEwyMDEuOTEsNDcuNjVDMjAyLjE5LDQ3LjM3LDIwMi40OCw0Ny4xLDIwMi43NSw0Ni44MVoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._stop_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwIDI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojMGQzMDEzO30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IldhcnN0d2FfMiIgZGF0YS1uYW1lPSJXYXJzdHdhIDIiPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgcng9IjE1LjU3IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIvPgogPC9nPgogPGcgaWQ9IldhcnN0d2FfNyIgZGF0YS1uYW1lPSJXYXJzdHdhIDciPgogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUpIiBjbGFzcz0iY2xzLTIiIG'+
			'Q9Ik0yMTkuMjEsMTIwLjA2Yy01LjM4LDAtMTAuNzYsMC0xNi4xNSwwLTIuNTUsMC0yLjU5LDAtMi42Mi0yLjUzYTc1LjQ4LDc1LjQ4LDAsMCwwLTIuMjYtMTYuOTNjLTkuNDItMzguOC00Ni40OS02NC44LTg2LjUzLTYwLjY5QTgwLDgwLDAsMCwwLDcwLjc2LDU2LjMxYy0zLDIuMjktMy4xNyw0LjE0LS41Niw3czUuNDIsNS41Nyw4LDguNDljMi4yOCwyLjYyLDMuNTIsMyw2LjE5LDFhNTguMDYsNTguMDYsMCwwLDEsNDIuNzYtMTEuNTZBNTguNyw1OC43LDAsMCwxLDE1Nyw3My41NmE0NS42LDQ1LjYsMCwwLDEsOS45MSwxMC4yMmMxLjA3LDEuNTksMi42OCwyLjg3LDMuNDcsNC41NiwxLjM3LDMs'+
			'My4yNiw1LjY2LDQuMzcsOC43OGE4Mi42Nyw4Mi42NywwLDAsMSwzLjMsMTAuMzMsNzMuNzMsNzMuNzMsMCwwLDEsMS4zMiwxMS4xMWMuMDcsMS4yNC0uMzEsMS41NC0xLjQyLDEuNTMtMi45MSwwLTUuODIsMC04Ljc0LDAtMi42MywwLTUuMjcsMC03LjksMC0xLjUyLDAtMywwLTMuOSwxLjU1czAsMywuNjYsNC4zMmE4LDgsMCwwLDAsLjc1LDEuMDhsNyw5LjczYzEuNDcsMiwzLjEzLDQsNC41OSw2LDEuODMsMi41NiwzLjUyLDUuMjQsNS4zNyw3LjgsMi4yNSwzLjExLDQuMzcsNi4zLDYuOSw5LjIxLDEuNzEsMiwyLjc4LDQuNDUsNC4zOCw2LjU1LDIuMTIsMi43Nyw0LjEsMi44MSw2LjE0LS4wNX'+
			'ExNC41Mi0yMC4zMSwyOS00MC42M2EzLjM0LDMuMzQsMCwwLDAsLjUtMy44MkEzLjQyLDMuNDIsMCwwLDAsMjE5LjIxLDEyMC4wNloiLz4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41KSIgY2xhc3M9ImNscy0yIiBkPSJNMTYxLjksMTY4LjA1Yy0yLjI2LTIuNDYtMy42Ni0yLjUzLTYuNC0uNTJDMTQyLjUsMTc3LjA1LDEyOCwxODEsMTEyLDE3OC43OEE1Ny40Miw1Ny40MiwwLDAsMSw3Ny44LDE2MS41NGE1OCw1OCwwLDAsMS0xNy00MC4xM2MwLTEuMjcuNDEtMS42MiwxLjYtMS42LDIuOTEsMCw1LjgyLDAsOC43MywwaDBjMi45MSwwLDUuODIsMCw4LjczLDBhMy4yMiwzLjIyLDAs'+
			'MCwwLDMuMTgtMS42M2MuNzItMS4zLjIyLTIuNDEtLjU4LTMuNDktMS45My0yLjYxLTMuODQtNS4yMi01LjczLTcuODZRNjQuODksOTAuMzQsNTMsNzMuOGMtMi4xLTIuOTItMy45Mi0yLjg5LTYsLjA3cS0xNC41NywyMC4zNy0yOS4xLDQwLjc2Yy0uNzgsMS4wOS0xLjM0LDIuMTctLjY4LDMuNXMyLDEuNzIsMy40NSwxLjcxYzUuNTUsMCwxMS4xLDAsMTYuNjQsMCwxLjYxLDAsMi4xMS41OCwyLjA5LDIuMTFhNjYuNTEsNjYuNTEsMCwwLDAsMS40MSwxMy41N2M3LjMsMzYuNjgsMzkuMjcsNjUuMjcsODAuMzQsNjVhNzQuOTMsNzQuOTMsMCwwLDAsMjItMy41Miw4NS44Myw4NS44MywwLDAsMCwyNi'+
			'40NC0xMy43OWMyLjI1LTEuNzIsMi40MS0zLjg1LjU0LTZRMTY2LjA4LDE3Mi42MSwxNjEuOSwxNjguMDVaIi8+CiAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSkiIGNsYXNzPSJjbHMtMiIgZD0iTTEyMCwxMjkuMzZhOS40MSw5LjQxLDAsMSwwLTkuMzUtOS4zOUE5LjU4LDkuNTgsMCwwLDAsMTIwLDEyOS4zNloiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me.divSkin.appendChild(me._button_auto_rotate);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0.1;
		el.ggDy=0.02;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggDx=10;
		el.ggDy=-38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 564px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggDx=10;
		el.ggDy=-21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 540px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 540px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggDx=-5;
		el.ggDy=-138;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 509px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 509px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._info_title);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJXYXJzdHdhXzQiIGRhdGEtbmFtZT0iV2Fyc3R3YSA0Ij4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPgogPC9kZWZzPgogPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+Cjwvc3ZnPgo=';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close";
		el.ggDx=517;
		el.ggDy=223;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3000px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 3000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._information);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0IiBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIHRyYW5zZm9ybT0icm'+
			'90YXRlKDQ1IDE2IDE2KSIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4xMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuMjVzIiByZXBlYXRDb3VudD0iaW5k'+
			'ZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiBjeT0iMyIgY3g9IjE2Ij4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjM3NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Oz'+
			'AuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIGN5PSIzIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuNjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC43NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW'+
			'5lIiBhdHRyaWJ1dGVOYW1lPSJyIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuODc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 108.594%;';
		hs+='left : -0.01%;';
		hs+='position : absolute;';
		hs+='top : -9.9%;';
		hs+='visibility : hidden;';
		hs+='width : 104.75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._image_popup_close=document.createElement('div');
		els=me._image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJXYXJzdHdhXzQiIGRhdGEtbmFtZT0iV2Fyc3R3YSA0Ij4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO308L3N0eWxlPgogPC9kZWZzPgogPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+Cjwvc3ZnPgo=';
		me._image_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="image_popup_close";
		el.ggDx=-1;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3000px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 3000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close.style[domTransition]='';
				if (me._image_popup_close.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close.style.visibility=(Number(me._image_popup_close.style.opacity)>0||!me._image_popup_close.style.opacity)?'inherit':'hidden';
					me._image_popup_close.ggVisible=true;
				}
				else {
					me._image_popup_close.style.visibility="hidden";
					me._image_popup_close.ggVisible=false;
				}
			}
		}
		me._image_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_popup_1', false);
		}
		me._image_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_popup_close);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 77px;';
		hs+='height : 371px;';
		hs+='position : absolute;';
		hs+='right : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 524px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_configloaded = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_hastouch = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_3 = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_hastouch = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 193px;';
		hs+='position : absolute;';
		hs+='top : 215px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._popup_image.ggSubElement.style.width = '0px';
			skin._popup_image.ggSubElement.style.height = '0px';
			skin._popup_image.ggSubElement.src='';
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			player.setVariableValue('vis_image_popup_1', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=77;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_image.style.top='-47px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_image.ggDx=77;
					me._tt_ht_image.style.top='-9px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_image.appendChild(me._tt_ht_image);
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style[domTransition]='';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage__img.src = '';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIzLjc1IDEyNC4yOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iV2Fyc3R3YV81IiBkYXRhLW5hbWU9IldhcnN0d2EgNSI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xLC5jbHMtMntvcGFjaXR5OjAuNTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OC42NyAtNjApIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNzkuMzEsMTY1Ljc5Yy0yLjMzLTIuMzctNC43LTQuNzEtNy03LjA4LTcuMjEtNy4yNy0yMC4yMS0yMC4zNC0yNy43NC0yOGE0NC40LDQ0LjQsMCwwLDAsNi44Ni'+
			'0yNC4yNyw0Ni4zNiw0Ni4zNiwwLDEsMC00NS4yMSw0Ni4zMUE0NS41Niw0NS41NiwwLDAsMCwxMjksMTQ2LjA2bDEuMzgsMS40YzkuMDgsOS4xNiwyNC4zMiwyNC41MSwzMy40MywzMy42NWExMC44NCwxMC44NCwwLDAsMCwxMS42OCwyLjM4LDEwLjgzLDEwLjgzLDAsMCwwLDMuODEtMTcuN1pNMTA0LjYyLDE0NGEzNy41NiwzNy41NiwwLDEsMSwzOC0zNy40NUEzNy40MSwzNy40MSwwLDAsMSwxMDQuNjIsMTQ0WiIvPgogPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4LjY3IC02MCkiIGNsYXNzPSJjbHMtMiIgZD0iTTEwNC42MiwxNDRhMzcuNTYsMzcuNTYsMCwxLDEsMzgtMzcuNDVBMzcu'+
			'NDEsMzcuNDEsMCwwLDEsMTA0LjYyLDE0NFoiLz4KPC9zdmc+Cg==';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIzLjc1IDEyNC4yOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iV2Fyc3R3YV81IiBkYXRhLW5hbWU9IldhcnN0d2EgNSI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT4KIDwvZGVmcz4KIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OC42NyAtNjApIiBkPSJNMTc5LjMxLDE2NS43OWMtMi4zMy0yLjM3LTQuNy00LjcxLTctNy4wOC03LjIxLTcuMjctMjAuMjEtMjAuMzQtMjcuNzQtMjhhNDQuNCw0NC40LDAsMCwwLDYuODYtMjQuMjcsNDYuMzYsNDYuMzYsMCwxLDAtNDUuMjEsNDYuMzFBNDUuNT'+
			'YsNDUuNTYsMCwwLDAsMTI5LDE0Ni4wNmwxLjM4LDEuNGM5LjA4LDkuMTYsMjQuMzIsMjQuNTEsMzMuNDMsMzMuNjVhMTAuODQsMTAuODQsMCwwLDAsMTEuNjgsMi4zOCwxMC44MywxMC44MywwLDAsMCwzLjgxLTE3LjdaTTEwNC42MiwxNDRhMzcuNTYsMzcuNTYsMCwxLDEsMzgtMzcuNDVBMzcuNDEsMzcuNDEsMCwwLDEsMTA0LjYyLDE0NFoiLz4KIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OC42NyAtNjApIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDQuNjIsMTQ0YTM3LjU2LDM3LjU2LDAsMSwxLDM4LTM3LjQ1QTM3LjQxLDM3LjQxLDAsMCwxLDEwNC42MiwxNDRaIi8+Cjwvc3ZnPgo=';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_image";
		el.ggDx=7;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image.style[domTransition]='';
				if (me._ht_image_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image.style.visibility="hidden";
					me._ht_image_image.ggVisible=false;
				}
				else {
					me._ht_image_image.style.visibility=(Number(me._ht_image_image.style.opacity)>0||!me._ht_image_image.style.opacity)?'inherit':'hidden';
					me._ht_image_image.ggVisible=true;
				}
			}
		}
		me._ht_image_image.onmouseover=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
		}
		me._ht_image_image.onmouseout=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 76px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); text-shadow: 1px 1px 2px #000000; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 53px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwIDI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojMGQzMDEzO30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IldhcnN0d2FfMiIgZGF0YS1uYW1lPSJXYXJzdHdhIDIiPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgcng9IjE1LjU3IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIvPgogPC9nPgogPGcgaWQ9IldhcnN0d2FfOCIgZGF0YS1uYW1lPSJXYXJzdHdhIDgiPgogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUpIiBjbGFzcz0iY2xzLTIiIG'+
			'Q9Ik0xMzcuNCwyMy4xQTgzLjA4LDgzLjA4LDAsMCwwLDExNS40NiwyM2MtOSwxLjA4LTE0LjYxLDguMDctMTQuNjgsMTcuMTcsMCwyLjQ2LDAsNC45MywwLDcuNGExNi42OCwxNi42OCwwLDAsMCwxNi41OSwxNi43YzIuODMuMDcsNS42NywwLDguNSwwaDBjMywwLDYsLjA2LDguOTMsMGExNi43OCwxNi43OCwwLDAsMCwxNi4zLTE2LjU3cS4wNi00LjE0LDAtOC4yOEMxNTEsMzEuMzUsMTQ1LjMsMjQuMjgsMTM3LjQsMjMuMVoiLz4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41KSIgY2xhc3M9ImNscy0yIiBkPSJNMTQ1LjQ4LDk5cS0xOS42MiwwLTM5LjI1LDBjLTQsMC01LjQzLDEu'+
			'NDYtNS40NCw1LjU4cTAsNDguNzQsMCw5Ny40N2MwLDQuMTIsMS4yMSw1LjM3LDUuMyw1LjM4cTE5Ljg1LDAsMzkuNjksMGM0LjE5LDAsNS4zLTEuMTUsNS4zLTUuMzFxMC0yNC4zMiwwLTQ4LjYzdDAtNDguODVDMTUxLjA5LDEwMC4zNywxNDkuNzUsOTksMTQ1LjQ4LDk5WiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_image";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='24px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_configloaded();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_hastouch();;
			me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_3();;
		} else
		{
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._screentint_image.logicBlock_visible();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image.logicBlock_visible();
	me._information.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._image_popup_close.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._screentint_image.logicBlock_visible();me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible();me._information.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup_1', function(args) { me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._information.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_image_hastouch();me.callChildLogicBlocksHotspot_ht_info_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged(); });
	player.addListener('varchanged_opt_3d_preview_3', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_3(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};