$(document).ready(() => {
    const firstRow = $("#firstRow");
    const secondRow = $("#secondRow");
    const thirdRow = $("#thirdRow");

    const projectDetails = [
        {
            id: 01,
            title: "Mother Trucker!",
            description: "Mother Trucker is an application using Sequelize, Node, Express, Express-Handlebars, and Socket.io while incorporating a Mapquest API, that allow users to find info about their local Food Truck in their area.",
            repoLink: "https://github.com/eunahk92/Mother-Truckers",
            deployedLink: "https://arcane-waters-56136.herokuapp.com/",
            lastUpdated: "July 10, 2020",
            picturePath: "mother_trucker.png"
        },
        {
            id: 02,
            title: "Brew For You",
            description: "See which breweries are nearby your location or search by city to find a hidden gem. Keep track of the ones you've visited, would like to visit, or the ones you favorite!",
            repoLink: "https://github.com/eunahk92/brew-for-you",
            deployedLink: "https://eunahk92.github.io/brew-for-you/",
            lastUpdated: "May 7, 2020",
            picturePath: "brew_for_you.png"
        },
        {
            id: 03,
            title: "NYT Search",
            description: "Search for articles from the New York Times based off certain parameters, such as a keyword, start year, and/or end year.",
            repoLink: "https://github.com/eunahk92/nyt-search",
            deployedLink: "https://eunahk92.github.io/nyt-search/",
            lastUpdated: "April 25, 2020",
            picturePath: "nyt_search.png"
        },
        {
            id: 04,
            title: "Color Game",
            description: "Objective of the game is to pick the color of the target word shown from the list of colors below it.",
            repoLink: "https://github.com/eunahk92/color-game",
            deployedLink: "https://eunahk92.github.io/color-game/",
            lastUpdated: "April 23, 2020",
            picturePath: "color_game.png"
        },
        {
            id: 05,
            title: "Team Portfolio Generator",
            description: "A template generator command line application to build a software engineering team. The application will prompt the user for information about the team manager, engineers, and interns and then create an HTML file that displays a nicely formatted team roster.",
            repoLink: "https://github.com/eunahk92/Team-Generator",
            deployedLink: "https://github.com/eunahk92/Team-Generator",
            lastUpdated: "June 5, 2020",
            picturePath: "team_generator.png"
        },
        {
            id: 06,
            title: "Notes",
            description: "An Express backend application that can be used to write, save, and delete notes.",
            repoLink: "https://github.com/eunahk92/Notes",
            deployedLink: "https://thawing-ravine-79183.herokuapp.com/" ,
            lastUpdated: "June 11, 2020",
            picturePath: "notes.png"
        },
        {
            id: 07,
            title: "Employee Management",
            description: "A CMS interface to build a command-line application for managing a company's employees using node, inquirer, and MySQL.",
            repoLink: "https://github.com/eunahk92/Employee-sys",
            deployedLink: "N/A",
            lastUpdated: "April 23, 2020",
            picturePath: "employee_sys.png"
        },
        {
            id: 08,
            title: "Eat-A-Burger",
            description: "Eat-A-Burger! is a restaurant app using MySQL, Node, Express, Handlebars and ORM that lets users input the names of burgers they'd like to eat.",
            repoLink: "https://github.com/eunahk92/Eat-a-burger",
            deployedLink: "https://gentle-refuge-13265.herokuapp.com/" ,
            lastUpdated: "June 5, 2020",
            picturePath: "eat_a_burger.png"
        },
        {
            id: 09,
            title: "Weather Dashboard",
            description: "A weather dashboard that relays daily and forecasted weather information to the user when the user searches for a specific city.",
            repoLink: "https://github.com/eunahk92/weather-dashboard",
            deployedLink: "https://eunahk92.github.io/weather-dashboard/",
            lastUpdated: "June 6, 2020",
            picturePath: "Weather_dashboard.png"

        }
    ];

    projectDetails.forEach(tile => {
        const { id, title, description, repoLink, deployedLink, lastUpdated, picturePath } = tile;

        const project = `
            <div class="card">
                <div class="card-body border border-dark border-bottom-0">
                    <div class="row">
                        <div class="col-lg-10 border-bottom border-info m-0">
                            <h3 class="card-title">${title}</h3>
                        </div>
                        <div class="col-lg-2 border-bottom border-left border-info m-0 d-none d-lg-block">
                            <h3 class="card-title">0${id}</h3>
                        </div>
                    </div>
                    <div class="row overflow-auto" style="height: 110px;">
                        <p class="card-text p-2 text-justify">${description}</p>
                    </div>
                    <i><a href="${repoLink}" target="_blank" class="text-decoration-none">Click here for the Github Repo</a> <small class="smallGrey" id="deployedLinkMsg"></i></small>
                    <p class="card-text"><small class="smallWord">Last updated on ${lastUpdated}</small></p>
                </div>
                <a href="${deployedLink}" target="_blank"><img src="public/assets/screenshots/${picturePath}" class="card-img-bottom border border-dark border-top-0" alt="${picturePath}"></a>
            </div>
        `

        if (deployedLink === "N/A") {  
            $("#deployedLinkMsg").text("This application does not have a deployed site.");
        } else {
            $("#deployedLinkMsg").text("or click the image for the deployed application.");
        };

        if (tile.id <= 3) {
            firstRow.append(project);
        } else if (tile.id > 3 && tile.id <= 6) {
            secondRow.append(project);
        } else {
            thirdRow.append(project);
        }
    });
});