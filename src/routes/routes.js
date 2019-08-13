import Homepage from '../components/Homepage';
import AllStarships from '../components/Features/Starships/AllStarships'
import AllCharacters from '../components/Features/Characters/AllCharacters'
import AllPlanets from '../components/Features/Planets/AllPlanets'

export default [

  { path: '/', redirect: '/Homepage' },
  { path: '/Homepage', component: Homepage },
  { path: '/all-starships', component: AllStarships },
  { path: '/all-characters', component: AllCharacters },
  { path: '/all-planets', component: AllPlanets },

];