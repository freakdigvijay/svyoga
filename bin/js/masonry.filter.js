!function(n){"use strict";n.fn.masonryFilter=function(e){var i=function(i){var t=i.masonry("getAllItems"),r=[],o=[];n.each(t,function(i){var s=t[i],a=n(s.element);e.filter&&e.filter.call(a)?s.isHidden&&(s.isIgnored=!1,r.push(s)):s.isHidden||(s.isIgnored=!0,o.push(s))}),i.masonry("hide",o),i.masonry("reveal",r),function(n){setTimeout(function(){n.masonry("layout")},100)}(i)};return this.each(function(){var e=n(this);i(e)})}}(window.jQuery);