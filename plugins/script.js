$(document).ready(function () {
    $(".js-menu").on("click", ".menu__block:not(.active)", function () {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('div.game').find('div.js-tabs').removeClass('show').eq($(this).index()).addClass('show');
    })
});