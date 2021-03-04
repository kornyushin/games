function PayProvider() {
    
	
}

PayProvider.prototype.init= function()
{
	VK.init(function() {
			  console.log("API initialization succeeded");
			  VK.addCallback('onOrderSuccess', function(order_id) {
				console.log("onOrderSuccess "+order_id);
				JsToDef.send("onOrderSuccess", order_id);
			  });
			  VK.addCallback('onOrderFail', function() {
				console.log("onOrderFail");
			  });
			  VK.addCallback('onOrderCancel', function() {
				console.log("onOrderCancel");
			  });
				 // Your code here
			  }, 
			function() {
				 console.log(" API initialization failed");
				 // Can reload page here
			}, '5.130'); 
}

PayProvider.prototype.order=function (item) {
    var params = {
      type: 'item',
      item: item
    };
    VK.callMethod('showOrderBox', params);
  }

  

  