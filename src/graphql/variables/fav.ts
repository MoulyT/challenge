import { makeVar } from '@apollo/client'

const myReactiveFav = makeVar<number[]>([])

export default myReactiveFav
