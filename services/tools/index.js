localhostrest='http://192.168.43.161:8080/company/restaurant/'
localhostrestspec='http://192.168.43.161:8080/company/restaurant/specialite/'
localhostitem='http://192.168.43.161:8080/company/Menu/items/'
obj=''
class tools {
     getUrlRest(obj){
        return localhostrest+obj
    }
    getUrlRestBySpec(obj){
        return localhostrestspec+obj
    }
    getUrlItem(obj){
        return localhostitem+obj
    }
    
}
const tool = new tools();
export default tool;
