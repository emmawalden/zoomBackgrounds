// Create an array of photos 
// Have a series of buttons 
// When button is clicked display that photo 

// Empty object to namespace the app
const app = {};

app.backgrounds = [
    {
        src: "./assets/books.jpg",
        alt: "bookshelf",
        name: "Books"
    },
    {
        src: "./assets/clouds.jpg",
        alt: "pink clouds with blue background",
        name: "Clouds"
    },
    {
        src: "./assets/plant.jpg",
        alt: "plant branch with white background",
        name: "Plant"
    },
    {
        src: "./assets/bananas.jpg",
        alt: "yellow background with ripe bananas",
        name: "Bananas"
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

        
        
        


};

app.init = function() {
    app.eventListeners();
}
// Initializing app once document is loaded
document.addEventListener("DOMContentLoaded", function() {
    app.init();
});