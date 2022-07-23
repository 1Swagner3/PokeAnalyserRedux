const fuseArr = (arr1, arr2) => {
    let result = []
    let concat = []
    if(arr1 !== undefined && arr2 !== undefined){
      concat = arr1.concat(arr2)
      result = concat.filter(el => !arr1.includes(el) || !arr2.includes(el))
    }
    return result
  }

const getSuperArr = (arr1, arr2) => {
    let result = []
    if(arr1 !== undefined && arr2 !== undefined){
      result = arr1.filter(el => arr2.includes(el))
    }
    return result
  }

const removeDuplicates = (arr1, arr2) => {
    let result = []
    if(arr1 !== undefined && arr2 !== undefined){
      result = arr1.filter(el => !arr2.includes(el))
    }
    return result
  }

const analyseTypes = (typeArr) => {
    let type1 = typeArr.type1
    let type2 = typeArr.type2
    
    let type1Effective = type1.effective
    let type1NotEffective = type1.notEffective
    let type1Immunity = type1.immunity
    
    let type2Effective = type2.effective
    let type2NotEffective = type2.notEffective
    let type2Immunity = type2.immunity

    let resultEffectiveArr = fuseArr(type1Effective, type2Effective)
    let resultNotEffectiveArr = fuseArr(type1NotEffective, type2NotEffective)

    let superEffectiveArr = getSuperArr(type1Effective, type2Effective)
    let superNotEffectiveArr = getSuperArr(type1NotEffective, type2NotEffective)

    let effectiveArr = removeDuplicates(resultEffectiveArr, resultNotEffectiveArr)
    let notEffectiveArr = removeDuplicates(resultNotEffectiveArr, resultEffectiveArr)

    let immunityArr = fuseArr(type1Immunity, type2Immunity)

    let result = {
        effective: effectiveArr,
        notEffective: notEffectiveArr,
        superEffective: superEffectiveArr,
        superNotEffective: superNotEffectiveArr,
        immunity: immunityArr
    }

    return result

}

export default analyseTypes