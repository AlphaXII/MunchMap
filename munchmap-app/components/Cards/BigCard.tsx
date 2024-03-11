import { Card, Image, Text, Group, Title, Container, Box } from "@mantine/core";
import classes from "./BigCard.module.css";
import restPic from "./doubleknot1.png";

let property = {
  image: restPic,
  storeName: "Double Knot",
  address: "120 SOUTH 13TH ST",
  region: "PHILADELPHIA, PA, 19107",
  rating: "outstanding",
  description:
    "Indulge in Double Knot's happy hour for a delightful experience! Discover an enticing array of delectable dishes, generously portioned and reasonably priced.  Indulge in Double Knot's happy hour for a delightful experience! Discover an enticing array of delectable dishes, generously portioned and reasonably priced.",
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
        <Container className={classes.container}>
          <Title className={classes.restName}>{property.storeName}</Title>
          <div>
            <Text className={classes.restAddress}>{property.address}</Text>
          </div>
          <div>
            <Text className={classes.restAddress}>{property.region}</Text>
          </div>
          <div>
            <Box className={classes.textBox}>
              <Text truncate="end">
                {property.description}
              </Text>
            </Box>
          </div>
          {/* <Text lineClamp={4} className={classes.articleLink}>read more</Text> */}
        </Container>
      </Group>
    </Card>
  );
}
