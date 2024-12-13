import { create } from "zustand";

const settingsStore=(set,get)=>({

    theme:'light',
    setTheme:(themeOption)=>{
    
        set((state) => ({ theme:themeOption }));
        
    },
    baseUrl:'',
})

const useSettingsStore=create(settingsStore);

export default useSettingsStore