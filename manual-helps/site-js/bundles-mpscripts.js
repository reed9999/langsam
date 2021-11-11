function overlib() {
    return !olLoaded || isExclusive(overlib.arguments) ? !0 : (olCheckMouseCapture && olMouseCapture(),
    over && (over = typeof over.id != "string" ? o3_frame.document.all.overDiv : over,
    cClick()),
    olHideDelay = 0,
    o3_text = ol_text,
    o3_cap = ol_cap,
    o3_sticky = ol_sticky,
    o3_background = ol_background,
    o3_close = ol_close,
    o3_hpos = ol_hpos,
    o3_offsetx = ol_offsetx,
    o3_offsety = ol_offsety,
    o3_fgcolor = ol_fgcolor,
    o3_bgcolor = ol_bgcolor,
    o3_textcolor = ol_textcolor,
    o3_capcolor = ol_capcolor,
    o3_closecolor = ol_closecolor,
    o3_width = ol_width,
    o3_border = ol_border,
    o3_cellpad = ol_cellpad,
    o3_status = ol_status,
    o3_autostatus = ol_autostatus,
    o3_height = ol_height,
    o3_snapx = ol_snapx,
    o3_snapy = ol_snapy,
    o3_fixx = ol_fixx,
    o3_fixy = ol_fixy,
    o3_relx = ol_relx,
    o3_rely = ol_rely,
    o3_fgbackground = ol_fgbackground,
    o3_bgbackground = ol_bgbackground,
    o3_padxl = ol_padxl,
    o3_padxr = ol_padxr,
    o3_padyt = ol_padyt,
    o3_padyb = ol_padyb,
    o3_fullhtml = ol_fullhtml,
    o3_vpos = ol_vpos,
    o3_aboveheight = ol_aboveheight,
    o3_capicon = ol_capicon,
    o3_textfont = ol_textfont,
    o3_captionfont = ol_captionfont,
    o3_closefont = ol_closefont,
    o3_textsize = ol_textsize,
    o3_captionsize = ol_captionsize,
    o3_closesize = ol_closesize,
    o3_timeout = ol_timeout,
    o3_function = ol_function,
    o3_delay = ol_delay,
    o3_hauto = ol_hauto,
    o3_vauto = ol_vauto,
    o3_closeclick = ol_closeclick,
    o3_wrap = ol_wrap,
    o3_followmouse = ol_followmouse,
    o3_mouseoff = ol_mouseoff,
    o3_closetitle = ol_closetitle,
    o3_css = ol_css,
    o3_compatmode = ol_compatmode,
    o3_fgclass = ol_fgclass,
    o3_bgclass = ol_bgclass,
    o3_textfontclass = ol_textfontclass,
    o3_captionfontclass = ol_captionfontclass,
    o3_closefontclass = ol_closefontclass,
    setRunTimeVariables(),
    fnRef = "",
    o3_frame = ol_frame,
    !(over = createDivContainer())) ? !1 : (parseTokens("o3_", overlib.arguments),
    !postParseChecks("o3_", overlib.arguments)) ? !1 : o3_delay == 0 ? runHook("olMain", FREPLACE) : (o3_delayid = setTimeout("runHook('olMain', FREPLACE)", o3_delay),
    !1)
}
function nd(n) {
    return olLoaded && !isExclusive() && (hideDelay(n),
    o3_removecounter >= 1 && (o3_showingsticky = 0),
    o3_showingsticky == 0 ? (o3_allowmove = 0,
    over != null && (o3_compatmode ? 1 : o3_timerid == 0) && runHook("hideObject", FREPLACE, over)) : o3_removecounter++),
    !0
}
function cClick() {
    return olLoaded && (runHook("hideObject", FREPLACE, over),
    o3_showingsticky = 0),
    !1
}
function overlib_pagedefaults() {
    parseTokens("ol_", overlib_pagedefaults.arguments)
}
function olMain() {
    var t, n;
    return (runHook("olMain", FBEFORE),
    o3_background != "" || o3_fullhtml ? t = runHook("ol_content_background", FALTERNATE, o3_css, o3_text, o3_background, o3_fullhtml) : (n = pms[o3_css - 1 - pmStart] == "cssoff" || pms[o3_css - 1 - pmStart] == "cssclass",
    o3_fgbackground != "" && (o3_fgbackground = 'background="' + o3_fgbackground + '"'),
    o3_bgbackground != "" && (o3_bgbackground = n ? 'background="' + o3_bgbackground + '"' : o3_bgbackground),
    o3_fgcolor != "" && (o3_fgcolor = n ? 'bgcolor="' + o3_fgcolor + '"' : o3_fgcolor),
    o3_bgcolor != "" && (o3_bgcolor = n ? 'bgcolor="' + o3_bgcolor + '"' : o3_bgcolor),
    o3_height = o3_height > 0 ? n ? 'height="' + o3_height + '"' : o3_height : "",
    t = o3_cap == "" ? runHook("ol_content_simple", FALTERNATE, o3_css, o3_text) : o3_sticky ? runHook("ol_content_caption", FALTERNATE, o3_css, o3_text, o3_cap, o3_close) : runHook("ol_content_caption", FALTERNATE, o3_css, o3_text, o3_cap, "")),
    o3_sticky && (o3_timerid > 0 && (clearTimeout(o3_timerid),
    o3_timerid = 0),
    o3_showingsticky = 1,
    o3_removecounter = 0),
    !runHook("olCreatePopup", FREPLACE, t)) ? !1 : (o3_autostatus > 0 && (o3_status = o3_text,
    o3_autostatus > 1 && (o3_status = o3_cap),
    o3_wrap && (o3_status = o3_status.replace(/&nbsp;/g, " "))),
    o3_allowmove = 0,
    o3_timeout > 0 && (o3_timerid > 0 && clearTimeout(o3_timerid),
    o3_timerid = setTimeout("cClick()", o3_timeout)),
    runHook("disp", FREPLACE, o3_status),
    runHook("olMain", FAFTER),
    olOp && event && event.type == "mouseover" && !o3_status ? "" : o3_status != "")
}
function ol_content_simple(n) {
    var t = /,/.test(o3_cellpad)
      , i = '<table width="' + o3_width + '" border="0" cellpadding="' + o3_border + '" cellspacing="0" ' + (o3_bgclass ? 'class="' + o3_bgclass + '"' : o3_bgcolor + " " + o3_height) + '><tr><td><table width="100%" border="0" ' + (olNs4 || !t ? 'cellpadding="' + o3_cellpad + '" ' : "") + 'cellspacing="0" ' + (o3_fgclass ? 'class="' + o3_fgclass + '"' : o3_fgcolor + " " + o3_fgbackground + " " + o3_height) + '><tr><td valign="TOP"' + (o3_textfontclass ? ' class="' + o3_textfontclass + '">' : !olNs4 && t ? ' style="' + setCellPadStr(o3_cellpad) + '">' : ">") + (o3_textfontclass ? "" : wrapStr(0, o3_textsize, "text")) + n + (o3_textfontclass ? "" : wrapStr(1, o3_textsize)) + "<\/td><\/tr><\/table><\/td><\/tr><\/table>";
    return set_background(""),
    i
}
function ol_content_caption(n, t, i) {
    var r, e, o = /,/.test(o3_cellpad), u, f;
    return u = "",
    f = "onmouseover",
    o3_closeclick == 1 && (f = (o3_closetitle ? "title='" + o3_closetitle + "'" : "") + " onclick"),
    o3_capicon != "" && (r = ' hspace = "5" align = "middle" alt = ""',
    typeof o3_dragimg != "undefined" && o3_dragimg && (r = ' hspace="5" name="' + o3_dragimg + '" id="' + o3_dragimg + '" align="middle" alt="Drag Enabled" title="Drag Enabled"'),
    o3_capicon = '<img src="' + o3_capicon + '"' + r + " />"),
    i != "" && (u = "<td " + (!o3_compatmode && o3_closefontclass ? 'class="' + o3_closefontclass : 'align="RIGHT') + '"><a href="javascript:return ' + fnRef + 'cClick();"' + (o3_compatmode && o3_closefontclass ? ' class="' + o3_closefontclass + '" ' : " ") + f + '="return ' + fnRef + 'cClick();">' + (o3_closefontclass ? "" : wrapStr(0, o3_closesize, "close")) + i + (o3_closefontclass ? "" : wrapStr(1, o3_closesize, "close")) + "<\/a><\/td>"),
    e = '<table width="' + o3_width + '" border="0" cellpadding="' + o3_border + '" cellspacing="0" ' + (o3_bgclass ? 'class="' + o3_bgclass + '"' : o3_bgcolor + " " + o3_bgbackground + " " + o3_height) + '><tr><td><table width="100%" border="0" cellpadding="2" cellspacing="0"><tr><td' + (o3_captionfontclass ? ' class="' + o3_captionfontclass + '">' : ">") + (o3_captionfontclass ? "" : "<b>" + wrapStr(0, o3_captionsize, "caption")) + o3_capicon + t + (o3_captionfontclass ? "" : wrapStr(1, o3_captionsize) + "<\/b>") + "<\/td>" + u + '<\/tr><\/table><table width="100%" border="0" ' + (olNs4 || !o ? 'cellpadding="' + o3_cellpad + '" ' : "") + 'cellspacing="0" ' + (o3_fgclass ? 'class="' + o3_fgclass + '"' : o3_fgcolor + " " + o3_fgbackground + " " + o3_height) + '><tr><td valign="TOP"' + (o3_textfontclass ? ' class="' + o3_textfontclass + '">' : !olNs4 && o ? ' style="' + setCellPadStr(o3_cellpad) + '">' : ">") + (o3_textfontclass ? "" : wrapStr(0, o3_textsize, "text")) + n + (o3_textfontclass ? "" : wrapStr(1, o3_textsize)) + "<\/td><\/tr><\/table><\/td><\/tr><\/table>",
    set_background(""),
    e
}
function ol_content_background(n, t, i) {
    var r;
    return r = i ? n : '<table width="' + o3_width + '" border="0" cellpadding="0" cellspacing="0" height="' + o3_height + '"><tr><td colspan="3" height="' + o3_padyt + '"><\/td><\/tr><tr><td width="' + o3_padxl + '"><\/td><td valign="TOP" width="' + (o3_width - o3_padxl - o3_padxr) + (o3_textfontclass ? '" class="' + o3_textfontclass : "") + '">' + (o3_textfontclass ? "" : wrapStr(0, o3_textsize, "text")) + n + (o3_textfontclass ? "" : wrapStr(1, o3_textsize)) + '<\/td><td width="' + o3_padxr + '"><\/td><\/tr><tr><td colspan="3" height="' + o3_padyb + '"><\/td><\/tr><\/table>',
    set_background(t),
    r
}
function set_background(n) {
    n == "" ? olNs4 ? over.background.src = null : over.style && (over.style.backgroundImage = "none") : olNs4 ? over.background.src = n : over.style && (over.style.width = o3_width + "px",
    over.style.backgroundImage = "url(" + n + ")")
}
function disp(n) {
    runHook("disp", FBEFORE, n);
    o3_allowmove == 0 && (runHook("placeLayer", FREPLACE),
    olNs6 && olShowId < 0 ? olShowId = setTimeout("runHook('showObject', FREPLACE, over)", 1) : runHook("showObject", FREPLACE, over),
    o3_allowmove = o3_sticky || o3_followmouse == 0 ? 0 : 1);
    runHook("disp", FAFTER, n);
    n != "" && (self.status = n)
}
function olCreatePopup(n) {
    if (runHook("olCreatePopup", FBEFORE, n),
    o3_wrap) {
        var t, i, r = olNs4 ? over : over.style;
        r.top = r.left = (olIe4 && !olOp ? 0 : -1e4) + (olNs4 ? 0 : "px");
        layerWrite(n);
        t = olNs4 ? over.clip.width : over.offsetWidth;
        t > (i = windowWidth()) && (n = n.replace(/\&nbsp;/g, " "),
        o3_width = i,
        o3_wrap = 0)
    }
    return layerWrite(n),
    o3_wrap && (o3_width = olNs4 ? over.clip.width : over.offsetWidth),
    runHook("olCreatePopup", FAFTER, n),
    !0
}
function placeLayer() {
    var placeX, placeY, widthFix = 0;
    o3_frame.innerWidth && (widthFix = 18);
    iwidth = windowWidth();
    winoffset = olIe4 ? eval("o3_frame." + docRoot + ".scrollLeft") : o3_frame.pageXOffset;
    placeX = runHook("horizontalPlacement", FCHAIN, iwidth, winoffset, widthFix);
    o3_frame.innerHeight ? iheight = o3_frame.innerHeight : eval("o3_frame." + docRoot) && eval("typeof o3_frame." + docRoot + ".clientHeight=='number'") && eval("o3_frame." + docRoot + ".clientHeight") && (iheight = eval("o3_frame." + docRoot + ".clientHeight"));
    scrolloffset = olIe4 ? eval("o3_frame." + docRoot + ".scrollTop") : o3_frame.pageYOffset;
    placeY = runHook("verticalPlacement", FCHAIN, iheight, scrolloffset);
    repositionTo(over, placeX, placeY)
}
function olMouseMove(e) {
    var e = e ? e : event;
    e.pageX ? (o3_x = e.pageX,
    o3_y = e.pageY) : e.clientX && (o3_x = eval("e.clientX+o3_frame." + docRoot + ".scrollLeft"),
    o3_y = eval("e.clientY+o3_frame." + docRoot + ".scrollTop"));
    o3_allowmove == 1 && runHook("placeLayer", FREPLACE);
    hoveringSwitch && !olNs4 && runHook("cursorOff", FREPLACE) && (olHideDelay ? hideDelay(olHideDelay) : cClick(),
    hoveringSwitch = !hoveringSwitch)
}
function no_overlib() {
    return ver3fix
}
function olMouseCapture() {
    capExtent = document;
    var fN, str = "", l, k, f, wMv, sS, mseHandler = olMouseMove, re = /function[ ]*(\w*)\(/;
    if (wMv = !olIe4 && window.onmousemove,
    document.onmousemove || wMv) {
        if (wMv && (capExtent = window),
        f = capExtent.onmousemove.toString(),
        fN = f.match(re),
        fN == null)
            str = f + "(e); ";
        else if (fN[1] == "anonymous" || fN[1] == "olMouseMove" || wMv && fN[1] == "onmousemove") {
            if (!olOp && wMv && (l = f.indexOf("{") + 1,
            k = f.lastIndexOf("}"),
            sS = f.substring(l, k),
            (l = sS.indexOf("(")) != -1 && (sS = sS.substring(0, l).replace(/^\s+/, "").replace(/\s+$/, ""),
            eval("typeof " + sS + " == 'undefined'") ? window.onmousemove = null : str = sS + "(e);")),
            !str) {
                olCheckMouseCapture = !1;
                return
            }
        } else
            fN[1] ? str = fN[1] + "(e); " : (l = f.indexOf("{") + 1,
            k = f.lastIndexOf("}"),
            str = f.substring(l, k) + "\n");
        str += "olMouseMove(e); ";
        mseHandler = new Function("e",str)
    }
    capExtent.onmousemove = mseHandler;
    olNs4 && capExtent.captureEvents(Event.MOUSEMOVE)
}
function parseTokens(pf, ar) {
    for (var v, mode = -1, par = pf != "ol_", fnMark = par && !ar.length ? 1 : 0, tReg, i = 0; i < ar.length; i++)
        if (mode < 0) {
            if (typeof ar[i] == "number" && ar[i] > pmStart && ar[i] < pmUpper)
                fnMark = par ? 1 : 0,
                i--;
            else
                switch (pf) {
                case "ol_":
                    ol_text = ar[i].toString();
                    break;
                default:
                    o3_text = ar[i].toString()
                }
            mode = 0
        } else {
            if (ar[i] >= pmCount || ar[i] == DONOTHING)
                continue;
            if (ar[i] == INARRAY) {
                fnMark = 0;
                eval(pf + "text=ol_texts[" + ar[++i] + "].toString()");
                continue
            }
            if (ar[i] == CAPARRAY) {
                eval(pf + "cap=ol_caps[" + ar[++i] + "].toString()");
                continue
            }
            if (ar[i] == STICKY) {
                pf != "ol_" && eval(pf + "sticky=1");
                continue
            }
            if (ar[i] == BACKGROUND) {
                eval(pf + 'background="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == NOCLOSE) {
                pf != "ol_" && opt_NOCLOSE();
                continue
            }
            if (ar[i] == CAPTION) {
                eval(pf + "cap='" + escSglQuote(ar[++i]) + "'");
                continue
            }
            if (ar[i] == CENTER || ar[i] == LEFT || ar[i] == RIGHT) {
                eval(pf + "hpos=" + ar[i]);
                pf != "ol_" && (olHautoFlag = 1);
                continue
            }
            if (ar[i] == OFFSETX) {
                eval(pf + "offsetx=" + ar[++i]);
                continue
            }
            if (ar[i] == OFFSETY) {
                eval(pf + "offsety=" + ar[++i]);
                continue
            }
            if (ar[i] == FGCOLOR) {
                eval(pf + 'fgcolor="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == BGCOLOR) {
                eval(pf + 'bgcolor="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == TEXTCOLOR) {
                eval(pf + 'textcolor="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == CAPCOLOR) {
                eval(pf + 'capcolor="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == CLOSECOLOR) {
                eval(pf + 'closecolor="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == WIDTH) {
                eval(pf + "width=" + ar[++i]);
                continue
            }
            if (ar[i] == BORDER) {
                eval(pf + "border=" + ar[++i]);
                continue
            }
            if (ar[i] == CELLPAD) {
                i = opt_MULTIPLEARGS(++i, ar, pf + "cellpad");
                continue
            }
            if (ar[i] == STATUS) {
                eval(pf + "status='" + escSglQuote(ar[++i]) + "'");
                continue
            }
            if (ar[i] == AUTOSTATUS) {
                eval(pf + "autostatus=(" + pf + "autostatus == 1) ? 0 : 1");
                continue
            }
            if (ar[i] == AUTOSTATUSCAP) {
                eval(pf + "autostatus=(" + pf + "autostatus == 2) ? 0 : 2");
                continue
            }
            if (ar[i] == HEIGHT) {
                eval(pf + "height=" + pf + "aboveheight=" + ar[++i]);
                continue
            }
            if (ar[i] == CLOSETEXT) {
                eval(pf + "close='" + escSglQuote(ar[++i]) + "'");
                continue
            }
            if (ar[i] == SNAPX) {
                eval(pf + "snapx=" + ar[++i]);
                continue
            }
            if (ar[i] == SNAPY) {
                eval(pf + "snapy=" + ar[++i]);
                continue
            }
            if (ar[i] == FIXX) {
                eval(pf + "fixx=" + ar[++i]);
                continue
            }
            if (ar[i] == FIXY) {
                eval(pf + "fixy=" + ar[++i]);
                continue
            }
            if (ar[i] == RELX) {
                eval(pf + "relx=" + ar[++i]);
                continue
            }
            if (ar[i] == RELY) {
                eval(pf + "rely=" + ar[++i]);
                continue
            }
            if (ar[i] == FGBACKGROUND) {
                eval(pf + 'fgbackground="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == BGBACKGROUND) {
                eval(pf + 'bgbackground="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == PADX) {
                eval(pf + "padxl=" + ar[++i]);
                eval(pf + "padxr=" + ar[++i]);
                continue
            }
            if (ar[i] == PADY) {
                eval(pf + "padyt=" + ar[++i]);
                eval(pf + "padyb=" + ar[++i]);
                continue
            }
            if (ar[i] == FULLHTML) {
                pf != "ol_" && eval(pf + "fullhtml=1");
                continue
            }
            if (ar[i] == BELOW || ar[i] == ABOVE) {
                eval(pf + "vpos=" + ar[i]);
                pf != "ol_" && (olVautoFlag = 1);
                continue
            }
            if (ar[i] == CAPICON) {
                eval(pf + 'capicon="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == TEXTFONT) {
                eval(pf + "textfont='" + escSglQuote(ar[++i]) + "'");
                continue
            }
            if (ar[i] == CAPTIONFONT) {
                eval(pf + "captionfont='" + escSglQuote(ar[++i]) + "'");
                continue
            }
            if (ar[i] == CLOSEFONT) {
                eval(pf + "closefont='" + escSglQuote(ar[++i]) + "'");
                continue
            }
            if (ar[i] == TEXTSIZE) {
                eval(pf + 'textsize="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == CAPTIONSIZE) {
                eval(pf + 'captionsize="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == CLOSESIZE) {
                eval(pf + 'closesize="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == TIMEOUT) {
                eval(pf + "timeout=" + ar[++i]);
                continue
            }
            if (ar[i] == FUNCTION) {
                pf == "ol_" ? typeof ar[i + 1] != "number" && (v = ar[++i],
                ol_function = typeof v == "function" ? v : null) : (fnMark = 0,
                v = null,
                typeof ar[i + 1] != "number" && (v = ar[++i]),
                opt_FUNCTION(v));
                continue
            }
            if (ar[i] == DELAY) {
                eval(pf + "delay=" + ar[++i]);
                continue
            }
            if (ar[i] == HAUTO) {
                eval(pf + "hauto=(" + pf + "hauto == 0) ? 1 : 0");
                continue
            }
            if (ar[i] == VAUTO) {
                eval(pf + "vauto=(" + pf + "vauto == 0) ? 1 : 0");
                continue
            }
            if (ar[i] == CLOSECLICK) {
                eval(pf + "closeclick=(" + pf + "closeclick == 0) ? 1 : 0");
                continue
            }
            if (ar[i] == WRAP) {
                eval(pf + "wrap=(" + pf + "wrap == 0) ? 1 : 0");
                continue
            }
            if (ar[i] == FOLLOWMOUSE) {
                eval(pf + "followmouse=(" + pf + "followmouse == 1) ? 0 : 1");
                continue
            }
            if (ar[i] == MOUSEOFF) {
                eval(pf + "mouseoff=(" + pf + "mouseoff==0) ? 1 : 0");
                v = ar[i + 1];
                pf != "ol_" && eval(pf + "mouseoff") && typeof v == "number" && (v < pmStart || v > pmUpper) && (olHideDelay = ar[++i]);
                continue
            }
            if (ar[i] == CLOSETITLE) {
                eval(pf + "closetitle='" + escSglQuote(ar[++i]) + "'");
                continue
            }
            if (ar[i] == CSSOFF || ar[i] == CSSCLASS) {
                eval(pf + "css=" + ar[i]);
                continue
            }
            if (ar[i] == COMPATMODE) {
                eval(pf + "compatmode=(" + pf + "compatmode==0) ? 1 : 0");
                continue
            }
            if (ar[i] == FGCLASS) {
                eval(pf + 'fgclass="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == BGCLASS) {
                eval(pf + 'bgclass="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == TEXTFONTCLASS) {
                eval(pf + 'textfontclass="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == CAPTIONFONTCLASS) {
                eval(pf + 'captionfontclass="' + ar[++i] + '"');
                continue
            }
            if (ar[i] == CLOSEFONTCLASS) {
                eval(pf + 'closefontclass="' + ar[++i] + '"');
                continue
            }
            i = parseCmdLine(pf, i, ar)
        }
    fnMark && o3_function && (o3_text = o3_function());
    pf == "o3_" && o3_wrap && (o3_width = 0,
    tReg = /<.*\n*>/ig,
    tReg.test(o3_text) || (o3_text = o3_text.replace(/[ ]+/g, "&nbsp;")),
    tReg.test(o3_cap) || (o3_cap = o3_cap.replace(/[ ]+/g, "&nbsp;")));
    pf == "o3_" && o3_sticky && (o3_close || o3_frame == ol_frame || (o3_close = ol_close),
    o3_mouseoff && o3_frame == ol_frame && opt_NOCLOSE(" "))
}
function layerWrite(n) {
    if (n += "\n",
    olNs4) {
        var t = o3_frame.document.layers.overDiv.document;
        t.write(n);
        t.close()
    } else if (typeof over.innerHTML != "undefined")
        olIe5 && isMac && (over.innerHTML = ""),
        over.innerHTML = n;
    else {
        for (range = o3_frame.document.createRange(),
        range.setStartAfter(over),
        domfrag = range.createContextualFragment(n); over.hasChildNodes(); )
            over.removeChild(over.lastChild);
        over.appendChild(domfrag)
    }
}
function showObject(n) {
    runHook("showObject", FBEFORE, n);
    var t = olNs4 ? n : n.style;
    t.visibility = "visible";
    runHook("showObject", FAFTER, n)
}
function hideObject(n) {
    runHook("hideObject", FBEFORE, n);
    var t = olNs4 ? n : n.style;
    olNs6 && olShowId > 0 && (clearTimeout(olShowId),
    olShowId = 0);
    t.visibility = "hidden";
    t.top = t.left = (olIe4 && !olOp ? 0 : -1e4) + (olNs4 ? 0 : "px");
    o3_timerid > 0 && clearTimeout(o3_timerid);
    o3_delayid > 0 && clearTimeout(o3_delayid);
    o3_timerid = 0;
    o3_delayid = 0;
    self.status = "";
    (n.onmouseout || n.onmouseover) && (olNs4 && n.releaseEvents(Event.MOUSEOUT || Event.MOUSEOVER),
    n.onmouseout = n.onmouseover = null);
    runHook("hideObject", FAFTER, n)
}
function repositionTo(n, t, i) {
    var r = olNs4 ? n : n.style;
    r.left = t + (olNs4 ? 0 : "px");
    r.top = i + (olNs4 ? 0 : "px")
}
function cursorOff() {
    var n = parseInt(over.style.left)
      , t = parseInt(over.style.top)
      , i = n + (over.offsetWidth >= parseInt(o3_width) ? over.offsetWidth : parseInt(o3_width))
      , r = t + (over.offsetHeight >= o3_aboveheight ? over.offsetHeight : o3_aboveheight);
    return o3_x < n || o3_x > i || o3_y < t || o3_y > r ? !0 : !1
}
function opt_FUNCTION(callme) {
    return o3_text = callme ? typeof callme == "string" ? /.+\(.*\)/.test(callme) ? eval(callme) : callme : callme() : o3_function ? o3_function() : "No Function",
    0
}
function opt_NOCLOSE(n) {
    return n || (o3_close = ""),
    olNs4 ? (over.captureEvents(Event.MOUSEOUT || Event.MOUSEOVER),
    over.onmouseover = function() {
        o3_timerid > 0 && (clearTimeout(o3_timerid),
        o3_timerid = 0)
    }
    ,
    over.onmouseout = function(n) {
        olHideDelay ? hideDelay(olHideDelay) : cClick(n)
    }
    ) : over.onmouseover = function() {
        hoveringSwitch = !0;
        o3_timerid > 0 && (clearTimeout(o3_timerid),
        o3_timerid = 0)
    }
    ,
    0
}
function opt_MULTIPLEARGS(i, args, parameter) {
    for (var k = i, re, pV, str = "", k = i; k < args.length; k++) {
        if (typeof args[k] == "number" && args[k] > pmStart)
            break;
        str += args[k] + ","
    }
    return str && (str = str.substring(0, --str.length)),
    k--,
    pV = olNs4 && /cellpad/i.test(parameter) ? str.split(",")[0] : str,
    eval(parameter + '="' + pV + '"'),
    k
}
function nbspCleanup() {
    o3_wrap && (o3_text = o3_text.replace(/\&nbsp;/g, " "),
    o3_cap = o3_cap.replace(/\&nbsp;/g, " "))
}
function escSglQuote(n) {
    return n.toString().replace(/'/g, "\\'")
}
function OLonLoad_handler(e) {
    var re = /\w+\(.*\)[;\s]+/g, olre = /overlib\(|nd\(|cClick\(/, fn, l, i, fN;
    if (olLoaded || (olLoaded = 1),
    window.removeEventListener && e.eventPhase == 3)
        window.removeEventListener("load", OLonLoad_handler, !1);
    else if (window.detachEvent && (window.detachEvent("onload", OLonLoad_handler),
    fN = document.body.getAttribute("onload"),
    fN && (fN = fN.toString().match(re),
    fN && fN.length)))
        for (i = 0; i < fN.length; i++)
            if (!/anonymous/.test(fN[i]))
                while ((l = fN[i].search(/\)[;\s]+/)) != -1)
                    fn = fN[i].substring(0, l + 1),
                    fN[i] = fN[i].substring(l + 2),
                    olre.test(fn) && eval(fn)
}
function wrapStr(endWrap, fontSizeStr, whichString) {
    var fontStr, fontColor, isClose = whichString == "close" ? 1 : 0, hasDims = /[%\-a-z]+$/.test(fontSizeStr);
    return fontSizeStr = olNs4 ? hasDims ? "1" : fontSizeStr : fontSizeStr,
    endWrap ? hasDims && !olNs4 ? isClose ? "<\/span>" : "<\/div>" : "<\/font>" : (fontStr = "o3_" + whichString + "font",
    fontColor = "o3_" + (whichString == "caption" ? "cap" : whichString) + "color",
    hasDims && !olNs4 ? isClose ? '<span style="font-family: ' + quoteMultiNameFonts(eval(fontStr)) + "; color: " + eval(fontColor) + "; font-size: " + fontSizeStr + ';">' : '<div style="font-family: ' + quoteMultiNameFonts(eval(fontStr)) + "; color: " + eval(fontColor) + "; font-size: " + fontSizeStr + ';">' : '<font face="' + eval(fontStr) + '" color="' + eval(fontColor) + '" size="' + (parseInt(fontSizeStr) > 7 ? "7" : fontSizeStr) + '">')
}
function quoteMultiNameFonts(n) {
    for (var t, i = n.split(","), r = 0; r < i.length; r++)
        t = i[r],
        t = t.replace(/^\s+/, "").replace(/\s+$/, ""),
        /\s/.test(t) && !/['"]/.test(t) && (t = "'" + t + "'",
        i[r] = t);
    return i.join()
}
function isExclusive() {
    return !1
}
function setCellPadStr(n) {
    var o = "", i = 0, t = [], r, u, f, e;
    o += "padding: ";
    t = n.replace(/\s+/g, "").split(",");
    switch (t.length) {
    case 2:
        r = u = t[i];
        f = e = t[++i];
        break;
    case 3:
        r = t[i];
        f = e = t[++i];
        u = t[++i];
        break;
    case 4:
        r = t[i];
        e = t[++i];
        u = t[++i];
        f = t[++i]
    }
    return o + (t.length == 1 ? t[0] + "px;" : r + "px " + e + "px " + u + "px " + f + "px;")
}
function hideDelay(n) {
    n && !o3_delay && (o3_timerid > 0 && clearTimeout(o3_timerid),
    o3_timerid = setTimeout("cClick()", o3_timeout = n))
}
function horizontalPlacement(n, t, i) {
    var r, e = n, u = t, f = parseInt(o3_width), o;
    return o3_fixx > -1 || o3_relx != null ? r = o3_relx != null ? o3_relx < 0 ? u + o3_relx + e - f - i : u + o3_relx : o3_fixx : (o3_hauto == 1 && (o3_x - u > e / 2 && o3_hpos == RIGHT && o3_x - u - (f + o3_offsetx - e > e - i) ? o3_hpos = LEFT : o3_hpos == LEFT && o3_x - o3_offsetx - f < u && (o3_hpos = RIGHT)),
    o3_hpos == CENTER && (r = o3_x + o3_offsetx - f / 2,
    r < u && (r = u)),
    o3_hpos == RIGHT && (r = o3_x + o3_offsetx,
    r + f > u + e - i && (r = e + u - f - i,
    r < 0 && (r = 0))),
    o3_hpos == LEFT && (r = o3_x - o3_offsetx - f,
    r < u && (r = u)),
    o3_snapx > 1 && (o = r % o3_snapx,
    r = o3_hpos == LEFT ? r - (o3_snapx + o) : r + (o3_snapx - o),
    r < u && (r = u))),
    r
}
function verticalPlacement(n, t) {
    var i, f = n, r = t, u = o3_aboveheight ? parseInt(o3_aboveheight) : olNs4 ? over.clip.height : over.offsetHeight, e;
    return o3_fixy > -1 || o3_rely != null ? i = o3_rely != null ? o3_rely < 0 ? r + o3_rely + f - u : r + o3_rely : o3_fixy : (o3_vauto == 1 && (o3_y - r > f / 2 && o3_vpos == BELOW && o3_y + u + o3_offsety - (r + f) > 0 ? o3_vpos = ABOVE : o3_vpos == ABOVE && o3_y - (u + o3_offsety) - r < 0 && (o3_vpos = BELOW)),
    o3_vpos == ABOVE ? (o3_aboveheight == 0 && (o3_aboveheight = u),
    i = o3_y - (o3_aboveheight + o3_offsety),
    i < r && (i = r)) : i = o3_y + o3_offsety,
    o3_snapy > 1 && (e = i % o3_snapy,
    i = o3_aboveheight > 0 && o3_vpos == ABOVE ? i - (o3_snapy + e) : i + (o3_snapy - e),
    i < r && (i = r))),
    i
}
function checkPositionFlags() {
    return olHautoFlag && (olHautoFlag = o3_hauto = 0),
    olVautoFlag && (olVautoFlag = o3_vauto = 0),
    !0
}
function windowWidth() {
    var w;
    return o3_frame.innerWidth ? w = o3_frame.innerWidth : eval("o3_frame." + docRoot) && eval("typeof o3_frame." + docRoot + ".clientWidth=='number'") && eval("o3_frame." + docRoot + ".clientWidth") && (w = eval("o3_frame." + docRoot + ".clientWidth")),
    w
}
function createDivContainer(n, t, i) {
    var u, r, f;
    return n = n || "overDiv",
    t = t || o3_frame,
    i = i || 1e3,
    r = layerReference(n),
    r == null && (olNs4 ? (r = t.document.layers[n] = new Layer(window.innerWidth,t),
    u = r) : (f = olIe4 ? t.document.all.tags("BODY")[0] : t.document.getElementsByTagName("BODY")[0],
    olIe4 && !document.getElementById ? (f.insertAdjacentHTML("beforeEnd", '<div id="' + n + '"><\/div>'),
    r = layerReference(n)) : (r = t.document.createElement("DIV"),
    r.id = n,
    f.appendChild(r)),
    u = r.style),
    u.position = "absolute",
    u.visibility = "hidden",
    u.zIndex = i,
    u.left = olIe4 && !olOp ? u.top = "0px" : u.top = -1e4 + (olNs4 ? 0 : "px")),
    r
}
function layerReference(n) {
    return olNs4 ? o3_frame.document.layers[n] : document.all ? o3_frame.document.all[n] : o3_frame.document.getElementById(n)
}
function isFunction(n) {
    var i = !0, t;
    if (typeof n == "object") {
        for (t = 0; t < n.length; t++)
            if (typeof n[t] != "function") {
                i = !1;
                break
            }
    } else
        typeof n != "function" && (i = !1);
    return i
}
function argToString(n, t, i) {
    var f = t, r = "", e = n, u;
    if (i = i ? i : "ar",
    e.length > f) {
        for (u = f; u < e.length; u++)
            r += i + "[" + u + "], ";
        r = r.substring(0, r.length - 2)
    }
    return r
}
function reOrder(n, t, i) {
    var r = [], e, u, f;
    if (!i || typeof i == "undefined" || typeof i == "number")
        return n;
    if (typeof i == "function") {
        for (typeof t == "object" ? r = r.concat(t) : r[r.length++] = t,
        u = 0; u < n.length; u++) {
            if (e = !1,
            typeof t == "function" && n[u] == t)
                continue;
            else
                for (f = 0; f < t.length; f++)
                    if (n[u] == t[f]) {
                        e = !0;
                        break
                    }
            e || (r[r.length++] = n[u])
        }
        r[r.length++] = i
    } else if (typeof i == "object") {
        for (typeof t == "object" ? r = r.concat(t) : r[r.length++] = t,
        f = 0; f < n.length; f++) {
            if (e = !1,
            typeof t == "function" && n[f] == t)
                continue;
            else
                for (u = 0; u < t.length; u++)
                    if (n[f] == t[u]) {
                        e = !0;
                        break
                    }
            e || (r[r.length++] = n[f])
        }
        for (u = 0; u < r.length; u++)
            n[u] = r[u];
        for (r.length = 0,
        f = 0; f < n.length; f++) {
            for (e = !1,
            u = 0; u < i.length; u++)
                if (n[f] == i[u]) {
                    e = !0;
                    break
                }
            e || (r[r.length++] = n[f])
        }
        r = r.concat(i)
    }
    return r
}
function setRunTimeVariables() {
    if (typeof runTime != "undefined" && runTime.length)
        for (var n = 0; n < runTime.length; n++)
            runTime[n]()
}
function parseCmdLine(n, t, i) {
    var r, u;
    if (typeof cmdLine != "undefined" && cmdLine.length)
        for (r = 0; r < cmdLine.length; r++)
            if (u = cmdLine[r](n, t, i),
            u > -1) {
                t = u;
                break
            }
    return t
}
function postParseChecks(n, t) {
    if (typeof postParse != "undefined" && postParse.length)
        for (var i = 0; i < postParse.length; i++)
            if (!postParse[i](n, t))
                return !1;
    return !0
}
function registerCommands(cmdStr) {
    var pM, i;
    if (typeof cmdStr == "string")
        for (pM = cmdStr.split(","),
        pms = pms.concat(pM),
        i = 0; i < pM.length; i++)
            eval(pM[i].toUpperCase() + "=" + pmCount++)
}
function registerNoParameterCommands(n) {
    (n || typeof n == "string") && (pmt = pmt ? pmt + "," + n : n)
}
function registerHook(n, t, i, r) {
    var f = typeof r, u;
    if (n != "plgIn" && n != "postParse" && (typeof hookPts[n] == "undefined" && (hookPts[n] = new FunctionReference),
    u = hookPts[n],
    i != null)) {
        i == FREPLACE ? (u.ovload = t,
        n.indexOf("ol_content_") > -1 && (u.alt[pms[CSSOFF - 1 - pmStart]] = t)) : i == FBEFORE || i == FAFTER ? (u = i == 1 ? u.before : u.after,
        typeof t == "object" ? u = u.concat(t) : u[u.length++] = t,
        r && (u = reOrder(u, t, r))) : i == FALTERNATE ? f == "number" && (u.alt[pms[r - 1 - pmStart]] = t) : i == FCHAIN && (u = u.chain,
        typeof t == "object" ? u = u.concat(t) : u[u.length++] = t);
        return
    }
}
function registerRunTimeFunction(n) {
    isFunction(n) && (typeof n == "object" ? runTime = runTime.concat(n) : runTime[runTime.length++] = n)
}
function registerCmdLineFunction(n) {
    isFunction(n) && (typeof n == "object" ? cmdLine = cmdLine.concat(n) : cmdLine[cmdLine.length++] = n)
}
function registerPostParseFunction(n) {
    isFunction(n) && (typeof n == "object" ? postParse = postParse.concat(n) : postParse[postParse.length++] = n)
}
function runHook(fnHookTo, hookType) {
    var l = hookPts[fnHookTo], rtnVal = null, optPm, arS, ar = runHook.arguments, k;
    if (hookType == FREPLACE)
        arS = argToString(ar, 2),
        rtnVal = typeof l != "undefined" && (l = l.ovload) ? eval("l(" + arS + ")") : eval(fnHookTo + "(" + arS + ")");
    else if (hookType == FBEFORE || hookType == FAFTER) {
        if (typeof l != "undefined" && (l = hookType == 1 ? l.before : l.after,
        l.length))
            for (arS = argToString(ar, 2),
            k = 0; k < l.length; k++)
                eval("l[k](" + arS + ")")
    } else if (hookType == FALTERNATE)
        optPm = ar[2],
        arS = argToString(ar, 3),
        rtnVal = typeof l == "undefined" || (l = l.alt[pms[optPm - 1 - pmStart]]) == "undefined" ? eval(fnHookTo + "(" + arS + ")") : eval("l(" + arS + ")");
    else if (hookType == FCHAIN)
        for (arS = argToString(ar, 2),
        l = l.chain,
        k = l.length; k > 0; k--)
            if ((rtnVal = eval("l[k-1](" + arS + ")")) != void 0)
                break;
    return rtnVal
}
function FunctionReference() {
    this.ovload = null;
    this.before = [];
    this.after = [];
    this.alt = [];
    this.chain = []
}
function Info(n, t) {
    this.version = n;
    this.prerelease = t;
    this.simpleversion = Math.round(this.version * 100);
    this.major = parseInt(this.simpleversion / 100);
    this.minor = parseInt(this.simpleversion / 10) - this.major * 10;
    this.revision = parseInt(this.simpleversion) - this.major * 100 - this.minor * 10;
    this.meets = meets
}
function meets(n) {
    return n ? this.simpleversion >= Math.round(100 * parseFloat(n)) : !1
}
function BaseServiceCall(n, t, i, r, u) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: BaseUrl + "Services/YucataService.svc/" + n,
        data: t,
        dataType: "json",
        timeout: 2e6,
        success: function(n) {
            i && i(n, u)
        },
        error: function(n) {
            r && r(n, u)
        }
    })
}
function BaseServiceCallGET(n, t, i, r, u) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: BaseUrl + "Services/YucataService.svc/" + n,
        data: t,
        dataType: "json",
        timeout: 2e6,
        success: function(n) {
            i && i(n, u)
        },
        error: function(n) {
            r && r(n, u)
        }
    })
}
function ServiceSetGameLike(n, t, i, r) {
    BaseServiceCall("SetGameLike", '{"gameTypeId":"' + n + '","gameLikeValue":"' + t + '"}', i, r)
}
function ServiceGetMessages(n, t, i) {
    BaseServiceCall("GetMessages", '{"lastId":"' + n + '"}', t, i)
}
function ServiceLikeForumPost(n, t, i) {
    return BaseServiceCall("LikeForumPost", '{"postid":"' + n + '"}', t, i),
    !1
}
function ServiceGetNextGameOnTurnRoute(n, t) {
    BaseServiceCall("GetNextGameOnTurnRoute", "{}", n, t)
}
function ServiceGetUnreadMessages(n, t) {
    BaseServiceCall("GetUnreadMessages", "", n, t)
}
function ServiceHideMessage(n, t, i) {
    BaseServiceCall("HideMessage", '{"id":"' + n + '"}', t, i)
}
function ServiceGetTrueSkillForPlayer(n, t, i) {
    BaseServiceCall("GetTrueSkillForPlayer", '{"pid":"' + n + '"}', t, i)
}
function ServiceGetDonationHistory(n, t, i) {
    BaseServiceCall("GetDonationHistory", '{"pid":"' + n + '"}', t, i)
}
function ServiceGetRecentlyFinishedGames(n, t, i) {
    BaseServiceCall("GetRecentlyFinishedGames", '{"userId":"' + n + '"}', t, i)
}
function ServiceGetRecentlyFinishedGameDetail(n, t, i) {
    BaseServiceCall("GetRecentlyFinishedGameDetail", '{"gameId":"' + n + '"}', t, i)
}
function ServiceDeleteMessage(n, t) {
    BaseServiceCall("DeleteMessage", '{"id":"' + n + '","msgType":"' + t + '"}', null, null)
}
function ServiceSendChatMessage(n, t, i, r) {
    BaseServiceCall("SendChatMessage", '{"message":"' + n + '","recipient":"' + t + '"}', i, r)
}
function ServiceSendGameChatMessage(n, t, i, r) {
    BaseServiceCall("SendGameChatMessage", '{"message":"' + n + '","gameId":"' + t + '"}', i, r)
}
function ServiceGetChatMessages(n, t) {
    BaseServiceCall("GetChatMessages", "", n, t)
}
function ServiceGetGameChatMessages(n, t, i) {
    BaseServiceCall("GetGameChatMessages", '{"gameId":"' + n + '"}', t, i)
}
function ServiceClearChat() {
    BaseServiceCall("ClearChat", "", null, null)
}
function ServiceDeleteChatMessage(n, t, i) {
    BaseServiceCall("DeleteChatMessage", '{"id":"' + n + '"}', t, i)
}
function ServiceMuteUser(n, t, i, r) {
    BaseServiceCall("MuteUser", '{"userID":"' + n + '","minutes":"' + t + '"}', i, r)
}
function ServiceGetTrueSkillRatingsByGameType(n, t, i, r) {
    BaseServiceCall("GetTrueSkillRatingsByGameType", '{"gameTypeId":"' + n + '","pageId":"' + t + '"}', i, r)
}
function ServiceGetOnlineUsers(n, t) {
    BaseServiceCallGET("GetOnlineUsers", "", n, t)
}
function ServiceGetLiveGames(n, t) {
    BaseServiceCall("GetLiveGames", "", n, t)
}
function ServiceGetQuarantinedGames(n, t) {
    BaseServiceCall("GetQuarantinedGames", "", n, t)
}
function ServiceGetPublicInvitations(n, t) {
    BaseServiceCall("GetPublicInvitations", "", function(t) {
        RemapInvitationRecord(t, n)
    }, t)
}
function ServiceGetPublicInvitationsByGameTypeId(n, t, i) {
    BaseServiceCall("GetPublicInvitationsByGameTypeId", '{"id":"' + n + '"}', function(n) {
        RemapInvitationRecord(n, t)
    }, i)
}
function ServiceGetPublicInvitationsByPlayerId(n, t, i) {
    BaseServiceCall("GetPublicInvitationsByPlayerId", '{"id":"' + n + '"}', function(n) {
        RemapInvitationRecord(n, t)
    }, i)
}
function ServiceGetRandomGameInvitations(n, t) {
    BaseServiceCall("GetRandomGameInvitations", "", function(t) {
        RemapInvitationRecord(t, n)
    }, t)
}
function ServiceGetPersonalInvitations(n, t) {
    BaseServiceCall("GetPersonalInvitations", "", function(t) {
        RemapInvitationRecord(t, n)
    }, t)
}
function ServiceGetSentInvitations(n, t) {
    BaseServiceCall("GetSentInvitations", "", function(t) {
        RemapInvitationRecord(t, n)
    }, t)
}
function ServiceAcceptInvitation(n, t, i) {
    BaseServiceCall("AcceptInvitation", '{"id":"' + n + '"}', t, i)
}
function ServiceGetMatchQuality(n, t, i, r) {
    BaseServiceCall("GetMatchQuality", '{"id":"' + n + '"}', t, i, r)
}
function ServiceDeleteInvitation(n, t, i) {
    BaseServiceCall("DeleteInvitation", '{"id":"' + n + '"}', t, i)
}
function ServiceGetUserFlairById(n, t, i) {
    BaseServiceCall("GetUserFlairById", '{"id":"' + n + '"}', t, i)
}
function ServiceGetWonGames(n, t) {
    BaseServiceCall("GetWonGames", "", n, t)
}
function ServiceGetBuddies(n, t) {
    BaseServiceCall("GetBuddies", "", n, t)
}
function ServiceAddBuddy(n, t, i) {
    BaseServiceCall("AddBuddy", '{"buddyId":"' + n + '"}', t, i)
}
function ServiceBlockUser(n, t, i, r) {
    BaseServiceCall("BlockUser", '{"userId":"' + n + '","reason":"' + t + '"}', i, r)
}
function ServiceSetUserRoles(n, t, i, r, u, f) {
    BaseServiceCall("SetUserRoles", '{"userId":"' + n + '","isAdmin":"' + t + '","isModerator":"' + i + '","isTournamentOrganizer":"' + r + '"}', u, f)
}
function ServiceUnblockUser(n, t, i) {
    BaseServiceCall("UnblockUser", '{"userId":"' + n + '"}', t, i)
}
function ServiceRemoveBuddy(n, t, i) {
    BaseServiceCall("RemoveBuddy", '{"buddyId":"' + n + '"}', t, i)
}
function ServiceSetWindowSize(n, t, i, r, u) {
    BaseServiceCall("SetWindowSize", '{"windowId":"' + n + '","width":"' + t + '","height":"' + i + '"}', r, u)
}
function ServiceGetGameLikes(n, t, i) {
    BaseServiceCall("GetGameLikes", '{"playerID":"' + n + '"}', t, i)
}
function ServiceGetGamesByOpponent(n, t, i) {
    BaseServiceCall("GetGamesByOpponent", '{"playerID":"' + n + '"}', t, i)
}
function ServiceGetGamesByGameType(n, t, i) {
    BaseServiceCall("GetGamesByGameType", '{"playerID":"' + n + '"}', t, i)
}
function ServiceGetPlayedOpponents(n, t, i) {
    BaseServiceCall("GetPlayedOpponents", '{"pid":"' + n + '"}', t, i)
}
function ServiceGetPlayedGameTypes(n, t, i) {
    BaseServiceCall("GetPlayedGameTypes", '{"pid":"' + n + '"}', t, i)
}
function ServiceGetAllPlayedGames(n, t, i) {
    BaseServiceCall("GetAllPlayedGames", '{"userID":"' + n + '"}', t, i)
}
function ServiceGetGamesByOpponentByGameType(n, t, i, r) {
    BaseServiceCall("GetGamesByOpponentByGameType", '{"playerID":"' + n + '","opponentID":"' + t + '"}', i, r)
}
function ServiceGetGamesByGameTypeByOpponent(n, t, i, r) {
    BaseServiceCall("GetGamesByGameTypeByOpponent", '{"playerID":"' + n + '","gameType":"' + t + '"}', i, r)
}
function ServiceGetGamesByGameTypeAllGames(n, t, i, r) {
    BaseServiceCall("GetGamesByGameTypeAllGames", '{"playerID":"' + n + '","gameType":"' + t + '"}', i, r)
}
function ServiceGetGamesByOpponentAllGames(n, t, i, r) {
    BaseServiceCall("GetGamesByOpponentAllGames", '{"playerID":"' + n + '","opponentID":"' + t + '"}', i, r)
}
function ServiceGetGamesByGameTypeByOpponentAllGames(n, t, i, r, u) {
    BaseServiceCall("GetGamesByGameTypeByOpponentAllGames", '{"playerID":"' + n + '","opponentID":"' + t + '","gameType":"' + i + '"}', r, u)
}
function ServiceGetNote(n, t, i, r) {
    BaseServiceCall("GetNote", '{"gameID":"' + n + '","pid":"' + t + '"}', i, r)
}
function ServiceSetNote(n, t, i, r, u) {
    BaseServiceCall("SetNote", '{"gameID":"' + n + '","pid":"' + t + '","note":"' + i + '"}', r, u)
}
function ServiceGetTrueSkillDevelopmentForOneGameAndPlayer(n, t, i, r) {
    BaseServiceCall("GetTrueSkillDevelopmentForOneGameAndPlayer", '{"gameTypeId":"' + n + '","playerId":"' + t + '"}', i, r)
}
function ServiceGetAllPlayedGamesByUserId(n, t, i) {
    BaseServiceCall("GetAllPlayedGamesByUserId", '{"playerId":"' + n + '"}', t, i)
}
function ServiceGetRankingList(n, t) {
    BaseServiceCall("GetRankingList", "", n, t)
}
function ServiceGetLastChatMessageReadTime(n, t, i) {
    BaseServiceCall("GetLastChatMessageReadTime", '{"channelId":"' + n + '"}', t, i)
}
function ServiceSetLastChatMessageReadTime(n, t, i, r) {
    BaseServiceCall("SetLastChatMessageReadTime", '{"channelId":"' + n + '","epoch":"' + t + '"}', i, r)
}
function ServiceGetGamesList(n, t) {
    BaseServiceCall("GetGamesList", "{}", n, t)
}
function AllowedToSave() {
    var n = document.getElementsByName("SaveStatusFailed")[0];
    return n.getAttribute("value") === "False"
}
function ServiceCreateBlogPost(n, t, i, r) {
    BaseServiceCall("CreateBlogPost", '{"title":"' + n + '","text":"' + t + '"}', i, r)
}
function ServiceUpdateBlogPost(n, t, i, r, u, f) {
    BaseServiceCall("UpdateBlogPost", '{"id":"' + n + '","lang":"' + t + '","title":"' + i + '","text":"' + r + '"}', u, f)
}
function ServiceBlogPostChangeState(n, t, i, r, u) {
    BaseServiceCall("BlogPostChangeState", '{"id":"' + n + '","lang":"' + t + '","newState":"' + i + '"}', r, u)
}
function ServiceTranslateBlogPost(n, t, i, r) {
    BaseServiceCall("TranslateBlogPost", '{"id":"' + n + '","toLanguage":"' + t + '"}', i, r)
}
function ServiceDeleteBlogPost(n, t, i, r) {
    BaseServiceCall("DeleteBlogPost", '{"lang":"' + t + '","id":"' + n + '"}', i, r)
}
function ServiceGetBlogPost(n, t, i, r) {
    BaseServiceCall("GetBlogPost", '{"lang":"' + t + '","id":"' + n + '"}', i, r)
}
function ServiceGetBlogPosts(n, t, i, r, u) {
    BaseServiceCall("GetBlogPosts", '{"publishedOnly":"' + n + '","year":"' + t + '","month":"' + i + '"}', r, u)
}
function ServiceSetGameStatusSecure(n, t, i, r, u, f, e) {
    var o, s;
    if (!AllowedToSave()) {
        f && f();
        return
    }
    o = arguments.length <= 6 ? "" : e;
    s = function(n) {
        var t = document.getElementsByName("SaveStatusFailed")[0];
        t.setAttribute("value", "True");
        f && f(n)
    }
    ;
    BaseServiceCall("SetGameStatusSecureWithMove", '{"gameID":"' + n + '","pid":"' + t + '","status":"' + i + '","origStatus":"' + r + '","move":"' + o + '"}', u, s)
}
function ServiceSetDBStatusSecure(n, t, i, r, u) {
    var e, f, o;
    return AllowedToSave() ? (e = arguments.length <= 4 ? "" : u,
    f = $.ajax({
        type: "POST",
        async: !1,
        contentType: "application/json; charset=utf-8",
        url: BaseUrl + "Services/YucataService.svc/SetGameStatusSecureWithMove",
        data: '{"gameID":"' + n + '","pid":"' + t + '","status":"' + i + '","origStatus":"' + r + '","move":"' + e + '"}',
        dataType: "json",
        timeout: 2e4
    }),
    f.status != 200 && (o = document.getElementsByName("SaveStatusFailed")[0],
    o.setAttribute("value", "True")),
    f.status == 200) : !1
}
function RemapInvitationRecord(n, t) {
    new_d = [];
    n.d.forEach(function(n) {
        new_record = {};
        for (var t in _invitationRecordMapping)
            new_record[_invitationRecordMapping[t]] = n[t];
        new_d.push(new_record)
    });
    n.d = new_d;
    t(n)
}
function find(n, t, i) {
    $.isFunction(i) || (i = $.isArray(n) ? this.isEqualArray : function(n, t) {
        return n == t
    }
    );
    for (var r = 0, u = t.length; r < u; r++)
        if (i(t[r], n))
            return r;
    return -1
}
function ShowFlag(n) {
    return '<span class="fflag ff-md fflag-' + n.toLowerCase() + '" title="' + GetCountryName(n) + '"><\/span>'
}
function ShowHistoryGame(n) {
    var t = window.open(BaseUrlWithLang + "game/" + n, "Game" + n, "width=819,height=650,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=yes,locationbar=no");
    t.resizeTo(819, 650);
    t.focus()
}
function showPopup(n, t, i, r) {
    var u = window.open(n, t, "width=" + i + ",height=" + r + ",menubar=no,toolbar=no,status=no,locationbar=no,resizable=yes,scrollbars=yes");
    u.resizeTo(i, r);
    u.focus()
}
function ShowSendMessage(n) {
    n ? showPopup(BaseUrlWithLang + "SendMessage/" + n, "SendMessage", 560, 460) : showPopup(BaseUrlWithLang + "SendMessage", "SendMessage", 560, 460)
}
function UpdatePlayerTrueSkillCB(n) {
    playerTrueSkills = {};
    for (var t = 0; t < n.d.length; ++t)
        playerTrueSkills[n.d[t].GameTypeID] = n.d[t]
}
function GetTrueSkill(n, t) {
    if (n === null)
        return 0;
    var i = n - 3 * t;
    return i < 0 ? 0 : Math.floor(i)
}
function GetPlayerTrueSkillForGameType(n) {
    return n in playerTrueSkills ? GetTrueSkill(playerTrueSkills[n].Mu, playerTrueSkills[n].Sigma) : 0
}
function UpdateGameLikesCB(n) {
    gamelikeData = {};
    for (var t = 0; t < n.d.length; t++)
        gamelikeData[n.d[t].GameTypeId] = n.d[t].GameLikeLevel
}
function GetGameLikeData(n) {
    return gamelikeData !== null && n in gamelikeData ? gamelikeData[n] : 2
}
function GetLikeLevelTextAll(n) {
    return (n >= 0 && n < 5) ? UserLang == 0 ? ["Mag ich nicht", "Kenn ich nicht", "Neutral", "Mag ich", "Lieblingsspiel"][n] : ["Don't like it", "Don't know it", "Neutral", "Like it", "Favorite game"][n] : ""
}
function GetLikeLevelText(n) {
    var t = GetLikeLevelTextAll(n);
    return t == "" ? t : "(" + t + ")"
}
function GetPlayersImageHtml(n, t) {
    var r = " Spieler", i;
    return UserLang == "1" && (r = " players"),
    i = "",
    (n > 2 || t) && (i = "sprite-common invitation-image sprite-common-" + n + "players"),
    "<span title='" + n + r + "' class='" + i + "' />"
}
function GetReturnImageHtml(n) {
    if (!n)
        return "";
    var t = "Spiel mit Rückspiel";
    return UserLang == "1" && (t = "Game with return match"),
    "<span title='" + t + "' class='sprite-common invitation-image sprite-common-rueck' />"
}
function GetReturnMatchImageHtml(n, t) {
    var i = $("<span>").addClass("sprite-common currentgame-image"), r, u, f, e;
    return n || t ? t ? (i.addClass("sprite-common-rueckspiel"),
    r = "Rückspiel",
    UserLang == "1" && (r = "Return match"),
    i.attr("title", r)) : (i.addClass("sprite-common-hinspiel"),
    u = "Hinspiel",
    UserLang == "1" && (u = "First leg"),
    i.attr("title", u)) : (i.addClass("sprite-common-hin"),
    f = "Nur Hinspiel",
    UserLang == "1" && (f = "Only first leg"),
    i.attr("title", f)),
    e = $("<span>").append(i),
    e.html()
}
function GetInvTypeImageHtml(n) {
    var i = "invall", t;
    return n == 5 && (i = "invdirect"),
    n == 1 && (t = "Öffentliche Einladung",
    UserLang == "1" && (t = "Public invitation")),
    n == 5 && (t = "Persönliche Einladung",
    UserLang == "1" && (t = "Personal invitation")),
    "<span title='" + t + "' class='sprite-common invitation-image sprite-common-" + i + "' />"
}
function GetGameTypeImageHtml(n) {
    var i, t;
    return i = n ? UserLang == "1" ? "Scored game" : "Wertungsspiel" : UserLang == "1" ? "Training game" : "Übungsspiel",
    t = "wertung",
    n || (t = "training"),
    "<span title='" + i + "' class='sprite-common invitation-image sprite-common-" + t + "' />"
}
function startGame(n) {
    var t;
    readCookie("open-gameWindow-in-own-window") != "false" ? (t = window.open("game/" + n.data.gameID, "GameWindow", "width=819,height=650,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=yes,locationbar=no"),
    t.resizeTo(819, 650)) : t = window.open("game/" + n.data.gameID, "GameWindow");
    t.focus()
}
function ShowHistoryGame(n) {
    var t;
    $(".hasUnreadChat.yucRecFinID" + n).removeClass("hasUnreadChat");
    readCookie("open-gameWindow-in-own-window") != "false" ? (t = window.open(BaseUrlWithLang + "game/" + n, "GameWindow", "width=819,height=650,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=yes,locationbar=no"),
    t.resizeTo(819, 650)) : t = window.open(BaseUrlWithLang + "game/" + n, "GameWindow");
    t.focus()
}
function UpdateLiveGames() {
    ServiceGetLiveGames(LiveGamesCB, LiveGamesError)
}
function UpdateQuarantinedGames() {
    ServiceGetQuarantinedGames(QuarantinedGamesCB)
}
function HandleLostSession(n) {
    n.responseText.search(/LostSession/) != -1 && (window.location = BaseUrlWithLang)
}
function CalcNextGameOnTurn() {
    var n = currentGamesData.filter(function(n) {
        return n.UserIsOnTurn
    }), u, i, r, t, f;
    if (n.length == 0)
        return -1;
    if (n.some(function(n) {
        return n.LastMoveBy == UserID
    }))
        return u = find(UserID, n, function(n, t) {
            return n.LastMoveBy == t
        }),
        n[u].ID;
    for (n.some(function(n) {
        return n.IsTournament
    }),
    i = n[0].ID,
    r = n[0].LastMoveOn,
    t = 1,
    f = n.length; t < f; t++)
        n[t].LastMoveOn < r && (r = n[t].LastMoveOn,
        i = n[t].ID);
    return i
}
function HandleMoveDone(n, t, i) {
    var u, r, f;
    currentGamesData && (u = find(n, currentGamesData, function(n, t) {
        return n.ID == t
    }),
    currentGamesData[u].PlayerOnTurn = i,
    i == UserID && (currentGamesData[u].UserIsOnTurn = !0),
    r = new Date,
    f = r.getFullYear() + "-" + (r.getMonth() + 1).pad() + "-" + r.getDate().pad() + " " + r.getHours().pad() + ":" + r.getMinutes().pad() + ":" + r.getSeconds().pad() + "." + r.getMilliseconds().pad(3),
    currentGamesData[u].LastMoveOn = f,
    currentGamesData[u].LastMoveBy = t,
    gameOnTurnID = CalcNextGameOnTurn(),
    currentGamesTable.clear().rows.add(currentGamesData).draw(),
    $("#StartGameButton").attr("disabled", gameOnTurnID == -1))
}
function HandleTurnDone(n, t, i) {
    if (currentGamesData) {
        var r = find(n, currentGamesData, function(n, t) {
            return n.ID == t
        });
        currentGamesData[r].PlayerOnTurn = t;
        currentGamesData[r].UserIsOnTurn = t == UserID;
        currentGamesData[r].Players.forEach(function(n) {
            n.HasDecision = !1
        });
        t == -2 && i.forEach(function(n) {
            currentGamesData[r].Players[n].HasDecision = !0;
            currentGamesData[r].Players[n].PlayerID == UserID && (currentGamesData[r].UserIsOnTurn = !0)
        });
        gameOnTurnID = CalcNextGameOnTurn();
        currentGamesTable.clear().rows.add(currentGamesData).draw();
        $("#StartGameButton").attr("disabled", gameOnTurnID == -1)
    }
}
function HandleGameFinished(n) {
    var t, i;
    for (RemoveGameFromCurrentGameList && RemoveGameFromCurrentGameList(n.GameId),
    t = 0; t < n.Opponents.length; t++)
        n.Opponents[t].PID = n.Opponents[t].PlayerId;
    currentRecentlyFinishedGameData && (currentRecentlyFinishedGameData.splice(0, 0, n),
    recentlyFinishedGamesTable.clear().rows.add(currentRecentlyFinishedGameData).draw(),
    n.Result == 2 && (i = UserLang == 0 ? "Spiel gewonnen" : "Game won"),
    n.Result == 1 && (i = UserLang == 0 ? "Spiel unentschieden" : "Game tie"),
    n.Result == 0 && (i = UserLang == 0 ? "Spiel verloren" : "Game lost"),
    toastr.info(i, n.CustomGameName, {
        timeOut: "50000"
    }))
}
function AddGameToCurrentGameList(n) {
    currentGamesData && (currentGamesData.push(n),
    gameOnTurnID = CalcNextGameOnTurn(),
    currentGamesTable.clear().rows.add(currentGamesData).draw(),
    $("#StartGameButton").attr("disabled", gameOnTurnID == -1))
}
function RemoveGameFromCurrentGameList(n) {
    if (currentGamesData) {
        var t = find(n, currentGamesData, function(n, t) {
            return n.ID == t
        });
        currentGamesData.splice(t, 1);
        gameOnTurnID = CalcNextGameOnTurn();
        currentGamesTable.clear().rows.add(currentGamesData).draw();
        $("#StartGameButton").attr("disabled", gameOnTurnID == -1)
    }
}
function QuarantinedGamesCB(n) {
    quarantinedGamesData = n.d.Games;
    RenderQuarantinedGames()
}
function LiveGamesCB(n) {
    var t, i, r;
    currentGamesData = n.d.Games;
    gameOnTurnID = CalcNextGameOnTurn();
    RenderCurrentGamesFilter();
    RenderCurrentGames();
    t = "Zeige Spiel";
    UserLang == "1" && (t = "Show game");
    i = "in eigenem Fenster";
    UserLang == "1" && (i = "in its own window");
    r = $("#StartGame");
    $("<input id='StartGameButton' style='margin-top: 6px; margin-bottom: 8px' type='button'>").appendTo(r).addClass("button").attr("value", t).bind("click", {
        gameID: -1
    }, startGame);
    r.append($("<input id='StartInOwnWindow' type='checkbox'>").prop("checked", readCookie("open-gameWindow-in-own-window") != "false").change(function() {
        createCookie("open-gameWindow-in-own-window", this.checked, 9999)
    })).append($("<label for='StartInOwnWindow'>").text(i));
    $("#StartGameButton").attr("disabled", gameOnTurnID == -1)
}
function RenderCurrentGamesFilter() {
    var n = "Ich bin am Zug oder Gegner online", t = "Alle Spiele", i = "Ich bin am Zug", r;
    UserLang === "1" && (n = "My turn or all opponents online",
    t = "All games",
    i = "My turn");
    r = $("<span><select id='ddlCurrentGamesFilter'><option value='0'>" + i + "<\/option><option value='1'>" + n + "<\/option><option value='2' selected='yes'>" + t + "<\/option><\/select>");
    $("#LiveGamesFilter").append(r)
}
function CurrentGamesTableCustomFilter(n, t, i) {
    var f = new $.fn.dataTable.Api(n), r, u;
    if (f.table().node() !== document.getElementById("LiveGamesTable") || (r = f.row(i).data(),
    $("#ddlCurrentGamesFilter").val() == 2) || r.UserIsOnTurn)
        return !0;
    if ($("#ddlCurrentGamesFilter").val() == 1) {
        for (u = 0; u < r.Players.length; ++u)
            if (!IsOnlineID(r.Players[u].PlayerID))
                return !1;
        return !0
    }
    return !1
}
function RenderQuarantinedGames() {
    var n = "Spiel"
      , t = "Mitspieler"
      , e = "Alle"
      , o = "Geschw."
      , i = "Spielname"
      , r = "Letzter Zug war "
      , u = "Turnierspiel. Letzter Zug war "
      , f = "Kein Zug bisher, begann ";
    UserLang === "1" && (n = "Game",
    t = "Opponents",
    e = "All",
    o = "Speed",
    i = "Game name",
    u = "Tournament game.",
    r = "Last turn taken ",
    f = "No moves yet, started ");
    $("#QuarantinedGames").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="LiveGamesTable"><\/table>');
    currentGamesTable = $("#LiveGamesTable").DataTable({
        data: quarantinedGamesData,
        language: GetDataTablesTranslation(undefined, i),
        ordering: !0,
        searching: !0,
        paging: !1,
        info: !0,
        autoWidth: !1,
        stateSave: !0,
        stateDuration: 0,
        dom: '<"top"lp>rt<"bottom"ip><"clear">',
        deferRender: !0,
        order: [[1, "asc"]],
        createdRow: function(n, t) {
            t.ID == gameOnTurnID && $(n).addClass("currentGameOnTurn")
        },
        columns: [{
            title: "ID",
            orderable: !0,
            searchable: !1,
            width: "40px",
            data: "ID",
            render: function(n, t) {
                return t === "sort" || t === "filter" ? n : "<a href='javascript:ShowHistoryGame(" + n + ")'>" + n + "<\/a>"
            }
        }, {
            title: n,
            width: "30%",
            orderSequence: ["desc", "asc"],
            data: "GameShortName",
            type: "string",
            render: function(n, t, i) {
                return t === "sort" || t === "filter" ? n : '<span class="jGameInfo" data-gameidname="' + i.GameIDName + '" data-gamename="' + n + '">' + n + "<\/span>"
            }
        }, {
            title: t,
            name: "opponents",
            orderable: !0,
            width: "45%",
            sorting: ["asc", "desc"],
            data: "Players",
            type: "string",
            searchable: !1,
            render: function(n, t, i) {
                var f, r, e, o, u;
                if (t === "sort" || t === "filter")
                    return n[0].Login;
                for (f = $("<span>"),
                e = !0,
                r = 0; r < n.length; r++)
                    e ? e = !1 : f.append(document.createTextNode(", ")),
                    o = i.UserIsOnTurn ? "c/poeppel_onturn.png" : "c/poeppel.png",
                    u = $("<span>").appendTo(f),
                    n[r].PlayerID == UserID ? u.append($("<img>").attr("src", ImagePath + o).css("width", "13px").css("height", "13px")).addClass("jPlayerInfo jPlayerID" + n[r].PlayerID) : ((n[r].PlayerID == i.PlayerOnTurn || n[r].HasDecision) && u.addClass("playerOnTurn"),
                    FormatOnlinePlayer(n[r].Login, n[r].PlayerID, n[r].Rank, !1, !1, n[r].IsOnVacation, n[r].VacationStart, n[r].VacationEnd, n[r].VacationReason).appendTo(u),
                    u.css("white-space", "nowrap"));
                return f.html()
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "NumPlayers",
            orderable: !1,
            searchable: !1,
            render: function(n, t) {
                return t === "display" ? GetPlayersImageHtml(n, !1) : n
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "IsRanking",
            orderable: !1,
            searchable: !1,
            render: function(n, t) {
                return t === "display" ? n ? "" : GetGameTypeImageHtml(n) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !1,
            data: "HasReturn",
            searchable: !1,
            render: function(n, t, i) {
                return t === "display" ? !n && !i.isReturn ? "" : GetReturnMatchImageHtml(n, i.isReturn) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !0,
            data: "LastMoveOn",
            searchable: !1,
            render: function(n, t, i) {
                var u, e;
                return t === "display" ? (u = $("<span>"),
                u.addClass("sprite-clock"),
                n ? u.attr("title", r + jQuery.timeago(n)) : u.attr("title", f + jQuery.timeago(i.StartedOn)),
                e = $("<span>").append(u),
                e.html()) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !1,
            data: "IsTournament",
            searchable: !1,
            render: function(n, t) {
                var i, r;
                return t === "display" ? n ? (i = $("<span>").addClass("sprite-common currentgame-image sprite-common-tunier"),
                i.attr("title", u),
                r = $("<span>").append(i),
                r.html()) : "" : n
            }
        }]
    })
}
function RenderCurrentGames() {
    var n = "Spiel"
      , t = "Mitspieler"
      , e = "Alle"
      , o = "Geschw."
      , i = "Spielname"
      , r = "Letzter Zug war "
      , u = "Turnierspiel. Letzter Zug war "
      , f = "Kein Zug bisher, begann ";
    UserLang === "1" && (n = "Game",
    t = "Opponents",
    e = "All",
    o = "Speed",
    i = "Game name",
    u = "Tournament game.",
    r = "Last turn taken ",
    f = "No moves yet, started ");
    $.fn.dataTable.ext.search.push(CurrentGamesTableCustomFilter);
    $("#LiveGames").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="LiveGamesTable"><\/table>');
    currentGamesTable = $("#LiveGamesTable").DataTable({
        stateSaveParams: function(n, t) {
            t.yFilterValues = [];
            t.Filter = $("#ddlCurrentGamesFilter").val()
        },
        stateLoaded: function(n, t) {
            t.Filter !== undefined && $("#ddlCurrentGamesFilter").val(t.Filter)
        },
        data: currentGamesData,
        language: GetDataTablesTranslation(undefined, i),
        ordering: !0,
        searching: !0,
        paging: !1,
        info: !0,
        autoWidth: !1,
        stateSave: !0,
        stateDuration: 0,
        dom: '<"top"lp>rt<"bottom"ip><"clear">',
        deferRender: !0,
        order: [[1, "asc"]],
        createdRow: function(n, t) {
            t.ID == gameOnTurnID && $(n).addClass("currentGameOnTurn")
        },
        columns: [{
            title: "ID",
            orderable: !0,
            searchable: !1,
            width: "40px",
            data: "ID",
            render: function(n, t) {
                return t === "sort" || t === "filter" ? n : "<a href='javascript:ShowHistoryGame(" + n + ")'>" + n + "<\/a>"
            }
        }, {
            title: n,
            width: "30%",
            orderSequence: ["desc", "asc"],
            data: "GameShortName",
            type: "string",
            render: function(n, t, i) {
                return t === "sort" || t === "filter" ? n : (className = i.UserIsOnTurn ? "" : "notOnTurn",
                '<span class="jGameInfo ' + className + '" data-gameidname="' + i.GameIDName + '" data-gamename="' + n + '">' + n + "<\/span>")
            }
        }, {
            title: t,
            name: "opponents",
            orderable: !0,
            width: "45%",
            sorting: ["asc", "desc"],
            data: "Players",
            type: "string",
            searchable: !1,
            render: function(n, t, i) {
                var e, f, r, o, s, u;
                if (t === "sort" || t === "filter") {
                    for (e = "",
                    r = 0; r < n.length; r++)
                        e += n[r].Login + "                    ".substr(0, 20);
                    return e + i.ID
                }
                for (f = $("<span>"),
                o = !0,
                r = 0; r < n.length; r++)
                    o ? o = !1 : f.append(document.createTextNode(", ")),
                    s = i.UserIsOnTurn ? "c/poeppel_onturn.png" : "c/poeppel.png",
                    u = $("<span>").appendTo(f),
                    n[r].PlayerID == UserID ? u.append($("<img>").attr("src", ImagePath + s).css("width", "13px").css("height", "13px")).addClass("jPlayerInfo jPlayerID" + n[r].PlayerID) : ((n[r].PlayerID == i.PlayerOnTurn || n[r].HasDecision) && u.addClass("playerOnTurn"),
                    FormatOnlinePlayer(n[r].Login, n[r].PlayerID, n[r].Rank, !1, !1, n[r].IsOnVacation, n[r].VacationStart, n[r].VacationEnd, n[r].VacationReason).appendTo(u),
                    u.css("white-space", "nowrap"));
                return f.html()
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "NumPlayers",
            orderable: !1,
            searchable: !1,
            render: function(n, t) {
                return t === "display" ? GetPlayersImageHtml(n, !1) : n
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "IsRanking",
            orderable: !1,
            searchable: !1,
            render: function(n, t) {
                return t === "display" ? n ? "" : GetGameTypeImageHtml(n) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !1,
            data: "HasReturn",
            searchable: !1,
            render: function(n, t, i) {
                return t === "display" ? !n && !i.isReturn ? "" : GetReturnMatchImageHtml(n, i.isReturn) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !0,
            data: "LastMoveOn",
            searchable: !1,
            render: function(n, t, i) {
                var u, e;
                return t === "display" ? (u = $("<span>"),
                u.addClass("sprite-clock"),
                n ? u.attr("title", r + jQuery.timeago(n)) : u.attr("title", f + jQuery.timeago(i.StartedOn)),
                e = $("<span>").append(u),
                e.html()) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !1,
            data: "IsTournament",
            searchable: !1,
            render: function(n, t) {
                var i, r;
                return t === "display" ? n ? (i = $("<span>").addClass("sprite-common currentgame-image sprite-common-tunier"),
                i.attr("title", u),
                r = $("<span>").append(i),
                r.html()) : "" : n
            }
        }]
    });
    $("#ddlCurrentGamesFilter").bind("change", function() {
        currentGamesTable.draw()
    })
}
function LiveGamesError() {}
function createCookie(n, t, i) {
    var u, r;
    i ? (r = new Date,
    r.setTime(r.getTime() + i * 864e5),
    u = "; expires=" + r.toGMTString()) : u = "";
    document.cookie = n + "=" + t + u + "; path=/; Secure"
}
function readCookie(n) {
    var r, u, i, t;
    try {
        for (r = n + "=",
        u = document.cookie.split(";"),
        i = 0; i < u.length; i++) {
            for (t = u[i]; t.charAt(0) == " "; )
                t = t.substring(1, t.length);
            if (t.indexOf(r) === 0)
                return t.substring(r.length, t.length)
        }
    } catch (f) {}
    return null
}
function GetCountryName(n) {
    switch (n) {
    case "en":
        return UserLang == "1" ? "England" : "England";
    case "eu":
        return UserLang == "1" ? "Europe" : "Europa";
    case "xs":
        return UserLang == "1" ? "Scotland" : "Schottland";
    case "wa":
        return UserLang == "1" ? "Wales" : "Wales";
    case "un":
        return UserLang == "1" ? "World" : "Welt";
    case "af":
        return UserLang == "1" ? "Afghanistan" : "Afghanistan";
    case "al":
        return UserLang == "1" ? "Albania" : "Albanien";
    case "dz":
        return UserLang == "1" ? "Algeria" : "Algerien";
    case "as":
        return UserLang == "1" ? "American Samoa" : "Amerikanisch-Samoa";
    case "ad":
        return UserLang == "1" ? "Andorra" : "Andorra";
    case "ao":
        return UserLang == "1" ? "Angola" : "Angola";
    case "ai":
        return UserLang == "1" ? "Anguilla" : "Anguilla";
    case "ag":
        return UserLang == "1" ? "Antigua and Barbuda" : "Antigua und Barbuda";
    case "ar":
        return UserLang == "1" ? "Argentina" : "Argentinien";
    case "am":
        return UserLang == "1" ? "Armenia" : "Armenien";
    case "aw":
        return UserLang == "1" ? "Aruba" : "Aruba";
    case "au":
        return UserLang == "1" ? "Australia" : "Australien";
    case "at":
        return UserLang == "1" ? "Austria" : "Österreich";
    case "az":
        return UserLang == "1" ? "Azerbaijan" : "Aserbaidschan";
    case "bs":
        return UserLang == "1" ? "Bahamas" : "Bahamas";
    case "bh":
        return UserLang == "1" ? "Bahrain" : "Bahrain";
    case "bd":
        return UserLang == "1" ? "Bangladesh" : "Bangladesch";
    case "bb":
        return UserLang == "1" ? "Barbados" : "Barbados";
    case "by":
        return UserLang == "1" ? "Belarus" : "Weißrussland";
    case "be":
        return UserLang == "1" ? "Belgium" : "Belgien";
    case "bz":
        return UserLang == "1" ? "Belize" : "Belize";
    case "bj":
        return UserLang == "1" ? "Benin" : "Benin";
    case "bm":
        return UserLang == "1" ? "Bermuda" : "Bermuda";
    case "bt":
        return UserLang == "1" ? "Bhutan" : "Bhutan";
    case "bo":
        return UserLang == "1" ? "Bolivia" : "Bolivien";
    case "bq":
        return UserLang == "1" ? "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sint Eustatius und Saba";
    case "ba":
        return UserLang == "1" ? "Bosnia and Herzegovina" : "Bosnien und Herzegowina";
    case "bw":
        return UserLang == "1" ? "Botswana" : "Botswana";
    case "br":
        return UserLang == "1" ? "Brazil" : "Brasilien";
    case "bn":
        return UserLang == "1" ? "Brunei Darussalam" : "Brunei Darussalam";
    case "bg":
        return UserLang == "1" ? "Bulgaria" : "Bulgarien";
    case "bf":
        return UserLang == "1" ? "Burkina Faso" : "Burkina Faso";
    case "bi":
        return UserLang == "1" ? "Burundi" : "Burundi";
    case "cv":
        return UserLang == "1" ? "Cabo Verde" : "Kap Verde";
    case "kh":
        return UserLang == "1" ? "Cambodia" : "Kambodscha";
    case "cm":
        return UserLang == "1" ? "Cameroon" : "Kamerun";
    case "ca":
        return UserLang == "1" ? "Canada" : "Kanada";
    case "ky":
        return UserLang == "1" ? "Cayman Islands" : "Kayman Inseln";
    case "cf":
        return UserLang == "1" ? "Central African Republic" : "Zentralafrikanische Republik";
    case "td":
        return UserLang == "1" ? "Chad" : "Tschad";
    case "cl":
        return UserLang == "1" ? "Chile" : "Chile";
    case "cn":
        return UserLang == "1" ? "China" : "China";
    case "cx":
        return UserLang == "1" ? "Christmas Island" : "Weihnachtsinsel";
    case "cc":
        return UserLang == "1" ? "Cocos Island" : "Kokosinsel";
    case "co":
        return UserLang == "1" ? "Colombia" : "Kolumbien";
    case "km":
        return UserLang == "1" ? "Comoros" : "Komoren";
    case "cg":
        return UserLang == "1" ? "Congo" : "Republik Kongo";
    case "ck":
        return UserLang == "1" ? "Cook Islands" : "Cookinseln";
    case "cr":
        return UserLang == "1" ? "Costa Rica" : "Costa Rica";
    case "hr":
        return UserLang == "1" ? "Croatia" : "Kroatien";
    case "cu":
        return UserLang == "1" ? "Cuba" : "Kuba";
    case "cw":
        return UserLang == "1" ? "Curaçao" : "Curaçao";
    case "cy":
        return UserLang == "1" ? "Cyprus" : "Zypern";
    case "cz":
        return UserLang == "1" ? "Czech Republic" : "Tschechien";
    case "dk":
        return UserLang == "1" ? "Denmark" : "Dänemark";
    case "dj":
        return UserLang == "1" ? "Djibouti" : "Djibouti";
    case "dm":
        return UserLang == "1" ? "Dominica" : "Dominica";
    case "do":
        return UserLang == "1" ? "Dominican Republic" : "Dominikanische Republik";
    case "ec":
        return UserLang == "1" ? "Ecuador" : "Ecuador";
    case "eg":
        return UserLang == "1" ? "Egypt" : "Ägypten";
    case "sv":
        return UserLang == "1" ? "El Salvador" : "El Salvador";
    case "gq":
        return UserLang == "1" ? "Equatorial Guinea" : "Äquatorialguinea";
    case "er":
        return UserLang == "1" ? "Eritrea" : "Eritrea";
    case "ee":
        return UserLang == "1" ? "Estonia" : "Estland";
    case "sz":
        return UserLang == "1" ? "Eswatini" : "Swasiland";
    case "et":
        return UserLang == "1" ? "Ethiopia" : "Äthiopien";
    case "fk":
        return UserLang == "1" ? "Falkland Islands" : "Falklandinseln";
    case "fo":
        return UserLang == "1" ? "Faroe Islands" : "Färöer";
    case "fj":
        return UserLang == "1" ? "Fiji" : "Fidschi";
    case "fi":
        return UserLang == "1" ? "Finland" : "Finnland";
    case "fr":
        return UserLang == "1" ? "France" : "Frankreich";
    case "gf":
        return UserLang == "1" ? "French Guinea" : "Französisch-Guinea";
    case "pf":
        return UserLang == "1" ? "French Polynesia" : "Französisch-Polynesien";
    case "ga":
        return UserLang == "1" ? "Gabon" : "Gabun";
    case "gm":
        return UserLang == "1" ? "Gambia" : "Gambia";
    case "ge":
        return UserLang == "1" ? "Georgia" : "Georgien";
    case "de":
        return UserLang == "1" ? "Germany" : "Deutschland";
    case "gh":
        return UserLang == "1" ? "Ghana" : "Ghana";
    case "gi":
        return UserLang == "1" ? "Gibraltar" : "Gibraltar";
    case "gr":
        return UserLang == "1" ? "Greece" : "Griechenland";
    case "gl":
        return UserLang == "1" ? "Greenland" : "Grönland";
    case "gd":
        return UserLang == "1" ? "Grenada" : "Grenada";
    case "gp":
        return UserLang == "1" ? "Guadeloupe" : "Guadeloupe";
    case "gu":
        return UserLang == "1" ? "Guam" : "Guam";
    case "gt":
        return UserLang == "1" ? "Guatemala" : "Guatemala";
    case "gg":
        return UserLang == "1" ? "Guernsey" : "Guernsey";
    case "gn":
        return UserLang == "1" ? "Guinea" : "Guinea";
    case "gw":
        return UserLang == "1" ? "Guinea-Bissau" : "Guinea-Bissau";
    case "gy":
        return UserLang == "1" ? "Guyana" : "Guyana";
    case "ht":
        return UserLang == "1" ? "Haiti" : "Haiti";
    case "va":
        return UserLang == "1" ? "Holy See" : "Vatikanstadt";
    case "hn":
        return UserLang == "1" ? "Honduras" : "Honduras";
    case "hk":
        return UserLang == "1" ? "Hong Kong" : "Hongkong";
    case "hu":
        return UserLang == "1" ? "Hungary" : "Ungarn";
    case "is":
        return UserLang == "1" ? "Iceland" : "Island";
    case "in":
        return UserLang == "1" ? "India" : "Indien";
    case "id":
        return UserLang == "1" ? "Indonesia" : "Indonesien";
    case "ir":
        return UserLang == "1" ? "Iran" : "Iran";
    case "iq":
        return UserLang == "1" ? "Iraq" : "Irak";
    case "ie":
        return UserLang == "1" ? "Ireland" : "Irland";
    case "im":
        return UserLang == "1" ? "Isle of Man" : "Isle of Man";
    case "il":
        return UserLang == "1" ? "Israel" : "Israel";
    case "it":
        return UserLang == "1" ? "Italy" : "Italien";
    case "ci":
        return UserLang == "1" ? "Ivory Coast" : "Elfenbeinküste";
    case "jm":
        return UserLang == "1" ? "Jamaica" : "Jamaika";
    case "jp":
        return UserLang == "1" ? "Japan" : "Japan";
    case "je":
        return UserLang == "1" ? "Jersey" : "Jersey";
    case "jo":
        return UserLang == "1" ? "Jordan" : "Jordanien";
    case "kz":
        return UserLang == "1" ? "Kazakhstan" : "Kasachstan";
    case "ke":
        return UserLang == "1" ? "Kenya" : "Kenia";
    case "ki":
        return UserLang == "1" ? "Kiribati" : "Kiribati";
    case "kp":
        return UserLang == "1" ? "Korea (DPR)" : "Korea (DPR)";
    case "kw":
        return UserLang == "1" ? "Kuwait" : "Kuwait";
    case "kg":
        return UserLang == "1" ? "Kyrgyzstan" : "Kirgisistan";
    case "la":
        return UserLang == "1" ? "Lao PDR" : "Laos";
    case "lv":
        return UserLang == "1" ? "Latvia" : "Lettland";
    case "lb":
        return UserLang == "1" ? "Lebanon" : "Libanon";
    case "ls":
        return UserLang == "1" ? "Lesotho" : "Lesotho";
    case "lr":
        return UserLang == "1" ? "Liberia" : "Liberien";
    case "ly":
        return UserLang == "1" ? "Libya" : "Libyen";
    case "li":
        return UserLang == "1" ? "Liechtenstein" : "Liechtenstein";
    case "lt":
        return UserLang == "1" ? "Lithuania" : "Litauen";
    case "lu":
        return UserLang == "1" ? "Luxembourg" : "Luxemburg";
    case "mo":
        return UserLang == "1" ? "Macao" : "Macau";
    case "mg":
        return UserLang == "1" ? "Madagascar" : "Madagaskar";
    case "mw":
        return UserLang == "1" ? "Malawi" : "Malawi";
    case "my":
        return UserLang == "1" ? "Malaysia" : "Malaysia";
    case "mv":
        return UserLang == "1" ? "Maldives" : "Malediven";
    case "ml":
        return UserLang == "1" ? "Mali" : "Mali";
    case "mt":
        return UserLang == "1" ? "Malta" : "Malta";
    case "mh":
        return UserLang == "1" ? "Marshall Islands" : "Marshallinseln";
    case "mq":
        return UserLang == "1" ? "Martinique" : "Martinique";
    case "mr":
        return UserLang == "1" ? "Mauritania" : "Mauritanien";
    case "mu":
        return UserLang == "1" ? "Mauritius" : "Mauritius";
    case "yt":
        return UserLang == "1" ? "Mayotte" : "Mayotte";
    case "mx":
        return UserLang == "1" ? "Mexico" : "Mexiko";
    case "fm":
        return UserLang == "1" ? "Micronesia" : "Mikronesien";
    case "md":
        return UserLang == "1" ? "Moldova" : "Moldau";
    case "mc":
        return UserLang == "1" ? "Monaco" : "Monaco";
    case "mn":
        return UserLang == "1" ? "Mongolia" : "Mongolei";
    case "me":
        return UserLang == "1" ? "Montenegro" : "Montenegro";
    case "ms":
        return UserLang == "1" ? "Montserrat" : "Montserrat";
    case "ma":
        return UserLang == "1" ? "Morocco" : "Marokko";
    case "mz":
        return UserLang == "1" ? "Mozambique" : "Mosambik";
    case "mm":
        return UserLang == "1" ? "Myanmar" : "Myanmar";
    case "na":
        return UserLang == "1" ? "Namibia" : "Namibia";
    case "nr":
        return UserLang == "1" ? "Nauru" : "Nauru";
    case "np":
        return UserLang == "1" ? "Nepal" : "Nepal";
    case "nl":
        return UserLang == "1" ? "Netherlands" : "Niederlande";
    case "nc":
        return UserLang == "1" ? "New Caledonia" : "Neukaledonien";
    case "nz":
        return UserLang == "1" ? "New Zealand" : "Neuseeland";
    case "ni":
        return UserLang == "1" ? "Nicaragua" : "Nicaragua";
    case "ne":
        return UserLang == "1" ? "Niger" : "Niger";
    case "ng":
        return UserLang == "1" ? "Nigeria" : "Nigeria";
    case "nu":
        return UserLang == "1" ? "Niue" : "Niue";
    case "nf":
        return UserLang == "1" ? "Norfolk Island" : "Norfolkinsel";
    case "mp":
        return UserLang == "1" ? "Northern Marian Islands" : "Nördliche Marianen";
    case "no":
        return UserLang == "1" ? "Norway" : "Norwegen";
    case "om":
        return UserLang == "1" ? "Oman" : "Oman";
    case "pk":
        return UserLang == "1" ? "Pakistan" : "Pakistan";
    case "pw":
        return UserLang == "1" ? "Palau" : "Palau";
    case "ps":
        return UserLang == "1" ? "Palestine" : "Palästina";
    case "pa":
        return UserLang == "1" ? "Panama" : "Panama";
    case "pg":
        return UserLang == "1" ? "Papua New Guinea" : "Papua-Neuguinea";
    case "py":
        return UserLang == "1" ? "Paraguay" : "Paraguay";
    case "pe":
        return UserLang == "1" ? "Peru" : "Peru";
    case "ph":
        return UserLang == "1" ? "Philippines" : "Philippinen";
    case "pl":
        return UserLang == "1" ? "Poland" : "Polen";
    case "pt":
        return UserLang == "1" ? "Portugal" : "Portugal";
    case "pr":
        return UserLang == "1" ? "Puerto Rico" : "Puerto Rico";
    case "qa":
        return UserLang == "1" ? "Qatar" : "Katar";
    case "mk":
        return UserLang == "1" ? "Republic of North Macedonia" : "Nordmazedonien";
    case "ro":
        return UserLang == "1" ? "Romania" : "Rumänien";
    case "ru":
        return UserLang == "1" ? "Russia" : "Russland";
    case "rw":
        return UserLang == "1" ? "Rwanda" : "Ruanda";
    case "re":
        return UserLang == "1" ? "Réunion" : "Réunion";
    case "bl":
        return UserLang == "1" ? "Saint Barthélemy" : "Saint-Barthélemy";
    case "sh":
        return UserLang == "1" ? "Saint Helena, Ascension and Tristan da Cunha" : "St. Helena, Ascension und Tristan da Cunha";
    case "kn":
        return UserLang == "1" ? "Saint Kitts and Nevis" : "St. Kitts und Nevis";
    case "lc":
        return UserLang == "1" ? "Saint Lucia" : "St. Lucia";
    case "pm":
        return UserLang == "1" ? "Saint Pierre and Miquelon" : "Saint-Pierre und Miquelon";
    case "vc":
        return UserLang == "1" ? "Saint Vincent and the Grenadines" : "St. Vincent und die Grenadinen";
    case "ws":
        return UserLang == "1" ? "Samoa" : "Samoa";
    case "sm":
        return UserLang == "1" ? "San Marino" : "San Marino";
    case "st":
        return UserLang == "1" ? "Sao Tome and Principe" : "São Tomé und Príncipe";
    case "sa":
        return UserLang == "1" ? "Saudi Arabia" : "Saudi-Arabien";
    case "sn":
        return UserLang == "1" ? "Senegal" : "Senegal";
    case "rs":
        return UserLang == "1" ? "Serbia" : "Serbien";
    case "sc":
        return UserLang == "1" ? "Seychelles" : "Seychellen";
    case "sl":
        return UserLang == "1" ? "Sierra Leone" : "Sierra Leone";
    case "sg":
        return UserLang == "1" ? "Singapore" : "Singapur";
    case "sx":
        return UserLang == "1" ? "Sint Maarten" : "Sint Maarten";
    case "sk":
        return UserLang == "1" ? "Slovakia" : "Slowakei";
    case "si":
        return UserLang == "1" ? "Slovenia" : "Slowenien";
    case "sb":
        return UserLang == "1" ? "Solomon Islands" : "Salomonen";
    case "so":
        return UserLang == "1" ? "Somalia" : "Somalia";
    case "za":
        return UserLang == "1" ? "South Africa" : "Südafrika";
    case "kr":
        return UserLang == "1" ? "South Korea" : "Südkorea";
    case "ss":
        return UserLang == "1" ? "South Sudan" : "Südsudan";
    case "es":
        return UserLang == "1" ? "Spain" : "Spanien";
    case "lk":
        return UserLang == "1" ? "Sri Lanka" : "Sri Lanka";
    case "sd":
        return UserLang == "1" ? "Sudan" : "Sudan";
    case "sr":
        return UserLang == "1" ? "Suriname" : "Suriname";
    case "se":
        return UserLang == "1" ? "Sweden" : "Schweden";
    case "ch":
        return UserLang == "1" ? "Switzerland" : "Schweiz";
    case "sy":
        return UserLang == "1" ? "Syrian Arab Republic" : "Syrien";
    case "tw":
        return UserLang == "1" ? "Taiwan" : "Taiwan";
    case "tj":
        return UserLang == "1" ? "Tajikistan" : "Tadschikistan";
    case "tz":
        return UserLang == "1" ? "Tanzania" : "Tansania";
    case "th":
        return UserLang == "1" ? "Thailand" : "Thailand";
    case "tl":
        return UserLang == "1" ? "Timor-Leste" : "Osttimor";
    case "tg":
        return UserLang == "1" ? "Togo" : "Togo";
    case "tk":
        return UserLang == "1" ? "Tokelau" : "Tokelau";
    case "to":
        return UserLang == "1" ? "Tonga" : "Tonga";
    case "tt":
        return UserLang == "1" ? "Trinidad and Tobago" : "Trinidad und Tobago";
    case "tn":
        return UserLang == "1" ? "Tunisia" : "Tunesien";
    case "tr":
        return UserLang == "1" ? "Turkey" : "Türkei";
    case "tm":
        return UserLang == "1" ? "Turkmenistan" : "Turkmenistan";
    case "tc":
        return UserLang == "1" ? "Turks and Caicos Islands" : "Turks- und Caicosinseln";
    case "tv":
        return UserLang == "1" ? "Tuvalu" : "Tuvalu";
    case "ug":
        return UserLang == "1" ? "Uganda" : "Uganda";
    case "ua":
        return UserLang == "1" ? "Ukraine" : "Ukraine";
    case "ae":
        return UserLang == "1" ? "United Arab Emirates" : "Vereinigte Arabische Emirate";
    case "gb":
        return UserLang == "1" ? "United Kingdom" : "Großbritannien";
    case "us":
        return UserLang == "1" ? "USA" : "USA";
    case "uy":
        return UserLang == "1" ? "Uruguay" : "Uruguay";
    case "uz":
        return UserLang == "1" ? "Uzbekistan" : "Usbekistan";
    case "vu":
        return UserLang == "1" ? "Vanuatu" : "Vanuatu";
    case "ve":
        return UserLang == "1" ? "Venezuela" : "Venezuela";
    case "vn":
        return UserLang == "1" ? "Vietnam" : "Vietnam";
    case "vg":
        return UserLang == "1" ? "Virgin Islands" : "Britische Jungferninseln";
    case "wf":
        return UserLang == "1" ? "Wallis and Futuna" : "Wallis und Futuna";
    case "eh":
        return UserLang == "1" ? "Western Sahara" : "Westsahara";
    case "ye":
        return UserLang == "1" ? "Yemen" : "Jemen";
    case "zm":
        return UserLang == "1" ? "Zambia" : "Sambia";
    case "zw":
        return UserLang == "1" ? "Zimbabwe" : "Simbabwe";
    default:
        return n.toUpperCase()
    }
}
function ShowChart() {
    var o = $("#PlayerChart"), n = "", f, e, i, t, r;
    for (PlayedGames.sort(PicSortFunction),
    f = 0,
    e = 0,
    i = 0; i < PlayedGames.length; i++)
        PlayedGames[i][0] != "n/a" && PlayedGames[i][0] != "Transfer" && (f += PlayedGames[i][1] + PlayedGames[i][2] + PlayedGames[i][3],
        e = Math.max(e, PlayedGames[i][1] + PlayedGames[i][2] + PlayedGames[i][3]));
    if (Language == "0" ? (n += "<br/>&nbsp;Gesamtzahl aller Wertungsspiele: " + f + "<br/>\n",
    n += "&nbsp;Aktuell offene Spiele: " + OpenGames + "<br/><br/>\n") : (n += "<br/>&nbsp;Total number of scored games: " + f + "<br/>\n",
    n += "&nbsp;Currently open games: " + OpenGames + "<br/><br/>\n"),
    PlayedGames.length > 0) {
        for (n += '<table id="PlayedGameInfoChart" cellpadding="0" cellspacing="1">',
        n += "<tbody>",
        t = 0; t < PlayedGames.length; t++)
            if (PlayedGames[t][0] != "n/a" && PlayedGames[t][0] != "Transfer") {
                r = PlayedGames[t][1] + PlayedGames[t][2] + PlayedGames[t][3];
                n += '<tr bgcolor="#faeec8" onmouseover="ShowDetails(' + t + ');" onmouseout="nd();">';
                n += "<td >";
                n += "&nbsp;" + PlayedGames[t][0] + "&nbsp;";
                n += "<\/td>";
                n += '<td align="right" width="35">';
                n += r + "&nbsp;";
                n += "<\/td>";
                var u = Math.round(240 * r / e)
                  , s = Math.round(PlayedGames[t][1] / r * u)
                  , h = Math.round(PlayedGames[t][2] / r * u)
                  , c = Math.round(PlayedGames[t][3] / r * u);
                n += '<td width = "' + (u + 10) + '">';
                n += '<table cellpadding="0" cellspacing="0" width = "' + (u + 10) + '" height = "10">';
                n += "<tbody>";
                n += "<tr>";
                n += '<td style="width:5px;height:5px;"><\/td>';
                n += '<td bgcolor="#d5b65a" width="' + s + '">';
                n += "<\/td>";
                n += '<td bgcolor="#9f8e7d" width="' + h + '">';
                n += "<\/td>";
                n += '<td bgcolor="#69679f" width="' + c + '">';
                n += "<\/td>";
                n += '<td style="width:5px;height:5px;"><\/td>';
                n += "<\/tr>";
                n += "<\/tbody>";
                n += "<\/table>";
                n += "<\/td>";
                n += "<\/tr>\n"
            }
        n += "<\/tbody>";
        n += "<\/table>";
        n += Language == "0" ? "<br/>F&uuml;r mehr Infos die Maus &uuml;ber die Spiele bewegen.<br/>" : "<br/>For more details move the mouse over the games.<br/>"
    }
    o.html(n)
}
function ShowDetails(n) {
    var t = "";
    Language == "0" ? (t += "<b>" + PlayedGames[n][0] + "<\/b><br/>",
    t += "Gesamt: " + (PlayedGames[n][1] + PlayedGames[n][2] + PlayedGames[n][3]) + "<br/>",
    t += "Gewonnen: " + PlayedGames[n][1] + "<br/>",
    t += "Remis: " + PlayedGames[n][2] + "<br/>",
    t += "Verloren: " + PlayedGames[n][3] + "<br/>") : (t += "<b>" + PlayedGames[n][0] + "<\/b><br/>",
    t += "Total: " + (PlayedGames[n][1] + PlayedGames[n][2] + PlayedGames[n][3]) + "<br/>",
    t += "Won: " + PlayedGames[n][1] + "<br/>",
    t += "Tie: " + PlayedGames[n][2] + "<br/>",
    t += "Lost: " + PlayedGames[n][3] + "<br/>");
    overlib(t, FOLLOWMOUSE, MOUSEOFF, NOCLOSE, OFFSETX, 20, OFFSETY, 0, HAUTO, VAUTO, DELAY, 200, TIMEOUT, 3e3)
}
function PicSortFunction(n, t) {
    return n[0] < t[0] ? -1 : 1
}
function ShowGame() {
    GameID = $("#edtShowGameID").val();
    var n = window.open("Pages/Members/ShowGame.aspx?id=" + GameID, "Game" + GameID, "width=819,height=650,scrollbars=no,menubar=no,toolbar=no,status=no,resizable=yes,locationbar=no");
    n.resizeTo(819, 650);
    n.focus()
}
function GetDataTablesTranslation(n, t) {
    return (typeof n == "undefined" && (n = "Keine Einträge vorhanden.",
    UserLang === "1" && (n = "No matching records found")),
    typeof t == "undefined" && (t = ""),
    UserLang == "0") ? {
        processing: "Bitte warten...",
        lengthMenu: "_MENU_ Einträge anzeigen",
        zeroRecords: n,
        info: "_START_ bis _END_ von _TOTAL_ Einträgen",
        infoEmpty: "0 bis 0 von 0 Einträgen",
        infoFiltered: "(gefiltert von _MAX_ Einträgen)",
        infoPostFix: "",
        search: "Suchen",
        searchPlaceholder: t,
        url: "",
        paginate: {
            first: "Erster",
            previous: "Zurück",
            next: "Nächster",
            last: "Letzter"
        }
    } : {
        processing: "Processing...",
        lengthMenu: "Show _MENU_ entries",
        zeroRecords: n,
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
        infoEmpty: "Showing 0 to 0 of 0 entries",
        infoFiltered: "(filtered from _MAX_ total entries)",
        infoPostFix: "",
        seearch: "Search:",
        searchPlaceholder: t,
        url: "",
        paginate: {
            first: "First",
            previous: "Previous",
            next: "Next",
            last: "Last"
        }
    }
}
function activateTab(n) {
    $(".l-tabs__tab_navigator, .l-tabs__tab_content").removeClass("is_active");
    var i, t;
    n !== "" && (i = $(n + ", " + n + "_content"),
    i.length !== 0 && (t = i));
    (n === "" || i.length === 0) && (t = $(".l-tabs > .l-tabs__tab_navigator").first(),
    t.length !== 0 && (n = "#" + t.attr("id")),
    t = t.add($(".l-tabs > .l-tabs__tab_content").first()));
    t.addClass("is_active");
    window.location.hash = n
}
function formatGameListName(n, t, i, r, u) {
    if (n.substr(1).indexOf("<span") !== !1) {
        var f = n.split(/<span(.+)/);
        return '<span><span class="jGameInfo" data-gameidname="' + t + '" data-gamename="' + (UserLang == 0 ? i : r) + '">' + f[0] + "<\/span><span" + f[1] + "<\/span><br /><span style='font-style:italic'>" + u + "<\/span>"
    }
    return '<span class="jGameInfo" data-gameidname="' + t + '" data-gamename="' + (UserLang == 0 ? i : r) + '">' + n + "<\/span><br /><span style='font-style:italic'>" + u + "<\/span>"
}
function ForumPostLikeCB(n, t) {
    $("#forumlikecount" + n).html(t.d.NumLikes);
    $("#forumthumbimg" + n).removeClass("thumbs0").removeClass("thumbs1");
    t.d.Thumbed ? $("#forumthumbimg" + n).addClass("thumbs1") : $("#forumthumbimg" + n).addClass("thumbs0");
    window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("#")) + "#" + n
}
function InitializeSignalR() {
    if ($.connection.hub.url = SignalRDomain,
    UserID != "") {
        $.connection.hub.qs = "UserID=" + UserID + "&Login=" + UserLogin + "&UserHash=" + UserHash;
        var n = $.connection.globalHub;
        n && (n.client.NextGame = function(n, t) {
            t || HandleNextGame(n, !0)
        }
        ,
        n.client.RefreshGame = function(n, t, i) {
            i == GameInfo.ID && UserID != n && RefreshGame(t)
        }
        ,
        n.client.ReloadGameWithNewState = function(n, t, i, r) {
            t == GameInfo.ID && UserID != n && (OrigStatus = i,
            DBCurrentMove = r,
            InitBoard())
        }
        ,
        n.client.NewMessage = function(n) {
            if (typeof GameInfo == "object") {
                if (n.ChatRoomID != GameInfo.ID)
                    return
            } else if (n.ChatRoomID !== -1)
                return;
            (ShowNewChatRow(document.getElementById("divChat"), n, "tableChat", !0),
            n.SenderID != UserID) && typeof GameInfo == "object" && ($(".ChatTimeCell").css("display", "none"),
            gameChatHasBeenCreated && $("#divChatContainer").dialog("isOpen") ? UserReadsChat() : FormatNewChatMessagesExist())
        }
        ,
        n.client.clearChat = function() {
            $("#divChat").html("")
        }
        ,
        n.client.removeMessages = function(n) {
            n.forEach(function(n) {
                $("#RowChatMessage" + n.ID).remove()
            })
        }
        ,
        n.client.removeOnlineUserData = function(n) {
            RemoveOnlineUserData(n)
        }
        ,
        n.client.updateOnlineUserData = function(n) {
            UpdateOnlineUserData(n);
            currentGamesTable && currentGamesTable.draw()
        }
        ,
        n.client.updateOnlineUserCounts = function(n, t) {
            UpdateOnlineUserCounts(n, t)
        }
        ,
        n.client.broadcastMessage = function(n) {
            toastr.info(n, UserLang === "0" ? "Neue Rundmail" : "New broadcast", {
                timeOut: "300000"
            });
            IncreaseUnreadMessageCount("divmessbroadcast")
        }
        ,
        n.client.personalMessage = function(n, t) {
            toastr.info(t, (UserLang === "0" ? "Nachricht von " : "Message from ") + n, {
                timeOut: "50000"
            });
            IncreaseUnreadMessageCount("divmesspersonal")
        }
        ,
        n.client.systemMessage = function(n) {
            toastr.info(n, UserLang === "0" ? "Neue Systemnachricht" : "New system message ", {
                timeOut: "50000"
            });
            IncreaseUnreadMessageCount("divmesssystem")
        }
        ,
        n.client.newForumMessage = function() {
            IncreaseUnreadMessageCount("divmessforum")
        }
        ,
        n.client.receivedInvitation = function(n, t) {
            var i, r;
            new_record = {};
            for (i in _invitationRecordMapping)
                new_record[_invitationRecordMapping[i]] = n[i];
            r = new_record.IsRandomGame ? UserLang === "0" ? "Zufallsspiel" : "Random Game" : UserLang === "0" ? new_record.GermanFullName : new_record.EnglishFullName;
            toastr.info((UserLang === "0" ? "Einladung von " : "Invitation by ") + t, r, {
                timeOut: "50000",
                preventDuplicates: !0
            });
            AddPersonalInvitationsRecord(new_record)
        }
        ,
        n.client.withdrawnInvitation = function(n) {
            RemovePersonalInvitationsRecord(n)
        }
        ,
        n.client.invitationAccepted = function() {}
        ,
        n.client.gameStarted = function(n) {
            currentPersonalInvitations && currentPersonalInvitations.some(function(t) {
                return t.ID == n.ID
            }) && RemovePersonalInvitationsRecord(n.ID);
            AddGameToCurrentGameList && AddGameToCurrentGameList(n)
        }
        ,
        n.client.moveDone = function(n, t, i) {
            HandleMoveDone(n, t, i)
        }
        ,
        n.client.turnDone = function(n, t, i) {
            HandleTurnDone(n, t, i)
        }
        ,
        n.client.gameFinished = function(n) {
            HandleGameFinished(n)
        }
        ,
        n.client.gameVanished = function(n) {
            RemoveGameFromCurrentGameList && RemoveGameFromCurrentGameList(n)
        }
        ,
        n.client.logout = function() {
            $.connection.hub.stop();
            UserID = ""
        }
        ,
        $.connection.hub.start().done(function() {}).fail(function() {}),
        $.connection.hub.disconnected(function() {
            setTimeout(function() {
                $.connection.hub.start()
            }, 5e3)
        }))
    }
}
function UserReadsChat() {
    ServiceSetLastChatMessageReadTime(GameInfo.ID, (new Date).getTime(), UserReadsChatCB)
}
function UserReadsChatCB() {
    ServiceGetLastChatMessageReadTime(GameInfo.ID, GetLastChatMessageReadCB)
}
function SendPM(n) {
    var t = document.getElementById("edtChatMsg");
    t && (t.value = "/msg [" + n + "] ",
    t.focus())
}
function UpdateChat() {
    typeof GameInfo == "object" ? ($("#lnkEmojis").hide(),
    $("#lnkNoEmojis").hide(),
    ServiceGetGameChatMessages(GameInfo.ID, UpdateChatCB, null)) : ServiceGetChatMessages(UpdateChatCB, null)
}
function UpdateChatCB(n) {
    var t = null;
    n !== null && (t = n.d,
    t !== null && t.length > 0 && (BuildChat(t, document.getElementById("divChat"), "tableChat"),
    typeof GameInfo == "object" && ServiceGetLastChatMessageReadTime(GameInfo.ID, GetLastChatMessageReadCB)))
}
function GetLastChatMessageReadCB(n) {
    latestChatMessageRead = n.d;
    FormatNewChatMessagesExist()
}
function FormatNewChatMessagesExist() {
    latestChatMessageRead < latestChatMessageReceived ? $("#btnShowChat").addClass("highlightbutton") : $("#btnShowChat").removeClass("highlightbutton")
}
function DiscoverLinks(n) {
    n = n.replace(/<br\/>/g, "\n");
    for (var t, i, r, u; n.search(/http\:/) != -1; )
        u = /([\s\S]*)(http\:[^\s]*)([\s\S]*)/,
        u.exec(n),
        i = RegExp.$1,
        t = RegExp.$2,
        r = RegExp.$3,
        t = t.replace(/http\:/, "hXtXtXp"),
        n = i + "<a href='" + t + "' class='ChatLink'>" + t + "<\/a>" + r;
    for (n = n.replace(/hXtXtXp/g, "http:"); n.search(/https\:/) != -1; )
        u = /([\s\S]*)(https\:[^\s]*)([\s\S]*)/,
        u.exec(n),
        i = RegExp.$1,
        t = RegExp.$2,
        r = RegExp.$3,
        t = t.replace(/https\:/, "hXtXtXpXs"),
        n = i + "<a href='" + t + "' class='ChatLink'>" + t + "<\/a>" + r;
    for (n = n.replace(/hXtXtXpXs/g, "https:"); n.search(/ftp\:/) != -1; )
        u = /([\s\S]*)(ftp\:[^\s]*)([\s\S]*)/,
        u.exec(n),
        i = RegExp.$1,
        t = RegExp.$2,
        r = RegExp.$3,
        t = t.replace(/ftp\:/, "fXtXp"),
        n = i + "<a href='" + t + "' class='ChatLink'>" + t + "<\/a>" + r;
    return n = n.replace(/fXtXp/g, "https:"),
    n.replace(/\n/g, "<br/>")
}
function ShouldHideEmojis() {
    var n = readCookie("chatHideEmojis");
    return n === null && createCookie("chatHideEmojis", "false", 1e3),
    n === "true"
}
function ToggleEmojiDisplay() {
    createCookie("chatHideEmojis", ShouldHideEmojis() ? "false" : "true", 1e3);
    ShouldHideEmojis() ? (document.documentElement.style.setProperty("--display_emoji", "none"),
    document.documentElement.style.setProperty("--text_emoji", "unset")) : (document.documentElement.style.setProperty("--display_emoji", "unset"),
    document.documentElement.style.setProperty("--text_emoji", "none"))
}
function ShowNewChatRow(n, t, i, r) {
    var l, s, f, h, e, u;
    chatContainer = n;
    chatTableName = i;
    var a = CreateOrGetChatTable(n, i)
      , o = a.insertRow()
      , c = o.insertCell();
    c.className = "ChatTimeCell";
    l = new Date(t.Epoch);
    t.Epoch > latestChatMessageReceived && (latestChatMessageReceived = t.Epoch);
    s = l.toLocaleTimeString();
    c.appendChild(document.createTextNode(s.substring(0, s.indexOf(":", s.indexOf(":") + 1))));
    f = $(o.insertCell()).addClass("ChatLoginCell");
    t.Sender != "Yucata" && (h = i != "ChatSkriptTable" ? FormatOnlineUserSpan(t.Sender, t.SenderID, null, !0, null, null, !0).addClass("jModeratorAction") : FormatOnlineUserSpan(t.Sender, t.SenderID, null, !0, null, null, !0),
    t.Sender != UserLogin && i != "ChatSkriptTable" ? $("<a>", {
        href: "#",
        SenderName: t.Sender,
        click: function() {
            PreparePrivateMessage($(this).attr("SenderName"))
        }
    }).append(h).appendTo(f) : h.appendTo(f),
    f.attr("chatsender", t.Sender));
    e = $(o.insertCell()).addClass("ChatMessageCell");
    t.Sender != "Yucata" && i != "ChatSkriptTable" && typeof CreateChatMessageContextMenu == "function" && t.ID != -1 && (o.id = "RowChatMessage" + t.ID,
    CreateChatMessageContextMenu(e[0], t.ID, t.Message, t.Sender));
    u = t.Message;
    try {
        t.Epoch < 15098724e5 && (u = decodeURI(u))
    } catch (v) {}
    u = DiscoverLinks(u);
    u = Emoticon(u);
    t.Recipient.toLowerCase() == UserLogin.toLowerCase() ? t.Sender != "Yucata" ? (e.addClass("ChatPrivateMessage"),
    f.addClass("ChatPrivateMessage"),
    u = "[PM] " + u) : e.addClass("ChatSystemMessage") : t.Recipient !== "" && (u = "[--> <em>" + t.Recipient + "<\/em>] " + u);
    u.search(/\/me\//) != -1 && (u = "<em>" + u.replace(/\/me\//g, "") + "<\/em>",
    f.find(":first-child").remove());
    e[0].insertAdjacentHTML("beforeend", u);
    typeof GameInfo == "object" && $(".ChatTimeCell").css("display", "none");
    r && DoChatScrolling(n)
}
function DoChatScrolling(n, t) {
    if (n === undefined && (n = chatContainer),
    n !== undefined) {
        n.scrollTop = n.scrollHeight - n.clientHeight;
        var i = function() {
            var t = n
              , i = n.scrollTop;
            return function() {
                DoChatScrolling(t, i)
            }
        };
        (t === undefined || t != n.scrollTop) && setTimeout(i(), 300)
    }
}
function CreateOrGetChatTable(n, t) {
    var i = document.getElementById(t);
    return i || (i = document.createElement("table"),
    i.cellPadding = 0,
    i.cellSpacing = 0,
    i.id = t,
    i.style.width = "100%",
    i.className = "ChatTable",
    n.appendChild(i)),
    i
}
function BuildChat(n, t, i) {
    for (var r = 0; r < n.length; r++)
        ShowNewChatRow(t, n[r], i, !1);
    DoChatScrolling(t)
}
function ChatSkriptCB(n) {
    var t = n.d;
    BuildChat(t, document.getElementById("divChatSkript"), "ChatSkriptTable")
}
function ChatHandleReturn(n) {
    return n || (n = window.event),
    n.keyCode == 13 ? (PostChatMessage(),
    !1) : void 0
}
function PreparePrivateMessage(n) {
    var t = document.getElementById("edtChatMsg");
    t.focus();
    t.value = "/msg [" + n + "] "
}
function PostChatMessage() {
    var i = document.getElementById("edtChatMsg"), n, f;
    if (i.value.length !== 0) {
        n = i.value;
        n = n.replace(new RegExp("&","g"), "&amp;");
        n = n.replace(new RegExp("<","g"), "&lt;");
        n = n.replace(new RegExp(">","g"), "&gt;");
        n = n.replace(new RegExp('"',"g"), "&quot;");
        n = n.replace(new RegExp("'","g"), "&rsquo;");
        n.search(/\/me/) != -1 && (n = n.replace(/(^|\s)\/me/g, "$1/me/" + UserLogin));
        var t = n
          , r = ""
          , u = /^\s*\/msg\s*[\[](.*)[\]]\s*(.*)/;
        u.test(n) && (u.exec(n),
        t = RegExp.$2,
        r = RegExp.$1);
        t = jQuery.trim(t);
        typeof GameInfo == "object" ? ServiceSendGameChatMessage(t, GameInfo.ID, null, null) : ServiceSendChatMessage(t, r, null, null);
        f = {
            Epoch: (new Date).getTime(),
            Sender: UserLogin,
            SenderID: UserID,
            ID: -1,
            Message: t,
            Recipient: r
        };
        typeof chatContainer == "undefined" && (chatContainer = document.getElementById("divChat"),
        chatTableName = "tableChat");
        i.value = u.test(n) ? "/msg [" + RegExp.$1 + "] " : " "
    }
}
function CheckChatMessage(n) {
    if (n.length === 0)
        return !1;
    var t = Emoticon(n)
      , i = t.count("img");
    return i > 3 ? !1 : !0
}
function ChatResized() {
    ServiceSetWindowSize(1e3, 0, $("#divChat").height())
}
function ChatResizing() {
    var n = $(".controls_chat_ascx");
    $("#divChat").height(n.height() - 68)
}
function RequestClearChat() {
    var n;
    n = UserLang == "0" ? window.confirm("Möchtest Du den Chat komplett löschen? Dies solltest Du tun, wenn er beleidigende oder sehr private Nachrichten enthält.") : window.confirm("Do you want to delete all chat messages? You should do that if the chat contains offensive or very private messages.");
    n && ServiceClearChat()
}
function RemoveChatMessage(n) {
    ServiceDeleteChatMessage(n)
}
function MuteUser(n, t) {
    ServiceMuteUser(n, t)
}
function IsOnlineID(n) {
    return n in onlineUserData
}
function FormatOnlinePlayerChat(n, t, i, r, u, f, e, o, s) {
    return FormatOnlinePlayer(n, t, i, r, u, f, e, o, s, !0)
}
function ConvertVacationdateToDate(n) {
    var t = n.split(/[\.-\/]/);
    return t.length == 3 ? t[0].length == 4 ? new Date(t[0],t[1] - 1,t[2],0,0,0,0) : new Date(t[2],t[1] - 1,t[0],0,0,0,0) : new Date(NaN)
}
function FormatOnlinePlayer(n, t, i, r, u, f, e, o, s, h) {
    var c = $("<span>", {
        "class": "jOnlineUser"
    }), l, a, v;
    return f && (l = new Date,
    l.setHours(0, 0, 0, 0),
    f = ConvertVacationdateToDate(e).valueOf() <= l.valueOf() + 6048e5 && l.valueOf() <= ConvertVacationdateToDate(o).valueOf()),
    f && (a = "",
    a = UserLang == 0 ? "Abwesend vom " + e + " bis " + o + ". " + s : "Absent from " + e + " to " + o + ". " + s,
    v = "netimages/c/holidays.png",
    IsOnlineID(t) && (v = "netimages/c/holidaysgreen.png"),
    c.append($("<span>").append($("<img>", {
        "class": "onVacation",
        src: BaseUrl + v,
        alt: "away",
        title: a
    }))),
    u = !1),
    c.append(FormatOnlineUserSpan(n, t, i, r, u, f, h, c)),
    c
}
function FormatOnlineUserSpan(n, t, i, r, u, f, e, o) {
    var s = $("<span>", {
        "class": "jPlayerInfo jPlayerID" + t
    }), c, y, p, l, a, v;
    if (e || typeof UserID == "undefined" || t != UserID) {
        if (i != null ? s.append(document.createTextNode(i + " " + n)) : s.append(document.createTextNode(n)),
        r !== !0 && o !== undefined) {
            if (IsOnlineID(t)) {
                if (y = _maxOnlineUserUTCSeconds,
                s.addClass("online"),
                p = f ? "netimages/c/spacer.gif" : IsIdleUser(t) ? "netimages/c/online_idle.png" : "netimages/c/online.png",
                l = "Letzter Klick: ",
                UserLang == "1" && (l = "Last click : "),
                a = onlineUserData[t],
                v = "",
                a != null) {
                    var w = y - a.UTCSeconds
                      , b = Math.floor(w / 60)
                      , h = Math.floor(w % 60);
                    h < 10 && (h = "0" + h);
                    v = l + b + ":" + h
                }
                c = $("<img>", {
                    "class": "jOnlineImage" + (f ? "" : " online"),
                    src: BaseUrl + p,
                    alt: "online",
                    title: v
                })
            } else
                c = $("<img>", {
                    "class": "jOnlineImage" + (u === !0 ? " jKeepSpace" : ""),
                    src: BaseUrl + "netimages/c/spacer.gif",
                    alt: "offline",
                    title: "Offline"
                });
            o.append(c)
        }
    } else
        s.append($("<img/>", {
            style: "width: 13px;",
            "class": "jPlayerInfo jPlayerID" + UserID,
            src: "/netimages/c/poeppel_onturn.png"
        }));
    return s
}
function UpdateOnlineUserCount() {
    ServiceGetOnlineUsers(UpdateOnlineUsersCB, null)
}
function UpdateOnlineUsersCB(n) {
    RefreshOnlineUserData(n.d)
}
function RefreshOnlineUserData(n) {
    onlineUserData = {};
    _maxOnlineUserUTCSeconds = 0;
    _numUsersOnline = 0;
    _numIdleUsersOnline = 0;
    UpdateOnlineUserData(n);
    UpdateOnlineUserUI()
}
function IsIdleUser(n) {
    return IsOnlineID(n) ? _maxOnlineUserUTCSeconds - onlineUserData[n].UTCSeconds > 1200 : !1
}
function RemoveOnlineUserData(n) {
    n.forEach(function(n) {
        n in onlineUserData && (IsIdleUser(n) ? --_numIdleUsersOnline : --_numUsersOnline,
        delete onlineUserData[n])
    })
}
function UpdateOnlineUserData(n) {
    for (var t = 0; t < n.length; ++t)
        n[t].UserID in onlineUserData ? onlineUserData[n[t].UserID].UTCSeconds = n[t].UTCSeconds : (onlineUserData[n[t].UserID] = n[t],
        IsIdleUser(n[t].UserID) ? ++_numIdleUsersOnline : ++_numUsersOnline),
        n[t].UTCSeconds > _maxOnlineUserUTCSeconds && (_maxOnlineUserUTCSeconds = n[t].UTCSeconds)
}
function UpdateOnlineUserCounts(n, t) {
    _numUsersOnline = n;
    _numIdleUsersOnline = t;
    UpdateOnlineUserCountsUI()
}
function UpdateOnlineUserCountsUI() {
    var n = " Spieler online";
    UserLang == "1" && (n = " players online");
    $("#OnlineUserCount").html(_numUsersOnline + " (" + _numIdleUsersOnline + ") " + n)
}
function UpdateOnlineUserUI() {
    UpdateOnlineUserCountsUI();
    var n = _maxOnlineUserUTCSeconds;
    $(".jOnlineUser").each(function() {
        for (var f = $(this).find(".onVacation").length == 1, e = $(this).children(".jPlayerInfo"), o = e.attr("class").split(" "), r = 0, s, t, l, h, c, i = 0; i < o.length; i++)
            if (o[i].substring(0, 9) == "jPlayerID") {
                r = o[i].substring(9);
                break
            }
        if (f && (s = $(this).find(".onVacation"),
        IsOnlineID(r) ? s.attr("src", BaseUrl + "netimages/c/holidaysgreen.png") : s.attr("src", BaseUrl + "netimages/c/holidays.png")),
        t = $(this).children("img"),
        IsOnlineID(r)) {
            if ($(this).addClass("online").removeClass("offline"),
            e.addClass("online").removeClass("offline"),
            t === null || f || (l = IsIdleUser(r) ? "online_idle.png" : "online.png",
            t.attr("src", BaseUrl + "netimages/c/" + l).attr("alt", "online"),
            t.addClass("online")),
            h = "Letzter Klick: ",
            UserLang == "1" && (h = "Last click : "),
            c = onlineUserData[r],
            c != null && t !== null) {
                var a = n - c.UTCSeconds
                  , v = Math.floor(a / 60)
                  , u = Math.floor(a % 60);
                u < 10 && (u = "0" + u);
                t.attr("title", h + v + ":" + u)
            }
        } else
            t === null || f || (t.attr("src", BaseUrl + "netimages/c/spacer.gif").attr("alt", "offline").attr("title", "Offline"),
            t.removeClass("online")),
            $(this).removeClass("online").addClass("offline"),
            e.removeClass("online").addClass("offline")
    })
}
function IsBuddy(n) {
    if (currentBuddies === null)
        return !1;
    for (var t = 0; t < currentBuddies.length; t++)
        if (currentBuddies[t].UserId == n)
            return !0;
    return !1
}
function UpdateBuddyListCB(n) {
    currentBuddies = n.d;
    RefreshBuddies()
}
function RefreshBuddies() {
    var i = currentBuddies, r, f, s, h, n, c, e, l, u, o, t;
    if (i !== null) {
        if (r = $("#BuddyList"),
        i.length === 0) {
            f = "Noch keine Freunde definiert";
            UserLang == "1" && (f = "You have no buddies defined");
            r.html("<p>" + f + "<\/p>");
            try {
                document.dispatchEvent(buddyListUpdatedEvent)
            } catch (a) {}
            return
        }
        r.empty();
        s = $("<div/>", {
            id: "buddylist-filter-div"
        }).appendTo(r);
        h = UserLang == 0 ? "Nur aktiv" : "Active only";
        s.html('<input type="checkbox" id="buddy-list-filter-activeonly">' + h).addClass("buddylist-filter");
        $("#buddy-list-filter-activeonly").on("click", function() {
            SaveBuddyListDisplayOptions();
            $("#buddy-list-filter-activeonly").prop("checked") ? $("#BuddyList").addClass("activeonly") : $("#BuddyList").removeClass("activeonly")
        });
        for (n = [],
        c = UserLang == 0 ? "Alle" : "All",
        n.__all__ = {
            name: c,
            buddyList: []
        },
        t = 0; t < i.length; t++)
            if (n.__all__.buddyList.push(i[t]),
            i[t].Tags != null && i[t].Tags.split(/\s+/).length > 0) {
                e = i[t].Tags.split(/\s+/);
                for (l in e)
                    u = e[l],
                    typeof n[u] == "undefined" && (n[u] = {
                        name: u,
                        buddyList: []
                    }),
                    n[u].buddyList.push(i[t])
            }
        o = {
            __all__: n.__all__
        };
        Object.keys(n).sort(function(n, t) {
            return n.toString().localeCompare(t.toString())
        }).forEach(function(t) {
            t != "__all__" && (o[t] = n[t])
        });
        n = o;
        LoadBuddyListDisplayOptions() || (buddyListDisplayState = ["__all__"]);
        for (t in n)
            buddyTagGroup = n[t],
            GenerateBuddyGroupList(t, r, buddyTagGroup);
        try {
            document.dispatchEvent(buddyListUpdatedEvent)
        } catch (a) {}
        $(".buddy-tag-header").on("click", function(n) {
            var t = $(n.currentTarget);
            t.toggleClass("expanded collapsed");
            buddyListDisplayState = [];
            $(".buddy-tag-header.expanded").each(function(n, t) {
                buddyListDisplayState.push($(t).data("buddy-tag-group-id"))
            });
            SaveBuddyListDisplayOptions()
        })
    }
}
function GenerateBuddyGroupList(n, t, i) {
    var f = $("<div/>", {
        id: "buddy-tag-group-" + n
    }).addClass("buddy-tag-group").appendTo(t), o = $("<div/>", {
        id: "buddy-tag-header-" + n
    }).data("buddy-tag-group-id", n).addClass("buddy-tag-header " + ($.inArray(n, buddyListDisplayState) >= 0 ? "expanded" : "collapsed")).appendTo(f), e, r, u;
    o.text(i.name);
    buddyTagUserListDiv = $("<div/>", {
        id: "buddy-tag-user-list-" + n
    }).addClass("buddy-tag-user-list").appendTo(f);
    for (e in i.buddyList)
        r = i.buddyList[e],
        u = "buddy-tag-user-" + n + "-" + r.UserId,
        buddyTagUserListDiv.append($("<div/>", {
            id: u
        }).addClass("buddy-tag-user")),
        FormatOnlinePlayerChat(r.Login, r.UserId, null, !1, !0, r.IsOnVacation, r.VacationStart, r.VacationEnd, r.VacationReason).appendTo($("#" + u)),
        n == "__online__" && (r.IsOnline ? $("#" + u).removeClass("offline") : $("#" + u).addClass("offline"));
    $("#buddy-list-filter-activeonly").prop("checked") ? $("#BuddyList").addClass("activeonly") : $("#BuddyList").removeClass("activeonly")
}
function SaveBuddyListDisplayOptions() {
    var n = $("#buddy-list-filter-activeonly").prop("checked");
    createCookie("buddy-list-display-options", JSON.stringify({
        buddyListDisplayState: buddyListDisplayState,
        buddyListFilterActiveonly: n
    }), 1e3)
}
function LoadBuddyListDisplayOptions() {
    try {
        var n = JSON.parse(readCookie("buddy-list-display-options"));
        return buddyListDisplayState = n.buddyListDisplayState,
        $("#buddy-list-filter-activeonly").prop("checked", n.buddyListFilterActiveonly),
        !0
    } catch (t) {
        buddyListDisplayState = []
    }
    return !1
}
function UpdateBuddyList() {
    ServiceGetBuddies(UpdateBuddyListCB, null)
}
function AddToBuddyList(n) {
    ServiceAddBuddy(n, UpdateBuddyList, null)
}
function RemoveFromBuddyList(n) {
    ServiceRemoveBuddy(n, UpdateBuddyList, null)
}
function FlairForContextCBCB(n) {
    FlairForContextCB(n.d)
}
function FlairForContextChatCB(n) {
    n !== null && (SaveFlair(n.ID, n),
    LastFlairRequestID == n.ID) && overlib(RenderContextMenuWithFlair(n, UserIsModerator), FULLHTML, FOLLOWMOUSE, MOUSEOFF, NOCLOSE, OFFSETX, 15, OFFSETY, 5, HAUTO, VAUTO, DELAY, 500, TIMEOUT, 3e3)
}
function FlairForContextChatCBCB(n) {
    FlairForContextChatCB(n.d)
}
function FlairForContextCB(n) {
    n !== null && (SaveFlair(n.ID, n),
    LastFlairRequestID == n.ID) && overlib(RenderContextMenuWithFlair(n, !1), FULLHTML, FOLLOWMOUSE, MOUSEOFF, NOCLOSE, OFFSETX, 15, OFFSETY, 5, HAUTO, VAUTO, DELAY, 500, TIMEOUT, 3e3)
}
function GetFlairById(n) {
    for (var t = 0; t < FlairCache.length; t++)
        if (FlairCache[t].UserID == n)
            return FlairCache[t].Flair;
    return null
}
function SaveFlair(n, t) {
    GetFlairById(n) === null && FlairCache.push({
        UserID: n,
        Login: t.Login,
        Flair: t
    })
}
function RenderFlair(n) {
    var t = "Dies ist ein Gravatar. Hol Dir auch einen unter https://www.gravatar.com.";
    UserLang == "1" && (t = "This is a Gravatar. Get your own Gravatar on https://www.gravatar.com.");
    var i = $("<table>").attr("cellpadding", "0px").attr("cellspacing", "0px")
      , r = $("<tr>").appendTo(i)
      , u = "?";
    return n.GravatarLink.indexOf("?") > -1 && (u = "&"),
    $("<td>").appendTo(r).append($("<img>").attr("src", n.GravatarLink + u + "s=32").attr("alt", "Gravatar").attr("title", t).css("paddingRight", "5px").css("width", "32px").css("height", "32px")),
    $("<td>").appendTo(r).append($("<div>").css("font-weight", "bold").append(n.Login)).append($("<div>").css("white-space", "nowrap").css("font-weight", "normal").append(n.RankName)),
    $("<div>").append(i)
}
function InitShowPlayerContextMenu(n) {
    var t = GetFlairById(n);
    LastFlairRequestID = n;
    t === null ? ServiceGetUserFlairById(n, FlairForContextCBCB, null) : FlairForContextCB(t)
}
function InitShowGameContextMenu(n) {
    overlib(RenderGameContextMenu(n), FULLHTML, FOLLOWMOUSE, MOUSEOFF, NOCLOSE, OFFSETX, 15, OFFSETY, 0, HAUTO, VAUTO, DELAY, 500, TIMEOUT, 3e3)
}
function InitShowPlayerContextMenuChat(n) {
    var t = GetFlairById(n);
    LastFlairRequestID = n;
    t === null ? ServiceGetUserFlairById(n, FlairForContextChatCBCB, null) : FlairForContextChatCB(t)
}
function RenderGameContextMenu(n) {
    var i = "Einladung erstellen"
      , r = "Spielregeln"
      , u = "Spielinfo"
      , f = "Spielhistorie"
      , e = "Rangliste";
    UserLang == "1" && (i = "Create invitation",
    r = "Game rules",
    u = "Game info",
    f = "Game history",
    e = "Ranking table");
    var o = BaseUrlWithLang + "Invite/" + n.gameIDName
      , s = BaseUrlWithLang + "Rules/" + n.gameIDName
      , h = BaseUrlWithLang + "GameInfo/" + n.gameIDName
      , c = BaseUrlWithLang + "ranking/" + UserID + "#game_" + n.gameIDName
      , l = BaseUrlWithLang + "Ranking/Game/" + n.gameIDName
      , t = '<table class="tablecontext" cellpadding="2" cellspacing="0">';
    return t += '<tr><td class="ctxspcol"><\/td><td class="ctxrow">' + n.gameName + "<\/td><\/tr>",
    t += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><hr /><\/td><\/tr>',
    t += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + o + '" class="ctxrow">' + i + "<\/a><\/td><\/tr>",
    t += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + c + '" class="ctxrow">' + f + "<\/a><\/td><\/tr>",
    t += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + l + '" class="ctxrow">' + e + "<\/a><\/td><\/tr>",
    t += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + h + '" class="ctxrow">' + u + "<\/a><\/td><\/tr>",
    t += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + s + '" class="ctxrow">' + r + "<\/a><\/td><\/tr>",
    t + "<\/table>"
}
function RenderContextMenuWithFlair(n, t) {
    var f = "Chatnachricht schicken", e = "Mein Profil", o = "Spielerinfo", s = "Spielhistorie", h = "Spielhistorie mit mir", c = "Nachricht schicken", l = "Zur Freundesliste hinzufügen", a = "Von der Freundesliste entfernen", v = "Offene Spiele: ", r, u;
    UserLang == "1" && (f = "Send chat message",
    e = "My Profile",
    o = "Player info",
    s = "Game history",
    h = "Game history with me",
    c = "Send message",
    l = "Add to buddy list",
    a = "Remove from buddy list",
    v = "Open Games: ");
    var y = ShowFlag(n.Country) + "&nbsp;"
      , p = BaseUrlWithLang + "Profile"
      , w = BaseUrlWithLang + "user/" + n.Login.replace(".", "__dot__")
      , b = BaseUrlWithLang + "ranking/" + n.Login.replace(".", "__dot__")
      , k = BaseUrlWithLang + "ranking/" + UserLogin.replace(".", "__dot__") + "#opponent_" + n.ID
      , i = '<table class="tablecontext" cellpadding="2" cellspacing="0"><tr><td class="ctxspcol"><\/td><td class="ctxtitrow">' + RenderFlair(n).html() + "<\/td><\/tr>";
    return i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow">' + y + v + n.OpenGameCount + "<\/a><\/td><\/tr>",
    n.ID == UserID && (i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + p + '" class="ctxrow">' + e + "<\/a><\/td><\/tr>"),
    n.ID != UserID && document.getElementById("edtChatMsg") !== null && (i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="javascript:void(0)" onclick="javascript:nd();SendPM(\'' + n.Login + '\')" class="ctxrow">' + f + "<\/a><\/td><\/tr>"),
    i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + w + '" class="ctxrow">' + o + "<\/a><\/td><\/tr>",
    n.ID !== "" && n.ID > 0 && (i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + b + '" class="ctxrow">' + s + "<\/a><\/td><\/tr>",
    n.ID != UserID && (i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="' + k + '" class="ctxrow">' + h + "<\/a><\/td><\/tr>"),
    i += IsBuddy(n.ID) ? '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a class="ctxrow" href="javascript:void(0)" onclick="javascript:nd();RemoveFromBuddyList(' + n.ID + ');">' + a + "<\/a><\/td><\/tr>" : '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a class="ctxrow" href="javascript:void(0)" onclick="javascript:nd();AddToBuddyList(' + n.ID + ');">' + l + "<\/a><\/td><\/tr>"),
    n.ID != UserID && (i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="javascript:void(0)" onclick="javascript:nd();ShowSendMessage(\'' + n.Login.replace(".", "__dot__") + '\')" class="ctxrow">' + c + "<\/a><\/td><\/tr>"),
    t && n.ID != UserID && (r = "Moderator: 10 Minuten stummschalten",
    u = "Moderator: 60 Minuten stummschalten",
    UserLang == "1" && (r = "Moderator: Mute user for 10 minutes",
    u = "Moderator: Mute user for 60 minutes"),
    i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="javascript:void(0)" onclick="javascript:nd();MuteUser(\'' + n.ID + '\', 10)" class="ctxrow">' + r + "<\/a><\/td><\/tr>",
    i += '<tr><td class="ctxspcol"><\/td><td class="ctxrow"><a href="javascript:void(0)" onclick="javascript:nd();MuteUser(\'' + n.ID + '\', 60)" class="ctxrow">' + u + "<\/a><\/td><\/tr>"),
    i + "<\/table>"
}
function CreateChatMessageContextMenu(n, t, i, r) {
    var e, u, f;
    (UserIsModerator || UserLogin == r) && (n.id = "ChatMessage" + t,
    e = "Diese Chatnachricht löschen",
    UserLang == "1" && (e = "Delete this chat message"),
    u = document.createElement("a"),
    u.href = "javascript:RemoveChatMessage(" + t + ");",
    u.id = "aDeleteChatMessage" + t,
    u.style.display = "none",
    f = document.createElement("span"),
    f.className = "sprite-common messages-image sprite-common-btnDelete",
    f.alt = e,
    f.title = e,
    u.appendChild(f),
    n.appendChild(u),
    $(n).addClass("jDeleteableChatMessage"))
}
function UpdateUnreadMessagesError(n) {
    gettingUnreadMessages = !1;
    HandleLostSession(n);
    SetTimeoutForUpdateMessages()
}
function UpdateUnreadMessagesCB(n) {
    (gettingUnreadMessages = !1,
    SetTimeoutForUpdateMessages(),
    n !== null) && n.d !== null && DisplayUnreadMessages(n.d)
}
function UpdateUnreadMessages() {
    gettingUnreadMessages || (gettingUnreadMessages = !0,
    updateUnreadMessagesTimeout !== null && clearTimeout(updateUnreadMessagesTimeout),
    ServiceGetUnreadMessages(UpdateUnreadMessagesCB, UpdateUnreadMessagesError))
}
function SetUnreadMessageCount(n, t) {
    t > 0 && ($("#" + n + "count").html(t),
    $("#" + n).show("slow"),
    $("#divnomessages").hide())
}
function IncreaseUnreadMessageCount(n) {
    var t = parseInt($("#" + n + "count").html());
    $("#" + n + "count").hide("slow");
    $("#" + n + "count").html(t + 1);
    $("#" + n).show("slow");
    $("#" + n + "count").show("slow");
    $("#divnomessages").hide()
}
function DisplayUnreadMessages(n) {
    var t = "personal", i = "broadcast", r = "system", u = "discussion board", f = "You don't have any unread messages", e, o;
    UserLang === "0" && (t = "persönliche",
    i = "Rundmails",
    r = "System",
    u = "Forum",
    f = "Du hast keine ungelesenen Nachrichten");
    e = "<p class='simple' id='divmesspersonal' style='display:none;'><a href='" + BaseUrlWithLang + "Messages#personal'><span id='divmesspersonalcount' style='font-weight:bold;'>0<\/span> " + t + "<\/a><\/p><p class='simple' id='divmessbroadcast' style='display:none;'><a href='" + BaseUrlWithLang + "Messages#broadcast'><span id='divmessbroadcastcount' style='font-weight:bold;'>0<\/span> " + i + "<\/a><\/p><p class='simple' id='divmesssystem' style='display:none;'><a href='" + BaseUrlWithLang + "Messages#system'><span id='divmesssystemcount' style='font-weight:bold;'>0<\/span> " + r + "<\/a><\/p><p class='simple' id='divmessforum' style='display:none;'><a href='" + BaseUrlWithLang + "Forum'><span id='divmessforumcount' style='font-weight:bold;'>0<\/span> " + u + "<\/a><\/p><p class='simple' id='divnomessages' style='display:none;'>" + f + "<\/p>";
    o = $("#divUnreadMessages").html(e);
    n.UnreadBroadcastMessages + n.UnreadForumMessages + n.UnreadPersonalMessages + n.UnreadSystemMessages > 0 ? (SetUnreadMessageCount("divmesspersonal", n.UnreadPersonalMessages),
    SetUnreadMessageCount("divmessbroadcast", n.UnreadBroadcastMessages),
    SetUnreadMessageCount("divmesssystem", n.UnreadSystemMessages),
    SetUnreadMessageCount("divmessforum", n.UnreadForumMessages)) : $("#divnomessages").show("slow")
}
function HideShowMessage(n) {
    var t = document.getElementById("MessageBody" + n);
    t.style.display = t.style.display == "none" ? "" : "none";
    ServiceHideMessage(n, null, null)
}
function DeleteMessage(n, t) {
    var i = document.getElementById("Message" + n);
    i.style.display = "none";
    numMessages--;
    ServiceDeleteMessage(n, t)
}
function UpdateMessages() {
    gettingMessages || (gettingMessages = !0,
    ServiceGetMessages(0, UpdateMessagesCB, UpdateMessagesError))
}
function UpdateMessagesError(n) {
    HandleLostSession(n);
    gettingMessages = !1
}
function RenderMessages(n, t, i) {
    var u, r, f, c, p, e, l, a, b, o, v, s, k;
    lastMessageID = 0;
    var h = $("#" + n + "_content .messages")
      , w = $("#" + n + "_content .no_messages")
      , y = t.length;
    if ($("#messages--" + n + "__count").text(" (" + y + ")"),
    y == 0) {
        w.show();
        h.hide();
        return
    }
    for (h.show(),
    h.html(""),
    w.hide(),
    u = t,
    r = y - 1; r >= 0; r--) {
        if (u[r].ID > lastMessageID)
            lastMessageID = u[r].ID;
        else
            continue;
        numMessages++;
        f = $("<div>").attr("id", "Message" + u[r].ID);
        c = "Diese Nachricht löschen";
        UserLang == "1" && (c = "Delete this message");
        p = $("<a>").attr("href", "javascript:DeleteMessage(" + u[r].ID + ", " + u[r].MessageType + ")");
        e = $("<span>").addClass("sprite-common messages-image sprite-common-btnDelete").attr("alt", c).attr("title", c);
        p.append(e);
        f.append(p);
        l = "Antworten";
        UserLang == "1" && (l = "Reply");
        a = $("<a>");
        b = u[r].Sender;
        i ? (a.attr("href", "javascript:ShowSendMessage('" + b + "')"),
        e = $("<span>").addClass("sprite-common messages-image sprite-common-reply").attr("alt", l).attr("title", l),
        a.append(e),
        f.append(a)) : (e = $("<span>").addClass("sprite-common messages-image"),
        f.append(e));
        o = $("<a>").attr("href", "javascript:HideShowMessage('" + u[r].ID + "')").addClass("MessageTitle");
        v = $("<span>").addClass("MessageTitle");
        u[r].SenderID > 0 && v.append(document.createTextNode(u[r].Rank + " "));
        v.append(document.createTextNode(u[r].Sender + " (" + u[r].Date + ")"));
        o.append(v);
        o.append($("<br/>"));
        o.attr("SenderID", u[r].SenderID);
        u[r].SenderID > 0 && o.addClass("jPlayerInfo").addClass("jPlayerID" + u[r].SenderID);
        f.append(o);
        s = $("<div>").addClass("MessageBody").attr("id", "MessageBody" + u[r].ID);
        u[r].Visible ? s.show() : s.hide();
        k = u[r].Text;
        s.html(Emoticon(k));
        f.append(s);
        h.prepend(f)
    }
}
function UpdateMessagesCB(n) {
    var i = n.d, t;
    gettingMessages = !1;
    var r = []
      , u = []
      , f = []
      , e = []
      , o = parseInt(UserID);
    for (t = 0; t < i.length; t++)
        if (i[t].MessageType == 2)
            i[t].Sender += BroadcastSuffix,
            u.push(i[t]);
        else
            switch (i[t].SenderID) {
            case 0:
                f.push(i[t]);
                break;
            case o:
                e.push(i[t]);
                break;
            default:
                r.push(i[t])
            }
    RenderMessages("personal", r, !0);
    RenderMessages("broadcast", u, !1);
    RenderMessages("system", f, !1);
    RenderMessages("outbox", e, !1)
}
function UpdateRecentlyFinishedGames() {
    gettingRecentlyFinishedGames || (updateRecentlyFinishedGamesTimeout !== null && clearTimeout(updateRecentlyFinishedGamesTimeout),
    gettingRecentlyFinishedGames = !0,
    ServiceGetRecentlyFinishedGames(UserID, UpdateRecentlyFinishedGamesCB, UpdateRecentlyFinishedGamesError))
}
function UpdateRecentlyFinishedGamesError(n) {
    gettingRecentlyFinishedGames = !1;
    HandleLostSession(n);
    SetTimeoutForGetRecentlyFinishedGames()
}
function MergeRecentlyFinishedGamesData(n) {
    for (var i, t = 0; t < n.Players.length; t++)
        i = find(n.Players[t].GameID, n.Games, function(n, t) {
            return n.GameId == t
        }),
        n.Games[i].Opponents.push(n.Players[t]);
    return n.Games
}
function UpdateRecentlyFinishedGamesCB(n) {
    function c(n) {
        var f = "Abgemeldeter Spieler", u, i;
        UserLang == 1 && (f = "former player");
        for (var r = $("<span>"), e = !0, o = n.length, t = 0; t < o; t++)
            e || r.append(document.createTextNode(", ")),
            u = $("<span>"),
            i = n[t].Login,
            i == null && (i = f),
            FormatOnlinePlayer(i, n[t].PID, null).appendTo(u),
            e = !1,
            r.append(u);
        return $("<span>").append(r)
    }
    var h;
    gettingRecentlyFinishedGames = !1;
    currentRecentlyFinishedGameData = MergeRecentlyFinishedGamesData(n.d);
    SetTimeoutForGetRecentlyFinishedGames();
    var t = "Gewonnen"
      , i = "Verloren"
      , r = "Remis"
      , u = "Alle"
      , f = "Ergebnis"
      , e = "Spiel"
      , o = "Spieler"
      , s = "Beendet am";
    UserLang == 1 && (t = "Won",
    i = "Lost",
    r = "Tie",
    u = "All",
    f = "Result",
    e = "Game",
    o = "Players",
    s = "Finished on");
    h = UserLang == 1 ? "solo game" : "Solospiel";
    $("#divRecentlyFinishedGames").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="divRecentlyFinishedGamesTable"><\/table>');
    recentlyFinishedGamesTable = $("#divRecentlyFinishedGamesTable").DataTable({
        searching: !1,
        pagingType: "full_numbers",
        info: !1,
        language: GetDataTablesTranslation(),
        ordering: !1,
        autoWidth: !1,
        stateSave: !0,
        stateDuration: 0,
        dom: '<"top"flp>rt<"bottom"ip><"clear">',
        pageLength: 10,
        lengthMenu: [[10, -1], [10, u]],
        data: currentRecentlyFinishedGameData,
        columns: [{
            title: "",
            orderable: !1,
            width: "10px",
            data: function() {
                return GetRecentlyFinishedGamesExpandHtml("divRecentlyFinishedGamesTable")
            }
        }, {
            title: s,
            width: "80px",
            data: "FinishedOnString"
        }, {
            title: "ID",
            data: "GameId",
            render: function(n, t, i) {
                return "<a href='javascript:ShowHistoryGame(" + n + ")' class='yucRecFinID" + n + (i.HasUnreadChatMessages ? " hasUnreadChat" : "") + "'>" + n + "<\/a>"
            }
        }, {
            title: e,
            width: "39%",
            data: "CustomGameName",
            render: function(n, t, i) {
                return '<span class="jGameInfo" data-gamename="' + i.GameTypeName + '" data-gameidname="' + i.GameIDName + '">' + i.CustomGameName + "<\/span>"
            }
        }, {
            title: f,
            data: "Result",
            render: function(n, u, f) {
                return f.Opponents.length == 1 ? h : n == 0 ? i : n == 1 ? r : n == 2 ? t : ""
            }
        }, {
            title: o,
            width: "26%",
            data: "Opponents",
            render: function(n) {
                return c(n).html()
            }
        }]
    })
}
function GetRecentlyFinishedGamesExpandHtml(n) {
    var t = "Details anzeigen", i;
    return UserLang == "1" && (t = "Show details"),
    i = "GetRecentlyFinishedGamesDetails(this,'" + n + "');",
    '<a href="javascript:void(0)" onclick="' + i + '"><span class="ui-icon ui-icon-circle-triangle-s" title="' + t + '"><\/a>'
}
function GetRecentlyFinishedGamesDetails(n, t) {
    var o = $("#" + t).DataTable(), u = o.row(o.cell(n.parentNode).index().row), i = u.data(), r = n.parentNode.parentNode, f = n.children[0], e;
    $(f).hasClass("ui-icon-circle-triangle-n") ? ($(f).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s"),
    u.child().hide(),
    e = expandedRecentlyFinishedGamesDetails.indexOf(i.GameId),
    e > -1 && expandedRecentlyFinishedGamesDetails.splice(e, 1)) : ($(f).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n"),
    u.child(FormatRecentlyFinishedGamesDetails(i.GameId), r.className).show(),
    $(r).next().addClass(r.className),
    $(r).next().addClass("DetailRow"),
    expandedRecentlyFinishedGamesDetails.indexOf(i.GameId) == -1 && (expandedRecentlyFinishedGamesDetails = expandedRecentlyFinishedGamesDetails.concat(i.GameId)))
}
function FormatRecentlyFinishedGamesDetails(n) {
    return ServiceGetRecentlyFinishedGameDetail(n, FormatRecentlyFinishedGamesDetailsCB, FormatRecentlyFinishedGamesDetailsError),
    "<div id='RecentlyFinishedGameDetail" + n + "'/>"
}
function ToggleTrueskillLine(n, t) {
    var i = n + "_" + t
      , r = document.getElementById("trueskill_player" + i)
      , u = r.style.display;
    u == "none" ? (r.style.display = "inline-block",
    document.getElementById("trueskill_toggle" + i).src = ImagePath + "c/minus.gif") : (r.style.display = "none",
    document.getElementById("trueskill_toggle" + i).src = ImagePath + "c/plus.gif")
}
function FormatRecentlyFinishedGamesDetailsCB(n) {
    function ct(n) {
        for (var i = !1, t = 0; t < n.length; t++)
            (n[t].BaseData.NewRating != n[t].BaseData.OldRating || n[t].BaseData.MetaGamePointsChange != 0) && (i = !0);
        return i
    }
    var i, lt = $("#RecentlyFinishedGameDetail" + n.d.Game.ID), e = n.d.GameInfo.BaseData.GermanFullName, v = "Du hast das Spiel gewonnen!", y = "Du hast das Spiel Remis gespielt.", p = "Du hast das Spiel verloren.", w = "Du hast das Spiel aufgegeben.", b = " hat das Spiel aufgegeben.", k = " haben das Spiel aufgegeben.", o = "Abgemeldeter Spieler", c = "Siegpunkte", d = "Rangpunkte", g = "Aufgrund des Spiels wurde der Spieler befördert. Der neue Rang ist ", nt = "Aufgrund des Spiels wurde der Spieler degradiert. Der neue Rang ist ", tt = "Ein Eremit ist ein Eremit bleibt ein ", it = "Züge", rt = "/Zug", ut = " hat zu dem Spiel eingeladen. ", ft = " hat den ersten Zug gemacht.", et = "Aktuell hast Du das Spiel so bewertet: ", at = UserLang == "1" ? "Solo game" : "Solospiel", t, r, s, ot, u, f;
    for (UserLang == "1" && (e = n.d.GameInfo.BaseData.EnglishFullName,
    v = "You won the game!",
    y = "You played the game to a tie.",
    p = "You lost the game.",
    w = "You gave up the game.",
    b = " gave up the game.",
    k = " gave up the game.",
    o = "former player",
    c = "victory points",
    d = "ranking points",
    g = "The user gained a rank. The new rank is ",
    nt = "The user lost a rank. The new rank is ",
    tt = "A Hermit is a Hermit stays a ",
    it = "moves",
    rt = "/move",
    ut = " invited for the game. ",
    ft = " did the first move.",
    et = "Currently you rated the game like: "),
    t = '<table class="inviteDetails" id="inviteDetails' + n.d.Game.ID + '" cellpadding="0" cellspacing="0" border="0">',
    t += "<tr>",
    t += '<td style="width: 30px;">',
    n.d.GameInfo.BaseData.HasCoverImage ? t += '<div class="shadow"><img alt="' + e + '" src="' + n.d.GameInfo.BaseData.CoverImagePath + '" /><\/div>' : n.d.GameInfo.BaseData.HasScreenShotImage && (t += '<div class="shadow"><img alt="' + e + '" src="' + n.d.GameInfo.BaseData.ScreenShotImagePath + '" /><\/div>'),
    t += "<div style='padding-top: 10px;'>",
    t += GetPlayersImageHtml(n.d.Game.NumPlayers, !0),
    t += GetGameTypeImageHtml(!n.d.Game.isTraining),
    t += GetReturnMatchImageHtml(n.d.Game.hasRevanche, n.d.Game.isRevanche),
    t += "<\/div>",
    n.d.Game.TotalMoves != null && (t += "<div style='margin-left: 5px;padding-top: 5px;clear:both;'>",
    t += n.d.Game.TotalMoves + " " + it,
    t += "<\/div>"),
    n.d.Game.AverageMoveTimeSeconds != null && (t += "<div style='margin-left: 5px;padding-top: 5px;clear:both;'>",
    t += FormatMoveTimeSpan(n.d.Game.AverageMoveTimeSeconds) + rt,
    t += "<\/div>"),
    t += "<\/td>",
    t += '<td class="inviteDetailsMainCell" style="vertical-align:top;">',
    e != n.d.GameInfo.CustomGameName && (t += "<div style='padding-bottom:10px;'>",
    t += n.d.GameInfo.CustomGameName,
    t += "<\/div>"),
    r = -1,
    i = 0; i < n.d.GamePlayers.length; i++)
        n.d.GamePlayers[i].BaseData.PID == UserID && (r = i);
    if (s = r != -1 && n.d.GamePlayers[r].BaseData.hermit == !0,
    r != -1)
        if (n.d.GamePlayers.length == 1)
            t += "<div style='color:#71A1DF; font-weight:bold;'>",
            t += at,
            t += "<\/div>";
        else {
            t += "<div style='color:#71A1DF; font-weight:bold;'>";
            switch (n.d.GamePlayers[r].BaseData.RankingResult) {
            case 0:
                t += p;
                break;
            case 1:
                t += y;
                break;
            case 2:
                t += v
            }
            t += "<\/div>"
        }
    var l = -1
      , a = 0
      , h = "";
    for (i = 0; i < n.d.GamePlayers.length; i++)
        n.d.GamePlayers[i].BaseData.GaveUp && (l = i,
        a > 0 && (h += ", "),
        h += n.d.GamePlayers[i].BaseData.Login,
        a++);
    if (l != -1 && (t += "<div>",
    t += a === 1 ? l == r ? w : h + b : h + k,
    t += "<\/div>"),
    n.d.GamePlayers.length == 1)
        t += "<div style='padding-left:30px;'>",
        n.d.GamePlayers[0].GameResultDescription != "" ? t += n.d.GamePlayers[0].GameResultDescription : n.d.GamePlayers[0].BaseData.ResultLevel1 != null && (t += n.d.GamePlayers[0].BaseData.ResultLevel1 + " " + c),
        t += "<\/div>";
    else if (n.d.GamePlayers[0].BaseData.FinalPosition == 1) {
        for (t += "<div style='padding-top:10px'>",
        ot = ct(n.d.GamePlayers),
        i = 0; i < n.d.GamePlayers.length; i++) {
            if (t += "<div style='clear:both'>",
            t += "<div style='width:30px;float:left;'>",
            t += n.d.GamePlayers[i].BaseData.FinalPosition + FormatTh(n.d.GamePlayers[i].BaseData.FinalPosition),
            t += "<\/div>",
            t += n.d.GamePlayers[i].BaseData.Login == null ? o : FormatOnlinePlayerChat(n.d.GamePlayers[i].BaseData.Login, n.d.GamePlayers[i].BaseData.PID, n.d.GamePlayers[i].RankName, !1, !1, n.d.GamePlayers[i].BaseData.IsOnVacation, n.d.GamePlayers[i].BaseData.VacationStart, n.d.GamePlayers[i].BaseData.VacationEnd, n.d.GamePlayers[i].BaseData.VacationReason).html(),
            n.d.GamePlayers[i].GameResultDescription != "" && (t += "<div style='padding-left:30px;'>",
            t += n.d.GamePlayers[i].GameResultDescription,
            t += "<\/div>"),
            ot) {
                t += "<div style='padding-left:30px;'>";
                s ? (t += "<a href='javascript:ToggleTrueskillLine(" + i + ", " + n.d.Game.ID + ")'>",
                t += "<img id='trueskill_toggle" + i + "_" + n.d.Game.ID + "' src='" + ImagePath + "c/plus.gif' style='width:9px; height:9px' />",
                t += "<\/a> Trueskill<span id='trueskill_player" + i + "_" + n.d.Game.ID + "' style='display:none'>&nbsp;") : t += "TrueSkill ";
                var st = Math.max(0, Math.floor(n.d.GamePlayers[i].BaseData.NewRating))
                  , vt = Math.max(0, Math.floor(n.d.GamePlayers[i].BaseData.OldRating))
                  , yt = Math.floor(n.d.GamePlayers[i].BaseData.NewMu * 10 + .5) / 10
                  , pt = Math.floor(n.d.GamePlayers[i].BaseData.NewSigma * 10 + .5) / 10
                  , ht = st - vt;
                ht >= 0 && (t += "+");
                t += ht;
                t += " (&rarr; TS=" + st + " &mu;=" + yt + " &sigma;=" + pt + ")";
                s ? t += "<\/span>" : (t += ", ",
                n.d.GamePlayers[i].BaseData.MetaGamePointsChange >= 0 && (t += "+"),
                t += n.d.GamePlayers[i].BaseData.MetaGamePointsChange + " " + d);
                t += "<\/div>"
            }
            t += "<\/div>";
            n.d.GamePlayers[i].BaseData.PromotionType == null || s || (t += "<div style='padding-left:30px;'>",
            t += n.d.GamePlayers[i].NewRankName == "Hermit" || n.d.GamePlayers[i].NewRankName == "Eremit" ? tt : n.d.GamePlayers[i].BaseData.PromotionType == 1 ? g : nt,
            t += n.d.GamePlayers[i].NewRankName,
            t += ".<\/div>");
            n.d.GamePlayers[i].BaseData.ResultLevel1 != null && n.d.GamePlayers[i].GameResultDescription == "" && (t += "<div style='padding-left:30px;'>",
            t += n.d.GamePlayers[i].BaseData.ResultLevel1 + " " + c,
            t += "<\/div>")
        }
        for (t += "<div style='padding-top:10px'>",
        u = -1,
        i = 0; i < n.d.GamePlayers.length; i++)
            n.d.GamePlayers[i].BaseData.PID == n.d.Game.CreatorID && (u = i);
        for (t += n.d.GamePlayers[u].BaseData.Login == null ? o : FormatOnlinePlayerChat(n.d.GamePlayers[u].BaseData.Login, n.d.GamePlayers[u].BaseData.PID, null, !1, !1).html(),
        t += ut,
        f = -1,
        i = 0; i < n.d.GamePlayers.length; i++)
            n.d.GamePlayers[i].BaseData.PID == n.d.Game.StartPlayer && (f = i);
        t += n.d.GamePlayers[f].BaseData.Login == null ? o : FormatOnlinePlayerChat(n.d.GamePlayers[f].BaseData.Login, n.d.GamePlayers[f].BaseData.PID, null, !1, !1).html();
        t += ft;
        t += "<\/div>";
        t += "<\/div>"
    }
    r != -1 && (t += "<div style='padding-top:10px'>",
    t += et + " " + RenderGameLikeDropDown(n.d.CurrentPlayerGameLike, n.d.Game.GameType),
    t += "<\/div>");
    t += "<\/td>";
    t += "<\/tr>";
    t += "<\/table>";
    lt.html(t)
}
function RenderGameLikeDropDown(n, t) {
    var r = {
        "0": "Mag ich nicht",
        "1": "Kenne ich nicht",
        "2": "Neutral",
        "3": "Mag ich",
        "4": "Lieblingsspiel"
    }, u, i, f;
    UserLang == 1 && (r = {
        "0": "Don't like it",
        "1": "Don't know it",
        "2": "Neutral",
        "3": "Like it",
        "4": "Favorite game"
    });
    u = $('<select data-gametypeid="' + t + '"onchange="javascript:OnChangeGameLike(this);"/>');
    for (i in r)
        i == n ? $("<option />", {
            value: i,
            text: r[i],
            selected: !0
        }).appendTo(u) : $("<option />", {
            value: i,
            text: r[i]
        }).appendTo(u);
    return f = $("<div />"),
    f.append(u),
    f.html()
}
function OnChangeGameLike(n) {
    var t = $(n).val()
      , i = $(n).attr("data-gametypeid");
    ServiceSetGameLike(i, t, null, null)
}
function FormatTh(n) {
    if (UserLang == 0)
        return ".";
    switch (n) {
    case 1:
        return "<sup>st<\/sup>";
    case 2:
        return "<sup>nd<\/sup>";
    case 3:
        return "<sup>rd<\/sup>";
    default:
        return "<sup>th<\/sup>"
    }
}
function FormatMoveTimeSpan(n) {
    var t, i, r;
    return n < 99 ? n + "s" : (t = Math.round(n / 60, 0),
    t < 100) ? t + "m" : (i = Math.round(n / 3600, 0),
    i < 100) ? i + "h" : (r = Math.round(n / 150, 0),
    r + "d")
}
function FormatRecentlyFinishedGamesDetailsError() {}
function UpdateRankingList() {
    ServiceGetRankingList(UpdateRankingListCB, UpdateRankingListError)
}
function UpdateRankingListError() {}
function UpdateRankingListCB(n) {
    var t = "Spieler"
      , i = "# Spiele"
      , r = "# Gewonnen"
      , u = "# Verloren"
      , f = "# Remis"
      , e = "Alle";
    UserLang == 1 && (t = "Player",
    i = "# Games",
    r = "# Won",
    u = "# Lost",
    f = "# Tie",
    e = "All");
    $("#divGlobalRankingList").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="divGlobalRankingListTable"><\/table>');
    $("#divGlobalRankingListTable").DataTable({
        searching: !1,
        pagingType: "full_numbers",
        info: !1,
        language: GetDataTablesTranslation(),
        ordering: !1,
        autoWidth: !1,
        stateSave: !0,
        stateDuration: 0,
        dom: '<"top"flp>rt<"bottom"ip><"clear">',
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, e]],
        data: n.d,
        columns: [{
            title: t,
            width: "250px",
            data: "Login",
            render: function(n, t, i) {
                return FormatOnlinePlayer(n, i.PlayerId, i.RankName, !0, !1).html()
            }
        }, {
            title: i,
            data: "NumGames"
        }, {
            title: r,
            data: "NumWins"
        }, {
            title: u,
            data: "NumLosses"
        }, {
            title: f,
            data: "NumTies"
        }]
    })
}
function UpdateFavoriteOpponents(n) {
    var t = "Bisher noch keine Spiele gespielt."
      , i = "Spieler"
      , r = "Anzahl Spiele"
      , u = "Alle";
    UserLang == 1 && (t = "No games finished yet.",
    u = "All",
    i = "Player",
    r = "Number of games");
    $("#tblFavoriteOpponents").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="tblFavoriteOpponentsTable"><\/table>');
    $("#tblFavoriteOpponentsTable").DataTable({
        searching: !1,
        pagingType: "full_numbers",
        info: !0,
        language: GetDataTablesTranslation(t),
        ordering: !1,
        autoWidth: !1,
        stateSave: !0,
        stateDuration: 0,
        dom: '<"top"flp>rt<"bottom"ip><"clear">',
        pageLength: 10,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, u]],
        processing: !0,
        serverSide: !0,
        ajax: BaseUrl + "data.jqdt?dataSource=Opponents&UserID=" + n,
        columns: [{
            title: i,
            width: "100px",
            data: "Login",
            render: function(n, t, i) {
                var r = $("<span>");
                return FormatOnlinePlayer(n, i.PID, null).appendTo(r),
                r.html()
            }
        }, {
            title: r,
            width: "50px",
            data: "GameCount"
        }]
    })
}
function UpdatePlayerRankingList(n, t) {
    function p(n) {
        var f = "Abgemeldeter Spieler", u, i;
        UserLang == 1 && (f = "former player");
        for (var r = $("<span>"), e = !0, o = n.length, t = 0; t < o; t++)
            e || r.append(document.createTextNode(", ")),
            u = $("<span>"),
            i = n[t].Login,
            i == null && (i = f),
            FormatOnlinePlayer(i, n[t].PlayerId, null).appendTo(u),
            e = !1,
            r.append(u);
        return $("<span>").append(r)
    }
    var f = "Bisher noch keine Spiele gespielt.", e = "Beendet am", o = "Spieltyp", s = "Spieler", h = "Punkte", y = "Alle", u, r, i;
    UserLang == 1 && (f = "No games finished yet.",
    e = "Finished on",
    o = "Game type",
    s = "Players",
    h = "Points",
    y = "All");
    var c = "-1"
      , l = "-1"
      , a = "-1"
      , v = "-1";
    if (typeof t != "undefined" && t.length > 0)
        for (u = t.substr(1).split("|"),
        r = 0; r < u.length; ++r) {
            i = u[r].split("_");
            switch (i[0]) {
            case "opponent":
                c = i[1];
                break;
            case "game":
                l = i[1];
                break;
            case "fromdate":
                a = i[1];
                break;
            case "todate":
                v = i[1]
            }
        }
    $("#divPlayerRankingList").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="divPlayerRankingListTable"><\/table>');
    $("#divPlayerRankingListTable").DataTable({
        searching: !1,
        pagingType: "full_numbers",
        info: !0,
        language: GetDataTablesTranslation(f),
        ordering: !1,
        autoWidth: !1,
        stateSave: !0,
        stateDuration: 0,
        dom: '<"top"flp>rt<"bottom"ip><"clear">',
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
        processing: !0,
        serverSide: !0,
        ajax: BaseUrl + "data.jqdt?dataSource=RankingDetailsUser&UserID=" + n + "&OppID=" + c + "&GameType=" + l + "&FromDate=" + a + "&ToDate=" + v,
        columns: [{
            title: "",
            sorting: [],
            width: "10px",
            data: function() {
                return GetRecentlyFinishedGamesExpandHtml("divPlayerRankingListTable")
            }
        }, {
            title: e,
            width: "80px",
            data: "FinishedOnString"
        }, {
            title: o,
            width: "40%",
            data: "CustomGameName",
            render: function(n, t, i) {
                return console.log(i),
                '<span class="jGameInfo" data-gamename="' + i.GameName + '" data-gameidname="' + i.GameTypeName + '">' + n + "<\/span>"
            }
        }, {
            title: s,
            width: "25%",
            data: "Opponents",
            render: function(n) {
                return p(n).html()
            }
        }, {
            title: "ID",
            data: "GameId",
            render: function(n, t, i) {
                var r = "";
                return i.IdLastGame != -1 && (r = "<a href='javascript:ShowHistoryGame(" + i.IdLastGame + ")'>" + i.IdLastGame + "<\/a>/"),
                i.HistoryExists ? r + "<a href='javascript:ShowHistoryGame(" + n + ")'>" + n + "<\/a>" : n
            },
            className: "alignRight"
        }, {
            title: h,
            data: "PointResult",
            className: "alignRight"
        }]
    })
}
function ShowFurtherContent(n) {
    $("#" + n).show();
    $("#" + n + "Outer").hide()
}
function UpdateSentInvitations() {
    gettingSentInvitations || (updateSentInvitationsTimeout !== null && clearTimeout(updateSentInvitationsTimeout),
    gettingSentInvitations = !0,
    ServiceGetSentInvitations(UpdateSentInvitationsCB, UpdateSentInvitationsError))
}
function UpdateSentInvitationsError(n) {
    gettingSentInvitations = !1;
    HandleLostSession(n);
    SetTimeoutForSentInvitations()
}
function UpdateSentInvitationsCB(n) {
    gettingSentInvitations = !1;
    SetTimeoutForSentInvitations();
    var e = n.d
      , t = "Spieltyp (Szenario)"
      , i = "Mitspieler"
      , r = "Du hast keine Einladungen erstellt."
      , u = "Zufallsspiel"
      , f = "Geschw.";
    UserLang === "1" && (t = "Game type (scenario)",
    i = "Opponents",
    r = "You did not create any invitations.",
    u = "Random game",
    f = "Speed");
    $("#SentInvitations").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="SentInvitationsTable"><\/table>');
    $("#SentInvitationsTable").DataTable({
        searching: !1,
        paging: !1,
        info: !1,
        language: GetDataTablesTranslation(r),
        ordering: !0,
        autoWidth: !1,
        stateSave: !1,
        data: e,
        order: [[1, "asc"]],
        columns: [{
            title: "",
            orderable: !1,
            width: "10px",
            data: "ID",
            render: function(n) {
                return GetTakeBackInvitationHtml(n)
            }
        }, {
            title: t,
            orderSequence: ["desc", "asc"],
            data: "GameName",
            render: function(n, t, i) {
                return i.IsRandomGame ? (n = u + " " + GetLikeLevelText(i.MinLikeLevel),
                n + "<br /><span style='font-style:italic'>" + i.UserText + "<\/span>") : formatGameListName(n, i.GameTypeName, i.GermanFullName, i.EnglishFullName, i.UserText)
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "NumPlayers",
            render: function(n, t) {
                return t === "display" || t === "filter" ? GetPlayersImageHtml(n) : n
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "IsRanking",
            render: function(n, t) {
                return t === "display" || t === "filter" ? GetGameTypeImageHtml(n) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !1,
            data: "HasReturn",
            render: function(n, t, i) {
                return i.IsRandomGame && (n = !1),
                GetReturnImageHtml(n)
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "InvType",
            render: function(n) {
                return GetInvTypeImageHtml(n)
            }
        }, {
            title: "TS",
            width: "10px",
            orderable: !1,
            data: "SkillRequirement",
            render: function(n) {
                return n === -1 ? "" : "&plusmn;" + n
            }
        }, {
            title: f,
            width: "10px",
            orderable: !1,
            data: "SpeedRequirement",
            render: function(n) {
                return TranslateSpeed(n)
            }
        }, {
            title: i,
            orderSequence: ["asc", "desc"],
            data: "Players",
            render: function(n, t, i) {
                if (t === "sort" || t === "filter")
                    return n[0].Login;
                var r = "";
                return i.InvType === 5 && i.InvitedPlayers && (r += "[",
                r += getInvitationPlayers(i.InvitedPlayers, 0).html(),
                r += "] "),
                r + getInvitationPlayers(n, 0).html()
            }
        }]
    })
}
function TranslateSpeed(n) {
    if (UserLang === "0")
        switch (n) {
        case 0:
            return "Langsam";
        case 1:
            return "1 Zug/T";
        case 2:
            return "x Züge/T";
        case 3:
            return "Schnell";
        case 4:
            return "Live";
        case 5:
            return "Keine";
        default:
            return ""
        }
    else
        switch (n) {
        case 0:
            return "Slow";
        case 1:
            return "1 move/d";
        case 2:
            return "x moves/d";
        case 3:
            return "Fast";
        case 4:
            return "Live";
        case 5:
            return "Unspecified";
        default:
            return ""
        }
}
function GetTakeBackInvitationHtml(n) {
    var t = "Einladung löschen";
    return UserLang === "1" && (t = "Cancel invitation"),
    "<a  href='javascript:void(0)' onclick='CancelInvitation(" + n + ");'><span class='sprite-common invitation-image sprite-common-btnDelete' title='" + t + "'><\/a>"
}
function CancelInvitation(n) {
    ServiceDeleteInvitation(n, CancelInvitationCB, CancelInvitationCB_error)
}
function CancelInvitationCB() {
    if (showInvitationActionResultMessage(UserLang === "1" ? "Invitation cancelled" : "Einladung abgelehnt", !0),
    typeof invListByGameType != "undefined") {
        ServiceGetPublicInvitationsByGameTypeId(invListByGameType, UpdateReceivedInvitationsCB, UpdateReceivedInvitationsError);
        return
    }
    if (typeof invListByOpponent != "undefined") {
        ServiceGetPublicInvitationsByPlayerId(invListByOpponent, UpdateReceivedInvitationsCB, UpdateReceivedInvitationsError);
        return
    }
    UpdateReceivedInvitations();
    UpdateSentInvitations();
    UpdatePersonalInvitations()
}
function CancelInvitationCB_error() {
    showInvitationActionResultMessage(UserLang === "1" ? "Error canceling Invitation" : "Fehler beim Ablehnen der Einladung", !1)
}
function UpdateReceivedInvitations() {
    gettingReceivedInvitations || (updateReceivedInvitationsTimeout !== null && clearTimeout(updateReceivedInvitationsTimeout),
    gettingReceivedInvitations = !0,
    ServiceGetPublicInvitations(UpdateReceivedInvitationsCB, UpdateReceivedInvitationsError))
}
function UpdateReceivedInvitationsError(n) {
    gettingReceivedInvitations = !1;
    HandleLostSession(n);
    SetTimeoutForReceivedInvitations()
}
function UpdateReceivedInvitationsCB(n) {
    var u, i, t, r, f;
    if (gettingReceivedInvitations = !1,
    n !== null) {
        for (u = $(window).scrollTop(),
        i = "Zufallsspiel",
        UserLang === "1" && (i = "Random game"),
        t = n.d.length - 1; t >= 0; t--)
            if (n.d[t].IsRandomGame) {
                if (r = GetGameLikeData(n.d[t].GameTypeId),
                r <= 1) {
                    n.d.splice(t, 1);
                    continue
                }
                n.d[t].GameName = i;
                n.d[t].EnglishFullName = i;
                n.d[t].GermanFullName = i;
                n.d[t].LikeLevel = r
            }
        FormatReceivedInvitationsTable(n.d);
        n.d.length > 0 && (f = $("#PublicInvitationsTable").DataTable(),
        f.rows().every(function() {
            var n = this.data();
            expandedPublicInvitations.indexOf(n.ID) > -1 && GetInvitationDetails($(".ui-icon", this.node()).parent().get(0), !0)
        }));
        window.scrollTo(0, u)
    }
}
function UpdatePersonalInvitations() {
    gettingPersonalInvitations || (updatePersonalInvitationsTimeout !== null && clearTimeout(updatePersonalInvitationsTimeout),
    gettingPersonalInvitations = !0,
    ServiceGetPersonalInvitations(UpdatePersonalInvitationsCB, UpdatePersonalInvitationsError))
}
function UpdatePersonalInvitationsError(n) {
    gettingPersonalInvitations = !1;
    HandleLostSession(n);
    SetTimeoutForPersonalInvitations()
}
function UpdatePersonalInvitationsCB(n) {
    (gettingPersonalInvitations = !1,
    SetTimeoutForPersonalInvitations(),
    n !== null) && (currentPersonalInvitations = n.d,
    DisplayPersonalInvitations())
}
function DisplayPersonalInvitations() {
    var t = $(window).scrollTop(), n;
    FormatReceivedPersonalInvitationsTable(currentPersonalInvitations);
    currentPersonalInvitations.length > 0 && (n = $("#ReceivedPersonalInvitationsTable").DataTable(),
    n.rows().every(function() {
        var n = this.data();
        expandedPersonalInvitations.indexOf(n.ID) > -1 && GetInvitationDetails($(".ui-icon", this.node()).parent().get(0), !1)
    }));
    window.scrollTo(0, t)
}
function AddPersonalInvitationsRecord(n) {
    currentPersonalInvitations.push(n);
    DisplayPersonalInvitations()
}
function RemovePersonalInvitationsRecord(n) {
    currentPersonalInvitations = jQuery.grep(currentPersonalInvitations, function(t) {
        return t.ID != n
    });
    DisplayPersonalInvitations()
}
function FormatIndividualInvitationDetails(n, t) {
    var a = n.GermanFullName, v = "Eingeladen von", y = "Akzeptiert von", p = "Andere eingeladen", w = "Zufallsspiel", b = "Du hast das Spiel als 'neutral' eingestuft", k = "Du magst das Spiel", d = "Das ist eines Deiner Lieblingsspiele", rt = "... berechne Wert ...", g = "Anzahl&nbsp;Spiele", nt = "Deine Erfahrung", tt = !1, i, r, f, s, e, u, c, l, o;
    for (UserLang === "1" && (a = n.EnglishFullName,
    v = "Invite from",
    y = "Accepted by",
    p = "Others invited",
    w = "Random game",
    b = "You ranked this game as 'neutral'",
    k = "You like this game",
    d = "This is one of your favorite games",
    rt = "... calculating value ...",
    g = "Number&nbsp;of&nbsp;games",
    nt = "Your experience"),
    i = '<table class="inviteDetails" id="inviteDetails' + n.ID + '" cellpadding="0" cellspacing="0" border="0">',
    i += "<tr>",
    i += '<td style="width: 30px;">',
    n.HasCoverImage && !n.IsRandomGame && (i += '<div class="shadow"><img alt="' + a + '" src="' + n.CoverImagePath + '" /><\/div>'),
    n.IsRandomGame && (i += '<div class="shadow"><img alt="' + w + '" src="' + ImagePath + 'Covers/120/RandomGame.gif" /><\/div>'),
    i += "<\/td>",
    i += '<td class="inviteDetailsMainCell">',
    i += '<table cellpadding="0" cellspacing="0" border="0">',
    n.IsRandomGame || (i += "<tr><td><\/td><td><\/td><td>TrueSkill<\/td><td>" + g + "<\/td><\/tr>"),
    i += '<tr id="inv_' + n.ID + "_" + n.CreatorID + '"><td class="inviteDetailsHeadingCell">' + v + ':<\/td><td style="width:400px">' + getInvitor(n.Players, n.CreatorID).html() + '<\/td><td style="text-align:right"><\/td><td style="text-align:right"><\/td><\/tr>',
    r = 0; r < n.Players.length; r++)
        n.Players[r].PlayerID !== n.CreatorID && (n.Players[r].PlayerID === intUserID && (tt = !0),
        i += '<tr id="inv_' + n.ID + "_" + n.Players[r].PlayerID + '"><td class="inviteDetailsHeadingCell">' + y + ":<\/td><td><span>" + FormatOnlinePlayerChat(n.Players[r].Login, n.Players[r].PlayerID, n.Players[r].Rank, !1, !1, n.Players[r].IsOnVacation, n.Players[r].VacationStart, n.Players[r].VacationEnd, n.Players[r].VacationReason).html() + '<\/span><\/td><td style="text-align:right"><\/td><td style="text-align:right"><\/td><\/tr>');
    if (n.InvitedPlayers.length > 0 && (i += '<tr><td class="inviteDetailsHeadingCell">' + p + ":<\/td><td>" + getInvitationPlayers(n.InvitedPlayers, 1).html() + "<\/td><\/td><td><\/td><\/tr>"),
    n.IsRandomGame && t && (f = b,
    n.LikeLevel === 3 && (f = k),
    n.LikeLevel === 4 && (f = d),
    i += '<tr><td class="inviteDetailsHeadingCell">&nbsp;<\/td><td colspan="3">' + f + "<\/td>"),
    n.IsRandomGame || tt || (i += '<tr id="inv_' + n.ID + '_User"><td>' + nt + "<\/td><td><span>" + FormatOnlinePlayerChat(UserLogin, UserID, null, !1, !1, !1).html() + '<\/span><\/td><td style="text-align:right"><\/td><td style="text-align:right"><\/td><\/tr>'),
    i += "<\/table>",
    i += "<\/td>",
    i += '<td class="inviteAcceptDeclineCell">' + GetInvitationAcceptButton(n.ID, n.Players, n.NumPlayers, n.SkillRequirement > 0) + "<\/td>",
    i += '<td class="inviteAcceptDeclineCell">' + GetInvitationDeclineButton(n.ID, n.InvType, n.Players) + "<\/td>",
    i += "<\/tr>",
    i += "<\/table>",
    n.GameTypeId === 82 && !n.IsRandomGame && n.Scenario % 1024 > 1)
        for (s = n.Setting.split(","),
        e = 1; e < s.length; e++)
            i += '<img alt="" src="' + ImagePath + "games/Thunderstone/" + UserLang + "/" + s[e] + '.jpg" width="90" style="margin-right:1px;margin-bottom:1px"/>';
    else if (n.GameTypeId === 312 && !n.IsRandomGame)
        if (n.Scenario !== 7)
            n.Scenario === 4 && (i += "<span style='color:red;font-weight:bold;font-size:14px;'>" + (UserLang === "1" ? "Special rules! Check the game instructions." : "Spezielle Regeln! Siehe Anleitung.") + "<\/span><br /><br />"),
            i += '<img alt="" src="/Games/Hazienda/images/preview_map' + n.Scenario + '.jpg" />';
        else {
            i += '<div style="position: relative; diplay: inline-block;">';
            var h = JSON.parse(n.Setting)
              , ut = h.numRows
              , ft = h.numColumns
              , it = 0;
            for (u = 0; u < ut; u++) {
                for (c = ft,
                i += '<div style="float: left; clear: both; white-space: nowrap;',
                u % 2 == 0 && (i += "margin-left: 7px;",
                c--),
                u > 0 && (i += "margin-top: -4px;"),
                i += '">',
                l = 0; l < c; l++,
                it++)
                    o = h.mapData[it],
                    o === "0" ? i += '<div style="display: inline-block; width: 14px; height: 16px; position: relative;"><\/div>' : o === "2" ? (i += '<div style="display: inline-block; width: 14px; height: 16px; position: relative; background-size: 100% 100%; background-image: url(' + ImagePath + '/games/Hacienda/Tile3.png);" >',
                    i += '<img alt="" style="float: left; width: 13px; height: 13px; margin-top: 1px;" src="' + ImagePath + '/games/Hacienda/water1.png" />',
                    i += "<\/div>") : (i += '<img alt="" style="width: 14px; height: 16px;" src="' + ImagePath + "/games/Hacienda/",
                    i += "tile" + o + '.png" />');
                i += "<\/div>"
            }
            i += "<\/div>"
        }
    return i
}
function GetInvitationExpandHtml(n) {
    var t = "Details anzeigen";
    return UserLang === "1" && (t = "Show details"),
    '<a href="javascript:void(0)" onclick="GetInvitationDetails(this, ' + n + ');"><span class="ui-icon ui-icon-circle-triangle-s" title="' + t + '"><\/a>'
}
function GetInvitationDetails(n, t) {
    var u, i, s;
    t ? (u = $("#PublicInvitationsTable").DataTable(),
    i = expandedPublicInvitations) : (u = $("#ReceivedPersonalInvitationsTable").DataTable(),
    i = expandedPersonalInvitations);
    var e = u.row(u.cell(n.parentNode).index().row)
      , r = e.data()
      , f = n.parentNode.parentNode
      , o = n.children[0];
    $(o).hasClass("ui-icon-circle-triangle-n") ? ($(o).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s"),
    e.child().hide(),
    s = i.indexOf(r.ID),
    s > -1 && i.splice(s, 1)) : ($(o).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n"),
    e.child(FormatIndividualInvitationDetails(r, t), f.className).show(),
    r.IsRandomGame || ServiceGetMatchQuality(r.ID, GetMatchQualityCB, null, r),
    $(f).next().addClass(f.className),
    $(f).next().addClass("DetailRow"),
    i.indexOf(r.ID) === -1 && (i = i.concat(r.ID),
    t ? expandedPublicInvitations = i : expandedPersonalInvitations = i))
}
function GetMatchQualityCB(n, t) {
    var u, r, i, f, e;
    if (!n.d.GameExists) {
        u = "Die Einladung steht inzwischen nicht mehr zur Verfügung.";
        UserLang === "1" && (u = "The invitation is not available any more. ");
        $("#inviteDetails" + n.d.GameId).css("background-color", "#980000");
        $("#inviteDetails" + n.d.GameId).append("<tr><td><\/td><td colspan='3' style='color:white; font-weight:bold;'>" + u + "<\/td><\/tr>");
        $("#btnAcceptInvitation" + n.d.GameId).attr("disabled", "disabled");
        $("#btnDeclineInvitation" + n.d.GameId).attr("disabled", "disabled");
        return
    }
    for (r = 0,
    i = 0; i < n.d.GameExperience.length; i++)
        $("#inv_" + n.d.GameId + "_" + n.d.GameExperience[i].pid + " td:nth-child(3)").html(GetTrueSkill(n.d.GameExperience[i].mu, n.d.GameExperience[i].sigma)),
        $("#inv_" + n.d.GameId + "_" + n.d.GameExperience[i].pid + " td:nth-child(4)").html(n.d.GameExperience[i].NumGames),
        n.d.GameExperience[i].pid === t.CreatorID && (r = i);
    if (f = GetTrueSkill(n.d.GameExperience[r].mu, n.d.GameExperience[r].sigma),
    e = GetTrueSkill(n.d.UserExperience.mu, n.d.UserExperience.sigma),
    $("#inv_" + n.d.GameId + "_User td:nth-child(3)").html(GetTrueSkill(n.d.UserExperience.mu, n.d.UserExperience.sigma)),
    $("#inv_" + n.d.GameId + "_User td:nth-child(4)").html(n.d.UserExperience.NumGames),
    t.SkillRequirement >= 0) {
        if (f - t.SkillRequirement > e || f + t.SkillRequirement < e)
            return;
        $("#btnAcceptInvitation" + n.d.GameId).removeAttr("disabled")
    }
}
function FormatReceivedPersonalInvitationsTable(n) {
    var t = "Spieltyp (Szenario)"
      , i = "Mitspieler"
      , r = "Du hast keine persönlichen Einladungen erhalten."
      , u = "Zufallsspiel";
    UserLang === "1" && (t = "Game type (scenario)",
    i = "Opponents",
    r = "You have not received any personal invitations.",
    u = "Random game");
    $("#ReceivedPersonalInvitations").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="ReceivedPersonalInvitationsTable"><\/table>');
    $("#ReceivedPersonalInvitationsTable").DataTable({
        searching: !1,
        paging: !1,
        info: !1,
        language: GetDataTablesTranslation(r),
        ordering: !0,
        autoWidth: !1,
        stateSave: !1,
        data: n,
        order: [[1, "asc"]],
        columns: [{
            title: "",
            orderable: !1,
            width: "10px",
            data: function() {
                return GetInvitationExpandHtml(!1)
            }
        }, {
            title: t,
            width: "41%",
            orderSequence: ["desc", "asc"],
            data: "GameName",
            render: function(n, t, i) {
                return i.IsRandomGame ? (n = u + " " + GetLikeLevelText(i.MinLikeLevel),
                n + "<br /><span style='font-style:italic'>" + i.UserText + "<\/span>") : formatGameListName(n, i.GameTypeName, i.GermanFullName, i.EnglishFullName, i.UserText)
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "NumPlayers",
            render: function(n, t) {
                return t === "display" || t === "filter" ? GetPlayersImageHtml(n) : n
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "IsRanking",
            render: function(n, t) {
                return t === "display" || t === "filter" ? GetGameTypeImageHtml(n) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !1,
            data: "HasReturn",
            render: function(n, t, i) {
                return i.IsRandomGame && (n = !1),
                GetReturnImageHtml(n)
            }
        }, {
            title: i,
            width: "40%",
            orderSequence: ["asc", "desc"],
            data: "Players",
            render: function(n, t) {
                return t === "sort" || t === "filter" ? n[0].Login : getInvitationPlayers(n, 1).html()
            }
        }]
    })
}
function BuildInvitationFilterHtml() {
    var c = "Zeige Spiele mit folgender Bewertung: ", l = "Zeige Spiele mit folgender Geschwindigkeit: ", a = ["Mag ich nicht", "Kenne ich nicht", "Neutral", "Mag ich", "Lieblingsspiel"], v = "Spieler: ", y = "Übungsspiel", p = "Wertungsspiel", w = "Nicht gewonnen seit letztem Aufstieg", n, o, s, k, u, f;
    UserLang === "1" && (c = "Show games with my rating: ",
    l = "Show games with the following speed: ",
    a = ["Don't like", "Don't know", "Neutral", "Like", "Favorite"],
    v = "Players: ",
    y = "Training game",
    p = "Scored game",
    w = "Not won since last promotion");
    for (var r = $("<span>"), d = [!1, !1, !0, !0, !0], g = [!0, !0, !0, !0, !0], b = $("<div/>", {
        id: "params-rating"
    }).addClass("invitation-params").append(c), t = 0; t < 5; t++)
        n = $("<input name='filterboxes' id='cbShowLikeLevel" + t + "'  type='checkbox'" + (d[t] ? " checked" : "") + " style='vertical-align:sub;' />"),
        b.append($("<span>").css("padding-left", "10px").append(a[t]).append(n));
    for (o = $("<div/>", {
        id: "params-speed"
    }).addClass("invitation-params").append(l),
    t = 0; t < 6; ++t)
        t !== 3 && t !== 4 && (n = $("<input name='filterboxes' id='cbShowSpeedLevel" + t + "'  type='checkbox' checked style='vertical-align:sub;' />"),
        o.append($("<span>").css("padding-left", "10px").append(TranslateSpeed(t)).append(n)));
    for (s = $("<div/>", {
        id: "params-players"
    }).addClass("invitation-params").append($("<span/>").text(v)),
    k = $("<span style='padding-left:10px;' />"),
    u = 2; u <= 6; u++) {
        var i = $("<span>").css("padding", "0px 5px")
          , e = "<img src='" + ImagePath + "c/" + u + "players.gif' class='cb-align' />"
          , n = $("<input name='filterboxes' id='cbShowNumPlayers" + u + "'  type='checkbox'" + (g[u - 2] ? " checked" : "") + " class='cb-align' />");
        s.append(i).append(e).append(n)
    }
    var h = $("<div/>", {
        id: "params-scored"
    }).addClass("invitation-params").append($("<span/>"))
      , i = $("<span>").css("padding", "0px 5px")
      , e = "<img src='" + ImagePath + "c/training.gif' title='" + y + "' class='cb-align' />"
      , n = $("<input name='filterboxes' id='cbShowTrainingGames' type='checkbox' checked class='cb-align' />");
    return h.append(i).append(e).append(n),
    i = $("<span>").css("padding", "0px 5px"),
    e = "<img src='" + ImagePath + "c/wertung.gif' title='" + p + "' class='cb-align' />",
    n = $("<input name='filterboxes' id='cbShowScoredGames' type='checkbox' checked class='cb-align' />"),
    h.append(i).append(e).append(n),
    f = $("<div/>").addClass("invitation-params").append($("<span/>")),
    i = $("<span>").css("padding-left", "10px").css("color", "red").append("&plusmn;x00"),
    n = $("<input name='filterboxes' id='cbShowOutOfRangeInvitations' type='checkbox' class='cb-align' />"),
    f.append(i).append(n),
    i = $("<span>").css("padding-left", "10px").append(w),
    n = $("<input name='filterboxes' id='cbShowWonGames' type='checkbox' class='cb-align' />"),
    f.append(i).append(n),
    i = $("<span>").css("padding-left", "10px").append("Online"),
    n = $("<input name='filterboxes' id='cbShowOnlineUsers' type='checkbox' class='cb-align' />"),
    f.append(i).append(n),
    r.append(b).append("<br/>"),
    r.append(o).append("<br/>"),
    r.append(s),
    r.append(k),
    r.append(h),
    r.append(f),
    r
}
function ReceivedInvTableCustomFilter(n, t, i) {
    var h = new $.fn.dataTable.Api(n), r, c, u, l, f, o, e, a, s;
    if (h.table().node() !== document.getElementById("PublicInvitationsTable"))
        return !0;
    if ((r = h.row(i).data(),
    c = GetGameLikeData(r.GameTypeId),
    !$("#cbShowLikeLevel" + c).prop("checked")) || (u = r.SpeedRequirement,
    (u < 0 || u > 5) && (u = 5),
    u !== 3 && u !== 4 && !$("#cbShowSpeedLevel" + u).prop("checked")) || (l = r.NumPlayers,
    !$("#cbShowNumPlayers" + l).prop("checked")) || r.IsRanking && !$("#cbShowScoredGames").prop("checked") || !r.IsRanking && !$("#cbShowTrainingGames").prop("checked") || $("#cbShowWonGames").prop("checked") && r.IsWon)
        return !1;
    if ($("#cbShowOnlineUsers").prop("checked"))
        for (f = 0; f < r.Players.length; ++f)
            if (!IsOnlineID(r.Players[f].PlayerID))
                return !1;
    return r.SkillRequirement === -1 ? !0 : $("#cbShowOutOfRangeInvitations").prop("checked") ? !0 : (o = GetTrueSkill(r.CreatorMu, r.CreatorSigma),
    e = o - r.SkillRequirement,
    e < 0 && (e = 0),
    a = o + r.SkillRequirement,
    s = GetPlayerTrueSkillForGameType(r.GameTypeId),
    s >= e && s <= a)
}
function FormatReceivedInvitationsTable(n) {
    var t = typeof invListByGameType != "undefined" || typeof invListByOpponent != "undefined", i, h;
    t || $.fn.dataTable.ext.search.push(ReceivedInvTableCustomFilter);
    var r = "Spieltyp (Szenario)"
      , u = "Mitspieler"
      , f = "Alle"
      , e = "Geschw."
      , o = "Spielname"
      , s = "Zufallsspiel";
    UserLang === "1" && (r = "Game type (scenario)",
    u = "Opponents",
    f = "All",
    e = "Speed",
    o = "Game name",
    s = "Random game");
    i = "";
    t || (i = BuildInvitationFilterHtml().html());
    $("#ReceivedPublicInvitations").html(i + '<table cellpadding="0" cellspacing="0" border="0" class="display" id="PublicInvitationsTable"><\/table>');
    h = $("#PublicInvitationsTable").DataTable({
        drawCallback: function(n) {
            var f = !0, i, h, t, e, o, r;
            n.aaSorting[0][0] !== 1 && (f = !1);
            n.aiDisplay.length === 0 && (f = !1);
            var u = $("#PublicInvitationsTable").children("tbody").children("tr:not(.DetailRow)")
              , c = u[0].getElementsByTagName("td").length
              , s = "";
            for (i = 0; i < u.length; i++)
                h = n._iDisplayStart + i,
                f && (t = n.aoData[n.aiDisplay[h]]._aData[UserLang === "1" ? "EnglishFullName" : "GermanFullName"],
                e = t.indexOf("("),
                e > 0 && (t = t.substring(0, e - 1)),
                t !== s && (o = document.createElement("tr"),
                r = document.createElement("td"),
                r.colSpan = c,
                r.className = "group",
                r.innerHTML = t,
                o.appendChild(r),
                u[i].parentNode.insertBefore(o, u[i]),
                s = t))
        },
        stateSaveParams: function(n, t) {
            var i, r;
            for (t.yFilterValues = [],
            t.speedFilterValues = [],
            i = 0; i < 5; i++)
                t.yFilterValues.push($("#cbShowLikeLevel" + i).prop("checked"));
            for (i = 0; i < 6; ++i) {
                if (i === 3 || i === 4) {
                    t.speedFilterValues.push(!1);
                    continue
                }
                t.speedFilterValues.push($("#cbShowSpeedLevel" + i).prop("checked"))
            }
            for (t.numPlayerFilterValues = [],
            r = 2; r <= 6; r++)
                t.numPlayerFilterValues.push($("#cbShowNumPlayers" + r).prop("checked"));
            t.ShowTrainingGames = $("#cbShowTrainingGames").prop("checked");
            t.ShowScoredGames = $("#cbShowScoredGames").prop("checked");
            t.ShowOutOfRangeInvitations = $("#cbShowOutOfRangeInvitations").prop("checked");
            t.ShowWonGames = $("#cbShowWonGames").prop("checked");
            t.ShowOnlineUsers = $("#cbShowOnlineUsers").prop("checked")
        },
        stateLoaded: function(n, t) {
            var i, r;
            if (t.yFilterValues !== undefined)
                for (i = 0; i < t.yFilterValues.length; i++)
                    $("#cbShowLikeLevel" + i).prop("checked", t.yFilterValues[i]);
            if (t.speedFilterValues !== undefined)
                for (i = 0; i < t.speedFilterValues.length; i++)
                    i !== 3 && i !== 4 && $("#cbShowSpeedLevel" + i).prop("checked", t.speedFilterValues[i]);
            if (t.numPlayerFilterValues !== undefined)
                for (r = 0; r < t.numPlayerFilterValues.length; r++)
                    $("#cbShowNumPlayers" + (r + 2)).prop("checked", t.numPlayerFilterValues[r]);
            t.ShowTrainingGames !== undefined && $("#cbShowTrainingGames").prop("checked", t.ShowTrainingGames);
            t.ShowScoredGames !== undefined && $("#cbShowScoredGames").prop("checked", t.ShowScoredGames);
            t.ShowOutOfRangeInvitations !== undefined && $("#cbShowOutOfRangeInvitations").prop("checked", t.ShowOutOfRangeInvitations);
            t.ShowWonGames !== undefined && $("#cbShowWonGames").prop("checked", t.ShowWonGames);
            t.ShowOnlineUsers !== undefined && $("#cbShowOnlineUsers").prop("checked", t.ShowOnlineUsers)
        },
        searching: !0 && !t,
        pagingType: "full_numbers",
        language: GetDataTablesTranslation(undefined, o),
        ordering: !0,
        autoWidth: !1,
        stateSave: !0 && !t,
        stateDuration: 0,
        data: n,
        deferRender: !0,
        dom: '<"top"lpf>rt<"bottom"ip><"clear">',
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, f]],
        order: [[1, "asc"]],
        columns: [{
            title: "",
            orderable: !1,
            searchable: !1,
            width: "10px",
            data: function() {
                return GetInvitationExpandHtml(!0)
            }
        }, {
            title: r,
            width: "30%",
            orderSequence: ["desc", "asc"],
            data: "GameName",
            type: "string",
            render: function(n, t, i) {
                return t === "sort" ? (UserLang === "1" ? i.EnglishFullName : i.GermanFullName) + n : i.IsRandomGame ? (n = s + " " + GetLikeLevelText(i.MinLikeLevel),
                n + "<br /><span style='font-style:italic'>" + i.UserText + "<\/span>") : t === "display" ? formatGameListName(n, i.GameTypeName, i.GermanFullName, i.EnglishFullName, i.UserText) : n
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "NumPlayers",
            searchable: !1,
            render: function(n, t) {
                return t === "display" ? GetPlayersImageHtml(n) : n
            }
        }, {
            title: "",
            width: "10px",
            orderSequence: ["asc", "desc"],
            data: "IsRanking",
            searchable: !1,
            render: function(n, t) {
                return t === "display" ? GetGameTypeImageHtml(n) : n
            }
        }, {
            title: "",
            width: "10px",
            orderable: !1,
            data: "HasReturn",
            searchable: !1,
            render: function(n, t) {
                return t === "display" ? GetReturnImageHtml(n) : n
            }
        }, {
            title: "TS",
            width: "10px",
            orderable: !1,
            data: "SkillRequirement",
            searchable: !1,
            render: function(n, t, i) {
                var u, r;
                if (n === -1 || t === "filter" || t === "sort")
                    return "";
                u = GetTrueSkill(i.CreatorMu, i.CreatorSigma);
                r = u - n;
                r < 0 && (r = 0);
                var f = u + n
                  , e = GetPlayerTrueSkillForGameType(i.GameTypeId)
                  , o = "red";
                return e >= r && e <= f && (o = "green"),
                "<span style='color:" + o + "'>" + r + "-" + f + "<\/span>"
            }
        }, {
            title: e,
            width: "10px",
            orderable: !1,
            data: "SpeedRequirement",
            searchable: !1,
            render: function(n, t) {
                return t === "filter" || t === "sort" ? "" : TranslateSpeed(n)
            }
        }, {
            title: u,
            name: "opponents",
            width: "35%",
            sorting: ["asc", "desc"],
            data: "Players",
            type: "string",
            searchable: !1,
            render: function(n, t) {
                return t === "sort" || t === "filter" ? n[0].Login : getInvitationPlayers(n, 1).html()
            }
        }]
    });
    $("input[name='filterboxes']").bind("change", function() {
        WarnNoSelection();
        h.draw()
    });
    WarnNoSelection()
}
function WarnNoSelection() {
    $("#ReceivedPublicInvitations .no-selection").removeClass("no-selection");
    $("#params-rating :checked").length == 0 && $("#params-rating").addClass("no-selection");
    $("#params-speed :checked").length == 0 && $("#params-speed").addClass("no-selection");
    $("#params-players :checked").length == 0 && $("#params-players").addClass("no-selection");
    $("#params-scored :checked").length == 0 && $("#params-scored").addClass("no-selection")
}
function insertAfter(n, t) {
    var i = t.parentNode;
    i.lastchild === t ? i.appendChild(n) : i.insertBefore(n, t.nextSibling)
}
function GetInvitationAcceptHtml(n, t, i) {
    for (var f = !1, u, r = 0; r < t.length; r++)
        if (t[r].PlayerID === intUserID) {
            f = !0;
            break
        }
    return f || i > 2 && UserLogin.substr(0, 5) === "Guest" ? "<span><\/span>" : (u = "Einladung annehmen",
    UserLang === "1" && (u = "Accept invitation"),
    "<a href='javascript:void(0)' onclick='AcceptInvitation(" + n + ");'><span class='sprite-common invitation-image sprite-common-btnAccept' title='" + u + "'/><\/a>")
}
function GetInvitationAcceptButton(n, t, i, r) {
    for (var s = !1, f, e, o, u = 0; u < t.length; u++)
        if (t[u].PlayerID === intUserID) {
            s = !0;
            break
        }
    return s || i > 2 && UserLogin.substr(0, 5) === "Guest" ? "" : (f = "Annehmen",
    e = "Einladung annehmen",
    UserLang === "1" && (f = "Accept",
    e = "Accept invitation"),
    o = "",
    r && (o = " disabled='disabled'"),
    '<input class="button acceptbutton" type="button" id="btnAcceptInvitation' + n + '" onclick="AcceptInvitation(' + n + ');" title="' + e + '" value="' + f + '" ' + o + "/>")
}
function GetInvitationDeclineHtml(n, t, i) {
    var u, r, f;
    if (t !== 5) {
        for (u = !1,
        r = 0; r < i.length; r++)
            if (i[r].PlayerID === intUserID) {
                u = !0;
                break
            }
        if (!u)
            return "<span><\/span>"
    }
    return f = "Einladung ablehnen",
    UserLang === "1" && (f = "Decline invitation"),
    "<a href='javascript:void(0)' id='btnDeclineInvitation" + n + "' onclick='CancelInvitation(" + n + ");'><span class='sprite-common invitation-image sprite-common-btnDecline' title='" + f + "'><\/a>"
}
function GetInvitationDeclineButton(n, t, i) {
    var u, r, f, e;
    if (t !== 5) {
        for (u = !1,
        r = 0; r < i.length; r++)
            if (i[r].PlayerID === intUserID) {
                u = !0;
                break
            }
        if (!u)
            return ""
    }
    return f = "Ablehnen",
    e = "Einladung ablehnen",
    UserLang === "1" && (f = "Decline",
    e = "Decline invitation"),
    '<input class="button crossbutton" type="button" onclick="CancelInvitation(' + n + ');" title="' + e + '" value="' + f + '"/>'
}
function getInvitor(n, t) {
    for (var i = 0; i < n.length; i++)
        if (n[i].PlayerID === t)
            return getInvitationPlayers(new Array(n[i]), 1);
    return $("<span>")
}
function getInvitationPlayers2(n, t, i, r) {
    for (var f = $("<em>"), o = !0, s = n.length, e, u = 0; u < s; u++)
        (n[u].PlayerID !== intUserID || t) && (n[u].PlayerID === r && i || (o || f.append(document.createTextNode(", ")),
        e = $("<span>"),
        FormatOnlinePlayerChat(n[u].Login, n[u].PlayerID, n[u].Rank, !1, !1, n[u].IsOnVacation, n[u].VacationStart, n[u].VacationEnd, n[u].VacationReason).appendTo(e),
        o = !1,
        f.append(e)));
    return $("<span>").append(f)
}
function getInvitationPlayers(n, t) {
    return getInvitationPlayers2(n, t, 0, 0)
}
function AcceptInvitation(n) {
    $("tr[invitationID=" + n + "]").css("display", "none");
    ServiceAcceptInvitation(n, AcceptInvitationCB, AcceptInvitationCB_error)
}
function AcceptInvitationCB() {
    if (showInvitationActionResultMessage(UserLang === "1" ? "Invitation accepted" : "Einladung angenommen", !0),
    typeof invListByGameType != "undefined") {
        ServiceGetPublicInvitationsByGameTypeId(invListByGameType, UpdateReceivedInvitationsCB, UpdateReceivedInvitationsError);
        return
    }
    if (typeof invListByOpponent != "undefined") {
        ServiceGetPublicInvitationsByPlayerId(invListByOpponent, UpdateReceivedInvitationsCB, UpdateReceivedInvitationsError);
        return
    }
    UpdateReceivedInvitations();
    UpdatePersonalInvitations()
}
function AcceptInvitationCB_error() {
    showInvitationActionResultMessage(UserLang === "1" ? "Error accepting Invitation" : "Fehler beim Annehmen der Einladung", !1)
}
function showInvitationActionResultMessage(n, t) {
    var i = $("<div/>", {
        id: "invitation_result",
        "class": "framework_message_toast framework_message_toast--show"
    }).append($("<b/>").append($("<span/>", {
        "class": "invitation_result__text"
    }).html("<img class='framework_message_toast__type_icon' src='/scripts/clientFramework/0.1/images/" + (t ? "ok.png" : "crossedOut.png") + "'>" + n)));
    $("body").append(i);
    setTimeout(function() {
        i.removeClass("framework_message_toast--show")
    }, 5e3);
    setTimeout(function() {
        i.remove()
    }, 6e3)
}
function UpdateInvitationGamesList() {
    ServiceGetGamesList(UpdateInvitationGamesListCB, UpdateInvitationGamesListError)
}
function UpdateInvitationGamesListError(n) {
    HandleLostSession(n);
    updateInvitationGamesListTimeout = setTimeout(UpdateInvitationGamesList, 6e4)
}
function UpdateInvitationGamesListCB(n) {
    if (n !== null) {
        var t = $(window).scrollTop();
        FormatGamesListTable(n.d);
        window.scrollTo(0, t)
    }
}
function BuildGamesListFilterHtml() {
    var s = "Zeige Spiele mit folgender Bewertung: ", h = ["Mag ich nicht", "Kenne ich nicht", "Neutral", "Mag ich", "Lieblingsspiel"], c = "Spieleranzahl: ", l = "Alle", u, f, a, n, i, t, r, o, e;
    for (UserLang === "1" && (s = "Show games with my rating: ",
    h = ["Don't like", "Don't know", "Neutral", "Like", "Favorite"],
    c = "number of players: ",
    l = "all"),
    u = $("<span>"),
    f = $("<span>").css("padding", "5px"),
    f.append(s),
    u.append(f),
    a = [!1, !1, !0, !0, !0],
    t = 0; t < 5; t++)
        n = $("<span>").css("padding-left", "10px"),
        n.append(h[t]),
        f.append(n),
        i = a[t] ? $("<input name='filterboxes' id='cbShowLikeLevel" + t + "'  type='checkbox'  checked='checked' />") : $("<input name='filterboxes' id='cbShowLikeLevel" + t + "' type='checkbox'/>"),
        f.append(i);
    for (u.append($("<br/>")),
    r = $("<div/>"),
    r.append($("<span />").css("padding", "5px").append(c)),
    o = $("<select name='playerCount' id='numPlayers' />"),
    o.append($("<option />", {
        value: 0,
        text: l
    })),
    e = 1; e <= 6; e++)
        o.append($("<option />", {
            value: e,
            text: e
        }));
    return r.append(o),
    n = $("<span>").css("padding-left", "10px"),
    n.append(UserLang === "0" ? "Nicht gewonnen seit letztem Aufstieg" : "Not won since last promotion"),
    i = $("<input name='filterboxes' id='cbShowWonGames' type='checkbox'/>"),
    n.append(i),
    r.append(n),
    n = $("<span>").css("padding-left", "10px"),
    n.append(UserLang === "0" ? "nur neues Framework" : "only new framework"),
    i = $("<input name='filterboxes' id='cbFW2' type='checkbox'/>"),
    n.append(i),
    r.append(n),
    u.append(r),
    u
}
function GamesListTableCustomFilter(n, t, i) {
    var f = new $.fn.dataTable.Api(n), r, u;
    return f.table().node() !== document.getElementById("GamesListTable") ? !0 : (r = f.row(i).data(),
    !$("#cbShowLikeLevel" + r.LikeLevel).prop("checked")) ? !1 : $("#cbShowWonGames").prop("checked") && r.IsWon ? !1 : $("#cbFW2").prop("checked") && !r.IsFramework2 ? !1 : (u = parseInt($("#numPlayers").val()),
    u === 0) ? !0 : r.SupportedPlayerCounts.indexOf(u) >= 0
}
function FormatRealPersonName(n) {
    var t = "";
    return n.FirstName !== null && (t += n.FirstName),
    n.LastName !== null && (t.length > 0 && (t += " "),
    t += n.LastName),
    n.YucataLogin !== null && (t.length > 0 && (t += " "),
    t += '(<a class="jPlayerInfo jPlayer" href="' + GetPlayerInfoURL(n.YucataLogin) + '">' + n.YucataLogin + "<\/a>)"),
    t
}
function GetNamesList(n) {
    var i, t;
    if (n === "")
        return "";
    for (i = "",
    t = 0; t < n.length; ++t)
        t > 0 && (i += ",<br/>"),
        i += FormatRealPersonName(n[t]);
    return i
}
function GetPublisherList(n) {
    var i, t;
    if (n === "")
        return "";
    for (i = "",
    t = 0; t < n.length; ++t)
        t > 0 && (i += ",<br/>"),
        i += n[t].FullName;
    return i
}
function GetGameInfoExpandHtml() {
    var n = "Details anzeigen";
    return UserLang === "1" && (n = "Show details"),
    $("<span/>", {
        title: n,
        "class": "ui-icon ui-icon-circle-triangle-s"
    }).prop("outerHTML")
}
function FormatSupportedPlayerCounts(n) {
    var r = "", i = n[0], u = i, t;
    for (n.push(1e3),
    t = 1; t < n.length; ++t)
        n[t] !== i + 1 && (r !== "" && (r += ","),
        r += i - u > 0 ? u + "-" + i : u,
        u = n[t]),
        i = n[t];
    return n.pop(),
    r + (UserLang === "1" ? " Players" : " Spieler")
}
function GetPlayerInfoURL(n) {
    var t = window.location.href;
    return t.replace("CreateGame", "User/" + n)
}
function GetInvitePageURL(n) {
    var t = window.location.href;
    return t.replace("CreateGame", "Invite/" + n) + "?numplayers=" + $("#numPlayers").val()
}
function FormatGameDetails(n) {
    var t = '<table cellpadding="0" cellspacing="0" border="0"><tbody><tr style="background-color: #fde7b6;">', i, r, u, f, e;
    return t += "<td>",
    n.CoverImagePath !== null && (t += '<div class="shadow"><img src="' + n.CoverImagePath + '"/><\/div>'),
    t += "<\/td>",
    t += '<td><table class="normal" cellspacing="2" cellpadding="2" style="margin-top: 2px;"><tbody>',
    t += '<tr><td class="tblhighlight" colspan="2">',
    t += FormatSupportedPlayerCounts(n.SupportedPlayerCounts),
    n.MinPlayingTime !== null && n.MinPlayingTime !== 0 && (t += ", " + n.MinPlayingTime,
    n.MaxPlayingTime !== null && n.MaxPlayingTime > n.MinPlayingTime && (t += "-" + n.MaxPlayingTime),
    t += UserLang === "1" ? " Minutes" : " Minuten"),
    n.MinAge !== null && n.MinAge > 0 && (t += ", ",
    t += UserLang === "1" ? n.MinAge + " and older" : "ab " + n.MinAge + " Jahren"),
    t += "<\/td><\/tr>",
    n.Authors !== null && n.Authors.length > 0 && (i = UserLang === "1" ? "Author" : "Autor",
    t += '<tr><td class="tblhighlight">' + i + '<\/td><td class="tbldefault">' + GetNamesList(n.Authors) + "<\/td><\/tr>"),
    n.Illustrators !== null && n.Illustrators.length > 0 && (r = UserLang === "1" ? "Illustrator" : "Graphiker",
    t += '<tr><td class="tblhighlight">' + r + '<\/td><td class="tbldefault">' + GetNamesList(n.Illustrators) + "<\/td><\/tr>"),
    n.Publishers !== null && n.Publishers.length > 0 && (u = UserLang === "1" ? "Published by" : "Veröffentlicht von",
    t += '<tr><td class="tblhighlight">' + u + '<\/td><td class="tbldefault">' + GetPublisherList(n.Publishers) + "<\/td><\/tr>"),
    n.Developers !== null && n.Developers.length > 0 && (f = UserLang === "1" ? "Developed by" : "Entwickelt von",
    t += '<tr><td class="tblhighlight">' + f + '<\/td><td class="tbldefault">' + GetNamesList(n.Developers) + "<\/td><\/tr>"),
    t += "<\/tbody><\/table><\/td>",
    e = UserLang === "1" ? "Create invitation" : "Einladung erstellen",
    t += '<td><ul class="innermenu sf-menu sf-js-enabled sf-shadow"><li style="border-radius:10px;"><a href="' + GetInvitePageURL(n.IdName) + '"" style="border-width: 0; border-radius: 10px;">' + e + "<\/a><\/li><\/ul><\/td>",
    t + "<\/tr><\/tbody><\/table>"
}
function ToggleExpansion(n) {
    var t = n.target
      , u = $("#GamesListTable").DataTable()
      , r = u.row(u.cell(t.parentNode).index().row)
      , f = r.data()
      , i = t.parentNode.parentNode;
    $(t).hasClass("ui-icon-circle-triangle-n") ? ($(t).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s"),
    r.child().hide()) : ($(t).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n"),
    r.child(FormatGameDetails(f), i.className).show(),
    $(i).next().addClass(i.className),
    $(i).next().addClass("DetailRow"))
}
function FormatGamesListTable(n) {
    var s, t;
    $.fn.dataTable.ext.search.push(GamesListTableCustomFilter);
    var i = "Spielname"
      , r = "Bewertung"
      , u = "Gespielt"
      , f = "Autor"
      , h = "Entwickler"
      , c = "Verlag"
      , e = "Online seit"
      , o = "Alle";
    UserLang === "1" && (i = "Game name",
    r = "Rating",
    u = "Played",
    f = "Author",
    h = "Developer",
    c = "Publisher",
    e = "Online since",
    o = "all");
    s = BuildGamesListFilterHtml().html();
    $("#GamesList").html(s + '<table cellpadding="0" cellspacing="0" border="0" class="display" id="GamesListTable"><\/table>');
    t = $("#GamesListTable").DataTable({
        stateSaveParams: function(n, t) {
            delete t.search;
            t.yFilterValues = [];
            for (var i = 0; i < 5; i++)
                t.yFilterValues.push($("#cbShowLikeLevel" + i).prop("checked"));
            t.numPlayers = $("#numPlayers").val();
            t.ShowWonGames = $("#cbShowWonGames").prop("checked");
            t.ShowFW2Only = $("#cbFW2").prop("checked")
        },
        stateLoaded: function(n, t) {
            if (t.yFilterValues !== undefined)
                for (var i = 0; i < t.yFilterValues.length; i++)
                    $("#cbShowLikeLevel" + i).prop("checked", t.yFilterValues[i]);
            t.numPlayers !== undefined && $("#numPlayers").val(t.numPlayers);
            t.ShowWonGames !== undefined && $("#cbShowWonGames").prop("checked", t.ShowWonGames);
            t.ShowFW2Only !== undefined && $("#cbFW2").prop("checked", t.ShowFW2Only)
        },
        searching: !0,
        pagingType: "full_numbers",
        language: GetDataTablesTranslation(undefined, i),
        ordering: !0,
        autoWidth: !1,
        stateSave: !0,
        stateDuration: 0,
        data: n,
        dom: '<"top"lpf>rt<"bottom"ip><"clear">',
        pageLength: 25,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, o]],
        order: [[1, "asc"]],
        columns: [{
            title: "",
            orderable: !1,
            searchable: !1,
            width: "10px",
            data: function() {
                return GetGameInfoExpandHtml()
            }
        }, {
            title: i,
            orderSequence: ["asc", "desc"],
            data: "GameName",
            type: "string",
            render: function(n, t, i) {
                return t === "display" ? (i.DevStatus === 2 ? n += "<span class='beta'>BETA<\/span>" : i.DevStatus === 0 ? n += "<span class='indev'>DEV<\/span>" : i.DevStatus === 1 && (n += "<span class='intest'>TEST<\/span>"),
                '<a class="jGameInfo" data-gameidname="' + i.IdName + '" data-gamename="' + i.GameName + '" href="' + GetInvitePageURL(i.IdName) + '">' + n + "<\/a>") : n
            }
        }, {
            title: r,
            orderSequence: ["desc", "asc"],
            data: "LikeLevel",
            type: "string",
            width: "80px",
            className: "gameListLikeLevel",
            render: function(n, t, i, r) {
                var f, u, e;
                if (t == "sort")
                    return n;
                for (f = '<select data-col="' + r.col + '" class="gameListLikeLevelSelect" data-gametypeid="' + i.GameTypeId + '">',
                u = 0; u < 5; ++u)
                    e = u == n ? "selected" : "",
                    f += '<option value="' + u + '" ' + e + " >" + GetLikeLevelTextAll(u) + "<\/option>";
                return f + "<\/select>"
            }
        }, {
            title: "Trueskill",
            orderSequence: ["desc", "asc"],
            data: "Trueskill",
            className: "gameListNumber",
            searchable: !1,
            width: "60px",
            render: function(n) {
                return n < 0 ? 0 : Math.floor(n)
            }
        }, {
            title: u,
            orderSequence: ["desc", "asc"],
            data: "NumPlayed",
            width: "62px",
            className: "gameListNumber",
            searchable: !1
        }, {
            title: f,
            orderSequence: ["asc", "desc"],
            data: "Authors",
            width: "185px",
            searchable: !1,
            render: function(n) {
                return GetNamesList(n)
            }
        }, {
            title: e,
            orderSequence: ["asc", "desc"],
            data: "PublishDateMillis",
            width: "80px",
            className: "gameListDate",
            searchable: !1,
            render: function(n, t) {
                return t !== "display" ? n : new Date(n).toLocaleDateString()
            }
        }]
    });
    $("#GamesListTable").on("click", ".ui-icon", ToggleExpansion);
    $("#GamesListTable").on("change", ".gameListLikeLevelSelect", function(n) {
        var i;
        ServiceSetGameLike($(n.currentTarget).attr("data-gametypeid"), this.value);
        var r = $(this).closest("tr")
          , t = $("#GamesListTable").DataTable()
          , u = t.cell(r, 2);
        u.data(this.value);
        i = t.order();
        i[0][0] == 2 && (t.order([1, "asc"]),
        t.draw(),
        t.order(i[0]),
        t.draw())
    });
    $("input[name='filterboxes']").bind("change", function() {
        t.draw()
    });
    $("select[name='playerCount']").bind("change", function() {
        t.rows().invalidate();
        t.draw()
    })
}
function UpdateDonations(n) {
    ServiceGetDonationHistory(n, RenderDonationHistory)
}
function RenderDonationHistory(n) {
    var t = "Yucata.de ist eine komplett kostenlose Spielplattform und das ist gut so. Beim Betrieb entstehen aber trotzdem signifikante Kosten. Falls Du zur Finanzierung von Yucata beitragen möchtest, findest Du <a href='" + BaseUrlWithLang + "Donations'>hier<\/a> mehr Informationen."
      , i = "Alle"
      , r = "Summe"
      , u = "Datum";
    UserLang == "1" && (t = "Yucata.de is free to use and that's a great idea! But still it takes significant resources to host this service. If you want to contribute to the maintenance cost, you'll find some further information <a href='" + BaseUrlWithLang + "Donations'>here<\/a>.",
    i = "All",
    r = "Amount",
    u = "Date");
    $("#tblDonationHistory").html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="tblDonationHistoryTable"><\/table>');
    $("#tblDonationHistoryTable").DataTable({
        searching: !1,
        pagingType: "full_numbers",
        info: !0,
        language: GetDataTablesTranslation(t),
        ordering: !1,
        autoWidth: !1,
        stateSave: !1,
        dom: '<"top"flp>rt<"bottom"ip><"clear">',
        pageLength: 10,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, i]],
        data: n.d,
        columns: [{
            title: u,
            data: "DonationDateString"
        }, {
            title: r,
            data: "Amount"
        }]
    })
}
function SetTimeoutForSentInvitations() {
    var n = 240;
    IsIdleUser(UserID) && (n *= 10);
    updateSentInvitationsTimeout = setTimeout(UpdateSentInvitations, n * 1e3)
}
function SetTimeoutForReceivedInvitations() {
    var n = 60;
    IsIdleUser(UserID) && (n *= 10);
    updateReceivedInvitationsTimeout = setTimeout(UpdateReceivedInvitations, n * 1e3)
}
function SetTimeoutForPersonalInvitations() {}
function SetTimeoutForUpdateMessages() {}
function SetTimeoutForGetCurrentGames() {}
function SetTimeoutForGetLiveGames() {}
function SetTimeoutForGetRecentlyFinishedGames() {}
var y$ = {
    tinymce: {}
}, ol_border = 1, ol_fgcolor = "#71A1E1", ol_bgcolor = "#00305E", ol_textcolor = "#000000", ol_textsize = "10pt", ol_capcolor, ol_closecolor, ol_textfont, ol_captionfont, ol_closefont, ol_captionsize, ol_closesize, ol_width, ol_cellpad, ol_offsetx, ol_offsety, ol_text, ol_cap, ol_sticky, ol_background, ol_close, ol_hpos, ol_status, ol_autostatus, ol_height, ol_snapx, ol_snapy, ol_fixx, ol_fixy, ol_relx, ol_rely, ol_fgbackground, ol_bgbackground, ol_padxl, ol_padxr, ol_padyt, ol_padyb, ol_fullhtml, ol_vpos, ol_aboveheight, ol_capicon, ol_frame, ol_timeout, ol_function, ol_delay, ol_hauto, ol_vauto, ol_closeclick, ol_wrap, ol_followmouse, ol_mouseoff, ol_closetitle, ol_compatmode, ol_css, ol_fgclass, ol_bgclass, ol_textfontclass, ol_captionfontclass, ol_closefontclass, ol_texts, ol_caps, oW, oH, agent, versNum, capExtent, olShowId, olCheckMouseCapture, _invitationRecordMapping, gameOnTurnID, currentGamesData, gamelikeData, currentGamesTable, playerTrueSkills, quarantinedGamesData, latestChatMessageReceived, latestChatMessageRead, chatContainer, chatTableName, currentBuddies, buddyListDisplayState, buddyListUpdatedEvent, gettingRecentlyFinishedGames, currentRecentlyFinishedGameData, recentlyFinishedGamesTable, expandedRecentlyFinishedGamesDetails;
$(document).ready(function() {
    function n() {
        function i(n) {
            return n < 10 ? "0" + n : n
        }
        var n = new Date(aYucataServerTimeStart[0],aYucataServerTimeStart[1] - 1,aYucataServerTimeStart[2],aYucataServerTimeStart[3],aYucataServerTimeStart[4],aYucataServerTimeStart[5])
          , r = new Date - t;
        n.setMilliseconds(r);
        document.getElementById("yucataServerTime").firstChild.nodeValue = n.getFullYear() + "-" + i(n.getMonth() + 1) + "-" + i(n.getDate()) + ", " + i(n.getHours()) + ":" + i(n.getMinutes())
    }
    $("#master-tl").click(function() {
        window.location = BaseUrlWithLang
    });
    $(document).on("mouseover mouseout", ".jPlayerInfo", function(n) {
        var t;
        if (n.type == "mouseover") {
            var r = $(this).attr("class").split(" ")
              , i = 0
              , u = 0;
            for (t = 0; t < r.length; t++)
                r[t].substring(0, 9) == "jPlayerID" && (i = r[t].substring(9));
            $(this).hasClass("jModeratorAction") && (u = 1);
            i > 0 ? u > 0 ? InitShowPlayerContextMenuChat(i) : InitShowPlayerContextMenu(i) : nd()
        } else
            nd();
        return !1
    });
    $(document).on("mouseover mouseout", ".jGameInfo", function(n) {
        if (n.type == "mouseover") {
            var r = $(this).attr("class").split(" ")
              , i = $(this).attr("data-gamename")
              , t = $(this).attr("data-gameidname")
              , i = $(this).attr("data-gamename");
            typeof t != "undefined" ? InitShowGameContextMenu({
                gameName: i,
                gameIDName: t
            }) : nd()
        } else
            nd();
        return !1
    });
    try {
        $("ul.sf-menu").superfish()
    } catch (i) {}
    var t = new Date
      , r = t.getTime();
    n();
    setTimeout(function() {
        n();
        setInterval(n, 6e4)
    }, (60 - t.getSeconds()) * 1e3);
    $(".watermarkclass").each(function() {
        try {
            $(this).watermark($(this).attr("title"))
        } catch (n) {}
    })
});
var olLoaded = 0
  , pmStart = 1e7
  , pmUpper = 10001e3
  , pmCount = pmStart + 1
  , pmt = ""
  , pms = []
  , olInfo = new Info("4.22",0)
  , FREPLACE = 0
  , FBEFORE = 1
  , FAFTER = 2
  , FALTERNATE = 3
  , FCHAIN = 4
  , olHideForm = 0
  , olHautoFlag = 0
  , olVautoFlag = 0
  , hookPts = []
  , postParse = []
  , cmdLine = []
  , runTime = [];
registerCommands("donothing,inarray,caparray,sticky,background,noclose,caption,left,right,center,offsetx,offsety,fgcolor,bgcolor,textcolor,capcolor,closecolor,width,border,cellpad,status,autostatus,autostatuscap,height,closetext,snapx,snapy,fixx,fixy,relx,rely,fgbackground,bgbackground,padx,pady,fullhtml,above,below,capicon,textfont,captionfont,closefont,textsize,captionsize,closesize,timeout,function,delay,hauto,vauto,closeclick,wrap,followmouse,mouseoff,closetitle,cssoff,compatmode,cssclass,fgclass,bgclass,textfontclass,captionfontclass,closefontclass");
typeof ol_fgcolor == "undefined" && (ol_fgcolor = "#CCCCFF");
typeof ol_bgcolor == "undefined" && (ol_bgcolor = "#333399");
typeof ol_textcolor == "undefined" && (ol_textcolor = "#000000");
typeof ol_capcolor == "undefined" && (ol_capcolor = "#FFFFFF");
typeof ol_closecolor == "undefined" && (ol_closecolor = "#9999FF");
typeof ol_textfont == "undefined" && (ol_textfont = "Verdana,Arial,Helvetica");
typeof ol_captionfont == "undefined" && (ol_captionfont = "Verdana,Arial,Helvetica");
typeof ol_closefont == "undefined" && (ol_closefont = "Verdana,Arial,Helvetica");
typeof ol_textsize == "undefined" && (ol_textsize = "1");
typeof ol_captionsize == "undefined" && (ol_captionsize = "1");
typeof ol_closesize == "undefined" && (ol_closesize = "1");
typeof ol_width == "undefined" && (ol_width = "200");
typeof ol_border == "undefined" && (ol_border = "1");
typeof ol_cellpad == "undefined" && (ol_cellpad = 2);
typeof ol_offsetx == "undefined" && (ol_offsetx = 10);
typeof ol_offsety == "undefined" && (ol_offsety = 10);
typeof ol_text == "undefined" && (ol_text = "Default Text");
typeof ol_cap == "undefined" && (ol_cap = "");
typeof ol_sticky == "undefined" && (ol_sticky = 0);
typeof ol_background == "undefined" && (ol_background = "");
typeof ol_close == "undefined" && (ol_close = "Close");
typeof ol_hpos == "undefined" && (ol_hpos = RIGHT);
typeof ol_status == "undefined" && (ol_status = "");
typeof ol_autostatus == "undefined" && (ol_autostatus = 0);
typeof ol_height == "undefined" && (ol_height = -1);
typeof ol_snapx == "undefined" && (ol_snapx = 0);
typeof ol_snapy == "undefined" && (ol_snapy = 0);
typeof ol_fixx == "undefined" && (ol_fixx = -1);
typeof ol_fixy == "undefined" && (ol_fixy = -1);
typeof ol_relx == "undefined" && (ol_relx = null);
typeof ol_rely == "undefined" && (ol_rely = null);
typeof ol_fgbackground == "undefined" && (ol_fgbackground = "");
typeof ol_bgbackground == "undefined" && (ol_bgbackground = "");
typeof ol_padxl == "undefined" && (ol_padxl = 1);
typeof ol_padxr == "undefined" && (ol_padxr = 1);
typeof ol_padyt == "undefined" && (ol_padyt = 1);
typeof ol_padyb == "undefined" && (ol_padyb = 1);
typeof ol_fullhtml == "undefined" && (ol_fullhtml = 0);
typeof ol_vpos == "undefined" && (ol_vpos = BELOW);
typeof ol_aboveheight == "undefined" && (ol_aboveheight = 0);
typeof ol_capicon == "undefined" && (ol_capicon = "");
typeof ol_frame == "undefined" && (ol_frame = self);
typeof ol_timeout == "undefined" && (ol_timeout = 0);
typeof ol_function == "undefined" && (ol_function = null);
typeof ol_delay == "undefined" && (ol_delay = 0);
typeof ol_hauto == "undefined" && (ol_hauto = 0);
typeof ol_vauto == "undefined" && (ol_vauto = 0);
typeof ol_closeclick == "undefined" && (ol_closeclick = 0);
typeof ol_wrap == "undefined" && (ol_wrap = 0);
typeof ol_followmouse == "undefined" && (ol_followmouse = 1);
typeof ol_mouseoff == "undefined" && (ol_mouseoff = 0);
typeof ol_closetitle == "undefined" && (ol_closetitle = "Close");
typeof ol_compatmode == "undefined" && (ol_compatmode = 0);
typeof ol_css == "undefined" && (ol_css = CSSOFF);
typeof ol_fgclass == "undefined" && (ol_fgclass = "");
typeof ol_bgclass == "undefined" && (ol_bgclass = "");
typeof ol_textfontclass == "undefined" && (ol_textfontclass = "");
typeof ol_captionfontclass == "undefined" && (ol_captionfontclass = "");
typeof ol_closefontclass == "undefined" && (ol_closefontclass = "");
typeof ol_texts == "undefined" && (ol_texts = ["Text 0", "Text 1"]);
typeof ol_caps == "undefined" && (ol_caps = ["Caption 0", "Caption 1"]);
var o3_text = "", o3_cap = "", o3_sticky = 0, o3_background = "", o3_close = "Close", o3_hpos = RIGHT, o3_offsetx = 2, o3_offsety = 2, o3_fgcolor = "", o3_bgcolor = "", o3_textcolor = "", o3_capcolor = "", o3_closecolor = "", o3_width = 100, o3_border = 1, o3_cellpad = 2, o3_status = "", o3_autostatus = 0, o3_height = -1, o3_snapx = 0, o3_snapy = 0, o3_fixx = -1, o3_fixy = -1, o3_relx = null, o3_rely = null, o3_fgbackground = "", o3_bgbackground = "", o3_padxl = 0, o3_padxr = 0, o3_padyt = 0, o3_padyb = 0, o3_fullhtml = 0, o3_vpos = BELOW, o3_aboveheight = 0, o3_capicon = "", o3_textfont = "Verdana,Arial,Helvetica", o3_captionfont = "Verdana,Arial,Helvetica", o3_closefont = "Verdana,Arial,Helvetica", o3_textsize = "1", o3_captionsize = "1", o3_closesize = "1", o3_frame = self, o3_timeout = 0, o3_timerid = 0, o3_allowmove = 0, o3_function = null, o3_delay = 0, o3_delayid = 0, o3_hauto = 0, o3_vauto = 0, o3_closeclick = 0, o3_wrap = 0, o3_followmouse = 1, o3_mouseoff = 0, o3_closetitle = "", o3_compatmode = 0, o3_css = CSSOFF, o3_fgclass = "", o3_bgclass = "", o3_textfontclass = "", o3_captionfontclass = "", o3_closefontclass = "", o3_x = 0, o3_y = 0, o3_showingsticky = 0, o3_removecounter = 0, over = null, fnRef, hoveringSwitch = !1, olHideDelay, isMac = navigator.userAgent.indexOf("Mac") != -1, olOp = navigator.userAgent.toLowerCase().indexOf("opera") > -1 && document.createTextNode, olNs4 = navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 4, olNs6 = document.getElementById ? !0 : !1, olKq = olNs6 && /konqueror/i.test(navigator.userAgent), olIe4 = document.all ? !0 : !1, olIe5 = !1, olIe55 = !1, docRoot = "document.body";
olNs4 && (oW = window.innerWidth,
oH = window.innerHeight,
window.onresize = function() {
    (oW != window.innerWidth || oH != window.innerHeight) && location.reload()
}
);
olIe4 && (agent = navigator.userAgent,
/MSIE/.test(agent) && (versNum = parseFloat(agent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/i)[1]),
versNum >= 5 && (olIe5 = !0,
olIe55 = versNum >= 5.5 && !olOp ? !0 : !1,
olNs6 && (olNs6 = !1))),
olNs6 && (olIe4 = !1));
document.compatMode && document.compatMode == "CSS1Compat" && (docRoot = olIe4 && !olOp ? "document.documentElement" : docRoot);
window.addEventListener ? window.addEventListener("load", OLonLoad_handler, !1) : window.attachEvent && window.attachEvent("onload", OLonLoad_handler);
olShowId = -1;
registerHook("ol_content_simple", ol_content_simple, FALTERNATE, CSSOFF);
registerHook("ol_content_caption", ol_content_caption, FALTERNATE, CSSOFF);
registerHook("ol_content_background", ol_content_background, FALTERNATE, CSSOFF);
registerHook("ol_content_simple", ol_content_simple, FALTERNATE, CSSCLASS);
registerHook("ol_content_caption", ol_content_caption, FALTERNATE, CSSCLASS);
registerHook("ol_content_background", ol_content_background, FALTERNATE, CSSCLASS);
registerPostParseFunction(checkPositionFlags);
registerHook("hideObject", nbspCleanup, FAFTER);
registerHook("horizontalPlacement", horizontalPlacement, FCHAIN);
registerHook("verticalPlacement", verticalPlacement, FCHAIN);
(olNs4 || olIe5 && isMac || olKq) && (olLoaded = 1);
registerNoParameterCommands("sticky,autostatus,autostatuscap,fullhtml,hauto,vauto,closeclick,wrap,followmouse,mouseoff,compatmode");
olCheckMouseCapture = !0;
olNs4 || olNs6 || olIe4 ? olMouseCapture() : (overlib = no_overlib,
nd = no_overlib,
ver3fix = !0);
!function(n) {
    n(["jquery"], function(n) {
        return function() {
            function v(n, t, r) {
                return u({
                    type: f.error,
                    iconClass: i().iconClasses.error,
                    message: n,
                    optionsOverride: r,
                    title: t
                })
            }
            function r(r, u) {
                return r || (r = i()),
                t = n("#" + r.containerId),
                t.length ? t : (u && (t = nt(r)),
                t)
            }
            function y(n, t, r) {
                return u({
                    type: f.info,
                    iconClass: i().iconClasses.info,
                    message: n,
                    optionsOverride: r,
                    title: t
                })
            }
            function p(n) {
                o = n
            }
            function w(n, t, r) {
                return u({
                    type: f.success,
                    iconClass: i().iconClasses.success,
                    message: n,
                    optionsOverride: r,
                    title: t
                })
            }
            function b(n, t, r) {
                return u({
                    type: f.warning,
                    iconClass: i().iconClasses.warning,
                    message: n,
                    optionsOverride: r,
                    title: t
                })
            }
            function k(n, u) {
                var f = i();
                t || r(f);
                h(n, f, u) || g(f)
            }
            function d(u) {
                var f = i();
                return t || r(f),
                u && 0 === n(":focus", u).length ? void e(u) : void (t.children().length && t.remove())
            }
            function g(i) {
                for (var u = t.children(), r = u.length - 1; r >= 0; r--)
                    h(n(u[r]), i)
            }
            function h(t, i, r) {
                var u = !(!r || !r.force) && r.force;
                return !(!t || !u && 0 !== n(":focus", t).length) && (t[i.hideMethod]({
                    duration: i.hideDuration,
                    easing: i.hideEasing,
                    complete: function() {
                        e(t)
                    }
                }),
                !0)
            }
            function nt(i) {
                return t = n("<div/>").attr("id", i.containerId).addClass(i.positionClass),
                t.appendTo(n(i.target)),
                t
            }
            function tt() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;<\/button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                }
            }
            function c(n) {
                o && o(n)
            }
            function u(u) {
                function k(n) {
                    return null == n && (n = ""),
                    n.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }
                function nt() {
                    ut();
                    et();
                    ot();
                    st();
                    ht();
                    ct();
                    ft();
                    tt()
                }
                function tt() {
                    var n = "";
                    switch (u.iconClass) {
                    case "toast-success":
                    case "toast-info":
                        n = "polite";
                        break;
                    default:
                        n = "assertive"
                    }
                    o.attr("aria-live", n)
                }
                function it() {
                    f.closeOnHover && o.hover(vt, at);
                    !f.onclick && f.tapToDismiss && o.click(v);
                    f.closeButton && p && p.click(function(n) {
                        n.stopPropagation ? n.stopPropagation() : void 0 !== n.cancelBubble && n.cancelBubble !== !0 && (n.cancelBubble = !0);
                        f.onCloseClick && f.onCloseClick(n);
                        v(!0)
                    });
                    f.onclick && o.click(function(n) {
                        f.onclick(n);
                        v()
                    })
                }
                function rt() {
                    o.hide();
                    o[f.showMethod]({
                        duration: f.showDuration,
                        easing: f.showEasing,
                        complete: f.onShown
                    });
                    f.timeOut > 0 && (y = setTimeout(v, f.timeOut),
                    h.maxHideTime = parseFloat(f.timeOut),
                    h.hideEta = (new Date).getTime() + h.maxHideTime,
                    f.progressBar && (h.intervalId = setInterval(yt, 10)))
                }
                function ut() {
                    u.iconClass && o.addClass(f.toastClass).addClass(w)
                }
                function ft() {
                    f.newestOnTop ? t.prepend(o) : t.append(o)
                }
                function et() {
                    if (u.title) {
                        var n = u.title;
                        f.escapeHtml && (n = k(u.title));
                        d.append(n).addClass(f.titleClass);
                        o.append(d)
                    }
                }
                function ot() {
                    if (u.message) {
                        var n = u.message;
                        f.escapeHtml && (n = k(u.message));
                        g.append(n).addClass(f.messageClass);
                        o.append(g)
                    }
                }
                function st() {
                    f.closeButton && (p.addClass(f.closeClass).attr("role", "button"),
                    o.prepend(p))
                }
                function ht() {
                    f.progressBar && (b.addClass(f.progressClass),
                    o.prepend(b))
                }
                function ct() {
                    f.rtl && o.addClass("rtl")
                }
                function lt(n, t) {
                    if (n.preventDuplicates) {
                        if (t.message === s)
                            return !0;
                        s = t.message
                    }
                    return !1
                }
                function v(t) {
                    var i = t && f.closeMethod !== !1 ? f.closeMethod : f.hideMethod
                      , r = t && f.closeDuration !== !1 ? f.closeDuration : f.hideDuration
                      , u = t && f.closeEasing !== !1 ? f.closeEasing : f.hideEasing;
                    if (!n(":focus", o).length || t)
                        return clearTimeout(h.intervalId),
                        o[i]({
                            duration: r,
                            easing: u,
                            complete: function() {
                                e(o);
                                clearTimeout(y);
                                f.onHidden && "hidden" !== a.state && f.onHidden();
                                a.state = "hidden";
                                a.endTime = new Date;
                                c(a)
                            }
                        })
                }
                function at() {
                    (f.timeOut > 0 || f.extendedTimeOut > 0) && (y = setTimeout(v, f.extendedTimeOut),
                    h.maxHideTime = parseFloat(f.extendedTimeOut),
                    h.hideEta = (new Date).getTime() + h.maxHideTime)
                }
                function vt() {
                    clearTimeout(y);
                    h.hideEta = 0;
                    o.stop(!0, !0)[f.showMethod]({
                        duration: f.showDuration,
                        easing: f.showEasing
                    })
                }
                function yt() {
                    var n = (h.hideEta - (new Date).getTime()) / h.maxHideTime * 100;
                    b.width(n + "%")
                }
                var f = i()
                  , w = u.iconClass || f.iconClass;
                if ("undefined" != typeof u.optionsOverride && (f = n.extend(f, u.optionsOverride),
                w = u.optionsOverride.iconClass || w),
                !lt(f, u)) {
                    l++;
                    t = r(f, !0);
                    var y = null
                      , o = n("<div/>")
                      , d = n("<div/>")
                      , g = n("<div/>")
                      , b = n("<div/>")
                      , p = n(f.closeHtml)
                      , h = {
                        intervalId: null,
                        hideEta: null,
                        maxHideTime: null
                    }
                      , a = {
                        toastId: l,
                        state: "visible",
                        startTime: new Date,
                        options: f,
                        map: u
                    };
                    return nt(),
                    rt(),
                    it(),
                    c(a),
                    f.debug && console && console.log(a),
                    o
                }
            }
            function i() {
                return n.extend({}, tt(), a.options)
            }
            function e(n) {
                t || (t = r());
                n.is(":visible") || (n.remove(),
                n = null,
                0 === t.children().length && (t.remove(),
                s = void 0))
            }
            var t, o, s, l = 0, f = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            }, a = {
                clear: k,
                remove: d,
                error: v,
                getContainer: r,
                info: y,
                options: {},
                subscribe: p,
                success: w,
                version: "2.1.4",
                warning: b
            };
            return a
        }()
    })
}("function" == typeof define && define.amd ? define : function(n, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
}
);
_invitationRecordMapping = {
    A: "ID",
    B: "GameTypeId",
    C: "Players",
    D: "GameName",
    E: "NumPlayers",
    F: "IsRanking",
    G: "HasReturn",
    H: "InvType",
    I: "InvitedPlayers",
    J: "UserText",
    K: "CreatorID",
    L: "CreationDate",
    M: "HasCoverImage",
    N: "CoverImagePath",
    O: "EnglishFullName",
    P: "GermanFullName",
    Q: "IsRandomGame",
    R: "IsWon",
    S: "MinLikeLevel",
    T: "InvitationOptions",
    U: "Setting",
    V: "Scenario",
    W: "SkillRequirement",
    X: "SpeedRequirement",
    Y: "CreatorMu",
    Z: "CreatorSigma",
    AA: "GameTypeName"
};
gameOnTurnID = -1;
gamelikeData = null;
toastr.options = {
    closeButton: !0,
    debug: !1,
    newestOnTop: !1,
    progressBar: !0,
    positionClass: "toast-top-right",
    preventDuplicates: !1,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "30000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};
Number.prototype.pad = function(n) {
    for (var t = String(this); t.length < (n || 2); )
        t = "0" + t;
    return t
}
,
function(n) {
    n.fn.hoverIntent = function(t, i) {
        var r = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        r = n.extend(r, i ? {
            over: t,
            out: i
        } : t);
        var u, f, e, o, s = function(n) {
            u = n.pageX;
            f = n.pageY
        }, h = function(t, i) {
            if (i.hoverIntent_t = clearTimeout(i.hoverIntent_t),
            Math.abs(e - u) + Math.abs(o - f) < r.sensitivity)
                return n(i).unbind("mousemove", s),
                i.hoverIntent_s = 1,
                r.over.apply(i, [t]);
            e = u;
            o = f;
            i.hoverIntent_t = setTimeout(function() {
                h(t, i)
            }, r.interval)
        }, l = function(n, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t),
            t.hoverIntent_s = 0,
            r.out.apply(t, [n])
        }, c = function(t) {
            for (var u = (t.type == "mouseover" ? t.fromElement : t.toElement) || t.relatedTarget, f, i; u && u != this; )
                try {
                    u = u.parentNode
                } catch (t) {
                    u = this
                }
            if (u == this)
                return !1;
            f = jQuery.extend({}, t);
            i = this;
            i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t));
            t.type == "mouseover" ? (e = f.pageX,
            o = f.pageY,
            n(i).bind("mousemove", s),
            i.hoverIntent_s != 1 && (i.hoverIntent_t = setTimeout(function() {
                h(f, i)
            }, r.interval))) : (n(i).unbind("mousemove", s),
            i.hoverIntent_s == 1 && (i.hoverIntent_t = setTimeout(function() {
                l(f, i)
            }, r.timeout)))
        };
        return this.mouseover(c).mouseout(c)
    }
}(jQuery);
$(document).ready(function() {
    InitializeSignalR()
});
$(document).ready(function() {
    var t = $(".controls_chat_ascx"), n;
    typeof t.resizable != "undefined" && t.resizable({
        handles: "s",
        minHeight: 120,
        resize: function() {
            ChatResizing()
        },
        stop: function() {
            ChatResized()
        }
    });
    n = $(".controls_chat_ascx .ui-resizable-s");
    n.addClass("ui-resizable-s-special");
    n.css("zIndex", 5);
    ShouldHideEmojis() || (document.documentElement.style.setProperty("--display_emoji", "unset"),
    document.documentElement.style.setProperty("--text_emoji", "none"));
    $("#divChat").on("mouseover", ".jDeleteableChatMessage", function() {
        return $("#aDelete" + this.id).show(),
        !1
    });
    $("#divChat").on("mouseout", ".jDeleteableChatMessage", function() {
        return $("#aDelete" + this.id).hide(),
        !1
    });
    $("#BtnClearChatSkript").click(function() {
        return RequestClearChat(),
        !1
    })
});
latestChatMessageReceived = 0;
latestChatMessageRead = 0;
String.prototype.count = function(n) {
    return (this.length - this.replace(new RegExp(n,"g"), "").length) / n.length
}
;
var onlineUserData = {}
  , _maxOnlineUserUTCSeconds = 0
  , _numUsersOnline = 0
  , _numIdleUsersOnline = 0;
$(document).ready(function() {
    UpdateOnlineUserCount();
    setInterval(UpdateOnlineUserUI, 1e4)
});
currentBuddies = null;
buddyListDisplayState = null;
try {
    buddyListUpdatedEvent = document.createEvent("Event");
    buddyListUpdatedEvent.initEvent("BuddyListUpdated", !0, !0)
} catch (e) {}
var FlairCache = []
  , LastFlairRequestID = 0
  , LastFlairRequestLogin = "";
var gettingMessages = !1
  , gettingUnreadMessages = !1
  , numMessages = 0
  , lastMessageID = 0;
gettingRecentlyFinishedGames = !1;
currentRecentlyFinishedGameData = null;
recentlyFinishedGamesTable = null;
expandedRecentlyFinishedGamesDetails = [];
var gettingSentInvitations = !1
  , gettingReceivedInvitations = !1
  , gettingPersonalInvitations = !1
  , expandedPersonalInvitations = []
  , expandedPublicInvitations = []
  , intUserID = UserID * 1
  , currentPersonalInvitations = [];
var updateSentInvitationsTimeout = null
  , updateReceivedInvitationsTimeout = null
  , updatePersonalInvitationsTimeout = null
  , updateUnreadMessagesTimeout = null
  , updateCurrentGamesTimeout = null
  , updateLiveGamesTimeout = null
  , updateRecentlyFinishedGamesTimeout = null;
y$.tinymce.configlevel = {
    forum: 0,
    blog: 1
};
y$.tinymce.initialize = function(n) {
    tinymce.init({
        selector: "#" + n,
        language: UILang,
        menubar: !1,
        statusbar: !1,
        block_unsupported_drop: !1,
        branding: !1,
        removed_menuitems: "fonts",
        plugins: "image autoresize table visualblocks lists link emoticons visualchars ",
        toolbar_sticky: !0,
        toolbar: "bold italic underline forecolor backcolor | image numlist bullist link table emoticons | indent outdent alignleft aligncenter alignright alignnone  | strikethrough superscript subscript | undo redo visualblocks visualchars",
        images_upload_handler: y$.tinymce.uploadhandler
    })
}
;
y$.tinymce.uploadhandler = function(n, t, i) {
    var r, u;
    r = new XMLHttpRequest;
    r.withCredentials = !1;
    r.open("POST", "/FileUploadHandler.yshx");
    r.onload = function() {
        if (r.status === 403) {
            i("HTTP Error: " + r.status, {
                remove: !0
            });
            return
        }
        if (r.status < 200 || r.status >= 300) {
            i("HTTP Error: " + r.status);
            return
        }
        t(r.responseText)
    }
    ;
    r.onerror = function() {
        i("Image upload failed due to a XHR Transport error. Code: " + r.status)
    }
    ;
    u = new FormData;
    u.append("file", n.blob(), n.filename());
    r.send(u)
}
