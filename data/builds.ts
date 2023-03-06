import { ImageDetailInterface } from "types/types"
import { Model } from "types/types"

export const detailedImage:ImageDetailInterface = {
  src: "/images/myroom-1.png",
  details : [{
    top: "7%",
    left: '44%',
    name: 'Piston Cup'
  },
  {
    top: "54%",
    left: '13%',
    name: 'Pizza Box'
  },
  {
    top: "15%",
    left: '90%',
    name: 'Pringles'
  },
  {
    top: "30%",
    left: '27%',
    name: 'Buzz Light Year'
  },
]
} 

export const builds:Model[] = [
  {
    name:"vintage-kitchen",
    count: 2
  },
  {
    name:"modern-room",
    count: 1
  },
  {
    name:"kitchen",
    count: 3
  },
  {
    name:"wooden-house",
    count: 1
  },
  {
    name:"saul",
    count: 1
  },
  {
    name:"living-room",
    count: 3
  },
  {
    name:"bedroom",
    count: 4
  },

]

export const homeBuilds: Model[] = [
  {
    name:"vintage-kitchen",
    count: 2
  },
  {
    name:"saul",
    count: 1
  },
  {
    name:"modern-room",
    count: 3
  },
]