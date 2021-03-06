window._skel_config = {
    preset: 'standard',
    prefix: '/css/style',
    resetCSS: true,
    grid: { gutters: '2.5em' },
    //breakpoints: {
    //    desktop: { range: "1001-", containers: 1200 },
    //    '1000px': { range: "481-1000", containers: 960 },
    //    mobile: { range: "-480", containers: "fluid", lockViewport: true, grid: { collapse: true} }
    //}
};

window._skel_panels_config = {
    preset: 'standard',
    useTransform: false //need to set to false because we use absolute positioned elements
};

jQuery(function () {
    jQuery('#nav > ul').dropotron({
        offsetY: -6,
        offsetX: -1,
        mode: 'fade',
        noOpenerFade: true,
        alignment: 'left',
        detach: false
    });
});

/*Google analytics*/
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-54105375-3', 'auto');
ga('send', 'pageview');
/*End of Google analytics*/