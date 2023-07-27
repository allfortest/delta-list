## Steps to add a new item
1. Add project information to /main.json
2. Add a new folder in /projects,the folder name must be project_id which you set in /main.json
3. Add the following files under the project folder
> - ***logo.png*** (project logo, aspect ratio 1:1)
> - ***list-cover.png*** (project list page cover image, aspect ratio 5:2)
> - ***detail-cover.png*** (project details page cover image, aspect ratio 5:1)
> - ***description.md***
> - ***roadmap.md***
> - ***outstanding.md***
> - ***profit-model.md***
> - ***products.md*** 
> - ***team.md***

```typescript
/**
 * project information need add in /main.json
 */
interface Project {
  /**
   * uniquely identifies, can use project name without space
   * This field will be used as the project route, and the resource storage directory name such as pictures|documents
   */
  id: string

  /**
   * project contract address
   */
  contract_address: string

  /**
   * public | private
   */
  pool_type: 'public' | 'private'

  /**
   * project name
   */
  title: string

  /**
   * project description
   */
  summary: string

  chain_info: {
    id: number
    name: string
  }

  unlock_method: {
    method: string
    desc: string
  }

  const_token: {
    name: string
    symbol: string
  }

  target_token: {
    name: string
    symbol: string
  }

  /**
   * 'twitter' | 'telegram' | 'discord' | 'website'
   */
  social_accounts: {
    type: 'twitter' | 'telegram' | 'discord' | 'website'
    address: string
  }[]

  /**
   * project start time (time to enter project preparation phase)
   * Notice: please use the UTC time format YYYY-MM-DDThh:mm:ssTZD
   */
  start_time: string

  /**
   * project end time (when the project was fully completed)
   * Notice: please use the UTC time format YYYY-MM-DDThh:mm:ssTZD
   */
  end_time:string
}

```