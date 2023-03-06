import classes from './AvaliableMeals.module.css'
const DUMMY_MEALS = [
    {
    id: 'm1',
    name: 'Sushi',
    description: 'Peixes finos com vegetais',
    price: 22.99,
    },
    {
        id: 'm2',
        name: 'Macarrão',
        description: 'Massa italiana com molho do chef',
        price: 20.50,
        
    },
    {
        id: 'm3',
        name: 'Peixe especial',
        description: 'Peixe norueguês empanado com azeite português foleado a ouro',
        price: 280.01,
    },
    {
        id: 'm4',
        name: 'Garrafa de água',
        description: 'Uma Garrafa com água dentro',
        price: 5.00,
    }
]
const AvailableMeals = ()=>{
    const pratosMapeados = DUMMY_MEALS.map(prato=> <li>{prato.name}</li>)
    return(
        <>
        <section className={classes.meals}>
            <ul>
                { pratosMapeados}
            </ul>
        </section></>
    )
}

export default AvailableMeals;