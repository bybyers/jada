'use client'


'use client'
import { ReactNode } from 'react'

// blocks
import CtaBlock from '@/components/cta-block'
import ColumnBlock from '@/components/column-block'
import PriceBlock from '@/components/price-block'
import QaBlock from '@/components/qa-block'
import ReviewBlock from '@/components/review-block'
import VideoBlock from '@/components/video-block'
import TextBlock from '@/components/text-block'

interface BodySerializers {
	[key: string]: {
		component: React.FC<any>
		wrapper?: React.FC<{ children: ReactNode }>
		args?: any
	}
}

const bodySerializers: BodySerializers = {
	ctaBlock: {
		component: CtaBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	columnBlock: {
    component: ColumnBlock,
    wrapper: ({ children }) => <>{children}</>,
  },
  priceBlock: {
    component: PriceBlock,
    wrapper: ({ children }) => <>{children}</>,
  },
  qaBlock: {
    component: QaBlock,
    wrapper: ({ children }) => <>{children}</>,
  },
  reviewBlock: {
    component: ReviewBlock,
    wrapper: ({ children }) => <>{children}</>,
  },
  videoBlock: {
    component: VideoBlock,
    wrapper: ({ children }) => <>{children}</>,
  },
  textBlock: {
    component: TextBlock,
    wrapper: ({ children }) => <>{children}</>,
  },
}

function getSerializers() {
	const res: { [key: string]: React.FC<any> } = {}
	for (const [key, value] of Object.entries(bodySerializers)) {
		if (key === 'block') continue
		const Component = value.component
		res[key] = props => <Component {...props.node} />
	}
	return res
}

export const blockSerializers = getSerializers()

interface ComponentProps {
	body: {
		_key: string
		_type: string
	}[]
}

const Sections: React.FC<ComponentProps> = ({ body }) => {
	if (!body) return <></>
	return body.map((item, index) => {
		const type = item._type
		const serializer = bodySerializers[type]
		const Component = serializer?.component
		const args = serializer?.args
		const Wrapper = serializer?.wrapper
		const bodyLength = body.length - 1

		if (!Component || !serializer)
			throw new Error(`No serializer implemented for body object: ${type}`)

		return Wrapper ? (
			<Wrapper key={item._key}>
				<Component {...item} {...args} componentIndex={index} lastComponent={bodyLength} />
			</Wrapper>
		) : (
			<Component key={item._key} {...item} {...args} componentIndex={index} />
		)
	})
}

export default Sections
