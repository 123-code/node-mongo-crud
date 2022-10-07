import {React,useState,useEffect} from 'react';
import axios from "axios";

const client = axios.create({
    baseURL: "https://localhost:3500/api" 
  });

const Main = ()=>{
    const [pais,setpais] = useState({
        Nombre:"",
        Poblacion:"", 
        Capital:"",
        codigot:"",
        codigoA:"",
    })

    const [paises,setpaises] = useState([]);
    const [ciudades,setciudades] = useState([]);




    const [ciudad,setciudad] = useState({
        nombre:"",
        poblacion:"",
    })


    const postciudad = ()=>{
        client.post("",{
            nombre:ciudad.nombre,
            poblacion:ciudad.poblacion 
        }).then((response)=>{
            setciudades([response.data,...ciudades])

        })
    }


    const updateciudad = async()=>{
        await client.patch("",{
            nombre:ciudad.nombre,
            poblacion:ciudad.poblacion 
        })
    }

    const deleteciudad = async(id)=>{
        await client.delete(id);
        setciudad(
            ciudades.filter((ciudad) => {
               return ciudad.id !== id;
            }).cathc((err)=>{
                console.error(err)
            })
         );
    }

    const postpais = ()=>{
        client.post("",{
            nombre:pais.Nombre,
            poblacion:pais.Poblacion,
            capital:pais.Capital,
            codigot:pais.codigot,
            codigoA:pais.codigoA,


        }).then((response)=>{
           setpaises([response.data,...paises]) 

        })
    }

   
        useEffect(()=>{
            const fetchpais = async()=>{
                let response = await client.get('?_limit=10');
                setpais(pais.Nombre = response.Nombre,
                    pais.Poblacion = response.Poblacion,
                    pais.Capital = response.Capital,
                    pais.codigot = response.codigot,
                    pais.codigoA = response.codigoA)
            }
fetchpais();
        },[pais])
    

        const deletepais = async(id)=>{
            await client.delete(id);
            setpais(
                paises.filter((pais) => {
                   return pais.id !== id;
                })
             );
        }


        const updatepais = async(id)=>{
            await client.put("",{
                nombre:pais.Nombre,
                poblacion:pais.Poblacion,
                capital:pais.Capital,
                codigot:pais.codigot,
                codigoA:pais.codigoA

            })
        }



    return(
        <>
        <div>
        <h1> Paises Y Ciudades </h1>
        </div>

        <div>
            <h1> Ingresar País </h1>

            <h2>Nombre</h2>
            <input type="text" id="paisid" onChange={(event)=>setpais(event.target.value)}></input>

            <h2>Poblacion</h2>
            <input type="text" onChange={(event)=>setpais.Poblacion(event.target.value)}></input>

            <h2>Capital</h2>
            <input type="text" onChange={(event)=>setpais.Capital(event.target.value)}></input>

            <h2>Codigo telefonico</h2>
            <input type="text" onChange={(event)=>setpais.codigot(event.target.value)}></input>

            <h2>codigo Alfanumerico</h2>
            <input type="text" onChange={(event)=>setpais.codigoA(event.target.value)}></input>
<div>
    <h1>  Ingresar Ciudad  </h1>
<h2> Nombre De la ciudad </h2>
    <input type="text" id="paisid" onChange={(event)=>setciudad(event.target.value)}></input>

            <h2>Poblacion</h2>
            <input type="text" onChange={(event)=>setciudad.Poblacion(event.target.value)}></input>

</div>
            <button onClick={postpais}>Agregar Pais</button>
            <button onClick={deletepais(pais)}> Eliminar pais </button>
            <button onClick={postciudad}>Agregar Ciudad </button>
            <button onClick={updateciudad}> Update Ciudad </button>
            <button onClick={updatepais}>update Pais</button>
            <button onClick={deleteciudad}>Delete ciudad</button>



        </div>
        
        </>
    )

}

export default Main;