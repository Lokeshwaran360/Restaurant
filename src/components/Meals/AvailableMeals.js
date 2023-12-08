import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Idly Upma (Surya Vamsam Special)',
    description: 'A great food with left over Idlis',
    recommended: 'Recommended for newly married couples',
    price: 40,
  },
  {
    id: 'm2',
    name: 'Kaithi Briyani',
    description: 'Get a multipurpose HandCuff as a complementary',
    recommended: 'Recommended for Prisioners, drug dealers and Agent Operatives',
    price: 480,
  },
  {
    id: 'm3',
    name: 'Kakka muttai Omelette',
    description: 'Kakka Muttai omelette with exclusive toppings of Lokesh Meals',
    recommended: 'Recommended for Childrens',
    price: 80,
  },
  {
    id: 'm4',
    name: 'Pizza',
    description: 'A Great Food made with veggies and cheese',
    recommended: 'Recommended for horror movie lovers',
    price: 50,
  },
  {
    id: 'm5',
    name: 'Jigarthanda',
    description: 'A great intake before a murder',
    recommended: 'Recommended for Gangsters and Rowdies',
    price: 40,
  },
 
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
     <MealItem
     key={meal.id}
     name={meal.name}
     description={meal.description}
     price={meal.price}
     recommended={meal.recommended}
     />
  ));

  return (
    <section className={classes.meals}>
      <Card>
         <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;