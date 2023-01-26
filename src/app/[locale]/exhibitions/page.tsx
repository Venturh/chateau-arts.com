import { getAllExhibitions } from "@/src/lib/sanity.client"
import { useTranslations } from "next-intl";
import {use} from 'react';


export const revalidate = 60;


export default  function Home() {
    const exhibitions =  use(getAllExhibitions())

    const t = useTranslations();


    return (
        <main >
            <h1>{t('exhibitions')}</h1>
            <div className="space-y-4">
                {exhibitions.map((exhibition) => (
                    <div key={exhibition.slug}>
                        <h1>{exhibition.title.en}</h1>
                    </div>
                ))}
            </div>
        </main>
    )
}
