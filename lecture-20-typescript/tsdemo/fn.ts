function hello(name?: string): void {
    
    if(name){
        console.log("Hello " + name);
    } else{
        console.log("Hello Everryone");
    }
  
}

hello();
