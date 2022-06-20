function capitalizeNames(arr) {
    return arr.map(element => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase());

}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))