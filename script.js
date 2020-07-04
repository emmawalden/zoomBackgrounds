
// Empty object to namespace the app
const app = {};

app.backgrounds = [
    {
        src: "./assets/books.jpeg",
        alt: "bookshelf",
        name: "Books"
    },
    {
        src: "./assets/clouds.jpeg",
        alt: "pink clouds with blue background",
        name: "Clouds"
    },
    {
        src: "./assets/plants.jpeg",
        alt: "plant branch with white background",
        name: "Plants"
    },
    {
        src: "./assets/bananas.jpeg",
        alt: "yellow background with ripe bananas",
        name: "Bananas"
    },
    {
        src: "./assets/coffee.jpeg",
        alt: "coffee shop",
        name: "Coffee Shop"
    },
    {
        src: "./assets/kitchen.jpeg",
        alt: "kitchen",
        name: "Kitchen" 
    }

];


app.eventListeners = function() {
    document.querySelectorAll("button").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let selection = this.textContent;
            for (let i = 0; i < app.backgrounds.length; i++) {
            const backgroundName = app.backgrounds[i].name;
            const backgroundSrc = app.backgrounds[i].src;

            if (backgroundName === selection) {
                document.querySelector(".backgroundSelection").setAttribute("src", backgroundSrc);
            }
        }
    });
});

app.fetchPhoto = function() {
    const surprise = document.querySelector(".randomImage");
    surprise.addEventListener("click", function() {
        fetch("https://api.pexels.com/v1/search?query=background", {
            method: "GET",
            total_results: 1,
            headers: {
                "Authorization":"563492ad6f9170000100000154738e2e43fd461fb2f2066460ae39b0",
            } 
        }).then(function(response) {
            return response.json();
        }).then((data) => {
            const photos = data.photos;
            photos.forEach(() => {
                const index = Math.floor(Math.random() * photos.length);
                const randomPhoto = photos[index].src.landscape;
                document.querySelector(".backgroundSelection").setAttribute("src", randomPhoto);
            });
        }).catch(function(err){
            if(err) {
                document.querySelector(".backgroundSelection").setAttribute("src", "Try Again!");

            }
        });
    });
}

        
        
        


};

app.init = function() {
    app.eventListeners();
    app.fetchPhoto();
}
// Initializing app once document is loaded
document.addEventListener("DOMContentLoaded", function() {
    app.init();
});