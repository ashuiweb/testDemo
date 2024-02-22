$(function () {
  app.init()
})

const app = {
  init: function () {
    this.sideToggle()
    this.resizeIframe()
  },
  resizeIframe: () => {
    $('#main').height($(window).height() - 80)
  },
  sideToggle: () => {
    $('.aside h4').click(function () {
      $(this).siblings('ul').slideToggle()
    })
  },
}

window.onresize = app.resizeIframe
