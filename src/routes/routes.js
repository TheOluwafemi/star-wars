import Homepage from '../components/Homepage';
import AllStarships from '../components/Features/Starships/AllStarships'
import AllCharacters from '../components/Features/Characters/AllCharacters'
import AllPlanets from '../components/Features/Planets/AllPlanets'
import Character from '../components/Features/Characters/Character'
import Planet  from '../components/Features/Planets/Planet'
import Starship from '../components/Features/Starships/Starship'

export default [
  { path: '/', redirect: '/Homepage' },
  { path: '/Homepage', name: 'home', component: Homepage },
  { path: '/all-starships', name: 'all-starships', component: AllStarships },
  { path: '/all-characters', name:'all-characters', component: AllCharacters },
  { path: '/all-planets', name: 'all-planets', component: AllPlanets },
  { path: '/planet/:name', name:'planet', component: Planet, props: true },
  { path: '/starship/:name', name:'starship', component: Starship, props: true },
  { path: '/character/:name', name:'character', component: Character, props: true }
];