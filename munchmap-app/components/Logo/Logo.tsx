import { Group, Text, Title } from "@mantine/core"
import classes from './Logo.module.css'

function Logo() {
    return (
        <Group h="100%" justify="flex-start" className={classes.mmlogo}>
            <Title fw={300} className={classes.textBox}>
                Munch {' '}
                <Text fw={900} inherit c="yellow.5">Map</Text>
            </Title>
        </Group>
        //<></>
    )
}

export default Logo;