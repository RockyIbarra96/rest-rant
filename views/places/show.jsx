const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>
                        {c.rant ? 'Rant!' : 'Rave!'}
                    </h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
          <main className='show-main'>
            <h1>{ data.place.name }</h1>
            <section className='show-page-container'>
                <div>
                    <img src={data.place.pic} alt={data.place.name} className='rest-pics'/>
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div className='rating-description-container'>
                    <h2 className='show-rating'>Rating</h2>
                        <p>no rating yet</p>
                    <h2 className='show-description'>Description</h2>
                        <h3> {data.place.showEstablished()} </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                </div>
            </section>
            <section>
                <h2 className='show-comments'>Comments</h2>
                    {comments}
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
