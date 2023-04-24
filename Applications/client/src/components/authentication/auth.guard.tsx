import { User, onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../../utils"
import { useNavigate } from "react-router-dom"

// export a context
export  const GreenContext = createContext<User|null>(null)

export const RouteGuard = ({children}: any) => {
    const [user, setUser] = useState<User>()
    const nav = useNavigate()
    useEffect(()=>{
        const sub = onAuthStateChanged(auth, (user)=>{
            if(!user) {
                nav("/signin")
            }
            setUser(user as User)
            // additional logic
        })
        return sub
    }, [user,nav,setUser])
    return <GreenContext.Provider value={user as any}>
        {children}
    </GreenContext.Provider>
}
