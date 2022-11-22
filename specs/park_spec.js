const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('raptor', 'carnivore', 30);
    park = new Park('Jurassic-Park', 500, [dinosaur1, dinosaur2])
  })

  it('should have a name', function () {
    let actual = park.name;
    assert.strictEqual(actual, 'Jurassic-Park');
  });

  it('should have a ticket price', function () {
    let actual = park.ticketPrice;
    assert.strictEqual(actual, 500);
  });

  it('should have a collection of dinosaurs', function () {
    let actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    let dinosaur3 = new Dinosaur('triceratops', 'herboivore', 250);
    park.addDinosaur(dinosaur3);
    let actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur2);
    let actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    let actual = park.mostPopular();
    assert.equal(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    let dinosaur3 = new Dinosaur('t-rex', 'carnivore', 49);
    park.addDinosaur(dinosaur3);
    let actual = park.findDinosaurs('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3])

  });

  it('should be able to calculate the total number of visitors per day', function () {
    let actual = park.visitorsPerDay();
    assert.strictEqual(actual, 80);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    let actual = park.visitorsPerYear();
    assert.strictEqual(actual, 29200);
  });

  it('should be able to calculate total revenue for one year', function () {
    let actual = park.yearlyRevenue();
    assert.strictEqual(actual, 14600000);
  });

});
