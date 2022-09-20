// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  };
  ////////////////////
  //console.log(returnRandBase());
  //console.log(mockUpStrand());
  
  const pAequorFactory = (specNum, dnaSeq)=>{
    return {
      specimenNum: specNum,
      dna: dnaSeq,
      mutate(){
        //for comparing dnaSeq first instance:
    console.log(dnaSeq);
    let mutated = dnaSeq.slice();
    //console.log('mutated start ' + mutated);
     let i = Math.floor(Math.random() * 15);
  do {   mutated.splice(i, 1, returnRandBase())}
  while ( returnRandBase()!== dnaSeq[i]);
      //after mutation:
      console.log('after mutation: ');
      
      console.log(mutated);
        },
    compareDNA(paequor){
      console.log('COMPARE DNA: ')
       console.log(dnaSeq);
       console.log(paequor.dna);
      let note = [];   
    for (let i = 0; i < dnaSeq.length; i++){
    if (dnaSeq[i] === paequor.dna[i])
         note.push(dnaSeq[i]);}
        console.log('Common dna: '+ note);
    let perc;
    perc = (note.length/15)* 100;
  //console.log(`Specimen DNA${specNum} and Specimen DNA${paequor.specimenNum} have around ${perc.toFixed(0)}% DNA in common`)  
    return perc.toFixed(0);
    },
  
    willLikelySurvive(){
      let scrape=[];
            for (let i=0; i <dnaSeq.length; i++){
            if((dnaSeq[i] === 'C') || (dnaSeq[i] === 'G')){
             scrape.push(dnaSeq[i]);
          }
       
      }//console.log('C and G presence in Specimen DNA'+specNum +':' ); 
  
     // console.log(scrape);
        if (scrape.length>=9){
        return true;
        //console.log('Likely to survive : TRUE');
      }else {
         return false;
       // console.log('Likely to survive : FALSE');
      }
      
    }
  }
  };
  //for testing:
  //const pAequor0 = pAequorFactory(1,mockUpStrand());
  //const pAequor1 = pAequorFactory(2,mockUpStrand());
  //console.log(pAequor0);
  //pAequor0.mutate();
  //pAequor0.compareDNA(pAequor1);
  //pAequor0.willLikelySurvive();
  //console.log(pAequor0.willLikelySurvive());
  
  
  let strongList = [];
  const generator=(howMany)=>{
    //let strongList = [];
    let genNum =()=>{return Math.floor(Math.random()*100000)};
    let name = 'pAequor'+ genNum;
  //console.log(name);
    let ranList=[];
        const makeP = ()=>{
             for (let j=0; j<50000; j++){
             ranList.push( mockUpStrand());
      }
             ranList;
    };
   
  //console.log(makeP());
  //console.log(ranList);
     makeP();
  
    let ranNames = [];
     ranNames = ranList.map(entry=> name = pAequorFactory(genNum(), entry));
  // ranNames;
  
    for (let i= 0; i<50000;i++){
        if (ranNames[i].willLikelySurvive()===true && strongList.length < howMany){
        strongList.push(ranNames[i]);
    }
  };
  
        return strongList;
  
  };
  
  console.table(generator(30));
  
  