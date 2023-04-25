export declare interface AuthComponentProps {
    authType: AuthenticationType
    image?: string
    title?: string
    description?: string
    theme: AuthThemesType
    [key:string]: any

}

export declare type AuthenticationType ="login"| "register"|"password-recovery"|"verify-password"
export declare type AuthThemesType = "default"|"batlaey"|"scotchy"|"neyo"|"tikey"|"simaphy"| "veagy"
