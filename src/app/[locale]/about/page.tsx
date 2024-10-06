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
						Schon immer haben mich Kreativität, Kunst und Kultur begeistert. Die Freude und
						Bereicherung des alltäglichen Lebens, die Kunstwerke, Design und all die anderen
						kulturellen Ausdrucksformen hervorbringen, ist enorm. Hier stehen nun Kunstwerke und
						Kunstgegenstände im Mittelpunkt. Und Kunstwerke gibt es in einer großen Vielfalt durch
						sämtliche Epochen und Stile. Eine Selektion und Spezialisierung auf ein oder zwei
						Epochen und Stile zu treffen, fällt mir schwer, auch wenn ich Präferenzen für die ein
						oder andere Richtung habe. Mein Motto ist daher „Mix Art Match“. Hinzu kommen noch
						Wandteppiche, Tapisserien und textile Kunst. Kein wesentliches Kriterium ist die
						Signatur oder die Bekanntheit des Künstlers. Es geht vielmehr um die Ausstrahlung, die
						vom Werk ausgeht. Die Werke werden online präsentiert. Darüber hinaus ist eine
						persönliche Besichtigung nach Vereinbarung immer möglich und willkommen.
						<br />
						Wenn Sie sich für ein Werk interessieren, werde ich gerne zusätzliche Informationen zum
						Zustand des Kunstwerks sowie weitere Fotos übermitteln.
					</div>
				)}
				{locale === 'en' && (
					<div>
						I have always been passionate about creativity, art and culture. The joy and enrichment
						of everyday life that works of art, design and all the other forms of cultural
						expression produce is enormous. Here, the focus is now on works of art and art objects.
						And works of art come in a great variety through all epochs and styles. It is difficult
						for me to make a selection and specialise in one or two epochs and styles, even if I
						have preferences for one or the other direction. My motto is therefore &quot;Mix Art
						Match&quot;. There are also tapestries and textile art. The signature or fame of the
						artist is not an essential criterion. Rather, it is about the charisma that emanates
						from the work. The works are presented online. In addition, personal viewing by
						appointment is always possible and welcome.
						<br />
						If you are interested in a work, I will be happy to provide additional information on
						the condition of the artwork as well as further photos.
					</div>
				)}
				{locale === 'fr' && (
					<div>
						J&#39;ai toujours été passionnée par la créativité, l&#39;art et la culture. Le plaisir
						et l&#39;enrichissement de la vie quotidienne que procurent les œuvres d&#39;art, le
						design et toutes les autres formes d&#39;expression culturelle sont énormes. Ici, les
						œuvres d&#39;art et les objets d&#39;art sont désormais au centre de l&#39;attention. Et
						il existe une grande variété d&#39;œuvres d&#39;art à travers toutes les époques et tous
						les styles. Il m&#39;est difficile de faire une sélection et de me spécialiser dans une
						ou deux époques et styles, même si j&#39;ai des préférences pour l&#39;une ou
						l&#39;autre tendance. Ma devise est donc &quot;Mix Art Match&quot;. A cela
						s&#39;ajoutent des tapisseries et de l&#39;art textile. La signature ou la notoriété de
						l&#39;artiste ne sont pas des critères essentiels. Il s&#39;agit plutôt du rayonnement
						qui émane de l&#39;œuvre. Les œuvres sont présentées en ligne. En outre, une visite
						personnelle sur rendez-vous est toujours possible et bienvenue. <br />
						Si une œuvre vous intéresse, je me ferai un plaisir de vous transmettre des informations
						complémentaires sur l&#39;état de l&#39;œuvre ainsi que des photos supplémentaires.
					</div>
				)}
			</div>
		</>
	)
}
