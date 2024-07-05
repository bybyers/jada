'use client'

// Tools
import Link from 'next/link'

// Types

interface RouteProps {
  children: React.ReactNode
  className?: string
	data: {
    pageRoute?: {
      slug: {
        current: string
      }
    },
    route?: string,
    anchor?: string,
    link?: string,
    blank?: boolean,
    nofollow?: boolean,
  }
}

const Route: React.FC<RouteProps> = ({ data, className, children }) => {
	if (data.pageRoute) {
		return (
			<Link
				href={`/${data.pageRoute.slug.current}`}
				target={data.blank ? '_blank' : '_self'}
        className={className}
			>
				{children}
			</Link>
		)
	} else if (data.route) {
		return (
			<Link href={`/${data.route}`} target={data.blank ? '_blank' : '_self'} className={className}>
				{children}
			</Link>
		)
	} else if (data.anchor) {
		return (
			<Link href={`#${data.anchor}`} className={className}>
				{children}
			</Link>
		)
	}else {
		return (
			<a
				href={data.link}
				target={data.blank ? '_blank' : '_self'}
				rel={data.nofollow ? 'noopener noreferrer' : 'external'}
        className={className}
			>
				{children}
			</a>
		)
	}
}

export default Route
