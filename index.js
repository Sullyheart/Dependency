const Person = require('./person')
const Photo = require('./photo')

const SULI = new Person('SULI', 27)
const suliyat = new Person('SULIYAT', 26)
const desire = new Person('DESIRE', 2)

const berlinPhoto = new Photo('berlin.jpg')
const munichPhoto = new Photo('munich.jpg')

suliyat.addPhoto(berlinPhoto)

suliyat.bio = 'Ans awesome hacker who has seen it all and now talks about it'

desire.likePhoto(berlinPhoto)
SULI.likePhoto(berlinPhoto)

console.log(suliyat.profile)

suliyat.addPhoto(munichPhoto)

console.log(suliyat.profile)

console.log(suliyat, suliyat.photos[0].likedBy)

console.log(SULI.greet(desire))
