import {
  Card,
  Image,
  Text,
  Group,
  Title,
  Container,
  Badge,
  CardSection,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./BigCard.module.css";
import restPic from "../resource/doubleknot1.png";
import { dummyDatabase } from "../resource/dummyDatabase";
import { GradeBadge } from "../GradeBadge/GradeBadge";

let property = dummyDatabase[0];

function fillCard(
  rating: string,
  storeName: string,
  address: string,
  region: string,
  description: string
) {
  return (
    <>
      <Title className={classes.restName}>{storeName}</Title>
      <GradeBadge style={classes.badge} grade={rating} />
      <Text className={classes.restAddress}>{address}</Text>
      <Text className={classes.restAddress}>{region}</Text>
      <Text lineClamp={4} className={classes.textBox}>
        {description}
      </Text>
      <Text className={classes.articleLink}>
        <a href="./">
          read more <IconChevronRight color="#800020" />
        </a>
      </Text>
    </>
  );
}

export function BigCard() {
  return (
    <>
      <Card p={0} className={classes.card} visibleFrom="sm">
        <Group wrap="nowrap" className={classes.group}>
          <Image src={restPic.src} h={300} alt="something" />
          <Container px={0} className={classes.container}>
            {fillCard(
              property.rating,
              property.storeName,
              property.address,
              property.region,
              property.description
            )}
          </Container>
        </Group>
      </Card>
      <Card radius="md" className={classes.card2} hiddenFrom="sm">
        <CardSection className={classes.section}>
          <Image src={restPic.src} w="100%" alt="something" />
        </CardSection>
        <Container px={0} className={classes.container2}>
          {fillCard(
            property.rating,
            property.storeName,
            property.address,
            property.region,
            property.description
          )}
        </Container>
      </Card>
    </>
  );
}
