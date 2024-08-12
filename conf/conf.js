const conf={
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteproj_id:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteData_id:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCol_id:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucket_id:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

}

export default conf


