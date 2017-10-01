export  default function() {
    return{
        1: { id: 1, title: "Pan's BooKStore", link:'https://lit-ocean-51599.herokuapp.com/', codelink:'https://github.com/ALOE1990/booksShop', subtitle:'Introduction',subtitle1: 'Display',introduction:"This is a full stack javascript application which combines React, Redux, Node.js and MongoDB. The application has been deployed on Heroku. You can visit it by the button below.", detail: "The application can be used for an on-line book store. It includes updating the shopping cart and posting and deleting the books in database at an admin. I implemented the client by React framework. Used Redux to manage the state. For the styling part, I tired bootstrap.css and bootstrap-react. For the server side, I created my own Api by Node-express and MongoDB. ", image:"../../images/bookstore.png"},
        3: { id: 3, title: 'Top K Business', introduction: "Provided Top 5 business recommendation in a specific area. Displayed all relevant business information. Implemented by both Hadoop and Spark.", image:"../../images/topk.png"},
        4: { id: 4, title: 'Weather Cast Board', codelink:'https://github.com/ALOE1990/weatherBoard',introduction: "This is a React-Redux Application. You can search temperature, pressure and humidity in the feature week for different cities. I used OpenWeatherMap and Google Map API.", image:"../../images/weatherboard.png"},
        2: { id: 2, title: 'Movie Recommender System', introduction: "Implemented movie recommendation based on Netflix Data according to rating history of users by Hadoop MapReduce.", image:"../../images/movie.jpg"}
    }
}
