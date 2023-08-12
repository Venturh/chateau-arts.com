import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

import { Breadcrumbs } from '@/components/ui/breadcumbs'
import { makeMetaData } from '@/lib/utils'

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = params

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'about',
		optionalUrl: `https://elisabethwerpers.com/${locale}/about`,
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
						Kreativität, Kunst und Kultur begeistern mich immer wieder aufs Neue. Die Freude und
						Bereicherung des alltäglichen Lebens durch Kunstwerke jeglicher Art, aber auch durch
						Kreationen im Design, der Architektur und Musik haben dazu geführt, meinen beruflichen
						Schwerpunkt auf diese Bereiche zu legen. Dabei gilt mein Hauptinteresse den Kunstwerken.
						Diese gibt es in einer großen Vielfalt durch sämtliche Epochen und Stile. Hier eine
						Selektion und Spezialisierung auf ein oder zwei Epochen und Stile zu treffen, fällt mir
						schwer, auch wenn ich Präferenzen für die ein oder andere Richtung habe. Das Motto ist
						daher „Kunst und Kunst“ sowie „Mix Art Match“. Wenn ich Kunstwerke auswähle und
						kombiniere, geht es eher um gemeinsame Themen, die eine Verbindung schaffen. Dies kann
						zum Mix aus Epochen und Stilen führen. Aber auch ein bestimmter Stil oder eine Epoche
						kann thematisiert werden, so dass die Kunstwerke dann aus nur einer Phase stammen. Bei
						der Auswahl der hier präsentierten Werke ist die Signatur oder die Bekanntheit des
						Künstlers kein Hauptkriterium. Vielmehr geht es um die Ausstrahlung, die vom Werk
						ausgeht. Daher sind einig Kunstwerke signiert, andere weisen eine unleserliche oder
						keine Signatur auf. Die Werke werden online präsentiert. Darüber hinaus ist eine
						persönliche Besichtigung nach Vereinbarung immer möglich und willkommen. <br />
						Wenn Sie sich für ein Werk interessieren, freue ich mich über Ihre Kontaktaufnahme. Dann
						kann ich Ihnen zusätzliche Informationen zum Zustand des Kunstwerks sowie weitere Fotos
						zukommen lassen.
					</div>
				)}
				{locale === 'en' && (
					<div>
						Creativity, art and culture always inspire me anew. The joy and enrichment of everyday
						life through works of art of all kinds, but also through creations in design,
						architecture and music have led me to place my professional focus on these areas. My
						main interest is in works of art. These exist in a great variety through all epochs and
						styles. It is difficult for me to make a selection and specialise in one or two epochs
						and styles, even if I have preferences for one or the other direction. The motto is
						therefore &quot;art and art&quot; as well as &quot;mix art match&quot;. When I select
						and combine artworks, it is more about common themes that create a connection. This can
						lead to the mix of eras and styles. But a particular style or era can also be themed, so
						that the artworks then come from only one phase. When selecting the works presented
						here, the signature or the fame of the artist is not the main criterion. Rather, it is
						the charisma that emanates from the work that is important. Therefore, some works of art
						are signed, others have an illegible signature or no signature at all. The works are
						presented online. In addition, personal viewing by appointment is always possible and
						welcome. <br />
						If you are interested in a work, I would be pleased to hear from you. Then I can send
						you additional information on the condition of the artwork as well as further photos.
					</div>
				)}
				{locale === 'fr' && (
					<div>
						La créativité, l&#39;art et la culture ne cessent de m&#39;enthousiasmer. Le plaisir et
						l&#39;enrichissement de la vie quotidienne par des œuvres d&#39;art de toutes sortes,
						mais aussi par des créations dans le domaine du design, de l&#39;architecture et de la
						musique, m&#39;ont conduit à orienter mon activité professionnelle vers ces domaines.
						Mon intérêt principal se porte sur les œuvres d&#39;art. Celles-ci sont d&#39;une grande
						diversité et couvrent toutes les époques et tous les styles. Il m&#39;est difficile de
						faire une sélection et de me spécialiser dans une ou deux époques et styles, même si
						j&#39;ai des préférences pour l&#39;une ou l&#39;autre direction. La devise est donc
						&quot;art et art&quot; ainsi que &quot;Mix Art Match&quot;. Lorsque je choisis et
						combine des œuvres d&#39;art, il s&#39;agit plutôt de thèmes communs qui créent un lien.
						Cela peut conduire à un mélange d&#39;époques et de styles. Mais il est également
						possible de thématiser un style ou une époque spécifique, de sorte que les œuvres
						d&#39;art ne proviennent alors que d&#39;une seule phase. Lors de la sélection des
						œuvres présentées ici, la signature ou la notoriété de l&#39;artiste n&#39;est pas un
						critère principal. Ce qui compte, c&#39;est le rayonnement qui émane de l&#39;œuvre.
						C&#39;est pourquoi certaines œuvres d&#39;art sont signées, d&#39;autres présentent une
						signature illisible ou aucune signature. Les œuvres sont présentées en ligne. En outre,
						une visite personnelle sur rendez-vous est toujours possible et bienvenue. <br />
						Si vous êtes intéressé par une œuvre, je me réjouis de votre prise de contact. Je
						pourrai alors vous faire parvenir des informations
					</div>
				)}
			</div>
		</>
	)
}
