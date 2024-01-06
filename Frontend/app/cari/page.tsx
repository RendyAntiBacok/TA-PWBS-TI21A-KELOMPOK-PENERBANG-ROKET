"use client"
import React ,{ useState} from 'react'
import result from './result'

export default function page() {

  const [query,setQuery] = useState('')

  const onSearch=(e:any)=>{
      e.preventDefaul()
      const inputQuery = e.target[0].value;
      setQuery(inputQuery)
  }
  return ( 
    <div>
        <form onSubmit={onSearch}>
            <input placeholder='cari obat' />
            <button>cari obat</button>
            
        </form>
      {query && <sectionResult query={query } />}
    </div>
  )
}
