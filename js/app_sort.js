angular.module('sortApp', [])
.controller('mainController', function($scope) {
  $scope.sortType     = 'country'; // значение сортировки по умолчанию
  $scope.sortReverse  = false;  // обратная сортировка
  $scope.searchFish   = '';     // значение поиска по умолчанию
  // список
  $scope.database = [
    { country: 'Rusian', city: 'Ulyanovsk', street: 'Lenina',        home: 1, index: 432345, date: '10.04.2014, 12:21' },
    { country: 'Rusian', city: 'Ulyanovsk', street: 'Narimanova',    home: 2, index: 432453, date: '15.03.2014, 15:34'},
    { country: 'Rusian', city: 'Moskov',    street: 'Kievskii',      home: 5, index: 432111, date: '01.05.2014, 23:00'},
    { country: 'Rusian', city: 'Samara',    street: 'Volokalamskay', home: 7, index: 123123, date: '03.02.2015, 14:00'}
  ];
} )