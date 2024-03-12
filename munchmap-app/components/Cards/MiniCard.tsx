import { Card, Image, Text, Group, Title, Container } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./BigCard.module.css";
import restPic from "./doubleknot1.png";

let property = {
  image: restPic,
  storeName: "Double Knot",
  address: "120 SOUTH 13TH ST",
  region: "PHILADELPHIA, PA, 19107",
  rating: "outstanding",
  description:
    "Indulge in Double Knot's happy hour for a delightful experience! Discover an enticing array of delectable dishes, generously portioned and reasonably priced.",
};

interface BigCardProps {
  image: string;
  storeName: string;
  address: string;
  rating: string;
  description: string;
}

export function BigCard() {
  return (
    <Card shadow="md" radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" className={classes.group}>
        <Image src={property.image.src} h={300} alt="something" />
        <Container px={0} className={classes.container}>
          <Title className={classes.restName}>{property.storeName}</Title>
          <div>
            <Text className={classes.restAddress}>{property.address}</Text>
          </div>
          <div>
            <Text className={classes.restAddress}>{property.region}</Text>
          </div>
          <div>
            <Text lineClamp={4} className={classes.textBox}>
              {property.description}
            </Text>
          </div>
          <Text className={classes.articleLink}>
            <a href="./">
              read more <IconChevronRight color="#800020" />
            </a>
          </Text>
        </Container>
      </Group>
    </Card>
  );
}
