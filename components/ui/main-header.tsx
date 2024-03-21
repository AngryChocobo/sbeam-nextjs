import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ThemeModeToggle } from "./theme-mode-toggle";

export function MainHeader() {
  return (
    <header className="max-w-screen-lg m-auto flex justify-between p-4">
      <ToggleGroup type="single">
        <ToggleGroupItem value="STORE">STORE</ToggleGroupItem>
        <ToggleGroupItem value="COMMUNITY">COMMUNITY</ToggleGroupItem>
        <ToggleGroupItem value="ABOUT">ABOUT</ToggleGroupItem>
        <ToggleGroupItem value="SUPPORT">SUPPORT</ToggleGroupItem>
      </ToggleGroup>
      <ThemeModeToggle />
    </header>
  );
}
