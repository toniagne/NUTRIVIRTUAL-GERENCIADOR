angular.module('starter.controllers', ['ngCookies', "ngSanitize"])

.controller('DashCtrl',  function($scope, $http, $ionicPopup, $ionicLoading, $location, $state, $cookieStore) {
 $scope.dadosUser = $cookieStore.get('dadosUser');

$scope.options = {
  loop: false,
  effect: 'fade',
  speed: 500,
}
 

 $scope.submit = function(contactform, formData) {
  $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });



  var url = 'http://www.nutrivirtual.com.br/aplicativo/login/?callback=JSON_CALLBACK&user='+formData['usuario']+'&pass='+formData['senha'];
  $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'SUA SENHA OU LOGIN NÃO ESTAO CORRETOS, CONFIRA E TENTE NOVAMENTE'
                         });
                      } else {   
                         $cookieStore.put('dadosUser', data);
                        $state.go('tab.area-trabalho');
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });

                  }); 
 } 


  $scope.loginchat = function(contactform, formData) {
                  $ionicLoading.show({
                          content: 'Carregando USUÁRIO',
                          animation: 'fade-in',
                          showBackdrop: true,
                          maxWidth: 200,
                          showDelay: 0
                        });

                  var url = 'http://www.nutrivirtual.com.br/aplicativo/loginchat/?callback=JSON_CALLBACK&user='+formData['email'];
                   $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'SEU E-MAIL ESTA ERRADO ! OU VOCÊ AINDA NÃO ESTA CADASTRADO'
                         });
                      } else {   
                         $cookieStore.put('dadosUser', data);
                         $state.go('tab.area-trabalho-chat2');
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });

                  }); 
 } 

  $scope.alterarsenha = function(contactform, formData) {
                  $ionicLoading.show({
                          content: 'Carregando USUÁRIO',
                          animation: 'fade-in',
                          showBackdrop: true,
                          maxWidth: 200,
                          showDelay: 0
                        });
                  var dadosusuario = $cookieStore.get('dadosUser'); 
                  var url = 'http://www.nutrivirtual.com.br/aplicativo/alterarsenha/?callback=JSON_CALLBACK&id='+dadosusuario[0].id+'&pass='+formData['senha'];
                   $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'SEU E-MAIL ESTA ERRADO ! OU VOCÊ AINDA NÃO ESTA CADASTRADO'
                         });
                      } else {   
                          return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'SUA SENHA FOI ALTERADA COM SUCESSO !!   '
                         });
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'SUA SENHA FOI ALTERADA COM SUCESSO !! '
                     });

                  }); 
 } 


  $scope.cadastrarse = function(contactform, formData) {
  $ionicLoading.show({
            content: 'Cadastrando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });



  var url = 'http://www.nutrivirtual.com.br/aplicativo/cadastro/?callback=JSON_CALLBACK&nome='+formData['nome']+'&estado='+formData['estado']+'&cidade='+formData['cidade']+'&email='+formData['email']+'&telefone='+formData['telefone'];
  $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'VOCÊ DEVE PREENCHER TODOS OS CAMPOS CORRETAMENTE'
                         });
                      } else {   
                        $state.go('tab.area-trabalho-chat');
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'PARABÉNS ! VOCÊ ENVIOU O SEU CADASTRO PARA O NOSSO ATENDIMENTO. EM BREVE ENTRAREMOS EM CONTATO'
                         });
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'SEU DISPOSITIVO NÃO ESTA CONECTADO NA INTERNET.'
                     });

                  }); 
 } 

  $scope.lembrarsenha = function(contactform, formData) {
  $ionicLoading.show({
            content: 'Cadastrando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });



  var url = 'http://www.nutrivirtual.com.br/aplicativo/lembrarsenha/?callback=JSON_CALLBACK&email='+formData['email'];
  $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'VOCÊ DIGITOU INCORRETAMENTE O SEU E-MAIL, OU VOCÊ AINDA NÃO TEM CADASTRO. APROVEITE E CADASTRE-SE AGORA'
                         });
                      } else {   
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'ENVIAMOS PARA O SEU E-MAIL A SENHA E O LOGIN PARA ACESSAR SUA CONTA.'
                         });
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'SEU DISPOSITIVO NÃO ESTA CONECTADO NA INTERNET.'
                     });

                  }); 
 } 

 var urldica = 'http://www.nutrivirtual.com.br/aplicativo/dicadodia/?callback=JSON_CALLBACK';
  $http.jsonp(urldica).success(function(data) {
                       $ionicLoading.hide();  
                       $scope.dicadia = data;


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });

                  });

 
})

.controller('AreaTrabalho', function($scope, $cookieStore) {
  $scope.dadosUser = $cookieStore.get('dadosUser');

   
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  
  $scope.labels2 = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data2 = [300, 500, 100];

 $scope.labels3 =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
 $scope.data3 = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];


  function dataHoje() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [dia, mes, ano].join('/');
 }

 $scope.datahoje = dataHoje();

})

.controller('ChatsCtrl', function($scope, Chats, $ionicLoading) {
 

  
 


  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicLoading, $cookieStore) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.dadosUser = $cookieStore.get('dadosUser');
  $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });

 
  $scope.iframeUrl = '';
  ionic.Platform.ready(function(){
    $scope.iframeUrl = 'http://www.nutrivirtual.com.br/chat/atendimento-app.php';
  });
  $scope.iframeLoadedCallBack = function(){
    $ionicLoading.hide();
  }

})

.controller('LerMensagens',  function($scope, $http, $ionicPopup, $ionicLoading, $location, $state, $cookieStore) {
    $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });


   var url = 'http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=1';
  
 $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'ERRO INTERNO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE'
                         });
                      } else {   
                         //$cookieStore.put('dadosUser', data);
                        //$state.go('tab.area-trabalho');

                        console.log(data);
                        $scope.mensagens = data;
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });

                  });
})

.controller('LerMensagensReceitas',  function($scope, $http, $ionicPopup, $ionicLoading, $location, $state, $cookieStore) {
    $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });


   var url = 'http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=2';
  
 $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'ERRO INTERNO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE'
                         });
                      } else {   
                         //$cookieStore.put('dadosUser', data);
                        //$state.go('tab.area-trabalho');

                        //console.log(data);
                        $scope.mensagens = data;
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'VOCÊ AINDA NÃO POSSUI POSTS NESSA CATEGORIA'
                     });

                  });
})

.controller('LerMensagensCuriosidades',  function($scope, $http, $ionicPopup, $ionicLoading, $location, $state, $cookieStore) {
    $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });


   var url = 'http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=3';
  
 $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'ERRO INTERNO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE'
                         });
                      } else {   
                         //$cookieStore.put('dadosUser', data);
                        //$state.go('tab.area-trabalho');

                        console.log(data);
                        $scope.mensagens = data;
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'VOCÊ AINDA NÃO POSSUI POSTS NESSA CATEGORIA'
                     });

                  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
