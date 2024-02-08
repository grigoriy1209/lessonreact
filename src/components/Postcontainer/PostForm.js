import {useForm} from "react-hook-form";

import {postService} from "../../services/postService";

const PostForm = ({setPost}) => {
    const {reset,register,
        handleSubmit}=useForm()
    const save = (item)=>{
       postService.create(item).then(({data})=> setPost(prev=>([...prev,data])))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'title'} {...register('title')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <input type="text" placeholder={'street'} {...register('address.street')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {PostForm};
//ф-ію save запускає handleSubmit і коли він його запускає він його запускає при onSubmit
// form ми бачимо console.log(post) і вже кладе зразу готовий обєкт по цим ...register
