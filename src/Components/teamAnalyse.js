const typeArray = {
    'normal': 0,
    'fire': 0,
    'water': 0,
    'electric': 0,
    'grass': 0,
    'ice': 0,
    'fighting': 0,
    'poison': 0,
    'ground': 0,
    'flying': 0,
    'psychic': 0,
    'bug': 0,
    'rock': 0,
    'ghost': 0,
    'dark': 0,
    'steel': 0,
    'fairy': 0
}

const teamAnalyse = (teamArray) => {
    let typeAnalyticArray = Object.assign({}, typeArray)

        teamArray.map(
            teamMember => {
                for (let i = 0; i < teamMember.effective.length; i++){
                    typeAnalyticArray[teamMember.effective[i]] -= 1
                }
    
                for (let i = 0; i < teamMember.notEffective.length; i++){
                    typeAnalyticArray[teamMember.notEffective[i]] += 1
                }
    
                for (let i = 0; i < teamMember.superEffective.length; i++){
                    typeAnalyticArray[teamMember.superEffective[i]] -= 2
                }
    
                for (let i = 0; i < teamMember.superNotEffective.length; i++){
                    typeAnalyticArray[teamMember.superNotEffective[i]] += 2
                }
    
                for (let i = 0; i < teamMember.immunity.length; i++){
                    typeAnalyticArray[teamMember.immunity[i]] += 3
                }
            }
        )

    let strongArr = []
    let balancedArr = []
    let weakArr = []
    
    for (let prop in typeAnalyticArray){
        if(typeAnalyticArray[prop] > 0){
            strongArr.push(prop)
        } else if (typeAnalyticArray[prop] < 0){
            weakArr.push(prop)
        } else {
            balancedArr.push(prop)
        }
    }

    return {
        strongArr, 
        balancedArr, 
        weakArr
    }

}

export default teamAnalyse