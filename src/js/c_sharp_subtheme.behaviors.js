// (function ($, once) {
//     'use strict';
//     Drupal.behaviors.csharpSubtheme = {
//       attach: function (context) {
//         const searchIcon = $('<i />', { class: 'fas fa-search'});
//         // const menuSearchLink = $('<a>', { class: 'menu-search-link', 'href': '/search', 'aria-label': 'Go to search page' });
//         const menuSearchLink = $('<a>', { class: 'menu-search-link', 'href': '/search', 'aria-label': 'Go to search page' }).prepend(searchIcon);
//         const menuSearchLinkWrapper = $('<div>', { class: 'menu-search-wrapper' }).prepend(menuSearchLink);
//         // $('.su-multi-menu', context).append(menuSearchLink);
//         // $('#block-c-sharp-subtheme-main-navigation', context).append(menuSearchLink);
//         // $('#block-c-sharp-subtheme-main-navigation', context).after(menuSearchLink);
//         $('#block-c-sharp-subtheme-main-navigation', context).after(menuSearchLinkWrapper);
//       }
//     };
  
//   })(jQuery, once);