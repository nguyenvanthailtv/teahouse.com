function backTop () {
  const btnBackTop = document.querySelector('.back-top')
  window.onscroll = () => {
    if (document.documentElement.scrollTop && document.documentElement.scrollTop > 400) {
      btnBackTop.classList.add('show')
    } else {
      btnBackTop.classList.remove('show')
    }
  }
  btnBackTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
  })
}
window.onload = () => {
  const menuBtn = document.getElementById('menu-mobile__btn')
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      const mobileMenuWrap = document.querySelector('.menu-mobile-wrap')
      const mobileMenu = document.querySelector('.menu-mobile')
      mobileMenuWrap.style.transform = 'translateX(0)'
      mobileMenu.classList.add('active')
      document.body.classList.add('overflow-hidden')

      mobileMenuWrap.addEventListener('click', function () {
        setTimeout(() => {
          this.style.transform = 'translateX(-100%)'
          document.body.classList.remove('overflow-hidden')
        }, 300)
        mobileMenu.classList.remove('active')
      })
      mobileMenu.addEventListener('click', function (e) {
        e.stopPropagation()
      })

      const listMobileMenu = document.querySelectorAll('.menu-mobile-item, .menu-mobile-item-product')
      listMobileMenu.forEach((item) => {
        item.addEventListener('click', function () {
        //   setTimeout(() => {
        //     mobileMenuWrap.style.transform = 'translateX(-100%)'
        //   }, 300)
          mobileMenuWrap.style.transform = 'translateX(-100%)'
          mobileMenu.classList.remove('active')
          document.body.classList.remove('overflow-hidden')
        })
      })

      const itemProductBtn = document.querySelector('.menu-mobile-item-product__btn')
      itemProductBtn.addEventListener('click', function (e) {
        e.stopPropagation()
      })
    })
  }

  backTop()
}
