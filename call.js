const obj = {
    name:"cxk",
}
 
sayhi = function(age){
    console.log('name:'+this.name)

    console.log('age:'+age)

}
 
Function.prototype.call2 = function(context){
    let str;      
    let reg=new RegExp('this','g'); 
    str=this.toString().replace(reg,'context')
    let newArguments = [];
     for(let i = 1; i < arguments.length; i++){
              newArguments.push('arguments[' + i + ']');       
    }  
   eval('('+str+')('+newArguments+')');
    
}

sayhi.call2(obj,'100')
