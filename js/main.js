$(function () {
    //objeveni odkazu
    var odkazy = $('#odkazy ul');
    odkazyUslechtileRyby.forEach(function (obj) {
        odkazy.append('<li><a href="' + obj.link + '" target="_blank">'
            + obj.name + '</a></li>');
    });
    //clanky
    $('#clanky p').hide();
    $('#clanky h4').on('click', function () {
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({ 'background-color': '#006633' });
        } else {
            $(this).css({ 'background-color': '#006633' });
        }
        $(this).nextUntil('h4').toggle(500);
    });

    //pokus o kviz
    var kviz = $('#kviz div.row');
    druhyRyb.forEach(function (obj, idx) {
        kviz.append('<div class="col-sm-4"><figure id="' + idx + '"><img src="img/ryba0.png" width="300" height="200" alt="ryba"><figcaption>'
            + obj.name + '</figcaption></figure></div>');
    });

    //meneni fotek
    var photo = $('#kviz img');
    photo.on('click', function () {
        var index = Math.floor(Math.random() * druhyRyb.length);
        $(this).attr('src', 'img/' + druhyRyb[index].photo)
            .attr('alt', druhyRyb[index].name);
    });

    //kontrola
    var check = $('#kviz .btn-success');
    check.on('click', function () {
        $('#kviz figure').each(function (idx, obj) {
            var figcaption = $(obj).find('figcaption').text();
            var alt = $(obj).find('img').attr('alt');
            if (figcaption == alt) {
                $(obj).find('img').css({ 'border': '5px solid green' });
            } else {
                $(obj).find('img').css({ 'border': '5px solid red' });
            }
        });
    });

})