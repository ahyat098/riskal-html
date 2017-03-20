/* Related Post Box By Dihak http://www.bloggerku.com */
(function () {
    var conf = {
        homepage : 'http://www.careless-succes.ml/', // Change with your homepage url
        title: 'Related Post', // Widget Title
        post: 3, // Max post
        date: true, // Show date
        scr: 500, // Muncul jika scroll mencapai 500
        showcredit: true // Add credit link to support bloggerku.com
    };
    // Check if the base variable is exist
    if (typeof relatedbox === "object") {
        // Replace the default variable with variable value of `relatedbox` if any
        for (var i in relatedbox) {
            conf[i] = relatedbox[i];
        }
    }
    var html = '<div class="relatedshow" style="right: 0px;"><a href="#"><i class="fa fa-plus"></i></a></div><div id="related-box" style="transform: translateX(400px);"><div class="header"><h2>' + conf.title + '</h2><div class="tombol"><a href="#" class="close"><i class="fa fa-times"></i></a></div></div><div class="list">',
        label = (typeof labelArray === "object" && labelArray.length) ? '/-/' + shuffle(labelArray)[0] : "",
        current = 0,
        width = 0;
    $.ajax({
        type: "GET",
        url: conf.homepage + '/feeds/posts/summary' + label + '?max-results=' + conf.post + '&alt=json-in-script',
        async: true,
        contentType: "application/json",
        dataType: "jsonp",
        success: function (e) {
            var a = e.feed.entry;
            if (a) {
                for (var t = 0; t < a.length; t++) {
                    for (var r, l = a[t], s = 0; s < l.link.length; s++)
                        if ("alternate" == l.link[s].rel) {
                            var i = l.link[s].href;
                            break
                        }
                    r = void 0 !== l.media$thumbnail ? l.media$thumbnail.url.replace("s72-c", "w" + width + "-h400-c") : "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
                    var n = l.title.$t,
                        d = conf.date ? l.published.$t.substr(0, 10) : '';
                    html += '<div class="item"><div class="gambar"><img src="' + r + '"></div><div class="info"><h3><a href="' + i + '">' + n + '</a></h3><span>' + d + '</span></div></div>'
                }
                var credit = conf.showcredit ? '<a href="http://www.bloggerku.com" style="font-size:10px;margin-left:20px;position: absolute;bottom: 10px;">Get This Widget</a>' : ''
                html += '</div><div class="navigation"><div class="left"><a href="#"><i class="fa fa-chevron-left"></i></a></div><div class="right"><a href="#"><i class="fa fa-chevron-right"></i></a></div></div>' + credit;
            }
            $('body').append(html);
            $('#related-box').each(function () {
                var list = $(this).find('.list'),
                    left = $(this).find('.left a'),
                    right = $(this).find('.right a'),
                    width = 0,
                    current = 0,
                    tidakclose = true;
                for (var i = 1; i < $(this).find('.item').length; i++) {
                    width += $(this).find('.item').outerWidth()
                }
                list.width(width + $(this).find('.item').outerWidth());
                left.click(function (event) {
                    event.preventDefault();
                    current == 0 ? current = -width : current += 350;
                    list.css('transform', 'translateX(' + current + 'px)');
                })
                right.click(function (event) {
                    event.preventDefault();
                    current == -width ? current = 0 : current -= 350;
                    list.css('transform', 'translateX(' + current + 'px)');
                })
                function close() {
                    $('#related-box').css({
                        transform: 'translateX(400px)'
                    })
                    $('.relatedshow').css('right', 0)
                }

                function show() {
                    $('#related-box').css({
                        transform: 'translateX(0)'
                    })
                    $('.relatedshow').css('right', '-50px')
                }
                $('.relatedshow').click(function (event) {
                    event.preventDefault()
                    show()
                })
                $(this).find('.close').click(function (event) {
                    event.preventDefault()
                    close()
                    tidakclose = false
                })
                $(window).scroll(function() {
                    var scr = $(window).scrollTop()
                    if (scr > conf.scr && tidakclose) { // Jika scroll lebih dari 500 dan tombol close tidak di klik, maka show
                        show()
                    } else if (scr < conf.scr && tidakclose) { // Jika tidak maka close
                        close()
                    }
                })
            })
        }
    })
})()
