// import conf from "../../conf/conf";
// import {Client, ID,Databases,Query,Storage} from 'appwrite';

// export class Service{
//     client=new Client()
//     databases;
//     bucket;

//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteurl)
//         .setProject(conf.appwriteproj_id)
//         this.databases=new Databases(this.client);
//         this.bucket=new Storage(this.client)
//     }
//     async creatpost({title,slug,content,featuredimage,status,userid}){
//                 try{
//                     return await this.databases.createDocument(conf.appwriteData_id,conf.appwriteCol_id,slug,{
//                         title,
//                         content,
//                         featuredimage,
//                         status,
//                         userid
//                     })}
//                 catch(error){
//                         console.log(error)
//                 }
//              }
//         async updatepost( slug, {title,content,featuredimage,status}){
//             try{
//                     return await this.databases.updateDocument(conf.appwriteData_id,conf.appwriteCol_id,slug,{
//                         title,
//                         content,
//                         featuredimage,
//                         status
//                     })
//             }catch(eroor){
//                 console.log('eror')
//             }
//         }

//         async deletepost(slug){
//             try{
//                     this.databases.deleteDocument(conf.appwriteData_id,conf.appwriteCol_id,slug)
//                     return true

//             }
//             catch(error){
//                     console.log('error')
//                     return false
//             }
//         }
//         async getpost(slug){
//             try{
//                 return await this.databases.getDocument(conf.appwriteData_id,conf.appwriteCol_id,slug)
//             }
//             catch(eror){
//                     console.log('error')
//             }

//         }
//         async getposts(queries=[Query.equal('status','active')]){
//                     try {
//                             return this.databases.listDocuments(conf.appwriteData_id,conf.appwriteCol_id,queries)
//                     }
//                     catch (error){
//                         console.error('error')
//                     }
//         }

//         async uploadfile(file){
//             try {
//                 return await this.bucket.createFile(
//                     conf.appwriteBucket_id,ID.unique(),file)
//             }
//             catch(error){
//                     console.log('error')
//             }
//         }
//         async deletfile(fileid){
//             try{
//                     await this.bucket.deleteFile(
//                         conf.appwriteBucket_id,
//                         fileid
//                     )
//             }catch(error){
//                 console.log('error')
//             }
//         }
//         getfileprev(fileid){
//                 return this.bucket.getFilePreview(
//                     conf.appwriteBucket_id,fileid
//                 )
//         }
//     }
    




// const service=new Service()
// export default  service
//---------------------------------------------------------------------firebase comes here 
// ----------------authentication----------------------------------------
import {auth,db, stora } from "./firebase"; 

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,onAuthStateChanged} from 'firebase/auth'
class Authdata{
    
    constructor(){
        this.authint=auth
    }
    async pass({email,password}){
      console.log(email,password)
        try{
       const acc= await createUserWithEmailAndPassword(this.authint,email,password)
       if(acc){
        this.login({email,password})
        return acc
          }
       else{
        return acc
        }
       }
            catch(error){
        console.log('pass is not working')
    }
    }
    async login({email,password}){
        try{
           const log1= await signInWithEmailAndPassword(this.authint,email,password)
            return log1
        }  
        catch(error){
        console.log('error in login')
        }
    }

    async logout(){
        try {
             await  signOut(this.authint)
        }
        catch(error){
            console.log('error in signout')
        }
    }

     getstatus(callback){
        try {
             onAuthStateChanged(this.authint,(user)=>{
                if (user){
                    callback(true,user)
                }
                else{   
                    callback(false,null)
                }
            })
        } 
        catch(error){
            console.log('error in the get status')
        }  
    
}

        getcurrentuser(){
            return this.authint.currentUser
        }

}

const account=new Authdata()
//---------------------setup daatabase----------------------im
import {collection,addDoc,getDoc,getDocs,doc,updateDoc,deleteDoc} from 'firebase/firestore'
class Databases{
        constructor(){
            this.d_base=db
        }
        async createDocument(collectionName, data) {
          // console.log(data)
          try {
            const docRef = await addDoc(collection(this.d_base, collectionName), data);
            console.log('Document created with ID: ', docRef.id);
            return docRef.id;
          } catch (error) {
            console.error('Error adding document: ', error);
            throw error;
          }
        }

        async readDocuments(collectionName) {
          try {
            const querySnapshot = await getDocs(collection(this.d_base, collectionName));
            
        
            const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            return documents;
          }   
          catch (error) {
            console.log('Error in the read doc:', error);
            throw error; 
          }
        }

        async singleDoc(collectionName, docid){
          try{
            const qwery = doc (this.d_base,collectionName,docid)
            const docSnap = await getDoc(qwery);
            if (docSnap.exists()) {
              // console.log('Document data:', docSnap.data());
              return docSnap.data()
              // console.log('Document data:', docSnap.data());
        }
      }catch (error) {
        console.error("Error reading document:", error);
        return null;
      }
    }



        // async updateDocument(collectionName, documentId, data) {
        //     try {
        //       const docRef = doc(this.d_base, collectionName, documentId);
        //       await updateDoc(docRef, data);
        //       return documentId
        //     } catch (error) {
        //       console.error("Error updating document: ", error);
        //       throw error;
        //     }
        //   }

        async  updateDocument(collectionName, documentId, data) {
           
          
          try {
            const docRef = doc(this.d_base, collectionName, documentId);  // Ensure this.d_base is initialized
            await updateDoc(docRef, data);
            return documentId;  // Return the document ID after successful update
          } catch (error) {
            console.error("Error updating document: ", error);
            throw error;  //
          }
        }

          async deleteDocument(collectionName, documentId) {
            try {
              const docRef = doc(this.d_base, collectionName, documentId);
              await deleteDoc(docRef);
              console.log("Document deleted with ID: ", documentId);
              return true
            } catch (error) {
              console.error("Error deleting document: ", error);
              throw error;
            }
          }
}
const data_base=new Databases()

//______________________storage
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
class Storage{
        constructor(){
            this.str=stora
        }
        async uploadfile(file,filepath){
            try{        
                const storeRef=ref(this.str,filepath)
                const snapshot=await uploadBytes(storeRef,file)
                const downloadURL = await getDownloadURL(storeRef);
                return downloadURL
              
            }
            catch(error){
                console.log('error')
                throw error
            }

        }
    
        async getFileURL(filePath) {
            try {
              const storageRef = ref(this.str, filePath);
              const downloadURL = await getDownloadURL(storageRef);
              return downloadURL;
            } catch (error) {
              console.error("Error getting file URL: ", error);
              throw error;
            }
          }
         
          async deleteFile(filePath) {
            try {
              const storageRef = ref(this.str, filePath);
              await deleteObject(storageRef);
              console.log('File deleted successfully');
            } catch (error) {
              console.error("Error deleting file: ", error);
              throw error;
            }
          }

}




const strg=new Storage()

export {account,data_base,strg}


