const Park = function (name, ticketPrice, collection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collection = collection;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collection.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    let index = this.collection.indexOf(dinosaur);
    this.collection.splice(index, 1);
}

Park.prototype.mostPopular = function () {
    let popularity = 0;
    let mostPopular;
    for (dinosaur of this.collection) {
        if (dinosaur.guestsAttractedPerDay > popularity) {
            popularity = dinosaur.guestsAttractedPerDay;
            mostPopular = dinosaur;
        }
    }
    return mostPopular;
}

Park.prototype.findDinosaurs = function (name) {
    let dinosaurs = [];
    for (dinosaur of this.collection) {
        if (dinosaur.species == name) {
            dinosaurs.push(dinosaur);
        }
    }
    return dinosaurs;
}

Park.prototype.visitorsPerDay = function () {
    let visitors = 0;
    for (dinosaur of this.collection) {
        visitors += dinosaur.guestsAttractedPerDay;
    }
    return visitors;
}

Park.prototype.visitorsPerYear = function () {
    let dailyVisitors = this.visitorsPerDay();
    return dailyVisitors * 365;
}

Park.prototype.yearlyRevenue = function () {
    let yearlyVisitors = this.visitorsPerYear();
    return yearlyVisitors *= this.ticketPrice;
}

module.exports = Park;