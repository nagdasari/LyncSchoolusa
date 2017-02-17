
dashboard.service('khan',function(){    
var addproduct;
    
    
});




dashboard.controller('appcontroller', function($scope,khan,$rootScope,$http){
$http.get('/confirm').then(function(res){
console.log(res);                                             
$rootScope.songName = res.data.songName;
console.log($rootScope.songName);
khan.addproduct=$rootScope.songName;
});
});


dashboard.controller('coursecontroller', function($scope,khan,$rootScope,$http){
$http.get('/getUserCourse/dashboard/').then(function(respo){
console.log("hello" + respo.data.coursename); 
$rootScope.coursename = respo.data.coursename;
$rootScope.courseimage = respo.data.courseimage;
$rootScope.course_description = respo.data.course_description;
console.log("world"+khan.addproduct.email);
$rootScope.display = khan.addproduct.email;  

});
});


dashboard.controller('chaptercontroller',function($scope,$rootScope,$http){
console.log("india");
$http.get('/getuserchapter/dashboard').then(function(res1){
    console.log("Angular response"+JSON.stringify(res1));
    $scope.teamList = res1.elements;
  //  console.log($scope.teamList.length);
////console.log("helloworld" + res1.length); 
//    console.log("inside function"+res1);
//    console.log("h" + res1.elements.chapterheading[0]);
//    for(var i=0; i<res1.length;i++){
//        console.log("heya"+res1[i].chapterheading);
//    }
//    
},function(error){
    console.log("eror" + error);
});
});
