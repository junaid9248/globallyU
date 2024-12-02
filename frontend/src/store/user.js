import {create} from "zustand"

export const useUserStore = create((set) => ({

    users:[],
    setUsers: (users) => set({ users }),

    //THIS IS THE FUNCTION WE WILL BE USING TO POST THE GLOBAL USER OBJECT
    createUser: async(newUser) => {

        if (!newUser.account.name || !newUser.account.pass){

            return({success:false, message: "Please provide valid username and password"})
        }

        //If there is no issue we can send a user's details to the db cluster
        const resp = await fetch("/api/userlist", 

          {  method:'POST',
            headers:{
                "Content-Type":"application/json",
            },

            body:JSON.stringify(newUser)
        })

        const data = await resp.json();

        set((state)=>({users:[...state.users, data.data]}))
        return {success: true, message:'New user added to cluster successfully'}
    }

}))