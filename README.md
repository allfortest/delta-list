## Steps to add a new project
1. Add project information in /main.json (reference /main.demo.json)
2. Add a new folder in /projects,the folder name must be project_id which you add in /main.json
3. Add the following files under the projects folder which you add in step 2 (reference /projects/_demo)
> - ***logo.png*** (project logo, aspect ratio 1:1)
> - ***list-cover.png*** (project list page cover image, aspect ratio 5:2)
> - ***detail-cover.png*** (project details page cover image, aspect ratio 5:1)
> - ***nft.png*** (the nft image, aspect ratio 5:2)
> - ***description.md***
> - ***roadmap.md***
> - ***outstanding.md***
> - ***profit-model.md***
> - ***products.md*** 
> - ***team.md***
4. Create a pull request
> Open a pull request with the changes that you've made.
5. Respond to validation checks
> Your pull request will be validated by a series of automated checks. If one of these checks fails, please resolve these issues and make sure that validation succeeds. We will review your pull request for final approval once automated validation succeeds.
6. Wait for the projects to update automatically
> Once your PR is merged, the projects will update automatically to include your project.

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

  nft_name: string
  
  chain_info: {
    id: number
    name: string
  }

  unlock_method: {
    //Linear Unlock | OneTime Unlock | Phased Unlock
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
   * Notice: please use the UTC time format YYYY-MM-DDThh:mm:ssZ
   */
  start_time: string

  /**
   * project end time (when the project was fully completed)
   * Notice: please use the UTC time format YYYY-MM-DDThh:mm:ssZ
   */
  end_time:string
}

```
