function list(arr,table){
	    for(var i=0;i<arr.length;i++)
	    {

	    	var tr = document.createElement("tr");
	    	var td1 = document.createElement("td");
	    	td1.innerHTML = arr[i].name;
	    	tr.appendChild(td1);

	    	var td2 = document.createElement("td");
	    	td2.innerHTML = "重置";
	        var td3 = document.createElement("td");
	        td3.innerHTML = arr[i].flag;
	        if(arr[i].flag){
	        	tr.setAttribute("class","changeTrue");
	        }
	    	td2.innerHTML = "重置";
	    	tr.appendChild(td1);
	    	tr.appendChild(td2);
	    	tr.appendChild(td3);
            var td4 = document.createElement("td");
            var  button = document.createElement("button");
            button.innerHTML = "设置已点";
            button.setAttribute("class","setFlag "+i);
            td4.appendChild(button);
            tr.appendChild(td4);
	        table.appendChild(tr);
	    }
    }