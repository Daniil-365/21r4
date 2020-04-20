function sqrt(num){
  try{
    if (num <= 0) {
      throw "XequalZero";
    }
    else {
      console.log(`Sqrt ${num} equal ${Math.sqrt(num).toFixed(2)}`);
    }
  }
  catch (x){
    if (x == "XequalZero"){
      console.log("f(x) <= 0");
    }
    else{console.error(x);}
  }
}
module.exports.sqrt = sqrt;