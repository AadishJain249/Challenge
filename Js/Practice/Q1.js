Q1
let amount=0;
 const  computeAmount=function(){
    return{
    crore(val)
    {
        amount+=val*Math.pow(10,7);
        return this
    },
    lakh(val)
    {
        amount+=val*Math.pow(10,5);
        return this
    },
    thousand(val)
    {
        amount+=val*Math.pow(10,3);
        return this;
    },
    value()
    {
        return amount;
    }   
 }
}
const ans=computeAmount().lakh(15).crore(5).crore(2).lakh(20).thousand(45).crore(7).value();
console.log(ans)