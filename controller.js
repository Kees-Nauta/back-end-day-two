const houses = require('./db.json')
let globalID = 4






module.exports = { 
    getHouses: (req, res) =>{
        res.status(200).send(houses)
    },
    createHouse: (req, res) =>{
        const body = req.body
        const newHouse = {
            id: globalID,
            address: body.address,
            price: body.price,
            imageURL: body.imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalID++
    },
    delHouse: (req, res) =>{
        const id = req.params.id
        const index = houses.findIndex
        (house => house.id === +id)

        houses.splice(index, 1)

        res.status(200).send(houses)
    },
    changePrice: (req, res) =>{
        const {id} = req.params
        const {type} = req.body
        const index = houses.findIndex(house =>{
            return house.id === +id
        })

        if (type === `minus`) {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else if(type === `plus`){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else {
            res.status(400)
        }
    }

}