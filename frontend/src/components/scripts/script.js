module.exports = {
    sendbasket : (id)=>{
        fetch("http://localhost:4000/api/basket",
        {
          headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({productid:id})
        })
      },
      deletebasket : (id)=>{
        fetch(`http://localhost:4000/api/basket/${id}`,
        {method: "DELETE"})
        .then(res=>res.json())
        .then(res=>console.log(res))
        
          
        
      },
      getBasket: (setstate)=>{
        fetch("http://localhost:4000/api/basket/")
        .then(data=>data.json())
        .then(index=>setstate(index.map(e=>e.productid)))
        .catch(e=>console.log(e))
      }
}