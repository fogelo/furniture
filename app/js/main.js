$(function () {
    $('.header__btn').on("click", function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
        console.log($('rightside-menu'));
    })
    $('.rightside-menu--close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    })
    $('.top__slider').slick({ dots: true, arrows: false, autoplay: true})

})