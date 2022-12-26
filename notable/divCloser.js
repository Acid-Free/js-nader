let htmlString = "<div>div<>s<div> <p>say what?<div><div>";
let alternator = true;
htmlString = htmlString.split(/(<.*?>)/)
    .reduce((acc, chunk) => {
        if (chunk === "<div>") {
            alternator = !alternator;
            if (alternator)
                return acc + "</div>";
        }
        return acc + chunk;
    }, "");
console.log(htmlString);