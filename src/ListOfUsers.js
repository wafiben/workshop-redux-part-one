import React from 'react'
import {useSelector} from 'react-redux'
function ListOfUsers() {
    const state=useSelector((state)=>state)
    console.log(state)
    return (
        <div>
             <h1>hello list of Emails</h1>
             {state.map((element)=>(<h1>{element.email}</h1>))}
        </div>
    )
}

export default ListOfUsers
