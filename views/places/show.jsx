const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main className='show-main'>
            <h1>{ data.place.name }</h1>
            <section className='show-page-container'>
                
                <img src={data.place.pic} alt={data.place.name} className='rest-pics'/>
                <div className='rating-description-container'>
                    <h2 className='show-rating'>Rating</h2>
                        <p>no rating yet</p>
                    <h2 className='show-description'>Description</h2>
                        <p>Located in {data.place.city}, {data.place.state}</p>
                </div>
            </section>
            <section>
                <h2 className='show-comments'>Comments</h2>
                    <p>No comments yet</p>
            </section>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
   

          </main>
        </Def>
    )
}

module.exports = show
