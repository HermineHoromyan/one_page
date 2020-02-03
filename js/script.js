$(document).ready(function(){
  if(window.innerWidth > 1600) {
    $('.nav__item').mousemove(function(){
      $('.menu-one__drop').mouseover(function(){
        $('.submenu').addClass('submenu_two');
      })
      $('.menu-one__drop').mouseout(function(){
        $('.submenu').removeClass('submenu_two');
      })
      $('.menu-two__drop').mouseover(function(){
        $('.submenu').addClass('submenu_three');
      })
      $('.menu-two__drop').mouseout(function(){
        $('.submenu').removeClass('submenu_three');
      })
      var subHeight = Math.max($('.menu-one').height(),$('.menu-two').height(),$('.menu-three').height())
      $('.submenu').css({'height': parseInt(subHeight)})
    });
    $('.nav__item').mouseover(function(){
      $(this).addClass('nav__item_active');
    });
    $('.nav__item').mouseout(function(){
      $(this).removeClass('nav__item_active');
    })
    $('.menu-one__item').mouseover(function(){
      $(this).addClass('menu-one__item_active');
    });
    $('.menu-one__item').mouseout(function(){
      $(this).removeClass('menu-one__item_active');
    })
    $('.menu-two__item').mouseover(function(){
      $(this).addClass('menu-two__item_active');
    });
    $('.menu-two__item').mouseout(function(){
      $(this).removeClass('menu-two__item_active');
    });
  }
  if(window.innerWidth < 1600) {
    $('.nav__link').click(function(){
      $(this).parent().toggleClass('nav__item_active');
    });
    $('.menu-one__link').click(function(){
      $(this).parent().toggleClass('menu-one__item_active');
    });
    $('.menu-two__link').click(function(){
      $(this).parent().toggleClass('menu-two__item_active');
    });
  }

  $('.menu-drop').click(function(){
    $('.nav-wrap').toggle();
    $(this).toggleClass('menu-drop_active');
    $('.header').toggleClass('header_menu-open');
  });

  $('.block__open-tabs').click(function(){
    $(this).parent().find('.tabs').toggle();
  });

  $('.block__edit-open').click(function(){
    $(this).parent().toggleClass('block__edit_open');
  });

  $('.section__header').click(function(){
    $(this).parent().find('.section__body').toggle();
    $(this).toggleClass('section__header_active');
  });

  $('.filter__add').click(function(){
    $('.modal-wrap').toggle();
    $('body').toggleClass('body_overflow');
  });

  $('.modal__close').click(function(){
    $('.modal-wrap').toggle();
    $('body').toggleClass('body_overflow');
  });

  $(".mCustomScrollbar").mCustomScrollbar({
    axis:"x",
    mouseWheel:{ enable: false }
  });

  $('.btn_toggle_all').click(function(e){
    e.preventDefault();
    $(this)
      .toggleClass('expanded');

    if ($(this).is('.expanded')) {
      $(this)
        .parents('.block__body')
        .find('.expandable .section__header')
        .addClass('section__header_active')
        .next('.section__body').show()
    }
    else {
      $(this)
        .parents('.block__body')
        .find('.expandable .section__header')
        .removeClass('section__header_active')
        .next('.section__body').hide()      
    }
  });


  $('.customSelect').each(function() {
    if ($(this).parents('.mCustomScrollbar').length) {
      $(this).select2({
        minimumResultsForSearch: -1
      });
    }
    else {
      $(this).chosen({
        disable_search: true
      });
    }
  })  
  
  $('.typeahead').typeahead({
    source: [
      {id: "id1", name: "Абакан"},
      {id: "id2", name: "Анапа"},
      {id: "id3", name: "Арзамас"},
      {id: "id4", name: "Армавир"}
    ]
  });
  
  // $('.datepicker').datetimepicker({
  //   format: 'DD.MM.YYYY',
  //   locale: moment.locale('ru')
  // });
  
//
//  $('input.datepicker').datetimepicker({
//    format: 'DD.MM.YYYY H:mm',
//    locale: moment.locale('ru')
//  });

});





$(document).ready(function () {

  $('.single-notification-form').on('click', function (e) {
    e.stopPropagation()

    openCatalogsOnClick(this,
        'notification-parts ',
        'needs-info',
        'change-block',
        'single-notification',
        'notification-parts-parent',
        'active-block-js'
    )
  })

  $('.needs-info-close').on('click',function (e) {
    e.stopPropagation()
    closeCatalogOnClick('notification-parts-parent',
        'notification-parts ',
        'change-block',
        'active-block-js')
  })

  $('.needs-info').on('click', function (e) {
    e.stopPropagation()
  })

  $(document).on('click', function () {

    closeCatalogOnClick('notification-parts-parent',
        'notification-parts ',
        'change-block',
        'active-block-js')

  });

  function  openCatalogsOnClick($this, parent_block, hidden_block, active_class, this_parent, main_parent,active_block) {

    let main_container = $('.'+main_parent);
    $(main_container).addClass(active_class);

    let qurent_parent = $($this).parent('.'+this_parent);

    let this_parent_block = $('.'+parent_block).children();
    $(this_parent_block).each(function () {
      if($(this).hasClass(active_block)){
        $(this).removeClass(active_block)
      }
    })
    $(qurent_parent).addClass(active_block)
  }

  function closeCatalogOnClick(main_parent, parent_block,active_class,active_block) {
    let main_parent_block = $('.'+main_parent);
    if($(main_parent_block).hasClass(active_class)){
      $(main_parent_block).removeClass(active_class);
    }
    let parent_components = $('.'+parent_block).children();
    $(parent_components).each(function () {
      if($(this).hasClass(active_block)){
        $(this).removeClass(active_block);
      };
    })
  }
})

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {
      el: this.el,
      multiple: this.multiple
    }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.my-submenu').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('#my-accordion'), false);
});

