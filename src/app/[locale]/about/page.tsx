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
						Als Juristin ausgebildet und einige Jahre als Rechtsanwältin tätig, habe ich mich schon
						immer von Kreativität, Kunst und Kultur begeistern lassen. Die Freude und Bereicherung
						des alltäglichen Lebens durch Kunstwerke jeglicher Art, aber auch durch Kreationen im
						Design, der Architektur und Musik haben dazu geführt, meinen beruflichen Schwerpunkt auf
						diese Bereiche zu verlagern. <br />
						Dabei gilt mein Hauptinteresse den Kunstwerken. Diese gibt es in einer großen Vielfalt
						durch sämtliche Epochen und Stile. Hier eine Selektion und Spezialisierung auf ein oder
						zwei Epochen und Stile zu treffen, fällt mir schwer, auch wenn ich Präferenzen für die
						ein oder andere Richtung habe. Das Motto ist daher „Kunst und Kunst“ sowie „Mix Art
						Match“. Wenn ich Kunstwerke auswähle und kombiniere, geht es eher um gemeinsame Themen,
						die eine Verbindung schaffen. Dies kann zum Mix aus Epochen und Stilen führen. Aber auch
						ein bestimmter Stil oder eine Epoche kann thematisiert werden, so dass die Kunstwerke
						dann aus nur einer Phase stammen. Bei der Auswahl der hier präsentierten Werke ist die
						Signatur oder die Bekanntheit des Künstlers kein Hauptkriterium. Vielmehr geht es um die
						Ausstrahlung, die vom Werk ausgeht. Daher sind einig Kunstwerke signiert, andere weisen
						eine unleserliche oder keine Signatur auf. <br />
						Die Werke werden online präsentiert. Darüber hinaus ist eine persönliche Besichtigung
						nach Vereinbarung immer möglich und willkommen. <br />
						Wenn Sie sich für ein Werk interessieren, freue ich mich über Ihre Kontaktaufnahme. Dann
						kann ich Ihnen zusätzliche Informationen zum Zustand des Kunstwerks sowie weitere Fotos
						zukommen lassen.
					</div>
				)}
				{locale === 'en' && (
					<div>
						Trained as a lawyer and working as an attorney for several years, I have always been
						inspired by creativity, art and culture.The joy and enrichment of everyday life through
						works of art of all kinds through works of art of all kinds, but also through creations
						in design, architecture and music have led me to shift my professional focus to these
						areas. My main interest is in works of art. These exist in a great variety through all
						epochs and styles. It is difficult for me to select and specialise in one or two epochs
						and styles, even though I find it difficult to make a selection and specialise in one or
						two epochs and styles, even if I have preferences for one or the other. The motto is
						therefore &quot;art and art&quot; and &quot;mix art match&quot;. When I select and
						combine works of art combine, it is more about common themes that create a connection.
						This can lead to a mix of epochs and styles. But also a specific style or era can be
						themed so that the artworks then so that the artworks then come from only one phase. In
						the selection of the works presented here, the signature or fame of the artist is not
						the main criterion. Rather, it is about the charisma that emanates from the work.
						Therefore, some works of art are signed, others have an illegible signature or no
						signature at all. <br />
						The works are presented online. In addition, personal viewing by appointment is always
						possible and welcome. <br />
						If you are interested in a work, I would be pleased to hear from you. Then I can send
						you additional information on the condition of the artwork as well as further photos.
					</div>
				)}
				{locale === 'fr' && (
					<div>
						Juriste de formation, j&apos;ai exercé la profession d&apos;avocat pendant quelques
						années et j&apos;ai toujours été passionnée par la culture et l&apos;art. la créativité,
						l&apos;art et la culture. Le plaisir et l&apos;enrichissement de la vie quotidienne par
						des œuvres d&apos;art de toutes sortes, mais aussi par des créations dans le design,
						l&apos;architecture et la musique m&apos;ont conduit à orienter mon activité
						professionnelle vers ces domaines. Dans ce contexte, mon intérêt mon intérêt principal
						pour les œuvres d&apos;art. Il en existe une grande variété à travers tous les époques
						et de styles différents. Il est difficile de faire une sélection et de se spécialiser
						dans une ou deux époques ou styles. Il m&apos;est difficile de faire une distinction,
						même si j&apos;ai des préférences pour l&apos;une ou l&apos;autre tendance. Le site La
						devise est donc &quot;Art et art&quot; ainsi que &quot;Mix Art Match&quot;. Lorsque je
						choisis des œuvres d&apos;art et que je les combinées, il s&apos;agit plutôt de thèmes
						communs qui créent un lien. Cela peut conduire à un mélange d&apos;époques et de styles.
						Mais un style ou une époque spécifique peut aussi être thématisé. de sorte que les
						œuvres d&apos;art proviennent alors d&apos;une seule phase. Lors de la sélection des
						œuvres ici œuvres présentées, la signature ou la notoriété de l&apos;artiste n&apos;est
						pas un critère principal. Ce qui compte, c&apos;est le rayonnement qui émane de
						l&apos;œuvre. C&apos;est pourquoi certaines œuvres d&apos;art sont signées,
						d&apos;autres présentent une signature illisible ou aucune signature.
						<br />
						Les œuvres sont présentées en ligne. En outre, une visite personnelle est toujours
						possible et bienvenue sur rendez-vous. est la bienvenue.
						<br />
						Si vous êtes intéressé par une œuvre, je me réjouis de votre prise de contact. Je
						pourrai alors vous faire parvenir des informations complémentaires sur l&apos; état de
						l&apos; œuvre ainsi que des photos supplémentaires.
					</div>
				)}
			</div>
		</>
	)
}
