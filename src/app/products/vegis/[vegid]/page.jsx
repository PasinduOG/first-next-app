import React from 'react'

function page({ params }) {
    return (
        <div>Vegi items {params.vegid}</div>
    )
}

export default page