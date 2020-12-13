function check(){
	var o = {};
	remove = 0;
	flag = 0;
	name = ($('#name').val());
	if(name === ""){
		$('#name').css({"border-color" :"red","box-shadow" :"5px 10px red"});
		return null;
	}
	else{
		$('#name').css({"border-color" :"","box-shadow" :""})
	}
	if(count === 2){
		 if($('#item'+(count-1)).val() === ""){
      $('#item'+(count-1)).css({"border-color" :"red","box-shadow" :"5px 10px red"});
      return null;
    }
    else{
      $('#item'+(count-1)).css({"border-color" :"","box-shadow" :""});
    }

    if($('#quantity'+(count-1)).val() === ""){
      $('#quantity'+(count-1)).css({"border-color" :"red","box-shadow" :"5px 10px red"});
      return null;
    }
    else{
      $('#quantity'+(count-1)).css({"border-color" :"","box-shadow" :""});
    }

    if($('#price'+(count-1)).val() === ""){
      $('#price'+(count-1)).css({"border-color" :"red","box-shadow" :"5px 10px red"});
      return null;
    }
    else{
      $('#price'+(count-1)).css({"border-color" :"","box-shadow" :""});
    }
	}
	var jsonObj = {
		"uerid" : readCookie('userid')+$('#type').val(),
		"Transactions" :[],
		"Total Price" : $('#total').val()
		};
	for (var i = 1; i < count; i++) {
		item = ($('#item'+i).val());
		quantity = ($('#quantity'+i).val());
		price = ($('#price'+i).val());
		data = {};
		data['item'] = item;
		data['quantity'] = quantity;
		data['price'] = price;
		jsonObj['Transactions'].push(data);
		if(item === "" && quantity === "" && price ===""){
			$(".additional"+i).remove();
			++remove;
		}
	}
	count = count - remove;
	console.log(JSON.stringify(jsonObj));
}