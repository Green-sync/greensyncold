export interface UserDetails{
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    farmType: string;
}

export interface Socials{
    name: string;
    icon: string;

}


export declare type SocialProviders = "google" | "facebook" 