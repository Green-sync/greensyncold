export interface UserDetails{
    email: string;
    password: string;
    lastName: string;
    firstName: string;
}

export interface Socials{
    name: string;
    icon: string;

}


export declare type SocialProviders = "google" | "facebook" 