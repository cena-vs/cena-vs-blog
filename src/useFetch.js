import {useState,useEffect} from 'react'

const useFetch = (url)=>{

    const [data,setData] = useState(null)
    const[isLoading,setIsLoading] = useState(true)
    const[error,setError] = useState(null)

    useEffect(()=>
        {
            const abrtCont = new AbortController()
            setTimeout(()=>{
                fetch(url,{signal:abrtCont.signal})
                    .then(res=>{
                        if(!res.ok){
                            throw Error('Something, Went Wrong Please Try Again Later :)')
                        }
                        return res.json();
                    })
                    .then(data=>{
                        setData(data)
                        setIsLoading(false)
                        setError(null)
                    })
                    .catch((err)=>{
                    if(err.name === 'AbortError'){
                        console.log('Fetch Aborted');
                    }else{
                        setError(err.message)
                        setIsLoading(false)
                    }
                    })
            },2000)
        return ()=>abrtCont.abort()
        },[url]);
    return {data,isLoading,error}
}

export default useFetch; 


// useFetch is an CustomHook, created by us it can be reused to fetch some other endpoints also
