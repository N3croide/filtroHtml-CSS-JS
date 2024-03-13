const URT_API = 'http://154.38.171.54:3000/priceB';
const myHeaders = new Headers({
    "Content-Type": "application/json"
});



const post = async(data) =>{
    fetch(`${URT_API}`,{
        method:"POST",
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(res => {return res.json})
    .catch(err  => {console.log("Error en la preticion de POST: ",err)})
}



export{
    post
}