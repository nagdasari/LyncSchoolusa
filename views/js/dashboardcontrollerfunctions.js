
dashboard.service('khan',function(){    
var addproduct;
var courseName;
    
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
khan.courseName = respo.data.coursename;
console.log("world"+khan.addproduct.email);
$rootScope.display = khan.addproduct.email;  

});
});


dashboard.controller('chaptercontroller',function($scope,khan,$rootScope,$http){
console.log("india");
var teamList=[];
$http.get('/getuserchapter/dashboard').then(function(res1){
console.log("Angular response"+JSON.stringify(res1));
$rootScope.cname = khan.courseName;  
$rootScope.sanjeevini = res1.data;
console.log($rootScope.sanjeevini)  ;
},function(error){
console.log("eror" + error);
});
});


dashboard.controller('videocontroller',function($scope,$rootScope,$http,$routeParams){
console.log("helo");
console.log("in video controller "+ $routeParams.videocode);
$scope.videotoken = $routeParams.videocode;
var jsondata = $scope.videotoken;    
 $http.post('/videocontent/dashboard', jsondata);

});