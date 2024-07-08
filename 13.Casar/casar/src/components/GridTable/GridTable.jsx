import { GridItem } from './GridItem'
import './GridTable.css'

export const GridTable = () => {
  return (
    <section className='gridTable'>
        <GridItem className={item1}/>
        <GridItem className={item2}/>
        <GridItem className={item3}/>
        <GridItem className={item4}/>
        <GridItem className={item5}/>
        <GridItem className={item6}/>
    </section>
  )
}
