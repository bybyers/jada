'use client'

// Tools
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"


// Types
import { NavigationType } from "@/types/documents/navigation-type"

// Components
import Route from "@/components/route"

interface NavProps {
  data: NavigationType
}

const FooterNav: React.FC<NavProps> = ({
  data
}) => {

  return (
    <NavigationMenu>
			<NavigationMenuList className='flex flex-wrap gap-y-2 lg:gap-x-10'>
        {data.items?.map((item: any, index: number) => (
          <NavigationMenuItem 
            key={'header' + index}
            id={'header' + index}
          >
            <Route data={item} className='flex'>
              <Button variant="secondary" size="navigation">
                {item.title}
              </Button>
            </Route>
          </NavigationMenuItem>
        ))}

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default FooterNav