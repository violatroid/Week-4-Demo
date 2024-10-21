
//PARSE - paring knife, parcel

//body of text is a corpus

corpus - "Now is the time..."
console.log("LENGTH", corpus.length)


//i=0
// console.log(corpus[i++])
// i is for index
// i++ is shorthand for i = i + 1
// for(initialize/start; boolean expression when to stop; change the)

for(let i=0; i <corpus.length; i++){
    console.log(corpus[i]) //REPEAT
}
console.log("DONE")

//for (i=0; i < corpus.length; i++){
//          console.log("INDEX:"+i, "LETTER: +corpus[i], "CODE:"Corpus")
// }
words=corpus.split(" ")
console.log(words[0])//first word
console.log()
