function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function renderFileInput(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (label) {pug_html = pug_html + "\u003Cdiv class=\"file-input\"\u003E\u003Cdiv class=\"file-input__container\"\u003E\u003Cdiv class=\"file-input__file-name\"\u003E\u003C\u002Fdiv\u003E\u003Cinput class=\"file-input__button\" type=\"button\" value=\"Open\"\u002F\u003E\u003Cinput class=\"file-input__input\" type=\"file\" size=\"28\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Clabel class=\"file-input__name\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";}.call(this,"label" in locals_for_with?locals_for_with.label:typeof label!=="undefined"?label:undefined));;return pug_html;} export default renderFileInput;