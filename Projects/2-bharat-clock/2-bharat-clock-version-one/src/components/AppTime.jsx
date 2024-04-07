

let AppTime=()=>{
  let time=new Date();
 
  return (
    <div className="lead">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</div>
  )

}

export default AppTime;