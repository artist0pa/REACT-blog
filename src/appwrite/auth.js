// import conf from "../../conf/conf";
// import {Client,Account, ID} from 'appwrite'

// export class AuthService{
//     client=new Client();
//     account;
//     constructor(){
//     this.client
//     .setEndpoint(conf.appwriteurl)
//     .setProject(conf.appwriteproj_id)
//     ,
//     this.account=new Account(this.client)

//     }
//     async creatAccount({email,password,name}){
//        try {
//       const user=  await this.account.create(ID.unique(),email,password,name)
//       if (user){
//         this.login({email,password})
        
//       }else {
//         return user
//       }
//           }

//        catch(error){
//         throw('error')  
//        }
       
//     }
//     async login({email, password}){ 
//             try {
//                 return await this.account.createEmailPasswordSession(email,password)
//             }
//             catch(error){
//                     throw ('error')
//             }
//     }
//     async getcurrentuser(){
//        try{
//          return await   this.account.get()
//        }
//        catch(error){
//             throw ('error')
//        }

//     }
//     async lagout(){
//         try{
//                 await this.account.deleteSession('current')
//         }
//         catch(erorr){
//                 throw ('error')
//         }
//     }
// }

// const authservice=new AuthService()


// export default authservice



// fire base code starting from here ------------------------->







