import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 8lig2GEwByNmFZZSppH5vLaPM41Xiq33AJpu4kSIiGvkMuHnodZxia3rpe_963o9xYvU7QFXEYB7tpjyOVdBCrqNGVNKe9DGK7Tfq5t2OJGqK2wyNzEURYK4gTa1YHYx'
    }
})