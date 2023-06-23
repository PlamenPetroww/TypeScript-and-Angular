function constructionCrew(data) {

    let currentWeight = 0;

    if(data.dizziness === true) {
        currentWeight = ((data.weight * data.experience) * 0.1) + data.levelOfHydrated;
        data.levelOfHydrated = currentWeight;
        data.dizziness = false;
    } 
    return data
}

constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })