/* Related Post Box By Kak Yayat http://kakyayat.blogspot.com */
!function(){var a={homepage:"http://http://www.careless-succes.ml/",title:"Related Post",post:5,date:!0,scr:500,showcredit:!0};if("object"==typeof relatedbox)for(var b in relatedbox)a[b]=relatedbox[b];var c='<div class="relatedshow" style="right: 0px;"><a href="#"><i class="fa fa-plus"></i></a></div><div id="related-box" style="transform: translateX(400px);"><div class="header"><h2>'+a.title+'</h2><div class="tombol"><a href="#" class="close"><i class="fa fa-times"></i></a></div></div><div class="list">',d="object"==typeof labelArray&&labelArray.length?"/-/"+shuffle(labelArray)[0]:"",f=0;$.ajax({type:"GET",url:a.homepage+"/feeds/posts/summary"+d+"?max-results="+a.post+"&alt=json-in-script",async:!0,contentType:"application/json",dataType:"jsonp",success:function(b){var d=b.feed.entry;if(d){for(var e=0;e<d.length;e++){for(var g,h=d[e],i=0;i<h.link.length;i++)if("alternate"==h.link[i].rel){var j=h.link[i].href;break}g=void 0!==h.media$thumbnail?h.media$thumbnail.url.replace("s72-c","w"+f+"-h400-c"):"http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";var k=h.title.$t,l=a.date?h.published.$t.substr(0,10):"";c+='<div class="item"><div class="gambar"><img src="'+g+'"></div><div class="info"><h3><a href="'+j+'">'+k+"</a></h3><span>"+l+"</span></div></div>"}var m=a.showcredit?'<a href="http://www.careless-succes.ml/" style="font-size:10px;margin-left:20px;position: absolute;bottom: 10px;">Get This Widget</a>':"";c+='</div><div class="navigation"><div class="left"><a href="#"><i class="fa fa-chevron-left"></i></a></div><div class="right"><a href="#"><i class="fa fa-chevron-right"></i></a></div></div>'+m}$("body").append(c),$("#related-box").each(function(){function i(){$("#related-box").css({transform:"translateX(400px)"}),$(".relatedshow").css("right",0)}function j(){$("#related-box").css({transform:"translateX(0)"}),$(".relatedshow").css("right","-50px")}for(var b=$(this).find(".list"),c=$(this).find(".left a"),d=$(this).find(".right a"),e=0,f=0,g=!0,h=1;h<$(this).find(".item").length;h++)e+=$(this).find(".item").outerWidth();b.width(e+$(this).find(".item").outerWidth()),c.click(function(a){a.preventDefault(),0==f?f=-e:f+=350,b.css("transform","translateX("+f+"px)")}),d.click(function(a){a.preventDefault(),f==-e?f=0:f-=350,b.css("transform","translateX("+f+"px)")}),$(".relatedshow").click(function(a){a.preventDefault(),j()}),$(this).find(".close").click(function(a){a.preventDefault(),i(),g=!1}),$(window).scroll(function(){var b=$(window).scrollTop();b>a.scr&&g?j():b<a.scr&&g&&i()})})}})}();
