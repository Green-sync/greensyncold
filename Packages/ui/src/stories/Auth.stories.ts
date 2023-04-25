import { AuthComponent } from "../components";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    component: AuthComponent,
    title: "Components/Auth",
    args: {
        option: "login", theme: "default"
    }
}  satisfies Meta<typeof AuthComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
    args: {
        theme: "scotchy",
        image: "/login.jpeg",
        option: "login"
    }
}

export const Register: Story = {
    args: {
        theme: "neyo",
        image: "/vite.svg",
        option: "register"
    }
}
