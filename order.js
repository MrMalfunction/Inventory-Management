async function check(){
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
		"userid" : readCookie('userid')+$('#type').val(),
		"Transactions" :[],
		"Total Price" : $('#total').val(),
		"ssnid" : readCookie('ssnid').val()
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
	      data = JSON.stringify(jsonObj);
       let resp = await fetch("https://m8fh5iwhj2.execute-api.ap-south-1.amazonaws.com/alpha/data-input",{
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: (data) // body data type must match "Content-Type" header        
          });
}