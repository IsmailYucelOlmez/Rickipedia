import { create } from "zustand";

const settingsStore=(set,get)=>({

    theme:'light',
    setTheme:(themeOption)=>{
    
        set((state) => ({ theme:themeOption }));
        
    },
    sidebar:false,
    setSidebar:(sidebarValue)=>{

        set((state)=>({sidebar:sidebarValue}))
    }
    
})

const useSettingsStore=create(settingsStore);

export default useSettingsStore