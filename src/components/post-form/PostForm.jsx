import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button,  RTE, Select } from "../index";
import Input from "../Input";
import {strg,data_base} from  '../../appwrite/config'
import { json, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { account } from "../../appwrite/config"; 

export default function PostForm({ post,slug }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) =>state.auth.user===JSON? JSON.parse(state.auth.user) : state.auth.user);
    
    const submit = async (data) => {
        
        if (post) {
            
            const file = data.image[0] ? await strg.uploadfile(data.image[0],data.image[0].name) : null;
                
            if (file) {
                if(post.featuredImage){
                const path=extractStoragePath(post.featuredImage)
                strg.deleteFile(path);
                post.featuredImage=null
                }
            }
            
             const data1={...data, featuredImage: file ? file : undefined}
             
             const dbPost = await data_base.updateDocument ('users',slug,{  ...data1, image:null});
            if (dbPost) {
                navigate(`/post/${dbPost}`);
            }
        } else {
            const file = await strg.uploadfile(data.image[0],data.image[0].name);
            const userData =  account.getcurrentuser()  
            const idx =userData.uid
            if (file) {
                data.featuredImage = file;
                const {content,featuredImage,slug,status,title}=data
                const dbPost = await data_base.createDocument( 'users', {content,idx,featuredImage,slug,status,title}  );
                console.log(dbPost)
                if (dbPost) {
                    navigate(`/post/${dbPost}`);
                }
            }
        }
    };
    
    function extractStoragePath(url) {
        const storagePath = url.split('/o/')[1].split('?')[0];
        return decodeURIComponent(storagePath);
      }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                        
                            src={post.featuredImage}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}