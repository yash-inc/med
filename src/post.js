import React, { useEffect, useState } from "react";

function Post() {

    const [users, setUser] = useState([]);
    const [id, setid] = useState();

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch(`https://django-react-blog-application.herokuapp.com/blog/${ID}``).then((result) => {
            result.json().then((resp) => {
                // console.warn(resp)
                setUser(resp)
            })
        })
    }

    return (
        <h1></h1>
        
    )
}
export default Post