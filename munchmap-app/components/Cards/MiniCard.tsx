import { Card, Image, Text, Group, Badge, CardSection, Box } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./MiniCard.module.css";
import pic from "../resource/doubleknot2.jpg"
import dummyData from "../resource/cardInfo.json"

let property = {
  image: pic,
  ...dummyData};

interface MiniCardProps {
  image: string;
  storeName: string;
  address: string;
  region: string;
  rating: string;
}

export function MiniCard() {
  return (
    <Card shadow="md" radius="md" className={classes.card}>
      <CardSection className={classes.section}>
        <Image
          src={property.image.src}
          alt="something"
          className={classes.image}
        />
      </CardSection>
       <Badge
        className={classes.badge}
        size="xs"
        variant="gradient"
        gradient={{ from: "#512DA8", to: "blue" }}
      >
        {property.rating}
      </Badge>
      <Group className={classes.group}>
        <Box className={classes.header}>
          {property.storeName}
          <Text className={classes.text}>
            {property.address}
            {property.region}
          </Text>
        </Box>
      </Group>
    </Card>
  );
}
