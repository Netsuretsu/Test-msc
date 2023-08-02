function star(size) {
    let error;
    if (typeof size === "number") {
        let output = "";
        if (size === 0) {
            return
        } else if (size > 0) {
            for (let i = 1; i <= size; i++) {
                let incrementStar = "";
                incrementStar += "*"
                output += incrementStar
            }
            console.log(output);
        }
    }
    else {
        error = "Please enter a number";
        console.log(error)
    }
}

//Run "node star" in terminal and change size here to test
star(5);