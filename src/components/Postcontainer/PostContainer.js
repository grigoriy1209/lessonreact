import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {PostForm} from "./PostForm";
import {Posts} from "./Posts";

const PostContainer = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts((data)))
    }, []);
    return (
        <div>
            <PostForm setPost={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostContainer};