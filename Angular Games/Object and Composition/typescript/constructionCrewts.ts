function constructionCrewts(data: {
    weight: number,
    experience: number,
    levelOfHydrated: number,
    dizziness: boolean
  }) {

    let currentWeight : number;
    
    if(data.dizziness === true) {
        currentWeight = ((data.weight * data.experience) * 0.1) + data.levelOfHydrated;
        data.levelOfHydrated = currentWeight;
        data.dizziness = false;
    } 
    return data

  }

constructionCrewts({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })