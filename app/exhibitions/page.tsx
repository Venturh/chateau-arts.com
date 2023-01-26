import { getAllExhibitions } from "@/lib/sanity.client"


export const revalidate = 60;


export default async function Home() {
    const exhibitions = await getAllExhibitions()

    return (
        <main >
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
