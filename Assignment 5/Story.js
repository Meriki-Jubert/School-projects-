

function goToPart(part) {
    const pages = {
        1: "Part1.html",
        2: "Part2.html",
        3: "Part3.html",
        4: "Part4.html",
        5: "Closing.html"
    };
    window.location.href = pages[part];
}