// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let AllpAequor = {};

function pAequorFactory(specimenNum, dna) {
  return {specimenNum, dna, mutate() {
    let random = Math.floor(Math.random() * 16);
    let randomDNA = returnRandBase();
    while (dna[random] == randomDNA) {
      randomDNA = returnRandBase();
    }
    return dna[random] = randomDNA;
  }, compareDNA(pAequor) {
    let countSimilarity = 0;
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] == pAequor[i]) {
        countSimilarity += 1;
      }}
    console.log(`There is ${(countSimilarity/(dna.length+pAequor.length))*100}% DNA in common`)
    
  }, willLikelySurvive() {
    let CG = dna.filter(check => {return check == 'C' || check == 'G'}).length;
    return CG*100/dna.length>=60;
  }, create30() {
    while (Object.keys(AllpAequor).length < 30) {
      let pAequorRandom = pAequorFactory(Math.floor(Math.random()*10), mockUpStrand()).this.willLikelySurvive();
      while (pAequorRandom) {
        pAequorRandom = pAequorFactory(Math.floor(Math.random()*10), mockUpStrand()).this.willLikelySurvive();
      }
      AllpAequor[Object.keys(AllpAequor).length+1] = pAequorRandom;
    }
  }
}
};

function create30() {
  while (Object.keys(AllpAequor).length < 30) {
    let pAequorRandom = pAequorFactory(Math.floor(Math.random()*10), mockUpStrand());
    while (!pAequorRandom.willLikelySurvive()) {
      pAequorRandom = pAequorFactory(Math.floor(Math.random()*10), mockUpStrand());
    }
    AllpAequor[Object.keys(AllpAequor).length+1] = pAequorRandom;
  }
};


create30();
console.log(AllpAequor)