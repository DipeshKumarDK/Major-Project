export const changeTotal = (total) => {
    return{
        type:"CURRTOTAL",
        total:total
    }
}

export const changeSearch = (search) => {
    return{
        type:"SEARCH",
        search:search
    }
}

export const changeCategory = (category) => {
    return{
        type:"CATEGORY",
        category:category
    }
}

export const changeUser = (user) => {
    return{
        type:"CURRUSER",
        user:user
    }
}

export const changeFreeCategory = (category) => {
    return{
        type:"FREECATEGORY",
        category:category
    }
}

export const changeCurrJob = (job) => {
    return{
        type:"CURRJOB",
        job:job
    }
}

export const changeCurrResume = (resume) => {
    return{
        type:"CURRESUME",
        resume:resume
    }
}

export const changeCurrFreelancer = (free) => {
    return{
        type:"CURRFREE",
        currFree:free
    }
}

