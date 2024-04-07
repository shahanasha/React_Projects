

function Random(){

  let number  = Math.random() * 100;

  return <h1 style={{'backgroundColor':'#7788344'}}>Random Numbe is : {Math.round(number)}</h1>
}

export default Random;