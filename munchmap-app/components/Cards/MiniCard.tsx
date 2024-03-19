import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  CardSection,
  Box,
} from "@mantine/core";
import classes from "./MiniCard.module.css";
import { dataInterface } from "../resource/interfaces";



export function MiniCard({restaurantData}: {restaurantData: dataInterface}) {
  return (
    <Card h="100%" w="100%" className={classes.card}>
      <CardSection className={classes.section}>
        <Image
          src={restaurantData.image.src}
          alt="something"
          className={classes.image}
        />
      </CardSection>
      <Badge
        className={classes.badge}
        // size="xs"
        variant="gradient"
        gradient={{ from: "#512DA8", to: "blue" }}
      >
        {restaurantData.rating}
      </Badge>
      <Group className={classes.group}>
        <Box className={classes.header}>
          {restaurantData.storeName}
          <Text className={classes.text}>
            {restaurantData.address}
            {restaurantData.region}
          </Text>
        </Box>
      </Group>
    </Card>
  );
}
