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
      }
}