function group() {
    group = ["Paul", "Bita", "Blake", "Joshua"]
    group.forEach((g, idx) => {
        if (g === "Joshua") {
            return (g + "is the manager of this group")
        } else {
            return (g + 'is member of this group')
        }
    })

}
group();

function groups() {

    group = ["Paul", "Bita", "Blake", "Joshua"]

    return group;
}
console.log(groups());
master