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
import { GradeBadge } from "../GradeBadge/GradeBadge";

export function MiniCard({
  restaurantData,
}: {
  restaurantData: dataInterface;
}) {
  return (
    <Card w="100%" className={classes.card}>
      <CardSection className={classes.section}>
        <Image
          src={restaurantData.image.src}
          alt="something"
          className={classes.image}
        />
      </CardSection>
      <GradeBadge style={classes.badge} grade={restaurantData.rating} />
      <Group className={classes.group}>
        <Box className={classes.header}>
          {restaurantData.storeName}
          <Text className={classes.text}>
            {restaurantData.address}
            <br></br>
            {restaurantData.region}
          </Text>
        </Box>
      </Group>
    </Card>
  );
}
