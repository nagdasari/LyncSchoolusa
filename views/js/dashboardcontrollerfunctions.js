dashboard.controller('appcontroller', function($scope,$rootScope,$http){
$http.get('/confirm').then(function(res){
console.log(res);                                             
$rootScope.songName = res.data.songName;
console.log($rootScope.songName);
});
});



dashboard.controller('coursecontroller', function($scope,$rootScope,$http){
$http.get('/getUserCourse/dashboard/').then(function(respo){
console.log("hello" + respo.data.coursename); 
$rootScope.coursename = respo.data.coursename;
$rootScope.courseimage = respo.data.courseimage;
$rootScope.course_description = respo.data.course_description;
console.log("sanju "+ $rootScope.songName );
});
});


dashboard.controller('chaptercontroller',function($scope,$rootScope,$http){
 
});