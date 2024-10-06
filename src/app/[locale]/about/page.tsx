import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

import { Breadcrumbs } from '@/components/ui/breadcumbs'
import { makeMetaData } from '@/lib/utils'

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = params

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'about',
		optionalUrl: `${process.env.NEXT_PUBLIC_URL}/${locale}/about`,
	})

	return metaData
}

export default function About() {
	const locale = useLocale()
	const t = useTranslations()

	const breadcrumbs = [{ name: t('home'), href: '/' }, { name: t('about') }]

	return (
		<>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="prose mx-auto max-w-prose dark:prose-invert">
				{locale === 'de' && (
					<div>
						Die Atmosphäre im Inneren eines Schlosses ist einzigartig. Selbst wenn man ein Gebäude
						nicht von außen gesehen hat, erkennt man anhand der Räumlichkeiten und deren Ausstattung
						zumeist sofort, dass es sich um ein Schloss handelt. In den Räumen herrscht eine
						Mischung aus Geschichte, Eleganz und Opulenz. Die Möbel, Teppiche, Vorhänge, Spiegel
						sowie Gemälde in ihren antiken Rahmen erzeugen eine erhabene und gleichzeitig luxuriöse
						Aura. Man tritt heraus aus dem Alltag und wird umfangen von einer kunstvollen und
						exquisiten Stimmung. Diese beruht vor allem auch auf den Kunstwerken aus früheren
						Epochen, die in jeglicher Größe die Wände schmücken. Außerdem verleihen Tapisserien und
						Verdüren ein herrschaftliches und zugleich beruhigendes sowie warmes Raumgefühl.
						<br />
						Diese besondere Atmosphäre kann auch in einer Wohnung oder in einem Wohnhaus mit
						moderner Einrichtung durch ein prachtvolles, aus vergangenen Zeiten stammende Gemälde,
						einen Wandteppich oder einen antiken Spiegel entstehen und so zu einem „A Touch Of
						Château“ Empfinden führen.
						<br />
						Hier finden Sie Kunstwerke hauptsächlich aus der Zeit vom 17. bis zum Ende des 19.
						Jahrhunderts überwiegend aus Frankreich, Italien, Spanien, Flandern, Deutschland und
						Skandinavien. Manche sind herrschaftlich prachtvoll, andere würdevoll schlicht. Es sind
						Landschaften, Portraits, Stillleben und weitere Motive. Außerdem gibt es eine Auswahl an
						antiken Rahmen. Hinzu kommen gelegentlich Tapisserien und antike Spiegel.
						<br />
						Die Werke werden online präsentiert. Darüber hinaus ist eine persönliche Besichtigung
						nach Vereinbarung immer möglich und willkommen.
						<br />
						Wenn Sie sich für ein Werk interessieren, können Ihnen gerne zusätzliche Informationen
						zum Zustand des Kunstwerks sowie weitere Fotos übermittelt werden.
					</div>
				)}
				{locale === 'en' && (
					<div>
						The atmosphere inside a château is unique. Even if you haven&#39;t seen the building
						from the outside, you usually recognise immediately from the rooms and their furnishings
						that it is a château. The rooms are a mixture of history, elegance and opulence. The
						furniture, carpets, curtains, mirrors and paintings in their antique frames create a
						sublime yet luxurious aura. You step out of everyday life and are enveloped by an
						artistic and exquisite atmosphere. This is mainly due to the works of art from earlier
						eras that adorn the walls in all sizes. Tapestries also lend a stately and at the same
						time calming and warm feeling to the room.
						<br />
						This special atmosphere can also be created in a flat or house with modern furnishings
						by means of a magnificent painting from a bygone era, a tapestry or an antique mirror,
						resulting in a feeling of ‘A Touch Of Château’.
						<br />
						Works of art from the 17th to the end of the 19th century are presented here, mainly
						from France, Italy, Spain, Flanders, Germany and Scandinavia. Some are majestically
						splendid, others dignified and simple. There are landscapes, portraits, still lifes and
						other motifs. Also a selection of antique frames and occasional tapestries and antique
						mirrors.
						<br />
						The works are presented online. In addition, a personal viewing is always possible and
						welcome by appointment.
						<br />
						If you are interested in a work, we will be happy to provide you with additional
						information on the condition of the artwork and further photos.
					</div>
				)}
				{locale === 'fr' && (
					<div>
						L&#39;atmosphère qui règne à l&#39;intérieur d&#39;un château est unique. Même si
						l&#39;on n&#39;a pas vu le bâtiment de l&#39;extérieur, on reconnaît immédiatement
						qu&#39;il s&#39;agit d&#39;un château en observant les pièces et leur aménagement. Dans
						les pièces, il y a un mélange d&#39;histoire, d&#39;élégance et d&#39;opulence. Les
						meubles, les tapis, les rideaux, les miroirs ainsi que les tableaux dans leurs cadres
						anciens créent une aura à la fois sublime et luxueuse. On sort du quotidien et on est
						enveloppé par une atmosphère artistique et exquise. Celle-ci repose surtout sur les
						œuvres d&#39;art d&#39;époques antérieures qui décorent les murs dans toutes les
						dimensions. De même, les tapisseries et les verdures confèrent à la pièce un aspect à la
						fois majestueux, apaisant et chaleureux.
						<br />
						Cette atmosphère particulière peut également être créée dans un appartement ou une
						maison à l&#39;aménagement moderne par un magnifique tableau d&#39;époque, une
						tapisserie ou un miroir ancien, créant ainsi une sensation de « A Touch Of Château ».
						<br />
						Les œuvres d&#39;art présentées ici datent principalement de la période allant du 17e à
						la fin du 19e siècle et proviennent principalement de France, d&#39;Italie,
						d&#39;Espagne, des Flandres, d&#39;Allemagne et de Scandinavie. Certaines sont
						majestueusement somptueuses, d&#39;autres sont d&#39;une sobriété digne. Il s&#39;agit
						de paysages, de portraits, de natures mortes et de quelques autres motifs. Il y a
						également une sélection de cadres anciens. S&#39;y ajoutent parfois des tapisseries et
						des miroirs anciens.
						<br />
						Les œuvres sont présentées en ligne. En outre, une visite personnelle sur rendez-vous
						est toujours possible et bienvenue.
						<br />
						Si vous êtes intéressé par une œuvre, des informations supplémentaires sur l&#39;état de
						l&#39;œuvre ainsi que d&#39;autres photos peuvent volontiers vous être transmises.
					</div>
				)}
			</div>
		</>
	)
}
