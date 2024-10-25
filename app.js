let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'abacus','intercom'];
let dominio = [ "com", "net", "us", "io"];

function crearDominios(pr,ad,no,dom){
    for(let i=0; i<pr.length;i++){
        for(let j=0; j<ad.length;j++){
            for(let k=0; k<no.length;k++){
                for(let h=0; h<dom.length;h++){
                    if(dom[h] === no[k].slice(no[k].length-dom[h].length)){
                        console.log(pr[i]+ad[j]+no[k].slice(0,no[k].length-dom[h].length)+"."+dom[h]);
                    }else{
                        console.log(pr[i]+ad[j]+no[k]+"."+dom[h]);
                    }
                }
            }
        }
    }
}

crearDominios(pronoun,adj,noun,dominio);