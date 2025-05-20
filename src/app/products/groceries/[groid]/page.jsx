import React from 'react'

function page({ params }) {
    return (
        <div>Groceries item {params.groid}</div>
    )
}

export default page