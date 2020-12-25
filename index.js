console.log('index.js');
//-packager

var requestBody = ""; 

var client=new XMLHttpRequest();
client.open("get","https://dev75526.service-now.com/api/now/table/incident?sysparm_fields=number%2Cshort_description%2Cactive%2Cstate&sysparm_limit=100");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'Belikebro@123'));

client.onreadystatechange = function() { 
	if(this.readyState == this.DONE) {
        var obj = JSON.parse(this.response);
        //obj.result[1].active
        //document.getElementById('responce').innerHTML = obj.result.length; 
        //console.log(this.response);
        var count = obj.result.length;
       
        for(var i =0 ;i< count ;i ++){
            document.getElementById('responce').innerHTML += divGridItem(obj.result[i]); 
            
        }
        // <div class="grid-item">1</div>
	}
}; 

function divGridItem(value){
    if(value.active == "true"){
        var active = '<span class="activeTrue"> ' +value.active +'</span>';
    }else{
        var active = '<span class="activeFalse"> ' +value.active +'</span>';
    }
    var divC = '</div>';
    var spanC = '</span>';
    var Number = '<div class= "center border paddings"><span class="colors"> Number : </span>'+ value.number + divC;
    var State = ' <div class = "border paddings">'+'<span><span class="colors">  State : </span>'+value.state +spanC+ ' <span class ="float-right" > <span class="colors">Active : </span>'+active+spanC +divC;
    var Short_description = '<div class = "border paddings"><span class="colors">Short Description :</span>'+value.short_description + divC;
    
    var div = '<div class="grid-item">';
    
    return div + Number+ State+ Short_description+ divC ;
}

function span(value){
    var sapn = '<span>';
    var spanC = '</span>';
    return sapn+  value + spanC ;
}

client.send(requestBody);