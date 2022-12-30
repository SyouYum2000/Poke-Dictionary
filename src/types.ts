export type poke ={
  name:string,
  url:string
}

export type pokeData ={
  abilities:string[],
  base_experience:number,
  forms:{
    name:string,
    url:string
  }[],
  game_indices:{
    game_index:number,
    version:{
      name:string,
      url:string
    }
  }[],
  height:number,
  held_items:any[],
  id:number,
  is_default:boolean,
  location_area_encounters:string,
  
}