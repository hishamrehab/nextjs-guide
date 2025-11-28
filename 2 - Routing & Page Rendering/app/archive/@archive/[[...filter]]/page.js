import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({params}) {
    const filter =  params.filter;
    console.log(filter);

    const links = getAvailableNewsMonths();

    // const news = getNewsForYear(newsYear);
    
    return (
       <header id="archive-header">
            <nav>
                 <ul>
                 {links.map((link) => <li key={link}>
                    <Link href={`/archive/${link}`} >
                     {link}
                    </Link>

                 </li>)}
                 </ul>
            </nav>
        </header>
        // <NewsList news={news} />
    )
}