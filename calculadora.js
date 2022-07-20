const bhaskara = (a, b, c) => {
    
    delta = b*b -(4*a*c);
    

    if(delta < 0){
        return("Sem raiz real");
    }else if(delta==0){
        x = -b/2*a;
        return(x);
    }else if(delta>0){
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
        return(x1, x2);
    }

}



module.exports = {
    bhaskara,
 
}