import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const logoPath = './src/pages/og/_logo.png';

const entries = await getCollection('docs')

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

export const { getStaticPaths, GET } = await OGImageRoute({
    pages,
    param: 'slug',
    getImageOptions: (_path, page: (typeof pages)[number]) => {
        return {
            title: page.data.title,
            description: page.data.description,
            logo: {
                path: logoPath,
                size: [ 340 ]
            },
            bgGradient: [
                [35, 38, 47],
                [40, 43, 51],
            ],
            border: { color: [92, 137, 252], width: 30 },
            padding: 40,
            font: {
                title: {
                    color: [78, 138, 244],
                    size: 64,
                    weight: 'Bold',
                },
                description: {
                    color: [255, 255, 255],
                    size: 38,
                    lineHeight: 1.25,
                    weight: 'Normal',
                },
            },
        }
    },
})
