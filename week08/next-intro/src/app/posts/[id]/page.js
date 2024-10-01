export default function Post({params}) {
    console.log(params)
    return (
        <div>
            <h1>Post Page 1 add a <span>/:commentId</span> to the url to see comment pages for this post.</h1>
        </div>
    )
}