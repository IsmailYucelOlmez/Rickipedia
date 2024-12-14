import { create } from "zustand";

const settingsStore=(set,get)=>({

    theme:'light',
    setTheme:(themeOption)=>{
    
        set((state) => ({ theme:themeOption }));
        
    },
    
    
})

const useSettingsStore=create(settingsStore);

export default useSettingsStore