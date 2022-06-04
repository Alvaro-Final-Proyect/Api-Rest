const matchPopulater = {
    path: "players",
    model: "User",
    retainNullValues: true 
}

const populater = [
    {
        path: "roundOfSixteen",
        model: "Match",
        populate: matchPopulater 
    },
    {
        path: "quarterFinal",
        model: "Match",
        populate: matchPopulater 
    },
    {
        path: "semifinals",
        model: "Match",
        populate: matchPopulater 
    },
    {
        path: "final",
        model: "Match",
        populate: matchPopulater
    }
]

module.exports = populater;