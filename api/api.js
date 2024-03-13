const URT_API = 'http://154.38.171.54:3000/priceB';
const myHeaders = new Headers({
    "Content-Type": "application/json"
});


const get = async() =>{
    try {
        const respuesta = await fetch(`${URT_API}`);
        if (respuesta.status == 200) {
            let datos = await respuesta.json();
            return datos;
        }
    } catch (error) {
        console.log('Error con el metodo GET: ', error);
    }
}

const post = async(data) =>{
    fetch(`${URT_API}`,{
        method:"POST",
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(res => {return res.json})
    .catch(err  => {console.log("Error en la preticion de POST: ",err)})
}

const patch = async(data, ,id) =>{
    fetch(`${URT_API}/${id}`,{
        method:"PATCH",
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(res => {return res.json})
    .catch(err  => {console.log("Error en la preticion de PATCH: ",err)})
}


const del = async(id) =>{
    try{
        return await fetch(`${URT_API}/${id}`,{
            method: "delete",
            headers: myHeaders
        })
    }
    catch (error){
        console.log('Error en la preticion de delete:',error.message)
    }
}

export{

    get as get,
    post as post,
    patch as patch,
    del as delete,
    getCategoryElement as getCategoryElement
}