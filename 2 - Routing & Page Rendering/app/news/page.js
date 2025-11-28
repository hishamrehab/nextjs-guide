import Link from "next/link";

export default function  NewsPage() {
    return <>
    <h1>
        News Page
    </h1>
    <ul>
        <li>
            <Link to="/news/first-news">Fist News Item</Link>
        </li>

         <li>
              <Link to="/news/second-news">Second News Item</Link>
        </li>


         <li>
            <Link to="/news/third-news">Third News Item</Link>
        </li>

    </ul>
    </>
}