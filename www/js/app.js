// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

.config(['$cookiesProvider', function($cookiesProvider) {
    $cookiesProvider.defaults = {
      path: '/'
    };
  }])

.directive('iframeOnload', [function(){
  return {
    scope: {
        callBack: '&iframeOnload'
    },
    link: function(scope, element, attrs){
        element.on('load', function(){
            return scope.callBack();
        })
    }
}}])
.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // -------------------------------------------------- ÁREA DE LOGIN-------------------------------
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/area-trabalho-chat.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })
  .state('tab.dash-cadastrarse', {
    url: '/dash/cadastrarse',
    views: {
      'tab-dash': {
        templateUrl: 'templates/cadastrarse.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.dash-ajuda', {
      url: '/dash/ajuda',
      views: {
        'tab-dash': {
          templateUrl: 'templates/ajuda.html',
          controller: 'DashCtrl'
        }
      }
    })
  .state('tab.dash-oquee', {
      url: '/dash/oquee',
      views: {
        'tab-dash': {
          templateUrl: 'templates/oquee.html',
          controller: 'DashCtrl'
        }
      }
    })
  .state('tab.dash-loginchat', {
      url: '/dash/loginchat',
      views: {
        'tab-dash': {
          templateUrl: 'templates/loginchat.html',
          controller: 'DashCtrl'
        }
      }
    })

  .state('tab.dash-login', {
      url: '/dash/login',
      views: {
        'tab-dash': {
          templateUrl: 'templates/login.html',
          controller: 'DashCtrl'
        }
      }
    })

  // -------------------------------------------------- ÁREA DE TRABALHO-------------------------------
  .state('tab.area-trabalho', {
    url: '/areatrabalho',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.area-trabalho-mod2', {
    url: '/areatrabalho/modelo2',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-mod2.html',
        controller: 'AreaTrabalho'
      }
    }
  })
  .state('tab.area-trabalho-perfil', {
    url: '/areatrabalho/perfil',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-perfil.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.area-trabalho-perfil2', {
    url: '/areatrabalho/perfil2',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-perfil2.html',
        controller: 'AreaTrabalho'
      }
    }
  }) 
  .state('tab.area-trabalho-configuracoes', {
    url: '/areatrabalho/configuracoes',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-configuracoes.html',
        controller: 'AreaTrabalho'
      }
    }
  }) 
  .state('tab.area-trabalho-configuracoes2', {
    url: '/areatrabalho/configuracoes2',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-configuracoes2.html',
        controller: 'AreaTrabalho'
      }
    }
  }) 
  .state('tab.area-trabalho-calendario', {
    url: '/areatrabalho/calendario',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-calendario.html',
        controller: 'AreaTrabalho'
      }
    }
  }) 
  .state('tab.area-trabalho-timeline', {
    url: '/areatrabalho/timeline',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-timeline.html',
        controller: 'AreaTrabalho'
      }
    }
  }) 
  .state('tab.area-trabalho-temperatura', {
    url: '/areatrabalho/temperatura',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-temperatura.html',
        controller: 'AreaTrabalho'
      }
    }
  }) 
  .state('tab.area-trabalho-mensagens', {
    url: '/areatrabalho/mensagens',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-mensagens.html',
        controller: 'LerMensagens'
      }
    }
  })
    .state('tab.area-trabalho-receitas', {
    url: '/areatrabalho/receitas',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-receitas.html',
        controller: 'LerMensagensReceitas'
      }
    }
  }) 

    .state('tab.area-trabalho-curiosidades', {
    url: '/areatrabalho/curiosidades',
    views: {
      'tab-area-trabalho': {
        templateUrl: 'templates/area-trabalho-curiosidades.html',
        controller: 'LerMensagensCuriosidades'
      }
    }
  })  

    .state('tab.area-trabalho-chat', {
    url: '/areatrabalho/chat',
    views: {
      'tab-area-trabalho': {
          templateUrl: 'templates/area-trabalho-chat.html',
          controller: 'ChatDetailCtrl'
      }
    }
  })  
    .state('tab.area-trabalho-chat2', {
    url: '/areatrabalho/chat',
    views: {
      'tab-area-trabalho': {
          templateUrl: 'templates/area-trabalho-chat2.html',
          controller: 'ChatDetailCtrl'
      }
    }
  })  

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
