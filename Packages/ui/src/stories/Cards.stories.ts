import { Meta } from "@storybook/react";
import { CardComponent } from "../components";

const meta = {
    component: CardComponent,
    title: "Components/Cards",
    args: {}
} satisfies Meta<typeof CardComponent>

export default meta;
type Story = Meta<typeof meta>

export const Profile: Story = {

}

export const PriceCard: Story = {
    
}