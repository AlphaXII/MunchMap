import { Badge } from "@mantine/core";

export function GradeBadge({ grade, style }: { grade: string; style: any }) {
  const color =
    grade === "5"
      ? "blue"
      : grade === "4"
      ? "indigo"
      : grade === "3"
      ? "violet"
      : grade === "2"
      ? "pink"
      : "red";
  const rating =
    grade === "5"
      ? "outstanding"
      : grade === "4"
      ? "great"
      : grade === "3"
      ? "okay"
      : grade === "2"
      ? "meh"
      : "bad";
  return (
    <>
      <Badge
        className={style}
        variant="gradient"
        gradient={{ from: "#512DA8", to: color }}
      >
        {rating}
      </Badge>
    </>
  );
}
