import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpinLoader from '../Loaders/SpinLoader';

const BlogPost = () => {
    const { blogId } = useParams(); 
    const [post, setPosts] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true); 
        fetch(`https://dummyjson.com/posts/${blogId}`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, [blogId]); 

    if (loading) {
        return <SpinLoader />; 
    }

    return (
        <div className="container">
            <div className="">
                <div className="clearfix h-[80vh] no-scrollbar overflow-y-auto p-4">
                    <img
                        src="https://via.placeholder.com/1920x1080?text=Heroku+Deployment"
                        alt="Blog Post"
                        className="float-left w-1/4 mr-4 mb-4 rounded-lg shadow-lg"
                    />
                    <div className="text-base leading-relaxed">
                        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                        <p className="mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus perspiciatis commodi totam maiores molestias optio alias. At facilis dolorem modi quos, autem accusamus beatae aperiam laboriosam laborum corporis obcaecati minus sunt numquam sed neque ut, distinctio laudantium sapiente officia! Consectetur minus velit cupiditate omnis rerum esse facere eligendi assumenda, reprehenderit quasi amet quibusdam tempore consequuntur consequatur aut eaque soluta, veniam placeat autem, incidunt illum nisi et. Dolor placeat deleniti nemo debitis neque officia odio accusamus aspernatur numquam, eaque amet maxime labore, veritatis voluptates tenetur autem fugit beatae rerum quaerat sint vero minima, molestiae hic. Ducimus vel maxime cumque praesentium quisquam perspiciatis adipisci provident ut ullam unde, non officiis fugit temporibus dolorem ipsa? Beatae corporis animi praesentium sequi. Atque, eligendi, tempore nesciunt ratione suscipit odit eaque cumque cum illum magnam, nisi quis officiis eius similique saepe perspiciatis commodi recusandae molestias expedita alias quasi iste fugiat? Est consectetur adipisci, modi tempore repudiandae quisquam, id officia quis, quo delectus necessitatibus consequatur laborum natus quaerat explicabo quos. Quos deserunt consequatur iste blanditiis doloribus vero, ab dolores est non molestias, repudiandae expedita pariatur ea voluptatum, quae nemo assumenda nisi atque aspernatur! Dolorem neque non at beatae minus perferendis cumque vitae ipsum saepe tempore! Quisquam doloribus autem eum fuga odio delectus alias commodi sunt at vel quasi sit possimus quae incidunt officia eos minima magni, animi, magnam dicta rem mollitia placeat id! Magnam natus quisquam molestias itaque eaque corporis voluptates accusamus tenetur earum, aspernatur, quia voluptas officiis reprehenderit? Perferendis soluta facere ipsam nihil alias iusto, nostrum delectus a ex suscipit doloribus voluptatum explicabo. Cum exercitationem ut porro numquam, quod earum totam quas repellat magni minima magnam? Quo nemo dolorum, adipisci quod odio libero perspiciatis quia sed esse autem dolorem, repudiandae provident ex aspernatur? Sint tempore, iste facere qui ab asperiores facilis fugiat sequi consequuntur quos nam excepturi aliquid voluptatibus. Itaque nulla voluptates sint nihil minima qui eaque dolorem a dicta esse? Fugit pariatur odio alias rem amet assumenda magnam necessitatibus nemo debitis maxime! Iusto inventore culpa suscipit maiores fugit ipsum, recusandae praesentium aperiam placeat dolorum officia quia saepe vitae nemo at! Alias, in totam fuga similique sunt odit neque recusandae esse dignissimos veritatis minima ab eos nobis optio eaque animi corrupti et ducimus! Natus corrupti optio nam ipsa rem praesentium, quis velit iste quidem nisi minima, omnis tempora distinctio maxime tenetur dolorem vitae, quod perspiciatis illo placeat ipsum laudantium sequi in nesciunt. Nostrum minima, quia non earum labore animi ut laborum consectetur cumque doloribus, repellendus suscipit quis delectus quae dolorum. Cum praesentium architecto ratione quibusdam possimus temporibus rerum explicabo incidunt saepe dolor. Facere quasi dolores nemo quam iste nulla quisquam, eos doloribus numquam blanditiis consequatur voluptatem architecto libero similique exercitationem error fugiat rerum quaerat esse mollitia quos tempora odio facilis! Quibusdam et atque numquam vitae, impedit voluptate sed mollitia ipsam aliquam, possimus eum minima quis id ratione libero voluptates dicta? Aliquam, repudiandae officia. Doloribus possimus voluptate molestias? Officia blanditiis, tenetur magni tempora expedita facere impedit iusto fugit modi provident repudiandae aliquam dolore mollitia voluptatum, et saepe.
                        </p>
                        <div className="flex gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="italic text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="text-sm">
                            <p>
                                Likes: {post.reactions?.likes} | Dislikes: {post.reactions?.dislikes} | Views: {post.views}
                            </p>
                            <p>User ID: {post.userId}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
