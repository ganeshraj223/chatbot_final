var chatBot = angular.module('chatBot',['ngAnimate','ngMaterial']);

chatBot.controller('chatBotCtrl', function($scope) {
	console.log("HELLO FROM THE OTHER SIDE");
	$scope.preview=false;
	$scope.header_width1 = 0, $scope.header_height1 = 0, $scope.body_width1 =0, $scope.body_height1 = 0;
	$scope.footer_width1= 0,$scope.footer_height1= 0;
	$scope.messages = {}
	var message_data = {
		greeting : "Hello do you need a banner?",
		start : "Ok,tell me the specifications",
		specifications : {
			header_width : "What's the width of the header?",
			header_height : "What's the height of the header?",
			body_width : "What's the width of the body?",
			body_height : "What's the height of the body?",
			footer_width : "What's the width of the footer?",
			footer_height : "What's the height of the footer?"
		}
	}
	var i = -1;
	// $scope.func = function()
	// {
	// 	i++
	// 	$scope.messages[i]=$scope.sent_message;
	// 	document.getElementById('chatmsg').value="";
	// 	if($scope.messages[i]=="Hi"|| $scope.messages[i]=="hi"||$scope.messages[i]=="Hello"||$scope.messages[i]=="hello")
	// 	{
	// 		i++
	// 		$scope.messages[i]=message_data.greeting;
	// 	}
	// 	else if($scope.messages[i]=="yes"||$scope.messages[i]=="YES")
	// 	{
	// 		i++
	// 		$scope.messages[i]=message_data.start;
	// 		i++
	// 		$scope.messages[i]=message_data.specifications.header_width;
	// 		$scope.header_width1 = $scope.messages[i-1];
	// 	}
	// 	else if(i==5)
	// 	{
	// 		i++
	// 		$scope.messages[i]=message_data.specifications.header_height;
	// 		$scope.header_height1 = $scope.messages[i-1];
	// 	}
	// 	else if(i==7)
	// 	{
	// 		i++
	// 		$scope.messages[i]=message_data.specifications.body_width;
	// 		 $scope.body_width1 = $scope.messages[i-1];
	// 	}
	// 	else if(i==9)
	// 	{
	// 		i++
	// 		$scope.messages[i]=message_data.specifications.body_height;
	// 		$scope.body_height1 = $scope.messages[i-1];
	// 	}
	// 	else if(i==11)
	// 	{
	// 		i++
	// 		$scope.messages[i]=message_data.specifications.footer_width;
	// 		$scope.footer_width1= $scope.messages[i-1];
	// 	}
	// 	else if(i==13)
	// 	{
	// 		i++
	// 		$scope.messages[i]=message_data.specifications.footer_height;
	// 		$scope.footer_height1= $scope.messages[i-1];
	// 	}
	// 	else
	// 	{
	// 		$scope.header_width = $scope.messages[5], $scope.header_height = $scope.messages[7], $scope.body_width = $scope.messages[9], $scope.body_height = $scope.messages[11]
	// 		$scope.footer_width= $scope.messages[13],$scope.footer_height= $scope.messages[15];
	// 		$scope.banner= true;
	// 	}
	// 	console.log($scope.messages)
	// }

	$scope.func4 = function()
	{
		i++
		$scope.message1=$scope.sent_message;
		document.getElementById('chatmsg').value="";
		if($scope.message1=="Hi"|| $scope.message1=="hi"||$scope.message1=="Hello"||$scope.message1=="hello")
		{
			i++
			$scope.message1=message_data.greeting;
		}
		else if($scope.message1=="yes"||$scope.message1=="YES")
		{
			i++
			$scope.message1=message_data.start;
			i++
			$scope.message1=message_data.specifications.header_width;
			$scope.message2=$scope.sent_message;
			$scope.header_width1 = $scope.message2;
		}
		else if(i==5)
		{
			i++
			$scope.message1=message_data.specifications.header_height;
			$scope.message2=$scope.sent_message;
$scope.header_width1 = $scope.message2;
			// $scope.header_height1 = $scope.message2;
		}
		else if(i==7)
		{
			i++
			$scope.message1=message_data.specifications.body_width;
			$scope.message2=$scope.sent_message;
$scope.header_height1 = $scope.message2;
			//  $scope.body_width1 = $scope.message2;
		}
		else if(i==9)
		{
			i++
			$scope.message1=message_data.specifications.body_height;
			$scope.message2=$scope.sent_message;
 $scope.body_width1 = $scope.message2;
			// $scope.body_height1 = $scope.message2;
		}
		else if(i==11)
		{
			i++
			$scope.message1=message_data.specifications.footer_width;
			$scope.message2=$scope.sent_message;
$scope.body_height1 = $scope.message2;
			// $scope.footer_width1= $scope.message2;
		}
		else if(i==13)
		{
			i++
			$scope.message1=message_data.specifications.footer_height;
			$scope.message2=$scope.sent_message;
$scope.footer_width1= $scope.message2;
			// $scope.footer_height1= $scope.message2;
		}
		else
		{
			$scope.message2=$scope.sent_message;
			 $scope.footer_height1= $scope.message2;
			$scope.header_width = $scope.header_width1, $scope.header_height =$scope.header_height1, $scope.body_width = $scope.body_width1, $scope.body_height =  $scope.body_height1
			$scope.footer_width= $scope.footer_width1,$scope.footer_height= $scope.footer_height1;
			$scope.banner= true;
		}
		console.log($scope.messages)
	}


	$scope.func1= function(){
		$scope.chatbox=true;
		$scope.banner=false;
		console.log("Adadadasd")
	}
	$scope.func2= function(){
		$scope.preview=true;
		$scope.banner=false;
		console.log("Adadadasd")
	}
});
