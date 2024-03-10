import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { HeaderNoGrid } from "./components/Header";
import '@mantine/carousel/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor: "#b4d9b0"}}>
        <MantineProvider theme={theme}>
          <HeaderNoGrid>{children}</HeaderNoGrid>
        </MantineProvider>
      </body>
    </html>
  );
}
