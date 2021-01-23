export interface Itarget {
  id: number; 
  name: string; 
  price: number; 
  image: string; 
  location: { geo: string; match: number; levels: number[]; };
  types: string[]; 
  stats:
  { amount: number; factor: number; description: string; }[],
}

export interface Itargets {
  targets: Itarget[]
}