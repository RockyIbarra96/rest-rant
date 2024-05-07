const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://images.pexels.com/photos/19916048/pexels-photo-19916048/free-photo-of-boy-sitting-on-toy-tractor-and-patting-cat.jpeg?auto=compress&cs=tinysrgb&w=600'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://images.pexels.com/photos/19954934/pexels-photo-19954934/free-photo-of-ginger-cat-touching-corn-with-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }]
      
    res.render('places/index', {places})
})

module.exports = router
