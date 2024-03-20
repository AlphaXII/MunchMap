import { Grid, GridCol } from "@mantine/core"
import { dataInterface } from "../resource/interfaces"
import { MiniCard } from "../Cards/MiniCard"

export default function IndexResult({style, children}: {style: string, children: dataInterface[]}) {
    const items = children.map((item) => (
        <GridCol key={item.storeName} span={4}>
            <MiniCard restaurantData={item}/>
        </GridCol>
    ))
    return (
        <Grid className={style}>
            {items}
        </Grid>
    )
}