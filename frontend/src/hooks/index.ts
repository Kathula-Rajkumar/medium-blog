import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

// Define the Blog type here since you're not splitting files
export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id:string } ) =>{
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // ✅ Correct
      },
    })
    .then(response => {
      setBlog(response.data.blog);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, [id]);

  return { loading, blog };
}

// ✅ Fetch all blogs
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
  
    useEffect(() => {
      axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // ✅ Correct
        },
      })
      .then(response => {
        setBlogs(response.data.blogs);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
    }, []);
  
    return { loading, blogs };
  };
  
// export const useBlogs = () => {
//     const [loading, setLoading] = useState(true);
//     const [blogs, setBlogs] = useState<Blog[]>([]);

//     useEffect(() => {
//         axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
//             headers: {
//                 Authorization: localStorage.getItem("token")
//             }
//         })
//             .then(response => {
//                 setBlogs(response.data.blogs);
//                 setLoading(false);
//             })
//     }, [])

//     return {
//         loading,
//         blogs
//     }
// }