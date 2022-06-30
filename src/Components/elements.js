const elementList = [

  {
    name:'Normal',
    effective: ['fighting'],
    notEffective: [],
    immunity: ['ghost']
  },

  {
    name: 'Fire',
    effective: ['water', 'ground', 'rock'],
    notEffective: ['grass', 'bug', 'fire', 'steel', 'ice', 'fairy'],
    immunity: []
  },

  {
    name: 'Water',
    effective: ['electric', 'grass'],
    notEffective: ['water', 'fire', 'ice', 'steel'],
    immunity: []
  },

  {
    name: 'Electric',
    effective: ['ground'],
    notEffective: ['electric', 'flying', 'steel'],
    immunity: []
  },

  {
    name:'Grass',
    effective: ['fire', 'ice', 'poison', 'flying', 'bug'],
    notEffective:['water', 'electric', 'grass', 'ground'],
    immunity: []
  },

  {
    name:'Ice',
    effective:['fire', 'fighting', 'rock', 'steel'],
    notEffective:['ice'],
    immunity: []
  },

  {
    name:'Fighting',
    effective:['flying', 'psychic', 'fairy'],
    notEffective:['bug', 'rock', 'dark'],
    immunity: []
  },

  {
    name:'Poison',
    effective:['ground', 'psychic'],
    notEffective:['grass', 'fighting', 'poison', 'bug', 'fairy'],
    immunity: []
  },

  {
    name:'Ground',
    effective:['water', 'grass', 'ice'],
    notEffective:['poison', 'rock'],
    immunity: ['electric']
  },

  {
    name:'Flying',
    effective:['electric', 'ice', 'rock'],
    notEffective:['grass', 'fighting', 'bug'],
    immunity: ['ground']
  },

  {
    name:'Psychic',
    effective:['bug', 'ghost', 'dark'],
    notEffective:['fighting', 'psychic'],
    immunity: []
  },

  {
    name:'Bug',
    effective:['fire', 'flying', 'rock'],
    notEffective:['grass', 'fighting', 'ground'],
    immunity: []
  },

  {
    name:'Rock',
    effective:['water', 'grass', 'fighting', 'ground', 'steel'],
    notEffective:['normal', 'fire', 'poison', 'flying'],
    immunity: []
  },

  {
    name:'Ghost',
    effective:['ghost', 'dark'],
    notEffective:['poison', 'bug'],
    immunity: ['normal', 'fighting']
  },

  {
    name:'Dragon',
    effective:['ice', 'dragon', 'fairy'],
    notEffective:['fire', 'water', 'electric', 'grass'],
    immunity: []
  },

  {
    name:'Dark',
    effective:['fighting', 'bug', 'fairy'],
    notEffective:['ghost', 'dark'],
    immunity: ['psychic']
  },

  {
    name:'Steel',
    effective:['fire', 'fighting', 'ground'],
    notEffective:['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'],
    immunity: ['poison']
  },

  {
    name:'Fairy',
    effective:['poison', 'steel'],
    notEffective:['fighting', 'bug', 'dark'],
    immunity: ['dragon']
  }
];

export default elementList;
