const $btn = $('#menu-btn');
const $nav = $('#menu')


$btn.click(() => {
    $btn.toggleClass('open')
    $nav.toggleClass('hidden')
    $nav.toggleClass('flex')
})

