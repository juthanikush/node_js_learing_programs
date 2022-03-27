//DNS MODEULE
import dns from 'dns';

// dns.lookup('juthani.000webhostapp.com',(error,address,family)=>{
//     if(error) throw error;
//     console.log(address);
//     console.log(family);
// });


dns.resolve('juthani.000webhostapp.com','NS',(error,records)=>{
    if(error) throw error;
    console.log(records);
    
});