/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movieArray) {

    return movieArray.map(function (item) {
        var newMovieArry = Object.assign({}, item);
        var transformToMinutes = newMovieArry.duration.split(' ');

        if (transformToMinutes.length === 2) {
            var hour = Number(transformToMinutes[0].slice(0, transformToMinutes.indexOf('h'))) * 60;
            var minutes = Number(transformToMinutes[1].replace('min', ''));
            newMovieArry.duration = hour + minutes;
        }

        if (transformToMinutes.length === 1) {
            if (transformToMinutes[0].includes('h')) {
                newMovieArry.duration = Number(transformToMinutes[0].slice(0, transformToMinutes.indexOf('h'))) * 60;
            }
            else if (transformToMinutes[0].includes('min')) {
                newMovieArry.duration = Number(transformToMinutes[0].replace('min', ''));
            }

        }
        return newMovieArry;
    });
}
turnHoursToMinutes(movies);


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    var sum = movies.reduce(function (acc, movie) {
        // return acc + Number(movie.rate);
        return acc + parseFloat(movie.rate);
    }, 0);
    // console.log((sum / movies.length).toFixed(2));
    return (Number((sum / movies.length).toFixed(2)));
}
ratesAverage(movies);
// console.log(ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    var arrayDramaMovies = movies.filter(function (movie) {
        if (movie.genre.indexOf("Drama") != -1) {
            return movie;
        }
        else {
            return undefined;
        }
    });
    // Devolvemos undefined si no hay películas de drama
    if (arrayDramaMovies.length === 0) {
        return undefined;
    }
    else {
        var sumDramaMovies2 = arrayDramaMovies.reduce(function (acc, movie) {
            return acc + Number(movie.rate);
        }, 0);

        return Number((sumDramaMovies2 / arrayDramaMovies.length).toFixed(2));
    }

}

dramaMoviesRate(movies);


// Order by time duration, in growing order
function orderByDuration(movies) {
    var orderMovies = movies.map(function (movie) {
        return movie;
    });
    var newOrderMovies = orderMovies.sort(function (movieRate1, movieRate2) {
        if (movieRate1.duration < movieRate2.duration) {
            return movieRate1;
        } else if (movieRate1.duration === movieRate2.duration) {
            //return ([movieRate1, movieRate2].sort())[0];
        } else {
            return movieRate2;
        }
    });
    return newOrderMovies;
}
orderByDuration(turnHoursToMinutes(movies));


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
    var stevenArray = movies.filter(function (movie) {
        return (movie.director === 'Steven Spielberg' && movie.genre.indexOf("Drama") != -1);
    });
    // if (stevenArray.length === 0) {
    //     return "Steven Spielberg directed 0 drama movies!";
    // }
    // else {
        return "Steven Spielberg directed " + stevenArray.length + " drama movies!";
    // }
}
howManyMovies(movies);


// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    var orderMovies = movies.map(function (movie) {
        return movie.title;
    }).sort(function (movie1, movie2) {
        return movie1.localeCompare(movie2);
    });

    if (movies.length < 20) {
        return orderMovies;
    } else {
        return orderMovies.slice(0, 20);
    }
}
console.log(orderAlphabetically(movies));

// Best yearly rate average

