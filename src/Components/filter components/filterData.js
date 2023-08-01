import { cars } from "../../Data/cars";

let brands = ['All'];
let persons = [];
let transmission = ['All'];
let fuelType = ['All'];
let bodyType = ['All'];
let category = ['All'];



function getFilterData(cars, dataArray, filterBy) {
    for (let i = 0; i < cars.length; i++) {
        const elementExist = dataArray.includes(cars[i][filterBy])
        if (!elementExist) {
            dataArray.push(cars[i][filterBy])
        }
    }
    return dataArray.sort();
}


getFilterData(cars, brands, 'brand');
getFilterData(cars, persons, 'persons');
getFilterData(cars, transmission, 'transmission');
getFilterData(cars, fuelType, 'fuelType');
getFilterData(cars, bodyType, 'bodyType');
getFilterData(cars, category, 'category');


export { getFilterData, brands, persons, transmission, fuelType, bodyType, category };