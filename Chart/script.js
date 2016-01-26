
var app = angular.module("glostar-comment-app",['chart.js']);

app.controller("myCtrl",function($scope,$interval){

     $scope.labels = ["Google", "Samsung", "Apple", "Xiamoi", "Oneplus", "Sony", "HTC","Nokia","Microsoft","Oppo"];
     $scope.series = ['Present Status of Votes', '6 hour Earlier Votes Status'];
     $scope.reportData = [5,12,60,35,58,62,20,82,75,46];
     $scope.showReport = false;
     $scope.tableData = [];
     $scope.data = [
       [65, 59, 80, 81, 56, 55, 40, 80, 81, 56],
       [81, 40, 20, 49, 16,81, 56, 55, 40, 80]
     ];

     $scope.onClick = function (points, evt) {
       console.log(points, evt);
     };


     $scope.startDancing = function(){
         $scope.inter = $interval(function(){
             for(var i=0;i<2;i++){
                 for(var j=0;j<10;j++){
                     var x =  Math.floor(Math.random()*50)+1;
                     $scope.data[i][j] = x;
                     $scope.reportData[j] =x;
                     $scope.tableData[j]={
                         brand : $scope.labels[j],
                         status: x
                     };
                     //console.log(x);
                 }
             }
         },3000);
     }
     $scope.startDancing();
     $scope.stopDancing =function(){
         $interval.cancel($scope.inter);
     }

     $scope.reportGenerate =function(){
         $scope.showReport = $scope.showReport == true?false:true;
         console.log("okay");
     }

});
